# AWS::QuickSight::Dashboard LineChartMarkerStyleSettings<a name="aws-properties-quicksight-dashboard-linechartmarkerstylesettings"></a>

Marker styles options for a line series in `LineChartVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-linechartmarkerstylesettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-linechartmarkerstylesettings-syntax.json"></a>

```
{
  "[MarkerColor](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markercolor)" : String,
  "[MarkerShape](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markershape)" : String,
  "[MarkerSize](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markersize)" : String,
  "[MarkerVisibility](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markervisibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-linechartmarkerstylesettings-syntax.yaml"></a>

```
  [MarkerColor](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markercolor): String
  [MarkerShape](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markershape): String
  [MarkerSize](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markersize): String
  [MarkerVisibility](#cfn-quicksight-dashboard-linechartmarkerstylesettings-markervisibility): String
```

## Properties<a name="aws-properties-quicksight-dashboard-linechartmarkerstylesettings-properties"></a>

`MarkerColor` <a name="cfn-quicksight-dashboard-linechartmarkerstylesettings-markercolor"></a>
Color of marker in the series\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MarkerShape` <a name="cfn-quicksight-dashboard-linechartmarkerstylesettings-markershape"></a>
Shape option for markers in the series\.

- `CIRCLE`: Show marker as a circle\.
- `TRIANGLE`: Show marker as a triangle\.
- `SQUARE`: Show marker as a square\.
- `DIAMOND`: Show marker as a diamond\.
- `ROUNDED_SQUARE`: Show marker as a rounded square\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `CIRCLE | DIAMOND | ROUNDED_SQUARE | SQUARE | TRIANGLE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MarkerSize` <a name="cfn-quicksight-dashboard-linechartmarkerstylesettings-markersize"></a>
Size of marker in the series\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MarkerVisibility` <a name="cfn-quicksight-dashboard-linechartmarkerstylesettings-markervisibility"></a>
Configuration option that determines whether to show the markers in the series\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
