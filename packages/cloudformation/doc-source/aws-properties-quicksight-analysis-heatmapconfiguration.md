# AWS::QuickSight::Analysis HeatMapConfiguration<a name="aws-properties-quicksight-analysis-heatmapconfiguration"></a>

The configuration of a heat map\.

## Syntax<a name="aws-properties-quicksight-analysis-heatmapconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-heatmapconfiguration-syntax.json"></a>

```
{
  "[ColorScale](#cfn-quicksight-analysis-heatmapconfiguration-colorscale)" : ColorScale,
  "[ColumnLabelOptions](#cfn-quicksight-analysis-heatmapconfiguration-columnlabeloptions)" : ChartAxisLabelOptions,
  "[DataLabels](#cfn-quicksight-analysis-heatmapconfiguration-datalabels)" : DataLabelOptions,
  "[FieldWells](#cfn-quicksight-analysis-heatmapconfiguration-fieldwells)" : HeatMapFieldWells,
  "[Legend](#cfn-quicksight-analysis-heatmapconfiguration-legend)" : LegendOptions,
  "[RowLabelOptions](#cfn-quicksight-analysis-heatmapconfiguration-rowlabeloptions)" : ChartAxisLabelOptions,
  "[SortConfiguration](#cfn-quicksight-analysis-heatmapconfiguration-sortconfiguration)" : HeatMapSortConfiguration,
  "[Tooltip](#cfn-quicksight-analysis-heatmapconfiguration-tooltip)" : TooltipOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-heatmapconfiguration-syntax.yaml"></a>

```
  [ColorScale](#cfn-quicksight-analysis-heatmapconfiguration-colorscale):
    ColorScale
  [ColumnLabelOptions](#cfn-quicksight-analysis-heatmapconfiguration-columnlabeloptions):
    ChartAxisLabelOptions
  [DataLabels](#cfn-quicksight-analysis-heatmapconfiguration-datalabels):
    DataLabelOptions
  [FieldWells](#cfn-quicksight-analysis-heatmapconfiguration-fieldwells):
    HeatMapFieldWells
  [Legend](#cfn-quicksight-analysis-heatmapconfiguration-legend):
    LegendOptions
  [RowLabelOptions](#cfn-quicksight-analysis-heatmapconfiguration-rowlabeloptions):
    ChartAxisLabelOptions
  [SortConfiguration](#cfn-quicksight-analysis-heatmapconfiguration-sortconfiguration):
    HeatMapSortConfiguration
  [Tooltip](#cfn-quicksight-analysis-heatmapconfiguration-tooltip):
    TooltipOptions
```

## Properties<a name="aws-properties-quicksight-analysis-heatmapconfiguration-properties"></a>

`ColorScale` <a name="cfn-quicksight-analysis-heatmapconfiguration-colorscale"></a>
The color options \(gradient color, point of divergence\) in a heat map\.  
_Required_: No  
_Type_: [ColorScale](aws-properties-quicksight-analysis-colorscale.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnLabelOptions` <a name="cfn-quicksight-analysis-heatmapconfiguration-columnlabeloptions"></a>
The label options of the column that is displayed in a heat map\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabels` <a name="cfn-quicksight-analysis-heatmapconfiguration-datalabels"></a>
The options that determine if visual data labels are displayed\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-analysis-heatmapconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [HeatMapFieldWells](aws-properties-quicksight-analysis-heatmapfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-analysis-heatmapconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RowLabelOptions` <a name="cfn-quicksight-analysis-heatmapconfiguration-rowlabeloptions"></a>
The label options of the row that is displayed in a `heat map`\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-heatmapconfiguration-sortconfiguration"></a>
The sort configuration of a heat map\.  
_Required_: No  
_Type_: [HeatMapSortConfiguration](aws-properties-quicksight-analysis-heatmapsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-analysis-heatmapconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
