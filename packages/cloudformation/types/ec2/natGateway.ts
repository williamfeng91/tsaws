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

export interface EC2NatGatewayProperties {
  /**
   * Secondary EIP allocation IDs. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the _Amazon Virtual Private Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryAllocationIds?: List<Value<string>>;
  /**
   * The private IPv4 address to assign to the NAT gateway. If you don't provide an address, a private IPv4 address will be automatically assigned.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrivateIpAddress?: Value<string>;
  /**
   * Indicates whether the NAT gateway supports public or private connectivity. The default is public connectivity.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `private | public`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectivityType?: Value<string>;
  /**
   * Secondary private IPv4 addresses. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the _Amazon Virtual Private Cloud User Guide_.
   *
   * `SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryPrivateIpAddresses?: List<Value<string>>;
  /**
   * [Private NAT gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT gateway. For more information about secondary addresses, see [Create a NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-creating) in the _Amazon Virtual Private Cloud User Guide_.
   *
   * `SecondaryPrivateIpAddressCount` and `SecondaryPrivateIpAddresses` cannot be set at the same time.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `7`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryPrivateIpAddressCount?: Value<number>;
  /**
   * [Public NAT gateway only] The allocation ID of the Elastic IP address that's associated with the NAT gateway. This property is required for a public NAT gateway and cannot be specified with a private NAT gateway.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AllocationId?: Value<string>;
  /**
   * The ID of the subnet in which the NAT gateway is located.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId: Value<string>;
  /**
   * The tags for the NAT gateway.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The maximum amount of time to wait (in seconds) before forcibly releasing the IP addresses if connections are still in progress. Default value is 350 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxDrainDurationSeconds?: Value<number>;
}

/**
 * Specifies a network address translation (NAT) gateway in the specified subnet. You can create either a public NAT gateway or a private NAT gateway. The default is a public NAT gateway. If you create a public NAT gateway, you must specify an elastic IP address.
 *
 * With a NAT gateway, instances in a private subnet can connect to the internet, other AWS services, or an on-premises network using the IP address of the NAT gateway.
 *
 * If you add a default route (`AWS::EC2::Route` resource) that points to a NAT gateway, specify the NAT gateway ID for the route's `NatGatewayId` property.
 *
 * For more information, see [NAT Gateways](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) in the _Amazon VPC User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html}
 */
export interface EC2NatGatewayResource {
  Type: 'AWS::EC2::NatGateway';
  Properties: EC2NatGatewayProperties;
}
