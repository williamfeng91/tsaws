# AWS::QuickSight::Dashboard FilledMapAggregatedFieldWells<a name="aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells"></a>

The aggregated field well of the filled map\.

## Syntax<a name="aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells-syntax.json"></a>

```
{
  "[Geospatial](#cfn-quicksight-dashboard-filledmapaggregatedfieldwells-geospatial)" : [ DimensionField, ... ],
  "[Values](#cfn-quicksight-dashboard-filledmapaggregatedfieldwells-values)" : [ MeasureField, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells-syntax.yaml"></a>

```
  [Geospatial](#cfn-quicksight-dashboard-filledmapaggregatedfieldwells-geospatial):
    - DimensionField
  [Values](#cfn-quicksight-dashboard-filledmapaggregatedfieldwells-values):
    - MeasureField
```

## Properties<a name="aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells-properties"></a>

`Geospatial` <a name="cfn-quicksight-dashboard-filledmapaggregatedfieldwells-geospatial"></a>
The aggregated location field well of the filled map\. Values are grouped by location fields\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-dashboard-filledmapaggregatedfieldwells-values"></a>
The aggregated color field well of a filled map\. Values are aggregated based on location fields\.  
_Required_: No  
_Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
