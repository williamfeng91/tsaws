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
 * Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see [Kinesis Data Firehose Record Format Conversion](https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamDataFormatConversionConfiguration {
  /**
   * Specifies the deserializer that you want Kinesis Data Firehose to use to convert the format of your data from JSON. This parameter is required if `Enabled` is set to true.
   *
   * _Required_: No
   *
   * _Type_: [InputFormatConfiguration](aws-properties-kinesisfirehose-deliverystream-inputformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputFormatConfiguration?: KinesisFirehoseDeliveryStreamInputFormatConfiguration;
  /**
   * Defaults to `true`. Set it to `false` if you want to disable format conversion while preserving the configuration details.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Specifies the AWS Glue Data Catalog table that contains the column information. This parameter is required if `Enabled` is set to true.
   *
   * _Required_: No
   *
   * _Type_: [SchemaConfiguration](aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchemaConfiguration?: KinesisFirehoseDeliveryStreamSchemaConfiguration;
  /**
   * Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data to the Parquet or ORC format. This parameter is required if `Enabled` is set to true.
   *
   * _Required_: No
   *
   * _Type_: [OutputFormatConfiguration](aws-properties-kinesisfirehose-deliverystream-outputformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputFormatConfiguration?: KinesisFirehoseDeliveryStreamOutputFormatConfiguration;
}

/**
 * Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if `Enabled` is set to true.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamSchemaConfiguration {
  /**
   * Specifies the table version for the output data schema. If you don't specify this version ID, or if you set it to `LATEST`, Kinesis Data Firehose uses the most recent version. This means that any updates to the table are automatically picked up.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^S+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionId?: Value<string>;
  /**
   * Specifies the AWS Glue table that contains the column information that constitutes your data schema.
   *
   * If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `TableName` property is required and its value must be specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^S+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName?: Value<string>;
  /**
   * Specifies the name of the AWS Glue database that contains the schema for the output data.
   *
   * If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `DatabaseName` property is required and its value must be specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^S+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * If you don't specify an AWS Region, the default is the current Region.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^S+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region?: Value<string>;
  /**
   * The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is used by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^S+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogId?: Value<string>;
  /**
   * The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed.
   *
   * If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `RoleARN` property is required and its value must be specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^S+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN?: Value<string>;
}

/**
 * The `SplunkRetryOptions` property type specifies retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk or if it doesn't receive an acknowledgment from Splunk.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkretryoptions.html}
 **/
export interface KinesisFirehoseDeliveryStreamSplunkRetryOptions {
  /**
   * The total amount of time that Kinesis Data Firehose spends on retries. This duration starts after the initial attempt to send data to Splunk fails. It doesn't include the periods during which Kinesis Data Firehose waits for acknowledgment from Splunk after each attempt.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `7200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInSeconds?: Value<number>;
}

/**
 * The configuration of the HTTP endpoint request. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamHttpEndpointRequestConfiguration {
  /**
   * Describes the metadata sent to the HTTP endpoint destination.
   *
   * _Required_: No
   *
   * _Type_: List of [HttpEndpointCommonAttribute](aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CommonAttributes?: List<KinesisFirehoseDeliveryStreamHttpEndpointCommonAttribute>;
  /**
   * Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. For more information, see Content-Encoding in MDN Web Docs, the official Mozilla documentation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GZIP | NONE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentEncoding?: Value<string>;
}

/**
 * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
  /**
   * The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessKey?: Value<string>;
  /**
   * The URL of the HTTP endpoint selected as the destination.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `https://.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url: Value<string>;
  /**
   * The name of the HTTP endpoint selected as the destination.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^(?!s*$).+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html}
 **/
export interface KinesisFirehoseDeliveryStreamOpenXJsonSerDe {
  /**
   * When set to `true`, specifies that the names of the keys include dots and that you want Kinesis Data Firehose to replace them with underscores. This is useful because Apache Hive does not allow dots in column names. For example, if the JSON contains a key whose name is "a.b", you can define the column name to be "a_b" when using this option.
   *
   * The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConvertDotsInJsonKeysToUnderscores?: Value<boolean>;
  /**
   * Maps column names to JSON keys that aren't identical to the column names. This is useful when the JSON contains keys that are Hive keywords. For example, `timestamp` is a Hive keyword. If you have a JSON key named `timestamp`, set this parameter to `{"ts": "timestamp"}` to map this key to a column named `ts`.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnToJsonKeyMappings?: { [key: string]: Value<string> };
  /**
   * When set to `true`, which is the default, Kinesis Data Firehose converts JSON keys to lowercase before deserializing them.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaseInsensitive?: Value<boolean>;
}

/**
 * The `ElasticsearchBufferingHints` property type specifies how Amazon Kinesis Data Firehose (Kinesis Data Firehose) buffers incoming data while delivering it to the destination. The first buffer condition that is satisfied triggers Kinesis Data Firehose to deliver the data.
 *
 * ElasticsearchBufferingHints is the property type for the `BufferingHints` property of the [Amazon Kinesis Data Firehose DeliveryStream ElasticsearchDestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.html}
 **/
export interface KinesisFirehoseDeliveryStreamElasticsearchBufferingHints {
  /**
   * The length of time, in seconds, that Kinesis Data Firehose buffers incoming data before delivering it to the destination. For valid values, see the `IntervalInSeconds` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `60`
   *
   * _Maximum_: `900`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalInSeconds?: Value<number>;
  /**
   * The size of the buffer, in MBs, that Kinesis Data Firehose uses for incoming data before delivering it to the destination. For valid values, see the `SizeInMBs` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeInMBs?: Value<number>;
}

/**
 * The `CloudWatchLoggingOptions` property type specifies Amazon CloudWatch Logs (CloudWatch Logs) logging options that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses for the delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html}
 **/
export interface KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions {
  /**
   * The name of the CloudWatch Logs log stream that Kinesis Data Firehose uses to send logs about data delivery.
   *
   * Conditional. If you enable logging, you must specify this property.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[^:*]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogStreamName?: Value<string>;
  /**
   * Indicates whether CloudWatch Logs logging is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The name of the CloudWatch Logs log group that contains the log stream that Kinesis Data Firehose will use.
   *
   * Conditional. If you enable logging, you must specify this property.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[.-_/#A-Za-z0-9]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupName?: Value<string>;
}

/**
 * The `ProcessorParameter` property specifies a processor parameter in a data processor for an Amazon Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processorparameter.html}
 **/
export interface KinesisFirehoseDeliveryStreamProcessorParameter {
  /**
   * The parameter value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `5120`
   *
   * _Pattern_: `^(?!s*$).+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValue: Value<string>;
  /**
   * The name of the parameter. Currently the following default values are supported: 3 for `NumberOfRetries` and 60 for the `BufferIntervalInSeconds`. The `BufferSizeInMBs` ranges between 0.2 MB and up to 3MB. The default buffering hint is 1MB for all destinations, except Splunk. For Splunk, the default buffering hint is 256 KB.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BufferIntervalInSeconds | BufferSizeInMBs | Delimiter | JsonParsingEngine | LambdaArn | MetadataExtractionQuery | NumberOfRetries | RoleArn | SubRecordType`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName: Value<string>;
}

/**
 * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.html}
 **/
export interface KinesisFirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput {
  /**
   * Indicates the type of customer master key (CMK) to use for encryption. The default setting is `AWS_OWNED_CMK`. For more information about CMKs, see [Customer Master Keys (CMKs)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys).
   *
   * You can use a CMK of type CUSTOMER_MANAGED_CMK to encrypt up to 500 delivery streams.
   *
   * To encrypt your delivery stream, use symmetric CMKs. Kinesis Data Firehose doesn't support asymmetric CMKs. For information about symmetric and asymmetric CMKs, see [About Symmetric and Asymmetric CMKs](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html) in the AWS Key Management Service developer guide.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AWS_OWNED_CMK | CUSTOMER_MANAGED_CMK`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyType: Value<string>;
  /**
   * If you set `KeyType` to `CUSTOMER_MANAGED_CMK`, you must specify the Amazon Resource Name (ARN) of the CMK. If you set `KeyType` to ` AWS_OWNED_CMK`, Kinesis Data Firehose uses a service-account CMK.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyARN?: Value<string>;
}

/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.html}
 **/
export interface KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessRetryOptions {
  /**
   * After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `7200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInSeconds?: Value<number>;
}

/**
 * The `KMSEncryptionConfig` property type specifies the AWS Key Management Service (AWS KMS) encryption key that Amazon Simple Storage Service (Amazon S3) uses to encrypt data delivered by the Amazon Kinesis Data Firehose (Kinesis Data Firehose) stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kmsencryptionconfig.html}
 **/
export interface KinesisFirehoseDeliveryStreamKMSEncryptionConfig {
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS encryption key that Amazon S3 uses to encrypt data delivered by the Kinesis Data Firehose stream. The key must belong to the same region as the destination S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AWSKMSKeyARN: Value<string>;
}

/**
 * Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if `Enabled` is set to true.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-outputformatconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamOutputFormatConfiguration {
  /**
   * Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet SerDe. If both are non-null, the server rejects the request.
   *
   * _Required_: No
   *
   * _Type_: [Serializer](aws-properties-kinesisfirehose-deliverystream-serializer.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Serializer?: KinesisFirehoseDeliveryStreamSerializer;
}

/**
 * The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the `Serializer`. Kinesis Data Firehose supports two types of deserializers: the [Apache Hive JSON SerDe](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON) and the [OpenX JSON SerDe](https://github.com/rcongiu/Hive-JSON-Serde).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deserializer.html}
 **/
export interface KinesisFirehoseDeliveryStreamDeserializer {
  /**
   * The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
   *
   * _Required_: No
   *
   * _Type_: [HiveJsonSerDe](aws-properties-kinesisfirehose-deliverystream-hivejsonserde.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HiveJsonSerDe?: KinesisFirehoseDeliveryStreamHiveJsonSerDe;
  /**
   * The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
   *
   * _Required_: No
   *
   * _Type_: [OpenXJsonSerDe](aws-properties-kinesisfirehose-deliverystream-openxjsonserde.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenXJsonSerDe?: KinesisFirehoseDeliveryStreamOpenXJsonSerDe;
}

/**
 * Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.html}
 **/
export interface KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessBufferingHints {
  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `60`
   *
   * _Maximum_: `900`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalInSeconds?: Value<number>;
  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
   *
   * We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeInMBs?: Value<number>;
}

/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.html}
 **/
export interface KinesisFirehoseDeliveryStreamRedshiftRetryOptions {
  /**
   * The length of time during which Kinesis Data Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Kinesis Data Firehose does not retry if the value of `DurationInSeconds` is 0 (zero) or if the first delivery attempt takes longer than the current value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `7200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInSeconds?: Value<number>;
}

/**
 * The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamS3DestinationConfiguration {
  /**
   * A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorOutputPrefix?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket to send data to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketARN: Value<string>;
  /**
   * Configures how Kinesis Data Firehose buffers incoming data while delivering it to the Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: [BufferingHints](aws-properties-kinesisfirehose-deliverystream-bufferinghints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferingHints?: KinesisFirehoseDeliveryStreamBufferingHints;
  /**
   * The type of compression that Kinesis Data Firehose uses to compress the data that it delivers to the Amazon S3 bucket. For valid values, see the `CompressionFormat` content for the [S3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_S3DestinationConfiguration.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GZIP | HADOOP_SNAPPY | Snappy | UNCOMPRESSED | ZIP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CompressionFormat?: Value<string>;
  /**
   * Configures Amazon Simple Storage Service (Amazon S3) server-side encryption. Kinesis Data Firehose uses AWS Key Management Service (AWS KMS) to encrypt the data that it delivers to your Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfiguration](aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfiguration?: KinesisFirehoseDeliveryStreamEncryptionConfiguration;
  /**
   * A prefix that Kinesis Data Firehose adds to the files that it delivers to the Amazon S3 bucket. The prefix helps you identify the files that Kinesis Data Firehose delivered.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * The CloudWatch logging options for your delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  /**
   * The ARN of an AWS Identity and Access Management (IAM) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS (if you enable data encryption). For more information, see [Grant Kinesis Data Firehose Access to an Amazon S3 Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3) in the _Amazon Kinesis Data Firehose Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN: Value<string>;
}

/**
 * The details of the VPC of the Amazon ES destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamVpcConfiguration {
  /**
   * The IDs of the subnets that Kinesis Data Firehose uses to create ENIs in the VPC of the Amazon ES destination. Make sure that the routing tables and inbound and outbound rules allow traffic to flow from the subnets whose IDs are specified here to the subnets that have the destination Amazon ES endpoints. Kinesis Data Firehose creates at least one ENI in each of the subnets that are specified here. Do not delete or modify these ENIs.
   *
   * The number of ENIs that Kinesis Data Firehose creates in the subnets specified here scales up and down automatically based on throughput. To enable Kinesis Data Firehose to scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To help you calculate the quota you need, assume that Kinesis Data Firehose can create up to three ENIs for this delivery stream for each of the subnets specified here.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds: List<Value<string>>;
  /**
   * The IDs of the security groups that you want Kinesis Data Firehose to use when it creates ENIs in the VPC of the Amazon ES destination. You can use the same security group that the Amazon ES domain uses or different ones. If you specify different security groups here, ensure that they allow outbound HTTPS traffic to the Amazon ES domain's security group. Also ensure that the Amazon ES domain's security group allows HTTPS traffic from the security groups specified here. If you use the same security group for both your delivery stream and the Amazon ES domain, make sure the security group inbound rule allows HTTPS traffic.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds: List<Value<string>>;
  /**
   * The ARN of the IAM role that you want the delivery stream to use to create endpoints in the destination VPC. You can use your existing Kinesis Data Firehose delivery role or you can specify a new role. In either case, make sure that the role trusts the Kinesis Data Firehose service principal and that it grants the following permissions:
   */
  RoleARN: Value<string>;
}

/**
 * The `ExtendedS3DestinationConfiguration` property type configures an Amazon S3 destination for an Amazon Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamExtendedS3DestinationConfiguration {
  /**
   * A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorOutputPrefix?: Value<string>;
  /**
   * The configuration for backup in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupConfiguration?: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket. For constraints, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketARN: Value<string>;
  /**
   * The compression format. If no value is specified, the default is `UNCOMPRESSED`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GZIP | HADOOP_SNAPPY | Snappy | UNCOMPRESSED | ZIP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CompressionFormat?: Value<string>;
  /**
   * The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [DataFormatConversionConfiguration](aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamDataFormatConversionConfiguration;
  /**
   * The encryption configuration for the Kinesis Data Firehose delivery stream. The default value is `NoEncryption`.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfiguration](aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfiguration?: KinesisFirehoseDeliveryStreamEncryptionConfiguration;
  /**
   * The configuration of the dynamic partitioning mechanism that creates targeted data sets from the streaming data by partitioning it based on partition keys.
   *
   * _Required_: No
   *
   * _Type_: [DynamicPartitioningConfiguration](aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicPartitioningConfiguration?: KinesisFirehoseDeliveryStreamDynamicPartitioningConfiguration;
  /**
   * The `YYYY/MM/DD/HH` time format prefix is automatically used for delivered Amazon S3 files. For more information, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * The data processing configuration for the Kinesis Data Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the AWS credentials. For constraints, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN: Value<string>;
  /**
   * The Amazon S3 backup mode. After you create a delivery stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the delivery stream to disable it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupMode?: Value<string>;
  /**
   * The buffering option.
   *
   * _Required_: No
   *
   * _Type_: [BufferingHints](aws-properties-kinesisfirehose-deliverystream-bufferinghints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferingHints?: KinesisFirehoseDeliveryStreamBufferingHints;
  /**
   * The Amazon CloudWatch logging options for your delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
}

/**
 * Describes the configuration of the HTTP endpoint destination. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamHttpEndpointDestinationConfiguration {
  /**
   * The configuration of the request sent to the HTTP endpoint specified as the destination.
   *
   * _Required_: No
   *
   * _Type_: [HttpEndpointRequestConfiguration](aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointRequestConfiguration;
  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * The buffering options that can be used before data is delivered to the specified destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The SizeInMBs and IntervalInSeconds parameters are optional. However, if you specify a value for one of them, you must also provide a value for the other.
   *
   * _Required_: No
   *
   * _Type_: [BufferingHints](aws-properties-kinesisfirehose-deliverystream-bufferinghints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferingHints?: KinesisFirehoseDeliveryStreamBufferingHints;
  /**
   * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
   *
   * _Required_: No
   *
   * _Type_: [RetryOptions](aws-properties-kinesisfirehose-deliverystream-retryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryOptions?: KinesisFirehoseDeliveryStreamRetryOptions;
  /**
   * The configuration of the HTTP endpoint selected as the destination.
   *
   * _Required_: Yes
   *
   * _Type_: [HttpEndpointConfiguration](aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointConfiguration: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
  /**
   * Describes the data processing configuration.
   *
   * _Required_: No
   *
   * _Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  /**
   * Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN?: Value<string>;
  /**
   * Describes the Amazon CloudWatch logging options for your delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  /**
   * Describes the S3 bucket backup options for the data that Kinesis Data Firehose delivers to the HTTP endpoint destination. You can back up all documents (AllData) or only the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint destination (FailedDataOnly).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AllData | FailedDataOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupMode?: Value<string>;
}

/**
 * The `EncryptionConfiguration` property type specifies the encryption settings that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses when delivering data to Amazon Simple Storage Service (Amazon S3).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamEncryptionConfiguration {
  /**
   * The AWS Key Management Service (AWS KMS) encryption key that Amazon S3 uses to encrypt your data.
   *
   * _Required_: No
   *
   * _Type_: [KMSEncryptionConfig](aws-properties-kinesisfirehose-deliverystream-kmsencryptionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KMSEncryptionConfig?: KinesisFirehoseDeliveryStreamKMSEncryptionConfig;
  /**
   * Disables encryption. For valid values, see the `NoEncryptionConfig` content for the [EncryptionConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_EncryptionConfiguration.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NoEncryption`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoEncryptionConfig?: Value<string>;
}

/**
 * Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if `Enabled` is set to true.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-inputformatconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamInputFormatConfiguration {
  /**
   * Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. If both are non-null, the server rejects the request.
   *
   * _Required_: No
   *
   * _Type_: [Deserializer](aws-properties-kinesisfirehose-deliverystream-deserializer.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Deserializer?: KinesisFirehoseDeliveryStreamDeserializer;
}

/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions.html}
 **/
export interface KinesisFirehoseDeliveryStreamAmazonopensearchserviceRetryOptions {
  /**
   * After an initial failure to deliver to Amazon OpenSearch Service, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `7200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInSeconds?: Value<number>;
}

/**
 * The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-hivejsonserde.html}
 **/
export interface KinesisFirehoseDeliveryStreamHiveJsonSerDe {
  /**
   * Indicates how you want Kinesis Data Firehose to parse the date and timestamps that may be present in your input data JSON. To specify these format strings, follow the pattern syntax of JodaTime's DateTimeFormat format strings. For more information, see [Class DateTimeFormat](https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html). You can also use the special value `millis` to parse timestamps in epoch milliseconds. If you don't specify a format, Kinesis Data Firehose uses `java.sql.Timestamp::valueOf` by default.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampFormats?: List<Value<string>>;
}

/**
 * The `Processor` property specifies a data processor for an Amazon Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processor.html}
 **/
export interface KinesisFirehoseDeliveryStreamProcessor {
  /**
   * The type of processor. Valid values: `Lambda`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AppendDelimiterToRecord | Lambda | MetadataExtraction | RecordDeAggregation`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The processor parameters.
   *
   * _Required_: No
   *
   * _Type_: List of [ProcessorParameter](aws-properties-kinesisfirehose-deliverystream-processorparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: List<KinesisFirehoseDeliveryStreamProcessorParameter>;
}

/**
 * Describes the configuration of a destination in Amazon OpenSearch Service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration {
  /**
   * The Amazon OpenSearch Service type name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeName?: Value<string>;
  /**
   * The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp to the IndexName to facilitate the expiration of old data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NoRotation | OneDay | OneHour | OneMonth | OneWeek`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexRotationPeriod?: Value<string>;
  /**
   * Describes a data processing configuration.
   *
   * _Required_: No
   *
   * _Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  /**
   * The endpoint to use when communicating with the cluster. Specify either this ClusterEndpoint or the DomainARN field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `https:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterEndpoint?: Value<string>;
  /**
   * The ARN of the Amazon OpenSearch Service domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainARN?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN: Value<string>;
  /**
   * Defines how documents should be delivered to Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AllDocuments | FailedDocumentsOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupMode?: Value<string>;
  /**
   * The Amazon OpenSearch Service index name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `80`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexName: Value<string>;
  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
   *
   * _Required_: No
   *
   * _Type_: [AmazonopensearchserviceBufferingHints](aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferingHints?: KinesisFirehoseDeliveryStreamAmazonopensearchserviceBufferingHints;
  /**
   * The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * _Required_: No
   *
   * _Type_: [AmazonopensearchserviceRetryOptions](aws-properties-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryOptions?: KinesisFirehoseDeliveryStreamAmazonopensearchserviceRetryOptions;
  /**
   * The details of the VPC of the Amazon OpenSearch Service destination.
   *
   * _Required_: No
   *
   * _Type_: [VpcConfiguration](aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfiguration?: KinesisFirehoseDeliveryStreamVpcConfiguration;
  /**
   * Describes the Amazon CloudWatch logging options for your delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
}

/**
 * The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the [ORC SerDe](https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html) and the [Parquet SerDe](https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-serializer.html}
 **/
export interface KinesisFirehoseDeliveryStreamSerializer {
  /**
   * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see [Apache ORC](https://orc.apache.org/docs/).
   *
   * _Required_: No
   *
   * _Type_: [OrcSerDe](aws-properties-kinesisfirehose-deliverystream-orcserde.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrcSerDe?: KinesisFirehoseDeliveryStreamOrcSerDe;
  /**
   * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see [Apache Parquet](https://parquet.apache.org/documentation/latest/).
   *
   * _Required_: No
   *
   * _Type_: [ParquetSerDe](aws-properties-kinesisfirehose-deliverystream-parquetserde.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParquetSerDe?: KinesisFirehoseDeliveryStreamParquetSerDe;
}

/**
 * The `CopyCommand` property type configures the Amazon Redshift `COPY` command that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses to load data into an Amazon Redshift cluster from an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-copycommand.html}
 **/
export interface KinesisFirehoseDeliveryStreamCopyCommand {
  /**
   * The name of the target table. The table must already exist in the database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTableName: Value<string>;
  /**
   * Parameters to use with the Amazon Redshift `COPY` command. For examples, see the `CopyOptions` content for the [CopyCommand](https://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `204800`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyOptions?: Value<string>;
  /**
   * A comma-separated list of column names.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `204800`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTableColumns?: Value<string>;
}

/**
 * The `DynamicPartitioningConfiguration` property type specifies the configuration of the dynamic partitioning mechanism that creates targeted data sets from the streaming data by partitioning it based on partition keys.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamDynamicPartitioningConfiguration {
  /**
   * Specifies whether dynamic partitioning is enabled for this Kinesis Data Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Specifies the retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.
   *
   * _Required_: No
   *
   * _Type_: [RetryOptions](aws-properties-kinesisfirehose-deliverystream-retryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryOptions?: KinesisFirehoseDeliveryStreamRetryOptions;
}

/**
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see [Apache ORC](https://orc.apache.org/docs/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html}
 **/
export interface KinesisFirehoseDeliveryStreamOrcSerDe {
  /**
   * A number between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is 0.05, which means 5 percent of stripe size.
   *
   * For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task.
   *
   * Kinesis Data Firehose ignores this parameter when `EnablePadding` is `false`.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaddingTolerance?: Value<number>;
  /**
   * The compression code to use over data blocks. The default is `SNAPPY`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | SNAPPY | ZLIB`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Compression?: Value<string>;
  /**
   * The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `8388608`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StripeSizeBytes?: Value<number>;
  /**
   * The column names for which you want Kinesis Data Firehose to create bloom filters. The default is `null`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BloomFilterColumns?: List<Value<string>>;
  /**
   * The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BloomFilterFalsePositiveProbability?: Value<number>;
  /**
   * Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnablePadding?: Value<boolean>;
  /**
   * The version of the file to write. The possible values are `V0_11` and `V0_12`. The default is `V0_12`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `V0_11 | V0_12`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatVersion?: Value<string>;
  /**
   * The number of rows between index entries. The default is 10,000 and the minimum is 1,000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowIndexStride?: Value<number>;
  /**
   * The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `67108864`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockSizeBytes?: Value<number>;
  /**
   * Represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to 1.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DictionaryKeyThreshold?: Value<number>;
}

/**
 * The `SplunkDestinationConfiguration` property type specifies the configuration of a destination in Splunk for a Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamSplunkDestinationConfiguration {
  /**
   * The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HECEndpoint: Value<string>;
  /**
   * The configuration for the backup Amazon S3 location.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * This is a GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HECToken: Value<string>;
  /**
   * The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk, or if it doesn't receive an acknowledgment of receipt from Splunk.
   *
   * _Required_: No
   *
   * _Type_: [SplunkRetryOptions](aws-properties-kinesisfirehose-deliverystream-splunkretryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryOptions?: KinesisFirehoseDeliveryStreamSplunkRetryOptions;
  /**
   * This type can be either `Raw` or `Event`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Event | Raw`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HECEndpointType: Value<string>;
  /**
   * The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from Splunk after it sends it data. At the end of the timeout period, Kinesis Data Firehose either tries to send the data again or considers it an error, based on your retry settings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `180`
   *
   * _Maximum_: `600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HECAcknowledgmentTimeoutInSeconds?: Value<number>;
  /**
   * The data processing configuration.
   *
   * _Required_: No
   *
   * _Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  /**
   * The Amazon CloudWatch logging options for your delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  /**
   * Defines how documents should be delivered to Amazon S3. When set to `FailedEventsOnly`, Kinesis Data Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to `AllEvents`, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. The default value is `FailedEventsOnly`.
   *
   * You can update this backup mode from `FailedEventsOnly` to `AllEvents`. You can't update it from `AllEvents` to `FailedEventsOnly`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AllEvents | FailedEventsOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupMode?: Value<string>;
}

/**
 * The `ProcessingConfiguration` property configures data processing for an Amazon Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamProcessingConfiguration {
  /**
   * Indicates whether data processing is enabled (true) or disabled (false).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The data processors.
   *
   * _Required_: No
   *
   * _Type_: List of [Processor](aws-properties-kinesisfirehose-deliverystream-processor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Processors?: List<KinesisFirehoseDeliveryStreamProcessor>;
}

/**
 * The `BufferingHints` property type specifies how Amazon Kinesis Data Firehose (Kinesis Data Firehose) buffers incoming data before delivering it to the destination. The first buffer condition that is satisfied triggers Kinesis Data Firehose to deliver the data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-bufferinghints.html}
 **/
export interface KinesisFirehoseDeliveryStreamBufferingHints {
  /**
   * The length of time, in seconds, that Kinesis Data Firehose buffers incoming data before delivering it to the destination. For valid values, see the `IntervalInSeconds` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `60`
   *
   * _Maximum_: `900`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalInSeconds?: Value<number>;
  /**
   * The size of the buffer, in MBs, that Kinesis Data Firehose uses for incoming data before delivering it to the destination. For valid values, see the `SizeInMBs` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeInMBs?: Value<number>;
}

/**
 * Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration {
  /**
   * The Serverless offering for Amazon OpenSearch Service index name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `80`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
   *
   * _Required_: No
   *
   * _Type_: [AmazonOpenSearchServerlessBufferingHints](aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferingHints?: KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessBufferingHints;
  /**
   * The retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * _Required_: No
   *
   * _Type_: [AmazonOpenSearchServerlessRetryOptions](aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryOptions?: KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessRetryOptions;
  /**
   * The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `https:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CollectionEndpoint?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VpcConfiguration](aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfiguration?: KinesisFirehoseDeliveryStreamVpcConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN: Value<string>;
  /**
   * Defines how documents should be delivered to Amazon S3. When it is set to FailedDocumentsOnly, Kinesis Data Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to the key prefix. When set to AllDocuments, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/ appended to the prefix.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AllDocuments | FailedDocumentsOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupMode?: Value<string>;
}

/**
 * Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.html}
 **/
export interface KinesisFirehoseDeliveryStreamAmazonopensearchserviceBufferingHints {
  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `60`
   *
   * _Maximum_: `900`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalInSeconds?: Value<number>;
  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeInMBs?: Value<number>;
}

/**
 * The `ElasticsearchRetryOptions` property type configures the retry behavior for when Amazon Kinesis Data Firehose (Kinesis Data Firehose) can't deliver data to Amazon Elasticsearch Service (Amazon ES).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchretryoptions.html}
 **/
export interface KinesisFirehoseDeliveryStreamElasticsearchRetryOptions {
  /**
   * After an initial failure to deliver to Amazon ES, the total amount of time during which Kinesis Data Firehose re-attempts delivery (including the first attempt). If Kinesis Data Firehose can't deliver the data within the specified time, it writes the data to the backup S3 bucket. For valid values, see the `DurationInSeconds` content for the [ElasticsearchRetryOptions](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ElasticsearchRetryOptions.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `7200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInSeconds?: Value<number>;
}

/**
 * The `ElasticsearchDestinationConfiguration` property type specifies an Amazon Elasticsearch Service (Amazon ES) domain that Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration {
  /**
   * The Elasticsearch type name that Amazon ES adds to documents when indexing data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeName?: Value<string>;
  /**
   * The frequency of Elasticsearch index rotation. If you enable index rotation, Kinesis Data Firehose appends a portion of the UTC arrival timestamp to the specified index name, and rotates the appended timestamp accordingly. For more information, see [Index Rotation for the Amazon ES Destination](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation) in the _Amazon Kinesis Data Firehose Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NoRotation | OneDay | OneHour | OneMonth | OneWeek`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexRotationPeriod?: Value<string>;
  /**
   * The data processing configuration for the Kinesis Data Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  /**
   * The endpoint to use when communicating with the cluster. Specify either this `ClusterEndpoint` or the `DomainARN` field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterEndpoint?: Value<string>;
  /**
   * The ARN of the Amazon ES domain. The IAM role must have permissions for `DescribeElasticsearchDomain`, `DescribeElasticsearchDomains`, and `DescribeElasticsearchDomainConfig` after assuming the role specified in **RoleARN**.
   *
   * Specify either `ClusterEndpoint` or `DomainARN`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainARN?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon ES Configuration API and for indexing documents. For more information, see [Controlling Access with Amazon Kinesis Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN: Value<string>;
  /**
   * The condition under which Kinesis Data Firehose delivers data to Amazon Simple Storage Service (Amazon S3). You can send Amazon S3 all documents (all data) or only the documents that Kinesis Data Firehose could not deliver to the Amazon ES destination. For more information and valid values, see the `S3BackupMode` content for the [ElasticsearchDestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ElasticsearchDestinationConfiguration.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AllDocuments | FailedDocumentsOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupMode?: Value<string>;
  /**
   * The name of the Elasticsearch index to which Kinesis Data Firehose adds data for indexing.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `80`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexName: Value<string>;
  /**
   * The S3 bucket where Kinesis Data Firehose backs up incoming data.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * Configures how Kinesis Data Firehose buffers incoming data while delivering it to the Amazon ES domain.
   *
   * _Required_: No
   *
   * _Type_: [ElasticsearchBufferingHints](aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferingHints?: KinesisFirehoseDeliveryStreamElasticsearchBufferingHints;
  /**
   * The retry behavior when Kinesis Data Firehose is unable to deliver data to Amazon ES.
   *
   * _Required_: No
   *
   * _Type_: [ElasticsearchRetryOptions](aws-properties-kinesisfirehose-deliverystream-elasticsearchretryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryOptions?: KinesisFirehoseDeliveryStreamElasticsearchRetryOptions;
  /**
   * The details of the VPC of the Amazon ES destination.
   *
   * _Required_: No
   *
   * _Type_: [VpcConfiguration](aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfiguration?: KinesisFirehoseDeliveryStreamVpcConfiguration;
  /**
   * The Amazon CloudWatch Logs logging options for the delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
}

/**
 * The `KinesisStreamSourceConfiguration` property type specifies the stream and role Amazon Resource Names (ARNs) for a Kinesis stream used as the source for a delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamKinesisStreamSourceConfiguration {
  /**
   * The ARN of the source Kinesis data stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KinesisStreamARN: Value<string>;
  /**
   * The ARN of the role that provides access to the source Kinesis data stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleARN: Value<string>;
}

/**
 * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-retryoptions.html}
 **/
export interface KinesisFirehoseDeliveryStreamRetryOptions {
  /**
   * The total amount of time that Kinesis Data Firehose spends on retries. This duration starts after the initial attempt to send data to the custom destination via HTTPS endpoint fails. It doesn't include the periods during which Kinesis Data Firehose waits for acknowledgment from the specified destination after each attempt.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `7200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInSeconds?: Value<number>;
}

/**
 * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see [Apache Parquet](https://parquet.apache.org/documentation/latest/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html}
 **/
export interface KinesisFirehoseDeliveryStreamParquetSerDe {
  /**
   * The compression code to use over data blocks. The possible values are `UNCOMPRESSED`, `SNAPPY`, and `GZIP`, with the default being `SNAPPY`. Use `SNAPPY` for higher decompression speed. Use `GZIP` if the compression ratio is more important than speed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GZIP | SNAPPY | UNCOMPRESSED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Compression?: Value<string>;
  /**
   * The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `67108864`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockSizeBytes?: Value<number>;
  /**
   * Indicates whether to enable dictionary compression.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableDictionaryCompression?: Value<boolean>;
  /**
   * The Parquet page size. Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `65536`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageSizeBytes?: Value<number>;
  /**
   * The maximum amount of padding to apply. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 0.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxPaddingBytes?: Value<number>;
  /**
   * Indicates the version of row format to output. The possible values are `V1` and `V2`. The default is `V1`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `V1 | V2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriterVersion?: Value<string>;
}

/**
 * The `RedshiftDestinationConfiguration` property type specifies an Amazon Redshift cluster to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html}
 **/
export interface KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration {
  /**
   * The configuration for backup in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupConfiguration?: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * The S3 bucket where Kinesis Data Firehose first delivers data. After the data is in the bucket, Kinesis Data Firehose uses the `COPY` command to load the data into the Amazon Redshift cluster. For the Amazon S3 bucket's compression format, don't specify `SNAPPY` or `ZIP` because the Amazon Redshift `COPY` command doesn't support them.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * The Amazon Redshift user that has permission to access the Amazon Redshift cluster. This user must have `INSERT` privileges for copying data from the Amazon S3 bucket to the cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * Configures the Amazon Redshift `COPY` command that Kinesis Data Firehose uses to load data into the cluster from the Amazon S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: [CopyCommand](aws-properties-kinesisfirehose-deliverystream-copycommand.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyCommand: KinesisFirehoseDeliveryStreamCopyCommand;
  /**
   * The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).
   *
   * _Required_: No
   *
   * _Type_: [RedshiftRetryOptions](aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryOptions?: KinesisFirehoseDeliveryStreamRedshiftRetryOptions;
  /**
   * The data processing configuration for the Kinesis Data Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingConfiguration?: KinesisFirehoseDeliveryStreamProcessingConfiguration;
  /**
   * The CloudWatch logging options for your delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOptions?: KinesisFirehoseDeliveryStreamCloudWatchLoggingOptions;
  /**
   * The connection string that Kinesis Data Firehose uses to connect to the Amazon Redshift cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `jdbc:(redshift|postgresql)://((?!-)[A-Za-z0-9-]{1,63}(?<!-).)+redshift.([a-zA-Z0-9.]+):d{1,5}/[a-zA-Z0-9_$-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterJDBCURL: Value<string>;
  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS (if you enable data encryption). For more information, see [Grant Kinesis Data Firehose Access to an Amazon Redshift Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-rs) in the _Amazon Kinesis Data Firehose Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN: Value<string>;
  /**
   * The password for the Amazon Redshift user that you specified in the `Username` property.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
  /**
   * The Amazon S3 backup mode. After you create a delivery stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the delivery stream to disable it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BackupMode?: Value<string>;
}

/**
 * Describes the metadata that's delivered to the specified HTTP endpoint destination. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.html}
 **/
export interface KinesisFirehoseDeliveryStreamHttpEndpointCommonAttribute {
  /**
   * The value of the HTTP endpoint common attribute.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeValue: Value<string>;
  /**
   * The name of the HTTP endpoint common attribute.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^(?!s*$).+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeName: Value<string>;
}
export interface KinesisFirehoseDeliveryStreamProperties {
  /**
   * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
   *
   * _Required_: No
   *
   * _Type_: [DeliveryStreamEncryptionConfigurationInput](aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStreamEncryptionConfigurationInput?: KinesisFirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput;
  /**
   * Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination. You can specify only one destination.
   *
   * _Required_: No
   *
   * _Type_: [HttpEndpointDestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpEndpointDestinationConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointDestinationConfiguration;
  /**
   * When a Kinesis stream is used as the source for the delivery stream, a [KinesisStreamSourceConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html) containing the Kinesis stream ARN and the role ARN for the source stream.
   *
   * _Required_: No
   *
   * _Type_: [KinesisStreamSourceConfiguration](aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KinesisStreamSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisStreamSourceConfiguration;
  /**
   * The delivery stream type. This can be one of the following values:
   */
  DeliveryStreamType?: Value<string>;
  /**
   * An Amazon Redshift destination for the delivery stream.
   *
   * Conditional. You must specify only one destination configuration.
   *
   * If you change the delivery stream destination from an Amazon Redshift destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
   *
   * _Required_: Conditional
   *
   * _Type_: [RedshiftDestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedshiftDestinationConfiguration?: KinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration;
  /**
   * The destination in Amazon OpenSearch Service. You can specify only one destination.
   *
   * _Required_: Conditional
   *
   * _Type_: [AmazonopensearchserviceDestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmazonopensearchserviceDestinationConfiguration?: KinesisFirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration;
  /**
   * The configuration of a destination in Splunk for the delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [SplunkDestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SplunkDestinationConfiguration?: KinesisFirehoseDeliveryStreamSplunkDestinationConfiguration;
  /**
   * An Amazon S3 destination for the delivery stream.
   *
   * Conditional. You must specify only one destination configuration.
   *
   * If you change the delivery stream destination from an Amazon Extended S3 destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
   *
   * _Required_: Conditional
   *
   * _Type_: [ExtendedS3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtendedS3DestinationConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3DestinationConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AmazonOpenSearchServerlessDestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmazonOpenSearchServerlessDestinationConfiguration?: KinesisFirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration;
  /**
   * An Amazon ES destination for the delivery stream.
   *
   * Conditional. You must specify only one destination configuration.
   *
   * If you change the delivery stream destination from an Amazon ES destination to an Amazon S3 or Amazon Redshift destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
   *
   * _Required_: Conditional
   *
   * _Type_: [ElasticsearchDestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticsearchDestinationConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration;
  /**
   * The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
   *
   * Conditional. You must specify only one destination configuration.
   *
   * If you change the delivery stream destination from an Amazon S3 destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
   *
   * _Required_: Conditional
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3DestinationConfiguration?: KinesisFirehoseDeliveryStreamS3DestinationConfiguration;
  /**
   * The name of the delivery stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeliveryStreamName?: Value<string>;
  /**
   * A set of tags to assign to the delivery stream. A tag is a key-value pair that you can define and assign to AWS resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the AWS Billing and Cost Management User Guide.
   *
   * You can specify up to 50 tags when creating a delivery stream.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::KinesisFirehose::DeliveryStream` resource specifies an Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivery stream that delivers real-time streaming data to an Amazon Simple Storage Service (Amazon S3), Amazon Redshift, or Amazon Elasticsearch Service (Amazon ES) destination. For more information, see [Creating an Amazon Kinesis Data Firehose Delivery Stream](https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html) in the _Amazon Kinesis Data Firehose Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html}
 */
export interface KinesisFirehoseDeliveryStreamResource {
  Type: 'AWS::KinesisFirehose::DeliveryStream';
  Properties: KinesisFirehoseDeliveryStreamProperties;
}
