/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * `MonthlyTransfer` is a property of the [Networking](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html) property. It describes the amount of allocated monthly data transfer (in GB) for an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-monthlytransfer.html}
 **/
export interface LightsailInstanceMonthlyTransfer {
  /**
   * The amount of allocated monthly data transfer (in GB) for an instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GbPerMonthAllocated?: Value<string>;
}

/**
 * `Hardware` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the hardware properties for the instance, such as the vCPU count, attached disks, and amount of RAM.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html}
 **/
export interface LightsailInstanceHardware {
  /**
   * The number of vCPUs the instance has.
   *
   * The `CpuCount` property is read-only and should not be specified in a create instance or update instance request.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: Updates are not supported.
   */
  CpuCount?: Value<number>;
  /**
   * The amount of RAM in GB on the instance (for example, `1.0`).
   *
   * The `RamSizeInGb` property is read-only and should not be specified in a create instance or update instance request.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: Updates are not supported.
   */
  RamSizeInGb?: Value<number>;
  /**
   * The disks attached to the instance.
   *
   * The instance restarts when performing an attach disk or detach disk request. This resets the public IP address of your instance if a static IP isn't attached to it.
   *
   * _Required_: No
   *
   * _Type_: List of [Disk](aws-properties-lightsail-instance-disk.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Disks?: List<LightsailInstanceDisk>;
}

/**
 * `Location` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the location for an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-location.html}
 **/
export interface LightsailInstanceLocation {
  /**
   * The name of the AWS Region for the instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionName?: Value<string>;
  /**
   * The Availability Zone for the instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZone?: Value<string>;
}

/**
 * `Networking` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the public ports and the monthly amount of data transfer allocated for the instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html}
 **/
export interface LightsailInstanceNetworking {
  /**
   * An array of ports to open on the instance.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Port](aws-properties-lightsail-instance-port.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ports: List<LightsailInstancePort>;
  /**
   * The monthly amount of data transfer, in GB, allocated for the instance
   *
   * _Required_: No
   *
   * _Type_: [MonthlyTransfer](aws-properties-lightsail-instance-monthlytransfer.md)
   *
   * _Update requires_: Updates are not supported.
   */
  MonthlyTransfer?: LightsailInstanceMonthlyTransfer;
}

/**
 * `State` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the status code and the state (for example, `running`) of an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-state.html}
 **/
export interface LightsailInstanceState {
  /**
   * The status code of the instance.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Code?: Value<number>;
  /**
   * The state of the instance (for example, `running` or `pending`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * `Port` is a property of the [Networking](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html) property. It describes information about ports for an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-port.html}
 **/
export interface LightsailInstancePort {
  /**
   * The first port in a range of open ports on an instance.
   *
   * Allowed ports:
   */
  FromPort?: Value<number>;
  /**
   * The access direction (`inbound` or `outbound`).
   *
   * Lightsail currently supports only `inbound` access direction.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessDirection?: Value<string>;
  /**
   * An alias that defines access for a preconfigured range of IP addresses.
   *
   * The only alias currently supported is `lightsail-connect`, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CidrListAliases?: List<Value<string>>;
  /**
   * The last port in a range of open ports on an instance.
   *
   * Allowed ports:
   */
  ToPort?: Value<number>;
  /**
   * The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.
   *
   * The `cidrs` parameter lists the IPv4 addresses that are allowed to connect to an instance.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6Cidrs?: List<Value<string>>;
  /**
   * The location from which access is allowed. For example, `Anywhere (0.0.0.0/0)`, or `Custom` if a specific IP address or range of IP addresses is allowed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessFrom?: Value<string>;
  /**
   * The IP protocol name.
   *
   * The name can be one of the following:
   */
  Protocol?: Value<string>;
  /**
   * The type of access (`Public` or `Private`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessType?: Value<string>;
  /**
   * The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.
   *
   * The `ipv6Cidrs` parameter lists the IPv6 addresses that are allowed to connect to an instance.
   *
   * Examples:
   */
  Cidrs?: List<Value<string>>;
  /**
   * The common name of the port information.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CommonName?: Value<string>;
}

/**
 * `AddOn` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the add-ons for an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html}
 **/
export interface LightsailInstanceAddOn {
  /**
   * The status of the add-on.
   *
   * Valid Values: `Enabled` | `Disabled`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The add-on type (for example, `AutoSnapshot`).
   *
   * `AutoSnapshot` is the only add-on that can be enabled for an instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddOnType: Value<string>;
  /**
   * The parameters for the automatic snapshot add-on, such as the daily time when an automatic snapshot will be created.
   *
   * _Required_: No
   *
   * _Type_: [AutoSnapshotAddOn](aws-properties-lightsail-instance-autosnapshotaddon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoSnapshotAddOnRequest?: LightsailInstanceAutoSnapshotAddOn;
}

/**
 * `AutoSnapshotAddOn` is a property of the [AddOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html) property. It describes the automatic snapshot add-on for an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-autosnapshotaddon.html}
 **/
export interface LightsailInstanceAutoSnapshotAddOn {
  /**
   * The daily time when an automatic snapshot will be created.
   *
   * Constraints:
   */
  SnapshotTimeOfDay?: Value<string>;
}

/**
 * `Disk` is a property of the [Hardware](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html) property. It describes a disk attached to an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-disk.html}
 **/
export interface LightsailInstanceDisk {
  /**
   * The size of the disk in GB.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  SizeInGb?: Value<string>;
  /**
   * The disk path.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  Path: Value<string>;
  /**
   * (Deprecated) The attachment state of the disk.
   *
   * In releases prior to November 14, 2017, this parameter returned `attached` for system disks in the API response. It is now deprecated, but still included in the response. Use `isAttached` instead.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  AttachmentState?: Value<string>;
  /**
   * A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: Updates are not supported.
   */
  IsSystemDisk?: Value<boolean>;
  /**
   * The resources to which the disk is attached.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  AttachedTo?: Value<string>;
  /**
   * The input/output operations per second (IOPS) of the disk.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: Updates are not supported.
   */
  IOPS?: Value<number>;
  /**
   * The unique name of the disk.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DiskName: Value<string>;
}
export interface LightsailInstanceProperties {
  /**
   * The name of the instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `w[w-]*w`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceName: Value<string>;
  /**
   * The name of the key pair to use for the instance.
   *
   * If no key pair name is specified, the Regional Lightsail default key pair is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyPairName?: Value<string>;
  /**
   * The bundle ID for the instance (for example, `micro_1_0`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  BundleId: Value<string>;
  /**
   * The blueprint ID for the instance (for example, `os_amlinux_2016_03`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  BlueprintId: Value<string>;
  /**
   * The public ports and the monthly amount of data transfer allocated for the instance.
   *
   * _Required_: No
   *
   * _Type_: [Networking](aws-properties-lightsail-instance-networking.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Networking?: LightsailInstanceNetworking;
  /**
   * The optional launch script for the instance.
   *
   * Specify a launch script to configure an instance with additional user data. For example, you might want to specify `apt-get -y update` as a launch script.
   *
   * Depending on the blueprint of your instance, the command to get software on your instance varies. Amazon Linux and CentOS use `yum`, Debian and Ubuntu use `apt-get`, and FreeBSD uses `pkg`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserData?: Value<string>;
  /**
   * The status code and the state (for example, `running`) of the instance.
   *
   * The `State` property is read-only and should not be specified in a create instance or update instance request.
   *
   * _Required_: No
   *
   * _Type_: [State](aws-properties-lightsail-instance-state.md)
   *
   * _Update requires_: Updates are not supported.
   */
  State?: LightsailInstanceState;
  /**
   * The Availability Zone for the instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  AvailabilityZone?: Value<string>;
  /**
   * An array of add-ons for the instance.
   *
   * If the instance has an add-on enabled when performing a delete instance request, the add-on is automatically disabled before the instance is deleted.
   *
   * _Required_: No
   *
   * _Type_: List of [AddOn](aws-properties-lightsail-instance-addon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddOns?: List<LightsailInstanceAddOn>;
  /**
   * The hardware properties for the instance, such as the vCPU count, attached disks, and amount of RAM.
   *
   * The instance restarts when performing an attach disk or detach disk request. This resets the public IP address of your instance if a static IP isn't attached to it.
   *
   * _Required_: No
   *
   * _Type_: [Hardware](aws-properties-lightsail-instance-hardware.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Hardware?: LightsailInstanceHardware;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * The `Value` of `Tags` is optional for Lightsail resources.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The location for the instance, such as the AWS Region and Availability Zone.
   *
   * The `Location` property is read-only and should not be specified in a create instance or update instance request.
   *
   * _Required_: No
   *
   * _Type_: [Location](aws-properties-lightsail-instance-location.md)
   *
   * _Update requires_: Updates are not supported.
   */
  Location?: LightsailInstanceLocation;
}

/**
 * The `AWS::Lightsail::Instance` resource specifies an Amazon Lightsail instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html}
 */
export interface LightsailInstanceResource {
  Type: 'AWS::Lightsail::Instance';
  Properties: LightsailInstanceProperties;
}
