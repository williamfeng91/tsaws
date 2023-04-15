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
 * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streammodedetails.html}
 **/
export interface KinesisStreamStreamModeDetails {
  /**
   * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ON_DEMAND | PROVISIONED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamMode: Value<string>;
}

/**
 * Enables or updates server-side encryption using an AWS KMS key for a specified stream.
 *
 * **Note**
 *
 * When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to `UPDATING`. After the update is complete, Kinesis Data Streams sets the status of the stream back to `ACTIVE`. Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is `UPDATING`. Once the status of the stream is `ACTIVE`, encryption begins for records written to the stream.
 *
 * API Limits: You can successfully apply a new AWS KMS key for server-side encryption 25 times in a rolling 24-hour period.
 *
 * Note: It can take up to 5 seconds after the stream is in an `ACTIVE` status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from `PutRecord` or `PutRecords`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html}
 **/
export interface KinesisStreamStreamEncryption {
  /**
   * The encryption type to use. The only valid value is `KMS`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionType: Value<string>;
  /**
   * The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias `aws/kinesis`.
   */
  KeyId: Value<string>;
}
export interface KinesisStreamProperties {
  /**
   * Specifies the capacity mode to which you want to set your data stream. Currently, in Kinesis Data Streams, you can choose between an **on-demand** capacity mode and a **provisioned** capacity mode for your data streams.
   *
   * _Required_: No
   *
   * _Type_: [StreamModeDetails](aws-properties-kinesis-stream-streammodedetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamModeDetails?: KinesisStreamStreamModeDetails;
  /**
   * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream. Removing this property from your stack template and updating your stack disables encryption.
   *
   * _Required_: No
   *
   * _Type_: [StreamEncryption](aws-properties-kinesis-stream-streamencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamEncryption?: KinesisStreamStreamEncryption;
  /**
   * The number of hours for the data records that are stored in shards to remain accessible. The default value is 24. For more information about the stream retention period, see [Changing the Data Retention Period](https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html) in the Amazon Kinesis Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionPeriodHours?: Value<number>;
  /**
   * An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream. For information about constraints for this property, see [Tag Restrictions](https://docs.aws.amazon.com/streams/latest/dev/tagging.html#tagging-restrictions) in the _Amazon Kinesis Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the Kinesis stream. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the stream name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
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
  Name?: Value<string>;
  /**
   * The number of shards that the stream uses. For greater provisioned throughput, increase the number of shards.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShardCount?: Value<number>;
}

/**
 * Creates a Kinesis stream that captures and transports data records that are emitted from data sources. For information about creating streams, see [CreateStream](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html) in the Amazon Kinesis API Reference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html}
 */
export interface KinesisStreamResource {
  Type: 'AWS::Kinesis::Stream';
  Properties: KinesisStreamProperties;
}
