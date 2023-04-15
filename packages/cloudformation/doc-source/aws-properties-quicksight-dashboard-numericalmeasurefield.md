# AWS::QuickSight::Dashboard NumericalMeasureField<a name="aws-properties-quicksight-dashboard-numericalmeasurefield"></a>

The measure type field with numerical type columns\.

## Syntax<a name="aws-properties-quicksight-dashboard-numericalmeasurefield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-numericalmeasurefield-syntax.json"></a>

```
{
  "[AggregationFunction](#cfn-quicksight-dashboard-numericalmeasurefield-aggregationfunction)" : NumericalAggregationFunction,
  "[Column](#cfn-quicksight-dashboard-numericalmeasurefield-column)" : ColumnIdentifier,
  "[FieldId](#cfn-quicksight-dashboard-numericalmeasurefield-fieldid)" : String,
  "[FormatConfiguration](#cfn-quicksight-dashboard-numericalmeasurefield-formatconfiguration)" : NumberFormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-dashboard-numericalmeasurefield-syntax.yaml"></a>

```
  [AggregationFunction](#cfn-quicksight-dashboard-numericalmeasurefield-aggregationfunction):
    NumericalAggregationFunction
  [Column](#cfn-quicksight-dashboard-numericalmeasurefield-column):
    ColumnIdentifier
  [FieldId](#cfn-quicksight-dashboard-numericalmeasurefield-fieldid): String
  [FormatConfiguration](#cfn-quicksight-dashboard-numericalmeasurefield-formatconfiguration):
    NumberFormatConfiguration
```

## Properties<a name="aws-properties-quicksight-dashboard-numericalmeasurefield-properties"></a>

`AggregationFunction` <a name="cfn-quicksight-dashboard-numericalmeasurefield-aggregationfunction"></a>
The aggregation function of the measure field\.  
_Required_: No  
_Type_: [NumericalAggregationFunction](aws-properties-quicksight-dashboard-numericalaggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-dashboard-numericalmeasurefield-column"></a>
The column that is used in the `NumericalMeasureField`\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-dashboard-numericalmeasurefield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-dashboard-numericalmeasurefield-formatconfiguration"></a>
The format configuration of the field\.  
_Required_: No  
_Type_: [NumberFormatConfiguration](aws-properties-quicksight-dashboard-numberformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
