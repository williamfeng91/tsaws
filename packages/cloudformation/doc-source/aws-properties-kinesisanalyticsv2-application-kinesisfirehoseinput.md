# AWS::KinesisAnalyticsV2::Application KinesisFirehoseInput<a name="aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput"></a>

For a SQL\-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source\. You provide the delivery stream's Amazon Resource Name \(ARN\)\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput-syntax.json"></a>

```
{
  "[ResourceARN](#cfn-kinesisanalyticsv2-application-kinesisfirehoseinput-resourcearn)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput-syntax.yaml"></a>

```
  [ResourceARN](#cfn-kinesisanalyticsv2-application-kinesisfirehoseinput-resourcearn): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput-properties"></a>

`ResourceARN` <a name="cfn-kinesisanalyticsv2-application-kinesisfirehoseinput-resourcearn"></a>
The Amazon Resource Name \(ARN\) of the delivery stream\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput--seealso"></a>

- [KinesisFirehoseInput](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_KinesisFirehoseInput.html) in the _Amazon Kinesis Data Analytics API Reference_
