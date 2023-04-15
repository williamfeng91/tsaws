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
 * `NetworkBandwidthGbpsRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum network bandwidth for an instance type, in Gbps.
 *
 * **Note**
 *
 * Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the _Amazon EC2 User Guide for Linux Instances_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-networkbandwidthgbpsrequest.html}
 **/
export interface AutoScalingAutoScalingGroupNetworkBandwidthGbpsRequest {
  /**
   * The maximum amount of network bandwidth, in gigabits per second (Gbps).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The minimum amount of network bandwidth, in gigabits per second (Gbps).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-metricscollection.html}
 **/
export interface AutoScalingAutoScalingGroupMetricsCollection {
  Granularity: Value<string>;
  Metrics?: List<Value<string>>;
}

/**
 * Use this structure to specify the distribution of On-Demand Instances and Spot Instances and the allocation strategies used to fulfill On-Demand and Spot capacities for a mixed instances policy.
 *
 * For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * `InstancesDistribution` is a property of the [AWS::AutoScaling::AutoScalingGroup MixedInstancesPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-mixedinstancespolicy.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-instancesdistribution.html}
 **/
export interface AutoScalingAutoScalingGroupInstancesDistribution {
  /**
   * The allocation strategy to apply to your On-Demand Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
   *
   * The following lists the valid values:
   *
   * lowest-price
   *
   * Uses price to determine which instance types are the highest priority, launching the lowest priced instance types within an Availability Zone first. This is the default value for Auto Scaling groups that specify `InstanceRequirements`.
   *
   * prioritized
   *
   * You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling launches your highest priority instance types first. If all your On-Demand capacity cannot be fulfilled using your highest priority instance type, then Amazon EC2 Auto Scaling launches the remaining capacity using the second priority instance type, and so on. This is the default value for Auto Scaling groups that don't specify `InstanceRequirements` and cannot be used for groups that do.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnDemandAllocationStrategy?: Value<string>;
  /**
   * The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is launched first as your group scales.
   *
   * This number has the same unit of measurement as the group's desired capacity. If you change the default unit of measurement (number of instances) by specifying weighted capacity values in your launch template overrides list, or by changing the default desired capacity type setting of the group, you must specify this number using the same unit of measurement.
   *
   * Default: 0
   *
   * An update to this setting means a gradual replacement of instances to adjust the current On-Demand Instance levels. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  OnDemandBaseCapacity?: Value<number>;
  /**
   * Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond `OnDemandBaseCapacity`. Expressed as a number (for example, 20 specifies 20% On-Demand Instances, 80% Spot Instances). If set to 100, only On-Demand Instances are used.
   *
   * Default: 100
   *
   * An update to this setting means a gradual replacement of instances to adjust the current On-Demand and Spot Instance levels for your additional capacity higher than the base capacity. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the previous ones.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  OnDemandPercentageAboveBaseCapacity?: Value<number>;
  /**
   * The allocation strategy to apply to your Spot Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
   *
   * The following lists the valid values:
   *
   * capacity-optimized
   *
   * Requests Spot Instances using pools that are optimally chosen based on the available Spot capacity. This strategy has the lowest risk of interruption. To give certain instance types a higher chance of launching first, use `capacity-optimized-prioritized`.
   *
   * capacity-optimized-prioritized
   *
   * You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling honors the instance type priorities on a best effort basis but optimizes for capacity first. Note that if the On-Demand allocation strategy is set to `prioritized`, the same priority is applied when fulfilling On-Demand capacity. This is not a valid value for Auto Scaling groups that specify `InstanceRequirements`.
   *
   * lowest-price
   *
   * Requests Spot Instances using the lowest priced pools within an Availability Zone, across the number of Spot pools that you specify for the `SpotInstancePools` property. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. This is the default value, but it might lead to high interruption rates because this strategy only considers instance price and not available capacity.
   *
   * price-capacity-optimized (recommended)
   *
   * The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpotAllocationStrategy?: Value<string>;
  /**
   * The number of Spot Instance pools across which to allocate your Spot Instances. The Spot pools are determined from the different instance types in the overrides. Valid only when the `SpotAllocationStrategy` is `lowest-price`. Value must be in the range of 1–20.
   *
   * Default: 2
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpotInstancePools?: Value<number>;
  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. If your maximum price is lower than the Spot price for the instance types that you selected, your Spot Instances are not launched. We do not recommend specifying a maximum price because it can lead to increased interruptions. When Spot Instances launch, you pay the current Spot price. To remove a maximum price that you previously set, include the property but specify an empty string ("") for the value.
   *
   * If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify one.
   *
   * Valid Range: Minimum value of 0.001
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpotMaxPrice?: Value<string>;
}

/**
 * `TotalLocalStorageGBRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum total local storage size for an instance type, in GB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-totallocalstoragegbrequest.html}
 **/
