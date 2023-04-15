# AWS::QuickSight::Template GaugeChartPrimaryValueConditionalFormatting<a name="aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting"></a>

The conditional formatting for the primary value of a `GaugeChartVisual`\.

## Syntax<a name="aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting-syntax.json"></a>

```
{
  "[Icon](#cfn-quicksight-template-gaugechartprimaryvalueconditionalformatting-icon)" : ConditionalFormattingIcon,
  "[TextColor](#cfn-quicksight-template-gaugechartprimaryvalueconditionalformatting-textcolor)" : ConditionalFormattingColor
}
```

### YAML<a name="aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting-syntax.yaml"></a>

```
  [Icon](#cfn-quicksight-template-gaugechartprimaryvalueconditionalformatting-icon):
    ConditionalFormattingIcon
  [TextColor](#cfn-quicksight-template-gaugechartprimaryvalueconditionalformatting-textcolor):
    ConditionalFormattingColor
```

## Properties<a name="aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting-properties"></a>

`Icon` <a name="cfn-quicksight-template-gaugechartprimaryvalueconditionalformatting-icon"></a>
The conditional formatting of the primary value icon\.  
_Required_: No  
_Type_: [ConditionalFormattingIcon](aws-properties-quicksight-template-conditionalformattingicon.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextColor` <a name="cfn-quicksight-template-gaugechartprimaryvalueconditionalformatting-textcolor"></a>
The conditional formatting of the primary value text color\.  
_Required_: No  
_Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
