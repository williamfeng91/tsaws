# AWS::QuickSight::Analysis ConditionalFormattingSolidColor<a name="aws-properties-quicksight-analysis-conditionalformattingsolidcolor"></a>

Formatting configuration for solid color\.

## Syntax<a name="aws-properties-quicksight-analysis-conditionalformattingsolidcolor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-conditionalformattingsolidcolor-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-analysis-conditionalformattingsolidcolor-color)" : String,
  "[Expression](#cfn-quicksight-analysis-conditionalformattingsolidcolor-expression)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-conditionalformattingsolidcolor-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-analysis-conditionalformattingsolidcolor-color): String
  [Expression](#cfn-quicksight-analysis-conditionalformattingsolidcolor-expression): String
```

## Properties<a name="aws-properties-quicksight-analysis-conditionalformattingsolidcolor-properties"></a>

`Color` <a name="cfn-quicksight-analysis-conditionalformattingsolidcolor-color"></a>
Determines the color\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-quicksight-analysis-conditionalformattingsolidcolor-expression"></a>
The expression that determines the formatting configuration for solid color\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
