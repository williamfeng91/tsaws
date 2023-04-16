# AWS::Comprehend::Flywheel DocumentClassificationConfig<a name="aws-properties-comprehend-flywheel-documentclassificationconfig"></a>

Configuration required for a custom classification model\.

## Syntax<a name="aws-properties-comprehend-flywheel-documentclassificationconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-comprehend-flywheel-documentclassificationconfig-syntax.json"></a>

```
{
  "[Labels](#cfn-comprehend-flywheel-documentclassificationconfig-labels)" : [ String, ... ],
  "[Mode](#cfn-comprehend-flywheel-documentclassificationconfig-mode)" : String
}
```

### YAML<a name="aws-properties-comprehend-flywheel-documentclassificationconfig-syntax.yaml"></a>

```
  [Labels](#cfn-comprehend-flywheel-documentclassificationconfig-labels):
    - String
  [Mode](#cfn-comprehend-flywheel-documentclassificationconfig-mode): String
```

## Properties<a name="aws-properties-comprehend-flywheel-documentclassificationconfig-properties"></a>

`Labels` <a name="cfn-comprehend-flywheel-documentclassificationconfig-labels"></a>
One or more labels to associate with the custom classifier\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `1000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Mode` <a name="cfn-comprehend-flywheel-documentclassificationconfig-mode"></a>
Classification mode indicates whether the documents are `MULTI_CLASS` or `MULTI_LABEL`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `MULTI_CLASS | MULTI_LABEL`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
