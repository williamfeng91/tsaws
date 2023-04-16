# AWS::AppStream::Fleet S3Location<a name="aws-properties-appstream-fleet-s3location"></a>

Describes the S3 location\.

## Syntax<a name="aws-properties-appstream-fleet-s3location-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appstream-fleet-s3location-syntax.json"></a>

```
{
  "[S3Bucket](#cfn-appstream-fleet-s3location-s3bucket)" : String,
  "[S3Key](#cfn-appstream-fleet-s3location-s3key)" : String
}
```

### YAML<a name="aws-properties-appstream-fleet-s3location-syntax.yaml"></a>

```
  [S3Bucket](#cfn-appstream-fleet-s3location-s3bucket): String
  [S3Key](#cfn-appstream-fleet-s3location-s3key): String
```

## Properties<a name="aws-properties-appstream-fleet-s3location-properties"></a>

`S3Bucket` <a name="cfn-appstream-fleet-s3location-s3bucket"></a>
The S3 bucket of the S3 object\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `^[0-9a-z\.\-]*(?<!\.)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3Key` <a name="cfn-appstream-fleet-s3location-s3key"></a>
The S3 key of the S3 object\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
