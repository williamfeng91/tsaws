# AWS::QuickSight::Analysis LineChartDefaultSeriesSettings<a name="aws-properties-quicksight-analysis-linechartdefaultseriessettings"></a>

The options that determine the default presentation of all line series in `LineChartVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-linechartdefaultseriessettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-linechartdefaultseriessettings-syntax.json"></a>

```
{
  "[AxisBinding](#cfn-quicksight-analysis-linechartdefaultseriessettings-axisbinding)" : String,
  "[LineStyleSettings](#cfn-quicksight-analysis-linechartdefaultseriessettings-linestylesettings)" : LineChartLineStyleSettings,
  "[MarkerStyleSettings](#cfn-quicksight-analysis-linechartdefaultseriessettings-markerstylesettings)" : LineChartMarkerStyleSettings
}
```

### YAML<a name="aws-properties-quicksight-analysis-linechartdefaultseriessettings-syntax.yaml"></a>

```
  [AxisBinding](#cfn-quicksight-analysis-linechartdefaultseriessettings-axisbinding): String
  [LineStyleSettings](#cfn-quicksight-analysis-linechartdefaultseriessettings-linestylesettings):
    LineChartLineStyleSettings
  [MarkerStyleSettings](#cfn-quicksight-analysis-linechartdefaultseriessettings-markerstylesettings):
    LineChartMarkerStyleSettings
```

## Properties<a name="aws-properties-quicksight-analysis-linechartdefaultseriessettings-properties"></a>

`AxisBinding` <a name="cfn-quicksight-analysis-linechartdefaultseriessettings-axisbinding"></a>
The axis to which you are binding all line series to\.  
_Required_: No  
_Type_: String  
_Allowed values_: `PRIMARY_YAXIS | SECONDARY_YAXIS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LineStyleSettings` <a name="cfn-quicksight-analysis-linechartdefaultseriessettings-linestylesettings"></a>
Line styles options for all line series in the visual\.  
_Required_: No  
_Type_: [LineChartLineStyleSettings](aws-properties-quicksight-analysis-linechartlinestylesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MarkerStyleSettings` <a name="cfn-quicksight-analysis-linechartdefaultseriessettings-markerstylesettings"></a>
Marker styles options for all line series in the visual\.  
_Required_: No  
_Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-analysis-linechartmarkerstylesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
