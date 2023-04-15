# AWS::KinesisVideo::Stream<a name="aws-resource-kinesisvideo-stream"></a>

Specifies a new Kinesis video stream\.

When you create a new stream, Kinesis Video Streams assigns it a version number\. When you change the stream's metadata, Kinesis Video Streams updates the version\.

`CreateStream` is an asynchronous operation\.

For information about how the service works, see [How it Works](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html)\.

You must have permissions for the `KinesisVideo:CreateStream` action\.

## Syntax<a name="aws-resource-kinesisvideo-stream-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-kinesisvideo-stream-syntax.json"></a>

```
{
  "Type" : "AWS::KinesisVideo::Stream",
  "Properties" : {
      "[DataRetentionInHours](#cfn-kinesisvideo-stream-dataretentioninhours)" : Integer,
      "[DeviceName](#cfn-kinesisvideo-stream-devicename)" : String,
      "[KmsKeyId](#cfn-kinesisvideo-stream-kmskeyid)" : String,
      "[MediaType](#cfn-kinesisvideo-stream-mediatype)" : String,
      "[Name](#cfn-kinesisvideo-stream-name)" : String,
      "[Tags](#cfn-kinesisvideo-stream-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-kinesisvideo-stream-syntax.yaml"></a>

```
Type: AWS::KinesisVideo::Stream
Properties:
  [DataRetentionInHours](#cfn-kinesisvideo-stream-dataretentioninhours): Integer
  [DeviceName](#cfn-kinesisvideo-stream-devicename): String
  [KmsKeyId](#cfn-kinesisvideo-stream-kmskeyid): String
  [MediaType](#cfn-kinesisvideo-stream-mediatype): String
  [Name](#cfn-kinesisvideo-stream-name): String
  [Tags](#cfn-kinesisvideo-stream-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-kinesisvideo-stream-properties"></a>

`DataRetentionInHours` <a name="cfn-kinesisvideo-stream-dataretentioninhours"></a>
How long the stream retains data, in hours\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeviceName` <a name="cfn-kinesisvideo-stream-devicename"></a>
The name of the device that is associated with the stream\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KmsKeyId` <a name="cfn-kinesisvideo-stream-kmskeyid"></a>
The ID of the AWS Key Management Service \(AWS KMS\) key that Kinesis Video Streams uses to encrypt data on the stream\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `.+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MediaType` <a name="cfn-kinesisvideo-stream-mediatype"></a>
The `MediaType` of the stream\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[\w\-\.\+]+/[\w\-\.\+]+(,[\w\-\.\+]+/[\w\-\.\+]+)*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-kinesisvideo-stream-name"></a>
The name of the stream\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-kinesisvideo-stream-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-kinesisvideo-stream-return-values"></a>

### Ref<a name="aws-resource-kinesisvideo-stream-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-kinesisvideo-stream-return-values-fn--getatt"></a>

#### <a name="aws-resource-kinesisvideo-stream-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the stream\.
