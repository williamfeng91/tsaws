# AWS::QuickSight::Analysis LineChartConfiguration<a name="aws-properties-quicksight-analysis-linechartconfiguration"></a>

The configuration of a line chart\.

## Syntax<a name="aws-properties-quicksight-analysis-linechartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-linechartconfiguration-syntax.json"></a>

```
{
  "[ContributionAnalysisDefaults](#cfn-quicksight-analysis-linechartconfiguration-contributionanalysisdefaults)" : [ ContributionAnalysisDefault, ... ],
  "[DataLabels](#cfn-quicksight-analysis-linechartconfiguration-datalabels)" : DataLabelOptions,
  "[DefaultSeriesSettings](#cfn-quicksight-analysis-linechartconfiguration-defaultseriessettings)" : LineChartDefaultSeriesSettings,
  "[FieldWells](#cfn-quicksight-analysis-linechartconfiguration-fieldwells)" : LineChartFieldWells,
  "[ForecastConfigurations](#cfn-quicksight-analysis-linechartconfiguration-forecastconfigurations)" : [ ForecastConfiguration, ... ],
  "[Legend](#cfn-quicksight-analysis-linechartconfiguration-legend)" : LegendOptions,
  "[PrimaryYAxisDisplayOptions](#cfn-quicksight-analysis-linechartconfiguration-primaryyaxisdisplayoptions)" : LineSeriesAxisDisplayOptions,
  "[PrimaryYAxisLabelOptions](#cfn-quicksight-analysis-linechartconfiguration-primaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[ReferenceLines](#cfn-quicksight-analysis-linechartconfiguration-referencelines)" : [ ReferenceLine, ... ],
  "[SecondaryYAxisDisplayOptions](#cfn-quicksight-analysis-linechartconfiguration-secondaryyaxisdisplayoptions)" : LineSeriesAxisDisplayOptions,
  "[SecondaryYAxisLabelOptions](#cfn-quicksight-analysis-linechartconfiguration-secondaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[Series](#cfn-quicksight-analysis-linechartconfiguration-series)" : [ SeriesItem, ... ],
  "[SmallMultiplesOptions](#cfn-quicksight-analysis-linechartconfiguration-smallmultiplesoptions)" : SmallMultiplesOptions,
  "[SortConfiguration](#cfn-quicksight-analysis-linechartconfiguration-sortconfiguration)" : LineChartSortConfiguration,
  "[Tooltip](#cfn-quicksight-analysis-linechartconfiguration-tooltip)" : TooltipOptions,
  "[Type](#cfn-quicksight-analysis-linechartconfiguration-type)" : String,
  "[VisualPalette](#cfn-quicksight-analysis-linechartconfiguration-visualpalette)" : VisualPalette,
  "[XAxisDisplayOptions](#cfn-quicksight-analysis-linechartconfiguration-xaxisdisplayoptions)" : AxisDisplayOptions,
  "[XAxisLabelOptions](#cfn-quicksight-analysis-linechartconfiguration-xaxislabeloptions)" : ChartAxisLabelOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-linechartconfiguration-syntax.yaml"></a>

```
  [ContributionAnalysisDefaults](#cfn-quicksight-analysis-linechartconfiguration-contributionanalysisdefaults):
    - ContributionAnalysisDefault
  [DataLabels](#cfn-quicksight-analysis-linechartconfiguration-datalabels):
    DataLabelOptions
  [DefaultSeriesSettings](#cfn-quicksight-analysis-linechartconfiguration-defaultseriessettings):
    LineChartDefaultSeriesSettings
  [FieldWells](#cfn-quicksight-analysis-linechartconfiguration-fieldwells):
    LineChartFieldWells
  [ForecastConfigurations](#cfn-quicksight-analysis-linechartconfiguration-forecastconfigurations):
    - ForecastConfiguration
  [Legend](#cfn-quicksight-analysis-linechartconfiguration-legend):
    LegendOptions
  [PrimaryYAxisDisplayOptions](#cfn-quicksight-analysis-linechartconfiguration-primaryyaxisdisplayoptions):
    LineSeriesAxisDisplayOptions
  [PrimaryYAxisLabelOptions](#cfn-quicksight-analysis-linechartconfiguration-primaryyaxislabeloptions):
    ChartAxisLabelOptions
  [ReferenceLines](#cfn-quicksight-analysis-linechartconfiguration-referencelines):
    - ReferenceLine
  [SecondaryYAxisDisplayOptions](#cfn-quicksight-analysis-linechartconfiguration-secondaryyaxisdisplayoptions):
    LineSeriesAxisDisplayOptions
  [SecondaryYAxisLabelOptions](#cfn-quicksight-analysis-linechartconfiguration-secondaryyaxislabeloptions):
    ChartAxisLabelOptions
  [Series](#cfn-quicksight-analysis-linechartconfiguration-series):
    - SeriesItem
  [SmallMultiplesOptions](#cfn-quicksight-analysis-linechartconfiguration-smallmultiplesoptions):
    SmallMultiplesOptions
  [SortConfiguration](#cfn-quicksight-analysis-linechartconfiguration-sortconfiguration):
    LineChartSortConfiguration
  [Tooltip](#cfn-quicksight-analysis-linechartconfiguration-tooltip):
    TooltipOptions
  [Type](#cfn-quicksight-analysis-linechartconfiguration-type): String
  [VisualPalette](#cfn-quicksight-analysis-linechartconfiguration-visualpalette):
    VisualPalette
  [XAxisDisplayOptions](#cfn-quicksight-analysis-linechartconfiguration-xaxisdisplayoptions):
    AxisDisplayOptions
  [XAxisLabelOptions](#cfn-quicksight-analysis-linechartconfiguration-xaxislabeloptions):
    ChartAxisLabelOptions
```

## Properties<a name="aws-properties-quicksight-analysis-linechartconfiguration-properties"></a>

`ContributionAnalysisDefaults` <a name="cfn-quicksight-analysis-linechartconfiguration-contributionanalysisdefaults"></a>
The default configuration of a line chart's contribution analysis\.  
_Required_: No  
_Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-analysis-contributionanalysisdefault.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabels` <a name="cfn-quicksight-analysis-linechartconfiguration-datalabels"></a>
The data label configuration of a line chart\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DefaultSeriesSettings` <a name="cfn-quicksight-analysis-linechartconfiguration-defaultseriessettings"></a>
The options that determine the default presentation of all line series in `LineChartVisual`\.  
_Required_: No  
_Type_: [LineChartDefaultSeriesSettings](aws-properties-quicksight-analysis-linechartdefaultseriessettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-analysis-linechartconfiguration-fieldwells"></a>
The field well configuration of a line chart\.  
_Required_: No  
_Type_: [LineChartFieldWells](aws-properties-quicksight-analysis-linechartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ForecastConfigurations` <a name="cfn-quicksight-analysis-linechartconfiguration-forecastconfigurations"></a>
The forecast configuration of a line chart\.  
_Required_: No  
_Type_: List of [ForecastConfiguration](aws-properties-quicksight-analysis-forecastconfiguration.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-analysis-linechartconfiguration-legend"></a>
The legend configuration of a line chart\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisDisplayOptions` <a name="cfn-quicksight-analysis-linechartconfiguration-primaryyaxisdisplayoptions"></a>
The series axis configuration of a line chart\.  
_Required_: No  
_Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisLabelOptions` <a name="cfn-quicksight-analysis-linechartconfiguration-primaryyaxislabeloptions"></a>
The options that determine the presentation of the y\-axis label\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceLines` <a name="cfn-quicksight-analysis-linechartconfiguration-referencelines"></a>
The reference lines configuration of a line chart\.  
_Required_: No  
_Type_: List of [ReferenceLine](aws-properties-quicksight-analysis-referenceline.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryYAxisDisplayOptions` <a name="cfn-quicksight-analysis-linechartconfiguration-secondaryyaxisdisplayoptions"></a>
The series axis configuration of a line chart\.  
_Required_: No  
_Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryYAxisLabelOptions` <a name="cfn-quicksight-analysis-linechartconfiguration-secondaryyaxislabeloptions"></a>
The options that determine the presentation of the secondary y\-axis label\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Series` <a name="cfn-quicksight-analysis-linechartconfiguration-series"></a>
The series item configuration of a line chart\.  
_Required_: No  
_Type_: List of [SeriesItem](aws-properties-quicksight-analysis-seriesitem.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiplesOptions` <a name="cfn-quicksight-analysis-linechartconfiguration-smallmultiplesoptions"></a>
The small multiples setup for the visual\.  
_Required_: No  
_Type_: [SmallMultiplesOptions](aws-properties-quicksight-analysis-smallmultiplesoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-linechartconfiguration-sortconfiguration"></a>
The sort configuration of a line chart\.  
_Required_: No  
_Type_: [LineChartSortConfiguration](aws-properties-quicksight-analysis-linechartsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-analysis-linechartconfiguration-tooltip"></a>
The tooltip configuration of a line chart\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-linechartconfiguration-type"></a>
Determines the type of the line chart\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AREA | LINE | STACKED_AREA`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-analysis-linechartconfiguration-visualpalette"></a>
The visual palette configuration of a line chart\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisDisplayOptions` <a name="cfn-quicksight-analysis-linechartconfiguration-xaxisdisplayoptions"></a>
The options that determine the presentation of the x\-axis\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisLabelOptions` <a name="cfn-quicksight-analysis-linechartconfiguration-xaxislabeloptions"></a>
The options that determine the presentation of the x\-axis label\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
