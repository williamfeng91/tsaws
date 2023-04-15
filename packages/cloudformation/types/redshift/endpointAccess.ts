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
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The security groups associated with the endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html}
 **/
export interface RedshiftEndpointAccessVpcSecurityGroup {
  /**
   * The status of the endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The identifier of the VPC security group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSecurityGroupId?: Value<string>;
}

/**
 * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcendpoint.html}
 **/
export interface RedshiftEndpointAccessVpcEndpoint {
  /**
   * The VPC identifier that the endpoint is associated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcId?: Value<string>;
  /**
   * One or more network interfaces of the endpoint. Also known as an interface endpoint.
   *
   * _Required_: No
   *
   * _Type_: List of [NetworkInterface](aws-properties-redshift-endpointaccess-networkinterface.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaces?: List<RedshiftEndpointAccessNetworkInterface>;
  /**
   * The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcEndpointId?: Value<string>;
}

/**
 * Describes a network interface.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html}
 **/
export interface RedshiftEndpointAccessNetworkInterface {
  /**
   * The IPv4 address of the network interface within the subnet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateIpAddress?: Value<string>;
  /**
   * The Availability Zone.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZone?: Value<string>;
  /**
   * The subnet identifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId?: Value<string>;
  /**
   * The network interface identifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaceId?: Value<string>;
}
export interface RedshiftEndpointAccessProperties {
  /**
   * The name of the endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointName: Value<string>;
  /**
   * The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSecurityGroupIds: List<Value<string>>;
  /**
   * The AWS account ID of the owner of the cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceOwner?: Value<string>;
  /**
   * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetGroupName: Value<string>;
  /**
   * The cluster identifier of the cluster associated with the endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterIdentifier: Value<string>;
}

/**
 * Creates a Redshift-managed VPC endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html}
 */
export interface RedshiftEndpointAccessResource {
  Type: 'AWS::Redshift::EndpointAccess';
  Properties: RedshiftEndpointAccessProperties;
}
