# AWS::QuickSight::Analysis Computation<a name="aws-properties-quicksight-analysis-computation"></a>

The computation union that is used in an insight visual\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-analysis-computation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-computation-syntax.json"></a>

```
{
  "[Forecast](#cfn-quicksight-analysis-computation-forecast)" : ForecastComputation,
  "[GrowthRate](#cfn-quicksight-analysis-computation-growthrate)" : GrowthRateComputation,
  "[MaximumMinimum](#cfn-quicksight-analysis-computation-maximumminimum)" : MaximumMinimumComputation,
  "[MetricComparison](#cfn-quicksight-analysis-computation-metriccomparison)" : MetricComparisonComputation,
  "[PeriodOverPeriod](#cfn-quicksight-analysis-computation-periodoverperiod)" : PeriodOverPeriodComputation,
  "[PeriodToDate](#cfn-quicksight-analysis-computation-periodtodate)" : PeriodToDateComputation,
  "[TopBottomMovers](#cfn-quicksight-analysis-computation-topbottommovers)" : TopBottomMoversComputation,
  "[TopBottomRanked](#cfn-quicksight-analysis-computation-topbottomranked)" : TopBottomRankedComputation,
  "[TotalAggregation](#cfn-quicksight-analysis-computation-totalaggregation)" : TotalAggregationComputation,
  "[UniqueValues](#cfn-quicksight-analysis-computation-uniquevalues)" : UniqueValuesComputation
}
```

### YAML<a name="aws-properties-quicksight-analysis-computation-syntax.yaml"></a>

```
  [Forecast](#cfn-quicksight-analysis-computation-forecast):
    ForecastComputation
  [GrowthRate](#cfn-quicksight-analysis-computation-growthrate):
    GrowthRateComputation
  [MaximumMinimum](#cfn-quicksight-analysis-computation-maximumminimum):
    MaximumMinimumComputation
  [MetricComparison](#cfn-quicksight-analysis-computation-metriccomparison):
    MetricComparisonComputation
  [PeriodOverPeriod](#cfn-quicksight-analysis-computation-periodoverperiod):
    PeriodOverPeriodComputation
  [PeriodToDate](#cfn-quicksight-analysis-computation-periodtodate):
    PeriodToDateComputation
  [TopBottomMovers](#cfn-quicksight-analysis-computation-topbottommovers):
    TopBottomMoversComputation
  [TopBottomRanked](#cfn-quicksight-analysis-computation-topbottomranked):
    TopBottomRankedComputation
  [TotalAggregation](#cfn-quicksight-analysis-computation-totalaggregation):
    TotalAggregationComputation
  [UniqueValues](#cfn-quicksight-analysis-computation-uniquevalues):
    UniqueValuesComputation
```

## Properties<a name="aws-properties-quicksight-analysis-computation-properties"></a>

`Forecast` <a name="cfn-quicksight-analysis-computation-forecast"></a>
The forecast computation configuration\.  
_Required_: No  
_Type_: [ForecastComputation](aws-properties-quicksight-analysis-forecastcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GrowthRate` <a name="cfn-quicksight-analysis-computation-growthrate"></a>
The growth rate computation configuration\.  
_Required_: No  
_Type_: [GrowthRateComputation](aws-properties-quicksight-analysis-growthratecomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumMinimum` <a name="cfn-quicksight-analysis-computation-maximumminimum"></a>
The maximum and minimum computation configuration\.  
_Required_: No  
_Type_: [MaximumMinimumComputation](aws-properties-quicksight-analysis-maximumminimumcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricComparison` <a name="cfn-quicksight-analysis-computation-metriccomparison"></a>
The metric comparison computation configuration\.  
_Required_: No  
_Type_: [MetricComparisonComputation](aws-properties-quicksight-analysis-metriccomparisoncomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodOverPeriod` <a name="cfn-quicksight-analysis-computation-periodoverperiod"></a>
The period over period computation configuration\.  
_Required_: No  
_Type_: [PeriodOverPeriodComputation](aws-properties-quicksight-analysis-periodoverperiodcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodToDate` <a name="cfn-quicksight-analysis-computation-periodtodate"></a>
The period to `DataSetIdentifier` computation configuration\.  
_Required_: No  
_Type_: [PeriodToDateComputation](aws-properties-quicksight-analysis-periodtodatecomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TopBottomMovers` <a name="cfn-quicksight-analysis-computation-topbottommovers"></a>
The top movers and bottom movers computation configuration\.  
_Required_: No  
_Type_: [TopBottomMoversComputation](aws-properties-quicksight-analysis-topbottommoverscomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TopBottomRanked` <a name="cfn-quicksight-analysis-computation-topbottomranked"></a>
The top ranked and bottom ranked computation configuration\.  
_Required_: No  
_Type_: [TopBottomRankedComputation](aws-properties-quicksight-analysis-topbottomrankedcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TotalAggregation` <a name="cfn-quicksight-analysis-computation-totalaggregation"></a>
The total aggregation computation configuration\.  
_Required_: No  
_Type_: [TotalAggregationComputation](aws-properties-quicksight-analysis-totalaggregationcomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UniqueValues` <a name="cfn-quicksight-analysis-computation-uniquevalues"></a>
The unique values computation configuration\.  
_Required_: No  
_Type_: [UniqueValuesComputation](aws-properties-quicksight-analysis-uniquevaluescomputation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
