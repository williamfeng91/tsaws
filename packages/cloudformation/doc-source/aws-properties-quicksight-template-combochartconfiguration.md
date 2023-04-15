# AWS::QuickSight::Template ComboChartConfiguration<a name="aws-properties-quicksight-template-combochartconfiguration"></a>

The configuration of a `ComboChartVisual`\.

## Syntax<a name="aws-properties-quicksight-template-combochartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-combochartconfiguration-syntax.json"></a>

```
{
  "[BarDataLabels](#cfn-quicksight-template-combochartconfiguration-bardatalabels)" : DataLabelOptions,
  "[BarsArrangement](#cfn-quicksight-template-combochartconfiguration-barsarrangement)" : String,
  "[CategoryAxis](#cfn-quicksight-template-combochartconfiguration-categoryaxis)" : AxisDisplayOptions,
  "[CategoryLabelOptions](#cfn-quicksight-template-combochartconfiguration-categorylabeloptions)" : ChartAxisLabelOptions,
  "[ColorLabelOptions](#cfn-quicksight-template-combochartconfiguration-colorlabeloptions)" : ChartAxisLabelOptions,
  "[FieldWells](#cfn-quicksight-template-combochartconfiguration-fieldwells)" : ComboChartFieldWells,
  "[Legend](#cfn-quicksight-template-combochartconfiguration-legend)" : LegendOptions,
  "[LineDataLabels](#cfn-quicksight-template-combochartconfiguration-linedatalabels)" : DataLabelOptions,
  "[PrimaryYAxisDisplayOptions](#cfn-quicksight-template-combochartconfiguration-primaryyaxisdisplayoptions)" : AxisDisplayOptions,
  "[PrimaryYAxisLabelOptions](#cfn-quicksight-template-combochartconfiguration-primaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[ReferenceLines](#cfn-quicksight-template-combochartconfiguration-referencelines)" : [ ReferenceLine, ... ],
  "[SecondaryYAxisDisplayOptions](#cfn-quicksight-template-combochartconfiguration-secondaryyaxisdisplayoptions)" : AxisDisplayOptions,
  "[SecondaryYAxisLabelOptions](#cfn-quicksight-template-combochartconfiguration-secondaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[SortConfiguration](#cfn-quicksight-template-combochartconfiguration-sortconfiguration)" : ComboChartSortConfiguration,
  "[Tooltip](#cfn-quicksight-template-combochartconfiguration-tooltip)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-template-combochartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-template-combochartconfiguration-syntax.yaml"></a>

```
  [BarDataLabels](#cfn-quicksight-template-combochartconfiguration-bardatalabels):
    DataLabelOptions
  [BarsArrangement](#cfn-quicksight-template-combochartconfiguration-barsarrangement): String
  [CategoryAxis](#cfn-quicksight-template-combochartconfiguration-categoryaxis):
    AxisDisplayOptions
  [CategoryLabelOptions](#cfn-quicksight-template-combochartconfiguration-categorylabeloptions):
    ChartAxisLabelOptions
  [ColorLabelOptions](#cfn-quicksight-template-combochartconfiguration-colorlabeloptions):
    ChartAxisLabelOptions
  [FieldWells](#cfn-quicksight-template-combochartconfiguration-fieldwells):
    ComboChartFieldWells
  [Legend](#cfn-quicksight-template-combochartconfiguration-legend):
    LegendOptions
  [LineDataLabels](#cfn-quicksight-template-combochartconfiguration-linedatalabels):
    DataLabelOptions
  [PrimaryYAxisDisplayOptions](#cfn-quicksight-template-combochartconfiguration-primaryyaxisdisplayoptions):
    AxisDisplayOptions
  [PrimaryYAxisLabelOptions](#cfn-quicksight-template-combochartconfiguration-primaryyaxislabeloptions):
    ChartAxisLabelOptions
  [ReferenceLines](#cfn-quicksight-template-combochartconfiguration-referencelines):
    - ReferenceLine
  [SecondaryYAxisDisplayOptions](#cfn-quicksight-template-combochartconfiguration-secondaryyaxisdisplayoptions):
    AxisDisplayOptions
  [SecondaryYAxisLabelOptions](#cfn-quicksight-template-combochartconfiguration-secondaryyaxislabeloptions):
    ChartAxisLabelOptions
  [SortConfiguration](#cfn-quicksight-template-combochartconfiguration-sortconfiguration):
    ComboChartSortConfiguration
  [Tooltip](#cfn-quicksight-template-combochartconfiguration-tooltip):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-template-combochartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-template-combochartconfiguration-properties"></a>

`BarDataLabels` <a name="cfn-quicksight-template-combochartconfiguration-bardatalabels"></a>
The options that determine if visual data labels are displayed\.  
The data label options for a bar in a combo chart\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BarsArrangement` <a name="cfn-quicksight-template-combochartconfiguration-barsarrangement"></a>
Determines the bar arrangement in a combo chart\. The following are valid values in this structure:

- `CLUSTERED`: For clustered bar combo charts\.
- `STACKED`: For stacked bar combo charts\.
- `STACKED_PERCENT`: Do not use\. If you use this value, the operation returns a validation error\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `CLUSTERED | STACKED | STACKED_PERCENT`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategoryAxis` <a name="cfn-quicksight-template-combochartconfiguration-categoryaxis"></a>
The category axis of a combo chart\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategoryLabelOptions` <a name="cfn-quicksight-template-combochartconfiguration-categorylabeloptions"></a>
The label options \(label text, label visibility, and sort icon visibility\) of a combo chart category \(group/color\) field well\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorLabelOptions` <a name="cfn-quicksight-template-combochartconfiguration-colorlabeloptions"></a>
The label options \(label text, label visibility, and sort icon visibility\) of a combo chart's color field well\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-template-combochartconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [ComboChartFieldWells](aws-properties-quicksight-template-combochartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-template-combochartconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LineDataLabels` <a name="cfn-quicksight-template-combochartconfiguration-linedatalabels"></a>
The options that determine if visual data labels are displayed\.  
The data label options for a line in a combo chart\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisDisplayOptions` <a name="cfn-quicksight-template-combochartconfiguration-primaryyaxisdisplayoptions"></a>
The label display options \(grid line, range, scale, and axis step\) of a combo chart's primary y\-axis \(bar\) field well\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisLabelOptions` <a name="cfn-quicksight-template-combochartconfiguration-primaryyaxislabeloptions"></a>
The label options \(label text, label visibility, and sort icon visibility\) of a combo chart's primary y\-axis \(bar\) field well\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceLines` <a name="cfn-quicksight-template-combochartconfiguration-referencelines"></a>
The reference line setup of the visual\.  
_Required_: No  
_Type_: List of [ReferenceLine](aws-properties-quicksight-template-referenceline.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryYAxisDisplayOptions` <a name="cfn-quicksight-template-combochartconfiguration-secondaryyaxisdisplayoptions"></a>
The label display options \(grid line, range, scale, axis step\) of a combo chart's secondary y\-axis \(line\) field well\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryYAxisLabelOptions` <a name="cfn-quicksight-template-combochartconfiguration-secondaryyaxislabeloptions"></a>
The label options \(label text, label visibility, and sort icon visibility\) of a combo chart's secondary y\-axis\(line\) field well\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-template-combochartconfiguration-sortconfiguration"></a>
The sort configuration of a `ComboChartVisual`\.  
_Required_: No  
_Type_: [ComboChartSortConfiguration](aws-properties-quicksight-template-combochartsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-template-combochartconfiguration-tooltip"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-template-combochartconfiguration-visualpalette"></a>
The palette \(chart color\) display setup of the visual\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
