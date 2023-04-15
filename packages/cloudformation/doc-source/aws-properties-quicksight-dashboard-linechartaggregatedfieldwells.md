# AWS::QuickSight::Dashboard LineChartAggregatedFieldWells<a name="aws-properties-quicksight-dashboard-linechartaggregatedfieldwells"></a>

The field well configuration of a line chart\.

## Syntax<a name="aws-properties-quicksight-dashboard-linechartaggregatedfieldwells-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-linechartaggregatedfieldwells-syntax.json"></a>

```
{
  "[Category](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-category)" : [ DimensionField, ... ],
  "[Colors](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-colors)" : [ DimensionField, ... ],
  "[SmallMultiples](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-smallmultiples)" : [ DimensionField, ... ],
  "[Values](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-values)" : [ MeasureField, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-linechartaggregatedfieldwells-syntax.yaml"></a>

```
  [Category](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-category):
    - DimensionField
  [Colors](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-colors):
    - DimensionField
  [SmallMultiples](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-smallmultiples):
    - DimensionField
  [Values](#cfn-quicksight-dashboard-linechartaggregatedfieldwells-values):
    - MeasureField
```

## Properties<a name="aws-properties-quicksight-dashboard-linechartaggregatedfieldwells-properties"></a>

`Category` <a name="cfn-quicksight-dashboard-linechartaggregatedfieldwells-category"></a>
The category field wells of a line chart\. Values are grouped by category fields\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Colors` <a name="cfn-quicksight-dashboard-linechartaggregatedfieldwells-colors"></a>
The color field wells of a line chart\. Values are grouped by category fields\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiples` <a name="cfn-quicksight-dashboard-linechartaggregatedfieldwells-smallmultiples"></a>
The small multiples field well of a line chart\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-dashboard-linechartaggregatedfieldwells-values"></a>
The value field wells of a line chart\. Values are aggregated based on categories\.  
_Required_: No  
_Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
