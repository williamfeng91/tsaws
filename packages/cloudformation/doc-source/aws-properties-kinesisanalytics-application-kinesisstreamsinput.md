# AWS::KinesisAnalytics::Application KinesisStreamsInput<a name="aws-properties-kinesisanalytics-application-kinesisstreamsinput"></a>

Identifies an Amazon Kinesis stream as the streaming source\. You provide the stream's Amazon Resource Name \(ARN\) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf\.

## Syntax<a name="aws-properties-kinesisanalytics-application-kinesisstreamsinput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalytics-application-kinesisstreamsinput-syntax.json"></a>

```
{
  "[ResourceARN](#cfn-kinesisanalytics-application-kinesisstreamsinput-resourcearn)" : String,
  "[RoleARN](#cfn-kinesisanalytics-application-kinesisstreamsinput-rolearn)" : String
}
```

### YAML<a name="aws-properties-kinesisanalytics-application-kinesisstreamsinput-syntax.yaml"></a>

```
  [ResourceARN](#cfn-kinesisanalytics-application-kinesisstreamsinput-resourcearn): String
  [RoleARN](#cfn-kinesisanalytics-application-kinesisstreamsinput-rolearn): String
```

## Properties<a name="aws-properties-kinesisanalytics-application-kinesisstreamsinput-properties"></a>

`ResourceARN` <a name="cfn-kinesisanalytics-application-kinesisstreamsinput-resourcearn"></a>
ARN of the input Amazon Kinesis stream to read\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleARN` <a name="cfn-kinesisanalytics-application-kinesisstreamsinput-rolearn"></a>
ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf\. You need to grant the necessary permissions to this role\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
