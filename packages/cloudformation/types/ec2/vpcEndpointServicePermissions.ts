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

export interface EC2VPCEndpointServicePermissionsProperties {
  /**
   * The Amazon Resource Names (ARN) of one or more principals (users, IAM roles, and AWS accounts). Permissions are granted to the principals in this list. To grant permissions to all principals, specify an asterisk (*). Permissions are revoked for principals not in this list. If the list is empty, then all permissions are revoked.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedPrincipals?: List<Value<string>>;
  /**
   * The ID of the service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceId: Value<string>;
}

/**
 * Grant or revoke permissions for service consumers (users, IAM roles, and AWS accounts) to connect to a VPC endpoint service.
 *
 * If you grant permissions to all principals, the service is public. Any users who know the name of a public service can send a request to attach an endpoint. If the service does not require manual approval, attachments are automatically approved.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html}
 */
export interface EC2VPCEndpointServicePermissionsResource {
  Type: 'AWS::EC2::VPCEndpointServicePermissions';
  Properties: EC2VPCEndpointServicePermissionsProperties;
}
