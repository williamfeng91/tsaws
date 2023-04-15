# AWS::Timestream::ScheduledQuery S3Configuration<a name="aws-properties-timestream-scheduledquery-s3configuration"></a>

Details on S3 location for error reports that result from running a query\.

## Syntax<a name="aws-properties-timestream-scheduledquery-s3configuration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-timestream-scheduledquery-s3configuration-syntax.json"></a>

```
{
  "[BucketName](#cfn-timestream-scheduledquery-s3configuration-bucketname)" : String,
  "[EncryptionOption](#cfn-timestream-scheduledquery-s3configuration-encryptionoption)" : String,
  "[ObjectKeyPrefix](#cfn-timestream-scheduledquery-s3configuration-objectkeyprefix)" : String
}
```

### YAML<a name="aws-properties-timestream-scheduledquery-s3configuration-syntax.yaml"></a>

```
  [BucketName](#cfn-timestream-scheduledquery-s3configuration-bucketname): String
  [EncryptionOption](#cfn-timestream-scheduledquery-s3configuration-encryptionoption): String
  [ObjectKeyPrefix](#cfn-timestream-scheduledquery-s3configuration-objectkeyprefix): String
```

## Properties<a name="aws-properties-timestream-scheduledquery-s3configuration-properties"></a>

`BucketName` <a name="cfn-timestream-scheduledquery-s3configuration-bucketname"></a>
Name of the S3 bucket under which error reports will be created\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`EncryptionOption` <a name="cfn-timestream-scheduledquery-s3configuration-encryptionoption"></a>
Encryption at rest options for the error reports\. If no encryption option is specified, Timestream will choose SSE_S3 as default\.  
_Required_: No  
_Type_: String  
_Allowed values_: `SSE_KMS | SSE_S3`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ObjectKeyPrefix` <a name="cfn-timestream-scheduledquery-s3configuration-objectkeyprefix"></a>
Prefix for the error report key\. Timestream by default adds the following prefix to the error report path\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `928`  
_Pattern_: `[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
