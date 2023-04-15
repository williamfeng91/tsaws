# AWS::QuickSight::Analysis MeasureField<a name="aws-properties-quicksight-analysis-measurefield"></a>

The measure \(metric\) type field\.

## Syntax<a name="aws-properties-quicksight-analysis-measurefield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-measurefield-syntax.json"></a>

```
{
  "[CalculatedMeasureField](#cfn-quicksight-analysis-measurefield-calculatedmeasurefield)" : CalculatedMeasureField,
  "[CategoricalMeasureField](#cfn-quicksight-analysis-measurefield-categoricalmeasurefield)" : CategoricalMeasureField,
  "[DateMeasureField](#cfn-quicksight-analysis-measurefield-datemeasurefield)" : DateMeasureField,
  "[NumericalMeasureField](#cfn-quicksight-analysis-measurefield-numericalmeasurefield)" : NumericalMeasureField
}
```

### YAML<a name="aws-properties-quicksight-analysis-measurefield-syntax.yaml"></a>

```
  [CalculatedMeasureField](#cfn-quicksight-analysis-measurefield-calculatedmeasurefield):
    CalculatedMeasureField
  [CategoricalMeasureField](#cfn-quicksight-analysis-measurefield-categoricalmeasurefield):
    CategoricalMeasureField
  [DateMeasureField](#cfn-quicksight-analysis-measurefield-datemeasurefield):
    DateMeasureField
  [NumericalMeasureField](#cfn-quicksight-analysis-measurefield-numericalmeasurefield):
    NumericalMeasureField
```

## Properties<a name="aws-properties-quicksight-analysis-measurefield-properties"></a>

`CalculatedMeasureField` <a name="cfn-quicksight-analysis-measurefield-calculatedmeasurefield"></a>
The calculated measure field only used in pivot tables\.  
_Required_: No  
_Type_: [CalculatedMeasureField](aws-properties-quicksight-analysis-calculatedmeasurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategoricalMeasureField` <a name="cfn-quicksight-analysis-measurefield-categoricalmeasurefield"></a>
The measure type field with categorical type columns\.  
_Required_: No  
_Type_: [CategoricalMeasureField](aws-properties-quicksight-analysis-categoricalmeasurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DateMeasureField` <a name="cfn-quicksight-analysis-measurefield-datemeasurefield"></a>
The measure type field with date type columns\.  
_Required_: No  
_Type_: [DateMeasureField](aws-properties-quicksight-analysis-datemeasurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumericalMeasureField` <a name="cfn-quicksight-analysis-measurefield-numericalmeasurefield"></a>
The measure type field with numerical type columns\.  
_Required_: No  
_Type_: [NumericalMeasureField](aws-properties-quicksight-analysis-numericalmeasurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
