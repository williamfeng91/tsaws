import { GetAtt } from '@tsaws/cloudformation';
import type { AWS, Resources } from '@tsaws/cloudformation/serverless';

const dynamodb = {
  subscriptionsTableName: 'Subscriptions',
  subscriptionsTableUserIndex: 'userIndex',
};

const resources = {
  SubscriptionsTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      TableName: dynamodb.subscriptionsTableName,
      KeySchema: [
        {
          AttributeName: 'id',
          KeyType: 'HASH',
        },
      ],
      GlobalSecondaryIndexes: [
        {
          IndexName: dynamodb.subscriptionsTableUserIndex,
          KeySchema: [
            {
              AttributeName: 'userId',
              KeyType: 'HASH',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
      ],
      AttributeDefinitions: [
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
        {
          AttributeName: 'userId',
          AttributeType: 'S',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
    },
  },
} satisfies Resources;
const allResources = {
  ...resources,
  LambdaRole: {
    Type: 'AWS::IAM::Role',
    Properties: {
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
            Action: 'sts:AssumeRole',
          },
        ],
      },
      Policies: [
        {
          PolicyName: 'root',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: ['dynamodb:*'],
                Resource: [
                  GetAtt(resources, 'SubscriptionsTable', 'Arn'),
                  {
                    'Fn::Sub': [
                      '${TableArn}/index/*',
                      {
                        TableArn: GetAtt(
                          resources,
                          'SubscriptionsTable',
                          'Arn',
                        ),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
} satisfies Resources;

module.exports = {
  service: 'cloudformation-serverless-v3',
  frameworkVersion: '3',
  package: {
    individually: true,
  },
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'ap-southeast-2',
    versionFunctions: false,
    logRetentionInDays: 1,
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      exclude: ['@aws-sdk/*'],
    },
  },
  functions: {
    listSubscriptions: {
      handler: 'subscription-service/list-subscriptions.listSubscriptions',
      role: GetAtt(allResources, 'LambdaRole', 'Arn'),
      environment: {
        SUBSCRIPTIONS_TABLE_NAME: dynamodb.subscriptionsTableName,
        SUBSCRIPTIONS_TABLE_USER_INDEX: dynamodb.subscriptionsTableUserIndex,
      },
    },
  },
  resources: {
    Resources: allResources,
  },
} satisfies AWS;
