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
 * Contains customized metric specification information for a target tracking scaling policy for Amazon EC2 Auto Scaling.
 *
 * To create your customized metric specification:
 *
 * For more information about CloudWatch, see [Amazon CloudWatch Concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html).
 *
 * `CustomizedMetricSpecification` is a property of the [AWS::AutoScaling::ScalingPolicy TargetTrackingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-targettrackingconfiguration.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-customizedmetricspecification.html}
 **/
export interface AutoScalingScalingPolicyCustomizedMetricSpecification {
  /**
   * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricName: Value<string>;
  /**
   * The statistic of the metric.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Average | Maximum | Minimum | SampleCount | Sum`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statistic: Value<string>;
  /**
   * The dimensions of the metric.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricDimension](aws-properties-autoscaling-scalingpolicy-metricdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: List<AutoScalingScalingPolicyMetricDimension>;
  /**
   * The unit of the metric. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the _Amazon CloudWatch API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
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

/**
 * Contains metric pair information for the `PredefinedMetricPairSpecification` property of the [AWS::AutoScaling::ScalingPolicy PredictiveScalingMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html) property type.
 *
 * For more information, see [Predictive scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedmetricpair.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingPredefinedMetricPair {
  /**
   * Indicates which metrics to use. There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric. For example, if the metric type is `ASGCPUUtilization`, the Auto Scaling group's total CPU metric is used as the load metric, and the average CPU metric is used for the scaling metric.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALBRequestCount | ASGCPUUtilization | ASGNetworkIn | ASGNetworkOut`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedMetricType: Value<string>;
  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the total and average request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   */
  ResourceLabel?: Value<string>;
}

/**
 * `TargetTrackingConfiguration` is a property of the [AWS::AutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html) resource that specifies a target tracking scaling policy configuration for Amazon EC2 Auto Scaling.
 *
 * For more information about scaling policies, see [Dynamic scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-targettrackingconfiguration.html}
 **/
export interface AutoScalingScalingPolicyTargetTrackingConfiguration {
  /**
   * The target value for the metric.
   *
   * Some metrics are based on a count instead of a percentage, such as the request count for an Application Load Balancer or the number of messages in an SQS queue. If the scaling policy specifies one of these metrics, specify the target utilization as the optimal average request or message count per instance during any one-minute interval.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: Value<number>;
  /**
   * A customized metric. You must specify either a predefined metric or a customized metric.
   *
   * _Required_: Conditional
   *
   * _Type_: [CustomizedMetricSpecification](aws-properties-autoscaling-scalingpolicy-customizedmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomizedMetricSpecification?: AutoScalingScalingPolicyCustomizedMetricSpecification;
  /**
   * Indicates whether scaling in by the target tracking scaling policy is disabled. If scaling in is disabled, the target tracking scaling policy doesn't remove instances from the Auto Scaling group. Otherwise, the target tracking scaling policy can remove instances from the Auto Scaling group. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableScaleIn?: Value<boolean>;
  /**
   * A predefined metric. You must specify either a predefined metric or a customized metric.
   *
   * _Required_: Conditional
   *
   * _Type_: [PredefinedMetricSpecification](aws-properties-autoscaling-scalingpolicy-predefinedmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedMetricSpecification?: AutoScalingScalingPolicyPredefinedMetricSpecification;
}

/**
 * Contains scaling metric information for the `CustomizedScalingMetricSpecification` property of the [AWS::AutoScaling::ScalingPolicy PredictiveScalingMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedscalingmetric.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingCustomizedScalingMetric {
  /**
   * One or more metric data queries to provide the data points for a scaling metric. Use multiple metric data queries only if you are performing a math expression on returned data.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MetricDataQuery](aws-properties-autoscaling-scalingpolicy-metricdataquery.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricDataQueries: List<AutoScalingScalingPolicyMetricDataQuery>;
}

/**
 * Contains scaling metric information for the `PredefinedScalingMetricSpecification` property of the [AWS::AutoScaling::ScalingPolicy PredictiveScalingMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html) property type.
 *
 * **Important**
 *
 * Does not apply to policies that use a _metric pair_ for the metric specification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingPredefinedScalingMetric {
  /**
   * The metric type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALBRequestCountPerTarget | ASGAverageCPUUtilization | ASGAverageNetworkIn | ASGAverageNetworkOut`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedMetricType: Value<string>;
  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the average request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   */
  ResourceLabel?: Value<string>;
}

