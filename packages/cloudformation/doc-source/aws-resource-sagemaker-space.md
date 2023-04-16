# AWS::SageMaker::Space<a name="aws-resource-sagemaker-space"></a>

Creates a space used for real time collaboration in a Domain\.

## Syntax<a name="aws-resource-sagemaker-space-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-sagemaker-space-syntax.json"></a>

```
{
  "Type" : "AWS::SageMaker::Space",
  "Properties" : {
      "[DomainId](#cfn-sagemaker-space-domainid)" : String,
      "[SpaceName](#cfn-sagemaker-space-spacename)" : String,
      "[SpaceSettings](#cfn-sagemaker-space-spacesettings)" : SpaceSettings,
      "[Tags](#cfn-sagemaker-space-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-sagemaker-space-syntax.yaml"></a>

```
Type: AWS::SageMaker::Space
Properties:
  [DomainId](#cfn-sagemaker-space-domainid): String
  [SpaceName](#cfn-sagemaker-space-spacename): String
  [SpaceSettings](#cfn-sagemaker-space-spacesettings):
    SpaceSettings
  [Tags](#cfn-sagemaker-space-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-sagemaker-space-properties"></a>

`DomainId` <a name="cfn-sagemaker-space-domainid"></a>
The ID of the associated Domain\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SpaceName` <a name="cfn-sagemaker-space-spacename"></a>
The name of the space\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SpaceSettings` <a name="cfn-sagemaker-space-spacesettings"></a>
A collection of space settings\.  
_Required_: No  
_Type_: [SpaceSettings](aws-properties-sagemaker-space-spacesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-sagemaker-space-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-sagemaker-space-return-values"></a>

### Ref<a name="aws-resource-sagemaker-space-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-sagemaker-space-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-sagemaker-space-return-values-fn--getatt-fn--getatt"></a>

`SpaceArn` <a name="SpaceArn-fn::getatt"></a>
The space's Amazon Resource Name \(ARN\)\.
