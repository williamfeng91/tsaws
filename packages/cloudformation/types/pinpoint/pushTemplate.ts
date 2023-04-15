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
 * Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.html}
 **/
export interface PinpointPushTemplateDefaultPushNotificationTemplate {
  /**
   * The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:
   */
  Action?: Value<string>;
  /**
   * The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: Value<string>;
  /**
   * The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in `/res/raw/`.
   *
   * For an iOS platform, this value is the key for the name of a sound file in your app's main bundle or the `Library/Sounds` folder in your app's data container. If the sound file can't be found or you specify `default` for the value, the system plays the default alert sound.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sound?: Value<string>;
  /**
   * The message body to use in push notifications that are based on the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: Value<string>;
  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `Action` property is `URL`.
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
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.html}
 **/
export interface PinpointPushTemplateAndroidPushNotificationTemplate {
  /**
   * The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:
   */
  Action?: Value<string>;
  /**
   * The URL of an image to display in a push notification that's based on the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageUrl?: Value<string>;
  /**
   * The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallImageIconUrl?: Value<string>;
  /**
   * The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: Value<string>;
  /**
   * The URL of the large icon image to display in the content view of a push notification that's based on the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageIconUrl?: Value<string>;
  /**
   * The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in `/res/raw/`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sound?: Value<string>;
  /**
   * The message body to use in a push notification that's based on the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: Value<string>;
  /**
   * The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `Action` property is `URL`.
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
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.html}
 **/
export interface PinpointPushTemplateAPNSPushNotificationTemplate {
  /**
   * The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:
   */
  Action?: Value<string>;
  /**
   * The URL of an image or video to display in push notifications that are based on the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediaUrl?: Value<string>;
  /**
   * The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: Value<string>;
  /**
   * The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the `Library/Sounds` folder in your app's data container. If the sound file can't be found or you specify `default` for the value, the system plays the default alert sound.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sound?: Value<string>;
  /**
   * The message body to use in push notifications that are based on the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: Value<string>;
  /**
   * The URL to open in the recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the `Action` property is `URL`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: Value<string>;
}
export interface PinpointPushTemplateProperties {
  /**
   * The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (`Default`).
   *
   * _Required_: No
   *
   * _Type_: [AndroidPushNotificationTemplate](aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GCM?: PinpointPushTemplateAndroidPushNotificationTemplate;
  /**
   * The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (`Default`).
   *
   * _Required_: No
   *
   * _Type_: [AndroidPushNotificationTemplate](aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Baidu?: PinpointPushTemplateAndroidPushNotificationTemplate;
  /**
   * The name of the message template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TemplateName: Value<string>;
  /**
   * The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (`Default`).
   *
   * _Required_: No
   *
   * _Type_: [AndroidPushNotificationTemplate](aws-properties-pinpoint-pushtemplate-androidpushnotificationtemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ADM?: PinpointPushTemplateAndroidPushNotificationTemplate;
  /**
   * The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (`Default`).
   *
   * _Required_: No
   *
   * _Type_: [APNSPushNotificationTemplate](aws-properties-pinpoint-pushtemplate-apnspushnotificationtemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  APNS?: PinpointPushTemplateAPNSPushNotificationTemplate;
  /**
   * A custom description of the message template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateDescription?: Value<string>;
  /**
   * A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultSubstitutions?: Value<string>;
  /**
   * The default message template to use for push notification channels.
   *
   * _Required_: No
   *
   * _Type_: [DefaultPushNotificationTemplate](aws-properties-pinpoint-pushtemplate-defaultpushnotificationtemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Default?: PinpointPushTemplateDefaultPushNotificationTemplate;
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
}

/**
 * Creates a message template that you can use in messages that are sent through a push notification channel. A _message template_ is a set of content and settings that you can define, save, and reuse in messages for any of your Amazon Pinpoint applications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-pushtemplate.html}
 */
export interface PinpointPushTemplateResource {
  Type: 'AWS::Pinpoint::PushTemplate';
  Properties: PinpointPushTemplateProperties;
}
