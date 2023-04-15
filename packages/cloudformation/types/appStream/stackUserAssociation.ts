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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface AppStreamStackUserAssociationProperties {
  /**
   * Specifies whether a welcome email is sent to a user after the user is created in the user pool.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SendEmailNotification?: Value<boolean>;
  /**
   * The email address of the user who is associated with the stack.
   *
   * Users' email addresses are case-sensitive.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserName: Value<string>;
  /**
   * The name of the stack that is associated with the user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StackName: Value<string>;
  /**
   * The authentication type for the user who is associated with the stack. You must specify USERPOOL.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `API | AWS_AD | SAML | USERPOOL`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AuthenticationType: Value<string>;
}

/**
 * The `AWS::AppStream::StackUserAssociation` resource associates the specified users with the specified stacks for Amazon AppStream 2.0. Users in an AppStream 2.0 user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html}
 */
export interface AppStreamStackUserAssociationResource {
  Type: 'AWS::AppStream::StackUserAssociation';
  Properties: AppStreamStackUserAssociationProperties;
}
