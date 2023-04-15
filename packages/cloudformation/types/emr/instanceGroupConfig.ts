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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-autoscalingpolicy.html}
 **/
export interface EMRInstanceGroupConfigAutoScalingPolicy {
  Constraints: EMRInstanceGroupConfigScalingConstraints;
  Rules: List<EMRInstanceGroupConfigScalingRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-simplescalingpolicyconfiguration.html}
 **/
export interface EMRInstanceGroupConfigSimpleScalingPolicyConfiguration {
  AdjustmentType?: Value<string>;
  CoolDown?: Value<number>;
  ScalingAdjustment: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingrule.html}
 **/
export interface EMRInstanceGroupConfigScalingRule {
  Action: EMRInstanceGroupConfigScalingAction;
  Description?: Value<string>;
  Name: Value<string>;
  Trigger: EMRInstanceGroupConfigScalingTrigger;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig.html}
 **/
export interface EMRInstanceGroupConfigEbsBlockDeviceConfig {
  VolumeSpecification: EMRInstanceGroupConfigVolumeSpecification;
  VolumesPerInstance?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html}
 **/
export interface EMRInstanceGroupConfigConfiguration {
  Classification?: Value<string>;
  ConfigurationProperties?: { [key: string]: Value<string> };
  Configurations?: List<EMRInstanceGroupConfigConfiguration>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-metricdimension.html}
 **/
export interface EMRInstanceGroupConfigMetricDimension {
  Key: Value<string>;
  Value: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-cloudwatchalarmdefinition.html}
 **/
export interface EMRInstanceGroupConfigCloudWatchAlarmDefinition {
  ComparisonOperator: Value<string>;
  Dimensions?: List<EMRInstanceGroupConfigMetricDimension>;
  EvaluationPeriods?: Value<number>;
  MetricName: Value<string>;
  Namespace?: Value<string>;
  Period: Value<number>;
  Statistic?: Value<string>;
  Threshold: Value<number>;
  Unit?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingaction.html}
 **/
export interface EMRInstanceGroupConfigScalingAction {
  Market?: Value<string>;
  SimpleScalingPolicyConfiguration: EMRInstanceGroupConfigSimpleScalingPolicyConfiguration;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingtrigger.html}
 **/
export interface EMRInstanceGroupConfigScalingTrigger {
  CloudWatchAlarmDefinition: EMRInstanceGroupConfigCloudWatchAlarmDefinition;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig-volumespecification.html}
 **/
export interface EMRInstanceGroupConfigVolumeSpecification {
  Iops?: Value<number>;
  SizeInGB: Value<number>;
  VolumeType: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-ebsconfiguration.html}
 **/
export interface EMRInstanceGroupConfigEbsConfiguration {
  EbsBlockDeviceConfigs?: List<EMRInstanceGroupConfigEbsBlockDeviceConfig>;
  EbsOptimized?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancegroupconfig-scalingconstraints.html}
 **/
export interface EMRInstanceGroupConfigScalingConstraints {
  MaxCapacity: Value<number>;
  MinCapacity: Value<number>;
}
export interface EMRInstanceGroupConfigProperties {
  /**
   * `AutoScalingPolicy` is a subproperty of `InstanceGroupConfig`. `AutoScalingPolicy` defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. For more information, see [Using Automatic Scaling in Amazon EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html) in the _Amazon EMR Management Guide_.
   *
   * _Required_: No
   *
   * _Type_: [AutoScalingPolicy](aws-properties-elasticmapreduce-instancegroupconfig-autoscalingpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoScalingPolicy?: EMRInstanceGroupConfigAutoScalingPolicy;
  /**
   * If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify `OnDemandPrice` to set the amount equal to the On-Demand price, or specify an amount in USD.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BidPrice?: Value<string>;
  /**
   * Amazon EMR releases 4.x or later.
   *
   * The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
   *
   * _Required_: No
   *
   * _Type_: List of [Configuration](aws-properties-emr-cluster-configuration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Configurations?: List<EMRInstanceGroupConfigConfiguration>;
  /**
   * The custom AMI ID to use for the provisioned instance group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomAmiId?: Value<string>;
  /**
   * `EbsConfiguration` determines the EBS volumes to attach to EMR cluster instances.
   *
   * _Required_: No
   *
   * _Type_: [EbsConfiguration](aws-properties-emr-ebsconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EbsConfiguration?: EMRInstanceGroupConfigEbsConfiguration;
  /**
   * Target number of instances for the instance group.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceCount: Value<number>;
  /**
   * The role of the instance group in the cluster.
   *
   * _Allowed Values_: TASK
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceRole: Value<string>;
  /**
   * The EC2 instance type for all instances in the instance group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType: Value<string>;
  /**
   * The ID of an Amazon EMR cluster that you want to associate this instance group with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobFlowId: Value<string>;
  /**
   * Market type of the EC2 instances used to create a cluster node.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ON_DEMAND | SPOT`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Market?: Value<string>;
  /**
   * Friendly name given to the instance group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Use `InstanceGroupConfig` to define instance groups for an EMR cluster. A cluster can not use both instance groups and instance fleets. For more information, see [Create a Cluster with Instance Fleets or Uniform Instance Groups](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html) in the _Amazon EMR Management Guide_.
 *
 * **Important**
 *
 * You can currently only add task instance groups to a cluster with this resource. If you use this resource, CloudFormation waits for the cluster launch to complete before adding the task instance group to the cluster. In order to add task instance groups to the cluster as part of the cluster launch and minimize delays in provisioning task nodes, use the `TaskInstanceGroups` subproperty for the [AWS::EMR::Cluster JobFlowInstancesConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-jobflowinstancesconfig.html) property instead. To use this subproperty, see [AWS::EMR::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html) for examples.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html}
 */
export interface EMRInstanceGroupConfigResource {
  Type: 'AWS::EMR::InstanceGroupConfig';
  Properties: EMRInstanceGroupConfigProperties;
}
