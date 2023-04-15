# AWS::QuickSight::Dashboard HistogramConfiguration<a name="aws-properties-quicksight-dashboard-histogramconfiguration"></a>

The configuration for a `HistogramVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-histogramconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-histogramconfiguration-syntax.json"></a>

```
{
  "[BinOptions](#cfn-quicksight-dashboard-histogramconfiguration-binoptions)" : HistogramBinOptions,
  "[DataLabels](#cfn-quicksight-dashboard-histogramconfiguration-datalabels)" : DataLabelOptions,
  "[FieldWells](#cfn-quicksight-dashboard-histogramconfiguration-fieldwells)" : HistogramFieldWells,
  "[Tooltip](#cfn-quicksight-dashboard-histogramconfiguration-tooltip)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-dashboard-histogramconfiguration-visualpalette)" : VisualPalette,
  "[XAxisDisplayOptions](#cfn-quicksight-dashboard-histogramconfiguration-xaxisdisplayoptions)" : AxisDisplayOptions,
  "[XAxisLabelOptions](#cfn-quicksight-dashboard-histogramconfiguration-xaxislabeloptions)" : ChartAxisLabelOptions,
  "[YAxisDisplayOptions](#cfn-quicksight-dashboard-histogramconfiguration-yaxisdisplayoptions)" : AxisDisplayOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-histogramconfiguration-syntax.yaml"></a>

```
  [BinOptions](#cfn-quicksight-dashboard-histogramconfiguration-binoptions):
    HistogramBinOptions
  [DataLabels](#cfn-quicksight-dashboard-histogramconfiguration-datalabels):
    DataLabelOptions
  [FieldWells](#cfn-quicksight-dashboard-histogramconfiguration-fieldwells):
    HistogramFieldWells
  [Tooltip](#cfn-quicksight-dashboard-histogramconfiguration-tooltip):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-dashboard-histogramconfiguration-visualpalette):
    VisualPalette
  [XAxisDisplayOptions](#cfn-quicksight-dashboard-histogramconfiguration-xaxisdisplayoptions):
    AxisDisplayOptions
  [XAxisLabelOptions](#cfn-quicksight-dashboard-histogramconfiguration-xaxislabeloptions):
    ChartAxisLabelOptions
  [YAxisDisplayOptions](#cfn-quicksight-dashboard-histogramconfiguration-yaxisdisplayoptions):
    AxisDisplayOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-histogramconfiguration-properties"></a>

`BinOptions` <a name="cfn-quicksight-dashboard-histogramconfiguration-binoptions"></a>
The options that determine the presentation of histogram bins\.  
_Required_: No  
_Type_: [HistogramBinOptions](aws-properties-quicksight-dashboard-histogrambinoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabels` <a name="cfn-quicksight-dashboard-histogramconfiguration-datalabels"></a>
The data label configuration of a histogram\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-dashboard-histogramconfiguration-fieldwells"></a>
The field well configuration of a histogram\.  
_Required_: No  
_Type_: [HistogramFieldWells](aws-properties-quicksight-dashboard-histogramfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-dashboard-histogramconfiguration-tooltip"></a>
The tooltip configuration of a histogram\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-dashboard-histogramconfiguration-visualpalette"></a>
The visual palette configuration of a histogram\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisDisplayOptions` <a name="cfn-quicksight-dashboard-histogramconfiguration-xaxisdisplayoptions"></a>
The options that determine the presentation of the x\-axis\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisLabelOptions` <a name="cfn-quicksight-dashboard-histogramconfiguration-xaxislabeloptions"></a>
The options that determine the presentation of the x\-axis label\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`YAxisDisplayOptions` <a name="cfn-quicksight-dashboard-histogramconfiguration-yaxisdisplayoptions"></a>
The options that determine the presentation of the y\-axis\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
