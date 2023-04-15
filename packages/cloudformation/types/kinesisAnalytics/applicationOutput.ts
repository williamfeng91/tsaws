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
 * When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-kinesisfirehoseoutput.html}
 **/
export interface KinesisAnalyticsApplicationOutputKinesisFirehoseOutput {
  /**
   * ARN of the destination Amazon Kinesis Firehose delivery stream to write to.
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
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.
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
 * When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-lambdaoutput.html}
 **/
export interface KinesisAnalyticsApplicationOutputLambdaOutput {
  /**
   * Amazon Resource Name (ARN) of the destination Lambda function to write to.
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
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role.
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
 * Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.
 *
 * For limits on how many destinations an application can write and other limitations, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-output.html}
 **/
export interface KinesisAnalyticsApplicationOutputOutput {
  /**
   * Describes the data format when records are written to the destination. For more information, see [Configuring Application Output](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationSchema](aws-properties-kinesisanalytics-applicationoutput-destinationschema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationSchema: KinesisAnalyticsApplicationOutputDestinationSchema;
  /**
   * Identifies an AWS Lambda function as the destination.
   *
   * _Required_: No
   *
   * _Type_: [LambdaOutput](aws-properties-kinesisanalytics-applicationoutput-lambdaoutput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaOutput?: KinesisAnalyticsApplicationOutputLambdaOutput;
  /**
   * Identifies an Amazon Kinesis Firehose delivery stream as the destination.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseOutput](aws-properties-kinesisanalytics-applicationoutput-kinesisfirehoseoutput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseOutput?: KinesisAnalyticsApplicationOutputKinesisFirehoseOutput;
  /**
   * Identifies an Amazon Kinesis stream as the destination.
   *
   * _Required_: No
   *
   * _Type_: [KinesisStreamsOutput](aws-properties-kinesisanalytics-applicationoutput-kinesisstreamsoutput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamsOutput?: KinesisAnalyticsApplicationOutputKinesisStreamsOutput;
  /**
   * Name of the in-application stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Describes the data format when records are written to the destination. For more information, see [Configuring Application Output](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-destinationschema.html}
 **/
export interface KinesisAnalyticsApplicationOutputDestinationSchema {
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
 * When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationoutput-kinesisstreamsoutput.html}
 **/
export interface KinesisAnalyticsApplicationOutputKinesisStreamsOutput {
  /**
   * ARN of the destination Amazon Kinesis stream to write to.
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
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.
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
export interface KinesisAnalyticsApplicationOutputProperties {
  /**
   * Name of the application to which you want to add the output configuration.
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
   * An array of objects, each describing one output configuration. In the output configuration, you specify the name of an in-application stream, a destination (that is, an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), and record the formation to use when writing to the destination.
   *
   * _Required_: Yes
   *
   * _Type_: [Output](aws-properties-kinesisanalytics-applicationoutput-output.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Output: KinesisAnalyticsApplicationOutputOutput;
}

/**
 * Adds an external destination to your Amazon Kinesis Analytics application.
 *
 * If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.
 *
 * You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see [Understanding Application Output (Destination)](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
 *
 * Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the `DescribeApplication` operation to find the current application version.
 *
 * For the limits on the number of application inputs and outputs you can configure, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
 *
 * This operation requires permissions to perform the `kinesisanalytics:AddApplicationOutput` action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationoutput.html}
 */
export interface KinesisAnalyticsApplicationOutputResource {
  Type: 'AWS::KinesisAnalytics::ApplicationOutput';
  Properties: KinesisAnalyticsApplicationOutputProperties;
}
