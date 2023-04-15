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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-computelimits.html}
 **/
export interface EMRClusterComputeLimits {
  MaximumCapacityUnits: Value<number>;
  MaximumCoreCapacityUnits?: Value<number>;
  MaximumOnDemandCapacityUnits?: Value<number>;
  MinimumCapacityUnits: Value<number>;
  UnitType: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-spotprovisioningspecification.html}
 **/
export interface EMRClusterSpotProvisioningSpecification {
  AllocationStrategy?: Value<string>;
  BlockDurationMinutes?: Value<number>;
  TimeoutAction: Value<string>;
  TimeoutDurationMinutes: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-bootstrapactionconfig.html}
 **/
export interface EMRClusterBootstrapActionConfig {
  Name: Value<string>;
  ScriptBootstrapAction: EMRClusterScriptBootstrapActionConfig;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-ebsblockdeviceconfig.html}
 **/
export interface EMRClusterEbsBlockDeviceConfig {
  VolumeSpecification: EMRClusterVolumeSpecification;
  VolumesPerInstance?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-keyvalue.html}
 **/
export interface EMRClusterKeyValue {
  Key?: Value<string>;
  Value?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-volumespecification.html}
 **/
export interface EMRClusterVolumeSpecification {
  Iops?: Value<number>;
  SizeInGB: Value<number>;
  VolumeType: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancegroupconfig.html}
 **/
export interface EMRClusterInstanceGroupConfig {
  AutoScalingPolicy?: EMRClusterAutoScalingPolicy;
  BidPrice?: Value<string>;
  Configurations?: List<EMRClusterConfiguration>;
  CustomAmiId?: Value<string>;
  EbsConfiguration?: EMRClusterEbsConfiguration;
  InstanceCount: Value<number>;
  InstanceType: Value<string>;
  Market?: Value<string>;
  Name?: Value<string>;
}

/**
 * `Configurations` is a property of the `AWS::EMR::Cluster` resource that specifies the configuration of applications on an Amazon EMR cluster.
 *
 * Configurations are optional. You can use them to have EMR customize applications and software bundled with Amazon EMR when a cluster is created. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html).
 *
 * **Note**
 *
 * Applies only to Amazon EMR releases 4.0 and later.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-configuration.html}
 **/
