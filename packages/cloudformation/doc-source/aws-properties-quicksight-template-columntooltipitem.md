# AWS::QuickSight::Template ColumnTooltipItem<a name="aws-properties-quicksight-template-columntooltipitem"></a>

The tooltip item for the columns that are not part of a field well\.

## Syntax<a name="aws-properties-quicksight-template-columntooltipitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-columntooltipitem-syntax.json"></a>

```
{
  "[Aggregation](#cfn-quicksight-template-columntooltipitem-aggregation)" : AggregationFunction,
  "[Column](#cfn-quicksight-template-columntooltipitem-column)" : ColumnIdentifier,
  "[Label](#cfn-quicksight-template-columntooltipitem-label)" : String,
  "[Visibility](#cfn-quicksight-template-columntooltipitem-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-columntooltipitem-syntax.yaml"></a>

```
  [Aggregation](#cfn-quicksight-template-columntooltipitem-aggregation):
    AggregationFunction
  [Column](#cfn-quicksight-template-columntooltipitem-column):
    ColumnIdentifier
  [Label](#cfn-quicksight-template-columntooltipitem-label): String
  [Visibility](#cfn-quicksight-template-columntooltipitem-visibility): String
```

## Properties<a name="aws-properties-quicksight-template-columntooltipitem-properties"></a>

`Aggregation` <a name="cfn-quicksight-template-columntooltipitem-aggregation"></a>
The aggregation function of the column tooltip item\.  
_Required_: No  
_Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-template-columntooltipitem-column"></a>
The target column of the tooltip item\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Label` <a name="cfn-quicksight-template-columntooltipitem-label"></a>
The label of the tooltip item\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-template-columntooltipitem-visibility"></a>
The visibility of the tooltip item\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
