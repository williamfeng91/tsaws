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
 * Information about a block device mapping for an Amazon EC2 launch template.
 *
 * `BlockDeviceMapping` is a property of [ AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-blockdevicemapping.html}
 **/
export interface EC2LaunchTemplateBlockDeviceMapping {
  /**
   * Parameters used to automatically set up EBS volumes when the instance is launched.
   *
   * _Required_: No
   *
   * _Type_: [Ebs](aws-properties-ec2-launchtemplate-blockdevicemapping-ebs.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ebs?: EC2LaunchTemplateEbs;
  /**
   * To omit the device from the block device mapping, specify an empty string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoDevice?: Value<string>;
  /**
   * The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for ephemeral0 and ephemeral1. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualName?: Value<string>;
  /**
   * The device name (for example, /dev/sdh or xvdh).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceName?: Value<string>;
}

/**
 * The minimum and maximum amount of total accelerator memory, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-acceleratortotalmemorymib.html}
 **/
export interface EC2LaunchTemplateAcceleratorTotalMemoryMiB {
  /**
   * The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 * Specifies a specification for an Elastic GPU for an Amazon EC2 launch template.
 *
 * `ElasticGpuSpecification` is a property of [ AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-elasticgpuspecification.html}
 **/
export interface EC2LaunchTemplateElasticGpuSpecification {
  /**
   * The type of Elastic Graphics accelerator. For more information about the values to specify for `Type`, see [Elastic Graphics Basics](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html#elastic-graphics-basics), specifically the Elastic Graphics accelerator column, in the _Amazon Elastic Compute Cloud User Guide for Windows Instances_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * Specifies the tags to apply to a resource when the resource is created for the launch template.
 *
 * `TagSpecification` is a property type of [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications). [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications) is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-tagspecification.html}
 **/
export interface EC2LaunchTemplateTagSpecification {
  /**
   * The type of resource to tag.
   *
   * The `Valid Values` are all the resource types that can be tagged. However, when creating a launch template, you can specify tags for the following resource types only: `instance` | `volume` | `elastic-gpu` | `network-interface` | `spot-instances-request`
   *
   * To tag a resource after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `capacity-reservation | capacity-reservation-fleet | carrier-gateway | client-vpn-endpoint | coip-pool | customer-gateway | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-gpu | elastic-ip | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | instance-event-window | internet-gateway | ipam | ipam-pool | ipam-resource-discovery | ipam-resource-discovery-association | ipam-scope | ipv4pool-ec2 | ipv6pool-ec2 | key-pair | launch-template | local-gateway | local-gateway-route-table | local-gateway-route-table-virtual-interface-group-association | local-gateway-route-table-vpc-association | local-gateway-virtual-interface | local-gateway-virtual-interface-group | natgateway | network-acl | network-insights-access-scope | network-insights-access-scope-analysis | network-insights-analysis | network-insights-path | network-interface | placement-group | prefix-list | replace-root-volume-task | reserved-instances | route-table | security-group | security-group-rule | snapshot | spot-fleet-request | spot-instances-request | subnet | subnet-cidr-reservation | traffic-mirror-filter | traffic-mirror-filter-rule | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-connect-peer | transit-gateway-multicast-domain | transit-gateway-policy-table | transit-gateway-route-table | transit-gateway-route-table-announcement | verified-access-endpoint | verified-access-group | verified-access-instance | verified-access-policy | verified-access-trust-provider | volume | vpc | vpc-block-public-access-exclusion | vpc-endpoint | vpc-endpoint-connection | vpc-endpoint-connection-device-type | vpc-endpoint-service | vpc-endpoint-service-permission | vpc-flow-log | vpc-peering-connection | vpn-connection | vpn-connection-device-type | vpn-gateway`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType?: Value<string>;
  /**
   * The tags to apply to the resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-baselineebsbandwidthmbps.html}
 **/
export interface EC2LaunchTemplateBaselineEbsBandwidthMbps {
  /**
   * The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 * The information to include in the launch template.
 *
 * **Note**
 *
 * You must specify at least one parameter for the launch template data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html}
 **/
export interface EC2LaunchTemplateLaunchTemplateData {
  /**
   * One or more security group names. For a nondefault VPC, you must use security group IDs instead. You cannot specify both a security group ID and security name in the same request.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The tags to apply to the resources that are created during instance launch.
   *
   * You can specify tags for the following resources only:
   */
  TagSpecifications?: List<EC2LaunchTemplateTagSpecification>;
  /**
   * The user data to make available to the instance. You must provide base64-encoded text. User data is limited to 16 KB. For more information, see [Run commands on your Linux instance at launch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) (Linux) or [Work with instance user data](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instancedata-add-user-data.html) (Windows) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * If you are creating the launch template for use with AWS Batch, the user data must be provided in the [ MIME multi-part archive format](https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive). For more information, see [Amazon EC2 user data in launch templates](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserData?: Value<string>;
  /**
   * The block device mapping.
   *
   * _Required_: No
   *
   * _Type_: List of [BlockDeviceMapping](aws-properties-ec2-launchtemplate-blockdevicemapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockDeviceMappings?: List<EC2LaunchTemplateBlockDeviceMapping>;
  /**
   * The maintenance options of your instance.
   *
   * _Required_: No
   *
   * _Type_: [MaintenanceOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-maintenanceoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaintenanceOptions?: EC2LaunchTemplateMaintenanceOptions;
  /**
   * The name or Amazon Resource Name (ARN) of an IAM instance profile.
   *
   * _Required_: No
   *
   * _Type_: [IamInstanceProfile](aws-properties-ec2-launchtemplate-launchtemplatedata-iaminstanceprofile.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamInstanceProfile?: EC2LaunchTemplateIamInstanceProfile;
  /**
   * The ID of the kernel.
   *
   * We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User Provided Kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the _Amazon EC2 User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KernelId?: Value<string>;
  /**
   * Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EbsOptimized?: Value<boolean>;
  /**
   * An elastic GPU to associate with the instance.
   *
   * _Required_: No
   *
   * _Type_: List of [ElasticGpuSpecification](aws-properties-ec2-launchtemplate-elasticgpuspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticGpuSpecifications?: List<EC2LaunchTemplateElasticGpuSpecification>;
  /**
   * The elastic inference accelerator for the instance.
   *
   * _Required_: No
   *
   * _Type_: List of [LaunchTemplateElasticInferenceAccelerator](aws-properties-ec2-launchtemplate-launchtemplateelasticinferenceaccelerator.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticInferenceAccelerators?: List<EC2LaunchTemplateLaunchTemplateElasticInferenceAccelerator>;
  /**
   * The placement for the instance.
   *
   * _Required_: No
   *
   * _Type_: [Placement](aws-properties-ec2-launchtemplate-launchtemplatedata-placement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Placement?: EC2LaunchTemplatePlacement;
  /**
   * One or more network interfaces. If you specify a network interface, you must specify any security groups and subnets as part of the network interface.
   *
   * _Required_: No
   *
   * _Type_: List of [NetworkInterface](aws-properties-ec2-launchtemplate-networkinterface.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaces?: List<EC2LaunchTemplateNetworkInterface>;
  /**
   * Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see [ What is AWS Nitro Enclaves?](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the _ AWS Nitro Enclaves User Guide_.
   *
   * You can't enable AWS Nitro Enclaves and hibernation on the same instance.
   *
   * _Required_: No
   *
   * _Type_: [EnclaveOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-enclaveoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnclaveOptions?: EC2LaunchTemplateEnclaveOptions;
  /**
   * The ID of the AMI. Alternatively, you can specify a Systems Manager parameter, which will resolve to an AMI ID on launch.
   *
   * Valid formats:
   */
  ImageId?: Value<string>;
  /**
   * The instance type. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * If you specify `InstanceType`, you can't specify `InstanceRequirements`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `a1.2xlarge | a1.4xlarge | a1.large | a1.medium | a1.metal | a1.xlarge | c1.medium | c1.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c3.large | c3.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c4.large | c4.xlarge | c5.12xlarge | c5.18xlarge | c5.24xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.large | c5.metal | c5.xlarge | c5a.12xlarge | c5a.16xlarge | c5a.24xlarge | c5a.2xlarge | c5a.4xlarge | c5a.8xlarge | c5a.large | c5a.xlarge | c5ad.12xlarge | c5ad.16xlarge | c5ad.24xlarge | c5ad.2xlarge | c5ad.4xlarge | c5ad.8xlarge | c5ad.large | c5ad.xlarge | c5d.12xlarge | c5d.18xlarge | c5d.24xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.large | c5d.metal | c5d.xlarge | c5n.18xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.large | c5n.metal | c5n.xlarge | c6a.12xlarge | c6a.16xlarge | c6a.24xlarge | c6a.2xlarge | c6a.32xlarge | c6a.48xlarge | c6a.4xlarge | c6a.8xlarge | c6a.large | c6a.metal | c6a.xlarge | c6g.12xlarge | c6g.16xlarge | c6g.2xlarge | c6g.4xlarge | c6g.8xlarge | c6g.large | c6g.medium | c6g.metal | c6g.xlarge | c6gd.12xlarge | c6gd.16xlarge | c6gd.2xlarge | c6gd.4xlarge | c6gd.8xlarge | c6gd.large | c6gd.medium | c6gd.metal | c6gd.xlarge | c6gn.12xlarge | c6gn.16xlarge | c6gn.2xlarge | c6gn.4xlarge | c6gn.8xlarge | c6gn.large | c6gn.medium | c6gn.xlarge | c6i.12xlarge | c6i.16xlarge | c6i.24xlarge | c6i.2xlarge | c6i.32xlarge | c6i.4xlarge | c6i.8xlarge | c6i.large | c6i.metal | c6i.xlarge | c6id.12xlarge | c6id.16xlarge | c6id.24xlarge | c6id.2xlarge | c6id.32xlarge | c6id.4xlarge | c6id.8xlarge | c6id.large | c6id.metal | c6id.xlarge | c6in.12xlarge | c6in.16xlarge | c6in.24xlarge | c6in.2xlarge | c6in.32xlarge | c6in.4xlarge | c6in.8xlarge | c6in.large | c6in.xlarge | c7g.12xlarge | c7g.16xlarge | c7g.2xlarge | c7g.4xlarge | c7g.8xlarge | c7g.large | c7g.medium | c7g.xlarge | cc1.4xlarge | cc2.8xlarge | cg1.4xlarge | cr1.8xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d2.xlarge | d3.2xlarge | d3.4xlarge | d3.8xlarge | d3.xlarge | d3en.12xlarge | d3en.2xlarge | d3en.4xlarge | d3en.6xlarge | d3en.8xlarge | d3en.xlarge | dl1.24xlarge | f1.16xlarge | f1.2xlarge | f1.4xlarge | g2.2xlarge | g2.8xlarge | g3.16xlarge | g3.4xlarge | g3.8xlarge | g3s.xlarge | g4ad.16xlarge | g4ad.2xlarge | g4ad.4xlarge | g4ad.8xlarge | g4ad.xlarge | g4dn.12xlarge | g4dn.16xlarge | g4dn.2xlarge | g4dn.4xlarge | g4dn.8xlarge | g4dn.metal | g4dn.xlarge | g5.12xlarge | g5.16xlarge | g5.24xlarge | g5.2xlarge | g5.48xlarge | g5.4xlarge | g5.8xlarge | g5.xlarge | g5g.16xlarge | g5g.2xlarge | g5g.4xlarge | g5g.8xlarge | g5g.metal | g5g.xlarge | h1.16xlarge | h1.2xlarge | h1.4xlarge | h1.8xlarge | hi1.4xlarge | hpc6a.48xlarge | hpc6id.32xlarge | hs1.8xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i2.xlarge | i3.16xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.large | i3.metal | i3.xlarge | i3en.12xlarge | i3en.24xlarge | i3en.2xlarge | i3en.3xlarge | i3en.6xlarge | i3en.large | i3en.metal | i3en.xlarge | i4i.16xlarge | i4i.2xlarge | i4i.32xlarge | i4i.4xlarge | i4i.8xlarge | i4i.large | i4i.metal | i4i.xlarge | im4gn.16xlarge | im4gn.2xlarge | im4gn.4xlarge | im4gn.8xlarge | im4gn.large | im4gn.xlarge | inf1.24xlarge | inf1.2xlarge | inf1.6xlarge | inf1.xlarge | is4gen.2xlarge | is4gen.4xlarge | is4gen.8xlarge | is4gen.large | is4gen.medium | is4gen.xlarge | m1.large | m1.medium | m1.small | m1.xlarge | m2.2xlarge | m2.4xlarge | m2.xlarge | m3.2xlarge | m3.large | m3.medium | m3.xlarge | m4.10xlarge | m4.16xlarge | m4.2xlarge | m4.4xlarge | m4.large | m4.xlarge | m5.12xlarge | m5.16xlarge | m5.24xlarge | m5.2xlarge | m5.4xlarge | m5.8xlarge | m5.large | m5.metal | m5.xlarge | m5a.12xlarge | m5a.16xlarge | m5a.24xlarge | m5a.2xlarge | m5a.4xlarge | m5a.8xlarge | m5a.large | m5a.xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.large | m5ad.xlarge | m5d.12xlarge | m5d.16xlarge | m5d.24xlarge | m5d.2xlarge | m5d.4xlarge | m5d.8xlarge | m5d.large | m5d.metal | m5d.xlarge | m5dn.12xlarge | m5dn.16xlarge | m5dn.24xlarge | m5dn.2xlarge | m5dn.4xlarge | m5dn.8xlarge | m5dn.large | m5dn.metal | m5dn.xlarge | m5n.12xlarge | m5n.16xlarge | m5n.24xlarge | m5n.2xlarge | m5n.4xlarge | m5n.8xlarge | m5n.large | m5n.metal | m5n.xlarge | m5zn.12xlarge | m5zn.2xlarge | m5zn.3xlarge | m5zn.6xlarge | m5zn.large | m5zn.metal | m5zn.xlarge | m6a.12xlarge | m6a.16xlarge | m6a.24xlarge | m6a.2xlarge | m6a.32xlarge | m6a.48xlarge | m6a.4xlarge | m6a.8xlarge | m6a.large | m6a.metal | m6a.xlarge | m6g.12xlarge | m6g.16xlarge | m6g.2xlarge | m6g.4xlarge | m6g.8xlarge | m6g.large | m6g.medium | m6g.metal | m6g.xlarge | m6gd.12xlarge | m6gd.16xlarge | m6gd.2xlarge | m6gd.4xlarge | m6gd.8xlarge | m6gd.large | m6gd.medium | m6gd.metal | m6gd.xlarge | m6i.12xlarge | m6i.16xlarge | m6i.24xlarge | m6i.2xlarge | m6i.32xlarge | m6i.4xlarge | m6i.8xlarge | m6i.large | m6i.metal | m6i.xlarge | m6id.12xlarge | m6id.16xlarge | m6id.24xlarge | m6id.2xlarge | m6id.32xlarge | m6id.4xlarge | m6id.8xlarge | m6id.large | m6id.metal | m6id.xlarge | m6idn.12xlarge | m6idn.16xlarge | m6idn.24xlarge | m6idn.2xlarge | m6idn.32xlarge | m6idn.4xlarge | m6idn.8xlarge | m6idn.large | m6idn.xlarge | m6in.12xlarge | m6in.16xlarge | m6in.24xlarge | m6in.2xlarge | m6in.32xlarge | m6in.4xlarge | m6in.8xlarge | m6in.large | m6in.xlarge | mac1.metal | mac2.metal | p2.16xlarge | p2.8xlarge | p2.xlarge | p3.16xlarge | p3.2xlarge | p3.8xlarge | p3dn.24xlarge | p4d.24xlarge | p4de.24xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r3.large | r3.xlarge | r4.16xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.large | r4.xlarge | r5.12xlarge | r5.16xlarge | r5.24xlarge | r5.2xlarge | r5.4xlarge | r5.8xlarge | r5.large | r5.metal | r5.xlarge | r5a.12xlarge | r5a.16xlarge | r5a.24xlarge | r5a.2xlarge | r5a.4xlarge | r5a.8xlarge | r5a.large | r5a.xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.large | r5ad.xlarge | r5b.12xlarge | r5b.16xlarge | r5b.24xlarge | r5b.2xlarge | r5b.4xlarge | r5b.8xlarge | r5b.large | r5b.metal | r5b.xlarge | r5d.12xlarge | r5d.16xlarge | r5d.24xlarge | r5d.2xlarge | r5d.4xlarge | r5d.8xlarge | r5d.large | r5d.metal | r5d.xlarge | r5dn.12xlarge | r5dn.16xlarge | r5dn.24xlarge | r5dn.2xlarge | r5dn.4xlarge | r5dn.8xlarge | r5dn.large | r5dn.metal | r5dn.xlarge | r5n.12xlarge | r5n.16xlarge | r5n.24xlarge | r5n.2xlarge | r5n.4xlarge | r5n.8xlarge | r5n.large | r5n.metal | r5n.xlarge | r6a.12xlarge | r6a.16xlarge | r6a.24xlarge | r6a.2xlarge | r6a.32xlarge | r6a.48xlarge | r6a.4xlarge | r6a.8xlarge | r6a.large | r6a.metal | r6a.xlarge | r6g.12xlarge | r6g.16xlarge | r6g.2xlarge | r6g.4xlarge | r6g.8xlarge | r6g.large | r6g.medium | r6g.metal | r6g.xlarge | r6gd.12xlarge | r6gd.16xlarge | r6gd.2xlarge | r6gd.4xlarge | r6gd.8xlarge | r6gd.large | r6gd.medium | r6gd.metal | r6gd.xlarge | r6i.12xlarge | r6i.16xlarge | r6i.24xlarge | r6i.2xlarge | r6i.32xlarge | r6i.4xlarge | r6i.8xlarge | r6i.large | r6i.metal | r6i.xlarge | r6id.12xlarge | r6id.16xlarge | r6id.24xlarge | r6id.2xlarge | r6id.32xlarge | r6id.4xlarge | r6id.8xlarge | r6id.large | r6id.metal | r6id.xlarge | r6idn.12xlarge | r6idn.16xlarge | r6idn.24xlarge | r6idn.2xlarge | r6idn.32xlarge | r6idn.4xlarge | r6idn.8xlarge | r6idn.large | r6idn.xlarge | r6in.12xlarge | r6in.16xlarge | r6in.24xlarge | r6in.2xlarge | r6in.32xlarge | r6in.4xlarge | r6in.8xlarge | r6in.large | r6in.xlarge | t1.micro | t2.2xlarge | t2.large | t2.medium | t2.micro | t2.nano | t2.small | t2.xlarge | t3.2xlarge | t3.large | t3.medium | t3.micro | t3.nano | t3.small | t3.xlarge | t3a.2xlarge | t3a.large | t3a.medium | t3a.micro | t3a.nano | t3a.small | t3a.xlarge | t4g.2xlarge | t4g.large | t4g.medium | t4g.micro | t4g.nano | t4g.small | t4g.xlarge | trn1.2xlarge | trn1.32xlarge | u-12tb1.112xlarge | u-12tb1.metal | u-18tb1.112xlarge | u-18tb1.metal | u-24tb1.112xlarge | u-24tb1.metal | u-3tb1.56xlarge | u-6tb1.112xlarge | u-6tb1.56xlarge | u-6tb1.metal | u-9tb1.112xlarge | u-9tb1.metal | vt1.24xlarge | vt1.3xlarge | vt1.6xlarge | x1.16xlarge | x1.32xlarge | x1e.16xlarge | x1e.2xlarge | x1e.32xlarge | x1e.4xlarge | x1e.8xlarge | x1e.xlarge | x2gd.12xlarge | x2gd.16xlarge | x2gd.2xlarge | x2gd.4xlarge | x2gd.8xlarge | x2gd.large | x2gd.medium | x2gd.metal | x2gd.xlarge | x2idn.16xlarge | x2idn.24xlarge | x2idn.32xlarge | x2idn.metal | x2iedn.16xlarge | x2iedn.24xlarge | x2iedn.2xlarge | x2iedn.32xlarge | x2iedn.4xlarge | x2iedn.8xlarge | x2iedn.metal | x2iedn.xlarge | x2iezn.12xlarge | x2iezn.2xlarge | x2iezn.4xlarge | x2iezn.6xlarge | x2iezn.8xlarge | x2iezn.metal | z1d.12xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.large | z1d.metal | z1d.xlarge`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType?: Value<string>;
  /**
   * The monitoring for the instance.
   *
   * _Required_: No
   *
   * _Type_: [Monitoring](aws-properties-ec2-launchtemplate-launchtemplatedata-monitoring.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Monitoring?: EC2LaunchTemplateMonitoring;
  /**
   * Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [HibernationOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-hibernationoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HibernationOptions?: EC2LaunchTemplateHibernationOptions;
  /**
   * The metadata options for the instance. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [MetadataOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetadataOptions?: EC2LaunchTemplateMetadataOptions;
  /**
   * The license configurations.
   *
   * _Required_: No
   *
   * _Type_: List of [LicenseSpecification](aws-properties-ec2-launchtemplate-licensespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LicenseSpecifications?: List<EC2LaunchTemplateLicenseSpecification>;
  /**
   * Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   *
   * Default: `stop`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `stop | terminate`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceInitiatedShutdownBehavior?: Value<string>;
  /**
   * Indicates whether to enable the instance for stop protection. For more information, see [Stop protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html#Using_StopProtection) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableApiStop?: Value<boolean>;
  /**
   * The CPU options for the instance. For more information, see [Optimizing CPU Options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CpuOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-cpuoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CpuOptions?: EC2LaunchTemplateCpuOptions;
  /**
   * The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PrivateDnsNameOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateDnsNameOptions?: EC2LaunchTemplatePrivateDnsNameOptions;
  /**
   * One or more security group IDs. You can create a security group using [CreateSecurityGroup](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html). You cannot specify both a security group ID and security name in the same request.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The name of the key pair. You can create a key pair using [CreateKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) or [ImportKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html).
   *
   * If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyName?: Value<string>;
  /**
   * If you set this parameter to `true`, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch, use [ModifyInstanceAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html). Alternatively, if you set `InstanceInitiatedShutdownBehavior` to `terminate`, you can terminate the instance by running the shutdown command from the instance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableApiTermination?: Value<boolean>;
  /**
   * The market (purchasing) option for the instances.
   *
   * _Required_: No
   *
   * _Type_: [InstanceMarketOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceMarketOptions?: EC2LaunchTemplateInstanceMarketOptions;
  /**
   * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
   *
   * If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * _Required_: No
   *
   * _Type_: [InstanceRequirements](aws-properties-ec2-launchtemplate-launchtemplatedata-instancerequirements.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceRequirements?: EC2LaunchTemplateInstanceRequirements;
  /**
   * The ID of the RAM disk.
   *
   * We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RamDiskId?: Value<string>;
  /**
   * The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to `open`, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
   *
   * _Required_: No
   *
   * _Type_: [CapacityReservationSpecification](aws-properties-ec2-launchtemplate-launchtemplatedata-capacityreservationspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityReservationSpecification?: EC2LaunchTemplateCapacityReservationSpecification;
  /**
   * The credit option for CPU usage of the instance. Valid only for T instances.
   *
   * _Required_: No
   *
   * _Type_: [CreditSpecification](aws-properties-ec2-launchtemplate-launchtemplatedata-creditspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreditSpecification?: EC2LaunchTemplateCreditSpecification;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-metadataoptions.html}
 **/
export interface EC2LaunchTemplateMetadataOptions {
  HttpPutResponseHopLimit?: Value<number>;
  HttpTokens?: Value<string>;
  HttpProtocolIpv6?: Value<string>;
  InstanceMetadataTags?: Value<string>;
  HttpEndpoint?: Value<string>;
}

/**
 * The minimum and maximum number of network interfaces.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterfacecount.html}
 **/
export interface EC2LaunchTemplateNetworkInterfaceCount {
  /**
   * The minimum number of network interfaces. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum number of network interfaces. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 * Specifies a secondary private IPv4 address for a network interface.
 *
 * `PrivateIpAdd` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-privateipadd.html}
 **/
export interface EC2LaunchTemplatePrivateIpAdd {
  /**
   * The private IPv4 address.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateIpAddress?: Value<string>;
  /**
   * Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Primary?: Value<boolean>;
}

/**
 * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
 *
 * **Note**
 *
 * Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkbandwidthgbps.html}
 **/
export interface EC2LaunchTemplateNetworkBandwidthGbps {
  /**
   * The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum limit.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-iaminstanceprofile.html}
 **/
export interface EC2LaunchTemplateIamInstanceProfile {
  Arn?: Value<string>;
  Name?: Value<string>;
}

/**
 * The minimum and maximum amount of total local storage, in GB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-totallocalstoragegb.html}
 **/
export interface EC2LaunchTemplateTotalLocalStorageGB {
  /**
   * The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-placement.html}
 **/
export interface EC2LaunchTemplatePlacement {
  GroupName?: Value<string>;
  Tenancy?: Value<string>;
  SpreadDomain?: Value<string>;
  PartitionNumber?: Value<number>;
  AvailabilityZone?: Value<string>;
  Affinity?: Value<string>;
  HostId?: Value<string>;
  HostResourceGroupArn?: Value<string>;
  GroupId?: Value<string>;
}

/**
 * Specifies an IPv6 address in an Amazon EC2 launch template.
 *
 * `Ipv6Add` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv6add.html}
 **/
export interface EC2LaunchTemplateIpv6Add {
  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6Address?: Value<string>;
}

/**
 * Specifies the tags to apply to the launch template during creation.
 *
 * `LaunchTemplateTagSpecification` is a property of [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatetagspecification.html}
 **/
export interface EC2LaunchTemplateLaunchTemplateTagSpecification {
  /**
   * The type of resource. To tag the launch template, `ResourceType` must be `launch-template`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `capacity-reservation | capacity-reservation-fleet | carrier-gateway | client-vpn-endpoint | coip-pool | customer-gateway | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-gpu | elastic-ip | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | instance-event-window | internet-gateway | ipam | ipam-pool | ipam-resource-discovery | ipam-resource-discovery-association | ipam-scope | ipv4pool-ec2 | ipv6pool-ec2 | key-pair | launch-template | local-gateway | local-gateway-route-table | local-gateway-route-table-virtual-interface-group-association | local-gateway-route-table-vpc-association | local-gateway-virtual-interface | local-gateway-virtual-interface-group | natgateway | network-acl | network-insights-access-scope | network-insights-access-scope-analysis | network-insights-analysis | network-insights-path | network-interface | placement-group | prefix-list | replace-root-volume-task | reserved-instances | route-table | security-group | security-group-rule | snapshot | spot-fleet-request | spot-instances-request | subnet | subnet-cidr-reservation | traffic-mirror-filter | traffic-mirror-filter-rule | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-connect-peer | transit-gateway-multicast-domain | transit-gateway-policy-table | transit-gateway-route-table | transit-gateway-route-table-announcement | verified-access-endpoint | verified-access-group | verified-access-instance | verified-access-policy | verified-access-trust-provider | volume | vpc | vpc-block-public-access-exclusion | vpc-endpoint | vpc-endpoint-connection | vpc-endpoint-connection-device-type | vpc-endpoint-service | vpc-endpoint-service-permission | vpc-flow-log | vpc-peering-connection | vpn-connection | vpn-connection-device-type | vpn-gateway`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType?: Value<string>;
  /**
   * The tags for the resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-spotoptions.html}
 **/
export interface EC2LaunchTemplateSpotOptions {
  SpotInstanceType?: Value<string>;
  InstanceInterruptionBehavior?: Value<string>;
  MaxPrice?: Value<string>;
  BlockDurationMinutes?: Value<number>;
  ValidUntil?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-blockdevicemapping-ebs.html}
 **/
export interface EC2LaunchTemplateEbs {
  SnapshotId?: Value<string>;
  VolumeType?: Value<string>;
  KmsKeyId?: Value<string>;
  Encrypted?: Value<boolean>;
  Throughput?: Value<number>;
  Iops?: Value<number>;
  VolumeSize?: Value<number>;
  DeleteOnTermination?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-enclaveoptions.html}
 **/
export interface EC2LaunchTemplateEnclaveOptions {
  Enabled?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-maintenanceoptions.html}
 **/
export interface EC2LaunchTemplateMaintenanceOptions {
  AutoRecovery?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-capacityreservationspecification.html}
 **/
export interface EC2LaunchTemplateCapacityReservationSpecification {
  CapacityReservationPreference?: Value<string>;
  CapacityReservationTarget?: EC2LaunchTemplateCapacityReservationTarget;
}

/**
 * Specifies a target Capacity Reservation.
 *
 * `CapacityReservationTarget` is a property of the [ Amazon EC2 LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-capacityreservationtarget.html}
 **/
export interface EC2LaunchTemplateCapacityReservationTarget {
  /**
   * The ARN of the Capacity Reservation resource group in which to run the instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityReservationResourceGroupArn?: Value<string>;
  /**
   * The ID of the Capacity Reservation in which to run the instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityReservationId?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-cpuoptions.html}
 **/
export interface EC2LaunchTemplateCpuOptions {
  ThreadsPerCore?: Value<number>;
  CoreCount?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions.html}
 **/
export interface EC2LaunchTemplatePrivateDnsNameOptions {
  EnableResourceNameDnsARecord?: Value<boolean>;
  HostnameType?: Value<string>;
  EnableResourceNameDnsAAAARecord?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-instancerequirements.html}
 **/
export interface EC2LaunchTemplateInstanceRequirements {
  LocalStorageTypes?: List<Value<string>>;
  InstanceGenerations?: List<Value<string>>;
  NetworkInterfaceCount?: EC2LaunchTemplateNetworkInterfaceCount;
  MemoryGiBPerVCpu?: EC2LaunchTemplateMemoryGiBPerVCpu;
  AcceleratorTypes?: List<Value<string>>;
  VCpuCount?: EC2LaunchTemplateVCpuCount;
  ExcludedInstanceTypes?: List<Value<string>>;
  AcceleratorManufacturers?: List<Value<string>>;
  AllowedInstanceTypes?: List<Value<string>>;
  LocalStorage?: Value<string>;
  CpuManufacturers?: List<Value<string>>;
  AcceleratorCount?: EC2LaunchTemplateAcceleratorCount;
  NetworkBandwidthGbps?: EC2LaunchTemplateNetworkBandwidthGbps;
  BareMetal?: Value<string>;
  RequireHibernateSupport?: Value<boolean>;
  SpotMaxPricePercentageOverLowestPrice?: Value<number>;
  BaselineEbsBandwidthMbps?: EC2LaunchTemplateBaselineEbsBandwidthMbps;
  OnDemandMaxPricePercentageOverLowestPrice?: Value<number>;
  AcceleratorNames?: List<Value<string>>;
  AcceleratorTotalMemoryMiB?: EC2LaunchTemplateAcceleratorTotalMemoryMiB;
  BurstablePerformance?: Value<string>;
  MemoryMiB?: EC2LaunchTemplateMemoryMiB;
  TotalLocalStorageGB?: EC2LaunchTemplateTotalLocalStorageGB;
}

/**
 * Specifies a license configuration for an instance.
 *
 * `LicenseSpecification` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-licensespecification.html}
 **/
export interface EC2LaunchTemplateLicenseSpecification {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LicenseConfigurationArn?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-hibernationoptions.html}
 **/
export interface EC2LaunchTemplateHibernationOptions {
  Configured?: Value<boolean>;
}

/**
 * The minimum and maximum number of vCPUs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-vcpucount.html}
 **/
export interface EC2LaunchTemplateVCpuCount {
  /**
   * The minimum number of vCPUs. To specify no minimum limit, specify `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions.html}
 **/
export interface EC2LaunchTemplateInstanceMarketOptions {
  SpotOptions?: EC2LaunchTemplateSpotOptions;
  MarketType?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-creditspecification.html}
 **/
export interface EC2LaunchTemplateCreditSpecification {
  CpuCredits?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-monitoring.html}
 **/
export interface EC2LaunchTemplateMonitoring {
  Enabled?: Value<boolean>;
}

/**
 * Specifies an IPv4 prefix for a network interface.
 *
 * `Ipv4PrefixSpecification` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv4prefixspecification.html}
 **/
export interface EC2LaunchTemplateIpv4PrefixSpecification {
  /**
   * The IPv4 prefix. For information, see [ Assigning prefixes to Amazon EC2 network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv4Prefix?: Value<string>;
}

/**
 * Specifies an IPv6 prefix for a network interface.
 *
 * `Ipv6PrefixSpecification` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-ipv6prefixspecification.html}
 **/
export interface EC2LaunchTemplateIpv6PrefixSpecification {
  /**
   * The IPv6 prefix.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6Prefix?: Value<string>;
}

/**
 * Specifies the parameters for a network interface.
 *
 * `NetworkInterface` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html}
 **/
export interface EC2LaunchTemplateNetworkInterface {
  /**
   * A description for the network interface.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The primary private IPv4 address of the network interface.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateIpAddress?: Value<string>;
  /**
   * One or more private IPv4 addresses.
   *
   * _Required_: No
   *
   * _Type_: List of [PrivateIpAdd](aws-properties-ec2-launchtemplate-privateipadd.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateIpAddresses?: List<EC2LaunchTemplatePrivateIpAdd>;
  /**
   * The number of secondary private IPv4 addresses to assign to a network interface.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryPrivateIpAddressCount?: Value<number>;
  /**
   * The number of IPv6 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv6Prefix` option.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6PrefixCount?: Value<number>;
  /**
   * One or more IPv4 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv4PrefixCount` option.
   *
   * _Required_: No
   *
   * _Type_: List of [Ipv4PrefixSpecification](aws-properties-ec2-launchtemplate-ipv4prefixspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv4Prefixes?: List<EC2LaunchTemplateIpv4PrefixSpecification>;
  /**
   * The device index for the network interface attachment.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceIndex?: Value<number>;
  /**
   * The number of IPv4 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv4Prefix` option.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv4PrefixCount?: Value<number>;
  /**
   * One or more IPv6 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv6PrefixCount` option.
   *
   * _Required_: No
   *
   * _Type_: List of [Ipv6PrefixSpecification](aws-properties-ec2-launchtemplate-ipv6prefixspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6Prefixes?: List<EC2LaunchTemplateIpv6PrefixSpecification>;
  /**
   * The ID of the subnet for the network interface.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId?: Value<string>;
  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
   *
   * _Required_: No
   *
   * _Type_: List of [Ipv6Add](aws-properties-ec2-launchtemplate-ipv6add.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6Addresses?: List<EC2LaunchTemplateIpv6Add>;
  /**
   * Associates a public IPv4 address with eth0 for a new network interface.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociatePublicIpAddress?: Value<boolean>;
  /**
   * The ID of the network interface.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaceId?: Value<string>;
  /**
   * The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkCardIndex?: Value<number>;
  /**
   * The type of network interface. To create an Elastic Fabric Adapter (EFA), specify `efa`. For more information, see [Elastic Fabric Adapter](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * If you are not creating an EFA, specify `interface` or omit this parameter.
   *
   * Valid values: `interface` | `efa`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InterfaceType?: Value<string>;
  /**
   * Indicates whether to associate a Carrier IP address with eth0 for a new network interface.
   *
   * Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. For more information about Carrier IP addresses, see [Carrier IP addresses](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the _ AWS Wavelength Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociateCarrierIpAddress?: Value<boolean>;
  /**
   * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6AddressCount?: Value<number>;
  /**
   * The IDs of one or more security groups.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<Value<string>>;
  /**
   * Indicates whether the network interface is deleted when the instance is terminated.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeleteOnTermination?: Value<boolean>;
}

/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-acceleratorcount.html}
 **/
export interface EC2LaunchTemplateAcceleratorCount {
  /**
   * The minimum number of accelerators. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set `Max` to `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 * The minimum and maximum amount of memory, in MiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-memorymib.html}
 **/
export interface EC2LaunchTemplateMemoryMiB {
  /**
   * The minimum amount of memory, in MiB. To specify no minimum limit, specify `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of memory, in MiB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 * The minimum and maximum amount of memory per vCPU, in GiB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-memorygibpervcpu.html}
 **/
export interface EC2LaunchTemplateMemoryGiBPerVCpu {
  /**
   * The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 * Specifies an elastic inference accelerator.
 *
 * `LaunchTemplateElasticInferenceAccelerator` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplateelasticinferenceaccelerator.html}
 **/
export interface EC2LaunchTemplateLaunchTemplateElasticInferenceAccelerator {
  /**
   * The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The number of elastic inference accelerators to attach to the instance.
   *
   * Default: 1
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
}
export interface EC2LaunchTemplateProperties {
  /**
   * A name for the launch template.
   *
   * _Required_: No
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
   * The information for the launch template.
   *
   * _Required_: Yes
   *
   * _Type_: [LaunchTemplateData](aws-properties-ec2-launchtemplate-launchtemplatedata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateData: EC2LaunchTemplateLaunchTemplateData;
  /**
   * A description for the first version of the launch template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionDescription?: Value<string>;
  /**
   * The tags to apply to the launch template on creation. To tag the launch template, the resource type must be `launch-template`.
   *
   * To specify the tags for the resources that are created when an instance is launched, you must use the `TagSpecifications` parameter in the [launch template data](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestLaunchTemplateData.html) structure.
   *
   * _Required_: No
   *
   * _Type_: List of [LaunchTemplateTagSpecification](aws-properties-ec2-launchtemplate-launchtemplatetagspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagSpecifications?: List<EC2LaunchTemplateLaunchTemplateTagSpecification>;
}

/**
 * Specifies the properties for creating a launch template.
 *
 * The minimum required properties for specifying a launch template are as follows:
 *
 * A launch template can contain some or all of the configuration information to launch an instance. When you launch an instance using a launch template, instance properties that are not specified in the launch template use default values, except the `ImageId` property, which has no default value. If you do not specify an AMI ID for the launch template `ImageId` property, you must specify an AMI ID for the instance `ImageId` property.
 *
 * For more information, see [Launch an instance from a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html}
 */
export interface EC2LaunchTemplateResource {
  Type: 'AWS::EC2::LaunchTemplate';
  Properties: EC2LaunchTemplateProperties;
}
