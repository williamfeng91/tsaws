# AWS::S3::Bucket AccelerateConfiguration<a name="aws-properties-s3-bucket-accelerateconfiguration"></a>

Configures the transfer acceleration state for an Amazon S3 bucket\. For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the _Amazon S3 User Guide_\.

## Syntax<a name="aws-properties-s3-bucket-accelerateconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-s3-bucket-accelerateconfiguration-syntax.json"></a>

```
{
  "[AccelerationStatus](#cfn-s3-bucket-accelerateconfiguration-accelerationstatus)" : String
}
```

### YAML<a name="aws-properties-s3-bucket-accelerateconfiguration-syntax.yaml"></a>

```
  [AccelerationStatus](#cfn-s3-bucket-accelerateconfiguration-accelerationstatus): String
```

## Properties<a name="aws-properties-s3-bucket-accelerateconfiguration-properties"></a>

`AccelerationStatus` <a name="cfn-s3-bucket-accelerateconfiguration-accelerationstatus"></a>
Specifies the transfer acceleration status of the bucket\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Enabled | Suspended`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-s3-bucket-accelerateconfiguration--seealso"></a>

- AWS::S3::Bucket [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html#aws-properties-s3-bucket--examples)
