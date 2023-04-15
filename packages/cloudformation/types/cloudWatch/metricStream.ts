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
 * This structure contains the name of one of the metric namespaces that is listed in a filter of a metric stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html}
 **/
export interface CloudWatchMetricStreamMetricStreamFilter {
  /**
   * The name of the metric namespace in the filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Namespace: Value<string>;
}

/**
 * This structure specifies a list of additional statistics to stream, and the metrics to stream those additional statistics for.
 *
 * All metrics that match the combination of metric name and namespace will be streamed with the additional statistics, no matter their dimensions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.html}
 **/
export interface CloudWatchMetricStreamMetricStreamStatisticsConfiguration {
  /**
   * An array that defines the metrics that are to have additional statistics streamed.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MetricStreamStatisticsMetric](aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeMetrics: List<CloudWatchMetricStreamMetricStreamStatisticsMetric>;
  /**
   * The additional statistics to stream for the metrics listed in `IncludeMetrics`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalStatistics: List<Value<string>>;
}

/**
 * A structure that specifies the metric name and namespace for one metric that is going to have additional statistics included in the stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.html}
 **/
export interface CloudWatchMetricStreamMetricStreamStatisticsMetric {
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
   * The namespace of the metric.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Namespace: Value<string>;
}
export interface CloudWatchMetricStreamProperties {
  /**
   * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
   *
   * For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream's `OutputFormat`. If the `OutputFormat` is `json`, you can stream any additional statistic that is supported by CloudWatch, listed in [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html.html). If the `OutputFormat` is `opentelemetry0`.7, you can stream percentile statistics _(p??)_.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricStreamStatisticsConfiguration](aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatisticsConfigurations?: List<CloudWatchMetricStreamMetricStreamStatisticsConfiguration>;
  /**
   * The ARN of the Amazon Kinesis Firehose delivery stream to use for this metric stream. This Amazon Kinesis Firehose delivery stream must already exist and must be in the same account as the metric stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirehoseArn: Value<string>;
  /**
   * If you are creating a metric stream in a monitoring account, specify `true` to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is `false`.
   *
   * For more information about linking accounts, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html)
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeLinkedAccountsMetrics?: Value<boolean>;
  /**
   * If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here. You cannot specify both `IncludeFilters` and `ExcludeFilters` in the same metric stream.
   *
   * When you modify the `IncludeFilters` or `ExcludeFilters` of an existing metric stream in any way, the metric stream is effectively restarted, so after such a change you will get only the datapoints that have a timestamp after the time of the update.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricStreamFilter](aws-properties-cloudwatch-metricstream-metricstreamfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeFilters?: List<CloudWatchMetricStreamMetricStreamFilter>;
  /**
   * The output format for the stream. Valid values are `json` and `opentelemetry0.7` For more information about metric stream output formats, see [ Metric streams output formats](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html).
   *
   * This parameter is required.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputFormat: Value<string>;
  /**
   * If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here. You cannot specify both `IncludeFilters` and `ExcludeFilters` in the same metric stream.
   *
   * When you modify the `IncludeFilters` or `ExcludeFilters` of an existing metric stream in any way, the metric stream is effectively restarted, so after such a change you will get only the datapoints that have a timestamp after the time of the update.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricStreamFilter](aws-properties-cloudwatch-metricstream-metricstreamfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeFilters?: List<CloudWatchMetricStreamMetricStreamFilter>;
  /**
   * The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Firehose resources. This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the `firehose:PutRecord` and `firehose:PutRecordBatch` permissions.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * An array of key-value pairs to apply to the metric stream.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * If you are creating a new metric stream, this is the name for the new stream. The name must be different than the names of other metric streams in this account and Region.
   *
   * If you are updating a metric stream, specify the name of that stream here.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates or updates a metric stream. Metrics streams can automatically stream CloudWatch metrics to AWS destinations including Amazon S3 and to many third-party solutions. For more information, see [ Metric streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html).
 *
 * To create a metric stream, you must be logged on to an account that has the `iam:PassRole` permission and either the **CloudWatchFullAccess** policy or the `cloudwatch:PutMetricStream` permission.
 *
 * When you create or update a metric stream, you choose one of the following:
 *
 * When you create a metric stream, the stream is created in the `running` state. If you update an existing metric stream, the state does not change.
 *
 * If you create a metric stream in an account that has been set up as a monitoring account in CloudWatch cross-account observability, you can choose whether to include metrics from linked source accounts in the metric stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html}
 */
export interface CloudWatchMetricStreamResource {
  Type: 'AWS::CloudWatch::MetricStream';
  Properties: CloudWatchMetricStreamProperties;
}
