/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
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
 * The dataset whose latest contents are used as input to the notebook or application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentversionvalue.html}
 **/
export interface IoTAnalyticsDatasetDatasetContentVersionValue {
  /**
   * The name of the dataset whose latest contents are used as input to the notebook or application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetName: Value<string>;
}

/**
 * The value of the variable as a structure that specifies an output file URI.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-outputfileurivalue.html}
 **/
export interface IoTAnalyticsDatasetOutputFileUriValue {
  /**
   * The URI of the location where dataset contents are stored, usually the URI of a file in an S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[w.-]{1,255}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileName: Value<string>;
}

/**
 * Information which is used to filter message data, to segregate it according to the time frame in which it arrives.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-filter.html}
 **/
export interface IoTAnalyticsDatasetFilter {
  /**
   * Used to limit data to that which has arrived since the last execution of the action.
   *
   * _Required_: No
   *
   * _Type_: [DeltaTime](aws-properties-iotanalytics-dataset-deltatime.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeltaTime?: IoTAnalyticsDatasetDeltaTime;
}

/**
 * Information needed to run the "containerAction" to produce data set contents.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-action.html}
 **/
export interface IoTAnalyticsDatasetAction {
  /**
   * The name of the data set action by which data set contents are automatically created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9_]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionName: Value<string>;
  /**
   * Information which allows the system to run a containerized application in order to create the data set contents. The application must be in a Docker container along with any needed support libraries.
   *
   * _Required_: No
   *
   * _Type_: [ContainerAction](aws-properties-iotanalytics-dataset-containeraction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerAction?: IoTAnalyticsDatasetContainerAction;
  /**
   * An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.
   *
   * _Required_: No
   *
   * _Type_: [QueryAction](aws-properties-iotanalytics-dataset-queryaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryAction?: IoTAnalyticsDatasetQueryAction;
}

/**
 * A structure that contains the name and configuration information of a late data rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-latedatarule.html}
 **/
export interface IoTAnalyticsDatasetLateDataRule {
  /**
   * The information needed to configure the late data rule.
   *
   * _Required_: Yes
   *
   * _Type_: [LateDataRuleConfiguration](aws-properties-iotanalytics-dataset-latedataruleconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleConfiguration: IoTAnalyticsDatasetLateDataRuleConfiguration;
  /**
   * The name of the late data rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9_]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleName?: Value<string>;
}

/**
 * The destination to which dataset contents are delivered.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentdeliveryruledestination.html}
 **/
export interface IoTAnalyticsDatasetDatasetContentDeliveryRuleDestination {
  /**
   * Configuration information for delivery of dataset contents to AWS IoT Events.
   *
   * _Required_: No
   *
   * _Type_: [IotEventsDestinationConfiguration](aws-properties-iotanalytics-dataset-ioteventsdestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotEventsDestinationConfiguration?: IoTAnalyticsDatasetIotEventsDestinationConfiguration;
  /**
   * Configuration information for delivery of dataset contents to Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-iotanalytics-dataset-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3DestinationConfiguration?: IoTAnalyticsDatasetS3DestinationConfiguration;
}

/**
 * How long, in days, message data is kept.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-retentionperiod.html}
 **/
export interface IoTAnalyticsDatasetRetentionPeriod {
  /**
   * The number of days that message data is kept. The `unlimited` parameter must be false.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfDays?: Value<number>;
  /**
   * If true, message data is kept indefinitely.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unlimited?: Value<boolean>;
}

/**
 * An instance of a variable to be passed to the `containerAction` execution. Each variable must have a name and a value given by one of `stringValue`, `datasetContentVersionValue`, or `outputFileUriValue`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-variable.html}
 **/
export interface IoTAnalyticsDatasetVariable {
  /**
   * The value of the variable as a structure that specifies a dataset content version.
   *
   * _Required_: No
   *
   * _Type_: [DatasetContentVersionValue](aws-properties-iotanalytics-dataset-datasetcontentversionvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetContentVersionValue?: IoTAnalyticsDatasetDatasetContentVersionValue;
  /**
   * The value of the variable as a double (numeric).
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DoubleValue?: Value<number>;
  /**
   * The value of the variable as a structure that specifies an output file URI.
   *
   * _Required_: No
   *
   * _Type_: [OutputFileUriValue](aws-properties-iotanalytics-dataset-outputfileurivalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputFileUriValue?: IoTAnalyticsDatasetOutputFileUriValue;
  /**
   * The name of the variable.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VariableName: Value<string>;
  /**
   * The value of the variable as a string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValue?: Value<string>;
}

/**
 * Used to limit data to that which has arrived since the last execution of the action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-deltatime.html}
 **/
export interface IoTAnalyticsDatasetDeltaTime {
  /**
   * An expression by which the time of the message data might be determined. This can be the name of a timestamp field or a SQL expression that is used to derive the time the message data was generated.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeExpression: Value<string>;
  /**
   * The number of seconds of estimated in-flight lag time of message data. When you create dataset contents using message data from a specified timeframe, some message data might still be in flight when processing begins, and so do not arrive in time to be processed. Use this field to make allowances for the in flight time of your message data, so that data not processed from a previous timeframe is included with the next timeframe. Otherwise, missed message data would be excluded from processing during the next timeframe too, because its timestamp places it within the previous timeframe.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OffsetSeconds: Value<number>;
}

/**
 * Configuration information for coordination with AWS Glue, a fully managed extract, transform and load (ETL) service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-glueconfiguration.html}
 **/
export interface IoTAnalyticsDatasetGlueConfiguration {
  /**
   * The name of the table in your AWS Glue Data Catalog that is used to perform the ETL operations. An AWS Glue Data Catalog table contains partitioned data and descriptions of data sources and targets.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `150`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The name of the database in your AWS Glue Data Catalog in which the table is located. An AWS Glue Data Catalog database contains metadata tables.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `150`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName: Value<string>;
}

/**
 * A structure that contains the configuration information of a delta time session window.
 *
 * [https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html](https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html) specifies a time interval. You can use `DeltaTime` to create dataset contents with data that has arrived in the data store since the last execution. For an example of `DeltaTime`, see [ Creating a SQL dataset with a delta window (CLI)](https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6) in the _ AWS IoT Analytics User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-deltatimesessionwindowconfiguration.html}
 **/
export interface IoTAnalyticsDatasetDeltaTimeSessionWindowConfiguration {
  /**
   * A time interval. You can use `timeoutInMinutes` so that AWS IoT Analytics can batch up late data notifications that have been generated since the last execution. AWS IoT Analytics sends one batch of notifications to Amazon CloudWatch Events at one time.
   *
   * For more information about how to write a timestamp expression, see [Date and Time Functions and Operators](https://prestodb.io/docs/current/functions/datetime.html), in the _Presto 0.172 Documentation_.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `60`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutInMinutes: Value<number>;
}

/**
 * When dataset contents are created, they are delivered to destination specified here.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-datasetcontentdeliveryrule.html}
 **/
export interface IoTAnalyticsDatasetDatasetContentDeliveryRule {
  /**
   * The destination to which dataset contents are delivered.
   *
   * _Required_: Yes
   *
   * _Type_: [DatasetContentDeliveryRuleDestination](aws-properties-iotanalytics-dataset-datasetcontentdeliveryruledestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: IoTAnalyticsDatasetDatasetContentDeliveryRuleDestination;
  /**
   * The name of the dataset content delivery rules entry.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntryName?: Value<string>;
}

/**
 * The information needed to configure a delta time session window.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-latedataruleconfiguration.html}
 **/
export interface IoTAnalyticsDatasetLateDataRuleConfiguration {
  /**
   * The information needed to configure a delta time session window.
   *
   * _Required_: No
   *
   * _Type_: [DeltaTimeSessionWindowConfiguration](aws-properties-iotanalytics-dataset-deltatimesessionwindowconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeltaTimeSessionWindowConfiguration?: IoTAnalyticsDatasetDeltaTimeSessionWindowConfiguration;
}

/**
 * Information needed to run the "containerAction" to produce data set contents.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-containeraction.html}
 **/
export interface IoTAnalyticsDatasetContainerAction {
  /**
   * The values of variables used within the context of the execution of the containerized application (basically, parameters passed to the application). Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue".
   *
   * _Required_: No
   *
   * _Type_: List of [Variable](aws-properties-iotanalytics-dataset-variable.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variables?: List<IoTAnalyticsDatasetVariable>;
  /**
   * The ARN of the role which gives permission to the system to access needed resources in order to run the "containerAction". This includes, at minimum, permission to retrieve the data set contents which are the input to the containerized application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRoleArn: Value<string>;
  /**
   * The ARN of the Docker container stored in your account. The Docker container contains an application and needed support libraries and is used to generate data set contents.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Image: Value<string>;
  /**
   * Configuration of the resource which executes the "containerAction".
   *
   * _Required_: Yes
   *
   * _Type_: [ResourceConfiguration](aws-properties-iotanalytics-dataset-resourceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceConfiguration: IoTAnalyticsDatasetResourceConfiguration;
}

/**
 * An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-queryaction.html}
 **/
export interface IoTAnalyticsDatasetQueryAction {
  /**
   * Pre-filters applied to message data.
   *
   * _Required_: No
   *
   * _Type_: List of [Filter](aws-properties-iotanalytics-dataset-filter.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters?: List<IoTAnalyticsDatasetFilter>;
  /**
   * An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlQuery: Value<string>;
}

/**
 * Information about the versioning of dataset contents.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-versioningconfiguration.html}
 **/
export interface IoTAnalyticsDatasetVersioningConfiguration {
  /**
   * How many versions of dataset contents are kept. The `unlimited` parameter must be `false`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxVersions?: Value<number>;
  /**
   * If true, unlimited versions of dataset contents are kept.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unlimited?: Value<boolean>;
}

/**
 * The schedule for when to trigger an update.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-schedule.html}
 **/
export interface IoTAnalyticsDatasetSchedule {
  /**
   * The expression that defines when to trigger an update. For more information, see [ Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html) in the Amazon CloudWatch documentation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression: Value<string>;
}

/**
 * Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-s3destinationconfiguration.html}
 **/
export interface IoTAnalyticsDatasetS3DestinationConfiguration {
  /**
   * Configuration information for coordination with AWS Glue, a fully managed extract, transform and load (ETL) service.
   *
   * _Required_: No
   *
   * _Type_: [GlueConfiguration](aws-properties-iotanalytics-dataset-glueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueConfiguration?: IoTAnalyticsDatasetGlueConfiguration;
  /**
   * The name of the S3 bucket to which dataset contents are delivered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9.-_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * The key of the dataset contents object in an S3 bucket. Each object has a key that is a unique identifier. Each object has exactly one key.
   *
   * You can create a unique key with the following options:
   */
  Key: Value<string>;
  /**
   * The ARN of the role that grants AWS IoT Analytics permission to interact with your Amazon S3 and AWS Glue resources.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * The "DatasetTrigger" that specifies when the data set is automatically updated.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-trigger.html}
 **/
export interface IoTAnalyticsDatasetTrigger {
  /**
   * The "Schedule" when the trigger is initiated.
   *
   * _Required_: No
   *
   * _Type_: [Schedule](aws-properties-iotanalytics-dataset-schedule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: IoTAnalyticsDatasetSchedule;
  /**
   * Information about the data set whose content generation triggers the new data set content generation.
   *
   * _Required_: No
   *
   * _Type_: [TriggeringDataset](aws-properties-iotanalytics-dataset-triggeringdataset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggeringDataset?: IoTAnalyticsDatasetTriggeringDataset;
}

/**
 * Configuration information for delivery of dataset contents to AWS IoT Events.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-ioteventsdestinationconfiguration.html}
 **/
export interface IoTAnalyticsDatasetIotEventsDestinationConfiguration {
  /**
   * The name of the AWS IoT Events input to which dataset contents are delivered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputName: Value<string>;
  /**
   * The ARN of the role that grants AWS IoT Analytics permission to deliver dataset contents to an AWS IoT Events input.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * The configuration of the resource used to execute the `containerAction`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-resourceconfiguration.html}
 **/
export interface IoTAnalyticsDatasetResourceConfiguration {
  /**
   * The size, in GB, of the persistent storage available to the resource instance used to execute the `containerAction` (min: 1, max: 50).
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeSizeInGB: Value<number>;
  /**
   * The type of the compute resource used to execute the `containerAction`. Possible values are: `ACU_1` (vCPU=4, memory=16 GiB) or `ACU_2` (vCPU=8, memory=32 GiB).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ACU_1 | ACU_2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeType: Value<string>;
}

/**
 * Information about the dataset whose content generation triggers the new dataset content generation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-dataset-triggeringdataset.html}
 **/
export interface IoTAnalyticsDatasetTriggeringDataset {
  /**
   * The name of the data set whose content generation triggers the new data set content generation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetName: Value<string>;
}
export interface IoTAnalyticsDatasetProperties {
  /**
   * The `DatasetAction` objects that automatically create the dataset contents.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Action](aws-properties-iotanalytics-dataset-action.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<IoTAnalyticsDatasetAction>;
  /**
   * A list of data rules that send notifications to CloudWatch, when data arrives late. To specify `lateDataRules`, the dataset must use a [DeltaTimer](https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html) filter.
   *
   * _Required_: No
   *
   * _Type_: List of [LateDataRule](aws-properties-iotanalytics-dataset-latedatarule.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LateDataRules?: List<IoTAnalyticsDatasetLateDataRule>;
  /**
   * The name of the dataset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatasetName?: Value<string>;
  /**
   * When dataset contents are created they are delivered to destinations specified here.
   *
   * _Required_: No
   *
   * _Type_: List of [DatasetContentDeliveryRule](aws-properties-iotanalytics-dataset-datasetcontentdeliveryrule.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentDeliveryRules?: List<IoTAnalyticsDatasetDatasetContentDeliveryRule>;
  /**
   * The `DatasetTrigger` objects that specify when the dataset is automatically updated.
   *
   * _Required_: No
   *
   * _Type_: List of [Trigger](aws-properties-iotanalytics-dataset-trigger.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Triggers?: List<IoTAnalyticsDatasetTrigger>;
  /**
   * Optional. How many versions of dataset contents are kept. If not specified or set to null, only the latest version plus the latest succeeded version (if they are different) are kept for the time period specified by the `retentionPeriod` parameter. For more information, see [ Keeping Multiple Versions of AWS IoT Analytics datasets](https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions) in the _ AWS IoT Analytics User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [VersioningConfiguration](aws-properties-iotanalytics-dataset-versioningconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersioningConfiguration?: IoTAnalyticsDatasetVersioningConfiguration;
  /**
   * Optional. How long, in days, message data is kept for the dataset.
   *
   * _Required_: No
   *
   * _Type_: [RetentionPeriod](aws-properties-iotanalytics-dataset-retentionperiod.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionPeriod?: IoTAnalyticsDatasetRetentionPeriod;
  /**
   * Metadata which can be used to manage the data set.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The AWS::IoTAnalytics::Dataset resource stores data retrieved from a data store by applying a `queryAction` (an SQL query) or a `containerAction` (executing a containerized application). The data set can be populated manually by calling `CreateDatasetContent` or automatically according to a `trigger` you specify. For more information, see [ How to Use AWS IoT Analytics](https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how) in the _AWS IoT Analytics User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-dataset.html}
 */
export interface IoTAnalyticsDatasetResource {
  Type: 'AWS::IoTAnalytics::Dataset';
  Properties: IoTAnalyticsDatasetProperties;
}
