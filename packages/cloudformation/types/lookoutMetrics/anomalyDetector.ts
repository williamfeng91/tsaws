/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Contains information about how a source JSON data file should be analyzed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.html}
 **/
export interface LookoutMetricsAnomalyDetectorJsonFormatDescriptor {
  /**
   * The character set in which the source JSON file is written.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Charset?: Value<string>;
  /**
   * The level of compression of the source CSV file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileCompression?: Value<string>;
}

/**
 * Contains information about a detector's configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-anomalydetectorconfig.html}
 **/
export interface LookoutMetricsAnomalyDetectorAnomalyDetectorConfig {
  /**
   * The frequency at which the detector analyzes its source data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnomalyDetectorFrequency: Value<string>;
}

/**
 * Details about an Amazon AppFlow flow datasource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-appflowconfig.html}
 **/
export interface LookoutMetricsAnomalyDetectorAppFlowConfig {
  /**
   * name of the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlowName: Value<string>;
  /**
   * An IAM role that gives Amazon Lookout for Metrics permission to access the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Contains information about how the source data should be interpreted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricsource.html}
 **/
export interface LookoutMetricsAnomalyDetectorMetricSource {
  /**
   * Contains information about the configuration of the S3 bucket that contains source files.
   *
   * _Required_: No
   *
   * _Type_: [S3SourceConfig](aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3SourceConfig?: LookoutMetricsAnomalyDetectorS3SourceConfig;
  /**
   * Details about an Amazon CloudWatch monitoring datasource.
   *
   * _Required_: No
   *
   * _Type_: [CloudwatchConfig](aws-properties-lookoutmetrics-anomalydetector-cloudwatchconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudwatchConfig?: LookoutMetricsAnomalyDetectorCloudwatchConfig;
  /**
   * Details about an Amazon Relational Database Service (RDS) datasource.
   *
   * _Required_: No
   *
   * _Type_: [RDSSourceConfig](aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RDSSourceConfig?: LookoutMetricsAnomalyDetectorRDSSourceConfig;
  /**
   * Details about an AppFlow datasource.
   *
   * _Required_: No
   *
   * _Type_: [AppFlowConfig](aws-properties-lookoutmetrics-anomalydetector-appflowconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppFlowConfig?: LookoutMetricsAnomalyDetectorAppFlowConfig;
  /**
   * Details about an Amazon Redshift database datasource.
   *
   * _Required_: No
   *
   * _Type_: [RedshiftSourceConfig](aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedshiftSourceConfig?: LookoutMetricsAnomalyDetectorRedshiftSourceConfig;
}

/**
 * Provides information about the Amazon Redshift database configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html}
 **/
export interface LookoutMetricsAnomalyDetectorRedshiftSourceConfig {
  /**
   * The table name of the Redshift database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The port number where the database can be accessed.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabasePort: Value<number>;
  /**
   * The name of the database host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseHost: Value<string>;
  /**
   * The Redshift database name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager role.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretManagerArn: Value<string>;
  /**
   * Contains information about the Amazon Virtual Private Cloud (VPC) configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [VpcConfiguration](aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfiguration: LookoutMetricsAnomalyDetectorVpcConfiguration;
  /**
   * A string identifying the Redshift cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterIdentifier: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the role providing access to the database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * A calculation made by contrasting a measure and a dimension from your source data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metric.html}
 **/
export interface LookoutMetricsAnomalyDetectorMetric {
  /**
   * The function with which the metric is calculated.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction: Value<string>;
  /**
   * The name of the metric.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricName: Value<string>;
  /**
   * The namespace for the metric.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Namespace?: Value<string>;
}

/**
 * Contains information about the configuration of the S3 bucket that contains source files.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html}
 **/
export interface LookoutMetricsAnomalyDetectorS3SourceConfig {
  /**
   * A list of templated paths to the source files.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplatedPathList?: List<Value<string>>;
  /**
   * A list of paths to the historical data files.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistoricalDataPathList?: List<Value<string>>;
  /**
   * The ARN of an IAM role that has read and write access permissions to the source S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * Contains information about a source file's formatting.
   *
   * _Required_: Yes
   *
   * _Type_: [FileFormatDescriptor](aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileFormatDescriptor: LookoutMetricsAnomalyDetectorFileFormatDescriptor;
}

/**
 * Contains information about a source file's formatting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.html}
 **/
export interface LookoutMetricsAnomalyDetectorFileFormatDescriptor {
  /**
   * Contains information about how a source JSON data file should be analyzed.
   *
   * _Required_: No
   *
   * _Type_: [JsonFormatDescriptor](aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonFormatDescriptor?: LookoutMetricsAnomalyDetectorJsonFormatDescriptor;
  /**
   * Contains information about how a source CSV data file should be analyzed.
   *
   * _Required_: No
   *
   * _Type_: [CsvFormatDescriptor](aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CsvFormatDescriptor?: LookoutMetricsAnomalyDetectorCsvFormatDescriptor;
}

/**
 * Contains information about how a source CSV data file should be analyzed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html}
 **/
export interface LookoutMetricsAnomalyDetectorCsvFormatDescriptor {
  /**
   * The character used as a quote character.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QuoteSymbol?: Value<string>;
  /**
   * Whether or not the source CSV file contains a header.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainsHeader?: Value<boolean>;
  /**
   * The character used to delimit the source CSV file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Delimiter?: Value<string>;
  /**
   * A list of the source CSV file's headers, if any.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderList?: List<Value<string>>;
  /**
   * The character set in which the source CSV file is written.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Charset?: Value<string>;
  /**
   * The level of compression of the source CSV file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileCompression?: Value<string>;
}

/**
 * Contains configuration information about the Amazon Virtual Private Cloud (VPC).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html}
 **/
export interface LookoutMetricsAnomalyDetectorVpcConfiguration {
  /**
   * An array of strings containing the Amazon VPC subnet IDs (e.g., `subnet-0bb1c79de3EXAMPLE`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIdList: List<Value<string>>;
  /**
   * An array of strings containing the list of security groups.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIdList: List<Value<string>>;
}

/**
 * Contains information about the Amazon Relational Database Service (RDS) configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html}
 **/
export interface LookoutMetricsAnomalyDetectorRDSSourceConfig {
  /**
   * The name of the table in the database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The port number where the database can be accessed.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabasePort: Value<number>;
  /**
   * The host name of the database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseHost: Value<string>;
  /**
   * The name of the RDS database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager role.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretManagerArn: Value<string>;
  /**
   * An object containing information about the Amazon Virtual Private Cloud (VPC) configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [VpcConfiguration](aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfiguration: LookoutMetricsAnomalyDetectorVpcConfiguration;
  /**
   * A string identifying the database instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBInstanceIdentifier: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the role.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Contains information about the column used to track time in a source data file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.html}
 **/
export interface LookoutMetricsAnomalyDetectorTimestampColumn {
  /**
   * The name of the timestamp column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnName?: Value<string>;
  /**
   * The format of the timestamp column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnFormat?: Value<string>;
}

/**
 * Contains information about a dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-metricset.html}
 **/
export interface LookoutMetricsAnomalyDetectorMetricSet {
  /**
   * The time zone in which your source data was recorded.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timezone?: Value<string>;
  /**
   * A description of the dataset you are creating.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricSetDescription?: Value<string>;
  /**
   * A list of metrics that the dataset will contain.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Metric](aws-properties-lookoutmetrics-anomalydetector-metric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricList: List<LookoutMetricsAnomalyDetectorMetric>;
  /**
   * Contains information about how the source data should be interpreted.
   *
   * _Required_: Yes
   *
   * _Type_: [MetricSource](aws-properties-lookoutmetrics-anomalydetector-metricsource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricSource: LookoutMetricsAnomalyDetectorMetricSource;
  /**
   * Contains information about the column used for tracking time in your source data.
   *
   * _Required_: No
   *
   * _Type_: [TimestampColumn](aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampColumn?: LookoutMetricsAnomalyDetectorTimestampColumn;
  /**
   * A list of the fields you want to treat as dimensions.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionList?: List<Value<string>>;
  /**
   * The frequency with which the source data will be analyzed for anomalies.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricSetFrequency?: Value<string>;
  /**
   * The name of the dataset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricSetName: Value<string>;
  /**
   * After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Offset?: Value<number>;
}

/**
 * Details about an Amazon CloudWatch datasource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-anomalydetector-cloudwatchconfig.html}
 **/
export interface LookoutMetricsAnomalyDetectorCloudwatchConfig {
  /**
   * An IAM role that gives Amazon Lookout for Metrics permission to access data in Amazon CloudWatch.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}
export interface LookoutMetricsAnomalyDetectorProperties {
  /**
   * The name of the detector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AnomalyDetectorName?: Value<string>;
  /**
   * The ARN of the KMS key to use to encrypt your data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * A description of the detector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnomalyDetectorDescription?: Value<string>;
  /**
   * Contains information about the configuration of the anomaly detector.
   *
   * _Required_: Yes
   *
   * _Type_: [AnomalyDetectorConfig](aws-properties-lookoutmetrics-anomalydetector-anomalydetectorconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnomalyDetectorConfig: LookoutMetricsAnomalyDetectorAnomalyDetectorConfig;
  /**
   * The detector's dataset.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MetricSet](aws-properties-lookoutmetrics-anomalydetector-metricset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricSetList: List<LookoutMetricsAnomalyDetectorMetricSet>;
}

/**
 * The `AWS::LookoutMetrics::AnomalyDetector` type creates an anomaly detector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html}
 */
export interface LookoutMetricsAnomalyDetectorResource {
  Type: 'AWS::LookoutMetrics::AnomalyDetector';
  Properties: LookoutMetricsAnomalyDetectorProperties;
}
