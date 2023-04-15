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
 * `MetricTransformation` is a property of the `AWS::Logs::MetricFilter` resource that describes how to transform log streams into a CloudWatch metric.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-metrictransformation.html}
 **/
export interface LogsMetricFilterMetricTransformation {
  /**
   * (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: Value<number>;
  /**
   * The name of the CloudWatch metric.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricName: Value<string>;
  /**
   * The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like `Error`, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricValue: Value<string>;
  /**
   * A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[^:*$]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricNamespace: Value<string>;
  /**
   * The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.
   *
   * Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
   *
   * CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
   *
   * You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [ Creating a Billing Alarm to Monitor Your Estimated AWS Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Dimension](aws-properties-logs-metricfilter-dimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: List<LogsMetricFilterDimension>;
  /**
   * The unit to assign to the metric. If you omit this, the unit is set as `None`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Bits | Bits/Second | Bytes | Bytes/Second | Count | Count/Second | Gigabits | Gigabits/Second | Gigabytes | Gigabytes/Second | Kilobits | Kilobits/Second | Kilobytes | Kilobytes/Second | Megabits | Megabits/Second | Megabytes | Megabytes/Second | Microseconds | Milliseconds | None | Percent | Seconds | Terabits | Terabits/Second | Terabytes | Terabytes/Second`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
}

/**
 * Specifies the CloudWatch metric dimensions to publish with this metric.
 *
 * Because dimensions are part of the unique identifier for a metric, whenever a unique dimension name/value pair is extracted from your logs, you are creating a new variation of that metric.
 *
 * For more information about publishing dimensions with metrics created by metric filters, see [ Publishing dimensions with metrics from values in JSON or space-delimited log events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html#logs-metric-filters-dimensions).
 *
 * **Important**
 *
 * Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
 *
 * To help prevent accidental high charges, Amazon disables a metric filter if it generates 1000 different name/value pairs for the dimensions that you have specified within a certain amount of time.
 *
 * You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [ Creating a Billing Alarm to Monitor Your Estimated AWS Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-metricfilter-dimension.html}
 **/
export interface LogsMetricFilterDimension {
  /**
   * The log event field that will contain the value for this dimension. This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The name for the CloudWatch metric dimension that the metric filter creates.
   *
   * Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}
export interface LogsMetricFilterProperties {
  /**
   * The metric transformations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MetricTransformation](aws-properties-logs-metricfilter-metrictransformation.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricTransformations: List<LogsMetricFilterMetricTransformation>;
  /**
   * A filter pattern for extracting metric data out of ingested log events. For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterPattern: Value<string>;
  /**
   * The name of an existing log group that you want to associate with this metric filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[.-_/#A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogGroupName: Value<string>;
  /**
   * The name of the metric filter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[^:*]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FilterName?: Value<string>;
}

/**
 * The `AWS::Logs::MetricFilter` resource specifies a metric filter that describes how CloudWatch Logs extracts information from logs and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
 *
 * The maximum number of metric filters that can be associated with a log group is 100.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html}
 */
export interface LogsMetricFilterResource {
  Type: 'AWS::Logs::MetricFilter';
  Properties: LogsMetricFilterProperties;
}
