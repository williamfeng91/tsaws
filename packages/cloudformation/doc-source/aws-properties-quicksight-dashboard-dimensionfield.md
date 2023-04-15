# AWS::QuickSight::Dashboard DimensionField<a name="aws-properties-quicksight-dashboard-dimensionfield"></a>

The dimension type field\.

## Syntax<a name="aws-properties-quicksight-dashboard-dimensionfield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-dimensionfield-syntax.json"></a>

```
{
  "[CategoricalDimensionField](#cfn-quicksight-dashboard-dimensionfield-categoricaldimensionfield)" : CategoricalDimensionField,
  "[DateDimensionField](#cfn-quicksight-dashboard-dimensionfield-datedimensionfield)" : DateDimensionField,
  "[NumericalDimensionField](#cfn-quicksight-dashboard-dimensionfield-numericaldimensionfield)" : NumericalDimensionField
}
```

### YAML<a name="aws-properties-quicksight-dashboard-dimensionfield-syntax.yaml"></a>

```
  [CategoricalDimensionField](#cfn-quicksight-dashboard-dimensionfield-categoricaldimensionfield):
    CategoricalDimensionField
  [DateDimensionField](#cfn-quicksight-dashboard-dimensionfield-datedimensionfield):
    DateDimensionField
  [NumericalDimensionField](#cfn-quicksight-dashboard-dimensionfield-numericaldimensionfield):
    NumericalDimensionField
```

## Properties<a name="aws-properties-quicksight-dashboard-dimensionfield-properties"></a>

`CategoricalDimensionField` <a name="cfn-quicksight-dashboard-dimensionfield-categoricaldimensionfield"></a>
The dimension type field with categorical type columns\.  
_Required_: No  
_Type_: [CategoricalDimensionField](aws-properties-quicksight-dashboard-categoricaldimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DateDimensionField` <a name="cfn-quicksight-dashboard-dimensionfield-datedimensionfield"></a>
The dimension type field with date type columns\.  
_Required_: No  
_Type_: [DateDimensionField](aws-properties-quicksight-dashboard-datedimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumericalDimensionField` <a name="cfn-quicksight-dashboard-dimensionfield-numericaldimensionfield"></a>
The dimension type field with numerical type columns\.  
_Required_: No  
_Type_: [NumericalDimensionField](aws-properties-quicksight-dashboard-numericaldimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
