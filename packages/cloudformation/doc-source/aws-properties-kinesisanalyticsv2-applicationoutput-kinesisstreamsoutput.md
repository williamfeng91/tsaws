# AWS::KinesisAnalyticsV2::ApplicationOutput KinesisStreamsOutput<a name="aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput"></a>

When you configure a SQL\-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination\. You provide the stream Amazon Resource Name \(ARN\)\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-syntax.json"></a>

```
{
  "[ResourceARN](#cfn-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-resourcearn)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-syntax.yaml"></a>

```
  [ResourceARN](#cfn-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-resourcearn): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-properties"></a>

`ResourceARN` <a name="cfn-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-resourcearn"></a>
The ARN of the destination Kinesis data stream to write to\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput--seealso"></a>

- [KinesisStreamsOutput](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_KinesisStreamsOutput.html) in the _Amazon Kinesis Data Analytics API Reference_
