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

/**
 * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-cloudwatchdestination.html}
 **/
export interface PinpointEmailConfigurationSetEventDestinationCloudWatchDestination {
  /**
   * An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionConfiguration](aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionConfigurations?: List<PinpointEmailConfigurationSetEventDestinationDimensionConfiguration>;
}

/**
 * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-snsdestination.html}
 **/
export interface PinpointEmailConfigurationSetEventDestinationSnsDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish email events to. For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn: Value<string>;
}

/**
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-kinesisfirehosedestination.html}
 **/
export interface PinpointEmailConfigurationSetEventDestinationKinesisFirehoseDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that Amazon Pinpoint sends email events to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStreamArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon Pinpoint uses when sending email events to the Amazon Kinesis Data Firehose stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamRoleArn: Value<string>;
}

/**
 * In Amazon Pinpoint, _events_ include message sends, deliveries, opens, clicks, bounces, and complaints. _Event destinations_ are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html}
 **/
export interface PinpointEmailConfigurationSetEventDestinationEventDestination {
  /**
   * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
   *
   * _Required_: No
   *
   * _Type_: [SnsDestination](aws-properties-pinpointemail-configurationseteventdestination-snsdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnsDestination?: PinpointEmailConfigurationSetEventDestinationSnsDestination;
  /**
   * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchDestination](aws-properties-pinpointemail-configurationseteventdestination-cloudwatchdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchDestination?: PinpointEmailConfigurationSetEventDestinationCloudWatchDestination;
  /**
   * If `true`, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this `EventDestinationDefinition`.
   *
   * If `false`, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The types of events that Amazon Pinpoint sends to the specified event destinations. Acceptable values: `SEND`, `REJECT`, `BOUNCE`, `COMPLAINT`, `DELIVERY`, `OPEN`, `CLICK`, and `RENDERING_FAILURE`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchingEventTypes: List<Value<string>>;
  /**
   * An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
   *
   * _Required_: No
   *
   * _Type_: [PinpointDestination](aws-properties-pinpointemail-configurationseteventdestination-pinpointdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PinpointDestination?: PinpointEmailConfigurationSetEventDestinationPinpointDestination;
  /**
   * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseDestination](aws-properties-pinpointemail-configurationseteventdestination-kinesisfirehosedestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseDestination?: PinpointEmailConfigurationSetEventDestinationKinesisFirehoseDestination;
}

/**
 * An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.html}
 **/
export interface PinpointEmailConfigurationSetEventDestinationDimensionConfiguration {
  /**
   * The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. Acceptable values: `MESSAGE_TAG`, `EMAIL_HEADER`, and `LINK_TAG`.
   *
   * If you want Amazon Pinpoint to use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail` API, choose `MESSAGE_TAG`. If you want Amazon Pinpoint to use your own email headers, choose `EMAIL_HEADER`. If you want Amazon Pinpoint to use tags that are specified in your links, choose `LINK_TAG`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionValueSource: Value<string>;
  /**
   * The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:
   */
  DefaultDimensionValue: Value<string>;
  /**
   * The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:
   */
  DimensionName: Value<string>;
}

/**
 * An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-pinpointdestination.html}
 **/
export interface PinpointEmailConfigurationSetEventDestinationPinpointDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email events to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationArn?: Value<string>;
}
export interface PinpointEmailConfigurationSetEventDestinationProperties {
  /**
   * The name of the event destination that you want to modify.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EventDestinationName: Value<string>;
  /**
   * The name of the configuration set that contains the event destination that you want to modify.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationSetName: Value<string>;
  /**
   * An object that defines the event destination.
   *
   * _Required_: No
   *
   * _Type_: [EventDestination](aws-properties-pinpointemail-configurationseteventdestination-eventdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventDestination?: PinpointEmailConfigurationSetEventDestinationEventDestination;
}

/**
 * Create an event destination. In Amazon Pinpoint, _events_ include message sends, deliveries, opens, clicks, bounces, and complaints. _Event destinations_ are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 *
 * A single configuration set can include more than one event destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html}
 */
export interface PinpointEmailConfigurationSetEventDestinationResource {
  Type: 'AWS::PinpointEmail::ConfigurationSetEventDestination';
  Properties: PinpointEmailConfigurationSetEventDestinationProperties;
}
