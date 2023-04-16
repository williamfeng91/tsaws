# AWS::QuickSight::Analysis GaugeChartConditionalFormatting<a name="aws-properties-quicksight-analysis-gaugechartconditionalformatting"></a>

The conditional formatting of a `GaugeChartVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-gaugechartconditionalformatting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-gaugechartconditionalformatting-syntax.json"></a>

```
{
  "[ConditionalFormattingOptions](#cfn-quicksight-analysis-gaugechartconditionalformatting-conditionalformattingoptions)" : [ GaugeChartConditionalFormattingOption, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-gaugechartconditionalformatting-syntax.yaml"></a>

```
  [ConditionalFormattingOptions](#cfn-quicksight-analysis-gaugechartconditionalformatting-conditionalformattingoptions):
    - GaugeChartConditionalFormattingOption
```

## Properties<a name="aws-properties-quicksight-analysis-gaugechartconditionalformatting-properties"></a>

`ConditionalFormattingOptions` <a name="cfn-quicksight-analysis-gaugechartconditionalformatting-conditionalformattingoptions"></a>
Conditional formatting options of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: List of [GaugeChartConditionalFormattingOption](aws-properties-quicksight-analysis-gaugechartconditionalformattingoption.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
