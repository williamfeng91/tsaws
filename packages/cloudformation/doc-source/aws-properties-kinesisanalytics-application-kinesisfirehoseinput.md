# AWS::KinesisAnalytics::Application KinesisFirehoseInput<a name="aws-properties-kinesisanalytics-application-kinesisfirehoseinput"></a>

Identifies an Amazon Kinesis Firehose delivery stream as the streaming source\. You provide the delivery stream's Amazon Resource Name \(ARN\) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf\.

## Syntax<a name="aws-properties-kinesisanalytics-application-kinesisfirehoseinput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalytics-application-kinesisfirehoseinput-syntax.json"></a>

```
{
  "[ResourceARN](#cfn-kinesisanalytics-application-kinesisfirehoseinput-resourcearn)" : String,
  "[RoleARN](#cfn-kinesisanalytics-application-kinesisfirehoseinput-rolearn)" : String
}
```

### YAML<a name="aws-properties-kinesisanalytics-application-kinesisfirehoseinput-syntax.yaml"></a>

```
  [ResourceARN](#cfn-kinesisanalytics-application-kinesisfirehoseinput-resourcearn): String
  [RoleARN](#cfn-kinesisanalytics-application-kinesisfirehoseinput-rolearn): String
```

## Properties<a name="aws-properties-kinesisanalytics-application-kinesisfirehoseinput-properties"></a>

`ResourceARN` <a name="cfn-kinesisanalytics-application-kinesisfirehoseinput-resourcearn"></a>
ARN of the input delivery stream\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleARN` <a name="cfn-kinesisanalytics-application-kinesisfirehoseinput-rolearn"></a>
ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf\. You need to make sure that the role has the necessary permissions to access the stream\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
