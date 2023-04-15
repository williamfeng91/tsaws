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

export interface EC2NetworkInterfacePermissionProperties {
  /**
   * The AWS account ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AwsAccountId: Value<string>;
  /**
   * The ID of the network interface.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkInterfaceId: Value<string>;
  /**
   * The type of permission to grant: `INSTANCE-ATTACH` or `EIP-ASSOCIATE`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EIP-ASSOCIATE | INSTANCE-ATTACH`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Permission: Value<string>;
}

/**
 * Specifies a permission for an Amazon EC2 network interface. For example, you can grant an AWS authorized partner account permission to attach the specified network interface to an instance in their account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html}
 */
export interface EC2NetworkInterfacePermissionResource {
  Type: 'AWS::EC2::NetworkInterfacePermission';
  Properties: EC2NetworkInterfacePermissionProperties;
}
