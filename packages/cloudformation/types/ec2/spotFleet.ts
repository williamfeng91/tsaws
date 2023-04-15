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
 * The minimum and maximum amount of memory per vCPU, in GiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-memorygibpervcpurequest.html}
 **/
export interface EC2SpotFleetMemoryGiBPerVCpuRequest {
  /**
   * The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * The minimum and maximum amount of memory, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-memorymibrequest.html}
 **/
export interface EC2SpotFleetMemoryMiBRequest {
  /**
   * The minimum amount of memory, in MiB. To specify no minimum limit, specify `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of memory, in MiB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * Describes Spot Instance placement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotplacement.html}
 **/
export interface EC2SpotFleetSpotPlacement {
  /**
   * The name of the placement group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupName?: Value<string>;
  /**
   * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware. The `host` tenancy is not supported for Spot Instances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `dedicated | default | host`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tenancy?: Value<string>;
  /**
   * The Availability Zone.
   *
   * To specify multiple Availability Zones, separate them using commas; for example, "us-west-2a, us-west-2b".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone?: Value<string>;
}

/**
 * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
 *
 * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 *
 * To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
 *
 * **Note**
 *
 * You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
 *
 * For more information, see [Attribute-based instance type selection for EC2 Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html), [Attribute-based instance type selection for Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html), and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instancerequirementsrequest.html}
 **/
export interface EC2SpotFleetInstanceRequirementsRequest {
  /**
   * The type of local storage that is required.
   */
  LocalStorageTypes?: List<Value<string>>;
  /**
   * Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon EC2 User Guide_.
   *
   * For current generation instance types, specify `current`.
   *
   * For previous generation instance types, specify `previous`.
   *
   * Default: Current and previous generation instance types
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceGenerations?: List<Value<string>>;
  /**
   * The minimum and maximum number of network interfaces.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [NetworkInterfaceCountRequest](aws-properties-ec2-spotfleet-networkinterfacecountrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkInterfaceCount?: EC2SpotFleetNetworkInterfaceCountRequest;
  /**
   * The minimum and maximum amount of memory per vCPU, in GiB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [MemoryGiBPerVCpuRequest](aws-properties-ec2-spotfleet-memorygibpervcpurequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MemoryGiBPerVCpu?: EC2SpotFleetMemoryGiBPerVCpuRequest;
  /**
   * The accelerator types that must be on the instance type.
   */
  AcceleratorTypes?: List<Value<string>>;
  /**
   * The minimum and maximum number of vCPUs.
   *
   * _Required_: No
   *
   * _Type_: [VCpuCountRangeRequest](aws-properties-ec2-spotfleet-vcpucountrangerequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VCpuCount?: EC2SpotFleetVCpuCountRangeRequest;
  /**
   * The instance types to exclude.
   *
   * You can use strings with one or more wild cards, represented by an asterisk (`*`), to exclude an instance family, type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExcludedInstanceTypes?: List<Value<string>>;
  /**
   * Indicates whether instance types must have accelerators by specific manufacturers.
   */
  AcceleratorManufacturers?: List<Value<string>>;
  /**
   * The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
   *
   * You can use strings with one or more wild cards, represented by an asterisk (`*`), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AllowedInstanceTypes?: List<Value<string>>;
  /**
   * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the _Amazon EC2 User Guide_.
   */
  LocalStorage?: Value<string>;
  /**
   * The CPU manufacturers to include.
   */
  CpuManufacturers?: List<Value<string>>;
  /**
   * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [NetworkBandwidthGbpsRequest](aws-properties-ec2-spotfleet-networkbandwidthgbpsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkBandwidthGbps?: EC2SpotFleetNetworkBandwidthGbpsRequest;
  /**
   * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
   *
   * To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [AcceleratorCountRequest](aws-properties-ec2-spotfleet-acceleratorcountrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AcceleratorCount?: EC2SpotFleetAcceleratorCountRequest;
  /**
   * Indicates whether bare metal instance types must be included, excluded, or required.
   */
  BareMetal?: Value<string>;
  /**
   * Indicates whether instance types must support hibernation for On-Demand Instances.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html).
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RequireHibernateSupport?: Value<boolean>;
  /**
   * The price protection threshold for Spot Instance. This is the maximum you’ll pay for an Spot Instance, expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance types priced above your threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * To turn off price protection, specify a high value, such as `999999`.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   *
   * If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
   *
   * Default: `100`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotMaxPricePercentageOverLowestPrice?: Value<number>;
  /**
   * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide_.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [BaselineEbsBandwidthMbpsRequest](aws-properties-ec2-spotfleet-baselineebsbandwidthmbpsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BaselineEbsBandwidthMbps?: EC2SpotFleetBaselineEbsBandwidthMbpsRequest;
  /**
   * The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage above the least expensive current generation M, C, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it excludes instance types priced above your threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   *
   * To turn off price protection, specify a high value, such as `999999`.
   *
   * This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   *
   * If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
   *
   * Default: `20`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OnDemandMaxPricePercentageOverLowestPrice?: Value<number>;
  /**
   * The accelerators that must be on the instance type.
   */
  AcceleratorNames?: List<Value<string>>;
  /**
   * The minimum and maximum amount of total accelerator memory, in MiB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [AcceleratorTotalMemoryMiBRequest](aws-properties-ec2-spotfleet-acceleratortotalmemorymibrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AcceleratorTotalMemoryMiB?: EC2SpotFleetAcceleratorTotalMemoryMiBRequest;
  /**
   * Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
   */
  BurstablePerformance?: Value<string>;
  /**
   * The minimum and maximum amount of memory, in MiB.
   *
   * _Required_: No
   *
   * _Type_: [MemoryMiBRequest](aws-properties-ec2-spotfleet-memorymibrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MemoryMiB?: EC2SpotFleetMemoryMiBRequest;
  /**
   * The minimum and maximum amount of total local storage, in GB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [TotalLocalStorageGBRequest](aws-properties-ec2-spotfleet-totallocalstoragegbrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TotalLocalStorageGB?: EC2SpotFleetTotalLocalStorageGBRequest;
}

/**
 * Specifies overrides for a launch template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-launchtemplateoverrides.html}
 **/
export interface EC2SpotFleetLaunchTemplateOverrides {
  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotPrice?: Value<string>;
  /**
   * The number of units provided by the specified instance type.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WeightedCapacity?: Value<number>;
  /**
   * The priority for the launch template override. The highest priority is launched first.
   *
   * If `OnDemandAllocationStrategy` is set to `prioritized`, Spot Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity.
   *
   * If the Spot `AllocationStrategy` is set to `capacityOptimizedPrioritized`, Spot Fleet uses priority on a best-effort basis to determine which launch template override to use in fulfilling Spot capacity, but optimizes for capacity first.
   *
   * Valid values are whole numbers starting at `0`. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. You can set the same priority for different launch template overrides.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Priority?: Value<number>;
  /**
   * The Availability Zone in which to launch the instances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone?: Value<string>;
  /**
   * The ID of the subnet in which to launch the instances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId?: Value<string>;
  /**
   * The instance requirements. When you specify instance requirements, Amazon EC2 will identify instance types with the provided requirements, and then use your On-Demand and Spot allocation strategies to launch instances from these instance types, in the same way as when you specify a list of instance types.
   *
   * If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * _Required_: No
   *
   * _Type_: [InstanceRequirementsRequest](aws-properties-ec2-spotfleet-instancerequirementsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceRequirements?: EC2SpotFleetInstanceRequirementsRequest;
  /**
   * The instance type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `a1.2xlarge | a1.4xlarge | a1.large | a1.medium | a1.metal | a1.xlarge | c1.medium | c1.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c3.large | c3.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c4.large | c4.xlarge | c5.12xlarge | c5.18xlarge | c5.24xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.large | c5.metal | c5.xlarge | c5a.12xlarge | c5a.16xlarge | c5a.24xlarge | c5a.2xlarge | c5a.4xlarge | c5a.8xlarge | c5a.large | c5a.xlarge | c5ad.12xlarge | c5ad.16xlarge | c5ad.24xlarge | c5ad.2xlarge | c5ad.4xlarge | c5ad.8xlarge | c5ad.large | c5ad.xlarge | c5d.12xlarge | c5d.18xlarge | c5d.24xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.large | c5d.metal | c5d.xlarge | c5n.18xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.large | c5n.metal | c5n.xlarge | c6a.12xlarge | c6a.16xlarge | c6a.24xlarge | c6a.2xlarge | c6a.32xlarge | c6a.48xlarge | c6a.4xlarge | c6a.8xlarge | c6a.large | c6a.metal | c6a.xlarge | c6g.12xlarge | c6g.16xlarge | c6g.2xlarge | c6g.4xlarge | c6g.8xlarge | c6g.large | c6g.medium | c6g.metal | c6g.xlarge | c6gd.12xlarge | c6gd.16xlarge | c6gd.2xlarge | c6gd.4xlarge | c6gd.8xlarge | c6gd.large | c6gd.medium | c6gd.metal | c6gd.xlarge | c6gn.12xlarge | c6gn.16xlarge | c6gn.2xlarge | c6gn.4xlarge | c6gn.8xlarge | c6gn.large | c6gn.medium | c6gn.xlarge | c6i.12xlarge | c6i.16xlarge | c6i.24xlarge | c6i.2xlarge | c6i.32xlarge | c6i.4xlarge | c6i.8xlarge | c6i.large | c6i.metal | c6i.xlarge | c6id.12xlarge | c6id.16xlarge | c6id.24xlarge | c6id.2xlarge | c6id.32xlarge | c6id.4xlarge | c6id.8xlarge | c6id.large | c6id.metal | c6id.xlarge | c6in.12xlarge | c6in.16xlarge | c6in.24xlarge | c6in.2xlarge | c6in.32xlarge | c6in.4xlarge | c6in.8xlarge | c6in.large | c6in.xlarge | c7g.12xlarge | c7g.16xlarge | c7g.2xlarge | c7g.4xlarge | c7g.8xlarge | c7g.large | c7g.medium | c7g.xlarge | cc1.4xlarge | cc2.8xlarge | cg1.4xlarge | cr1.8xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d2.xlarge | d3.2xlarge | d3.4xlarge | d3.8xlarge | d3.xlarge | d3en.12xlarge | d3en.2xlarge | d3en.4xlarge | d3en.6xlarge | d3en.8xlarge | d3en.xlarge | dl1.24xlarge | f1.16xlarge | f1.2xlarge | f1.4xlarge | g2.2xlarge | g2.8xlarge | g3.16xlarge | g3.4xlarge | g3.8xlarge | g3s.xlarge | g4ad.16xlarge | g4ad.2xlarge | g4ad.4xlarge | g4ad.8xlarge | g4ad.xlarge | g4dn.12xlarge | g4dn.16xlarge | g4dn.2xlarge | g4dn.4xlarge | g4dn.8xlarge | g4dn.metal | g4dn.xlarge | g5.12xlarge | g5.16xlarge | g5.24xlarge | g5.2xlarge | g5.48xlarge | g5.4xlarge | g5.8xlarge | g5.xlarge | g5g.16xlarge | g5g.2xlarge | g5g.4xlarge | g5g.8xlarge | g5g.metal | g5g.xlarge | h1.16xlarge | h1.2xlarge | h1.4xlarge | h1.8xlarge | hi1.4xlarge | hpc6a.48xlarge | hpc6id.32xlarge | hs1.8xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i2.xlarge | i3.16xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.large | i3.metal | i3.xlarge | i3en.12xlarge | i3en.24xlarge | i3en.2xlarge | i3en.3xlarge | i3en.6xlarge | i3en.large | i3en.metal | i3en.xlarge | i4i.16xlarge | i4i.2xlarge | i4i.32xlarge | i4i.4xlarge | i4i.8xlarge | i4i.large | i4i.metal | i4i.xlarge | im4gn.16xlarge | im4gn.2xlarge | im4gn.4xlarge | im4gn.8xlarge | im4gn.large | im4gn.xlarge | inf1.24xlarge | inf1.2xlarge | inf1.6xlarge | inf1.xlarge | is4gen.2xlarge | is4gen.4xlarge | is4gen.8xlarge | is4gen.large | is4gen.medium | is4gen.xlarge | m1.large | m1.medium | m1.small | m1.xlarge | m2.2xlarge | m2.4xlarge | m2.xlarge | m3.2xlarge | m3.large | m3.medium | m3.xlarge | m4.10xlarge | m4.16xlarge | m4.2xlarge | m4.4xlarge | m4.large | m4.xlarge | m5.12xlarge | m5.16xlarge | m5.24xlarge | m5.2xlarge | m5.4xlarge | m5.8xlarge | m5.large | m5.metal | m5.xlarge | m5a.12xlarge | m5a.16xlarge | m5a.24xlarge | m5a.2xlarge | m5a.4xlarge | m5a.8xlarge | m5a.large | m5a.xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.large | m5ad.xlarge | m5d.12xlarge | m5d.16xlarge | m5d.24xlarge | m5d.2xlarge | m5d.4xlarge | m5d.8xlarge | m5d.large | m5d.metal | m5d.xlarge | m5dn.12xlarge | m5dn.16xlarge | m5dn.24xlarge | m5dn.2xlarge | m5dn.4xlarge | m5dn.8xlarge | m5dn.large | m5dn.metal | m5dn.xlarge | m5n.12xlarge | m5n.16xlarge | m5n.24xlarge | m5n.2xlarge | m5n.4xlarge | m5n.8xlarge | m5n.large | m5n.metal | m5n.xlarge | m5zn.12xlarge | m5zn.2xlarge | m5zn.3xlarge | m5zn.6xlarge | m5zn.large | m5zn.metal | m5zn.xlarge | m6a.12xlarge | m6a.16xlarge | m6a.24xlarge | m6a.2xlarge | m6a.32xlarge | m6a.48xlarge | m6a.4xlarge | m6a.8xlarge | m6a.large | m6a.metal | m6a.xlarge | m6g.12xlarge | m6g.16xlarge | m6g.2xlarge | m6g.4xlarge | m6g.8xlarge | m6g.large | m6g.medium | m6g.metal | m6g.xlarge | m6gd.12xlarge | m6gd.16xlarge | m6gd.2xlarge | m6gd.4xlarge | m6gd.8xlarge | m6gd.large | m6gd.medium | m6gd.metal | m6gd.xlarge | m6i.12xlarge | m6i.16xlarge | m6i.24xlarge | m6i.2xlarge | m6i.32xlarge | m6i.4xlarge | m6i.8xlarge | m6i.large | m6i.metal | m6i.xlarge | m6id.12xlarge | m6id.16xlarge | m6id.24xlarge | m6id.2xlarge | m6id.32xlarge | m6id.4xlarge | m6id.8xlarge | m6id.large | m6id.metal | m6id.xlarge | m6idn.12xlarge | m6idn.16xlarge | m6idn.24xlarge | m6idn.2xlarge | m6idn.32xlarge | m6idn.4xlarge | m6idn.8xlarge | m6idn.large | m6idn.xlarge | m6in.12xlarge | m6in.16xlarge | m6in.24xlarge | m6in.2xlarge | m6in.32xlarge | m6in.4xlarge | m6in.8xlarge | m6in.large | m6in.xlarge | mac1.metal | mac2.metal | p2.16xlarge | p2.8xlarge | p2.xlarge | p3.16xlarge | p3.2xlarge | p3.8xlarge | p3dn.24xlarge | p4d.24xlarge | p4de.24xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r3.large | r3.xlarge | r4.16xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.large | r4.xlarge | r5.12xlarge | r5.16xlarge | r5.24xlarge | r5.2xlarge | r5.4xlarge | r5.8xlarge | r5.large | r5.metal | r5.xlarge | r5a.12xlarge | r5a.16xlarge | r5a.24xlarge | r5a.2xlarge | r5a.4xlarge | r5a.8xlarge | r5a.large | r5a.xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.large | r5ad.xlarge | r5b.12xlarge | r5b.16xlarge | r5b.24xlarge | r5b.2xlarge | r5b.4xlarge | r5b.8xlarge | r5b.large | r5b.metal | r5b.xlarge | r5d.12xlarge | r5d.16xlarge | r5d.24xlarge | r5d.2xlarge | r5d.4xlarge | r5d.8xlarge | r5d.large | r5d.metal | r5d.xlarge | r5dn.12xlarge | r5dn.16xlarge | r5dn.24xlarge | r5dn.2xlarge | r5dn.4xlarge | r5dn.8xlarge | r5dn.large | r5dn.metal | r5dn.xlarge | r5n.12xlarge | r5n.16xlarge | r5n.24xlarge | r5n.2xlarge | r5n.4xlarge | r5n.8xlarge | r5n.large | r5n.metal | r5n.xlarge | r6a.12xlarge | r6a.16xlarge | r6a.24xlarge | r6a.2xlarge | r6a.32xlarge | r6a.48xlarge | r6a.4xlarge | r6a.8xlarge | r6a.large | r6a.metal | r6a.xlarge | r6g.12xlarge | r6g.16xlarge | r6g.2xlarge | r6g.4xlarge | r6g.8xlarge | r6g.large | r6g.medium | r6g.metal | r6g.xlarge | r6gd.12xlarge | r6gd.16xlarge | r6gd.2xlarge | r6gd.4xlarge | r6gd.8xlarge | r6gd.large | r6gd.medium | r6gd.metal | r6gd.xlarge | r6i.12xlarge | r6i.16xlarge | r6i.24xlarge | r6i.2xlarge | r6i.32xlarge | r6i.4xlarge | r6i.8xlarge | r6i.large | r6i.metal | r6i.xlarge | r6id.12xlarge | r6id.16xlarge | r6id.24xlarge | r6id.2xlarge | r6id.32xlarge | r6id.4xlarge | r6id.8xlarge | r6id.large | r6id.metal | r6id.xlarge | r6idn.12xlarge | r6idn.16xlarge | r6idn.24xlarge | r6idn.2xlarge | r6idn.32xlarge | r6idn.4xlarge | r6idn.8xlarge | r6idn.large | r6idn.xlarge | r6in.12xlarge | r6in.16xlarge | r6in.24xlarge | r6in.2xlarge | r6in.32xlarge | r6in.4xlarge | r6in.8xlarge | r6in.large | r6in.xlarge | t1.micro | t2.2xlarge | t2.large | t2.medium | t2.micro | t2.nano | t2.small | t2.xlarge | t3.2xlarge | t3.large | t3.medium | t3.micro | t3.nano | t3.small | t3.xlarge | t3a.2xlarge | t3a.large | t3a.medium | t3a.micro | t3a.nano | t3a.small | t3a.xlarge | t4g.2xlarge | t4g.large | t4g.medium | t4g.micro | t4g.nano | t4g.small | t4g.xlarge | trn1.2xlarge | trn1.32xlarge | u-12tb1.112xlarge | u-12tb1.metal | u-18tb1.112xlarge | u-18tb1.metal | u-24tb1.112xlarge | u-24tb1.metal | u-3tb1.56xlarge | u-6tb1.112xlarge | u-6tb1.56xlarge | u-6tb1.metal | u-9tb1.112xlarge | u-9tb1.metal | vt1.24xlarge | vt1.3xlarge | vt1.6xlarge | x1.16xlarge | x1.32xlarge | x1e.16xlarge | x1e.2xlarge | x1e.32xlarge | x1e.4xlarge | x1e.8xlarge | x1e.xlarge | x2gd.12xlarge | x2gd.16xlarge | x2gd.2xlarge | x2gd.4xlarge | x2gd.8xlarge | x2gd.large | x2gd.medium | x2gd.metal | x2gd.xlarge | x2idn.16xlarge | x2idn.24xlarge | x2idn.32xlarge | x2idn.metal | x2iedn.16xlarge | x2iedn.24xlarge | x2iedn.2xlarge | x2iedn.32xlarge | x2iedn.4xlarge | x2iedn.8xlarge | x2iedn.metal | x2iedn.xlarge | x2iezn.12xlarge | x2iezn.2xlarge | x2iezn.4xlarge | x2iezn.6xlarge | x2iezn.8xlarge | x2iezn.metal | z1d.12xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.large | z1d.metal | z1d.xlarge`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType?: Value<string>;
}

/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance. To exclude accelerator-enabled instance types, set `Max` to `0`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-acceleratorcountrequest.html}
 **/
export interface EC2SpotFleetAcceleratorCountRequest {
  /**
   * The minimum number of accelerators. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * The tags for a Spot Fleet resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleettagspecification.html}
 **/
export interface EC2SpotFleetSpotFleetTagSpecification {
  /**
   * The type of resource. Currently, the only resource type that is supported is `instance`. To tag the Spot Fleet request on creation, use the `TagSpecifications` parameter in `[SpotFleetRequestConfigData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetRequestConfigData.html)`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `capacity-reservation | capacity-reservation-fleet | carrier-gateway | client-vpn-endpoint | coip-pool | customer-gateway | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-gpu | elastic-ip | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | instance-event-window | internet-gateway | ipam | ipam-pool | ipam-resource-discovery | ipam-resource-discovery-association | ipam-scope | ipv4pool-ec2 | ipv6pool-ec2 | key-pair | launch-template | local-gateway | local-gateway-route-table | local-gateway-route-table-virtual-interface-group-association | local-gateway-route-table-vpc-association | local-gateway-virtual-interface | local-gateway-virtual-interface-group | natgateway | network-acl | network-insights-access-scope | network-insights-access-scope-analysis | network-insights-analysis | network-insights-path | network-interface | placement-group | prefix-list | replace-root-volume-task | reserved-instances | route-table | security-group | security-group-rule | snapshot | spot-fleet-request | spot-instances-request | subnet | subnet-cidr-reservation | traffic-mirror-filter | traffic-mirror-filter-rule | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-connect-peer | transit-gateway-multicast-domain | transit-gateway-policy-table | transit-gateway-route-table | transit-gateway-route-table-announcement | verified-access-endpoint | verified-access-group | verified-access-instance | verified-access-policy | verified-access-trust-provider | volume | vpc | vpc-block-public-access-exclusion | vpc-endpoint | vpc-endpoint-connection | vpc-endpoint-connection-device-type | vpc-endpoint-service | vpc-endpoint-service-permission | vpc-flow-log | vpc-peering-connection | vpn-connection | vpn-connection-device-type | vpn-gateway`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceType?: Value<string>;
  /**
   * The tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Describes a secondary private IPv4 address for a network interface.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-privateipaddressspecification.html}
 **/
export interface EC2SpotFleetPrivateIpAddressSpecification {
  /**
   * The private IPv4 address.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrivateIpAddress: Value<string>;
  /**
   * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Primary?: Value<boolean>;
}

/**
 * The minimum and maximum amount of total accelerator memory, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-acceleratortotalmemorymibrequest.html}
 **/
export interface EC2SpotFleetAcceleratorTotalMemoryMiBRequest {
  /**
   * The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * Describes a load balancer target group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-targetgroup.html}
 **/
export interface EC2SpotFleetTargetGroup {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn: Value<string>;
}

/**
 * Describes whether monitoring is enabled.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetmonitoring.html}
 **/
export interface EC2SpotFleetSpotFleetMonitoring {
  /**
   * Enables monitoring for the instance.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Enabled?: Value<boolean>;
}

/**
 * Specifies the configuration of a Spot Fleet request. For more information, see [Spot Fleet ](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet.html) in the _Amazon EC2 User Guide_.
 *
 * You must specify either `LaunchSpecifications` or `LaunchTemplateConfigs`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetrequestconfigdata.html}
 **/
export interface EC2SpotFleetSpotFleetRequestConfigData {
  /**
   * Reserved.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Context?: Value<string>;
  /**
   * The maximum amount per hour for Spot Instances that you're willing to pay. You can use the `spotdMaxTotalPrice` parameter, the `onDemandMaxTotalPrice` parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotMaxTotalPrice?: Value<string>;
  /**
   * Indicates whether running Spot Instances should be terminated if you decrease the target capacity of the Spot Fleet request below the current size of the Spot Fleet.
   *
   * Supported only for fleets of type `maintain`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `default | noTermination`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcessCapacityTerminationPolicy?: Value<string>;
  /**
   * The key-value pair for tagging the Spot Fleet request on creation. The value for `ResourceType` must be `spot-fleet-request`, otherwise the Spot Fleet request fails. To tag instances at launch, specify the tags in the [launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template) (valid only if you use `LaunchTemplateConfigs`) or in the `[SpotFleetTagSpecification](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotFleetTagSpecification.html)` (valid only if you use `LaunchSpecifications`). For information about tagging after launch, see [Tagging Your Resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources).
   *
   * _Required_: No
   *
   * _Type_: List of [SpotFleetTagSpecification](aws-properties-ec2-spotfleet-spotfleettagspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagSpecifications?: List<EC2SpotFleetSpotFleetTagSpecification>;
  /**
   * The number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot **AllocationStrategy** is set to `lowest-price`. Spot Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify.
   *
   * Note that Spot Fleet attempts to draw Spot Instances from the number of pools that you specify on a best effort basis. If a pool runs out of Spot capacity before fulfilling your target capacity, Spot Fleet will continue to fulfill your request by drawing from the next cheapest pool. To ensure that your target capacity is met, you might receive Spot Instances from more than the number of pools that you specified. Similarly, if most of the pools have no Spot capacity, you might receive your full target capacity from fewer than the number of pools that you specified.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstancePoolsToUseCount?: Value<number>;
  /**
   * The launch template and overrides. If you specify `LaunchTemplateConfigs`, you can't specify `LaunchSpecifications`.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [LaunchTemplateConfig](aws-properties-ec2-spotfleet-launchtemplateconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchTemplateConfigs?: List<EC2SpotFleetLaunchTemplateConfig>;
  /**
   * The unit for the target capacity. `TargetCapacityUnitType` can only be specified when `InstanceRequirements` is specified.
   *
   * Default: `units` (translates to number of instances)
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `memory-mib | units | vcpu`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetCapacityUnitType?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that grants the Spot Fleet the permission to request, launch, terminate, and tag instances on your behalf. For more information, see [Spot Fleet Prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html#spot-fleet-prerequisites) in the _Amazon EC2 User Guide for Linux Instances_. Spot Fleet can terminate Spot Instances on your behalf when you cancel its Spot Fleet request or when the Spot Fleet request expires, if you set `TerminateInstancesWithExpiration`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IamFleetRole: Value<string>;
  /**
   * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
   *
   * _Required_: No
   *
   * _Type_: [SpotMaintenanceStrategies](aws-properties-ec2-spotfleet-spotmaintenancestrategies.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotMaintenanceStrategies?: EC2SpotFleetSpotMaintenanceStrategies;
  /**
   * Indicates whether running Spot Instances are terminated when the Spot Fleet request expires.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TerminateInstancesWithExpiration?: Value<boolean>;
  /**
   * The end date and time of the request, in UTC format (_YYYY_-_MM_-*DD*T*HH*:_MM_:*SS*Z). After the end date and time, no new Spot Instance requests are placed or able to fulfill the request. If no value is specified, the Spot Fleet request remains until you cancel it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidUntil?: Value<string>;
  /**
   * The maximum amount per hour for On-Demand Instances that you're willing to pay. You can use the `onDemandMaxTotalPrice` parameter, the `spotMaxTotalPrice` parameter, or both parameters to ensure that your fleet cost does not exceed your budget. If you set a maximum price per hour for the On-Demand Instances and Spot Instances in your request, Spot Fleet will launch instances until it reaches the maximum amount you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OnDemandMaxTotalPrice?: Value<string>;
  /**
   * The order of the launch template overrides to use in fulfilling On-Demand capacity. If you specify `lowestPrice`, Spot Fleet uses price to determine the order, launching the lowest price first. If you specify `prioritized`, Spot Fleet uses the priority that you assign to each Spot Fleet launch template override, launching the highest priority first. If you do not specify a value, Spot Fleet defaults to `lowestPrice`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `lowestPrice | prioritized`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OnDemandAllocationStrategy?: Value<string>;
  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotPrice?: Value<string>;
  /**
   * The strategy that determines how to allocate the target Spot Instance capacity across the Spot Instance pools specified by the Spot Fleet launch configuration. For more information, see [Allocation strategies for Spot Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-allocation-strategy.html) in the _Amazon EC2 User Guide_.
   *
   * priceCapacityOptimized (recommended)
   *
   * Spot Fleet identifies the pools with the highest capacity availability for the number of instances that are launching. This means that we will request Spot Instances from the pools that we believe have the lowest chance of interruption in the near term. Spot Fleet then requests Spot Instances from the lowest priced of these pools.
   *
   * capacityOptimized
   *
   * Spot Fleet identifies the pools with the highest capacity availability for the number of instances that are launching. This means that we will request Spot Instances from the pools that we believe have the lowest chance of interruption in the near term. To give certain instance types a higher chance of launching first, use `capacityOptimizedPrioritized`. Set a priority for each instance type by using the `Priority` parameter for `LaunchTemplateOverrides`. You can assign the same priority to different `LaunchTemplateOverrides`. EC2 implements the priorities on a best-effort basis, but optimizes for capacity first. `capacityOptimizedPrioritized` is supported only if your Spot Fleet uses a launch template. Note that if the `OnDemandAllocationStrategy` is set to `prioritized`, the same priority is applied when fulfilling On-Demand capacity.
   *
   * diversified
   *
   * Spot Fleet requests instances from all of the Spot Instance pools that you specify.
   *
   * lowestPrice
   *
   * Spot Fleet requests instances from the lowest priced Spot Instance pool that has available capacity. If the lowest priced pool doesn't have available capacity, the Spot Instances come from the next lowest priced pool that has available capacity. If a pool runs out of capacity before fulfilling your desired capacity, Spot Fleet will continue to fulfill your request by drawing from the next lowest priced pool. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. Because this strategy only considers instance price and not capacity availability, it might lead to high interruption rates.
   *
   * Default: `lowestPrice`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `capacityOptimized | capacityOptimizedPrioritized | diversified | lowestPrice | priceCapacityOptimized`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AllocationStrategy?: Value<string>;
  /**
   * The number of On-Demand units to request. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OnDemandTargetCapacity?: Value<number>;
  /**
   * The type of request. Indicates whether the Spot Fleet only requests the target capacity or also attempts to maintain it. When this value is `request`, the Spot Fleet only places the required requests. It does not attempt to replenish Spot Instances if capacity is diminished, nor does it submit requests in alternative Spot pools if capacity is not available. When this value is `maintain`, the Spot Fleet maintains the target capacity. The Spot Fleet places the required requests to meet capacity and automatically replenishes any interrupted instances. Default: `maintain`. `instant` is listed but is not used by Spot Fleet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `instant | maintain | request`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * The launch specifications for the Spot Fleet request. If you specify `LaunchSpecifications`, you can't specify `LaunchTemplateConfigs`.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [SpotFleetLaunchSpecification](aws-properties-ec2-spotfleet-spotfleetlaunchspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchSpecifications?: List<EC2SpotFleetSpotFleetLaunchSpecification>;
  /**
   * The behavior when a Spot Instance is interrupted. The default is `terminate`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `hibernate | stop | terminate`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceInterruptionBehavior?: Value<string>;
  /**
   * One or more Classic Load Balancers and target groups to attach to the Spot Fleet request. Spot Fleet registers the running Spot Instances with the specified Classic Load Balancers and target groups.
   *
   * With Network Load Balancers, Spot Fleet cannot register instances that have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1.
   *
   * _Required_: No
   *
   * _Type_: [LoadBalancersConfig](aws-properties-ec2-spotfleet-loadbalancersconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LoadBalancersConfig?: EC2SpotFleetLoadBalancersConfig;
  /**
   * The start date and time of the request, in UTC format (_YYYY_-_MM_-*DD*T*HH*:_MM_:*SS*Z). By default, Amazon EC2 starts fulfilling the request immediately.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidFrom?: Value<string>;
  /**
   * Indicates whether Spot Fleet should replace unhealthy instances.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReplaceUnhealthyInstances?: Value<boolean>;
  /**
   * The number of units to request for the Spot Fleet. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetCapacity: Value<number>;
}

/**
 * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
 *
 * Default: No minimum or maximum limits
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-networkbandwidthgbpsrequest.html}
 **/
export interface EC2SpotFleetNetworkBandwidthGbpsRequest {
  /**
   * The minimum amount of network bandwidth, in Gbps. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * Specifies a block device mapping.
 *
 * You can specify `Ebs` or `VirtualName`, but not both.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-blockdevicemapping.html}
 **/
export interface EC2SpotFleetBlockDeviceMapping {
  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * _Required_: Conditional
   *
   * _Type_: [EbsBlockDevice](aws-properties-ec2-spotfleet-ebsblockdevice.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ebs?: EC2SpotFleetEbsBlockDevice;
  /**
   * To omit the device from the block device mapping, specify an empty string. When this property is specified, the device is removed from the block device mapping regardless of the assigned value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NoDevice?: Value<string>;
  /**
   * The virtual device name (`ephemeral`N). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for `ephemeral0` and `ephemeral1`. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   *
   * NVMe instance store volumes are automatically enumerated and assigned a device name. Including them in your block device mapping has no effect.
   *
   * Constraints: For M3 instances, you must specify instance store volumes in the block device mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes specified in the block device mapping for the AMI.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualName?: Value<string>;
  /**
   * The device name (for example, `/dev/sdh` or `xvdh`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeviceName: Value<string>;
}

/**
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-baselineebsbandwidthmbpsrequest.html}
 **/
export interface EC2SpotFleetBaselineEbsBandwidthMbpsRequest {
  /**
   * The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * The minimum and maximum amount of total local storage, in GB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-totallocalstoragegbrequest.html}
 **/
export interface EC2SpotFleetTotalLocalStorageGBRequest {
  /**
   * The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * Describes an IAM instance profile.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-iaminstanceprofilespecification.html}
 **/
export interface EC2SpotFleetIamInstanceProfileSpecification {
  /**
   * The Amazon Resource Name (ARN) of the instance profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn?: Value<string>;
}

/**
 * Describes a network interface.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instancenetworkinterfacespecification.html}
 **/
export interface EC2SpotFleetInstanceNetworkInterfaceSpecification {
  /**
   * The description of the network interface. Applies only if creating a network interface when launching an instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * The private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary. You cannot specify this option if you're launching more than one instance in a [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) request.
   *
   * _Required_: No
   *
   * _Type_: List of [PrivateIpAddressSpecification](aws-properties-ec2-spotfleet-privateipaddressspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrivateIpAddresses?: List<EC2SpotFleetPrivateIpAddressSpecification>;
  /**
   * The number of secondary private IPv4 addresses. You can't specify this option and specify more than one private IP address using the private IP addresses option. You cannot specify this option if you're launching more than one instance in a [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) request.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecondaryPrivateIpAddressCount?: Value<number>;
  /**
   * The position of the network interface in the attachment order. A primary network interface has a device index of 0.
   *
   * If you specify a network interface when launching an instance, you must specify the device index.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeviceIndex?: Value<number>;
  /**
   * The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Groups?: List<Value<string>>;
  /**
   * A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses the IPv6 addresses from the range of the subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ipv6AddressCount?: Value<number>;
  /**
   * The IPv6 addresses to assign to the network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.
   *
   * _Required_: No
   *
   * _Type_: List of [InstanceIpv6Address](aws-properties-ec2-spotfleet-instanceipv6address.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ipv6Addresses?: List<EC2SpotFleetInstanceIpv6Address>;
  /**
   * The ID of the subnet associated with the network interface. Applies only if creating a network interface when launching an instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId?: Value<string>;
  /**
   * Indicates whether to assign a public IPv4 address to an instance you launch in a VPC. The public IP address can only be assigned to a network interface for eth0, and can only be assigned to a new network interface, not an existing one. You cannot specify more than one network interface in the request. If launching into a default subnet, the default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AssociatePublicIpAddress?: Value<boolean>;
  /**
   * The ID of the network interface.
   *
   * If you are creating a Spot Fleet, omit this parameter because you can’t specify a network interface ID in a launch specification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkInterfaceId?: Value<string>;
  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeleteOnTermination?: Value<boolean>;
}

/**
 * Specifies the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request, you can't use `SpotFleetLaunchSpecification`; you must use [ LaunchTemplateConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-launchtemplateconfig.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotfleetlaunchspecification.html}
 **/
export interface EC2SpotFleetSpotFleetLaunchSpecification {
  /**
   * One or more security groups. When requesting instances in a VPC, you must specify the IDs of the security groups. When requesting instances in EC2-Classic, you can specify the names or the IDs of the security groups.
   *
   * _Required_: No
   *
   * _Type_: List of [GroupIdentifier](aws-properties-ec2-spotfleet-groupidentifier.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroups?: List<EC2SpotFleetGroupIdentifier>;
  /**
   * The tags to apply during creation.
   *
   * _Required_: No
   *
   * _Type_: List of [SpotFleetTagSpecification](aws-properties-ec2-spotfleet-spotfleettagspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagSpecifications?: List<EC2SpotFleetSpotFleetTagSpecification>;
  /**
   * The base64-encoded user data that instances use when starting up. User data is limited to 16 KB.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserData?: Value<string>;
  /**
   * One or more block devices that are mapped to the Spot Instances. You can't specify both a snapshot ID and an encryption value. This is because only blank volumes can be encrypted on creation. If a snapshot is the basis for a volume, it is not blank and its encryption status is used for the volume encryption status.
   *
   * _Required_: No
   *
   * _Type_: List of [BlockDeviceMapping](aws-properties-ec2-spotfleet-blockdevicemapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BlockDeviceMappings?: List<EC2SpotFleetBlockDeviceMapping>;
  /**
   * The IAM instance profile.
   *
   * _Required_: No
   *
   * _Type_: [IamInstanceProfileSpecification](aws-properties-ec2-spotfleet-iaminstanceprofilespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IamInstanceProfile?: EC2SpotFleetIamInstanceProfileSpecification;
  /**
   * The ID of the kernel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KernelId?: Value<string>;
  /**
   * The IDs of the subnets in which to launch the instances. To specify multiple subnets, separate them using commas; for example, "subnet-1234abcdeexample1, subnet-0987cdef6example2".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId?: Value<string>;
  /**
   * Indicates whether the instances are optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EbsOptimized?: Value<boolean>;
  /**
   * The name of the key pair.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyName?: Value<string>;
  /**
   * The ID of the RAM disk. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RamdiskId?: Value<string>;
  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotPrice?: Value<string>;
  /**
   * The number of units provided by the specified instance type. These are the same units that you chose to set the target capacity in terms of instances, or a performance characteristic such as vCPUs, memory, or I/O.
   *
   * If the target capacity divided by this value is not a whole number, Amazon EC2 rounds the number of instances to the next whole number. If this value is not specified, the default is 1.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WeightedCapacity?: Value<number>;
  /**
   * The placement information.
   *
   * _Required_: No
   *
   * _Type_: [SpotPlacement](aws-properties-ec2-spotfleet-spotplacement.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Placement?: EC2SpotFleetSpotPlacement;
  /**
   * One or more network interfaces. If you specify a network interface, you must specify subnet IDs and security group IDs using the network interface.
   *
   * `SpotFleetLaunchSpecification` currently does not support Elastic Fabric Adapter (EFA). To specify an EFA, you must use [LaunchTemplateConfig](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html).
   *
   * _Required_: No
   *
   * _Type_: List of [InstanceNetworkInterfaceSpecification](aws-properties-ec2-spotfleet-instancenetworkinterfacespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkInterfaces?: List<EC2SpotFleetInstanceNetworkInterfaceSpecification>;
  /**
   * The ID of the AMI.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageId: Value<string>;
  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
   *
   * If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * _Required_: No
   *
   * _Type_: [InstanceRequirementsRequest](aws-properties-ec2-spotfleet-instancerequirementsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceRequirements?: EC2SpotFleetInstanceRequirementsRequest;
  /**
   * The instance type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `a1.2xlarge | a1.4xlarge | a1.large | a1.medium | a1.metal | a1.xlarge | c1.medium | c1.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c3.large | c3.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c4.large | c4.xlarge | c5.12xlarge | c5.18xlarge | c5.24xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.large | c5.metal | c5.xlarge | c5a.12xlarge | c5a.16xlarge | c5a.24xlarge | c5a.2xlarge | c5a.4xlarge | c5a.8xlarge | c5a.large | c5a.xlarge | c5ad.12xlarge | c5ad.16xlarge | c5ad.24xlarge | c5ad.2xlarge | c5ad.4xlarge | c5ad.8xlarge | c5ad.large | c5ad.xlarge | c5d.12xlarge | c5d.18xlarge | c5d.24xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.large | c5d.metal | c5d.xlarge | c5n.18xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.large | c5n.metal | c5n.xlarge | c6a.12xlarge | c6a.16xlarge | c6a.24xlarge | c6a.2xlarge | c6a.32xlarge | c6a.48xlarge | c6a.4xlarge | c6a.8xlarge | c6a.large | c6a.metal | c6a.xlarge | c6g.12xlarge | c6g.16xlarge | c6g.2xlarge | c6g.4xlarge | c6g.8xlarge | c6g.large | c6g.medium | c6g.metal | c6g.xlarge | c6gd.12xlarge | c6gd.16xlarge | c6gd.2xlarge | c6gd.4xlarge | c6gd.8xlarge | c6gd.large | c6gd.medium | c6gd.metal | c6gd.xlarge | c6gn.12xlarge | c6gn.16xlarge | c6gn.2xlarge | c6gn.4xlarge | c6gn.8xlarge | c6gn.large | c6gn.medium | c6gn.xlarge | c6i.12xlarge | c6i.16xlarge | c6i.24xlarge | c6i.2xlarge | c6i.32xlarge | c6i.4xlarge | c6i.8xlarge | c6i.large | c6i.metal | c6i.xlarge | c6id.12xlarge | c6id.16xlarge | c6id.24xlarge | c6id.2xlarge | c6id.32xlarge | c6id.4xlarge | c6id.8xlarge | c6id.large | c6id.metal | c6id.xlarge | c6in.12xlarge | c6in.16xlarge | c6in.24xlarge | c6in.2xlarge | c6in.32xlarge | c6in.4xlarge | c6in.8xlarge | c6in.large | c6in.xlarge | c7g.12xlarge | c7g.16xlarge | c7g.2xlarge | c7g.4xlarge | c7g.8xlarge | c7g.large | c7g.medium | c7g.xlarge | cc1.4xlarge | cc2.8xlarge | cg1.4xlarge | cr1.8xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d2.xlarge | d3.2xlarge | d3.4xlarge | d3.8xlarge | d3.xlarge | d3en.12xlarge | d3en.2xlarge | d3en.4xlarge | d3en.6xlarge | d3en.8xlarge | d3en.xlarge | dl1.24xlarge | f1.16xlarge | f1.2xlarge | f1.4xlarge | g2.2xlarge | g2.8xlarge | g3.16xlarge | g3.4xlarge | g3.8xlarge | g3s.xlarge | g4ad.16xlarge | g4ad.2xlarge | g4ad.4xlarge | g4ad.8xlarge | g4ad.xlarge | g4dn.12xlarge | g4dn.16xlarge | g4dn.2xlarge | g4dn.4xlarge | g4dn.8xlarge | g4dn.metal | g4dn.xlarge | g5.12xlarge | g5.16xlarge | g5.24xlarge | g5.2xlarge | g5.48xlarge | g5.4xlarge | g5.8xlarge | g5.xlarge | g5g.16xlarge | g5g.2xlarge | g5g.4xlarge | g5g.8xlarge | g5g.metal | g5g.xlarge | h1.16xlarge | h1.2xlarge | h1.4xlarge | h1.8xlarge | hi1.4xlarge | hpc6a.48xlarge | hpc6id.32xlarge | hs1.8xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i2.xlarge | i3.16xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.large | i3.metal | i3.xlarge | i3en.12xlarge | i3en.24xlarge | i3en.2xlarge | i3en.3xlarge | i3en.6xlarge | i3en.large | i3en.metal | i3en.xlarge | i4i.16xlarge | i4i.2xlarge | i4i.32xlarge | i4i.4xlarge | i4i.8xlarge | i4i.large | i4i.metal | i4i.xlarge | im4gn.16xlarge | im4gn.2xlarge | im4gn.4xlarge | im4gn.8xlarge | im4gn.large | im4gn.xlarge | inf1.24xlarge | inf1.2xlarge | inf1.6xlarge | inf1.xlarge | is4gen.2xlarge | is4gen.4xlarge | is4gen.8xlarge | is4gen.large | is4gen.medium | is4gen.xlarge | m1.large | m1.medium | m1.small | m1.xlarge | m2.2xlarge | m2.4xlarge | m2.xlarge | m3.2xlarge | m3.large | m3.medium | m3.xlarge | m4.10xlarge | m4.16xlarge | m4.2xlarge | m4.4xlarge | m4.large | m4.xlarge | m5.12xlarge | m5.16xlarge | m5.24xlarge | m5.2xlarge | m5.4xlarge | m5.8xlarge | m5.large | m5.metal | m5.xlarge | m5a.12xlarge | m5a.16xlarge | m5a.24xlarge | m5a.2xlarge | m5a.4xlarge | m5a.8xlarge | m5a.large | m5a.xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.large | m5ad.xlarge | m5d.12xlarge | m5d.16xlarge | m5d.24xlarge | m5d.2xlarge | m5d.4xlarge | m5d.8xlarge | m5d.large | m5d.metal | m5d.xlarge | m5dn.12xlarge | m5dn.16xlarge | m5dn.24xlarge | m5dn.2xlarge | m5dn.4xlarge | m5dn.8xlarge | m5dn.large | m5dn.metal | m5dn.xlarge | m5n.12xlarge | m5n.16xlarge | m5n.24xlarge | m5n.2xlarge | m5n.4xlarge | m5n.8xlarge | m5n.large | m5n.metal | m5n.xlarge | m5zn.12xlarge | m5zn.2xlarge | m5zn.3xlarge | m5zn.6xlarge | m5zn.large | m5zn.metal | m5zn.xlarge | m6a.12xlarge | m6a.16xlarge | m6a.24xlarge | m6a.2xlarge | m6a.32xlarge | m6a.48xlarge | m6a.4xlarge | m6a.8xlarge | m6a.large | m6a.metal | m6a.xlarge | m6g.12xlarge | m6g.16xlarge | m6g.2xlarge | m6g.4xlarge | m6g.8xlarge | m6g.large | m6g.medium | m6g.metal | m6g.xlarge | m6gd.12xlarge | m6gd.16xlarge | m6gd.2xlarge | m6gd.4xlarge | m6gd.8xlarge | m6gd.large | m6gd.medium | m6gd.metal | m6gd.xlarge | m6i.12xlarge | m6i.16xlarge | m6i.24xlarge | m6i.2xlarge | m6i.32xlarge | m6i.4xlarge | m6i.8xlarge | m6i.large | m6i.metal | m6i.xlarge | m6id.12xlarge | m6id.16xlarge | m6id.24xlarge | m6id.2xlarge | m6id.32xlarge | m6id.4xlarge | m6id.8xlarge | m6id.large | m6id.metal | m6id.xlarge | m6idn.12xlarge | m6idn.16xlarge | m6idn.24xlarge | m6idn.2xlarge | m6idn.32xlarge | m6idn.4xlarge | m6idn.8xlarge | m6idn.large | m6idn.xlarge | m6in.12xlarge | m6in.16xlarge | m6in.24xlarge | m6in.2xlarge | m6in.32xlarge | m6in.4xlarge | m6in.8xlarge | m6in.large | m6in.xlarge | mac1.metal | mac2.metal | p2.16xlarge | p2.8xlarge | p2.xlarge | p3.16xlarge | p3.2xlarge | p3.8xlarge | p3dn.24xlarge | p4d.24xlarge | p4de.24xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r3.large | r3.xlarge | r4.16xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.large | r4.xlarge | r5.12xlarge | r5.16xlarge | r5.24xlarge | r5.2xlarge | r5.4xlarge | r5.8xlarge | r5.large | r5.metal | r5.xlarge | r5a.12xlarge | r5a.16xlarge | r5a.24xlarge | r5a.2xlarge | r5a.4xlarge | r5a.8xlarge | r5a.large | r5a.xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.large | r5ad.xlarge | r5b.12xlarge | r5b.16xlarge | r5b.24xlarge | r5b.2xlarge | r5b.4xlarge | r5b.8xlarge | r5b.large | r5b.metal | r5b.xlarge | r5d.12xlarge | r5d.16xlarge | r5d.24xlarge | r5d.2xlarge | r5d.4xlarge | r5d.8xlarge | r5d.large | r5d.metal | r5d.xlarge | r5dn.12xlarge | r5dn.16xlarge | r5dn.24xlarge | r5dn.2xlarge | r5dn.4xlarge | r5dn.8xlarge | r5dn.large | r5dn.metal | r5dn.xlarge | r5n.12xlarge | r5n.16xlarge | r5n.24xlarge | r5n.2xlarge | r5n.4xlarge | r5n.8xlarge | r5n.large | r5n.metal | r5n.xlarge | r6a.12xlarge | r6a.16xlarge | r6a.24xlarge | r6a.2xlarge | r6a.32xlarge | r6a.48xlarge | r6a.4xlarge | r6a.8xlarge | r6a.large | r6a.metal | r6a.xlarge | r6g.12xlarge | r6g.16xlarge | r6g.2xlarge | r6g.4xlarge | r6g.8xlarge | r6g.large | r6g.medium | r6g.metal | r6g.xlarge | r6gd.12xlarge | r6gd.16xlarge | r6gd.2xlarge | r6gd.4xlarge | r6gd.8xlarge | r6gd.large | r6gd.medium | r6gd.metal | r6gd.xlarge | r6i.12xlarge | r6i.16xlarge | r6i.24xlarge | r6i.2xlarge | r6i.32xlarge | r6i.4xlarge | r6i.8xlarge | r6i.large | r6i.metal | r6i.xlarge | r6id.12xlarge | r6id.16xlarge | r6id.24xlarge | r6id.2xlarge | r6id.32xlarge | r6id.4xlarge | r6id.8xlarge | r6id.large | r6id.metal | r6id.xlarge | r6idn.12xlarge | r6idn.16xlarge | r6idn.24xlarge | r6idn.2xlarge | r6idn.32xlarge | r6idn.4xlarge | r6idn.8xlarge | r6idn.large | r6idn.xlarge | r6in.12xlarge | r6in.16xlarge | r6in.24xlarge | r6in.2xlarge | r6in.32xlarge | r6in.4xlarge | r6in.8xlarge | r6in.large | r6in.xlarge | t1.micro | t2.2xlarge | t2.large | t2.medium | t2.micro | t2.nano | t2.small | t2.xlarge | t3.2xlarge | t3.large | t3.medium | t3.micro | t3.nano | t3.small | t3.xlarge | t3a.2xlarge | t3a.large | t3a.medium | t3a.micro | t3a.nano | t3a.small | t3a.xlarge | t4g.2xlarge | t4g.large | t4g.medium | t4g.micro | t4g.nano | t4g.small | t4g.xlarge | trn1.2xlarge | trn1.32xlarge | u-12tb1.112xlarge | u-12tb1.metal | u-18tb1.112xlarge | u-18tb1.metal | u-24tb1.112xlarge | u-24tb1.metal | u-3tb1.56xlarge | u-6tb1.112xlarge | u-6tb1.56xlarge | u-6tb1.metal | u-9tb1.112xlarge | u-9tb1.metal | vt1.24xlarge | vt1.3xlarge | vt1.6xlarge | x1.16xlarge | x1.32xlarge | x1e.16xlarge | x1e.2xlarge | x1e.32xlarge | x1e.4xlarge | x1e.8xlarge | x1e.xlarge | x2gd.12xlarge | x2gd.16xlarge | x2gd.2xlarge | x2gd.4xlarge | x2gd.8xlarge | x2gd.large | x2gd.medium | x2gd.metal | x2gd.xlarge | x2idn.16xlarge | x2idn.24xlarge | x2idn.32xlarge | x2idn.metal | x2iedn.16xlarge | x2iedn.24xlarge | x2iedn.2xlarge | x2iedn.32xlarge | x2iedn.4xlarge | x2iedn.8xlarge | x2iedn.metal | x2iedn.xlarge | x2iezn.12xlarge | x2iezn.2xlarge | x2iezn.4xlarge | x2iezn.6xlarge | x2iezn.8xlarge | x2iezn.metal | z1d.12xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.large | z1d.metal | z1d.xlarge`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType?: Value<string>;
  /**
   * Enable or disable monitoring for the instances.
   *
   * _Required_: No
   *
   * _Type_: [SpotFleetMonitoring](aws-properties-ec2-spotfleet-spotfleetmonitoring.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Monitoring?: EC2SpotFleetSpotFleetMonitoring;
}

/**
 * Specifies the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-classicloadbalancersconfig.html}
 **/
export interface EC2SpotFleetClassicLoadBalancersConfig {
  /**
   * One or more Classic Load Balancers.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ClassicLoadBalancer](aws-properties-ec2-spotfleet-classicloadbalancer.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClassicLoadBalancers: List<EC2SpotFleetClassicLoadBalancer>;
}

/**
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotmaintenancestrategies.html}
 **/
export interface EC2SpotFleetSpotMaintenanceStrategies {
  /**
   * The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see [Capacity rebalancing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: [SpotCapacityRebalance](aws-properties-ec2-spotfleet-spotcapacityrebalance.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CapacityRebalance?: EC2SpotFleetSpotCapacityRebalance;
}

/**
 * The Spot Instance replacement strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see [Capacity rebalancing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-capacity-rebalance.html) in the _Amazon EC2 User Guide for Linux Instances_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-spotcapacityrebalance.html}
 **/
export interface EC2SpotFleetSpotCapacityRebalance {
  /**
   * The amount of time (in seconds) that Amazon EC2 waits before terminating the old Spot Instance after launching a new replacement Spot Instance.
   *
   * Required when `ReplacementStrategy` is set to `launch-before-terminate`.
   *
   * Not valid when `ReplacementStrategy` is set to `launch`.
   *
   * Valid values: Minimum value of `120` seconds. Maximum value of `7200` seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TerminationDelay?: Value<number>;
  /**
   * The replacement strategy to use. Only available for fleets of type `maintain`.
   *
   * `launch` - Spot Fleet launches a new replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet. Spot Fleet does not terminate the instances that receive a rebalance notification. You can terminate the old instances, or you can leave them running. You are charged for all instances while they are running.
   *
   * `launch-before-terminate` - Spot Fleet launches a new replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet, and then, after a delay that you specify (in `TerminationDelay`), terminates the instances that received a rebalance notification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `launch | launch-before-terminate`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReplacementStrategy?: Value<string>;
}

/**
 * Describes a block device for an EBS volume.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-ebsblockdevice.html}
 **/
export interface EC2SpotFleetEbsBlockDevice {
  /**
   * The ID of the snapshot.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnapshotId?: Value<string>;
  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) in the _Amazon EC2 User Guide_. If the volume type is `io1` or `io2`, you must specify the IOPS that the volume supports.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `gp2 | gp3 | io1 | io2 | sc1 | st1 | standard`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeType?: Value<string>;
  /**
   * Indicates whether the encryption state of an EBS volume is changed while being restored from a backing snapshot. The effect of setting the encryption state to `true` depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Amazon EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-parameters) in the _Amazon EC2 User Guide_.
   *
   * In no case can you remove encryption from an encrypted volume.
   *
   * Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For more information, see [Supported Instance Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances).
   *
   * This parameter is not returned by [DescribeImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Encrypted?: Value<boolean>;
  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type:
   */
  Iops?: Value<number>;
  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
   *
   * The following are the supported volumes sizes for each volume type:
   */
  VolumeSize?: Value<number>;
  /**
   * Indicates whether the EBS volume is deleted on instance termination. For more information, see [Preserving Amazon EBS volumes on instance termination](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination) in the _Amazon EC2 User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeleteOnTermination?: Value<boolean>;
}

/**
 * Specifies the Classic Load Balancers and target groups to attach to a Spot Fleet request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-loadbalancersconfig.html}
 **/
export interface EC2SpotFleetLoadBalancersConfig {
  /**
   * The Classic Load Balancers.
   *
   * _Required_: No
   *
   * _Type_: [ClassicLoadBalancersConfig](aws-properties-ec2-spotfleet-classicloadbalancersconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClassicLoadBalancersConfig?: EC2SpotFleetClassicLoadBalancersConfig;
  /**
   * The target groups.
   *
   * _Required_: No
   *
   * _Type_: [TargetGroupsConfig](aws-properties-ec2-spotfleet-targetgroupsconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetGroupsConfig?: EC2SpotFleetTargetGroupsConfig;
}

/**
 * Specifies the launch template to be used by the Spot Fleet request for configuring Amazon EC2 instances.
 *
 * You must specify the following:
 *
 * `FleetLaunchTemplateSpecification` is a property of the [AWS::EC2::SpotFleet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html) resource.
 *
 * For information about creating a launch template, see [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) and [Create a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template) in the _Amazon EC2 User Guide_.
 *
 * For examples of launch templates, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate--examples).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-fleetlaunchtemplatespecification.html}
 **/
export interface EC2SpotFleetFleetLaunchTemplateSpecification {
  /**
   * The name of the launch template.
   *
   * You must specify the `LaunchTemplateName` or the `LaunchTemplateId`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9().-/_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchTemplateName?: Value<string>;
  /**
   * The version number of the launch template.
   *
   * Specifying `$Latest` or `$Default` for the template version number is not supported. However, you can specify `LatestVersionNumber` or `DefaultVersionNumber` using the `Fn::GetAtt` intrinsic function. For more information, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate-return-values-fn--getatt).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Version: Value<string>;
  /**
   * The ID of the launch template.
   *
   * You must specify the `LaunchTemplateId` or the `LaunchTemplateName`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchTemplateId?: Value<string>;
}

/**
 * The minimum and maximum number of network interfaces.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-networkinterfacecountrequest.html}
 **/
export interface EC2SpotFleetNetworkInterfaceCountRequest {
  /**
   * The minimum number of network interfaces. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum number of network interfaces. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}

/**
 * Specifies a Classic Load Balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-classicloadbalancer.html}
 **/
export interface EC2SpotFleetClassicLoadBalancer {
  /**
   * The name of the load balancer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Specifies a launch template and overrides.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-launchtemplateconfig.html}
 **/
export interface EC2SpotFleetLaunchTemplateConfig {
  /**
   * The launch template.
   *
   * _Required_: No
   *
   * _Type_: [FleetLaunchTemplateSpecification](aws-properties-ec2-spotfleet-fleetlaunchtemplatespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchTemplateSpecification?: EC2SpotFleetFleetLaunchTemplateSpecification;
  /**
   * Any parameters that you specify override the same parameters in the launch template.
   *
   * _Required_: No
   *
   * _Type_: List of [LaunchTemplateOverrides](aws-properties-ec2-spotfleet-launchtemplateoverrides.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Overrides?: List<EC2SpotFleetLaunchTemplateOverrides>;
}

/**
 * Describes an IPv6 address.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-instanceipv6address.html}
 **/
export interface EC2SpotFleetInstanceIpv6Address {
  /**
   * The IPv6 address.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ipv6Address: Value<string>;
}

/**
 * Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-targetgroupsconfig.html}
 **/
export interface EC2SpotFleetTargetGroupsConfig {
  /**
   * One or more target groups.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TargetGroup](aws-properties-ec2-spotfleet-targetgroup.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetGroups: List<EC2SpotFleetTargetGroup>;
}

/**
 * Describes a security group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-groupidentifier.html}
 **/
export interface EC2SpotFleetGroupIdentifier {
  /**
   * The ID of the security group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupId: Value<string>;
}

/**
 * The minimum and maximum number of vCPUs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-spotfleet-vcpucountrangerequest.html}
 **/
export interface EC2SpotFleetVCpuCountRangeRequest {
  /**
   * The minimum number of vCPUs. To specify no minimum limit, specify `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Min?: Value<number>;
  /**
   * The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Max?: Value<number>;
}
export interface EC2SpotFleetProperties {
  /**
   * Describes the configuration of a Spot Fleet request.
   *
   * _Required_: Yes
   *
   * _Type_: [SpotFleetRequestConfigData](aws-properties-ec2-spotfleet-spotfleetrequestconfigdata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpotFleetRequestConfigData: EC2SpotFleetSpotFleetRequestConfigData;
}

/**
 * Specifies a Spot Fleet request.
 *
 * The Spot Fleet request specifies the total target capacity and the On-Demand target capacity. Amazon EC2 calculates the difference between the total capacity and On-Demand capacity, and launches the difference as Spot capacity.
 *
 * You can submit a single request that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.
 *
 * By default, the Spot Fleet requests Spot Instances in the Spot Instance pool where the price per unit is the lowest. Each launch specification can include its own instance weighting that reflects the value of the instance type to your application workload.
 *
 * Alternatively, you can specify that the Spot Fleet distribute the target capacity across the Spot pools included in its launch specifications. By ensuring that the Spot Instances in your Spot Fleet are in different Spot pools, you can improve the availability of your fleet.
 *
 * You can specify tags for the Spot Fleet request and instances launched by the fleet. You cannot tag other resource types in a Spot Fleet request because only the `spot-fleet-request` and `instance` resource types are supported.
 *
 * For more information, see [Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet.html) in the _Amazon EC2 User Guide for Linux Instances_.
 *
 * **Important**
 *
 * We strongly discourage using the RequestSpotFleet API because it is a legacy API with no planned investment. For options for requesting Spot Instances, see [Which is the best Spot request method to use?](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html#which-spot-request-method-to-use) in the _Amazon EC2 User Guide for Linux Instances_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-spotfleet.html}
 */
export interface EC2SpotFleetResource {
  Type: 'AWS::EC2::SpotFleet';
  Properties: EC2SpotFleetProperties;
}
