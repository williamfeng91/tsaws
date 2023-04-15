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
 * `BlockDeviceMapping` specifies a block device mapping for the `BlockDeviceMappings` property of the [AWS::AutoScaling::LaunchConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig.html) resource.
 *
 * Each instance that is launched has an associated root device volume, either an Amazon EBS volume or an instance store volume. You can use block device mappings to specify additional EBS volumes or instance store volumes to attach to an instance when it is launched.
 *
 * For more information, see [Example block device mapping](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#block-device-mapping-ex) in the _Amazon EC2 User Guide for Linux Instances_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-blockdevicemapping.html}
 **/
export interface AutoScalingLaunchConfigurationBlockDeviceMapping {
  /**
   * Information to attach an EBS volume to an instance at launch.
   *
   * _Required_: No
   *
   * _Type_: [BlockDevice](aws-properties-autoscaling-launchconfiguration-blockdevice.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ebs?: AutoScalingLaunchConfigurationBlockDevice;
  /**
   * Setting this value to `true` prevents a volume that is included in the block device mapping of the AMI from being mapped to the specified device name at launch.
   *
   * If `NoDevice` is `true` for the root device, instances might fail the EC2 health check. In that case, Amazon EC2 Auto Scaling launches replacement instances.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NoDevice?: Value<boolean>;
  /**
   * The name of the instance store volume (virtual device) to attach to an instance at launch. The name must be in the form ephemeral*X* where _X_ is a number starting from zero (0), for example, `ephemeral0`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualName?: Value<string>;
  /**
   * The device name assigned to the volume (for example, `/dev/sdh` or `xvdh`). For more information, see [Device naming on Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * To define a block device mapping, set the device name and exactly one of the following properties: `Ebs`, `NoDevice`, or `VirtualName`.
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
 * `MetadataOptions` is a property of [AWS::AutoScaling::LaunchConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig.html) that describes metadata options for the instances.
 *
 * For more information, see [Configure the instance metadata options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-metadataoptions.html}
 **/
export interface AutoScalingLaunchConfigurationMetadataOptions {
  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * Default: 1
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HttpPutResponseHopLimit?: Value<number>;
  /**
   * The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is `optional`.
   *
   * If the state is `optional`, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned.
   *
   * If the state is `required`, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `optional | required`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HttpTokens?: Value<string>;
  /**
   * This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is `enabled`.
   *
   * If you specify a value of `disabled`, you will not be able to access your instance metadata.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disabled | enabled`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HttpEndpoint?: Value<string>;
}

/**
 * `BlockDevice` is a property of the `EBS` property of the [AWS::AutoScaling::LaunchConfiguration BlockDeviceMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig-blockdev-mapping.html) property type that describes an Amazon EBS volume.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-launchconfiguration-blockdevice.html}
 **/
export interface AutoScalingLaunchConfigurationBlockDevice {
  /**
   * The snapshot ID of the volume to use.
   *
   * You must specify either a `VolumeSize` or a `SnapshotId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnapshotId?: Value<string>;
  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * Valid values: `standard` | `io1` | `gp2` | `st1` | `sc1` | `gp3`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeType?: Value<string>;
  /**
   * Specifies whether the volume should be encrypted. Encrypted EBS volumes can only be attached to instances that support Amazon EBS encryption. For more information, see [Supported instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances). If your AMI uses encrypted volumes, you can also only launch it on supported instance types.
   *
   * If you are creating a volume from a snapshot, you cannot create an unencrypted volume from an encrypted snapshot. Also, you cannot specify a KMS key ID when using a launch configuration.
   *
   * If you enable encryption by default, the EBS volumes that you create are always encrypted, either using the AWS managed KMS key or a customer-managed KMS key, regardless of whether the snapshot was encrypted.
   *
   * For more information, see [Use AWS KMS keys to encrypt Amazon EBS volumes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-data-protection.html#encryption) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Encrypted?: Value<boolean>;
  /**
   * The throughput (MiBps) to provision for a `gp3` volume.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `125`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Throughput?: Value<number>;
  /**
   * The number of input/output (I/O) operations per second (IOPS) to provision for the volume. For `gp3` and `io1` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type:
   */
  Iops?: Value<number>;
  /**
   * The volume size, in GiBs. The following are the supported volumes sizes for each volume type:
   */
  VolumeSize?: Value<number>;
  /**
   * Indicates whether the volume is deleted on instance termination. For Amazon EC2 Auto Scaling, the default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeleteOnTermination?: Value<boolean>;
}
export interface AutoScalingLaunchConfigurationProperties {
  /**
   * The tenancy of the instance, either `default` or `dedicated`. An instance with `dedicated` tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to `default`), you must set the value of this property to `dedicated`. For more information, see [Configuring instance tenancy with Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-dedicated-instances.html) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * If you specify `PlacementTenancy`, you must specify at least one subnet for `VPCZoneIdentifier` when you create your group.
   *
   * Valid values: `default` | `dedicated`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PlacementTenancy?: Value<string>;
  /**
   * A list that contains the security groups to assign to the instances in the Auto Scaling group. The list can contain both the IDs of existing security groups and references to [SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
   *
   * For more information, see [Control traffic to resources using security groups](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html) in the _Amazon Virtual Private Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The name of the launch configuration. This name must be unique per Region per account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LaunchConfigurationName?: Value<string>;
  /**
   * The metadata options for the instances. For more information, see [Configuring the Instance Metadata Options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [MetadataOptions](aws-properties-autoscaling-launchconfiguration-metadataoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MetadataOptions?: AutoScalingLaunchConfigurationMetadataOptions;
  /**
   * The ID of the Amazon EC2 instance to use to create the launch configuration. When you use an instance to create a launch configuration, all properties are derived from the instance with the exception of `BlockDeviceMapping` and `AssociatePublicIpAddress`. You can override any properties from the instance by specifying them in the launch configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceId?: Value<string>;
  /**
   * The Base64-encoded user data to make available to the launched EC2 instances. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `21847`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserData?: Value<string>;
  /**
   * Available for backward compatibility.
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClassicLinkVPCSecurityGroups?: List<Value<string>>;
  /**
   * The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see [Block device mappings](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: List of [BlockDeviceMapping](aws-properties-autoscaling-launchconfiguration-blockdevicemapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BlockDeviceMappings?: List<AutoScalingLaunchConfigurationBlockDeviceMapping>;
  /**
   * The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see [IAM role for applications that run on Amazon EC2 instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IamInstanceProfile?: Value<string>;
  /**
   * The ID of the kernel associated with the AMI.
   *
   * We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KernelId?: Value<string>;
  /**
   * Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet.
   *
   * If you specify `true`, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see [Launching Auto Scaling instances in a VPC](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * If you specify this property, you must specify at least one subnet for `VPCZoneIdentifier` when you create your group.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AssociatePublicIpAddress?: Value<boolean>;
  /**
   * Available for backward compatibility.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClassicLinkVPCId?: Value<string>;
  /**
   * Specifies whether the launch configuration is optimized for EBS I/O (`true`) or not (`false`). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see [Amazon EBS-optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EbsOptimized?: Value<boolean>;
  /**
   * The name of the key pair. For more information, see [Amazon EC2 key pairs and Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyName?: Value<string>;
  /**
   * The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see [Request Spot Instances for fault-tolerant and flexible applications](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-template-spot-instances.html) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * Valid Range: Minimum value of 0.001
   *
   * When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotPrice?: Value<string>;
  /**
   * The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see [Finding a Linux AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * If you specify `InstanceId`, an `ImageId` is not required.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageId: Value<string>;
  /**
   * Specifies the instance type of the EC2 instance. For information about available instance types, see [Available instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * If you specify `InstanceId`, an `InstanceType` is not required.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType: Value<string>;
  /**
   * The ID of the RAM disk to select.
   *
   * We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RamDiskId?: Value<string>;
  /**
   * Controls whether instances in this group are launched with detailed (`true`) or basic (`false`) monitoring.
   *
   * The default value is `true` (enabled).
   *
   * When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see [Configure Monitoring for Auto Scaling Instances](https://docs.aws.amazon.com/autoscaling/latest/userguide/enable-as-instance-metrics.html) in the _Amazon EC2 Auto Scaling User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceMonitoring?: Value<boolean>;
}

/**
 * The `AWS::AutoScaling::LaunchConfiguration` resource specifies the launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances.
 *
 * When you update the launch configuration for an Auto Scaling group, CloudFormation deletes that resource and creates a new launch configuration with the updated properties and a new name. Existing instances are not affected. To update existing instances when you update the `AWS::AutoScaling::LaunchConfiguration` resource, you can specify an [UpdatePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html) for the group. You can find sample update policies for rolling updates in [Auto scaling template snippets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-autoscaling.html).
 *
 * **Note**
 *
 * Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a [launch template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For more information, see [Launch configurations](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-configurations.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-launchconfiguration.html}
 */
export interface AutoScalingLaunchConfigurationResource {
  Type: 'AWS::AutoScaling::LaunchConfiguration';
  Properties: AutoScalingLaunchConfigurationProperties;
}
