/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes an Amazon Cognito user pool configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-cognitouserpoolconfig.html}
 **/
export interface AppSyncGraphQLApiCognitoUserPoolConfig {
  /**
   * A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set, no filtering is applied.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppIdClientRegex?: Value<string>;
  /**
   * The user pool ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolId?: Value<string>;
  /**
   * The AWS Region in which the user pool was created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsRegion?: Value<string>;
}

/**
 * The `LogConfig` property type specifies the logging configuration when writing GraphQL operations and tracing to Amazon CloudWatch for an AWS AppSync GraphQL API.
 *
 * `LogConfig` is a property of the [AWS::AppSync::GraphQLApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-logconfig.html}
 **/
export interface AppSyncGraphQLApiLogConfig {
  /**
   * The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsRoleArn?: Value<string>;
  /**
   * Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeVerboseContent?: Value<boolean>;
  /**
   * The field logging level. Values can be NONE, ERROR, or ALL.
   */
  FieldLogLevel?: Value<string>;
}

/**
 * Describes an additional authentication provider.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html}
 **/
export interface AppSyncGraphQLApiAdditionalAuthenticationProvider {
  /**
   * The OIDC configuration.
   *
   * _Required_: No
   *
   * _Type_: [OpenIDConnectConfig](aws-properties-appsync-graphqlapi-openidconnectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenIDConnectConfig?: AppSyncGraphQLApiOpenIDConnectConfig;
  /**
   * Configuration for AWS Lambda function authorization.
   *
   * _Required_: No
   *
   * _Type_: [LambdaAuthorizerConfig](aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaAuthorizerConfig?: AppSyncGraphQLApiLambdaAuthorizerConfig;
  /**
   * The Amazon Cognito user pool configuration.
   *
   * _Required_: No
   *
   * _Type_: [CognitoUserPoolConfig](aws-properties-appsync-graphqlapi-cognitouserpoolconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolConfig?: AppSyncGraphQLApiCognitoUserPoolConfig;
  /**
   * The authentication type for API key, AWS Identity and Access Management, OIDC, Amazon Cognito user pools, or AWS Lambda.
   *
   * Valid Values: `API_KEY` | `AWS_IAM` | `OPENID_CONNECT` | `AMAZON_COGNITO_USER_POOLS` | `AWS_LAMBDA`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationType: Value<string>;
}

/**
 * Configuration for AWS Lambda function authorization.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html}
 **/
export interface AppSyncGraphQLApiLambdaAuthorizerConfig {
  /**
   * A regular expression for validation of tokens before the Lambda function is called.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdentityValidationExpression?: Value<string>;
  /**
   * The ARN of the Lambda function to be called for authorization. This may be a standard Lambda ARN, a version ARN (`.../v3`) or alias ARN.
   *
   * _Note_: This Lambda function must have the following resource-based policy assigned to it. When configuring Lambda authorizers in the console, this is done for you. To do so with the AWS CLI, run the following:
   *
   * `aws lambda add-permission --function-name "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal appsync.amazonaws.com --action lambda:InvokeFunction`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizerUri?: Value<string>;
  /**
   * The number of seconds a response should be cached for. The default is 5 minutes (300 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response. A value of 0 disables caching of responses.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizerResultTtlInSeconds?: Value<number>;
}

/**
 * The `OpenIDConnectConfig` property type specifies the optional authorization configuration for using an OpenID Connect compliant service with your GraphQL endpoint for an AWS AppSync GraphQL API.
 *
 * `OpenIDConnectConfig` is a property of the [AWS::AppSync::GraphQLApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html}
 **/
export interface AppSyncGraphQLApiOpenIDConnectConfig {
  /**
   * The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of `iss` in the ID token.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Issuer?: Value<string>;
  /**
   * The client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so that AWS AppSync can validate against multiple client identifiers at a time.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId?: Value<string>;
  /**
   * The number of milliseconds that a token is valid after being authenticated.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthTTL?: Value<number>;
  /**
   * The number of milliseconds that a token is valid after it's issued to a user.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IatTTL?: Value<number>;
}

/**
 * The `UserPoolConfig` property type specifies the optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint for an AWS AppSync GraphQL API.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html}
 **/
export interface AppSyncGraphQLApiUserPoolConfig {
  /**
   * A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set, no filtering is applied.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppIdClientRegex?: Value<string>;
  /**
   * The user pool ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolId?: Value<string>;
  /**
   * The AWS Region in which the user pool was created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsRegion?: Value<string>;
  /**
   * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
   *
   * When specifying Amazon Cognito user pools as the default authentication, you must set the value for `DefaultAction` to `ALLOW` if specifying `AdditionalAuthenticationProviders`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultAction?: Value<string>;
}
export interface AppSyncGraphQLApiProperties {
  /**
   * The OpenID Connect configuration.
   *
   * _Required_: No
   *
   * _Type_: [OpenIDConnectConfig](aws-properties-appsync-graphqlapi-openidconnectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenIDConnectConfig?: AppSyncGraphQLApiOpenIDConnectConfig;
  /**
   * A `LambdaAuthorizerConfig` holds configuration on how to authorize AWS AppSync API access when using the `AWS_LAMBDA` authorizer mode. Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.
   *
   * _Required_: No
   *
   * _Type_: [LambdaAuthorizerConfig](aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaAuthorizerConfig?: AppSyncGraphQLApiLambdaAuthorizerConfig;
  /**
   * A flag indicating whether to use AWS X-Ray tracing for this `GraphqlApi`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XrayEnabled?: Value<boolean>;
  /**
   * Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.
   *
   * _Required_: No
   *
   * _Type_: [UserPoolConfig](aws-properties-appsync-graphqlapi-userpoolconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolConfig?: AppSyncGraphQLApiUserPoolConfig;
  /**
   * An arbitrary set of tags (key-value pairs) for this GraphQL API.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The API name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * Security configuration for your GraphQL API. For allowed values (such as `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, or `AWS_LAMBDA`), see [Security](https://docs.aws.amazon.com/appsync/latest/devguide/security.html) in the _AWS AppSync Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationType: Value<string>;
  /**
   * The Amazon CloudWatch Logs configuration.
   *
   * _Required_: No
   *
   * _Type_: [LogConfig](aws-properties-appsync-graphqlapi-logconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogConfig?: AppSyncGraphQLApiLogConfig;
  /**
   * A list of additional authentication providers for the `GraphqlApi` API.
   *
   * _Required_: No
   *
   * _Type_: List of [AdditionalAuthenticationProvider](aws-properties-appsync-graphqlapi-additionalauthenticationprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalAuthenticationProviders?: List<AppSyncGraphQLApiAdditionalAuthenticationProvider>;
}

/**
 * The `AWS::AppSync::GraphQLApi` resource creates a new AWS AppSync GraphQL API. This is the top-level construct for your application. For more information, see [Quick Start](https://docs.aws.amazon.com/appsync/latest/devguide/quickstart.html) in the _AWS AppSync Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html}
 */
export interface AppSyncGraphQLApiResource {
  Type: 'AWS::AppSync::GraphQLApi';
  Properties: AppSyncGraphQLApiProperties;
}
