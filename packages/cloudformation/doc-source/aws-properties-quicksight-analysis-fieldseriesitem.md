# AWS::QuickSight::Analysis FieldSeriesItem<a name="aws-properties-quicksight-analysis-fieldseriesitem"></a>

The field series item configuration of a line chart\.

## Syntax<a name="aws-properties-quicksight-analysis-fieldseriesitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-fieldseriesitem-syntax.json"></a>

```
{
  "[AxisBinding](#cfn-quicksight-analysis-fieldseriesitem-axisbinding)" : String,
  "[FieldId](#cfn-quicksight-analysis-fieldseriesitem-fieldid)" : String,
  "[Settings](#cfn-quicksight-analysis-fieldseriesitem-settings)" : LineChartSeriesSettings
}
```

### YAML<a name="aws-properties-quicksight-analysis-fieldseriesitem-syntax.yaml"></a>

```
  [AxisBinding](#cfn-quicksight-analysis-fieldseriesitem-axisbinding): String
  [FieldId](#cfn-quicksight-analysis-fieldseriesitem-fieldid): String
  [Settings](#cfn-quicksight-analysis-fieldseriesitem-settings):
    LineChartSeriesSettings
```

## Properties<a name="aws-properties-quicksight-analysis-fieldseriesitem-properties"></a>

`AxisBinding` <a name="cfn-quicksight-analysis-fieldseriesitem-axisbinding"></a>
The axis that you are binding the field to\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `PRIMARY_YAXIS | SECONDARY_YAXIS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-analysis-fieldseriesitem-fieldid"></a>
The field ID of the field for which you are setting the axis binding\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Settings` <a name="cfn-quicksight-analysis-fieldseriesitem-settings"></a>
The options that determine the presentation of line series associated to the field\.  
_Required_: No  
_Type_: [LineChartSeriesSettings](aws-properties-quicksight-analysis-linechartseriessettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
