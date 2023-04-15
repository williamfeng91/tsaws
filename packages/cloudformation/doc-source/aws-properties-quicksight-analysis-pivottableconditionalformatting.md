# AWS::QuickSight::Analysis PivotTableConditionalFormatting<a name="aws-properties-quicksight-analysis-pivottableconditionalformatting"></a>

The conditional formatting for a `PivotTableVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-pivottableconditionalformatting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-pivottableconditionalformatting-syntax.json"></a>

```
{
  "[ConditionalFormattingOptions](#cfn-quicksight-analysis-pivottableconditionalformatting-conditionalformattingoptions)" : [ PivotTableConditionalFormattingOption, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-pivottableconditionalformatting-syntax.yaml"></a>

```
  [ConditionalFormattingOptions](#cfn-quicksight-analysis-pivottableconditionalformatting-conditionalformattingoptions):
    - PivotTableConditionalFormattingOption
```

## Properties<a name="aws-properties-quicksight-analysis-pivottableconditionalformatting-properties"></a>

`ConditionalFormattingOptions` <a name="cfn-quicksight-analysis-pivottableconditionalformatting-conditionalformattingoptions"></a>
Conditional formatting options for a `PivotTableVisual`\.  
_Required_: No  
_Type_: List of [PivotTableConditionalFormattingOption](aws-properties-quicksight-analysis-pivottableconditionalformattingoption.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)