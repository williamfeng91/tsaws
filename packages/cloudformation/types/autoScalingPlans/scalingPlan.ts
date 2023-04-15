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
 * `ScalingInstruction` is a property of [ScalingPlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html) that specifies the scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.
 *
 * AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified.
 *
 * AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of properties, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast.
 *
 * **Important**
 *
 * We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see [Best Practices for AWS Auto Scaling](https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html) in the _AWS Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-scalinginstruction.html}
 **/
export interface AutoScalingPlansScalingPlanScalingInstruction {
  /**
   * Controls whether dynamic scaling by AWS Auto Scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations.
   *
   * The default is enabled (`false`).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableDynamicScaling?: Value<boolean>;
  /**
   * The namespace of the AWS service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `autoscaling | dynamodb | ec2 | ecs | rds`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNamespace: Value<string>;
  /**
   * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is `SetForecastCapacityToMaxCapacity`.
   *
   * The following are possible values:
   */
  PredictiveScalingMaxCapacityBehavior?: Value<string>;
  /**
   * The scalable dimension associated with the resource.
   */
  ScalableDimension: Value<string>;
  /**
   * Controls whether your scaling policies that are external to AWS Auto Scaling are deleted and new target tracking scaling policies created. The default value is `KeepExternalPolicies`.
   *
   * Valid only when configuring dynamic scaling.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `KeepExternalPolicies | ReplaceExternalPolicies`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingPolicyUpdateBehavior?: Value<string>;
  /**
   * The minimum capacity of the resource.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinCapacity: Value<number>;
  /**
   * The target tracking configurations (up to 10). Each of these structures must specify a unique scaling metric and a target value for the metric.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TargetTrackingConfiguration](aws-properties-autoscalingplans-scalingplan-targettrackingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetTrackingConfigurations: List<AutoScalingPlansScalingPlanTargetTrackingConfiguration>;
  /**
   * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer. With a 10 percent buffer, if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.
   *
   * Valid only when configuring predictive scaling. Required if **PredictiveScalingMaxCapacityBehavior** is set to `SetMaxCapacityAboveForecastCapacity`, and cannot be used otherwise.
   *
   * The range is 1-100.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredictiveScalingMaxCapacityBuffer?: Value<number>;
  /**
   * The customized load metric to use for predictive scaling. This property or a **PredefinedLoadMetricSpecification** is required when configuring predictive scaling, and cannot be used otherwise.
   *
   * _Required_: Conditional
   *
   * _Type_: [CustomizedLoadMetricSpecification](aws-properties-autoscalingplans-scalingplan-customizedloadmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomizedLoadMetricSpecification?: AutoScalingPlansScalingPlanCustomizedLoadMetricSpecification;
  /**
   * The predefined load metric to use for predictive scaling. This property or a **CustomizedLoadMetricSpecification** is required when configuring predictive scaling, and cannot be used otherwise.
   *
   * _Required_: Conditional
   *
   * _Type_: [PredefinedLoadMetricSpecification](aws-properties-autoscalingplans-scalingplan-predefinedloadmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedLoadMetricSpecification?: AutoScalingPlansScalingPlanPredefinedLoadMetricSpecification;
  /**
   * The ID of the resource. This string consists of the resource type and unique identifier.
   */
  ResourceId: Value<string>;
  /**
   * The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. For example, if the forecast says to add capacity at 10:00 AM, and the buffer time is 5 minutes, then the run time of the corresponding scheduled scaling action will be 9:55 AM. The intention is to give resources time to be provisioned. For example, it can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete.
   *
   * The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds.
   *
   * Valid only when configuring predictive scaling.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduledActionBufferTime?: Value<number>;
  /**
   * The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for **PredictiveScalingMaxCapacityBehavior**.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCapacity: Value<number>;
  /**
   * The predictive scaling mode. The default value is `ForecastAndScale`. Otherwise, AWS Auto Scaling forecasts capacity but does not apply any scheduled scaling actions based on the capacity forecast.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ForecastAndScale | ForecastOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredictiveScalingMode?: Value<string>;
}

/**
 * `MetricDimension` is a subproperty of [CustomizedScalingMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-customizedscalingmetricspecification.html) that specifies a dimension for a customized metric to use with AWS Auto Scaling (Auto Scaling Plans). Dimensions are arbitrary name/value pairs that can be associated with a CloudWatch metric. Duplicate dimensions are not allowed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-metricdimension.html}
 **/
export interface AutoScalingPlansScalingPlanMetricDimension {
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
 * `PredefinedScalingMetricSpecification` is a subproperty of [TargetTrackingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-targettrackingconfiguration.html) that specifies a customized scaling metric for a target tracking configuration to use with AWS Auto Scaling (Auto Scaling Plans).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-predefinedscalingmetricspecification.html}
 **/
export interface AutoScalingPlansScalingPlanPredefinedScalingMetricSpecification {
  /**
   * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is `ALBRequestCountPerTarget` and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:
   */
  ResourceLabel?: Value<string>;
  /**
   * The metric type. The `ALBRequestCountPerTarget` metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALBRequestCountPerTarget | ASGAverageCPUUtilization | ASGAverageNetworkIn | ASGAverageNetworkOut | DynamoDBReadCapacityUtilization | DynamoDBWriteCapacityUtilization | EC2SpotFleetRequestAverageCPUUtilization | EC2SpotFleetRequestAverageNetworkIn | EC2SpotFleetRequestAverageNetworkOut | ECSServiceAverageCPUUtilization | ECSServiceAverageMemoryUtilization | RDSReaderAverageCPUUtilization | RDSReaderAverageDatabaseConnections`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedScalingMetricType: Value<string>;
}

/**
 * `CustomizedScalingMetricSpecification` is a subproperty of [TargetTrackingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-targettrackingconfiguration.html) that specifies a customized scaling metric for a target tracking configuration to use with AWS Auto Scaling (Auto Scaling Plans).
 *
 * To create your customized scaling metric specification:
 *
 * For information about terminology, available metrics, or how to publish new metrics, see [Amazon CloudWatch Concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the _Amazon CloudWatch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-customizedscalingmetricspecification.html}
 **/
export interface AutoScalingPlansScalingPlanCustomizedScalingMetricSpecification {
  /**
   * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the [Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
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
   * _Type_: List of [MetricDimension](aws-properties-autoscalingplans-scalingplan-metricdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: List<AutoScalingPlansScalingPlanMetricDimension>;
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
 * `TagFilter` is a subproperty of [ApplicationSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-applicationsource.html) that specifies a tag for an application source to use with AWS Auto Scaling (Auto Scaling Plans).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-tagfilter.html}
 **/
export interface AutoScalingPlansScalingPlanTagFilter {
  /**
   * The tag values (0 to 20).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
  /**
   * The tag key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * `TargetTrackingConfiguration` is a subproperty of [ScalingInstruction](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-scalinginstruction.html) that specifies a target tracking configuration to use with AWS Auto Scaling (Auto Scaling Plans).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-targettrackingconfiguration.html}
 **/
export interface AutoScalingPlansScalingPlanTargetTrackingConfiguration {
  /**
   * The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScaleOutCooldown?: Value<number>;
  /**
   * The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: Value<number>;
  /**
   * A predefined metric. You can specify either a predefined metric or a customized metric.
   *
   * _Required_: No
   *
   * _Type_: [PredefinedScalingMetricSpecification](aws-properties-autoscalingplans-scalingplan-predefinedscalingmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedScalingMetricSpecification?: AutoScalingPlansScalingPlanPredefinedScalingMetricSpecification;
  /**
   * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is `true`, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource.
   *
   * The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableScaleIn?: Value<boolean>;
  /**
   * The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScaleInCooldown?: Value<number>;
  /**
   * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EstimatedInstanceWarmup?: Value<number>;
  /**
   * A customized metric. You can specify either a predefined metric or a customized metric.
   *
   * _Required_: No
   *
   * _Type_: [CustomizedScalingMetricSpecification](aws-properties-autoscalingplans-scalingplan-customizedscalingmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomizedScalingMetricSpecification?: AutoScalingPlansScalingPlanCustomizedScalingMetricSpecification;
}

/**
 * `PredefinedLoadMetricSpecification` is a subproperty of [ScalingInstruction](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-scalinginstruction.html) that specifies a predefined load metric for predictive scaling to use with AWS Auto Scaling (Auto Scaling Plans).
 *
 * After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see [View Scaling Information for a Resource](https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource) in the _AWS Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-predefinedloadmetricspecification.html}
 **/
export interface AutoScalingPlansScalingPlanPredefinedLoadMetricSpecification {
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
  PredefinedLoadMetricType: Value<string>;
  /**
   * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is `ALBTargetGroupRequestCount` and there is a target group for an Application Load Balancer attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:
   */
  ResourceLabel?: Value<string>;
}

/**
 * `CustomizedLoadMetricSpecification` is a subproperty of [ScalingInstruction](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-scalinginstruction.html) that specifies a customized load metric for predictive scaling to use with AWS Auto Scaling (Auto Scaling Plans).
 *
 * For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the `Sum` and `Average` statistics that CloudWatch computes from metric data.
 *
 * When you choose a load metric, make sure that the required `Sum` and `Average` statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The `Sum` statistic must represent the total load on the resource, and the `Average` statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the `Sum` statistic represents the total request count processed by the group, then the `Average` statistic for the specified metric must represent the average request count processed by each instance of the group.
 *
 * If you publish your own metrics, you can aggregate the data points at a given interval and then publish the aggregated data points to CloudWatch. Before AWS Auto Scaling generates the forecast, it sums up all the metric data points that occurred within each hour to match the granularity period that is used in the forecast (60 minutes).
 *
 * For information about terminology, available metrics, or how to publish new metrics, see [Amazon CloudWatch Concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the _Amazon CloudWatch User Guide_.
 *
 * After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see [View Scaling Information for a Resource](https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource) in the _AWS Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-customizedloadmetricspecification.html}
 **/
export interface AutoScalingPlansScalingPlanCustomizedLoadMetricSpecification {
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
   * The statistic of the metric.
   *
   * _Allowed Values_: `Sum`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statistic: Value<string>;
  /**
   * The dimensions of the metric.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized load metric specification.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricDimension](aws-properties-autoscalingplans-scalingplan-metricdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: List<AutoScalingPlansScalingPlanMetricDimension>;
  /**
   * The unit of the metric.
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
 * `ApplicationSource` is a property of [ScalingPlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html) that specifies the application source to use with AWS Auto Scaling (Auto Scaling Plans). You can create one scaling plan per application source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscalingplans-scalingplan-applicationsource.html}
 **/
export interface AutoScalingPlansScalingPlanApplicationSource {
  /**
   * The Amazon Resource Name (ARN) of a CloudFormation stack.
   *
   * You must specify either a `CloudFormationStackARN` or `TagFilters`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudFormationStackARN?: Value<string>;
  /**
   * A set of tag filters (keys and values). Each tag filter specified must contain a key with values as optional. Each scaling plan can include up to 50 keys, and each key can include up to 20 values.
   *
   * Tags are part of the syntax that you use to specify the resources you want returned when configuring a scaling plan from the AWS Auto Scaling console. You do not need to specify valid tag filter values when you create a scaling plan with CloudFormation. The `Key` and `Values` properties can accept any value as long as the combination of values is unique across scaling plans. However, if you also want to use the AWS Auto Scaling console to edit the scaling plan, then you must specify valid values.
   *
   * You must specify either a `CloudFormationStackARN` or `TagFilters`.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFilter](aws-properties-autoscalingplans-scalingplan-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagFilters?: List<AutoScalingPlansScalingPlanTagFilter>;
}
export interface AutoScalingPlansScalingPlanProperties {
  /**
   * A CloudFormation stack or a set of tags. You can create one scaling plan per application source. The `ApplicationSource` property must be present to ensure interoperability with the AWS Auto Scaling console.
   *
   * _Required_: Yes
   *
   * _Type_: [ApplicationSource](aws-properties-autoscalingplans-scalingplan-applicationsource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationSource: AutoScalingPlansScalingPlanApplicationSource;
  /**
   * The scaling instructions.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ScalingInstruction](aws-properties-autoscalingplans-scalingplan-scalinginstruction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingInstructions: List<AutoScalingPlansScalingPlanScalingInstruction>;
}

/**
 * The `AWS::AutoScalingPlans::ScalingPlan` resource defines an AWS Auto Scaling scaling plan. A scaling plan is used to scale application resources to size them appropriately to ensure that enough resource is available in the application at peak times and to reduce allocated resource during periods of low utilization. The following resources can be added to a scaling plan:
 *
 * For more information, see the [AWS Auto Scaling User Guide](https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscalingplans-scalingplan.html}
 */
export interface AutoScalingPlansScalingPlanResource {
  Type: 'AWS::AutoScalingPlans::ScalingPlan';
  Properties: AutoScalingPlansScalingPlanProperties;
}
