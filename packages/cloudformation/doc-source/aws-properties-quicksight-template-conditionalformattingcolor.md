# AWS::QuickSight::Template ConditionalFormattingColor<a name="aws-properties-quicksight-template-conditionalformattingcolor"></a>

The formatting configuration for the color\.

## Syntax<a name="aws-properties-quicksight-template-conditionalformattingcolor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-conditionalformattingcolor-syntax.json"></a>

```
{
  "[Gradient](#cfn-quicksight-template-conditionalformattingcolor-gradient)" : ConditionalFormattingGradientColor,
  "[Solid](#cfn-quicksight-template-conditionalformattingcolor-solid)" : ConditionalFormattingSolidColor
}
```

### YAML<a name="aws-properties-quicksight-template-conditionalformattingcolor-syntax.yaml"></a>

```
  [Gradient](#cfn-quicksight-template-conditionalformattingcolor-gradient):
    ConditionalFormattingGradientColor
  [Solid](#cfn-quicksight-template-conditionalformattingcolor-solid):
    ConditionalFormattingSolidColor
```

## Properties<a name="aws-properties-quicksight-template-conditionalformattingcolor-properties"></a>

`Gradient` <a name="cfn-quicksight-template-conditionalformattingcolor-gradient"></a>
Formatting configuration for gradient color\.  
_Required_: No  
_Type_: [ConditionalFormattingGradientColor](aws-properties-quicksight-template-conditionalformattinggradientcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Solid` <a name="cfn-quicksight-template-conditionalformattingcolor-solid"></a>
Formatting configuration for solid color\.  
_Required_: No  
_Type_: [ConditionalFormattingSolidColor](aws-properties-quicksight-template-conditionalformattingsolidcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
