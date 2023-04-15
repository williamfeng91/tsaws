/**
 * Supported regions:
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * An object that defines the tags (keys and values) that you want to associate with the identity.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-tags.html}
 **/
export interface PinpointEmailIdentityTags {
  /**
   * The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don’t want a resource to have a specific tag value, don’t specify a value for this parameter. Amazon Pinpoint will set the value to an empty string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * One part of a key-value pair that defines a tag. The maximum length of a tag key is 128 characters. The minimum length is 1 character.
   *
   * If you specify tags for the identity, then this value is required.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * A list of attributes that are associated with a MAIL FROM domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-mailfromattributes.html}
 **/
export interface PinpointEmailIdentityMailFromAttributes {
  /**
   * The name of a domain that an email identity uses as a custom MAIL FROM domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MailFromDomain?: Value<string>;
  /**
   * The action that Amazon Pinpoint to takes if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to `UseDefaultValue`, Amazon Pinpoint uses _amazonses.com_ as the MAIL FROM domain. When you set this value to `RejectMessage`, Amazon Pinpoint returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
   *
   * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending`, `Failed`, and `TemporaryFailure` states.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `REJECT_MESSAGE | USE_DEFAULT_VALUE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BehaviorOnMxFailure?: Value<string>;
}
export interface PinpointEmailIdentityProperties {
  /**
   * Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.
   *
   * When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.
   *
   * When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FeedbackForwardingEnabled?: Value<boolean>;
  /**
   * For domain identities, this attribute is used to enable or disable DomainKeys Identified Mail (DKIM) signing for the domain.
   *
   * If the value is `true`, then the messages that you send from the domain are signed using both the DKIM keys for your domain, as well as the keys for the `amazonses.com` domain. If the value is `false`, then the messages that you send are only signed using the DKIM keys for the `amazonses.com` domain.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DkimSigningEnabled?: Value<boolean>;
  /**
   * An object that defines the tags (keys and values) that you want to associate with the email identity.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-pinpointemail-identity-tags.md) of [Tags](aws-properties-pinpointemail-identity-tags.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<PinpointEmailIdentityTags>;
  /**
   * The address or domain of the identity, such as _sender@example.com_ or _example.co.uk_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * Used to enable or disable the custom Mail-From domain configuration for an email identity.
   *
   * _Required_: No
   *
   * _Type_: [MailFromAttributes](aws-properties-pinpointemail-identity-mailfromattributes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MailFromAttributes?: PinpointEmailIdentityMailFromAttributes;
}

/**
 * Specifies an identity to use for sending email through Amazon Pinpoint. In Amazon Pinpoint, an _identity_ is an email address or domain that you use when you send email. Before you can use Amazon Pinpoint to send an email from an identity, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the address or domain, and that you've given Amazon Pinpoint permission to send email from that identity.
 *
 * When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email.
 *
 * When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.
 *
 * **Important**
 *
 * When you use CloudFormation to specify an identity, CloudFormation might indicate that the identity was created successfully. However, you have to verify the identity before you can use it to send email.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html}
 */
export interface PinpointEmailIdentityResource {
  Type: 'AWS::PinpointEmail::Identity';
  Properties: PinpointEmailIdentityProperties;
}
