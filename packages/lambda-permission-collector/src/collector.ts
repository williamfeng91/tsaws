import * as parser from '@babel/parser';
import traverse, { NodePath, Scope } from '@babel/traverse';
import type {
  Identifier,
  ImportDeclaration,
  NewExpression,
} from '@babel/types';
import assert from 'assert';
import { impossible } from './utils';

export async function collect(code: string) {
  const ast = parser.parse(code, {
    sourceType: 'module',
  });

  const permissions: {
    [action: string]: string[];
  } = {};
  const v2Bindings: {
    [imported: string]: Identifier[];
  } = {};
  const addV2Binding = (imported: string, local: Identifier) => {
    v2Bindings[imported] = v2Bindings[imported] || [];
    v2Bindings[imported].push(local);
  };

  traverse(ast, {
    // ImportDeclaration(path) {
    //   switch (path.node.source.value) {
    //     case 'aws-sdk': {
    //       path.node.specifiers.forEach((specifier) => {
    //         switch (specifier.type) {
    //           case 'ImportDefaultSpecifier':
    //           case 'ImportNamespaceSpecifier': {
    //             const binding = path.scope.bindings[specifier.local.name];
    //             assert(
    //               binding,
    //               `Missing binding for imported ${specifier.local.name}`
    //             );
    //             binding.referencePaths.forEach((refPath) => {
    //               const { parent: refParent } = refPath;
    //               console.log(
    //                 refPath.parentPath?.node,
    //                 refPath.parentPath?.parent
    //               );
    //               switch (refParent.type) {
    //                 case 'MemberExpression': {
    //                   // Only support `AWS.S3` or `AWS['S3']`. Cannot be calculated.
    //                   const propertyName =
    //                     refParent.property.type === 'Identifier'
    //                       ? refParent.property.name
    //                       : refParent.property.type === 'StringLiteral'
    //                       ? refParent.property.value
    //                       : null;
    //                   if (propertyName) {
    //                     findNewExpression(refPath.parentPath, propertyName);
    //                   }
    //                   break;
    //                 }
    //                 case 'VariableDeclaration':
    //                   break;
    //                 default:
    //                   break;
    //               }
    //             });
    //             addV2Binding('default', specifier.local);
    //             break;
    //           }
    //           case 'ImportSpecifier': {
    //             if (specifier.importKind === 'value') {
    //               const imported =
    //                 specifier.imported.type === 'Identifier'
    //                   ? specifier.imported.name
    //                   : specifier.imported.type === 'StringLiteral'
    //                   ? specifier.imported.value
    //                   : impossible(specifier.imported);
    //               addV2Binding(imported, specifier.local);
    //             }
    //           }
    //           default:
    //             break;
    //         }
    //       });
    //       break;
    //     }
    //     default:
    //       break;
    //   }
    // },
    NewExpression(path) {
      // console.log(path.scope.bindings);
      const { callee } = path.node;
      switch (callee.type) {
        // new S3()
        case 'Identifier': {
          // Trace back and see if it's a named import from AWS SDK
          console.log(callee.type, callee);
          const importDeclaration = traceImport(path.scope, callee.name);
          break;
        }
        // new AWS.S3()
        case 'MemberExpression': {
          console.log(callee.type, callee);
          // Trace back the object of the callee and see if it's a default or namespace export from AWS SDK
          if (callee.object.type !== 'Identifier') {
            // Only support direct reference to the import binding
          } else {
            const importDeclaration = traceImport(
              path.scope,
              callee.object.name
            );
          }
          break;
        }
        default:
          break;
      }
    },
  });

  return permissions;
}

function traceImport(
  scope: Scope,
  targetIdentifierName: string
): ImportDeclaration | null {
  const binding = scope.bindings[targetIdentifierName];
  console.log('traceImport', targetIdentifierName);
  // console.log(
  //   identifier.name,
  //   binding,
  //   binding.references,
  //   binding.referencePaths.map((refPath) => refPath.parent)
  // );
  if (!binding) return null;

  console.log(targetIdentifierName, binding.path.node, binding.path.parent);
  switch (binding.path.parent.type) {
    case 'VariableDeclaration': {
      // Reassignment
      let assignedIdentifierName: string | null = null;
      for (const declaration of binding.path.parent.declarations) {
        if (
          declaration.id.type === 'Identifier' &&
          declaration.id.name === targetIdentifierName
        ) {
          if (declaration.init?.type === 'Identifier') {
            assignedIdentifierName = declaration.init.name;
          }
        } else if (declaration.id.type === 'ObjectPattern') {
          declaration.id.properties.forEach((prop) => {
            if (
              prop.type === 'ObjectProperty' &&
              prop.key.type === 'Identifier' &&
              prop.value.type === 'Identifier' &&
              prop.value.name === targetIdentifierName
            ) {
              assignedIdentifierName = prop.key.name;
            }
          });
        }
        if (assignedIdentifierName) break;
      }
      if (assignedIdentifierName) {
        return traceImport(binding.path.scope, assignedIdentifierName);
      }
      break;
    }
    default:
      break;
  }

  let importDeclaration = null;
  // for (const refPath of binding.referencePaths) {
  //   if (refPath.parent.type === 'Identifier') {
  //     importDeclaration = traceImport(refPath.scope, refPath.parent);
  //     if (importDeclaration) break;
  //   }
  // }

  return importDeclaration;
}
