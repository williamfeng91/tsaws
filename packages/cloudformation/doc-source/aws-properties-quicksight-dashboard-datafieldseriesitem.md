# AWS::QuickSight::Dashboard DataFieldSeriesItem<a name="aws-properties-quicksight-dashboard-datafieldseriesitem"></a>

The data field series item configuration of a line chart\.

## Syntax<a name="aws-properties-quicksight-dashboard-datafieldseriesitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datafieldseriesitem-syntax.json"></a>

```
{
  "[AxisBinding](#cfn-quicksight-dashboard-datafieldseriesitem-axisbinding)" : String,
  "[FieldId](#cfn-quicksight-dashboard-datafieldseriesitem-fieldid)" : String,
  "[FieldValue](#cfn-quicksight-dashboard-datafieldseriesitem-fieldvalue)" : String,
  "[Settings](#cfn-quicksight-dashboard-datafieldseriesitem-settings)" : LineChartSeriesSettings
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datafieldseriesitem-syntax.yaml"></a>

```
  [AxisBinding](#cfn-quicksight-dashboard-datafieldseriesitem-axisbinding): String
  [FieldId](#cfn-quicksight-dashboard-datafieldseriesitem-fieldid): String
  [FieldValue](#cfn-quicksight-dashboard-datafieldseriesitem-fieldvalue): String
  [Settings](#cfn-quicksight-dashboard-datafieldseriesitem-settings):
    LineChartSeriesSettings
```

## Properties<a name="aws-properties-quicksight-dashboard-datafieldseriesitem-properties"></a>

`AxisBinding` <a name="cfn-quicksight-dashboard-datafieldseriesitem-axisbinding"></a>
The axis that you are binding the field to\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `PRIMARY_YAXIS | SECONDARY_YAXIS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-dashboard-datafieldseriesitem-fieldid"></a>
The field ID of the field that you are setting the axis binding to\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldValue` <a name="cfn-quicksight-dashboard-datafieldseriesitem-fieldvalue"></a>
The field value of the field that you are setting the axis binding to\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Settings` <a name="cfn-quicksight-dashboard-datafieldseriesitem-settings"></a>
The options that determine the presentation of line series associated to the field\.  
_Required_: No  
_Type_: [LineChartSeriesSettings](aws-properties-quicksight-dashboard-linechartseriessettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
