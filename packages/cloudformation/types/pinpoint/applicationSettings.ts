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

/**
 * Specifies the default sending limits for campaigns in the application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-limits.html}
 **/
export interface PinpointApplicationSettingsLimits {
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
}

/**
 * Specifies the start and end times that define a time range when messages aren't sent to endpoints.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-quiettime.html}
 **/
export interface PinpointApplicationSettingsQuietTime {
  /**
   * The specific time when quiet time begins. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Start: Value<string>;
  /**
   * The specific time when quiet time ends. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  End: Value<string>;
}

/**
 * Specifies the Lambda function to use by default as a code hook for campaigns in the application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-applicationsettings-campaignhook.html}
 **/
export interface PinpointApplicationSettingsCampaignHook {
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
   * The name or Amazon Resource Name (ARN) of the Lambda function that Amazon Pinpoint invokes to send messages for campaigns in the application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionName?: Value<string>;
}
export interface PinpointApplicationSettingsProperties {
  /**
   * The default quiet time for campaigns in the application. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met:
   *
   * - The `EndpointDemographic.Timezone` property of the endpoint is set to a valid value.
   *
   * - The current time in the endpoint's time zone is later than or equal to the time specified by the `QuietTime.Start` property for the application (or a campaign that has custom quiet time settings).
   *
   * - The current time in the endpoint's time zone is earlier than or equal to the time specified by the `QuietTime.End` property for the application (or a campaign that has custom quiet time settings).
   *
   * If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled.
   *
   * To override the default quiet time settings for a specific campaign, use the Campaign resource to define a custom quiet time for the campaign.
   *
   * _Required_: No
   *
   * _Type_: [QuietTime](aws-properties-pinpoint-applicationsettings-quiettime.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QuietTime?: PinpointApplicationSettingsQuietTime;
  /**
   * The default sending limits for campaigns in the application. To override these limits for a specific campaign, use the Campaign resource to define custom limits for the campaign.
   *
   * _Required_: No
   *
   * _Type_: [Limits](aws-properties-pinpoint-applicationsettings-limits.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Limits?: PinpointApplicationSettingsLimits;
  /**
   * The unique identifier for the Amazon Pinpoint application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationId: Value<string>;
  /**
   * The settings for the Lambda function to use by default as a code hook for campaigns in the application. To override these settings for a specific campaign, use the Campaign resource to define custom Lambda function settings for the campaign.
   *
   * _Required_: No
   *
   * _Type_: [CampaignHook](aws-properties-pinpoint-applicationsettings-campaignhook.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CampaignHook?: PinpointApplicationSettingsCampaignHook;
  /**
   * Specifies whether to enable application-related alarms in Amazon CloudWatch.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchMetricsEnabled?: Value<boolean>;
}

/**
 * Specifies the settings for an Amazon Pinpoint application. In Amazon Pinpoint, an _application_ (also referred to as an _app_ or _project_) is a collection of related settings, customer information, segments, and campaigns, and other types of Amazon Pinpoint resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-applicationsettings.html}
 */
export interface PinpointApplicationSettingsResource {
  Type: 'AWS::Pinpoint::ApplicationSettings';
  Properties: PinpointApplicationSettingsProperties;
}
