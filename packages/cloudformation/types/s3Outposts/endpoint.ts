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
 * The container for the network interface.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html}
 **/
export interface S3OutpostsEndpointNetworkInterface {
  /**
   * The ID for the network interface.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaceId: Value<string>;
}
export interface S3OutpostsEndpointProperties {
  /**
   * The ID of the Outpost.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutpostId: Value<string>;
  /**
   * The ID of the security group to use with the endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupId: Value<string>;
  /**
   * The ID of the subnet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId: Value<string>;
  /**
   * The container for the type of connectivity used to access the Amazon S3 on Outposts endpoint. To use the Amazon VPC, choose `Private`. To use the endpoint with an on-premises network, choose `CustomerOwnedIp`. If you choose `CustomerOwnedIp`, you must also provide the customer-owned IP address pool (CoIP pool).
   *
   * `Private` is the default access type value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CustomerOwnedIp | Private`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessType?: Value<string>;
  /**
   * The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^ipv4pool-coip-([0-9a-f]{17})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomerOwnedIpv4Pool?: Value<string>;
}

/**
 * This AWS::S3Outposts::Endpoint resource specifies an endpoint and associates it with the specified Outpost.
 *
 * Amazon S3 on Outposts access points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to S3 on Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see [ Accessing S3 on Outposts using VPC-only access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/AccessingS3Outposts.html).
 *
 * **Note**
 *
 * It can take up to 5 minutes for this resource to be created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html}
 */
export interface S3OutpostsEndpointResource {
  Type: 'AWS::S3Outposts::Endpoint';
  Properties: S3OutpostsEndpointProperties;
}
