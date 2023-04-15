# AWS::QuickSight::Analysis ConditionalFormattingColor<a name="aws-properties-quicksight-analysis-conditionalformattingcolor"></a>

The formatting configuration for the color\.

## Syntax<a name="aws-properties-quicksight-analysis-conditionalformattingcolor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-conditionalformattingcolor-syntax.json"></a>

```
{
  "[Gradient](#cfn-quicksight-analysis-conditionalformattingcolor-gradient)" : ConditionalFormattingGradientColor,
  "[Solid](#cfn-quicksight-analysis-conditionalformattingcolor-solid)" : ConditionalFormattingSolidColor
}
```

### YAML<a name="aws-properties-quicksight-analysis-conditionalformattingcolor-syntax.yaml"></a>

```
  [Gradient](#cfn-quicksight-analysis-conditionalformattingcolor-gradient):
    ConditionalFormattingGradientColor
  [Solid](#cfn-quicksight-analysis-conditionalformattingcolor-solid):
    ConditionalFormattingSolidColor
```

## Properties<a name="aws-properties-quicksight-analysis-conditionalformattingcolor-properties"></a>

`Gradient` <a name="cfn-quicksight-analysis-conditionalformattingcolor-gradient"></a>
Formatting configuration for gradient color\.  
_Required_: No  
_Type_: [ConditionalFormattingGradientColor](aws-properties-quicksight-analysis-conditionalformattinggradientcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Solid` <a name="cfn-quicksight-analysis-conditionalformattingcolor-solid"></a>
Formatting configuration for solid color\.  
_Required_: No  
_Type_: [ConditionalFormattingSolidColor](aws-properties-quicksight-analysis-conditionalformattingsolidcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
