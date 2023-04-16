# AWS::QuickSight::Dashboard GaugeChartConfiguration<a name="aws-properties-quicksight-dashboard-gaugechartconfiguration"></a>

The configuration of a `GaugeChartVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-gaugechartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-gaugechartconfiguration-syntax.json"></a>

```
{
  "[DataLabels](#cfn-quicksight-dashboard-gaugechartconfiguration-datalabels)" : DataLabelOptions,
  "[FieldWells](#cfn-quicksight-dashboard-gaugechartconfiguration-fieldwells)" : GaugeChartFieldWells,
  "[GaugeChartOptions](#cfn-quicksight-dashboard-gaugechartconfiguration-gaugechartoptions)" : GaugeChartOptions,
  "[TooltipOptions](#cfn-quicksight-dashboard-gaugechartconfiguration-tooltipoptions)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-dashboard-gaugechartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-dashboard-gaugechartconfiguration-syntax.yaml"></a>

```
  [DataLabels](#cfn-quicksight-dashboard-gaugechartconfiguration-datalabels):
    DataLabelOptions
  [FieldWells](#cfn-quicksight-dashboard-gaugechartconfiguration-fieldwells):
    GaugeChartFieldWells
  [GaugeChartOptions](#cfn-quicksight-dashboard-gaugechartconfiguration-gaugechartoptions):
    GaugeChartOptions
  [TooltipOptions](#cfn-quicksight-dashboard-gaugechartconfiguration-tooltipoptions):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-dashboard-gaugechartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-dashboard-gaugechartconfiguration-properties"></a>

`DataLabels` <a name="cfn-quicksight-dashboard-gaugechartconfiguration-datalabels"></a>
The data label configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-dashboard-gaugechartconfiguration-fieldwells"></a>
The field well configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartFieldWells](aws-properties-quicksight-dashboard-gaugechartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GaugeChartOptions` <a name="cfn-quicksight-dashboard-gaugechartconfiguration-gaugechartoptions"></a>
The options that determine the presentation of the `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartOptions](aws-properties-quicksight-dashboard-gaugechartoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TooltipOptions` <a name="cfn-quicksight-dashboard-gaugechartconfiguration-tooltipoptions"></a>
The tooltip configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-dashboard-gaugechartconfiguration-visualpalette"></a>
The visual palette configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
