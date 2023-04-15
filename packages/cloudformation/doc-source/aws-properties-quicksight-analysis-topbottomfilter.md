# AWS::QuickSight::Analysis TopBottomFilter<a name="aws-properties-quicksight-analysis-topbottomfilter"></a>

A `TopBottomFilter` filters values that are at the top or the bottom\.

## Syntax<a name="aws-properties-quicksight-analysis-topbottomfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-topbottomfilter-syntax.json"></a>

```
{
  "[AggregationSortConfigurations](#cfn-quicksight-analysis-topbottomfilter-aggregationsortconfigurations)" : [ AggregationSortConfiguration, ... ],
  "[Column](#cfn-quicksight-analysis-topbottomfilter-column)" : ColumnIdentifier,
  "[FilterId](#cfn-quicksight-analysis-topbottomfilter-filterid)" : String,
  "[Limit](#cfn-quicksight-analysis-topbottomfilter-limit)" : Double,
  "[ParameterName](#cfn-quicksight-analysis-topbottomfilter-parametername)" : String,
  "[TimeGranularity](#cfn-quicksight-analysis-topbottomfilter-timegranularity)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-topbottomfilter-syntax.yaml"></a>

```
  [AggregationSortConfigurations](#cfn-quicksight-analysis-topbottomfilter-aggregationsortconfigurations):
    - AggregationSortConfiguration
  [Column](#cfn-quicksight-analysis-topbottomfilter-column):
    ColumnIdentifier
  [FilterId](#cfn-quicksight-analysis-topbottomfilter-filterid): String
  [Limit](#cfn-quicksight-analysis-topbottomfilter-limit): Double
  [ParameterName](#cfn-quicksight-analysis-topbottomfilter-parametername): String
  [TimeGranularity](#cfn-quicksight-analysis-topbottomfilter-timegranularity): String
```

## Properties<a name="aws-properties-quicksight-analysis-topbottomfilter-properties"></a>

`AggregationSortConfigurations` <a name="cfn-quicksight-analysis-topbottomfilter-aggregationsortconfigurations"></a>
The aggregation and sort configuration of the top bottom filter\.  
_Required_: Yes  
_Type_: List of [AggregationSortConfiguration](aws-properties-quicksight-analysis-aggregationsortconfiguration.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-topbottomfilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterId` <a name="cfn-quicksight-analysis-topbottomfilter-filterid"></a>
An identifier that uniquely identifies a filter within a dashboard, analysis, or template\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Limit` <a name="cfn-quicksight-analysis-topbottomfilter-limit"></a>
The number of items to include in the top bottom filter results\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterName` <a name="cfn-quicksight-analysis-topbottomfilter-parametername"></a>
The parameter whose value should be used for the filter value\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimeGranularity` <a name="cfn-quicksight-analysis-topbottomfilter-timegranularity"></a>
The level of time precision that is used to aggregate `DateTime` values\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
