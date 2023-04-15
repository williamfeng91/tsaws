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

export interface EC2IPAMAllocationProperties {
  /**
   * A description for the allocation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * The CIDR you would like to allocate from the IPAM pool. Note the following:
   */
  Cidr?: Value<string>;
  /**
   * The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:
   */
  NetmaskLength?: Value<number>;
  /**
   * The ID of the IPAM pool from which you would like to allocate a CIDR.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IpamPoolId: Value<string>;
}

/**
 * In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html}
 */
export interface EC2IPAMAllocationResource {
  Type: 'AWS::EC2::IPAMAllocation';
  Properties: EC2IPAMAllocationProperties;
}
