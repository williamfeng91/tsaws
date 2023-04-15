# AWS::DataBrew::Recipe S3Location<a name="aws-properties-databrew-recipe-s3location"></a>

Represents an Amazon S3 location \(bucket name, bucket owner, and object key\) where DataBrew can read input data, or write output from a job\.

## Syntax<a name="aws-properties-databrew-recipe-s3location-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-recipe-s3location-syntax.json"></a>

```
{
  "[Bucket](#cfn-databrew-recipe-s3location-bucket)" : String,
  "[Key](#cfn-databrew-recipe-s3location-key)" : String
}
```

### YAML<a name="aws-properties-databrew-recipe-s3location-syntax.yaml"></a>

```
  [Bucket](#cfn-databrew-recipe-s3location-bucket): String
  [Key](#cfn-databrew-recipe-s3location-key): String
```

## Properties<a name="aws-properties-databrew-recipe-s3location-properties"></a>

`Bucket` <a name="cfn-databrew-recipe-s3location-bucket"></a>
The Amazon S3 bucket name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Key` <a name="cfn-databrew-recipe-s3location-key"></a>
The unique name of the object in the bucket\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1280`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
