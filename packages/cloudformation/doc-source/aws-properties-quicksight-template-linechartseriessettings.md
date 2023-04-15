# AWS::QuickSight::Template LineChartSeriesSettings<a name="aws-properties-quicksight-template-linechartseriessettings"></a>

The options that determine the presentation of a line series in the visual

## Syntax<a name="aws-properties-quicksight-template-linechartseriessettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-linechartseriessettings-syntax.json"></a>

```
{
  "[LineStyleSettings](#cfn-quicksight-template-linechartseriessettings-linestylesettings)" : LineChartLineStyleSettings,
  "[MarkerStyleSettings](#cfn-quicksight-template-linechartseriessettings-markerstylesettings)" : LineChartMarkerStyleSettings
}
```

### YAML<a name="aws-properties-quicksight-template-linechartseriessettings-syntax.yaml"></a>

```
  [LineStyleSettings](#cfn-quicksight-template-linechartseriessettings-linestylesettings):
    LineChartLineStyleSettings
  [MarkerStyleSettings](#cfn-quicksight-template-linechartseriessettings-markerstylesettings):
    LineChartMarkerStyleSettings
```

## Properties<a name="aws-properties-quicksight-template-linechartseriessettings-properties"></a>

`LineStyleSettings` <a name="cfn-quicksight-template-linechartseriessettings-linestylesettings"></a>
Line styles options for a line series in `LineChartVisual`\.  
_Required_: No  
_Type_: [LineChartLineStyleSettings](aws-properties-quicksight-template-linechartlinestylesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MarkerStyleSettings` <a name="cfn-quicksight-template-linechartseriessettings-markerstylesettings"></a>
Marker styles options for a line series in `LineChartVisual`\.  
_Required_: No  
_Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-template-linechartmarkerstylesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)