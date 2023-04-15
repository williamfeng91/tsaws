/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The conditional formatting of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconditionalformatting.html}
 **/
export interface QuickSightTemplateFilledMapConditionalFormatting {
  /**
   * Conditional formatting options of a `FilledMapVisual`.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FilledMapConditionalFormattingOption](aws-properties-quicksight-template-filledmapconditionalformattingoption.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions: List<QuickSightTemplateFilledMapConditionalFormattingOption>;
}

/**
 * Formatting configuration for gradient color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattinggradientcolor.html}
 **/
export interface QuickSightTemplateConditionalFormattingGradientColor {
  /**
   * The expression that determines the formatting configuration for gradient color.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * Determines the color.
   *
   * _Required_: Yes
   *
   * _Type_: [GradientColor](aws-properties-quicksight-template-gradientcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color: QuickSightTemplateGradientColor;
}

/**
 * A pie or donut chart.
 *
 * The `PieChartVisual` structure describes a visual that is a member of the pie chart family.
 *
 * The following charts can be described by using this structure:
 *
 * For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the _Amazon QuickSight User Guide_.
 *
 * For more information, see [Using donut charts](https://docs.aws.amazon.com/quicksight/latest/user/donut-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartvisual.html}
 **/
export interface QuickSightTemplatePieChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [PieChartConfiguration](aws-properties-quicksight-template-piechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplatePieChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-predefinedhierarchy.html}
 **/
export interface QuickSightTemplatePredefinedHierarchy {
  /**
   * The hierarchy ID of the predefined hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyId: Value<string>;
  /**
   * The option that determines the drill down filters for the predefined hierarchy.
   *
   * _Required_: No
   *
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-template-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightTemplateDrillDownFilter>;
  /**
   * The list of columns that define the predefined hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightTemplateColumnIdentifier>;
}

/**
 * The period over period computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-periodoverperiodcomputation.html}
 **/
export interface QuickSightTemplatePeriodOverPeriodComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightTemplateMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightTemplateDimensionField;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The configuration for applying a filter to specific sheets or visuals. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration.html}
 **/
export interface QuickSightTemplateSelectedSheetsFilterScopeConfiguration {
  /**
   * The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetVisualScopingConfiguration](aws-properties-quicksight-template-sheetvisualscopingconfiguration.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetVisualScopingConfigurations?: List<QuickSightTemplateSheetVisualScopingConfiguration>;
}

/**
 * A visual displayed on a sheet in an analysis, dashboard, or template.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visual.html}
 **/
export interface QuickSightTemplateVisual {
  /**
   * A funnel chart.
   *
   * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartVisual](aws-properties-quicksight-template-funnelchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunnelChartVisual?: QuickSightTemplateFunnelChartVisual;
  /**
   * A filled map.
   *
   * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapVisual](aws-properties-quicksight-template-filledmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilledMapVisual?: QuickSightTemplateFilledMapVisual;
  /**
   * A box plot.
   *
   * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotVisual](aws-properties-quicksight-template-boxplotvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotVisual?: QuickSightTemplateBoxPlotVisual;
  /**
   * A waterfall chart.
   *
   * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallVisual](aws-properties-quicksight-template-waterfallvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallVisual?: QuickSightTemplateWaterfallVisual;
  /**
   * A visual that contains custom content.
   *
   * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomContentVisual](aws-properties-quicksight-template-customcontentvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomContentVisual?: QuickSightTemplateCustomContentVisual;
  /**
   * A pie or donut chart.
   *
   * For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PieChartVisual](aws-properties-quicksight-template-piechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PieChartVisual?: QuickSightTemplatePieChartVisual;
  /**
   * A key performance indicator (KPI).
   *
   * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [KPIVisual](aws-properties-quicksight-template-kpivisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KPIVisual?: QuickSightTemplateKPIVisual;
  /**
   * A histogram.
   *
   * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [HistogramVisual](aws-properties-quicksight-template-histogramvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistogramVisual?: QuickSightTemplateHistogramVisual;
  /**
   * A table visual.
   *
   * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [TableVisual](aws-properties-quicksight-template-tablevisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableVisual?: QuickSightTemplateTableVisual;
  /**
   * A pivot table.
   *
   * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableVisual](aws-properties-quicksight-template-pivottablevisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PivotTableVisual?: QuickSightTemplatePivotTableVisual;
  /**
   * A geospatial map or a points on map visual.
   *
   * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapVisual](aws-properties-quicksight-template-geospatialmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeospatialMapVisual?: QuickSightTemplateGeospatialMapVisual;
  /**
   * A bar chart.
   *
   * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [BarChartVisual](aws-properties-quicksight-template-barchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarChartVisual?: QuickSightTemplateBarChartVisual;
  /**
   * A scatter plot.
   *
   * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotVisual](aws-properties-quicksight-template-scatterplotvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotVisual?: QuickSightTemplateScatterPlotVisual;
  /**
   * A radar chart visual.
   *
   * For more information, see [Using radar charts](https://docs.aws.amazon.com/quicksight/latest/user/radar-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartVisual](aws-properties-quicksight-template-radarchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RadarChartVisual?: QuickSightTemplateRadarChartVisual;
  /**
   * A heat map.
   *
   * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapVisual](aws-properties-quicksight-template-heatmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapVisual?: QuickSightTemplateHeatMapVisual;
  /**
   * A tree map.
   *
   * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapVisual](aws-properties-quicksight-template-treemapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapVisual?: QuickSightTemplateTreeMapVisual;
  /**
   * A combo chart.
   *
   * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartVisual](aws-properties-quicksight-template-combochartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComboChartVisual?: QuickSightTemplateComboChartVisual;
  /**
   * A word cloud.
   *
   * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudVisual](aws-properties-quicksight-template-wordcloudvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudVisual?: QuickSightTemplateWordCloudVisual;
  /**
   * An insight visual.
   *
   * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [InsightVisual](aws-properties-quicksight-template-insightvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightVisual?: QuickSightTemplateInsightVisual;
  /**
   * A sankey diagram.
   *
   * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramVisual](aws-properties-quicksight-template-sankeydiagramvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SankeyDiagramVisual?: QuickSightTemplateSankeyDiagramVisual;
  /**
   * A gauge chart.
   *
   * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartVisual](aws-properties-quicksight-template-gaugechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GaugeChartVisual?: QuickSightTemplateGaugeChartVisual;
  /**
   * A line chart.
   *
   * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [LineChartVisual](aws-properties-quicksight-template-linechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineChartVisual?: QuickSightTemplateLineChartVisual;
  /**
   * An empty visual.
   *
   * _Required_: No
   *
   * _Type_: [EmptyVisual](aws-properties-quicksight-template-emptyvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmptyVisual?: QuickSightTemplateEmptyVisual;
}

/**
 * The custom narrative options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customnarrativeoptions.html}
 **/
export interface QuickSightTemplateCustomNarrativeOptions {
  /**
   * The string input of custom narrative.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `150000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Narrative: Value<string>;
}

/**
 * The background style configuration of a free-form layout element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelementborderstyle.html}
 **/
export interface QuickSightTemplateFreeFormLayoutElementBorderStyle {
  /**
   * The border color of a free-form layout element.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
  /**
   * The border visibility of a free-form layout element.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * With a `Filter`, you can remove portions of data from a particular visual or view.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filter.html}
 **/
export interface QuickSightTemplateFilter {
  /**
   * A `NumericEqualityFilter` filters numeric values that equal or do not equal a given numeric value.
   *
   * _Required_: No
   *
   * _Type_: [NumericEqualityFilter](aws-properties-quicksight-template-numericequalityfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericEqualityFilter?: QuickSightTemplateNumericEqualityFilter;
  /**
   * A `NumericRangeFilter` filters numeric values that are either inside or outside a given numeric range.
   *
   * _Required_: No
   *
   * _Type_: [NumericRangeFilter](aws-properties-quicksight-template-numericrangefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericRangeFilter?: QuickSightTemplateNumericRangeFilter;
  /**
   * A `TimeRangeFilter` filters date-time values that are either inside or outside a given date/time range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilter](aws-properties-quicksight-template-timerangefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeRangeFilter?: QuickSightTemplateTimeRangeFilter;
  /**
   * A `RelativeDatesFilter` filters date values that are relative to a given date.
   *
   * _Required_: No
   *
   * _Type_: [RelativeDatesFilter](aws-properties-quicksight-template-relativedatesfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelativeDatesFilter?: QuickSightTemplateRelativeDatesFilter;
  /**
   * A `TopBottomFilter` filters data to the top or bottom values for a given column.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomFilter](aws-properties-quicksight-template-topbottomfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomFilter?: QuickSightTemplateTopBottomFilter;
  /**
   * A `TimeEqualityFilter` filters date-time values that equal or do not equal a given date/time value.
   *
   * _Required_: No
   *
   * _Type_: [TimeEqualityFilter](aws-properties-quicksight-template-timeequalityfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeEqualityFilter?: QuickSightTemplateTimeEqualityFilter;
  /**
   * A `CategoryFilter` filters text values.
   *
   * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CategoryFilter](aws-properties-quicksight-template-categoryfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryFilter?: QuickSightTemplateCategoryFilter;
}

/**
 * The configuration of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotconfiguration.html}
 **/
export interface QuickSightTemplateScatterPlotConfiguration {
  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotFieldWells](aws-properties-quicksight-template-scatterplotfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateScatterPlotFieldWells;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
}

/**
 * A control to display a dropdown list with buttons that are used to select a single value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdropdowncontrol.html}
 **/
export interface QuickSightTemplateParameterDropDownControl {
  /**
   * The ID of the `ParameterDropDownControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControlId: Value<string>;
  /**
   * The type parameter name of the `ParameterDropDownControl`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `MULTI_SELECT | SINGLE_SELECT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-template-dropdowncontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateDropDownControlDisplayOptions;
  /**
   * The source parameter name of the `ParameterDropDownControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameterName: Value<string>;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-template-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  /**
   * The title of the `ParameterDropDownControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * A list of selectable values that are used in a control.
   *
   * _Required_: No
   *
   * _Type_: [ParameterSelectableValues](aws-properties-quicksight-template-parameterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightTemplateParameterSelectableValues;
}

/**
 * Configuration options for the canvas of a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutcanvassizeoptions.html}
 **/
export interface QuickSightTemplateFreeFormLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a free-form layout.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutScreenCanvasSizeOptions](aws-properties-quicksight-template-freeformlayoutscreencanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScreenCanvasSizeOptions?: QuickSightTemplateFreeFormLayoutScreenCanvasSizeOptions;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textareacontroldisplayoptions.html}
 **/
export interface QuickSightTemplateTextAreaControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightTemplateLabelOptions;
  /**
   * The configuration of the placeholder options in a text area control.
   *
   * _Required_: No
   *
   * _Type_: [TextControlPlaceholderOptions](aws-properties-quicksight-template-textcontrolplaceholderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaceholderOptions?: QuickSightTemplateTextControlPlaceholderOptions;
}

/**
 * The declaration definition of a parameter.
 *
 * For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdeclaration.html}
 **/
export interface QuickSightTemplateParameterDeclaration {
  /**
   * A parameter declaration for the `String` data type.
   *
   * _Required_: No
   *
   * _Type_: [StringParameterDeclaration](aws-properties-quicksight-template-stringparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringParameterDeclaration?: QuickSightTemplateStringParameterDeclaration;
  /**
   * A parameter declaration for the `DateTime` data type.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeParameterDeclaration](aws-properties-quicksight-template-datetimeparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeParameterDeclaration?: QuickSightTemplateDateTimeParameterDeclaration;
  /**
   * A parameter declaration for the `Decimal` data type.
   *
   * _Required_: No
   *
   * _Type_: [DecimalParameterDeclaration](aws-properties-quicksight-template-decimalparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalParameterDeclaration?: QuickSightTemplateDecimalParameterDeclaration;
  /**
   * A parameter declaration for the `Integer` data type.
   *
   * _Required_: No
   *
   * _Type_: [IntegerParameterDeclaration](aws-properties-quicksight-template-integerparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerParameterDeclaration?: QuickSightTemplateIntegerParameterDeclaration;
}

/**
 * The border options for a table border.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableborderoptions.html}
 **/
export interface QuickSightTemplateTableBorderOptions {
  /**
   * The thickness of a table border.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Thickness?: Value<number>;
  /**
   * The color of a table border.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
  /**
   * The style (none, solid) of a table border.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | SOLID`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style?: Value<string>;
}

/**
 * The sort configuration of a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudsortconfiguration.html}
 **/
export interface QuickSightTemplateWordCloudSortConfiguration {
  /**
   * The limit on the number of groups that are displayed in a word cloud.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The sort configuration of group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * Determines the gradient color settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gradientcolor.html}
 **/
export interface QuickSightTemplateGradientColor {
  /**
   * The list of gradient color stops.
   *
   * _Required_: No
   *
   * _Type_: List of [GradientStop](aws-properties-quicksight-template-gradientstop.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stops?: List<QuickSightTemplateGradientStop>;
}

/**
 * Conditional formatting options of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconditionalformattingoption.html}
 **/
export interface QuickSightTemplateGaugeChartConditionalFormattingOption {
  /**
   * The options that determine the presentation of the arc of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartArcConditionalFormatting](aws-properties-quicksight-template-gaugechartarcconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arc?: QuickSightTemplateGaugeChartArcConditionalFormatting;
  /**
   * The conditional formatting for the primary value of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartPrimaryValueConditionalFormatting](aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValue?: QuickSightTemplateGaugeChartPrimaryValueConditionalFormatting;
}

/**
 * The reference that specifies where the axis label is applied to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislabelreferenceoptions.html}
 **/
export interface QuickSightTemplateAxisLabelReferenceOptions {
  /**
   * The column that the axis label is targeted to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The field that the axis label is targeted to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The range options for the data zoom scroll bar.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visiblerangeoptions.html}
 **/
export interface QuickSightTemplateVisibleRangeOptions {
  /**
   * The percent range in the visible range.
   *
   * _Required_: No
   *
   * _Type_: [PercentVisibleRange](aws-properties-quicksight-template-percentvisiblerange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentRange?: QuickSightTemplatePercentVisibleRange;
}

/**
 * The options for an axis with a numeric field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericaxisoptions.html}
 **/
export interface QuickSightTemplateNumericAxisOptions {
  /**
   * The scale setup of a numeric axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisScale](aws-properties-quicksight-template-axisscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scale?: QuickSightTemplateAxisScale;
  /**
   * The range setup of a numeric axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayRange](aws-properties-quicksight-template-axisdisplayrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: QuickSightTemplateAxisDisplayRange;
}

/**
 * The field well configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateWaterfallChartAggregatedFieldWells {
  /**
   * The category field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Categories?: List<QuickSightTemplateDimensionField>;
  /**
   * The breakdown field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Breakdowns?: List<QuickSightTemplateDimensionField>;
  /**
   * The value field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * A parameter declaration for the `Integer` data type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integervaluewhenunsetconfiguration.html}
 **/
export interface QuickSightTemplateIntegerValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   */
  ValueWhenUnsetOption?: Value<string>;
  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValue?: Value<number>;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconditionalformattingoption.html}
 **/
export interface QuickSightTemplateTableConditionalFormattingOption {
  /**
   * The row conditional formatting option for a table.
   *
   * _Required_: No
   *
   * _Type_: [TableRowConditionalFormatting](aws-properties-quicksight-template-tablerowconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Row?: QuickSightTemplateTableRowConditionalFormatting;
  /**
   * The cell conditional formatting option for a table.
   *
   * _Required_: No
   *
   * _Type_: [TableCellConditionalFormatting](aws-properties-quicksight-template-tablecellconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cell?: QuickSightTemplateTableCellConditionalFormatting;
}

/**
 * The configured style settings of a radar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartareastylesettings.html}
 **/
export interface QuickSightTemplateRadarChartAreaStyleSettings {
  /**
   * The visibility settings of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The configuration options that determine how missing data is treated during the rendering of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-missingdataconfiguration.html}
 **/
export interface QuickSightTemplateMissingDataConfiguration {
  /**
   * The treatment option that determines how missing data should be rendered. Choose from the following options:
   */
  TreatmentOption?: Value<string>;
}

/**
 * A box plot.
 *
 * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotvisual.html}
 **/
export interface QuickSightTemplateBoxPlotVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotChartConfiguration](aws-properties-quicksight-template-boxplotchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateBoxPlotChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The field wells for a pivot table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldwells.html}
 **/
export interface QuickSightTemplatePivotTableFieldWells {
  /**
   * The aggregated field well for the pivot table.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableAggregatedFieldWells](aws-properties-quicksight-template-pivottableaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PivotTableAggregatedFieldWells?: QuickSightTemplatePivotTableAggregatedFieldWells;
}

/**
 * A control from a date parameter that specifies date and time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterdatetimepickercontrol.html}
 **/
export interface QuickSightTemplateParameterDateTimePickerControl {
  /**
   * The ID of the `ParameterDateTimePickerControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControlId: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-template-datetimepickercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateDateTimePickerControlDisplayOptions;
  /**
   * The name of the `ParameterDateTimePickerControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameterName: Value<string>;
  /**
   * The title of the `ParameterDateTimePickerControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
}

/**
 * An aggregation based on the percentile of values in a dimension or measure.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentileaggregation.html}
 **/
export interface QuickSightTemplatePercentileAggregation {
  /**
   * The percentile value. This value can be any numeric constant 0–100. A percentile value of 50 computes the median value of the measure.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentileValue?: Value<number>;
}

/**
 * The setup for the detailed tooltip.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldbasedtooltip.html}
 **/
export interface QuickSightTemplateFieldBasedTooltip {
  /**
   * The fields configuration in the tooltip.
   *
   * _Required_: No
   *
   * _Type_: List of [TooltipItem](aws-properties-quicksight-template-tooltipitem.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TooltipFields?: List<QuickSightTemplateTooltipItem>;
  /**
   * The visibility of `Show aggregations`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationVisibility?: Value<string>;
  /**
   * The type for the >tooltip title. Choose one of the following options:
   */
  TooltipTitleType?: Value<string>;
}

/**
 * Defines different defaults to the users or groups based on mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dynamicdefaultvalue.html}
 **/
export interface QuickSightTemplateDynamicDefaultValue {
  /**
   * The column that contains the group name.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupNameColumn?: QuickSightTemplateColumnIdentifier;
  /**
   * The column that contains the default value of each user or group.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValueColumn: QuickSightTemplateColumnIdentifier;
  /**
   * The column that contains the username.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserNameColumn?: QuickSightTemplateColumnIdentifier;
}

/**
 * The unaggregated field for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-unaggregatedfield.html}
 **/
export interface QuickSightTemplateUnaggregatedField {
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [FormatConfiguration](aws-properties-quicksight-template-formatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateFormatConfiguration;
  /**
   * The column that is used in the `UnaggregatedField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The configuration for a grid layout. Also called a tiled layout.
 *
 * Visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutconfiguration.html}
 **/
export interface QuickSightTemplateGridLayoutConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutCanvasSizeOptions](aws-properties-quicksight-template-gridlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions?: QuickSightTemplateGridLayoutCanvasSizeOptions;
  /**
   * The elements that are included in a grid layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [GridLayoutElement](aws-properties-quicksight-template-gridlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightTemplateGridLayoutElement>;
}

/**
 * The optional configuration of totals cells in a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottotaloptions.html}
 **/
export interface QuickSightTemplatePivotTotalOptions {
  /**
   * The custom label string for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel?: Value<string>;
  /**
   * The cell styling options for the totals of value cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueCellStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The scroll status (pinned, scrolled) for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PINNED | SCROLLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScrollStatus?: Value<string>;
  /**
   * The placement (start, end) for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `END | START`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Placement?: Value<string>;
  /**
   * The cell styling options for the total cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The visibility configuration for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalsVisibility?: Value<string>;
  /**
   * The cell styling options for the total of header cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricHeaderCellStyle?: QuickSightTemplateTableCellStyle;
}

/**
 * The configuration that determines the elements and canvas size options of sheet control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrollayoutconfiguration.html}
 **/
export interface QuickSightTemplateSheetControlLayoutConfiguration {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutConfiguration](aws-properties-quicksight-template-gridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GridLayout?: QuickSightTemplateGridLayoutConfiguration;
}

/**
 * The conditional formatting for the primary value of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiprimaryvalueconditionalformatting.html}
 **/
export interface QuickSightTemplateKPIPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value's text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  /**
   * The conditional formatting of the primary value's icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-template-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightTemplateConditionalFormattingIcon;
}

/**
 * The default values of the `IntegerParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integerdefaultvalues.html}
 **/
export interface QuickSightTemplateIntegerDefaultValues {
  /**
   * The dynamic value of the `IntegerDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-template-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  /**
   * The static values of the `IntegerDefaultValues`.
   *
   * _Required_: No
   *
   * _Type_: List of Double
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticValues?: List<Value<number>>;
}

/**
 * The inline visualization of a specific type to display within a chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableinlinevisualization.html}
 **/
export interface QuickSightTemplateTableInlineVisualization {
  /**
   * The configuration of the inline visualization of the data bars within a chart.
   *
   * _Required_: No
   *
   * _Type_: [DataBarsOptions](aws-properties-quicksight-template-databarsoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataBars?: QuickSightTemplateDataBarsOptions;
}

/**
 * The options that determine the default settings for a grid layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultgridlayoutconfiguration.html}
 **/
export interface QuickSightTemplateDefaultGridLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a grid layout.
   *
   * _Required_: Yes
   *
   * _Type_: [GridLayoutCanvasSizeOptions](aws-properties-quicksight-template-gridlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightTemplateGridLayoutCanvasSizeOptions;
}

/**
 * Allows data paths to be sorted by a specific data value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathsort.html}
 **/
export interface QuickSightTemplateDataPathSort {
  /**
   * The list of data paths that need to be sorted.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataPathValue](aws-properties-quicksight-template-datapathvalue.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortPaths: List<QuickSightTemplateDataPathValue>;
  /**
   * Determines the sort direction.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ASC | DESC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Direction: Value<string>;
}

/**
 * The configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconfiguration.html}
 **/
export interface QuickSightTemplateGaugeChartConfiguration {
  /**
   * The data label configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The field well configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartFieldWells](aws-properties-quicksight-template-gaugechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateGaugeChartFieldWells;
  /**
   * The tooltip configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TooltipOptions?: QuickSightTemplateTooltipOptions;
  /**
   * The options that determine the presentation of the `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartOptions](aws-properties-quicksight-template-gaugechartoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GaugeChartOptions?: QuickSightTemplateGaugeChartOptions;
  /**
   * The visual palette configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
}

/**
 * The configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconfiguration.html}
 **/
export interface QuickSightTemplateKPIConfiguration {
  /**
   * The sort configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPISortConfiguration](aws-properties-quicksight-template-kpisortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateKPISortConfiguration;
  /**
   * The options that determine the presentation of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIOptions](aws-properties-quicksight-template-kpioptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KPIOptions?: QuickSightTemplateKPIOptions;
  /**
   * The field well configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIFieldWells](aws-properties-quicksight-template-kpifieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateKPIFieldWells;
}

/**
 * The options that determine the percentage display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentagedisplayformatconfiguration.html}
 **/
export interface QuickSightTemplatePercentageDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-template-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightTemplateNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-template-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightTemplateDecimalPlacesConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-template-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  /**
   * Determines the suffix value of the percentage format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Suffix?: Value<string>;
  /**
   * The options that determine the numeric separator configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-template-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightTemplateNumericSeparatorConfiguration;
  /**
   * Determines the prefix value of the percentage format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * The dimension type field with numerical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericaldimensionfield.html}
 **/
export interface QuickSightTemplateNumericalDimensionField {
  /**
   * The custom hierarchy ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyId?: Value<string>;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-template-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateNumberFormatConfiguration;
  /**
   * The column that is used in the `NumericalDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The data path that needs to be sorted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathvalue.html}
 **/
export interface QuickSightTemplateDataPathValue {
  /**
   * The field ID of the field that needs to be sorted.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The actual value of the field that needs to be sorted.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldValue: Value<string>;
}

/**
 * A `TimeRangeFilter` filters values that are between two specified values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangefilter.html}
 **/
export interface QuickSightTemplateTimeRangeFilter {
  /**
   * The minimum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilterValue](aws-properties-quicksight-template-timerangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMinimumValue?: QuickSightTemplateTimeRangeFilterValue;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The maximum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilterValue](aws-properties-quicksight-template-timerangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMaximumValue?: QuickSightTemplateTimeRangeFilterValue;
  /**
   * Determines whether the maximum value in the filter value range should be included in the filtered results.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeMaximum?: Value<boolean>;
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeGranularity?: Value<string>;
  /**
   * This option determines how null values should be treated when filtering data.
   */
  NullOption: Value<string>;
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterId: Value<string>;
  /**
   * Determines whether the minimum value in the filter value range should be included in the filtered results.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeMinimum?: Value<boolean>;
  /**
   * The exclude period of the time range filter.
   *
   * _Required_: No
   *
   * _Type_: [ExcludePeriodConfiguration](aws-properties-quicksight-template-excludeperiodconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludePeriodConfiguration?: QuickSightTemplateExcludePeriodConfiguration;
}

/**
 * The options that determine the currency display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-currencydisplayformatconfiguration.html}
 **/
export interface QuickSightTemplateCurrencyDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-template-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightTemplateNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-template-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightTemplateDecimalPlacesConfiguration;
  /**
   * Determines the number scale value for the currency format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTO | BILLIONS | MILLIONS | NONE | THOUSANDS | TRILLIONS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberScale?: Value<string>;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-template-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  /**
   * Determines the suffix value of the currency format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Suffix?: Value<string>;
  /**
   * The options that determine the numeric separator configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-template-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightTemplateNumericSeparatorConfiguration;
  /**
   * Determines the symbol for the currency format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[A-Z]{3}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Symbol?: Value<string>;
  /**
   * Determines the prefix value of the currency format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * A control to display a text box that is used to enter a single entry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtertextfieldcontrol.html}
 **/
export interface QuickSightTemplateFilterTextFieldControl {
  /**
   * The ID of the `FilterTextFieldControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControlId: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-template-textfieldcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateTextFieldControlDisplayOptions;
  /**
   * The title of the `FilterTextFieldControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The source filter ID of the `FilterTextFieldControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFilterId: Value<string>;
}

/**
 * The configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartconfiguration.html}
 **/
export interface QuickSightTemplateRadarChartConfiguration {
  /**
   * The sort configuration of a `RadarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartSortConfiguration](aws-properties-quicksight-template-radarchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateRadarChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The shape of the radar chart.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CIRCLE | POLYGON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Shape?: Value<string>;
  /**
   * The base sreies settings of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartSeriesSettings](aws-properties-quicksight-template-radarchartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseSeriesSettings?: QuickSightTemplateRadarChartSeriesSettings;
  /**
   * The color label options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The category label options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
  /**
   * Determines the visibility of the colors of alternatign bands in a radar chart.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlternateBandColorsVisibility?: Value<string>;
  /**
   * The start angle of a radar chart's axis.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartAngle?: Value<number>;
  /**
   * The category axis of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The field well configuration of a `RadarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartFieldWells](aws-properties-quicksight-template-radarchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateRadarChartFieldWells;
  /**
   * The color axis of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorAxis?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The color of the odd-numbered alternate bands of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlternateBandOddColor?: Value<string>;
  /**
   * The color of the even-numbered alternate bands of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlternateBandEvenColor?: Value<string>;
}

/**
 * The total aggregation computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totalaggregationcomputation.html}
 **/
export interface QuickSightTemplateTotalAggregationComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: QuickSightTemplateMeasureField;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A custom action defined on a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualcustomaction.html}
 **/
export interface QuickSightTemplateVisualCustomAction {
  /**
   * The status of the `VisualCustomAction`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The trigger of the `VisualCustomAction`.
   *
   * Valid values are defined as follows:
   */
  Trigger: Value<string>;
  /**
   * The ID of the `VisualCustomAction`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomActionId: Value<string>;
  /**
   * The name of the `VisualCustomAction`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * A list of `VisualCustomActionOperations`.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * _Required_: Yes
   *
   * _Type_: List of [VisualCustomActionOperation](aws-properties-quicksight-template-visualcustomactionoperation.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionOperations: List<QuickSightTemplateVisualCustomActionOperation>;
}

/**
 * The options that determine the title styles for each small multiples panel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-paneltitleoptions.html}
 **/
export interface QuickSightTemplatePanelTitleOptions {
  /**
   * Determines whether or not panel titles are displayed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightTemplateFontConfiguration;
  /**
   * Sets the horizontal text alignment of the title within each panel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTO | CENTER | LEFT | RIGHT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HorizontalTextAlignment?: Value<string>;
}

/**
 * A scatter plot.
 *
 * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotvisual.html}
 **/
export interface QuickSightTemplateScatterPlotVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotConfiguration](aws-properties-quicksight-template-scatterplotconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateScatterPlotConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The simple cluster marker of the cluster marker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-simpleclustermarker.html}
 **/
export interface QuickSightTemplateSimpleClusterMarker {
  /**
   * The color of the simple cluster marker.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
}

/**
 * A custom filter that filters based on a single value. This filter can be partially matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customfilterconfiguration.html}
 **/
export interface QuickSightTemplateCustomFilterConfiguration {
  /**
   * The category value for the filter.
   *
   * This field is mutually exclusive to `ParameterName`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryValue?: Value<string>;
  /**
   * The parameter whose value should be used for the filter value.
   *
   * This field is mutually exclusive to `CategoryValue`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName?: Value<string>;
  /**
   * This option determines how null values should be treated when filtering data.
   */
  NullOption: Value<string>;
  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CONTAINS | DOES_NOT_CONTAIN | DOES_NOT_EQUAL | ENDS_WITH | EQUALS | STARTS_WITH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchOperator: Value<string>;
  /**
   * Select all of the values. Null is not the assigned value of select all.
   */
  SelectAllOptions?: Value<string>;
}

/**
 * An insight visual.
 *
 * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-insightvisual.html}
 **/
export interface QuickSightTemplateInsightVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The dataset that is used in the insight visual.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifier: Value<string>;
  /**
   * The configuration of an insight visual.
   *
   * _Required_: No
   *
   * _Type_: [InsightConfiguration](aws-properties-quicksight-template-insightconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightConfiguration?: QuickSightTemplateInsightConfiguration;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}

/**
 * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-donutcenteroptions.html}
 **/
export interface QuickSightTemplateDonutCenterOptions {
  /**
   * Determines the visibility of the label in a donut chart. In the Amazon QuickSight console, this option is called `'Show total'`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelVisibility?: Value<string>;
}

/**
 * The conditional formatting that determines the shape of the filled map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapshapeconditionalformatting.html}
 **/
export interface QuickSightTemplateFilledMapShapeConditionalFormatting {
  /**
   * The conditional formatting that determines the background color of a filled map's shape.
   *
   * _Required_: No
   *
   * _Type_: [ShapeConditionalFormat](aws-properties-quicksight-template-shapeconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: QuickSightTemplateShapeConditionalFormat;
  /**
   * The field ID of the filled map shape.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The field well configuration of a `FunnelChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartfieldwells.html}
 **/
export interface QuickSightTemplateFunnelChartFieldWells {
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartAggregatedFieldWells](aws-properties-quicksight-template-funnelchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunnelChartAggregatedFieldWells?: QuickSightTemplateFunnelChartAggregatedFieldWells;
}

/**
 * The background style configuration of a free-form layout element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelementbackgroundstyle.html}
 **/
export interface QuickSightTemplateFreeFormLayoutElementBackgroundStyle {
  /**
   * The background color of a free-form layout element.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
  /**
   * The background visibility of a free-form layout element.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The field sort options for a pivot table sort configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivotfieldsortoptions.html}
 **/
export interface QuickSightTemplatePivotFieldSortOptions {
  /**
   * The sort by field for the field sort options.
   *
   * _Required_: Yes
   *
   * _Type_: [PivotTableSortBy](aws-properties-quicksight-template-pivottablesortby.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortBy: QuickSightTemplatePivotTableSortBy;
  /**
   * The field ID for the field sort options.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The field wells of a word cloud visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudfieldwells.html}
 **/
export interface QuickSightTemplateWordCloudFieldWells {
  /**
   * The aggregated field wells of a word cloud.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudAggregatedFieldWells](aws-properties-quicksight-template-wordcloudaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudAggregatedFieldWells?: QuickSightTemplateWordCloudAggregatedFieldWells;
}

/**
 * The options that determine the null value format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-nullvalueformatconfiguration.html}
 **/
export interface QuickSightTemplateNullValueFormatConfiguration {
  /**
   * Determines the null string of null values.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullString: Value<string>;
}

/**
 * The field wells of a `FilledMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapfieldwells.html}
 **/
export interface QuickSightTemplateFilledMapFieldWells {
  /**
   * The aggregated field well of the filled map.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapAggregatedFieldWells](aws-properties-quicksight-template-filledmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilledMapAggregatedFieldWells?: QuickSightTemplateFilledMapAggregatedFieldWells;
}

/**
 * The options that determine how a date axis is displayed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dateaxisoptions.html}
 **/
export interface QuickSightTemplateDateAxisOptions {
  /**
   * Determines whether or not missing dates are displayed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MissingDateVisibility?: Value<string>;
}

/**
 * Permission for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-resourcepermission.html}
 **/
export interface QuickSightTemplateResourcePermission {
  /**
   * The IAM action to grant or revoke permissions on.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<Value<string>>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Resource?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the principal. This can be one of the following:
   */
  Principal: Value<string>;
}

/**
 * The cell conditional formatting option for a pivot table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablecellconditionalformatting.html}
 **/
export interface QuickSightTemplatePivotTableCellConditionalFormatting {
  /**
   * The scope of the cell for conditional formatting.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableConditionalFormattingScope](aws-properties-quicksight-template-pivottableconditionalformattingscope.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: QuickSightTemplatePivotTableConditionalFormattingScope;
  /**
   * The field ID of the cell for conditional formatting.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The text format of the cell for conditional formatting.
   *
   * _Required_: No
   *
   * _Type_: [TextConditionalFormat](aws-properties-quicksight-template-textconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextFormat?: QuickSightTemplateTextConditionalFormat;
}

/**
 * The forecast computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastcomputation.html}
 **/
export interface QuickSightTemplateForecastComputation {
  /**
   * The periods backward setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodsBackward?: Value<number>;
  /**
   * The periods forward setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodsForward?: Value<number>;
  /**
   * The prediction interval setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `50`
   *
   * _Maximum_: `95`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredictionInterval?: Value<number>;
  /**
   * The seasonality setup of a forecast computation. Choose one of the following options:
   */
  Seasonality?: Value<string>;
  /**
   * The custom seasonality value setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `180`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomSeasonalityValue?: Value<number>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightTemplateMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightTemplateDimensionField;
  /**
   * The upper boundary setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpperBoundary?: Value<number>;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * The lower boundary setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LowerBoundary?: Value<number>;
}

/**
 * The option that determines the decimal places configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalplacesconfiguration.html}
 **/
export interface QuickSightTemplateDecimalPlacesConfiguration {
  /**
   * The values of the decimal places.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlaces: Value<number>;
}

/**
 * A table visual.
 *
 * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablevisual.html}
 **/
export interface QuickSightTemplateTableVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TableConditionalFormatting](aws-properties-quicksight-template-tableconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightTemplateTableConditionalFormatting;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TableConfiguration](aws-properties-quicksight-template-tableconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateTableConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}

/**
 * The sort configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartsortconfiguration.html}
 **/
export interface QuickSightTemplatePieChartSortConfiguration {
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of categories that are displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}

/**
 * The configuration of content in a body section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bodysectioncontent.html}
 **/
export interface QuickSightTemplateBodySectionContent {
  /**
   * The layout configuration of a body section.
   *
   * _Required_: No
   *
   * _Type_: [SectionLayoutConfiguration](aws-properties-quicksight-template-sectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layout?: QuickSightTemplateSectionLayoutConfiguration;
}

/**
 * The option that determines the text display weight, or boldness.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontweight.html}
 **/
export interface QuickSightTemplateFontWeight {
  /**
   * The lexical name for the level of boldness of the text display.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BOLD | NORMAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The point style of the geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialpointstyleoptions.html}
 **/
export interface QuickSightTemplateGeospatialPointStyleOptions {
  /**
   * The selected point styles (point, cluster) of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CLUSTER | POINT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedPointStyle?: Value<string>;
  /**
   * The cluster marker configuration of the geospatial point style.
   *
   * _Required_: No
   *
   * _Type_: [ClusterMarkerConfiguration](aws-properties-quicksight-template-clustermarkerconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterMarkerConfiguration?: QuickSightTemplateClusterMarkerConfiguration;
}

/**
 * The options for data bars.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-databarsoptions.html}
 **/
export interface QuickSightTemplateDataBarsOptions {
  /**
   * The color of the positive data bar.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PositiveColor?: Value<string>;
  /**
   * The field ID for the data bars options.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The color of the negative data bar.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeColor?: Value<string>;
}

/**
 * The field wells of a `BoxPlotVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotfieldwells.html}
 **/
export interface QuickSightTemplateBoxPlotFieldWells {
  /**
   * The aggregated field wells of a box plot.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotAggregatedFieldWells](aws-properties-quicksight-template-boxplotaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotAggregatedFieldWells?: QuickSightTemplateBoxPlotAggregatedFieldWells;
}

/**
 * The data path options for the pivot table field options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottabledatapathoption.html}
 **/
export interface QuickSightTemplatePivotTableDataPathOption {
  /**
   * The list of data path values for the data path options.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataPathValue](aws-properties-quicksight-template-datapathvalue.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathList: List<QuickSightTemplateDataPathValue>;
  /**
   * The width of the data path option.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Width?: Value<string>;
}

/**
 * The top movers and bottom movers computation setup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottommoverscomputation.html}
 **/
export interface QuickSightTemplateTopBottomMoversComputation {
  /**
   * The computation type. Choose from the following options:
   */
  Type: Value<string>;
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightTemplateDimensionField;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightTemplateMeasureField;
  /**
   * The sort order setup of the top and bottom movers computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ABSOLUTE_DIFFERENCE | PERCENT_DIFFERENCE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortOrder?: Value<string>;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightTemplateDimensionField;
  /**
   * The mover size setup of the top and bottom movers computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MoverSize?: Value<number>;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The layout configuration of a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionlayoutconfiguration.html}
 **/
export interface QuickSightTemplateSectionLayoutConfiguration {
  /**
   * The free-form layout configuration of a section.
   *
   * _Required_: Yes
   *
   * _Type_: [FreeFormSectionLayoutConfiguration](aws-properties-quicksight-template-freeformsectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeFormLayout: QuickSightTemplateFreeFormSectionLayoutConfiguration;
}

/**
 * The data options for an axis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdataoptions.html}
 **/
export interface QuickSightTemplateAxisDataOptions {
  /**
   * The options for an axis with a date field.
   *
   * _Required_: No
   *
   * _Type_: [DateAxisOptions](aws-properties-quicksight-template-dateaxisoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateAxisOptions?: QuickSightTemplateDateAxisOptions;
  /**
   * The options for an axis with a numeric field.
   *
   * _Required_: No
   *
   * _Type_: [NumericAxisOptions](aws-properties-quicksight-template-numericaxisoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericAxisOptions?: QuickSightTemplateNumericAxisOptions;
}

/**
 * The static data configuration of the reference line data configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinestaticdataconfiguration.html}
 **/
export interface QuickSightTemplateReferenceLineStaticDataConfiguration {
  /**
   * The double input of the static data.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
}

/**
 * The style options of the box plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotstyleoptions.html}
 **/
export interface QuickSightTemplateBoxPlotStyleOptions {
  /**
   * The fill styles (solid, transparent) of the box plot.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `SOLID | TRANSPARENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FillStyle?: Value<string>;
}

/**
 * The table cell style for a cell in pivot table or table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellstyle.html}
 **/
export interface QuickSightTemplateTableCellStyle {
  /**
   * The vertical text alignment (top, middle, bottom) for the table cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BOTTOM | MIDDLE | TOP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VerticalTextAlignment?: Value<string>;
  /**
   * The visibility of the table cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The height color for the table cells.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `8`
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Height?: Value<number>;
  /**
   * The font configuration of the table cells.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightTemplateFontConfiguration;
  /**
   * The borders for the table cells.
   *
   * _Required_: No
   *
   * _Type_: [GlobalTableBorderOptions](aws-properties-quicksight-template-globaltableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Border?: QuickSightTemplateGlobalTableBorderOptions;
  /**
   * The text wrap (none, wrap) for the table cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | WRAP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextWrap?: Value<string>;
  /**
   * The horizontal text alignment (left, center, right, auto) for the table cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTO | CENTER | LEFT | RIGHT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HorizontalTextAlignment?: Value<string>;
  /**
   * The background color for the table cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: Value<string>;
}

/**
 * The options that determine the default settings for a paginated layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultpaginatedlayoutconfiguration.html}
 **/
export interface QuickSightTemplateDefaultPaginatedLayoutConfiguration {
  /**
   * The options that determine the default settings for a section-based layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultSectionBasedLayoutConfiguration](aws-properties-quicksight-template-defaultsectionbasedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionBased?: QuickSightTemplateDefaultSectionBasedLayoutConfiguration;
}

/**
 * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-cascadingcontrolconfiguration.html}
 **/
export interface QuickSightTemplateCascadingControlConfiguration {
  /**
   * A list of source controls that determine the values that are used in the current control.
   *
   * _Required_: No
   *
   * _Type_: List of [CascadingControlSource](aws-properties-quicksight-template-cascadingcontrolsource.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceControls?: List<QuickSightTemplateCascadingControlSource>;
}

/**
 * The options that determine the bin width of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-binwidthoptions.html}
 **/
export interface QuickSightTemplateBinWidthOptions {
  /**
   * The options that determine the bin count limit.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinCountLimit?: Value<number>;
  /**
   * The options that determine the bin width value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<number>;
}

/**
 * The growth rate computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-growthratecomputation.html}
 **/
export interface QuickSightTemplateGrowthRateComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightTemplateMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightTemplateDimensionField;
  /**
   * The period size setup of a growth rate computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `52`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodSize?: Value<number>;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A collection of options that configure how each panel displays in a small multiples chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-panelconfiguration.html}
 **/
export interface QuickSightTemplatePanelConfiguration {
  /**
   * Sets the line thickness of panel borders.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderThickness?: Value<string>;
  /**
   * Sets the line style of panel borders.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DASHED | DOTTED | SOLID`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderStyle?: Value<string>;
  /**
   * Sets the total amount of negative space to display between sibling panels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GutterSpacing?: Value<string>;
  /**
   * Determines whether or not a background for each small multiples panel is rendered.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundVisibility?: Value<string>;
  /**
   * Determines whether or not each panel displays a border.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderVisibility?: Value<string>;
  /**
   * Sets the line color of panel borders.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderColor?: Value<string>;
  /**
   * Configures the title display within each small multiples panel.
   *
   * _Required_: No
   *
   * _Type_: [PanelTitleOptions](aws-properties-quicksight-template-paneltitleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplatePanelTitleOptions;
  /**
   * Determines whether or not negative space between sibling panels is rendered.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GutterVisibility?: Value<string>;
  /**
   * Sets the background color for each panel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: Value<string>;
}

/**
 * A version of a template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateversion.html}
 **/
export interface QuickSightTemplateTemplateVersion {
  /**
   * The status that is associated with the template.
   */
  Status?: Value<string>;
  /**
   * Errors associated with this template version.
   *
   * _Required_: No
   *
   * _Type_: List of [TemplateError](aws-properties-quicksight-template-templateerror.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Errors?: List<QuickSightTemplateTemplateError>;
  /**
   * The time that this template version was created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreatedTime?: Value<string>;
  /**
   * The description of the template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ARN of the theme associated with this version of the template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThemeArn?: Value<string>;
  /**
   * Schema of the dataset identified by the placeholder. Any dashboard created from this template should be bound to new datasets matching the same schema described through this API operation.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSetConfiguration](aws-properties-quicksight-template-datasetconfiguration.md)
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetConfigurations?: List<QuickSightTemplateDataSetConfiguration>;
  /**
   * The Amazon Resource Name (ARN) of an analysis or template that was used to create this template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceEntityArn?: Value<string>;
  /**
   * The version number of the template version.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionNumber?: Value<number>;
  /**
   * A list of the associated sheets with the unique identifier and name of each sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [Sheet](aws-properties-quicksight-template-sheet.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sheets?: List<QuickSightTemplateSheet>;
}

/**
 * A list of selectable values that are used in a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterselectablevalues.html}
 **/
export interface QuickSightTemplateFilterSelectableValues {
  /**
   * The values that are used in the `FilterSelectableValues`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Custom icon options for an icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcustomiconoptions.html}
 **/
export interface QuickSightTemplateConditionalFormattingCustomIconOptions {
  /**
   * Determines the Unicode icon type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[^u0000-u00FF]$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnicodeIcon?: Value<string>;
  /**
   * Determines the type of icon.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ARROW_DOWN | ARROW_DOWN_LEFT | ARROW_DOWN_RIGHT | ARROW_LEFT | ARROW_RIGHT | ARROW_UP | ARROW_UP_LEFT | ARROW_UP_RIGHT | CARET_DOWN | CARET_UP | CHECKMARK | CIRCLE | FACE_DOWN | FACE_FLAT | FACE_UP | FLAG | MINUS | ONE_BAR | PLUS | SQUARE | THREE_BAR | THUMBS_DOWN | THUMBS_UP | TRIANGLE | TWO_BAR | X`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: Value<string>;
}

/**
 * The dimension type field with date type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datedimensionfield.html}
 **/
export interface QuickSightTemplateDateDimensionField {
  /**
   * The custom hierarchy ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyId?: Value<string>;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-template-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateDateTimeFormatConfiguration;
  /**
   * The column that is used in the `DateDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The date granularity of the `DateDimensionField`. Choose one of the following options:
   */
  DateGranularity?: Value<string>;
}

/**
 * The image configuration of a table field URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldimageconfiguration.html}
 **/
export interface QuickSightTemplateTableFieldImageConfiguration {
  /**
   * The sizing options for the table image configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableCellImageSizingConfiguration](aws-properties-quicksight-template-tablecellimagesizingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizingOptions?: QuickSightTemplateTableCellImageSizingConfiguration;
}

/**
 * The label options for an axis on a chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-chartaxislabeloptions.html}
 **/
export interface QuickSightTemplateChartAxisLabelOptions {
  /**
   * The visibility of an axis label on a chart. Choose one of the following options:
   */
  Visibility?: Value<string>;
  /**
   * The visibility configuration of the sort icon on a chart's axis label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortIconVisibility?: Value<string>;
  /**
   * The label options for a chart axis.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-quicksight-template-axislabeloptions.md) of [AxisLabelOptions](aws-properties-quicksight-template-axislabeloptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisLabelOptions?: List<QuickSightTemplateAxisLabelOptions>;
}

/**
 * The color map that determines the color options for a particular element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathcolor.html}
 **/
export interface QuickSightTemplateDataPathColor {
  /**
   * The element that the color needs to be applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [DataPathValue](aws-properties-quicksight-template-datapathvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Element: QuickSightTemplateDataPathValue;
  /**
   * The color that needs to be applied to the element.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color: Value<string>;
  /**
   * The time granularity of the field that the color needs to be applied to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeGranularity?: Value<string>;
}

/**
 * The configuration of a page break for a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionpagebreakconfiguration.html}
 **/
export interface QuickSightTemplateSectionPageBreakConfiguration {
  /**
   * The configuration of a page break after a section.
   *
   * _Required_: No
   *
   * _Type_: [SectionAfterPageBreak](aws-properties-quicksight-template-sectionafterpagebreak.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  After?: QuickSightTemplateSectionAfterPageBreak;
}

/**
 * Formatting configuration for string fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringformatconfiguration.html}
 **/
export interface QuickSightTemplateStringFormatConfiguration {
  /**
   * The formatting configuration for numeric strings.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-template-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericFormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-template-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
}

/**
 * The configuration of a `CustomContentVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontentconfiguration.html}
 **/
export interface QuickSightTemplateCustomContentConfiguration {
  /**
   * The input URL that links to the custom content that you want in the custom visual.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentUrl?: Value<string>;
  /**
   * The content type of the custom content visual. You can use this to have the visual render as an image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `IMAGE | OTHER_EMBEDDED_CONTENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentType?: Value<string>;
  /**
   * The sizing options for the size of the custom content visual. This structure is required when the `ContentType` of the visual is `'IMAGE'`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DO_NOT_SCALE | FIT_TO_HEIGHT | FIT_TO_WIDTH | SCALE_TO_VISUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageScaling?: Value<string>;
}

/**
 * The configuration for a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconfiguration.html}
 **/
export interface QuickSightTemplateFilledMapConfiguration {
  /**
   * The sort configuration of a `FilledMapVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapSortConfiguration](aws-properties-quicksight-template-filledmapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateFilledMapSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The map style options of the filled map visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-template-geospatialmapstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapStyleOptions?: QuickSightTemplateGeospatialMapStyleOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapFieldWells](aws-properties-quicksight-template-filledmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateFilledMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The window options of the filled map visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialWindowOptions](aws-properties-quicksight-template-geospatialwindowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowOptions?: QuickSightTemplateGeospatialWindowOptions;
}

/**
 * List of errors that occurred when the template version creation failed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateerror.html}
 **/
export interface QuickSightTemplateTemplateError {
  /**
   * Type of error.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACCESS_DENIED | DATA_SET_NOT_FOUND | INTERNAL_FAILURE | SOURCE_NOT_FOUND`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * Description of the error type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Message?: Value<string>;
  /**
   * An error path that shows which entities caused the template error.
   *
   * _Required_: No
   *
   * _Type_: List of [Entity](aws-properties-quicksight-template-entity.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ViolatedEntities?: List<QuickSightTemplateEntity>;
}

/**
 * The options that determine the default settings for a section-based layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultsectionbasedlayoutconfiguration.html}
 **/
export interface QuickSightTemplateDefaultSectionBasedLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a section-based layout.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionBasedLayoutCanvasSizeOptions](aws-properties-quicksight-template-sectionbasedlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightTemplateSectionBasedLayoutCanvasSizeOptions;
}

/**
 * The options that determine the presentation of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartoptions.html}
 **/
export interface QuickSightTemplateWaterfallChartOptions {
  /**
   * This option determines the total bar label of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalBarLabel?: Value<string>;
}

/**
 * The configuration of target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filteroperationtargetvisualsconfiguration.html}
 **/
export interface QuickSightTemplateFilterOperationTargetVisualsConfiguration {
  /**
   * The configuration of the same-sheet target visuals that you want to be filtered.
   *
   * _Required_: No
   *
   * _Type_: [SameSheetTargetVisualConfiguration](aws-properties-quicksight-template-samesheettargetvisualconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SameSheetTargetVisualConfiguration?: QuickSightTemplateSameSheetTargetVisualConfiguration;
}

/**
 * The forecast scenario of a forecast in the line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastscenario.html}
 **/
export interface QuickSightTemplateForecastScenario {
  /**
   * The what-if analysis forecast setup with the date range.
   *
   * _Required_: No
   *
   * _Type_: [WhatIfRangeScenario](aws-properties-quicksight-template-whatifrangescenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhatIfRangeScenario?: QuickSightTemplateWhatIfRangeScenario;
  /**
   * The what-if analysis forecast setup with the target date.
   *
   * _Required_: No
   *
   * _Type_: [WhatIfPointScenario](aws-properties-quicksight-template-whatifpointscenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhatIfPointScenario?: QuickSightTemplateWhatIfPointScenario;
}

/**
 * The configuration of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapconfiguration.html}
 **/
export interface QuickSightTemplateHeatMapConfiguration {
  /**
   * The sort configuration of a heat map.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapSortConfiguration](aws-properties-quicksight-template-heatmapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateHeatMapSortConfiguration;
  /**
   * The label options of the column that is displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapFieldWells](aws-properties-quicksight-template-heatmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateHeatMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The color options (gradient color, point of divergence) in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ColorScale](aws-properties-quicksight-template-colorscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorScale?: QuickSightTemplateColorScale;
  /**
   * The label options of the row that is displayed in a `heat map`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
}

/**
 * The scope configuration for a `FilterGroup`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterscopeconfiguration.html}
 **/
export interface QuickSightTemplateFilterScopeConfiguration {
  /**
   * The configuration for applying a filter to specific sheets.
   *
   * _Required_: No
   *
   * _Type_: [SelectedSheetsFilterScopeConfiguration](aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedSheets?: QuickSightTemplateSelectedSheetsFilterScopeConfiguration;
}

/**
 * The total options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottabletotaloptions.html}
 **/
export interface QuickSightTemplatePivotTableTotalOptions {
  /**
   * The column subtotal options.
   *
   * _Required_: No
   *
   * _Type_: [SubtotalOptions](aws-properties-quicksight-template-subtotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSubtotalOptions?: QuickSightTemplateSubtotalOptions;
  /**
   * The row subtotal options.
   *
   * _Required_: No
   *
   * _Type_: [SubtotalOptions](aws-properties-quicksight-template-subtotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowSubtotalOptions?: QuickSightTemplateSubtotalOptions;
  /**
   * The row total options.
   *
   * _Required_: No
   *
   * _Type_: [PivotTotalOptions](aws-properties-quicksight-template-pivottotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowTotalOptions?: QuickSightTemplatePivotTotalOptions;
  /**
   * The column total options.
   *
   * _Required_: No
   *
   * _Type_: [PivotTotalOptions](aws-properties-quicksight-template-pivottotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnTotalOptions?: QuickSightTemplatePivotTotalOptions;
}

/**
 * The field well configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateLineChartAggregatedFieldWells {
  /**
   * The category field wells of a line chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightTemplateDimensionField>;
  /**
   * The color field wells of a line chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightTemplateDimensionField>;
  /**
   * The value field wells of a line chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
  /**
   * The small multiples field well of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightTemplateDimensionField>;
}

/**
 * The options that determine the numeric separator configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericseparatorconfiguration.html}
 **/
export interface QuickSightTemplateNumericSeparatorConfiguration {
  /**
   * Determines the decimal separator.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `COMMA | DOT | SPACE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalSeparator?: Value<string>;
  /**
   * The options that determine the thousands separator configuration.
   *
   * _Required_: No
   *
   * _Type_: [ThousandSeparatorOptions](aws-properties-quicksight-template-thousandseparatoroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThousandsSeparator?: QuickSightTemplateThousandSeparatorOptions;
}

/**
 * The forecast configuration that is used in a line chart's display properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-forecastconfiguration.html}
 **/
export interface QuickSightTemplateForecastConfiguration {
  /**
   * The forecast properties setup of a forecast in the line chart.
   *
   * _Required_: No
   *
   * _Type_: [TimeBasedForecastProperties](aws-properties-quicksight-template-timebasedforecastproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForecastProperties?: QuickSightTemplateTimeBasedForecastProperties;
  /**
   * The forecast scenario of a forecast in the line chart.
   *
   * _Required_: No
   *
   * _Type_: [ForecastScenario](aws-properties-quicksight-template-forecastscenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scenario?: QuickSightTemplateForecastScenario;
}

/**
 * Formatting configuration for `DateTime` fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimeformatconfiguration.html}
 **/
export interface QuickSightTemplateDateTimeFormatConfiguration {
  /**
   * The formatting configuration for numeric `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-template-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericFormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-template-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  /**
   * Determines the `DateTime` format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeFormat?: Value<string>;
}

/**
 * Formatting configuration for icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingiconset.html}
 **/
export interface QuickSightTemplateConditionalFormattingIconSet {
  /**
   * The expression that determines the formatting configuration for the icon set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * Determines the icon set type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BARS | CARET_UP_MINUS_DOWN | CHECK_X | FLAGS | FOUR_COLOR_ARROW | FOUR_GRAY_ARROW | PLUS_MINUS | THREE_CIRCLE | THREE_COLOR_ARROW | THREE_GRAY_ARROW | THREE_SHAPE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconSetType?: Value<string>;
}

/**
 * The URL content (text, icon) for the table link configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldlinkcontentconfiguration.html}
 **/
export interface QuickSightTemplateTableFieldLinkContentConfiguration {
  /**
   * The custom icon content for the table link content configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldCustomIconContent](aws-properties-quicksight-template-tablefieldcustomiconcontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomIconContent?: QuickSightTemplateTableFieldCustomIconContent;
  /**
   * The custom text content (value, font configuration) for the table link content configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldCustomTextContent](aws-properties-quicksight-template-tablefieldcustomtextcontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomTextContent?: QuickSightTemplateTableFieldCustomTextContent;
}

/**
 * Determines the border options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-globaltableborderoptions.html}
 **/
export interface QuickSightTemplateGlobalTableBorderOptions {
  /**
   * Determines the options for uniform border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-template-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UniformBorder?: QuickSightTemplateTableBorderOptions;
  /**
   * Determines the options for side specific border.
   *
   * _Required_: No
   *
   * _Type_: [TableSideBorderOptions](aws-properties-quicksight-template-tablesideborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SideSpecificBorder?: QuickSightTemplateTableSideBorderOptions;
}

/**
 * The configuration of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapconfiguration.html}
 **/
export interface QuickSightTemplateTreeMapConfiguration {
  /**
   * The sort configuration of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapSortConfiguration](aws-properties-quicksight-template-treemapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateTreeMapSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The label options (label text, label visibility) for the colors displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility) of the sizes that are displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapFieldWells](aws-properties-quicksight-template-treemapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateTreeMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The color options (gradient color, point of divergence) of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ColorScale](aws-properties-quicksight-template-colorscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorScale?: QuickSightTemplateColorScale;
  /**
   * The label options (label text, label visibility) of the groups that are displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
}

/**
 * The table calculation measure field for pivot tables.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-calculatedmeasurefield.html}
 **/
export interface QuickSightTemplateCalculatedMeasureField {
  /**
   * The expression in the table calculation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The aggregated field well for the pivot table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableaggregatedfieldwells.html}
 **/
export interface QuickSightTemplatePivotTableAggregatedFieldWells {
  /**
   * The values field well for a pivot table. Values are aggregated based on rows and columns fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
  /**
   * The columns field well for a pivot table. Values are grouped by columns fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<QuickSightTemplateDimensionField>;
  /**
   * The rows field well for a pivot table. Values are grouped by rows fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rows?: List<QuickSightTemplateDimensionField>;
}

/**
 * The aggregated field well of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotcategoricallyaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateScatterPlotCategoricallyAggregatedFieldWells {
  /**
   * The category field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightTemplateDimensionField>;
  /**
   * The size field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightTemplateMeasureField>;
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxis?: List<QuickSightTemplateMeasureField>;
  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxis?: List<QuickSightTemplateMeasureField>;
}

/**
 * The source template of the template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourcetemplate.html}
 **/
export interface QuickSightTemplateTemplateSourceTemplate {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
}

/**
 * The field well configuration of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramfieldwells.html}
 **/
export interface QuickSightTemplateHistogramFieldWells {
  /**
   * The field well configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [HistogramAggregatedFieldWells](aws-properties-quicksight-template-histogramaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistogramAggregatedFieldWells?: QuickSightTemplateHistogramAggregatedFieldWells;
}

/**
 * The pagination configuration for a table visual or boxplot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-paginationconfiguration.html}
 **/
export interface QuickSightTemplatePaginationConfiguration {
  /**
   * Indicates how many items render in one page.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageSize: Value<number>;
  /**
   * Indicates the page number.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageNumber: Value<number>;
}

/**
 * The configuration of custom values for the destination parameter in `DestinationParameterValueConfiguration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customvaluesconfiguration.html}
 **/
export interface QuickSightTemplateCustomValuesConfiguration {
  /**
   * Includes the null value in custom action parameter values.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeNullValue?: Value<boolean>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [CustomParameterValues](aws-properties-quicksight-template-customparametervalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValues: QuickSightTemplateCustomParameterValues;
}

/**
 * The configuration of a `GeospatialMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapconfiguration.html}
 **/
export interface QuickSightTemplateGeospatialMapConfiguration {
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The map style options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-template-geospatialmapstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapStyleOptions?: QuickSightTemplateGeospatialMapStyleOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapFieldWells](aws-properties-quicksight-template-geospatialmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateGeospatialMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The window options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialWindowOptions](aws-properties-quicksight-template-geospatialwindowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowOptions?: QuickSightTemplateGeospatialWindowOptions;
  /**
   * The point style options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialPointStyleOptions](aws-properties-quicksight-template-geospatialpointstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PointStyleOptions?: QuickSightTemplateGeospatialPointStyleOptions;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
}

/**
 * The liner axis scale setup.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislinearscale.html}
 **/
export interface QuickSightTemplateAxisLinearScale {
  /**
   * The step size setup of a linear axis.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepSize?: Value<number>;
  /**
   * The step count setup of a linear axis.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepCount?: Value<number>;
}

/**
 * The value of a time range filter.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangefiltervalue.html}
 **/
export interface QuickSightTemplateTimeRangeFilterValue {
  /**
   * The rolling date input value.
   *
   * _Required_: No
   *
   * _Type_: [RollingDateConfiguration](aws-properties-quicksight-template-rollingdateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RollingDate?: QuickSightTemplateRollingDateConfiguration;
  /**
   * The static input value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticValue?: Value<string>;
  /**
   * The parameter type input value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameter?: Value<string>;
}

/**
 * The field well configuration of a pie chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartfieldwells.html}
 **/
export interface QuickSightTemplatePieChartFieldWells {
  /**
   * The field well configuration of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [PieChartAggregatedFieldWells](aws-properties-quicksight-template-piechartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PieChartAggregatedFieldWells?: QuickSightTemplatePieChartAggregatedFieldWells;
}

/**
 * The field options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldoptions.html}
 **/
export interface QuickSightTemplateTableFieldOptions {
  /**
   * The order of field IDs of the field options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Order?: List<Value<string>>;
  /**
   * The selected field options for the table field options.
   *
   * _Required_: No
   *
   * _Type_: List of [TableFieldOption](aws-properties-quicksight-template-tablefieldoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldOptions?: List<QuickSightTemplateTableFieldOption>;
}

/**
 * The limit configuration of the visual display for an axis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-itemslimitconfiguration.html}
 **/
export interface QuickSightTemplateItemsLimitConfiguration {
  /**
   * The limit on how many items of a field are showed in the chart. For example, the number of slices that are displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ItemsLimit?: Value<number>;
  /**
   * The `Show other` of an axis in the chart. Choose one of the following options:
   */
  OtherCategories?: Value<string>;
}

/**
 * The window options of the geospatial map visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialwindowoptions.html}
 **/
export interface QuickSightTemplateGeospatialWindowOptions {
  /**
   * The bounds options (north, south, west, east) of the geospatial window options.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialCoordinateBounds](aws-properties-quicksight-template-geospatialcoordinatebounds.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bounds?: QuickSightTemplateGeospatialCoordinateBounds;
  /**
   * The map zoom modes (manual, auto) of the geospatial window options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTO | MANUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapZoomMode?: Value<string>;
}

/**
 * The label options for a chart axis. You must specify the field that the label is targeted to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislabeloptions.html}
 **/
export interface QuickSightTemplateAxisLabelOptions {
  /**
   * The text for the axis label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel?: Value<string>;
  /**
   * The options that indicate which field the label belongs to.
   *
   * _Required_: No
   *
   * _Type_: [AxisLabelReferenceOptions](aws-properties-quicksight-template-axislabelreferenceoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyTo?: QuickSightTemplateAxisLabelReferenceOptions;
  /**
   * The font configuration of the axis label.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightTemplateFontConfiguration;
}

/**
 * Dataset reference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetreference.html}
 **/
export interface QuickSightTemplateDataSetReference {
  /**
   * Dataset Amazon Resource Name (ARN).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetArn: Value<string>;
  /**
   * Dataset placeholder.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetPlaceholder: Value<string>;
}

/**
 * The field sort options in a chart configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldsortoptions.html}
 **/
export interface QuickSightTemplateFieldSortOptions {
  /**
   * The sort configuration for a field in a field well.
   *
   * _Required_: No
   *
   * _Type_: [FieldSort](aws-properties-quicksight-template-fieldsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSort?: QuickSightTemplateFieldSort;
  /**
   * The sort configuration for a column that is not used in a field well.
   *
   * _Required_: No
   *
   * _Type_: [ColumnSort](aws-properties-quicksight-template-columnsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSort?: QuickSightTemplateColumnSort;
}

/**
 * A sankey diagram.
 *
 * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramvisual.html}
 **/
export interface QuickSightTemplateSankeyDiagramVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramChartConfiguration](aws-properties-quicksight-template-sankeydiagramchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateSankeyDiagramChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}

/**
 * A radar chart visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartvisual.html}
 **/
export interface QuickSightTemplateRadarChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartConfiguration](aws-properties-quicksight-template-radarchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateRadarChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The options that determine the default presentation of all line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartdefaultseriessettings.html}
 **/
export interface QuickSightTemplateLineChartDefaultSeriesSettings {
  /**
   * Line styles options for all line series in the visual.
   *
   * _Required_: No
   *
   * _Type_: [LineChartLineStyleSettings](aws-properties-quicksight-template-linechartlinestylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineStyleSettings?: QuickSightTemplateLineChartLineStyleSettings;
  /**
   * The axis to which you are binding all line series to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PRIMARY_YAXIS | SECONDARY_YAXIS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisBinding?: Value<string>;
  /**
   * Marker styles options for all line series in the visual.
   *
   * _Required_: No
   *
   * _Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-template-linechartmarkerstylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerStyleSettings?: QuickSightTemplateLineChartMarkerStyleSettings;
}

/**
 * The detailed definition of a template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templateversiondefinition.html}
 **/
export interface QuickSightTemplateTemplateVersionDefinition {
  /**
   * Filter definitions for a template.
   *
   * For more information, see [Filtering Data](https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [FilterGroup](aws-properties-quicksight-template-filtergroup.md)
   *
   * _Maximum_: `2000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterGroups?: List<QuickSightTemplateFilterGroup>;
  /**
   * An array of calculated field definitions for the template.
   *
   * _Required_: No
   *
   * _Type_: List of [CalculatedField](aws-properties-quicksight-template-calculatedfield.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CalculatedFields?: List<QuickSightTemplateCalculatedField>;
  /**
   * An array of dataset configurations. These configurations define the required columns for each dataset used within a template.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataSetConfiguration](aws-properties-quicksight-template-datasetconfiguration.md)
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetConfigurations: List<QuickSightTemplateDataSetConfiguration>;
  /**
   * An array of template-level column configurations. Column configurations are used to set default formatting for a column that's used throughout a template.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnConfiguration](aws-properties-quicksight-template-columnconfiguration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnConfigurations?: List<QuickSightTemplateColumnConfiguration>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisDefaults](aws-properties-quicksight-template-analysisdefaults.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnalysisDefaults?: QuickSightTemplateAnalysisDefaults;
  /**
   * An array of sheet definitions for a template.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetDefinition](aws-properties-quicksight-template-sheetdefinition.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sheets?: List<QuickSightTemplateSheetDefinition>;
  /**
   * An array of parameter declarations for a template.
   *
   * _Parameters_ are named variables that can transfer a value for use by an action or an object.
   *
   * For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [ParameterDeclaration](aws-properties-quicksight-template-parameterdeclaration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterDeclarations?: List<QuickSightTemplateParameterDeclaration>;
}

/**
 * The options that determine the sizing of the canvas used in a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions.html}
 **/
export interface QuickSightTemplateGridLayoutScreenCanvasSizeOptions {
  /**
   * The width that the view port will be optimized for when the layout renders.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptimizedViewPortWidth?: Value<string>;
  /**
   * This value determines the layout behavior when the viewport is resized.
   */
  ResizeOption: Value<string>;
}

/**
 * The configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramchartconfiguration.html}
 **/
export interface QuickSightTemplateSankeyDiagramChartConfiguration {
  /**
   * The sort configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramSortConfiguration](aws-properties-quicksight-template-sankeydiagramsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateSankeyDiagramSortConfiguration;
  /**
   * The data label configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The field well configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramFieldWells](aws-properties-quicksight-template-sankeydiagramfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateSankeyDiagramFieldWells;
}

/**
 * The dynamic configuration of the reference line data configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinedynamicdataconfiguration.html}
 **/
export interface QuickSightTemplateReferenceLineDynamicDataConfiguration {
  /**
   * The column that the dynamic data targets.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The aggregation function that is used in the dynamic data.
   *
   * _Required_: Yes
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureAggregationFunction: QuickSightTemplateAggregationFunction;
  /**
   * The calculation that is used in the dynamic data.
   *
   * _Required_: Yes
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-template-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Calculation: QuickSightTemplateNumericalAggregationFunction;
}

/**
 * The sort configuration for a `TableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablesortconfiguration.html}
 **/
export interface QuickSightTemplateTableSortConfiguration {
  /**
   * The field sort options for rows in the table.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The pagination configuration (page size, page number) for the table.
   *
   * _Required_: No
   *
   * _Type_: [PaginationConfiguration](aws-properties-quicksight-template-paginationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginationConfiguration?: QuickSightTemplatePaginationConfiguration;
}

/**
 * The series settings of a radar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartseriessettings.html}
 **/
export interface QuickSightTemplateRadarChartSeriesSettings {
  /**
   * The area style settings of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartAreaStyleSettings](aws-properties-quicksight-template-radarchartareastylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AreaStyleSettings?: QuickSightTemplateRadarChartAreaStyleSettings;
}

/**
 * The field well configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartfieldwells.html}
 **/
export interface QuickSightTemplateWaterfallChartFieldWells {
  /**
   * The field well configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartAggregatedFieldWells](aws-properties-quicksight-template-waterfallchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallChartAggregatedFieldWells?: QuickSightTemplateWaterfallChartAggregatedFieldWells;
}

/**
 * Aggregated field wells of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateTreeMapAggregatedFieldWells {
  /**
   * The size field well of a tree map. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sizes?: List<QuickSightTemplateMeasureField>;
  /**
   * The color field well of a tree map. Values are grouped by aggregations based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightTemplateMeasureField>;
  /**
   * The group by field well of a tree map. Values are grouped based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<QuickSightTemplateDimensionField>;
}

/**
 * A combo chart.
 *
 * The `ComboChartVisual` includes stacked bar combo charts and clustered bar combo charts
 *
 * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartvisual.html}
 **/
export interface QuickSightTemplateComboChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartConfiguration](aws-properties-quicksight-template-combochartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateComboChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The options that determine the sizing of the canvas used in a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutscreencanvassizeoptions.html}
 **/
export interface QuickSightTemplateFreeFormLayoutScreenCanvasSizeOptions {
  /**
   * The width that the view port will be optimized for when the layout renders.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptimizedViewPortWidth: Value<string>;
}

/**
 * The value input pf the numeric range filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericrangefiltervalue.html}
 **/
export interface QuickSightTemplateNumericRangeFilterValue {
  /**
   * The static value of the numeric range filter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticValue?: Value<number>;
  /**
   * The parameter that is used in the numeric range.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameter?: Value<string>;
}

/**
 * The link configuration of a table field URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldlinkconfiguration.html}
 **/
export interface QuickSightTemplateTableFieldLinkConfiguration {
  /**
   * The URL target (new tab, new window, same tab) for the table link configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `NEW_TAB | NEW_WINDOW | SAME_TAB`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: Value<string>;
  /**
   * The URL content (text, icon) for the table link configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [TableFieldLinkContentConfiguration](aws-properties-quicksight-template-tablefieldlinkcontentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: QuickSightTemplateTableFieldLinkContentConfiguration;
}

/**
 * The configuration for default analysis settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-analysisdefaults.html}
 **/
export interface QuickSightTemplateAnalysisDefaults {
  /**
   * The configuration for default new sheet settings.
   *
   * _Required_: Yes
   *
   * _Type_: [DefaultNewSheetConfiguration](aws-properties-quicksight-template-defaultnewsheetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultNewSheetConfiguration: QuickSightTemplateDefaultNewSheetConfiguration;
}

/**
 * The sort configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartsortconfiguration.html}
 **/
export interface QuickSightTemplateWaterfallChartSortConfiguration {
  /**
   * The limit on the number of bar groups that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BreakdownItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * The formatting configuration for the color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcolor.html}
 **/
export interface QuickSightTemplateConditionalFormattingColor {
  /**
   * Formatting configuration for gradient color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingGradientColor](aws-properties-quicksight-template-conditionalformattinggradientcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gradient?: QuickSightTemplateConditionalFormattingGradientColor;
  /**
   * Formatting configuration for solid color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingSolidColor](aws-properties-quicksight-template-conditionalformattingsolidcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Solid?: QuickSightTemplateConditionalFormattingSolidColor;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativedatetimecontroldisplayoptions.html}
 **/
export interface QuickSightTemplateRelativeDateTimeControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightTemplateLabelOptions;
  /**
   * Customize how dates are formatted in controls.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeFormat?: Value<string>;
}

/**
 * A `TopBottomFilter` filters values that are at the top or the bottom.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomfilter.html}
 **/
export interface QuickSightTemplateTopBottomFilter {
  /**
   * The aggregation and sort configuration of the top bottom filter.
   *
   * _Required_: Yes
   *
   * _Type_: List of [AggregationSortConfiguration](aws-properties-quicksight-template-aggregationsortconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationSortConfigurations: List<QuickSightTemplateAggregationSortConfiguration>;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeGranularity?: Value<string>;
  /**
   * The parameter whose value should be used for the filter value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName?: Value<string>;
  /**
   * The number of items to include in the top bottom filter results.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Limit?: Value<number>;
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterId: Value<string>;
}

/**
 * The range setup of a numeric axis display range.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayrange.html}
 **/
export interface QuickSightTemplateAxisDisplayRange {
  /**
   * The data-driven setup of an axis display range.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataDriven?: { [key: string]: any };
  /**
   * The minimum and maximum setup of an axis display range.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayMinMaxRange](aws-properties-quicksight-template-axisdisplayminmaxrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinMax?: QuickSightTemplateAxisDisplayMinMaxRange;
}

/**
 * The top ranked and bottom ranked computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-topbottomrankedcomputation.html}
 **/
export interface QuickSightTemplateTopBottomRankedComputation {
  /**
   * The computation type. Choose one of the following options:
   */
  Type: Value<string>;
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightTemplateDimensionField;
  /**
   * The result size of a top and bottom ranked computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResultSize?: Value<number>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightTemplateMeasureField;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The data field series item configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datafieldseriesitem.html}
 **/
export interface QuickSightTemplateDataFieldSeriesItem {
  /**
   * The field ID of the field that you are setting the axis binding to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The axis that you are binding the field to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `PRIMARY_YAXIS | SECONDARY_YAXIS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisBinding: Value<string>;
  /**
   * The field value of the field that you are setting the axis binding to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldValue?: Value<string>;
  /**
   * The options that determine the presentation of line series associated to the field.
   *
   * _Required_: No
   *
   * _Type_: [LineChartSeriesSettings](aws-properties-quicksight-template-linechartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: QuickSightTemplateLineChartSeriesSettings;
}

/**
 * An element within a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutelement.html}
 **/
export interface QuickSightTemplateGridLayoutElement {
  /**
   * The type of element.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `FILTER_CONTROL | PARAMETER_CONTROL | TEXT_BOX | VISUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElementType: Value<string>;
  /**
   * The width of a grid element expressed as a number of grid columns.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `36`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSpan: Value<number>;
  /**
   * The column index for the upper left corner of an element.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `35`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnIndex?: Value<number>;
  /**
   * The row index for the upper left corner of an element.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `9009`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowIndex?: Value<number>;
  /**
   * The height of a grid element expressed as a number of grid rows.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `21`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowSpan: Value<number>;
  /**
   * A unique identifier for an element within a grid layout.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElementId: Value<string>;
}

/**
 * A `NumericRangeFilter` filters values that are within the value range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericrangefilter.html}
 **/
export interface QuickSightTemplateNumericRangeFilter {
  /**
   * The aggregation function of the filter.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightTemplateAggregationFunction;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * Determines whether the maximum value in the filter value range should be included in the filtered results.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeMaximum?: Value<boolean>;
  /**
   * The minimum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [NumericRangeFilterValue](aws-properties-quicksight-template-numericrangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMinimum?: QuickSightTemplateNumericRangeFilterValue;
  /**
   * This option determines how null values should be treated when filtering data.
   */
  NullOption: Value<string>;
  /**
   * Select all of the values. Null is not the assigned value of select all.
   */
  SelectAllOptions?: Value<string>;
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterId: Value<string>;
  /**
   * The maximum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [NumericRangeFilterValue](aws-properties-quicksight-template-numericrangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMaximum?: QuickSightTemplateNumericRangeFilterValue;
  /**
   * Determines whether the minimum value in the filter value range should be included in the filtered results.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeMinimum?: Value<boolean>;
}

/**
 * The options that determine the presentation of the data labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabeloptions.html}
 **/
export interface QuickSightTemplateDataLabelOptions {
  /**
   * The option that determines the data label type.
   *
   * _Required_: No
   *
   * _Type_: List of [DataLabelType](aws-properties-quicksight-template-datalabeltype.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabelTypes?: List<QuickSightTemplateDataLabelType>;
  /**
   * Determines the visibility of the measure field labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureLabelVisibility?: Value<string>;
  /**
   * Determines the position of the data labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BOTTOM | INSIDE | LEFT | OUTSIDE | RIGHT | TOP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Position?: Value<string>;
  /**
   * Determines the content of the data labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PERCENT | VALUE | VALUE_AND_PERCENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelContent?: Value<string>;
  /**
   * Determines the visibility of the data labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * Determines whether overlap is enabled or disabled for the data labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLE_OVERLAP | ENABLE_OVERLAP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Overlap?: Value<string>;
  /**
   * Determines the visibility of the category field labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelVisibility?: Value<string>;
  /**
   * Determines the color of the data labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelColor?: Value<string>;
  /**
   * Determines the font configuration of the data labels.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelFontConfiguration?: QuickSightTemplateFontConfiguration;
}

/**
 * The map style options of the geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapstyleoptions.html}
 **/
export interface QuickSightTemplateGeospatialMapStyleOptions {
  /**
   * The base map style of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DARK_GRAY | IMAGERY | LIGHT_GRAY | STREET`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseMapStyle?: Value<string>;
}

/**
 * The default values of the `StringParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringdefaultvalues.html}
 **/
export interface QuickSightTemplateStringDefaultValues {
  /**
   * The dynamic value of the `StringDefaultValues`. Different defaults displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-template-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  /**
   * The static values of the `DecimalDefaultValues`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticValues?: List<Value<string>>;
}

/**
 * The arc axis configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcaxisconfiguration.html}
 **/
export interface QuickSightTemplateArcAxisConfiguration {
  /**
   * The arc axis range of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ArcAxisDisplayRange](aws-properties-quicksight-template-arcaxisdisplayrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: QuickSightTemplateArcAxisDisplayRange;
  /**
   * The reserved range of the arc axis.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReserveRange?: Value<number>;
}

/**
 * The configuration of selected fields in the`CustomActionFilterOperation`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filteroperationselectedfieldsconfiguration.html}
 **/
export interface QuickSightTemplateFilterOperationSelectedFieldsConfiguration {
  /**
   * Chooses the fields that are filtered in `CustomActionFilterOperation`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFields?: List<Value<string>>;
  /**
   * A structure that contains the options that choose which fields are filtered in the `CustomActionFilterOperation`.
   *
   * Valid values are defined as follows:
   */
  SelectedFieldOptions?: Value<string>;
}

/**
 * The options that determine the presentation of histogram bins.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogrambinoptions.html}
 **/
export interface QuickSightTemplateHistogramBinOptions {
  /**
   * The options that determine the bin width of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [BinWidthOptions](aws-properties-quicksight-template-binwidthoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinWidth?: QuickSightTemplateBinWidthOptions;
  /**
   * The options that determine the bin start value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartValue?: Value<number>;
  /**
   * The options that determine the selected bin type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BIN_COUNT | BIN_WIDTH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedBinType?: Value<string>;
  /**
   * The options that determine the bin count of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [BinCountOptions](aws-properties-quicksight-template-bincountoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinCount?: QuickSightTemplateBinCountOptions;
}

/**
 * A column of a data set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnidentifier.html}
 **/
export interface QuickSightTemplateColumnIdentifier {
  /**
   * The name of the column.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnName: Value<string>;
  /**
   * The data set that the column belongs to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifier: Value<string>;
}

/**
 * Marker styles options for a line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartmarkerstylesettings.html}
 **/
export interface QuickSightTemplateLineChartMarkerStyleSettings {
  /**
   * Shape option for markers in the series.
   */
  MarkerShape?: Value<string>;
  /**
   * Size of marker in the series.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerSize?: Value<string>;
  /**
   * Configuration option that determines whether to show the markers in the series.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerVisibility?: Value<string>;
  /**
   * Color of marker in the series.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerColor?: Value<string>;
}

/**
 * The configuration of the `Select all` options in a list control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontrolselectalloptions.html}
 **/
export interface QuickSightTemplateListControlSelectAllOptions {
  /**
   * The visibility configuration of the `Select all` options in a list control.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The contribution analysis visual display for a line, pie, or bar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-contributionanalysisdefault.html}
 **/
export interface QuickSightTemplateContributionAnalysisDefault {
  /**
   * The measure field that is used in the contribution analysis.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureFieldId: Value<string>;
  /**
   * The dimensions columns that are used in the contribution analysis, usually a list of `ColumnIdentifiers`.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorDimensions: List<QuickSightTemplateColumnIdentifier>;
}

/**
 * The configuration options to sort aggregated values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-aggregationsortconfiguration.html}
 **/
export interface QuickSightTemplateAggregationSortConfiguration {
  /**
   * The function that aggregates the values in `Column`.
   *
   * _Required_: Yes
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction: QuickSightTemplateAggregationFunction;
  /**
   * The sort direction of values.
   */
  SortDirection: Value<string>;
  /**
   * The column that determines the sort order of aggregated values.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
}

/**
 * The conditional formatting for the primary value of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartprimaryvalueconditionalformatting.html}
 **/
export interface QuickSightTemplateGaugeChartPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  /**
   * The conditional formatting of the primary value icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-template-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightTemplateConditionalFormattingIcon;
}

/**
 * The configuration for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconfiguration.html}
 **/
export interface QuickSightTemplatePivotTableConfiguration {
  /**
   * The sort configuration for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableSortConfiguration](aws-properties-quicksight-template-pivottablesortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplatePivotTableSortConfiguration;
  /**
   * The paginated report options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTablePaginatedReportOptions](aws-properties-quicksight-template-pivottablepaginatedreportoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedReportOptions?: QuickSightTemplatePivotTablePaginatedReportOptions;
  /**
   * The table options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableOptions](aws-properties-quicksight-template-pivottableoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableOptions?: QuickSightTemplatePivotTableOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableFieldWells](aws-properties-quicksight-template-pivottablefieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplatePivotTableFieldWells;
  /**
   * The field options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableFieldOptions](aws-properties-quicksight-template-pivottablefieldoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldOptions?: QuickSightTemplatePivotTableFieldOptions;
  /**
   * The total options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableTotalOptions](aws-properties-quicksight-template-pivottabletotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalOptions?: QuickSightTemplatePivotTableTotalOptions;
}

/**
 * The minimum and maximum setup for an axis display range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayminmaxrange.html}
 **/
export interface QuickSightTemplateAxisDisplayMinMaxRange {
  /**
   * The minimum setup for an axis display range.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Minimum?: Value<number>;
  /**
   * The maximum setup for an axis display range.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Maximum?: Value<number>;
}

/**
 * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterlistcontrol.html}
 **/
export interface QuickSightTemplateParameterListControl {
  /**
   * The ID of the `ParameterListControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControlId: Value<string>;
  /**
   * The type of `ParameterListControl`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `MULTI_SELECT | SINGLE_SELECT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlDisplayOptions](aws-properties-quicksight-template-listcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateListControlDisplayOptions;
  /**
   * The source parameter name of the `ParameterListControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameterName: Value<string>;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-template-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  /**
   * The title of the `ParameterListControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * A list of selectable values that are used in a control.
   *
   * _Required_: No
   *
   * _Type_: [ParameterSelectableValues](aws-properties-quicksight-template-parameterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightTemplateParameterSelectableValues;
}

/**
 * The options of a box plot visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotoptions.html}
 **/
export interface QuickSightTemplateBoxPlotOptions {
  /**
   * The style options of the box plot.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotStyleOptions](aws-properties-quicksight-template-boxplotstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleOptions?: QuickSightTemplateBoxPlotStyleOptions;
  /**
   * Determines the visibility of the outlier in a box plot.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutlierVisibility?: Value<string>;
  /**
   * Determines the visibility of all data points of the box plot.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllDataPointsVisibility?: Value<string>;
}

/**
 * The exclude period of `TimeRangeFilter` or `RelativeDatesFilter`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-excludeperiodconfiguration.html}
 **/
export interface QuickSightTemplateExcludePeriodConfiguration {
  /**
   * The status of the exclude period. Choose from the following options:
   */
  Status?: Value<string>;
  /**
   * The amount or number of the exclude period.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Amount: Value<number>;
  /**
   * The granularity or unit (day, month, year) of the exclude period.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Granularity: Value<string>;
}

/**
 * The options that determine the presentation of the data labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartdatalabeloptions.html}
 **/
export interface QuickSightTemplateFunnelChartDataLabelOptions {
  /**
   * The visibility of the measure labels within the data labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureLabelVisibility?: Value<string>;
  /**
   * Determines the positioning of the data label relative to a section of the funnel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BOTTOM | INSIDE | LEFT | OUTSIDE | RIGHT | TOP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Position?: Value<string>;
  /**
   * The visibility option that determines if data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The visibility of the category labels within the data labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelVisibility?: Value<string>;
  /**
   * The color of the data label text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelColor?: Value<string>;
  /**
   * Determines the style of the metric labels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PERCENTAGE_BY_FIRST_STAGE | PERCENTAGE_BY_PREVIOUS_STAGE | VALUE_AND_PERCENTAGE_BY_FIRST_STAGE | VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE | VALUE_ONLY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureDataLabelStyle?: Value<string>;
  /**
   * The font configuration for the data labels.
   *
   * Only the `FontSize` attribute of the font configuration is used for data labels.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelFontConfiguration?: QuickSightTemplateFontConfiguration;
}

/**
 * The source entity of the template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourceentity.html}
 **/
export interface QuickSightTemplateTemplateSourceEntity {
  /**
   * The source analysis, if it is based on an analysis.
   *
   * _Required_: No
   *
   * _Type_: [TemplateSourceAnalysis](aws-properties-quicksight-template-templatesourceanalysis.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceAnalysis?: QuickSightTemplateTemplateSourceAnalysis;
  /**
   * The source template, if it is based on an template.
   *
   * _Required_: No
   *
   * _Type_: [TemplateSourceTemplate](aws-properties-quicksight-template-templatesourcetemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceTemplate?: QuickSightTemplateTemplateSourceTemplate;
}

/**
 * The drill down filter for the column hierarchies.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-drilldownfilter.html}
 **/
export interface QuickSightTemplateDrillDownFilter {
  /**
   * The numeric equality type drill down filter. This filter is used for number type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericEqualityDrillDownFilter](aws-properties-quicksight-template-numericequalitydrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericEqualityFilter?: QuickSightTemplateNumericEqualityDrillDownFilter;
  /**
   * The time range drill down filter. This filter is used for date time columns.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeDrillDownFilter](aws-properties-quicksight-template-timerangedrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeRangeFilter?: QuickSightTemplateTimeRangeDrillDownFilter;
  /**
   * The category type drill down filter. This filter is used for string type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoryDrillDownFilter](aws-properties-quicksight-template-categorydrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryFilter?: QuickSightTemplateCategoryDrillDownFilter;
}

/**
 * The field well configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateSankeyDiagramAggregatedFieldWells {
  /**
   * The destination field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: List<QuickSightTemplateDimensionField>;
  /**
   * The source field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source?: List<QuickSightTemplateDimensionField>;
  /**
   * The weight field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: List<QuickSightTemplateMeasureField>;
}

/**
 * The field series item configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldseriesitem.html}
 **/
export interface QuickSightTemplateFieldSeriesItem {
  /**
   * The field ID of the field for which you are setting the axis binding.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The axis that you are binding the field to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `PRIMARY_YAXIS | SECONDARY_YAXIS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisBinding: Value<string>;
  /**
   * The options that determine the presentation of line series associated to the field.
   *
   * _Required_: No
   *
   * _Type_: [LineChartSeriesSettings](aws-properties-quicksight-template-linechartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: QuickSightTemplateLineChartSeriesSettings;
}

/**
 * The options for the canvas of a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutcanvassizeoptions.html}
 **/
export interface QuickSightTemplateSectionBasedLayoutCanvasSizeOptions {
  /**
   * The options for a paper canvas of a section-based layout.
   *
   * _Required_: No
   *
   * _Type_: [SectionBasedLayoutPaperCanvasSizeOptions](aws-properties-quicksight-template-sectionbasedlayoutpapercanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaperCanvasSizeOptions?: QuickSightTemplateSectionBasedLayoutPaperCanvasSizeOptions;
}

/**
 * The option that determines the text display size.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontsize.html}
 **/
export interface QuickSightTemplateFontSize {
  /**
   * The lexical name for the text size, proportional to its surrounding context.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `EXTRA_LARGE | EXTRA_SMALL | LARGE | MEDIUM | SMALL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Relative?: Value<string>;
}

/**
 * The display options for the axis label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisdisplayoptions.html}
 **/
export interface QuickSightTemplateAxisDisplayOptions {
  /**
   * The data options for an axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDataOptions](aws-properties-quicksight-template-axisdataoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataOptions?: QuickSightTemplateAxisDataOptions;
  /**
   * The tick label options of an axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisTickLabelOptions](aws-properties-quicksight-template-axisticklabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TickLabelOptions?: QuickSightTemplateAxisTickLabelOptions;
  /**
   * The offset value that determines the starting placement of the axis within a visual's bounds.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisOffset?: Value<string>;
  /**
   * Determines whether or not the axis line is visible.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisLineVisibility?: Value<string>;
  /**
   * Determines whether or not the grid line is visible.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GridLineVisibility?: Value<string>;
  /**
   * The scroll bar options for an axis.
   *
   * _Required_: No
   *
   * _Type_: [ScrollBarOptions](aws-properties-quicksight-template-scrollbaroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScrollbarOptions?: QuickSightTemplateScrollBarOptions;
}

/**
 * A histogram.
 *
 * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramvisual.html}
 **/
export interface QuickSightTemplateHistogramVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration for a `HistogramVisual`.
   *
   * _Required_: No
   *
   * _Type_: [HistogramConfiguration](aws-properties-quicksight-template-histogramconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateHistogramConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}

/**
 * A sheet is an object that contains a set of visuals that are viewed together on one page in a paginated report. Every analysis and dashboard must contain at least one sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetdefinition.html}
 **/
export interface QuickSightTemplateSheetDefinition {
  /**
   * A description of the sheet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The list of parameter controls that are on a sheet.
   *
   * For more information, see [Using a Control with a Parameter in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-controls.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [ParameterControl](aws-properties-quicksight-template-parametercontrol.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControls?: List<QuickSightTemplateParameterControl>;
  /**
   * The text boxes that are on a sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetTextBox](aws-properties-quicksight-template-sheettextbox.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextBoxes?: List<QuickSightTemplateSheetTextBox>;
  /**
   * Layouts define how the components of a sheet are arranged.
   *
   * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Layout](aws-properties-quicksight-template-layout.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layouts?: List<QuickSightTemplateLayout>;
  /**
   * The layout content type of the sheet. Choose one of the following options:
   */
  ContentType?: Value<string>;
  /**
   * The unique identifier of a sheet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetId: Value<string>;
  /**
   * The list of filter controls that are on a sheet.
   *
   * For more information, see [Adding filter controls to analysis sheets](https://docs.aws.amazon.com/quicksight/latest/user/filter-controls.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [FilterControl](aws-properties-quicksight-template-filtercontrol.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControls?: List<QuickSightTemplateFilterControl>;
  /**
   * The control layouts of the sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetControlLayout](aws-properties-quicksight-template-sheetcontrollayout.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetControlLayouts?: List<QuickSightTemplateSheetControlLayout>;
  /**
   * The title of the sheet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: Value<string>;
  /**
   * A list of the visuals that are on a sheet. Visual placement is determined by the layout of the sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [Visual](aws-properties-quicksight-template-visual.md)
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visuals?: List<QuickSightTemplateVisual>;
  /**
   * The name of the sheet. This name is displayed on the sheet's tab in the Amazon QuickSight console.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The table options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableoptions.html}
 **/
export interface QuickSightTemplateTableOptions {
  /**
   * The table cell style of a table header.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The table cell style of table cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CellStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The orientation (vertical, horizontal) for a table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HORIZONTAL | VERTICAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Orientation?: Value<string>;
  /**
   * The row alternate color options (widget status, row alternate colors) for a table.
   *
   * _Required_: No
   *
   * _Type_: [RowAlternateColorOptions](aws-properties-quicksight-template-rowalternatecoloroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowAlternateColorOptions?: QuickSightTemplateRowAlternateColorOptions;
}

/**
 * The measure type field with numerical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericalmeasurefield.html}
 **/
export interface QuickSightTemplateNumericalMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-template-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightTemplateNumericalAggregationFunction;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-template-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateNumberFormatConfiguration;
  /**
   * The column that is used in the `NumericalMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The options that determine the default settings for interactive layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultinteractivelayoutconfiguration.html}
 **/
export interface QuickSightTemplateDefaultInteractiveLayoutConfiguration {
  /**
   * The options that determine the default settings of a free-form layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultFreeFormLayoutConfiguration](aws-properties-quicksight-template-defaultfreeformlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeForm?: QuickSightTemplateDefaultFreeFormLayoutConfiguration;
  /**
   * The options that determine the default settings for a grid layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultGridLayoutConfiguration](aws-properties-quicksight-template-defaultgridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Grid?: QuickSightTemplateDefaultGridLayoutConfiguration;
}

/**
 * The configuration of a header or footer section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-headerfootersectionconfiguration.html}
 **/
export interface QuickSightTemplateHeaderFooterSectionConfiguration {
  /**
   * The layout configuration of the header or footer section.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionLayoutConfiguration](aws-properties-quicksight-template-sectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layout: QuickSightTemplateSectionLayoutConfiguration;
  /**
   * The style options of a header or footer section.
   *
   * _Required_: No
   *
   * _Type_: [SectionStyle](aws-properties-quicksight-template-sectionstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style?: QuickSightTemplateSectionStyle;
  /**
   * The unique identifier of the header or footer section.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionId: Value<string>;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textfieldcontroldisplayoptions.html}
 **/
export interface QuickSightTemplateTextFieldControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightTemplateLabelOptions;
  /**
   * The configuration of the placeholder options in a text field control.
   *
   * _Required_: No
   *
   * _Type_: [TextControlPlaceholderOptions](aws-properties-quicksight-template-textcontrolplaceholderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaceholderOptions?: QuickSightTemplateTextControlPlaceholderOptions;
}

/**
 * The `ColorsConfiguration` property type specifies Property description not available. for an [AWS::QuickSight::Template](aws-resource-quicksight-template.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-colorsconfiguration.html}
 **/
export interface QuickSightTemplateColorsConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomColor](aws-properties-quicksight-template-customcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomColors?: List<QuickSightTemplateCustomColor>;
}

/**
 * The series item configuration of a line chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-seriesitem.html}
 **/
export interface QuickSightTemplateSeriesItem {
  /**
   * The field series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [FieldSeriesItem](aws-properties-quicksight-template-fieldseriesitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSeriesItem?: QuickSightTemplateFieldSeriesItem;
  /**
   * The data field series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [DataFieldSeriesItem](aws-properties-quicksight-template-datafieldseriesitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataFieldSeriesItem?: QuickSightTemplateDataFieldSeriesItem;
}

/**
 * A bar chart.
 *
 * The `BarChartVisual` structure describes a visual that is a member of the bar chart family. The following charts can be described using this structure:
 *
 * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartvisual.html}
 **/
export interface QuickSightTemplateBarChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BarChartConfiguration](aws-properties-quicksight-template-barchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateBarChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The time range drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timerangedrilldownfilter.html}
 **/
export interface QuickSightTemplateTimeRangeDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The minimum value for the filter value range.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMinimum: Value<string>;
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeGranularity: Value<string>;
  /**
   * The maximum value for the filter value range.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMaximum: Value<string>;
}

/**
 * The unaggregated field wells of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotunaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateScatterPlotUnaggregatedFieldWells {
  /**
   * The size field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightTemplateMeasureField>;
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is a dimension field and cannot be aggregated.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxis?: List<QuickSightTemplateDimensionField>;
  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is a dimension field and cannot be aggregated.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxis?: List<QuickSightTemplateDimensionField>;
}

/**
 * The sort configuration of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapsortconfiguration.html}
 **/
export interface QuickSightTemplateTreeMapSortConfiguration {
  /**
   * The sort configuration of group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of groups that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapGroupItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}

/**
 * The category drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericequalitydrilldownfilter.html}
 **/
export interface QuickSightTemplateNumericEqualityDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The value of the double input numeric drill down filter.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
}

/**
 * A control to display a dropdown list with buttons that are used to select a single value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterdropdowncontrol.html}
 **/
export interface QuickSightTemplateFilterDropDownControl {
  /**
   * The ID of the `FilterDropDownControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControlId: Value<string>;
  /**
   * The type of the `FilterDropDownControl`. Choose one of the following options:
   */
  Type?: Value<string>;
  /**
   * The display options of the `FilterDropDownControl`.
   *
   * _Required_: No
   *
   * _Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-template-dropdowncontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateDropDownControlDisplayOptions;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-template-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  /**
   * The title of the `FilterDropDownControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The source filter ID of the `FilterDropDownControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFilterId: Value<string>;
  /**
   * A list of selectable values that are used in a control.
   *
   * _Required_: No
   *
   * _Type_: [FilterSelectableValues](aws-properties-quicksight-template-filterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightTemplateFilterSelectableValues;
}

/**
 * The subtitle label options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualsubtitlelabeloptions.html}
 **/
export interface QuickSightTemplateVisualSubtitleLabelOptions {
  /**
   * The visibility of the subtitle label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The long text format of the subtitle label, such as plain text or rich text.
   *
   * _Required_: No
   *
   * _Type_: [LongFormatText](aws-properties-quicksight-template-longformattext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatText?: QuickSightTemplateLongFormatText;
}

/**
 * The configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartconfiguration.html}
 **/
export interface QuickSightTemplateLineChartConfiguration {
  /**
   * The sort configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartSortConfiguration](aws-properties-quicksight-template-linechartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateLineChartSortConfiguration;
  /**
   * The legend configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The reference lines configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-template-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightTemplateReferenceLine>;
  /**
   * The data label configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The tooltip configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-template-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightTemplateSmallMultiplesOptions;
  /**
   * The series axis configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-template-lineseriesaxisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightTemplateLineSeriesAxisDisplayOptions;
  /**
   * The visual palette configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
  /**
   * The options that determine the presentation of the x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The options that determine the default presentation of all line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartDefaultSeriesSettings](aws-properties-quicksight-template-linechartdefaultseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultSeriesSettings?: QuickSightTemplateLineChartDefaultSeriesSettings;
  /**
   * The options that determine the presentation of the secondary y-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The forecast configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [ForecastConfiguration](aws-properties-quicksight-template-forecastconfiguration.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForecastConfigurations?: List<QuickSightTemplateForecastConfiguration>;
  /**
   * The series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [SeriesItem](aws-properties-quicksight-template-seriesitem.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Series?: List<QuickSightTemplateSeriesItem>;
  /**
   * Determines the type of the line chart.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AREA | LINE | STACKED_AREA`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The options that determine the presentation of the y-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The default configuration of a line chart's contribution analysis.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-template-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightTemplateContributionAnalysisDefault>;
  /**
   * The field well configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartFieldWells](aws-properties-quicksight-template-linechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateLineChartFieldWells;
  /**
   * The series axis configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-template-lineseriesaxisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisDisplayOptions?: QuickSightTemplateLineSeriesAxisDisplayOptions;
  /**
   * The options that determine the presentation of the x-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
}

/**
 * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-explicithierarchy.html}
 **/
export interface QuickSightTemplateExplicitHierarchy {
  /**
   * The hierarchy ID of the explicit hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyId: Value<string>;
  /**
   * The option that determines the drill down filters for the explicit hierarchy.
   *
   * _Required_: No
   *
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-template-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightTemplateDrillDownFilter>;
  /**
   * The list of columns that define the explicit hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightTemplateColumnIdentifier>;
}

/**
 * The aggregated field wells for a geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateGeospatialMapAggregatedFieldWells {
  /**
   * The color field wells of a geospatial map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightTemplateDimensionField>;
  /**
   * The size field wells of a geospatial map. Values are aggregated based on geospatial fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
  /**
   * The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Geospatial?: List<QuickSightTemplateDimensionField>;
}

/**
 * The field options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldoptions.html}
 **/
export interface QuickSightTemplatePivotTableFieldOptions {
  /**
   * The data path options for the pivot table field options.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableDataPathOption](aws-properties-quicksight-template-pivottabledatapathoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathOptions?: List<QuickSightTemplatePivotTableDataPathOption>;
  /**
   * The selected field options for the pivot table field options.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableFieldOption](aws-properties-quicksight-template-pivottablefieldoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldOptions?: List<QuickSightTemplatePivotTableFieldOption>;
}

/**
 * A key performance indicator (KPI).
 *
 * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpivisual.html}
 **/
export interface QuickSightTemplateKPIVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIConditionalFormatting](aws-properties-quicksight-template-kpiconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightTemplateKPIConditionalFormatting;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIConfiguration](aws-properties-quicksight-template-kpiconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateKPIConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * A parameter declaration for the `DateTime` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimeparameterdeclaration.html}
 **/
export interface QuickSightTemplateDateTimeParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-template-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightTemplateMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeDefaultValues](aws-properties-quicksight-template-datetimedefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightTemplateDateTimeDefaultValues;
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeGranularity?: Value<string>;
  /**
   * The configuration that defines the default value of a `DateTime` parameter when a value has not been set.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeValueWhenUnsetConfiguration](aws-properties-quicksight-template-datetimevaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightTemplateDateTimeValueWhenUnsetConfiguration;
  /**
   * The name of the parameter that is being declared.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The configuration of the same-sheet target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-samesheettargetvisualconfiguration.html}
 **/
export interface QuickSightTemplateSameSheetTargetVisualConfiguration {
  /**
   * The options that choose the target visual in the same sheet.
   *
   * Valid values are defined as follows:
   */
  TargetVisualOptions?: Value<string>;
  /**
   * A list of the target visual IDs that are located in the same sheet of the analysis.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetVisuals?: List<Value<string>>;
}

/**
 * The minimum label of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-minimumlabeltype.html}
 **/
export interface QuickSightTemplateMinimumLabelType {
  /**
   * The visibility of the minimum label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * Configuration options for the canvas of a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gridlayoutcanvassizeoptions.html}
 **/
export interface QuickSightTemplateGridLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a grid layout.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutScreenCanvasSizeOptions](aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScreenCanvasSizeOptions?: QuickSightTemplateGridLayoutScreenCanvasSizeOptions;
}

/**
 * The numeric equality type drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categorydrilldownfilter.html}
 **/
export interface QuickSightTemplateCategoryDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * A list of the string inputs that are the values of the category drill down filter.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryValues: List<Value<string>>;
}

/**
 * The paginated report options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablepaginatedreportoptions.html}
 **/
export interface QuickSightTemplateTablePaginatedReportOptions {
  /**
   * The visibility of repeating header rows on each page.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OverflowColumnHeaderVisibility?: Value<string>;
  /**
   * The visibility of printing table overflow across pages.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VerticalOverflowVisibility?: Value<string>;
}

/**
 * The options that determine the number display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numberdisplayformatconfiguration.html}
 **/
export interface QuickSightTemplateNumberDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-template-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightTemplateNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-template-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightTemplateDecimalPlacesConfiguration;
  /**
   * Determines the number scale value of the number format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTO | BILLIONS | MILLIONS | NONE | THOUSANDS | TRILLIONS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberScale?: Value<string>;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-template-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightTemplateNullValueFormatConfiguration;
  /**
   * Determines the suffix value of the number format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Suffix?: Value<string>;
  /**
   * The options that determine the numeric separator configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-template-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightTemplateNumericSeparatorConfiguration;
  /**
   * Determines the prefix value of the number format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * The field wells of a tree map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapfieldwells.html}
 **/
export interface QuickSightTemplateTreeMapFieldWells {
  /**
   * The aggregated field wells of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapAggregatedFieldWells](aws-properties-quicksight-template-treemapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapAggregatedFieldWells?: QuickSightTemplateTreeMapAggregatedFieldWells;
}

/**
 * Conditional formatting options of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapconditionalformattingoption.html}
 **/
export interface QuickSightTemplateFilledMapConditionalFormattingOption {
  /**
   * The conditional formatting that determines the shape of the filled map.
   *
   * _Required_: Yes
   *
   * _Type_: [FilledMapShapeConditionalFormatting](aws-properties-quicksight-template-filledmapshapeconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Shape: QuickSightTemplateFilledMapShapeConditionalFormatting;
}

/**
 * A text box.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheettextbox.html}
 **/
export interface QuickSightTemplateSheetTextBox {
  /**
   * The unique identifier for a text box. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have text boxes that share identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetTextBoxId: Value<string>;
  /**
   * The content that is displayed in the text box.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `150000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content?: Value<string>;
}

/**
 * The conditional formatting of a table row.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablerowconditionalformatting.html}
 **/
export interface QuickSightTemplateTableRowConditionalFormatting {
  /**
   * The conditional formatting color (solid, gradient) of the text for a table row.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  /**
   * The conditional formatting color (solid, gradient) of the background for a table row.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: QuickSightTemplateConditionalFormattingColor;
}

/**
 * The field well configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartaggregatedfieldwells.html}
 **/
export interface QuickSightTemplatePieChartAggregatedFieldWells {
  /**
   * The category (group/color) field wells of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightTemplateDimensionField>;
  /**
   * The value field wells of a pie chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
  /**
   * The small multiples field well of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightTemplateDimensionField>;
}

/**
 * The arc configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcconfiguration.html}
 **/
export interface QuickSightTemplateArcConfiguration {
  /**
   * The option that determines the arc angle of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArcAngle?: Value<number>;
  /**
   * The options that determine the arc thickness of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `LARGE | MEDIUM | SMALL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArcThickness?: Value<string>;
}

/**
 * sort-configuration-description
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartsortconfiguration.html}
 **/
export interface QuickSightTemplateBarChartSortConfiguration {
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The sort configuration of color fields in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of values displayed in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The limit on the number of categories displayed in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The sort configuration of category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}

/**
 * The aggregated field wells of a combo chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateComboChartAggregatedFieldWells {
  /**
   * The aggregated `BarValues` field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarValues?: List<QuickSightTemplateMeasureField>;
  /**
   * The aggregated category field wells of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightTemplateDimensionField>;
  /**
   * The aggregated colors field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightTemplateDimensionField>;
  /**
   * The aggregated `LineValues` field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineValues?: List<QuickSightTemplateMeasureField>;
}

/**
 * The field well configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartfieldwells.html}
 **/
export interface QuickSightTemplateGaugeChartFieldWells {
  /**
   * The target value field wells of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValues?: List<QuickSightTemplateMeasureField>;
  /**
   * The value field wells of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * The maximum and minimum computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-maximumminimumcomputation.html}
 **/
export interface QuickSightTemplateMaximumMinimumComputation {
  /**
   * The type of computation. Choose one of the following options:
   */
  Type: Value<string>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightTemplateMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightTemplateDimensionField;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * An element within a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutelement.html}
 **/
export interface QuickSightTemplateFreeFormLayoutElement {
  /**
   * The type of element.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `FILTER_CONTROL | PARAMETER_CONTROL | TEXT_BOX | VISUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElementType: Value<string>;
  /**
   * The border style configuration of a free-form layout element.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-template-freeformlayoutelementborderstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderStyle?: QuickSightTemplateFreeFormLayoutElementBorderStyle;
  /**
   * The height of an element within a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Height: Value<string>;
  /**
   * The visibility of an element within a free-form layout.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The rendering rules that determine when an element should be displayed within a free-form layout.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetElementRenderingRule](aws-properties-quicksight-template-sheetelementrenderingrule.md)
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RenderingRules?: List<QuickSightTemplateSheetElementRenderingRule>;
  /**
   * The y-axis coordinate of the element.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisLocation: Value<string>;
  /**
   * The loading animation configuration of a free-form layout element.
   *
   * _Required_: No
   *
   * _Type_: [LoadingAnimation](aws-properties-quicksight-template-loadinganimation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadingAnimation?: QuickSightTemplateLoadingAnimation;
  /**
   * The width of an element within a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Width: Value<string>;
  /**
   * The background style configuration of a free-form layout element.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutElementBackgroundStyle](aws-properties-quicksight-template-freeformlayoutelementbackgroundstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundStyle?: QuickSightTemplateFreeFormLayoutElementBackgroundStyle;
  /**
   * A unique identifier for an element within a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElementId: Value<string>;
  /**
   * The x-axis coordinate of the element.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLocation: Value<string>;
  /**
   * The border style configuration of a free-form layout element. This border style is used when the element is selected.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-template-freeformlayoutelementborderstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedBorderStyle?: QuickSightTemplateFreeFormLayoutElementBorderStyle;
}

/**
 * The options that determine the presentation of the secondary value of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-secondaryvalueoptions.html}
 **/
export interface QuickSightTemplateSecondaryValueOptions {
  /**
   * Determines the visibility of the secondary value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The `CustomColor` property type specifies Property description not available. for an [AWS::QuickSight::Template](aws-resource-quicksight-template.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcolor.html}
 **/
export interface QuickSightTemplateCustomColor {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldValue?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpecialValue?: Value<string>;
}

/**
 * The field well configuration of a scatter plot.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scatterplotfieldwells.html}
 **/
export interface QuickSightTemplateScatterPlotFieldWells {
  /**
   * The unaggregated field wells of a scatter plot. Scatter plots without a category field well have unaggregated field wells. The x and y-axes of these scatter plots are unaggregated.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotUnaggregatedFieldWells](aws-properties-quicksight-template-scatterplotunaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotUnaggregatedFieldWells?: QuickSightTemplateScatterPlotUnaggregatedFieldWells;
  /**
   * The aggregated field wells of a scatter plot. Scatter plots that have a field in the category (group/color) field will have aggregated field wells. The x and y-axes of these scatter plots are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotCategoricallyAggregatedFieldWells](aws-properties-quicksight-template-scatterplotcategoricallyaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: QuickSightTemplateScatterPlotCategoricallyAggregatedFieldWells;
}

/**
 * The aggregated field well of the filled map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateFilledMapAggregatedFieldWells {
  /**
   * The aggregated color field well of a filled map. Values are aggregated based on location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
  /**
   * The aggregated location field well of the filled map. Values are grouped by location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Geospatial?: List<QuickSightTemplateDimensionField>;
}

/**
 * The conditional formatting of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconditionalformatting.html}
 **/
export interface QuickSightTemplateKPIConditionalFormatting {
  /**
   * The conditional formatting options of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [KPIConditionalFormattingOption](aws-properties-quicksight-template-kpiconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightTemplateKPIConditionalFormattingOption>;
}

/**
 * The options that determine the arc thickness of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcoptions.html}
 **/
export interface QuickSightTemplateArcOptions {
  /**
   * The arc thickness of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `LARGE | MEDIUM | SMALL | WHOLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArcThickness?: Value<string>;
}

/**
 * The options that determine the presentation of a line series in the visual
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartseriessettings.html}
 **/
export interface QuickSightTemplateLineChartSeriesSettings {
  /**
   * Line styles options for a line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartLineStyleSettings](aws-properties-quicksight-template-linechartlinestylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineStyleSettings?: QuickSightTemplateLineChartLineStyleSettings;
  /**
   * Marker styles options for a line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-template-linechartmarkerstylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerStyleSettings?: QuickSightTemplateLineChartMarkerStyleSettings;
}

/**
 * The options that determine the presentation of trend arrows in a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-trendarrowoptions.html}
 **/
export interface QuickSightTemplateTrendArrowOptions {
  /**
   * The visibility of the trend arrows.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The configuration for a custom label on a `ReferenceLine`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinecustomlabelconfiguration.html}
 **/
export interface QuickSightTemplateReferenceLineCustomLabelConfiguration {
  /**
   * The string text of the custom label.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel: Value<string>;
}

/**
 * The measure type field with categorical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoricalmeasurefield.html}
 **/
export interface QuickSightTemplateCategoricalMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [String](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Allowed values_: `COUNT | DISTINCT_COUNT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: Value<string>;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-template-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateStringFormatConfiguration;
  /**
   * The column that is used in the `CategoricalMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The filter that is applied to the options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetvisualscopingconfiguration.html}
 **/
export interface QuickSightTemplateSheetVisualScopingConfiguration {
  /**
   * The scope of the applied entities. Choose one of the following options:
   */
  Scope: Value<string>;
  /**
   * The selected sheet that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetId: Value<string>;
  /**
   * The selected visuals that the filter is applied to.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualIds?: List<Value<string>>;
}

/**
 * The aggregated field wells of a word cloud.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateWordCloudAggregatedFieldWells {
  /**
   * The group by field well of a word cloud. Values are grouped by group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightTemplateDimensionField>;
  /**
   * The size field well of a word cloud. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightTemplateMeasureField>;
}

/**
 * The configuration for a `CategoryFilter`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfilterconfiguration.html}
 **/
export interface QuickSightTemplateCategoryFilterConfiguration {
  /**
   * A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.
   *
   * _Required_: No
   *
   * _Type_: [CustomFilterListConfiguration](aws-properties-quicksight-template-customfilterlistconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomFilterListConfiguration?: QuickSightTemplateCustomFilterListConfiguration;
  /**
   * A custom filter that filters based on a single value. This filter can be partially matched.
   *
   * _Required_: No
   *
   * _Type_: [CustomFilterConfiguration](aws-properties-quicksight-template-customfilterconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomFilterConfiguration?: QuickSightTemplateCustomFilterConfiguration;
  /**
   * A list of filter configurations. In the Amazon QuickSight console, this filter type is called a filter list.
   *
   * _Required_: No
   *
   * _Type_: [FilterListConfiguration](aws-properties-quicksight-template-filterlistconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterListConfiguration?: QuickSightTemplateFilterListConfiguration;
}

/**
 * The control of a filter that is used to interact with a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtercontrol.html}
 **/
export interface QuickSightTemplateFilterControl {
  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * _Required_: No
   *
   * _Type_: [FilterSliderControl](aws-properties-quicksight-template-filterslidercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slider?: QuickSightTemplateFilterSliderControl;
  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * _Required_: No
   *
   * _Type_: [FilterTextAreaControl](aws-properties-quicksight-template-filtertextareacontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextArea?: QuickSightTemplateFilterTextAreaControl;
  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * _Required_: No
   *
   * _Type_: [FilterDropDownControl](aws-properties-quicksight-template-filterdropdowncontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dropdown?: QuickSightTemplateFilterDropDownControl;
  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * _Required_: No
   *
   * _Type_: [FilterTextFieldControl](aws-properties-quicksight-template-filtertextfieldcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextField?: QuickSightTemplateFilterTextFieldControl;
  /**
   * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
   *
   * _Required_: No
   *
   * _Type_: [FilterListControl](aws-properties-quicksight-template-filterlistcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  List?: QuickSightTemplateFilterListControl;
  /**
   * A control from a date filter that is used to specify date and time.
   *
   * _Required_: No
   *
   * _Type_: [FilterDateTimePickerControl](aws-properties-quicksight-template-filterdatetimepickercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimePicker?: QuickSightTemplateFilterDateTimePickerControl;
  /**
   * A control from a date filter that is used to specify the relative date.
   *
   * _Required_: No
   *
   * _Type_: [FilterRelativeDateTimeControl](aws-properties-quicksight-template-filterrelativedatetimecontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelativeDateTime?: QuickSightTemplateFilterRelativeDateTimeControl;
}

/**
 * The field well configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramfieldwells.html}
 **/
export interface QuickSightTemplateSankeyDiagramFieldWells {
  /**
   * The field well configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramAggregatedFieldWells](aws-properties-quicksight-template-sankeydiagramaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SankeyDiagramAggregatedFieldWells?: QuickSightTemplateSankeyDiagramAggregatedFieldWells;
}

/**
 * Determines the color scale that is applied to the visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-colorscale.html}
 **/
export interface QuickSightTemplateColorScale {
  /**
   * Determines the list of colors that are applied to the visual.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataColor](aws-properties-quicksight-template-datacolor.md)
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors: List<QuickSightTemplateDataColor>;
  /**
   * Determines the color fill type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DISCRETE | GRADIENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorFillType: Value<string>;
  /**
   * Determines the color that is applied to null values.
   *
   * _Required_: No
   *
   * _Type_: [DataColor](aws-properties-quicksight-template-datacolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueColor?: QuickSightTemplateDataColor;
}

/**
 * The sort configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartsortconfiguration.html}
 **/
export interface QuickSightTemplateRadarChartSortConfiguration {
  /**
   * The color sort configuration of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The color items limit of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The category items limit for a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The category sort options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * The customized parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customparametervalues.html}
 **/
export interface QuickSightTemplateCustomParameterValues {
  /**
   * A list of decimal-type parameter values.
   *
   * _Required_: No
   *
   * _Type_: List of Double
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalValues?: List<Value<number>>;
  /**
   * A list of integer-type parameter values.
   *
   * _Required_: No
   *
   * _Type_: List of Double
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerValues?: List<Value<number>>;
  /**
   * A list of string-type parameter values.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValues?: List<Value<string>>;
  /**
   * A list of datetime-type parameter values.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeValues?: List<Value<string>>;
}

/**
 * The shape conditional formatting of a filled map visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-shapeconditionalformat.html}
 **/
export interface QuickSightTemplateShapeConditionalFormat {
  /**
   * The conditional formatting for the shape background color of a filled map visual.
   *
   * _Required_: Yes
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor: QuickSightTemplateConditionalFormattingColor;
}

/**
 * A grouping of individual filters. Filter groups are applied to the same group of visuals.
 *
 * For more information, see [Adding filter conditions (group filters) with AND and OR operators](https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtergroup.html}
 **/
export interface QuickSightTemplateFilterGroup {
  /**
   * The status of the `FilterGroup`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The list of filters that are present in a `FilterGroup`.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Filter](aws-properties-quicksight-template-filter.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters: List<QuickSightTemplateFilter>;
  /**
   * The filter new feature which can apply filter group to all data sets. Choose one of the following options:
   */
  CrossDataset: Value<string>;
  /**
   * The configuration that specifies what scope to apply to a `FilterGroup`.
   *
   * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterScopeConfiguration](aws-properties-quicksight-template-filterscopeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeConfiguration: QuickSightTemplateFilterScopeConfiguration;
  /**
   * The value that uniquely identifies a `FilterGroup` within a dashboard, template, or analysis.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterGroupId: Value<string>;
}

/**
 * The field wells of a radar chart visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartfieldwells.html}
 **/
export interface QuickSightTemplateRadarChartFieldWells {
  /**
   * The aggregated field wells of a radar chart visual.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartAggregatedFieldWells](aws-properties-quicksight-template-radarchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RadarChartAggregatedFieldWells?: QuickSightTemplateRadarChartAggregatedFieldWells;
}

/**
 * A parameter declaration for the `Decimal` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalparameterdeclaration.html}
 **/
export interface QuickSightTemplateDecimalParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-template-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightTemplateMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [DecimalDefaultValues](aws-properties-quicksight-template-decimaldefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightTemplateDecimalDefaultValues;
  /**
   * The value type determines whether the parameter is a single-value or multi-value parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `MULTI_VALUED | SINGLE_VALUED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValueType: Value<string>;
  /**
   * The configuration that defines the default value of a `Decimal` parameter when a value has not been set.
   *
   * _Required_: No
   *
   * _Type_: [DecimalValueWhenUnsetConfiguration](aws-properties-quicksight-template-decimalvaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightTemplateDecimalValueWhenUnsetConfiguration;
  /**
   * The name of the parameter that is being declared.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The configuration for a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutconfiguration.html}
 **/
export interface QuickSightTemplateSectionBasedLayoutConfiguration {
  /**
   * The options for the canvas of a section-based layout.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionBasedLayoutCanvasSizeOptions](aws-properties-quicksight-template-sectionbasedlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightTemplateSectionBasedLayoutCanvasSizeOptions;
  /**
   * A list of footer section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-template-headerfootersectionconfiguration.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FooterSections: List<QuickSightTemplateHeaderFooterSectionConfiguration>;
  /**
   * A list of body section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [BodySectionConfiguration](aws-properties-quicksight-template-bodysectionconfiguration.md)
   *
   * _Maximum_: `28`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodySections: List<QuickSightTemplateBodySectionConfiguration>;
  /**
   * A list of header section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-template-headerfootersectionconfiguration.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderSections: List<QuickSightTemplateHeaderFooterSectionConfiguration>;
}

/**
 * The conditional formatting for the text.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textconditionalformat.html}
 **/
export interface QuickSightTemplateTextConditionalFormat {
  /**
   * The conditional formatting for the text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightTemplateConditionalFormattingColor;
  /**
   * The conditional formatting for the icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-template-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightTemplateConditionalFormattingIcon;
  /**
   * The conditional formatting for the text background color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: QuickSightTemplateConditionalFormattingColor;
}

/**
 * The options for a paper canvas of a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionbasedlayoutpapercanvassizeoptions.html}
 **/
export interface QuickSightTemplateSectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * Defines the spacing between the canvas content and the top, bottom, left, and right edges.
   *
   * _Required_: No
   *
   * _Type_: [Spacing](aws-properties-quicksight-template-spacing.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaperMargin?: QuickSightTemplateSpacing;
  /**
   * The paper size that is used to define canvas dimensions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `A0 | A1 | A2 | A3 | A4 | A5 | JIS_B4 | JIS_B5 | US_LEGAL | US_LETTER | US_TABLOID_LEDGER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaperSize?: Value<string>;
  /**
   * The paper orientation that is used to define canvas dimensions. Choose one of the following options:
   */
  PaperOrientation?: Value<string>;
}

/**
 * The optional configuration of subtotals cells.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldsubtotaloptions.html}
 **/
export interface QuickSightTemplatePivotTableFieldSubtotalOptions {
  /**
   * The field ID of the subtotal options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId?: Value<string>;
}

/**
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterslidercontrol.html}
 **/
export interface QuickSightTemplateParameterSliderControl {
  /**
   * The ID of the `ParameterSliderControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControlId: Value<string>;
  /**
   * The number of increments that the slider bar is divided into.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepSize: Value<number>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [SliderControlDisplayOptions](aws-properties-quicksight-template-slidercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateSliderControlDisplayOptions;
  /**
   * The source parameter name of the `ParameterSliderControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameterName: Value<string>;
  /**
   * The title of the `ParameterSliderControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The smaller value that is displayed at the left of the slider.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumValue: Value<number>;
  /**
   * The larger value that is displayed at the right of the slider.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumValue: Value<number>;
}

/**
 * The configuration of a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudchartconfiguration.html}
 **/
export interface QuickSightTemplateWordCloudChartConfiguration {
  /**
   * The sort configuration of a word cloud visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudSortConfiguration](aws-properties-quicksight-template-wordcloudsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateWordCloudSortConfiguration;
  /**
   * The label options (label text, label visibility, and sort icon visibility) for the word cloud category.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudFieldWells](aws-properties-quicksight-template-wordcloudfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateWordCloudFieldWells;
  /**
   * The options for a word cloud visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudOptions](aws-properties-quicksight-template-wordcloudoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudOptions?: QuickSightTemplateWordCloudOptions;
}

/**
 * Line styles options for a line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartlinestylesettings.html}
 **/
export interface QuickSightTemplateLineChartLineStyleSettings {
  /**
   * Interpolation style for line series.
   */
  LineInterpolation?: Value<string>;
  /**
   * Line style for line series.
   */
  LineStyle?: Value<string>;
  /**
   * Configuration option that determines whether to show the line for the series.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineVisibility?: Value<string>;
  /**
   * Width that determines the line thickness.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineWidth?: Value<string>;
}

/**
 * The metric comparison computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-metriccomparisoncomputation.html}
 **/
export interface QuickSightTemplateMetricComparisonComputation {
  /**
   * The field that is used in a metric comparison to value setup.
   *
   * _Required_: Yes
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: QuickSightTemplateMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightTemplateDimensionField;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The field that is used in a metric comparison from value setup.
   *
   * _Required_: Yes
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromValue: QuickSightTemplateMeasureField;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The tooltip item for the fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldtooltipitem.html}
 **/
export interface QuickSightTemplateFieldTooltipItem {
  /**
   * The unique ID of the field that is targeted by the tooltip.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The label of the tooltip item.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Label?: Value<string>;
  /**
   * The visibility of the tooltip item.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The configuration that determines what the type of layout will be used on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-layoutconfiguration.html}
 **/
export interface QuickSightTemplateLayoutConfiguration {
  /**
   * A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: `FIXED` or `RESPONSIVE`.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutConfiguration](aws-properties-quicksight-template-gridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GridLayout?: QuickSightTemplateGridLayoutConfiguration;
  /**
   * A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutConfiguration](aws-properties-quicksight-template-freeformlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeFormLayout?: QuickSightTemplateFreeFormLayoutConfiguration;
  /**
   * A section based layout organizes visuals into multiple sections and has customized header, footer and page break.
   *
   * _Required_: No
   *
   * _Type_: [SectionBasedLayoutConfiguration](aws-properties-quicksight-template-sectionbasedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionBasedLayout?: QuickSightTemplateSectionBasedLayoutConfiguration;
}

/**
 * The tick label options of an axis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisticklabeloptions.html}
 **/
export interface QuickSightTemplateAxisTickLabelOptions {
  /**
   * The rotation angle of the axis tick labels.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RotationAngle?: Value<number>;
  /**
   * Determines whether or not the axis ticks are visible.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelOptions?: QuickSightTemplateLabelOptions;
}

/**
 * The configuration that defines the default value of a `String` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringvaluewhenunsetconfiguration.html}
 **/
export interface QuickSightTemplateStringValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   */
  ValueWhenUnsetOption?: Value<string>;
  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValue?: Value<string>;
}

/**
 * The source controls that are used in a `CascadingControlConfiguration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-cascadingcontrolsource.html}
 **/
export interface QuickSightTemplateCascadingControlSource {
  /**
   * The source sheet control ID of a `CascadingControlSource`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceSheetControlId?: Value<string>;
  /**
   * The column identifier that determines which column to look up for the source sheet control.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnToMatch?: QuickSightTemplateColumnIdentifier;
}

/**
 * A word cloud.
 *
 * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudvisual.html}
 **/
export interface QuickSightTemplateWordCloudVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudChartConfiguration](aws-properties-quicksight-template-wordcloudchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateWordCloudChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * A waterfall chart.
 *
 * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallvisual.html}
 **/
export interface QuickSightTemplateWaterfallVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration for a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartConfiguration](aws-properties-quicksight-template-waterfallchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateWaterfallChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The total options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-totaloptions.html}
 **/
export interface QuickSightTemplateTotalOptions {
  /**
   * The custom label string for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel?: Value<string>;
  /**
   * The scroll status (pinned, scrolled) for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PINNED | SCROLLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScrollStatus?: Value<string>;
  /**
   * The placement (start, end) for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `END | START`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Placement?: Value<string>;
  /**
   * Cell styling options for the total cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The visibility configuration for the total cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalsVisibility?: Value<string>;
}

/**
 * A gauge chart.
 *
 * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartvisual.html}
 **/
export interface QuickSightTemplateGaugeChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartConditionalFormatting](aws-properties-quicksight-template-gaugechartconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightTemplateGaugeChartConditionalFormatting;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartConfiguration](aws-properties-quicksight-template-gaugechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateGaugeChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}

/**
 * The forecast properties setup of a forecast in the line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timebasedforecastproperties.html}
 **/
export interface QuickSightTemplateTimeBasedForecastProperties {
  /**
   * The periods backward setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodsBackward?: Value<number>;
  /**
   * The periods forward setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodsForward?: Value<number>;
  /**
   * The prediction interval setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `50`
   *
   * _Maximum_: `95`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredictionInterval?: Value<number>;
  /**
   * The seasonality setup of a forecast computation. Choose one of the following options:
   */
  Seasonality?: Value<number>;
  /**
   * The upper boundary setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpperBoundary?: Value<number>;
  /**
   * The lower boundary setup of a forecast computation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LowerBoundary?: Value<number>;
}

/**
 * The override configuration of the rendering rules of a sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetelementconfigurationoverrides.html}
 **/
export interface QuickSightTemplateSheetElementConfigurationOverrides {
  /**
   * Determines whether or not the overrides are visible. Choose one of the following options:
   */
  Visibility?: Value<string>;
}

/**
 * A control from a date filter that is used to specify date and time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterdatetimepickercontrol.html}
 **/
export interface QuickSightTemplateFilterDateTimePickerControl {
  /**
   * The ID of the `FilterDateTimePickerControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControlId: Value<string>;
  /**
   * The date time picker type of a `FilterDateTimePickerControl`. Choose one of the following options:
   */
  Type?: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-template-datetimepickercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateDateTimePickerControlDisplayOptions;
  /**
   * The title of the `FilterDateTimePickerControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The source filter ID of the `FilterDateTimePickerControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFilterId: Value<string>;
}

/**
 * The free-form layout configuration of a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformsectionlayoutconfiguration.html}
 **/
export interface QuickSightTemplateFreeFormSectionLayoutConfiguration {
  /**
   * The elements that are included in the free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FreeFormLayoutElement](aws-properties-quicksight-template-freeformlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightTemplateFreeFormLayoutElement>;
}

/**
 * The calculated field of an analysis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-calculatedfield.html}
 **/
export interface QuickSightTemplateCalculatedField {
  /**
   * The expression of the calculated field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * The data set that is used in this calculated field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifier: Value<string>;
  /**
   * The name of the calculated field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The option that determines the hierarchy of any `DateTime` fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimehierarchy.html}
 **/
export interface QuickSightTemplateDateTimeHierarchy {
  /**
   * The hierarchy ID of the `DateTime` hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyId: Value<string>;
  /**
   * The option that determines the drill down filters for the `DateTime` hierarchy.
   *
   * _Required_: No
   *
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-template-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightTemplateDrillDownFilter>;
}

/**
 * The field wells of a `BarChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartfieldwells.html}
 **/
export interface QuickSightTemplateBarChartFieldWells {
  /**
   * The aggregated field wells of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [BarChartAggregatedFieldWells](aws-properties-quicksight-template-barchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarChartAggregatedFieldWells?: QuickSightTemplateBarChartAggregatedFieldWells;
}

/**
 * The conditional formatting for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconditionalformatting.html}
 **/
export interface QuickSightTemplateTableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [TableConditionalFormattingOption](aws-properties-quicksight-template-tableconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightTemplateTableConditionalFormattingOption>;
}

/**
 * Aggregation for numerical values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericalaggregationfunction.html}
 **/
export interface QuickSightTemplateNumericalAggregationFunction {
  /**
   * An aggregation based on the percentile of values in a dimension or measure.
   *
   * _Required_: No
   *
   * _Type_: [PercentileAggregation](aws-properties-quicksight-template-percentileaggregation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentileAggregation?: QuickSightTemplatePercentileAggregation;
  /**
   * Built-in aggregation functions for numerical values.
   */
  SimpleNumericalAggregation?: Value<string>;
}

/**
 * The configuration of a `BoxPlotVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotchartconfiguration.html}
 **/
export interface QuickSightTemplateBoxPlotChartConfiguration {
  /**
   * The sort configuration of a `BoxPlotVisual`.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotSortConfiguration](aws-properties-quicksight-template-boxplotsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateBoxPlotSortConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-template-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightTemplateReferenceLine>;
  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) of a box plot value.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility and sort Icon visibility) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotFieldWells](aws-properties-quicksight-template-boxplotfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateBoxPlotFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The box plot chart options for a box plot visual
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotOptions](aws-properties-quicksight-template-boxplotoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotOptions?: QuickSightTemplateBoxPlotOptions;
  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimepickercontroldisplayoptions.html}
 **/
export interface QuickSightTemplateDateTimePickerControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightTemplateLabelOptions;
  /**
   * Customize how dates are formatted in controls.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeFormat?: Value<string>;
}

/**
 * A list of filter configurations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterlistconfiguration.html}
 **/
export interface QuickSightTemplateFilterListConfiguration {
  /**
   * The list of category values for the filter.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryValues?: List<Value<string>>;
  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CONTAINS | DOES_NOT_CONTAIN | DOES_NOT_EQUAL | ENDS_WITH | EQUALS | STARTS_WITH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchOperator: Value<string>;
  /**
   * Select all of the values. Null is not the assigned value of select all.
   */
  SelectAllOptions?: Value<string>;
}

/**
 * Determines the row alternate color options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rowalternatecoloroptions.html}
 **/
export interface QuickSightTemplateRowAlternateColorOptions {
  /**
   * Determines the widget status.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Determines the list of row alternate colors.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowAlternateColors?: List<Value<string>>;
}

/**
 * The sizing options for the table image configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellimagesizingconfiguration.html}
 **/
export interface QuickSightTemplateTableCellImageSizingConfiguration {
  /**
   * The cell scaling configuration of the sizing options for the table image configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DO_NOT_SCALE | FIT_TO_CELL_HEIGHT | FIT_TO_CELL_WIDTH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableCellImageScalingConfiguration?: Value<string>;
}

/**
 * The operation that is defined by the custom action.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualcustomactionoperation.html}
 **/
export interface QuickSightTemplateVisualCustomActionOperation {
  /**
   * The navigation operation that navigates between different sheets in the same analysis.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionNavigationOperation](aws-properties-quicksight-template-customactionnavigationoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NavigationOperation?: QuickSightTemplateCustomActionNavigationOperation;
  /**
   * The set parameter operation that sets parameters in custom action.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionSetParametersOperation](aws-properties-quicksight-template-customactionsetparametersoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetParametersOperation?: QuickSightTemplateCustomActionSetParametersOperation;
  /**
   * The filter operation that filters data included in a visual or in an entire sheet.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionFilterOperation](aws-properties-quicksight-template-customactionfilteroperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterOperation?: QuickSightTemplateCustomActionFilterOperation;
  /**
   * The URL operation that opens a link to another webpage.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionURLOperation](aws-properties-quicksight-template-customactionurloperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URLOperation?: QuickSightTemplateCustomActionURLOperation;
}

/**
 * The field well configuration of a heat map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapfieldwells.html}
 **/
export interface QuickSightTemplateHeatMapFieldWells {
  /**
   * The aggregated field wells of a heat map.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapAggregatedFieldWells](aws-properties-quicksight-template-heatmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapAggregatedFieldWells?: QuickSightTemplateHeatMapAggregatedFieldWells;
}

/**
 * A _sheet_, which is an object that contains a set of visuals that are viewed together on one page in Amazon QuickSight. Every analysis and dashboard contains at least one sheet. Each sheet contains at least one visualization widget, for example a chart, pivot table, or narrative insight. Sheets can be associated with other components, such as controls, filters, and so on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheet.html}
 **/
export interface QuickSightTemplateSheet {
  /**
   * The unique identifier associated with a sheet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetId?: Value<string>;
  /**
   * The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight console.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The navigation configuration for `CustomActionNavigationOperation`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-localnavigationconfiguration.html}
 **/
export interface QuickSightTemplateLocalNavigationConfiguration {
  /**
   * The sheet that is targeted for navigation in the same analysis.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetSheetId: Value<string>;
}

/**
 * The field wells of the visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartfieldwells.html}
 **/
export interface QuickSightTemplateComboChartFieldWells {
  /**
   * The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartAggregatedFieldWells](aws-properties-quicksight-template-combochartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComboChartAggregatedFieldWells?: QuickSightTemplateComboChartAggregatedFieldWells;
}

/**
 * The options for a table field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldoption.html}
 **/
export interface QuickSightTemplateTableFieldOption {
  /**
   * The custom label for a table field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel?: Value<string>;
  /**
   * The URL configuration for a table field.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldURLConfiguration](aws-properties-quicksight-template-tablefieldurlconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URLStyling?: QuickSightTemplateTableFieldURLConfiguration;
  /**
   * The field ID for a table field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The visibility of a table field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The width for a table field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Width?: Value<string>;
}

/**
 * The options that determine the presentation of the progress bar of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-progressbaroptions.html}
 **/
export interface QuickSightTemplateProgressBarOptions {
  /**
   * The visibility of the progress bar.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The options that determine the numeric format configuration.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericformatconfiguration.html}
 **/
export interface QuickSightTemplateNumericFormatConfiguration {
  /**
   * The options that determine the number display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-template-numberdisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberDisplayFormatConfiguration?: QuickSightTemplateNumberDisplayFormatConfiguration;
  /**
   * The options that determine the currency display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [CurrencyDisplayFormatConfiguration](aws-properties-quicksight-template-currencydisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrencyDisplayFormatConfiguration?: QuickSightTemplateCurrencyDisplayFormatConfiguration;
  /**
   * The options that determine the percentage display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-template-percentagedisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentageDisplayFormatConfiguration?: QuickSightTemplatePercentageDisplayFormatConfiguration;
}

/**
 * The format of the comparison.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-comparisonformatconfiguration.html}
 **/
export interface QuickSightTemplateComparisonFormatConfiguration {
  /**
   * The number display format.
   *
   * _Required_: No
   *
   * _Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-template-numberdisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberDisplayFormatConfiguration?: QuickSightTemplateNumberDisplayFormatConfiguration;
  /**
   * The percentage display format.
   *
   * _Required_: No
   *
   * _Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-template-percentagedisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentageDisplayFormatConfiguration?: QuickSightTemplatePercentageDisplayFormatConfiguration;
}

/**
 * The conditional formatting options of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiconditionalformattingoption.html}
 **/
export interface QuickSightTemplateKPIConditionalFormattingOption {
  /**
   * The conditional formatting for the primary value of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIPrimaryValueConditionalFormatting](aws-properties-quicksight-template-kpiprimaryvalueconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValue?: QuickSightTemplateKPIPrimaryValueConditionalFormatting;
  /**
   * The conditional formatting for the progress bar of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIProgressBarConditionalFormatting](aws-properties-quicksight-template-kpiprogressbarconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgressBar?: QuickSightTemplateKPIProgressBarConditionalFormatting;
}

/**
 * The configuration of an insight visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-insightconfiguration.html}
 **/
export interface QuickSightTemplateInsightConfiguration {
  /**
   * The computations configurations of the insight visual
   *
   * _Required_: No
   *
   * _Type_: List of [Computation](aws-properties-quicksight-template-computation.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Computations?: List<QuickSightTemplateComputation>;
  /**
   * The custom narrative of the insight visual.
   *
   * _Required_: No
   *
   * _Type_: [CustomNarrativeOptions](aws-properties-quicksight-template-customnarrativeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomNarrative?: QuickSightTemplateCustomNarrativeOptions;
}

/**
 * The sort configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sankeydiagramsortconfiguration.html}
 **/
export interface QuickSightTemplateSankeyDiagramSortConfiguration {
  /**
   * The sort configuration of the weight fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of source nodes that are displayed in a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The limit on the number of destination nodes that are displayed in a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
}

/**
 * The field wells for a table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldwells.html}
 **/
export interface QuickSightTemplateTableFieldWells {
  /**
   * The unaggregated field well for the table.
   *
   * _Required_: No
   *
   * _Type_: [TableUnaggregatedFieldWells](aws-properties-quicksight-template-tableunaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableUnaggregatedFieldWells?: QuickSightTemplateTableUnaggregatedFieldWells;
  /**
   * The aggregated field well for the table.
   *
   * _Required_: No
   *
   * _Type_: [TableAggregatedFieldWells](aws-properties-quicksight-template-tableaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableAggregatedFieldWells?: QuickSightTemplateTableAggregatedFieldWells;
}

/**
 * The column group schema.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columngroupschema.html}
 **/
export interface QuickSightTemplateColumnGroupSchema {
  /**
   * A structure containing the list of schemas for column group columns.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnGroupColumnSchema](aws-properties-quicksight-template-columngroupcolumnschema.md)
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnGroupColumnSchemaList?: List<QuickSightTemplateColumnGroupColumnSchema>;
  /**
   * The name of the column group schema.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The sort by field for the field sort options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablesortby.html}
 **/
export interface QuickSightTemplatePivotTableSortBy {
  /**
   * The field sort (field id, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [FieldSort](aws-properties-quicksight-template-fieldsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: QuickSightTemplateFieldSort;
  /**
   * The data path sort (data path value, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [DataPathSort](aws-properties-quicksight-template-datapathsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPath?: QuickSightTemplateDataPathSort;
  /**
   * The column sort (field id, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [ColumnSort](aws-properties-quicksight-template-columnsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column?: QuickSightTemplateColumnSort;
}

/**
 * The option that determines the data label type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datalabeltype.html}
 **/
export interface QuickSightTemplateDataLabelType {
  /**
   * Determines the label configuration for the maximum value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [MaximumLabelType](aws-properties-quicksight-template-maximumlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumLabelType?: QuickSightTemplateMaximumLabelType;
  /**
   * The option that specifies individual data values for labels.
   *
   * _Required_: No
   *
   * _Type_: [DataPathLabelType](aws-properties-quicksight-template-datapathlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathLabelType?: QuickSightTemplateDataPathLabelType;
  /**
   * Determines the label configuration for range end value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [RangeEndsLabelType](aws-properties-quicksight-template-rangeendslabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeEndsLabelType?: QuickSightTemplateRangeEndsLabelType;
  /**
   * Determines the label configuration for the entire field.
   *
   * _Required_: No
   *
   * _Type_: [FieldLabelType](aws-properties-quicksight-template-fieldlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLabelType?: QuickSightTemplateFieldLabelType;
  /**
   * Determines the label configuration for the minimum value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [MinimumLabelType](aws-properties-quicksight-template-minimumlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumLabelType?: QuickSightTemplateMinimumLabelType;
}

/**
 * A structure describing the name, data type, and geographic role of the columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columngroupcolumnschema.html}
 **/
export interface QuickSightTemplateColumnGroupColumnSchema {
  /**
   * The name of the column group's column schema.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A tree map.
 *
 * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-treemapvisual.html}
 **/
export interface QuickSightTemplateTreeMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapConfiguration](aws-properties-quicksight-template-treemapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateTreeMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The data configuration of the reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinedataconfiguration.html}
 **/
export interface QuickSightTemplateReferenceLineDataConfiguration {
  /**
   * The dynamic configuration of the reference line data configuration.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineDynamicDataConfiguration](aws-properties-quicksight-template-referencelinedynamicdataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicConfiguration?: QuickSightTemplateReferenceLineDynamicDataConfiguration;
  /**
   * The axis binding type of the reference line. Choose one of the following options:
   */
  AxisBinding?: Value<string>;
  /**
   * The static data configuration of the reference line data configuration.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineStaticDataConfiguration](aws-properties-quicksight-template-referencelinestaticdataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticConfiguration?: QuickSightTemplateReferenceLineStaticDataConfiguration;
}

/**
 * The configuration of spacing (often a margin or padding).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-spacing.html}
 **/
export interface QuickSightTemplateSpacing {
  /**
   * Define the left spacing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Left?: Value<string>;
  /**
   * Define the top spacing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Top?: Value<string>;
  /**
   * Define the right spacing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Right?: Value<string>;
  /**
   * Define the bottom spacing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bottom?: Value<string>;
}

/**
 * The dimension type field with categorical type columns..
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoricaldimensionfield.html}
 **/
export interface QuickSightTemplateCategoricalDimensionField {
  /**
   * The custom hierarchy ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyId?: Value<string>;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-template-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateStringFormatConfiguration;
  /**
   * The column that is used in the `CategoricalDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The custom icon content for the table link content configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldcustomiconcontent.html}
 **/
export interface QuickSightTemplateTableFieldCustomIconContent {
  /**
   * The icon set type (link) of the custom icon content for table URL link content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `LINK`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: Value<string>;
}

/**
 * The sort configuration for a column that is not used in a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnsort.html}
 **/
export interface QuickSightTemplateColumnSort {
  /**
   * The aggregation function that is defined in the column sort.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightTemplateAggregationFunction;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortBy: QuickSightTemplateColumnIdentifier;
  /**
   * The sort direction.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ASC | DESC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Direction: Value<string>;
}

/**
 * Options that determine the layout and display options of a chart's small multiples.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-smallmultiplesoptions.html}
 **/
export interface QuickSightTemplateSmallMultiplesOptions {
  /**
   * Sets the maximum number of visible rows to display in the grid of small multiples panels.
   *
   * The default value is `Auto`, which automatically adjusts the rows in the grid to fit the overall layout and size of the given chart.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxVisibleRows?: Value<number>;
  /**
   * Configures the display options for each small multiples panel.
   *
   * _Required_: No
   *
   * _Type_: [PanelConfiguration](aws-properties-quicksight-template-panelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PanelConfiguration?: QuickSightTemplatePanelConfiguration;
  /**
   * Sets the maximum number of visible columns to display in the grid of small multiples panels.
   *
   * The default is `Auto`, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxVisibleColumns?: Value<number>;
}

/**
 * The field wells of a `GeospatialMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapfieldwells.html}
 **/
export interface QuickSightTemplateGeospatialMapFieldWells {
  /**
   * The aggregated field well for a geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapAggregatedFieldWells](aws-properties-quicksight-template-geospatialmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeospatialMapAggregatedFieldWells?: QuickSightTemplateGeospatialMapAggregatedFieldWells;
}

/**
 * The configuration of a page break after a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionafterpagebreak.html}
 **/
export interface QuickSightTemplateSectionAfterPageBreak {
  /**
   * The option that enables or disables a page break at the end of a section.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformattingoption.html}
 **/
export interface QuickSightTemplatePivotTableConditionalFormattingOption {
  /**
   * The cell conditional formatting option for a pivot table.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableCellConditionalFormatting](aws-properties-quicksight-template-pivottablecellconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cell?: QuickSightTemplatePivotTableCellConditionalFormatting;
}

/**
 * The configuration that defines the default value of a `DateTime` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimevaluewhenunsetconfiguration.html}
 **/
export interface QuickSightTemplateDateTimeValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   */
  ValueWhenUnsetOption?: Value<string>;
  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValue?: Value<string>;
}

/**
 * The reference line visual display options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referenceline.html}
 **/
export interface QuickSightTemplateReferenceLine {
  /**
   * The status of the reference line. Choose one of the following options:
   */
  Status?: Value<string>;
  /**
   * The data configuration of the reference line.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceLineDataConfiguration](aws-properties-quicksight-template-referencelinedataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataConfiguration: QuickSightTemplateReferenceLineDataConfiguration;
  /**
   * The label configuration of the reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineLabelConfiguration](aws-properties-quicksight-template-referencelinelabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelConfiguration?: QuickSightTemplateReferenceLineLabelConfiguration;
  /**
   * The style configuration of the reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineStyleConfiguration](aws-properties-quicksight-template-referencelinestyleconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleConfiguration?: QuickSightTemplateReferenceLineStyleConfiguration;
}

/**
 * The options for the legend setup of a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-legendoptions.html}
 **/
export interface QuickSightTemplateLegendOptions {
  /**
   * The positions for the legend. Choose one of the following options:
   */
  Position?: Value<string>;
  /**
   * The custom title for the legend.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateLabelOptions;
  /**
   * Determines whether or not the legend is visible.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The height of the legend. If this value is omitted, a default height is used when rendering.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Height?: Value<string>;
  /**
   * The width of the legend. If this value is omitted, a default width is used when rendering.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Width?: Value<string>;
}

/**
 * Provides the forecast to meet the target for a particular date range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-whatifrangescenario.html}
 **/
export interface QuickSightTemplateWhatIfRangeScenario {
  /**
   * The start date in the date range that you need the forecast results for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartDate: Value<string>;
  /**
   * The target value that you want to meet for the provided date range.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
  /**
   * The end date in the date range that you need the forecast results for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndDate: Value<string>;
}

/**
 * The paginated report options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablepaginatedreportoptions.html}
 **/
export interface QuickSightTemplatePivotTablePaginatedReportOptions {
  /**
   * The visibility of the repeating header rows on each page.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OverflowColumnHeaderVisibility?: Value<string>;
  /**
   * The visibility of the printing table overflow across pages.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VerticalOverflowVisibility?: Value<string>;
}

/**
 * A filled map.
 *
 * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapvisual.html}
 **/
export interface QuickSightTemplateFilledMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a `FilledMapVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapConditionalFormatting](aws-properties-quicksight-template-filledmapconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightTemplateFilledMapConditionalFormatting;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapConfiguration](aws-properties-quicksight-template-filledmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateFilledMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The options that determine the presentation of the arc of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartarcconditionalformatting.html}
 **/
export interface QuickSightTemplateGaugeChartArcConditionalFormatting {
  /**
   * The conditional formatting of the arc foreground color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForegroundColor?: QuickSightTemplateConditionalFormattingColor;
}

/**
 * Formatting configuration for solid color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingsolidcolor.html}
 **/
export interface QuickSightTemplateConditionalFormattingSolidColor {
  /**
   * The expression that determines the formatting configuration for solid color.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * Determines the color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
}

/**
 * The `MappedDataSetParameter` property type specifies Property description not available. for an [AWS::QuickSight::Template](aws-resource-quicksight-template.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-mappeddatasetparameter.html}
 **/
export interface QuickSightTemplateMappedDataSetParameter {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetParameterName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifier: Value<string>;
}

/**
 * A `NumericEqualityFilter` filters values that are equal to the specified value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numericequalityfilter.html}
 **/
export interface QuickSightTemplateNumericEqualityFilter {
  /**
   * The aggregation function of the filter.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightTemplateAggregationFunction;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The input value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<number>;
  /**
   * The parameter whose value should be used for the filter value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName?: Value<string>;
  /**
   * This option determines how null values should be treated when filtering data.
   */
  NullOption: Value<string>;
  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DOES_NOT_EQUAL | EQUALS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchOperator: Value<string>;
  /**
   * Select all of the values. Null is not the assigned value of select all.
   */
  SelectAllOptions?: Value<string>;
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterId: Value<string>;
}

/**
 * The sort configuration of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filledmapsortconfiguration.html}
 **/
export interface QuickSightTemplateFilledMapSortConfiguration {
  /**
   * The sort configuration of the location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * The bound options (north, south, west, east) of the geospatial window options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialcoordinatebounds.html}
 **/
export interface QuickSightTemplateGeospatialCoordinateBounds {
  /**
   * The longitude of the west bound of the geospatial coordinate bounds.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  West: Value<number>;
  /**
   * The latitude of the south bound of the geospatial coordinate bounds.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  South: Value<number>;
  /**
   * The latitude of the north bound of the geospatial coordinate bounds.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  North: Value<number>;
  /**
   * The longitude of the east bound of the geospatial coordinate bounds.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  East: Value<number>;
}

/**
 * The sort configuration of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapsortconfiguration.html}
 **/
export interface QuickSightTemplateHeatMapSortConfiguration {
  /**
   * The field sort configuration of the rows fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapRowSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of rows that are displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapRowItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The limit on the number of columns that are displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapColumnItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The column sort configuration for heat map for columns that aren't a part of a field well.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapColumnSort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * Dataset configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetconfiguration.html}
 **/
export interface QuickSightTemplateDataSetConfiguration {
  /**
   * Placeholder.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Placeholder?: Value<string>;
  /**
   * Dataset schema.
   *
   * _Required_: No
   *
   * _Type_: [DataSetSchema](aws-properties-quicksight-template-datasetschema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetSchema?: QuickSightTemplateDataSetSchema;
  /**
   * A structure containing the list of column group schemas.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnGroupSchema](aws-properties-quicksight-template-columngroupschema.md)
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnGroupSchemaList?: List<QuickSightTemplateColumnGroupSchema>;
}

/**
 * The measure type field with date type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datemeasurefield.html}
 **/
export interface QuickSightTemplateDateMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [String](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Allowed values_: `COUNT | DISTINCT_COUNT | MAX | MIN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: Value<string>;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-template-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateDateTimeFormatConfiguration;
  /**
   * The column that is used in the `DateMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The custom field ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
}

/**
 * The cluster marker that is a part of the cluster marker configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-clustermarker.html}
 **/
export interface QuickSightTemplateClusterMarker {
  /**
   * The simple cluster marker of the cluster marker.
   *
   * _Required_: No
   *
   * _Type_: [SimpleClusterMarker](aws-properties-quicksight-template-simpleclustermarker.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SimpleClusterMarker?: QuickSightTemplateSimpleClusterMarker;
}

/**
 * The conditional formatting for the progress bar of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpiprogressbarconditionalformatting.html}
 **/
export interface QuickSightTemplateKPIProgressBarConditionalFormatting {
  /**
   * The conditional formatting of the progress bar's foreground color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForegroundColor?: QuickSightTemplateConditionalFormattingColor;
}

/**
 * The unique values computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-uniquevaluescomputation.html}
 **/
export interface QuickSightTemplateUniqueValuesComputation {
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightTemplateDimensionField;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Dataset schema.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datasetschema.html}
 **/
export interface QuickSightTemplateDataSetSchema {
  /**
   * A structure containing the list of column schemas.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnSchema](aws-properties-quicksight-template-columnschema.md)
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSchemaList?: List<QuickSightTemplateColumnSchema>;
}

/**
 * The field well configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpifieldwells.html}
 **/
export interface QuickSightTemplateKPIFieldWells {
  /**
   * The target value field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValues?: List<QuickSightTemplateMeasureField>;
  /**
   * The trend group field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendGroups?: List<QuickSightTemplateDimensionField>;
  /**
   * The value field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * The value label configuration of the label in a reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinevaluelabelconfiguration.html}
 **/
export interface QuickSightTemplateReferenceLineValueLabelConfiguration {
  /**
   * The format configuration of the value label.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-template-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
  /**
   * The relative position of the value label. Choose one of the following options:
   */
  RelativePosition?: Value<string>;
}

/**
 * Provides the forecast to meet the target for a particular date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-whatifpointscenario.html}
 **/
export interface QuickSightTemplateWhatIfPointScenario {
  /**
   * The target value that you want to meet for the provided date.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
  /**
   * The date that you need the forecast results for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Date: Value<string>;
}

/**
 * The field well configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartfieldwells.html}
 **/
export interface QuickSightTemplateLineChartFieldWells {
  /**
   * The field well configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartAggregatedFieldWells](aws-properties-quicksight-template-linechartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineChartAggregatedFieldWells?: QuickSightTemplateLineChartAggregatedFieldWells;
}

/**
 * The aggregated field well for the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateTableAggregatedFieldWells {
  /**
   * The group by field well for a pivot table. Values are grouped by group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightTemplateDimensionField>;
  /**
   * The values field well for a pivot table. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * The cell conditional formatting option for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablecellconditionalformatting.html}
 **/
export interface QuickSightTemplateTableCellConditionalFormatting {
  /**
   * The field ID of the cell for conditional formatting.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The text format of the cell for conditional formatting.
   *
   * _Required_: No
   *
   * _Type_: [TextConditionalFormat](aws-properties-quicksight-template-textconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextFormat?: QuickSightTemplateTextConditionalFormat;
}

/**
 * The scale setup options for a numeric axis display.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axisscale.html}
 **/
export interface QuickSightTemplateAxisScale {
  /**
   * The logarithmic axis scale setup.
   *
   * _Required_: No
   *
   * _Type_: [AxisLogarithmicScale](aws-properties-quicksight-template-axislogarithmicscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logarithmic?: QuickSightTemplateAxisLogarithmicScale;
  /**
   * The linear axis scale setup.
   *
   * _Required_: No
   *
   * _Type_: [AxisLinearScale](aws-properties-quicksight-template-axislinearscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Linear?: QuickSightTemplateAxisLinearScale;
}

/**
 * Configures the display properties of the given text.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fontconfiguration.html}
 **/
export interface QuickSightTemplateFontConfiguration {
  /**
   * Determines the text display face that is inherited by the given font family.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ITALIC | NORMAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontStyle?: Value<string>;
  /**
   * The option that determines the text display size.
   *
   * _Required_: No
   *
   * _Type_: [FontSize](aws-properties-quicksight-template-fontsize.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontSize?: QuickSightTemplateFontSize;
  /**
   * Determines the appearance of decorative lines on the text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | UNDERLINE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontDecoration?: Value<string>;
  /**
   * Determines the color of the text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontColor?: Value<string>;
  /**
   * The option that determines the text display weight, or boldness.
   *
   * _Required_: No
   *
   * _Type_: [FontWeight](aws-properties-quicksight-template-fontweight.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontWeight?: QuickSightTemplateFontWeight;
}

/**
 * The sort configuration for a field in a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldsort.html}
 **/
export interface QuickSightTemplateFieldSort {
  /**
   * The sort configuration target field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The sort direction. Choose one of the following options:
   */
  Direction: Value<string>;
}

/**
 * The configuration of the search options in a list control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontrolsearchoptions.html}
 **/
export interface QuickSightTemplateListControlSearchOptions {
  /**
   * The visibility configuration of the search options in a list control.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The configuration that defines the default value of a `Decimal` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimalvaluewhenunsetconfiguration.html}
 **/
export interface QuickSightTemplateDecimalValueWhenUnsetConfiguration {
  /**
   * The built-in options for default values. The value can be one of the following:
   */
  ValueWhenUnsetOption?: Value<string>;
  /**
   * A custom value that's used when the value of a parameter isn't set.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValue?: Value<number>;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dropdowncontroldisplayoptions.html}
 **/
export interface QuickSightTemplateDropDownControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightTemplateLabelOptions;
  /**
   * The configuration of the `Select all` options in a dropdown control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSelectAllOptions](aws-properties-quicksight-template-listcontrolselectalloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectAllOptions?: QuickSightTemplateListControlSelectAllOptions;
}

/**
 * The URL operation that opens a link to another webpage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionurloperation.html}
 **/
export interface QuickSightTemplateCustomActionURLOperation {
  /**
   * THe URL link of the `CustomActionURLOperation`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URLTemplate: Value<string>;
  /**
   * The target of the `CustomActionURLOperation`.
   *
   * Valid values are defined as follows:
   */
  URLTarget: Value<string>;
}

/**
 * The visual display options for the visual palette.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualpalette.html}
 **/
export interface QuickSightTemplateVisualPalette {
  /**
   * The chart color options for the visual palette.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartColor?: Value<string>;
  /**
   * The color map options for the visual palette.
   *
   * _Required_: No
   *
   * _Type_: List of [DataPathColor](aws-properties-quicksight-template-datapathcolor.md)
   *
   * _Maximum_: `5000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorMap?: List<QuickSightTemplateDataPathColor>;
}

/**
 * The column schema.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnschema.html}
 **/
export interface QuickSightTemplateColumnSchema {
  /**
   * The data type of the column schema.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType?: Value<string>;
  /**
   * The geographic role of the column schema.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeographicRole?: Value<string>;
  /**
   * The name of the column schema.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The dimension type field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-dimensionfield.html}
 **/
export interface QuickSightTemplateDimensionField {
  /**
   * The dimension type field with date type columns.
   *
   * _Required_: No
   *
   * _Type_: [DateDimensionField](aws-properties-quicksight-template-datedimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateDimensionField?: QuickSightTemplateDateDimensionField;
  /**
   * The dimension type field with numerical type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericalDimensionField](aws-properties-quicksight-template-numericaldimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalDimensionField?: QuickSightTemplateNumericalDimensionField;
  /**
   * The dimension type field with categorical type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoricalDimensionField](aws-properties-quicksight-template-categoricaldimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoricalDimensionField?: QuickSightTemplateCategoricalDimensionField;
}

/**
 * The measure (metric) type field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-measurefield.html}
 **/
export interface QuickSightTemplateMeasureField {
  /**
   * The measure type field with date type columns.
   *
   * _Required_: No
   *
   * _Type_: [DateMeasureField](aws-properties-quicksight-template-datemeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateMeasureField?: QuickSightTemplateDateMeasureField;
  /**
   * The measure type field with numerical type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericalMeasureField](aws-properties-quicksight-template-numericalmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalMeasureField?: QuickSightTemplateNumericalMeasureField;
  /**
   * The measure type field with categorical type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoricalMeasureField](aws-properties-quicksight-template-categoricalmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoricalMeasureField?: QuickSightTemplateCategoricalMeasureField;
  /**
   * The calculated measure field only used in pivot tables.
   *
   * _Required_: No
   *
   * _Type_: [CalculatedMeasureField](aws-properties-quicksight-template-calculatedmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CalculatedMeasureField?: QuickSightTemplateCalculatedMeasureField;
}

/**
 * The configuration of a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-freeformlayoutconfiguration.html}
 **/
export interface QuickSightTemplateFreeFormLayoutConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutCanvasSizeOptions](aws-properties-quicksight-template-freeformlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions?: QuickSightTemplateFreeFormLayoutCanvasSizeOptions;
  /**
   * The elements that are included in a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FreeFormLayoutElement](aws-properties-quicksight-template-freeformlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightTemplateFreeFormLayoutElement>;
}

/**
 * The configuration of a body section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bodysectionconfiguration.html}
 **/
export interface QuickSightTemplateBodySectionConfiguration {
  /**
   * The configuration of content in a body section.
   *
   * _Required_: Yes
   *
   * _Type_: [BodySectionContent](aws-properties-quicksight-template-bodysectioncontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: QuickSightTemplateBodySectionContent;
  /**
   * The style options of a body section.
   *
   * _Required_: No
   *
   * _Type_: [SectionStyle](aws-properties-quicksight-template-sectionstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style?: QuickSightTemplateSectionStyle;
  /**
   * The configuration of a page break for a section.
   *
   * _Required_: No
   *
   * _Type_: [SectionPageBreakConfiguration](aws-properties-quicksight-template-sectionpagebreakconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageBreakConfiguration?: QuickSightTemplateSectionPageBreakConfiguration;
  /**
   * The unique identifier of a body section.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionId: Value<string>;
}

/**
 * A pivot table.
 *
 * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablevisual.html}
 **/
export interface QuickSightTemplatePivotTableVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableConditionalFormatting](aws-properties-quicksight-template-pivottableconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightTemplatePivotTableConditionalFormatting;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableConfiguration](aws-properties-quicksight-template-pivottableconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplatePivotTableConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}

/**
 * The formatting configuration for all types of field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-formatconfiguration.html}
 **/
export interface QuickSightTemplateFormatConfiguration {
  /**
   * Formatting configuration for number fields.
   *
   * _Required_: No
   *
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-template-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberFormatConfiguration?: QuickSightTemplateNumberFormatConfiguration;
  /**
   * Formatting configuration for `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-template-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeFormatConfiguration?: QuickSightTemplateDateTimeFormatConfiguration;
  /**
   * Formatting configuration for string fields.
   *
   * _Required_: No
   *
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-template-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringFormatConfiguration?: QuickSightTemplateStringFormatConfiguration;
}

/**
 * A `RelativeDatesFilter` filters relative dates values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-relativedatesfilter.html}
 **/
export interface QuickSightTemplateRelativeDatesFilter {
  /**
   * The date value of the filter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelativeDateValue?: Value<number>;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The range date type of the filter. Choose one of the options below:
   */
  RelativeDateType: Value<string>;
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeGranularity: Value<string>;
  /**
   * The parameter whose value should be used for the filter value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName?: Value<string>;
  /**
   * This option determines how null values should be treated when filtering data.
   */
  NullOption: Value<string>;
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterId: Value<string>;
  /**
   * The date configuration of the filter.
   *
   * _Required_: Yes
   *
   * _Type_: [AnchorDateConfiguration](aws-properties-quicksight-template-anchordateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnchorDateConfiguration: QuickSightTemplateAnchorDateConfiguration;
  /**
   * The minimum granularity (period granularity) of the relative dates filter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumGranularity?: Value<string>;
  /**
   * The configuration for the exclude period of the filter.
   *
   * _Required_: No
   *
   * _Type_: [ExcludePeriodConfiguration](aws-properties-quicksight-template-excludeperiodconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludePeriodConfiguration?: QuickSightTemplateExcludePeriodConfiguration;
}

/**
 * The options that determine the negative value configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-negativevalueconfiguration.html}
 **/
export interface QuickSightTemplateNegativeValueConfiguration {
  /**
   * Determines the display mode of the negative value configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `NEGATIVE | POSITIVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayMode: Value<string>;
}

/**
 * A list of selectable values that are used in a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parameterselectablevalues.html}
 **/
export interface QuickSightTemplateParameterSelectableValues {
  /**
   * The column identifier that fetches values from the data set.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinkToDataSetColumn?: QuickSightTemplateColumnIdentifier;
  /**
   * The values that are used in `ParameterSelectableValues`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * The set parameter operation that sets parameters in custom action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionsetparametersoperation.html}
 **/
export interface QuickSightTemplateCustomActionSetParametersOperation {
  /**
   * The parameter that determines the value configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of [SetParameterValueConfiguration](aws-properties-quicksight-template-setparametervalueconfiguration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValueConfigurations: List<QuickSightTemplateSetParameterValueConfiguration>;
}

/**
 * The percent range in the visible range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-percentvisiblerange.html}
 **/
export interface QuickSightTemplatePercentVisibleRange {
  /**
   * The lower bound of the range.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  From?: Value<number>;
  /**
   * The top bound of the range.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  To?: Value<number>;
}

/**
 * A `CategoryFilter` filters text values.
 *
 * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-categoryfilter.html}
 **/
export interface QuickSightTemplateCategoryFilter {
  /**
   * The configuration for a `CategoryFilter`.
   *
   * _Required_: Yes
   *
   * _Type_: [CategoryFilterConfiguration](aws-properties-quicksight-template-categoryfilterconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightTemplateCategoryFilterConfiguration;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterId: Value<string>;
}

/**
 * The control of a parameter that users can interact with in a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametercontrol.html}
 **/
export interface QuickSightTemplateParameterControl {
  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * _Required_: No
   *
   * _Type_: [ParameterSliderControl](aws-properties-quicksight-template-parameterslidercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slider?: QuickSightTemplateParameterSliderControl;
  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * _Required_: No
   *
   * _Type_: [ParameterTextAreaControl](aws-properties-quicksight-template-parametertextareacontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextArea?: QuickSightTemplateParameterTextAreaControl;
  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * _Required_: No
   *
   * _Type_: [ParameterDropDownControl](aws-properties-quicksight-template-parameterdropdowncontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dropdown?: QuickSightTemplateParameterDropDownControl;
  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * _Required_: No
   *
   * _Type_: [ParameterTextFieldControl](aws-properties-quicksight-template-parametertextfieldcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextField?: QuickSightTemplateParameterTextFieldControl;
  /**
   * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
   *
   * _Required_: No
   *
   * _Type_: [ParameterListControl](aws-properties-quicksight-template-parameterlistcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  List?: QuickSightTemplateParameterListControl;
  /**
   * A control from a date parameter that specifies date and time.
   *
   * _Required_: No
   *
   * _Type_: [ParameterDateTimePickerControl](aws-properties-quicksight-template-parameterdatetimepickercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimePicker?: QuickSightTemplateParameterDateTimePickerControl;
}

/**
 * The sort configuration of a `ComboChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartsortconfiguration.html}
 **/
export interface QuickSightTemplateComboChartSortConfiguration {
  /**
   * The sort configuration of the color field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The item limit configuration of the color field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The item limit configuration for the category field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The sort configuration of the category field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * The tooltip.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltipitem.html}
 **/
export interface QuickSightTemplateTooltipItem {
  /**
   * The tooltip item for the fields.
   *
   * _Required_: No
   *
   * _Type_: [FieldTooltipItem](aws-properties-quicksight-template-fieldtooltipitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldTooltipItem?: QuickSightTemplateFieldTooltipItem;
  /**
   * The tooltip item for the columns that are not part of a field well.
   *
   * _Required_: No
   *
   * _Type_: [ColumnTooltipItem](aws-properties-quicksight-template-columntooltipitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnTooltipItem?: QuickSightTemplateColumnTooltipItem;
}

/**
 * The word cloud options for a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-wordcloudoptions.html}
 **/
export interface QuickSightTemplateWordCloudOptions {
  /**
   * The word orientation options (horizontal, horizontal_and_vertical) for the words in a word cloud.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HORIZONTAL | HORIZONTAL_AND_VERTICAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordOrientation?: Value<string>;
  /**
   * The word scaling options (emphasize, normal) for the words in a word cloud.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `EMPHASIZE | NORMAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordScaling?: Value<string>;
  /**
   * The cloud layout options (fluid, normal) of a word cloud.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FLUID | NORMAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudLayout?: Value<string>;
  /**
   * The length limit of each word from 1-100.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumStringLength?: Value<number>;
  /**
   * The word casing options (lower_case, existing_case) for the words in a word cloud.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `EXISTING_CASE | LOWER_CASE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCasing?: Value<string>;
  /**
   * The word padding options (none, small, medium, large) for the words in a word cloud.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `LARGE | MEDIUM | NONE | SMALL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordPadding?: Value<string>;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-listcontroldisplayoptions.html}
 **/
export interface QuickSightTemplateListControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightTemplateLabelOptions;
  /**
   * The configuration of the search options in a list control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSearchOptions](aws-properties-quicksight-template-listcontrolsearchoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SearchOptions?: QuickSightTemplateListControlSearchOptions;
  /**
   * The configuration of the `Select all` options in a list control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSelectAllOptions](aws-properties-quicksight-template-listcontrolselectalloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectAllOptions?: QuickSightTemplateListControlSelectAllOptions;
}

/**
 * The configuration of a `BarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartconfiguration.html}
 **/
export interface QuickSightTemplateBarChartConfiguration {
  /**
   * The sort configuration of a `BarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [BarChartSortConfiguration](aws-properties-quicksight-template-barchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateBarChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-template-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightTemplateReferenceLine>;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-template-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightTemplateSmallMultiplesOptions;
  /**
   * The orientation of the bars in a bar chart visual. There are two valid values in this structure:
   */
  Orientation?: Value<string>;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart value.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * Determines the arrangement of the bars. The orientation and arrangement of bars determine the type of bar that is used in the visual.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CLUSTERED | STACKED | STACKED_PERCENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarsArrangement?: Value<string>;
  /**
   * The label display options (grid line, range, scale, axis step) for bar chart category.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-template-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightTemplateContributionAnalysisDefault>;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BarChartFieldWells](aws-properties-quicksight-template-barchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateBarChartFieldWells;
  /**
   * The label display options (grid line, range, scale, axis step) for a bar chart value.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueAxis?: QuickSightTemplateAxisDisplayOptions;
}

/**
 * The options for configuring a donut chart or pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-donutoptions.html}
 **/
export interface QuickSightTemplateDonutOptions {
  /**
   * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
   *
   * _Required_: No
   *
   * _Type_: [DonutCenterOptions](aws-properties-quicksight-template-donutcenteroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DonutCenterOptions?: QuickSightTemplateDonutCenterOptions;
  /**
   * The option for define the arc of the chart shape. Valid values are as follows:
   */
  ArcOptions?: QuickSightTemplateArcOptions;
}

/**
 * A `TimeEqualityFilter` filters values that are equal to a given value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-timeequalityfilter.html}
 **/
export interface QuickSightTemplateTimeEqualityFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The value of a `TimeEquality` filter.
   *
   * This field is mutually exclusive to `ParameterName`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The level of time precision that is used to aggregate `DateTime` values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeGranularity?: Value<string>;
  /**
   * The parameter whose value should be used for the filter value.
   *
   * This field is mutually exclusive to `Value`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName?: Value<string>;
  /**
   * An identifier that uniquely identifies a filter within a dashboard, analysis, or template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterId: Value<string>;
}

/**
 * Determines the icon display configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingicondisplayconfiguration.html}
 **/
export interface QuickSightTemplateConditionalFormattingIconDisplayConfiguration {
  /**
   * Determines the icon display configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ICON_ONLY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconDisplayOption?: Value<string>;
}

/**
 * A line chart.
 *
 * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartvisual.html}
 **/
export interface QuickSightTemplateLineChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartConfiguration](aws-properties-quicksight-template-linechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateLineChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * An object, structure, or sub-structure of an analysis, template, or dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-entity.html}
 **/
export interface QuickSightTemplateEntity {
  /**
   * The hierarchical path of the entity within the analysis, template, or dashboard definition tree.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
}

/**
 * The configuration of a `ComboChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-combochartconfiguration.html}
 **/
export interface QuickSightTemplateComboChartConfiguration {
  /**
   * The sort configuration of a `ComboChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartSortConfiguration](aws-properties-quicksight-template-combochartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateComboChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-template-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightTemplateReferenceLine>;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a bar in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarDataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
  /**
   * Determines the bar arrangement in a combo chart. The following are valid values in this structure:
   */
  BarsArrangement?: Value<string>;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a line in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineDataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The category axis of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartFieldWells](aws-properties-quicksight-template-combochartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateComboChartFieldWells;
  /**
   * The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
}

/**
 * The tooltip item for the columns that are not part of a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columntooltipitem.html}
 **/
export interface QuickSightTemplateColumnTooltipItem {
  /**
   * The aggregation function of the column tooltip item.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Aggregation?: QuickSightTemplateAggregationFunction;
  /**
   * The target column of the tooltip item.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * The label of the tooltip item.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Label?: Value<string>;
  /**
   * The visibility of the tooltip item.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * A control to display a text box that is used to enter a single entry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametertextfieldcontrol.html}
 **/
export interface QuickSightTemplateParameterTextFieldControl {
  /**
   * The ID of the `ParameterTextFieldControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControlId: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-template-textfieldcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateTextFieldControlDisplayOptions;
  /**
   * The source parameter name of the `ParameterTextFieldControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameterName: Value<string>;
  /**
   * The title of the `ParameterTextFieldControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
}

/**
 * The configuration of destination parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-destinationparametervalueconfiguration.html}
 **/
export interface QuickSightTemplateDestinationParameterValueConfiguration {
  /**
   * The configuration of custom values for destination parameter in `DestinationParameterValueConfiguration`.
   *
   * _Required_: No
   *
   * _Type_: [CustomValuesConfiguration](aws-properties-quicksight-template-customvaluesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValuesConfiguration?: QuickSightTemplateCustomValuesConfiguration;
  /**
   * The source parameter name of the destination parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameterName?: Value<string>;
  /**
   * The configuration that selects all options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ALL_VALUES`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectAllValueOptions?: Value<string>;
  /**
   * The source field ID of the destination parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceField?: Value<string>;
}

/**
 * The configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartconfiguration.html}
 **/
export interface QuickSightTemplateFunnelChartConfiguration {
  /**
   * The sort configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartSortConfiguration](aws-properties-quicksight-template-funnelchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateFunnelChartSortConfiguration;
  /**
   * The options that determine the presentation of the data labels.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartDataLabelOptions](aws-properties-quicksight-template-funnelchartdatalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabelOptions?: QuickSightTemplateFunnelChartDataLabelOptions;
  /**
   * The label options of the categories that are displayed in a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartFieldWells](aws-properties-quicksight-template-funnelchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateFunnelChartFieldWells;
  /**
   * The tooltip configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The label options for the values that are displayed in a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The visual palette configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
}

/**
 * The logarithmic axis scale setup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-axislogarithmicscale.html}
 **/
export interface QuickSightTemplateAxisLogarithmicScale {
  /**
   * The base setup of a logarithmic axis scale.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Base?: Value<number>;
}

/**
 * The field well configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateFunnelChartAggregatedFieldWells {
  /**
   * The category field wells of a funnel chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightTemplateDimensionField>;
  /**
   * The value field wells of a funnel chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * The cluster marker configuration of the geospatial map selected point style.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-clustermarkerconfiguration.html}
 **/
export interface QuickSightTemplateClusterMarkerConfiguration {
  /**
   * The cluster marker that is a part of the cluster marker configuration
   *
   * _Required_: No
   *
   * _Type_: [ClusterMarker](aws-properties-quicksight-template-clustermarker.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterMarker?: QuickSightTemplateClusterMarker;
}

/**
 * The sort configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpisortconfiguration.html}
 **/
export interface QuickSightTemplateKPISortConfiguration {
  /**
   * The sort configuration of the trend group fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendGroupSort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * The option that determines the hierarchy of the fields for a visual element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnhierarchy.html}
 **/
export interface QuickSightTemplateColumnHierarchy {
  /**
   * The option that determines the hierarchy of any `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeHierarchy](aws-properties-quicksight-template-datetimehierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeHierarchy?: QuickSightTemplateDateTimeHierarchy;
  /**
   * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
   *
   * _Required_: No
   *
   * _Type_: [ExplicitHierarchy](aws-properties-quicksight-template-explicithierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExplicitHierarchy?: QuickSightTemplateExplicitHierarchy;
  /**
   * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
   *
   * _Required_: No
   *
   * _Type_: [PredefinedHierarchy](aws-properties-quicksight-template-predefinedhierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedHierarchy?: QuickSightTemplatePredefinedHierarchy;
}

/**
 * The options that determine the bin count of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-bincountoptions.html}
 **/
export interface QuickSightTemplateBinCountOptions {
  /**
   * The options that determine the bin count value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<number>;
}

/**
 * Formatting configuration for number fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-numberformatconfiguration.html}
 **/
export interface QuickSightTemplateNumberFormatConfiguration {
  /**
   * The options that determine the numeric format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-template-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateNumericFormatConfiguration;
}

/**
 * A parameter declaration for the `Integer` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-integerparameterdeclaration.html}
 **/
export interface QuickSightTemplateIntegerParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-template-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightTemplateMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [IntegerDefaultValues](aws-properties-quicksight-template-integerdefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightTemplateIntegerDefaultValues;
  /**
   * The value type determines whether the parameter is a single-value or multi-value parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `MULTI_VALUED | SINGLE_VALUED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValueType: Value<string>;
  /**
   * A parameter declaration for the `Integer` data type.
   *
   * _Required_: No
   *
   * _Type_: [IntegerValueWhenUnsetConfiguration](aws-properties-quicksight-template-integervaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightTemplateIntegerValueWhenUnsetConfiguration;
  /**
   * The name of the parameter that is being declared.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The default values of the `DateTimeParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datetimedefaultvalues.html}
 **/
export interface QuickSightTemplateDateTimeDefaultValues {
  /**
   * The rolling date of the `DataTimeDefaultValues`. The date is determined from the dataset based on input expression.
   *
   * _Required_: No
   *
   * _Type_: [RollingDateConfiguration](aws-properties-quicksight-template-rollingdateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RollingDate?: QuickSightTemplateRollingDateConfiguration;
  /**
   * The dynamic value of the `DataTimeDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-template-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  /**
   * The static values of the `DataTimeDefaultValues`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticValues?: List<Value<string>>;
}

/**
 * A control to display a text box that is used to enter multiple entries.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-parametertextareacontrol.html}
 **/
export interface QuickSightTemplateParameterTextAreaControl {
  /**
   * The ID of the `ParameterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControlId: Value<string>;
  /**
   * The delimiter that is used to separate the lines in text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Delimiter?: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-template-textareacontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateTextAreaControlDisplayOptions;
  /**
   * The source parameter name of the `ParameterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameterName: Value<string>;
  /**
   * The title of the `ParameterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
}

/**
 * The text format for the title.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-shortformattext.html}
 **/
export interface QuickSightTemplateShortFormatText {
  /**
   * Rich text. Examples of rich text include bold, underline, and italics.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RichText?: Value<string>;
  /**
   * Plain text format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlainText?: Value<string>;
}

/**
 * The share label options for the labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-labeloptions.html}
 **/
export interface QuickSightTemplateLabelOptions {
  /**
   * The text for the label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel?: Value<string>;
  /**
   * Determines whether or not the label is visible.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The font configuration of the label.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightTemplateFontConfiguration;
}

/**
 * The selected field options for the pivot table field options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablefieldoption.html}
 **/
export interface QuickSightTemplatePivotTableFieldOption {
  /**
   * The custom label of the pivot table field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel?: Value<string>;
  /**
   * The field ID of the pivot table field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId: Value<string>;
  /**
   * The visibility of the pivot table field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The options that determine the presentation of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-kpioptions.html}
 **/
export interface QuickSightTemplateKPIOptions {
  /**
   * The options that determine the secondary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryValueFontConfiguration?: QuickSightTemplateFontConfiguration;
  /**
   * The options that determine the presentation of trend arrows in a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [TrendArrowOptions](aws-properties-quicksight-template-trendarrowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendArrows?: QuickSightTemplateTrendArrowOptions;
  /**
   * The options that determine the presentation of the secondary value of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [SecondaryValueOptions](aws-properties-quicksight-template-secondaryvalueoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryValue?: QuickSightTemplateSecondaryValueOptions;
  /**
   * The comparison configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonConfiguration](aws-properties-quicksight-template-comparisonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison?: QuickSightTemplateComparisonConfiguration;
  /**
   * The options that determine the primary value display type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACTUAL | COMPARISON | HIDDEN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueDisplayType?: Value<string>;
  /**
   * The options that determine the presentation of the progress bar of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [ProgressBarOptions](aws-properties-quicksight-template-progressbaroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgressBar?: QuickSightTemplateProgressBarOptions;
  /**
   * The options that determine the primary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueFontConfiguration?: QuickSightTemplateFontConfiguration;
}

/**
 * The options that style a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sectionstyle.html}
 **/
export interface QuickSightTemplateSectionStyle {
  /**
   * The spacing between section content and its top, bottom, left, and right edges.
   *
   * There is no padding by default.
   *
   * _Required_: No
   *
   * _Type_: [Spacing](aws-properties-quicksight-template-spacing.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Padding?: QuickSightTemplateSpacing;
  /**
   * The height of a section.
   *
   * Heights can only be defined for header and footer sections. The default height margin is 0.5 inches.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Height?: Value<string>;
}

/**
 * The aggregated field well configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-radarchartaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateRadarChartAggregatedFieldWells {
  /**
   * The aggregated field well categories of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightTemplateDimensionField>;
  /**
   * The color that are assigned to the aggregated field wells of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: List<QuickSightTemplateDimensionField>;
  /**
   * The values that are assigned to the aggregated field wells of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * The unaggregated field well for the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableunaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateTableUnaggregatedFieldWells {
  /**
   * The values field well for a pivot table. Values are unaggregated for an unaggregated table.
   *
   * _Required_: No
   *
   * _Type_: List of [UnaggregatedField](aws-properties-quicksight-template-unaggregatedfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateUnaggregatedField>;
}

/**
 * A `Layout` defines the placement of elements within a sheet.
 *
 * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the _Amazon QuickSight User Guide_.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-layout.html}
 **/
export interface QuickSightTemplateLayout {
  /**
   * The configuration that determines what the type of layout for a sheet.
   *
   * _Required_: Yes
   *
   * _Type_: [LayoutConfiguration](aws-properties-quicksight-template-layoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightTemplateLayoutConfiguration;
}

/**
 * The configuration of loading animation in free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-loadinganimation.html}
 **/
export interface QuickSightTemplateLoadingAnimation {
  /**
   * The visibility configuration of `LoadingAnimation`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The aggregated field wells of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateHeatMapAggregatedFieldWells {
  /**
   * The values field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
  /**
   * The columns field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<QuickSightTemplateDimensionField>;
  /**
   * The rows field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rows?: List<QuickSightTemplateDimensionField>;
}

/**
 * The sort configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartsortconfiguration.html}
 **/
export interface QuickSightTemplateFunnelChartSortConfiguration {
  /**
   * The limit on the number of categories displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
}

/**
 * The configuration for a `TableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tableconfiguration.html}
 **/
export interface QuickSightTemplateTableConfiguration {
  /**
   * The sort configuration for a `TableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TableSortConfiguration](aws-properties-quicksight-template-tablesortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateTableSortConfiguration;
  /**
   * The paginated report options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TablePaginatedReportOptions](aws-properties-quicksight-template-tablepaginatedreportoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedReportOptions?: QuickSightTemplateTablePaginatedReportOptions;
  /**
   * The table options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TableOptions](aws-properties-quicksight-template-tableoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableOptions?: QuickSightTemplateTableOptions;
  /**
   * A collection of inline visualizations to display within a chart.
   *
   * _Required_: No
   *
   * _Type_: List of [TableInlineVisualization](aws-properties-quicksight-template-tableinlinevisualization.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableInlineVisualizations?: List<QuickSightTemplateTableInlineVisualization>;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldWells](aws-properties-quicksight-template-tablefieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateTableFieldWells;
  /**
   * The field options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldOptions](aws-properties-quicksight-template-tablefieldoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldOptions?: QuickSightTemplateTableFieldOptions;
  /**
   * The total options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TotalOptions](aws-properties-quicksight-template-totaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalOptions?: QuickSightTemplateTotalOptions;
}

/**
 * The visual display options for a data zoom scroll bar.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-scrollbaroptions.html}
 **/
export interface QuickSightTemplateScrollBarOptions {
  /**
   * The visibility range for the data zoom scroll bar.
   *
   * _Required_: No
   *
   * _Type_: [VisibleRangeOptions](aws-properties-quicksight-template-visiblerangeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibleRange?: QuickSightTemplateVisibleRangeOptions;
  /**
   * The visibility of the data zoom scroll bar.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The label configuration of a reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinelabelconfiguration.html}
 **/
export interface QuickSightTemplateReferenceLineLabelConfiguration {
  /**
   * The horizontal position configuration of the label in a reference line. Choose one of the following options:
   */
  HorizontalPosition?: Value<string>;
  /**
   * The value label configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineValueLabelConfiguration](aws-properties-quicksight-template-referencelinevaluelabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelConfiguration?: QuickSightTemplateReferenceLineValueLabelConfiguration;
  /**
   * The custom label configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineCustomLabelConfiguration](aws-properties-quicksight-template-referencelinecustomlabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabelConfiguration?: QuickSightTemplateReferenceLineCustomLabelConfiguration;
  /**
   * The font color configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontColor?: Value<string>;
  /**
   * The font configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightTemplateFontConfiguration;
  /**
   * The vertical position configuration of the label in a reference line. Choose one of the following options:
   */
  VerticalPosition?: Value<string>;
}

/**
 * The aggregated field wells of a bar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-barchartaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateBarChartAggregatedFieldWells {
  /**
   * The category (y-axis) field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightTemplateDimensionField>;
  /**
   * The color (group/color) field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightTemplateDimensionField>;
  /**
   * The value field wells of a bar chart. Values are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
  /**
   * The small multiples field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightTemplateDimensionField>;
}

/**
 * The rendering rules of a sheet that uses a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetelementrenderingrule.html}
 **/
export interface QuickSightTemplateSheetElementRenderingRule {
  /**
   * The expression of the rendering rules of a sheet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * The override configuration of the rendering rules of a sheet.
   *
   * _Required_: Yes
   *
   * _Type_: [SheetElementConfigurationOverrides](aws-properties-quicksight-template-sheetelementconfigurationoverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationOverrides: QuickSightTemplateSheetElementConfigurationOverrides;
}

/**
 * A control to display a text box that is used to enter multiple entries.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filtertextareacontrol.html}
 **/
export interface QuickSightTemplateFilterTextAreaControl {
  /**
   * The ID of the `FilterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControlId: Value<string>;
  /**
   * The delimiter that is used to separate the lines in text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Delimiter?: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-template-textareacontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateTextAreaControlDisplayOptions;
  /**
   * The title of the `FilterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The source filter ID of the `FilterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFilterId: Value<string>;
}

/**
 * A heat map.
 *
 * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-heatmapvisual.html}
 **/
export interface QuickSightTemplateHeatMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a heat map.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapConfiguration](aws-properties-quicksight-template-heatmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateHeatMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * A parameter declaration for the `String` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-stringparameterdeclaration.html}
 **/
export interface QuickSightTemplateStringParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-template-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightTemplateMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [StringDefaultValues](aws-properties-quicksight-template-stringdefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightTemplateStringDefaultValues;
  /**
   * The value type determines whether the parameter is a single-value or multi-value parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `MULTI_VALUED | SINGLE_VALUED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValueType: Value<string>;
  /**
   * The configuration that defines the default value of a `String` parameter when a value has not been set.
   *
   * _Required_: No
   *
   * _Type_: [StringValueWhenUnsetConfiguration](aws-properties-quicksight-template-stringvaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightTemplateStringValueWhenUnsetConfiguration;
  /**
   * The name of the parameter that is being declared.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A grid layout to define the placement of sheet control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-sheetcontrollayout.html}
 **/
export interface QuickSightTemplateSheetControlLayout {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * _Required_: Yes
   *
   * _Type_: [SheetControlLayoutConfiguration](aws-properties-quicksight-template-sheetcontrollayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightTemplateSheetControlLayoutConfiguration;
}

/**
 * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterlistcontrol.html}
 **/
export interface QuickSightTemplateFilterListControl {
  /**
   * The ID of the `FilterListControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControlId: Value<string>;
  /**
   * The type of `FilterListControl`. Choose one of the following options:
   */
  Type?: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlDisplayOptions](aws-properties-quicksight-template-listcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateListControlDisplayOptions;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-template-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightTemplateCascadingControlConfiguration;
  /**
   * The title of the `FilterListControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The source filter ID of the `FilterListControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFilterId: Value<string>;
  /**
   * A list of selectable values that are used in a control.
   *
   * _Required_: No
   *
   * _Type_: [FilterSelectableValues](aws-properties-quicksight-template-filterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightTemplateFilterSelectableValues;
}

/**
 * The default values of the `DecimalParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-decimaldefaultvalues.html}
 **/
export interface QuickSightTemplateDecimalDefaultValues {
  /**
   * The dynamic value of the `DecimalDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-template-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightTemplateDynamicDefaultValue;
  /**
   * The static values of the `DecimalDefaultValues`.
   *
   * _Required_: No
   *
   * _Type_: List of Double
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticValues?: List<Value<number>>;
}

/**
 * The arc axis range of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-arcaxisdisplayrange.html}
 **/
export interface QuickSightTemplateArcAxisDisplayRange {
  /**
   * The minimum value of the arc axis range.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The maximum value of the arc axis range.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
}

/**
 * The maximum label of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-maximumlabeltype.html}
 **/
export interface QuickSightTemplateMaximumLabelType {
  /**
   * The visibility of the maximum label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The side border options for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablesideborderoptions.html}
 **/
export interface QuickSightTemplateTableSideBorderOptions {
  /**
   * The table border options of the left border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-template-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Left?: QuickSightTemplateTableBorderOptions;
  /**
   * The table border options of the top border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-template-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Top?: QuickSightTemplateTableBorderOptions;
  /**
   * The table border options of the inner horizontal border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-template-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InnerHorizontal?: QuickSightTemplateTableBorderOptions;
  /**
   * The table border options of the right border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-template-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Right?: QuickSightTemplateTableBorderOptions;
  /**
   * The table border options of the bottom border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-template-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bottom?: QuickSightTemplateTableBorderOptions;
  /**
   * The table border options of the inner vertical border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-template-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InnerVertical?: QuickSightTemplateTableBorderOptions;
}

/**
 * The general configuration of a column.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-columnconfiguration.html}
 **/
export interface QuickSightTemplateColumnConfiguration {
  /**
   * The role of the column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DIMENSION | MEASURE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role?: Value<string>;
  /**
   * The format configuration of a column.
   *
   * _Required_: No
   *
   * _Type_: [FormatConfiguration](aws-properties-quicksight-template-formatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightTemplateFormatConfiguration;
  /**
   * The column.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightTemplateColumnIdentifier;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ColorsConfiguration](aws-properties-quicksight-template-colorsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorsConfiguration?: QuickSightTemplateColorsConfiguration;
}

/**
 * The table options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableoptions.html}
 **/
export interface QuickSightTemplatePivotTableOptions {
  /**
   * The table cell style of row field names.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowFieldNamesStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The visibility of the single metric options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleMetricVisibility?: Value<string>;
  /**
   * The table cell style of the column header.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHeaderStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The table cell style of the row headers.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowHeaderStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The metric placement (row, column) options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `COLUMN | ROW`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricPlacement?: Value<string>;
  /**
   * Determines the visibility of the pivot table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ToggleButtonsVisibility?: Value<string>;
  /**
   * The table cell style of cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CellStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The visibility of the column names.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnNamesVisibility?: Value<string>;
  /**
   * The row alternate color options (widget status, row alternate colors).
   *
   * _Required_: No
   *
   * _Type_: [RowAlternateColorOptions](aws-properties-quicksight-template-rowalternatecoloroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowAlternateColorOptions?: QuickSightTemplateRowAlternateColorOptions;
}

/**
 * The options that determine the thousands separator configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-thousandseparatoroptions.html}
 **/
export interface QuickSightTemplateThousandSeparatorOptions {
  /**
   * Determines the thousands separator symbol.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `COMMA | DOT | SPACE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Symbol?: Value<string>;
  /**
   * Determines the visibility of the thousands separator.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The conditional formatting of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartconditionalformatting.html}
 **/
export interface QuickSightTemplateGaugeChartConditionalFormatting {
  /**
   * Conditional formatting options of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [GaugeChartConditionalFormattingOption](aws-properties-quicksight-template-gaugechartconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightTemplateGaugeChartConditionalFormattingOption>;
}

/**
 * The comparison display configuration of a KPI or gauge chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-comparisonconfiguration.html}
 **/
export interface QuickSightTemplateComparisonConfiguration {
  /**
   * The method of the comparison. Choose from the following options:
   */
  ComparisonMethod?: Value<string>;
  /**
   * The format of the comparison.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonFormatConfiguration](aws-properties-quicksight-template-comparisonformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonFormat?: QuickSightTemplateComparisonFormatConfiguration;
}

/**
 * The style configuration of the reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-referencelinestyleconfiguration.html}
 **/
export interface QuickSightTemplateReferenceLineStyleConfiguration {
  /**
   * The pattern type of the line style. Choose one of the following options:
   */
  Pattern?: Value<string>;
  /**
   * The hex color of the reference line.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
}

/**
 * Determines the color that is applied to a particular data value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datacolor.html}
 **/
export interface QuickSightTemplateDataColor {
  /**
   * The data value that the color is applied to.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataValue?: Value<number>;
  /**
   * The color that is applied to the data value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
}

/**
 * The configuration of adding parameters in action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-setparametervalueconfiguration.html}
 **/
export interface QuickSightTemplateSetParameterValueConfiguration {
  /**
   * The destination parameter name of the `SetParameterValueConfiguration`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationParameterName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationParameterValueConfiguration](aws-properties-quicksight-template-destinationparametervalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: QuickSightTemplateDestinationParameterValueConfiguration;
}

/**
 * The rolling date configuration of a date time filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rollingdateconfiguration.html}
 **/
export interface QuickSightTemplateRollingDateConfiguration {
  /**
   * The expression of the rolling date configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * The data set that is used in the rolling date configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifier?: Value<string>;
}

/**
 * The configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-piechartconfiguration.html}
 **/
export interface QuickSightTemplatePieChartConfiguration {
  /**
   * The sort configuration of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [PieChartSortConfiguration](aws-properties-quicksight-template-piechartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplatePieChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-template-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightTemplateContributionAnalysisDefault>;
  /**
   * The label options of the group/color that is displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [PieChartFieldWells](aws-properties-quicksight-template-piechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplatePieChartFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.
   *
   * _Required_: No
   *
   * _Type_: [DonutOptions](aws-properties-quicksight-template-donutoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DonutOptions?: QuickSightTemplateDonutOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-template-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightTemplateSmallMultiplesOptions;
  /**
   * The label options for the value that is displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
}

/**
 * The title label options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-visualtitlelabeloptions.html}
 **/
export interface QuickSightTemplateVisualTitleLabelOptions {
  /**
   * The visibility of the title label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The short text format of the title label, such as plain text or rich text.
   *
   * _Required_: No
   *
   * _Type_: [ShortFormatText](aws-properties-quicksight-template-shortformattext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatText?: QuickSightTemplateShortFormatText;
}

/**
 * The configuration for a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-waterfallchartconfiguration.html}
 **/
export interface QuickSightTemplateWaterfallChartConfiguration {
  /**
   * The options that determine the presentation of the category axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The sort configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartSortConfiguration](aws-properties-quicksight-template-waterfallchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightTemplateWaterfallChartSortConfiguration;
  /**
   * The legend configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightTemplateLegendOptions;
  /**
   * The data label configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The options that determine the presentation of the y-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The field well configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartFieldWells](aws-properties-quicksight-template-waterfallchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateWaterfallChartFieldWells;
  /**
   * The options that determine the presentation of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartOptions](aws-properties-quicksight-template-waterfallchartoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallChartOptions?: QuickSightTemplateWaterfallChartOptions;
  /**
   * The options that determine the presentation of the category axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The options that determine the presentation of the y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The visual palette configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
}

/**
 * The conditional formatting for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformatting.html}
 **/
export interface QuickSightTemplatePivotTableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableConditionalFormattingOption](aws-properties-quicksight-template-pivottableconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightTemplatePivotTableConditionalFormattingOption>;
}

/**
 * The configuration for a `HistogramVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramconfiguration.html}
 **/
export interface QuickSightTemplateHistogramConfiguration {
  /**
   * The options that determine the presentation of the y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
  /**
   * The data label configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-template-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightTemplateDataLabelOptions;
  /**
   * The options that determine the presentation of histogram bins.
   *
   * _Required_: No
   *
   * _Type_: [HistogramBinOptions](aws-properties-quicksight-template-histogrambinoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinOptions?: QuickSightTemplateHistogramBinOptions;
  /**
   * The field well configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [HistogramFieldWells](aws-properties-quicksight-template-histogramfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightTemplateHistogramFieldWells;
  /**
   * The tooltip configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightTemplateTooltipOptions;
  /**
   * The options that determine the presentation of the x-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-template-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightTemplateChartAxisLabelOptions;
  /**
   * The visual palette configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-template-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightTemplateVisualPalette;
  /**
   * The options that determine the presentation of the x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightTemplateAxisDisplayOptions;
}

/**
 * A list of custom filter values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customfilterlistconfiguration.html}
 **/
export interface QuickSightTemplateCustomFilterListConfiguration {
  /**
   * The list of category values for the filter.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryValues?: List<Value<string>>;
  /**
   * This option determines how null values should be treated when filtering data.
   */
  NullOption: Value<string>;
  /**
   * The match operator that is used to determine if a filter should be applied.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CONTAINS | DOES_NOT_CONTAIN | DOES_NOT_EQUAL | ENDS_WITH | EQUALS | STARTS_WITH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchOperator: Value<string>;
  /**
   * Select all of the values. Null is not the assigned value of select all.
   */
  SelectAllOptions?: Value<string>;
}

/**
 * The configuration of the placeholder options in a text control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-textcontrolplaceholderoptions.html}
 **/
export interface QuickSightTemplateTextControlPlaceholderOptions {
  /**
   * The visibility configuration of the placeholder options in a text control.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The filter operation that filters data included in a visual or in an entire sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionfilteroperation.html}
 **/
export interface QuickSightTemplateCustomActionFilterOperation {
  /**
   * The configuration that chooses the fields to be filtered.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterOperationSelectedFieldsConfiguration](aws-properties-quicksight-template-filteroperationselectedfieldsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldsConfiguration: QuickSightTemplateFilterOperationSelectedFieldsConfiguration;
  /**
   * The configuration that chooses the target visuals to be filtered.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterOperationTargetVisualsConfiguration](aws-properties-quicksight-template-filteroperationtargetvisualsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetVisualsConfiguration: QuickSightTemplateFilterOperationTargetVisualsConfiguration;
}

/**
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterslidercontrol.html}
 **/
export interface QuickSightTemplateFilterSliderControl {
  /**
   * The ID of the `FilterSliderControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControlId: Value<string>;
  /**
   * The type of `FilterSliderControl`. Choose one of the following options:
   */
  Type?: Value<string>;
  /**
   * The number of increments that the slider bar is divided into.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepSize: Value<number>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [SliderControlDisplayOptions](aws-properties-quicksight-template-slidercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateSliderControlDisplayOptions;
  /**
   * The title of the `FilterSliderControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The smaller value that is displayed at the left of the slider.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumValue: Value<number>;
  /**
   * The source filter ID of the `FilterSliderControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFilterId: Value<string>;
  /**
   * The larger value that is displayed at the right of the slider.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumValue: Value<number>;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-slidercontroldisplayoptions.html}
 **/
export interface QuickSightTemplateSliderControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightTemplateLabelOptions;
}

/**
 * Determines the custom condition for an icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingcustomiconcondition.html}
 **/
export interface QuickSightTemplateConditionalFormattingCustomIconCondition {
  /**
   * The expression that determines the condition of the icon set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * Determines the color of the icon.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
  /**
   * Determines the icon display configuration.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIconDisplayConfiguration](aws-properties-quicksight-template-conditionalformattingicondisplayconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayConfiguration?: QuickSightTemplateConditionalFormattingIconDisplayConfiguration;
  /**
   * Custom icon options for an icon set.
   *
   * _Required_: Yes
   *
   * _Type_: [ConditionalFormattingCustomIconOptions](aws-properties-quicksight-template-conditionalformattingcustomiconoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconOptions: QuickSightTemplateConditionalFormattingCustomIconOptions;
}

/**
 * The options that determine the default settings of a free-form layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultfreeformlayoutconfiguration.html}
 **/
export interface QuickSightTemplateDefaultFreeFormLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: [FreeFormLayoutCanvasSizeOptions](aws-properties-quicksight-template-freeformlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightTemplateFreeFormLayoutCanvasSizeOptions;
}

/**
 * The subtotal options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-subtotaloptions.html}
 **/
export interface QuickSightTemplateSubtotalOptions {
  /**
   * The custom label string for the subtotal cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabel?: Value<string>;
  /**
   * The optional configuration of subtotal cells.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableFieldSubtotalOptions](aws-properties-quicksight-template-pivottablefieldsubtotaloptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLevelOptions?: List<QuickSightTemplatePivotTableFieldSubtotalOptions>;
  /**
   * The cell styling options for the subtotals of value cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueCellStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The cell styling options for the subtotal cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightTemplateTableCellStyle;
  /**
   * The visibility configuration for the subtotal cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalsVisibility?: Value<string>;
  /**
   * The field level (all, custom, last) for the subtotal cells.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ALL | CUSTOM | LAST`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLevel?: Value<string>;
  /**
   * The cell styling options for the subtotals of header cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricHeaderCellStyle?: QuickSightTemplateTableCellStyle;
}

/**
 * A geospatial map or a points on map visual.
 *
 * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-geospatialmapvisual.html}
 **/
export interface QuickSightTemplateGeospatialMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration settings of the visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapConfiguration](aws-properties-quicksight-template-geospatialmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateGeospatialMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The options that determine the presentation of the `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gaugechartoptions.html}
 **/
export interface QuickSightTemplateGaugeChartOptions {
  /**
   * The arc configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ArcConfiguration](aws-properties-quicksight-template-arcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arc?: QuickSightTemplateArcConfiguration;
  /**
   * The comparison configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonConfiguration](aws-properties-quicksight-template-comparisonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison?: QuickSightTemplateComparisonConfiguration;
  /**
   * The options that determine the primary value display type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACTUAL | COMPARISON | HIDDEN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueDisplayType?: Value<string>;
  /**
   * The arc axis configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ArcAxisConfiguration](aws-properties-quicksight-template-arcaxisconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArcAxis?: QuickSightTemplateArcAxisConfiguration;
  /**
   * The options that determine the primary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueFontConfiguration?: QuickSightTemplateFontConfiguration;
}

/**
 * The sort configuration of a `BoxPlotVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotsortconfiguration.html}
 **/
export interface QuickSightTemplateBoxPlotSortConfiguration {
  /**
   * The sort configuration of a group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The pagination configuration of a table visual or box plot.
   *
   * _Required_: No
   *
   * _Type_: [PaginationConfiguration](aws-properties-quicksight-template-paginationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginationConfiguration?: QuickSightTemplatePaginationConfiguration;
}

/**
 * The text format for a subtitle.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-longformattext.html}
 **/
export interface QuickSightTemplateLongFormatText {
  /**
   * Rich text. Examples of rich text include bold, underline, and italics.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RichText?: Value<string>;
  /**
   * Plain text format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlainText?: Value<string>;
}

/**
 * The range ends label type of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-rangeendslabeltype.html}
 **/
export interface QuickSightTemplateRangeEndsLabelType {
  /**
   * The visibility of the range ends label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The series axis configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-lineseriesaxisdisplayoptions.html}
 **/
export interface QuickSightTemplateLineSeriesAxisDisplayOptions {
  /**
   * The configuration options that determine how missing data is treated during the rendering of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MissingDataConfiguration](aws-properties-quicksight-template-missingdataconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MissingDataConfigurations?: List<QuickSightTemplateMissingDataConfiguration>;
  /**
   * The options that determine the presentation of the line series axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-template-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisOptions?: QuickSightTemplateAxisDisplayOptions;
}

/**
 * The option that specifies individual data values for labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-datapathlabeltype.html}
 **/
export interface QuickSightTemplateDataPathLabelType {
  /**
   * The field ID of the field that the data label needs to be applied to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId?: Value<string>;
  /**
   * The visibility of the data label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
  /**
   * The actual value of the field that is labeled.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldValue?: Value<string>;
}

/**
 * The URL configuration for a table field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldurlconfiguration.html}
 **/
export interface QuickSightTemplateTableFieldURLConfiguration {
  /**
   * The link configuration of a table field URL.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldLinkConfiguration](aws-properties-quicksight-template-tablefieldlinkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinkConfiguration?: QuickSightTemplateTableFieldLinkConfiguration;
  /**
   * The image configuration of a table field URL.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldImageConfiguration](aws-properties-quicksight-template-tablefieldimageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageConfiguration?: QuickSightTemplateTableFieldImageConfiguration;
}

/**
 * The formatting configuration for the icon.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-conditionalformattingicon.html}
 **/
export interface QuickSightTemplateConditionalFormattingIcon {
  /**
   * Determines the custom condition for an icon set.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingCustomIconCondition](aws-properties-quicksight-template-conditionalformattingcustomiconcondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomCondition?: QuickSightTemplateConditionalFormattingCustomIconCondition;
  /**
   * Formatting configuration for icon set.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIconSet](aws-properties-quicksight-template-conditionalformattingiconset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconSet?: QuickSightTemplateConditionalFormattingIconSet;
}

/**
 * The field label type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-fieldlabeltype.html}
 **/
export interface QuickSightTemplateFieldLabelType {
  /**
   * Indicates the field that is targeted by the field label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldId?: Value<string>;
  /**
   * The visibility of the field label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visibility?: Value<string>;
}

/**
 * The aggregated field well for a box plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-boxplotaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateBoxPlotAggregatedFieldWells {
  /**
   * The group by field well of a box plot chart. Values are grouped based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightTemplateDimensionField>;
  /**
   * The value field well of a box plot chart. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * A visual that contains custom content.
 *
 * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customcontentvisual.html}
 **/
export interface QuickSightTemplateCustomContentVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a `CustomContentVisual`.
   *
   * _Required_: No
   *
   * _Type_: [CustomContentConfiguration](aws-properties-quicksight-template-customcontentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateCustomContentConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The dataset that is used to create the custom content visual. You can't create a visual without a dataset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifier: Value<string>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
}

/**
 * The navigation operation that navigates between different sheets in the same analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-customactionnavigationoperation.html}
 **/
export interface QuickSightTemplateCustomActionNavigationOperation {
  /**
   * The configuration that chooses the navigation target.
   *
   * _Required_: No
   *
   * _Type_: [LocalNavigationConfiguration](aws-properties-quicksight-template-localnavigationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalNavigationConfiguration?: QuickSightTemplateLocalNavigationConfiguration;
}

/**
 * The sort configuration for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottablesortconfiguration.html}
 **/
export interface QuickSightTemplatePivotTableSortConfiguration {
  /**
   * The field sort options for a pivot table sort configuration.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-quicksight-template-fieldsortoptions.md) of [PivotFieldSortOptions](aws-properties-quicksight-template-pivotfieldsortoptions.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSortOptions?: List<QuickSightTemplatePivotFieldSortOptions>;
}

/**
 * The scope of the cell for conditional formatting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-pivottableconditionalformattingscope.html}
 **/
export interface QuickSightTemplatePivotTableConditionalFormattingScope {
  /**
   * The role (field, field total, grand total) of the cell for conditional formatting.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FIELD | FIELD_TOTAL | GRAND_TOTAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role?: Value<string>;
}

/**
 * An aggregation function aggregates values from a dimension or measure.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-aggregationfunction.html}
 **/
export interface QuickSightTemplateAggregationFunction {
  /**
   * Aggregation for date values.
   */
  DateAggregationFunction?: Value<string>;
  /**
   * Aggregation for numerical values.
   *
   * _Required_: No
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-template-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalAggregationFunction?: QuickSightTemplateNumericalAggregationFunction;
  /**
   * Aggregation for categorical values.
   */
  CategoricalAggregationFunction?: Value<string>;
}

/**
 * An empty visual.
 *
 * Empty visuals are used in layouts but have not been configured to show any data. A new visual created in the Amazon QuickSight console is considered an `EmptyVisual` until a visual type is selected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-emptyvisual.html}
 **/
export interface QuickSightTemplateEmptyVisual {
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The data set that is used in the empty visual. Every visual requires a dataset to render.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifier: Value<string>;
}

/**
 * The configuration for default new sheet settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-defaultnewsheetconfiguration.html}
 **/
export interface QuickSightTemplateDefaultNewSheetConfiguration {
  /**
   * The option that determines the sheet content type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `INTERACTIVE | PAGINATED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetContentType?: Value<string>;
  /**
   * The options that determine the default settings for interactive layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultInteractiveLayoutConfiguration](aws-properties-quicksight-template-defaultinteractivelayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InteractiveLayoutConfiguration?: QuickSightTemplateDefaultInteractiveLayoutConfiguration;
  /**
   * The options that determine the default settings for a paginated layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultPaginatedLayoutConfiguration](aws-properties-quicksight-template-defaultpaginatedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedLayoutConfiguration?: QuickSightTemplateDefaultPaginatedLayoutConfiguration;
}

/**
 * The custom text content (value, font configuration) for the table link content configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tablefieldcustomtextcontent.html}
 **/
export interface QuickSightTemplateTableFieldCustomTextContent {
  /**
   * The string value of the custom text content for the table URL link content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The font configuration of the custom text content for the table URL link content.
   *
   * _Required_: Yes
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration: QuickSightTemplateFontConfiguration;
}

/**
 * A funnel chart.
 *
 * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-funnelchartvisual.html}
 **/
export interface QuickSightTemplateFunnelChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightTemplateVisualSubtitleLabelOptions;
  /**
   * The unique identifier of a visual. This identifier must be unique within the context of a dashboard, template, or analysis. Two dashboards, analyses, or templates can have visuals with the same identifiers..
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualId: Value<string>;
  /**
   * The configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartConfiguration](aws-properties-quicksight-template-funnelchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightTemplateFunnelChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightTemplateVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightTemplateVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightTemplateColumnHierarchy>;
}

/**
 * The field well configuration of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-histogramaggregatedfieldwells.html}
 **/
export interface QuickSightTemplateHistogramAggregatedFieldWells {
  /**
   * The value field wells of a histogram. Values are aggregated by `COUNT` or `DISTINCT_COUNT`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightTemplateMeasureField>;
}

/**
 * The date configuration of the filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-anchordateconfiguration.html}
 **/
export interface QuickSightTemplateAnchorDateConfiguration {
  /**
   * The options for the date configuration. Choose one of the options below:
   */
  AnchorOption?: Value<string>;
  /**
   * The name of the parameter that is used for the anchor date configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName?: Value<string>;
}

/**
 * The sort configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-linechartsortconfiguration.html}
 **/
export interface QuickSightTemplateLineChartSortConfiguration {
  /**
   * The limit on the number of categories that are displayed in a line chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The limit on the number of lines that are displayed in a line chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightTemplateFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightTemplateItemsLimitConfiguration;
}

/**
 * The source analysis of the template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-templatesourceanalysis.html}
 **/
export interface QuickSightTemplateTemplateSourceAnalysis {
  /**
   * A structure containing information about the dataset references used as placeholders in the template.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataSetReference](aws-properties-quicksight-template-datasetreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetReferences: List<QuickSightTemplateDataSetReference>;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
}

/**
 * The period to date computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-periodtodatecomputation.html}
 **/
export interface QuickSightTemplatePeriodToDateComputation {
  /**
   * The time granularity setup of period to date computation. Choose from the following options:
   */
  PeriodTimeGranularity?: Value<string>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightTemplateMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightTemplateDimensionField;
  /**
   * The ID for a computation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationId: Value<string>;
  /**
   * The name of a computation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The display options for the visual tooltip.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-tooltipoptions.html}
 **/
export interface QuickSightTemplateTooltipOptions {
  /**
   * The selected type for the tooltip. Choose one of the following options:
   */
  SelectedTooltipType?: Value<string>;
  /**
   * Determines whether or not the tooltip is visible.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIDDEN | VISIBLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TooltipVisibility?: Value<string>;
  /**
   * The setup for the detailed tooltip. The tooltip setup is always saved. The display type is decided based on the tooltip type.
   *
   * _Required_: No
   *
   * _Type_: [FieldBasedTooltip](aws-properties-quicksight-template-fieldbasedtooltip.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldBasedTooltip?: QuickSightTemplateFieldBasedTooltip;
}

/**
 * The computation union that is used in an insight visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-computation.html}
 **/
export interface QuickSightTemplateComputation {
  /**
   * The period to `DataSetIdentifier` computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [PeriodToDateComputation](aws-properties-quicksight-template-periodtodatecomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodToDate?: QuickSightTemplatePeriodToDateComputation;
  /**
   * The growth rate computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [GrowthRateComputation](aws-properties-quicksight-template-growthratecomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrowthRate?: QuickSightTemplateGrowthRateComputation;
  /**
   * The top ranked and bottom ranked computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomRankedComputation](aws-properties-quicksight-template-topbottomrankedcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomRanked?: QuickSightTemplateTopBottomRankedComputation;
  /**
   * The total aggregation computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TotalAggregationComputation](aws-properties-quicksight-template-totalaggregationcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalAggregation?: QuickSightTemplateTotalAggregationComputation;
  /**
   * The forecast computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [ForecastComputation](aws-properties-quicksight-template-forecastcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Forecast?: QuickSightTemplateForecastComputation;
  /**
   * The maximum and minimum computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [MaximumMinimumComputation](aws-properties-quicksight-template-maximumminimumcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumMinimum?: QuickSightTemplateMaximumMinimumComputation;
  /**
   * The period over period computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [PeriodOverPeriodComputation](aws-properties-quicksight-template-periodoverperiodcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodOverPeriod?: QuickSightTemplatePeriodOverPeriodComputation;
  /**
   * The metric comparison computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [MetricComparisonComputation](aws-properties-quicksight-template-metriccomparisoncomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricComparison?: QuickSightTemplateMetricComparisonComputation;
  /**
   * The top movers and bottom movers computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomMoversComputation](aws-properties-quicksight-template-topbottommoverscomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomMovers?: QuickSightTemplateTopBottomMoversComputation;
  /**
   * The unique values computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [UniqueValuesComputation](aws-properties-quicksight-template-uniquevaluescomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UniqueValues?: QuickSightTemplateUniqueValuesComputation;
}

/**
 * A control from a date filter that is used to specify the relative date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-filterrelativedatetimecontrol.html}
 **/
export interface QuickSightTemplateFilterRelativeDateTimeControl {
  /**
   * The ID of the `FilterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControlId: Value<string>;
  /**
   * The display options of a control.
   *
   * _Required_: No
   *
   * _Type_: [RelativeDateTimeControlDisplayOptions](aws-properties-quicksight-template-relativedatetimecontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightTemplateRelativeDateTimeControlDisplayOptions;
  /**
   * The title of the `FilterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The source filter ID of the `FilterTextAreaControl`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFilterId: Value<string>;
}

/**
 * Determines the gradient stop configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-template-gradientstop.html}
 **/
export interface QuickSightTemplateGradientStop {
  /**
   * Determines gradient offset value.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GradientOffset: Value<number>;
  /**
   * Determines the data value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataValue?: Value<number>;
  /**
   * Determines the color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: Value<string>;
}
export interface QuickSightTemplateProperties {
  /**
   * A description of the current template version being created. This API operation creates the first version of the template. Every time `UpdateTemplate` is called, a new version is created. Each version of the template maintains a description of the version in the `VersionDescription` field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionDescription?: Value<string>;
  /**
   * The entity that you are using as a source when you create the template. In `SourceEntity`, you specify the type of object you're using as source: `SourceTemplate` for a template or `SourceAnalysis` for an analysis. Both of these require an Amazon Resource Name (ARN). For `SourceTemplate`, specify the ARN of the source template. For `SourceAnalysis`, specify the ARN of the source analysis. The `SourceTemplate` ARN can contain any AWS account and any Amazon QuickSight-supported AWS Region.
   *
   * Use the `DataSetReferences` entity within `SourceTemplate` or `SourceAnalysis` to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * _Required_: No
   *
   * _Type_: [TemplateSourceEntity](aws-properties-quicksight-template-templatesourceentity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceEntity?: QuickSightTemplateTemplateSourceEntity;
  /**
   * The ID for the AWS account that the group is in. You use the ID for the AWS account that contains your Amazon QuickSight account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `^[0-9]{12}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AwsAccountId: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [TemplateVersionDefinition](aws-properties-quicksight-template-templateversiondefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition?: QuickSightTemplateTemplateVersionDefinition;
  /**
   * A list of resource permissions to be set on the template.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourcePermission](aws-properties-quicksight-template-resourcepermission.md)
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<QuickSightTemplateResourcePermission>;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * An ID for the template that you want to create. This template is unique per AWS Region; in each AWS account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TemplateId: Value<string>;
  /**
   * A display name for the template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a template from an existing Amazon QuickSight analysis or template. You can use the resulting template to create a dashboard.
 *
 * A _template_ is an entity in Amazon QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-template.html}
 */
export interface QuickSightTemplateResource {
  Type: 'AWS::QuickSight::Template';
  Properties: QuickSightTemplateProperties;
}
