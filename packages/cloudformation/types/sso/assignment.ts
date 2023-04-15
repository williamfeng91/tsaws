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

export interface SSOAssignmentProperties {
  /**
   * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the [IAM Identity Center Identity Store API Reference](/singlesignon/latest/IdentityStoreAPIReference/welcome.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `47`
   *
   * _Pattern_: `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrincipalId: Value<string>;
  /**
   * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see [Amazon Resource Names (ARNs) and AWS Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the _AWS General Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `1224`
   *
   * _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceArn: Value<string>;
  /**
   * The entity type for which the assignment will be created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AWS_ACCOUNT`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetType: Value<string>;
  /**
   * The ARN of the permission set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `1224`
   *
   * _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet/(sso)?ins-[a-zA-Z0-9-.]{16}/ps-[a-zA-Z0-9-./]{16}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PermissionSetArn: Value<string>;
  /**
   * The entity type for which the assignment will be created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `GROUP | USER`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrincipalType: Value<string>;
  /**
   * TargetID is an AWS account identifier, typically a 10-12 digit string (For example, 123456789012).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `d{12}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetId: Value<string>;
}

/**
 * Assigns access to a Principal for a specified AWS account using a specified permission set.
 *
 * **Note**
 *
 * The term _principal_ here refers to a user or group that is defined in IAM Identity Center.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-assignment.html}
 */
export interface SSOAssignmentResource {
  Type: 'AWS::SSO::Assignment';
  Properties: SSOAssignmentProperties;
}
