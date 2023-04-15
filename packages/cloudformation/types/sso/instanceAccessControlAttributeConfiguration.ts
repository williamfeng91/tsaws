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
 * These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your AWS resources based upon the configured attribute values. When you enable ABAC and specify `AccessControlAttributes`, IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.html}
 **/
export interface SSOInstanceAccessControlAttributeConfigurationAccessControlAttribute {
  /**
   * The value used for mapping a specified attribute to an identity source.
   *
   * _Required_: Yes
   *
   * _Type_: [AccessControlAttributeValue](aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: SSOInstanceAccessControlAttributeConfigurationAccessControlAttributeValue;
  /**
   * The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in IAM Identity Center.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[p{L}p{Z}p{N}_.:/=+-@]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * The value used for mapping a specified attribute to an identity source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue.html}
 **/
export interface SSOInstanceAccessControlAttributeConfigurationAccessControlAttributeValue {
  /**
   * The identity source to use when mapping a specified attribute to IAM Identity Center.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: List<Value<string>>;
}
export interface SSOInstanceAccessControlAttributeConfigurationProperties {
  /**
   * The ARN of the IAM Identity Center instance under which the operation will be executed.
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
   * Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.
   *
   * _Required_: No
   *
   * _Type_: List of [AccessControlAttribute](aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlAttributes?: List<SSOInstanceAccessControlAttributeConfigurationAccessControlAttribute>;
}

/**
 * Enables the attribute-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see [Attribute-Based Access Control](https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.html) in the _IAM Identity Center User Guide_.
 *
 * **Note**
 *
 * The `InstanceAccessControlAttributeConfiguration` property has been deprecated but is still supported for backwards compatibility purposes. We recommend that you use the `AccessControlAttributes` property instead.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html}
 */
export interface SSOInstanceAccessControlAttributeConfigurationResource {
  Type: 'AWS::SSO::InstanceAccessControlAttributeConfiguration';
  Properties: SSOInstanceAccessControlAttributeConfigurationProperties;
}
