# AWS::QuickSight::Analysis FilledMapConditionalFormatting<a name="aws-properties-quicksight-analysis-filledmapconditionalformatting"></a>

The conditional formatting of a `FilledMapVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-filledmapconditionalformatting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-filledmapconditionalformatting-syntax.json"></a>

```
{
  "[ConditionalFormattingOptions](#cfn-quicksight-analysis-filledmapconditionalformatting-conditionalformattingoptions)" : [ FilledMapConditionalFormattingOption, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-filledmapconditionalformatting-syntax.yaml"></a>

```
  [ConditionalFormattingOptions](#cfn-quicksight-analysis-filledmapconditionalformatting-conditionalformattingoptions):
    - FilledMapConditionalFormattingOption
```

## Properties<a name="aws-properties-quicksight-analysis-filledmapconditionalformatting-properties"></a>

`ConditionalFormattingOptions` <a name="cfn-quicksight-analysis-filledmapconditionalformatting-conditionalformattingoptions"></a>
Conditional formatting options of a `FilledMapVisual`\.  
_Required_: Yes  
_Type_: List of [FilledMapConditionalFormattingOption](aws-properties-quicksight-analysis-filledmapconditionalformattingoption.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
