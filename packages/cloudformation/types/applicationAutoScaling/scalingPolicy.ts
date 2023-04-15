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
 * `StepScalingPolicyConfiguration` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html) resource that specifies a step scaling policy configuration for Application Auto Scaling.
 *
 * For more information, see [Step scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the _Application Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html}
 **/
export interface ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration {
  /**
   * Specifies whether the `ScalingAdjustment` value in the `StepAdjustment` property is an absolute number or a percentage of the current capacity.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ChangeInCapacity | ExactCapacity | PercentChangeInCapacity`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdjustmentType?: Value<string>;
  /**
   * The amount of time, in seconds, to wait for a previous scaling activity to take effect.
   *
   * With scale-out policies, the intention is to continuously (but not excessively) scale out. After Application Auto Scaling successfully scales out using a step scaling policy, it starts to calculate the cooldown time. The scaling policy won't increase the desired capacity again unless either a larger scale out is triggered or the cooldown period ends. While the cooldown period is in effect, capacity added by the initiating scale-out activity is calculated as part of the desired capacity for the next scale-out activity. For example, when an alarm triggers a step scaling policy to increase the capacity by 2, the scaling activity completes successfully, and a cooldown period starts. If the alarm triggers again during the cooldown period but at a more aggressive step adjustment of 3, the previous increase of 2 is considered part of the current capacity. Therefore, only 1 is added to the capacity.
   *
   * With scale-in policies, the intention is to scale in conservatively to protect your application’s availability, so scale-in activities are blocked until the cooldown period has expired. However, if another alarm triggers a scale-out activity during the cooldown period after a scale-in activity, Application Auto Scaling scales out the target immediately. In this case, the cooldown period for the scale-in activity stops and doesn't complete.
   *
   * Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups and a default value of 300 for the following scalable targets:
   */
  Cooldown?: Value<number>;
  /**
   * The aggregation type for the CloudWatch metrics. Valid values are `Minimum`, `Maximum`, and `Average`. If the aggregation type is null, the value is treated as `Average`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Average | Maximum | Minimum`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricAggregationType?: Value<string>;
  /**
   * The minimum value to scale by when the adjustment type is `PercentChangeInCapacity`. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a `MinAdjustmentMagnitude` of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a `MinAdjustmentMagnitude` of 2, Application Auto Scaling scales out the service by 2 tasks.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinAdjustmentMagnitude?: Value<number>;
  /**
   * A set of adjustments that enable you to scale based on the size of the alarm breach.
   *
   * At least one step adjustment is required if you are adding a new step scaling policy configuration.
   *
   * _Required_: No
   *
   * _Type_: List of [StepAdjustment](aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-stepadjustment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepAdjustments?: List<ApplicationAutoScalingScalingPolicyStepAdjustment>;
}

/**
 * Contains predefined metric specification information for a target tracking scaling policy for Application Auto Scaling.
 *
 * `PredefinedMetricSpecification` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingScalingPolicyConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification.html}
 **/
export interface ApplicationAutoScalingScalingPolicyPredefinedMetricSpecification {
  /**
   * The metric type. The `ALBRequestCountPerTarget` metric type applies only to Spot fleet requests and ECS services.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALBRequestCountPerTarget | AppStreamAverageCapacityUtilization | CassandraReadCapacityUtilization | CassandraWriteCapacityUtilization | ComprehendInferenceUtilization | DynamoDBReadCapacityUtilization | DynamoDBWriteCapacityUtilization | EC2SpotFleetRequestAverageCPUUtilization | EC2SpotFleetRequestAverageNetworkIn | EC2SpotFleetRequestAverageNetworkOut | ECSServiceAverageCPUUtilization | ECSServiceAverageMemoryUtilization | ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage | ElastiCachePrimaryEngineCPUUtilization | ElastiCacheReplicaEngineCPUUtilization | KafkaBrokerStorageUtilization | LambdaProvisionedConcurrencyUtilization | NeptuneReaderAverageCPUUtilization | RDSReaderAverageCPUUtilization | RDSReaderAverageDatabaseConnections | SageMakerVariantInvocationsPerInstance`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedMetricType: Value<string>;
  /**
   * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is `ALBRequestCountPerTarget` and there is a target group attached to the Spot Fleet or ECS service.
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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-stepadjustment.html}
 **/
export interface ApplicationAutoScalingScalingPolicyStepAdjustment {
  MetricIntervalLowerBound?: Value<number>;
  MetricIntervalUpperBound?: Value<number>;
  ScalingAdjustment: Value<number>;
}

/**
 * `TargetTrackingScalingPolicyConfiguration` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html) resource that specifies a target tracking scaling policy configuration for Application Auto Scaling. Use a target tracking scaling policy to adjust the capacity of the specified scalable target in response to actual workloads, so that resource utilization remains at or near the target utilization value.
 *
 * For more information, see [Target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) in the _Application Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html}
 **/
export interface ApplicationAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
  /**
   * A customized metric. You can specify either a predefined metric or a customized metric.
   *
   * _Required_: No
   *
   * _Type_: [CustomizedMetricSpecification](aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomizedMetricSpecification?: ApplicationAutoScalingScalingPolicyCustomizedMetricSpecification;
  /**
   * Indicates whether scale in by the target tracking scaling policy is disabled. If the value is `true`, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableScaleIn?: Value<boolean>;
  /**
   * A predefined metric. You can specify either a predefined metric or a customized metric.
   *
   * _Required_: No
   *
   * _Type_: [PredefinedMetricSpecification](aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedMetricSpecification?: ApplicationAutoScalingScalingPolicyPredefinedMetricSpecification;
  /**
   * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.
   *
   * With the _scale-in cooldown period_, the intention is to scale in conservatively to protect your application’s availability, so scale-in activities are blocked until the cooldown period has expired. However, if another alarm triggers a scale-out activity during the scale-in cooldown period, Application Auto Scaling scales out the target immediately. In this case, the scale-in cooldown period stops and doesn't complete.
   *
   * Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups and a default value of 300 for the following scalable targets:
   */
  ScaleInCooldown?: Value<number>;
  /**
   * The amount of time, in seconds, to wait for a previous scale-out activity to take effect.
   *
   * With the _scale-out cooldown period_, the intention is to continuously (but not excessively) scale out. After Application Auto Scaling successfully scales out using a target tracking scaling policy, it starts to calculate the cooldown time. The scaling policy won't increase the desired capacity again unless either a larger scale out is triggered or the cooldown period ends. While the cooldown period is in effect, the capacity added by the initiating scale-out activity is calculated as part of the desired capacity for the next scale-out activity.
   *
   * Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups and a default value of 300 for the following scalable targets:
   */
  ScaleOutCooldown?: Value<number>;
  /**
   * The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: Value<number>;
}

/**
 * Contains customized metric specification information for a target tracking scaling policy for Application Auto Scaling.
 *
 * For information about the available metrics for a service, see [AWS services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the _Amazon CloudWatch User Guide_.
 *
 * To create your customized metric specification:
 *
 * For an example of how creating new metrics can be useful, see [Scaling based on Amazon SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html) in the _Amazon EC2 Auto Scaling User Guide_. This topic mentions Auto Scaling groups, but the same scenario for Amazon SQS can apply to the target tracking scaling policies that you create for a Spot Fleet by using Application Auto Scaling.
 *
 * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html).
 *
 * `CustomizedMetricSpecification` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingScalingPolicyConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html}
 **/
export interface ApplicationAutoScalingScalingPolicyCustomizedMetricSpecification {
  /**
   * The dimensions of the metric.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricDimension](aws-properties-applicationautoscaling-scalingpolicy-metricdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: List<ApplicationAutoScalingScalingPolicyMetricDimension>;
  /**
   * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that's returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
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
   * The unit of the metric. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the _Amazon CloudWatch API Reference_.
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
 * `MetricDimension` specifies a name/value pair that is part of the identity of a CloudWatch metric for the `Dimensions` property of the [AWS::ApplicationAutoScaling::ScalingPolicy CustomizedMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html) property type. Duplicate dimensions are not allowed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-metricdimension.html}
 **/
export interface ApplicationAutoScalingScalingPolicyMetricDimension {
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
}
export interface ApplicationAutoScalingScalingPolicyProperties {
  /**
   * The name of the scaling policy.
   *
   * Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing `AWS::ApplicationAutoScaling::ScalingPolicy` resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `p{Print}+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PolicyName: Value<string>;
  /**
   * The scaling policy type.
   *
   * The following policy types are supported:
   *
   * `TargetTrackingScaling`—Not supported for Amazon EMR
   *
   * `StepScaling`—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `StepScaling | TargetTrackingScaling`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyType: Value<string>;
  /**
   * The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
   */
  ResourceId?: Value<string>;
  /**
   * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
   */
  ScalableDimension?: Value<string>;
  /**
   * The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the `AWS::ApplicationAutoScaling::ScalableTarget` resource.
   *
   * You must specify either the `ScalingTargetId` property, or the `ResourceId`, `ScalableDimension`, and `ServiceNamespace` properties, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScalingTargetId?: Value<string>;
  /**
   * The namespace of the AWS service that provides the resource, or a `custom-resource`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `appstream | cassandra | comprehend | custom-resource | dynamodb | ec2 | ecs | elasticache | elasticmapreduce | kafka | lambda | neptune | rds | sagemaker`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceNamespace?: Value<string>;
  /**
   * A step scaling policy.
   *
   * _Required_: No
   *
   * _Type_: [StepScalingPolicyConfiguration](aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepScalingPolicyConfiguration?: ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration;
  /**
   * A target tracking scaling policy.
   *
   * _Required_: No
   *
   * _Type_: [TargetTrackingScalingPolicyConfiguration](aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetTrackingScalingPolicyConfiguration?: ApplicationAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration;
}

/**
 * The `AWS::ApplicationAutoScaling::ScalingPolicy` resource defines a scaling policy that Application Auto Scaling uses to adjust the capacity of a scalable target.
 *
 * For more information, see [Target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and [Step scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the _Application Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html}
 */
export interface ApplicationAutoScalingScalingPolicyResource {
  Type: 'AWS::ApplicationAutoScaling::ScalingPolicy';
  Properties: ApplicationAutoScalingScalingPolicyProperties;
}
