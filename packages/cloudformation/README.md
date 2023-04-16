<div align="center">
  <h1>@tsaws/cloudformation</h1>
  <h3>Typesafe CloudFormation resources.</h3>
</div>

<br />

## Features

- All CloudFormation resources and properties typed.
- Official CloudFormation docs as JSDoc for every type and property.
- Typed intrinsic functions.
- Works with Serverless Framework.

## Installation

```sh
npm install --save @tsaws/lambda
```

## Basic usage

Get autocompletion for resource types and properties

```ts
import type { Resource } from '@tsaws/cloudformation';

const resources = {
  MyResource: {
    // Start typing and get autocompletion suggestions!
  },
} satisfies {
  [resourceName: string]: Resource;
};
```

`GetAtt` helper function

```ts
import { GetAtt, Resource } from '@tsaws/cloudformation';

const resources = {
  MyTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      TableName: 'MyTable',
      // ...
    },
  },
} satisfies {
  [resourceName: string]: Resource;
};

const resourceReferencingMyTable = {
  Type: 'SomeResource',
  Properties: {
    TableArn: GetAtt(resources, 'MyTable', 'Arn'),
  },
} satisfies Resource;
```

With Serverless Framework

```ts
// serverless.ts
import { GetAtt } from '@tsaws/cloudformation';
import type { AWS, Resources } from '@tsaws/cloudformation/serverless';

const allResources = {
  LambdaRole: {
    Type: 'AWS::IAM::Role',
    Properties: {
      // ...
    },
  },
} satisfies Resources;

module.exports = {
  service: 'my-service',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
  },
  functions: {
    listSubscriptions: {
      handler: 'hello.handler',
      role: GetAtt(allResources, 'LambdaRole', 'Arn'),
    },
  },
  resources: {
    Resources: allResources,
  },
} satisfies AWS;
```
