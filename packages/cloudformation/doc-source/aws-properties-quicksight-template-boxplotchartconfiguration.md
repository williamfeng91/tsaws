# AWS::QuickSight::Template BoxPlotChartConfiguration<a name="aws-properties-quicksight-template-boxplotchartconfiguration"></a>

The configuration of a `BoxPlotVisual`\.

## Syntax<a name="aws-properties-quicksight-template-boxplotchartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-boxplotchartconfiguration-syntax.json"></a>

```
{
  "[BoxPlotOptions](#cfn-quicksight-template-boxplotchartconfiguration-boxplotoptions)" : BoxPlotOptions,
  "[CategoryAxis](#cfn-quicksight-template-boxplotchartconfiguration-categoryaxis)" : AxisDisplayOptions,
  "[CategoryLabelOptions](#cfn-quicksight-template-boxplotchartconfiguration-categorylabeloptions)" : ChartAxisLabelOptions,
  "[FieldWells](#cfn-quicksight-template-boxplotchartconfiguration-fieldwells)" : BoxPlotFieldWells,
  "[Legend](#cfn-quicksight-template-boxplotchartconfiguration-legend)" : LegendOptions,
  "[PrimaryYAxisDisplayOptions](#cfn-quicksight-template-boxplotchartconfiguration-primaryyaxisdisplayoptions)" : AxisDisplayOptions,
  "[PrimaryYAxisLabelOptions](#cfn-quicksight-template-boxplotchartconfiguration-primaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[ReferenceLines](#cfn-quicksight-template-boxplotchartconfiguration-referencelines)" : [ ReferenceLine, ... ],
  "[SortConfiguration](#cfn-quicksight-template-boxplotchartconfiguration-sortconfiguration)" : BoxPlotSortConfiguration,
  "[Tooltip](#cfn-quicksight-template-boxplotchartconfiguration-tooltip)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-template-boxplotchartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-template-boxplotchartconfiguration-syntax.yaml"></a>

```
  [BoxPlotOptions](#cfn-quicksight-template-boxplotchartconfiguration-boxplotoptions):
    BoxPlotOptions
  [CategoryAxis](#cfn-quicksight-template-boxplotchartconfiguration-categoryaxis):
    AxisDisplayOptions
  [CategoryLabelOptions](#cfn-quicksight-template-boxplotchartconfiguration-categorylabeloptions):
    ChartAxisLabelOptions
  [FieldWells](#cfn-quicksight-template-boxplotchartconfiguration-fieldwells):
    BoxPlotFieldWells
  [Legend](#cfn-quicksight-template-boxplotchartconfiguration-legend):
    LegendOptions
  [PrimaryYAxisDisplayOptions](#cfn-quicksight-template-boxplotchartconfiguration-primaryyaxisdisplayoptions):
    AxisDisplayOptions
  [PrimaryYAxisLabelOptions](#cfn-quicksight-template-boxplotchartconfiguration-primaryyaxislabeloptions):
    ChartAxisLabelOptions
  [ReferenceLines](#cfn-quicksight-template-boxplotchartconfiguration-referencelines):
    - ReferenceLine
  [SortConfiguration](#cfn-quicksight-template-boxplotchartconfiguration-sortconfiguration):
    BoxPlotSortConfiguration
  [Tooltip](#cfn-quicksight-template-boxplotchartconfiguration-tooltip):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-template-boxplotchartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-template-boxplotchartconfiguration-properties"></a>

`BoxPlotOptions` <a name="cfn-quicksight-template-boxplotchartconfiguration-boxplotoptions"></a>
The box plot chart options for a box plot visual  
_Required_: No  
_Type_: [BoxPlotOptions](aws-properties-quicksight-template-boxplotoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategoryAxis` <a name="cfn-quicksight-template-boxplotchartconfiguration-categoryaxis"></a>
The label display options \(grid line, range, scale, axis step\) of a box plot category\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategoryLabelOptions` <a name="cfn-quicksight-template-boxplotchartconfiguration-categorylabeloptions"></a>
The label options \(label text, label visibility and sort Icon visibility\) of a box plot category\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-template-boxplotchartconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [BoxPlotFieldWells](aws-properties-quicksight-template-boxplotfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-template-boxplotchartconfiguration-legend"></a>
Property description not available\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisDisplayOptions` <a name="cfn-quicksight-template-boxplotchartconfiguration-primaryyaxisdisplayoptions"></a>
The label display options \(grid line, range, scale, axis step\) of a box plot category\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisLabelOptions` <a name="cfn-quicksight-template-boxplotchartconfiguration-primaryyaxislabeloptions"></a>
The label options \(label text, label visibility and sort icon visibility\) of a box plot value\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceLines` <a name="cfn-quicksight-template-boxplotchartconfiguration-referencelines"></a>
The reference line setup of the visual\.  
_Required_: No  
_Type_: List of [ReferenceLine](aws-properties-quicksight-template-referenceline.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-template-boxplotchartconfiguration-sortconfiguration"></a>
The sort configuration of a `BoxPlotVisual`\.  
_Required_: No  
_Type_: [BoxPlotSortConfiguration](aws-properties-quicksight-template-boxplotsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-template-boxplotchartconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-template-boxplotchartconfiguration-visualpalette"></a>
The palette \(chart color\) display setup of the visual\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
