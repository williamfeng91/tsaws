# AWS::SSM::Association S3OutputLocation<a name="aws-properties-ssm-association-s3outputlocation"></a>

`S3OutputLocation` is a property of the [AWS::SSM::Association](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html) resource that specifies an Amazon S3 bucket where you want to store the results of this association request\.

## Syntax<a name="aws-properties-ssm-association-s3outputlocation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssm-association-s3outputlocation-syntax.json"></a>

```
{
  "[OutputS3BucketName](#cfn-ssm-association-s3outputlocation-outputs3bucketname)" : String,
  "[OutputS3KeyPrefix](#cfn-ssm-association-s3outputlocation-outputs3keyprefix)" : String,
  "[OutputS3Region](#cfn-ssm-association-s3outputlocation-outputs3region)" : String
}
```

### YAML<a name="aws-properties-ssm-association-s3outputlocation-syntax.yaml"></a>

```
  [OutputS3BucketName](#cfn-ssm-association-s3outputlocation-outputs3bucketname): String
  [OutputS3KeyPrefix](#cfn-ssm-association-s3outputlocation-outputs3keyprefix): String
  [OutputS3Region](#cfn-ssm-association-s3outputlocation-outputs3region): String
```

## Properties<a name="aws-properties-ssm-association-s3outputlocation-properties"></a>

`OutputS3BucketName` <a name="cfn-ssm-association-s3outputlocation-outputs3bucketname"></a>
The name of the S3 bucket\.  
_Required_: No  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OutputS3KeyPrefix` <a name="cfn-ssm-association-s3outputlocation-outputs3keyprefix"></a>
The S3 bucket subfolder\.  
_Required_: No  
_Type_: String  
_Maximum_: `500`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OutputS3Region` <a name="cfn-ssm-association-s3outputlocation-outputs3region"></a>
The AWS Region of the S3 bucket\.  
_Required_: No  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
