# AWS::Connect::InstanceStorageConfig S3Config<a name="aws-properties-connect-instancestorageconfig-s3config"></a>

Information about the Amazon Simple Storage Service \(Amazon S3\) storage type\.

## Syntax<a name="aws-properties-connect-instancestorageconfig-s3config-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connect-instancestorageconfig-s3config-syntax.json"></a>

```
{
  "[BucketName](#cfn-connect-instancestorageconfig-s3config-bucketname)" : String,
  "[BucketPrefix](#cfn-connect-instancestorageconfig-s3config-bucketprefix)" : String,
  "[EncryptionConfig](#cfn-connect-instancestorageconfig-s3config-encryptionconfig)" : EncryptionConfig
}
```

### YAML<a name="aws-properties-connect-instancestorageconfig-s3config-syntax.yaml"></a>

```
  [BucketName](#cfn-connect-instancestorageconfig-s3config-bucketname): String
  [BucketPrefix](#cfn-connect-instancestorageconfig-s3config-bucketprefix): String
  [EncryptionConfig](#cfn-connect-instancestorageconfig-s3config-encryptionconfig):
    EncryptionConfig
```

## Properties<a name="aws-properties-connect-instancestorageconfig-s3config-properties"></a>

`BucketName` <a name="cfn-connect-instancestorageconfig-s3config-bucketname"></a>
The S3 bucket name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketPrefix` <a name="cfn-connect-instancestorageconfig-s3config-bucketprefix"></a>
The S3 bucket prefix\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncryptionConfig` <a name="cfn-connect-instancestorageconfig-s3config-encryptionconfig"></a>
The Amazon S3 encryption configuration\.  
_Required_: No  
_Type_: [EncryptionConfig](aws-properties-connect-instancestorageconfig-encryptionconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