export interface EMRClusterConfiguration {
  /**
   * The classification within a configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Classification?: Value<string>;
  /**
   * Within a configuration classification, a set of properties that represent the settings that you want to change in the configuration file. Duplicates not allowed.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationProperties?: { [key: string]: Value<string> };
  /**
   * A list of additional configurations to apply within a configuration object.
   *
   * _Required_: No
   *
   * _Type_: List of [Configuration](#aws-properties-emr-cluster-configuration)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Configurations?: List<EMRClusterConfiguration>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig.html}
 **/
export interface EMRClusterScriptBootstrapActionConfig {
  Args?: List<Value<string>>;
  Path: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-ebsconfiguration.html}
 **/
export interface EMRClusterEbsConfiguration {
  EbsBlockDeviceConfigs?: List<EMRClusterEbsBlockDeviceConfig>;
  EbsOptimized?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancetypeconfig.html}
 **/
export interface EMRClusterInstanceTypeConfig {
  BidPrice?: Value<string>;
  BidPriceAsPercentageOfOnDemandPrice?: Value<number>;
  Configurations?: List<EMRClusterConfiguration>;
  CustomAmiId?: Value<string>;
  EbsConfiguration?: EMRClusterEbsConfiguration;
  InstanceType: Value<string>;
  WeightedCapacity?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-metricdimension.html}
 **/
export interface EMRClusterMetricDimension {
  Key: Value<string>;
  Value: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingtrigger.html}
 **/
export interface EMRClusterScalingTrigger {
  CloudWatchAlarmDefinition: EMRClusterCloudWatchAlarmDefinition;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-jobflowinstancesconfig.html}
 **/
export interface EMRClusterJobFlowInstancesConfig {
  AdditionalMasterSecurityGroups?: List<Value<string>>;
  AdditionalSlaveSecurityGroups?: List<Value<string>>;
  CoreInstanceFleet?: EMRClusterInstanceFleetConfig;
  CoreInstanceGroup?: EMRClusterInstanceGroupConfig;
  Ec2KeyName?: Value<string>;
  Ec2SubnetId?: Value<string>;
  Ec2SubnetIds?: List<Value<string>>;
  EmrManagedMasterSecurityGroup?: Value<string>;
  EmrManagedSlaveSecurityGroup?: Value<string>;
  HadoopVersion?: Value<string>;
  KeepJobFlowAliveWhenNoSteps?: Value<boolean>;
  MasterInstanceFleet?: EMRClusterInstanceFleetConfig;
  MasterInstanceGroup?: EMRClusterInstanceGroupConfig;
  Placement?: EMRClusterPlacementType;
  ServiceAccessSecurityGroup?: Value<string>;
  TaskInstanceFleets?: List<EMRClusterInstanceFleetConfig>;
  TaskInstanceGroups?: List<EMRClusterInstanceGroupConfig>;
  TerminationProtected?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingconstraints.html}
 **/
export interface EMRClusterScalingConstraints {
  MaxCapacity: Value<number>;
  MinCapacity: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingaction.html}
 **/
export interface EMRClusterScalingAction {
  Market?: Value<string>;
  SimpleScalingPolicyConfiguration: EMRClusterSimpleScalingPolicyConfiguration;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-simplescalingpolicyconfiguration.html}
 **/
export interface EMRClusterSimpleScalingPolicyConfiguration {
  AdjustmentType?: Value<string>;
  CoolDown?: Value<number>;
  ScalingAdjustment: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-placementtype.html}
 **/
export interface EMRClusterPlacementType {
  AvailabilityZone: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-scalingrule.html}
 **/
export interface EMRClusterScalingRule {
  Action: EMRClusterScalingAction;
  Description?: Value<string>;
  Name: Value<string>;
  Trigger: EMRClusterScalingTrigger;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-autoscalingpolicy.html}
 **/
export interface EMRClusterAutoScalingPolicy {
  Constraints: EMRClusterScalingConstraints;
  Rules: List<EMRClusterScalingRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-hadoopjarstepconfig.html}
 **/
export interface EMRClusterHadoopJarStepConfig {
  Args?: List<Value<string>>;
  Jar: Value<string>;
  MainClass?: Value<string>;
  StepProperties?: List<EMRClusterKeyValue>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-stepconfig.html}
 **/
export interface EMRClusterStepConfig {
  ActionOnFailure?: Value<string>;
  HadoopJarStep: EMRClusterHadoopJarStepConfig;
  Name: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-managedscalingpolicy.html}
 **/
export interface EMRClusterManagedScalingPolicy {
  ComputeLimits?: EMRClusterComputeLimits;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-cloudwatchalarmdefinition.html}
 **/
export interface EMRClusterCloudWatchAlarmDefinition {
  ComparisonOperator: Value<string>;
  Dimensions?: List<EMRClusterMetricDimension>;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancefleetprovisioningspecifications.html}
 **/
export interface EMRClusterInstanceFleetProvisioningSpecifications {
  OnDemandSpecification?: EMRClusterOnDemandProvisioningSpecification;
  SpotSpecification?: EMRClusterSpotProvisioningSpecification;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-kerberosattributes.html}
 **/
export interface EMRClusterKerberosAttributes {
  ADDomainJoinPassword?: Value<string>;
  ADDomainJoinUser?: Value<string>;
  CrossRealmTrustPrincipalPassword?: Value<string>;
  KdcAdminPassword: Value<string>;
  Realm: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-application.html}
 **/
export interface EMRClusterApplication {
  AdditionalInfo?: { [key: string]: Value<string> };
  Args?: List<Value<string>>;
  Name?: Value<string>;
  Version?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-ondemandprovisioningspecification.html}
 **/
export interface EMRClusterOnDemandProvisioningSpecification {
  AllocationStrategy: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-instancefleetconfig.html}
 **/
export interface EMRClusterInstanceFleetConfig {
  InstanceTypeConfigs?: List<EMRClusterInstanceTypeConfig>;
  LaunchSpecifications?: EMRClusterInstanceFleetProvisioningSpecifications;
  Name?: Value<string>;
  TargetOnDemandCapacity?: Value<number>;
  TargetSpotCapacity?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-autoterminationpolicy.html}
 **/
export interface EMRClusterAutoTerminationPolicy {
  IdleTimeout?: Value<number>;
}
export interface EMRClusterProperties {
  AdditionalInfo?: { [key: string]: any };
  Applications?: List<EMRClusterApplication>;
  AutoScalingRole?: Value<string>;
  AutoTerminationPolicy?: EMRClusterAutoTerminationPolicy;
  BootstrapActions?: List<EMRClusterBootstrapActionConfig>;
  Configurations?: List<EMRClusterConfiguration>;
  CustomAmiId?: Value<string>;
  EbsRootVolumeSize?: Value<number>;
  Instances: EMRClusterJobFlowInstancesConfig;
  JobFlowRole: Value<string>;
  KerberosAttributes?: EMRClusterKerberosAttributes;
  LogEncryptionKmsKeyId?: Value<string>;
  LogUri?: Value<string>;
  ManagedScalingPolicy?: EMRClusterManagedScalingPolicy;
  Name: Value<string>;
  OSReleaseLabel?: Value<string>;
  ReleaseLabel?: Value<string>;
  ScaleDownBehavior?: Value<string>;
  SecurityConfiguration?: Value<string>;
  ServiceRole: Value<string>;
  StepConcurrencyLevel?: Value<number>;
  Steps?: List<EMRClusterStepConfig>;
  Tags?: List<ResourceTag>;
  VisibleToAllUsers?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html}
 */
export interface EMRClusterResource {
  Type: 'AWS::EMR::Cluster';
  Properties: EMRClusterProperties;
}
