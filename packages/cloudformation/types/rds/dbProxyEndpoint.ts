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
 * Metadata assigned to a DB proxy endpoint consisting of a key-value pair.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html}
 **/
export interface RDSDBProxyEndpointTagFormat {
  /**
   * Metadata assigned to a DB instance consisting of a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * A value is the optional value of the tag. The string value can be 1-256 Unicode characters in length and can't be prefixed with `aws:`. The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([p{L}p{Z}p{N}_.:/=+-]*)$").
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}
export interface RDSDBProxyEndpointProperties {
  /**
   * The name of the DB proxy endpoint to create.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBProxyEndpointName: Value<string>;
  /**
   * The name of the DB proxy associated with the DB proxy endpoint that you create.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBProxyName: Value<string>;
  /**
   * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
   *
   * Valid Values: `READ_WRITE | READ_ONLY`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetRole?: Value<string>;
  /**
   * The VPC security group IDs for the DB proxy endpoint that you create. You can specify a different set of security group IDs than for the original DB proxy. The default is the default security group for the VPC.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSecurityGroupIds?: List<Value<string>>;
  /**
   * The VPC subnet IDs for the DB proxy endpoint that you create. You can specify a different set of subnet IDs than for the original DB proxy.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcSubnetIds: List<Value<string>>;
  /**
   * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFormat](aws-properties-rds-dbproxyendpoint-tagformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<RDSDBProxyEndpointTagFormat>;
}

/**
 * The `AWS::RDS::DBProxyEndpoint` resource creates or updates a DB proxy endpoint. You can use custom proxy endpoints to access a proxy through a different VPC than the proxy's default VPC.
 *
 * For more information about RDS Proxy, see [ AWS::RDS::DBProxy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html}
 */
export interface RDSDBProxyEndpointResource {
  Type: 'AWS::RDS::DBProxyEndpoint';
  Properties: RDSDBProxyEndpointProperties;
}
