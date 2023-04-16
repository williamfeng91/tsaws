import fs from 'fs-extra';
import { camelCase, chain, filter, forEach, map, pickBy, some } from 'lodash';
import path from 'node:path';
import * as Throttle from 'promise-parallel-throttle';

import docs from '../docs/docs.json';
import mergedSchema from '../schema/merged-schema.json';
import type { Docs, PropertyDocs, ResourceDocs } from './crawl-docs';
import type {
  MergedSchema,
  ResourceType,
  ResourceTypeMap,
  Schema,
  TypeProperties,
  TypePropertiesMap,
} from './download-schemas';

type BasicTypeSuffix = 'Type' | 'ItemType';

const outputDir = path.join(__dirname, '../types');

const { resources: resourceDocsMap, properties: propertyDocsMap } =
  docs as Docs;

function formatDocText(indent: number, text?: string) {
  const identText = ''.padEnd(indent, ' ');
  return (
    text
      // remove leading and trailing spaces and new lines
      ?.replace(/(^\s*\n*|\s*\n*$)/g, '')
      // escape end of comment
      .replace(/\*\//g, '*\\/')
      .replace(/\s*\n+\s*/g, `\n${identText} *\n${identText} * `) || ''
  );
}

function adjustedCamelCase(input: string): string {
  return input === 'IoT' ? 'iot' : camelCase(input);
}

function determineTypeScriptType(
  property: TypeProperties,
  propertyName: string,
  typeSuffix: BasicTypeSuffix,
  prefix = ''
): string | undefined {
  if (property[typeSuffix] === 'List') {
    return `List<${determineTypeScriptType(
      property,
      propertyName,
      'ItemType',
      prefix
    )}>`;
  }
  if (property[typeSuffix] === 'Map') {
    return `{ [key: string]: ${determineTypeScriptType(
      property,
      propertyName,
      'ItemType',
      prefix
    )} }`;
  }
  if (property[typeSuffix] === 'Tag') {
    return 'ResourceTag';
  }
  if (property[typeSuffix]) {
    return innerTypeName('.' + property[typeSuffix], prefix);
  }

  if (
    property[typeSuffix === 'Type' ? 'PrimitiveType' : 'PrimitiveItemType'] ===
    undefined
  ) {
    return undefined;
  }
  let primitiveType =
    property[
      typeSuffix === 'Type' ? 'PrimitiveType' : 'PrimitiveItemType'
    ]!.toLowerCase();
  if (['json', 'map'].includes(primitiveType)) {
    return '{ [key: string]: any }';
  }
  if (['integer', 'double', 'long'].includes(primitiveType)) {
    primitiveType = 'number';
  }
  if (primitiveType === 'timestamp') {
    primitiveType = 'string'; // TODO consider Date.toISOString()
  }
  return `Value<${primitiveType}>`;
}

function propertiesEntries(
  properties: TypePropertiesMap,
  prefix: string = '',
  useNonNullAssertion: boolean = false
) {
  const nonOptionalPostfix = useNonNullAssertion ? '!' : '';
  return filter(
    map(properties, (property: TypeProperties, propertyName: string) => {
      const scriptType = determineTypeScriptType(
        property,
        propertyName,
        'Type',
        prefix
      );
      if (scriptType === undefined) {
        // @TODO fix this,
        // In JSON definit in AWS::DataBrew::Recipe.Action -> Properties -> Parameters
        // PrimitiveType is undefined
        return [propertyName, undefined] as const;
      }
      return [
        propertyName,
        `${propertyName}${
          property.Required ? nonOptionalPostfix : '?'
        }: ${scriptType};`,
      ] as const;
    }),
    (tuple) => !!tuple[1]
  );
}

function hasTags(properties: { [key: string]: TypeProperties }): boolean {
  return (
    Object.keys(properties).includes('Tags') ||
    some(properties, (p) => p.Type === 'List' && p.ItemType === 'Tag')
  );
}

function innerTypeName(innerTypeFullName: string, prefix = ''): string {
  const [, innerTypeName] = innerTypeFullName.split('.');

  return prefix + innerTypeName;
}

function generateInnerInterface(
  name: string,
  resourceType: ResourceType,
  resourceDocs: ResourceDocs | undefined,
  prefix = ''
): string {
  return `/**
 * ${formatDocText(0, resourceDocs?.text)}
 * {@link ${resourceType.Documentation}}
 **/
export interface ${name} {
${propertiesEntries(resourceType.Properties, prefix)
  .map(([propertyName, line]) => {
    const propertyDocsText = formatDocText(
      2,
      resourceDocs?.properties[propertyName]?.text
    );
    return `${
      propertyDocsText
        ? `  /**
   * ${propertyDocsText}
   */
  `
        : '  '
    }${line}`;
  })
  .join('\n')}
}`;
}

function generateInnerType(
  name: string,
  type: TypeProperties,
  propertyDocs: PropertyDocs | undefined,
  prefix = ''
) {
  return `/**
 * ${formatDocText(0, propertyDocs?.text)}
 * {@link ${type.Documentation}}
 **/
export type ${name} = ${determineTypeScriptType(type, '_t', 'Type', prefix)};`;
}

function generateTopLevelInterface(
  namespace: string,
  typeName: string,
  resource: ResourceType,
  resourceDocs: ResourceDocs | undefined
) {
  const properties = resource.Properties || {};
  return `export interface ${namespace}${typeName}Properties {
${propertiesEntries(properties, `${namespace}${typeName}`)
  .map(([propertyName, line]) => {
    const propertyDocsText = formatDocText(
      2,
      resourceDocs?.properties[propertyName]?.text
    );
    return `${
      propertyDocsText
        ? `  /**
   * ${propertyDocsText}
   */
  `
        : '  '
    }${line}`;
  })
  .join('\n')}
}

/**
 * ${formatDocText(0, resourceDocs?.text)}
 * {@link ${resource.Documentation}}
 */
export interface ${namespace}${typeName}Resource {
  Type: 'AWS::${namespace}::${typeName}';
  Properties: ${namespace}${typeName}Properties;
}`;
}

async function generateFile(
  fileHeader: string,
  namespace: string,
  resourceName: string,
  resource: ResourceType,
  innerTypes: Schema['PropertyTypes'],
  resourceDocs: ResourceDocs | undefined
) {
  let innerHasTags = false;
  const innerTypesTemplates = Object.entries(innerTypes)
    .filter(([, innerType]: [string, any]) => {
      const hasProperties = !!innerType.Properties;
      const hasPrimitiveType = !!innerType.PrimitiveType;
      const hasPrimitiveItemType = !!innerType.PrimitiveItemType;
      const hasType = !!innerType.Type;

      return (
        hasProperties || hasPrimitiveType || hasPrimitiveItemType || hasType
      );
    })
    .map(([innerTypeFullName, innerType]) => {
      const resolvedInnerTypeName = innerTypeName(
        innerTypeFullName,
        `${namespace}${resourceName}`
      );
      if ((innerType as ResourceType).Properties) {
        innerHasTags =
          innerHasTags || hasTags((innerType as ResourceType).Properties);
        return generateInnerInterface(
          resolvedInnerTypeName,
          innerType as ResourceType,
          propertyDocsMap[innerTypeFullName] as ResourceDocs,
          `${namespace}${resourceName}`
        );
      } else {
        return generateInnerType(
          resolvedInnerTypeName,
          innerType as TypeProperties,
          propertyDocsMap[innerTypeFullName],
          `${namespace}${resourceName}`
        );
      }
    });

  const properties = resource.Properties || {};

  const resourceImports = [];
  if (innerHasTags || hasTags(properties)) {
    resourceImports.push('ResourceTag');
  }

  const generatedInterface = generateTopLevelInterface(
    namespace,
    resourceName,
    resource,
    resourceDocs
  );

  const template = `${fileHeader}
import { List, Value } from '../../shared-types/dataTypes';
${
  resourceImports.length > 0
    ? `import { ${resourceImports.join(
        ', '
      )} } from '../../shared-types/resource';
`
    : ''
}
${innerTypesTemplates.join('\n\n')}
${generatedInterface}
`;

  await fs.ensureDir(
    path.resolve(outputDir, `./${adjustedCamelCase(namespace)}`)
  );

  await fs.writeFile(
    path.resolve(
      outputDir,
      `./${adjustedCamelCase(namespace)}/${camelCase(resourceName)}.d.ts`
    ),
    template,
    { encoding: 'utf8' }
  );
}

async function generateIndexReexportFile(
  fileHeader: string,
  namespace: string,
  resourceTypeNames: string[]
) {
  const template = `${fileHeader}

${resourceTypeNames
  .map((typeName) => `export * from './${camelCase(typeName)}';`)
  .join('\n')}
`;

  await fs.writeFile(
    path.resolve(outputDir, `./${adjustedCamelCase(namespace)}/index.d.ts`),
    template,
    {
      encoding: 'utf8',
    }
  );
}

async function generateGrandIndexFile(
  fileHeader: string,
  indexContent: { [key: string]: string[] }
) {
  const importedResourcTypes: string[] = [];
  const lines: string[] = [];

  forEach(
    indexContent,
    (dependentResourceTypeNames: string[], namespace: string) => {
      const resourceTypes = dependentResourceTypeNames.map(
        (t) => `${namespace}${t}Resource`
      );
      lines.push(
        `import { ${resourceTypes.join(',')} } from './${adjustedCamelCase(
          namespace
        )}';`
      );
      importedResourcTypes.push(...resourceTypes);
    }
  );
  lines.push('');
  forEach(
    indexContent,
    (dependentResourceTypeNames: string[], namespace: string) => {
      lines.push(`export * from './${adjustedCamelCase(namespace)}';`);
    }
  );

  const template = `${fileHeader}
${lines.join('\n')}

export type Resource =
${importedResourcTypes.map((t) => `  | ${t}`).join('\n')};
`;

  await fs.writeFile(path.resolve(outputDir, './index.d.ts'), template, {
    encoding: 'utf8',
  });
}

function generateFileHeader(
  regions: string[],
  schemaVersions: { [key: string]: string }
) {
  regions.sort();
  return `/**
 * Supported regions:
${regions
  .map((region) => ` * - ${region} (version ${schemaVersions[region]})`)
  .join('\n')}
 */`;
}

async function generateResourceAttributeMapFile(
  resourceTypes: ResourceTypeMap
) {
  const lines = chain(resourceTypes)
    .entries()
    .map(([resourceFullName, { Attributes: attributes }]) => {
      const attributeNames = Object.keys(attributes || {});
      if (attributeNames.length === 0) return '';
      return `  '${resourceFullName}': ${attributeNames
        .map((n) => `'${n}'`)
        .join(' | ')};`;
    })
    .filter(Boolean)
    .value();
  const template = `import type {Resource} from './index';

type BaseResourceAttributeMap = {
  [K in Resource['Type']]: string;
};

export interface ResourceAttributeMap extends BaseResourceAttributeMap {
${lines.join('\n')}
}
`;
  await fs.writeFile(
    path.resolve(outputDir, './resource-attributes.d.ts'),
    template,
    {
      encoding: 'utf-8',
    }
  );
}

async function generateFilesFromSchema(
  schema: Schema,
  resourceSources: { [key: string]: string[] },
  schemaVersions: { [key: string]: string }
) {
  const regionsUsed = new Set<string>();
  const indexContent: { [key: string]: string[] } = {};

  const tasks: (() => Promise<any>)[] = [];
  forEach(
    schema.ResourceTypes,
    (resource: ResourceType, resourceFullName: string) => {
      const [, namespace, typeName] = resourceFullName.split('::');
      // Avoid file name clash with index.d.ts
      const sanitizedTypeName =
        typeName.toLowerCase() === 'index'
          ? `${namespace}${typeName}`
          : typeName;

      const fileHeader = generateFileHeader(
        resourceSources[resourceFullName],
        schemaVersions
      );
      resourceSources[resourceFullName].forEach((region) =>
        regionsUsed.add(region)
      );

      const resourcePropertyTypes = pickBy(
        schema.PropertyTypes,
        (propertyType, propertyFullName: string) =>
          propertyFullName.startsWith(resourceFullName + '.')
      );

      indexContent[namespace] = indexContent[namespace] || [];
      indexContent[namespace].push(sanitizedTypeName);

      tasks.push(() =>
        generateFile(
          fileHeader,
          namespace,
          sanitizedTypeName,
          resource,
          resourcePropertyTypes,
          resourceDocsMap[resourceFullName]
        )
      );
    }
  );

  const indexFileHeader = generateFileHeader([...regionsUsed], schemaVersions);

  forEach(indexContent, (resourceTypeNames: string[], namespace: string) => {
    tasks.push(() =>
      generateIndexReexportFile(indexFileHeader, namespace, resourceTypeNames)
    );
  });

  tasks.push(() => generateGrandIndexFile(indexFileHeader, indexContent));

  tasks.push(() => generateResourceAttributeMapFile(schema.ResourceTypes));

  await Throttle.all(tasks, {
    maxInProgress: 100,
  });
}

async function main() {
  const { schema, schemaVersions, resourceSources } =
    mergedSchema as MergedSchema;
  await generateFilesFromSchema(schema, resourceSources, schemaVersions);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
