/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains information about the identity of a user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-useridentityinfo.html}
 **/
export interface ConnectUserUserIdentityInfo {
  /**
   * The email address. If you are using SAML for identity management and include this parameter, an error is returned.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Email?: Value<string>;
  /**
   * The first name. This is required if you are using Amazon Connect or SAML for identity management.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirstName?: Value<string>;
  /**
   * The user's secondary email address. If you provide a secondary email, the user receives email notifications -- other than password reset notifications -- to this email address instead of to their primary email address.
   *
   * _Pattern_: `(?=^.{0,265}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryEmail?: Value<string>;
  /**
   * The last name. This is required if you are using Amazon Connect or SAML for identity management.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastName?: Value<string>;
  /**
   * The user's mobile number.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `+[1-9]d{1,14}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mobile?: Value<string>;
}

/**
 * Contains information about the phone configuration settings for a user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-user-userphoneconfig.html}
 **/
export interface ConnectUserUserPhoneConfig {
  /**
   * The Auto accept setting.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoAccept?: Value<boolean>;
  /**
   * The phone type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DESK_PHONE | SOFT_PHONE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhoneType: Value<string>;
  /**
   * The phone number for the user's desk phone.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `+[1-9]d{1,14}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeskPhoneNumber?: Value<string>;
  /**
   * The After Call Work (ACW) timeout setting, in seconds.
   *
   * When returned by a `SearchUsers` call, `AfterContactWorkTimeLimit` is returned in milliseconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfterContactWorkTimeLimit?: Value<number>;
}
export interface ConnectUserProperties {
  /**
   * The Amazon Resource Name (ARN) of the user's routing profile.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoutingProfileArn: Value<string>;
  /**
   * The user name assigned to the user account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * Information about the phone configuration for the user.
   *
   * _Required_: Yes
   *
   * _Type_: [UserPhoneConfig](aws-properties-connect-user-userphoneconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhoneConfig: ConnectUserUserPhoneConfig;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceArn: Value<string>;
  /**
   * The identifier of the user account in the directory used for identity management.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectoryUserId?: Value<string>;
  /**
   * Information about the user identity.
   *
   * _Required_: No
   *
   * _Type_: [UserIdentityInfo](aws-properties-connect-user-useridentityinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdentityInfo?: ConnectUserUserIdentityInfo;
  /**
   * The Amazon Resource Name (ARN) of the user's hierarchy group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyGroupArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the user's security profile.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityProfileArns: List<Value<string>>;
  /**
   * The tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The user's password.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password?: Value<string>;
}

/**
 * Specifies a user account for an Amazon Connect instance.
 *
 * For information about how to create user accounts using the Amazon Connect console, see [Add Users](https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html) in the _Amazon Connect Administrator Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-user.html}
 */
export interface ConnectUserResource {
  Type: 'AWS::Connect::User';
  Properties: ConnectUserProperties;
}