/**
 * A structure that specifies a metric specification for the `MetricSpecifications` property of the [AWS::AutoScaling::ScalingPolicy PredictiveScalingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingconfiguration.html) property type.
 *
 * You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.
 *
 * Example
 *
 * For information about using custom metrics with predictive scaling, see [Advanced predictive scaling policy configurations using custom metrics](https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingMetricSpecification {
  /**
   * The customized load metric specification.
   *
   * _Required_: No
   *
   * _Type_: [PredictiveScalingCustomizedLoadMetric](aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedloadmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomizedLoadMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingCustomizedLoadMetric;
  /**
   * The predefined load metric specification.
   *
   * _Required_: No
   *
   * _Type_: [PredictiveScalingPredefinedLoadMetric](aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedloadmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedLoadMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingPredefinedLoadMetric;
  /**
   * Specifies the target utilization.
   *
   * Some metrics are based on a count instead of a percentage, such as the request count for an Application Load Balancer or the number of messages in an SQS queue. If the scaling policy specifies one of these metrics, specify the target utilization as the optimal average request or message count per instance during any one-minute interval.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: Value<number>;
  /**
   * The predefined scaling metric specification.
   *
   * _Required_: No
   *
   * _Type_: [PredictiveScalingPredefinedScalingMetric](aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedScalingMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingPredefinedScalingMetric;
  /**
   * The customized capacity metric specification.
   *
   * _Required_: No
   *
   * _Type_: [PredictiveScalingCustomizedCapacityMetric](aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedcapacitymetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomizedCapacityMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingCustomizedCapacityMetric;
  /**
   * The customized scaling metric specification.
   *
   * _Required_: No
   *
   * _Type_: [PredictiveScalingCustomizedScalingMetric](aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedscalingmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomizedScalingMetricSpecification?: AutoScalingScalingPolicyPredictiveScalingCustomizedScalingMetric;
  /**
   * The predefined metric pair specification from which Amazon EC2 Auto Scaling determines the appropriate scaling metric and load metric to use.
   *
   * _Required_: No
   *
   * _Type_: [PredictiveScalingPredefinedMetricPair](aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedmetricpair.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedMetricPairSpecification?: AutoScalingScalingPolicyPredictiveScalingPredefinedMetricPair;
}

/**
 * Represents a specific metric.
 *
 * `Metric` is a property of the [AWS::AutoScaling::ScalingPolicy MetricStat](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricstat.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metric.html}
 **/
