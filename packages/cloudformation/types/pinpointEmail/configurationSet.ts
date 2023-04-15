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
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-sendingoptions.html}
 **/
export interface PinpointEmailConfigurationSetSendingOptions {
  /**
   * If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendingEnabled?: Value<boolean>;
}

/**
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-reputationoptions.html}
 **/
export interface PinpointEmailConfigurationSetReputationOptions {
  /**
   * If `true`, tracking of reputation metrics is enabled for the configuration set. If `false`, tracking of reputation metrics is disabled for the configuration set.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReputationMetricsEnabled?: Value<boolean>;
}

/**
 * An object that defines the tags (keys and values) that you want to associate with the configuration set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-tags.html}
 **/
export interface PinpointEmailConfigurationSetTags {
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
   * If you specify tags for the configuration set, then this value is required.
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
 * Used to associate a configuration set with a dedicated IP pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-deliveryoptions.html}
 **/
export interface PinpointEmailConfigurationSetDeliveryOptions {
  /**
   * The name of the dedicated IP pool that you want to associate with the configuration set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendingPoolName?: Value<string>;
}

/**
 * An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.
 *
 * These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-trackingoptions.html}
 **/
export interface PinpointEmailConfigurationSetTrackingOptions {
  /**
   * The domain that you want to use for tracking open and click events.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRedirectDomain?: Value<string>;
}
export interface PinpointEmailConfigurationSetProperties {
  /**
   * An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [SendingOptions](aws-properties-pinpointemail-configurationset-sendingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendingOptions?: PinpointEmailConfigurationSetSendingOptions;
  /**
   * An object that defines the open and click tracking options for emails that you send using the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [TrackingOptions](aws-properties-pinpointemail-configurationset-trackingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrackingOptions?: PinpointEmailConfigurationSetTrackingOptions;
  /**
   * An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [ReputationOptions](aws-properties-pinpointemail-configurationset-reputationoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReputationOptions?: PinpointEmailConfigurationSetReputationOptions;
  /**
   * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [DeliveryOptions](aws-properties-pinpointemail-configurationset-deliveryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryOptions?: PinpointEmailConfigurationSetDeliveryOptions;
  /**
   * An object that defines the tags (keys and values) that you want to associate with the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-pinpointemail-configurationset-tags.md) of [Tags](aws-properties-pinpointemail-configurationset-tags.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<PinpointEmailConfigurationSetTags>;
  /**
   * The name of the configuration set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Create a configuration set. _Configuration sets_ are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html}
 */
export interface PinpointEmailConfigurationSetResource {
  Type: 'AWS::PinpointEmail::ConfigurationSet';
  Properties: PinpointEmailConfigurationSetProperties;
}
