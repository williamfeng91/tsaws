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
 * Use the `RelationalDatabaseConfig` property type to specify `RelationalDatabaseConfig` for an AWS AppSync data source.
 *
 * `RelationalDatabaseConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html}
 **/
export interface AppSyncDataSourceRelationalDatabaseConfig {
  /**
   * Information about the Amazon RDS resource.
   *
   * _Required_: No
   *
   * _Type_: [RdsHttpEndpointConfig](aws-properties-appsync-datasource-rdshttpendpointconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RdsHttpEndpointConfig?: AppSyncDataSourceRdsHttpEndpointConfig;
  /**
   * The type of relational data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelationalDatabaseSourceType: Value<string>;
}

/**
 * Use the `AwsIamConfig` property type to specify `AwsIamConfig` for a AWS AppSync authorizaton.
 *
 * `AwsIamConfig` is a property of the [AWS AppSync DataSource AuthorizationConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig-authorizationconfig.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-awsiamconfig.html}
 **/
export interface AppSyncDataSourceAwsIamConfig {
  /**
   * The signing Region for AWS Identity and Access Management authorization.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SigningRegion?: Value<string>;
  /**
   * The signing service name for AWS Identity and Access Management authorization.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SigningServiceName?: Value<string>;
}

/**
 * The `OpenSearchServiceConfig` property type specifies the `AwsRegion` and `Endpoints` for an Amazon OpenSearch Service domain in your account for an AWS AppSync data source.
 *
 * `OpenSearchServiceConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-opensearchserviceconfig.html}
 **/
