# AWS::QuickSight::Analysis GaugeChartConfiguration<a name="aws-properties-quicksight-analysis-gaugechartconfiguration"></a>

The configuration of a `GaugeChartVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-gaugechartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-gaugechartconfiguration-syntax.json"></a>

```
{
  "[DataLabels](#cfn-quicksight-analysis-gaugechartconfiguration-datalabels)" : DataLabelOptions,
  "[FieldWells](#cfn-quicksight-analysis-gaugechartconfiguration-fieldwells)" : GaugeChartFieldWells,
  "[GaugeChartOptions](#cfn-quicksight-analysis-gaugechartconfiguration-gaugechartoptions)" : GaugeChartOptions,
  "[TooltipOptions](#cfn-quicksight-analysis-gaugechartconfiguration-tooltipoptions)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-analysis-gaugechartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-analysis-gaugechartconfiguration-syntax.yaml"></a>

```
  [DataLabels](#cfn-quicksight-analysis-gaugechartconfiguration-datalabels):
    DataLabelOptions
  [FieldWells](#cfn-quicksight-analysis-gaugechartconfiguration-fieldwells):
    GaugeChartFieldWells
  [GaugeChartOptions](#cfn-quicksight-analysis-gaugechartconfiguration-gaugechartoptions):
    GaugeChartOptions
  [TooltipOptions](#cfn-quicksight-analysis-gaugechartconfiguration-tooltipoptions):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-analysis-gaugechartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-analysis-gaugechartconfiguration-properties"></a>

`DataLabels` <a name="cfn-quicksight-analysis-gaugechartconfiguration-datalabels"></a>
The data label configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-analysis-gaugechartconfiguration-fieldwells"></a>
The field well configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartFieldWells](aws-properties-quicksight-analysis-gaugechartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GaugeChartOptions` <a name="cfn-quicksight-analysis-gaugechartconfiguration-gaugechartoptions"></a>
The options that determine the presentation of the `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartOptions](aws-properties-quicksight-analysis-gaugechartoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TooltipOptions` <a name="cfn-quicksight-analysis-gaugechartconfiguration-tooltipoptions"></a>
The tooltip configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-analysis-gaugechartconfiguration-visualpalette"></a>
The visual palette configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
