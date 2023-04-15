# AWS::QuickSight::Template LineChartConfiguration<a name="aws-properties-quicksight-template-linechartconfiguration"></a>

The configuration of a line chart\.

## Syntax<a name="aws-properties-quicksight-template-linechartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-linechartconfiguration-syntax.json"></a>

```
{
  "[ContributionAnalysisDefaults](#cfn-quicksight-template-linechartconfiguration-contributionanalysisdefaults)" : [ ContributionAnalysisDefault, ... ],
  "[DataLabels](#cfn-quicksight-template-linechartconfiguration-datalabels)" : DataLabelOptions,
  "[DefaultSeriesSettings](#cfn-quicksight-template-linechartconfiguration-defaultseriessettings)" : LineChartDefaultSeriesSettings,
  "[FieldWells](#cfn-quicksight-template-linechartconfiguration-fieldwells)" : LineChartFieldWells,
  "[ForecastConfigurations](#cfn-quicksight-template-linechartconfiguration-forecastconfigurations)" : [ ForecastConfiguration, ... ],
  "[Legend](#cfn-quicksight-template-linechartconfiguration-legend)" : LegendOptions,
  "[PrimaryYAxisDisplayOptions](#cfn-quicksight-template-linechartconfiguration-primaryyaxisdisplayoptions)" : LineSeriesAxisDisplayOptions,
  "[PrimaryYAxisLabelOptions](#cfn-quicksight-template-linechartconfiguration-primaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[ReferenceLines](#cfn-quicksight-template-linechartconfiguration-referencelines)" : [ ReferenceLine, ... ],
  "[SecondaryYAxisDisplayOptions](#cfn-quicksight-template-linechartconfiguration-secondaryyaxisdisplayoptions)" : LineSeriesAxisDisplayOptions,
  "[SecondaryYAxisLabelOptions](#cfn-quicksight-template-linechartconfiguration-secondaryyaxislabeloptions)" : ChartAxisLabelOptions,
  "[Series](#cfn-quicksight-template-linechartconfiguration-series)" : [ SeriesItem, ... ],
  "[SmallMultiplesOptions](#cfn-quicksight-template-linechartconfiguration-smallmultiplesoptions)" : SmallMultiplesOptions,
  "[SortConfiguration](#cfn-quicksight-template-linechartconfiguration-sortconfiguration)" : LineChartSortConfiguration,
  "[Tooltip](#cfn-quicksight-template-linechartconfiguration-tooltip)" : TooltipOptions,
  "[Type](#cfn-quicksight-template-linechartconfiguration-type)" : String,
  "[VisualPalette](#cfn-quicksight-template-linechartconfiguration-visualpalette)" : VisualPalette,
  "[XAxisDisplayOptions](#cfn-quicksight-template-linechartconfiguration-xaxisdisplayoptions)" : AxisDisplayOptions,
  "[XAxisLabelOptions](#cfn-quicksight-template-linechartconfiguration-xaxislabeloptions)" : ChartAxisLabelOptions
}
```

### YAML<a name="aws-properties-quicksight-template-linechartconfiguration-syntax.yaml"></a>

```
  [ContributionAnalysisDefaults](#cfn-quicksight-template-linechartconfiguration-contributionanalysisdefaults):
    - ContributionAnalysisDefault
  [DataLabels](#cfn-quicksight-template-linechartconfiguration-datalabels):
    DataLabelOptions
  [DefaultSeriesSettings](#cfn-quicksight-template-linechartconfiguration-defaultseriessettings):
    LineChartDefaultSeriesSettings
  [FieldWells](#cfn-quicksight-template-linechartconfiguration-fieldwells):
    LineChartFieldWells
  [ForecastConfigurations](#cfn-quicksight-template-linechartconfiguration-forecastconfigurations):
    - ForecastConfiguration
  [Legend](#cfn-quicksight-template-linechartconfiguration-legend):
    LegendOptions
  [PrimaryYAxisDisplayOptions](#cfn-quicksight-template-linechartconfiguration-primaryyaxisdisplayoptions):
    LineSeriesAxisDisplayOptions
  [PrimaryYAxisLabelOptions](#cfn-quicksight-template-linechartconfiguration-primaryyaxislabeloptions):
    ChartAxisLabelOptions
  [ReferenceLines](#cfn-quicksight-template-linechartconfiguration-referencelines):
    - ReferenceLine
  [SecondaryYAxisDisplayOptions](#cfn-quicksight-template-linechartconfiguration-secondaryyaxisdisplayoptions):
    LineSeriesAxisDisplayOptions
  [SecondaryYAxisLabelOptions](#cfn-quicksight-template-linechartconfiguration-secondaryyaxislabeloptions):
    ChartAxisLabelOptions
  [Series](#cfn-quicksight-template-linechartconfiguration-series):
    - SeriesItem
  [SmallMultiplesOptions](#cfn-quicksight-template-linechartconfiguration-smallmultiplesoptions):
    SmallMultiplesOptions
  [SortConfiguration](#cfn-quicksight-template-linechartconfiguration-sortconfiguration):
    LineChartSortConfiguration
  [Tooltip](#cfn-quicksight-template-linechartconfiguration-tooltip):
    TooltipOptions
  [Type](#cfn-quicksight-template-linechartconfiguration-type): String
  [VisualPalette](#cfn-quicksight-template-linechartconfiguration-visualpalette):
    VisualPalette
  [XAxisDisplayOptions](#cfn-quicksight-template-linechartconfiguration-xaxisdisplayoptions):
    AxisDisplayOptions
  [XAxisLabelOptions](#cfn-quicksight-template-linechartconfiguration-xaxislabeloptions):
    ChartAxisLabelOptions
```

