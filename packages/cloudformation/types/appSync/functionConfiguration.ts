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

/**
 * Describes a Sync configuration for a resolver.
 *
 * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-syncconfig.html}
 **/
export interface AppSyncFunctionConfigurationSyncConfig {
  /**
   * The Conflict Resolution strategy to perform in the event of a conflict.
   */
  ConflictHandler?: Value<string>;
  /**
   * The Conflict Detection strategy to use.
   */
  ConflictDetection: Value<string>;
  /**
   * The `LambdaConflictHandlerConfig` when configuring `LAMBDA` as the Conflict Handler.
   *
   * _Required_: No
   *
   * _Type_: [LambdaConflictHandlerConfig](aws-properties-appsync-functionconfiguration-lambdaconflicthandlerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaConflictHandlerConfig?: AppSyncFunctionConfigurationLambdaConflictHandlerConfig;
}

/**
 * The `LambdaConflictHandlerConfig` object when configuring `LAMBDA` as the Conflict Handler.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-lambdaconflicthandlerconfig.html}
 **/
export interface AppSyncFunctionConfigurationLambdaConflictHandlerConfig {
  /**
   * The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaConflictHandlerArn?: Value<string>;
}

/**
 * Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-appsyncruntime.html}
 **/
export interface AppSyncFunctionConfigurationAppSyncRuntime {
  /**
   * The `version` of the runtime to use. Currently, the only allowed version is `1.0.0`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuntimeVersion: Value<string>;
  /**
   * The `name` of the runtime to use. Currently, the only allowed value is `APPSYNC_JS`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}
export interface AppSyncFunctionConfigurationProperties {
  /**
   * The `Function` description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The `Function` request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequestMappingTemplate?: Value<string>;
  /**
   * The `Function` response mapping template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseMappingTemplate?: Value<string>;
  /**
   * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a `BatchInvoke` operation.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxBatchSize?: Value<number>;
  /**
   * Describes a Sync configuration for a resolver.
   *
   * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
   *
   * _Required_: No
   *
   * _Type_: [SyncConfig](aws-properties-appsync-functionconfiguration-syncconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SyncConfig?: AppSyncFunctionConfigurationSyncConfig;
  /**
   * The `resolver` code that contains the request and response functions. When code is used, the `runtime` is required. The runtime value must be `APPSYNC_JS`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Code?: Value<string>;
  /**
   * The name of the function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The location of a response mapping template in an Amazon S3 bucket. Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseMappingTemplateS3Location?: Value<string>;
  /**
   * Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   *
   * _Required_: No
   *
   * _Type_: [AppSyncRuntime](aws-properties-appsync-functionconfiguration-appsyncruntime.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Runtime?: AppSyncFunctionConfigurationAppSyncRuntime;
  /**
   * The Amazon S3 endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeS3Location?: Value<string>;
  /**
   * The name of data source this function will attach.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceName: Value<string>;
  /**
   * The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionVersion?: Value<string>;
  /**
   * Describes a Sync configuration for a resolver.
   *
   * Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequestMappingTemplateS3Location?: Value<string>;
  /**
   * The AWS AppSync GraphQL API that you want to attach using this function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApiId: Value<string>;
}

/**
 * The `AWS::AppSync::FunctionConfiguration` resource defines the functions in GraphQL APIs to perform certain operations. You can use pipeline resolvers to attach functions. For more information, see [Pipeline Resolvers](https://docs.aws.amazon.com/appsync/latest/devguide/pipeline-resolvers.html) in the _AWS AppSync Developer Guide_.
 *
 * **Note**
 *
 * When you submit an update, AWS CloudFormation updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the AWS CloudFormation template. Changing the Amazon S3 file content without changing a property value will not result in an update operation.
 *
 * See [Update Behaviors of Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the _AWS CloudFormation User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html}
 */
export interface AppSyncFunctionConfigurationResource {
  Type: 'AWS::AppSync::FunctionConfiguration';
  Properties: AppSyncFunctionConfigurationProperties;
}
