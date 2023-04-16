# AWS::DynamoDB::Table S3BucketSource<a name="aws-properties-dynamodb-table-s3bucketsource"></a>

The S3 bucket that is being imported from\.

## Syntax<a name="aws-properties-dynamodb-table-s3bucketsource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dynamodb-table-s3bucketsource-syntax.json"></a>

```
{
  "[S3Bucket](#cfn-dynamodb-table-s3bucketsource-s3bucket)" : String,
  "[S3BucketOwner](#cfn-dynamodb-table-s3bucketsource-s3bucketowner)" : String,
  "[S3KeyPrefix](#cfn-dynamodb-table-s3bucketsource-s3keyprefix)" : String
}
```

### YAML<a name="aws-properties-dynamodb-table-s3bucketsource-syntax.yaml"></a>

```
  [S3Bucket](#cfn-dynamodb-table-s3bucketsource-s3bucket): String
  [S3BucketOwner](#cfn-dynamodb-table-s3bucketsource-s3bucketowner): String
  [S3KeyPrefix](#cfn-dynamodb-table-s3bucketsource-s3keyprefix): String
```

## Properties<a name="aws-properties-dynamodb-table-s3bucketsource-properties"></a>

`S3Bucket` <a name="cfn-dynamodb-table-s3bucketsource-s3bucket"></a>
The S3 bucket that is being imported from\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `255`  
_Pattern_: `^[a-z0-9A-Z]+[\.\-\w]*[a-z0-9A-Z]+$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3BucketOwner` <a name="cfn-dynamodb-table-s3bucketsource-s3bucketowner"></a>
The account number of the S3 bucket that is being imported from\. If the bucket is owned by the requester this is optional\.  
_Required_: No  
_Type_: String  
_Pattern_: `[0-9]{12}`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3KeyPrefix` <a name="cfn-dynamodb-table-s3bucketsource-s3keyprefix"></a>
The key prefix shared by all S3 Objects that are being imported\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
