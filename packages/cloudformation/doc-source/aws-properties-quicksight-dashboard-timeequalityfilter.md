# AWS::QuickSight::Dashboard TimeEqualityFilter<a name="aws-properties-quicksight-dashboard-timeequalityfilter"></a>

A `TimeEqualityFilter` filters values that are equal to a given value\.

## Syntax<a name="aws-properties-quicksight-dashboard-timeequalityfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-timeequalityfilter-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-dashboard-timeequalityfilter-column)" : ColumnIdentifier,
  "[FilterId](#cfn-quicksight-dashboard-timeequalityfilter-filterid)" : String,
  "[ParameterName](#cfn-quicksight-dashboard-timeequalityfilter-parametername)" : String,
  "[TimeGranularity](#cfn-quicksight-dashboard-timeequalityfilter-timegranularity)" : String,
  "[Value](#cfn-quicksight-dashboard-timeequalityfilter-value)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-timeequalityfilter-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-dashboard-timeequalityfilter-column):
    ColumnIdentifier
  [FilterId](#cfn-quicksight-dashboard-timeequalityfilter-filterid): String
  [ParameterName](#cfn-quicksight-dashboard-timeequalityfilter-parametername): String
  [TimeGranularity](#cfn-quicksight-dashboard-timeequalityfilter-timegranularity): String
  [Value](#cfn-quicksight-dashboard-timeequalityfilter-value): String
```

## Properties<a name="aws-properties-quicksight-dashboard-timeequalityfilter-properties"></a>

`Column` <a name="cfn-quicksight-dashboard-timeequalityfilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterId` <a name="cfn-quicksight-dashboard-timeequalityfilter-filterid"></a>
An identifier that uniquely identifies a filter within a dashboard, analysis, or template\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterName` <a name="cfn-quicksight-dashboard-timeequalityfilter-parametername"></a>
The parameter whose value should be used for the filter value\.  
This field is mutually exclusive to `Value`\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimeGranularity` <a name="cfn-quicksight-dashboard-timeequalityfilter-timegranularity"></a>
The level of time precision that is used to aggregate `DateTime` values\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-dashboard-timeequalityfilter-value"></a>
The value of a `TimeEquality` filter\.  
This field is mutually exclusive to `ParameterName`\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
