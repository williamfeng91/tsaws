/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Details on SNS that are required to send the notification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-snsconfiguration.html}
 **/
export interface TimestreamScheduledQuerySnsConfiguration {
  /**
   * SNS topic ARN that the scheduled query status notifications will be sent to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TopicArn: Value<string>;
}

/**
 * Configuration to write data into Timestream database and table. This configuration allows the user to map the query result select columns into the destination table columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html}
 **/
export interface TimestreamScheduledQueryTimestreamConfiguration {
  /**
   * Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeColumn: Value<string>;
  /**
   * Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableName: Value<string>;
  /**
   * This is to allow mapping column(s) from the query result to the dimension in the destination table.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DimensionMapping](aws-properties-timestream-scheduledquery-dimensionmapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DimensionMappings: List<TimestreamScheduledQueryDimensionMapping>;
  /**
   * Specifies how to map measures to multi-measure records.
   *
   * _Required_: No
   *
   * _Type_: List of [MixedMeasureMapping](aws-properties-timestream-scheduledquery-mixedmeasuremapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MixedMeasureMappings?: List<TimestreamScheduledQueryMixedMeasureMapping>;
  /**
   * Name of the measure column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeasureNameColumn?: Value<string>;
  /**
   * Name of Timestream database to which the query result will be written.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatabaseName: Value<string>;
  /**
   * Multi-measure mappings.
   *
   * _Required_: No
   *
   * _Type_: [MultiMeasureMappings](aws-properties-timestream-scheduledquery-multimeasuremappings.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MultiMeasureMappings?: TimestreamScheduledQueryMultiMeasureMappings;
}

/**
 * Configuration of the schedule of the query.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-scheduleconfiguration.html}
 **/
export interface TimestreamScheduledQueryScheduleConfiguration {
  /**
   * An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScheduleExpression: Value<string>;
}

/**
 * Configuration required for error reporting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-errorreportconfiguration.html}
 **/
export interface TimestreamScheduledQueryErrorReportConfiguration {
  /**
   * The S3 configuration for the error reports.
   *
   * _Required_: Yes
   *
   * _Type_: [S3Configuration](aws-properties-timestream-scheduledquery-s3configuration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Configuration: TimestreamScheduledQueryS3Configuration;
}

/**
 * MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html}
 **/
export interface TimestreamScheduledQueryMixedMeasureMapping {
  /**
   * Refers to the value of measure_name in a result row. This field is required if MeasureNameColumn is provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeasureName?: Value<string>;
  /**
   * This field refers to the source column from which measure-value is to be read for result materialization.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceColumn?: Value<string>;
  /**
   * Target measure name to be used. If not provided, the target measure name by default would be measure-name if provided, or sourceColumn otherwise.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetMeasureName?: Value<string>;
  /**
   * Type of the value that is to be read from sourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeasureValueType: Value<string>;
  /**
   * Required when measureValueType is MULTI. Attribute mappings for MULTI value measures.
   *
   * _Required_: No
   *
   * _Type_: List of [MultiMeasureAttributeMapping](aws-properties-timestream-scheduledquery-multimeasureattributemapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MultiMeasureAttributeMappings?: List<TimestreamScheduledQueryMultiMeasureAttributeMapping>;
}

/**
 * Notification configuration for a scheduled query. A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-notificationconfiguration.html}
 **/
export interface TimestreamScheduledQueryNotificationConfiguration {
  /**
   * Details on SNS configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [SnsConfiguration](aws-properties-timestream-scheduledquery-snsconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnsConfiguration: TimestreamScheduledQuerySnsConfiguration;
}

/**
 * Details on S3 location for error reports that result from running a query.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-s3configuration.html}
 **/
export interface TimestreamScheduledQueryS3Configuration {
  /**
   * Name of the S3 bucket under which error reports will be created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[a-z0-9][.-a-z0-9]{1,61}[a-z0-9]`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName: Value<string>;
  /**
   * Prefix for the error report key. Timestream by default adds the following prefix to the error report path.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `928`
   *
   * _Pattern_: `[a-zA-Z0-9|!-_*'()]([a-zA-Z0-9]|[!-_*'()/.])+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ObjectKeyPrefix?: Value<string>;
  /**
   * Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE_S3 as default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `SSE_KMS | SSE_S3`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionOption?: Value<string>;
}

/**
 * Configuration used for writing the output of a query.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-targetconfiguration.html}
 **/
export interface TimestreamScheduledQueryTargetConfiguration {
  /**
   * Configuration needed to write data into the Timestream database and table.
   *
   * _Required_: Yes
   *
   * _Type_: [TimestreamConfiguration](aws-properties-timestream-scheduledquery-timestreamconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimestreamConfiguration: TimestreamScheduledQueryTimestreamConfiguration;
}

/**
 * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasuremappings.html}
 **/
export interface TimestreamScheduledQueryMultiMeasureMappings {
  /**
   * The name of the target multi-measure name in the derived table. This input is required when measureNameColumn is not provided. If MeasureNameColumn is provided, then value from that column will be used as multi-measure name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetMultiMeasureName?: Value<string>;
  /**
   * Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MultiMeasureAttributeMapping](aws-properties-timestream-scheduledquery-multimeasureattributemapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MultiMeasureAttributeMappings: List<TimestreamScheduledQueryMultiMeasureAttributeMapping>;
}

/**
 * This type is used to map column(s) from the query result to a dimension in the destination table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-dimensionmapping.html}
 **/
export interface TimestreamScheduledQueryDimensionMapping {
  /**
   * Type for the dimension: VARCHAR
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DimensionValueType: Value<string>;
  /**
   * Column name from query result.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Attribute mapping for MULTI value measures.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemapping.html}
 **/
export interface TimestreamScheduledQueryMultiMeasureAttributeMapping {
  /**
   * Source column from where the attribute value is to be read.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceColumn: Value<string>;
  /**
   * Custom name to be used for attribute name in derived table. If not provided, source column name would be used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetMultiMeasureAttributeName?: Value<string>;
  /**
   * Type of the attribute to be read from the source column.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeasureValueType: Value<string>;
}
export interface TimestreamScheduledQueryProperties {
  /**
   * The ARN for the IAM role that Timestream will assume when running the scheduled query.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScheduledQueryExecutionRoleArn: Value<string>;
  /**
   * Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
   *
   * _Required_: Yes
   *
   * _Type_: [ErrorReportConfiguration](aws-properties-timestream-scheduledquery-errorreportconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ErrorReportConfiguration: TimestreamScheduledQueryErrorReportConfiguration;
  /**
   * Schedule configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [ScheduleConfiguration](aws-properties-timestream-scheduledquery-scheduleconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScheduleConfiguration: TimestreamScheduledQueryScheduleConfiguration;
  /**
   * Scheduled query target store configuration.
   *
   * _Required_: No
   *
   * _Type_: [TargetConfiguration](aws-properties-timestream-scheduledquery-targetconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetConfiguration?: TimestreamScheduledQueryTargetConfiguration;
  /**
   * The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with _alias/_
   *
   * If ErrorReportConfiguration uses `SSE_KMS` as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The query string to run. Parameter names can be specified in the query string `@` character followed by an identifier. The named Parameter `@scheduled_runtime` is reserved and can be used in the query to get the time at which the query is scheduled to run.
   *
   * The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of `@scheduled_runtime` paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the `@scheduled_runtime` parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  QueryString: Value<string>;
  /**
   * Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
   *
   * _Required_: Yes
   *
   * _Type_: [NotificationConfiguration](aws-properties-timestream-scheduledquery-notificationconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NotificationConfiguration: TimestreamScheduledQueryNotificationConfiguration;
  /**
   * A name for the query. Scheduled query names must be unique within each Region.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScheduledQueryName?: Value<string>;
  /**
   * Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request.
   */
  ClientToken?: Value<string>;
  /**
   * A list of key-value pairs to label the scheduled query.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the `ScheduledQueryExecutionRoleArn` parameter to run the query. You can use the `NotificationConfiguration` parameter to configure notification for your scheduled query operations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html}
 */
export interface TimestreamScheduledQueryResource {
  Type: 'AWS::Timestream::ScheduledQuery';
  Properties: TimestreamScheduledQueryProperties;
}
