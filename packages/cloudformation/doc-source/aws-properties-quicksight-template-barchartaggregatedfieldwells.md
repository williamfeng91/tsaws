# AWS::QuickSight::Template BarChartAggregatedFieldWells<a name="aws-properties-quicksight-template-barchartaggregatedfieldwells"></a>

The aggregated field wells of a bar chart\.

## Syntax<a name="aws-properties-quicksight-template-barchartaggregatedfieldwells-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-barchartaggregatedfieldwells-syntax.json"></a>

```
{
  "[Category](#cfn-quicksight-template-barchartaggregatedfieldwells-category)" : [ DimensionField, ... ],
  "[Colors](#cfn-quicksight-template-barchartaggregatedfieldwells-colors)" : [ DimensionField, ... ],
  "[SmallMultiples](#cfn-quicksight-template-barchartaggregatedfieldwells-smallmultiples)" : [ DimensionField, ... ],
  "[Values](#cfn-quicksight-template-barchartaggregatedfieldwells-values)" : [ MeasureField, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-barchartaggregatedfieldwells-syntax.yaml"></a>

```
  [Category](#cfn-quicksight-template-barchartaggregatedfieldwells-category):
    - DimensionField
  [Colors](#cfn-quicksight-template-barchartaggregatedfieldwells-colors):
    - DimensionField
  [SmallMultiples](#cfn-quicksight-template-barchartaggregatedfieldwells-smallmultiples):
    - DimensionField
  [Values](#cfn-quicksight-template-barchartaggregatedfieldwells-values):
    - MeasureField
```

## Properties<a name="aws-properties-quicksight-template-barchartaggregatedfieldwells-properties"></a>

`Category` <a name="cfn-quicksight-template-barchartaggregatedfieldwells-category"></a>
The category \(y\-axis\) field well of a bar chart\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Colors` <a name="cfn-quicksight-template-barchartaggregatedfieldwells-colors"></a>
The color \(group/color\) field well of a bar chart\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiples` <a name="cfn-quicksight-template-barchartaggregatedfieldwells-smallmultiples"></a>
The small multiples field well of a bar chart\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-template-barchartaggregatedfieldwells-values"></a>
The value field wells of a bar chart\. Values are aggregated by category\.  
_Required_: No  
_Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
