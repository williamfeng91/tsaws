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
 * The configuration of connectors and user-defined functions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationCustomArtifactConfiguration {
  /**
   * The parameters required to fully specify a Maven reference.
   *
   * _Required_: No
   *
   * _Type_: [MavenReference](aws-properties-kinesisanalyticsv2-application-mavenreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MavenReference?: KinesisAnalyticsV2ApplicationMavenReference;
  /**
   * The location of the custom artifacts.
   *
   * _Required_: No
   *
   * _Type_: [S3ContentLocation](aws-properties-kinesisanalyticsv2-application-s3contentlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ContentLocation?: KinesisAnalyticsV2ApplicationS3ContentLocation;
  /**
   * Set this to either `UDF` or `DEPENDENCY_JAR`. `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DEPENDENCY_JAR | UDF`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArtifactType: Value<string>;
}

/**
 * Describes the starting parameters for an Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-runconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationRunConfiguration {
  /**
   * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: No
   *
   * _Type_: [FlinkRunConfiguration](aws-properties-kinesisanalyticsv2-application-flinkrunconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlinkRunConfiguration?: KinesisAnalyticsV2ApplicationFlinkRunConfiguration;
  /**
   * Describes the restore behavior of a restarting application.
   *
   * _Required_: No
   *
   * _Type_: [ApplicationRestoreConfiguration](aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationRestoreConfiguration?: KinesisAnalyticsV2ApplicationApplicationRestoreConfiguration;
}

/**
 * The location of an application or a custom artifact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentlocation.html}
 **/
export interface KinesisAnalyticsV2ApplicationS3ContentLocation {
  /**
   * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketARN: Value<string>;
  /**
   * The file key for the object containing the application code.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileKey: Value<string>;
  /**
   * The version of the object containing the application code.
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
  ObjectVersion?: Value<string>;
}

/**
 * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationDeployAsApplicationConfiguration {
  /**
   * The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   *
   * _Required_: Yes
   *
   * _Type_: [S3ContentBaseLocation](aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ContentLocation: KinesisAnalyticsV2ApplicationS3ContentBaseLocation;
}

/**
 * Property key-value pairs passed into an application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-propertygroup.html}
 **/
export interface KinesisAnalyticsV2ApplicationPropertyGroup {
  /**
   * Describes the value of an application execution property key-value pair.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyMap?: { [key: string]: Value<string> };
  /**
   * Describes the key of an application execution property key-value pair.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyGroupId?: Value<string>;
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mappingparameters.html}
 **/
export interface KinesisAnalyticsV2ApplicationMappingParameters {
  /**
   * Provides additional mapping information when JSON is the record format on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [JSONMappingParameters](aws-properties-kinesisanalyticsv2-application-jsonmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JSONMappingParameters?: KinesisAnalyticsV2ApplicationJSONMappingParameters;
  /**
   * Provides additional mapping information when the record format uses delimiters (for example, CSV).
   *
   * _Required_: No
   *
   * _Type_: [CSVMappingParameters](aws-properties-kinesisanalyticsv2-application-csvmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CSVMappingParameters?: KinesisAnalyticsV2ApplicationCSVMappingParameters;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputparallelism.html}
 **/
export interface KinesisAnalyticsV2ApplicationInputParallelism {
  /**
   * The number of in-application streams to create.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
}

/**
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationFlinkApplicationConfiguration {
  /**
   * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see [ Checkpoints for Fault Tolerance](https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance) in the [Apache Flink Documentation](https://ci.apache.org/projects/flink/flink-docs-release-1.8/).
   *
   * _Required_: No
   *
   * _Type_: [CheckpointConfiguration](aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CheckpointConfiguration?: KinesisAnalyticsV2ApplicationCheckpointConfiguration;
  /**
   * Describes parameters for how an application executes multiple tasks simultaneously.
   *
   * _Required_: No
   *
   * _Type_: [ParallelismConfiguration](aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelismConfiguration?: KinesisAnalyticsV2ApplicationParallelismConfiguration;
  /**
   * Describes configuration parameters for Amazon CloudWatch logging for an application.
   *
   * _Required_: No
   *
   * _Type_: [MonitoringConfiguration](aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringConfiguration?: KinesisAnalyticsV2ApplicationMonitoringConfiguration;
}

/**
 * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput.html}
 **/
export interface KinesisAnalyticsV2ApplicationKinesisFirehoseInput {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceARN: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputschema.html}
 **/
export interface KinesisAnalyticsV2ApplicationInputSchema {
  /**
   * Specifies the encoding of the records in the streaming source. For example, UTF-8.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `5`
   *
   * _Maximum_: `5`
   *
   * _Pattern_: `UTF-8`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordEncoding?: Value<string>;
  /**
   * A list of `RecordColumn` objects.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RecordColumn](aws-properties-kinesisanalyticsv2-application-recordcolumn.md)
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumns: List<KinesisAnalyticsV2ApplicationRecordColumn>;
  /**
   * Specifies the format of the records on the streaming source.
   *
   * _Required_: Yes
   *
   * _Type_: [RecordFormat](aws-properties-kinesisanalyticsv2-application-recordformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormat: KinesisAnalyticsV2ApplicationRecordFormat;
}

/**
 * Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationMonitoringConfiguration {
  /**
   * Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to `CUSTOM` in order to set the `LogLevel` or `MetricsLevel` parameters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CUSTOM | DEFAULT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationType: Value<string>;
  /**
   * Describes the granularity of the CloudWatch Logs for an application. The `Parallelism` level is not recommended for applications with a Parallelism over 64 due to excessive costs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `APPLICATION | OPERATOR | PARALLELISM | TASK`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricsLevel?: Value<string>;
  /**
   * Describes the verbosity of the CloudWatch Logs for an application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DEBUG | ERROR | INFO | WARN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogLevel?: Value<string>;
}

/**
 * For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is [Amazon Lambda](https://docs.aws.amazon.com/lambda/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputprocessingconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationInputProcessingConfiguration {
  /**
   * The [InputLambdaProcessor](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_InputLambdaProcessor.html) that is used to preprocess the records in the stream before being processed by your application code.
   *
   * _Required_: No
   *
   * _Type_: [InputLambdaProcessor](aws-properties-kinesisanalyticsv2-application-inputlambdaprocessor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLambdaProcessor?: KinesisAnalyticsV2ApplicationInputLambdaProcessor;
}

/**
 * The configuration of a Kinesis Data Analytics Studio notebook.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationZeppelinApplicationConfiguration {
  /**
   * The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.
   *
   * _Required_: No
   *
   * _Type_: [CatalogConfiguration](aws-properties-kinesisanalyticsv2-application-catalogconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogConfiguration?: KinesisAnalyticsV2ApplicationCatalogConfiguration;
  /**
   * The monitoring configuration of a Kinesis Data Analytics Studio notebook.
   *
   * _Required_: No
   *
   * _Type_: [ZeppelinMonitoringConfiguration](aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringConfiguration?: KinesisAnalyticsV2ApplicationZeppelinMonitoringConfiguration;
  /**
   * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
   *
   * _Required_: No
   *
   * _Type_: [DeployAsApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeployAsApplicationConfiguration?: KinesisAnalyticsV2ApplicationDeployAsApplicationConfiguration;
  /**
   * A list of `CustomArtifactConfiguration` objects.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomArtifactConfiguration](aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomArtifactsConfiguration?: List<KinesisAnalyticsV2ApplicationCustomArtifactConfiguration>;
}

/**
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mavenreference.html}
 **/
export interface KinesisAnalyticsV2ApplicationMavenReference {
  /**
   * The artifact ID of the Maven reference.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArtifactId: Value<string>;
  /**
   * The version of the Maven reference.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version: Value<string>;
  /**
   * The group ID of the Maven reference.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupId: Value<string>;
}

/**
 * Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput.html}
 **/
export interface KinesisAnalyticsV2ApplicationKinesisStreamsInput {
  /**
   * The ARN of the input Kinesis data stream to read.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceARN: Value<string>;
}

/**
 * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see [ Checkpoints for Fault Tolerance](https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance) in the [Apache Flink Documentation](https://ci.apache.org/projects/flink/flink-docs-release-1.8/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationCheckpointConfiguration {
  /**
   * Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
   *
   * If this value is set to `DEFAULT`, the application will use the following values, even if they are set to other values using APIs or application code:
   */
  ConfigurationType: Value<string>;
  /**
   * Describes the interval in milliseconds between checkpoint operations.
   *
   * If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointInterval` value of 60000, even if this value is set to another value using this API or in application code.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CheckpointInterval?: Value<number>;
  /**
   * Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the `CheckpointInterval`, the application otherwise performs continual checkpoint operations. For more information, see [ Tuning Checkpointing](https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/large_state_tuning.html#tuning-checkpointing) in the [Apache Flink Documentation](https://ci.apache.org/projects/flink/flink-docs-release-1.8/).
   *
   * If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `MinPauseBetweenCheckpoints` value of 5000, even if this value is set using this API or in application code.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinPauseBetweenCheckpoints?: Value<number>;
  /**
   * Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.
   *
   * If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointingEnabled` value of `true`, even if this value is set to another value using this API or in application code.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CheckpointingEnabled?: Value<boolean>;
}

/**
 * The base location of the Amazon Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.html}
 **/
export interface KinesisAnalyticsV2ApplicationS3ContentBaseLocation {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketARN: Value<string>;
  /**
   * The base path for the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[a-zA-Z0-9/!-_.*'()]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasePath?: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordformat.html}
 **/
export interface KinesisAnalyticsV2ApplicationRecordFormat {
  /**
   * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [MappingParameters](aws-properties-kinesisanalyticsv2-application-mappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappingParameters?: KinesisAnalyticsV2ApplicationMappingParameters;
  /**
   * The type of record format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | JSON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormatType: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-jsonmappingparameters.html}
 **/
export interface KinesisAnalyticsV2ApplicationJSONMappingParameters {
  /**
   * The path to the top-level parent that contains the records.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Pattern_: `^(?=^$)(?=^S+$).*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowPath: Value<string>;
}

/**
 * Specifies either the application code, or the location of the application code, for a Flink-based Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-codecontent.html}
 **/
export interface KinesisAnalyticsV2ApplicationCodeContent {
  /**
   * The zip-format code for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ZipFileContent?: Value<string>;
  /**
   * Information about the Amazon S3 bucket that contains the application code.
   *
   * _Required_: No
   *
   * _Type_: [S3ContentLocation](aws-properties-kinesisanalyticsv2-application-s3contentlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ContentLocation?: KinesisAnalyticsV2ApplicationS3ContentLocation;
  /**
   * The text-format code for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `102400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextContent?: Value<string>;
}

/**
 * Describes execution properties for a Flink-based Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-environmentproperties.html}
 **/
export interface KinesisAnalyticsV2ApplicationEnvironmentProperties {
  /**
   * Describes the execution property groups.
   *
   * _Required_: No
   *
   * _Type_: List of [PropertyGroup](aws-properties-kinesisanalyticsv2-application-propertygroup.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyGroups?: List<KinesisAnalyticsV2ApplicationPropertyGroup>;
}

/**
 * Specifies the maintence window parameters for a Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationmaintenanceconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationApplicationMaintenanceConfiguration {
  /**
   * Specifies the start time of the maintence window.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationMaintenanceWindowStartTime: Value<string>;
}

/**
 * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html}
 **/
export interface KinesisAnalyticsV2ApplicationInput {
  /**
   * The name prefix to use when creating an in-application stream. Suppose that you specify a prefix "`MyInApplicationStream`." Kinesis Data Analytics then creates one or more (as per the `InputParallelism` count you specified) in-application streams with the names "`MyInApplicationStream_001`," "`MyInApplicationStream_002`," and so on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `[^-s<>&]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NamePrefix: Value<string>;
  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
   *
   * Also used to describe the format of the reference data source.
   *
   * _Required_: Yes
   *
   * _Type_: [InputSchema](aws-properties-kinesisanalyticsv2-application-inputschema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputSchema: KinesisAnalyticsV2ApplicationInputSchema;
  /**
   * If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
   *
   * _Required_: No
   *
   * _Type_: [KinesisStreamsInput](aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamsInput?: KinesisAnalyticsV2ApplicationKinesisStreamsInput;
  /**
   * If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseInput](aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseInput?: KinesisAnalyticsV2ApplicationKinesisFirehoseInput;
  /**
   * The [InputProcessingConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_InputProcessingConfiguration.html) for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is [InputLambdaProcessor](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_InputLambdaProcessor.html).
   *
   * _Required_: No
   *
   * _Type_: [InputProcessingConfiguration](aws-properties-kinesisanalyticsv2-application-inputprocessingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputProcessingConfiguration?: KinesisAnalyticsV2ApplicationInputProcessingConfiguration;
  /**
   * Describes the number of in-application streams to create.
   *
   * _Required_: No
   *
   * _Type_: [InputParallelism](aws-properties-kinesisanalyticsv2-application-inputparallelism.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputParallelism?: KinesisAnalyticsV2ApplicationInputParallelism;
}

/**
 * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationApplicationSnapshotConfiguration {
  /**
   * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotsEnabled: Value<boolean>;
}

/**
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see [Parallel Execution](https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html) in the [Apache Flink Documentation](https://ci.apache.org/projects/flink/flink-docs-release-1.8/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationParallelismConfiguration {
  /**
   * Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CUSTOM | DEFAULT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationType: Value<string>;
  /**
   * Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see [Amazon Kinesis Data Analytics Pricing](http://aws.amazon.com/kinesis/data-analytics/pricing/).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelismPerKPU?: Value<number>;
  /**
   * Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoScalingEnabled?: Value<boolean>;
  /**
   * Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if [ParallelismConfiguration:AutoScalingEnabled](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ParallelismConfiguration.html#kinesisanalytics-Type-ParallelismConfiguration-AutoScalingEnabled.html) is set to `true`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parallelism?: Value<number>;
}

/**
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationSqlApplicationConfiguration {
  /**
   * The array of [Input](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_Input.html) objects describing the input streams used by the application.
   *
   * _Required_: No
   *
   * _Type_: List of [Input](aws-properties-kinesisanalyticsv2-application-input.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Inputs?: List<KinesisAnalyticsV2ApplicationInput>;
}

/**
 * Describes code configuration for an application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationApplicationCodeConfiguration {
  /**
   * Specifies whether the code content is in text or zip format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `PLAINTEXT | ZIPFILE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeContentType: Value<string>;
  /**
   * The location and type of the application code.
   *
   * _Required_: Yes
   *
   * _Type_: [CodeContent](aws-properties-kinesisanalyticsv2-application-codecontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeContent: KinesisAnalyticsV2ApplicationCodeContent;
}

/**
 * Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationZeppelinMonitoringConfiguration {
  /**
   * The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DEBUG | ERROR | INFO | WARN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogLevel?: Value<string>;
}

/**
 * An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputlambdaprocessor.html}
 **/
export interface KinesisAnalyticsV2ApplicationInputLambdaProcessor {
  /**
   * The ARN of the Amazon Lambda function that operates on records in the stream.
   *
   * To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceARN: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 *
 * Also used to describe the format of the reference data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordcolumn.html}
 **/
export interface KinesisAnalyticsV2ApplicationRecordColumn {
  /**
   * A reference to the data element in the streaming input or the reference data source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mapping?: Value<string>;
  /**
   * The type of column created in the in-application input stream or reference table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlType: Value<string>;
  /**
   * The name of the column that is created in the in-application input stream or reference table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[^-s<>&]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Specifies the method and snapshot to use when restarting an application using previously saved application state.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationApplicationRestoreConfiguration {
  /**
   * The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if `RESTORE_FROM_CUSTOM_SNAPSHOT` is specified for the `ApplicationRestoreType`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotName?: Value<string>;
  /**
   * Specifies how the application should be restored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `RESTORE_FROM_CUSTOM_SNAPSHOT | RESTORE_FROM_LATEST_SNAPSHOT | SKIP_RESTORE_FROM_SNAPSHOT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationRestoreType: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the _'n'_ as the row delimiter and a comma (",") as the column delimiter:
 *
 * `"name1", "address1"`
 *
 * `"name2", "address2"`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-csvmappingparameters.html}
 **/
export interface KinesisAnalyticsV2ApplicationCSVMappingParameters {
  /**
   * The row delimiter. For example, in a CSV format, _'n'_ is the typical row delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowDelimiter: Value<string>;
  /**
   * The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumnDelimiter: Value<string>;
}

/**
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationGlueDataCatalogConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseARN?: Value<string>;
}

/**
 * Describes the parameters of a VPC used by the application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-vpcconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationVpcConfiguration {
  /**
   * The array of [SecurityGroup](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html) IDs used by the VPC configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds: List<Value<string>>;
  /**
   * The array of [Subnet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html) IDs used by the VPC configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds: List<Value<string>>;
}

/**
 * Specifies the creation parameters for a Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationApplicationConfiguration {
  /**
   * The code location and type parameters for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: Conditional
   *
   * _Type_: [ApplicationCodeConfiguration](aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationCodeConfiguration?: KinesisAnalyticsV2ApplicationApplicationCodeConfiguration;
  /**
   * Describes execution properties for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: No
   *
   * _Type_: [EnvironmentProperties](aws-properties-kinesisanalyticsv2-application-environmentproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentProperties?: KinesisAnalyticsV2ApplicationEnvironmentProperties;
  /**
   * The creation and update parameters for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: No
   *
   * _Type_: [FlinkApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlinkApplicationConfiguration?: KinesisAnalyticsV2ApplicationFlinkApplicationConfiguration;
  /**
   * The creation and update parameters for a SQL-based Kinesis Data Analytics application.
   *
   * _Required_: No
   *
   * _Type_: [SqlApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlApplicationConfiguration?: KinesisAnalyticsV2ApplicationSqlApplicationConfiguration;
  /**
   * The configuration parameters for a Kinesis Data Analytics Studio notebook.
   *
   * _Required_: No
   *
   * _Type_: [ZeppelinApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ZeppelinApplicationConfiguration?: KinesisAnalyticsV2ApplicationZeppelinApplicationConfiguration;
  /**
   * The array of descriptions of VPC configurations available to the application.
   *
   * _Required_: No
   *
   * _Type_: List of [VpcConfiguration](aws-properties-kinesisanalyticsv2-application-vpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfigurations?: List<KinesisAnalyticsV2ApplicationVpcConfiguration>;
  /**
   * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
   *
   * _Required_: No
   *
   * _Type_: [ApplicationSnapshotConfiguration](aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationSnapshotConfiguration?: KinesisAnalyticsV2ApplicationApplicationSnapshotConfiguration;
}

/**
 * Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkrunconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationFlinkRunConfiguration {
  /**
   * When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. This will happen if the program is updated between snapshots to remove stateful parameters, and state data in the snapshot no longer corresponds to valid application data. For more information, see [ Allowing Non-Restored State](https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/savepoints.html#allowing-non-restored-state) in the [Apache Flink documentation](https://ci.apache.org/projects/flink/flink-docs-release-1.8/).
   *
   * This value defaults to `false`. If you update your application without specifying this parameter, `AllowNonRestoredState` will be set to `false`, even if it was previously set to `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowNonRestoredState?: Value<boolean>;
}

/**
 * The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-catalogconfiguration.html}
 **/
export interface KinesisAnalyticsV2ApplicationCatalogConfiguration {
  /**
   * The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
   *
   * _Required_: No
   *
   * _Type_: [GlueDataCatalogConfiguration](aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueDataCatalogConfiguration?: KinesisAnalyticsV2ApplicationGlueDataCatalogConfiguration;
}
export interface KinesisAnalyticsV2ApplicationProperties {
  /**
   * The name of the application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationName?: Value<string>;
  /**
   * The runtime environment for the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `FLINK-1_11 | FLINK-1_13 | FLINK-1_15 | FLINK-1_6 | FLINK-1_8 | SQL-1_0 | ZEPPELIN-FLINK-1_0 | ZEPPELIN-FLINK-2_0`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RuntimeEnvironment: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [RunConfiguration](aws-properties-kinesisanalyticsv2-application-runconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunConfiguration?: KinesisAnalyticsV2ApplicationRunConfiguration;
  /**
   * To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `INTERACTIVE | STREAMING`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationMode?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ApplicationMaintenanceConfiguration](aws-properties-kinesisanalyticsv2-application-applicationmaintenanceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationMaintenanceConfiguration?: KinesisAnalyticsV2ApplicationApplicationMaintenanceConfiguration;
  /**
   * Use this parameter to configure the application.
   *
   * _Required_: No
   *
   * _Type_: [ApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-applicationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationConfiguration?: KinesisAnalyticsV2ApplicationApplicationConfiguration;
  /**
   * The description of the application.
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
  ApplicationDescription?: Value<string>;
  /**
   * A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Specifies the IAM role that the application uses to access external resources.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceExecutionRole: Value<string>;
}

/**
 * Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see [Creating an Application](https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html}
 */
export interface KinesisAnalyticsV2ApplicationResource {
  Type: 'AWS::KinesisAnalyticsV2::Application';
  Properties: KinesisAnalyticsV2ApplicationProperties;
}
