# AWS::QuickSight::Analysis DateMeasureField<a name="aws-properties-quicksight-analysis-datemeasurefield"></a>

The measure type field with date type columns\.

## Syntax<a name="aws-properties-quicksight-analysis-datemeasurefield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-datemeasurefield-syntax.json"></a>

```
{
  "[AggregationFunction](#cfn-quicksight-analysis-datemeasurefield-aggregationfunction)" : String,
  "[Column](#cfn-quicksight-analysis-datemeasurefield-column)" : ColumnIdentifier,
  "[FieldId](#cfn-quicksight-analysis-datemeasurefield-fieldid)" : String,
  "[FormatConfiguration](#cfn-quicksight-analysis-datemeasurefield-formatconfiguration)" : DateTimeFormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-analysis-datemeasurefield-syntax.yaml"></a>

```
  [AggregationFunction](#cfn-quicksight-analysis-datemeasurefield-aggregationfunction): String
  [Column](#cfn-quicksight-analysis-datemeasurefield-column):
    ColumnIdentifier
  [FieldId](#cfn-quicksight-analysis-datemeasurefield-fieldid): String
  [FormatConfiguration](#cfn-quicksight-analysis-datemeasurefield-formatconfiguration):
    DateTimeFormatConfiguration
```

## Properties<a name="aws-properties-quicksight-analysis-datemeasurefield-properties"></a>

`AggregationFunction` <a name="cfn-quicksight-analysis-datemeasurefield-aggregationfunction"></a>
The aggregation function of the measure field\.  
_Required_: No  
_Type_: [String](aws-properties-quicksight-analysis-aggregationfunction.md)  
_Allowed values_: `COUNT | DISTINCT_COUNT | MAX | MIN`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-datemeasurefield-column"></a>
The column that is used in the `DateMeasureField`\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-analysis-datemeasurefield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-analysis-datemeasurefield-formatconfiguration"></a>
The format configuration of the field\.  
_Required_: No  
_Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-analysis-datetimeformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
