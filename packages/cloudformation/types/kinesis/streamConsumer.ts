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

export interface KinesisStreamConsumerProperties {
  /**
   * The name of the consumer is something you choose when you register the consumer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConsumerName: Value<string>;
  /**
   * The ARN of the stream with which you registered the consumer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws.*:kinesis:.*:d{12}:stream/S+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StreamARN: Value<string>;
}

/**
 * Use the AWS CloudFormation `AWS::Kinesis::StreamConsumer` resource to register a consumer with a Kinesis data stream. The consumer you register can then call [SubscribeToShard](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html) to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream.
 *
 * You can register up to five consumers per stream. However, you can request a limit increase using the [Kinesis Data Streams limits form](https://console.aws.amazon.com/support/v1?#/). A given consumer can only be registered with one stream at a time.
 *
 * For more information, see [Using Consumers with Enhanced Fan-Out](https://docs.aws.amazon.com/streams/latest/dev/introduction-to-enhanced-consumers.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html}
 */
export interface KinesisStreamConsumerResource {
  Type: 'AWS::Kinesis::StreamConsumer';
  Properties: KinesisStreamConsumerProperties;
}
