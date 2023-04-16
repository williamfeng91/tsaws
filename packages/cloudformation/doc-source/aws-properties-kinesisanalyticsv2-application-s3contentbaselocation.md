# AWS::KinesisAnalyticsV2::Application S3ContentBaseLocation<a name="aws-properties-kinesisanalyticsv2-application-s3contentbaselocation"></a>

The base location of the Amazon Data Analytics application\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-s3contentbaselocation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-s3contentbaselocation-syntax.json"></a>

```
{
  "[BasePath](#cfn-kinesisanalyticsv2-application-s3contentbaselocation-basepath)" : String,
  "[BucketARN](#cfn-kinesisanalyticsv2-application-s3contentbaselocation-bucketarn)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-s3contentbaselocation-syntax.yaml"></a>

```
  [BasePath](#cfn-kinesisanalyticsv2-application-s3contentbaselocation-basepath): String
  [BucketARN](#cfn-kinesisanalyticsv2-application-s3contentbaselocation-bucketarn): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-s3contentbaselocation-properties"></a>

`BasePath` <a name="cfn-kinesisanalyticsv2-application-s3contentbaselocation-basepath"></a>
The base path for the S3 bucket\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Pattern_: `[a-zA-Z0-9/!-_.*'()]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketARN` <a name="cfn-kinesisanalyticsv2-application-s3contentbaselocation-bucketarn"></a>
The Amazon Resource Name \(ARN\) of the S3 bucket\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
