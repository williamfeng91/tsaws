# AWS::QuickSight::Analysis NumericEqualityFilter<a name="aws-properties-quicksight-analysis-numericequalityfilter"></a>

A `NumericEqualityFilter` filters values that are equal to the specified value\.

## Syntax<a name="aws-properties-quicksight-analysis-numericequalityfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-numericequalityfilter-syntax.json"></a>

```
{
  "[AggregationFunction](#cfn-quicksight-analysis-numericequalityfilter-aggregationfunction)" : AggregationFunction,
  "[Column](#cfn-quicksight-analysis-numericequalityfilter-column)" : ColumnIdentifier,
  "[FilterId](#cfn-quicksight-analysis-numericequalityfilter-filterid)" : String,
  "[MatchOperator](#cfn-quicksight-analysis-numericequalityfilter-matchoperator)" : String,
  "[NullOption](#cfn-quicksight-analysis-numericequalityfilter-nulloption)" : String,
  "[ParameterName](#cfn-quicksight-analysis-numericequalityfilter-parametername)" : String,
  "[SelectAllOptions](#cfn-quicksight-analysis-numericequalityfilter-selectalloptions)" : String,
  "[Value](#cfn-quicksight-analysis-numericequalityfilter-value)" : Double
}
```

### YAML<a name="aws-properties-quicksight-analysis-numericequalityfilter-syntax.yaml"></a>

```
  [AggregationFunction](#cfn-quicksight-analysis-numericequalityfilter-aggregationfunction):
    AggregationFunction
  [Column](#cfn-quicksight-analysis-numericequalityfilter-column):
    ColumnIdentifier
  [FilterId](#cfn-quicksight-analysis-numericequalityfilter-filterid): String
  [MatchOperator](#cfn-quicksight-analysis-numericequalityfilter-matchoperator): String
  [NullOption](#cfn-quicksight-analysis-numericequalityfilter-nulloption): String
  [ParameterName](#cfn-quicksight-analysis-numericequalityfilter-parametername): String
  [SelectAllOptions](#cfn-quicksight-analysis-numericequalityfilter-selectalloptions): String
  [Value](#cfn-quicksight-analysis-numericequalityfilter-value): Double
```

## Properties<a name="aws-properties-quicksight-analysis-numericequalityfilter-properties"></a>

`AggregationFunction` <a name="cfn-quicksight-analysis-numericequalityfilter-aggregationfunction"></a>
The aggregation function of the filter\.  
_Required_: No  
_Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-numericequalityfilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterId` <a name="cfn-quicksight-analysis-numericequalityfilter-filterid"></a>
An identifier that uniquely identifies a filter within a dashboard, analysis, or template\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MatchOperator` <a name="cfn-quicksight-analysis-numericequalityfilter-matchoperator"></a>
The match operator that is used to determine if a filter should be applied\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DOES_NOT_EQUAL | EQUALS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullOption` <a name="cfn-quicksight-analysis-numericequalityfilter-nulloption"></a>
This option determines how null values should be treated when filtering data\.

- `ALL_VALUES`: Include null values in filtered results\.
- `NULLS_ONLY`: Only include null values in filtered results\.
- `NON_NULLS_ONLY`: Exclude null values from filtered results\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ALL_VALUES | NON_NULLS_ONLY | NULLS_ONLY`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterName` <a name="cfn-quicksight-analysis-numericequalityfilter-parametername"></a>
The parameter whose value should be used for the filter value\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectAllOptions` <a name="cfn-quicksight-analysis-numericequalityfilter-selectalloptions"></a>
Select all of the values\. Null is not the assigned value of select all\.

- `FILTER_ALL_VALUES`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `FILTER_ALL_VALUES`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-analysis-numericequalityfilter-value"></a>
The input value\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
