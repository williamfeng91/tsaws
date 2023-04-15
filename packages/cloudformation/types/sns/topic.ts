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

/**
 * `Subscription` is an embedded property that describes the subscription endpoints of an Amazon SNS topic.
 *
 * **Note**
 *
 * For full control over subscription behavior (for example, delivery policy, filtering, raw message delivery, and cross-region subscriptions), use the [AWS::SNS::Subscription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-subscription.html}
 **/
export interface SNSTopicSubscription {
  /**
   * The endpoint that receives notifications from the Amazon SNS topic. The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the _Amazon SNS API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint: Value<string>;
  /**
   * The subscription's protocol. For more information, see the `Protocol` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the _Amazon SNS API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
}
export interface SNSTopicProperties {
  /**
   * The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, `SignatureVersion` is set to `1`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SignatureVersion?: Value<string>;
  /**
   * The ID of an AWS managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see `[KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters)` in the _AWS Key Management Service API Reference_.
   *
   * This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsMasterKeyId?: Value<string>;
  /**
   * Tracing mode of an Amazon SNS topic. By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to `Active`, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true. Only supported on standard topics.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TracingConfig?: Value<string>;
  /**
   * The display name to use for an Amazon SNS topic with SMS subscriptions. The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayName?: Value<string>;
  /**
   * Set to true to create a FIFO topic.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FifoTopic?: Value<boolean>;
  /**
   * Enables content-based deduplication for FIFO topics.
   */
  ContentBasedDeduplication?: Value<boolean>;
  /**
   * The Amazon SNS subscriptions (endpoints) for this topic.
   *
   * If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-sns-topic-subscription.md) of [Subscription](aws-properties-sns-topic-subscription.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subscription?: List<SNSTopicSubscription>;
  /**
   * The list of tags to add to a new topic.
   *
   * To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The body of the policy document you want to use for this topic.
   *
   * You can only add one policy per topic.
   *
   * The policy must be in JSON string format.
   *
   * Length Constraints: Maximum length of 30,720.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataProtectionPolicy?: { [key: string]: any };
  /**
   * The name of the topic you want to create. Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo`.
   *
   * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TopicName?: Value<string>;
}

/**
 * The `AWS::SNS::Topic` resource creates a topic to which notifications can be published.
 *
 * **Note**
 *
 * One account can create a maximum of 100,000 standard topics and 1,000 FIFO topics. For more information, see [Amazon SNS endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/sns.html) in the _AWS General Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html}
 */
export interface SNSTopicResource {
  Type: 'AWS::SNS::Topic';
  Properties: SNSTopicProperties;
}
