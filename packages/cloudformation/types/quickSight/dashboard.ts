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
 * The cell conditional formatting option for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellconditionalformatting.html}
 **/
export interface QuickSightDashboardTableCellConditionalFormatting {
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
   * _Type_: [TextConditionalFormat](aws-properties-quicksight-dashboard-textconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextFormat?: QuickSightDashboardTextConditionalFormat;
}

/**
 * The sort configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartsortconfiguration.html}
 **/
export interface QuickSightDashboardLineChartSortConfiguration {
  /**
   * The limit on the number of categories that are displayed in a line chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The limit on the number of lines that are displayed in a line chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}

/**
 * A grid layout to define the placement of sheet control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrollayout.html}
 **/
export interface QuickSightDashboardSheetControlLayout {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * _Required_: Yes
   *
   * _Type_: [SheetControlLayoutConfiguration](aws-properties-quicksight-dashboard-sheetcontrollayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightDashboardSheetControlLayoutConfiguration;
}

/**
 * The minimum and maximum setup for an axis display range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayminmaxrange.html}
 **/
export interface QuickSightDashboardAxisDisplayMinMaxRange {
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
 * The period to date computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-periodtodatecomputation.html}
 **/
export interface QuickSightDashboardPeriodToDateComputation {
  /**
   * The time granularity setup of period to date computation. Choose from the following options:
   */
  PeriodTimeGranularity?: Value<string>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightDashboardMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightDashboardDimensionField;
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
 * The maximum and minimum computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-maximumminimumcomputation.html}
 **/
export interface QuickSightDashboardMaximumMinimumComputation {
  /**
   * The type of computation. Choose one of the following options:
   */
  Type: Value<string>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightDashboardMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightDashboardDimensionField;
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
 * The custom icon content for the table link content configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldcustomiconcontent.html}
 **/
export interface QuickSightDashboardTableFieldCustomIconContent {
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
 * A scatter plot.
 *
 * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotvisual.html}
 **/
export interface QuickSightDashboardScatterPlotVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [ScatterPlotConfiguration](aws-properties-quicksight-dashboard-scatterplotconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardScatterPlotConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * A funnel chart.
 *
 * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartvisual.html}
 **/
export interface QuickSightDashboardFunnelChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [FunnelChartConfiguration](aws-properties-quicksight-dashboard-funnelchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardFunnelChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The arc axis range of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcaxisdisplayrange.html}
 **/
export interface QuickSightDashboardArcAxisDisplayRange {
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
 * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterlistcontrol.html}
 **/
export interface QuickSightDashboardParameterListControl {
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
   * _Type_: [ListControlDisplayOptions](aws-properties-quicksight-dashboard-listcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardListControlDisplayOptions;
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
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
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
   * _Type_: [ParameterSelectableValues](aws-properties-quicksight-dashboard-parameterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightDashboardParameterSelectableValues;
}

/**
 * The configuration for a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartconfiguration.html}
 **/
export interface QuickSightDashboardWaterfallChartConfiguration {
  /**
   * The options that determine the presentation of the category axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The sort configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartSortConfiguration](aws-properties-quicksight-dashboard-waterfallchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardWaterfallChartSortConfiguration;
  /**
   * The legend configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The data label configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The options that determine the presentation of the y-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The field well configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartFieldWells](aws-properties-quicksight-dashboard-waterfallchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardWaterfallChartFieldWells;
  /**
   * The options that determine the presentation of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartOptions](aws-properties-quicksight-dashboard-waterfallchartoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallChartOptions?: QuickSightDashboardWaterfallChartOptions;
  /**
   * The options that determine the presentation of the category axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The options that determine the presentation of the y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The visual palette configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
}

/**
 * The comparison display configuration of a KPI or gauge chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-comparisonconfiguration.html}
 **/
export interface QuickSightDashboardComparisonConfiguration {
  /**
   * The method of the comparison. Choose from the following options:
   */
  ComparisonMethod?: Value<string>;
  /**
   * The format of the comparison.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonFormatConfiguration](aws-properties-quicksight-dashboard-comparisonformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonFormat?: QuickSightDashboardComparisonFormatConfiguration;
}

/**
 * The dimension type field with categorical type columns..
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoricaldimensionfield.html}
 **/
export interface QuickSightDashboardCategoricalDimensionField {
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
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-dashboard-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardStringFormatConfiguration;
  /**
   * The column that is used in the `CategoricalDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * Sheet controls option.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrolsoption.html}
 **/
export interface QuickSightDashboardSheetControlsOption {
  /**
   * Visibility state.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `COLLAPSED | EXPANDED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibilityState?: Value<string>;
}

/**
 * The field well configuration of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardHistogramAggregatedFieldWells {
  /**
   * The value field wells of a histogram. Values are aggregated by `COUNT` or `DISTINCT_COUNT`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * The configuration for a `TableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconfiguration.html}
 **/
export interface QuickSightDashboardTableConfiguration {
  /**
   * The sort configuration for a `TableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TableSortConfiguration](aws-properties-quicksight-dashboard-tablesortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardTableSortConfiguration;
  /**
   * The paginated report options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TablePaginatedReportOptions](aws-properties-quicksight-dashboard-tablepaginatedreportoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedReportOptions?: QuickSightDashboardTablePaginatedReportOptions;
  /**
   * The table options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TableOptions](aws-properties-quicksight-dashboard-tableoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableOptions?: QuickSightDashboardTableOptions;
  /**
   * A collection of inline visualizations to display within a chart.
   *
   * _Required_: No
   *
   * _Type_: List of [TableInlineVisualization](aws-properties-quicksight-dashboard-tableinlinevisualization.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableInlineVisualizations?: List<QuickSightDashboardTableInlineVisualization>;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldWells](aws-properties-quicksight-dashboard-tablefieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardTableFieldWells;
  /**
   * The field options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldOptions](aws-properties-quicksight-dashboard-tablefieldoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldOptions?: QuickSightDashboardTableFieldOptions;
  /**
   * The total options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TotalOptions](aws-properties-quicksight-dashboard-totaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalOptions?: QuickSightDashboardTotalOptions;
}

/**
 * The configuration of loading animation in free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-loadinganimation.html}
 **/
export interface QuickSightDashboardLoadingAnimation {
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
 * The configuration of selected fields in the`CustomActionFilterOperation`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filteroperationselectedfieldsconfiguration.html}
 **/
export interface QuickSightDashboardFilterOperationSelectedFieldsConfiguration {
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
 * A list of custom filter values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customfilterlistconfiguration.html}
 **/
export interface QuickSightDashboardCustomFilterListConfiguration {
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
 * The options that determine the title styles for each small multiples panel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-paneltitleoptions.html}
 **/
export interface QuickSightDashboardPanelTitleOptions {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightDashboardFontConfiguration;
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
 * The minimum label of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-minimumlabeltype.html}
 **/
export interface QuickSightDashboardMinimumLabelType {
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
 * The conditional formatting for the progress bar of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiprogressbarconditionalformatting.html}
 **/
export interface QuickSightDashboardKPIProgressBarConditionalFormatting {
  /**
   * The conditional formatting of the progress bar's foreground color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForegroundColor?: QuickSightDashboardConditionalFormattingColor;
}

/**
 * Determines the gradient stop configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gradientstop.html}
 **/
export interface QuickSightDashboardGradientStop {
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

/**
 * Configuration options for the canvas of a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutcanvassizeoptions.html}
 **/
export interface QuickSightDashboardGridLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a grid layout.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutScreenCanvasSizeOptions](aws-properties-quicksight-dashboard-gridlayoutscreencanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScreenCanvasSizeOptions?: QuickSightDashboardGridLayoutScreenCanvasSizeOptions;
}

/**
 * The static data configuration of the reference line data configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinestaticdataconfiguration.html}
 **/
export interface QuickSightDashboardReferenceLineStaticDataConfiguration {
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
 * The options that determine the default settings of a free-form layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultfreeformlayoutconfiguration.html}
 **/
export interface QuickSightDashboardDefaultFreeFormLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: [FreeFormLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-freeformlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightDashboardFreeFormLayoutCanvasSizeOptions;
}

/**
 * A waterfall chart.
 *
 * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallvisual.html}
 **/
export interface QuickSightDashboardWaterfallVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [WaterfallChartConfiguration](aws-properties-quicksight-dashboard-waterfallchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardWaterfallChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The field well configuration of a scatter plot.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotfieldwells.html}
 **/
export interface QuickSightDashboardScatterPlotFieldWells {
  /**
   * The unaggregated field wells of a scatter plot. Scatter plots without a category field well have unaggregated field wells. The x and y-axes of these scatter plots are unaggregated.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotUnaggregatedFieldWells](aws-properties-quicksight-dashboard-scatterplotunaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotUnaggregatedFieldWells?: QuickSightDashboardScatterPlotUnaggregatedFieldWells;
  /**
   * The aggregated field wells of a scatter plot. Scatter plots that have a field in the category (group/color) field will have aggregated field wells. The x and y-axes of these scatter plots are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotCategoricallyAggregatedFieldWells](aws-properties-quicksight-dashboard-scatterplotcategoricallyaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: QuickSightDashboardScatterPlotCategoricallyAggregatedFieldWells;
}

/**
 * The options that determine the presentation of the data labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartdatalabeloptions.html}
 **/
export interface QuickSightDashboardFunnelChartDataLabelOptions {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelFontConfiguration?: QuickSightDashboardFontConfiguration;
}

/**
 * The field wells for a table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldwells.html}
 **/
export interface QuickSightDashboardTableFieldWells {
  /**
   * The unaggregated field well for the table.
   *
   * _Required_: No
   *
   * _Type_: [TableUnaggregatedFieldWells](aws-properties-quicksight-dashboard-tableunaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableUnaggregatedFieldWells?: QuickSightDashboardTableUnaggregatedFieldWells;
  /**
   * The aggregated field well for the table.
   *
   * _Required_: No
   *
   * _Type_: [TableAggregatedFieldWells](aws-properties-quicksight-dashboard-tableaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableAggregatedFieldWells?: QuickSightDashboardTableAggregatedFieldWells;
}

/**
 * Conditional formatting options of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconditionalformattingoption.html}
 **/
export interface QuickSightDashboardFilledMapConditionalFormattingOption {
  /**
   * The conditional formatting that determines the shape of the filled map.
   *
   * _Required_: Yes
   *
   * _Type_: [FilledMapShapeConditionalFormatting](aws-properties-quicksight-dashboard-filledmapshapeconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Shape: QuickSightDashboardFilledMapShapeConditionalFormatting;
}

/**
 * The table options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableoptions.html}
 **/
export interface QuickSightDashboardPivotTableOptions {
  /**
   * The table cell style of row field names.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowFieldNamesStyle?: QuickSightDashboardTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHeaderStyle?: QuickSightDashboardTableCellStyle;
  /**
   * The table cell style of the row headers.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowHeaderStyle?: QuickSightDashboardTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CellStyle?: QuickSightDashboardTableCellStyle;
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
   * _Type_: [RowAlternateColorOptions](aws-properties-quicksight-dashboard-rowalternatecoloroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowAlternateColorOptions?: QuickSightDashboardRowAlternateColorOptions;
}

/**
 * The field well configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartfieldwells.html}
 **/
export interface QuickSightDashboardWaterfallChartFieldWells {
  /**
   * The field well configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartAggregatedFieldWells](aws-properties-quicksight-dashboard-waterfallchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallChartAggregatedFieldWells?: QuickSightDashboardWaterfallChartAggregatedFieldWells;
}

/**
 * Permission for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-resourcepermission.html}
 **/
export interface QuickSightDashboardResourcePermission {
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
 * sort-configuration-description
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartsortconfiguration.html}
 **/
export interface QuickSightDashboardBarChartSortConfiguration {
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The sort configuration of color fields in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of values displayed in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The limit on the number of categories displayed in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The sort configuration of category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}

/**
 * The paginated report options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablepaginatedreportoptions.html}
 **/
export interface QuickSightDashboardTablePaginatedReportOptions {
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
 * The display options for the visual tooltip.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tooltipoptions.html}
 **/
export interface QuickSightDashboardTooltipOptions {
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
   * _Type_: [FieldBasedTooltip](aws-properties-quicksight-dashboard-fieldbasedtooltip.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldBasedTooltip?: QuickSightDashboardFieldBasedTooltip;
}

/**
 * The setup for the detailed tooltip.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldbasedtooltip.html}
 **/
export interface QuickSightDashboardFieldBasedTooltip {
  /**
   * The fields configuration in the tooltip.
   *
   * _Required_: No
   *
   * _Type_: List of [TooltipItem](aws-properties-quicksight-dashboard-tooltipitem.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TooltipFields?: List<QuickSightDashboardTooltipItem>;
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
 * The field well configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardSankeyDiagramAggregatedFieldWells {
  /**
   * The destination field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: List<QuickSightDashboardDimensionField>;
  /**
   * The source field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source?: List<QuickSightDashboardDimensionField>;
  /**
   * The weight field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: List<QuickSightDashboardMeasureField>;
}

/**
 * The configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconfiguration.html}
 **/
export interface QuickSightDashboardGaugeChartConfiguration {
  /**
   * The data label configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The field well configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartFieldWells](aws-properties-quicksight-dashboard-gaugechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardGaugeChartFieldWells;
  /**
   * The tooltip configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TooltipOptions?: QuickSightDashboardTooltipOptions;
  /**
   * The options that determine the presentation of the `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartOptions](aws-properties-quicksight-dashboard-gaugechartoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GaugeChartOptions?: QuickSightDashboardGaugeChartOptions;
  /**
   * The visual palette configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
}

/**
 * The forecast properties setup of a forecast in the line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timebasedforecastproperties.html}
 **/
export interface QuickSightDashboardTimeBasedForecastProperties {
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
 * The configuration of a body section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bodysectionconfiguration.html}
 **/
export interface QuickSightDashboardBodySectionConfiguration {
  /**
   * The configuration of content in a body section.
   *
   * _Required_: Yes
   *
   * _Type_: [BodySectionContent](aws-properties-quicksight-dashboard-bodysectioncontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: QuickSightDashboardBodySectionContent;
  /**
   * The style options of a body section.
   *
   * _Required_: No
   *
   * _Type_: [SectionStyle](aws-properties-quicksight-dashboard-sectionstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style?: QuickSightDashboardSectionStyle;
  /**
   * The configuration of a page break for a section.
   *
   * _Required_: No
   *
   * _Type_: [SectionPageBreakConfiguration](aws-properties-quicksight-dashboard-sectionpagebreakconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageBreakConfiguration?: QuickSightDashboardSectionPageBreakConfiguration;
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
 * The value input pf the numeric range filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericrangefiltervalue.html}
 **/
export interface QuickSightDashboardNumericRangeFilterValue {
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
 * The measure type field with date type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datemeasurefield.html}
 **/
export interface QuickSightDashboardDateMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [String](aws-properties-quicksight-dashboard-aggregationfunction.md)
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
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-dashboard-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardDateTimeFormatConfiguration;
  /**
   * The column that is used in the `DateMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The configuration of a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudchartconfiguration.html}
 **/
export interface QuickSightDashboardWordCloudChartConfiguration {
  /**
   * The sort configuration of a word cloud visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudSortConfiguration](aws-properties-quicksight-dashboard-wordcloudsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardWordCloudSortConfiguration;
  /**
   * The label options (label text, label visibility, and sort icon visibility) for the word cloud category.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudFieldWells](aws-properties-quicksight-dashboard-wordcloudfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardWordCloudFieldWells;
  /**
   * The options for a word cloud visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudOptions](aws-properties-quicksight-dashboard-wordcloudoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudOptions?: QuickSightDashboardWordCloudOptions;
}

/**
 * The configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramchartconfiguration.html}
 **/
export interface QuickSightDashboardSankeyDiagramChartConfiguration {
  /**
   * The sort configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramSortConfiguration](aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardSankeyDiagramSortConfiguration;
  /**
   * The data label configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The field well configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramFieldWells](aws-properties-quicksight-dashboard-sankeydiagramfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardSankeyDiagramFieldWells;
}

/**
 * The configuration that determines what the type of layout will be used on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-layoutconfiguration.html}
 **/
export interface QuickSightDashboardLayoutConfiguration {
  /**
   * A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: `FIXED` or `RESPONSIVE`.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutConfiguration](aws-properties-quicksight-dashboard-gridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GridLayout?: QuickSightDashboardGridLayoutConfiguration;
  /**
   * A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutConfiguration](aws-properties-quicksight-dashboard-freeformlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeFormLayout?: QuickSightDashboardFreeFormLayoutConfiguration;
  /**
   * A section based layout organizes visuals into multiple sections and has customized header, footer and page break.
   *
   * _Required_: No
   *
   * _Type_: [SectionBasedLayoutConfiguration](aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionBasedLayout?: QuickSightDashboardSectionBasedLayoutConfiguration;
}

/**
 * The field well configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartfieldwells.html}
 **/
export interface QuickSightDashboardGaugeChartFieldWells {
  /**
   * The target value field wells of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValues?: List<QuickSightDashboardMeasureField>;
  /**
   * The value field wells of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * The configuration of content in a body section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bodysectioncontent.html}
 **/
export interface QuickSightDashboardBodySectionContent {
  /**
   * The layout configuration of a body section.
   *
   * _Required_: No
   *
   * _Type_: [SectionLayoutConfiguration](aws-properties-quicksight-dashboard-sectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layout?: QuickSightDashboardSectionLayoutConfiguration;
}

/**
 * The configuration of a `BarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartconfiguration.html}
 **/
export interface QuickSightDashboardBarChartConfiguration {
  /**
   * The sort configuration of a `BarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [BarChartSortConfiguration](aws-properties-quicksight-dashboard-barchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardBarChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-dashboard-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightDashboardReferenceLine>;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-dashboard-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightDashboardSmallMultiplesOptions;
  /**
   * The orientation of the bars in a bar chart visual. There are two valid values in this structure:
   */
  Orientation?: Value<string>;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart value.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
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
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-dashboard-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightDashboardContributionAnalysisDefault>;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BarChartFieldWells](aws-properties-quicksight-dashboard-barchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardBarChartFieldWells;
  /**
   * The label display options (grid line, range, scale, axis step) for a bar chart value.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueAxis?: QuickSightDashboardAxisDisplayOptions;
}

/**
 * The metric comparison computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-metriccomparisoncomputation.html}
 **/
export interface QuickSightDashboardMetricComparisonComputation {
  /**
   * The field that is used in a metric comparison to value setup.
   *
   * _Required_: Yes
   *
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: QuickSightDashboardMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightDashboardDimensionField;
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
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromValue: QuickSightDashboardMeasureField;
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
 * The options for the canvas of a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutcanvassizeoptions.html}
 **/
export interface QuickSightDashboardSectionBasedLayoutCanvasSizeOptions {
  /**
   * The options for a paper canvas of a section-based layout.
   *
   * _Required_: No
   *
   * _Type_: [SectionBasedLayoutPaperCanvasSizeOptions](aws-properties-quicksight-dashboard-sectionbasedlayoutpapercanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaperCanvasSizeOptions?: QuickSightDashboardSectionBasedLayoutPaperCanvasSizeOptions;
}

/**
 * A list of selectable values that are used in a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterselectablevalues.html}
 **/
export interface QuickSightDashboardFilterSelectableValues {
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
 * Aggregated field wells of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardTreeMapAggregatedFieldWells {
  /**
   * The size field well of a tree map. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sizes?: List<QuickSightDashboardMeasureField>;
  /**
   * The color field well of a tree map. Values are grouped by aggregations based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightDashboardMeasureField>;
  /**
   * The group by field well of a tree map. Values are grouped based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<QuickSightDashboardDimensionField>;
}

/**
 * The conditional formatting for the text.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textconditionalformat.html}
 **/
export interface QuickSightDashboardTextConditionalFormat {
  /**
   * The conditional formatting for the text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  /**
   * The conditional formatting for the icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-dashboard-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightDashboardConditionalFormattingIcon;
  /**
   * The conditional formatting for the text background color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: QuickSightDashboardConditionalFormattingColor;
}

/**
 * The format of the comparison.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-comparisonformatconfiguration.html}
 **/
export interface QuickSightDashboardComparisonFormatConfiguration {
  /**
   * The number display format.
   *
   * _Required_: No
   *
   * _Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-dashboard-numberdisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberDisplayFormatConfiguration?: QuickSightDashboardNumberDisplayFormatConfiguration;
  /**
   * The percentage display format.
   *
   * _Required_: No
   *
   * _Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-dashboard-percentagedisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentageDisplayFormatConfiguration?: QuickSightDashboardPercentageDisplayFormatConfiguration;
}

/**
 * The options that determine the default settings for interactive layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultinteractivelayoutconfiguration.html}
 **/
export interface QuickSightDashboardDefaultInteractiveLayoutConfiguration {
  /**
   * The options that determine the default settings of a free-form layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultFreeFormLayoutConfiguration](aws-properties-quicksight-dashboard-defaultfreeformlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeForm?: QuickSightDashboardDefaultFreeFormLayoutConfiguration;
  /**
   * The options that determine the default settings for a grid layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultGridLayoutConfiguration](aws-properties-quicksight-dashboard-defaultgridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Grid?: QuickSightDashboardDefaultGridLayoutConfiguration;
}

/**
 * The options that determine the sizing of the canvas used in a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutscreencanvassizeoptions.html}
 **/
export interface QuickSightDashboardGridLayoutScreenCanvasSizeOptions {
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
 * A word cloud.
 *
 * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudvisual.html}
 **/
export interface QuickSightDashboardWordCloudVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [WordCloudChartConfiguration](aws-properties-quicksight-dashboard-wordcloudchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardWordCloudChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimepickercontroldisplayoptions.html}
 **/
export interface QuickSightDashboardDateTimePickerControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightDashboardLabelOptions;
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
 * The layout configuration of a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionlayoutconfiguration.html}
 **/
export interface QuickSightDashboardSectionLayoutConfiguration {
  /**
   * The free-form layout configuration of a section.
   *
   * _Required_: Yes
   *
   * _Type_: [FreeFormSectionLayoutConfiguration](aws-properties-quicksight-dashboard-freeformsectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeFormLayout: QuickSightDashboardFreeFormSectionLayoutConfiguration;
}

/**
 * The dimension type field with numerical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericaldimensionfield.html}
 **/
export interface QuickSightDashboardNumericalDimensionField {
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
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-dashboard-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardNumberFormatConfiguration;
  /**
   * The column that is used in the `NumericalDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The sort configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartsortconfiguration.html}
 **/
export interface QuickSightDashboardRadarChartSortConfiguration {
  /**
   * The color sort configuration of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The color items limit of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The category items limit for a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The category sort options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * A data set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datasetidentifierdeclaration.html}
 **/
export interface QuickSightDashboardDataSetIdentifierDeclaration {
  /**
   * The identifier of the data set, typically the data set's name.
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
  Identifier: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the data set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetArn: Value<string>;
}

/**
 * The field wells for a pivot table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldwells.html}
 **/
export interface QuickSightDashboardPivotTableFieldWells {
  /**
   * The aggregated field well for the pivot table.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableAggregatedFieldWells](aws-properties-quicksight-dashboard-pivottableaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PivotTableAggregatedFieldWells?: QuickSightDashboardPivotTableAggregatedFieldWells;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontroldisplayoptions.html}
 **/
export interface QuickSightDashboardListControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightDashboardLabelOptions;
  /**
   * The configuration of the search options in a list control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSearchOptions](aws-properties-quicksight-dashboard-listcontrolsearchoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SearchOptions?: QuickSightDashboardListControlSearchOptions;
  /**
   * The configuration of the `Select all` options in a list control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSelectAllOptions](aws-properties-quicksight-dashboard-listcontrolselectalloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectAllOptions?: QuickSightDashboardListControlSelectAllOptions;
}

/**
 * The text format for a subtitle.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-longformattext.html}
 **/
export interface QuickSightDashboardLongFormatText {
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
 * The option that specifies individual data values for labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathlabeltype.html}
 **/
export interface QuickSightDashboardDataPathLabelType {
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
 * The side border options for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablesideborderoptions.html}
 **/
export interface QuickSightDashboardTableSideBorderOptions {
  /**
   * The table border options of the left border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Left?: QuickSightDashboardTableBorderOptions;
  /**
   * The table border options of the top border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Top?: QuickSightDashboardTableBorderOptions;
  /**
   * The table border options of the inner horizontal border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InnerHorizontal?: QuickSightDashboardTableBorderOptions;
  /**
   * The table border options of the right border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Right?: QuickSightDashboardTableBorderOptions;
  /**
   * The table border options of the bottom border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bottom?: QuickSightDashboardTableBorderOptions;
  /**
   * The table border options of the inner vertical border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InnerVertical?: QuickSightDashboardTableBorderOptions;
}

/**
 * The aggregated field wells of a bar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardBarChartAggregatedFieldWells {
  /**
   * The category (y-axis) field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightDashboardDimensionField>;
  /**
   * The color (group/color) field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightDashboardDimensionField>;
  /**
   * The value field wells of a bar chart. Values are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
  /**
   * The small multiples field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightDashboardDimensionField>;
}

/**
 * A parameter declaration for the `Integer` data type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integervaluewhenunsetconfiguration.html}
 **/
export interface QuickSightDashboardIntegerValueWhenUnsetConfiguration {
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
 * The configuration options that determine how missing data is treated during the rendering of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-missingdataconfiguration.html}
 **/
export interface QuickSightDashboardMissingDataConfiguration {
  /**
   * The treatment option that determines how missing data should be rendered. Choose from the following options:
   */
  TreatmentOption?: Value<string>;
}

/**
 * The menu options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualmenuoption.html}
 **/
export interface QuickSightDashboardVisualMenuOption {
  /**
   * The availaiblity status of a visual's menu options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * The label options for a chart axis. You must specify the field that the label is targeted to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislabeloptions.html}
 **/
export interface QuickSightDashboardAxisLabelOptions {
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
   * _Type_: [AxisLabelReferenceOptions](aws-properties-quicksight-dashboard-axislabelreferenceoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyTo?: QuickSightDashboardAxisLabelReferenceOptions;
  /**
   * The font configuration of the axis label.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightDashboardFontConfiguration;
}

/**
 * A parameter declaration for the `Decimal` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalparameterdeclaration.html}
 **/
export interface QuickSightDashboardDecimalParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-dashboard-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightDashboardMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [DecimalDefaultValues](aws-properties-quicksight-dashboard-decimaldefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightDashboardDecimalDefaultValues;
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
   * _Type_: [DecimalValueWhenUnsetConfiguration](aws-properties-quicksight-dashboard-decimalvaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightDashboardDecimalValueWhenUnsetConfiguration;
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
 * Determines the color that is applied to a particular data value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datacolor.html}
 **/
export interface QuickSightDashboardDataColor {
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
 * The aggregated field well configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardRadarChartAggregatedFieldWells {
  /**
   * The aggregated field well categories of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightDashboardDimensionField>;
  /**
   * The color that are assigned to the aggregated field wells of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: List<QuickSightDashboardDimensionField>;
  /**
   * The values that are assigned to the aggregated field wells of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * The series item configuration of a line chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-seriesitem.html}
 **/
export interface QuickSightDashboardSeriesItem {
  /**
   * The field series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [FieldSeriesItem](aws-properties-quicksight-dashboard-fieldseriesitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSeriesItem?: QuickSightDashboardFieldSeriesItem;
  /**
   * The data field series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [DataFieldSeriesItem](aws-properties-quicksight-dashboard-datafieldseriesitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataFieldSeriesItem?: QuickSightDashboardDataFieldSeriesItem;
}

/**
 * A control to display a dropdown list with buttons that are used to select a single value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdropdowncontrol.html}
 **/
export interface QuickSightDashboardParameterDropDownControl {
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
   * _Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-dashboard-dropdowncontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardDropDownControlDisplayOptions;
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
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
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
   * _Type_: [ParameterSelectableValues](aws-properties-quicksight-dashboard-parameterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightDashboardParameterSelectableValues;
}

/**
 * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-explicithierarchy.html}
 **/
export interface QuickSightDashboardExplicitHierarchy {
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
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-dashboard-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightDashboardDrillDownFilter>;
  /**
   * The list of columns that define the explicit hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightDashboardColumnIdentifier>;
}

/**
 * The configuration of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotconfiguration.html}
 **/
export interface QuickSightDashboardScatterPlotConfiguration {
  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotFieldWells](aws-properties-quicksight-dashboard-scatterplotfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardScatterPlotFieldWells;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
}

/**
 * A control to display a text box that is used to enter a single entry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtertextfieldcontrol.html}
 **/
export interface QuickSightDashboardFilterTextFieldControl {
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
   * _Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-dashboard-textfieldcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardTextFieldControlDisplayOptions;
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
 * Formatting configuration for gradient color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattinggradientcolor.html}
 **/
export interface QuickSightDashboardConditionalFormattingGradientColor {
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
   * _Type_: [GradientColor](aws-properties-quicksight-dashboard-gradientcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color: QuickSightDashboardGradientColor;
}

/**
 * The options that determine the bin count of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-bincountoptions.html}
 **/
export interface QuickSightDashboardBinCountOptions {
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
 * The conditional formatting of a table row.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablerowconditionalformatting.html}
 **/
export interface QuickSightDashboardTableRowConditionalFormatting {
  /**
   * The conditional formatting color (solid, gradient) of the text for a table row.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  /**
   * The conditional formatting color (solid, gradient) of the background for a table row.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: QuickSightDashboardConditionalFormattingColor;
}

/**
 * The options that determine the presentation of histogram bins.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogrambinoptions.html}
 **/
export interface QuickSightDashboardHistogramBinOptions {
  /**
   * The options that determine the bin width of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [BinWidthOptions](aws-properties-quicksight-dashboard-binwidthoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinWidth?: QuickSightDashboardBinWidthOptions;
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
   * _Type_: [BinCountOptions](aws-properties-quicksight-dashboard-bincountoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinCount?: QuickSightDashboardBinCountOptions;
}

/**
 * The option that determines the text display weight, or boldness.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontweight.html}
 **/
export interface QuickSightDashboardFontWeight {
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
 * The options for a table field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldoption.html}
 **/
export interface QuickSightDashboardTableFieldOption {
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
   * _Type_: [TableFieldURLConfiguration](aws-properties-quicksight-dashboard-tablefieldurlconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URLStyling?: QuickSightDashboardTableFieldURLConfiguration;
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
 * Dashboard version.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardversion.html}
 **/
export interface QuickSightDashboardDashboardVersion {
  /**
   * The HTTP status of the request.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CREATION_FAILED | CREATION_IN_PROGRESS | CREATION_SUCCESSFUL | DELETED | UPDATE_FAILED | UPDATE_IN_PROGRESS | UPDATE_SUCCESSFUL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Errors associated with this dashboard version.
   *
   * _Required_: No
   *
   * _Type_: List of [DashboardError](aws-properties-quicksight-dashboard-dashboarderror.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Errors?: List<QuickSightDashboardDashboardError>;
  /**
   * The time that this dashboard version was created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreatedTime?: Value<string>;
  /**
   * Description.
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
   * The Amazon Resource Numbers (ARNs) for the datasets that are associated with this version of the dashboard.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetArns?: List<Value<string>>;
  /**
   * The ARN of the theme associated with a version of the dashboard.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThemeArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
  /**
   * Source entity ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceEntityArn?: Value<string>;
  /**
   * Version number for this version of the dashboard.
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
   * _Type_: List of [Sheet](aws-properties-quicksight-dashboard-sheet.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sheets?: List<QuickSightDashboardSheet>;
}

/**
 * Determines the gradient color settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gradientcolor.html}
 **/
export interface QuickSightDashboardGradientColor {
  /**
   * The list of gradient color stops.
   *
   * _Required_: No
   *
   * _Type_: List of [GradientStop](aws-properties-quicksight-dashboard-gradientstop.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stops?: List<QuickSightDashboardGradientStop>;
}

/**
 * The conditional formatting of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconditionalformatting.html}
 **/
export interface QuickSightDashboardKPIConditionalFormatting {
  /**
   * The conditional formatting options of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [KPIConditionalFormattingOption](aws-properties-quicksight-dashboard-kpiconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightDashboardKPIConditionalFormattingOption>;
}

/**
 * The display options for the axis label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayoptions.html}
 **/
export interface QuickSightDashboardAxisDisplayOptions {
  /**
   * The data options for an axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDataOptions](aws-properties-quicksight-dashboard-axisdataoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataOptions?: QuickSightDashboardAxisDataOptions;
  /**
   * The tick label options of an axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisTickLabelOptions](aws-properties-quicksight-dashboard-axisticklabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TickLabelOptions?: QuickSightDashboardAxisTickLabelOptions;
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
   * _Type_: [ScrollBarOptions](aws-properties-quicksight-dashboard-scrollbaroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScrollbarOptions?: QuickSightDashboardScrollBarOptions;
}

/**
 * A `CategoryFilter` filters text values.
 *
 * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfilter.html}
 **/
export interface QuickSightDashboardCategoryFilter {
  /**
   * The configuration for a `CategoryFilter`.
   *
   * _Required_: Yes
   *
   * _Type_: [CategoryFilterConfiguration](aws-properties-quicksight-dashboard-categoryfilterconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightDashboardCategoryFilterConfiguration;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * Determines the custom condition for an icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcustomiconcondition.html}
 **/
export interface QuickSightDashboardConditionalFormattingCustomIconCondition {
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
   * _Type_: [ConditionalFormattingIconDisplayConfiguration](aws-properties-quicksight-dashboard-conditionalformattingicondisplayconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayConfiguration?: QuickSightDashboardConditionalFormattingIconDisplayConfiguration;
  /**
   * Custom icon options for an icon set.
   *
   * _Required_: Yes
   *
   * _Type_: [ConditionalFormattingCustomIconOptions](aws-properties-quicksight-dashboard-conditionalformattingcustomiconoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconOptions: QuickSightDashboardConditionalFormattingCustomIconOptions;
}

/**
 * The image configuration of a table field URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldimageconfiguration.html}
 **/
export interface QuickSightDashboardTableFieldImageConfiguration {
  /**
   * The sizing options for the table image configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableCellImageSizingConfiguration](aws-properties-quicksight-dashboard-tablecellimagesizingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizingOptions?: QuickSightDashboardTableCellImageSizingConfiguration;
}

/**
 * A control from a date filter that is used to specify date and time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterdatetimepickercontrol.html}
 **/
export interface QuickSightDashboardFilterDateTimePickerControl {
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
   * _Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-dashboard-datetimepickercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardDateTimePickerControlDisplayOptions;
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
 * An object, structure, or sub-structure of an analysis, template, or dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-entity.html}
 **/
export interface QuickSightDashboardEntity {
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
 * The value label configuration of the label in a reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinevaluelabelconfiguration.html}
 **/
export interface QuickSightDashboardReferenceLineValueLabelConfiguration {
  /**
   * The format configuration of the value label.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-dashboard-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
  /**
   * The relative position of the value label. Choose one of the following options:
   */
  RelativePosition?: Value<string>;
}

/**
 * The visual display options for a data zoom scroll bar.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scrollbaroptions.html}
 **/
export interface QuickSightDashboardScrollBarOptions {
  /**
   * The visibility range for the data zoom scroll bar.
   *
   * _Required_: No
   *
   * _Type_: [VisibleRangeOptions](aws-properties-quicksight-dashboard-visiblerangeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibleRange?: QuickSightDashboardVisibleRangeOptions;
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
 * Formatting configuration for icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingiconset.html}
 **/
export interface QuickSightDashboardConditionalFormattingIconSet {
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
 * The aggregated field wells of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardHeatMapAggregatedFieldWells {
  /**
   * The values field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
  /**
   * The columns field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<QuickSightDashboardDimensionField>;
  /**
   * The rows field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rows?: List<QuickSightDashboardDimensionField>;
}

/**
 * The sort configuration for a `TableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablesortconfiguration.html}
 **/
export interface QuickSightDashboardTableSortConfiguration {
  /**
   * The field sort options for rows in the table.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The pagination configuration (page size, page number) for the table.
   *
   * _Required_: No
   *
   * _Type_: [PaginationConfiguration](aws-properties-quicksight-dashboard-paginationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginationConfiguration?: QuickSightDashboardPaginationConfiguration;
}

/**
 * The aggregated field wells of a word cloud.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardWordCloudAggregatedFieldWells {
  /**
   * The group by field well of a word cloud. Values are grouped by group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightDashboardDimensionField>;
  /**
   * The size field well of a word cloud. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightDashboardMeasureField>;
}

/**
 * The field options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldoptions.html}
 **/
export interface QuickSightDashboardPivotTableFieldOptions {
  /**
   * The data path options for the pivot table field options.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableDataPathOption](aws-properties-quicksight-dashboard-pivottabledatapathoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathOptions?: List<QuickSightDashboardPivotTableDataPathOption>;
  /**
   * The selected field options for the pivot table field options.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableFieldOption](aws-properties-quicksight-dashboard-pivottablefieldoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldOptions?: List<QuickSightDashboardPivotTableFieldOption>;
}

/**
 * The background style configuration of a free-form layout element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelementbackgroundstyle.html}
 **/
export interface QuickSightDashboardFreeFormLayoutElementBackgroundStyle {
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
 * Dataset reference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datasetreference.html}
 **/
export interface QuickSightDashboardDataSetReference {
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
 * The configuration of a `GeospatialMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapconfiguration.html}
 **/
export interface QuickSightDashboardGeospatialMapConfiguration {
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The map style options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-dashboard-geospatialmapstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapStyleOptions?: QuickSightDashboardGeospatialMapStyleOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapFieldWells](aws-properties-quicksight-dashboard-geospatialmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardGeospatialMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The window options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialWindowOptions](aws-properties-quicksight-dashboard-geospatialwindowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowOptions?: QuickSightDashboardGeospatialWindowOptions;
  /**
   * The point style options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialPointStyleOptions](aws-properties-quicksight-dashboard-geospatialpointstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PointStyleOptions?: QuickSightDashboardGeospatialPointStyleOptions;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
}

/**
 * The map style options of the geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapstyleoptions.html}
 **/
export interface QuickSightDashboardGeospatialMapStyleOptions {
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
 * The unaggregated field well for the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableunaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardTableUnaggregatedFieldWells {
  /**
   * The values field well for a pivot table. Values are unaggregated for an unaggregated table.
   *
   * _Required_: No
   *
   * _Type_: List of [UnaggregatedField](aws-properties-quicksight-dashboard-unaggregatedfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardUnaggregatedField>;
}

/**
 * The selected field options for the pivot table field options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldoption.html}
 **/
export interface QuickSightDashboardPivotTableFieldOption {
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
 * A string parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringparameter.html}
 **/
export interface QuickSightDashboardStringParameter {
  /**
   * The values of a string parameter.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
  /**
   * A display name for a string parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The set parameter operation that sets parameters in custom action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionsetparametersoperation.html}
 **/
export interface QuickSightDashboardCustomActionSetParametersOperation {
  /**
   * The parameter that determines the value configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of [SetParameterValueConfiguration](aws-properties-quicksight-dashboard-setparametervalueconfiguration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValueConfigurations: List<QuickSightDashboardSetParameterValueConfiguration>;
}

/**
 * The field wells of a `GeospatialMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapfieldwells.html}
 **/
export interface QuickSightDashboardGeospatialMapFieldWells {
  /**
   * The aggregated field well for a geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapAggregatedFieldWells](aws-properties-quicksight-dashboard-geospatialmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeospatialMapAggregatedFieldWells?: QuickSightDashboardGeospatialMapAggregatedFieldWells;
}

/**
 * A sheet is an object that contains a set of visuals that are viewed together on one page in a paginated report. Every analysis and dashboard must contain at least one sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetdefinition.html}
 **/
export interface QuickSightDashboardSheetDefinition {
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
   * _Type_: List of [ParameterControl](aws-properties-quicksight-dashboard-parametercontrol.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControls?: List<QuickSightDashboardParameterControl>;
  /**
   * The text boxes that are on a sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetTextBox](aws-properties-quicksight-dashboard-sheettextbox.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextBoxes?: List<QuickSightDashboardSheetTextBox>;
  /**
   * Layouts define how the components of a sheet are arranged.
   *
   * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Layout](aws-properties-quicksight-dashboard-layout.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layouts?: List<QuickSightDashboardLayout>;
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
   * _Type_: List of [FilterControl](aws-properties-quicksight-dashboard-filtercontrol.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControls?: List<QuickSightDashboardFilterControl>;
  /**
   * The control layouts of the sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetControlLayout](aws-properties-quicksight-dashboard-sheetcontrollayout.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetControlLayouts?: List<QuickSightDashboardSheetControlLayout>;
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
   * _Type_: List of [Visual](aws-properties-quicksight-dashboard-visual.md)
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visuals?: List<QuickSightDashboardVisual>;
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
 * The subtotal options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-subtotaloptions.html}
 **/
export interface QuickSightDashboardSubtotalOptions {
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
   * _Type_: List of [PivotTableFieldSubtotalOptions](aws-properties-quicksight-dashboard-pivottablefieldsubtotaloptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLevelOptions?: List<QuickSightDashboardPivotTableFieldSubtotalOptions>;
  /**
   * The cell styling options for the subtotals of value cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueCellStyle?: QuickSightDashboardTableCellStyle;
  /**
   * The cell styling options for the subtotal cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightDashboardTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricHeaderCellStyle?: QuickSightDashboardTableCellStyle;
}

/**
 * Provides the forecast to meet the target for a particular date range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-whatifrangescenario.html}
 **/
export interface QuickSightDashboardWhatIfRangeScenario {
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
 * A text box.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheettextbox.html}
 **/
export interface QuickSightDashboardSheetTextBox {
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
 * The sort configuration of a `BoxPlotVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotsortconfiguration.html}
 **/
export interface QuickSightDashboardBoxPlotSortConfiguration {
  /**
   * The sort configuration of a group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The pagination configuration of a table visual or box plot.
   *
   * _Required_: No
   *
   * _Type_: [PaginationConfiguration](aws-properties-quicksight-dashboard-paginationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginationConfiguration?: QuickSightDashboardPaginationConfiguration;
}

/**
 * An integer parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerparameter.html}
 **/
export interface QuickSightDashboardIntegerParameter {
  /**
   * The values for the integer parameter.
   *
   * _Required_: Yes
   *
   * _Type_: List of Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<number>>;
  /**
   * The name of the integer parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The value of a time range filter.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangefiltervalue.html}
 **/
export interface QuickSightDashboardTimeRangeFilterValue {
  /**
   * The rolling date input value.
   *
   * _Required_: No
   *
   * _Type_: [RollingDateConfiguration](aws-properties-quicksight-dashboard-rollingdateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RollingDate?: QuickSightDashboardRollingDateConfiguration;
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
 * The default values of the `DateTimeParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimedefaultvalues.html}
 **/
export interface QuickSightDashboardDateTimeDefaultValues {
  /**
   * The rolling date of the `DataTimeDefaultValues`. The date is determined from the dataset based on input expression.
   *
   * _Required_: No
   *
   * _Type_: [RollingDateConfiguration](aws-properties-quicksight-dashboard-rollingdateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RollingDate?: QuickSightDashboardRollingDateConfiguration;
  /**
   * The dynamic value of the `DataTimeDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-dashboard-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
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
 * An insight visual.
 *
 * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-insightvisual.html}
 **/
export interface QuickSightDashboardInsightVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
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
   * _Type_: [InsightConfiguration](aws-properties-quicksight-dashboard-insightconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightConfiguration?: QuickSightDashboardInsightConfiguration;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}

/**
 * The sort configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration.html}
 **/
export interface QuickSightDashboardSankeyDiagramSortConfiguration {
  /**
   * The sort configuration of the weight fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of source nodes that are displayed in a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The limit on the number of destination nodes that are displayed in a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
}

/**
 * The options that determine the thousands separator configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-thousandseparatoroptions.html}
 **/
export interface QuickSightDashboardThousandSeparatorOptions {
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
 * The conditional formatting for the primary value of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiprimaryvalueconditionalformatting.html}
 **/
export interface QuickSightDashboardKPIPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value's text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  /**
   * The conditional formatting of the primary value's icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-dashboard-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightDashboardConditionalFormattingIcon;
}

/**
 * The configuration of a header or footer section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-headerfootersectionconfiguration.html}
 **/
export interface QuickSightDashboardHeaderFooterSectionConfiguration {
  /**
   * The layout configuration of the header or footer section.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionLayoutConfiguration](aws-properties-quicksight-dashboard-sectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layout: QuickSightDashboardSectionLayoutConfiguration;
  /**
   * The style options of a header or footer section.
   *
   * _Required_: No
   *
   * _Type_: [SectionStyle](aws-properties-quicksight-dashboard-sectionstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style?: QuickSightDashboardSectionStyle;
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
 * The options that determine the currency display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-currencydisplayformatconfiguration.html}
 **/
export interface QuickSightDashboardCurrencyDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-dashboard-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightDashboardNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-dashboard-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightDashboardDecimalPlacesConfiguration;
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
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-dashboard-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
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
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-dashboard-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightDashboardNumericSeparatorConfiguration;
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
 * Dashboard error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboarderror.html}
 **/
export interface QuickSightDashboardDashboardError {
  /**
   * Type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACCESS_DENIED | COLUMN_GEOGRAPHIC_ROLE_MISMATCH | COLUMN_REPLACEMENT_MISSING | COLUMN_TYPE_MISMATCH | DATA_SET_NOT_FOUND | INTERNAL_FAILURE | PARAMETER_NOT_FOUND | PARAMETER_TYPE_INVALID | PARAMETER_VALUE_INCOMPATIBLE | SOURCE_NOT_FOUND`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * Message.
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
   * Lists the violated entities that caused the dashboard error.
   *
   * _Required_: No
   *
   * _Type_: List of [Entity](aws-properties-quicksight-dashboard-entity.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ViolatedEntities?: List<QuickSightDashboardEntity>;
}

/**
 * The point style of the geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialpointstyleoptions.html}
 **/
export interface QuickSightDashboardGeospatialPointStyleOptions {
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
   * _Type_: [ClusterMarkerConfiguration](aws-properties-quicksight-dashboard-clustermarkerconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterMarkerConfiguration?: QuickSightDashboardClusterMarkerConfiguration;
}

/**
 * The configuration of a page break after a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionafterpagebreak.html}
 **/
export interface QuickSightDashboardSectionAfterPageBreak {
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
 * The configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartconfiguration.html}
 **/
export interface QuickSightDashboardRadarChartConfiguration {
  /**
   * The sort configuration of a `RadarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartSortConfiguration](aws-properties-quicksight-dashboard-radarchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardRadarChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
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
   * _Type_: [RadarChartSeriesSettings](aws-properties-quicksight-dashboard-radarchartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseSeriesSettings?: QuickSightDashboardRadarChartSeriesSettings;
  /**
   * The color label options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The category label options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
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
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The field well configuration of a `RadarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartFieldWells](aws-properties-quicksight-dashboard-radarchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardRadarChartFieldWells;
  /**
   * The color axis of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorAxis?: QuickSightDashboardAxisDisplayOptions;
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
 * The options that determine the number display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numberdisplayformatconfiguration.html}
 **/
export interface QuickSightDashboardNumberDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-dashboard-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightDashboardNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-dashboard-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightDashboardDecimalPlacesConfiguration;
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
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-dashboard-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
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
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-dashboard-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightDashboardNumericSeparatorConfiguration;
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
 * The options for the legend setup of a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-legendoptions.html}
 **/
export interface QuickSightDashboardLegendOptions {
  /**
   * The positions for the legend. Choose one of the following options:
   */
  Position?: Value<string>;
  /**
   * The custom title for the legend.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardLabelOptions;
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
 * The field wells of a `FilledMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapfieldwells.html}
 **/
export interface QuickSightDashboardFilledMapFieldWells {
  /**
   * The aggregated field well of the filled map.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapAggregatedFieldWells](aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilledMapAggregatedFieldWells?: QuickSightDashboardFilledMapAggregatedFieldWells;
}

/**
 * The data path that needs to be sorted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathvalue.html}
 **/
export interface QuickSightDashboardDataPathValue {
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
 * The growth rate computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-growthratecomputation.html}
 **/
export interface QuickSightDashboardGrowthRateComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightDashboardMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightDashboardDimensionField;
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
 * Determines the row alternate color options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rowalternatecoloroptions.html}
 **/
export interface QuickSightDashboardRowAlternateColorOptions {
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
 * A list of filter configurations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterlistconfiguration.html}
 **/
export interface QuickSightDashboardFilterListConfiguration {
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
 * The configuration of a `BoxPlotVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotchartconfiguration.html}
 **/
export interface QuickSightDashboardBoxPlotChartConfiguration {
  /**
   * The sort configuration of a `BoxPlotVisual`.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotSortConfiguration](aws-properties-quicksight-dashboard-boxplotsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardBoxPlotSortConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-dashboard-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightDashboardReferenceLine>;
  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) of a box plot value.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility and sort Icon visibility) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotFieldWells](aws-properties-quicksight-dashboard-boxplotfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardBoxPlotFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The box plot chart options for a box plot visual
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotOptions](aws-properties-quicksight-dashboard-boxplotoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotOptions?: QuickSightDashboardBoxPlotOptions;
  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
}

/**
 * The filter operation that filters data included in a visual or in an entire sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionfilteroperation.html}
 **/
export interface QuickSightDashboardCustomActionFilterOperation {
  /**
   * The configuration that chooses the fields to be filtered.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterOperationSelectedFieldsConfiguration](aws-properties-quicksight-dashboard-filteroperationselectedfieldsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldsConfiguration: QuickSightDashboardFilterOperationSelectedFieldsConfiguration;
  /**
   * The configuration that chooses the target visuals to be filtered.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterOperationTargetVisualsConfiguration](aws-properties-quicksight-dashboard-filteroperationtargetvisualsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetVisualsConfiguration: QuickSightDashboardFilterOperationTargetVisualsConfiguration;
}

/**
 * With a `Filter`, you can remove portions of data from a particular visual or view.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filter.html}
 **/
export interface QuickSightDashboardFilter {
  /**
   * A `NumericEqualityFilter` filters numeric values that equal or do not equal a given numeric value.
   *
   * _Required_: No
   *
   * _Type_: [NumericEqualityFilter](aws-properties-quicksight-dashboard-numericequalityfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericEqualityFilter?: QuickSightDashboardNumericEqualityFilter;
  /**
   * A `NumericRangeFilter` filters numeric values that are either inside or outside a given numeric range.
   *
   * _Required_: No
   *
   * _Type_: [NumericRangeFilter](aws-properties-quicksight-dashboard-numericrangefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericRangeFilter?: QuickSightDashboardNumericRangeFilter;
  /**
   * A `TimeRangeFilter` filters date-time values that are either inside or outside a given date/time range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilter](aws-properties-quicksight-dashboard-timerangefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeRangeFilter?: QuickSightDashboardTimeRangeFilter;
  /**
   * A `RelativeDatesFilter` filters date values that are relative to a given date.
   *
   * _Required_: No
   *
   * _Type_: [RelativeDatesFilter](aws-properties-quicksight-dashboard-relativedatesfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelativeDatesFilter?: QuickSightDashboardRelativeDatesFilter;
  /**
   * A `TopBottomFilter` filters data to the top or bottom values for a given column.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomFilter](aws-properties-quicksight-dashboard-topbottomfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomFilter?: QuickSightDashboardTopBottomFilter;
  /**
   * A `TimeEqualityFilter` filters date-time values that equal or do not equal a given date/time value.
   *
   * _Required_: No
   *
   * _Type_: [TimeEqualityFilter](aws-properties-quicksight-dashboard-timeequalityfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeEqualityFilter?: QuickSightDashboardTimeEqualityFilter;
  /**
   * A `CategoryFilter` filters text values.
   *
   * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CategoryFilter](aws-properties-quicksight-dashboard-categoryfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryFilter?: QuickSightDashboardCategoryFilter;
}

/**
 * The drill down filter for the column hierarchies.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-drilldownfilter.html}
 **/
export interface QuickSightDashboardDrillDownFilter {
  /**
   * The numeric equality type drill down filter. This filter is used for number type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericEqualityDrillDownFilter](aws-properties-quicksight-dashboard-numericequalitydrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericEqualityFilter?: QuickSightDashboardNumericEqualityDrillDownFilter;
  /**
   * The time range drill down filter. This filter is used for date time columns.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeDrillDownFilter](aws-properties-quicksight-dashboard-timerangedrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeRangeFilter?: QuickSightDashboardTimeRangeDrillDownFilter;
  /**
   * The category type drill down filter. This filter is used for string type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoryDrillDownFilter](aws-properties-quicksight-dashboard-categorydrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryFilter?: QuickSightDashboardCategoryDrillDownFilter;
}

/**
 * The configuration that determines the elements and canvas size options of sheet control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetcontrollayoutconfiguration.html}
 **/
export interface QuickSightDashboardSheetControlLayoutConfiguration {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutConfiguration](aws-properties-quicksight-dashboard-gridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GridLayout?: QuickSightDashboardGridLayoutConfiguration;
}

/**
 * The aggregated field well for the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardTableAggregatedFieldWells {
  /**
   * The group by field well for a pivot table. Values are grouped by group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightDashboardDimensionField>;
  /**
   * The values field well for a pivot table. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * The data path options for the pivot table field options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottabledatapathoption.html}
 **/
export interface QuickSightDashboardPivotTableDataPathOption {
  /**
   * The list of data path values for the data path options.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataPathValue](aws-properties-quicksight-dashboard-datapathvalue.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathList: List<QuickSightDashboardDataPathValue>;
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
 * A histogram.
 *
 * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramvisual.html}
 **/
export interface QuickSightDashboardHistogramVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [HistogramConfiguration](aws-properties-quicksight-dashboard-histogramconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardHistogramConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}

/**
 * The default values of the `StringParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringdefaultvalues.html}
 **/
export interface QuickSightDashboardStringDefaultValues {
  /**
   * The dynamic value of the `StringDefaultValues`. Different defaults displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-dashboard-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
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
 * The color map that determines the color options for a particular element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathcolor.html}
 **/
export interface QuickSightDashboardDataPathColor {
  /**
   * The element that the color needs to be applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [DataPathValue](aws-properties-quicksight-dashboard-datapathvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Element: QuickSightDashboardDataPathValue;
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
 * The field well configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartfieldwells.html}
 **/
export interface QuickSightDashboardLineChartFieldWells {
  /**
   * The field well configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartAggregatedFieldWells](aws-properties-quicksight-dashboard-linechartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineChartAggregatedFieldWells?: QuickSightDashboardLineChartAggregatedFieldWells;
}

/**
 * The axis sort options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualaxissortoption.html}
 **/
export interface QuickSightDashboardVisualAxisSortOption {
  /**
   * The availaiblity status of a visual's axis sort options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-donutcenteroptions.html}
 **/
export interface QuickSightDashboardDonutCenterOptions {
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
 * A key performance indicator (KPI).
 *
 * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpivisual.html}
 **/
export interface QuickSightDashboardKPIVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIConditionalFormatting](aws-properties-quicksight-dashboard-kpiconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightDashboardKPIConditionalFormatting;
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
   * _Type_: [KPIConfiguration](aws-properties-quicksight-dashboard-kpiconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardKPIConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The configuration for a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration.html}
 **/
export interface QuickSightDashboardSectionBasedLayoutConfiguration {
  /**
   * The options for the canvas of a section-based layout.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionBasedLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-sectionbasedlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightDashboardSectionBasedLayoutCanvasSizeOptions;
  /**
   * A list of footer section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-dashboard-headerfootersectionconfiguration.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FooterSections: List<QuickSightDashboardHeaderFooterSectionConfiguration>;
  /**
   * A list of body section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [BodySectionConfiguration](aws-properties-quicksight-dashboard-bodysectionconfiguration.md)
   *
   * _Maximum_: `28`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodySections: List<QuickSightDashboardBodySectionConfiguration>;
  /**
   * A list of header section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-dashboard-headerfootersectionconfiguration.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderSections: List<QuickSightDashboardHeaderFooterSectionConfiguration>;
}

/**
 * A bar chart.
 *
 * The `BarChartVisual` structure describes a visual that is a member of the bar chart family. The following charts can be described using this structure:
 *
 * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartvisual.html}
 **/
export interface QuickSightDashboardBarChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [BarChartConfiguration](aws-properties-quicksight-dashboard-barchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardBarChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The table calculation measure field for pivot tables.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-calculatedmeasurefield.html}
 **/
export interface QuickSightDashboardCalculatedMeasureField {
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
 * A decimal parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalparameter.html}
 **/
export interface QuickSightDashboardDecimalParameter {
  /**
   * The values for the decimal parameter.
   *
   * _Required_: Yes
   *
   * _Type_: List of Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<number>>;
  /**
   * A display name for the decimal parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The date configuration of the filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-anchordateconfiguration.html}
 **/
export interface QuickSightDashboardAnchorDateConfiguration {
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
 * Configuration options for the canvas of a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutcanvassizeoptions.html}
 **/
export interface QuickSightDashboardFreeFormLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a free-form layout.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutScreenCanvasSizeOptions](aws-properties-quicksight-dashboard-freeformlayoutscreencanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScreenCanvasSizeOptions?: QuickSightDashboardFreeFormLayoutScreenCanvasSizeOptions;
}

/**
 * Marker styles options for a line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartmarkerstylesettings.html}
 **/
export interface QuickSightDashboardLineChartMarkerStyleSettings {
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
 * The dimension type field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dimensionfield.html}
 **/
export interface QuickSightDashboardDimensionField {
  /**
   * The dimension type field with date type columns.
   *
   * _Required_: No
   *
   * _Type_: [DateDimensionField](aws-properties-quicksight-dashboard-datedimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateDimensionField?: QuickSightDashboardDateDimensionField;
  /**
   * The dimension type field with numerical type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericalDimensionField](aws-properties-quicksight-dashboard-numericaldimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalDimensionField?: QuickSightDashboardNumericalDimensionField;
  /**
   * The dimension type field with categorical type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoricalDimensionField](aws-properties-quicksight-dashboard-categoricaldimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoricalDimensionField?: QuickSightDashboardCategoricalDimensionField;
}

/**
 * Determines the border options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-globaltableborderoptions.html}
 **/
export interface QuickSightDashboardGlobalTableBorderOptions {
  /**
   * Determines the options for uniform border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UniformBorder?: QuickSightDashboardTableBorderOptions;
  /**
   * Determines the options for side specific border.
   *
   * _Required_: No
   *
   * _Type_: [TableSideBorderOptions](aws-properties-quicksight-dashboard-tablesideborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SideSpecificBorder?: QuickSightDashboardTableSideBorderOptions;
}

/**
 * The drill down options for data points in a dashbaord.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointdrillupdownoption.html}
 **/
export interface QuickSightDashboardDataPointDrillUpDownOption {
  /**
   * The status of the drill down options of data points.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * The inline visualization of a specific type to display within a chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableinlinevisualization.html}
 **/
export interface QuickSightDashboardTableInlineVisualization {
  /**
   * The configuration of the inline visualization of the data bars within a chart.
   *
   * _Required_: No
   *
   * _Type_: [DataBarsOptions](aws-properties-quicksight-dashboard-databarsoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataBars?: QuickSightDashboardDataBarsOptions;
}

/**
 * The unaggregated field wells of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotunaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardScatterPlotUnaggregatedFieldWells {
  /**
   * The size field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightDashboardMeasureField>;
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is a dimension field and cannot be aggregated.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxis?: List<QuickSightDashboardDimensionField>;
  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is a dimension field and cannot be aggregated.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxis?: List<QuickSightDashboardDimensionField>;
}

/**
 * The configuration for applying a filter to specific sheets or visuals. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-selectedsheetsfilterscopeconfiguration.html}
 **/
export interface QuickSightDashboardSelectedSheetsFilterScopeConfiguration {
  /**
   * The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetVisualScopingConfiguration](aws-properties-quicksight-dashboard-sheetvisualscopingconfiguration.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetVisualScopingConfigurations?: List<QuickSightDashboardSheetVisualScopingConfiguration>;
}

/**
 * The field well configuration of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramfieldwells.html}
 **/
export interface QuickSightDashboardHistogramFieldWells {
  /**
   * The field well configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [HistogramAggregatedFieldWells](aws-properties-quicksight-dashboard-histogramaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistogramAggregatedFieldWells?: QuickSightDashboardHistogramAggregatedFieldWells;
}

/**
 * The calculated field of an analysis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-calculatedfield.html}
 **/
export interface QuickSightDashboardCalculatedField {
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
 * The label options for an axis on a chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-chartaxislabeloptions.html}
 **/
export interface QuickSightDashboardChartAxisLabelOptions {
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
   * _Type_: [List](aws-properties-quicksight-dashboard-axislabeloptions.md) of [AxisLabelOptions](aws-properties-quicksight-dashboard-axislabeloptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisLabelOptions?: List<QuickSightDashboardAxisLabelOptions>;
}

/**
 * The tick label options of an axis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisticklabeloptions.html}
 **/
export interface QuickSightDashboardAxisTickLabelOptions {
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
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelOptions?: QuickSightDashboardLabelOptions;
}

/**
 * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterlistcontrol.html}
 **/
export interface QuickSightDashboardFilterListControl {
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
   * _Type_: [ListControlDisplayOptions](aws-properties-quicksight-dashboard-listcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardListControlDisplayOptions;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
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
   * _Type_: [FilterSelectableValues](aws-properties-quicksight-dashboard-filterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightDashboardFilterSelectableValues;
}

/**
 * The option that determines the hierarchy of the fields for a visual element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnhierarchy.html}
 **/
export interface QuickSightDashboardColumnHierarchy {
  /**
   * The option that determines the hierarchy of any `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeHierarchy](aws-properties-quicksight-dashboard-datetimehierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeHierarchy?: QuickSightDashboardDateTimeHierarchy;
  /**
   * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
   *
   * _Required_: No
   *
   * _Type_: [ExplicitHierarchy](aws-properties-quicksight-dashboard-explicithierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExplicitHierarchy?: QuickSightDashboardExplicitHierarchy;
  /**
   * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
   *
   * _Required_: No
   *
   * _Type_: [PredefinedHierarchy](aws-properties-quicksight-dashboard-predefinedhierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedHierarchy?: QuickSightDashboardPredefinedHierarchy;
}

/**
 * A box plot.
 *
 * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotvisual.html}
 **/
export interface QuickSightDashboardBoxPlotVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [BoxPlotChartConfiguration](aws-properties-quicksight-dashboard-boxplotchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardBoxPlotChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The sort configuration for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablesortconfiguration.html}
 **/
export interface QuickSightDashboardPivotTableSortConfiguration {
  /**
   * The field sort options for a pivot table sort configuration.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-quicksight-dashboard-fieldsortoptions.md) of [PivotFieldSortOptions](aws-properties-quicksight-dashboard-pivotfieldsortoptions.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSortOptions?: List<QuickSightDashboardPivotFieldSortOptions>;
}

/**
 * The visual publish options of a visual in a dashboard
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardvisualpublishoptions.html}
 **/
export interface QuickSightDashboardDashboardVisualPublishOptions {
  /**
   * Determines if hidden fields are included in an exported dashboard.
   *
   * _Required_: No
   *
   * _Type_: [ExportHiddenFieldsOption](aws-properties-quicksight-dashboard-exporthiddenfieldsoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExportHiddenFieldsOption?: QuickSightDashboardExportHiddenFieldsOption;
}

/**
 * The maximum label of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-maximumlabeltype.html}
 **/
export interface QuickSightDashboardMaximumLabelType {
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
 * The time range drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangedrilldownfilter.html}
 **/
export interface QuickSightDashboardTimeRangeDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * A `TopBottomFilter` filters values that are at the top or the bottom.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomfilter.html}
 **/
export interface QuickSightDashboardTopBottomFilter {
  /**
   * The aggregation and sort configuration of the top bottom filter.
   *
   * _Required_: Yes
   *
   * _Type_: List of [AggregationSortConfiguration](aws-properties-quicksight-dashboard-aggregationsortconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationSortConfigurations: List<QuickSightDashboardAggregationSortConfiguration>;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * Formatting configuration for solid color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingsolidcolor.html}
 **/
export interface QuickSightDashboardConditionalFormattingSolidColor {
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
 * Allows data paths to be sorted by a specific data value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapathsort.html}
 **/
export interface QuickSightDashboardDataPathSort {
  /**
   * The list of data paths that need to be sorted.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataPathValue](aws-properties-quicksight-dashboard-datapathvalue.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortPaths: List<QuickSightDashboardDataPathValue>;
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
 * The sort configuration of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapsortconfiguration.html}
 **/
export interface QuickSightDashboardHeatMapSortConfiguration {
  /**
   * The field sort configuration of the rows fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapRowSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of rows that are displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapRowItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The limit on the number of columns that are displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapColumnItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The column sort configuration for heat map for columns that aren't a part of a field well.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapColumnSort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * The sort configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartsortconfiguration.html}
 **/
export interface QuickSightDashboardWaterfallChartSortConfiguration {
  /**
   * The limit on the number of bar groups that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BreakdownItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * The data point tooltip options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointtooltipoption.html}
 **/
export interface QuickSightDashboardDataPointTooltipOption {
  /**
   * The status of the data point tool tip options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * A tree map.
 *
 * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapvisual.html}
 **/
export interface QuickSightDashboardTreeMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [TreeMapConfiguration](aws-properties-quicksight-dashboard-treemapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardTreeMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The default values of the `IntegerParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerdefaultvalues.html}
 **/
export interface QuickSightDashboardIntegerDefaultValues {
  /**
   * The dynamic value of the `IntegerDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-dashboard-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
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
 * The configuration for a `CategoryFilter`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoryfilterconfiguration.html}
 **/
export interface QuickSightDashboardCategoryFilterConfiguration {
  /**
   * A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.
   *
   * _Required_: No
   *
   * _Type_: [CustomFilterListConfiguration](aws-properties-quicksight-dashboard-customfilterlistconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomFilterListConfiguration?: QuickSightDashboardCustomFilterListConfiguration;
  /**
   * A custom filter that filters based on a single value. This filter can be partially matched.
   *
   * _Required_: No
   *
   * _Type_: [CustomFilterConfiguration](aws-properties-quicksight-dashboard-customfilterconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomFilterConfiguration?: QuickSightDashboardCustomFilterConfiguration;
  /**
   * A list of filter configurations. In the Amazon QuickSight console, this filter type is called a filter list.
   *
   * _Required_: No
   *
   * _Type_: [FilterListConfiguration](aws-properties-quicksight-dashboard-filterlistconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterListConfiguration?: QuickSightDashboardFilterListConfiguration;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformattingoption.html}
 **/
export interface QuickSightDashboardPivotTableConditionalFormattingOption {
  /**
   * The cell conditional formatting option for a pivot table.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableCellConditionalFormatting](aws-properties-quicksight-dashboard-pivottablecellconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cell?: QuickSightDashboardPivotTableCellConditionalFormatting;
}

/**
 * The options that determine the default presentation of all line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartdefaultseriessettings.html}
 **/
export interface QuickSightDashboardLineChartDefaultSeriesSettings {
  /**
   * Line styles options for all line series in the visual.
   *
   * _Required_: No
   *
   * _Type_: [LineChartLineStyleSettings](aws-properties-quicksight-dashboard-linechartlinestylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineStyleSettings?: QuickSightDashboardLineChartLineStyleSettings;
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
   * _Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-dashboard-linechartmarkerstylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerStyleSettings?: QuickSightDashboardLineChartMarkerStyleSettings;
}

/**
 * The computation union that is used in an insight visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-computation.html}
 **/
export interface QuickSightDashboardComputation {
  /**
   * The period to `DataSetIdentifier` computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [PeriodToDateComputation](aws-properties-quicksight-dashboard-periodtodatecomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodToDate?: QuickSightDashboardPeriodToDateComputation;
  /**
   * The growth rate computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [GrowthRateComputation](aws-properties-quicksight-dashboard-growthratecomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrowthRate?: QuickSightDashboardGrowthRateComputation;
  /**
   * The top ranked and bottom ranked computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomRankedComputation](aws-properties-quicksight-dashboard-topbottomrankedcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomRanked?: QuickSightDashboardTopBottomRankedComputation;
  /**
   * The total aggregation computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TotalAggregationComputation](aws-properties-quicksight-dashboard-totalaggregationcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalAggregation?: QuickSightDashboardTotalAggregationComputation;
  /**
   * The forecast computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [ForecastComputation](aws-properties-quicksight-dashboard-forecastcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Forecast?: QuickSightDashboardForecastComputation;
  /**
   * The maximum and minimum computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [MaximumMinimumComputation](aws-properties-quicksight-dashboard-maximumminimumcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumMinimum?: QuickSightDashboardMaximumMinimumComputation;
  /**
   * The period over period computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [PeriodOverPeriodComputation](aws-properties-quicksight-dashboard-periodoverperiodcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodOverPeriod?: QuickSightDashboardPeriodOverPeriodComputation;
  /**
   * The metric comparison computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [MetricComparisonComputation](aws-properties-quicksight-dashboard-metriccomparisoncomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricComparison?: QuickSightDashboardMetricComparisonComputation;
  /**
   * The top movers and bottom movers computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomMoversComputation](aws-properties-quicksight-dashboard-topbottommoverscomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomMovers?: QuickSightDashboardTopBottomMoversComputation;
  /**
   * The unique values computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [UniqueValuesComputation](aws-properties-quicksight-dashboard-uniquevaluescomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UniqueValues?: QuickSightDashboardUniqueValuesComputation;
}

/**
 * The options that determine the default settings for a grid layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultgridlayoutconfiguration.html}
 **/
export interface QuickSightDashboardDefaultGridLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a grid layout.
   *
   * _Required_: Yes
   *
   * _Type_: [GridLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-gridlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightDashboardGridLayoutCanvasSizeOptions;
}

/**
 * The configuration of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapconfiguration.html}
 **/
export interface QuickSightDashboardHeatMapConfiguration {
  /**
   * The sort configuration of a heat map.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapSortConfiguration](aws-properties-quicksight-dashboard-heatmapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardHeatMapSortConfiguration;
  /**
   * The label options of the column that is displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapFieldWells](aws-properties-quicksight-dashboard-heatmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardHeatMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The color options (gradient color, point of divergence) in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ColorScale](aws-properties-quicksight-dashboard-colorscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorScale?: QuickSightDashboardColorScale;
  /**
   * The label options of the row that is displayed in a `heat map`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
}

/**
 * The optional configuration of totals cells in a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottotaloptions.html}
 **/
export interface QuickSightDashboardPivotTotalOptions {
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueCellStyle?: QuickSightDashboardTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightDashboardTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricHeaderCellStyle?: QuickSightDashboardTableCellStyle;
}

/**
 * The unaggregated field for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-unaggregatedfield.html}
 **/
export interface QuickSightDashboardUnaggregatedField {
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [FormatConfiguration](aws-properties-quicksight-dashboard-formatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardFormatConfiguration;
  /**
   * The column that is used in the `UnaggregatedField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The control of a parameter that users can interact with in a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametercontrol.html}
 **/
export interface QuickSightDashboardParameterControl {
  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * _Required_: No
   *
   * _Type_: [ParameterSliderControl](aws-properties-quicksight-dashboard-parameterslidercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slider?: QuickSightDashboardParameterSliderControl;
  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * _Required_: No
   *
   * _Type_: [ParameterTextAreaControl](aws-properties-quicksight-dashboard-parametertextareacontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextArea?: QuickSightDashboardParameterTextAreaControl;
  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * _Required_: No
   *
   * _Type_: [ParameterDropDownControl](aws-properties-quicksight-dashboard-parameterdropdowncontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dropdown?: QuickSightDashboardParameterDropDownControl;
  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * _Required_: No
   *
   * _Type_: [ParameterTextFieldControl](aws-properties-quicksight-dashboard-parametertextfieldcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextField?: QuickSightDashboardParameterTextFieldControl;
  /**
   * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
   *
   * _Required_: No
   *
   * _Type_: [ParameterListControl](aws-properties-quicksight-dashboard-parameterlistcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  List?: QuickSightDashboardParameterListControl;
  /**
   * A control from a date parameter that specifies date and time.
   *
   * _Required_: No
   *
   * _Type_: [ParameterDateTimePickerControl](aws-properties-quicksight-dashboard-parameterdatetimepickercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimePicker?: QuickSightDashboardParameterDateTimePickerControl;
}

/**
 * The sort configuration for a field in a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldsort.html}
 **/
export interface QuickSightDashboardFieldSort {
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
 * The sort configuration of a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudsortconfiguration.html}
 **/
export interface QuickSightDashboardWordCloudSortConfiguration {
  /**
   * The limit on the number of groups that are displayed in a word cloud.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The sort configuration of group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * A sankey diagram.
 *
 * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramvisual.html}
 **/
export interface QuickSightDashboardSankeyDiagramVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [SankeyDiagramChartConfiguration](aws-properties-quicksight-dashboard-sankeydiagramchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardSankeyDiagramChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconditionalformattingoption.html}
 **/
export interface QuickSightDashboardTableConditionalFormattingOption {
  /**
   * The row conditional formatting option for a table.
   *
   * _Required_: No
   *
   * _Type_: [TableRowConditionalFormatting](aws-properties-quicksight-dashboard-tablerowconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Row?: QuickSightDashboardTableRowConditionalFormatting;
  /**
   * The cell conditional formatting option for a table.
   *
   * _Required_: No
   *
   * _Type_: [TableCellConditionalFormatting](aws-properties-quicksight-dashboard-tablecellconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cell?: QuickSightDashboardTableCellConditionalFormatting;
}

/**
 * The field wells of a radar chart visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartfieldwells.html}
 **/
export interface QuickSightDashboardRadarChartFieldWells {
  /**
   * The aggregated field wells of a radar chart visual.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartAggregatedFieldWells](aws-properties-quicksight-dashboard-radarchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RadarChartAggregatedFieldWells?: QuickSightDashboardRadarChartAggregatedFieldWells;
}

/**
 * The configuration of destination parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-destinationparametervalueconfiguration.html}
 **/
export interface QuickSightDashboardDestinationParameterValueConfiguration {
  /**
   * The configuration of custom values for destination parameter in `DestinationParameterValueConfiguration`.
   *
   * _Required_: No
   *
   * _Type_: [CustomValuesConfiguration](aws-properties-quicksight-dashboard-customvaluesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValuesConfiguration?: QuickSightDashboardCustomValuesConfiguration;
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
 * The total options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottabletotaloptions.html}
 **/
export interface QuickSightDashboardPivotTableTotalOptions {
  /**
   * The column subtotal options.
   *
   * _Required_: No
   *
   * _Type_: [SubtotalOptions](aws-properties-quicksight-dashboard-subtotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSubtotalOptions?: QuickSightDashboardSubtotalOptions;
  /**
   * The row subtotal options.
   *
   * _Required_: No
   *
   * _Type_: [SubtotalOptions](aws-properties-quicksight-dashboard-subtotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowSubtotalOptions?: QuickSightDashboardSubtotalOptions;
  /**
   * The row total options.
   *
   * _Required_: No
   *
   * _Type_: [PivotTotalOptions](aws-properties-quicksight-dashboard-pivottotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowTotalOptions?: QuickSightDashboardPivotTotalOptions;
  /**
   * The column total options.
   *
   * _Required_: No
   *
   * _Type_: [PivotTotalOptions](aws-properties-quicksight-dashboard-pivottotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnTotalOptions?: QuickSightDashboardPivotTotalOptions;
}

/**
 * The field well configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpifieldwells.html}
 **/
export interface QuickSightDashboardKPIFieldWells {
  /**
   * The target value field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValues?: List<QuickSightDashboardMeasureField>;
  /**
   * The trend group field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendGroups?: List<QuickSightDashboardDimensionField>;
  /**
   * The value field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * Configures the display properties of the given text.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontconfiguration.html}
 **/
export interface QuickSightDashboardFontConfiguration {
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
   * _Type_: [FontSize](aws-properties-quicksight-dashboard-fontsize.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontSize?: QuickSightDashboardFontSize;
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
   * _Type_: [FontWeight](aws-properties-quicksight-dashboard-fontweight.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontWeight?: QuickSightDashboardFontWeight;
}

/**
 * The tooltip.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tooltipitem.html}
 **/
export interface QuickSightDashboardTooltipItem {
  /**
   * The tooltip item for the fields.
   *
   * _Required_: No
   *
   * _Type_: [FieldTooltipItem](aws-properties-quicksight-dashboard-fieldtooltipitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldTooltipItem?: QuickSightDashboardFieldTooltipItem;
  /**
   * The tooltip item for the columns that are not part of a field well.
   *
   * _Required_: No
   *
   * _Type_: [ColumnTooltipItem](aws-properties-quicksight-dashboard-columntooltipitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnTooltipItem?: QuickSightDashboardColumnTooltipItem;
}

/**
 * The configuration for a custom label on a `ReferenceLine`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinecustomlabelconfiguration.html}
 **/
export interface QuickSightDashboardReferenceLineCustomLabelConfiguration {
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
 * The options for a paper canvas of a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionbasedlayoutpapercanvassizeoptions.html}
 **/
export interface QuickSightDashboardSectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * Defines the spacing between the canvas content and the top, bottom, left, and right edges.
   *
   * _Required_: No
   *
   * _Type_: [Spacing](aws-properties-quicksight-dashboard-spacing.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaperMargin?: QuickSightDashboardSpacing;
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
 * The category drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericequalitydrilldownfilter.html}
 **/
export interface QuickSightDashboardNumericEqualityDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * A parameter declaration for the `DateTime` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeparameterdeclaration.html}
 **/
export interface QuickSightDashboardDateTimeParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-dashboard-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightDashboardMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeDefaultValues](aws-properties-quicksight-dashboard-datetimedefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightDashboardDateTimeDefaultValues;
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
   * _Type_: [DateTimeValueWhenUnsetConfiguration](aws-properties-quicksight-dashboard-datetimevaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightDashboardDateTimeValueWhenUnsetConfiguration;
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
 * The field well configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardWaterfallChartAggregatedFieldWells {
  /**
   * The category field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Categories?: List<QuickSightDashboardDimensionField>;
  /**
   * The breakdown field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Breakdowns?: List<QuickSightDashboardDimensionField>;
  /**
   * The value field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * The background style configuration of a free-form layout element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelementborderstyle.html}
 **/
export interface QuickSightDashboardFreeFormLayoutElementBorderStyle {
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
 * The scale setup options for a numeric axis display.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisscale.html}
 **/
export interface QuickSightDashboardAxisScale {
  /**
   * The logarithmic axis scale setup.
   *
   * _Required_: No
   *
   * _Type_: [AxisLogarithmicScale](aws-properties-quicksight-dashboard-axislogarithmicscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logarithmic?: QuickSightDashboardAxisLogarithmicScale;
  /**
   * The linear axis scale setup.
   *
   * _Required_: No
   *
   * _Type_: [AxisLinearScale](aws-properties-quicksight-dashboard-axislinearscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Linear?: QuickSightDashboardAxisLinearScale;
}

/**
 * The options that determine the presentation of the arc of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartarcconditionalformatting.html}
 **/
export interface QuickSightDashboardGaugeChartArcConditionalFormatting {
  /**
   * The conditional formatting of the arc foreground color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForegroundColor?: QuickSightDashboardConditionalFormattingColor;
}

/**
 * The configuration of a `ComboChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartconfiguration.html}
 **/
export interface QuickSightDashboardComboChartConfiguration {
  /**
   * The sort configuration of a `ComboChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartSortConfiguration](aws-properties-quicksight-dashboard-combochartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardComboChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-dashboard-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightDashboardReferenceLine>;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a bar in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarDataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
  /**
   * Determines the bar arrangement in a combo chart. The following are valid values in this structure:
   */
  BarsArrangement?: Value<string>;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a line in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineDataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The category axis of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartFieldWells](aws-properties-quicksight-dashboard-combochartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardComboChartFieldWells;
  /**
   * The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
}

/**
 * The option that determines the decimal places configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalplacesconfiguration.html}
 **/
export interface QuickSightDashboardDecimalPlacesConfiguration {
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
 * The options that determine the bin width of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-binwidthoptions.html}
 **/
export interface QuickSightDashboardBinWidthOptions {
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
 * The bound options (north, south, west, east) of the geospatial window options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialcoordinatebounds.html}
 **/
export interface QuickSightDashboardGeospatialCoordinateBounds {
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
 * The configured style settings of a radar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartareastylesettings.html}
 **/
export interface QuickSightDashboardRadarChartAreaStyleSettings {
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
 * The configuration of spacing (often a margin or padding).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-spacing.html}
 **/
export interface QuickSightDashboardSpacing {
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
 * The cluster marker configuration of the geospatial map selected point style.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-clustermarkerconfiguration.html}
 **/
export interface QuickSightDashboardClusterMarkerConfiguration {
  /**
   * The cluster marker that is a part of the cluster marker configuration
   *
   * _Required_: No
   *
   * _Type_: [ClusterMarker](aws-properties-quicksight-dashboard-clustermarker.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterMarker?: QuickSightDashboardClusterMarker;
}

/**
 * The configuration that defines the default value of a `DateTime` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimevaluewhenunsetconfiguration.html}
 **/
export interface QuickSightDashboardDateTimeValueWhenUnsetConfiguration {
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
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textareacontroldisplayoptions.html}
 **/
export interface QuickSightDashboardTextAreaControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightDashboardLabelOptions;
  /**
   * The configuration of the placeholder options in a text area control.
   *
   * _Required_: No
   *
   * _Type_: [TextControlPlaceholderOptions](aws-properties-quicksight-dashboard-textcontrolplaceholderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaceholderOptions?: QuickSightDashboardTextControlPlaceholderOptions;
}

/**
 * The `ColorsConfiguration` property type specifies Property description not available. for an [AWS::QuickSight::Dashboard](aws-resource-quicksight-dashboard.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-colorsconfiguration.html}
 **/
export interface QuickSightDashboardColorsConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomColor](aws-properties-quicksight-dashboard-customcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomColors?: List<QuickSightDashboardCustomColor>;
}

/**
 * The field well configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardLineChartAggregatedFieldWells {
  /**
   * The category field wells of a line chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightDashboardDimensionField>;
  /**
   * The color field wells of a line chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightDashboardDimensionField>;
  /**
   * The value field wells of a line chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
  /**
   * The small multiples field well of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightDashboardDimensionField>;
}

/**
 * The cell conditional formatting option for a pivot table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablecellconditionalformatting.html}
 **/
export interface QuickSightDashboardPivotTableCellConditionalFormatting {
  /**
   * The scope of the cell for conditional formatting.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableConditionalFormattingScope](aws-properties-quicksight-dashboard-pivottableconditionalformattingscope.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: QuickSightDashboardPivotTableConditionalFormattingScope;
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
   * _Type_: [TextConditionalFormat](aws-properties-quicksight-dashboard-textconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextFormat?: QuickSightDashboardTextConditionalFormat;
}

/**
 * The conditional formatting options of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconditionalformattingoption.html}
 **/
export interface QuickSightDashboardKPIConditionalFormattingOption {
  /**
   * The conditional formatting for the primary value of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIPrimaryValueConditionalFormatting](aws-properties-quicksight-dashboard-kpiprimaryvalueconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValue?: QuickSightDashboardKPIPrimaryValueConditionalFormatting;
  /**
   * The conditional formatting for the progress bar of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIProgressBarConditionalFormatting](aws-properties-quicksight-dashboard-kpiprogressbarconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgressBar?: QuickSightDashboardKPIProgressBarConditionalFormatting;
}

/**
 * The aggregated field wells for a geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardGeospatialMapAggregatedFieldWells {
  /**
   * The color field wells of a geospatial map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightDashboardDimensionField>;
  /**
   * The size field wells of a geospatial map. Values are aggregated based on geospatial fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
  /**
   * The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Geospatial?: List<QuickSightDashboardDimensionField>;
}

/**
 * An aggregation based on the percentile of values in a dimension or measure.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentileaggregation.html}
 **/
export interface QuickSightDashboardPercentileAggregation {
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
 * The tooltip item for the columns that are not part of a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columntooltipitem.html}
 **/
export interface QuickSightDashboardColumnTooltipItem {
  /**
   * The aggregation function of the column tooltip item.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-dashboard-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Aggregation?: QuickSightDashboardAggregationFunction;
  /**
   * The target column of the tooltip item.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The options that determine the percentage display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentagedisplayformatconfiguration.html}
 **/
export interface QuickSightDashboardPercentageDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-dashboard-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightDashboardNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-dashboard-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightDashboardDecimalPlacesConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-dashboard-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
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
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-dashboard-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightDashboardNumericSeparatorConfiguration;
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
 * The field wells of the visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartfieldwells.html}
 **/
export interface QuickSightDashboardComboChartFieldWells {
  /**
   * The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartAggregatedFieldWells](aws-properties-quicksight-dashboard-combochartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComboChartAggregatedFieldWells?: QuickSightDashboardComboChartAggregatedFieldWells;
}

/**
 * The paginated report options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablepaginatedreportoptions.html}
 **/
export interface QuickSightDashboardPivotTablePaginatedReportOptions {
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
 * The options that determine the sizing of the canvas used in a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutscreencanvassizeoptions.html}
 **/
export interface QuickSightDashboardFreeFormLayoutScreenCanvasSizeOptions {
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
 * The arc axis configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcaxisconfiguration.html}
 **/
export interface QuickSightDashboardArcAxisConfiguration {
  /**
   * The arc axis range of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ArcAxisDisplayRange](aws-properties-quicksight-dashboard-arcaxisdisplayrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: QuickSightDashboardArcAxisDisplayRange;
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
 * A `TimeRangeFilter` filters values that are between two specified values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timerangefilter.html}
 **/
export interface QuickSightDashboardTimeRangeFilter {
  /**
   * The minimum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilterValue](aws-properties-quicksight-dashboard-timerangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMinimumValue?: QuickSightDashboardTimeRangeFilterValue;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
  /**
   * The maximum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilterValue](aws-properties-quicksight-dashboard-timerangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMaximumValue?: QuickSightDashboardTimeRangeFilterValue;
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
   * _Type_: [ExcludePeriodConfiguration](aws-properties-quicksight-dashboard-excludeperiodconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludePeriodConfiguration?: QuickSightDashboardExcludePeriodConfiguration;
}

/**
 * The options for data bars.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-databarsoptions.html}
 **/
export interface QuickSightDashboardDataBarsOptions {
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
 * The formatting configuration for the color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcolor.html}
 **/
export interface QuickSightDashboardConditionalFormattingColor {
  /**
   * Formatting configuration for gradient color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingGradientColor](aws-properties-quicksight-dashboard-conditionalformattinggradientcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gradient?: QuickSightDashboardConditionalFormattingGradientColor;
  /**
   * Formatting configuration for solid color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingSolidColor](aws-properties-quicksight-dashboard-conditionalformattingsolidcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Solid?: QuickSightDashboardConditionalFormattingSolidColor;
}

/**
 * The reference line visual display options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referenceline.html}
 **/
export interface QuickSightDashboardReferenceLine {
  /**
   * The status of the reference line. Choose one of the following options:
   */
  Status?: Value<string>;
  /**
   * The data configuration of the reference line.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceLineDataConfiguration](aws-properties-quicksight-dashboard-referencelinedataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataConfiguration: QuickSightDashboardReferenceLineDataConfiguration;
  /**
   * The label configuration of the reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineLabelConfiguration](aws-properties-quicksight-dashboard-referencelinelabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelConfiguration?: QuickSightDashboardReferenceLineLabelConfiguration;
  /**
   * The style configuration of the reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineStyleConfiguration](aws-properties-quicksight-dashboard-referencelinestyleconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleConfiguration?: QuickSightDashboardReferenceLineStyleConfiguration;
}

/**
 * The conditional formatting for the primary value of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartprimaryvalueconditionalformatting.html}
 **/
export interface QuickSightDashboardGaugeChartPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightDashboardConditionalFormattingColor;
  /**
   * The conditional formatting of the primary value icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-dashboard-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightDashboardConditionalFormattingIcon;
}

/**
 * The dynamic configuration of the reference line data configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinedynamicdataconfiguration.html}
 **/
export interface QuickSightDashboardReferenceLineDynamicDataConfiguration {
  /**
   * The column that the dynamic data targets.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
  /**
   * The aggregation function that is used in the dynamic data.
   *
   * _Required_: Yes
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-dashboard-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureAggregationFunction: QuickSightDashboardAggregationFunction;
  /**
   * The calculation that is used in the dynamic data.
   *
   * _Required_: Yes
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-dashboard-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Calculation: QuickSightDashboardNumericalAggregationFunction;
}

/**
 * The configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartconfiguration.html}
 **/
export interface QuickSightDashboardPieChartConfiguration {
  /**
   * The sort configuration of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [PieChartSortConfiguration](aws-properties-quicksight-dashboard-piechartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardPieChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-dashboard-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightDashboardContributionAnalysisDefault>;
  /**
   * The label options of the group/color that is displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [PieChartFieldWells](aws-properties-quicksight-dashboard-piechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardPieChartFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.
   *
   * _Required_: No
   *
   * _Type_: [DonutOptions](aws-properties-quicksight-dashboard-donutoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DonutOptions?: QuickSightDashboardDonutOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-dashboard-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightDashboardSmallMultiplesOptions;
  /**
   * The label options for the value that is displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textfieldcontroldisplayoptions.html}
 **/
export interface QuickSightDashboardTextFieldControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightDashboardLabelOptions;
  /**
   * The configuration of the placeholder options in a text field control.
   *
   * _Required_: No
   *
   * _Type_: [TextControlPlaceholderOptions](aws-properties-quicksight-dashboard-textcontrolplaceholderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaceholderOptions?: QuickSightDashboardTextControlPlaceholderOptions;
}

/**
 * The override configuration of the rendering rules of a sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetelementconfigurationoverrides.html}
 **/
export interface QuickSightDashboardSheetElementConfigurationOverrides {
  /**
   * Determines whether or not the overrides are visible. Choose one of the following options:
   */
  Visibility?: Value<string>;
}

/**
 * An empty visual.
 *
 * Empty visuals are used in layouts but have not been configured to show any data. A new visual created in the Amazon QuickSight console is considered an `EmptyVisual` until a visual type is selected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-emptyvisual.html}
 **/
export interface QuickSightDashboardEmptyVisual {
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
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
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
 * A heat map.
 *
 * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapvisual.html}
 **/
export interface QuickSightDashboardHeatMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [HeatMapConfiguration](aws-properties-quicksight-dashboard-heatmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardHeatMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The data point menu options of a dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datapointmenulabeloption.html}
 **/
export interface QuickSightDashboardDataPointMenuLabelOption {
  /**
   * The status of the data point menu options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * The rolling date configuration of a date time filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rollingdateconfiguration.html}
 **/
export interface QuickSightDashboardRollingDateConfiguration {
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
 * The simple cluster marker of the cluster marker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-simpleclustermarker.html}
 **/
export interface QuickSightDashboardSimpleClusterMarker {
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
 * The navigation configuration for `CustomActionNavigationOperation`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-localnavigationconfiguration.html}
 **/
export interface QuickSightDashboardLocalNavigationConfiguration {
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
 * The sort configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartsortconfiguration.html}
 **/
export interface QuickSightDashboardPieChartSortConfiguration {
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of categories that are displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}

/**
 * The configuration of the placeholder options in a text control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-textcontrolplaceholderoptions.html}
 **/
export interface QuickSightDashboardTextControlPlaceholderOptions {
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
 * The arc configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcconfiguration.html}
 **/
export interface QuickSightDashboardArcConfiguration {
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
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativedatetimecontroldisplayoptions.html}
 **/
export interface QuickSightDashboardRelativeDateTimeControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightDashboardLabelOptions;
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
 * The field well configuration of a `FunnelChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartfieldwells.html}
 **/
export interface QuickSightDashboardFunnelChartFieldWells {
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartAggregatedFieldWells](aws-properties-quicksight-dashboard-funnelchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunnelChartAggregatedFieldWells?: QuickSightDashboardFunnelChartAggregatedFieldWells;
}

/**
 * The custom text content (value, font configuration) for the table link content configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldcustomtextcontent.html}
 **/
export interface QuickSightDashboardTableFieldCustomTextContent {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration: QuickSightDashboardFontConfiguration;
}

/**
 * The formatting configuration for the icon.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingicon.html}
 **/
export interface QuickSightDashboardConditionalFormattingIcon {
  /**
   * Determines the custom condition for an icon set.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingCustomIconCondition](aws-properties-quicksight-dashboard-conditionalformattingcustomiconcondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomCondition?: QuickSightDashboardConditionalFormattingCustomIconCondition;
  /**
   * Formatting configuration for icon set.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIconSet](aws-properties-quicksight-dashboard-conditionalformattingiconset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconSet?: QuickSightDashboardConditionalFormattingIconSet;
}

/**
 * The forecast configuration that is used in a line chart's display properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastconfiguration.html}
 **/
export interface QuickSightDashboardForecastConfiguration {
  /**
   * The forecast properties setup of a forecast in the line chart.
   *
   * _Required_: No
   *
   * _Type_: [TimeBasedForecastProperties](aws-properties-quicksight-dashboard-timebasedforecastproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForecastProperties?: QuickSightDashboardTimeBasedForecastProperties;
  /**
   * The forecast scenario of a forecast in the line chart.
   *
   * _Required_: No
   *
   * _Type_: [ForecastScenario](aws-properties-quicksight-dashboard-forecastscenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scenario?: QuickSightDashboardForecastScenario;
}

/**
 * The conditional formatting that determines the shape of the filled map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapshapeconditionalformatting.html}
 **/
export interface QuickSightDashboardFilledMapShapeConditionalFormatting {
  /**
   * The conditional formatting that determines the background color of a filled map's shape.
   *
   * _Required_: No
   *
   * _Type_: [ShapeConditionalFormat](aws-properties-quicksight-dashboard-shapeconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: QuickSightDashboardShapeConditionalFormat;
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
 * The cluster marker that is a part of the cluster marker configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-clustermarker.html}
 **/
export interface QuickSightDashboardClusterMarker {
  /**
   * The simple cluster marker of the cluster marker.
   *
   * _Required_: No
   *
   * _Type_: [SimpleClusterMarker](aws-properties-quicksight-dashboard-simpleclustermarker.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SimpleClusterMarker?: QuickSightDashboardSimpleClusterMarker;
}

/**
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterslidercontrol.html}
 **/
export interface QuickSightDashboardFilterSliderControl {
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
   * _Type_: [SliderControlDisplayOptions](aws-properties-quicksight-dashboard-slidercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardSliderControlDisplayOptions;
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
 * Determines the color scale that is applied to the visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-colorscale.html}
 **/
export interface QuickSightDashboardColorScale {
  /**
   * Determines the list of colors that are applied to the visual.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataColor](aws-properties-quicksight-dashboard-datacolor.md)
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors: List<QuickSightDashboardDataColor>;
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
   * _Type_: [DataColor](aws-properties-quicksight-dashboard-datacolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueColor?: QuickSightDashboardDataColor;
}

/**
 * The top ranked and bottom ranked computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottomrankedcomputation.html}
 **/
export interface QuickSightDashboardTopBottomRankedComputation {
  /**
   * The computation type. Choose one of the following options:
   */
  Type: Value<string>;
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightDashboardDimensionField;
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
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightDashboardMeasureField;
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
 * Determines whether or not hidden fields are visible on exported dashbaords.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exportwithhiddenfieldsoption.html}
 **/
export interface QuickSightDashboardExportWithHiddenFieldsOption {
  /**
   * The status of the export with hidden fields options.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * The general configuration of a column.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnconfiguration.html}
 **/
export interface QuickSightDashboardColumnConfiguration {
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
   * _Type_: [FormatConfiguration](aws-properties-quicksight-dashboard-formatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardFormatConfiguration;
  /**
   * The column.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ColorsConfiguration](aws-properties-quicksight-dashboard-colorsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorsConfiguration?: QuickSightDashboardColorsConfiguration;
}

/**
 * The option that determines the hierarchy of any `DateTime` fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimehierarchy.html}
 **/
export interface QuickSightDashboardDateTimeHierarchy {
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
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-dashboard-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightDashboardDrillDownFilter>;
}

/**
 * The configuration for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconfiguration.html}
 **/
export interface QuickSightDashboardPivotTableConfiguration {
  /**
   * The sort configuration for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableSortConfiguration](aws-properties-quicksight-dashboard-pivottablesortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardPivotTableSortConfiguration;
  /**
   * The paginated report options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTablePaginatedReportOptions](aws-properties-quicksight-dashboard-pivottablepaginatedreportoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedReportOptions?: QuickSightDashboardPivotTablePaginatedReportOptions;
  /**
   * The table options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableOptions](aws-properties-quicksight-dashboard-pivottableoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableOptions?: QuickSightDashboardPivotTableOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableFieldWells](aws-properties-quicksight-dashboard-pivottablefieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardPivotTableFieldWells;
  /**
   * The field options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableFieldOptions](aws-properties-quicksight-dashboard-pivottablefieldoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldOptions?: QuickSightDashboardPivotTableFieldOptions;
  /**
   * The total options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableTotalOptions](aws-properties-quicksight-dashboard-pivottabletotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalOptions?: QuickSightDashboardPivotTableTotalOptions;
}

/**
 * The range ends label type of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-rangeendslabeltype.html}
 **/
export interface QuickSightDashboardRangeEndsLabelType {
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
 * A control to display a text box that is used to enter a single entry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametertextfieldcontrol.html}
 **/
export interface QuickSightDashboardParameterTextFieldControl {
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
   * _Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-dashboard-textfieldcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardTextFieldControlDisplayOptions;
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
 * The configuration for default new sheet settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultnewsheetconfiguration.html}
 **/
export interface QuickSightDashboardDefaultNewSheetConfiguration {
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
   * _Type_: [DefaultInteractiveLayoutConfiguration](aws-properties-quicksight-dashboard-defaultinteractivelayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InteractiveLayoutConfiguration?: QuickSightDashboardDefaultInteractiveLayoutConfiguration;
  /**
   * The options that determine the default settings for a paginated layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultPaginatedLayoutConfiguration](aws-properties-quicksight-dashboard-defaultpaginatedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedLayoutConfiguration?: QuickSightDashboardDefaultPaginatedLayoutConfiguration;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-slidercontroldisplayoptions.html}
 **/
export interface QuickSightDashboardSliderControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightDashboardLabelOptions;
}

/**
 * The title label options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualtitlelabeloptions.html}
 **/
export interface QuickSightDashboardVisualTitleLabelOptions {
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
   * _Type_: [ShortFormatText](aws-properties-quicksight-dashboard-shortformattext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatText?: QuickSightDashboardShortFormatText;
}

/**
 * A `Layout` defines the placement of elements within a sheet.
 *
 * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the _Amazon QuickSight User Guide_.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-layout.html}
 **/
export interface QuickSightDashboardLayout {
  /**
   * The configuration that determines what the type of layout for a sheet.
   *
   * _Required_: Yes
   *
   * _Type_: [LayoutConfiguration](aws-properties-quicksight-dashboard-layoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightDashboardLayoutConfiguration;
}

/**
 * The conditional formatting of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconditionalformatting.html}
 **/
export interface QuickSightDashboardGaugeChartConditionalFormatting {
  /**
   * Conditional formatting options of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [GaugeChartConditionalFormattingOption](aws-properties-quicksight-dashboard-gaugechartconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightDashboardGaugeChartConditionalFormattingOption>;
}

/**
 * A visual that contains custom content.
 *
 * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontentvisual.html}
 **/
export interface QuickSightDashboardCustomContentVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [CustomContentConfiguration](aws-properties-quicksight-dashboard-customcontentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardCustomContentConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
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
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}

/**
 * The configuration of custom values for the destination parameter in `DestinationParameterValueConfiguration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customvaluesconfiguration.html}
 **/
export interface QuickSightDashboardCustomValuesConfiguration {
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
   * _Type_: [CustomParameterValues](aws-properties-quicksight-dashboard-customparametervalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValues: QuickSightDashboardCustomParameterValues;
}

/**
 * The field well configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardPieChartAggregatedFieldWells {
  /**
   * The category (group/color) field wells of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightDashboardDimensionField>;
  /**
   * The value field wells of a pie chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
  /**
   * The small multiples field well of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightDashboardDimensionField>;
}

/**
 * The sort configuration of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapsortconfiguration.html}
 **/
export interface QuickSightDashboardFilledMapSortConfiguration {
  /**
   * The sort configuration of the location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * Formatting configuration for string fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringformatconfiguration.html}
 **/
export interface QuickSightDashboardStringFormatConfiguration {
  /**
   * The formatting configuration for numeric strings.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-dashboard-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericFormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-dashboard-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
}

/**
 * The field well configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardFunnelChartAggregatedFieldWells {
  /**
   * The category field wells of a funnel chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightDashboardDimensionField>;
  /**
   * The value field wells of a funnel chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * The aggregated field well for a box plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardBoxPlotAggregatedFieldWells {
  /**
   * The group by field well of a box plot chart. Values are grouped based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightDashboardDimensionField>;
  /**
   * The value field well of a box plot chart. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
}

/**
 * The configuration for default analysis settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-analysisdefaults.html}
 **/
export interface QuickSightDashboardAnalysisDefaults {
  /**
   * The configuration for default new sheet settings.
   *
   * _Required_: Yes
   *
   * _Type_: [DefaultNewSheetConfiguration](aws-properties-quicksight-dashboard-defaultnewsheetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultNewSheetConfiguration: QuickSightDashboardDefaultNewSheetConfiguration;
}

/**
 * The share label options for the labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-labeloptions.html}
 **/
export interface QuickSightDashboardLabelOptions {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightDashboardFontConfiguration;
}

/**
 * The options that determine the presentation of the progress bar of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-progressbaroptions.html}
 **/
export interface QuickSightDashboardProgressBarOptions {
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
 * The scope of the cell for conditional formatting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformattingscope.html}
 **/
export interface QuickSightDashboardPivotTableConditionalFormattingScope {
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
 * The options that determine the presentation of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-waterfallchartoptions.html}
 **/
export interface QuickSightDashboardWaterfallChartOptions {
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
 * The label configuration of a reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinelabelconfiguration.html}
 **/
export interface QuickSightDashboardReferenceLineLabelConfiguration {
  /**
   * The horizontal position configuration of the label in a reference line. Choose one of the following options:
   */
  HorizontalPosition?: Value<string>;
  /**
   * The value label configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineValueLabelConfiguration](aws-properties-quicksight-dashboard-referencelinevaluelabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelConfiguration?: QuickSightDashboardReferenceLineValueLabelConfiguration;
  /**
   * The custom label configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineCustomLabelConfiguration](aws-properties-quicksight-dashboard-referencelinecustomlabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabelConfiguration?: QuickSightDashboardReferenceLineCustomLabelConfiguration;
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightDashboardFontConfiguration;
  /**
   * The vertical position configuration of the label in a reference line. Choose one of the following options:
   */
  VerticalPosition?: Value<string>;
}

/**
 * A `TimeEqualityFilter` filters values that are equal to a given value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-timeequalityfilter.html}
 **/
export interface QuickSightDashboardTimeEqualityFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * An aggregation function aggregates values from a dimension or measure.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-aggregationfunction.html}
 **/
export interface QuickSightDashboardAggregationFunction {
  /**
   * Aggregation for date values.
   */
  DateAggregationFunction?: Value<string>;
  /**
   * Aggregation for numerical values.
   *
   * _Required_: No
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-dashboard-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalAggregationFunction?: QuickSightDashboardNumericalAggregationFunction;
  /**
   * Aggregation for categorical values.
   */
  CategoricalAggregationFunction?: Value<string>;
}

/**
 * The options that determine how a date axis is displayed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dateaxisoptions.html}
 **/
export interface QuickSightDashboardDateAxisOptions {
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
 * The visual display options for the visual palette.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualpalette.html}
 **/
export interface QuickSightDashboardVisualPalette {
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
   * _Type_: List of [DataPathColor](aws-properties-quicksight-dashboard-datapathcolor.md)
   *
   * _Maximum_: `5000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorMap?: List<QuickSightDashboardDataPathColor>;
}

/**
 * The measure (metric) type field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-measurefield.html}
 **/
export interface QuickSightDashboardMeasureField {
  /**
   * The measure type field with date type columns.
   *
   * _Required_: No
   *
   * _Type_: [DateMeasureField](aws-properties-quicksight-dashboard-datemeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateMeasureField?: QuickSightDashboardDateMeasureField;
  /**
   * The measure type field with numerical type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericalMeasureField](aws-properties-quicksight-dashboard-numericalmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalMeasureField?: QuickSightDashboardNumericalMeasureField;
  /**
   * The measure type field with categorical type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoricalMeasureField](aws-properties-quicksight-dashboard-categoricalmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoricalMeasureField?: QuickSightDashboardCategoricalMeasureField;
  /**
   * The calculated measure field only used in pivot tables.
   *
   * _Required_: No
   *
   * _Type_: [CalculatedMeasureField](aws-properties-quicksight-dashboard-calculatedmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CalculatedMeasureField?: QuickSightDashboardCalculatedMeasureField;
}

/**
 * The contents of a dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardversiondefinition.html}
 **/
export interface QuickSightDashboardDashboardVersionDefinition {
  /**
   * The filter definitions for a dashboard.
   *
   * For more information, see [Filtering Data in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [FilterGroup](aws-properties-quicksight-dashboard-filtergroup.md)
   *
   * _Maximum_: `2000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterGroups?: List<QuickSightDashboardFilterGroup>;
  /**
   * An array of calculated field definitions for the dashboard.
   *
   * _Required_: No
   *
   * _Type_: List of [CalculatedField](aws-properties-quicksight-dashboard-calculatedfield.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CalculatedFields?: List<QuickSightDashboardCalculatedField>;
  /**
   * An array of dataset identifier declarations. With this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataSetIdentifierDeclaration](aws-properties-quicksight-dashboard-datasetidentifierdeclaration.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifierDeclarations: List<QuickSightDashboardDataSetIdentifierDeclaration>;
  /**
   * An array of dashboard-level column configurations. Column configurations are used to set the default formatting for a column that is used throughout a dashboard.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnConfiguration](aws-properties-quicksight-dashboard-columnconfiguration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnConfigurations?: List<QuickSightDashboardColumnConfiguration>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisDefaults](aws-properties-quicksight-dashboard-analysisdefaults.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnalysisDefaults?: QuickSightDashboardAnalysisDefaults;
  /**
   * An array of sheet definitions for a dashboard.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetDefinition](aws-properties-quicksight-dashboard-sheetdefinition.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sheets?: List<QuickSightDashboardSheetDefinition>;
  /**
   * The parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object.
   *
   * For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [ParameterDeclaration](aws-properties-quicksight-dashboard-parameterdeclaration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterDeclarations?: List<QuickSightDashboardParameterDeclaration>;
}

/**
 * The aggregated field well of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-scatterplotcategoricallyaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardScatterPlotCategoricallyAggregatedFieldWells {
  /**
   * The category field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightDashboardDimensionField>;
  /**
   * The size field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightDashboardMeasureField>;
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxis?: List<QuickSightDashboardMeasureField>;
  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxis?: List<QuickSightDashboardMeasureField>;
}

/**
 * The options that determine the default settings for a paginated layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultpaginatedlayoutconfiguration.html}
 **/
export interface QuickSightDashboardDefaultPaginatedLayoutConfiguration {
  /**
   * The options that determine the default settings for a section-based layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultSectionBasedLayoutConfiguration](aws-properties-quicksight-dashboard-defaultsectionbasedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionBased?: QuickSightDashboardDefaultSectionBasedLayoutConfiguration;
}

/**
 * The measure type field with numerical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericalmeasurefield.html}
 **/
export interface QuickSightDashboardNumericalMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-dashboard-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightDashboardNumericalAggregationFunction;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-dashboard-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardNumberFormatConfiguration;
  /**
   * The column that is used in the `NumericalMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * A control from a date parameter that specifies date and time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdatetimepickercontrol.html}
 **/
export interface QuickSightDashboardParameterDateTimePickerControl {
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
   * _Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-dashboard-datetimepickercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardDateTimePickerControlDisplayOptions;
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
 * A grouping of individual filters. Filter groups are applied to the same group of visuals.
 *
 * For more information, see [Adding filter conditions (group filters) with AND and OR operators](https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtergroup.html}
 **/
export interface QuickSightDashboardFilterGroup {
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
   * _Type_: List of [Filter](aws-properties-quicksight-dashboard-filter.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters: List<QuickSightDashboardFilter>;
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
   * _Type_: [FilterScopeConfiguration](aws-properties-quicksight-dashboard-filterscopeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeConfiguration: QuickSightDashboardFilterScopeConfiguration;
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
 * The options that determine the presentation of the `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartoptions.html}
 **/
export interface QuickSightDashboardGaugeChartOptions {
  /**
   * The arc configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ArcConfiguration](aws-properties-quicksight-dashboard-arcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arc?: QuickSightDashboardArcConfiguration;
  /**
   * The comparison configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonConfiguration](aws-properties-quicksight-dashboard-comparisonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison?: QuickSightDashboardComparisonConfiguration;
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
   * _Type_: [ArcAxisConfiguration](aws-properties-quicksight-dashboard-arcaxisconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArcAxis?: QuickSightDashboardArcAxisConfiguration;
  /**
   * The options that determine the primary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueFontConfiguration?: QuickSightDashboardFontConfiguration;
}

/**
 * Dashboard source entity.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardsourceentity.html}
 **/
export interface QuickSightDashboardDashboardSourceEntity {
  /**
   * Source template.
   *
   * _Required_: No
   *
   * _Type_: [DashboardSourceTemplate](aws-properties-quicksight-dashboard-dashboardsourcetemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceTemplate?: QuickSightDashboardDashboardSourceTemplate;
}

/**
 * The pagination configuration for a table visual or boxplot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-paginationconfiguration.html}
 **/
export interface QuickSightDashboardPaginationConfiguration {
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
 * The configuration options to sort aggregated values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-aggregationsortconfiguration.html}
 **/
export interface QuickSightDashboardAggregationSortConfiguration {
  /**
   * The function that aggregates the values in `Column`.
   *
   * _Required_: Yes
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-dashboard-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction: QuickSightDashboardAggregationFunction;
  /**
   * The sort direction of values.
   */
  SortDirection: Value<string>;
  /**
   * The column that determines the sort order of aggregated values.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
}

/**
 * The configuration of a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutconfiguration.html}
 **/
export interface QuickSightDashboardFreeFormLayoutConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-freeformlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions?: QuickSightDashboardFreeFormLayoutCanvasSizeOptions;
  /**
   * The elements that are included in a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FreeFormLayoutElement](aws-properties-quicksight-dashboard-freeformlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightDashboardFreeFormLayoutElement>;
}

/**
 * A list of Amazon QuickSight parameters and the list's override values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameters.html}
 **/
export interface QuickSightDashboardParameters {
  /**
   * The parameters that have a data type of string.
   *
   * _Required_: No
   *
   * _Type_: List of [StringParameter](aws-properties-quicksight-dashboard-stringparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringParameters?: List<QuickSightDashboardStringParameter>;
  /**
   * The parameters that have a data type of decimal.
   *
   * _Required_: No
   *
   * _Type_: List of [DecimalParameter](aws-properties-quicksight-dashboard-decimalparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalParameters?: List<QuickSightDashboardDecimalParameter>;
  /**
   * The parameters that have a data type of integer.
   *
   * _Required_: No
   *
   * _Type_: List of [IntegerParameter](aws-properties-quicksight-dashboard-integerparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerParameters?: List<QuickSightDashboardIntegerParameter>;
  /**
   * The parameters that have a data type of date-time.
   *
   * _Required_: No
   *
   * _Type_: List of [DateTimeParameter](aws-properties-quicksight-dashboard-datetimeparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeParameters?: List<QuickSightDashboardDateTimeParameter>;
}

/**
 * The table options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableoptions.html}
 **/
export interface QuickSightDashboardTableOptions {
  /**
   * The table cell style of a table header.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderStyle?: QuickSightDashboardTableCellStyle;
  /**
   * The table cell style of table cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CellStyle?: QuickSightDashboardTableCellStyle;
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
   * _Type_: [RowAlternateColorOptions](aws-properties-quicksight-dashboard-rowalternatecoloroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowAlternateColorOptions?: QuickSightDashboardRowAlternateColorOptions;
}

/**
 * The configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartconfiguration.html}
 **/
export interface QuickSightDashboardLineChartConfiguration {
  /**
   * The sort configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartSortConfiguration](aws-properties-quicksight-dashboard-linechartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardLineChartSortConfiguration;
  /**
   * The legend configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The reference lines configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-dashboard-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightDashboardReferenceLine>;
  /**
   * The data label configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The tooltip configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-dashboard-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightDashboardSmallMultiplesOptions;
  /**
   * The series axis configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-dashboard-lineseriesaxisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightDashboardLineSeriesAxisDisplayOptions;
  /**
   * The visual palette configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
  /**
   * The options that determine the presentation of the x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The options that determine the default presentation of all line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartDefaultSeriesSettings](aws-properties-quicksight-dashboard-linechartdefaultseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultSeriesSettings?: QuickSightDashboardLineChartDefaultSeriesSettings;
  /**
   * The options that determine the presentation of the secondary y-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The forecast configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [ForecastConfiguration](aws-properties-quicksight-dashboard-forecastconfiguration.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForecastConfigurations?: List<QuickSightDashboardForecastConfiguration>;
  /**
   * The series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [SeriesItem](aws-properties-quicksight-dashboard-seriesitem.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Series?: List<QuickSightDashboardSeriesItem>;
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
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The default configuration of a line chart's contribution analysis.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-dashboard-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightDashboardContributionAnalysisDefault>;
  /**
   * The field well configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartFieldWells](aws-properties-quicksight-dashboard-linechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardLineChartFieldWells;
  /**
   * The series axis configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-dashboard-lineseriesaxisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisDisplayOptions?: QuickSightDashboardLineSeriesAxisDisplayOptions;
  /**
   * The options that determine the presentation of the x-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
}

/**
 * The sort configuration of a `ComboChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartsortconfiguration.html}
 **/
export interface QuickSightDashboardComboChartSortConfiguration {
  /**
   * The sort configuration of the color field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The item limit configuration of the color field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The item limit configuration for the category field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The sort configuration of the category field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * The field well configuration of a heat map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-heatmapfieldwells.html}
 **/
export interface QuickSightDashboardHeatMapFieldWells {
  /**
   * The aggregated field wells of a heat map.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapAggregatedFieldWells](aws-properties-quicksight-dashboard-heatmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapAggregatedFieldWells?: QuickSightDashboardHeatMapAggregatedFieldWells;
}

/**
 * The URL configuration for a table field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldurlconfiguration.html}
 **/
export interface QuickSightDashboardTableFieldURLConfiguration {
  /**
   * The link configuration of a table field URL.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldLinkConfiguration](aws-properties-quicksight-dashboard-tablefieldlinkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinkConfiguration?: QuickSightDashboardTableFieldLinkConfiguration;
  /**
   * The image configuration of a table field URL.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldImageConfiguration](aws-properties-quicksight-dashboard-tablefieldimageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageConfiguration?: QuickSightDashboardTableFieldImageConfiguration;
}

/**
 * Dashboard source template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardsourcetemplate.html}
 **/
export interface QuickSightDashboardDashboardSourceTemplate {
  /**
   * Dataset references.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataSetReference](aws-properties-quicksight-dashboard-datasetreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetReferences: List<QuickSightDashboardDataSetReference>;
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
 * Defines different defaults to the users or groups based on mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dynamicdefaultvalue.html}
 **/
export interface QuickSightDashboardDynamicDefaultValue {
  /**
   * The column that contains the group name.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupNameColumn?: QuickSightDashboardColumnIdentifier;
  /**
   * The column that contains the default value of each user or group.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValueColumn: QuickSightDashboardColumnIdentifier;
  /**
   * The column that contains the username.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserNameColumn?: QuickSightDashboardColumnIdentifier;
}

/**
 * The aggregated field wells of a combo chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardComboChartAggregatedFieldWells {
  /**
   * The aggregated `BarValues` field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarValues?: List<QuickSightDashboardMeasureField>;
  /**
   * The aggregated category field wells of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightDashboardDimensionField>;
  /**
   * The aggregated colors field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightDashboardDimensionField>;
  /**
   * The aggregated `LineValues` field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineValues?: List<QuickSightDashboardMeasureField>;
}

/**
 * The unique values computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-uniquevaluescomputation.html}
 **/
export interface QuickSightDashboardUniqueValuesComputation {
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightDashboardDimensionField;
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
 * The configuration for a `HistogramVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-histogramconfiguration.html}
 **/
export interface QuickSightDashboardHistogramConfiguration {
  /**
   * The options that determine the presentation of the y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
  /**
   * The data label configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The options that determine the presentation of histogram bins.
   *
   * _Required_: No
   *
   * _Type_: [HistogramBinOptions](aws-properties-quicksight-dashboard-histogrambinoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinOptions?: QuickSightDashboardHistogramBinOptions;
  /**
   * The field well configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [HistogramFieldWells](aws-properties-quicksight-dashboard-histogramfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardHistogramFieldWells;
  /**
   * The tooltip configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The options that determine the presentation of the x-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The visual palette configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
  /**
   * The options that determine the presentation of the x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightDashboardAxisDisplayOptions;
}

/**
 * A `NumericRangeFilter` filters values that are within the value range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericrangefilter.html}
 **/
export interface QuickSightDashboardNumericRangeFilter {
  /**
   * The aggregation function of the filter.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-dashboard-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightDashboardAggregationFunction;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
   * _Type_: [NumericRangeFilterValue](aws-properties-quicksight-dashboard-numericrangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMinimum?: QuickSightDashboardNumericRangeFilterValue;
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
   * _Type_: [NumericRangeFilterValue](aws-properties-quicksight-dashboard-numericrangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMaximum?: QuickSightDashboardNumericRangeFilterValue;
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
 * The total aggregation computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totalaggregationcomputation.html}
 **/
export interface QuickSightDashboardTotalAggregationComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: QuickSightDashboardMeasureField;
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
 * Line styles options for a line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartlinestylesettings.html}
 **/
export interface QuickSightDashboardLineChartLineStyleSettings {
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
 * The data field series item configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datafieldseriesitem.html}
 **/
export interface QuickSightDashboardDataFieldSeriesItem {
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
   * _Type_: [LineChartSeriesSettings](aws-properties-quicksight-dashboard-linechartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: QuickSightDashboardLineChartSeriesSettings;
}

/**
 * The field well configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sankeydiagramfieldwells.html}
 **/
export interface QuickSightDashboardSankeyDiagramFieldWells {
  /**
   * The field well configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramAggregatedFieldWells](aws-properties-quicksight-dashboard-sankeydiagramaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SankeyDiagramAggregatedFieldWells?: QuickSightDashboardSankeyDiagramAggregatedFieldWells;
}

/**
 * The field wells of a `BarChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-barchartfieldwells.html}
 **/
export interface QuickSightDashboardBarChartFieldWells {
  /**
   * The aggregated field wells of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [BarChartAggregatedFieldWells](aws-properties-quicksight-dashboard-barchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarChartAggregatedFieldWells?: QuickSightDashboardBarChartAggregatedFieldWells;
}

/**
 * The period over period computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-periodoverperiodcomputation.html}
 **/
export interface QuickSightDashboardPeriodOverPeriodComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightDashboardMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightDashboardDimensionField;
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
 * An element within a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutelement.html}
 **/
export interface QuickSightDashboardGridLayoutElement {
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
 * A parameter declaration for the `Integer` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-integerparameterdeclaration.html}
 **/
export interface QuickSightDashboardIntegerParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-dashboard-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightDashboardMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [IntegerDefaultValues](aws-properties-quicksight-dashboard-integerdefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightDashboardIntegerDefaultValues;
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
   * _Type_: [IntegerValueWhenUnsetConfiguration](aws-properties-quicksight-dashboard-integervaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightDashboardIntegerValueWhenUnsetConfiguration;
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
 * The range setup of a numeric axis display range.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdisplayrange.html}
 **/
export interface QuickSightDashboardAxisDisplayRange {
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
   * _Type_: [AxisDisplayMinMaxRange](aws-properties-quicksight-dashboard-axisdisplayminmaxrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinMax?: QuickSightDashboardAxisDisplayMinMaxRange;
}

/**
 * The options that style a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionstyle.html}
 **/
export interface QuickSightDashboardSectionStyle {
  /**
   * The spacing between section content and its top, bottom, left, and right edges.
   *
   * There is no padding by default.
   *
   * _Required_: No
   *
   * _Type_: [Spacing](aws-properties-quicksight-dashboard-spacing.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Padding?: QuickSightDashboardSpacing;
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
 * A control to display a text box that is used to enter multiple entries.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtertextareacontrol.html}
 **/
export interface QuickSightDashboardFilterTextAreaControl {
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
   * _Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-dashboard-textareacontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardTextAreaControlDisplayOptions;
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
 * The subtitle label options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.html}
 **/
export interface QuickSightDashboardVisualSubtitleLabelOptions {
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
   * _Type_: [LongFormatText](aws-properties-quicksight-dashboard-longformattext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatText?: QuickSightDashboardLongFormatText;
}

/**
 * The configuration of the `Select all` options in a list control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontrolselectalloptions.html}
 **/
export interface QuickSightDashboardListControlSelectAllOptions {
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
 * The exclude period of `TimeRangeFilter` or `RelativeDatesFilter`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-excludeperiodconfiguration.html}
 **/
export interface QuickSightDashboardExcludePeriodConfiguration {
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
 * Aggregation for numerical values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericalaggregationfunction.html}
 **/
export interface QuickSightDashboardNumericalAggregationFunction {
  /**
   * An aggregation based on the percentile of values in a dimension or measure.
   *
   * _Required_: No
   *
   * _Type_: [PercentileAggregation](aws-properties-quicksight-dashboard-percentileaggregation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentileAggregation?: QuickSightDashboardPercentileAggregation;
  /**
   * Built-in aggregation functions for numerical values.
   */
  SimpleNumericalAggregation?: Value<string>;
}

/**
 * The logarithmic axis scale setup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislogarithmicscale.html}
 **/
export interface QuickSightDashboardAxisLogarithmicScale {
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
 * A pie or donut chart.
 *
 * The `PieChartVisual` structure describes a visual that is a member of the pie chart family.
 *
 * The following charts can be described by using this structure:
 *
 * For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the _Amazon QuickSight User Guide_.
 *
 * For more information, see [Using donut charts](https://docs.aws.amazon.com/quicksight/latest/user/donut-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartvisual.html}
 **/
export interface QuickSightDashboardPieChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [PieChartConfiguration](aws-properties-quicksight-dashboard-piechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardPieChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The word cloud options for a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudoptions.html}
 **/
export interface QuickSightDashboardWordCloudOptions {
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
 * The range options for the data zoom scroll bar.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visiblerangeoptions.html}
 **/
export interface QuickSightDashboardVisibleRangeOptions {
  /**
   * The percent range in the visible range.
   *
   * _Required_: No
   *
   * _Type_: [PercentVisibleRange](aws-properties-quicksight-dashboard-percentvisiblerange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentRange?: QuickSightDashboardPercentVisibleRange;
}

/**
 * The options that determine the presentation of trend arrows in a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-trendarrowoptions.html}
 **/
export interface QuickSightDashboardTrendArrowOptions {
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
 * The configuration of an insight visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-insightconfiguration.html}
 **/
export interface QuickSightDashboardInsightConfiguration {
  /**
   * The computations configurations of the insight visual
   *
   * _Required_: No
   *
   * _Type_: List of [Computation](aws-properties-quicksight-dashboard-computation.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Computations?: List<QuickSightDashboardComputation>;
  /**
   * The custom narrative of the insight visual.
   *
   * _Required_: No
   *
   * _Type_: [CustomNarrativeOptions](aws-properties-quicksight-dashboard-customnarrativeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomNarrative?: QuickSightDashboardCustomNarrativeOptions;
}

/**
 * The options for configuring a donut chart or pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-donutoptions.html}
 **/
export interface QuickSightDashboardDonutOptions {
  /**
   * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
   *
   * _Required_: No
   *
   * _Type_: [DonutCenterOptions](aws-properties-quicksight-dashboard-donutcenteroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DonutCenterOptions?: QuickSightDashboardDonutCenterOptions;
  /**
   * The option for define the arc of the chart shape. Valid values are as follows:
   */
  ArcOptions?: QuickSightDashboardArcOptions;
}

/**
 * The liner axis scale setup.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislinearscale.html}
 **/
export interface QuickSightDashboardAxisLinearScale {
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
 * The free-form layout configuration of a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformsectionlayoutconfiguration.html}
 **/
export interface QuickSightDashboardFreeFormSectionLayoutConfiguration {
  /**
   * The elements that are included in the free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FreeFormLayoutElement](aws-properties-quicksight-dashboard-freeformlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightDashboardFreeFormLayoutElement>;
}

/**
 * Options that determine the layout and display options of a chart's small multiples.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-smallmultiplesoptions.html}
 **/
export interface QuickSightDashboardSmallMultiplesOptions {
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
   * _Type_: [PanelConfiguration](aws-properties-quicksight-dashboard-panelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PanelConfiguration?: QuickSightDashboardPanelConfiguration;
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
 * A visual displayed on a sheet in an analysis, dashboard, or template.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visual.html}
 **/
export interface QuickSightDashboardVisual {
  /**
   * A funnel chart.
   *
   * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartVisual](aws-properties-quicksight-dashboard-funnelchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunnelChartVisual?: QuickSightDashboardFunnelChartVisual;
  /**
   * A filled map.
   *
   * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapVisual](aws-properties-quicksight-dashboard-filledmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilledMapVisual?: QuickSightDashboardFilledMapVisual;
  /**
   * A box plot.
   *
   * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotVisual](aws-properties-quicksight-dashboard-boxplotvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotVisual?: QuickSightDashboardBoxPlotVisual;
  /**
   * A waterfall chart.
   *
   * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallVisual](aws-properties-quicksight-dashboard-waterfallvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallVisual?: QuickSightDashboardWaterfallVisual;
  /**
   * A visual that contains custom content.
   *
   * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomContentVisual](aws-properties-quicksight-dashboard-customcontentvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomContentVisual?: QuickSightDashboardCustomContentVisual;
  /**
   * A pie or donut chart.
   *
   * For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PieChartVisual](aws-properties-quicksight-dashboard-piechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PieChartVisual?: QuickSightDashboardPieChartVisual;
  /**
   * A key performance indicator (KPI).
   *
   * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [KPIVisual](aws-properties-quicksight-dashboard-kpivisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KPIVisual?: QuickSightDashboardKPIVisual;
  /**
   * A histogram.
   *
   * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [HistogramVisual](aws-properties-quicksight-dashboard-histogramvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistogramVisual?: QuickSightDashboardHistogramVisual;
  /**
   * A table visual.
   *
   * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [TableVisual](aws-properties-quicksight-dashboard-tablevisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableVisual?: QuickSightDashboardTableVisual;
  /**
   * A pivot table.
   *
   * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableVisual](aws-properties-quicksight-dashboard-pivottablevisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PivotTableVisual?: QuickSightDashboardPivotTableVisual;
  /**
   * A geospatial map or a points on map visual.
   *
   * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapVisual](aws-properties-quicksight-dashboard-geospatialmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeospatialMapVisual?: QuickSightDashboardGeospatialMapVisual;
  /**
   * A bar chart.
   *
   * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [BarChartVisual](aws-properties-quicksight-dashboard-barchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarChartVisual?: QuickSightDashboardBarChartVisual;
  /**
   * A scatter plot.
   *
   * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotVisual](aws-properties-quicksight-dashboard-scatterplotvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotVisual?: QuickSightDashboardScatterPlotVisual;
  /**
   * A radar chart visual.
   *
   * For more information, see [Using radar charts](https://docs.aws.amazon.com/quicksight/latest/user/radar-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartVisual](aws-properties-quicksight-dashboard-radarchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RadarChartVisual?: QuickSightDashboardRadarChartVisual;
  /**
   * A heat map.
   *
   * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapVisual](aws-properties-quicksight-dashboard-heatmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapVisual?: QuickSightDashboardHeatMapVisual;
  /**
   * A tree map.
   *
   * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapVisual](aws-properties-quicksight-dashboard-treemapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapVisual?: QuickSightDashboardTreeMapVisual;
  /**
   * A combo chart.
   *
   * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartVisual](aws-properties-quicksight-dashboard-combochartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComboChartVisual?: QuickSightDashboardComboChartVisual;
  /**
   * A word cloud.
   *
   * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudVisual](aws-properties-quicksight-dashboard-wordcloudvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudVisual?: QuickSightDashboardWordCloudVisual;
  /**
   * An insight visual.
   *
   * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [InsightVisual](aws-properties-quicksight-dashboard-insightvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightVisual?: QuickSightDashboardInsightVisual;
  /**
   * A sankey diagram.
   *
   * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramVisual](aws-properties-quicksight-dashboard-sankeydiagramvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SankeyDiagramVisual?: QuickSightDashboardSankeyDiagramVisual;
  /**
   * A gauge chart.
   *
   * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartVisual](aws-properties-quicksight-dashboard-gaugechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GaugeChartVisual?: QuickSightDashboardGaugeChartVisual;
  /**
   * A line chart.
   *
   * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [LineChartVisual](aws-properties-quicksight-dashboard-linechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineChartVisual?: QuickSightDashboardLineChartVisual;
  /**
   * An empty visual.
   *
   * _Required_: No
   *
   * _Type_: [EmptyVisual](aws-properties-quicksight-dashboard-emptyvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmptyVisual?: QuickSightDashboardEmptyVisual;
}

/**
 * A control from a date filter that is used to specify the relative date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterrelativedatetimecontrol.html}
 **/
export interface QuickSightDashboardFilterRelativeDateTimeControl {
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
   * _Type_: [RelativeDateTimeControlDisplayOptions](aws-properties-quicksight-dashboard-relativedatetimecontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardRelativeDateTimeControlDisplayOptions;
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
 * The options of a box plot visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotoptions.html}
 **/
export interface QuickSightDashboardBoxPlotOptions {
  /**
   * The style options of the box plot.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotStyleOptions](aws-properties-quicksight-dashboard-boxplotstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleOptions?: QuickSightDashboardBoxPlotStyleOptions;
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
 * A control to display a text box that is used to enter multiple entries.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parametertextareacontrol.html}
 **/
export interface QuickSightDashboardParameterTextAreaControl {
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
   * _Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-dashboard-textareacontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardTextAreaControlDisplayOptions;
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
 * A `RelativeDatesFilter` filters relative dates values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-relativedatesfilter.html}
 **/
export interface QuickSightDashboardRelativeDatesFilter {
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
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
   * _Type_: [AnchorDateConfiguration](aws-properties-quicksight-dashboard-anchordateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnchorDateConfiguration: QuickSightDashboardAnchorDateConfiguration;
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
   * _Type_: [ExcludePeriodConfiguration](aws-properties-quicksight-dashboard-excludeperiodconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludePeriodConfiguration?: QuickSightDashboardExcludePeriodConfiguration;
}

/**
 * Conditional formatting options of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartconditionalformattingoption.html}
 **/
export interface QuickSightDashboardGaugeChartConditionalFormattingOption {
  /**
   * The options that determine the presentation of the arc of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartArcConditionalFormatting](aws-properties-quicksight-dashboard-gaugechartarcconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arc?: QuickSightDashboardGaugeChartArcConditionalFormatting;
  /**
   * The conditional formatting for the primary value of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartPrimaryValueConditionalFormatting](aws-properties-quicksight-dashboard-gaugechartprimaryvalueconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValue?: QuickSightDashboardGaugeChartPrimaryValueConditionalFormatting;
}

/**
 * The aggregated field well of the filled map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardFilledMapAggregatedFieldWells {
  /**
   * The aggregated color field well of a filled map. Values are aggregated based on location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
  /**
   * The aggregated location field well of the filled map. Values are grouped by location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Geospatial?: List<QuickSightDashboardDimensionField>;
}

/**
 * A combo chart.
 *
 * The `ComboChartVisual` includes stacked bar combo charts and clustered bar combo charts
 *
 * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-combochartvisual.html}
 **/
export interface QuickSightDashboardComboChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [ComboChartConfiguration](aws-properties-quicksight-dashboard-combochartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardComboChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The sort configuration of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapsortconfiguration.html}
 **/
export interface QuickSightDashboardTreeMapSortConfiguration {
  /**
   * The sort configuration of group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapSort?: List<QuickSightDashboardFieldSortOptions>;
  /**
   * The limit on the number of groups that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapGroupItemsLimitConfiguration?: QuickSightDashboardItemsLimitConfiguration;
}

/**
 * The field wells of a tree map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapfieldwells.html}
 **/
export interface QuickSightDashboardTreeMapFieldWells {
  /**
   * The aggregated field wells of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapAggregatedFieldWells](aws-properties-quicksight-dashboard-treemapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapAggregatedFieldWells?: QuickSightDashboardTreeMapAggregatedFieldWells;
}

/**
 * The options that determine the presentation of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpioptions.html}
 **/
export interface QuickSightDashboardKPIOptions {
  /**
   * The options that determine the secondary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryValueFontConfiguration?: QuickSightDashboardFontConfiguration;
  /**
   * The options that determine the presentation of trend arrows in a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [TrendArrowOptions](aws-properties-quicksight-dashboard-trendarrowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendArrows?: QuickSightDashboardTrendArrowOptions;
  /**
   * The options that determine the presentation of the secondary value of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [SecondaryValueOptions](aws-properties-quicksight-dashboard-secondaryvalueoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryValue?: QuickSightDashboardSecondaryValueOptions;
  /**
   * The comparison configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonConfiguration](aws-properties-quicksight-dashboard-comparisonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison?: QuickSightDashboardComparisonConfiguration;
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
   * _Type_: [ProgressBarOptions](aws-properties-quicksight-dashboard-progressbaroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgressBar?: QuickSightDashboardProgressBarOptions;
  /**
   * The options that determine the primary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueFontConfiguration?: QuickSightDashboardFontConfiguration;
}

/**
 * The configuration of target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filteroperationtargetvisualsconfiguration.html}
 **/
export interface QuickSightDashboardFilterOperationTargetVisualsConfiguration {
  /**
   * The configuration of the same-sheet target visuals that you want to be filtered.
   *
   * _Required_: No
   *
   * _Type_: [SameSheetTargetVisualConfiguration](aws-properties-quicksight-dashboard-samesheettargetvisualconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SameSheetTargetVisualConfiguration?: QuickSightDashboardSameSheetTargetVisualConfiguration;
}

/**
 * Export to .csv option.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exporttocsvoption.html}
 **/
export interface QuickSightDashboardExportToCSVOption {
  /**
   * Availability status.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * A table visual.
 *
 * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablevisual.html}
 **/
export interface QuickSightDashboardTableVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TableConditionalFormatting](aws-properties-quicksight-dashboard-tableconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightDashboardTableConditionalFormatting;
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
   * _Type_: [TableConfiguration](aws-properties-quicksight-dashboard-tableconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardTableConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}

/**
 * The URL operation that opens a link to another webpage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionurloperation.html}
 **/
export interface QuickSightDashboardCustomActionURLOperation {
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
 * The shape conditional formatting of a filled map visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-shapeconditionalformat.html}
 **/
export interface QuickSightDashboardShapeConditionalFormat {
  /**
   * The conditional formatting for the shape background color of a filled map visual.
   *
   * _Required_: Yes
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-dashboard-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor: QuickSightDashboardConditionalFormattingColor;
}

/**
 * The field wells of a word cloud visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-wordcloudfieldwells.html}
 **/
export interface QuickSightDashboardWordCloudFieldWells {
  /**
   * The aggregated field wells of a word cloud.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudAggregatedFieldWells](aws-properties-quicksight-dashboard-wordcloudaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudAggregatedFieldWells?: QuickSightDashboardWordCloudAggregatedFieldWells;
}

/**
 * The source controls that are used in a `CascadingControlConfiguration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-cascadingcontrolsource.html}
 **/
export interface QuickSightDashboardCascadingControlSource {
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
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnToMatch?: QuickSightDashboardColumnIdentifier;
}

/**
 * The sort configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartsortconfiguration.html}
 **/
export interface QuickSightDashboardFunnelChartSortConfiguration {
  /**
   * The limit on the number of categories displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightDashboardItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * The forecast computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastcomputation.html}
 **/
export interface QuickSightDashboardForecastComputation {
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
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightDashboardMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightDashboardDimensionField;
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
 * A custom filter that filters based on a single value. This filter can be partially matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customfilterconfiguration.html}
 **/
export interface QuickSightDashboardCustomFilterConfiguration {
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
 * The configuration of adding parameters in action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-setparametervalueconfiguration.html}
 **/
export interface QuickSightDashboardSetParameterValueConfiguration {
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
   * _Type_: [DestinationParameterValueConfiguration](aws-properties-quicksight-dashboard-destinationparametervalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: QuickSightDashboardDestinationParameterValueConfiguration;
}

/**
 * The sort by field for the field sort options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablesortby.html}
 **/
export interface QuickSightDashboardPivotTableSortBy {
  /**
   * The field sort (field id, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [FieldSort](aws-properties-quicksight-dashboard-fieldsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: QuickSightDashboardFieldSort;
  /**
   * The data path sort (data path value, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [DataPathSort](aws-properties-quicksight-dashboard-datapathsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPath?: QuickSightDashboardDataPathSort;
  /**
   * The column sort (field id, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [ColumnSort](aws-properties-quicksight-dashboard-columnsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column?: QuickSightDashboardColumnSort;
}

/**
 * The text format for the title.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-shortformattext.html}
 **/
export interface QuickSightDashboardShortFormatText {
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
 * The field series item configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldseriesitem.html}
 **/
export interface QuickSightDashboardFieldSeriesItem {
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
   * _Type_: [LineChartSeriesSettings](aws-properties-quicksight-dashboard-linechartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: QuickSightDashboardLineChartSeriesSettings;
}

/**
 * The configuration of a page break for a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sectionpagebreakconfiguration.html}
 **/
export interface QuickSightDashboardSectionPageBreakConfiguration {
  /**
   * The configuration of a page break after a section.
   *
   * _Required_: No
   *
   * _Type_: [SectionAfterPageBreak](aws-properties-quicksight-dashboard-sectionafterpagebreak.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  After?: QuickSightDashboardSectionAfterPageBreak;
}

/**
 * The field label type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldlabeltype.html}
 **/
export interface QuickSightDashboardFieldLabelType {
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
 * A custom action defined on a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualcustomaction.html}
 **/
export interface QuickSightDashboardVisualCustomAction {
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
   * _Type_: List of [VisualCustomActionOperation](aws-properties-quicksight-dashboard-visualcustomactionoperation.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionOperations: List<QuickSightDashboardVisualCustomActionOperation>;
}

/**
 * The conditional formatting for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableconditionalformatting.html}
 **/
export interface QuickSightDashboardTableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [TableConditionalFormattingOption](aws-properties-quicksight-dashboard-tableconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightDashboardTableConditionalFormattingOption>;
}

/**
 * The custom narrative options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customnarrativeoptions.html}
 **/
export interface QuickSightDashboardCustomNarrativeOptions {
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
 * Dashboard publish options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dashboardpublishoptions.html}
 **/
export interface QuickSightDashboardDashboardPublishOptions {
  /**
   * Sheet controls option.
   *
   * _Required_: No
   *
   * _Type_: [SheetControlsOption](aws-properties-quicksight-dashboard-sheetcontrolsoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetControlsOption?: QuickSightDashboardSheetControlsOption;
  /**
   * Export to .csv option.
   *
   * _Required_: No
   *
   * _Type_: [ExportToCSVOption](aws-properties-quicksight-dashboard-exporttocsvoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExportToCSVOption?: QuickSightDashboardExportToCSVOption;
  /**
   * The data point menu label options of a dashboard.
   *
   * _Required_: No
   *
   * _Type_: [DataPointMenuLabelOption](aws-properties-quicksight-dashboard-datapointmenulabeloption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPointMenuLabelOption?: QuickSightDashboardDataPointMenuLabelOption;
  /**
   * The drill-down options of data points in a dashboard.
   *
   * _Required_: No
   *
   * _Type_: [DataPointDrillUpDownOption](aws-properties-quicksight-dashboard-datapointdrillupdownoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPointDrillUpDownOption?: QuickSightDashboardDataPointDrillUpDownOption;
  /**
   * Ad hoc (one-time) filtering option.
   *
   * _Required_: No
   *
   * _Type_: [AdHocFilteringOption](aws-properties-quicksight-dashboard-adhocfilteringoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdHocFilteringOption?: QuickSightDashboardAdHocFilteringOption;
  /**
   * The visual publish options of a visual in a dashboard.
   *
   * _Required_: No
   *
   * _Type_: [DashboardVisualPublishOptions](aws-properties-quicksight-dashboard-dashboardvisualpublishoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPublishOptions?: QuickSightDashboardDashboardVisualPublishOptions;
  /**
   * The menu options of a visual in a dashboard.
   *
   * _Required_: No
   *
   * _Type_: [VisualMenuOption](aws-properties-quicksight-dashboard-visualmenuoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualMenuOption?: QuickSightDashboardVisualMenuOption;
  /**
   * The data point tool tip options of a dashboard.
   *
   * _Required_: No
   *
   * _Type_: [DataPointTooltipOption](aws-properties-quicksight-dashboard-datapointtooltipoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPointTooltipOption?: QuickSightDashboardDataPointTooltipOption;
  /**
   * The axis sort options of a dashboard.
   *
   * _Required_: No
   *
   * _Type_: [VisualAxisSortOption](aws-properties-quicksight-dashboard-visualaxissortoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualAxisSortOption?: QuickSightDashboardVisualAxisSortOption;
  /**
   * Determines if hidden fields are exported with a dashboard.
   *
   * _Required_: No
   *
   * _Type_: [ExportWithHiddenFieldsOption](aws-properties-quicksight-dashboard-exportwithhiddenfieldsoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExportWithHiddenFieldsOption?: QuickSightDashboardExportWithHiddenFieldsOption;
  /**
   * The sheet layout maximization options of a dashbaord.
   *
   * _Required_: No
   *
   * _Type_: [SheetLayoutElementMaximizationOption](aws-properties-quicksight-dashboard-sheetlayoutelementmaximizationoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetLayoutElementMaximizationOption?: QuickSightDashboardSheetLayoutElementMaximizationOption;
}

/**
 * The series axis configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-lineseriesaxisdisplayoptions.html}
 **/
export interface QuickSightDashboardLineSeriesAxisDisplayOptions {
  /**
   * The configuration options that determine how missing data is treated during the rendering of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MissingDataConfiguration](aws-properties-quicksight-dashboard-missingdataconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MissingDataConfigurations?: List<QuickSightDashboardMissingDataConfiguration>;
  /**
   * The options that determine the presentation of the line series axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-dashboard-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisOptions?: QuickSightDashboardAxisDisplayOptions;
}

/**
 * The options that determine the presentation of the secondary value of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-secondaryvalueoptions.html}
 **/
export interface QuickSightDashboardSecondaryValueOptions {
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
 * The configuration of the search options in a list control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-listcontrolsearchoptions.html}
 **/
export interface QuickSightDashboardListControlSearchOptions {
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
 * The border options for a table border.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tableborderoptions.html}
 **/
export interface QuickSightDashboardTableBorderOptions {
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
 * A geospatial map or a points on map visual.
 *
 * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialmapvisual.html}
 **/
export interface QuickSightDashboardGeospatialMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [GeospatialMapConfiguration](aws-properties-quicksight-dashboard-geospatialmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardGeospatialMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * A line chart.
 *
 * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartvisual.html}
 **/
export interface QuickSightDashboardLineChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [LineChartConfiguration](aws-properties-quicksight-dashboard-linechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardLineChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * Provides the forecast to meet the target for a particular date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-whatifpointscenario.html}
 **/
export interface QuickSightDashboardWhatIfPointScenario {
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
 * The URL content (text, icon) for the table link configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldlinkcontentconfiguration.html}
 **/
export interface QuickSightDashboardTableFieldLinkContentConfiguration {
  /**
   * The custom icon content for the table link content configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldCustomIconContent](aws-properties-quicksight-dashboard-tablefieldcustomiconcontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomIconContent?: QuickSightDashboardTableFieldCustomIconContent;
  /**
   * The custom text content (value, font configuration) for the table link content configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldCustomTextContent](aws-properties-quicksight-dashboard-tablefieldcustomtextcontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomTextContent?: QuickSightDashboardTableFieldCustomTextContent;
}

/**
 * The tooltip item for the fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldtooltipitem.html}
 **/
export interface QuickSightDashboardFieldTooltipItem {
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
 * The configuration that defines the default value of a `Decimal` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimalvaluewhenunsetconfiguration.html}
 **/
export interface QuickSightDashboardDecimalValueWhenUnsetConfiguration {
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
 * The scope configuration for a `FilterGroup`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterscopeconfiguration.html}
 **/
export interface QuickSightDashboardFilterScopeConfiguration {
  /**
   * The configuration for applying a filter to specific sheets.
   *
   * _Required_: No
   *
   * _Type_: [SelectedSheetsFilterScopeConfiguration](aws-properties-quicksight-dashboard-selectedsheetsfilterscopeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedSheets?: QuickSightDashboardSelectedSheetsFilterScopeConfiguration;
}

/**
 * The optional configuration of subtotals cells.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablefieldsubtotaloptions.html}
 **/
export interface QuickSightDashboardPivotTableFieldSubtotalOptions {
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
 * The data configuration of the reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinedataconfiguration.html}
 **/
export interface QuickSightDashboardReferenceLineDataConfiguration {
  /**
   * The dynamic configuration of the reference line data configuration.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineDynamicDataConfiguration](aws-properties-quicksight-dashboard-referencelinedynamicdataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicConfiguration?: QuickSightDashboardReferenceLineDynamicDataConfiguration;
  /**
   * The axis binding type of the reference line. Choose one of the following options:
   */
  AxisBinding?: Value<string>;
  /**
   * The static data configuration of the reference line data configuration.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineStaticDataConfiguration](aws-properties-quicksight-dashboard-referencelinestaticdataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticConfiguration?: QuickSightDashboardReferenceLineStaticDataConfiguration;
}

/**
 * The total options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-totaloptions.html}
 **/
export interface QuickSightDashboardTotalOptions {
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-dashboard-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightDashboardTableCellStyle;
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
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterslidercontrol.html}
 **/
export interface QuickSightDashboardParameterSliderControl {
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
   * _Type_: [SliderControlDisplayOptions](aws-properties-quicksight-dashboard-slidercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardSliderControlDisplayOptions;
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
 * Determines if hidden fields are included in an exported dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-exporthiddenfieldsoption.html}
 **/
export interface QuickSightDashboardExportHiddenFieldsOption {
  /**
   * The status of the export hidden fields options of a dashbaord.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * A parameter declaration for the `String` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringparameterdeclaration.html}
 **/
export interface QuickSightDashboardStringParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-dashboard-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightDashboardMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [StringDefaultValues](aws-properties-quicksight-dashboard-stringdefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightDashboardStringDefaultValues;
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
   * _Type_: [StringValueWhenUnsetConfiguration](aws-properties-quicksight-dashboard-stringvaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightDashboardStringValueWhenUnsetConfiguration;
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
 * Formatting configuration for `DateTime` fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeformatconfiguration.html}
 **/
export interface QuickSightDashboardDateTimeFormatConfiguration {
  /**
   * The formatting configuration for numeric `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-dashboard-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericFormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-dashboard-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightDashboardNullValueFormatConfiguration;
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
 * The style options of the box plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotstyleoptions.html}
 **/
export interface QuickSightDashboardBoxPlotStyleOptions {
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
 * A control to display a dropdown list with buttons that are used to select a single value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filterdropdowncontrol.html}
 **/
export interface QuickSightDashboardFilterDropDownControl {
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
   * _Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-dashboard-dropdowncontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightDashboardDropDownControlDisplayOptions;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightDashboardCascadingControlConfiguration;
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
   * _Type_: [FilterSelectableValues](aws-properties-quicksight-dashboard-filterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightDashboardFilterSelectableValues;
}

/**
 * The options that determine the numeric format configuration.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericformatconfiguration.html}
 **/
export interface QuickSightDashboardNumericFormatConfiguration {
  /**
   * The options that determine the number display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-dashboard-numberdisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberDisplayFormatConfiguration?: QuickSightDashboardNumberDisplayFormatConfiguration;
  /**
   * The options that determine the currency display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [CurrencyDisplayFormatConfiguration](aws-properties-quicksight-dashboard-currencydisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrencyDisplayFormatConfiguration?: QuickSightDashboardCurrencyDisplayFormatConfiguration;
  /**
   * The options that determine the percentage display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-dashboard-percentagedisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentageDisplayFormatConfiguration?: QuickSightDashboardPercentageDisplayFormatConfiguration;
}

/**
 * The field options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldoptions.html}
 **/
export interface QuickSightDashboardTableFieldOptions {
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
   * _Type_: List of [TableFieldOption](aws-properties-quicksight-dashboard-tablefieldoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldOptions?: List<QuickSightDashboardTableFieldOption>;
}

/**
 * The options that determine the arc thickness of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-arcoptions.html}
 **/
export interface QuickSightDashboardArcOptions {
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
 * A `NumericEqualityFilter` filters values that are equal to the specified value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericequalityfilter.html}
 **/
export interface QuickSightDashboardNumericEqualityFilter {
  /**
   * The aggregation function of the filter.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-dashboard-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightDashboardAggregationFunction;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The option that determines the text display size.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fontsize.html}
 **/
export interface QuickSightDashboardFontSize {
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
 * The configuration of the same-sheet target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-samesheettargetvisualconfiguration.html}
 **/
export interface QuickSightDashboardSameSheetTargetVisualConfiguration {
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
 * The series settings of a radar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartseriessettings.html}
 **/
export interface QuickSightDashboardRadarChartSeriesSettings {
  /**
   * The area style settings of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartAreaStyleSettings](aws-properties-quicksight-dashboard-radarchartareastylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AreaStyleSettings?: QuickSightDashboardRadarChartAreaStyleSettings;
}

/**
 * The filter that is applied to the options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetvisualscopingconfiguration.html}
 **/
export interface QuickSightDashboardSheetVisualScopingConfiguration {
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
 * The configuration of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-treemapconfiguration.html}
 **/
export interface QuickSightDashboardTreeMapConfiguration {
  /**
   * The sort configuration of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapSortConfiguration](aws-properties-quicksight-dashboard-treemapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardTreeMapSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-dashboard-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightDashboardDataLabelOptions;
  /**
   * The label options (label text, label visibility) for the colors displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility) of the sizes that are displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapFieldWells](aws-properties-quicksight-dashboard-treemapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardTreeMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The color options (gradient color, point of divergence) of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ColorScale](aws-properties-quicksight-dashboard-colorscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorScale?: QuickSightDashboardColorScale;
  /**
   * The label options (label text, label visibility) of the groups that are displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
}

/**
 * The options for an axis with a numeric field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericaxisoptions.html}
 **/
export interface QuickSightDashboardNumericAxisOptions {
  /**
   * The scale setup of a numeric axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisScale](aws-properties-quicksight-dashboard-axisscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scale?: QuickSightDashboardAxisScale;
  /**
   * The range setup of a numeric axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayRange](aws-properties-quicksight-dashboard-axisdisplayrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: QuickSightDashboardAxisDisplayRange;
}

/**
 * The options that determine the default settings for a section-based layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-defaultsectionbasedlayoutconfiguration.html}
 **/
export interface QuickSightDashboardDefaultSectionBasedLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a section-based layout.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionBasedLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-sectionbasedlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightDashboardSectionBasedLayoutCanvasSizeOptions;
}

/**
 * The contribution analysis visual display for a line, pie, or bar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-contributionanalysisdefault.html}
 **/
export interface QuickSightDashboardContributionAnalysisDefault {
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
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorDimensions: List<QuickSightDashboardColumnIdentifier>;
}

/**
 * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-predefinedhierarchy.html}
 **/
export interface QuickSightDashboardPredefinedHierarchy {
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
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-dashboard-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightDashboardDrillDownFilter>;
  /**
   * The list of columns that define the predefined hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightDashboardColumnIdentifier>;
}

/**
 * The formatting configuration for all types of field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-formatconfiguration.html}
 **/
export interface QuickSightDashboardFormatConfiguration {
  /**
   * Formatting configuration for number fields.
   *
   * _Required_: No
   *
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-dashboard-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberFormatConfiguration?: QuickSightDashboardNumberFormatConfiguration;
  /**
   * Formatting configuration for `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-dashboard-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeFormatConfiguration?: QuickSightDashboardDateTimeFormatConfiguration;
  /**
   * Formatting configuration for string fields.
   *
   * _Required_: No
   *
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-dashboard-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringFormatConfiguration?: QuickSightDashboardStringFormatConfiguration;
}

/**
 * The sort configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpisortconfiguration.html}
 **/
export interface QuickSightDashboardKPISortConfiguration {
  /**
   * The sort configuration of the trend group fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendGroupSort?: List<QuickSightDashboardFieldSortOptions>;
}

/**
 * A column of a data set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnidentifier.html}
 **/
export interface QuickSightDashboardColumnIdentifier {
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
 * The sheet layout maximization options of a dashbaord.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetlayoutelementmaximizationoption.html}
 **/
export interface QuickSightDashboardSheetLayoutElementMaximizationOption {
  /**
   * The status of the sheet layout maximization options of a dashbaord.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * The configuration for a grid layout. Also called a tiled layout.
 *
 * Visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gridlayoutconfiguration.html}
 **/
export interface QuickSightDashboardGridLayoutConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-gridlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions?: QuickSightDashboardGridLayoutCanvasSizeOptions;
  /**
   * The elements that are included in a grid layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [GridLayoutElement](aws-properties-quicksight-dashboard-gridlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightDashboardGridLayoutElement>;
}

/**
 * A date-time parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datetimeparameter.html}
 **/
export interface QuickSightDashboardDateTimeParameter {
  /**
   * The values for the date-time parameter.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
  /**
   * A display name for the date-time parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The customized parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customparametervalues.html}
 **/
export interface QuickSightDashboardCustomParameterValues {
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
 * The configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-kpiconfiguration.html}
 **/
export interface QuickSightDashboardKPIConfiguration {
  /**
   * The sort configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPISortConfiguration](aws-properties-quicksight-dashboard-kpisortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardKPISortConfiguration;
  /**
   * The options that determine the presentation of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIOptions](aws-properties-quicksight-dashboard-kpioptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KPIOptions?: QuickSightDashboardKPIOptions;
  /**
   * The field well configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIFieldWells](aws-properties-quicksight-dashboard-kpifieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardKPIFieldWells;
}

/**
 * The aggregated field well for the pivot table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableaggregatedfieldwells.html}
 **/
export interface QuickSightDashboardPivotTableAggregatedFieldWells {
  /**
   * The values field well for a pivot table. Values are aggregated based on rows and columns fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightDashboardMeasureField>;
  /**
   * The columns field well for a pivot table. Values are grouped by columns fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<QuickSightDashboardDimensionField>;
  /**
   * The rows field well for a pivot table. Values are grouped by rows fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rows?: List<QuickSightDashboardDimensionField>;
}

/**
 * The dimension type field with date type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datedimensionfield.html}
 **/
export interface QuickSightDashboardDateDimensionField {
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
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-dashboard-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardDateTimeFormatConfiguration;
  /**
   * The column that is used in the `DateDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The options that determine the null value format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-nullvalueformatconfiguration.html}
 **/
export interface QuickSightDashboardNullValueFormatConfiguration {
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
 * Custom icon options for an icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingcustomiconoptions.html}
 **/
export interface QuickSightDashboardConditionalFormattingCustomIconOptions {
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
 * An element within a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-freeformlayoutelement.html}
 **/
export interface QuickSightDashboardFreeFormLayoutElement {
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
   * _Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-dashboard-freeformlayoutelementborderstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderStyle?: QuickSightDashboardFreeFormLayoutElementBorderStyle;
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
   * _Type_: List of [SheetElementRenderingRule](aws-properties-quicksight-dashboard-sheetelementrenderingrule.md)
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RenderingRules?: List<QuickSightDashboardSheetElementRenderingRule>;
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
   * _Type_: [LoadingAnimation](aws-properties-quicksight-dashboard-loadinganimation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadingAnimation?: QuickSightDashboardLoadingAnimation;
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
   * _Type_: [FreeFormLayoutElementBackgroundStyle](aws-properties-quicksight-dashboard-freeformlayoutelementbackgroundstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundStyle?: QuickSightDashboardFreeFormLayoutElementBackgroundStyle;
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
   * _Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-dashboard-freeformlayoutelementborderstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedBorderStyle?: QuickSightDashboardFreeFormLayoutElementBorderStyle;
}

/**
 * A pivot table.
 *
 * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottablevisual.html}
 **/
export interface QuickSightDashboardPivotTableVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableConditionalFormatting](aws-properties-quicksight-dashboard-pivottableconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightDashboardPivotTableConditionalFormatting;
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
   * _Type_: [PivotTableConfiguration](aws-properties-quicksight-dashboard-pivottableconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardPivotTableConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}

/**
 * The limit configuration of the visual display for an axis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-itemslimitconfiguration.html}
 **/
export interface QuickSightDashboardItemsLimitConfiguration {
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
 * A radar chart visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-radarchartvisual.html}
 **/
export interface QuickSightDashboardRadarChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
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
   * _Type_: [RadarChartConfiguration](aws-properties-quicksight-dashboard-radarchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardRadarChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The forecast scenario of a forecast in the line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-forecastscenario.html}
 **/
export interface QuickSightDashboardForecastScenario {
  /**
   * The what-if analysis forecast setup with the date range.
   *
   * _Required_: No
   *
   * _Type_: [WhatIfRangeScenario](aws-properties-quicksight-dashboard-whatifrangescenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhatIfRangeScenario?: QuickSightDashboardWhatIfRangeScenario;
  /**
   * The what-if analysis forecast setup with the target date.
   *
   * _Required_: No
   *
   * _Type_: [WhatIfPointScenario](aws-properties-quicksight-dashboard-whatifpointscenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhatIfPointScenario?: QuickSightDashboardWhatIfPointScenario;
}

/**
 * The declaration definition of a parameter.
 *
 * For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterdeclaration.html}
 **/
export interface QuickSightDashboardParameterDeclaration {
  /**
   * A parameter declaration for the `String` data type.
   *
   * _Required_: No
   *
   * _Type_: [StringParameterDeclaration](aws-properties-quicksight-dashboard-stringparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringParameterDeclaration?: QuickSightDashboardStringParameterDeclaration;
  /**
   * A parameter declaration for the `DateTime` data type.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeParameterDeclaration](aws-properties-quicksight-dashboard-datetimeparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeParameterDeclaration?: QuickSightDashboardDateTimeParameterDeclaration;
  /**
   * A parameter declaration for the `Decimal` data type.
   *
   * _Required_: No
   *
   * _Type_: [DecimalParameterDeclaration](aws-properties-quicksight-dashboard-decimalparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalParameterDeclaration?: QuickSightDashboardDecimalParameterDeclaration;
  /**
   * A parameter declaration for the `Integer` data type.
   *
   * _Required_: No
   *
   * _Type_: [IntegerParameterDeclaration](aws-properties-quicksight-dashboard-integerparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerParameterDeclaration?: QuickSightDashboardIntegerParameterDeclaration;
}

/**
 * The measure type field with categorical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categoricalmeasurefield.html}
 **/
export interface QuickSightDashboardCategoricalMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [String](aws-properties-quicksight-dashboard-aggregationfunction.md)
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
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-dashboard-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardStringFormatConfiguration;
  /**
   * The column that is used in the `CategoricalMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The window options of the geospatial map visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-geospatialwindowoptions.html}
 **/
export interface QuickSightDashboardGeospatialWindowOptions {
  /**
   * The bounds options (north, south, west, east) of the geospatial window options.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialCoordinateBounds](aws-properties-quicksight-dashboard-geospatialcoordinatebounds.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bounds?: QuickSightDashboardGeospatialCoordinateBounds;
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
 * The options that determine the negative value configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-negativevalueconfiguration.html}
 **/
export interface QuickSightDashboardNegativeValueConfiguration {
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
 * The sort configuration for a column that is not used in a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-columnsort.html}
 **/
export interface QuickSightDashboardColumnSort {
  /**
   * The aggregation function that is defined in the column sort.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-dashboard-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightDashboardAggregationFunction;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortBy: QuickSightDashboardColumnIdentifier;
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
 * The `CustomColor` property type specifies Property description not available. for an [AWS::QuickSight::Dashboard](aws-resource-quicksight-dashboard.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcolor.html}
 **/
export interface QuickSightDashboardCustomColor {
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
 * Determines the icon display configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-conditionalformattingicondisplayconfiguration.html}
 **/
export interface QuickSightDashboardConditionalFormattingIconDisplayConfiguration {
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
 * The conditional formatting for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivottableconditionalformatting.html}
 **/
export interface QuickSightDashboardPivotTableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableConditionalFormattingOption](aws-properties-quicksight-dashboard-pivottableconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightDashboardPivotTableConditionalFormattingOption>;
}

/**
 * The field sort options for a pivot table sort configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-pivotfieldsortoptions.html}
 **/
export interface QuickSightDashboardPivotFieldSortOptions {
  /**
   * The sort by field for the field sort options.
   *
   * _Required_: Yes
   *
   * _Type_: [PivotTableSortBy](aws-properties-quicksight-dashboard-pivottablesortby.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortBy: QuickSightDashboardPivotTableSortBy;
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
 * The percent range in the visible range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-percentvisiblerange.html}
 **/
export interface QuickSightDashboardPercentVisibleRange {
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
 * The link configuration of a table field URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablefieldlinkconfiguration.html}
 **/
export interface QuickSightDashboardTableFieldLinkConfiguration {
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
   * _Type_: [TableFieldLinkContentConfiguration](aws-properties-quicksight-dashboard-tablefieldlinkcontentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: QuickSightDashboardTableFieldLinkContentConfiguration;
}

/**
 * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.html}
 **/
export interface QuickSightDashboardCascadingControlConfiguration {
  /**
   * A list of source controls that determine the values that are used in the current control.
   *
   * _Required_: No
   *
   * _Type_: List of [CascadingControlSource](aws-properties-quicksight-dashboard-cascadingcontrolsource.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceControls?: List<QuickSightDashboardCascadingControlSource>;
}

/**
 * The table cell style for a cell in pivot table or table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellstyle.html}
 **/
export interface QuickSightDashboardTableCellStyle {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightDashboardFontConfiguration;
  /**
   * The borders for the table cells.
   *
   * _Required_: No
   *
   * _Type_: [GlobalTableBorderOptions](aws-properties-quicksight-dashboard-globaltableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Border?: QuickSightDashboardGlobalTableBorderOptions;
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
 * The configuration for a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconfiguration.html}
 **/
export interface QuickSightDashboardFilledMapConfiguration {
  /**
   * The sort configuration of a `FilledMapVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapSortConfiguration](aws-properties-quicksight-dashboard-filledmapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardFilledMapSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightDashboardLegendOptions;
  /**
   * The map style options of the filled map visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-dashboard-geospatialmapstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapStyleOptions?: QuickSightDashboardGeospatialMapStyleOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapFieldWells](aws-properties-quicksight-dashboard-filledmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardFilledMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The window options of the filled map visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialWindowOptions](aws-properties-quicksight-dashboard-geospatialwindowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowOptions?: QuickSightDashboardGeospatialWindowOptions;
}

/**
 * The control of a filter that is used to interact with a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filtercontrol.html}
 **/
export interface QuickSightDashboardFilterControl {
  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * _Required_: No
   *
   * _Type_: [FilterSliderControl](aws-properties-quicksight-dashboard-filterslidercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slider?: QuickSightDashboardFilterSliderControl;
  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * _Required_: No
   *
   * _Type_: [FilterTextAreaControl](aws-properties-quicksight-dashboard-filtertextareacontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextArea?: QuickSightDashboardFilterTextAreaControl;
  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * _Required_: No
   *
   * _Type_: [FilterDropDownControl](aws-properties-quicksight-dashboard-filterdropdowncontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dropdown?: QuickSightDashboardFilterDropDownControl;
  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * _Required_: No
   *
   * _Type_: [FilterTextFieldControl](aws-properties-quicksight-dashboard-filtertextfieldcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextField?: QuickSightDashboardFilterTextFieldControl;
  /**
   * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
   *
   * _Required_: No
   *
   * _Type_: [FilterListControl](aws-properties-quicksight-dashboard-filterlistcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  List?: QuickSightDashboardFilterListControl;
  /**
   * A control from a date filter that is used to specify date and time.
   *
   * _Required_: No
   *
   * _Type_: [FilterDateTimePickerControl](aws-properties-quicksight-dashboard-filterdatetimepickercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimePicker?: QuickSightDashboardFilterDateTimePickerControl;
  /**
   * A control from a date filter that is used to specify the relative date.
   *
   * _Required_: No
   *
   * _Type_: [FilterRelativeDateTimeControl](aws-properties-quicksight-dashboard-filterrelativedatetimecontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelativeDateTime?: QuickSightDashboardFilterRelativeDateTimeControl;
}

/**
 * The top movers and bottom movers computation setup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-topbottommoverscomputation.html}
 **/
export interface QuickSightDashboardTopBottomMoversComputation {
  /**
   * The computation type. Choose from the following options:
   */
  Type: Value<string>;
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightDashboardDimensionField;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightDashboardMeasureField;
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
   * _Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightDashboardDimensionField;
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
 * The conditional formatting of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapconditionalformatting.html}
 **/
export interface QuickSightDashboardFilledMapConditionalFormatting {
  /**
   * Conditional formatting options of a `FilledMapVisual`.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FilledMapConditionalFormattingOption](aws-properties-quicksight-dashboard-filledmapconditionalformattingoption.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions: List<QuickSightDashboardFilledMapConditionalFormattingOption>;
}

/**
 * A _sheet_, which is an object that contains a set of visuals that are viewed together on one page in Amazon QuickSight. Every analysis and dashboard contains at least one sheet. Each sheet contains at least one visualization widget, for example a chart, pivot table, or narrative insight. Sheets can be associated with other components, such as controls, filters, and so on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheet.html}
 **/
export interface QuickSightDashboardSheet {
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
 * The options that determine the presentation of a line series in the visual
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-linechartseriessettings.html}
 **/
export interface QuickSightDashboardLineChartSeriesSettings {
  /**
   * Line styles options for a line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartLineStyleSettings](aws-properties-quicksight-dashboard-linechartlinestylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineStyleSettings?: QuickSightDashboardLineChartLineStyleSettings;
  /**
   * Marker styles options for a line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-dashboard-linechartmarkerstylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerStyleSettings?: QuickSightDashboardLineChartMarkerStyleSettings;
}

/**
 * The sizing options for the table image configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-tablecellimagesizingconfiguration.html}
 **/
export interface QuickSightDashboardTableCellImageSizingConfiguration {
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
 * The default values of the `DecimalParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-decimaldefaultvalues.html}
 **/
export interface QuickSightDashboardDecimalDefaultValues {
  /**
   * The dynamic value of the `DecimalDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-dashboard-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightDashboardDynamicDefaultValue;
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
 * The reference that specifies where the axis label is applied to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axislabelreferenceoptions.html}
 **/
export interface QuickSightDashboardAxisLabelReferenceOptions {
  /**
   * The column that the axis label is targeted to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The rendering rules of a sheet that uses a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-sheetelementrenderingrule.html}
 **/
export interface QuickSightDashboardSheetElementRenderingRule {
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
   * _Type_: [SheetElementConfigurationOverrides](aws-properties-quicksight-dashboard-sheetelementconfigurationoverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationOverrides: QuickSightDashboardSheetElementConfigurationOverrides;
}

/**
 * The style configuration of the reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-referencelinestyleconfiguration.html}
 **/
export interface QuickSightDashboardReferenceLineStyleConfiguration {
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
 * The configuration that defines the default value of a `String` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-stringvaluewhenunsetconfiguration.html}
 **/
export interface QuickSightDashboardStringValueWhenUnsetConfiguration {
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
 * A gauge chart.
 *
 * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-gaugechartvisual.html}
 **/
export interface QuickSightDashboardGaugeChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartConditionalFormatting](aws-properties-quicksight-dashboard-gaugechartconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightDashboardGaugeChartConditionalFormatting;
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
   * _Type_: [GaugeChartConfiguration](aws-properties-quicksight-dashboard-gaugechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardGaugeChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
}

/**
 * The operation that is defined by the custom action.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-visualcustomactionoperation.html}
 **/
export interface QuickSightDashboardVisualCustomActionOperation {
  /**
   * The navigation operation that navigates between different sheets in the same analysis.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionNavigationOperation](aws-properties-quicksight-dashboard-customactionnavigationoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NavigationOperation?: QuickSightDashboardCustomActionNavigationOperation;
  /**
   * The set parameter operation that sets parameters in custom action.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionSetParametersOperation](aws-properties-quicksight-dashboard-customactionsetparametersoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetParametersOperation?: QuickSightDashboardCustomActionSetParametersOperation;
  /**
   * The filter operation that filters data included in a visual or in an entire sheet.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionFilterOperation](aws-properties-quicksight-dashboard-customactionfilteroperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterOperation?: QuickSightDashboardCustomActionFilterOperation;
  /**
   * The URL operation that opens a link to another webpage.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionURLOperation](aws-properties-quicksight-dashboard-customactionurloperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URLOperation?: QuickSightDashboardCustomActionURLOperation;
}

/**
 * An ad hoc (one-time) filtering option.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-adhocfilteringoption.html}
 **/
export interface QuickSightDashboardAdHocFilteringOption {
  /**
   * Availability status.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityStatus?: Value<string>;
}

/**
 * The field sort options in a chart configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-fieldsortoptions.html}
 **/
export interface QuickSightDashboardFieldSortOptions {
  /**
   * The sort configuration for a field in a field well.
   *
   * _Required_: No
   *
   * _Type_: [FieldSort](aws-properties-quicksight-dashboard-fieldsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSort?: QuickSightDashboardFieldSort;
  /**
   * The sort configuration for a column that is not used in a field well.
   *
   * _Required_: No
   *
   * _Type_: [ColumnSort](aws-properties-quicksight-dashboard-columnsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSort?: QuickSightDashboardColumnSort;
}

/**
 * A collection of options that configure how each panel displays in a small multiples chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-panelconfiguration.html}
 **/
export interface QuickSightDashboardPanelConfiguration {
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
   * _Type_: [PanelTitleOptions](aws-properties-quicksight-dashboard-paneltitleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardPanelTitleOptions;
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
 * The options that determine the presentation of the data labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabeloptions.html}
 **/
export interface QuickSightDashboardDataLabelOptions {
  /**
   * The option that determines the data label type.
   *
   * _Required_: No
   *
   * _Type_: List of [DataLabelType](aws-properties-quicksight-dashboard-datalabeltype.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabelTypes?: List<QuickSightDashboardDataLabelType>;
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelFontConfiguration?: QuickSightDashboardFontConfiguration;
}

/**
 * The data options for an axis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-axisdataoptions.html}
 **/
export interface QuickSightDashboardAxisDataOptions {
  /**
   * The options for an axis with a date field.
   *
   * _Required_: No
   *
   * _Type_: [DateAxisOptions](aws-properties-quicksight-dashboard-dateaxisoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateAxisOptions?: QuickSightDashboardDateAxisOptions;
  /**
   * The options for an axis with a numeric field.
   *
   * _Required_: No
   *
   * _Type_: [NumericAxisOptions](aws-properties-quicksight-dashboard-numericaxisoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericAxisOptions?: QuickSightDashboardNumericAxisOptions;
}

/**
 * The option that determines the data label type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-datalabeltype.html}
 **/
export interface QuickSightDashboardDataLabelType {
  /**
   * Determines the label configuration for the maximum value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [MaximumLabelType](aws-properties-quicksight-dashboard-maximumlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumLabelType?: QuickSightDashboardMaximumLabelType;
  /**
   * The option that specifies individual data values for labels.
   *
   * _Required_: No
   *
   * _Type_: [DataPathLabelType](aws-properties-quicksight-dashboard-datapathlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathLabelType?: QuickSightDashboardDataPathLabelType;
  /**
   * Determines the label configuration for range end value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [RangeEndsLabelType](aws-properties-quicksight-dashboard-rangeendslabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeEndsLabelType?: QuickSightDashboardRangeEndsLabelType;
  /**
   * Determines the label configuration for the entire field.
   *
   * _Required_: No
   *
   * _Type_: [FieldLabelType](aws-properties-quicksight-dashboard-fieldlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLabelType?: QuickSightDashboardFieldLabelType;
  /**
   * Determines the label configuration for the minimum value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [MinimumLabelType](aws-properties-quicksight-dashboard-minimumlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumLabelType?: QuickSightDashboardMinimumLabelType;
}

/**
 * The field wells of a `BoxPlotVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-boxplotfieldwells.html}
 **/
export interface QuickSightDashboardBoxPlotFieldWells {
  /**
   * The aggregated field wells of a box plot.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotAggregatedFieldWells](aws-properties-quicksight-dashboard-boxplotaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotAggregatedFieldWells?: QuickSightDashboardBoxPlotAggregatedFieldWells;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-dropdowncontroldisplayoptions.html}
 **/
export interface QuickSightDashboardDropDownControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-dashboard-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightDashboardLabelOptions;
  /**
   * The configuration of the `Select all` options in a dropdown control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSelectAllOptions](aws-properties-quicksight-dashboard-listcontrolselectalloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectAllOptions?: QuickSightDashboardListControlSelectAllOptions;
}

/**
 * The numeric equality type drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-categorydrilldownfilter.html}
 **/
export interface QuickSightDashboardCategoryDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightDashboardColumnIdentifier;
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
 * The field well configuration of a pie chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-piechartfieldwells.html}
 **/
export interface QuickSightDashboardPieChartFieldWells {
  /**
   * The field well configuration of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [PieChartAggregatedFieldWells](aws-properties-quicksight-dashboard-piechartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PieChartAggregatedFieldWells?: QuickSightDashboardPieChartAggregatedFieldWells;
}

/**
 * The `MappedDataSetParameter` property type specifies Property description not available. for an [AWS::QuickSight::Dashboard](aws-resource-quicksight-dashboard.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-mappeddatasetparameter.html}
 **/
export interface QuickSightDashboardMappedDataSetParameter {
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
 * A list of selectable values that are used in a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-parameterselectablevalues.html}
 **/
export interface QuickSightDashboardParameterSelectableValues {
  /**
   * The column identifier that fetches values from the data set.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinkToDataSetColumn?: QuickSightDashboardColumnIdentifier;
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
 * The navigation operation that navigates between different sheets in the same analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customactionnavigationoperation.html}
 **/
export interface QuickSightDashboardCustomActionNavigationOperation {
  /**
   * The configuration that chooses the navigation target.
   *
   * _Required_: No
   *
   * _Type_: [LocalNavigationConfiguration](aws-properties-quicksight-dashboard-localnavigationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalNavigationConfiguration?: QuickSightDashboardLocalNavigationConfiguration;
}

/**
 * The configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-funnelchartconfiguration.html}
 **/
export interface QuickSightDashboardFunnelChartConfiguration {
  /**
   * The sort configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartSortConfiguration](aws-properties-quicksight-dashboard-funnelchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightDashboardFunnelChartSortConfiguration;
  /**
   * The options that determine the presentation of the data labels.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartDataLabelOptions](aws-properties-quicksight-dashboard-funnelchartdatalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabelOptions?: QuickSightDashboardFunnelChartDataLabelOptions;
  /**
   * The label options of the categories that are displayed in a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartFieldWells](aws-properties-quicksight-dashboard-funnelchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightDashboardFunnelChartFieldWells;
  /**
   * The tooltip configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightDashboardTooltipOptions;
  /**
   * The label options for the values that are displayed in a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-dashboard-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightDashboardChartAxisLabelOptions;
  /**
   * The visual palette configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightDashboardVisualPalette;
}

/**
 * The configuration of a `CustomContentVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-customcontentconfiguration.html}
 **/
export interface QuickSightDashboardCustomContentConfiguration {
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
 * A filled map.
 *
 * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-filledmapvisual.html}
 **/
export interface QuickSightDashboardFilledMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightDashboardVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a `FilledMapVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapConditionalFormatting](aws-properties-quicksight-dashboard-filledmapconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightDashboardFilledMapConditionalFormatting;
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
   * _Type_: [FilledMapConfiguration](aws-properties-quicksight-dashboard-filledmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightDashboardFilledMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightDashboardVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightDashboardVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightDashboardColumnHierarchy>;
}

/**
 * The options that determine the numeric separator configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numericseparatorconfiguration.html}
 **/
export interface QuickSightDashboardNumericSeparatorConfiguration {
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
   * _Type_: [ThousandSeparatorOptions](aws-properties-quicksight-dashboard-thousandseparatoroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThousandsSeparator?: QuickSightDashboardThousandSeparatorOptions;
}

/**
 * Formatting configuration for number fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dashboard-numberformatconfiguration.html}
 **/
export interface QuickSightDashboardNumberFormatConfiguration {
  /**
   * The options that determine the numeric format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-dashboard-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightDashboardNumericFormatConfiguration;
}
export interface QuickSightDashboardProperties {
  /**
   * Options for publishing the dashboard when you create it:
   */
  DashboardPublishOptions?: QuickSightDashboardDashboardPublishOptions;
  /**
   * The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values.
   *
   * _Required_: No
   *
   * _Type_: [Parameters](aws-properties-quicksight-dashboard-parameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: QuickSightDashboardParameters;
  /**
   * A description for the first version of the dashboard being created.
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
   * The entity that you are using as a source when you create the dashboard. In `SourceEntity`, you specify the type of object that you want to use. You can only create a dashboard from a template, so you use a `SourceTemplate` entity. If you need to create a dashboard from an analysis, first convert the analysis to a template by using the `CreateTemplate` API operation. For `SourceTemplate`, specify the Amazon Resource Name (ARN) of the source template. The `SourceTemplate`ARN can contain any AWS account; and any QuickSight-supported AWS Region.
   *
   * Use the `DataSetReferences` entity within `SourceTemplate` to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.
   *
   * _Required_: No
   *
   * _Type_: [DashboardSourceEntity](aws-properties-quicksight-dashboard-dashboardsourceentity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceEntity?: QuickSightDashboardDashboardSourceEntity;
  /**
   * The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same AWS account where you create the dashboard.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThemeArn?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [DashboardVersionDefinition](aws-properties-quicksight-dashboard-dashboardversiondefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition?: QuickSightDashboardDashboardVersionDefinition;
  /**
   * The ID of the AWS account where you want to create the dashboard.
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
   * A structure that contains the permissions of the dashboard. You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN.
   *
   * To specify no permissions, omit the permissions list.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourcePermission](aws-properties-quicksight-dashboard-resourcepermission.md)
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<QuickSightDashboardResourcePermission>;
  /**
   * The ID for the dashboard, also added to the IAM policy.
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
  DashboardId: Value<string>;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
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
   * The display name of the dashboard.
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
  Name: Value<string>;
}

/**
 * Creates a dashboard from a template. To first create a template, see the `CreateTemplate` API operation.
 *
 * A dashboard is an entity in Amazon QuickSight that identifies Amazon QuickSight reports, created from analyses. You can share Amazon QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different AWS account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dashboard.html}
 */
export interface QuickSightDashboardResource {
  Type: 'AWS::QuickSight::Dashboard';
  Properties: QuickSightDashboardProperties;
}
