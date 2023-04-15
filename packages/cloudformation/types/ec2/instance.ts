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
 * Specifies the hibernation options for the instance.
 *
 * `HibernationOptions` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-hibernationoptions.html}
 **/
export interface EC2InstanceHibernationOptions {
  /**
   * If you set this parameter to `true`, your instance is enabled for hibernation.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configured?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-template.html}
 **/
export interface EC2InstanceEbs {
  DeleteOnTermination?: Value<boolean>;
  Encrypted?: Value<boolean>;
  Iops?: Value<number>;
  KmsKeyId?: Value<string>;
  SnapshotId?: Value<string>;
  VolumeSize?: Value<number>;
  VolumeType?: Value<string>;
}

/**
 * Suppresses the specified device included in the block device mapping of the AMI. To suppress a device, specify an empty string.
 *
 * `NoDevice` is a property of the [ Amazon EC2 BlockDeviceMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-mapping.html) property.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-nodevice.html}
 **/
export interface EC2InstanceNoDevice {}

/**
 * Specifies a launch template to use when launching an Amazon EC2 instance.
 *
 * You must specify the following:
 *
 * `LaunchTemplateSpecification` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * For information about creating a launch template, see [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) and [Create a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template) in the _Amazon EC2 User Guide_.
 *
 * For examples of launch templates, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate--examples).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-launchtemplatespecification.html}
 **/
export interface EC2InstanceLaunchTemplateSpecification {
  /**
   * The ID of the launch template.
   *
   * You must specify the `LaunchTemplateId` or the `LaunchTemplateName`, but not both.
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
   * You must specify the `LaunchTemplateName` or the `LaunchTemplateId`, but not both.
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
   * Specifying `$Latest` or `$Default` for the template version number is not supported. However, you can specify `LatestVersionNumber` or `DefaultVersionNumber` using the `Fn::GetAtt` intrinsic function. For more information, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate-return-values-fn--getatt).
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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-mapping.html}
 **/
export interface EC2InstanceBlockDeviceMapping {
  DeviceName: Value<string>;
  Ebs?: EC2InstanceEbs;
  NoDevice?: EC2InstanceNoDevice;
  VirtualName?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-interface-privateipspec.html}
 **/
export interface EC2InstancePrivateIpAddressSpecification {
  Primary: Value<boolean>;
  PrivateIpAddress: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-network-iface-embedded.html}
 **/
export interface EC2InstanceNetworkInterface {
  AssociateCarrierIpAddress?: Value<boolean>;
  AssociatePublicIpAddress?: Value<boolean>;
  DeleteOnTermination?: Value<boolean>;
  Description?: Value<string>;
  DeviceIndex: Value<string>;
  GroupSet?: List<Value<string>>;
  Ipv6AddressCount?: Value<number>;
  Ipv6Addresses?: List<EC2InstanceInstanceIpv6Address>;
  NetworkInterfaceId?: Value<string>;
  PrivateIpAddress?: Value<string>;
  PrivateIpAddresses?: List<EC2InstancePrivateIpAddressSpecification>;
  SecondaryPrivateIpAddressCount?: Value<number>;
  SubnetId?: Value<string>;
}

/**
 * Specifies the IPv6 address for the instance.
 *
 * `InstanceIpv6Address` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-instanceipv6address.html}
 **/
export interface EC2InstanceInstanceIpv6Address {
  /**
   * The IPv6 address.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6Address: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociations-associationparameters.html}
 **/
export interface EC2InstanceAssociationParameter {
  Key: Value<string>;
  Value: List<Value<string>>;
}

/**
 * Indicates whether the instance is enabled for AWS Nitro Enclaves.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-enclaveoptions.html}
 **/
export interface EC2InstanceEnclaveOptions {
  /**
   * If this parameter is set to `true`, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociations.html}
 **/
export interface EC2InstanceSsmAssociation {
  AssociationParameters?: List<EC2InstanceAssociationParameter>;
  DocumentName: Value<string>;
}

/**
 * Specifies the credit option for CPU usage of a T instance.
 *
 * `CreditSpecification` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-creditspecification.html}
 **/
export interface EC2InstanceCreditSpecification {
  /**
   * The credit option for CPU usage of the instance.
   *
   * Valid values: `standard` | `unlimited`
   *
   * T3 instances with `host` tenancy do not support the `unlimited` CPU credit option.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CPUCredits?: Value<string>;
}

/**
 * Specifies the type of Elastic GPU. An Elastic GPU is a GPU resource that you can attach to your Amazon EC2 instance to accelerate the graphics performance of your applications. For more information, see [ Amazon EC2 Elastic GPUs](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html) in the _Amazon EC2 User Guide for Windows Instances_.
 *
 * `ElasticGpuSpecification` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticgpuspecification.html}
 **/
export interface EC2InstanceElasticGpuSpecification {
  /**
   * The type of Elastic Graphics accelerator. For more information about the values to specify for `Type`, see [Elastic Graphics Basics](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html#elastic-graphics-basics), specifically the Elastic Graphics accelerator column, in the _Amazon Elastic Compute Cloud User Guide for Windows Instances_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
}

/**
 * Specifies the CPU options for the instance. When you specify CPU options, you must specify both the number of CPU cores and threads per core.
 *
 * For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the _Amazon Elastic Compute Cloud User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-cpuoptions.html}
 **/
export interface EC2InstanceCpuOptions {
  /**
   * The number of CPU cores for the instance.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CoreCount?: Value<number>;
  /**
   * The number of threads per CPU core.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThreadsPerCore?: Value<number>;
}

/**
 * The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-privatednsnameoptions.html}
 **/
export interface EC2InstancePrivateDnsNameOptions {
  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableResourceNameDnsAAAARecord?: Value<boolean>;
  /**
   * Indicates whether to respond to DNS queries for instance hostnames with DNS A records. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableResourceNameDnsARecord?: Value<boolean>;
  /**
   * The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ip-name | resource-name`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostnameType?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-mount-point.html}
 **/
export interface EC2InstanceVolume {
  Device: Value<string>;
  VolumeId: Value<string>;
}

/**
 * Specifies the license configuration to use.
 *
 * `LicenseSpecification` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-licensespecification.html}
 **/
export interface EC2InstanceLicenseSpecification {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LicenseConfigurationArn: Value<string>;
}

/**
 * Specifies the Elastic Inference Accelerator for the instance.
 *
 * `ElasticInferenceAccelerator` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-elasticinferenceaccelerator.html}
 **/
export interface EC2InstanceElasticInferenceAccelerator {
  /**
   * The number of elastic inference accelerators to attach to the instance.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
  /**
   * The type of elastic inference accelerator. The possible values are `eia1.medium`, `eia1.large`, `eia1.xlarge`, `eia2.medium`, `eia2.large`, and `eia2.xlarge`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
}
export interface EC2InstanceProperties {
  AdditionalInfo?: Value<string>;
  Affinity?: Value<string>;
  AvailabilityZone?: Value<string>;
  BlockDeviceMappings?: List<EC2InstanceBlockDeviceMapping>;
  CpuOptions?: EC2InstanceCpuOptions;
  CreditSpecification?: EC2InstanceCreditSpecification;
  DisableApiTermination?: Value<boolean>;
  EbsOptimized?: Value<boolean>;
  ElasticGpuSpecifications?: List<EC2InstanceElasticGpuSpecification>;
  ElasticInferenceAccelerators?: List<EC2InstanceElasticInferenceAccelerator>;
  EnclaveOptions?: EC2InstanceEnclaveOptions;
  HibernationOptions?: EC2InstanceHibernationOptions;
  HostId?: Value<string>;
  HostResourceGroupArn?: Value<string>;
  IamInstanceProfile?: Value<string>;
  ImageId?: Value<string>;
  InstanceInitiatedShutdownBehavior?: Value<string>;
  InstanceType?: Value<string>;
  Ipv6AddressCount?: Value<number>;
  Ipv6Addresses?: List<EC2InstanceInstanceIpv6Address>;
  KernelId?: Value<string>;
  KeyName?: Value<string>;
  LaunchTemplate?: EC2InstanceLaunchTemplateSpecification;
  LicenseSpecifications?: List<EC2InstanceLicenseSpecification>;
  Monitoring?: Value<boolean>;
  NetworkInterfaces?: List<EC2InstanceNetworkInterface>;
  PlacementGroupName?: Value<string>;
  PrivateDnsNameOptions?: EC2InstancePrivateDnsNameOptions;
  PrivateIpAddress?: Value<string>;
  PropagateTagsToVolumeOnCreation?: Value<boolean>;
  RamdiskId?: Value<string>;
  SecurityGroupIds?: List<Value<string>>;
  SecurityGroups?: List<Value<string>>;
  SourceDestCheck?: Value<boolean>;
  SsmAssociations?: List<EC2InstanceSsmAssociation>;
  SubnetId?: Value<string>;
  Tags?: List<ResourceTag>;
  Tenancy?: Value<string>;
  UserData?: Value<string>;
  Volumes?: List<EC2InstanceVolume>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html}
 */
export interface EC2InstanceResource {
  Type: 'AWS::EC2::Instance';
  Properties: EC2InstanceProperties;
}
