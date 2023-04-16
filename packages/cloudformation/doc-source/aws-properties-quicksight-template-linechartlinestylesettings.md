# AWS::QuickSight::Template LineChartLineStyleSettings<a name="aws-properties-quicksight-template-linechartlinestylesettings"></a>

Line styles options for a line series in `LineChartVisual`\.

## Syntax<a name="aws-properties-quicksight-template-linechartlinestylesettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-linechartlinestylesettings-syntax.json"></a>

```
{
  "[LineInterpolation](#cfn-quicksight-template-linechartlinestylesettings-lineinterpolation)" : String,
  "[LineStyle](#cfn-quicksight-template-linechartlinestylesettings-linestyle)" : String,
  "[LineVisibility](#cfn-quicksight-template-linechartlinestylesettings-linevisibility)" : String,
  "[LineWidth](#cfn-quicksight-template-linechartlinestylesettings-linewidth)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-linechartlinestylesettings-syntax.yaml"></a>

```
  [LineInterpolation](#cfn-quicksight-template-linechartlinestylesettings-lineinterpolation): String
  [LineStyle](#cfn-quicksight-template-linechartlinestylesettings-linestyle): String
  [LineVisibility](#cfn-quicksight-template-linechartlinestylesettings-linevisibility): String
  [LineWidth](#cfn-quicksight-template-linechartlinestylesettings-linewidth): String
```

## Properties<a name="aws-properties-quicksight-template-linechartlinestylesettings-properties"></a>

`LineInterpolation` <a name="cfn-quicksight-template-linechartlinestylesettings-lineinterpolation"></a>
Interpolation style for line series\.

- `LINEAR`: Show as default, linear style\.
- `SMOOTH`: Show as a smooth curve\.
- `STEPPED`: Show steps in line\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `LINEAR | SMOOTH | STEPPED`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LineStyle` <a name="cfn-quicksight-template-linechartlinestylesettings-linestyle"></a>
Line style for line series\.

- `SOLID`: Show as a solid line\.
- `DOTTED`: Show as a dotted line\.
- `DASHED`: Show as a dashed line\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `DASHED | DOTTED | SOLID`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LineVisibility` <a name="cfn-quicksight-template-linechartlinestylesettings-linevisibility"></a>
Configuration option that determines whether to show the line for the series\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LineWidth` <a name="cfn-quicksight-template-linechartlinestylesettings-linewidth"></a>
Width that determines the line thickness\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
