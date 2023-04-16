# AWS::SageMaker::ModelPackage ValidationProfile<a name="aws-properties-sagemaker-modelpackage-validationprofile"></a>

Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package\.

The data provided in the validation profile is made available to your buyers on AWS Marketplace\.

## Syntax<a name="aws-properties-sagemaker-modelpackage-validationprofile-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelpackage-validationprofile-syntax.json"></a>

```
{
  "[ProfileName](#cfn-sagemaker-modelpackage-validationprofile-profilename)" : String,
  "[TransformJobDefinition](#cfn-sagemaker-modelpackage-validationprofile-transformjobdefinition)" : TransformJobDefinition
}
```

### YAML<a name="aws-properties-sagemaker-modelpackage-validationprofile-syntax.yaml"></a>

```
  [ProfileName](#cfn-sagemaker-modelpackage-validationprofile-profilename): String
  [TransformJobDefinition](#cfn-sagemaker-modelpackage-validationprofile-transformjobdefinition):
    TransformJobDefinition
```

## Properties<a name="aws-properties-sagemaker-modelpackage-validationprofile-properties"></a>

`ProfileName` <a name="cfn-sagemaker-modelpackage-validationprofile-profilename"></a>
The name of the profile for the model package\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TransformJobDefinition` <a name="cfn-sagemaker-modelpackage-validationprofile-transformjobdefinition"></a>
The `TransformJobDefinition` object that describes the transform job used for the validation of the model package\.  
_Required_: Yes  
_Type_: [TransformJobDefinition](aws-properties-sagemaker-modelpackage-transformjobdefinition.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
