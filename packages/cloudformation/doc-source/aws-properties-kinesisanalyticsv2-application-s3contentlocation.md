# AWS::KinesisAnalyticsV2::Application S3ContentLocation<a name="aws-properties-kinesisanalyticsv2-application-s3contentlocation"></a>

The location of an application or a custom artifact\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-s3contentlocation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-s3contentlocation-syntax.json"></a>

```
{
  "[BucketARN](#cfn-kinesisanalyticsv2-application-s3contentlocation-bucketarn)" : String,
  "[FileKey](#cfn-kinesisanalyticsv2-application-s3contentlocation-filekey)" : String,
  "[ObjectVersion](#cfn-kinesisanalyticsv2-application-s3contentlocation-objectversion)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-s3contentlocation-syntax.yaml"></a>

```
  [BucketARN](#cfn-kinesisanalyticsv2-application-s3contentlocation-bucketarn): String
  [FileKey](#cfn-kinesisanalyticsv2-application-s3contentlocation-filekey): String
  [ObjectVersion](#cfn-kinesisanalyticsv2-application-s3contentlocation-objectversion): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-s3contentlocation-properties"></a>

`BucketARN` <a name="cfn-kinesisanalyticsv2-application-s3contentlocation-bucketarn"></a>
The Amazon Resource Name \(ARN\) for the S3 bucket containing the application code\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FileKey` <a name="cfn-kinesisanalyticsv2-application-s3contentlocation-filekey"></a>
The file key for the object containing the application code\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ObjectVersion` <a name="cfn-kinesisanalyticsv2-application-s3contentlocation-objectversion"></a>
The version of the object containing the application code\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-application-s3contentlocation--seealso"></a>

- [S3ContentLocation](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_S3ContentLocation.html) in the _Amazon Kinesis Data Analytics API Reference_
