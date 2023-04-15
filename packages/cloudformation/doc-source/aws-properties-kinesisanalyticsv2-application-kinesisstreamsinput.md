# AWS::KinesisAnalyticsV2::Application KinesisStreamsInput<a name="aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput"></a>

Identifies a Kinesis data stream as the streaming source\. You provide the stream's Amazon Resource Name \(ARN\)\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput-syntax.json"></a>

```
{
  "[ResourceARN](#cfn-kinesisanalyticsv2-application-kinesisstreamsinput-resourcearn)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput-syntax.yaml"></a>

```
  [ResourceARN](#cfn-kinesisanalyticsv2-application-kinesisstreamsinput-resourcearn): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput-properties"></a>

`ResourceARN` <a name="cfn-kinesisanalyticsv2-application-kinesisstreamsinput-resourcearn"></a>
The ARN of the input Kinesis data stream to read\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput--seealso"></a>

- [KinesisStreamsInput](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_KinesisStreamsInput.html) in the _Amazon Kinesis Data Analytics API Reference_
