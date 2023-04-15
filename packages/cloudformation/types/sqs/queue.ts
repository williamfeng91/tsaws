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
import { ResourceTag } from '../../shared-types/resource';

export interface SQSQueueProperties {
  /**
   * Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see [Consuming messages using long polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html#sqs-long-polling) in the _Amazon SQS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReceiveMessageWaitTimeSeconds?: Value<number>;
  /**
   * For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` and `perMessageGroupId`.
   *
   * To enable high throughput for a FIFO queue, set this attribute to `perMessageGroupId` _and_ set the `DeduplicationScope` attribute to `messageGroup`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the _Amazon SQS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FifoThroughputLimit?: Value<string>;
  /**
   * The ID of an AWS Key Management Service (KMS) for Amazon SQS, or a custom KMS. To use the AWS managed KMS for Amazon SQS, specify a (default) alias ARN, alias name (e.g. `alias/aws/sqs`), key ARN, or key ID. For more information, see the following:
   */
  KmsMasterKeyId?: Value<string>;
  /**
   * If set to true, creates a FIFO queue. If you don't specify this property, Amazon SQS creates a standard queue. For more information, see [FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html) in the _Amazon SQS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FifoQueue?: Value<boolean>;
  /**
   * The limit of how many bytes that a message can contain before Amazon SQS rejects it. You can specify an integer value from `1,024` bytes (1 KiB) to `262,144` bytes (256 KiB). The default value is `262,144` (256 KiB).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumMessageSize?: Value<number>;
  /**
   * The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
   *
   * Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.
   *
   * For more information about Amazon SQS queue visibility timeouts, see [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html) in the _Amazon SQS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibilityTimeout?: Value<number>;
  /**
   * The length of time in seconds for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
   *
   * A shorter time period provides better security, but results in more calls to AWS KMS, which might incur charges after Free Tier. For more information, see [Encryption at rest](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work) in the _Amazon SQS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsDataKeyReusePeriodSeconds?: Value<number>;
  /**
   * The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:
   */
  RedriveAllowPolicy?: { [key: string]: any };
  /**
   * Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, [SSE-KMS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html) or [SSE-SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html)).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqsManagedSseEnabled?: Value<boolean>;
  /**
   * The time in seconds for which the delivery of all messages in the queue is delayed. You can specify an integer value of `0` to `900` (15 minutes). The default value is `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DelaySeconds?: Value<number>;
  /**
   * The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:
   */
  RedrivePolicy?: { [key: string]: any };
  /**
   * The number of seconds that Amazon SQS retains a message. You can specify an integer value from `60` seconds (1 minute) to `1,209,600` seconds (14 days). The default value is `345,600` seconds (4 days).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageRetentionPeriod?: Value<number>;
  /**
   * For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue`.
   *
   * To enable high throughput for a FIFO queue, set this attribute to `messageGroup` _and_ set the `FifoThroughputLimit` attribute to `perMessageGroupId`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see [High throughput for FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html) and [Quotas related to messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html) in the _Amazon SQS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeduplicationScope?: Value<string>;
  /**
   * For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, Amazon SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the `ContentBasedDeduplication` attribute for the `[CreateQueue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html)` action in the _Amazon SQS API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentBasedDeduplication?: Value<boolean>;
  /**
   * A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the `.fifo` suffix. For more information, see [FIFO queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html) in the _Amazon SQS Developer Guide_.
   *
   * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the queue name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) in the _AWS CloudFormation User Guide_.
   *
   * If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  QueueName?: Value<string>;
  /**
   * The tags that you attach to this queue. For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::SQS::Queue` resource creates an Amazon SQS standard or FIFO queue.
 *
 * Keep the following caveats in mind:
 *
 * For more information about creating FIFO (first-in-first-out) queues, see [Creating an Amazon SQS queue (AWS CloudFormation)](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/screate-queue-cloudformation.html) in the _Amazon SQS Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html}
 */
export interface SQSQueueResource {
  Type: 'AWS::SQS::Queue';
  Properties: SQSQueueProperties;
}
