# AWS::SageMaker::ModelPackageGroup<a name="aws-resource-sagemaker-modelpackagegroup"></a>

A group of versioned models in the model registry\.

## Syntax<a name="aws-resource-sagemaker-modelpackagegroup-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-sagemaker-modelpackagegroup-syntax.json"></a>

```
{
  "Type" : "AWS::SageMaker::ModelPackageGroup",
  "Properties" : {
      "[ModelPackageGroupDescription](#cfn-sagemaker-modelpackagegroup-modelpackagegroupdescription)" : String,
      "[ModelPackageGroupName](#cfn-sagemaker-modelpackagegroup-modelpackagegroupname)" : String,
      "[ModelPackageGroupPolicy](#cfn-sagemaker-modelpackagegroup-modelpackagegrouppolicy)" : Json,
      "[Tags](#cfn-sagemaker-modelpackagegroup-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-sagemaker-modelpackagegroup-syntax.yaml"></a>

```
Type: AWS::SageMaker::ModelPackageGroup
Properties:
  [ModelPackageGroupDescription](#cfn-sagemaker-modelpackagegroup-modelpackagegroupdescription): String
  [ModelPackageGroupName](#cfn-sagemaker-modelpackagegroup-modelpackagegroupname): String
  [ModelPackageGroupPolicy](#cfn-sagemaker-modelpackagegroup-modelpackagegrouppolicy): Json
  [Tags](#cfn-sagemaker-modelpackagegroup-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-sagemaker-modelpackagegroup-properties"></a>

`ModelPackageGroupDescription` <a name="cfn-sagemaker-modelpackagegroup-modelpackagegroupdescription"></a>
The description for the model group\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ModelPackageGroupName` <a name="cfn-sagemaker-modelpackagegroup-modelpackagegroupname"></a>
The name of the model group\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ModelPackageGroupPolicy` <a name="cfn-sagemaker-modelpackagegroup-modelpackagegrouppolicy"></a>
A resouce policy to control access to a model group\. For information about resoure policies, see [Identity\-based policies and resource\-based policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) in the _AWS Identity and Access Management User Guide\._\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-sagemaker-modelpackagegroup-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-sagemaker-modelpackagegroup-return-values"></a>

### Ref<a name="aws-resource-sagemaker-modelpackagegroup-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-sagemaker-modelpackagegroup-return-values-fn--getatt"></a>

#### <a name="aws-resource-sagemaker-modelpackagegroup-return-values-fn--getatt-fn--getatt"></a>

`CreationTime` <a name="CreationTime-fn::getatt"></a>
The time when the model group was created\.

`ModelPackageGroupArn` <a name="ModelPackageGroupArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the model group\.

`ModelPackageGroupStatus` <a name="ModelPackageGroupStatus-fn::getatt"></a>
The status of the model group\.
