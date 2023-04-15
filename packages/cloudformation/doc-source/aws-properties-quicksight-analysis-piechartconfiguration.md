# AWS::QuickSight::Analysis PieChartConfiguration<a name="aws-properties-quicksight-analysis-piechartconfiguration"></a>

The configuration of a pie chart\.

## Syntax<a name="aws-properties-quicksight-analysis-piechartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-piechartconfiguration-syntax.json"></a>

```
{
  "[CategoryLabelOptions](#cfn-quicksight-analysis-piechartconfiguration-categorylabeloptions)" : ChartAxisLabelOptions,
  "[ContributionAnalysisDefaults](#cfn-quicksight-analysis-piechartconfiguration-contributionanalysisdefaults)" : [ ContributionAnalysisDefault, ... ],
  "[DataLabels](#cfn-quicksight-analysis-piechartconfiguration-datalabels)" : DataLabelOptions,
  "[DonutOptions](#cfn-quicksight-analysis-piechartconfiguration-donutoptions)" : DonutOptions,
  "[FieldWells](#cfn-quicksight-analysis-piechartconfiguration-fieldwells)" : PieChartFieldWells,
  "[Legend](#cfn-quicksight-analysis-piechartconfiguration-legend)" : LegendOptions,
  "[SmallMultiplesOptions](#cfn-quicksight-analysis-piechartconfiguration-smallmultiplesoptions)" : SmallMultiplesOptions,
  "[SortConfiguration](#cfn-quicksight-analysis-piechartconfiguration-sortconfiguration)" : PieChartSortConfiguration,
  "[Tooltip](#cfn-quicksight-analysis-piechartconfiguration-tooltip)" : TooltipOptions,
  "[ValueLabelOptions](#cfn-quicksight-analysis-piechartconfiguration-valuelabeloptions)" : ChartAxisLabelOptions,
  "[VisualPalette](#cfn-quicksight-analysis-piechartconfiguration-visualpalette)" : VisualPalette
}
```

### YAML<a name="aws-properties-quicksight-analysis-piechartconfiguration-syntax.yaml"></a>

```
  [CategoryLabelOptions](#cfn-quicksight-analysis-piechartconfiguration-categorylabeloptions):
    ChartAxisLabelOptions
  [ContributionAnalysisDefaults](#cfn-quicksight-analysis-piechartconfiguration-contributionanalysisdefaults):
    - ContributionAnalysisDefault
  [DataLabels](#cfn-quicksight-analysis-piechartconfiguration-datalabels):
    DataLabelOptions
  [DonutOptions](#cfn-quicksight-analysis-piechartconfiguration-donutoptions):
    DonutOptions
  [FieldWells](#cfn-quicksight-analysis-piechartconfiguration-fieldwells):
    PieChartFieldWells
  [Legend](#cfn-quicksight-analysis-piechartconfiguration-legend):
    LegendOptions
  [SmallMultiplesOptions](#cfn-quicksight-analysis-piechartconfiguration-smallmultiplesoptions):
    SmallMultiplesOptions
  [SortConfiguration](#cfn-quicksight-analysis-piechartconfiguration-sortconfiguration):
    PieChartSortConfiguration
  [Tooltip](#cfn-quicksight-analysis-piechartconfiguration-tooltip):
    TooltipOptions
  [ValueLabelOptions](#cfn-quicksight-analysis-piechartconfiguration-valuelabeloptions):
    ChartAxisLabelOptions
  [VisualPalette](#cfn-quicksight-analysis-piechartconfiguration-visualpalette):
    VisualPalette
```

## Properties<a name="aws-properties-quicksight-analysis-piechartconfiguration-properties"></a>

`CategoryLabelOptions` <a name="cfn-quicksight-analysis-piechartconfiguration-categorylabeloptions"></a>
The label options of the group/color that is displayed in a pie chart\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContributionAnalysisDefaults` <a name="cfn-quicksight-analysis-piechartconfiguration-contributionanalysisdefaults"></a>
The contribution analysis \(anomaly configuration\) setup of the visual\.  
_Required_: No  
_Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-analysis-contributionanalysisdefault.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabels` <a name="cfn-quicksight-analysis-piechartconfiguration-datalabels"></a>
The options that determine if visual data labels are displayed\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DonutOptions` <a name="cfn-quicksight-analysis-piechartconfiguration-donutoptions"></a>
The options that determine the shape of the chart\. This option determines whether the chart is a pie chart or a donut chart\.  
_Required_: No  
_Type_: [DonutOptions](aws-properties-quicksight-analysis-donutoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-analysis-piechartconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [PieChartFieldWells](aws-properties-quicksight-analysis-piechartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-analysis-piechartconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiplesOptions` <a name="cfn-quicksight-analysis-piechartconfiguration-smallmultiplesoptions"></a>
The small multiples setup for the visual\.  
_Required_: No  
_Type_: [SmallMultiplesOptions](aws-properties-quicksight-analysis-smallmultiplesoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-piechartconfiguration-sortconfiguration"></a>
The sort configuration of a pie chart\.  
_Required_: No  
_Type_: [PieChartSortConfiguration](aws-properties-quicksight-analysis-piechartsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-analysis-piechartconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueLabelOptions` <a name="cfn-quicksight-analysis-piechartconfiguration-valuelabeloptions"></a>
The label options for the value that is displayed in a pie chart\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-analysis-piechartconfiguration-visualpalette"></a>
The palette \(chart color\) display setup of the visual\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)