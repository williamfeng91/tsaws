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
 * The `LambdaConflictHandlerConfig` when configuring LAMBDA as the Conflict Handler.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-lambdaconflicthandlerconfig.html}
 **/
export interface AppSyncResolverLambdaConflictHandlerConfig {
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-appsyncruntime.html}
 **/
export interface AppSyncResolverAppSyncRuntime {
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

/**
 * Use the `PipelineConfig` property type to specify `PipelineConfig` for an AWS AppSync resolver.
 *
 * `PipelineConfig` is a property of the [AWS::AppSync::Resolver](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-pipelineconfig.html}
 **/
export interface AppSyncResolverPipelineConfig {
  /**
   * A list of `Function` objects.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Functions?: List<Value<string>>;
}

/**
 * Describes a Sync configuration for a resolver.
 *
 * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html}
 **/
export interface AppSyncResolverSyncConfig {
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
   * _Type_: [LambdaConflictHandlerConfig](aws-properties-appsync-resolver-lambdaconflicthandlerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaConflictHandlerConfig?: AppSyncResolverLambdaConflictHandlerConfig;
}

/**
 * The caching configuration for a resolver that has caching activated.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-cachingconfig.html}
 **/
export interface AppSyncResolverCachingConfig {
  /**
   * The caching keys for a resolver that has caching activated.
   *
   * Valid values are entries from the `$context.arguments`, `$context.source`, and `$context.identity` maps.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CachingKeys?: List<Value<string>>;
  /**
   * The TTL in seconds for a resolver that has caching activated.
   *
   * Valid values are 1–3,600 seconds.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ttl: Value<number>;
}
export interface AppSyncResolverProperties {
  /**
   * The GraphQL type that invokes this resolver.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TypeName: Value<string>;
  /**
   * Functions linked with the pipeline resolver.
   *
   * _Required_: No
   *
   * _Type_: [PipelineConfig](aws-properties-appsync-resolver-pipelineconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineConfig?: AppSyncResolverPipelineConfig;
  /**
   * The request mapping template.
   *
   * Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequestMappingTemplate?: Value<string>;
  /**
   * The response mapping template.
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
   * The `SyncConfig` for a resolver attached to a versioned data source.
   *
   * _Required_: No
   *
   * _Type_: [SyncConfig](aws-properties-appsync-resolver-syncconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SyncConfig?: AppSyncResolverSyncConfig;
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
   * _Type_: [AppSyncRuntime](aws-properties-appsync-resolver-appsyncruntime.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Runtime?: AppSyncResolverAppSyncRuntime;
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
   * The resolver data source name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceName?: Value<string>;
  /**
   * The resolver type.
   */
  Kind?: Value<string>;
  /**
   * The caching configuration for the resolver.
   *
   * _Required_: No
   *
   * _Type_: [CachingConfig](aws-properties-appsync-resolver-cachingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CachingConfig?: AppSyncResolverCachingConfig;
  /**
   * The location of a request mapping template in an Amazon S3 bucket. Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequestMappingTemplateS3Location?: Value<string>;
  /**
   * The AWS AppSync GraphQL API to which you want to attach this resolver.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApiId: Value<string>;
  /**
   * The GraphQL field on a type that invokes the resolver.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FieldName: Value<string>;
}

/**
 * The `AWS::AppSync::Resolver` resource defines the logical GraphQL resolver that you attach to fields in a schema. Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see [Resolver Mapping Template Reference](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html).
 *
 * **Note**
 *
 * When you submit an update, AWS CloudFormation updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CloudFormation template. Changing the Amazon S3 file content without changing a property value will not result in an update operation.
 *
 * See [Update Behaviors of Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the _AWS CloudFormation User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html}
 */
export interface AppSyncResolverResource {
  Type: 'AWS::AppSync::Resolver';
  Properties: AppSyncResolverProperties;
}
