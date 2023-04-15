# AWS::QuickSight::Analysis ReferenceLineDynamicDataConfiguration<a name="aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration"></a>

The dynamic configuration of the reference line data configuration\.

## Syntax<a name="aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration-syntax.json"></a>

```
{
  "[Calculation](#cfn-quicksight-analysis-referencelinedynamicdataconfiguration-calculation)" : NumericalAggregationFunction,
  "[Column](#cfn-quicksight-analysis-referencelinedynamicdataconfiguration-column)" : ColumnIdentifier,
  "[MeasureAggregationFunction](#cfn-quicksight-analysis-referencelinedynamicdataconfiguration-measureaggregationfunction)" : AggregationFunction
}
```

### YAML<a name="aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration-syntax.yaml"></a>

```
  [Calculation](#cfn-quicksight-analysis-referencelinedynamicdataconfiguration-calculation):
    NumericalAggregationFunction
  [Column](#cfn-quicksight-analysis-referencelinedynamicdataconfiguration-column):
    ColumnIdentifier
  [MeasureAggregationFunction](#cfn-quicksight-analysis-referencelinedynamicdataconfiguration-measureaggregationfunction):
    AggregationFunction
```

## Properties<a name="aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration-properties"></a>

`Calculation` <a name="cfn-quicksight-analysis-referencelinedynamicdataconfiguration-calculation"></a>
The calculation that is used in the dynamic data\.  
_Required_: Yes  
_Type_: [NumericalAggregationFunction](aws-properties-quicksight-analysis-numericalaggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-referencelinedynamicdataconfiguration-column"></a>
The column that the dynamic data targets\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MeasureAggregationFunction` <a name="cfn-quicksight-analysis-referencelinedynamicdataconfiguration-measureaggregationfunction"></a>
The aggregation function that is used in the dynamic data\.  
_Required_: Yes  
_Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
