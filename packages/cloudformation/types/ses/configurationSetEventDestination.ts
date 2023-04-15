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
 * Contains information about an event destination.
 *
 * **Note**
 *
 * When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).
 *
 * Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html}
 **/
export interface SESConfigurationSetEventDestinationEventDestination {
  /**
   * An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
   *
   * _Required_: No
   *
   * _Type_: [SnsDestination](aws-properties-ses-configurationseteventdestination-snsdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnsDestination?: SESConfigurationSetEventDestinationSnsDestination;
  /**
   * An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchDestination](aws-properties-ses-configurationseteventdestination-cloudwatchdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchDestination?: SESConfigurationSetEventDestinationCloudWatchDestination;
  /**
   * Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to `true` to enable publishing to this destination; set to `false` to prevent publishing to this destination. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The type of email sending events to publish to the event destination.
   */
  MatchingEventTypes: List<Value<string>>;
  /**
   * The name of the event destination. The name must meet the following requirements:
   */
  Name?: Value<string>;
  /**
   * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseDestination](aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseDestination?: SESConfigurationSetEventDestinationKinesisFirehoseDestination;
}

/**
 * Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.
 *
 * Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-cloudwatchdestination.html}
 **/
export interface SESConfigurationSetEventDestinationCloudWatchDestination {
  /**
   * A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionConfiguration](aws-properties-ses-configurationseteventdestination-dimensionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionConfigurations?: List<SESConfigurationSetEventDestinationDimensionConfiguration>;
}

/**
 * Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.
 *
 * For information about publishing email sending events to Amazon CloudWatch, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html}
 **/
export interface SESConfigurationSetEventDestinationDimensionConfiguration {
  /**
   * The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail`/`SendRawEmail` API, specify `messageTag`. To use your own email headers, specify `emailHeader`. To put a custom tag on any link included in your email, specify `linkTag`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `emailHeader | linkTag | messageTag`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionValueSource: Value<string>;
  /**
   * The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. The default value must meet the following requirements:
   */
  DefaultDimensionValue: Value<string>;
  /**
   * The name of an Amazon CloudWatch dimension associated with an email sending metric. The name must meet the following requirements:
   */
  DimensionName: Value<string>;
}

/**
 * Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
 *
 * Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html}
 **/
export interface SESConfigurationSetEventDestinationKinesisFirehoseDestination {
  /**
   * The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IAMRoleARN: Value<string>;
  /**
   * The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStreamARN: Value<string>;
}

/**
 * Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
 *
 * Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-snsdestination.html}
 **/
export interface SESConfigurationSetEventDestinationSnsDestination {
  /**
   * The ARN of the Amazon SNS topic for email sending events. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicARN: Value<string>;
}
export interface SESConfigurationSetEventDestinationProperties {
  /**
   * The name of the configuration set that contains the event destination.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationSetName: Value<string>;
  /**
   * The event destination object.
   *
   * _Required_: Yes
   *
   * _Type_: [EventDestination](aws-properties-ses-configurationseteventdestination-eventdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventDestination: SESConfigurationSetEventDestinationEventDestination;
}

/**
 * Specifies a configuration set event destination. An event destination is an AWS service that Amazon SES publishes email sending events to. When you specify an event destination, you provide one, and only one, destination. You can send event data to Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon Simple Notification Service (Amazon SNS).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html}
 */
export interface SESConfigurationSetEventDestinationResource {
  Type: 'AWS::SES::ConfigurationSetEventDestination';
  Properties: SESConfigurationSetEventDestinationProperties;
}
