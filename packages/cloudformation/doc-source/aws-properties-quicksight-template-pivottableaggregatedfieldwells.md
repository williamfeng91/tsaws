# AWS::QuickSight::Template PivotTableAggregatedFieldWells<a name="aws-properties-quicksight-template-pivottableaggregatedfieldwells"></a>

The aggregated field well for the pivot table\.

## Syntax<a name="aws-properties-quicksight-template-pivottableaggregatedfieldwells-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-pivottableaggregatedfieldwells-syntax.json"></a>

```
{
  "[Columns](#cfn-quicksight-template-pivottableaggregatedfieldwells-columns)" : [ DimensionField, ... ],
  "[Rows](#cfn-quicksight-template-pivottableaggregatedfieldwells-rows)" : [ DimensionField, ... ],
  "[Values](#cfn-quicksight-template-pivottableaggregatedfieldwells-values)" : [ MeasureField, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-pivottableaggregatedfieldwells-syntax.yaml"></a>

```
  [Columns](#cfn-quicksight-template-pivottableaggregatedfieldwells-columns):
    - DimensionField
  [Rows](#cfn-quicksight-template-pivottableaggregatedfieldwells-rows):
    - DimensionField
  [Values](#cfn-quicksight-template-pivottableaggregatedfieldwells-values):
    - MeasureField
```

## Properties<a name="aws-properties-quicksight-template-pivottableaggregatedfieldwells-properties"></a>

`Columns` <a name="cfn-quicksight-template-pivottableaggregatedfieldwells-columns"></a>
The columns field well for a pivot table\. Values are grouped by columns fields\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)  
_Maximum_: `40`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Rows` <a name="cfn-quicksight-template-pivottableaggregatedfieldwells-rows"></a>
The rows field well for a pivot table\. Values are grouped by rows fields\.  
_Required_: No  
_Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)  
_Maximum_: `40`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-template-pivottableaggregatedfieldwells-values"></a>
The values field well for a pivot table\. Values are aggregated based on rows and columns fields\.  
_Required_: No  
_Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)  
_Maximum_: `40`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
