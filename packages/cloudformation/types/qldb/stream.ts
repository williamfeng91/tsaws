/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qldb-stream-kinesisconfiguration.html}
 **/
export interface QLDBStreamKinesisConfiguration {
  /**
   * Enables QLDB to publish multiple data records in a single Kinesis Data Streams record, increasing the number of records sent per API call.
   *
   * Default: `True`
   *
   * Record aggregation has important implications for processing records and requires de-aggregation in your stream consumer. To learn more, see [KPL Key Concepts](https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-concepts.html) and [Consumer De-aggregation](https://docs.aws.amazon.com/streams/latest/dev/kinesis-kpl-consumer-deaggregation.html) in the _Amazon Kinesis Data Streams Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AggregationEnabled?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the Kinesis Data Streams resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StreamArn?: Value<string>;
}
export interface QLDBStreamProperties {
  /**
   * The inclusive start date and time from which to start streaming journal data. This parameter must be in `ISO 8601` date and time format and in Universal Coordinated Time (UTC). For example: `2019-06-13T21:36:34Z`.
   *
   * The `InclusiveStartTime` cannot be in the future and must be before `ExclusiveEndTime`.
   *
   * If you provide an `InclusiveStartTime` that is before the ledger's `CreationDateTime`, QLDB effectively defaults it to the ledger's `CreationDateTime`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InclusiveStartTime: Value<string>;
  /**
   * The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.
   *
   * Your stream name must be unique among other _active_ streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in [Quotas in Amazon QLDB](https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming) in the _Amazon QLDB Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StreamName: Value<string>;
  /**
   * The configuration settings of the Kinesis Data Streams destination for your stream request.
   *
   * _Required_: Yes
   *
   * _Type_: [KinesisConfiguration](aws-properties-qldb-stream-kinesisconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KinesisConfiguration: QLDBStreamKinesisConfiguration;
  /**
   * The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it.
   *
   * The `ExclusiveEndTime` must be in `ISO 8601` date and time format and in Universal Coordinated Time (UTC). For example: `2019-06-13T21:36:34Z`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExclusiveEndTime?: Value<string>;
  /**
   * The name of the ledger.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LedgerName: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.
   *
   * To pass a role to QLDB when requesting a journal stream, you must have permissions to perform the `iam:PassRole` action on the IAM role resource. This is required for all journal stream requests.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
 * The `AWS::QLDB::Stream` resource specifies a journal stream for a given Amazon Quantum Ledger Database (Amazon QLDB) ledger. The stream captures every document revision that is committed to the ledger's journal and delivers the data to a specified Amazon Kinesis Data Streams resource.
 *
 * For more information, see [StreamJournalToKinesis](https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html) in the _Amazon QLDB API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-stream.html}
 */
export interface QLDBStreamResource {
  Type: 'AWS::QLDB::Stream';
  Properties: QLDBStreamProperties;
}