export interface AutoScalingScalingPolicyMetric {
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
   * The dimensions for the metric. For the list of available dimensions, see the AWS documentation available from the table in [AWS services that publish CloudWatch metrics ](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the _Amazon CloudWatch User Guide_.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricDimension](aws-properties-autoscaling-scalingpolicy-metricdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: List<AutoScalingScalingPolicyMetricDimension>;
  /**
   * The namespace of the metric. For more information, see the table in [AWS services that publish CloudWatch metrics ](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the _Amazon CloudWatch User Guide_.
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
 * `PredictiveScalingConfiguration` is a property of the [AWS::AutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html) resource that specifies a predictive scaling policy for Amazon EC2 Auto Scaling.
 *
 * For more information, see [Predictive scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingconfiguration.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingConfiguration {
  /**
   * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity of the Auto Scaling group. Defaults to `HonorMaxCapacity` if not specified.
   *
   * The following are possible values:
   */
  MaxCapacityBreachBehavior?: Value<string>;
  /**
   * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.
   *
   * If set to 0, Amazon EC2 Auto Scaling may scale capacity higher than the maximum capacity to equal but not exceed forecast capacity.
   *
   * Required if the `MaxCapacityBreachBehavior` property is set to `IncreaseMaxCapacity`, and cannot be used otherwise.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCapacityBuffer?: Value<number>;
  /**
   * The predictive scaling mode. Defaults to `ForecastOnly` if not specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ForecastAndScale | ForecastOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode?: Value<string>;
  /**
   * This structure includes the metrics and target utilization to use for predictive scaling.
   *
   * This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.
   *
   * _Required_: Yes
   *
   * _Type_: List of [PredictiveScalingMetricSpecification](aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricSpecifications: List<AutoScalingScalingPolicyPredictiveScalingMetricSpecification>;
  /**
   * The amount of time, in seconds, by which the instance launch time can be advanced. For example, the forecast says to add capacity at 10:00 AM, and you choose to pre-launch instances by 5 minutes. In that case, the instances will be launched at 9:55 AM. The intention is to give resources time to be provisioned. It can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete.
   *
   * The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchedulingBufferTime?: Value<number>;
}

/**
 * `MetricDimension` specifies a name/value pair that is part of the identity of a CloudWatch metric for the `Dimensions` property of the [AWS::AutoScaling::ScalingPolicy CustomizedMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-customizedmetricspecification.html) property type. Duplicate dimensions are not allowed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricdimension.html}
 **/
export interface AutoScalingScalingPolicyMetricDimension {
  /**
   * The value of the dimension.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The name of the dimension.
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
 * Contains capacity metric information for the `CustomizedCapacityMetricSpecification` property of the [AWS::AutoScaling::ScalingPolicy PredictiveScalingMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedcapacitymetric.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingCustomizedCapacityMetric {
  /**
   * One or more metric data queries to provide the data points for a capacity metric. Use multiple metric data queries only if you are performing a math expression on returned data.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MetricDataQuery](aws-properties-autoscaling-scalingpolicy-metricdataquery.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricDataQueries: List<AutoScalingScalingPolicyMetricDataQuery>;
}

/**
 * `MetricStat` is a property of the [AWS::AutoScaling::ScalingPolicy MetricDataQuery](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricdataquery.html) property type.
 *
 * This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.
 *
 * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the _Amazon CloudWatch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricstat.html}
 **/
export interface AutoScalingScalingPolicyMetricStat {
  /**
   * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the _Amazon CloudWatch User Guide_.
   *
   * The most commonly used metrics for predictive scaling are `Average` and `Sum`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stat: Value<string>;
  /**
   * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
   *
   * _Required_: Yes
   *
   * _Type_: [Metric](aws-properties-autoscaling-scalingpolicy-metric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metric: AutoScalingScalingPolicyMetric;
  /**
   * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the _Amazon CloudWatch API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
}

/**
 * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
 *
 * `MetricDataQuery` is a property of the following property types:
 *
 * Predictive scaling uses the time series data received from CloudWatch to understand how to schedule capacity based on your historical workload patterns.
 *
 * You can call for a single metric or perform math expressions on multiple metrics. Any expressions used in a metric specification must eventually return a single time series.
 *
 * For more information and examples, see [Advanced predictive scaling policy configurations using custom metrics](https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-metricdataquery.html}
 **/
export interface AutoScalingScalingPolicyMetricDataQuery {
  /**
   * Indicates whether to return the timestamps and raw data values of this metric.
   *
   * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
   *
   * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData`. This sets it to its default (`true`).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReturnData?: Value<boolean>;
  /**
   * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
   *
   * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1023`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression?: Value<string>;
  /**
   * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2047`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Label?: Value<string>;
  /**
   * Information about the metric data to return.
   *
   * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * _Required_: No
   *
   * _Type_: [MetricStat](aws-properties-autoscaling-scalingpolicy-metricstat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricStat?: AutoScalingScalingPolicyMetricStat;
  /**
   * A short name that identifies the object's results in the response. This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
}

/**
 * `StepAdjustment` specifies a step adjustment for the `StepAdjustments` property of the [AWS::AutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html) resource.
 *
 * For the following examples, suppose that you have an alarm with a breach threshold of 50:
 *
 * There are a few rules for the step adjustments for your step policy:
 *
 * For more information, see [Step adjustments](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * You can find a sample template snippet in the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html#aws-properties-as-policy--examples) section of the `AWS::AutoScaling::ScalingPolicy` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-stepadjustment.html}
 **/
export interface AutoScalingScalingPolicyStepAdjustment {
  /**
   * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
   *
   * The upper bound must be greater than the lower bound.
   *
   * _Required_: Conditional
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricIntervalUpperBound?: Value<number>;
  /**
   * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
   *
   * _Required_: Conditional
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricIntervalLowerBound?: Value<number>;
  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity.
   *
   * The amount by which to scale. The adjustment is based on the value that you specified in the `AdjustmentType` property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingAdjustment: Value<number>;
}

/**
 * Contains load metric information for the `CustomizedLoadMetricSpecification` property of the [AWS::AutoScaling::ScalingPolicy PredictiveScalingMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingcustomizedloadmetric.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingCustomizedLoadMetric {
  /**
   * One or more metric data queries to provide the data points for a load metric. Use multiple metric data queries only if you are performing a math expression on returned data.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MetricDataQuery](aws-properties-autoscaling-scalingpolicy-metricdataquery.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricDataQueries: List<AutoScalingScalingPolicyMetricDataQuery>;
}

/**
 * Contains load metric information for the `PredefinedLoadMetricSpecification` property of the [AWS::AutoScaling::ScalingPolicy PredictiveScalingMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingmetricspecification.html) property type.
 *
 * **Important**
 *
 * Does not apply to policies that use a _metric pair_ for the metric specification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predictivescalingpredefinedloadmetric.html}
 **/
export interface AutoScalingScalingPolicyPredictiveScalingPredefinedLoadMetric {
  /**
   * The metric type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALBTargetGroupRequestCount | ASGTotalCPUUtilization | ASGTotalNetworkIn | ASGTotalNetworkOut`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedMetricType: Value<string>;
  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   */
  ResourceLabel?: Value<string>;
}

/**
 * Contains predefined metric specification information for a target tracking scaling policy for Amazon EC2 Auto Scaling.
 *
 * `PredefinedMetricSpecification` is a property of the [AWS::AutoScaling::ScalingPolicy TargetTrackingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-targettrackingconfiguration.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-scalingpolicy-predefinedmetricspecification.html}
 **/
export interface AutoScalingScalingPolicyPredefinedMetricSpecification {
  /**
   * The metric type. The following predefined metrics are available:
   */
  PredefinedMetricType: Value<string>;
  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the average request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   */
  ResourceLabel?: Value<string>;
}
export interface AutoScalingScalingPolicyProperties {
  /**
   * The aggregation type for the CloudWatch metrics. The valid values are `Minimum`, `Maximum`, and `Average`. If the aggregation type is null, the value is treated as `Average`.
   *
   * Valid only if the policy type is `StepScaling`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricAggregationType?: Value<string>;
  /**
   * One of the following policy types:
   */
  PolicyType?: Value<string>;
  /**
   * A predictive scaling policy. Provides support for predefined and custom metrics.
   *
   * Predefined metrics include CPU utilization, network in/out, and the Application Load Balancer request count.
   *
   * Required if the policy type is `PredictiveScaling`.
   *
   * _Required_: Conditional
   *
   * _Type_: [PredictiveScalingConfiguration](aws-properties-autoscaling-scalingpolicy-predictivescalingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredictiveScalingConfiguration?: AutoScalingScalingPolicyPredictiveScalingConfiguration;
  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value.
   *
   * Required if the policy type is `SimpleScaling`. (Not used with any other policy type.)
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingAdjustment?: Value<number>;
  /**
   * A cooldown period, in seconds, that applies to a specific simple scaling policy. When a cooldown period is specified here, it overrides the default cooldown.
   *
   * Valid only if the policy type is `SimpleScaling`. For more information, see [Scaling cooldowns for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * Default: None
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cooldown?: Value<string>;
  /**
   * A set of adjustments that enable you to scale based on the size of the alarm breach.
   *
   * Required if the policy type is `StepScaling`. (Not used with any other policy type.)
   *
   * _Required_: Conditional
   *
   * _Type_: List of [StepAdjustment](aws-properties-autoscaling-scalingpolicy-stepadjustment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepAdjustments?: List<AutoScalingScalingPolicyStepAdjustment>;
  /**
   * The name of the Auto Scaling group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutoScalingGroupName: Value<string>;
  /**
   * The minimum value to scale by when the adjustment type is `PercentChangeInCapacity`. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a `MinAdjustmentMagnitude` of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a `MinAdjustmentMagnitude` of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.
   *
   * Valid only if the policy type is `StepScaling` or `SimpleScaling`. For more information, see [Scaling adjustment types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * Some Auto Scaling groups use instance weights. In this case, set the `MinAdjustmentMagnitude` to a value that is at least as large as your largest instance weight.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinAdjustmentMagnitude?: Value<number>;
  /**
   * A target tracking scaling policy. Provides support for predefined or custom metrics.
   *
   * The following predefined metrics are available:
   */
  TargetTrackingConfiguration?: AutoScalingScalingPolicyTargetTrackingConfiguration;
  /**
   * _Not needed if the default instance warmup is defined for the group._
   *
   * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This warm-up period applies to instances launched due to a specific target tracking or step scaling policy. When a warm-up period is specified here, it overrides the default instance warmup.
   *
   * Valid only if the policy type is `TargetTrackingScaling` or `StepScaling`.
   *
   * The default is to use the value for the default instance warmup defined for the group. If default instance warmup is null, then `EstimatedInstanceWarmup` falls back to the value of default cooldown.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EstimatedInstanceWarmup?: Value<number>;
  /**
   * Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
   *
   * Required if the policy type is `StepScaling` or `SimpleScaling`. For more information, see [Scaling adjustment types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdjustmentType?: Value<string>;
}

/**
 * The `AWS::AutoScaling::ScalingPolicy` resource specifies an Amazon EC2 Auto Scaling scaling policy so that the Auto Scaling group can scale the number of instances available for your application.
 *
 * For more information about using scaling policies to scale your Auto Scaling group automatically, see [Dynamic scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html) and [Predictive scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scalingpolicy.html}
 */
export interface AutoScalingScalingPolicyResource {
  Type: 'AWS::AutoScaling::ScalingPolicy';
  Properties: AutoScalingScalingPolicyProperties;
}
