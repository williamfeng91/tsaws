# AWS::SageMaker::Domain CustomImage<a name="aws-properties-sagemaker-domain-customimage"></a>

A custom SageMaker image\. For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html)\.

## Syntax<a name="aws-properties-sagemaker-domain-customimage-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-domain-customimage-syntax.json"></a>

```
{
  "[AppImageConfigName](#cfn-sagemaker-domain-customimage-appimageconfigname)" : String,
  "[ImageName](#cfn-sagemaker-domain-customimage-imagename)" : String,
  "[ImageVersionNumber](#cfn-sagemaker-domain-customimage-imageversionnumber)" : Integer
}
```

### YAML<a name="aws-properties-sagemaker-domain-customimage-syntax.yaml"></a>

```
  [AppImageConfigName](#cfn-sagemaker-domain-customimage-appimageconfigname): String
  [ImageName](#cfn-sagemaker-domain-customimage-imagename): String
  [ImageVersionNumber](#cfn-sagemaker-domain-customimage-imageversionnumber): Integer
```

## Properties<a name="aws-properties-sagemaker-domain-customimage-properties"></a>

`AppImageConfigName` <a name="cfn-sagemaker-domain-customimage-appimageconfigname"></a>
The name of the AppImageConfig\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageName` <a name="cfn-sagemaker-domain-customimage-imagename"></a>
The name of the CustomImage\. Must be unique to your account\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageVersionNumber` <a name="cfn-sagemaker-domain-customimage-imageversionnumber"></a>
The version number of the CustomImage\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
