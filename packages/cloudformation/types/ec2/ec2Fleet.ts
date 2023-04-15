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
 * Specifies the launch template to be used by the EC2 Fleet for configuring Amazon EC2 instances.
 *
 * You must specify the following:
 *
 * `FleetLaunchTemplateSpecificationRequest` is a property of the [ FleetLaunchTemplateConfigRequest](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateconfigrequest.html) property type.
 *
 * For information about creating a launch template, see [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) and [Create a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template) in the _Amazon EC2 User Guide_.
 *
 * For examples of launch templates, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate--examples).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplatespecificationrequest.html}
 **/
export interface EC2EC2FleetFleetLaunchTemplateSpecificationRequest {
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
   * The launch template version number, `$Latest`, or `$Default`. You must specify a value, otherwise the request fails.
   *
   * If the value is `$Latest`, Amazon EC2 uses the latest version of the launch template.
   *
   * If the value is `$Default`, Amazon EC2 uses the default version of the launch template.
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-networkinterfacecountrequest.html}
 **/
export interface EC2EC2FleetNetworkInterfaceCountRequest {
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
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-baselineebsbandwidthmbpsrequest.html}
 **/
export interface EC2EC2FleetBaselineEbsBandwidthMbpsRequest {
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
 * Specifies the tags to apply to a resource when the resource is being created for an EC2 Fleet.
 *
 * `TagSpecification` is a property of the [ AWS::EC2::EC2Fleet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-tagspecification.html}
 **/
export interface EC2EC2FleetTagSpecification {
  /**
   * The type of resource to tag. `ResourceType` must be `fleet`.
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
   * The tags to apply to the resource.
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
 * Specifies the configuration of Spot Instances for an EC2 Fleet.
 *
 * `SpotOptionsRequest` is a property of the [ AWS::EC2::EC2Fleet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-spotoptionsrequest.html}
 **/
export interface EC2EC2FleetSpotOptionsRequest {
  /**
   * Indicates that the fleet launches all Spot Instances into a single Availability Zone.
   *
   * Supported only for fleets of type `instant`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SingleAvailabilityZone?: Value<boolean>;
  /**
   * Indicates how to allocate the target Spot Instance capacity across the Spot Instance pools specified by the EC2 Fleet.
   *
   * If the allocation strategy is `lowestPrice`, EC2 Fleet launches instances from the Spot Instance pools with the lowest price. This is the default allocation strategy.
   *
   * If the allocation strategy is `diversified`, EC2 Fleet launches instances from all the Spot Instance pools that you specify.
   *
   * If the allocation strategy is `capacityOptimized`, EC2 Fleet launches instances from Spot Instance pools that are optimally chosen based on the available Spot Instance capacity.
   *
   * _Allowed Values_: `lowestPrice` | `diversified` | `capacityOptimized` | `capacityOptimizedPrioritized`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AllocationStrategy?: Value<string>;
  /**
   * Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet.
   *
   * Supported only for fleets of type `instant`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SingleInstanceType?: Value<boolean>;
  /**
   * The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances.
   *
   * Supported only for fleets of type `instant`.
   *
   * At least one of the following must be specified: `SingleAvailabilityZone` | `SingleInstanceType`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinTargetCapacity?: Value<number>;
  /**
   * The maximum amount per hour for Spot Instances that you're willing to pay. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   *
   * If you specify a maximum price, your Spot Instances will be interrupted more frequently than if you do not specify this parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxTotalPrice?: Value<string>;
  /**
   * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
   *
   * _Required_: No
   *
   * _Type_: [MaintenanceStrategies](aws-properties-ec2-ec2fleet-maintenancestrategies.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaintenanceStrategies?: EC2EC2FleetMaintenanceStrategies;
  /**
   * The behavior when a Spot Instance is interrupted.
   *
   * Default: `terminate`
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
   * The number of Spot pools across which to allocate your target Spot capacity. Supported only when Spot `AllocationStrategy` is set to `lowest-price`. EC2 Fleet selects the cheapest Spot pools and evenly allocates your target Spot capacity across the number of Spot pools that you specify.
   *
   * Note that EC2 Fleet attempts to draw Spot Instances from the number of pools that you specify on a best effort basis. If a pool runs out of Spot capacity before fulfilling your target capacity, EC2 Fleet will continue to fulfill your request by drawing from the next cheapest pool. To ensure that your target capacity is met, you might receive Spot Instances from more than the number of pools that you specified. Similarly, if most of the pools have no Spot capacity, you might receive your full target capacity from fewer than the number of pools that you specified.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstancePoolsToUseCount?: Value<number>;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-instancerequirementsrequest.html}
 **/
export interface EC2EC2FleetInstanceRequirementsRequest {
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
   * _Type_: [NetworkInterfaceCountRequest](aws-properties-ec2-ec2fleet-networkinterfacecountrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkInterfaceCount?: EC2EC2FleetNetworkInterfaceCountRequest;
  /**
   * The minimum and maximum amount of memory per vCPU, in GiB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [MemoryGiBPerVCpuRequest](aws-properties-ec2-ec2fleet-memorygibpervcpurequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MemoryGiBPerVCpu?: EC2EC2FleetMemoryGiBPerVCpuRequest;
  /**
   * The accelerator types that must be on the instance type.
   */
  AcceleratorTypes?: List<Value<string>>;
  /**
   * The minimum and maximum number of vCPUs.
   *
   * _Required_: No
   *
   * _Type_: [VCpuCountRangeRequest](aws-properties-ec2-ec2fleet-vcpucountrangerequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VCpuCount?: EC2EC2FleetVCpuCountRangeRequest;
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
   * _Type_: [NetworkBandwidthGbpsRequest](aws-properties-ec2-ec2fleet-networkbandwidthgbpsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkBandwidthGbps?: EC2EC2FleetNetworkBandwidthGbpsRequest;
  /**
   * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
   *
   * To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [AcceleratorCountRequest](aws-properties-ec2-ec2fleet-acceleratorcountrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AcceleratorCount?: EC2EC2FleetAcceleratorCountRequest;
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
   * _Type_: [BaselineEbsBandwidthMbpsRequest](aws-properties-ec2-ec2fleet-baselineebsbandwidthmbpsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BaselineEbsBandwidthMbps?: EC2EC2FleetBaselineEbsBandwidthMbpsRequest;
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
   * _Type_: [AcceleratorTotalMemoryMiBRequest](aws-properties-ec2-ec2fleet-acceleratortotalmemorymibrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AcceleratorTotalMemoryMiB?: EC2EC2FleetAcceleratorTotalMemoryMiBRequest;
  /**
   * Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
   */
  BurstablePerformance?: Value<string>;
  /**
   * The minimum and maximum amount of memory, in MiB.
   *
   * _Required_: No
   *
   * _Type_: [MemoryMiBRequest](aws-properties-ec2-ec2fleet-memorymibrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MemoryMiB?: EC2EC2FleetMemoryMiBRequest;
  /**
   * The minimum and maximum amount of total local storage, in GB.
   *
   * Default: No minimum or maximum limits
   *
   * _Required_: No
   *
   * _Type_: [TotalLocalStorageGBRequest](aws-properties-ec2-ec2fleet-totallocalstoragegbrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TotalLocalStorageGB?: EC2EC2FleetTotalLocalStorageGBRequest;
}

/**
 * The minimum and maximum amount of memory, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-memorymibrequest.html}
 **/
export interface EC2EC2FleetMemoryMiBRequest {
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
 * The strategies for managing your Spot Instances that are at an elevated risk of being interrupted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-maintenancestrategies.html}
 **/
export interface EC2EC2FleetMaintenanceStrategies {
  /**
   * The strategy to use when Amazon EC2 emits a signal that your Spot Instance is at an elevated risk of being interrupted.
   *
   * _Required_: No
   *
   * _Type_: [CapacityRebalance](aws-properties-ec2-ec2fleet-capacityrebalance.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CapacityRebalance?: EC2EC2FleetCapacityRebalance;
}

/**
 * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
 *
 * **Note**
 *
 * Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-networkbandwidthgbpsrequest.html}
 **/
export interface EC2EC2FleetNetworkBandwidthGbpsRequest {
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
 * Specifies the number of units to request for an EC2 Fleet. You can choose to set the target capacity in terms of instances or a performance characteristic that is important to your application workload, such as vCPUs, memory, or I/O. If the request type is `maintain`, you can specify a target capacity of `0` and add capacity later.
 *
 * `TargetCapacitySpecificationRequest` is a property of the [AWS::EC2::EC2Fleet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-targetcapacityspecificationrequest.html}
 **/
export interface EC2EC2FleetTargetCapacitySpecificationRequest {
  /**
   * The default `TotalTargetCapacity`, which is either `Spot` or `On-Demand`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `on-demand | spot`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultTargetCapacityType?: Value<string>;
  /**
   * The number of units to request, filled using `DefaultTargetCapacityType`.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalTargetCapacity: Value<number>;
  /**
   * The number of On-Demand units to request.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnDemandTargetCapacity?: Value<number>;
  /**
   * The number of Spot units to request.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpotTargetCapacity?: Value<number>;
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
}

/**
 * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
 *
 * **Note**
 *
 * This strategy can only be used if the EC2 Fleet is of type `instant`.
 *
 * For more information about Capacity Reservations, see [On-Demand Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html) in the _Amazon EC2 User Guide_. For examples of using Capacity Reservations in an EC2 Fleet, see [EC2 Fleet example configurations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-examples.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-capacityreservationoptionsrequest.html}
 **/
export interface EC2EC2FleetCapacityReservationOptionsRequest {
  /**
   * Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.
   *
   * If you specify `use-capacity-reservations-first`, the fleet uses unused Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If multiple instance pools have unused Capacity Reservations, the On-Demand allocation strategy (`lowest-price` or `prioritized`) is applied. If the number of unused Capacity Reservations is less than the On-Demand target capacity, the remaining On-Demand target capacity is launched according to the On-Demand allocation strategy (`lowest-price` or `prioritized`).
   *
   * If you do not specify a value, the fleet fulfils the On-Demand capacity according to the chosen On-Demand allocation strategy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `use-capacity-reservations-first`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UsageStrategy?: Value<string>;
}

/**
 * The minimum and maximum amount of total local storage, in GB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-totallocalstoragegbrequest.html}
 **/
export interface EC2EC2FleetTotalLocalStorageGBRequest {
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
 * Specifies a launch template and overrides for an EC2 Fleet.
 *
 * `FleetLaunchTemplateConfigRequest` is a property of the [AWS::EC2::EC2Fleet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateconfigrequest.html}
 **/
export interface EC2EC2FleetFleetLaunchTemplateConfigRequest {
  /**
   * The launch template to use. You must specify either the launch template ID or launch template name in the request.
   *
   * _Required_: No
   *
   * _Type_: [FleetLaunchTemplateSpecificationRequest](aws-properties-ec2-ec2fleet-fleetlaunchtemplatespecificationrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchTemplateSpecification?: EC2EC2FleetFleetLaunchTemplateSpecificationRequest;
  /**
   * Any parameters that you specify override the same parameters in the launch template.
   *
   * For fleets of type `request` and `maintain`, a maximum of 300 items is allowed across all launch templates.
   *
   * _Required_: No
   *
   * _Type_: List of [FleetLaunchTemplateOverridesRequest](aws-properties-ec2-ec2fleet-fleetlaunchtemplateoverridesrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Overrides?: List<EC2EC2FleetFleetLaunchTemplateOverridesRequest>;
}

/**
 * The minimum and maximum amount of total accelerator memory, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-acceleratortotalmemorymibrequest.html}
 **/
export interface EC2EC2FleetAcceleratorTotalMemoryMiBRequest {
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
 * The minimum and maximum amount of memory per vCPU, in GiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-memorygibpervcpurequest.html}
 **/
export interface EC2EC2FleetMemoryGiBPerVCpuRequest {
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
 * Specifies the allocation strategy of On-Demand Instances in an EC2 Fleet.
 *
 * `OnDemandOptionsRequest` is a property of the [AWS::EC2::EC2Fleet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-ondemandoptionsrequest.html}
 **/
export interface EC2EC2FleetOnDemandOptionsRequest {
  /**
   * Indicates that the fleet launches all On-Demand Instances into a single Availability Zone.
   *
   * Supported only for fleets of type `instant`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SingleAvailabilityZone?: Value<boolean>;
  /**
   * The strategy that determines the order of the launch template overrides to use in fulfilling On-Demand capacity.
   *
   * `lowest-price` - EC2 Fleet uses price to determine the order, launching the lowest price first.
   *
   * `prioritized` - EC2 Fleet uses the priority that you assigned to each launch template override, launching the highest priority first.
   *
   * Default: `lowest-price`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `lowest-price | prioritized`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AllocationStrategy?: Value<string>;
  /**
   * Indicates that the fleet uses a single instance type to launch all On-Demand Instances in the fleet.
   *
   * Supported only for fleets of type `instant`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SingleInstanceType?: Value<boolean>;
  /**
   * The minimum target capacity for On-Demand Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances.
   *
   * Supported only for fleets of type `instant`.
   *
   * At least one of the following must be specified: `SingleAvailabilityZone` | `SingleInstanceType`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinTargetCapacity?: Value<number>;
  /**
   * The maximum amount per hour for On-Demand Instances that you're willing to pay.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxTotalPrice?: Value<string>;
  /**
   * The strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
   *
   * Supported only for fleets of type `instant`.
   *
   * _Required_: No
   *
   * _Type_: [CapacityReservationOptionsRequest](aws-properties-ec2-ec2fleet-capacityreservationoptionsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CapacityReservationOptions?: EC2EC2FleetCapacityReservationOptionsRequest;
}

/**
 * Specifies overrides for a launch template for an EC2 Fleet.
 *
 * `FleetLaunchTemplateOverridesRequest` is a property of the [ FleetLaunchTemplateConfigRequest](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateconfigrequest.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-fleetlaunchtemplateoverridesrequest.html}
 **/
export interface EC2EC2FleetFleetLaunchTemplateOverridesRequest {
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
   * The location where the instance launched, if applicable.
   *
   * _Required_: No
   *
   * _Type_: [Placement](aws-properties-ec2-ec2fleet-placement.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Placement?: EC2EC2FleetPlacement;
  /**
   * The priority for the launch template override. The highest priority is launched first.
   *
   * If the On-Demand `AllocationStrategy` is set to `prioritized`, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity.
   *
   * If the Spot `AllocationStrategy` is set to `capacity-optimized-prioritized`, EC2 Fleet uses priority on a best-effort basis to determine which launch template override to use in fulfilling Spot capacity, but optimizes for capacity first.
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
   * The IDs of the subnets in which to launch the instances. Separate multiple subnet IDs using commas (for example, `subnet-1234abcdeexample1, subnet-0987cdef6example2`). A request of type `instant` can have only one subnet ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId?: Value<string>;
  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.
   *
   * If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * _Required_: No
   *
   * _Type_: [InstanceRequirementsRequest](aws-properties-ec2-ec2fleet-instancerequirementsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceRequirements?: EC2EC2FleetInstanceRequirementsRequest;
  /**
   * The instance type.
   *
   * `mac1.metal` is not supported as a launch template override.
   *
   * If you specify `InstanceType`, you can't specify `InstanceRequirements`.
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
  MaxPrice?: Value<string>;
}

/**
 * Describes the placement of an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-placement.html}
 **/
export interface EC2EC2FleetPlacement {
  /**
   * The name of the placement group that the instance is in. If you specify `GroupName`, you can't specify `GroupId`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupName?: Value<string>;
  /**
   * The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of `dedicated` runs on single-tenant hardware.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet). The `host` tenancy is not supported for [ImportInstance](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html) or for T3 instances that are configured for the `unlimited` CPU credit option.
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
   * Reserved for future use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpreadDomain?: Value<string>;
  /**
   * The number of the partition that the instance is in. Valid only if the placement group strategy is set to `partition`.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PartitionNumber?: Value<number>;
  /**
   * The Availability Zone of the instance.
   *
   * If not specified, an Availability Zone will be automatically chosen for you based on the load balancing criteria for the Region.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone?: Value<string>;
  /**
   * The affinity setting for the instance on the Dedicated Host.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet) or [ImportInstance](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Affinity?: Value<string>;
  /**
   * The ID of the Dedicated Host on which the instance resides.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet) or [ImportInstance](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HostId?: Value<string>;
  /**
   * The ARN of the host resource group in which to launch the instances.
   *
   * If you specify this parameter, either omit the **Tenancy** parameter or set it to `host`.
   *
   * This parameter is not supported for [CreateFleet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HostResourceGroupArn?: Value<string>;
}

/**
 * The Spot Instance replacement strategy to use when Amazon EC2 emits a rebalance notification signal that your Spot Instance is at an elevated risk of being interrupted. For more information, see [Capacity rebalancing](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-capacity-rebalance.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-capacityrebalance.html}
 **/
export interface EC2EC2FleetCapacityRebalance {
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
   * `launch` - EC2 Fleet launches a replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet. EC2 Fleet does not terminate the instances that receive a rebalance notification. You can terminate the old instances, or you can leave them running. You are charged for all instances while they are running.
   *
   * `launch-before-terminate` - EC2 Fleet launches a replacement Spot Instance when a rebalance notification is emitted for an existing Spot Instance in the fleet, and then, after a delay that you specify (in `TerminationDelay`), terminates the instances that received a rebalance notification.
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
 * The minimum and maximum number of vCPUs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-vcpucountrangerequest.html}
 **/
export interface EC2EC2FleetVCpuCountRangeRequest {
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

/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance. To exclude accelerator-enabled instance types, set `Max` to `0`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ec2fleet-acceleratorcountrequest.html}
 **/
export interface EC2EC2FleetAcceleratorCountRequest {
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
export interface EC2EC2FleetProperties {
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
   * The number of units to request.
   *
   * _Required_: Yes
   *
   * _Type_: [TargetCapacitySpecificationRequest](aws-properties-ec2-ec2fleet-targetcapacityspecificationrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetCapacitySpecification: EC2EC2FleetTargetCapacitySpecificationRequest;
  /**
   * Describes the configuration of On-Demand Instances in an EC2 Fleet.
   *
   * _Required_: No
   *
   * _Type_: [OnDemandOptionsRequest](aws-properties-ec2-ec2fleet-ondemandoptionsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OnDemandOptions?: EC2EC2FleetOnDemandOptionsRequest;
  /**
   * The fleet type. The default value is `maintain`.
   */
  Type?: Value<string>;
  /**
   * Indicates whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2 Fleet.
   *
   * Supported only for fleets of type `maintain`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `no-termination | termination`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcessCapacityTerminationPolicy?: Value<string>;
  /**
   * The key-value pair for tagging the EC2 Fleet request on creation. For more information, see [Tagging your resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-resources).
   *
   * If the fleet type is `instant`, specify a resource type of `fleet` to tag the fleet or `instance` to tag the instances at launch.
   *
   * If the fleet type is `maintain` or `request`, specify a resource type of `fleet` to tag the fleet. You cannot specify a resource type of `instance`. To tag instances at launch, specify the tags in a [launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template).
   *
   * _Required_: No
   *
   * _Type_: List of [TagSpecification](aws-properties-ec2-ec2fleet-tagspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagSpecifications?: List<EC2EC2FleetTagSpecification>;
  /**
   * Describes the configuration of Spot Instances in an EC2 Fleet.
   *
   * _Required_: No
   *
   * _Type_: [SpotOptionsRequest](aws-properties-ec2-ec2fleet-spotoptionsrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotOptions?: EC2EC2FleetSpotOptionsRequest;
  /**
   * The start date and time of the request, in UTC format (for example, _YYYY_-_MM_-*DD*T*HH*:_MM_:*SS*Z). The default is to start fulfilling the request immediately.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidFrom?: Value<string>;
  /**
   * Indicates whether EC2 Fleet should replace unhealthy Spot Instances. Supported only for fleets of type `maintain`. For more information, see [EC2 Fleet health checks](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#ec2-fleet-health-checks) in the _Amazon EC2 User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReplaceUnhealthyInstances?: Value<boolean>;
  /**
   * The configuration for the EC2 Fleet.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FleetLaunchTemplateConfigRequest](aws-properties-ec2-ec2fleet-fleetlaunchtemplateconfigrequest.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchTemplateConfigs: List<EC2EC2FleetFleetLaunchTemplateConfigRequest>;
  /**
   * Indicates whether running instances should be terminated when the EC2 Fleet expires.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TerminateInstancesWithExpiration?: Value<boolean>;
  /**
   * The end date and time of the request, in UTC format (for example, _YYYY_-_MM_-*DD*T*HH*:_MM_:*SS*Z). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidUntil?: Value<string>;
}

/**
 * Specifies the configuration information to launch a fleet--or group--of instances. An EC2 Fleet can launch multiple instance types across multiple Availability Zones, using the On-Demand Instance, Reserved Instance, and Spot Instance purchasing models together. Using EC2 Fleet, you can define separate On-Demand and Spot capacity targets, specify the instance types that work best for your applications, and specify how Amazon EC2 should distribute your fleet capacity within each purchasing model. For more information, see [Launching an EC2 Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html) in the _Amazon EC2 User Guide for Linux Instances_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ec2fleet.html}
 */
export interface EC2EC2FleetResource {
  Type: 'AWS::EC2::EC2Fleet';
  Properties: EC2EC2FleetProperties;
}
