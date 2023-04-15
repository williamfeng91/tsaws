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
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput.html}
 **/
export interface KinesisAnalyticsV2ApplicationOutputKinesisStreamsOutput {
  /**
   * The ARN of the destination Kinesis data stream to write to.
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
}

/**
 * Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html}
 **/
export interface KinesisAnalyticsV2ApplicationOutputOutput {
  /**
   * Describes the data format when records are written to the destination.
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationSchema](aws-properties-kinesisanalyticsv2-applicationoutput-destinationschema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationSchema: KinesisAnalyticsV2ApplicationOutputDestinationSchema;
  /**
   * Identifies an Amazon Lambda function as the destination.
   *
   * _Required_: No
   *
   * _Type_: [LambdaOutput](aws-properties-kinesisanalyticsv2-applicationoutput-lambdaoutput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaOutput?: KinesisAnalyticsV2ApplicationOutputLambdaOutput;
  /**
   * Identifies a Kinesis Data Firehose delivery stream as the destination.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseOutput](aws-properties-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseOutput?: KinesisAnalyticsV2ApplicationOutputKinesisFirehoseOutput;
  /**
   * Identifies a Kinesis data stream as the destination.
   *
   * _Required_: No
   *
   * _Type_: [KinesisStreamsOutput](aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamsOutput?: KinesisAnalyticsV2ApplicationOutputKinesisStreamsOutput;
  /**
   * The name of the in-application stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `[^-s<>&]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput.html}
 **/
export interface KinesisAnalyticsV2ApplicationOutputKinesisFirehoseOutput {
  /**
   * The ARN of the destination delivery stream to write to.
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
}

/**
 * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-destinationschema.html}
 **/
export interface KinesisAnalyticsV2ApplicationOutputDestinationSchema {
  /**
   * Specifies the format of the records on the output stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | JSON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormatType?: Value<string>;
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-lambdaoutput.html}
 **/
export interface KinesisAnalyticsV2ApplicationOutputLambdaOutput {
  /**
   * The Amazon Resource Name (ARN) of the destination Lambda function to write to.
   *
   * To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
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
}
export interface KinesisAnalyticsV2ApplicationOutputProperties {
  /**
   * The name of the application.
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
  ApplicationName: Value<string>;
  /**
   * Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
   *
   * _Required_: Yes
   *
   * _Type_: [Output](aws-properties-kinesisanalyticsv2-applicationoutput-output.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Output: KinesisAnalyticsV2ApplicationOutputOutput;
}

/**
 * Adds an external destination to your SQL-based Amazon Kinesis Data Analytics application.
 *
 * If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.
 *
 * You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors.
 *
 * Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html) operation to find the current application version.
 *
 * **Note**
 *
 * Creation of multiple outputs should be sequential (use of DependsOn) to avoid a problem with a stale application version (_ConcurrentModificationException_).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html}
 */
export interface KinesisAnalyticsV2ApplicationOutputResource {
  Type: 'AWS::KinesisAnalyticsV2::ApplicationOutput';
  Properties: KinesisAnalyticsV2ApplicationOutputProperties;
}
