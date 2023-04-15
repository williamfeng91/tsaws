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

export interface EC2EIPProperties {
  /**
   * The ID of the instance.
   *
   * Updates to the `InstanceId` property may require _some interruptions_. Updates on an EIP reassociates the address on its associated resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceId?: Value<string>;
  /**
   * The ID of an address pool that you own. Use this parameter to let Amazon EC2 select an address from the address pool.
   *
   * Updates to the `PublicIpv4Pool` property may require _some interruptions_. Updates on an EIP reassociates the address on its associated resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicIpv4Pool?: Value<string>;
  /**
   * The Elastic IP address you are accepting for transfer. You can only accept one transferred address. For more information on Elastic IP address transfers, see [Transfer Elastic IP addresses](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro) in the _Amazon Virtual Private Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransferAddress?: Value<string>;
  /**
   * Indicates whether the Elastic IP address is for use with instances in a VPC or instance in EC2-Classic.
   *
   * Default: If the Region supports EC2-Classic, the default is `standard`. Otherwise, the default is `vpc`.
   *
   * Use when allocating an address for use with a VPC if the Region supports EC2-Classic.
   *
   * If you define an Elastic IP address and associate it with a VPC that is defined in the same template, you must declare a dependency on the VPC-gateway attachment by using the [ DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) on this resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `standard | vpc`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Domain?: Value<string>;
  /**
   * Any tags assigned to the Elastic IP address.
   *
   * Updates to the `Tags` property may require _some interruptions_. Updates on an EIP reassociates the address on its associated resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses. Use this parameter to limit the IP address to this location. IP addresses cannot move between network border groups.
   *
   * Use [DescribeAvailabilityZones](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html) to view the network border groups.
   *
   * You cannot use a network border group with EC2 Classic. If you attempt this operation on EC2 Classic, you receive an `InvalidParameterCombination` error.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkBorderGroup?: Value<string>;
}

/**
 * Specifies an Elastic IP (EIP) address and can, optionally, associate it with an Amazon EC2 instance.
 *
 * You can allocate an Elastic IP address from an address pool owned by AWS or from an address pool created from a public IPv4 address range that you have brought to AWS for use with your AWS resources using bring your own IP addresses (BYOIP). For more information, see [Bring Your Own IP Addresses (BYOIP)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html) in the _Amazon EC2 User Guide_.
 *
 * [EC2-VPC] If you release an Elastic IP address, you might be able to recover it. You cannot recover an Elastic IP address that you released after it is allocated to another AWS account. You cannot recover an Elastic IP address for EC2-Classic. To attempt to recover an Elastic IP address that you released, specify it in this operation.
 *
 * An Elastic IP address is for use either in the EC2-Classic platform or in a VPC. By default, you can allocate 5 Elastic IP addresses for EC2-Classic per Region and 5 Elastic IP addresses for EC2-VPC per Region.
 *
 * For more information, see [Elastic IP Addresses](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-eip.html}
 */
export interface EC2EIPResource {
  Type: 'AWS::EC2::EIP';
  Properties: EC2EIPProperties;
}
