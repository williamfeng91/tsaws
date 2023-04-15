# AWS::QuickSight::Template TableConditionalFormattingOption<a name="aws-properties-quicksight-template-tableconditionalformattingoption"></a>

Conditional formatting options for a `PivotTableVisual`\.

## Syntax<a name="aws-properties-quicksight-template-tableconditionalformattingoption-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-tableconditionalformattingoption-syntax.json"></a>

```
{
  "[Cell](#cfn-quicksight-template-tableconditionalformattingoption-cell)" : TableCellConditionalFormatting,
  "[Row](#cfn-quicksight-template-tableconditionalformattingoption-row)" : TableRowConditionalFormatting
}
```

### YAML<a name="aws-properties-quicksight-template-tableconditionalformattingoption-syntax.yaml"></a>

```
  [Cell](#cfn-quicksight-template-tableconditionalformattingoption-cell):
    TableCellConditionalFormatting
  [Row](#cfn-quicksight-template-tableconditionalformattingoption-row):
    TableRowConditionalFormatting
```

## Properties<a name="aws-properties-quicksight-template-tableconditionalformattingoption-properties"></a>

`Cell` <a name="cfn-quicksight-template-tableconditionalformattingoption-cell"></a>
The cell conditional formatting option for a table\.  
_Required_: No  
_Type_: [TableCellConditionalFormatting](aws-properties-quicksight-template-tablecellconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Row` <a name="cfn-quicksight-template-tableconditionalformattingoption-row"></a>
The row conditional formatting option for a table\.  
_Required_: No  
_Type_: [TableRowConditionalFormatting](aws-properties-quicksight-template-tablerowconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
