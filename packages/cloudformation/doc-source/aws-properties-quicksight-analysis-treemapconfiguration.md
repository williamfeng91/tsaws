# AWS::QuickSight::Analysis TreeMapConfiguration<a name="aws-properties-quicksight-analysis-treemapconfiguration"></a>

The configuration of a tree map\.

## Syntax<a name="aws-properties-quicksight-analysis-treemapconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-treemapconfiguration-syntax.json"></a>

```
{
  "[ColorLabelOptions](#cfn-quicksight-analysis-treemapconfiguration-colorlabeloptions)" : ChartAxisLabelOptions,
  "[ColorScale](#cfn-quicksight-analysis-treemapconfiguration-colorscale)" : ColorScale,
  "[DataLabels](#cfn-quicksight-analysis-treemapconfiguration-datalabels)" : DataLabelOptions,
  "[FieldWells](#cfn-quicksight-analysis-treemapconfiguration-fieldwells)" : TreeMapFieldWells,
  "[GroupLabelOptions](#cfn-quicksight-analysis-treemapconfiguration-grouplabeloptions)" : ChartAxisLabelOptions,
  "[Legend](#cfn-quicksight-analysis-treemapconfiguration-legend)" : LegendOptions,
  "[SizeLabelOptions](#cfn-quicksight-analysis-treemapconfiguration-sizelabeloptions)" : ChartAxisLabelOptions,
  "[SortConfiguration](#cfn-quicksight-analysis-treemapconfiguration-sortconfiguration)" : TreeMapSortConfiguration,
  "[Tooltip](#cfn-quicksight-analysis-treemapconfiguration-tooltip)" : TooltipOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-treemapconfiguration-syntax.yaml"></a>

```
  [ColorLabelOptions](#cfn-quicksight-analysis-treemapconfiguration-colorlabeloptions):
    ChartAxisLabelOptions
  [ColorScale](#cfn-quicksight-analysis-treemapconfiguration-colorscale):
    ColorScale
  [DataLabels](#cfn-quicksight-analysis-treemapconfiguration-datalabels):
    DataLabelOptions
  [FieldWells](#cfn-quicksight-analysis-treemapconfiguration-fieldwells):
    TreeMapFieldWells
  [GroupLabelOptions](#cfn-quicksight-analysis-treemapconfiguration-grouplabeloptions):
    ChartAxisLabelOptions
  [Legend](#cfn-quicksight-analysis-treemapconfiguration-legend):
    LegendOptions
  [SizeLabelOptions](#cfn-quicksight-analysis-treemapconfiguration-sizelabeloptions):
    ChartAxisLabelOptions
  [SortConfiguration](#cfn-quicksight-analysis-treemapconfiguration-sortconfiguration):
    TreeMapSortConfiguration
  [Tooltip](#cfn-quicksight-analysis-treemapconfiguration-tooltip):
    TooltipOptions
```

## Properties<a name="aws-properties-quicksight-analysis-treemapconfiguration-properties"></a>

`ColorLabelOptions` <a name="cfn-quicksight-analysis-treemapconfiguration-colorlabeloptions"></a>
The label options \(label text, label visibility\) for the colors displayed in a tree map\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorScale` <a name="cfn-quicksight-analysis-treemapconfiguration-colorscale"></a>
The color options \(gradient color, point of divergence\) of a tree map\.  
_Required_: No  
_Type_: [ColorScale](aws-properties-quicksight-analysis-colorscale.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabels` <a name="cfn-quicksight-analysis-treemapconfiguration-datalabels"></a>
The options that determine if visual data labels are displayed\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-analysis-treemapconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [TreeMapFieldWells](aws-properties-quicksight-analysis-treemapfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GroupLabelOptions` <a name="cfn-quicksight-analysis-treemapconfiguration-grouplabeloptions"></a>
The label options \(label text, label visibility\) of the groups that are displayed in a tree map\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-analysis-treemapconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SizeLabelOptions` <a name="cfn-quicksight-analysis-treemapconfiguration-sizelabeloptions"></a>
The label options \(label text, label visibility\) of the sizes that are displayed in a tree map\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-treemapconfiguration-sortconfiguration"></a>
The sort configuration of a tree map\.  
_Required_: No  
_Type_: [TreeMapSortConfiguration](aws-properties-quicksight-analysis-treemapsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-analysis-treemapconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
