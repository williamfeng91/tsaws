# AWS::QuickSight::Dashboard CategoricalMeasureField<a name="aws-properties-quicksight-dashboard-categoricalmeasurefield"></a>

The measure type field with categorical type columns\.

## Syntax<a name="aws-properties-quicksight-dashboard-categoricalmeasurefield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-categoricalmeasurefield-syntax.json"></a>

```
{
  "[AggregationFunction](#cfn-quicksight-dashboard-categoricalmeasurefield-aggregationfunction)" : String,
  "[Column](#cfn-quicksight-dashboard-categoricalmeasurefield-column)" : ColumnIdentifier,
  "[FieldId](#cfn-quicksight-dashboard-categoricalmeasurefield-fieldid)" : String,
  "[FormatConfiguration](#cfn-quicksight-dashboard-categoricalmeasurefield-formatconfiguration)" : StringFormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-dashboard-categoricalmeasurefield-syntax.yaml"></a>

```
  [AggregationFunction](#cfn-quicksight-dashboard-categoricalmeasurefield-aggregationfunction): String
  [Column](#cfn-quicksight-dashboard-categoricalmeasurefield-column):
    ColumnIdentifier
  [FieldId](#cfn-quicksight-dashboard-categoricalmeasurefield-fieldid): String
  [FormatConfiguration](#cfn-quicksight-dashboard-categoricalmeasurefield-formatconfiguration):
    StringFormatConfiguration
```

## Properties<a name="aws-properties-quicksight-dashboard-categoricalmeasurefield-properties"></a>

`AggregationFunction` <a name="cfn-quicksight-dashboard-categoricalmeasurefield-aggregationfunction"></a>
The aggregation function of the measure field\.  
_Required_: No  
_Type_: [String](aws-properties-quicksight-dashboard-aggregationfunction.md)  
_Allowed values_: `COUNT | DISTINCT_COUNT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-dashboard-categoricalmeasurefield-column"></a>
The column that is used in the `CategoricalMeasureField`\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-dashboard-categoricalmeasurefield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-dashboard-categoricalmeasurefield-formatconfiguration"></a>
The format configuration of the field\.  
_Required_: No  
_Type_: [StringFormatConfiguration](aws-properties-quicksight-dashboard-stringformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
