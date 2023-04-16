# AWS::QuickSight::Analysis NumericRangeFilter<a name="aws-properties-quicksight-analysis-numericrangefilter"></a>

A `NumericRangeFilter` filters values that are within the value range\.

## Syntax<a name="aws-properties-quicksight-analysis-numericrangefilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-numericrangefilter-syntax.json"></a>

```
{
  "[AggregationFunction](#cfn-quicksight-analysis-numericrangefilter-aggregationfunction)" : AggregationFunction,
  "[Column](#cfn-quicksight-analysis-numericrangefilter-column)" : ColumnIdentifier,
  "[FilterId](#cfn-quicksight-analysis-numericrangefilter-filterid)" : String,
  "[IncludeMaximum](#cfn-quicksight-analysis-numericrangefilter-includemaximum)" : Boolean,
  "[IncludeMinimum](#cfn-quicksight-analysis-numericrangefilter-includeminimum)" : Boolean,
  "[NullOption](#cfn-quicksight-analysis-numericrangefilter-nulloption)" : String,
  "[RangeMaximum](#cfn-quicksight-analysis-numericrangefilter-rangemaximum)" : NumericRangeFilterValue,
  "[RangeMinimum](#cfn-quicksight-analysis-numericrangefilter-rangeminimum)" : NumericRangeFilterValue,
  "[SelectAllOptions](#cfn-quicksight-analysis-numericrangefilter-selectalloptions)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-numericrangefilter-syntax.yaml"></a>

```
  [AggregationFunction](#cfn-quicksight-analysis-numericrangefilter-aggregationfunction):
    AggregationFunction
  [Column](#cfn-quicksight-analysis-numericrangefilter-column):
    ColumnIdentifier
  [FilterId](#cfn-quicksight-analysis-numericrangefilter-filterid): String
  [IncludeMaximum](#cfn-quicksight-analysis-numericrangefilter-includemaximum): Boolean
  [IncludeMinimum](#cfn-quicksight-analysis-numericrangefilter-includeminimum): Boolean
  [NullOption](#cfn-quicksight-analysis-numericrangefilter-nulloption): String
  [RangeMaximum](#cfn-quicksight-analysis-numericrangefilter-rangemaximum):
    NumericRangeFilterValue
  [RangeMinimum](#cfn-quicksight-analysis-numericrangefilter-rangeminimum):
    NumericRangeFilterValue
  [SelectAllOptions](#cfn-quicksight-analysis-numericrangefilter-selectalloptions): String
```

## Properties<a name="aws-properties-quicksight-analysis-numericrangefilter-properties"></a>

`AggregationFunction` <a name="cfn-quicksight-analysis-numericrangefilter-aggregationfunction"></a>
The aggregation function of the filter\.  
_Required_: No  
_Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-numericrangefilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterId` <a name="cfn-quicksight-analysis-numericrangefilter-filterid"></a>
An identifier that uniquely identifies a filter within a dashboard, analysis, or template\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncludeMaximum` <a name="cfn-quicksight-analysis-numericrangefilter-includemaximum"></a>
Determines whether the maximum value in the filter value range should be included in the filtered results\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncludeMinimum` <a name="cfn-quicksight-analysis-numericrangefilter-includeminimum"></a>
Determines whether the minimum value in the filter value range should be included in the filtered results\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullOption` <a name="cfn-quicksight-analysis-numericrangefilter-nulloption"></a>
This option determines how null values should be treated when filtering data\.

- `ALL_VALUES`: Include null values in filtered results\.
- `NULLS_ONLY`: Only include null values in filtered results\.
- `NON_NULLS_ONLY`: Exclude null values from filtered results\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ALL_VALUES | NON_NULLS_ONLY | NULLS_ONLY`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RangeMaximum` <a name="cfn-quicksight-analysis-numericrangefilter-rangemaximum"></a>
The maximum value for the filter value range\.  
_Required_: No  
_Type_: [NumericRangeFilterValue](aws-properties-quicksight-analysis-numericrangefiltervalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RangeMinimum` <a name="cfn-quicksight-analysis-numericrangefilter-rangeminimum"></a>
The minimum value for the filter value range\.  
_Required_: No  
_Type_: [NumericRangeFilterValue](aws-properties-quicksight-analysis-numericrangefiltervalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectAllOptions` <a name="cfn-quicksight-analysis-numericrangefilter-selectalloptions"></a>
Select all of the values\. Null is not the assigned value of select all\.

- `FILTER_ALL_VALUES`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `FILTER_ALL_VALUES`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
