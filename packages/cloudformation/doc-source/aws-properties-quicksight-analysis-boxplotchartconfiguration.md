# AWS::QuickSight::Analysis BoxPlotChartConfiguration<a name="aws-properties-quicksight-analysis-boxplotchartconfiguration"></a>

The configuration of a `BoxPlotVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-boxplotchartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-boxplotchartconfiguration-syntax.json"></a>

```
{
  "[BoxPlotOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-boxplotoptions)" : BoxPlotOptions,
  "[CategoryAxis](#cfn-quicksight-analysis-boxplotchartconfiguration-categoryaxis)" : AxisDisplayOptions,
  "[CategoryLabelOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-categorylabeloptions)" : ChartAxisLabelOptions,
  "[FieldWells](#cfn-quicksight-analysis-boxplotchartconfiguration-fieldwells)" : BoxPlotFieldWells,
  "[Legend](#cfn-quicksight-analysis-boxplotchartconfiguration-legend)" : LegendOptions,
  "[PrimaryYAxisDisplayOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-primaryyaxisdisplayoptions)" : AxisDisplayOptions,
  "[PrimaryYAxisLabelOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-primaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[ReferenceLines](#cfn-quicksight-analysis-boxplotchartconfiguration-referencelines)" : [ ReferenceLine, ... ],
  "[SortConfiguration](#cfn-quicksight-analysis-boxplotchartconfiguration-sortconfiguration)" : BoxPlotSortConfiguration,
  "[Tooltip](#cfn-quicksight-analysis-boxplotchartconfiguration-tooltip)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-analysis-boxplotchartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-analysis-boxplotchartconfiguration-syntax.yaml"></a>

```
  [BoxPlotOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-boxplotoptions):
    BoxPlotOptions
  [CategoryAxis](#cfn-quicksight-analysis-boxplotchartconfiguration-categoryaxis):
    AxisDisplayOptions
  [CategoryLabelOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-categorylabeloptions):
    ChartAxisLabelOptions
  [FieldWells](#cfn-quicksight-analysis-boxplotchartconfiguration-fieldwells):
    BoxPlotFieldWells
  [Legend](#cfn-quicksight-analysis-boxplotchartconfiguration-legend):
    LegendOptions
  [PrimaryYAxisDisplayOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-primaryyaxisdisplayoptions):
    AxisDisplayOptions
  [PrimaryYAxisLabelOptions](#cfn-quicksight-analysis-boxplotchartconfiguration-primaryyaxislabeloptions):
    ChartAxisLabelOptions
  [ReferenceLines](#cfn-quicksight-analysis-boxplotchartconfiguration-referencelines):
    - ReferenceLine
  [SortConfiguration](#cfn-quicksight-analysis-boxplotchartconfiguration-sortconfiguration):
    BoxPlotSortConfiguration
  [Tooltip](#cfn-quicksight-analysis-boxplotchartconfiguration-tooltip):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-analysis-boxplotchartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-analysis-boxplotchartconfiguration-properties"></a>

`BoxPlotOptions` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-boxplotoptions"></a>
The box plot chart options for a box plot visual  
_Required_: No  
_Type_: [BoxPlotOptions](aws-properties-quicksight-analysis-boxplotoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategoryAxis` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-categoryaxis"></a>
The label display options \(grid line, range, scale, axis step\) of a box plot category\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategoryLabelOptions` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-categorylabeloptions"></a>
The label options \(label text, label visibility and sort Icon visibility\) of a box plot category\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [BoxPlotFieldWells](aws-properties-quicksight-analysis-boxplotfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-legend"></a>
Property description not available\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisDisplayOptions` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-primaryyaxisdisplayoptions"></a>
The label display options \(grid line, range, scale, axis step\) of a box plot category\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisLabelOptions` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-primaryyaxislabeloptions"></a>
The label options \(label text, label visibility and sort icon visibility\) of a box plot value\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceLines` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-referencelines"></a>
The reference line setup of the visual\.  
_Required_: No  
_Type_: List of [ReferenceLine](aws-properties-quicksight-analysis-referenceline.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-sortconfiguration"></a>
The sort configuration of a `BoxPlotVisual`\.  
_Required_: No  
_Type_: [BoxPlotSortConfiguration](aws-properties-quicksight-analysis-boxplotsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-analysis-boxplotchartconfiguration-visualpalette"></a>
The palette \(chart color\) display setup of the visual\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
