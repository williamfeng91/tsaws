# AWS::QuickSight::Dashboard FunnelChartConfiguration<a name="aws-properties-quicksight-dashboard-funnelchartconfiguration"></a>

The configuration of a `FunnelChartVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-funnelchartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-funnelchartconfiguration-syntax.json"></a>

```
{
  "[CategoryLabelOptions](#cfn-quicksight-dashboard-funnelchartconfiguration-categorylabeloptions)" : ChartAxisLabelOptions,
  "[DataLabelOptions](#cfn-quicksight-dashboard-funnelchartconfiguration-datalabeloptions)" : FunnelChartDataLabelOptions,
  "[FieldWells](#cfn-quicksight-dashboard-funnelchartconfiguration-fieldwells)" : FunnelChartFieldWells,
  "[SortConfiguration](#cfn-quicksight-dashboard-funnelchartconfiguration-sortconfiguration)" : FunnelChartSortConfiguration,
  "[Tooltip](#cfn-quicksight-dashboard-funnelchartconfiguration-tooltip)" : TooltipOptions,
  "[ValueLabelOptions](#cfn-quicksight-dashboard-funnelchartconfiguration-valuelabeloptions)" : ChartAxisLabelOptions,
  "[VisualPalette](#cfn-quicksight-dashboard-funnelchartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-dashboard-funnelchartconfiguration-syntax.yaml"></a>

```
  [CategoryLabelOptions](#cfn-quicksight-dashboard-funnelchartconfiguration-categorylabeloptions):
    ChartAxisLabelOptions
  [DataLabelOptions](#cfn-quicksight-dashboard-funnelchartconfiguration-datalabeloptions):
    FunnelChartDataLabelOptions
  [FieldWells](#cfn-quicksight-dashboard-funnelchartconfiguration-fieldwells):
    FunnelChartFieldWells
  [SortConfiguration](#cfn-quicksight-dashboard-funnelchartconfiguration-sortconfiguration):
    FunnelChartSortConfiguration
  [Tooltip](#cfn-quicksight-dashboard-funnelchartconfiguration-tooltip):
    TooltipOptions
  [ValueLabelOptions](#cfn-quicksight-dashboard-funnelchartconfiguration-valuelabeloptions):
    ChartAxisLabelOptions
  [VisualPalette](#cfn-quicksight-dashboard-funnelchartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-dashboard-funnelchartconfiguration-properties"></a>

`CategoryLabelOptions` <a name="cfn-quicksight-dashboard-funnelchartconfiguration-categorylabeloptions"></a>
The label options of the categories that are displayed in a `FunnelChartVisual`\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabelOptions` <a name="cfn-quicksight-dashboard-funnelchartconfiguration-datalabeloptions"></a>
The options that determine the presentation of the data labels\.  
_Required_: No  
_Type_: [FunnelChartDataLabelOptions](aws-properties-quicksight-dashboard-funnelchartdatalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-dashboard-funnelchartconfiguration-fieldwells"></a>
The field well configuration of a `FunnelChartVisual`\.  
_Required_: No  
_Type_: [FunnelChartFieldWells](aws-properties-quicksight-dashboard-funnelchartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-dashboard-funnelchartconfiguration-sortconfiguration"></a>
The sort configuration of a `FunnelChartVisual`\.  
_Required_: No  
_Type_: [FunnelChartSortConfiguration](aws-properties-quicksight-dashboard-funnelchartsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-dashboard-funnelchartconfiguration-tooltip"></a>
The tooltip configuration of a `FunnelChartVisual`\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueLabelOptions` <a name="cfn-quicksight-dashboard-funnelchartconfiguration-valuelabeloptions"></a>
The label options for the values that are displayed in a `FunnelChartVisual`\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-dashboard-funnelchartconfiguration-visualpalette"></a>
The visual palette configuration of a `FunnelChartVisual`\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
