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
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the _'n'_ as the row delimiter and a comma (",") as the column delimiter:
 *
 * `"name1", "address1"`
 *
 * `"name2", "address2"`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-csvmappingparameters.html}
 **/
export interface KinesisAnalyticsApplicationCSVMappingParameters {
  /**
   * Row delimiter. For example, in a CSV format, _'n'_ is the typical row delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowDelimiter: Value<string>;
  /**
   * Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumnDelimiter: Value<string>;
}

/**
 * When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-input.html}
 **/
export interface KinesisAnalyticsApplicationInput {
  /**
   * Name prefix to use when creating an in-application stream. Suppose that you specify a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as per the `InputParallelism` count you specified) in-application streams with names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NamePrefix: Value<string>;
  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
   *
   * Also used to describe the format of the reference data source.
   *
   * _Required_: Yes
   *
   * _Type_: [InputSchema](aws-properties-kinesisanalytics-application-inputschema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputSchema: KinesisAnalyticsApplicationInputSchema;
  /**
   * If the streaming source is an Amazon Kinesis stream, identifies the stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
   *
   * Note: Either `KinesisStreamsInput` or `KinesisFirehoseInput` is required.
   *
   * _Required_: Conditional
   *
   * _Type_: [KinesisStreamsInput](aws-properties-kinesisanalytics-application-kinesisstreamsinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamsInput?: KinesisAnalyticsApplicationKinesisStreamsInput;
  /**
   * If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
   *
   * Note: Either `KinesisStreamsInput` or `KinesisFirehoseInput` is required.
   *
   * _Required_: Conditional
   *
   * _Type_: [KinesisFirehoseInput](aws-properties-kinesisanalytics-application-kinesisfirehoseinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseInput?: KinesisAnalyticsApplicationKinesisFirehoseInput;
  /**
   * The [InputProcessingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputprocessingconfiguration.html) for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is [InputLambdaProcessor](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputlambdaprocessor.html).
   *
   * _Required_: No
   *
   * _Type_: [InputProcessingConfiguration](aws-properties-kinesisanalytics-application-inputprocessingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputProcessingConfiguration?: KinesisAnalyticsApplicationInputProcessingConfiguration;
  /**
   * Describes the number of in-application streams to create.
   *
   * Data from your source is routed to these in-application input streams.
   *
   * See [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
   *
   * _Required_: No
   *
   * _Type_: [InputParallelism](aws-properties-kinesisanalytics-application-inputparallelism.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputParallelism?: KinesisAnalyticsApplicationInputParallelism;
}

/**
 * Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 *
 * Also used to describe the format of the reference data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-recordcolumn.html}
 **/
export interface KinesisAnalyticsApplicationRecordColumn {
  /**
   * Reference to the data element in the streaming input or the reference data source. This element is required if the [RecordFormatType](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel) is `JSON`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mapping?: Value<string>;
  /**
   * Type of column created in the in-application input stream or reference table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlType: Value<string>;
  /**
   * Name of the column created in the in-application input stream or reference table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-kinesisfirehoseinput.html}
 **/
export interface KinesisAnalyticsApplicationKinesisFirehoseInput {
  /**
   * ARN of the input delivery stream.
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
  ResourceARN: Value<string>;
  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to make sure that the role has the necessary permissions to access the stream.
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
  RoleARN: Value<string>;
}

/**
 * Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-recordformat.html}
 **/
export interface KinesisAnalyticsApplicationRecordFormat {
  /**
   * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [MappingParameters](aws-properties-kinesisanalytics-application-mappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappingParameters?: KinesisAnalyticsApplicationMappingParameters;
  /**
   * The type of record format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | JSON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormatType: Value<string>;
}

/**
 * Provides additional mapping information when JSON is the record format on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-jsonmappingparameters.html}
 **/
export interface KinesisAnalyticsApplicationJSONMappingParameters {
  /**
   * Path to the top-level parent that contains the records.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowPath: Value<string>;
}

/**
 * Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-kinesisstreamsinput.html}
 **/
export interface KinesisAnalyticsApplicationKinesisStreamsInput {
  /**
   * ARN of the input Amazon Kinesis stream to read.
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
  ResourceARN: Value<string>;
  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
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
  RoleARN: Value<string>;
}

/**
 * Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputparallelism.html}
 **/
export interface KinesisAnalyticsApplicationInputParallelism {
  /**
   * Number of in-application streams to create. For more information, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
}

/**
 * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
 *
 * Also used to describe the format of the reference data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputschema.html}
 **/
export interface KinesisAnalyticsApplicationInputSchema {
  /**
   * Specifies the encoding of the records in the streaming source. For example, UTF-8.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `UTF-8`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordEncoding?: Value<string>;
  /**
   * A list of `RecordColumn` objects.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RecordColumn](aws-properties-kinesisanalytics-application-recordcolumn.md)
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumns: List<KinesisAnalyticsApplicationRecordColumn>;
  /**
   * Specifies the format of the records on the streaming source.
   *
   * _Required_: Yes
   *
   * _Type_: [RecordFormat](aws-properties-kinesisanalytics-application-recordformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormat: KinesisAnalyticsApplicationRecordFormat;
}

/**
 * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-mappingparameters.html}
 **/
export interface KinesisAnalyticsApplicationMappingParameters {
  /**
   * Provides additional mapping information when JSON is the record format on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [JSONMappingParameters](aws-properties-kinesisanalytics-application-jsonmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JSONMappingParameters?: KinesisAnalyticsApplicationJSONMappingParameters;
  /**
   * Provides additional mapping information when the record format uses delimiters (for example, CSV).
   *
   * _Required_: No
   *
   * _Type_: [CSVMappingParameters](aws-properties-kinesisanalytics-application-csvmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CSVMappingParameters?: KinesisAnalyticsApplicationCSVMappingParameters;
}

/**
 * Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is [AWS Lambda](https://docs.aws.amazon.com/lambda/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputprocessingconfiguration.html}
 **/
export interface KinesisAnalyticsApplicationInputProcessingConfiguration {
  /**
   * The [InputLambdaProcessor](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputlambdaprocessor.html) that is used to preprocess the records in the stream before being processed by your application code.
   *
   * _Required_: No
   *
   * _Type_: [InputLambdaProcessor](aws-properties-kinesisanalytics-application-inputlambdaprocessor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLambdaProcessor?: KinesisAnalyticsApplicationInputLambdaProcessor;
}

/**
 * An object that contains the Amazon Resource Name (ARN) of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-application-inputlambdaprocessor.html}
 **/
export interface KinesisAnalyticsApplicationInputLambdaProcessor {
  /**
   * The ARN of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that operates on records in the stream.
   *
   * To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: AWS Lambda](/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
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
  ResourceARN: Value<string>;
  /**
   * The ARN of the IAM role that is used to access the AWS Lambda function.
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
  RoleARN: Value<string>;
}
export interface KinesisAnalyticsApplicationProperties {
  /**
   * Name of your Amazon Kinesis Analytics application (for example, `sample-app`).
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
  ApplicationName?: Value<string>;
  /**
   * Use this parameter to configure the application input.
   *
   * You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table).
   *
   * For the streaming source, you provide its Amazon Resource Name (ARN) and format of data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role that Amazon Kinesis Analytics can assume to read this stream on your behalf.
   *
   * To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Input](aws-properties-kinesisanalytics-application-input.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Inputs: List<KinesisAnalyticsApplicationInput>;
  /**
   * Summary description of the application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationDescription?: Value<string>;
  /**
   * One or more SQL statements that read input data, transform it, and generate output. For example, you can write a SQL statement that reads data from one in-application stream, generates a running average of the number of advertisement clicks by vendor, and insert resulting rows in another in-application stream using pumps. For more information about the typical pattern, see [Application Code](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-app-code.html).
   *
   * You can provide such series of SQL statements, where output of one statement can be used as the input for the next statement. You store intermediate results by creating in-application streams and pumps.
   *
   * Note that the application code must create the streams with names specified in the `Outputs`. For example, if your `Outputs` defines output streams named `ExampleOutputStream1` and `ExampleOutputStream2`, then your application code must create these streams.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `102400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationCode?: Value<string>;
}

/**
 * The `AWS::KinesisAnalytics::Application` resource creates an Amazon Kinesis Data Analytics application. For more information, see the [Amazon Kinesis Data Analytics Developer Guide](/kinesisanalytics/latest/dev/what-is.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-application.html}
 */
export interface KinesisAnalyticsApplicationResource {
  Type: 'AWS::KinesisAnalytics::Application';
  Properties: KinesisAnalyticsApplicationProperties;
}
