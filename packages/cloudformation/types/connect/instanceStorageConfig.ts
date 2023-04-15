/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Configuration information of a Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisfirehoseconfig.html}
 **/
export interface ConnectInstanceStorageConfigKinesisFirehoseConfig {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirehoseArn: Value<string>;
}

/**
 * Configuration information of a Kinesis data stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisstreamconfig.html}
 **/
export interface ConnectInstanceStorageConfigKinesisStreamConfig {
  /**
   * The Amazon Resource Name (ARN) of the data stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamArn: Value<string>;
}

/**
 * Information about the Amazon Simple Storage Service (Amazon S3) storage type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-s3config.html}
 **/
export interface ConnectInstanceStorageConfigS3Config {
  /**
   * The S3 bucket name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The S3 bucket prefix.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketPrefix: Value<string>;
  /**
   * The Amazon S3 encryption configuration.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfig](aws-properties-connect-instancestorageconfig-encryptionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfig?: ConnectInstanceStorageConfigEncryptionConfig;
}

/**
 * The encryption configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-encryptionconfig.html}
 **/
export interface ConnectInstanceStorageConfigEncryptionConfig {
  /**
   * The type of encryption.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `KMS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionType: Value<string>;
  /**
   * The full ARN of the encryption key.
   *
   * Be sure to provide the full ARN of the encryption key, not just the ID.
   *
   * Amazon Connect supports only KMS keys with the default key spec of [https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default](https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyId: Value<string>;
}

/**
 * Configuration information of a Kinesis video stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html}
 **/
export interface ConnectInstanceStorageConfigKinesisVideoStreamConfig {
  /**
   * The prefix of the video stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix: Value<string>;
  /**
   * The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.
   *
   * The default value is 0, indicating that the stream does not persist data.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `87600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionPeriodHours: Value<number>;
  /**
   * The encryption configuration.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfig](aws-properties-connect-instancestorageconfig-encryptionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfig?: ConnectInstanceStorageConfigEncryptionConfig;
}
export interface ConnectInstanceStorageConfigProperties {
  /**
   * The configuration of the Kinesis data stream.
   *
   * _Required_: No
   *
   * _Type_: [KinesisStreamConfig](aws-properties-connect-instancestorageconfig-kinesisstreamconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamConfig?: ConnectInstanceStorageConfigKinesisStreamConfig;
  /**
   * The S3 bucket configuration.
   *
   * _Required_: No
   *
   * _Type_: [S3Config](aws-properties-connect-instancestorageconfig-s3config.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Config?: ConnectInstanceStorageConfigS3Config;
  /**
   * A valid storage type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `KINESIS_FIREHOSE | KINESIS_STREAM | KINESIS_VIDEO_STREAM | S3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageType: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceArn: Value<string>;
  /**
   * A valid resource type. Following are the valid resource types: `CHAT_TRANSCRIPTS` | `CALL_RECORDINGS` | `SCHEDULED_REPORTS` | `MEDIA_STREAMS` | `CONTACT_TRACE_RECORDS` | `AGENT_EVENTS`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceType: Value<string>;
  /**
   * The configuration of the Kinesis video stream.
   *
   * _Required_: No
   *
   * _Type_: [KinesisVideoStreamConfig](aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisVideoStreamConfig?: ConnectInstanceStorageConfigKinesisVideoStreamConfig;
  /**
   * The configuration of the Kinesis Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseConfig](aws-properties-connect-instancestorageconfig-kinesisfirehoseconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseConfig?: ConnectInstanceStorageConfigKinesisFirehoseConfig;
}

/**
 * The storage configuration for the instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html}
 */
export interface ConnectInstanceStorageConfigResource {
  Type: 'AWS::Connect::InstanceStorageConfig';
  Properties: ConnectInstanceStorageConfigProperties;
}
