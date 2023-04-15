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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Specifies the default behavior of a button that appears in an in-app message. You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html}
 **/
export interface PinpointInAppTemplateDefaultButtonConfiguration {
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
   * The action that occurs when a recipient chooses a button in an in-app message. You can specify one of the following:
   */
  ButtonAction?: Value<string>;
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
 * Specifies the configuration of an in-app message, including its header, body, buttons, colors, and images.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-inappmessagecontent.html}
 **/
export interface PinpointInAppTemplateInAppMessageContent {
  /**
   * An object that contains configuration information about the header or title text of the in-app message.
   *
   * _Required_: No
   *
   * _Type_: [BodyConfig](aws-properties-pinpoint-inapptemplate-bodyconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodyConfig?: PinpointInAppTemplateBodyConfig;
  /**
   * An object that contains configuration information about the secondary button in an in-app message.
   *
   * _Required_: No
   *
   * _Type_: [ButtonConfig](aws-properties-pinpoint-inapptemplate-buttonconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryBtn?: PinpointInAppTemplateButtonConfig;
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
   * _Type_: [ButtonConfig](aws-properties-pinpoint-inapptemplate-buttonconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryBtn?: PinpointInAppTemplateButtonConfig;
  /**
   * An object that contains configuration information about the header or title text of the in-app message.
   *
   * _Required_: No
   *
   * _Type_: [HeaderConfig](aws-properties-pinpoint-inapptemplate-headerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderConfig?: PinpointInAppTemplateHeaderConfig;
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
 * Specifies the configuration of the main body text of the in-app message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-bodyconfig.html}
 **/
export interface PinpointInAppTemplateBodyConfig {
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
   * The color of the body text, expressed as a hex color code (such as #000000 for black).
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
 * Specifies the configuration and content of the header or title text of the in-app message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-headerconfig.html}
 **/
export interface PinpointInAppTemplateHeaderConfig {
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
   * The title text of the in-app message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header?: Value<string>;
  /**
   * The color of the title text, expressed as a hex color code (such as #000000 for black).
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
 * Specifies the configuration of a button with settings that are specific to a certain device type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html}
 **/
export interface PinpointInAppTemplateOverrideButtonConfiguration {
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
 * Specifies the behavior of buttons that appear in an in-app message template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-inapptemplate-buttonconfig.html}
 **/
export interface PinpointInAppTemplateButtonConfig {
  /**
   * Optional button configuration to use for in-app messages sent to web applications. This button configuration overrides the default button configuration.
   *
   * _Required_: No
   *
   * _Type_: [OverrideButtonConfiguration](aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Web?: PinpointInAppTemplateOverrideButtonConfiguration;
  /**
   * Specifies the default behavior of a button that appears in an in-app message. You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
   *
   * _Required_: No
   *
   * _Type_: [DefaultButtonConfiguration](aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultConfig?: PinpointInAppTemplateDefaultButtonConfiguration;
  /**
   * Optional button configuration to use for in-app messages sent to iOS devices. This button configuration overrides the default button configuration.
   *
   * _Required_: No
   *
   * _Type_: [OverrideButtonConfiguration](aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IOS?: PinpointInAppTemplateOverrideButtonConfiguration;
  /**
   * Optional button configuration to use for in-app messages sent to Android devices. This button configuration overrides the default button configuration.
   *
   * _Required_: No
   *
   * _Type_: [OverrideButtonConfiguration](aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Android?: PinpointInAppTemplateOverrideButtonConfiguration;
}
export interface PinpointInAppTemplateProperties {
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
   * A string that determines the appearance of the in-app message. You can specify one of the following:
   */
  Layout?: Value<string>;
  /**
   * An object that contains information about the content of an in-app message, including its title and body text, text colors, background colors, images, buttons, and behaviors.
   *
   * _Required_: No
   *
   * _Type_: List of [InAppMessageContent](aws-properties-pinpoint-inapptemplate-inappmessagecontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content?: List<PinpointInAppTemplateInAppMessageContent>;
  /**
   * The name of the in-app message template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TemplateName: Value<string>;
  /**
   * An optional description of the in-app template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateDescription?: Value<string>;
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
 * Creates a message template that you can use to send in-app messages. A message template is a set of content and settings that you can define, save, and reuse in messages for any of your Amazon Pinpoint applications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html}
 */
export interface PinpointInAppTemplateResource {
  Type: 'AWS::Pinpoint::InAppTemplate';
  Properties: PinpointInAppTemplateProperties;
}
