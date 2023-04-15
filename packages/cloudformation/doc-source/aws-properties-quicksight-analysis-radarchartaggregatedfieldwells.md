# AWS::QuickSight::Analysis RadarChartAggregatedFieldWells<a name="aws-properties-quicksight-analysis-radarchartaggregatedfieldwells"></a>

The aggregated field well configuration of a `RadarChartVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-radarchartaggregatedfieldwells-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-radarchartaggregatedfieldwells-syntax.json"></a>

```
{
  "[Category](#cfn-quicksight-analysis-radarchartaggregatedfieldwells-category)" : [ DimensionField, ... ],
  "[Color](#cfn-quicksight-analysis-radarchartaggregatedfieldwells-color)" : [ DimensionField, ... ],
  "[Values](#cfn-quicksight-analysis-radarchartaggregatedfieldwells-values)" : [ MeasureField, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-radarchartaggregatedfieldwells-syntax.yaml"></a>

```
  [Category](#cfn-quicksight-analysis-radarchartaggregatedfieldwells-category):
    - DimensionField
  [Color](#cfn-quicksight-analysis-radarchartaggregatedfieldwells-color):
    - DimensionField
  [Values](#cfn-quicksight-analysis-radarchartaggregatedfieldwells-values):
    - MeasureField
```

## Properties<a name="aws-properties-quicksight-analysis-radarchartaggregatedfieldwells-properties"></a>

`Category` <a name="cfn-quicksight-analysis-radarchartaggregatedfieldwells-category"></a>
The aggregated field well categories of a radar chart\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Color` <a name="cfn-quicksight-analysis-radarchartaggregatedfieldwells-color"></a>
The color that are assigned to the aggregated field wells of a radar chart\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-analysis-radarchartaggregatedfieldwells-values"></a>
The values that are assigned to the aggregated field wells of a radar chart\.  
_Required_: No  
_Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
