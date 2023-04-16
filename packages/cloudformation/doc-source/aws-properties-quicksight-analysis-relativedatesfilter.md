# AWS::QuickSight::Analysis RelativeDatesFilter<a name="aws-properties-quicksight-analysis-relativedatesfilter"></a>

A `RelativeDatesFilter` filters relative dates values\.

## Syntax<a name="aws-properties-quicksight-analysis-relativedatesfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-relativedatesfilter-syntax.json"></a>

```
{
  "[AnchorDateConfiguration](#cfn-quicksight-analysis-relativedatesfilter-anchordateconfiguration)" : AnchorDateConfiguration,
  "[Column](#cfn-quicksight-analysis-relativedatesfilter-column)" : ColumnIdentifier,
  "[ExcludePeriodConfiguration](#cfn-quicksight-analysis-relativedatesfilter-excludeperiodconfiguration)" : ExcludePeriodConfiguration,
  "[FilterId](#cfn-quicksight-analysis-relativedatesfilter-filterid)" : String,
  "[MinimumGranularity](#cfn-quicksight-analysis-relativedatesfilter-minimumgranularity)" : String,
  "[NullOption](#cfn-quicksight-analysis-relativedatesfilter-nulloption)" : String,
  "[ParameterName](#cfn-quicksight-analysis-relativedatesfilter-parametername)" : String,
  "[RelativeDateType](#cfn-quicksight-analysis-relativedatesfilter-relativedatetype)" : String,
  "[RelativeDateValue](#cfn-quicksight-analysis-relativedatesfilter-relativedatevalue)" : Double,
  "[TimeGranularity](#cfn-quicksight-analysis-relativedatesfilter-timegranularity)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-relativedatesfilter-syntax.yaml"></a>

```
  [AnchorDateConfiguration](#cfn-quicksight-analysis-relativedatesfilter-anchordateconfiguration):
    AnchorDateConfiguration
  [Column](#cfn-quicksight-analysis-relativedatesfilter-column):
    ColumnIdentifier
  [ExcludePeriodConfiguration](#cfn-quicksight-analysis-relativedatesfilter-excludeperiodconfiguration):
    ExcludePeriodConfiguration
  [FilterId](#cfn-quicksight-analysis-relativedatesfilter-filterid): String
  [MinimumGranularity](#cfn-quicksight-analysis-relativedatesfilter-minimumgranularity): String
  [NullOption](#cfn-quicksight-analysis-relativedatesfilter-nulloption): String
  [ParameterName](#cfn-quicksight-analysis-relativedatesfilter-parametername): String
  [RelativeDateType](#cfn-quicksight-analysis-relativedatesfilter-relativedatetype): String
  [RelativeDateValue](#cfn-quicksight-analysis-relativedatesfilter-relativedatevalue): Double
  [TimeGranularity](#cfn-quicksight-analysis-relativedatesfilter-timegranularity): String
```

## Properties<a name="aws-properties-quicksight-analysis-relativedatesfilter-properties"></a>

`AnchorDateConfiguration` <a name="cfn-quicksight-analysis-relativedatesfilter-anchordateconfiguration"></a>
The date configuration of the filter\.  
_Required_: Yes  
_Type_: [AnchorDateConfiguration](aws-properties-quicksight-analysis-anchordateconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-relativedatesfilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExcludePeriodConfiguration` <a name="cfn-quicksight-analysis-relativedatesfilter-excludeperiodconfiguration"></a>
The configuration for the exclude period of the filter\.  
_Required_: No  
_Type_: [ExcludePeriodConfiguration](aws-properties-quicksight-analysis-excludeperiodconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterId` <a name="cfn-quicksight-analysis-relativedatesfilter-filterid"></a>
An identifier that uniquely identifies a filter within a dashboard, analysis, or template\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MinimumGranularity` <a name="cfn-quicksight-analysis-relativedatesfilter-minimumgranularity"></a>
The minimum granularity \(period granularity\) of the relative dates filter\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullOption` <a name="cfn-quicksight-analysis-relativedatesfilter-nulloption"></a>
This option determines how null values should be treated when filtering data\.

- `ALL_VALUES`: Include null values in filtered results\.
- `NULLS_ONLY`: Only include null values in filtered results\.
- `NON_NULLS_ONLY`: Exclude null values from filtered results\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ALL_VALUES | NON_NULLS_ONLY | NULLS_ONLY`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterName` <a name="cfn-quicksight-analysis-relativedatesfilter-parametername"></a>
The parameter whose value should be used for the filter value\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RelativeDateType` <a name="cfn-quicksight-analysis-relativedatesfilter-relativedatetype"></a>
The range date type of the filter\. Choose one of the options below:

- `PREVIOUS`
- `THIS`
- `LAST`
- `NOW`
- `NEXT`
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `LAST | NEXT | NOW | PREVIOUS | THIS`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RelativeDateValue` <a name="cfn-quicksight-analysis-relativedatesfilter-relativedatevalue"></a>
The date value of the filter\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimeGranularity` <a name="cfn-quicksight-analysis-relativedatesfilter-timegranularity"></a>
The level of time precision that is used to aggregate `DateTime` values\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
