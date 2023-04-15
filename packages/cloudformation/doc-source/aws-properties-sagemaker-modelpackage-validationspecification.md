# AWS::SageMaker::ModelPackage ValidationSpecification<a name="aws-properties-sagemaker-modelpackage-validationspecification"></a>

Specifies batch transform jobs that SageMaker runs to validate your model package\.

## Syntax<a name="aws-properties-sagemaker-modelpackage-validationspecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelpackage-validationspecification-syntax.json"></a>

```
{
  "[ValidationProfiles](#cfn-sagemaker-modelpackage-validationspecification-validationprofiles)" : [ ValidationProfile, ... ],
  "[ValidationRole](#cfn-sagemaker-modelpackage-validationspecification-validationrole)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelpackage-validationspecification-syntax.yaml"></a>

```
  [ValidationProfiles](#cfn-sagemaker-modelpackage-validationspecification-validationprofiles):
    - ValidationProfile
  [ValidationRole](#cfn-sagemaker-modelpackage-validationspecification-validationrole): String
```

## Properties<a name="aws-properties-sagemaker-modelpackage-validationspecification-properties"></a>

`ValidationProfiles` <a name="cfn-sagemaker-modelpackage-validationspecification-validationprofiles"></a>
An array of `ModelPackageValidationProfile` objects, each of which specifies a batch transform job that SageMaker runs to validate your model package\.  
_Required_: Yes  
_Type_: List of [ValidationProfile](aws-properties-sagemaker-modelpackage-validationprofile.md)  
_Maximum_: `1`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ValidationRole` <a name="cfn-sagemaker-modelpackage-validationspecification-validationrole"></a>
The IAM roles to be used for the validation of the model package\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
