# AWS::QuickSight::Analysis ColumnTooltipItem<a name="aws-properties-quicksight-analysis-columntooltipitem"></a>

The tooltip item for the columns that are not part of a field well\.

## Syntax<a name="aws-properties-quicksight-analysis-columntooltipitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-columntooltipitem-syntax.json"></a>

```
{
  "[Aggregation](#cfn-quicksight-analysis-columntooltipitem-aggregation)" : AggregationFunction,
  "[Column](#cfn-quicksight-analysis-columntooltipitem-column)" : ColumnIdentifier,
  "[Label](#cfn-quicksight-analysis-columntooltipitem-label)" : String,
  "[Visibility](#cfn-quicksight-analysis-columntooltipitem-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-columntooltipitem-syntax.yaml"></a>

```
  [Aggregation](#cfn-quicksight-analysis-columntooltipitem-aggregation):
    AggregationFunction
  [Column](#cfn-quicksight-analysis-columntooltipitem-column):
    ColumnIdentifier
  [Label](#cfn-quicksight-analysis-columntooltipitem-label): String
  [Visibility](#cfn-quicksight-analysis-columntooltipitem-visibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-columntooltipitem-properties"></a>

`Aggregation` <a name="cfn-quicksight-analysis-columntooltipitem-aggregation"></a>
The aggregation function of the column tooltip item\.  
_Required_: No  
_Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-columntooltipitem-column"></a>
The target column of the tooltip item\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Label` <a name="cfn-quicksight-analysis-columntooltipitem-label"></a>
The label of the tooltip item\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-columntooltipitem-visibility"></a>
The visibility of the tooltip item\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
