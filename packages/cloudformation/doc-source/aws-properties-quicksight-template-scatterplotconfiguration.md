# AWS::QuickSight::Template ScatterPlotConfiguration<a name="aws-properties-quicksight-template-scatterplotconfiguration"></a>

The configuration of a scatter plot\.

## Syntax<a name="aws-properties-quicksight-template-scatterplotconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-scatterplotconfiguration-syntax.json"></a>

```
{
  "[DataLabels](#cfn-quicksight-template-scatterplotconfiguration-datalabels)" : DataLabelOptions,
  "[FieldWells](#cfn-quicksight-template-scatterplotconfiguration-fieldwells)" : ScatterPlotFieldWells,
  "[Legend](#cfn-quicksight-template-scatterplotconfiguration-legend)" : LegendOptions,
  "[Tooltip](#cfn-quicksight-template-scatterplotconfiguration-tooltip)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-template-scatterplotconfiguration-visualpalette)" : VisualPalette,
  "[XAxisDisplayOptions](#cfn-quicksight-template-scatterplotconfiguration-xaxisdisplayoptions)" : AxisDisplayOptions,
  "[XAxisLabelOptions](#cfn-quicksight-template-scatterplotconfiguration-xaxislabeloptions)" : ChartAxisLabelOptions,
  "[YAxisDisplayOptions](#cfn-quicksight-template-scatterplotconfiguration-yaxisdisplayoptions)" : AxisDisplayOptions,
  "[YAxisLabelOptions](#cfn-quicksight-template-scatterplotconfiguration-yaxislabeloptions)" : ChartAxisLabelOptions
}
```

### YAML<a name="aws-properties-quicksight-template-scatterplotconfiguration-syntax.yaml"></a>

```
  [DataLabels](#cfn-quicksight-template-scatterplotconfiguration-datalabels):
    DataLabelOptions
  [FieldWells](#cfn-quicksight-template-scatterplotconfiguration-fieldwells):
    ScatterPlotFieldWells
  [Legend](#cfn-quicksight-template-scatterplotconfiguration-legend):
    LegendOptions
  [Tooltip](#cfn-quicksight-template-scatterplotconfiguration-tooltip):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-template-scatterplotconfiguration-visualpalette):
    VisualPalette
  [XAxisDisplayOptions](#cfn-quicksight-template-scatterplotconfiguration-xaxisdisplayoptions):
    AxisDisplayOptions
  [XAxisLabelOptions](#cfn-quicksight-template-scatterplotconfiguration-xaxislabeloptions):
    ChartAxisLabelOptions
  [YAxisDisplayOptions](#cfn-quicksight-template-scatterplotconfiguration-yaxisdisplayoptions):
    AxisDisplayOptions
  [YAxisLabelOptions](#cfn-quicksight-template-scatterplotconfiguration-yaxislabeloptions):
    ChartAxisLabelOptions
```

## Properties<a name="aws-properties-quicksight-template-scatterplotconfiguration-properties"></a>

`DataLabels` <a name="cfn-quicksight-template-scatterplotconfiguration-datalabels"></a>
The options that determine if visual data labels are displayed\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-template-scatterplotconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [ScatterPlotFieldWells](aws-properties-quicksight-template-scatterplotfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-template-scatterplotconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-template-scatterplotconfiguration-tooltip"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-template-scatterplotconfiguration-visualpalette"></a>
The palette \(chart color\) display setup of the visual\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisDisplayOptions` <a name="cfn-quicksight-template-scatterplotconfiguration-xaxisdisplayoptions"></a>
The label display options \(grid line, range, scale, and axis step\) of the scatter plot's x\-axis\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisLabelOptions` <a name="cfn-quicksight-template-scatterplotconfiguration-xaxislabeloptions"></a>
The label options \(label text, label visibility, and sort icon visibility\) of the scatter plot's x\-axis\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`YAxisDisplayOptions` <a name="cfn-quicksight-template-scatterplotconfiguration-yaxisdisplayoptions"></a>
The label display options \(grid line, range, scale, and axis step\) of the scatter plot's y\-axis\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`YAxisLabelOptions` <a name="cfn-quicksight-template-scatterplotconfiguration-yaxislabeloptions"></a>
The label options \(label text, label visibility, and sort icon visibility\) of the scatter plot's y\-axis\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