## Properties<a name="aws-properties-quicksight-template-linechartconfiguration-properties"></a>

`ContributionAnalysisDefaults` <a name="cfn-quicksight-template-linechartconfiguration-contributionanalysisdefaults"></a>
The default configuration of a line chart's contribution analysis\.  
_Required_: No  
_Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-template-contributionanalysisdefault.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabels` <a name="cfn-quicksight-template-linechartconfiguration-datalabels"></a>
The data label configuration of a line chart\.  
_Required_: No  
_Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DefaultSeriesSettings` <a name="cfn-quicksight-template-linechartconfiguration-defaultseriessettings"></a>
The options that determine the default presentation of all line series in `LineChartVisual`\.  
_Required_: No  
_Type_: [LineChartDefaultSeriesSettings](aws-properties-quicksight-template-linechartdefaultseriessettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-template-linechartconfiguration-fieldwells"></a>
The field well configuration of a line chart\.  
_Required_: No  
_Type_: [LineChartFieldWells](aws-properties-quicksight-template-linechartfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ForecastConfigurations` <a name="cfn-quicksight-template-linechartconfiguration-forecastconfigurations"></a>
The forecast configuration of a line chart\.  
_Required_: No  
_Type_: List of [ForecastConfiguration](aws-properties-quicksight-template-forecastconfiguration.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-template-linechartconfiguration-legend"></a>
The legend configuration of a line chart\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisDisplayOptions` <a name="cfn-quicksight-template-linechartconfiguration-primaryyaxisdisplayoptions"></a>
The series axis configuration of a line chart\.  
_Required_: No  
_Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-template-lineseriesaxisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryYAxisLabelOptions` <a name="cfn-quicksight-template-linechartconfiguration-primaryyaxislabeloptions"></a>
The options that determine the presentation of the y\-axis label\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceLines` <a name="cfn-quicksight-template-linechartconfiguration-referencelines"></a>
The reference lines configuration of a line chart\.  
_Required_: No  
_Type_: List of [ReferenceLine](aws-properties-quicksight-template-referenceline.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryYAxisDisplayOptions` <a name="cfn-quicksight-template-linechartconfiguration-secondaryyaxisdisplayoptions"></a>
The series axis configuration of a line chart\.  
_Required_: No  
_Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-template-lineseriesaxisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryYAxisLabelOptions` <a name="cfn-quicksight-template-linechartconfiguration-secondaryyaxislabeloptions"></a>
The options that determine the presentation of the secondary y\-axis label\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Series` <a name="cfn-quicksight-template-linechartconfiguration-series"></a>
The series item configuration of a line chart\.  
_Required_: No  
_Type_: List of [SeriesItem](aws-properties-quicksight-template-seriesitem.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiplesOptions` <a name="cfn-quicksight-template-linechartconfiguration-smallmultiplesoptions"></a>
The small multiples setup for the visual\.  
_Required_: No  
_Type_: [SmallMultiplesOptions](aws-properties-quicksight-template-smallmultiplesoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-template-linechartconfiguration-sortconfiguration"></a>
The sort configuration of a line chart\.  
_Required_: No  
_Type_: [LineChartSortConfiguration](aws-properties-quicksight-template-linechartsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-template-linechartconfiguration-tooltip"></a>
The tooltip configuration of a line chart\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-template-linechartconfiguration-type"></a>
Determines the type of the line chart\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AREA | LINE | STACKED_AREA`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-template-linechartconfiguration-visualpalette"></a>
The visual palette configuration of a line chart\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisDisplayOptions` <a name="cfn-quicksight-template-linechartconfiguration-xaxisdisplayoptions"></a>
The options that determine the presentation of the x\-axis\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisLabelOptions` <a name="cfn-quicksight-template-linechartconfiguration-xaxislabeloptions"></a>
The options that determine the presentation of the x\-axis label\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
