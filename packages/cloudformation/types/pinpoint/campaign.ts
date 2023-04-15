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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Specifies the configuration of main body text of the in-app message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebodyconfig.html}
 **/
export interface PinpointCampaignInAppMessageBodyConfig {
  /**
   * The text alignment of the main body text of the message. Acceptable values: `LEFT`, `CENTER`, `RIGHT`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alignment?: Value<string>;
  /**
   * The color of the body text, expressed as a string consisting of a hex color code (such as "#000000" for black).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: Value<string>;
  /**
   * The main body text of the message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: Value<string>;
}

/**
 * Specifies the configuration and contents of an in-app message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagecontent.html}
 **/
export interface PinpointCampaignInAppMessageContent {
  /**
   * Specifies the configuration of main body text in an in-app message template.
   *
   * _Required_: No
   *
   * _Type_: [InAppMessageBodyConfig](aws-properties-pinpoint-campaign-inappmessagebodyconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodyConfig?: PinpointCampaignInAppMessageBodyConfig;
  /**
   * An object that contains configuration information about the secondary button in an in-app message.
   *
   * _Required_: No
   *
   * _Type_: [InAppMessageButton](aws-properties-pinpoint-campaign-inappmessagebutton.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryBtn?: PinpointCampaignInAppMessageButton;
  /**
   * The URL of the image that appears on an in-app message banner.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageUrl?: Value<string>;
  /**
   * An object that contains configuration information about the primary button in an in-app message.
   *
   * _Required_: No
   *
   * _Type_: [InAppMessageButton](aws-properties-pinpoint-campaign-inappmessagebutton.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryBtn?: PinpointCampaignInAppMessageButton;
  /**
   * Specifies the configuration and content of the header or title text of the in-app message.
   *
   * _Required_: No
   *
   * _Type_: [InAppMessageHeaderConfig](aws-properties-pinpoint-campaign-inappmessageheaderconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderConfig?: PinpointCampaignInAppMessageHeaderConfig;
  /**
   * The background color for an in-app message banner, expressed as a hex color code (such as #000000 for black).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: Value<string>;
}

/**
 * Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigncustommessage.html}
 **/
export interface PinpointCampaignCampaignCustomMessage {
  /**
   * The raw, JSON-formatted string to use as the payload for the message. The maximum size is 5 KB.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Data?: Value<string>;
}

/**
 * Specifies the configuration and content of the header or title text of the in-app message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessageheaderconfig.html}
 **/
export interface PinpointCampaignInAppMessageHeaderConfig {
  /**
   * The text alignment of the title of the message. Acceptable values: `LEFT`, `CENTER`, `RIGHT`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alignment?: Value<string>;
  /**
   * The header or title text of the in-app message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header?: Value<string>;
  /**
   * The color of the body text, expressed as a string consisting of a hex color code (such as "#000000" for black).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule-quiettime.html}
 **/
export interface PinpointCampaignQuietTime {
  Start: Value<string>;
  End: Value<string>;
}

/**
 * Specifies the content and settings for a push notification that's sent to recipients of a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-message.html}
 **/
export interface PinpointCampaignMessage {
  /**
   * The JSON payload to use for a silent push notification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonBody?: Value<string>;
  /**
   * The action to occur if a recipient taps the push notification. Valid values are:
   */
  Action?: Value<string>;
  /**
   * The URL of the image or video to display in the push notification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediaUrl?: Value<string>;
  /**
   * The number of seconds that the push notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push notification service. If this value is `0`, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.
   *
   * This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeToLive?: Value<number>;
  /**
   * The URL of the image to display as the small, push notification icon, such as a small version of the icon for the app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageSmallIconUrl?: Value<string>;
  /**
   * The URL of an image to display in the push notification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageUrl?: Value<string>;
  /**
   * The title to display above the notification message on a recipient's device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: Value<string>;
  /**
   * The URL of the image to display as the push notification icon, such as the icon for the app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageIconUrl?: Value<string>;
  /**
   * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SilentPush?: Value<boolean>;
  /**
   * The body of the notification message. The maximum number of characters is 200.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: Value<string>;
  /**
   * The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RawContent?: Value<string>;
  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the `Action` property is `URL`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: Value<string>;
}

/**
 * Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignsmsmessage.html}
 **/
export interface PinpointCampaignCampaignSmsMessage {
  /**
   * The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntityId?: Value<string>;
  /**
   * The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginationNumber?: Value<string>;
  /**
   * The alphabetic Sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region. To specify a phone number as the sender, omit this parameter and use `OriginationNumber` instead. For more information about support for Sender ID by country, see the [Amazon Pinpoint User Guide](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-countries.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SenderId?: Value<string>;
  /**
   * The body of the SMS message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: Value<string>;
  /**
   * The SMS message type. Valid values are `TRANSACTIONAL` (for messages that are critical or time-sensitive, such as a one-time passwords) and `PROMOTIONAL` (for messsages that aren't critical or time-sensitive, such as marketing messages).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageType?: Value<string>;
  /**
   * The template ID received from the regulatory body for sending SMS in your country.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateId?: Value<string>;
}

/**
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-eventdimensions.html}
 **/
export interface PinpointCampaignEventDimensions {
  /**
   * One or more custom metrics that your application reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metrics?: { [key: string]: any };
  /**
   * The name of the event that causes the campaign to be sent or the journey activity to be performed. This can be a standard event that Amazon Pinpoint generates, such as `_email.delivered` or `_custom.delivered`. For campaigns, this can also be a custom event that's specific to your application. For information about standard events, see [Streaming Amazon Pinpoint Events](https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html) in the _ Amazon Pinpoint Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [SetDimension](aws-properties-pinpoint-campaign-setdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventType?: PinpointCampaignSetDimension;
  /**
   * One or more custom attributes that your application reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: { [key: string]: any };
}

/**
 * Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the `CampaignCustomMessage` object to define the message to send for the campaign or campaign treatment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-customdeliveryconfiguration.html}
 **/
export interface PinpointCampaignCustomDeliveryConfiguration {
  /**
   * The destination to send the campaign or treatment to. This value can be one of the following:
   */
  DeliveryUri?: Value<string>;
  /**
   * The types of endpoints to send the campaign or treatment to. Each valid value maps to a type of channel that you can associate with an endpoint by using the `ChannelType` property of an endpoint.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointTypes?: List<Value<string>>;
}

/**
 * Specifies the configuration of a button with settings that are specific to a certain device type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-overridebuttonconfiguration.html}
 **/
export interface PinpointCampaignOverrideButtonConfiguration {
  /**
   * The action that occurs when a recipient chooses a button in an in-app message. You can specify one of the following:
   */
  ButtonAction?: Value<string>;
  /**
   * The destination (such as a URL) for a button.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Link?: Value<string>;
}

/**
 * Specifies the limits on the messages that a campaign can send.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-limits.html}
 **/
export interface PinpointCampaignLimits {
  /**
   * The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. The maximum value is 100.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Daily?: Value<number>;
  /**
   * The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumDuration?: Value<number>;
  /**
   * The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. The maximum value is 100.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Total?: Value<number>;
  /**
   * The maximum number of messages that a campaign can send each second. The minimum value is 1. The maximum value is 20,000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessagesPerSecond?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Session?: Value<number>;
}

/**
 * Specifies attribute-based criteria for including or excluding endpoints from a segment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-attributedimension.html}
 **/
export interface PinpointCampaignAttributeDimension {
  /**
   * The type of segment dimension to use. Valid values are:
   */
  AttributeType?: Value<string>;
  /**
   * The criteria values to use for the segment dimension. Depending on the value of the `AttributeType` property, endpoints are included or excluded from the segment if their attribute values match the criteria values.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Specifies settings for invoking an Lambda function that customizes a segment for a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignhook.html}
 **/
export interface PinpointCampaignCampaignHook {
  /**
   * The mode that Amazon Pinpoint uses to invoke the Lambda function. Possible values are:
   */
  Mode?: Value<string>;
  /**
   * The web URL that Amazon Pinpoint calls to invoke the Lambda function over HTTPS.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebUrl?: Value<string>;
  /**
   * The name or Amazon Resource Name (ARN) of the Lambda function that Amazon Pinpoint invokes to customize a segment for a campaign.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionName?: Value<string>;
}

/**
 * Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-metricdimension.html}
 **/
export interface PinpointCampaignMetricDimension {
  /**
   * The operator to use when comparing metric values. Valid values are: `GREATER_THAN`, `LESS_THAN`, `GREATER_THAN_OR_EQUAL`, `LESS_THAN_OR_EQUAL`, and `EQUAL`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonOperator?: Value<string>;
  /**
   * The value to compare.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<number>;
}

/**
 * Specifies the configuration of a button that appears in an in-app message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-inappmessagebutton.html}
 **/
export interface PinpointCampaignInAppMessageButton {
  /**
   * An object that defines the default behavior for a button in in-app messages for web applications.
   *
   * _Required_: No
   *
   * _Type_: [OverrideButtonConfiguration](aws-properties-pinpoint-campaign-overridebuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Web?: PinpointCampaignOverrideButtonConfiguration;
  /**
   * An object that defines the default behavior for a button in an in-app message.
   *
   * _Required_: No
   *
   * _Type_: [DefaultButtonConfiguration](aws-properties-pinpoint-campaign-defaultbuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultConfig?: PinpointCampaignDefaultButtonConfiguration;
  /**
   * An object that defines the default behavior for a button in in-app messages sent to iOS devices.
   *
   * _Required_: No
   *
   * _Type_: [OverrideButtonConfiguration](aws-properties-pinpoint-campaign-overridebuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IOS?: PinpointCampaignOverrideButtonConfiguration;
  /**
   * An object that defines the default behavior for a button in in-app messages sent to Android.
   *
   * _Required_: No
   *
   * _Type_: [OverrideButtonConfiguration](aws-properties-pinpoint-campaign-overridebuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Android?: PinpointCampaignOverrideButtonConfiguration;
}

/**
 * Specifies the default behavior for a button that appears in an in-app message. You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-defaultbuttonconfiguration.html}
 **/
export interface PinpointCampaignDefaultButtonConfiguration {
  /**
   * The action that occurs when a recipient chooses a button in an in-app message. You can specify one of the following:
   */
  ButtonAction?: Value<string>;
  /**
   * The border radius of a button.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderRadius?: Value<number>;
  /**
   * The text that appears on a button in an in-app message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Text?: Value<string>;
  /**
   * The color of the body text in a button, expressed as a hex color code (such as #000000 for black).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: Value<string>;
  /**
   * The destination (such as a URL) for a button.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Link?: Value<string>;
  /**
   * The background color of a button, expressed as a hex color code (such as #000000 for black).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: Value<string>;
}

/**
 * Specifies the schedule settings for a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-schedule.html}
 **/
export interface PinpointCampaignSchedule {
  /**
   * The starting UTC offset for the campaign schedule, if the value of the `IsLocalTime` property is `true`. Valid values are: `UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30, UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09, UTC-10,` and `UTC-11`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeZone?: Value<string>;
  /**
   * The default quiet time for the campaign. Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met:
   */
  QuietTime?: PinpointCampaignQuietTime;
  /**
   * The scheduled time, in ISO 8601 format, when the campaign ended or will end.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndTime?: Value<string>;
  /**
   * The scheduled time when the campaign began or will begin. Valid values are: `IMMEDIATE`, to start the campaign immediately; or, a specific time in ISO 8601 format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime?: Value<string>;
  /**
   * Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Frequency?: Value<string>;
  /**
   * The type of event that causes the campaign to be sent, if the value of the `Frequency` property is `EVENT`.
   *
   * _Required_: No
   *
   * _Type_: [CampaignEventFilter](aws-properties-pinpoint-campaign-campaigneventfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventFilter?: PinpointCampaignCampaignEventFilter;
  /**
   * Specifies whether the start and end times for the campaign schedule use each recipient's local time. To base the schedule on each recipient's local time, set this value to `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsLocalTime?: Value<boolean>;
}

/**
 * Specifies the message template to use for the message, for each type of channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-templateconfiguration.html}
 **/
export interface PinpointCampaignTemplateConfiguration {
  /**
   * The SMS template to use for the message.
   *
   * _Required_: No
   *
   * _Type_: [Template](aws-properties-pinpoint-campaign-template.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SMSTemplate?: PinpointCampaignTemplate;
  /**
   * The email template to use for the message.
   *
   * _Required_: No
   *
   * _Type_: [Template](aws-properties-pinpoint-campaign-template.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailTemplate?: PinpointCampaignTemplate;
  /**
   * The push notification template to use for the message.
   *
   * _Required_: No
   *
   * _Type_: [Template](aws-properties-pinpoint-campaign-template.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PushTemplate?: PinpointCampaignTemplate;
  /**
   * The voice template to use for the message. This object isn't supported for campaigns.
   *
   * _Required_: No
   *
   * _Type_: [Template](aws-properties-pinpoint-campaign-template.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VoiceTemplate?: PinpointCampaignTemplate;
}

/**
 * Specifies the appearance of an in-app message, including the message type, the title and body text, text and background colors, and the configurations of buttons that appear in the message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigninappmessage.html}
 **/
export interface PinpointCampaignCampaignInAppMessage {
  /**
   * Custom data, in the form of key-value pairs, that is included in an in-app messaging payload.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomConfig?: { [key: string]: any };
  /**
   * A string that describes how the in-app message will appear. You can specify one of the following:
   */
  Layout?: Value<string>;
  /**
   * An array that contains configurtion information about the in-app message for the campaign, including title and body text, text colors, background colors, image URLs, and button configurations.
   *
   * _Required_: No
   *
   * _Type_: List of [InAppMessageContent](aws-properties-pinpoint-campaign-inappmessagecontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content?: List<PinpointCampaignInAppMessageContent>;
}

/**
 * Specifies the settings for events that cause a campaign to be sent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaigneventfilter.html}
 **/
export interface PinpointCampaignCampaignEventFilter {
  /**
   * The type of event that causes the campaign to be sent. Valid values are: `SYSTEM`, sends the campaign when a system event occurs; and, `ENDPOINT`, sends the campaign when an endpoint event (Events resource) occurs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterType?: Value<string>;
  /**
   * The dimension settings of the event filter for the campaign.
   *
   * _Required_: No
   *
   * _Type_: [EventDimensions](aws-properties-pinpoint-campaign-eventdimensions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: PinpointCampaignEventDimensions;
}

/**
 * Specifies the name and version of the message template to use for the message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-template.html}
 **/
export interface PinpointCampaignTemplate {
  /**
   * The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the [Template Versions](https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html) resource.
   *
   * If you don't specify a value for this property, Amazon Pinpoint uses the _active version_ of the template. The _active version_ is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * The name of the message template to use for the message. If specified, this value must match the name of an existing message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Specifies the settings for a campaign treatment. A _treatment_ is a variation of a campaign that's used for A/B testing of a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-writetreatmentresource.html}
 **/
export interface PinpointCampaignWriteTreatmentResource {
  /**
   * A custom description of the treatment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreatmentDescription?: Value<string>;
  /**
   * The message configuration settings for the treatment.
   *
   * _Required_: No
   *
   * _Type_: [MessageConfiguration](aws-properties-pinpoint-campaign-messageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageConfiguration?: PinpointCampaignMessageConfiguration;
  /**
   * The schedule settings for the treatment.
   *
   * _Required_: No
   *
   * _Type_: [Schedule](aws-properties-pinpoint-campaign-schedule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: PinpointCampaignSchedule;
  /**
   * The message template to use for the treatment.
   *
   * _Required_: No
   *
   * _Type_: [TemplateConfiguration](aws-properties-pinpoint-campaign-templateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateConfiguration?: PinpointCampaignTemplateConfiguration;
  /**
   * The delivery configuration settings for sending the treatment through a custom channel. This object is required if the `MessageConfiguration` object for the treatment specifies a `CustomMessage` object.
   *
   * _Required_: No
   *
   * _Type_: [CustomDeliveryConfiguration](aws-properties-pinpoint-campaign-customdeliveryconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomDeliveryConfiguration?: PinpointCampaignCustomDeliveryConfiguration;
  /**
   * The allocated percentage of users (segment members) to send the treatment to.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizePercent?: Value<number>;
  /**
   * A custom name for the treatment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreatmentName?: Value<string>;
}

/**
 * Specifies the dimension type and values for a segment dimension.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-setdimension.html}
 **/
export interface PinpointCampaignSetDimension {
  /**
   * The type of segment dimension to use. Valid values are: `INCLUSIVE`, endpoints that match the criteria are included in the segment; and, `EXCLUSIVE`, endpoints that match the criteria are excluded from the segment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionType?: Value<string>;
  /**
   * The criteria values to use for the segment dimension. Depending on the value of the `DimensionType` property, endpoints are included or excluded from the segment if their values match the criteria values.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Specifies the message configuration settings for a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-messageconfiguration.html}
 **/
export interface PinpointCampaignMessageConfiguration {
  /**
   * The message that the campaign sends through the APNs (Apple Push Notification service) channel. If specified, this message overrides the default message.
   *
   * _Required_: No
   *
   * _Type_: [Message](aws-properties-pinpoint-campaign-message.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  APNSMessage?: PinpointCampaignMessage;
  /**
   * The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. If specified, this message overrides the default message.
   *
   * _Required_: No
   *
   * _Type_: [Message](aws-properties-pinpoint-campaign-message.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaiduMessage?: PinpointCampaignMessage;
  /**
   * The default message that the campaign sends through all the channels that are configured for the campaign.
   *
   * _Required_: No
   *
   * _Type_: [Message](aws-properties-pinpoint-campaign-message.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultMessage?: PinpointCampaignMessage;
  /**
   * The default message for the in-app messaging channel. This message overrides the default message (`DefaultMessage`).
   *
   * _Required_: No
   *
   * _Type_: [CampaignInAppMessage](aws-properties-pinpoint-campaign-campaigninappmessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InAppMessage?: PinpointCampaignCampaignInAppMessage;
  /**
   * The message that the campaign sends through the email channel. If specified, this message overrides the default message.
   *
   * _Required_: No
   *
   * _Type_: [CampaignEmailMessage](aws-properties-pinpoint-campaign-campaignemailmessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailMessage?: PinpointCampaignCampaignEmailMessage;
  /**
   * The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. If specified, this message overrides the default message.
   *
   * _Required_: No
   *
   * _Type_: [Message](aws-properties-pinpoint-campaign-message.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GCMMessage?: PinpointCampaignMessage;
  /**
   * The message that the campaign sends through the SMS channel. If specified, this message overrides the default message.
   *
   * _Required_: No
   *
   * _Type_: [CampaignSmsMessage](aws-properties-pinpoint-campaign-campaignsmsmessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SMSMessage?: PinpointCampaignCampaignSmsMessage;
  /**
   * The message that the campaign sends through a custom channel, as specified by the delivery configuration (`CustomDeliveryConfiguration`) settings for the campaign. If specified, this message overrides the default message.
   *
   * _Required_: No
   *
   * _Type_: [CampaignCustomMessage](aws-properties-pinpoint-campaign-campaigncustommessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomMessage?: PinpointCampaignCampaignCustomMessage;
  /**
   * The message that the campaign sends through the ADM (Amazon Device Messaging) channel. If specified, this message overrides the default message.
   *
   * _Required_: No
   *
   * _Type_: [Message](aws-properties-pinpoint-campaign-message.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ADMMessage?: PinpointCampaignMessage;
}

/**
 * Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-campaign-campaignemailmessage.html}
 **/
export interface PinpointCampaignCampaignEmailMessage {
  /**
   * The verified email address to send the email from. The default address is the `FromAddress` specified for the email channel for the application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromAddress?: Value<string>;
  /**
   * The body of the email, in HTML format, for recipients whose email clients render HTML content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HtmlBody?: Value<string>;
  /**
   * The subject line, or title, of the email.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: Value<string>;
  /**
   * The body of the email for recipients whose email clients don't render HTML content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: Value<string>;
}
export interface PinpointCampaignProperties {
  /**
   * A custom description of the campaign.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The unique identifier for the segment to associate with the campaign.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentId: Value<string>;
  /**
   * An integer between 1 and 5, inclusive, that represents the priority of the in-app message campaign, where 1 is the highest priority and 5 is the lowest. If there are multiple messages scheduled to be displayed at the same time, the priority determines the order in which those messages are displayed.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority?: Value<number>;
  /**
   * The message template to use for the treatment.
   *
   * _Required_: No
   *
   * _Type_: [TemplateConfiguration](aws-properties-pinpoint-campaign-templateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateConfiguration?: PinpointCampaignTemplateConfiguration;
  /**
   * Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to `false`. If you restart a campaign, the campaign restarts from the beginning and not at the point you paused it. If a campaign is running it will complete and then pause. Pause only pauses or skips the next run for a recurring future scheduled campaign. A campaign scheduled for immediate can't be paused.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsPaused?: Value<boolean>;
  /**
   * An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.
   *
   * _Required_: No
   *
   * _Type_: List of [WriteTreatmentResource](aws-properties-pinpoint-campaign-writetreatmentresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalTreatments?: List<PinpointCampaignWriteTreatmentResource>;
  /**
   * The name of the campaign.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The version of the segment to associate with the campaign.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentVersion?: Value<number>;
  /**
   * A custom description of the default treatment for the campaign.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreatmentDescription?: Value<string>;
  /**
   * The message configuration settings for the campaign.
   *
   * _Required_: No
   *
   * _Type_: [MessageConfiguration](aws-properties-pinpoint-campaign-messageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageConfiguration?: PinpointCampaignMessageConfiguration;
  /**
   * The messaging limits for the campaign.
   *
   * _Required_: No
   *
   * _Type_: [Limits](aws-properties-pinpoint-campaign-limits.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Limits?: PinpointCampaignLimits;
  /**
   * The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HoldoutPercent?: Value<number>;
  /**
   * The schedule settings for the campaign.
   *
   * _Required_: Yes
   *
   * _Type_: [Schedule](aws-properties-pinpoint-campaign-schedule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule: PinpointCampaignSchedule;
  /**
   * The delivery configuration settings for sending the treatment through a custom channel. This object is required if the `MessageConfiguration` object for the treatment specifies a `CustomMessage` object.
   *
   * _Required_: No
   *
   * _Type_: [CustomDeliveryConfiguration](aws-properties-pinpoint-campaign-customdeliveryconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomDeliveryConfiguration?: PinpointCampaignCustomDeliveryConfiguration;
  /**
   * The unique identifier for the Amazon Pinpoint application that the campaign is associated with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationId: Value<string>;
  /**
   * Specifies the Lambda function to use as a code hook for a campaign.
   *
   * _Required_: No
   *
   * _Type_: [CampaignHook](aws-properties-pinpoint-campaign-campaignhook.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CampaignHook?: PinpointCampaignCampaignHook;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A _treatment_ is a variation of a campaign that's used for A/B testing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreatmentName?: Value<string>;
}

/**
 * Specifies the settings for a campaign. A _campaign_ is a messaging initiative that engages a specific segment of users for an Amazon Pinpoint application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-campaign.html}
 */
export interface PinpointCampaignResource {
  Type: 'AWS::Pinpoint::Campaign';
  Properties: PinpointCampaignProperties;
}
