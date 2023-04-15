// import * as parser from '@babel/parser';
// import traverse from '@babel/traverse'
import swc from '@swc/core';
import Visitor from '@swc/core/Visitor';

export async function collect(code: string) {
  const module = await swc.parse(code);
  const visitor = new CollectorVisitor();
  const permissions = visitor.collectFromModule(module);
  return permissions;
}

class CollectorVisitor extends Visitor {
  private permissions: {
    [action: string]: string[];
  } = {};
  private v2Bindings: {
    [imported: string]: swc.Identifier[];
  } = {};

  private addV2Binding(imported: string, local: swc.Identifier) {
    this.v2Bindings[imported] = this.v2Bindings[imported] || [];
    this.v2Bindings[imported].push(local);
  }

  collectFromModule(m: swc.Module) {
    console.dir(m, {
      depth: null,
    });
    this.visitModule(m);
    return this.permissions;
  }

  visitImportDeclaration(n: swc.ImportDeclaration): swc.ImportDeclaration {
    switch (n.source.value) {
      case 'aws-sdk': {
        n.specifiers.forEach((specifier) => {
          switch (specifier.type) {
            case 'ImportDefaultSpecifier':
            case 'ImportNamespaceSpecifier': {
              this.addV2Binding('default', specifier.local);
              break;
            }
            case 'ImportSpecifier': {
              if (specifier.imported) {
                this.addV2Binding(specifier.imported.value, specifier.local);
              }
              break;
            }
            default:
              break;
          }
        });
        break;
      }
      default:
        break;
    }
    return n;
  }

  // visitCallExpression(n: swc.CallExpression): swc.Expression {
  //   console.log('visitCallExpression', n);
  //   return n;
  // }

  visitNewExpression(n: swc.NewExpression): swc.Expression {
    if (
      n.callee.type === 'MemberExpression' &&
      n.callee.object.type === 'Identifier'
    ) {
      console.log('Same', this.v2Bindings.default, n.callee.object);
    }
    return n;
  }
}
