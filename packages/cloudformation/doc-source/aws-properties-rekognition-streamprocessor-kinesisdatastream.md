# AWS::Rekognition::StreamProcessor KinesisDataStream<a name="aws-properties-rekognition-streamprocessor-kinesisdatastream"></a>

Amazon Rekognition Video Stream Processor take as input a Kinesis video stream \(Input\) and a Kinesis data stream \(Output\)\. This is the Amazon Kinesis Data Streams instance to which the Amazon Rekognition stream processor streams the analysis results\. This must be created within the constraints specified at [KinesisDataStream](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_KinesisDataStream)\.

## Syntax<a name="aws-properties-rekognition-streamprocessor-kinesisdatastream-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-rekognition-streamprocessor-kinesisdatastream-syntax.json"></a>

```
{
  "[Arn](#cfn-rekognition-streamprocessor-kinesisdatastream-arn)" : String
}
```

### YAML<a name="aws-properties-rekognition-streamprocessor-kinesisdatastream-syntax.yaml"></a>

```
  [Arn](#cfn-rekognition-streamprocessor-kinesisdatastream-arn): String
```

## Properties<a name="aws-properties-rekognition-streamprocessor-kinesisdatastream-properties"></a>

`Arn` <a name="cfn-rekognition-streamprocessor-kinesisdatastream-arn"></a>
ARN of the output Amazon Kinesis Data Streams stream\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `(^arn:([a-z\d-]+):kinesis:([a-z\d-]+):\d{12}:.+$)`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
