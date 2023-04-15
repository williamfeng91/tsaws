import { ensureDir, writeFile } from 'fs-extra';
import { forEach, merge } from 'lodash';
import fetch, { Response } from 'node-fetch';
import path from 'node:path';

export interface TypeProperties {
  Type?: string;
  ItemType?: string;
  PrimitiveType?: string;
  PrimitiveItemType?: string;
  Documentation: string;
  Required: boolean;
  UpdateType: string;
}

export type TypePropertiesMap = {
  [key: string]: TypeProperties;
};

export interface ResourceType {
  Documentation: string;
  Properties: TypePropertiesMap;
  Attributes?: {
    [attributeName: string]: {
      Type?: string;
      PrimitiveType?: string;
    };
  };
}

export type ResourceTypeMap = {
  [resourceFullName: string]: ResourceType;
};

export interface Schema {
  ResourceSpecificationVersion: string;
  ResourceTypes: ResourceTypeMap;
  PropertyTypes: {
    [propertyName: string]: ResourceType | TypeProperties;
  };
}

export type MergedSchema = {
  schema: Schema;
  schemaVersions: {
    [key: string]: string;
  };
  resourceSources: {
    [key: string]: string[];
  };
};

const schemaUrls: { [key: string]: string } = {
  'ap-south-1':
    'https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-northeast-3':
    'https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-northeast-2':
    'https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-southeast-1':
    'https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-southeast-2':
    'https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ap-northeast-1':
    'https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'ca-central-1':
    'https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-central-1':
    'https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-west-1':
    'https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-west-2':
    'https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'eu-west-3':
    'https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'sa-east-1':
    'https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-east-1':
    'https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-east-2':
    'https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-west-1':
    'https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
  'us-west-2':
    'https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json',
};

const schemaDir = path.join(__dirname, '../schema');

async function main() {
  const schemas: { [key: string]: Schema } = {};
  const schemaVersions: { [key: string]: string } = {};
  const resourceSources: { [key: string]: string[] } = {};

  const mergedSchemaPromises = Object.keys(schemaUrls).map((region) => {
    const schemaUrl = schemaUrls[region];

    return fetch(schemaUrl)
      .then((res: Response) => res.json() as Promise<Schema>)
      .then((schema) => {
        schemas[region] = schema;
        schemaVersions[region] = schema.ResourceSpecificationVersion;

        forEach(schema.ResourceTypes, (resource: ResourceType, resourceFullName: string) => {
          if (!resourceSources[resourceFullName]) {
            resourceSources[resourceFullName] = [];
          }

          resourceSources[resourceFullName].push(region);
        });
      });
  });

  await Promise.all(mergedSchemaPromises);
  const mergedSchema = Object.keys(schemaUrls)
    .sort()
    .reduce((acc, region) => {
      return merge(acc, schemas[region]);
    }, {} as Schema);

  await ensureDir(schemaDir);
  await Promise.all([
    ...Object.entries(schemas).map(([region, schema]) =>
      writeFile(path.join(schemaDir, `${region}.json`), JSON.stringify(schema, null, 2), 'utf-8'),
    ),
    writeFile(
      path.join(schemaDir, 'merged-schema.json'),
      JSON.stringify(
        {
          schema: mergedSchema,
          schemaVersions,
          resourceSources,
        },
        null,
        2,
      ),
      'utf-8',
    ),
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