export interface AppSyncDataSourceOpenSearchServiceConfig {
  /**
   * The AWS Region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsRegion: Value<string>;
  /**
   * The endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint: Value<string>;
}

/**
 * The `DynamoDBConfig` property type specifies the `AwsRegion` and `TableName` for an Amazon DynamoDB table in your account for an AWS AppSync data source.
 *
 * `DynamoDBConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html}
 **/
export interface AppSyncDataSourceDynamoDBConfig {
  /**
   * The table name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The AWS Region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsRegion: Value<string>;
  /**
   * Set to TRUE to use Conflict Detection and Resolution with this data source.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Versioned?: Value<boolean>;
  /**
   * The `DeltaSyncConfig` for a versioned datasource.
   *
   * _Required_: No
   *
   * _Type_: [DeltaSyncConfig](aws-properties-appsync-datasource-deltasyncconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeltaSyncConfig?: AppSyncDataSourceDeltaSyncConfig;
  /**
   * Set to `TRUE` to use AWS Identity and Access Management with this data source.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseCallerCredentials?: Value<boolean>;
}

/**
 * The `AuthorizationConfig` property type specifies the authorization type and configuration for an AWS AppSync http data source.
 *
 * `AuthorizationConfig` is a property of the [AWS AppSync DataSource HttpConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-authorizationconfig.html}
 **/
export interface AppSyncDataSourceAuthorizationConfig {
  /**
   * The AWS Identity and Access Management settings.
   *
   * _Required_: No
   *
   * _Type_: [AwsIamConfig](aws-properties-appsync-datasource-awsiamconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsIamConfig?: AppSyncDataSourceAwsIamConfig;
  /**
   * The authorization type that the HTTP endpoint requires.
   */
  AuthorizationType: Value<string>;
}

/**
 * The `LambdaConfig` property type specifies the Lambda function ARN for an AWS AppSync data source.
 *
 * `LambdaConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-lambdaconfig.html}
 **/
export interface AppSyncDataSourceLambdaConfig {
  /**
   * The ARN for the Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionArn: Value<string>;
}

/**
 * Use the `HttpConfig` property type to specify `HttpConfig` for an AWS AppSync data source.
 *
 * `HttpConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html}
 **/
export interface AppSyncDataSourceHttpConfig {
  /**
   * The endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint: Value<string>;
  /**
   * The authorization configuration.
   *
   * _Required_: No
   *
   * _Type_: [AuthorizationConfig](aws-properties-appsync-datasource-authorizationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizationConfig?: AppSyncDataSourceAuthorizationConfig;
}

/**
 * The data source. This can be an API destination, resource, or AWS service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-eventbridgeconfig.html}
 **/
export interface AppSyncDataSourceEventBridgeConfig {
  /**
   * The event bus pipeline's ARN. For more information about event buses, see [EventBridge event buses](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBusArn: Value<string>;
}

/**
 * Use the `RdsHttpEndpointConfig` property type to specify the `RdsHttpEndpoint` for an AWS AppSync relational database.
 *
 * `RdsHttpEndpointConfig` is a property of the [AWS AppSync DataSource RelationalDatabaseConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html}
 **/
export interface AppSyncDataSourceRdsHttpEndpointConfig {
  /**
   * AWS Region for RDS HTTP endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsRegion: Value<string>;
  /**
   * Logical schema name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schema?: Value<string>;
  /**
   * Logical database name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * Amazon RDS cluster Amazon Resource Name (ARN).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DbClusterIdentifier: Value<string>;
  /**
   * The ARN for database credentials stored in AWS Secrets Manager.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsSecretStoreArn: Value<string>;
}

/**
 * The `ElasticsearchConfig` property type specifies the `AwsRegion` and `Endpoints` for an Amazon OpenSearch Service domain in your account for an AWS AppSync data source.
 *
 * ElasticsearchConfig is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
 *
 * As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use _OpenSearchServiceConfig_ to specify an OpenSearch Service data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-elasticsearchconfig.html}
 **/
export interface AppSyncDataSourceElasticsearchConfig {
  /**
   * The AWS Region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsRegion: Value<string>;
  /**
   * The endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint: Value<string>;
}

/**
 * Describes a Delta Sync configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html}
 **/
export interface AppSyncDataSourceDeltaSyncConfig {
  /**
   * The number of minutes that an Item is stored in the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseTableTTL: Value<string>;
  /**
   * The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeltaSyncTableTTL: Value<string>;
  /**
   * The Delta Sync table name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeltaSyncTableName: Value<string>;
}
export interface AppSyncDataSourceProperties {
  /**
   * The type of the data source.
   */
  Type: Value<string>;
  /**
   * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
   *
   * _Required_: No
   *
   * _Type_: [OpenSearchServiceConfig](aws-properties-appsync-datasource-opensearchserviceconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenSearchServiceConfig?: AppSyncDataSourceOpenSearchServiceConfig;
  /**
   * The description of the data source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The AWS Identity and Access Management service role ARN for the data source. The system assumes this role when accessing the data source.
   *
   * Required if `Type` is specified as `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `AMAZON_EVENTBRIDGE`, or `AMAZON_OPENSEARCH_SERVICE`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceRoleArn?: Value<string>;
  /**
   * An EventBridge configuration that contains a valid ARN of an event bus.
   *
   * _Required_: No
   *
   * _Type_: [EventBridgeConfig](aws-properties-appsync-datasource-eventbridgeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBridgeConfig?: AppSyncDataSourceEventBridgeConfig;
  /**
   * Endpoints for an HTTP data source.
   *
   * _Required_: No
   *
   * _Type_: [HttpConfig](aws-properties-appsync-datasource-httpconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpConfig?: AppSyncDataSourceHttpConfig;
  /**
   * Relational Database configuration of the relational database data source.
   *
   * _Required_: No
   *
   * _Type_: [RelationalDatabaseConfig](aws-properties-appsync-datasource-relationaldatabaseconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelationalDatabaseConfig?: AppSyncDataSourceRelationalDatabaseConfig;
  /**
   * An ARN of a Lambda function in valid ARN format. This can be the ARN of a Lambda function that exists in the current account or in another account.
   *
   * _Required_: No
   *
   * _Type_: [LambdaConfig](aws-properties-appsync-datasource-lambdaconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaConfig?: AppSyncDataSourceLambdaConfig;
  /**
   * Unique AWS AppSync GraphQL API identifier where this data source will be created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApiId: Value<string>;
  /**
   * Friendly name for you to identify your AppSync data source after creation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * AWS Region and TableName for an Amazon DynamoDB table in your account.
   *
   * _Required_: No
   *
   * _Type_: [DynamoDBConfig](aws-properties-appsync-datasource-dynamodbconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDBConfig?: AppSyncDataSourceDynamoDBConfig;
  /**
   * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
   *
   * As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use _OpenSearchServiceConfig_ to specify an OpenSearch Service data source.
   *
   * _Required_: No
   *
   * _Type_: [ElasticsearchConfig](aws-properties-appsync-datasource-elasticsearchconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticsearchConfig?: AppSyncDataSourceElasticsearchConfig;
}

/**
 * The `AWS::AppSync::DataSource` resource creates data sources for resolvers in AWS AppSync to connect to, such as Amazon DynamoDB, AWS Lambda, and Amazon OpenSearch Service. Resolvers use these data sources to fetch data when clients make GraphQL calls.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html}
 */
export interface AppSyncDataSourceResource {
  Type: 'AWS::AppSync::DataSource';
  Properties: AppSyncDataSourceProperties;
}
