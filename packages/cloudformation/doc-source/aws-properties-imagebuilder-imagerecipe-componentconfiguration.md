# AWS::ImageBuilder::ImageRecipe ComponentConfiguration<a name="aws-properties-imagebuilder-imagerecipe-componentconfiguration"></a>

Configuration details of the component\.

## Syntax<a name="aws-properties-imagebuilder-imagerecipe-componentconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-imagerecipe-componentconfiguration-syntax.json"></a>

```
{
  "[ComponentArn](#cfn-imagebuilder-imagerecipe-componentconfiguration-componentarn)" : String,
  "[Parameters](#cfn-imagebuilder-imagerecipe-componentconfiguration-parameters)" : [ ComponentParameter, ... ]
}
```

### YAML<a name="aws-properties-imagebuilder-imagerecipe-componentconfiguration-syntax.yaml"></a>

```
  [ComponentArn](#cfn-imagebuilder-imagerecipe-componentconfiguration-componentarn): String
  [Parameters](#cfn-imagebuilder-imagerecipe-componentconfiguration-parameters):
    - ComponentParameter
```

## Properties<a name="aws-properties-imagebuilder-imagerecipe-componentconfiguration-properties"></a>

`ComponentArn` <a name="cfn-imagebuilder-imagerecipe-componentconfiguration-componentarn"></a>
The Amazon Resource Name \(ARN\) of the component\.  
_Required_: No  
_Type_: String  
_Pattern_: `^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component/[a-z0-9-_]+/(?:(?:([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x))|(?:[0-9]+\.[0-9]+\.[0-9]+/[0-9]+))$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Parameters` <a name="cfn-imagebuilder-imagerecipe-componentconfiguration-parameters"></a>
A group of parameter settings that Image Builder uses to configure the component for a specific recipe\.  
_Required_: No  
_Type_: List of [ComponentParameter](aws-properties-imagebuilder-imagerecipe-componentparameter.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)