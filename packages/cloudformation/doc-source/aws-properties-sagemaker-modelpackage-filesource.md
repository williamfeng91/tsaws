# AWS::SageMaker::ModelPackage FileSource<a name="aws-properties-sagemaker-modelpackage-filesource"></a>

Contains details regarding the file source\.

## Syntax<a name="aws-properties-sagemaker-modelpackage-filesource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelpackage-filesource-syntax.json"></a>

```
{
  "[ContentDigest](#cfn-sagemaker-modelpackage-filesource-contentdigest)" : String,
  "[ContentType](#cfn-sagemaker-modelpackage-filesource-contenttype)" : String,
  "[S3Uri](#cfn-sagemaker-modelpackage-filesource-s3uri)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelpackage-filesource-syntax.yaml"></a>

```
  [ContentDigest](#cfn-sagemaker-modelpackage-filesource-contentdigest): String
  [ContentType](#cfn-sagemaker-modelpackage-filesource-contenttype): String
  [S3Uri](#cfn-sagemaker-modelpackage-filesource-s3uri): String
```

## Properties<a name="aws-properties-sagemaker-modelpackage-filesource-properties"></a>

`ContentDigest` <a name="cfn-sagemaker-modelpackage-filesource-contentdigest"></a>
The digest of the file source\.  
_Required_: No  
_Type_: String  
_Maximum_: `72`  
_Pattern_: `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ContentType` <a name="cfn-sagemaker-modelpackage-filesource-contenttype"></a>
The type of content stored in the file source\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3Uri` <a name="cfn-sagemaker-modelpackage-filesource-s3uri"></a>
The Amazon S3 URI for the file source\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
