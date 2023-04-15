# AWS::QuickSight::Template Computation<a name="aws-properties-quicksight-template-computation"></a>

The computation union that is used in an insight visual\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-template-computation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-computation-syntax.json"></a>

```
{
  "[Forecast](#cfn-quicksight-template-computation-forecast)" : ForecastComputation,
  "[GrowthRate](#cfn-quicksight-template-computation-growthrate)" : GrowthRateComputation,
  "[MaximumMinimum](#cfn-quicksight-template-computation-maximumminimum)" : MaximumMinimumComputation,
  "[MetricComparison](#cfn-quicksight-template-computation-metriccomparison)" : MetricComparisonComputation,
  "[PeriodOverPeriod](#cfn-quicksight-template-computation-periodoverperiod)" : PeriodOverPeriodComputation,
  "[PeriodToDate](#cfn-quicksight-template-computation-periodtodate)" : PeriodToDateComputation,
  "[TopBottomMovers](#cfn-quicksight-template-computation-topbottommovers)" : TopBottomMoversComputation,
  "[TopBottomRanked](#cfn-quicksight-template-computation-topbottomranked)" : TopBottomRankedComputation,
  "[TotalAggregation](#cfn-quicksight-template-computation-totalaggregation)" : TotalAggregationComputation,
  "[UniqueValues](#cfn-quicksight-template-computation-uniquevalues)" : UniqueValuesComputation
}
```

### YAML<a name="aws-properties-quicksight-template-computation-syntax.yaml"></a>

```
  [Forecast](#cfn-quicksight-template-computation-forecast):
    ForecastComputation
  [GrowthRate](#cfn-quicksight-template-computation-growthrate):
    GrowthRateComputation
  [MaximumMinimum](#cfn-quicksight-template-computation-maximumminimum):
    MaximumMinimumComputation
  [MetricComparison](#cfn-quicksight-template-computation-metriccomparison):
    MetricComparisonComputation
  [PeriodOverPeriod](#cfn-quicksight-template-computation-periodoverperiod):
    PeriodOverPeriodComputation
  [PeriodToDate](#cfn-quicksight-template-computation-periodtodate):
    PeriodToDateComputation
  [TopBottomMovers](#cfn-quicksight-template-computation-topbottommovers):
    TopBottomMoversComputation
  [TopBottomRanked](#cfn-quicksight-template-computation-topbottomranked):
    TopBottomRankedComputation
  [TotalAggregation](#cfn-quicksight-template-computation-totalaggregation):
    TotalAggregationComputation
  [UniqueValues](#cfn-quicksight-template-computation-uniquevalues):
    UniqueValuesComputation
```

## Properties<a name="aws-properties-quicksight-template-computation-properties"></a>

`Forecast` <a name="cfn-quicksight-template-computation-forecast"></a>
The forecast computation configuration\.  
_Required_: No  
_Type_: [ForecastComputation](aws-properties-quicksight-template-forecastcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GrowthRate` <a name="cfn-quicksight-template-computation-growthrate"></a>
The growth rate computation configuration\.  
_Required_: No  
_Type_: [GrowthRateComputation](aws-properties-quicksight-template-growthratecomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumMinimum` <a name="cfn-quicksight-template-computation-maximumminimum"></a>
The maximum and minimum computation configuration\.  
_Required_: No  
_Type_: [MaximumMinimumComputation](aws-properties-quicksight-template-maximumminimumcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricComparison` <a name="cfn-quicksight-template-computation-metriccomparison"></a>
The metric comparison computation configuration\.  
_Required_: No  
_Type_: [MetricComparisonComputation](aws-properties-quicksight-template-metriccomparisoncomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodOverPeriod` <a name="cfn-quicksight-template-computation-periodoverperiod"></a>
The period over period computation configuration\.  
_Required_: No  
_Type_: [PeriodOverPeriodComputation](aws-properties-quicksight-template-periodoverperiodcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodToDate` <a name="cfn-quicksight-template-computation-periodtodate"></a>
The period to `DataSetIdentifier` computation configuration\.  
_Required_: No  
_Type_: [PeriodToDateComputation](aws-properties-quicksight-template-periodtodatecomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TopBottomMovers` <a name="cfn-quicksight-template-computation-topbottommovers"></a>
The top movers and bottom movers computation configuration\.  
_Required_: No  
_Type_: [TopBottomMoversComputation](aws-properties-quicksight-template-topbottommoverscomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TopBottomRanked` <a name="cfn-quicksight-template-computation-topbottomranked"></a>
The top ranked and bottom ranked computation configuration\.  
_Required_: No  
_Type_: [TopBottomRankedComputation](aws-properties-quicksight-template-topbottomrankedcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TotalAggregation` <a name="cfn-quicksight-template-computation-totalaggregation"></a>
The total aggregation computation configuration\.  
_Required_: No  
_Type_: [TotalAggregationComputation](aws-properties-quicksight-template-totalaggregationcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UniqueValues` <a name="cfn-quicksight-template-computation-uniquevalues"></a>
The unique values computation configuration\.  
_Required_: No  
_Type_: [UniqueValuesComputation](aws-properties-quicksight-template-uniquevaluescomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
