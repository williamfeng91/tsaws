# AWS::QuickSight::Template GaugeChartConfiguration<a name="aws-properties-quicksight-template-gaugechartconfiguration"></a>

The configuration of a `GaugeChartVisual`\.

## Syntax<a name="aws-properties-quicksight-template-gaugechartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-gaugechartconfiguration-syntax.json"></a>

```
{
  "[DataLabels](#cfn-quicksight-template-gaugechartconfiguration-datalabels)" : DataLabelOptions,
  "[FieldWells](#cfn-quicksight-template-gaugechartconfiguration-fieldwells)" : GaugeChartFieldWells,
  "[GaugeChartOptions](#cfn-quicksight-template-gaugechartconfiguration-gaugechartoptions)" : GaugeChartOptions,
  "[TooltipOptions](#cfn-quicksight-template-gaugechartconfiguration-tooltipoptions)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-template-gaugechartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-template-gaugechartconfiguration-syntax.yaml"></a>

```
  [DataLabels](#cfn-quicksight-template-gaugechartconfiguration-datalabels):
    DataLabelOptions
  [FieldWells](#cfn-quicksight-template-gaugechartconfiguration-fieldwells):
    GaugeChartFieldWells
  [GaugeChartOptions](#cfn-quicksight-template-gaugechartconfiguration-gaugechartoptions):
    GaugeChartOptions
  [TooltipOptions](#cfn-quicksight-template-gaugechartconfiguration-tooltipoptions):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-template-gaugechartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-template-gaugechartconfiguration-properties"></a>

`DataLabels` <a name="cfn-quicksight-template-gaugechartconfiguration-datalabels"></a>
The data label configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-template-gaugechartconfiguration-fieldwells"></a>
The field well configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartFieldWells](aws-properties-quicksight-template-gaugechartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GaugeChartOptions` <a name="cfn-quicksight-template-gaugechartconfiguration-gaugechartoptions"></a>
The options that determine the presentation of the `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartOptions](aws-properties-quicksight-template-gaugechartoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TooltipOptions` <a name="cfn-quicksight-template-gaugechartconfiguration-tooltipoptions"></a>
The tooltip configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-template-gaugechartconfiguration-visualpalette"></a>
The visual palette configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
