# AWS::Timestream::Table S3Configuration<a name="aws-properties-timestream-table-s3configuration"></a>

The configuration that specifies an S3 location\.

## Syntax<a name="aws-properties-timestream-table-s3configuration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-timestream-table-s3configuration-syntax.json"></a>

```
{
  "[BucketName](#cfn-timestream-table-s3configuration-bucketname)" : String,
  "[EncryptionOption](#cfn-timestream-table-s3configuration-encryptionoption)" : String,
  "[KmsKeyId](#cfn-timestream-table-s3configuration-kmskeyid)" : String,
  "[ObjectKeyPrefix](#cfn-timestream-table-s3configuration-objectkeyprefix)" : String
}
```

### YAML<a name="aws-properties-timestream-table-s3configuration-syntax.yaml"></a>

```
  [BucketName](#cfn-timestream-table-s3configuration-bucketname): String
  [EncryptionOption](#cfn-timestream-table-s3configuration-encryptionoption): String
  [KmsKeyId](#cfn-timestream-table-s3configuration-kmskeyid): String
  [ObjectKeyPrefix](#cfn-timestream-table-s3configuration-objectkeyprefix): String
```

## Properties<a name="aws-properties-timestream-table-s3configuration-properties"></a>

`BucketName` <a name="cfn-timestream-table-s3configuration-bucketname"></a>
The bucket name of the customer S3 bucket\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncryptionOption` <a name="cfn-timestream-table-s3configuration-encryptionoption"></a>
The encryption option for the customer S3 location\. Options are S3 server\-side encryption with an S3 managed key or AWS managed key\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `SSE_KMS | SSE_S3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KmsKeyId` <a name="cfn-timestream-table-s3configuration-kmskeyid"></a>
The AWS KMS key ID for the customer S3 location when encrypting with an AWS managed key\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ObjectKeyPrefix` <a name="cfn-timestream-table-s3configuration-objectkeyprefix"></a>
The object key preview for the customer S3 location\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `928`  
_Pattern_: `[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