export interface AutoScalingAutoScalingGroupTotalLocalStorageGBRequest {
  /**
   * The storage maximum in GB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The storage minimum in GB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 * `NetworkInterfaceCountRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum number of network interfaces for an instance type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-networkinterfacecountrequest.html}
 **/
export interface AutoScalingAutoScalingGroupNetworkInterfaceCountRequest {
  /**
   * The maximum number of network interfaces.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The minimum number of network interfaces.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 * Use this structure to launch multiple instance types and On-Demand Instances and Spot Instances within a single Auto Scaling group.
 *
 * A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch instances and help optimize your costs. For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * You can create a mixed instances policy for new and existing Auto Scaling groups. You must use a launch template to configure the policy. You cannot use a launch configuration.
 *
 * There are key differences between Spot Instances and On-Demand Instances:
 *
 * When a Spot Instance is terminated, Amazon EC2 Auto Scaling group attempts to launch a replacement instance to maintain the desired capacity for the group.
 *
 * `MixedInstancesPolicy` is a property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-group-mixedinstancespolicy.html}
 **/
export interface AutoScalingAutoScalingGroupMixedInstancesPolicy {
  /**
   * The instances distribution.
   *
   * _Required_: No
   *
   * _Type_: [InstancesDistribution](aws-properties-autoscaling-autoscalinggroup-instancesdistribution.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstancesDistribution?: AutoScalingAutoScalingGroupInstancesDistribution;
  /**
   * One or more launch templates and the instance types (overrides) that are used to launch EC2 instances to fulfill On-Demand and Spot capacities.
   *
   * _Required_: Yes
   *
   * _Type_: [LaunchTemplate](aws-properties-autoscaling-autoscalinggroup-launchtemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplate: AutoScalingAutoScalingGroupLaunchTemplate;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-notificationconfigurations.html}
 **/
export interface AutoScalingAutoScalingGroupNotificationConfiguration {
  NotificationTypes?: List<Value<string>>;
  TopicARN: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-tags.html}
 **/
export interface AutoScalingAutoScalingGroupTagProperty {
  Key: Value<string>;
  PropagateAtLaunch: Value<boolean>;
  Value: Value<string>;
}

/**
 * `MemoryGiBPerVCpuRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum amount of memory per vCPU for an instance type, in GiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-memorygibpervcpurequest.html}
 **/
export interface AutoScalingAutoScalingGroupMemoryGiBPerVCpuRequest {
  /**
   * The memory maximum in GiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The memory minimum in GiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 * Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed instances policy:
 *
 * Specify the instance types that you want, or define your instance requirements instead and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements. This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when fulfilling Spot and On-Demand capacities. You can view which instance types are matched before you apply the instance requirements to your Auto Scaling group.
 *
 * After you define your instance requirements, you don't have to keep updating these settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance requirements of the Auto Scaling group to determine whether a new EC2 instance type can be used.
 *
 * `LaunchTemplateOverrides` is a property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplate.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-launchtemplateoverrides.html}
 **/
export interface AutoScalingAutoScalingGroupLaunchTemplateOverrides {
  /**
   * The instance requirements. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.
   *
   * You can specify up to four separate sets of instance requirements per Auto Scaling group. This is useful for provisioning instances from different Amazon Machine Images (AMIs) in the same Auto Scaling group. To do this, create the AMIs and create a new launch template for each AMI. Then, create a compatible set of instance requirements for each launch template.
   *
   * If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * _Required_: No
   *
   * _Type_: [InstanceRequirements](aws-properties-autoscaling-autoscalinggroup-instancerequirements.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceRequirements?: AutoScalingAutoScalingGroupInstanceRequirements;
  /**
   * The instance type, such as `m3.xlarge`. You must specify an instance type that is supported in your requested Region and Availability Zones. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * You can specify up to 40 instance types per Auto Scaling group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType?: Value<string>;
  /**
   * Provides a launch template for the specified instance type or set of instance requirements. For example, some instance types might require a launch template with a different AMI. If not provided, Amazon EC2 Auto Scaling uses the launch template that's specified in the `LaunchTemplate` definition. For more information, see [Specifying a different launch template for an instance type](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-launch-template-overrides.html) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * You can specify up to 20 launch templates per Auto Scaling group. The launch templates specified in the overrides and in the `LaunchTemplate` definition count towards this limit.
   *
   * _Required_: No
   *
   * _Type_: [LaunchTemplateSpecification](aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateSpecification?: AutoScalingAutoScalingGroupLaunchTemplateSpecification;
  /**
   * If you provide a list of instance types to use, you can specify the number of capacity units provided by each instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic. When a Spot or On-Demand Instance is launched, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling launches instances until the desired capacity is totally fulfilled, even if this results in an overage. For example, if there are two units remaining to fulfill capacity, and Amazon EC2 Auto Scaling can only launch an instance with a `WeightedCapacity` of five units, the instance is launched, and the desired capacity is exceeded by three units. For more information, see [Configure instance weighting for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-instance-weighting.html) in the _Amazon EC2 Auto Scaling User Guide_. Value must be in the range of 1-999.
   *
   * If you specify a value for `WeightedCapacity` for one instance type, you must specify a value for `WeightedCapacity` for all of them.
   *
   * Every Auto Scaling group has three size parameters (`DesiredCapacity`, `MaxSize`, and `MinSize`). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightedCapacity?: Value<string>;
}

/**
 * `AcceleratorTotalMemoryMiBRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum total memory size for the accelerators for an instance type, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-acceleratortotalmemorymibrequest.html}
 **/
export interface AutoScalingAutoScalingGroupAcceleratorTotalMemoryMiBRequest {
  /**
   * The memory maximum in MiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The memory minimum in MiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 * `BaselineEbsBandwidthMbpsRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum baseline bandwidth performance for an instance type, in Mbps.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-baselineebsbandwidthmbpsrequest.html}
 **/
export interface AutoScalingAutoScalingGroupBaselineEbsBandwidthMbpsRequest {
  /**
   * The maximum value in Mbps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The minimum value in Mbps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 * `VCpuCountRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum number of vCPUs for an instance type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-vcpucountrequest.html}
 **/
export interface AutoScalingAutoScalingGroupVCpuCountRequest {
  /**
   * The maximum number of vCPUs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The minimum number of vCPUs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 * `AcceleratorCountRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum number of accelerators for an instance type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-acceleratorcountrequest.html}
 **/
export interface AutoScalingAutoScalingGroupAcceleratorCountRequest {
  /**
   * The maximum value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The minimum value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}

/**
 * `LifecycleHookSpecification` specifies a lifecycle hook for the `LifecycleHookSpecificationList` property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html) resource. A lifecycle hook specifies actions to perform when Amazon EC2 Auto Scaling launches or terminates instances.
 *
 * For more information, see [Amazon EC2 Auto Scaling lifecycle hooks](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html) in the _Amazon EC2 Auto Scaling User Guide_. You can find a sample template snippet in the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-lifecyclehook.html#aws-resource-as-lifecyclehook--examples) section of the `AWS::AutoScaling::LifecycleHook` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-lifecyclehookspecification.html}
 **/
export interface AutoScalingAutoScalingGroupLifecycleHookSpecification {
  /**
   * The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is `ABANDON`.
   *
   * Valid values: `CONTINUE` | `ABANDON`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultResult?: Value<string>;
  /**
   * The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from `30` to `7200` seconds. The default value is `3600` seconds (1 hour).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeartbeatTimeout?: Value<number>;
  /**
   * The name of the lifecycle hook.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[A-Za-z0-9-_/]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LifecycleHookName: Value<string>;
  /**
   * The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.
   */
  LifecycleTransition: Value<string>;
  /**
   * Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
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
  NotificationMetadata?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook. You can specify an Amazon SNS topic or an Amazon SQS queue.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationTargetARN?: Value<string>;
  /**
   * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. For information about creating this role, see [Configure a notification target for a lifecycle hook](https://docs.aws.amazon.com/autoscaling/ec2/userguide/prepare-for-lifecycle-notifications.html#lifecycle-hook-notification-target) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN?: Value<string>;
}

/**
 * Specifies a launch template to use when provisioning EC2 instances for an Auto Scaling group.
 *
 * You must specify the following:
 *
 * `LaunchTemplateSpecification` is property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html) resource. It is also a property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplate.html) and [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property types.
 *
 * For information about creating a launch template, see [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) and [Create a launch template for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * For examples of launch templates, see [Auto scaling template snippets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-autoscaling.html) and the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate--examples) section in the `AWS::EC2::LaunchTemplate` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.html}
 **/
export interface AutoScalingAutoScalingGroupLaunchTemplateSpecification {
  /**
   * The ID of the launch template.
   *
   * You must specify the `LaunchTemplateID` or the `LaunchTemplateName`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateId?: Value<string>;
  /**
   * The name of the launch template.
   *
   * You must specify the `LaunchTemplateName` or the `LaunchTemplateID`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateName?: Value<string>;
  /**
   * The version number of the launch template.
   *
   * Specifying `$Latest` or `$Default` for the template version number is not supported. However, you can specify `LatestVersionNumber` or `DefaultVersionNumber` using the `Fn::GetAtt` intrinsic function. For more information, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).
   *
   * For an example of using the `Fn::GetAtt` function, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html#aws-properties-as-group--examples) section of the `AWS::AutoScaling::AutoScalingGroup` resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version: Value<string>;
}

/**
 * The attributes for the instance types for a mixed instances policy. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.
 *
 * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 *
 * To limit the list of instance types from which Amazon EC2 Auto Scaling can identify matching instance types, you can use one of the following parameters, but not both in the same request:
 *
 * **Note**
 *
 * You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
 *
 * For an example template, see [Auto scaling template snippets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-autoscaling.html).
 *
 * For more information, see [Creating an Auto Scaling group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html) in the _Amazon EC2 Auto Scaling User Guide_. For help determining which instance types match your attributes before you apply them to your Auto Scaling group, see [Preview instance types with specified attributes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements) in the _Amazon EC2 User Guide for Linux Instances_.
 *
 * `InstanceRequirements` is a property of the `LaunchTemplateOverrides` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplate.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-instancerequirements.html}
 **/
export interface AutoScalingAutoScalingGroupInstanceRequirements {
  /**
   * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) for an instance type.
   *
   * To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [AcceleratorCountRequest](aws-properties-autoscaling-autoscalinggroup-acceleratorcountrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcceleratorCount?: AutoScalingAutoScalingGroupAcceleratorCountRequest;
  /**
   * Indicates whether instance types must have accelerators by specific manufacturers.
   */
  AcceleratorManufacturers?: List<Value<string>>;
  /**
   * Lists the accelerators that must be on an instance type.
   */
  AcceleratorNames?: List<Value<string>>;
  /**
   * The minimum and maximum total memory size for the accelerators on an instance type, in MiB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [AcceleratorTotalMemoryMiBRequest](aws-properties-autoscaling-autoscalinggroup-acceleratortotalmemorymibrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcceleratorTotalMemoryMiB?: AutoScalingAutoScalingGroupAcceleratorTotalMemoryMiBRequest;
  /**
   * Lists the accelerator types that must be on an instance type.
   */
  AcceleratorTypes?: List<Value<string>>;
  /**
   * The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
   *
   * You can use strings with one or more wild cards, represented by an asterisk (`*`), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`, Amazon EC2 Auto Scaling will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 Auto Scaling will allow all the M5a instance types, but not the M5n instance types.
   *
   * If you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.
   *
   * Default: All instance types
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedInstanceTypes?: List<Value<string>>;
  /**
   * Indicates whether bare metal instance types are included, excluded, or required.
   *
   * Default: `excluded`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `excluded | included | required`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BareMetal?: Value<string>;
  /**
   * The minimum and maximum baseline bandwidth performance for an instance type, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [BaselineEbsBandwidthMbpsRequest](aws-properties-autoscaling-autoscalinggroup-baselineebsbandwidthmbpsrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaselineEbsBandwidthMbps?: AutoScalingAutoScalingGroupBaselineEbsBandwidthMbpsRequest;
  /**
   * Indicates whether burstable performance instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * Default: `excluded`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `excluded | included | required`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BurstablePerformance?: Value<string>;
  /**
   * Lists which specific CPU manufacturers to include.
   */
  CpuManufacturers?: List<Value<string>>;
  /**
   * The instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (`*`), to exclude an instance family, type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 Auto Scaling will exclude all the M5a instance types, but not the M5n instance types.
   *
   * If you specify `ExcludedInstanceTypes`, you can't specify `AllowedInstanceTypes`.
   *
   * Default: No excluded instance types
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedInstanceTypes?: List<Value<string>>;
  /**
   * Indicates whether current or previous generation instance types are included.
   */
  InstanceGenerations?: List<Value<string>>;
  /**
   * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, see [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * Default: `included`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `excluded | included | required`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalStorage?: Value<string>;
  /**
   * Indicates the type of local storage that is required.
   */
  LocalStorageTypes?: List<Value<string>>;
  /**
   * The minimum and maximum amount of memory per vCPU for an instance type, in GiB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [MemoryGiBPerVCpuRequest](aws-properties-autoscaling-autoscalinggroup-memorygibpervcpurequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemoryGiBPerVCpu?: AutoScalingAutoScalingGroupMemoryGiBPerVCpuRequest;
  /**
   * The minimum and maximum instance memory size for an instance type, in MiB.
   *
   * _Required_: No
   *
   * _Type_: [MemoryMiBRequest](aws-properties-autoscaling-autoscalinggroup-memorymibrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemoryMiB?: AutoScalingAutoScalingGroupMemoryMiBRequest;
  /**
   * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [NetworkBandwidthGbpsRequest](aws-properties-autoscaling-autoscalinggroup-networkbandwidthgbpsrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkBandwidthGbps?: AutoScalingAutoScalingGroupNetworkBandwidthGbpsRequest;
  /**
   * The minimum and maximum number of network interfaces for an instance type.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [NetworkInterfaceCountRequest](aws-properties-autoscaling-autoscalinggroup-networkinterfacecountrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaceCount?: AutoScalingAutoScalingGroupNetworkInterfaceCountRequest;
  /**
   * The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the least expensive current generation M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as `999999`.
   *
   * If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.
   *
   * Default: `20`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnDemandMaxPricePercentageOverLowestPrice?: Value<number>;
  /**
   * Indicates whether instance types must provide On-Demand Instance hibernation support.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequireHibernateSupport?: Value<boolean>;
  /**
   * The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the least expensive current generation M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as `999999`.
   *
   * If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.
   *
   * Default: `100`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpotMaxPricePercentageOverLowestPrice?: Value<number>;
  /**
   * The minimum and maximum total local storage size for an instance type, in GB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [TotalLocalStorageGBRequest](aws-properties-autoscaling-autoscalinggroup-totallocalstoragegbrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalLocalStorageGB?: AutoScalingAutoScalingGroupTotalLocalStorageGBRequest;
  /**
   * The minimum and maximum number of vCPUs for an instance type.
   *
   * _Required_: No
   *
   * _Type_: [VCpuCountRequest](aws-properties-autoscaling-autoscalinggroup-vcpucountrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VCpuCount?: AutoScalingAutoScalingGroupVCpuCountRequest;
}

/**
 * Use this structure to specify the launch templates and instance types (overrides) for a mixed instances policy.
 *
 * `LaunchTemplate` is a property of the [AWS::AutoScaling::AutoScalingGroup MixedInstancesPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-mixedinstancespolicy.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-as-mixedinstancespolicy-launchtemplate.html}
 **/
export interface AutoScalingAutoScalingGroupLaunchTemplate {
  /**
   * The launch template.
   *
   * _Required_: Yes
   *
   * _Type_: [LaunchTemplateSpecification](aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateSpecification: AutoScalingAutoScalingGroupLaunchTemplateSpecification;
  /**
   * Any properties that you specify override the same properties in the launch template.
   *
   * _Required_: No
   *
   * _Type_: List of [LaunchTemplateOverrides](aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Overrides?: List<AutoScalingAutoScalingGroupLaunchTemplateOverrides>;
}

/**
 * `MemoryMiBRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum instance memory size for an instance type, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-memorymibrequest.html}
 **/
export interface AutoScalingAutoScalingGroupMemoryMiBRequest {
  /**
   * The memory maximum in MiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The memory minimum in MiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
}
export interface AutoScalingAutoScalingGroupProperties {
  AutoScalingGroupName?: Value<string>;
  AvailabilityZones?: List<Value<string>>;
  CapacityRebalance?: Value<boolean>;
  Context?: Value<string>;
  Cooldown?: Value<string>;
  DefaultInstanceWarmup?: Value<number>;
  DesiredCapacity?: Value<string>;
  DesiredCapacityType?: Value<string>;
  HealthCheckGracePeriod?: Value<number>;
  HealthCheckType?: Value<string>;
  InstanceId?: Value<string>;
  LaunchConfigurationName?: Value<string>;
  LaunchTemplate?: AutoScalingAutoScalingGroupLaunchTemplateSpecification;
  LifecycleHookSpecificationList?: List<AutoScalingAutoScalingGroupLifecycleHookSpecification>;
  LoadBalancerNames?: List<Value<string>>;
  MaxInstanceLifetime?: Value<number>;
  MaxSize: Value<string>;
  MetricsCollection?: List<AutoScalingAutoScalingGroupMetricsCollection>;
  MinSize: Value<string>;
  MixedInstancesPolicy?: AutoScalingAutoScalingGroupMixedInstancesPolicy;
  NewInstancesProtectedFromScaleIn?: Value<boolean>;
  NotificationConfigurations?: List<AutoScalingAutoScalingGroupNotificationConfiguration>;
  PlacementGroup?: Value<string>;
  ServiceLinkedRoleARN?: Value<string>;
  Tags?: List<AutoScalingAutoScalingGroupTagProperty>;
  TargetGroupARNs?: List<Value<string>>;
  TerminationPolicies?: List<Value<string>>;
  VPCZoneIdentifier?: List<Value<string>>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html}
 */
export interface AutoScalingAutoScalingGroupResource {
  Type: 'AWS::AutoScaling::AutoScalingGroup';
  Properties: AutoScalingAutoScalingGroupProperties;
}
