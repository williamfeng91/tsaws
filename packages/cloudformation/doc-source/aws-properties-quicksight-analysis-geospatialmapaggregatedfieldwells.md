# AWS::QuickSight::Analysis GeospatialMapAggregatedFieldWells<a name="aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells"></a>

The aggregated field wells for a geospatial map\.

## Syntax<a name="aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells-syntax.json"></a>

```
{
  "[Colors](#cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-colors)" : [ DimensionField, ... ],
  "[Geospatial](#cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-geospatial)" : [ DimensionField, ... ],
  "[Values](#cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-values)" : [ MeasureField, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells-syntax.yaml"></a>

```
  [Colors](#cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-colors):
    - DimensionField
  [Geospatial](#cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-geospatial):
    - DimensionField
  [Values](#cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-values):
    - MeasureField
```

## Properties<a name="aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells-properties"></a>

`Colors` <a name="cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-colors"></a>
The color field wells of a geospatial map\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Geospatial` <a name="cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-geospatial"></a>
The geospatial field wells of a geospatial map\. Values are grouped by geospatial fields\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-analysis-geospatialmapaggregatedfieldwells-values"></a>
The size field wells of a geospatial map\. Values are aggregated based on geospatial fields\.  
_Required_: No  
_Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
