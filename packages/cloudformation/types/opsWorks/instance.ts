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
 * Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 [EbsBlockDevice](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html) data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-ebsblockdevice.html}
 **/
export interface OpsWorksInstanceEbsBlockDevice {
  /**
   * Whether the volume is deleted on instance termination.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeleteOnTermination?: Value<boolean>;
  /**
   * The number of I/O operations per second (IOPS) that the volume supports. For more information, see [EbsBlockDevice](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iops?: Value<number>;
  /**
   * The snapshot ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotId?: Value<string>;
  /**
   * The volume size, in GiB. For more information, see [EbsBlockDevice](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeSize?: Value<number>;
  /**
   * The volume type. `gp2` for General Purpose (SSD) volumes, `io1` for Provisioned IOPS (SSD) volumes, `st1` for Throughput Optimized hard disk drives (HDD), `sc1` for Cold HDD,and `standard` for Magnetic volumes.
   *
   * If you specify the `io1` volume type, you must also specify a value for the `Iops` attribute. The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. AWS uses the default volume size (in GiB) specified in the AMI attributes to set IOPS to 50 x (volume size).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `gp2 | io1 | standard`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeType?: Value<string>;
}

/**
 * Describes a block device mapping. This data type maps directly to the Amazon EC2 [BlockDeviceMapping](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html) data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-blockdevicemapping.html}
 **/
export interface OpsWorksInstanceBlockDeviceMapping {
  /**
   * The device name that is exposed to the instance, such as `/dev/sdh`. For the root device, you can use the explicit device name or you can set this parameter to `ROOT_DEVICE` and AWS OpsWorks Stacks will provide the correct device name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceName?: Value<string>;
  /**
   * An `EBSBlockDevice` that defines how to configure an Amazon EBS volume when the instance is launched. You can specify either the `VirtualName` or `Ebs`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: [EbsBlockDevice](aws-properties-opsworks-instance-ebsblockdevice.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ebs?: OpsWorksInstanceEbsBlockDevice;
  /**
   * Suppresses the specified device included in the AMI's block device mapping.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoDevice?: Value<string>;
  /**
   * The virtual device name. For more information, see [BlockDeviceMapping](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html). You can specify either the `VirtualName` or `Ebs`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualName?: Value<string>;
}

/**
 * Describes an instance's time-based auto scaling configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-instance-timebasedautoscaling.html}
 **/
export interface OpsWorksInstanceTimeBasedAutoScaling {
  /**
   * The schedule for Friday.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Friday?: { [key: string]: Value<string> };
  /**
   * The schedule for Monday.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Monday?: { [key: string]: Value<string> };
  /**
   * The schedule for Saturday.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Saturday?: { [key: string]: Value<string> };
  /**
   * The schedule for Sunday.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sunday?: { [key: string]: Value<string> };
  /**
   * The schedule for Thursday.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Thursday?: { [key: string]: Value<string> };
  /**
   * The schedule for Tuesday.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tuesday?: { [key: string]: Value<string> };
  /**
   * The schedule for Wednesday.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Wednesday?: { [key: string]: Value<string> };
}
export interface OpsWorksInstanceProperties {
  /**
   * The default AWS OpsWorks Stacks agent version. You have the following options:
   */
  AgentVersion?: Value<string>;
  /**
   * A custom AMI ID to be used to create the instance. The AMI should be based on one of the supported operating systems. For more information, see [Using Custom AMIs](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html).
   *
   * If you specify a custom AMI, you must set `Os` to `Custom`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmiId?: Value<string>;
  /**
   * The instance architecture. The default option is `x86_64`. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see [Instance Families and Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `i386 | x86_64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Architecture?: Value<string>;
  /**
   * For load-based or time-based instances, the type. Windows stacks can use only time-based instances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `load | timer`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutoScalingType?: Value<string>;
  /**
   * The Availability Zone of the AWS OpsWorks instance, such as `us-east-2a`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone?: Value<string>;
  /**
   * An array of `BlockDeviceMapping` objects that specify the instance's block devices. For more information, see [Block Device Mapping](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html). Note that block device mappings are not supported for custom AMIs.
   *
   * _Required_: No
   *
   * _Type_: List of [BlockDeviceMapping](aws-properties-opsworks-instance-blockdevicemapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BlockDeviceMappings?: List<OpsWorksInstanceBlockDeviceMapping>;
  /**
   * Whether to create an Amazon EBS-optimized instance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EbsOptimized?: Value<boolean>;
  /**
   * A list of Elastic IP addresses to associate with the instance.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticIps?: List<Value<string>>;
  /**
   * The instance host name. The following are character limits for instance host names.
   */
  Hostname?: Value<string>;
  /**
   * Whether to install operating system and package updates when the instance boots. The default value is `true`. To control when updates are installed, set this value to `false`. You must then update your instances manually by using [CreateDeployment](https://docs.aws.amazon.com/goto/WebAPI/opsworks-2013-02-18/CreateDeployment) to run the `update_dependencies` stack command or by manually running `yum` (Amazon Linux) or `apt-get` (Ubuntu) on the instances.
   *
   * We strongly recommend using the default value of `true` to ensure that your instances have the latest security updates.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstallUpdatesOnBoot?: Value<boolean>;
  /**
   * The instance type, such as `t2.micro`. For a list of supported instance types, open the stack in the console, choose **Instances**, and choose **+ Instance**. The **Size** list contains the currently supported types. For more information, see [Instance Families and Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html). The parameter values that you use to specify the various types are in the **API Name** column of the **Available Instance Types** table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType: Value<string>;
  /**
   * An array that contains the instance's layer IDs.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LayerIds: List<Value<string>>;
  /**
   * The instance's operating system, which must be set to one of the following.
   */
  Os?: Value<string>;
  /**
   * The instance root device type. For more information, see [Storage for the Root Device](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ebs | instance-store`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RootDeviceType?: Value<string>;
  /**
   * The instance's Amazon EC2 key-pair name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SshKeyName?: Value<string>;
  /**
   * The stack ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StackId: Value<string>;
  /**
   * The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId?: Value<string>;
  /**
   * The instance's tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter: `dedicated`, `default`, or `host`. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see [Dedicated Hosts Overview](http://aws.amazon.com/ec2/dedicated-hosts/) and [Amazon EC2 Dedicated Hosts](http://aws.amazon.com/ec2/dedicated-hosts/). For more information about dedicated instances, see [Dedicated Instances](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html) and [Amazon EC2 Dedicated Instances](http://aws.amazon.com/ec2/purchasing-options/dedicated-instances/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tenancy?: Value<string>;
  /**
   * The time-based scaling configuration for the instance.
   *
   * _Required_: No
   *
   * _Type_: [TimeBasedAutoScaling](aws-properties-opsworks-instance-timebasedautoscaling.md)
   *
   * _Allowed values_: `load | timer`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeBasedAutoScaling?: OpsWorksInstanceTimeBasedAutoScaling;
  /**
   * The instance's virtualization type, `paravirtual` or `hvm`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualizationType?: Value<string>;
  /**
   * A list of AWS OpsWorks volume IDs to associate with the instance. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Volumes?: List<Value<string>>;
}

/**
 * Creates an instance in a specified stack. For more information, see [Adding an Instance to a Layer](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html).
 *
 * **Required Permissions**: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see [Managing User Permissions](https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html}
 */
export interface OpsWorksInstanceResource {
  Type: 'AWS::OpsWorks::Instance';
  Properties: OpsWorksInstanceProperties;
}
