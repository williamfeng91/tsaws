import { ensureDir, readFile, writeFile } from 'fs-extra';
import MarkdownIt from 'markdown-it';
import path from 'node:path';
import * as Throttle from 'promise-parallel-throttle';

import mergedSchema from '../schema/merged-schema.json';
import type { MergedSchema, ResourceType } from './download-schemas';

export type PropertyDocs = {
  text: string;
};
export type ResourceDocs = {
  text: string;
  properties: {
    [propertyName: string]: PropertyDocs;
  };
};

export type Docs = {
  resources: {
    [resourceFullName: string]: ResourceDocs;
  };
  properties: {
    [propertyFullName: string]: ResourceDocs | PropertyDocs;
  };
};

const md = new MarkdownIt();

const docsDir = path.join(__dirname, '../docs');

function formatInlineContent(content: string) {
  return content
    .replace(/<a[^>]*>[^<]*<\/a>/g, '')
    .replace(/\\/g, '')
    .replace(/(^\s*\n*|\s*\n*$)/g, '');
}

async function getResourceMd(fileName: string) {
  const content = await readFile(
    path.join(__dirname, '../doc-source', fileName),
    'utf-8'
  );
  const parsed = md.parse(content, {});

  const h1CloseIndex = parsed.findIndex(
    (t) => t.type === 'heading_close' && t.tag === 'h1'
  );
  const result: ResourceDocs = {
    text: '',
    properties: {},
  };
  for (const token of parsed.slice(h1CloseIndex + 1)) {
    if (token.type === 'heading_open') break;
    // if (token.level !== 1) continue;
    if (token.type !== 'inline') continue;
    if (!result.text) {
      result.text = formatInlineContent(token.content);
    } else {
      result.text += `\n${formatInlineContent(token.content)}`;
    }
  }
  const propertiesInlineIndex = parsed.findIndex(
    (t) => t.type === 'inline' && t.content.startsWith('Properties<a')
  );
  let currPropertyName: string | undefined;
  for (const token of parsed.slice(propertiesInlineIndex + 1)) {
    if (token.type === 'heading_open') break;
    // if (token.level !== 1) continue;
    if (token.type !== 'inline') continue;
    const matches =
      token.level === 1 ? token.content.match(/^\s*`([^`]+)`\s*\n*/) : null;
    if (!matches?.[1]) {
      if (currPropertyName) {
        result.properties[currPropertyName].text += `\n${formatInlineContent(
          token.content
        )}`;
      } else {
        console.log(
          'Invalid property doc',
          fileName,
          currPropertyName,
          token.content,
          '\n'
        );
      }
      continue;
    }
    currPropertyName = matches[1];
    result.properties[currPropertyName] = {
      text: formatInlineContent(token.content.replace(matches[0], '')),
    };
  }
  return result;
}

async function getPropertyMd(fileName: string) {
  const content = await readFile(
    path.join(__dirname, '../doc-source', fileName),
    'utf-8'
  );
  const parsed = md.parse(content, {});

  const h1CloseIndex = parsed.findIndex(
    (t) => t.type === 'heading_close' && t.tag === 'h1'
  );
  const result: PropertyDocs = {
    text: '',
  };
  for (const token of parsed.slice(h1CloseIndex + 1)) {
    if (token.type === 'heading_open') break;
    if (token.level !== 1) continue;
    if (token.type !== 'inline') continue;
    if (!result.text) {
      result.text = formatInlineContent(token.content);
    } else {
      result.text += `\n${formatInlineContent(token.content)}`;
    }
  }
  return result;
}

async function main() {
  await ensureDir(docsDir);
  const resourceDocs: Docs['resources'] = {};
  const propertyDocs: Docs['properties'] = {};

  const schema = (mergedSchema as MergedSchema).schema;
  const notFound: {
    [resourceFullName: string]: string;
  } = {};
  const resourceTasks = Object.entries(schema.ResourceTypes).map(
    ([resourceFullName, resourceType]) => {
      return async () => {
        try {
          const [, namespace, typeName] = resourceFullName.split('::');
          const fileName =
            `aws-resource-${namespace}-${typeName}.md`.toLowerCase();
          const result = await getResourceMd(fileName);
          resourceDocs[resourceFullName] = result;
        } catch (error) {
          if ((error as any).code === 'ENOENT') {
            notFound[resourceFullName] = (error as any).message;
            return;
          }
          console.log(error);
        }
      };
    }
  );
  const propertyTasks = Object.entries(schema.PropertyTypes).map(
    ([propertyFullName, resourceType]) => {
      return async () => {
        try {
          const [resourceFullName, propertyName] = propertyFullName.split('.');
          const [, namespace, typeName] = resourceFullName.split('::');
          const fileName =
            `aws-properties-${namespace}-${typeName}-${propertyName}.md`.toLowerCase();
          if ((resourceType as ResourceType).Properties) {
            const result = await getResourceMd(fileName);
            propertyDocs[propertyFullName] = result;
          } else {
            const result = await getPropertyMd(fileName);
            propertyDocs[propertyFullName] = result;
          }
        } catch (error) {
          if ((error as any).code === 'ENOENT') {
            notFound[propertyFullName] = (error as any).message;
            return;
          }
          console.log(error);
        }
      };
    }
  );
  await Throttle.all([...resourceTasks, ...propertyTasks], {
    maxInProgress: 100,
  });

  await writeFile(
    path.join(docsDir, 'docs.json'),
    JSON.stringify(
      {
        resources: Object.fromEntries(
          Object.entries(resourceDocs).sort((a, b) => a[0].localeCompare(b[0]))
        ),
        properties: Object.fromEntries(
          Object.entries(propertyDocs).sort((a, b) => a[0].localeCompare(b[0]))
        ),
        notFound,
      },
      null,
      2
    ),
    'utf-8'
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
