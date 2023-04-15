# AWS::KinesisFirehose::DeliveryStream S3DestinationConfiguration<a name="aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration"></a>

The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service \(Amazon S3\) destination to which Amazon Kinesis Data Firehose \(Kinesis Data Firehose\) delivers data\.

## Syntax<a name="aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration-syntax.json"></a>

```
{
  "[BucketARN](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bucketarn)" : String,
  "[BufferingHints](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bufferinghints)" : BufferingHints,
  "[CloudWatchLoggingOptions](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-cloudwatchloggingoptions)" : CloudWatchLoggingOptions,
  "[CompressionFormat](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-compressionformat)" : String,
  "[EncryptionConfiguration](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-encryptionconfiguration)" : EncryptionConfiguration,
  "[ErrorOutputPrefix](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-erroroutputprefix)" : String,
  "[Prefix](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-prefix)" : String,
  "[RoleARN](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-rolearn)" : String
}
```

### YAML<a name="aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration-syntax.yaml"></a>

```
  [BucketARN](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bucketarn): String
  [BufferingHints](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bufferinghints):
    BufferingHints
  [CloudWatchLoggingOptions](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-cloudwatchloggingoptions):
    CloudWatchLoggingOptions
  [CompressionFormat](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-compressionformat): String
  [EncryptionConfiguration](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-encryptionconfiguration):
    EncryptionConfiguration
  [ErrorOutputPrefix](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-erroroutputprefix): String
  [Prefix](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-prefix): String
  [RoleARN](#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-rolearn): String
```

## Properties<a name="aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration-properties"></a>

`BucketARN` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bucketarn"></a>
The Amazon Resource Name \(ARN\) of the Amazon S3 bucket to send data to\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BufferingHints` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bufferinghints"></a>
Configures how Kinesis Data Firehose buffers incoming data while delivering it to the Amazon S3 bucket\.  
_Required_: No  
_Type_: [BufferingHints](aws-properties-kinesisfirehose-deliverystream-bufferinghints.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CloudWatchLoggingOptions` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-cloudwatchloggingoptions"></a>
The CloudWatch logging options for your delivery stream\.  
_Required_: No  
_Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CompressionFormat` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-compressionformat"></a>
The type of compression that Kinesis Data Firehose uses to compress the data that it delivers to the Amazon S3 bucket\. For valid values, see the `CompressionFormat` content for the [S3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_S3DestinationConfiguration.html) data type in the _Amazon Kinesis Data Firehose API Reference_\.  
_Required_: No  
_Type_: String  
_Allowed values_: `GZIP | HADOOP_SNAPPY | Snappy | UNCOMPRESSED | ZIP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncryptionConfiguration` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-encryptionconfiguration"></a>
Configures Amazon Simple Storage Service \(Amazon S3\) server\-side encryption\. Kinesis Data Firehose uses AWS Key Management Service \(AWS KMS\) to encrypt the data that it delivers to your Amazon S3 bucket\.  
_Required_: No  
_Type_: [EncryptionConfiguration](aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ErrorOutputPrefix` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-erroroutputprefix"></a>
A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3\. This prefix appears immediately following the bucket name\. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html)\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1024`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Prefix` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-prefix"></a>
A prefix that Kinesis Data Firehose adds to the files that it delivers to the Amazon S3 bucket\. The prefix helps you identify the files that Kinesis Data Firehose delivered\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1024`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleARN` <a name="cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-rolearn"></a>
The ARN of an AWS Identity and Access Management \(IAM\) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS \(if you enable data encryption\)\. For more information, see [Grant Kinesis Data Firehose Access to an Amazon S3 Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3) in the _Amazon Kinesis Data Firehose Developer Guide_\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
