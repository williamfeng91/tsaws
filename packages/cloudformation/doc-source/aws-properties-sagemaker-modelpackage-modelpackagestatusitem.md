# AWS::SageMaker::ModelPackage ModelPackageStatusItem<a name="aws-properties-sagemaker-modelpackage-modelpackagestatusitem"></a>

Represents the overall status of a model package\.

## Syntax<a name="aws-properties-sagemaker-modelpackage-modelpackagestatusitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelpackage-modelpackagestatusitem-syntax.json"></a>

```
{
  "[FailureReason](#cfn-sagemaker-modelpackage-modelpackagestatusitem-failurereason)" : String,
  "[Name](#cfn-sagemaker-modelpackage-modelpackagestatusitem-name)" : String,
  "[Status](#cfn-sagemaker-modelpackage-modelpackagestatusitem-status)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelpackage-modelpackagestatusitem-syntax.yaml"></a>

```
  [FailureReason](#cfn-sagemaker-modelpackage-modelpackagestatusitem-failurereason): String
  [Name](#cfn-sagemaker-modelpackage-modelpackagestatusitem-name): String
  [Status](#cfn-sagemaker-modelpackage-modelpackagestatusitem-status): String
```

## Properties<a name="aws-properties-sagemaker-modelpackage-modelpackagestatusitem-properties"></a>

`FailureReason` <a name="cfn-sagemaker-modelpackage-modelpackagestatusitem-failurereason"></a>
if the overall status is `Failed`, the reason for the failure\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-sagemaker-modelpackage-modelpackagestatusitem-name"></a>
The name of the model package for which the overall status is being reported\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-sagemaker-modelpackage-modelpackagestatusitem-status"></a>
The current status\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Completed | Failed | InProgress | NotStarted`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
