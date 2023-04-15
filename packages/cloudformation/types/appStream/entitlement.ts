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
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * An attribute that belongs to an entitlement. Application entitlements work by matching a supported SAML 2.0 attribute name to a value when a user identity federates to an AppStream 2.0 SAML application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-entitlement-attribute.html}
 **/
export interface AppStreamEntitlementAttribute {
  /**
   * A value that is matched to a supported SAML attribute name when a user identity federates to an AppStream 2.0 SAML application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * A supported AWS IAM SAML PrincipalTag attribute that is matched to a value when a user identity federates to an AppStream 2.0 SAML application.
   *
   * The following are supported values:
   */
  Name: Value<string>;
}
export interface AppStreamEntitlementProperties {
  /**
   * Specifies whether to entitle all apps or only selected apps.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALL | ASSOCIATED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppVisibility: Value<string>;
  /**
   * The description of the entitlement.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The attributes of the entitlement.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Attribute](aws-properties-appstream-entitlement-attribute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes: List<AppStreamEntitlementAttribute>;
  /**
   * The name of the stack.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StackName: Value<string>;
  /**
   * The name of the entitlement.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates an entitlement to control access, based on user attributes, to specific applications within a stack. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application or to applications managed by a dynamic app provider using the Dynamic Application Framework.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-entitlement.html}
 */
export interface AppStreamEntitlementResource {
  Type: 'AWS::AppStream::Entitlement';
  Properties: AppStreamEntitlementProperties;
}
