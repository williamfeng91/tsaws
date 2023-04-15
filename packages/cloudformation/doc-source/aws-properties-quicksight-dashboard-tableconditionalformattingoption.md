# AWS::QuickSight::Dashboard TableConditionalFormattingOption<a name="aws-properties-quicksight-dashboard-tableconditionalformattingoption"></a>

Conditional formatting options for a `PivotTableVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-tableconditionalformattingoption-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-tableconditionalformattingoption-syntax.json"></a>

```
{
  "[Cell](#cfn-quicksight-dashboard-tableconditionalformattingoption-cell)" : TableCellConditionalFormatting,
  "[Row](#cfn-quicksight-dashboard-tableconditionalformattingoption-row)" : TableRowConditionalFormatting
}
```

### YAML<a name="aws-properties-quicksight-dashboard-tableconditionalformattingoption-syntax.yaml"></a>

```
  [Cell](#cfn-quicksight-dashboard-tableconditionalformattingoption-cell):
    TableCellConditionalFormatting
  [Row](#cfn-quicksight-dashboard-tableconditionalformattingoption-row):
    TableRowConditionalFormatting
```

## Properties<a name="aws-properties-quicksight-dashboard-tableconditionalformattingoption-properties"></a>

`Cell` <a name="cfn-quicksight-dashboard-tableconditionalformattingoption-cell"></a>
The cell conditional formatting option for a table\.  
_Required_: No  
_Type_: [TableCellConditionalFormatting](aws-properties-quicksight-dashboard-tablecellconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Row` <a name="cfn-quicksight-dashboard-tableconditionalformattingoption-row"></a>
The row conditional formatting option for a table\.  
_Required_: No  
_Type_: [TableRowConditionalFormatting](aws-properties-quicksight-dashboard-tablerowconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
