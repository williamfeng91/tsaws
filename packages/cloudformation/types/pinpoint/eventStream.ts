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

export interface PinpointEventStreamProperties {
  /**
   * The unique identifier for the Amazon Pinpoint application that you want to export data from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationId: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.
   *
   * For a Kinesis data stream, the ARN format is: `arn:aws:kinesis:region:account-id:stream/stream_name `
   *
   * For a Kinesis Data Firehose delivery stream, the ARN format is: `arn:aws:firehose:region:account-id:deliverystream/stream_name `
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationStreamArn: Value<string>;
  /**
   * The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html}
 */
export interface PinpointEventStreamResource {
  Type: 'AWS::Pinpoint::EventStream';
  Properties: PinpointEventStreamProperties;
}
