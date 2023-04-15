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

export interface EC2VPCPeeringConnectionProperties {
  /**
   * The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.
   *
   * This is required when you are peering a VPC in a different AWS account.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PeerRoleArn?: Value<string>;
  /**
   * The ID of the VPC.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId: Value<string>;
  /**
   * The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PeerVpcId: Value<string>;
  /**
   * The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.
   *
   * Default: The Region in which you make the request.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PeerRegion?: Value<string>;
  /**
   * The AWS account ID of the owner of the accepter VPC.
   *
   * Default: Your AWS account ID
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PeerOwnerId?: Value<string>;
  /**
   * Any tags assigned to the resource.
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
 * Requests a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection. The accepter VPC can belong to a different AWS account and can be in a different Region than the requester VPC.
 *
 * The requester VPC and accepter VPC cannot have overlapping CIDR blocks. If you create a VPC peering connection request between VPCs with overlapping CIDR blocks, the VPC peering connection has a status of `failed`.
 *
 * If the VPCs belong to different accounts, the acceptor account must have a role that allows the requester account to accept the VPC peering connection. For more information, see [Walkthough: Peer with a VPC in another AWS account](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/peer-with-vpc-in-another-account.html).
 *
 * If the requester and acceptor VPCs are in the same account, the peering request is accepted without a peering role.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html}
 */
export interface EC2VPCPeeringConnectionResource {
  Type: 'AWS::EC2::VPCPeeringConnection';
  Properties: EC2VPCPeeringConnectionProperties;
}
