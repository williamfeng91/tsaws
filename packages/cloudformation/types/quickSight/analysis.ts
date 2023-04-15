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
 * The time range drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timerangedrilldownfilter.html}
 **/
export interface QuickSightAnalysisTimeRangeDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The options for configuring a donut chart or pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-donutoptions.html}
 **/
export interface QuickSightAnalysisDonutOptions {
  /**
   * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
   *
   * _Required_: No
   *
   * _Type_: [DonutCenterOptions](aws-properties-quicksight-analysis-donutcenteroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DonutCenterOptions?: QuickSightAnalysisDonutCenterOptions;
  /**
   * The option for define the arc of the chart shape. Valid values are as follows:
   */
  ArcOptions?: QuickSightAnalysisArcOptions;
}

/**
 * A control from a date filter that is used to specify the relative date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterrelativedatetimecontrol.html}
 **/
export interface QuickSightAnalysisFilterRelativeDateTimeControl {
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
   * _Type_: [RelativeDateTimeControlDisplayOptions](aws-properties-quicksight-analysis-relativedatetimecontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisRelativeDateTimeControlDisplayOptions;
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
 * The aggregated field wells of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisHeatMapAggregatedFieldWells {
  /**
   * The values field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
  /**
   * The columns field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<QuickSightAnalysisDimensionField>;
  /**
   * The rows field well of a heat map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rows?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The control of a filter that is used to interact with a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtercontrol.html}
 **/
export interface QuickSightAnalysisFilterControl {
  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * _Required_: No
   *
   * _Type_: [FilterSliderControl](aws-properties-quicksight-analysis-filterslidercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slider?: QuickSightAnalysisFilterSliderControl;
  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * _Required_: No
   *
   * _Type_: [FilterTextAreaControl](aws-properties-quicksight-analysis-filtertextareacontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextArea?: QuickSightAnalysisFilterTextAreaControl;
  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * _Required_: No
   *
   * _Type_: [FilterDropDownControl](aws-properties-quicksight-analysis-filterdropdowncontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dropdown?: QuickSightAnalysisFilterDropDownControl;
  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * _Required_: No
   *
   * _Type_: [FilterTextFieldControl](aws-properties-quicksight-analysis-filtertextfieldcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextField?: QuickSightAnalysisFilterTextFieldControl;
  /**
   * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
   *
   * _Required_: No
   *
   * _Type_: [FilterListControl](aws-properties-quicksight-analysis-filterlistcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  List?: QuickSightAnalysisFilterListControl;
  /**
   * A control from a date filter that is used to specify date and time.
   *
   * _Required_: No
   *
   * _Type_: [FilterDateTimePickerControl](aws-properties-quicksight-analysis-filterdatetimepickercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimePicker?: QuickSightAnalysisFilterDateTimePickerControl;
  /**
   * A control from a date filter that is used to specify the relative date.
   *
   * _Required_: No
   *
   * _Type_: [FilterRelativeDateTimeControl](aws-properties-quicksight-analysis-filterrelativedatetimecontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelativeDateTime?: QuickSightAnalysisFilterRelativeDateTimeControl;
}

/**
 * A `RelativeDatesFilter` filters relative dates values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-relativedatesfilter.html}
 **/
export interface QuickSightAnalysisRelativeDatesFilter {
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
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
   * _Type_: [AnchorDateConfiguration](aws-properties-quicksight-analysis-anchordateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnchorDateConfiguration: QuickSightAnalysisAnchorDateConfiguration;
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
   * _Type_: [ExcludePeriodConfiguration](aws-properties-quicksight-analysis-excludeperiodconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludePeriodConfiguration?: QuickSightAnalysisExcludePeriodConfiguration;
}

/**
 * Formatting configuration for `DateTime` fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimeformatconfiguration.html}
 **/
export interface QuickSightAnalysisDateTimeFormatConfiguration {
  /**
   * The formatting configuration for numeric `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-analysis-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericFormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-analysis-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
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
 * A histogram.
 *
 * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramvisual.html}
 **/
export interface QuickSightAnalysisHistogramVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [HistogramConfiguration](aws-properties-quicksight-analysis-histogramconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisHistogramConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}

/**
 * A list of selectable values that are used in a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterselectablevalues.html}
 **/
export interface QuickSightAnalysisParameterSelectableValues {
  /**
   * The column identifier that fetches values from the data set.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinkToDataSetColumn?: QuickSightAnalysisColumnIdentifier;
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
 * The field series item configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldseriesitem.html}
 **/
export interface QuickSightAnalysisFieldSeriesItem {
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
   * _Type_: [LineChartSeriesSettings](aws-properties-quicksight-analysis-linechartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: QuickSightAnalysisLineChartSeriesSettings;
}

/**
 * The navigation operation that navigates between different sheets in the same analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionnavigationoperation.html}
 **/
export interface QuickSightAnalysisCustomActionNavigationOperation {
  /**
   * The configuration that chooses the navigation target.
   *
   * _Required_: No
   *
   * _Type_: [LocalNavigationConfiguration](aws-properties-quicksight-analysis-localnavigationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalNavigationConfiguration?: QuickSightAnalysisLocalNavigationConfiguration;
}

/**
 * The custom narrative options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customnarrativeoptions.html}
 **/
export interface QuickSightAnalysisCustomNarrativeOptions {
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
 * The text format for the title.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-shortformattext.html}
 **/
export interface QuickSightAnalysisShortFormatText {
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
 * The measure type field with numerical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericalmeasurefield.html}
 **/
export interface QuickSightAnalysisNumericalMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-analysis-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightAnalysisNumericalAggregationFunction;
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-analysis-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisNumberFormatConfiguration;
  /**
   * The column that is used in the `NumericalMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The table calculation measure field for pivot tables.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-calculatedmeasurefield.html}
 **/
export interface QuickSightAnalysisCalculatedMeasureField {
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
 * The display options for the axis label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdisplayoptions.html}
 **/
export interface QuickSightAnalysisAxisDisplayOptions {
  /**
   * The data options for an axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDataOptions](aws-properties-quicksight-analysis-axisdataoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataOptions?: QuickSightAnalysisAxisDataOptions;
  /**
   * The tick label options of an axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisTickLabelOptions](aws-properties-quicksight-analysis-axisticklabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TickLabelOptions?: QuickSightAnalysisAxisTickLabelOptions;
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
   * _Type_: [ScrollBarOptions](aws-properties-quicksight-analysis-scrollbaroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScrollbarOptions?: QuickSightAnalysisScrollBarOptions;
}

/**
 * The table options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableoptions.html}
 **/
export interface QuickSightAnalysisPivotTableOptions {
  /**
   * The table cell style of row field names.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowFieldNamesStyle?: QuickSightAnalysisTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHeaderStyle?: QuickSightAnalysisTableCellStyle;
  /**
   * The table cell style of the row headers.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowHeaderStyle?: QuickSightAnalysisTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CellStyle?: QuickSightAnalysisTableCellStyle;
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
   * _Type_: [RowAlternateColorOptions](aws-properties-quicksight-analysis-rowalternatecoloroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowAlternateColorOptions?: QuickSightAnalysisRowAlternateColorOptions;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textfieldcontroldisplayoptions.html}
 **/
export interface QuickSightAnalysisTextFieldControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightAnalysisLabelOptions;
  /**
   * The configuration of the placeholder options in a text field control.
   *
   * _Required_: No
   *
   * _Type_: [TextControlPlaceholderOptions](aws-properties-quicksight-analysis-textcontrolplaceholderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaceholderOptions?: QuickSightAnalysisTextControlPlaceholderOptions;
}

/**
 * The sort configuration for a column that is not used in a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnsort.html}
 **/
export interface QuickSightAnalysisColumnSort {
  /**
   * The aggregation function that is defined in the column sort.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightAnalysisAggregationFunction;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortBy: QuickSightAnalysisColumnIdentifier;
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
 * The options that style a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionstyle.html}
 **/
export interface QuickSightAnalysisSectionStyle {
  /**
   * The spacing between section content and its top, bottom, left, and right edges.
   *
   * There is no padding by default.
   *
   * _Required_: No
   *
   * _Type_: [Spacing](aws-properties-quicksight-analysis-spacing.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Padding?: QuickSightAnalysisSpacing;
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
 * The configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartconfiguration.html}
 **/
export interface QuickSightAnalysisPieChartConfiguration {
  /**
   * The sort configuration of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [PieChartSortConfiguration](aws-properties-quicksight-analysis-piechartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisPieChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-analysis-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightAnalysisContributionAnalysisDefault>;
  /**
   * The label options of the group/color that is displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [PieChartFieldWells](aws-properties-quicksight-analysis-piechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisPieChartFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The options that determine the shape of the chart. This option determines whether the chart is a pie chart or a donut chart.
   *
   * _Required_: No
   *
   * _Type_: [DonutOptions](aws-properties-quicksight-analysis-donutoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DonutOptions?: QuickSightAnalysisDonutOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-analysis-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightAnalysisSmallMultiplesOptions;
  /**
   * The label options for the value that is displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
}

/**
 * The field options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldoptions.html}
 **/
export interface QuickSightAnalysisPivotTableFieldOptions {
  /**
   * The data path options for the pivot table field options.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableDataPathOption](aws-properties-quicksight-analysis-pivottabledatapathoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathOptions?: List<QuickSightAnalysisPivotTableDataPathOption>;
  /**
   * The selected field options for the pivot table field options.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableFieldOption](aws-properties-quicksight-analysis-pivottablefieldoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldOptions?: List<QuickSightAnalysisPivotTableFieldOption>;
}

/**
 * Permission for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-resourcepermission.html}
 **/
export interface QuickSightAnalysisResourcePermission {
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
 * The option that determines the hierarchy of the fields for a visual element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnhierarchy.html}
 **/
export interface QuickSightAnalysisColumnHierarchy {
  /**
   * The option that determines the hierarchy of any `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeHierarchy](aws-properties-quicksight-analysis-datetimehierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeHierarchy?: QuickSightAnalysisDateTimeHierarchy;
  /**
   * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
   *
   * _Required_: No
   *
   * _Type_: [ExplicitHierarchy](aws-properties-quicksight-analysis-explicithierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExplicitHierarchy?: QuickSightAnalysisExplicitHierarchy;
  /**
   * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
   *
   * _Required_: No
   *
   * _Type_: [PredefinedHierarchy](aws-properties-quicksight-analysis-predefinedhierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredefinedHierarchy?: QuickSightAnalysisPredefinedHierarchy;
}

/**
 * The sizing options for the table image configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablecellimagesizingconfiguration.html}
 **/
export interface QuickSightAnalysisTableCellImageSizingConfiguration {
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
 * The options that determine the thousands separator configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-thousandseparatoroptions.html}
 **/
export interface QuickSightAnalysisThousandSeparatorOptions {
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
 * The options that determine the presentation of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartoptions.html}
 **/
export interface QuickSightAnalysisWaterfallChartOptions {
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
 * The options that determine the numeric format configuration.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericformatconfiguration.html}
 **/
export interface QuickSightAnalysisNumericFormatConfiguration {
  /**
   * The options that determine the number display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-analysis-numberdisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberDisplayFormatConfiguration?: QuickSightAnalysisNumberDisplayFormatConfiguration;
  /**
   * The options that determine the currency display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [CurrencyDisplayFormatConfiguration](aws-properties-quicksight-analysis-currencydisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrencyDisplayFormatConfiguration?: QuickSightAnalysisCurrencyDisplayFormatConfiguration;
  /**
   * The options that determine the percentage display format configuration.
   *
   * _Required_: No
   *
   * _Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-analysis-percentagedisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentageDisplayFormatConfiguration?: QuickSightAnalysisPercentageDisplayFormatConfiguration;
}

/**
 * The visual display options for the visual palette.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualpalette.html}
 **/
export interface QuickSightAnalysisVisualPalette {
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
   * _Type_: List of [DataPathColor](aws-properties-quicksight-analysis-datapathcolor.md)
   *
   * _Maximum_: `5000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorMap?: List<QuickSightAnalysisDataPathColor>;
}

/**
 * The sort configuration of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapsortconfiguration.html}
 **/
export interface QuickSightAnalysisHeatMapSortConfiguration {
  /**
   * The field sort configuration of the rows fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapRowSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of rows that are displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapRowItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The limit on the number of columns that are displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapColumnItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The column sort configuration for heat map for columns that aren't a part of a field well.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapColumnSort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * The free-form layout configuration of a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformsectionlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisFreeFormSectionLayoutConfiguration {
  /**
   * The elements that are included in the free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FreeFormLayoutElement](aws-properties-quicksight-analysis-freeformlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightAnalysisFreeFormLayoutElement>;
}

/**
 * The cell conditional formatting option for a pivot table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablecellconditionalformatting.html}
 **/
export interface QuickSightAnalysisPivotTableCellConditionalFormatting {
  /**
   * The scope of the cell for conditional formatting.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableConditionalFormattingScope](aws-properties-quicksight-analysis-pivottableconditionalformattingscope.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: QuickSightAnalysisPivotTableConditionalFormattingScope;
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
   * _Type_: [TextConditionalFormat](aws-properties-quicksight-analysis-textconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextFormat?: QuickSightAnalysisTextConditionalFormat;
}

/**
 * The point style of the geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialpointstyleoptions.html}
 **/
export interface QuickSightAnalysisGeospatialPointStyleOptions {
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
   * _Type_: [ClusterMarkerConfiguration](aws-properties-quicksight-analysis-clustermarkerconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterMarkerConfiguration?: QuickSightAnalysisClusterMarkerConfiguration;
}

/**
 * The rendering rules of a sheet that uses a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetelementrenderingrule.html}
 **/
export interface QuickSightAnalysisSheetElementRenderingRule {
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
   * _Type_: [SheetElementConfigurationOverrides](aws-properties-quicksight-analysis-sheetelementconfigurationoverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationOverrides: QuickSightAnalysisSheetElementConfigurationOverrides;
}

/**
 * A column of a data set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnidentifier.html}
 **/
export interface QuickSightAnalysisColumnIdentifier {
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
 * A filled map.
 *
 * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapvisual.html}
 **/
export interface QuickSightAnalysisFilledMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a `FilledMapVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapConditionalFormatting](aws-properties-quicksight-analysis-filledmapconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightAnalysisFilledMapConditionalFormatting;
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
   * _Type_: [FilledMapConfiguration](aws-properties-quicksight-analysis-filledmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisFilledMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * Aggregated field wells of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisTreeMapAggregatedFieldWells {
  /**
   * The size field well of a tree map. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sizes?: List<QuickSightAnalysisMeasureField>;
  /**
   * The color field well of a tree map. Values are grouped by aggregations based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightAnalysisMeasureField>;
  /**
   * The group by field well of a tree map. Values are grouped based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The field well configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartfieldwells.html}
 **/
export interface QuickSightAnalysisLineChartFieldWells {
  /**
   * The field well configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartAggregatedFieldWells](aws-properties-quicksight-analysis-linechartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineChartAggregatedFieldWells?: QuickSightAnalysisLineChartAggregatedFieldWells;
}

/**
 * A visual that contains custom content.
 *
 * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customcontentvisual.html}
 **/
export interface QuickSightAnalysisCustomContentVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [CustomContentConfiguration](aws-properties-quicksight-analysis-customcontentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisCustomContentConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
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
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}

/**
 * The conditional formatting of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiconditionalformatting.html}
 **/
export interface QuickSightAnalysisKPIConditionalFormatting {
  /**
   * The conditional formatting options of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [KPIConditionalFormattingOption](aws-properties-quicksight-analysis-kpiconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightAnalysisKPIConditionalFormattingOption>;
}

/**
 * Provides the forecast to meet the target for a particular date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-whatifpointscenario.html}
 **/
export interface QuickSightAnalysisWhatIfPointScenario {
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
 * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-cascadingcontrolconfiguration.html}
 **/
export interface QuickSightAnalysisCascadingControlConfiguration {
  /**
   * A list of source controls that determine the values that are used in the current control.
   *
   * _Required_: No
   *
   * _Type_: List of [CascadingControlSource](aws-properties-quicksight-analysis-cascadingcontrolsource.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceControls?: List<QuickSightAnalysisCascadingControlSource>;
}

/**
 * The configuration of content in a body section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-bodysectioncontent.html}
 **/
export interface QuickSightAnalysisBodySectionContent {
  /**
   * The layout configuration of a body section.
   *
   * _Required_: No
   *
   * _Type_: [SectionLayoutConfiguration](aws-properties-quicksight-analysis-sectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layout?: QuickSightAnalysisSectionLayoutConfiguration;
}

/**
 * The value label configuration of the label in a reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinevaluelabelconfiguration.html}
 **/
export interface QuickSightAnalysisReferenceLineValueLabelConfiguration {
  /**
   * The format configuration of the value label.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-analysis-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
  /**
   * The relative position of the value label. Choose one of the following options:
   */
  RelativePosition?: Value<string>;
}

/**
 * The field well configuration of a `FunnelChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartfieldwells.html}
 **/
export interface QuickSightAnalysisFunnelChartFieldWells {
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartAggregatedFieldWells](aws-properties-quicksight-analysis-funnelchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunnelChartAggregatedFieldWells?: QuickSightAnalysisFunnelChartAggregatedFieldWells;
}

/**
 * A control to display a text box that is used to enter multiple entries.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtertextareacontrol.html}
 **/
export interface QuickSightAnalysisFilterTextAreaControl {
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
   * _Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-analysis-textareacontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisTextAreaControlDisplayOptions;
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
 * The URL operation that opens a link to another webpage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionurloperation.html}
 **/
export interface QuickSightAnalysisCustomActionURLOperation {
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
 * The configuration of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapconfiguration.html}
 **/
export interface QuickSightAnalysisTreeMapConfiguration {
  /**
   * The sort configuration of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapSortConfiguration](aws-properties-quicksight-analysis-treemapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisTreeMapSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The label options (label text, label visibility) for the colors displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility) of the sizes that are displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapFieldWells](aws-properties-quicksight-analysis-treemapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisTreeMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The color options (gradient color, point of divergence) of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ColorScale](aws-properties-quicksight-analysis-colorscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorScale?: QuickSightAnalysisColorScale;
  /**
   * The label options (label text, label visibility) of the groups that are displayed in a tree map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
}

/**
 * The conditional formatting of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartconditionalformatting.html}
 **/
export interface QuickSightAnalysisGaugeChartConditionalFormatting {
  /**
   * Conditional formatting options of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [GaugeChartConditionalFormattingOption](aws-properties-quicksight-analysis-gaugechartconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightAnalysisGaugeChartConditionalFormattingOption>;
}

/**
 * The liner axis scale setup.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislinearscale.html}
 **/
export interface QuickSightAnalysisAxisLinearScale {
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
 * The drill down filter for the column hierarchies.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-drilldownfilter.html}
 **/
export interface QuickSightAnalysisDrillDownFilter {
  /**
   * The numeric equality type drill down filter. This filter is used for number type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericEqualityDrillDownFilter](aws-properties-quicksight-analysis-numericequalitydrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericEqualityFilter?: QuickSightAnalysisNumericEqualityDrillDownFilter;
  /**
   * The time range drill down filter. This filter is used for date time columns.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeDrillDownFilter](aws-properties-quicksight-analysis-timerangedrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeRangeFilter?: QuickSightAnalysisTimeRangeDrillDownFilter;
  /**
   * The category type drill down filter. This filter is used for string type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoryDrillDownFilter](aws-properties-quicksight-analysis-categorydrilldownfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryFilter?: QuickSightAnalysisCategoryDrillDownFilter;
}

/**
 * The configuration that determines the elements and canvas size options of sheet control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetcontrollayoutconfiguration.html}
 **/
export interface QuickSightAnalysisSheetControlLayoutConfiguration {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutConfiguration](aws-properties-quicksight-analysis-gridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GridLayout?: QuickSightAnalysisGridLayoutConfiguration;
}

/**
 * The pagination configuration for a table visual or boxplot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-paginationconfiguration.html}
 **/
export interface QuickSightAnalysisPaginationConfiguration {
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
 * The table cell style for a cell in pivot table or table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablecellstyle.html}
 **/
export interface QuickSightAnalysisTableCellStyle {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
  /**
   * The borders for the table cells.
   *
   * _Required_: No
   *
   * _Type_: [GlobalTableBorderOptions](aws-properties-quicksight-analysis-globaltableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Border?: QuickSightAnalysisGlobalTableBorderOptions;
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
 * The configuration of the search options in a list control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-listcontrolsearchoptions.html}
 **/
export interface QuickSightAnalysisListControlSearchOptions {
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
 * The override configuration of the rendering rules of a sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetelementconfigurationoverrides.html}
 **/
export interface QuickSightAnalysisSheetElementConfigurationOverrides {
  /**
   * Determines whether or not the overrides are visible. Choose one of the following options:
   */
  Visibility?: Value<string>;
}

/**
 * The configuration that defines the default value of a `String` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringvaluewhenunsetconfiguration.html}
 **/
export interface QuickSightAnalysisStringValueWhenUnsetConfiguration {
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
 * The aggregated field well of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotcategoricallyaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisScatterPlotCategoricallyAggregatedFieldWells {
  /**
   * The category field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightAnalysisDimensionField>;
  /**
   * The size field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightAnalysisMeasureField>;
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxis?: List<QuickSightAnalysisMeasureField>;
  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxis?: List<QuickSightAnalysisMeasureField>;
}

/**
 * Determines the custom condition for an icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition.html}
 **/
export interface QuickSightAnalysisConditionalFormattingCustomIconCondition {
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
   * _Type_: [ConditionalFormattingIconDisplayConfiguration](aws-properties-quicksight-analysis-conditionalformattingicondisplayconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayConfiguration?: QuickSightAnalysisConditionalFormattingIconDisplayConfiguration;
  /**
   * Custom icon options for an icon set.
   *
   * _Required_: Yes
   *
   * _Type_: [ConditionalFormattingCustomIconOptions](aws-properties-quicksight-analysis-conditionalformattingcustomiconoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconOptions: QuickSightAnalysisConditionalFormattingCustomIconOptions;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartvisual.html}
 **/
export interface QuickSightAnalysisPieChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [PieChartConfiguration](aws-properties-quicksight-analysis-piechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisPieChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The date configuration of the filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-anchordateconfiguration.html}
 **/
export interface QuickSightAnalysisAnchorDateConfiguration {
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
 * The configuration of a body section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-bodysectionconfiguration.html}
 **/
export interface QuickSightAnalysisBodySectionConfiguration {
  /**
   * The configuration of content in a body section.
   *
   * _Required_: Yes
   *
   * _Type_: [BodySectionContent](aws-properties-quicksight-analysis-bodysectioncontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: QuickSightAnalysisBodySectionContent;
  /**
   * The style options of a body section.
   *
   * _Required_: No
   *
   * _Type_: [SectionStyle](aws-properties-quicksight-analysis-sectionstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style?: QuickSightAnalysisSectionStyle;
  /**
   * The configuration of a page break for a section.
   *
   * _Required_: No
   *
   * _Type_: [SectionPageBreakConfiguration](aws-properties-quicksight-analysis-sectionpagebreakconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageBreakConfiguration?: QuickSightAnalysisSectionPageBreakConfiguration;
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
 * The visual display options for a data zoom scroll bar.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scrollbaroptions.html}
 **/
export interface QuickSightAnalysisScrollBarOptions {
  /**
   * The visibility range for the data zoom scroll bar.
   *
   * _Required_: No
   *
   * _Type_: [VisibleRangeOptions](aws-properties-quicksight-analysis-visiblerangeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibleRange?: QuickSightAnalysisVisibleRangeOptions;
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
 * The options for an axis with a numeric field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericaxisoptions.html}
 **/
export interface QuickSightAnalysisNumericAxisOptions {
  /**
   * The scale setup of a numeric axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisScale](aws-properties-quicksight-analysis-axisscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scale?: QuickSightAnalysisAxisScale;
  /**
   * The range setup of a numeric axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayRange](aws-properties-quicksight-analysis-axisdisplayrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: QuickSightAnalysisAxisDisplayRange;
}

/**
 * The source entity of an analysis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysissourceentity.html}
 **/
export interface QuickSightAnalysisAnalysisSourceEntity {
  /**
   * The source template for the source entity of the analysis.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisSourceTemplate](aws-properties-quicksight-analysis-analysissourcetemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceTemplate?: QuickSightAnalysisAnalysisSourceTemplate;
}

/**
 * The configuration of the placeholder options in a text control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textcontrolplaceholderoptions.html}
 **/
export interface QuickSightAnalysisTextControlPlaceholderOptions {
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
 * The options that determine the null value format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-nullvalueformatconfiguration.html}
 **/
export interface QuickSightAnalysisNullValueFormatConfiguration {
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
 * The setup for the detailed tooltip.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldbasedtooltip.html}
 **/
export interface QuickSightAnalysisFieldBasedTooltip {
  /**
   * The fields configuration in the tooltip.
   *
   * _Required_: No
   *
   * _Type_: List of [TooltipItem](aws-properties-quicksight-analysis-tooltipitem.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TooltipFields?: List<QuickSightAnalysisTooltipItem>;
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
 * The sort configuration for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablesortconfiguration.html}
 **/
export interface QuickSightAnalysisPivotTableSortConfiguration {
  /**
   * The field sort options for a pivot table sort configuration.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-quicksight-analysis-fieldsortoptions.md) of [PivotFieldSortOptions](aws-properties-quicksight-analysis-pivotfieldsortoptions.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSortOptions?: List<QuickSightAnalysisPivotFieldSortOptions>;
}

/**
 * A list of selectable values that are used in a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterselectablevalues.html}
 **/
export interface QuickSightAnalysisFilterSelectableValues {
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
 * The options of a box plot visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotoptions.html}
 **/
export interface QuickSightAnalysisBoxPlotOptions {
  /**
   * The style options of the box plot.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotStyleOptions](aws-properties-quicksight-analysis-boxplotstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleOptions?: QuickSightAnalysisBoxPlotStyleOptions;
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
 * The minimum label of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-minimumlabeltype.html}
 **/
export interface QuickSightAnalysisMinimumLabelType {
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
 * The border options for a table border.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableborderoptions.html}
 **/
export interface QuickSightAnalysisTableBorderOptions {
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
 * The field well configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartfieldwells.html}
 **/
export interface QuickSightAnalysisWaterfallChartFieldWells {
  /**
   * The field well configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartAggregatedFieldWells](aws-properties-quicksight-analysis-waterfallchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallChartAggregatedFieldWells?: QuickSightAnalysisWaterfallChartAggregatedFieldWells;
}

/**
 * Formatting configuration for icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingiconset.html}
 **/
export interface QuickSightAnalysisConditionalFormattingIconSet {
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
 * An aggregation function aggregates values from a dimension or measure.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-aggregationfunction.html}
 **/
export interface QuickSightAnalysisAggregationFunction {
  /**
   * Aggregation for date values.
   */
  DateAggregationFunction?: Value<string>;
  /**
   * Aggregation for numerical values.
   *
   * _Required_: No
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-analysis-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalAggregationFunction?: QuickSightAnalysisNumericalAggregationFunction;
  /**
   * Aggregation for categorical values.
   */
  CategoricalAggregationFunction?: Value<string>;
}

/**
 * The aggregated field well for the pivot table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisPivotTableAggregatedFieldWells {
  /**
   * The values field well for a pivot table. Values are aggregated based on rows and columns fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
  /**
   * The columns field well for a pivot table. Values are grouped by columns fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<QuickSightAnalysisDimensionField>;
  /**
   * The rows field well for a pivot table. Values are grouped by rows fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `40`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rows?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The formatting configuration for the icon.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingicon.html}
 **/
export interface QuickSightAnalysisConditionalFormattingIcon {
  /**
   * Determines the custom condition for an icon set.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingCustomIconCondition](aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomCondition?: QuickSightAnalysisConditionalFormattingCustomIconCondition;
  /**
   * Formatting configuration for icon set.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIconSet](aws-properties-quicksight-analysis-conditionalformattingiconset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IconSet?: QuickSightAnalysisConditionalFormattingIconSet;
}

/**
 * The configuration for a `TableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableconfiguration.html}
 **/
export interface QuickSightAnalysisTableConfiguration {
  /**
   * The sort configuration for a `TableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TableSortConfiguration](aws-properties-quicksight-analysis-tablesortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisTableSortConfiguration;
  /**
   * The paginated report options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TablePaginatedReportOptions](aws-properties-quicksight-analysis-tablepaginatedreportoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedReportOptions?: QuickSightAnalysisTablePaginatedReportOptions;
  /**
   * The table options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TableOptions](aws-properties-quicksight-analysis-tableoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableOptions?: QuickSightAnalysisTableOptions;
  /**
   * A collection of inline visualizations to display within a chart.
   *
   * _Required_: No
   *
   * _Type_: List of [TableInlineVisualization](aws-properties-quicksight-analysis-tableinlinevisualization.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableInlineVisualizations?: List<QuickSightAnalysisTableInlineVisualization>;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldWells](aws-properties-quicksight-analysis-tablefieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisTableFieldWells;
  /**
   * The field options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldOptions](aws-properties-quicksight-analysis-tablefieldoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldOptions?: QuickSightAnalysisTableFieldOptions;
  /**
   * The total options for a table visual.
   *
   * _Required_: No
   *
   * _Type_: [TotalOptions](aws-properties-quicksight-analysis-totaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalOptions?: QuickSightAnalysisTotalOptions;
}

/**
 * The field wells for a pivot table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldwells.html}
 **/
export interface QuickSightAnalysisPivotTableFieldWells {
  /**
   * The aggregated field well for the pivot table.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableAggregatedFieldWells](aws-properties-quicksight-analysis-pivottableaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PivotTableAggregatedFieldWells?: QuickSightAnalysisPivotTableAggregatedFieldWells;
}

/**
 * The side border options for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablesideborderoptions.html}
 **/
export interface QuickSightAnalysisTableSideBorderOptions {
  /**
   * The table border options of the left border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-analysis-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Left?: QuickSightAnalysisTableBorderOptions;
  /**
   * The table border options of the top border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-analysis-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Top?: QuickSightAnalysisTableBorderOptions;
  /**
   * The table border options of the inner horizontal border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-analysis-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InnerHorizontal?: QuickSightAnalysisTableBorderOptions;
  /**
   * The table border options of the right border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-analysis-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Right?: QuickSightAnalysisTableBorderOptions;
  /**
   * The table border options of the bottom border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-analysis-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bottom?: QuickSightAnalysisTableBorderOptions;
  /**
   * The table border options of the inner vertical border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-analysis-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InnerVertical?: QuickSightAnalysisTableBorderOptions;
}

/**
 * A heat map.
 *
 * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapvisual.html}
 **/
export interface QuickSightAnalysisHeatMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [HeatMapConfiguration](aws-properties-quicksight-analysis-heatmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisHeatMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * Determines the color scale that is applied to the visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-colorscale.html}
 **/
export interface QuickSightAnalysisColorScale {
  /**
   * Determines the list of colors that are applied to the visual.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataColor](aws-properties-quicksight-analysis-datacolor.md)
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors: List<QuickSightAnalysisDataColor>;
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
   * _Type_: [DataColor](aws-properties-quicksight-analysis-datacolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueColor?: QuickSightAnalysisDataColor;
}

/**
 * The label options for a chart axis. You must specify the field that the label is targeted to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislabeloptions.html}
 **/
export interface QuickSightAnalysisAxisLabelOptions {
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
   * _Type_: [AxisLabelReferenceOptions](aws-properties-quicksight-analysis-axislabelreferenceoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyTo?: QuickSightAnalysisAxisLabelReferenceOptions;
  /**
   * The font configuration of the axis label.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
}

/**
 * Dataset reference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datasetreference.html}
 **/
export interface QuickSightAnalysisDataSetReference {
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
 * A grid layout to define the placement of sheet control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetcontrollayout.html}
 **/
export interface QuickSightAnalysisSheetControlLayout {
  /**
   * The configuration that determines the elements and canvas size options of sheet control.
   *
   * _Required_: Yes
   *
   * _Type_: [SheetControlLayoutConfiguration](aws-properties-quicksight-analysis-sheetcontrollayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightAnalysisSheetControlLayoutConfiguration;
}

/**
 * The options that determine the default settings for interactive layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultinteractivelayoutconfiguration.html}
 **/
export interface QuickSightAnalysisDefaultInteractiveLayoutConfiguration {
  /**
   * The options that determine the default settings of a free-form layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultFreeFormLayoutConfiguration](aws-properties-quicksight-analysis-defaultfreeformlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeForm?: QuickSightAnalysisDefaultFreeFormLayoutConfiguration;
  /**
   * The options that determine the default settings for a grid layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultGridLayoutConfiguration](aws-properties-quicksight-analysis-defaultgridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Grid?: QuickSightAnalysisDefaultGridLayoutConfiguration;
}

/**
 * The unaggregated field for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-unaggregatedfield.html}
 **/
export interface QuickSightAnalysisUnaggregatedField {
  /**
   * The format configuration of the field.
   *
   * _Required_: No
   *
   * _Type_: [FormatConfiguration](aws-properties-quicksight-analysis-formatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisFormatConfiguration;
  /**
   * The column that is used in the `UnaggregatedField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * With a `Filter`, you can remove portions of data from a particular visual or view.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filter.html}
 **/
export interface QuickSightAnalysisFilter {
  /**
   * A `NumericEqualityFilter` filters numeric values that equal or do not equal a given numeric value.
   *
   * _Required_: No
   *
   * _Type_: [NumericEqualityFilter](aws-properties-quicksight-analysis-numericequalityfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericEqualityFilter?: QuickSightAnalysisNumericEqualityFilter;
  /**
   * A `NumericRangeFilter` filters numeric values that are either inside or outside a given numeric range.
   *
   * _Required_: No
   *
   * _Type_: [NumericRangeFilter](aws-properties-quicksight-analysis-numericrangefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericRangeFilter?: QuickSightAnalysisNumericRangeFilter;
  /**
   * A `TimeRangeFilter` filters date-time values that are either inside or outside a given date/time range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilter](aws-properties-quicksight-analysis-timerangefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeRangeFilter?: QuickSightAnalysisTimeRangeFilter;
  /**
   * A `RelativeDatesFilter` filters date values that are relative to a given date.
   *
   * _Required_: No
   *
   * _Type_: [RelativeDatesFilter](aws-properties-quicksight-analysis-relativedatesfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelativeDatesFilter?: QuickSightAnalysisRelativeDatesFilter;
  /**
   * A `TopBottomFilter` filters data to the top or bottom values for a given column.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomFilter](aws-properties-quicksight-analysis-topbottomfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomFilter?: QuickSightAnalysisTopBottomFilter;
  /**
   * A `TimeEqualityFilter` filters date-time values that equal or do not equal a given date/time value.
   *
   * _Required_: No
   *
   * _Type_: [TimeEqualityFilter](aws-properties-quicksight-analysis-timeequalityfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeEqualityFilter?: QuickSightAnalysisTimeEqualityFilter;
  /**
   * A `CategoryFilter` filters text values.
   *
   * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CategoryFilter](aws-properties-quicksight-analysis-categoryfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryFilter?: QuickSightAnalysisCategoryFilter;
}

/**
 * A control to display a text box that is used to enter a single entry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtertextfieldcontrol.html}
 **/
export interface QuickSightAnalysisFilterTextFieldControl {
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
   * _Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-analysis-textfieldcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisTextFieldControlDisplayOptions;
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
 * The option that determines the text display size.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fontsize.html}
 **/
export interface QuickSightAnalysisFontSize {
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
 * The field wells of a `BoxPlotVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotfieldwells.html}
 **/
export interface QuickSightAnalysisBoxPlotFieldWells {
  /**
   * The aggregated field wells of a box plot.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotAggregatedFieldWells](aws-properties-quicksight-analysis-boxplotaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotAggregatedFieldWells?: QuickSightAnalysisBoxPlotAggregatedFieldWells;
}

/**
 * Determines the color that is applied to a particular data value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datacolor.html}
 **/
export interface QuickSightAnalysisDataColor {
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
 * The data configuration of the reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinedataconfiguration.html}
 **/
export interface QuickSightAnalysisReferenceLineDataConfiguration {
  /**
   * The dynamic configuration of the reference line data configuration.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineDynamicDataConfiguration](aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicConfiguration?: QuickSightAnalysisReferenceLineDynamicDataConfiguration;
  /**
   * The axis binding type of the reference line. Choose one of the following options:
   */
  AxisBinding?: Value<string>;
  /**
   * The static data configuration of the reference line data configuration.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineStaticDataConfiguration](aws-properties-quicksight-analysis-referencelinestaticdataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticConfiguration?: QuickSightAnalysisReferenceLineStaticDataConfiguration;
}

/**
 * A grouping of individual filters. Filter groups are applied to the same group of visuals.
 *
 * For more information, see [Adding filter conditions (group filters) with AND and OR operators](https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filtergroup.html}
 **/
export interface QuickSightAnalysisFilterGroup {
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
   * _Type_: List of [Filter](aws-properties-quicksight-analysis-filter.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters: List<QuickSightAnalysisFilter>;
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
   * _Type_: [FilterScopeConfiguration](aws-properties-quicksight-analysis-filterscopeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeConfiguration: QuickSightAnalysisFilterScopeConfiguration;
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
 * The subtitle label options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualsubtitlelabeloptions.html}
 **/
export interface QuickSightAnalysisVisualSubtitleLabelOptions {
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
   * _Type_: [LongFormatText](aws-properties-quicksight-analysis-longformattext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatText?: QuickSightAnalysisLongFormatText;
}

/**
 * A word cloud.
 *
 * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudvisual.html}
 **/
export interface QuickSightAnalysisWordCloudVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [WordCloudChartConfiguration](aws-properties-quicksight-analysis-wordcloudchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisWordCloudChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * A parameter declaration for the `String` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringparameterdeclaration.html}
 **/
export interface QuickSightAnalysisStringParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-analysis-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightAnalysisMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [StringDefaultValues](aws-properties-quicksight-analysis-stringdefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightAnalysisStringDefaultValues;
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
   * _Type_: [StringValueWhenUnsetConfiguration](aws-properties-quicksight-analysis-stringvaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightAnalysisStringValueWhenUnsetConfiguration;
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
 * The options that determine the presentation of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpioptions.html}
 **/
export interface QuickSightAnalysisKPIOptions {
  /**
   * The options that determine the secondary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryValueFontConfiguration?: QuickSightAnalysisFontConfiguration;
  /**
   * The options that determine the presentation of trend arrows in a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [TrendArrowOptions](aws-properties-quicksight-analysis-trendarrowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendArrows?: QuickSightAnalysisTrendArrowOptions;
  /**
   * The options that determine the presentation of the secondary value of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [SecondaryValueOptions](aws-properties-quicksight-analysis-secondaryvalueoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryValue?: QuickSightAnalysisSecondaryValueOptions;
  /**
   * The comparison configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonConfiguration](aws-properties-quicksight-analysis-comparisonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison?: QuickSightAnalysisComparisonConfiguration;
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
   * _Type_: [ProgressBarOptions](aws-properties-quicksight-analysis-progressbaroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgressBar?: QuickSightAnalysisProgressBarOptions;
  /**
   * The options that determine the primary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueFontConfiguration?: QuickSightAnalysisFontConfiguration;
}

/**
 * The calculated field of an analysis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-calculatedfield.html}
 **/
export interface QuickSightAnalysisCalculatedField {
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
 * Determines the row alternate color options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-rowalternatecoloroptions.html}
 **/
export interface QuickSightAnalysisRowAlternateColorOptions {
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
 * The configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartconfiguration.html}
 **/
export interface QuickSightAnalysisGaugeChartConfiguration {
  /**
   * The data label configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The field well configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartFieldWells](aws-properties-quicksight-analysis-gaugechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisGaugeChartFieldWells;
  /**
   * The tooltip configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TooltipOptions?: QuickSightAnalysisTooltipOptions;
  /**
   * The options that determine the presentation of the `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartOptions](aws-properties-quicksight-analysis-gaugechartoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GaugeChartOptions?: QuickSightAnalysisGaugeChartOptions;
  /**
   * The visual palette configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
}

/**
 * The total aggregation computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-totalaggregationcomputation.html}
 **/
export interface QuickSightAnalysisTotalAggregationComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: QuickSightAnalysisMeasureField;
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
 * A date-time parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimeparameter.html}
 **/
export interface QuickSightAnalysisDateTimeParameter {
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
 * An aggregation based on the percentile of values in a dimension or measure.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-percentileaggregation.html}
 **/
export interface QuickSightAnalysisPercentileAggregation {
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
 * Conditional formatting options of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapconditionalformattingoption.html}
 **/
export interface QuickSightAnalysisFilledMapConditionalFormattingOption {
  /**
   * The conditional formatting that determines the shape of the filled map.
   *
   * _Required_: Yes
   *
   * _Type_: [FilledMapShapeConditionalFormatting](aws-properties-quicksight-analysis-filledmapshapeconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Shape: QuickSightAnalysisFilledMapShapeConditionalFormatting;
}

/**
 * The options for a paper canvas of a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionbasedlayoutpapercanvassizeoptions.html}
 **/
export interface QuickSightAnalysisSectionBasedLayoutPaperCanvasSizeOptions {
  /**
   * Defines the spacing between the canvas content and the top, bottom, left, and right edges.
   *
   * _Required_: No
   *
   * _Type_: [Spacing](aws-properties-quicksight-analysis-spacing.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaperMargin?: QuickSightAnalysisSpacing;
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
 * The sort configuration for a `TableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablesortconfiguration.html}
 **/
export interface QuickSightAnalysisTableSortConfiguration {
  /**
   * The field sort options for rows in the table.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The pagination configuration (page size, page number) for the table.
   *
   * _Required_: No
   *
   * _Type_: [PaginationConfiguration](aws-properties-quicksight-analysis-paginationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginationConfiguration?: QuickSightAnalysisPaginationConfiguration;
}

/**
 * The configuration of target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filteroperationtargetvisualsconfiguration.html}
 **/
export interface QuickSightAnalysisFilterOperationTargetVisualsConfiguration {
  /**
   * The configuration of the same-sheet target visuals that you want to be filtered.
   *
   * _Required_: No
   *
   * _Type_: [SameSheetTargetVisualConfiguration](aws-properties-quicksight-analysis-samesheettargetvisualconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SameSheetTargetVisualConfiguration?: QuickSightAnalysisSameSheetTargetVisualConfiguration;
}

/**
 * The dimension type field with numerical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericaldimensionfield.html}
 **/
export interface QuickSightAnalysisNumericalDimensionField {
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
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-analysis-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisNumberFormatConfiguration;
  /**
   * The column that is used in the `NumericalDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The unaggregated field well for the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableunaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisTableUnaggregatedFieldWells {
  /**
   * The values field well for a pivot table. Values are unaggregated for an unaggregated table.
   *
   * _Required_: No
   *
   * _Type_: List of [UnaggregatedField](aws-properties-quicksight-analysis-unaggregatedfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisUnaggregatedField>;
}

/**
 * A collection of options that configure how each panel displays in a small multiples chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-panelconfiguration.html}
 **/
export interface QuickSightAnalysisPanelConfiguration {
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
   * _Type_: [PanelTitleOptions](aws-properties-quicksight-analysis-paneltitleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisPanelTitleOptions;
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
 * The formatting configuration for the color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingcolor.html}
 **/
export interface QuickSightAnalysisConditionalFormattingColor {
  /**
   * Formatting configuration for gradient color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingGradientColor](aws-properties-quicksight-analysis-conditionalformattinggradientcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gradient?: QuickSightAnalysisConditionalFormattingGradientColor;
  /**
   * Formatting configuration for solid color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingSolidColor](aws-properties-quicksight-analysis-conditionalformattingsolidcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Solid?: QuickSightAnalysisConditionalFormattingSolidColor;
}

/**
 * Line styles options for a line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartlinestylesettings.html}
 **/
export interface QuickSightAnalysisLineChartLineStyleSettings {
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datafieldseriesitem.html}
 **/
export interface QuickSightAnalysisDataFieldSeriesItem {
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
   * _Type_: [LineChartSeriesSettings](aws-properties-quicksight-analysis-linechartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: QuickSightAnalysisLineChartSeriesSettings;
}

/**
 * The tooltip item for the columns that are not part of a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columntooltipitem.html}
 **/
export interface QuickSightAnalysisColumnTooltipItem {
  /**
   * The aggregation function of the column tooltip item.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Aggregation?: QuickSightAnalysisAggregationFunction;
  /**
   * The target column of the tooltip item.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * Defines different defaults to the users or groups based on mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dynamicdefaultvalue.html}
 **/
export interface QuickSightAnalysisDynamicDefaultValue {
  /**
   * The column that contains the group name.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupNameColumn?: QuickSightAnalysisColumnIdentifier;
  /**
   * The column that contains the default value of each user or group.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValueColumn: QuickSightAnalysisColumnIdentifier;
  /**
   * The column that contains the username.
   *
   * _Required_: No
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserNameColumn?: QuickSightAnalysisColumnIdentifier;
}

/**
 * A control from a date filter that is used to specify date and time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterdatetimepickercontrol.html}
 **/
export interface QuickSightAnalysisFilterDateTimePickerControl {
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
   * _Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-analysis-datetimepickercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisDateTimePickerControlDisplayOptions;
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
 * The options that determine the arc thickness of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcoptions.html}
 **/
export interface QuickSightAnalysisArcOptions {
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
 * A `TimeRangeFilter` filters values that are between two specified values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timerangefilter.html}
 **/
export interface QuickSightAnalysisTimeRangeFilter {
  /**
   * The minimum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilterValue](aws-properties-quicksight-analysis-timerangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMinimumValue?: QuickSightAnalysisTimeRangeFilterValue;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
  /**
   * The maximum value for the filter value range.
   *
   * _Required_: No
   *
   * _Type_: [TimeRangeFilterValue](aws-properties-quicksight-analysis-timerangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMaximumValue?: QuickSightAnalysisTimeRangeFilterValue;
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
   * _Type_: [ExcludePeriodConfiguration](aws-properties-quicksight-analysis-excludeperiodconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludePeriodConfiguration?: QuickSightAnalysisExcludePeriodConfiguration;
}

/**
 * The options that determine the presentation of the secondary value of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-secondaryvalueoptions.html}
 **/
export interface QuickSightAnalysisSecondaryValueOptions {
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
 * The conditional formatting options of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiconditionalformattingoption.html}
 **/
export interface QuickSightAnalysisKPIConditionalFormattingOption {
  /**
   * The conditional formatting for the primary value of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIPrimaryValueConditionalFormatting](aws-properties-quicksight-analysis-kpiprimaryvalueconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValue?: QuickSightAnalysisKPIPrimaryValueConditionalFormatting;
  /**
   * The conditional formatting for the progress bar of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIProgressBarConditionalFormatting](aws-properties-quicksight-analysis-kpiprogressbarconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgressBar?: QuickSightAnalysisKPIProgressBarConditionalFormatting;
}

/**
 * The rolling date configuration of a date time filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-rollingdateconfiguration.html}
 **/
export interface QuickSightAnalysisRollingDateConfiguration {
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
 * The sort configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartsortconfiguration.html}
 **/
export interface QuickSightAnalysisLineChartSortConfiguration {
  /**
   * The limit on the number of categories that are displayed in a line chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The limit on the number of lines that are displayed in a line chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}

/**
 * The options that determine the sizing of the canvas used in a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutscreencanvassizeoptions.html}
 **/
export interface QuickSightAnalysisGridLayoutScreenCanvasSizeOptions {
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
 * The growth rate computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-growthratecomputation.html}
 **/
export interface QuickSightAnalysisGrowthRateComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightAnalysisMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightAnalysisDimensionField;
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
 * The paginated report options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablepaginatedreportoptions.html}
 **/
export interface QuickSightAnalysisTablePaginatedReportOptions {
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
 * A `Layout` defines the placement of elements within a sheet.
 *
 * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the _Amazon QuickSight User Guide_.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-layout.html}
 **/
export interface QuickSightAnalysisLayout {
  /**
   * The configuration that determines what the type of layout for a sheet.
   *
   * _Required_: Yes
   *
   * _Type_: [LayoutConfiguration](aws-properties-quicksight-analysis-layoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightAnalysisLayoutConfiguration;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dropdowncontroldisplayoptions.html}
 **/
export interface QuickSightAnalysisDropDownControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightAnalysisLabelOptions;
  /**
   * The configuration of the `Select all` options in a dropdown control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSelectAllOptions](aws-properties-quicksight-analysis-listcontrolselectalloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectAllOptions?: QuickSightAnalysisListControlSelectAllOptions;
}

/**
 * The range options for the data zoom scroll bar.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visiblerangeoptions.html}
 **/
export interface QuickSightAnalysisVisibleRangeOptions {
  /**
   * The percent range in the visible range.
   *
   * _Required_: No
   *
   * _Type_: [PercentVisibleRange](aws-properties-quicksight-analysis-percentvisiblerange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentRange?: QuickSightAnalysisPercentVisibleRange;
}

/**
 * A waterfall chart.
 *
 * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallvisual.html}
 **/
export interface QuickSightAnalysisWaterfallVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [WaterfallChartConfiguration](aws-properties-quicksight-analysis-waterfallchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisWaterfallChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The period over period computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-periodoverperiodcomputation.html}
 **/
export interface QuickSightAnalysisPeriodOverPeriodComputation {
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightAnalysisMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightAnalysisDimensionField;
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
 * The forecast properties setup of a forecast in the line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timebasedforecastproperties.html}
 **/
export interface QuickSightAnalysisTimeBasedForecastProperties {
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
 * The navigation configuration for `CustomActionNavigationOperation`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-localnavigationconfiguration.html}
 **/
export interface QuickSightAnalysisLocalNavigationConfiguration {
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
 * The minimum and maximum setup for an axis display range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdisplayminmaxrange.html}
 **/
export interface QuickSightAnalysisAxisDisplayMinMaxRange {
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
 * The sort configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartsortconfiguration.html}
 **/
export interface QuickSightAnalysisWaterfallChartSortConfiguration {
  /**
   * The limit on the number of bar groups that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BreakdownItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * Configuration options for the canvas of a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutcanvassizeoptions.html}
 **/
export interface QuickSightAnalysisGridLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a grid layout.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutScreenCanvasSizeOptions](aws-properties-quicksight-analysis-gridlayoutscreencanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScreenCanvasSizeOptions?: QuickSightAnalysisGridLayoutScreenCanvasSizeOptions;
}

/**
 * The logarithmic axis scale setup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislogarithmicscale.html}
 **/
export interface QuickSightAnalysisAxisLogarithmicScale {
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
 * The forecast scenario of a forecast in the line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-forecastscenario.html}
 **/
export interface QuickSightAnalysisForecastScenario {
  /**
   * The what-if analysis forecast setup with the date range.
   *
   * _Required_: No
   *
   * _Type_: [WhatIfRangeScenario](aws-properties-quicksight-analysis-whatifrangescenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhatIfRangeScenario?: QuickSightAnalysisWhatIfRangeScenario;
  /**
   * The what-if analysis forecast setup with the target date.
   *
   * _Required_: No
   *
   * _Type_: [WhatIfPointScenario](aws-properties-quicksight-analysis-whatifpointscenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhatIfPointScenario?: QuickSightAnalysisWhatIfPointScenario;
}

/**
 * The label options for an axis on a chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-chartaxislabeloptions.html}
 **/
export interface QuickSightAnalysisChartAxisLabelOptions {
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
   * _Type_: [List](aws-properties-quicksight-analysis-axislabeloptions.md) of [AxisLabelOptions](aws-properties-quicksight-analysis-axislabeloptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisLabelOptions?: List<QuickSightAnalysisAxisLabelOptions>;
}

/**
 * A `TimeEqualityFilter` filters values that are equal to a given value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timeequalityfilter.html}
 **/
export interface QuickSightAnalysisTimeEqualityFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The series item configuration of a line chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-seriesitem.html}
 **/
export interface QuickSightAnalysisSeriesItem {
  /**
   * The field series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [FieldSeriesItem](aws-properties-quicksight-analysis-fieldseriesitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSeriesItem?: QuickSightAnalysisFieldSeriesItem;
  /**
   * The data field series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [DataFieldSeriesItem](aws-properties-quicksight-analysis-datafieldseriesitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataFieldSeriesItem?: QuickSightAnalysisDataFieldSeriesItem;
}

/**
 * The configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramchartconfiguration.html}
 **/
export interface QuickSightAnalysisSankeyDiagramChartConfiguration {
  /**
   * The sort configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramSortConfiguration](aws-properties-quicksight-analysis-sankeydiagramsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisSankeyDiagramSortConfiguration;
  /**
   * The data label configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The field well configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramFieldWells](aws-properties-quicksight-analysis-sankeydiagramfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisSankeyDiagramFieldWells;
}

/**
 * The custom icon content for the table link content configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldcustomiconcontent.html}
 **/
export interface QuickSightAnalysisTableFieldCustomIconContent {
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
 * The sort configuration of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapsortconfiguration.html}
 **/
export interface QuickSightAnalysisFilledMapSortConfiguration {
  /**
   * The sort configuration of the location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * A text box.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheettextbox.html}
 **/
export interface QuickSightAnalysisSheetTextBox {
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
 * The configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiconfiguration.html}
 **/
export interface QuickSightAnalysisKPIConfiguration {
  /**
   * The sort configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPISortConfiguration](aws-properties-quicksight-analysis-kpisortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisKPISortConfiguration;
  /**
   * The options that determine the presentation of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIOptions](aws-properties-quicksight-analysis-kpioptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KPIOptions?: QuickSightAnalysisKPIOptions;
  /**
   * The field well configuration of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIFieldWells](aws-properties-quicksight-analysis-kpifieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisKPIFieldWells;
}

/**
 * A sheet is an object that contains a set of visuals that are viewed together on one page in a paginated report. Every analysis and dashboard must contain at least one sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetdefinition.html}
 **/
export interface QuickSightAnalysisSheetDefinition {
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
   * _Type_: List of [ParameterControl](aws-properties-quicksight-analysis-parametercontrol.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterControls?: List<QuickSightAnalysisParameterControl>;
  /**
   * The text boxes that are on a sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetTextBox](aws-properties-quicksight-analysis-sheettextbox.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextBoxes?: List<QuickSightAnalysisSheetTextBox>;
  /**
   * Layouts define how the components of a sheet are arranged.
   *
   * For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Layout](aws-properties-quicksight-analysis-layout.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layouts?: List<QuickSightAnalysisLayout>;
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
   * _Type_: List of [FilterControl](aws-properties-quicksight-analysis-filtercontrol.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterControls?: List<QuickSightAnalysisFilterControl>;
  /**
   * The control layouts of the sheet.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetControlLayout](aws-properties-quicksight-analysis-sheetcontrollayout.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetControlLayouts?: List<QuickSightAnalysisSheetControlLayout>;
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
   * _Type_: List of [Visual](aws-properties-quicksight-analysis-visual.md)
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Visuals?: List<QuickSightAnalysisVisual>;
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
 * The sort configuration of a `BoxPlotVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotsortconfiguration.html}
 **/
export interface QuickSightAnalysisBoxPlotSortConfiguration {
  /**
   * The sort configuration of a group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The pagination configuration of a table visual or box plot.
   *
   * _Required_: No
   *
   * _Type_: [PaginationConfiguration](aws-properties-quicksight-analysis-paginationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginationConfiguration?: QuickSightAnalysisPaginationConfiguration;
}

/**
 * The numeric equality type drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categorydrilldownfilter.html}
 **/
export interface QuickSightAnalysisCategoryDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * A control to display a dropdown list with buttons that are used to select a single value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterdropdowncontrol.html}
 **/
export interface QuickSightAnalysisFilterDropDownControl {
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
   * _Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-analysis-dropdowncontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisDropDownControlDisplayOptions;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-analysis-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
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
   * _Type_: [FilterSelectableValues](aws-properties-quicksight-analysis-filterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightAnalysisFilterSelectableValues;
}

/**
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterslidercontrol.html}
 **/
export interface QuickSightAnalysisFilterSliderControl {
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
   * _Type_: [SliderControlDisplayOptions](aws-properties-quicksight-analysis-slidercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisSliderControlDisplayOptions;
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
 * A list of Amazon QuickSight parameters and the list's override values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameters.html}
 **/
export interface QuickSightAnalysisParameters {
  /**
   * The parameters that have a data type of string.
   *
   * _Required_: No
   *
   * _Type_: List of [StringParameter](aws-properties-quicksight-analysis-stringparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringParameters?: List<QuickSightAnalysisStringParameter>;
  /**
   * The parameters that have a data type of decimal.
   *
   * _Required_: No
   *
   * _Type_: List of [DecimalParameter](aws-properties-quicksight-analysis-decimalparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalParameters?: List<QuickSightAnalysisDecimalParameter>;
  /**
   * The parameters that have a data type of integer.
   *
   * _Required_: No
   *
   * _Type_: List of [IntegerParameter](aws-properties-quicksight-analysis-integerparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerParameters?: List<QuickSightAnalysisIntegerParameter>;
  /**
   * The parameters that have a data type of date-time.
   *
   * _Required_: No
   *
   * _Type_: List of [DateTimeParameter](aws-properties-quicksight-analysis-datetimeparameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeParameters?: List<QuickSightAnalysisDateTimeParameter>;
}

/**
 * The conditional formatting for the primary value of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiprimaryvalueconditionalformatting.html}
 **/
export interface QuickSightAnalysisKPIPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value's text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  /**
   * The conditional formatting of the primary value's icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-analysis-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
}

/**
 * The sort configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramsortconfiguration.html}
 **/
export interface QuickSightAnalysisSankeyDiagramSortConfiguration {
  /**
   * The sort configuration of the weight fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of source nodes that are displayed in a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The limit on the number of destination nodes that are displayed in a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
}

/**
 * The options that determine the percentage display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-percentagedisplayformatconfiguration.html}
 **/
export interface QuickSightAnalysisPercentageDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-analysis-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightAnalysisNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-analysis-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightAnalysisDecimalPlacesConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-analysis-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
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
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-analysis-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightAnalysisNumericSeparatorConfiguration;
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
 * The configuration for a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapconfiguration.html}
 **/
export interface QuickSightAnalysisFilledMapConfiguration {
  /**
   * The sort configuration of a `FilledMapVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapSortConfiguration](aws-properties-quicksight-analysis-filledmapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisFilledMapSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The map style options of the filled map visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-analysis-geospatialmapstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapStyleOptions?: QuickSightAnalysisGeospatialMapStyleOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapFieldWells](aws-properties-quicksight-analysis-filledmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisFilledMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The window options of the filled map visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialWindowOptions](aws-properties-quicksight-analysis-geospatialwindowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowOptions?: QuickSightAnalysisGeospatialWindowOptions;
}

/**
 * Formatting configuration for solid color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingsolidcolor.html}
 **/
export interface QuickSightAnalysisConditionalFormattingSolidColor {
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
 * Aggregation for numerical values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericalaggregationfunction.html}
 **/
export interface QuickSightAnalysisNumericalAggregationFunction {
  /**
   * An aggregation based on the percentile of values in a dimension or measure.
   *
   * _Required_: No
   *
   * _Type_: [PercentileAggregation](aws-properties-quicksight-analysis-percentileaggregation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentileAggregation?: QuickSightAnalysisPercentileAggregation;
  /**
   * Built-in aggregation functions for numerical values.
   */
  SimpleNumericalAggregation?: Value<string>;
}

/**
 * The configuration of a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudchartconfiguration.html}
 **/
export interface QuickSightAnalysisWordCloudChartConfiguration {
  /**
   * The sort configuration of a word cloud visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudSortConfiguration](aws-properties-quicksight-analysis-wordcloudsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisWordCloudSortConfiguration;
  /**
   * The label options (label text, label visibility, and sort icon visibility) for the word cloud category.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudFieldWells](aws-properties-quicksight-analysis-wordcloudfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisWordCloudFieldWells;
  /**
   * The options for a word cloud visual.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudOptions](aws-properties-quicksight-analysis-wordcloudoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudOptions?: QuickSightAnalysisWordCloudOptions;
}

/**
 * The metric comparison computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-metriccomparisoncomputation.html}
 **/
export interface QuickSightAnalysisMetricComparisonComputation {
  /**
   * The field that is used in a metric comparison to value setup.
   *
   * _Required_: Yes
   *
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: QuickSightAnalysisMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightAnalysisDimensionField;
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
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromValue: QuickSightAnalysisMeasureField;
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
 * A string parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringparameter.html}
 **/
export interface QuickSightAnalysisStringParameter {
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
 * The optional configuration of totals cells in a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottotaloptions.html}
 **/
export interface QuickSightAnalysisPivotTotalOptions {
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueCellStyle?: QuickSightAnalysisTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightAnalysisTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricHeaderCellStyle?: QuickSightAnalysisTableCellStyle;
}

/**
 * The option that determines the hierarchy of the fields that are defined during data preparation. These fields are available to use in any analysis that uses the data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-predefinedhierarchy.html}
 **/
export interface QuickSightAnalysisPredefinedHierarchy {
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
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-analysis-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightAnalysisDrillDownFilter>;
  /**
   * The list of columns that define the predefined hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightAnalysisColumnIdentifier>;
}

/**
 * The options that determine the presentation of a line series in the visual
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartseriessettings.html}
 **/
export interface QuickSightAnalysisLineChartSeriesSettings {
  /**
   * Line styles options for a line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartLineStyleSettings](aws-properties-quicksight-analysis-linechartlinestylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineStyleSettings?: QuickSightAnalysisLineChartLineStyleSettings;
  /**
   * Marker styles options for a line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-analysis-linechartmarkerstylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerStyleSettings?: QuickSightAnalysisLineChartMarkerStyleSettings;
}

/**
 * The configuration of loading animation in free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-loadinganimation.html}
 **/
export interface QuickSightAnalysisLoadingAnimation {
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
 * The options that determine the default settings for a grid layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultgridlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisDefaultGridLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a grid layout.
   *
   * _Required_: Yes
   *
   * _Type_: [GridLayoutCanvasSizeOptions](aws-properties-quicksight-analysis-gridlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightAnalysisGridLayoutCanvasSizeOptions;
}

/**
 * The configuration for a `HistogramVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramconfiguration.html}
 **/
export interface QuickSightAnalysisHistogramConfiguration {
  /**
   * The options that determine the presentation of the y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The data label configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The options that determine the presentation of histogram bins.
   *
   * _Required_: No
   *
   * _Type_: [HistogramBinOptions](aws-properties-quicksight-analysis-histogrambinoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinOptions?: QuickSightAnalysisHistogramBinOptions;
  /**
   * The field well configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [HistogramFieldWells](aws-properties-quicksight-analysis-histogramfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisHistogramFieldWells;
  /**
   * The tooltip configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The options that determine the presentation of the x-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The visual palette configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
  /**
   * The options that determine the presentation of the x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
}

/**
 * The options that determine the presentation of the data labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datalabeloptions.html}
 **/
export interface QuickSightAnalysisDataLabelOptions {
  /**
   * The option that determines the data label type.
   *
   * _Required_: No
   *
   * _Type_: List of [DataLabelType](aws-properties-quicksight-analysis-datalabeltype.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabelTypes?: List<QuickSightAnalysisDataLabelType>;
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelFontConfiguration?: QuickSightAnalysisFontConfiguration;
}

/**
 * The conditional formatting for the text.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textconditionalformat.html}
 **/
export interface QuickSightAnalysisTextConditionalFormat {
  /**
   * The conditional formatting for the text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  /**
   * The conditional formatting for the icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-analysis-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
  /**
   * The conditional formatting for the text background color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: QuickSightAnalysisConditionalFormattingColor;
}

/**
 * The field sort options in a chart configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldsortoptions.html}
 **/
export interface QuickSightAnalysisFieldSortOptions {
  /**
   * The sort configuration for a field in a field well.
   *
   * _Required_: No
   *
   * _Type_: [FieldSort](aws-properties-quicksight-analysis-fieldsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSort?: QuickSightAnalysisFieldSort;
  /**
   * The sort configuration for a column that is not used in a field well.
   *
   * _Required_: No
   *
   * _Type_: [ColumnSort](aws-properties-quicksight-analysis-columnsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSort?: QuickSightAnalysisColumnSort;
}

/**
 * A tree map.
 *
 * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapvisual.html}
 **/
export interface QuickSightAnalysisTreeMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [TreeMapConfiguration](aws-properties-quicksight-analysis-treemapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisTreeMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The general configuration of a column.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-columnconfiguration.html}
 **/
export interface QuickSightAnalysisColumnConfiguration {
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
   * _Type_: [FormatConfiguration](aws-properties-quicksight-analysis-formatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisFormatConfiguration;
  /**
   * The column.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ColorsConfiguration](aws-properties-quicksight-analysis-colorsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorsConfiguration?: QuickSightAnalysisColorsConfiguration;
}

/**
 * Analysis error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysiserror.html}
 **/
export interface QuickSightAnalysisAnalysisError {
  /**
   * The type of the analysis error.
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
   * The message associated with the analysis error.
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
   * Lists the violated entities that caused the analysis error
   *
   * _Required_: No
   *
   * _Type_: List of [Entity](aws-properties-quicksight-analysis-entity.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ViolatedEntities?: List<QuickSightAnalysisEntity>;
}

/**
 * The field wells of a word cloud visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudfieldwells.html}
 **/
export interface QuickSightAnalysisWordCloudFieldWells {
  /**
   * The aggregated field wells of a word cloud.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudAggregatedFieldWells](aws-properties-quicksight-analysis-wordcloudaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudAggregatedFieldWells?: QuickSightAnalysisWordCloudAggregatedFieldWells;
}

/**
 * The forecast computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-forecastcomputation.html}
 **/
export interface QuickSightAnalysisForecastComputation {
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
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightAnalysisMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightAnalysisDimensionField;
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
 * The sort configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpisortconfiguration.html}
 **/
export interface QuickSightAnalysisKPISortConfiguration {
  /**
   * The sort configuration of the trend group fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendGroupSort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * An object, structure, or sub-structure of an analysis, template, or dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-entity.html}
 **/
export interface QuickSightAnalysisEntity {
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
 * The arc axis range of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcaxisdisplayrange.html}
 **/
export interface QuickSightAnalysisArcAxisDisplayRange {
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
 * The `MappedDataSetParameter` property type specifies Property description not available. for an [AWS::QuickSight::Analysis](aws-resource-quicksight-analysis.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-mappeddatasetparameter.html}
 **/
export interface QuickSightAnalysisMappedDataSetParameter {
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
 * The option that determines the hierarchy of any `DateTime` fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimehierarchy.html}
 **/
export interface QuickSightAnalysisDateTimeHierarchy {
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
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-analysis-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightAnalysisDrillDownFilter>;
}

/**
 * A custom filter that filters based on a single value. This filter can be partially matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customfilterconfiguration.html}
 **/
export interface QuickSightAnalysisCustomFilterConfiguration {
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
 * The display options for the visual tooltip.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tooltipoptions.html}
 **/
export interface QuickSightAnalysisTooltipOptions {
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
   * _Type_: [FieldBasedTooltip](aws-properties-quicksight-analysis-fieldbasedtooltip.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldBasedTooltip?: QuickSightAnalysisFieldBasedTooltip;
}

/**
 * The category drill down filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericequalitydrilldownfilter.html}
 **/
export interface QuickSightAnalysisNumericEqualityDrillDownFilter {
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The simple cluster marker of the cluster marker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-simpleclustermarker.html}
 **/
export interface QuickSightAnalysisSimpleClusterMarker {
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
 * The configuration of destination parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-destinationparametervalueconfiguration.html}
 **/
export interface QuickSightAnalysisDestinationParameterValueConfiguration {
  /**
   * The configuration of custom values for destination parameter in `DestinationParameterValueConfiguration`.
   *
   * _Required_: No
   *
   * _Type_: [CustomValuesConfiguration](aws-properties-quicksight-analysis-customvaluesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValuesConfiguration?: QuickSightAnalysisCustomValuesConfiguration;
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
 * Formatting configuration for number fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numberformatconfiguration.html}
 **/
export interface QuickSightAnalysisNumberFormatConfiguration {
  /**
   * The options that determine the numeric format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-analysis-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimepickercontroldisplayoptions.html}
 **/
export interface QuickSightAnalysisDateTimePickerControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightAnalysisLabelOptions;
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
 * The configuration of a page break for a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionpagebreakconfiguration.html}
 **/
export interface QuickSightAnalysisSectionPageBreakConfiguration {
  /**
   * The configuration of a page break after a section.
   *
   * _Required_: No
   *
   * _Type_: [SectionAfterPageBreak](aws-properties-quicksight-analysis-sectionafterpagebreak.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  After?: QuickSightAnalysisSectionAfterPageBreak;
}

/**
 * The field well configuration of a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisWaterfallChartAggregatedFieldWells {
  /**
   * The category field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Categories?: List<QuickSightAnalysisDimensionField>;
  /**
   * The breakdown field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Breakdowns?: List<QuickSightAnalysisDimensionField>;
  /**
   * The value field wells of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The declaration definition of a parameter.
 *
 * For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterdeclaration.html}
 **/
export interface QuickSightAnalysisParameterDeclaration {
  /**
   * A parameter declaration for the `String` data type.
   *
   * _Required_: No
   *
   * _Type_: [StringParameterDeclaration](aws-properties-quicksight-analysis-stringparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringParameterDeclaration?: QuickSightAnalysisStringParameterDeclaration;
  /**
   * A parameter declaration for the `DateTime` data type.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeParameterDeclaration](aws-properties-quicksight-analysis-datetimeparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeParameterDeclaration?: QuickSightAnalysisDateTimeParameterDeclaration;
  /**
   * A parameter declaration for the `Decimal` data type.
   *
   * _Required_: No
   *
   * _Type_: [DecimalParameterDeclaration](aws-properties-quicksight-analysis-decimalparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalParameterDeclaration?: QuickSightAnalysisDecimalParameterDeclaration;
  /**
   * A parameter declaration for the `Integer` data type.
   *
   * _Required_: No
   *
   * _Type_: [IntegerParameterDeclaration](aws-properties-quicksight-analysis-integerparameterdeclaration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerParameterDeclaration?: QuickSightAnalysisIntegerParameterDeclaration;
}

/**
 * A gauge chart.
 *
 * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartvisual.html}
 **/
export interface QuickSightAnalysisGaugeChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartConditionalFormatting](aws-properties-quicksight-analysis-gaugechartconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightAnalysisGaugeChartConditionalFormatting;
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
   * _Type_: [GaugeChartConfiguration](aws-properties-quicksight-analysis-gaugechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisGaugeChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconditionalformattingoption.html}
 **/
export interface QuickSightAnalysisPivotTableConditionalFormattingOption {
  /**
   * The cell conditional formatting option for a pivot table.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableCellConditionalFormatting](aws-properties-quicksight-analysis-pivottablecellconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cell?: QuickSightAnalysisPivotTableCellConditionalFormatting;
}

/**
 * A pivot table.
 *
 * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablevisual.html}
 **/
export interface QuickSightAnalysisPivotTableVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableConditionalFormatting](aws-properties-quicksight-analysis-pivottableconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightAnalysisPivotTableConditionalFormatting;
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
   * _Type_: [PivotTableConfiguration](aws-properties-quicksight-analysis-pivottableconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisPivotTableConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}

/**
 * The static data configuration of the reference line data configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinestaticdataconfiguration.html}
 **/
export interface QuickSightAnalysisReferenceLineStaticDataConfiguration {
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
 * Determines the icon display configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingicondisplayconfiguration.html}
 **/
export interface QuickSightAnalysisConditionalFormattingIconDisplayConfiguration {
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
 * The table options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableoptions.html}
 **/
export interface QuickSightAnalysisTableOptions {
  /**
   * The table cell style of a table header.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderStyle?: QuickSightAnalysisTableCellStyle;
  /**
   * The table cell style of table cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CellStyle?: QuickSightAnalysisTableCellStyle;
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
   * _Type_: [RowAlternateColorOptions](aws-properties-quicksight-analysis-rowalternatecoloroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowAlternateColorOptions?: QuickSightAnalysisRowAlternateColorOptions;
}

/**
 * The range ends label type of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-rangeendslabeltype.html}
 **/
export interface QuickSightAnalysisRangeEndsLabelType {
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
 * Marker styles options for a line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartmarkerstylesettings.html}
 **/
export interface QuickSightAnalysisLineChartMarkerStyleSettings {
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
 * The options that determine the presentation of the data labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartdatalabeloptions.html}
 **/
export interface QuickSightAnalysisFunnelChartDataLabelOptions {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelFontConfiguration?: QuickSightAnalysisFontConfiguration;
}

/**
 * The configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartconfiguration.html}
 **/
export interface QuickSightAnalysisFunnelChartConfiguration {
  /**
   * The sort configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartSortConfiguration](aws-properties-quicksight-analysis-funnelchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisFunnelChartSortConfiguration;
  /**
   * The options that determine the presentation of the data labels.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartDataLabelOptions](aws-properties-quicksight-analysis-funnelchartdatalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabelOptions?: QuickSightAnalysisFunnelChartDataLabelOptions;
  /**
   * The label options of the categories that are displayed in a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The field well configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartFieldWells](aws-properties-quicksight-analysis-funnelchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisFunnelChartFieldWells;
  /**
   * The tooltip configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The label options for the values that are displayed in a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The visual palette configuration of a `FunnelChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
}

/**
 * The aggregated field wells of a combo chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisComboChartAggregatedFieldWells {
  /**
   * The aggregated `BarValues` field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarValues?: List<QuickSightAnalysisMeasureField>;
  /**
   * The aggregated category field wells of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightAnalysisDimensionField>;
  /**
   * The aggregated colors field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightAnalysisDimensionField>;
  /**
   * The aggregated `LineValues` field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineValues?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The configuration options to sort aggregated values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-aggregationsortconfiguration.html}
 **/
export interface QuickSightAnalysisAggregationSortConfiguration {
  /**
   * The function that aggregates the values in `Column`.
   *
   * _Required_: Yes
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction: QuickSightAnalysisAggregationFunction;
  /**
   * The sort direction of values.
   */
  SortDirection: Value<string>;
  /**
   * The column that determines the sort order of aggregated values.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
}

/**
 * The link configuration of a table field URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldlinkconfiguration.html}
 **/
export interface QuickSightAnalysisTableFieldLinkConfiguration {
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
   * _Type_: [TableFieldLinkContentConfiguration](aws-properties-quicksight-analysis-tablefieldlinkcontentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: QuickSightAnalysisTableFieldLinkContentConfiguration;
}

/**
 * The text format for a subtitle.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-longformattext.html}
 **/
export interface QuickSightAnalysisLongFormatText {
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
 * The options that determine the default presentation of all line series in `LineChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartdefaultseriessettings.html}
 **/
export interface QuickSightAnalysisLineChartDefaultSeriesSettings {
  /**
   * Line styles options for all line series in the visual.
   *
   * _Required_: No
   *
   * _Type_: [LineChartLineStyleSettings](aws-properties-quicksight-analysis-linechartlinestylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineStyleSettings?: QuickSightAnalysisLineChartLineStyleSettings;
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
   * _Type_: [LineChartMarkerStyleSettings](aws-properties-quicksight-analysis-linechartmarkerstylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MarkerStyleSettings?: QuickSightAnalysisLineChartMarkerStyleSettings;
}

/**
 * The configuration of spacing (often a margin or padding).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-spacing.html}
 **/
export interface QuickSightAnalysisSpacing {
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
 * A parameter declaration for the `DateTime` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimeparameterdeclaration.html}
 **/
export interface QuickSightAnalysisDateTimeParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-analysis-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightAnalysisMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeDefaultValues](aws-properties-quicksight-analysis-datetimedefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightAnalysisDateTimeDefaultValues;
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
   * _Type_: [DateTimeValueWhenUnsetConfiguration](aws-properties-quicksight-analysis-datetimevaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightAnalysisDateTimeValueWhenUnsetConfiguration;
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
 * A radar chart visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartvisual.html}
 **/
export interface QuickSightAnalysisRadarChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [RadarChartConfiguration](aws-properties-quicksight-analysis-radarchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisRadarChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The configuration for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconfiguration.html}
 **/
export interface QuickSightAnalysisPivotTableConfiguration {
  /**
   * The sort configuration for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableSortConfiguration](aws-properties-quicksight-analysis-pivottablesortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisPivotTableSortConfiguration;
  /**
   * The paginated report options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTablePaginatedReportOptions](aws-properties-quicksight-analysis-pivottablepaginatedreportoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedReportOptions?: QuickSightAnalysisPivotTablePaginatedReportOptions;
  /**
   * The table options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableOptions](aws-properties-quicksight-analysis-pivottableoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableOptions?: QuickSightAnalysisPivotTableOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableFieldWells](aws-properties-quicksight-analysis-pivottablefieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisPivotTableFieldWells;
  /**
   * The field options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableFieldOptions](aws-properties-quicksight-analysis-pivottablefieldoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldOptions?: QuickSightAnalysisPivotTableFieldOptions;
  /**
   * The total options for a pivot table visual.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableTotalOptions](aws-properties-quicksight-analysis-pivottabletotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalOptions?: QuickSightAnalysisPivotTableTotalOptions;
}

/**
 * The options that determine the sizing of the canvas used in a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutscreencanvassizeoptions.html}
 **/
export interface QuickSightAnalysisFreeFormLayoutScreenCanvasSizeOptions {
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
 * A custom action defined on a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualcustomaction.html}
 **/
export interface QuickSightAnalysisVisualCustomAction {
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
   * _Type_: List of [VisualCustomActionOperation](aws-properties-quicksight-analysis-visualcustomactionoperation.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionOperations: List<QuickSightAnalysisVisualCustomActionOperation>;
}

/**
 * The field label type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldlabeltype.html}
 **/
export interface QuickSightAnalysisFieldLabelType {
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
 * The options that determine the numeric separator configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericseparatorconfiguration.html}
 **/
export interface QuickSightAnalysisNumericSeparatorConfiguration {
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
   * _Type_: [ThousandSeparatorOptions](aws-properties-quicksight-analysis-thousandseparatoroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThousandsSeparator?: QuickSightAnalysisThousandSeparatorOptions;
}

/**
 * The tooltip.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tooltipitem.html}
 **/
export interface QuickSightAnalysisTooltipItem {
  /**
   * The tooltip item for the fields.
   *
   * _Required_: No
   *
   * _Type_: [FieldTooltipItem](aws-properties-quicksight-analysis-fieldtooltipitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldTooltipItem?: QuickSightAnalysisFieldTooltipItem;
  /**
   * The tooltip item for the columns that are not part of a field well.
   *
   * _Required_: No
   *
   * _Type_: [ColumnTooltipItem](aws-properties-quicksight-analysis-columntooltipitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnTooltipItem?: QuickSightAnalysisColumnTooltipItem;
}

/**
 * A control to display a text box that is used to enter a single entry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parametertextfieldcontrol.html}
 **/
export interface QuickSightAnalysisParameterTextFieldControl {
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
   * _Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-analysis-textfieldcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisTextFieldControlDisplayOptions;
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
 * The configuration for a grid layout. Also called a tiled layout.
 *
 * Visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisGridLayoutConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutCanvasSizeOptions](aws-properties-quicksight-analysis-gridlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions?: QuickSightAnalysisGridLayoutCanvasSizeOptions;
  /**
   * The elements that are included in a grid layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [GridLayoutElement](aws-properties-quicksight-analysis-gridlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightAnalysisGridLayoutElement>;
}

/**
 * The options that determine the presentation of trend arrows in a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-trendarrowoptions.html}
 **/
export interface QuickSightAnalysisTrendArrowOptions {
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
 * The forecast configuration that is used in a line chart's display properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-forecastconfiguration.html}
 **/
export interface QuickSightAnalysisForecastConfiguration {
  /**
   * The forecast properties setup of a forecast in the line chart.
   *
   * _Required_: No
   *
   * _Type_: [TimeBasedForecastProperties](aws-properties-quicksight-analysis-timebasedforecastproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForecastProperties?: QuickSightAnalysisTimeBasedForecastProperties;
  /**
   * The forecast scenario of a forecast in the line chart.
   *
   * _Required_: No
   *
   * _Type_: [ForecastScenario](aws-properties-quicksight-analysis-forecastscenario.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scenario?: QuickSightAnalysisForecastScenario;
}

/**
 * The cluster marker configuration of the geospatial map selected point style.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-clustermarkerconfiguration.html}
 **/
export interface QuickSightAnalysisClusterMarkerConfiguration {
  /**
   * The cluster marker that is a part of the cluster marker configuration
   *
   * _Required_: No
   *
   * _Type_: [ClusterMarker](aws-properties-quicksight-analysis-clustermarker.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterMarker?: QuickSightAnalysisClusterMarker;
}

/**
 * A visual displayed on a sheet in an analysis, dashboard, or template.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visual.html}
 **/
export interface QuickSightAnalysisVisual {
  /**
   * A funnel chart.
   *
   * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [FunnelChartVisual](aws-properties-quicksight-analysis-funnelchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunnelChartVisual?: QuickSightAnalysisFunnelChartVisual;
  /**
   * A filled map.
   *
   * For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapVisual](aws-properties-quicksight-analysis-filledmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilledMapVisual?: QuickSightAnalysisFilledMapVisual;
  /**
   * A box plot.
   *
   * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotVisual](aws-properties-quicksight-analysis-boxplotvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotVisual?: QuickSightAnalysisBoxPlotVisual;
  /**
   * A waterfall chart.
   *
   * For more information, see [Using waterfall charts](https://docs.aws.amazon.com/quicksight/latest/user/waterfall-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallVisual](aws-properties-quicksight-analysis-waterfallvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallVisual?: QuickSightAnalysisWaterfallVisual;
  /**
   * A visual that contains custom content.
   *
   * For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomContentVisual](aws-properties-quicksight-analysis-customcontentvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomContentVisual?: QuickSightAnalysisCustomContentVisual;
  /**
   * A pie or donut chart.
   *
   * For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PieChartVisual](aws-properties-quicksight-analysis-piechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PieChartVisual?: QuickSightAnalysisPieChartVisual;
  /**
   * A key performance indicator (KPI).
   *
   * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [KPIVisual](aws-properties-quicksight-analysis-kpivisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KPIVisual?: QuickSightAnalysisKPIVisual;
  /**
   * A histogram.
   *
   * For more information, see [Using histograms](https://docs.aws.amazon.com/quicksight/latest/user/histogram-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [HistogramVisual](aws-properties-quicksight-analysis-histogramvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistogramVisual?: QuickSightAnalysisHistogramVisual;
  /**
   * A table visual.
   *
   * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [TableVisual](aws-properties-quicksight-analysis-tablevisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableVisual?: QuickSightAnalysisTableVisual;
  /**
   * A pivot table.
   *
   * For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PivotTableVisual](aws-properties-quicksight-analysis-pivottablevisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PivotTableVisual?: QuickSightAnalysisPivotTableVisual;
  /**
   * A geospatial map or a points on map visual.
   *
   * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapVisual](aws-properties-quicksight-analysis-geospatialmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeospatialMapVisual?: QuickSightAnalysisGeospatialMapVisual;
  /**
   * A bar chart.
   *
   * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [BarChartVisual](aws-properties-quicksight-analysis-barchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarChartVisual?: QuickSightAnalysisBarChartVisual;
  /**
   * A scatter plot.
   *
   * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotVisual](aws-properties-quicksight-analysis-scatterplotvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotVisual?: QuickSightAnalysisScatterPlotVisual;
  /**
   * A radar chart visual.
   *
   * For more information, see [Using radar charts](https://docs.aws.amazon.com/quicksight/latest/user/radar-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartVisual](aws-properties-quicksight-analysis-radarchartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RadarChartVisual?: QuickSightAnalysisRadarChartVisual;
  /**
   * A heat map.
   *
   * For more information, see [Using heat maps](https://docs.aws.amazon.com/quicksight/latest/user/heat-map.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapVisual](aws-properties-quicksight-analysis-heatmapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapVisual?: QuickSightAnalysisHeatMapVisual;
  /**
   * A tree map.
   *
   * For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapVisual](aws-properties-quicksight-analysis-treemapvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapVisual?: QuickSightAnalysisTreeMapVisual;
  /**
   * A combo chart.
   *
   * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartVisual](aws-properties-quicksight-analysis-combochartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComboChartVisual?: QuickSightAnalysisComboChartVisual;
  /**
   * A word cloud.
   *
   * For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [WordCloudVisual](aws-properties-quicksight-analysis-wordcloudvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WordCloudVisual?: QuickSightAnalysisWordCloudVisual;
  /**
   * An insight visual.
   *
   * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [InsightVisual](aws-properties-quicksight-analysis-insightvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightVisual?: QuickSightAnalysisInsightVisual;
  /**
   * A sankey diagram.
   *
   * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramVisual](aws-properties-quicksight-analysis-sankeydiagramvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SankeyDiagramVisual?: QuickSightAnalysisSankeyDiagramVisual;
  /**
   * A gauge chart.
   *
   * For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartVisual](aws-properties-quicksight-analysis-gaugechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GaugeChartVisual?: QuickSightAnalysisGaugeChartVisual;
  /**
   * A line chart.
   *
   * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [LineChartVisual](aws-properties-quicksight-analysis-linechartvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineChartVisual?: QuickSightAnalysisLineChartVisual;
  /**
   * An empty visual.
   *
   * _Required_: No
   *
   * _Type_: [EmptyVisual](aws-properties-quicksight-analysis-emptyvisual.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmptyVisual?: QuickSightAnalysisEmptyVisual;
}

/**
 * The value input pf the numeric range filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericrangefiltervalue.html}
 **/
export interface QuickSightAnalysisNumericRangeFilterValue {
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
 * The option that determines the decimal places configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalplacesconfiguration.html}
 **/
export interface QuickSightAnalysisDecimalPlacesConfiguration {
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
 * The options that determine the presentation of the arc of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartarcconditionalformatting.html}
 **/
export interface QuickSightAnalysisGaugeChartArcConditionalFormatting {
  /**
   * The conditional formatting of the arc foreground color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForegroundColor?: QuickSightAnalysisConditionalFormattingColor;
}

/**
 * The options for the legend setup of a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-legendoptions.html}
 **/
export interface QuickSightAnalysisLegendOptions {
  /**
   * The positions for the legend. Choose one of the following options:
   */
  Position?: Value<string>;
  /**
   * The custom title for the legend.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisLabelOptions;
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
 * The field wells of a `BarChartVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartfieldwells.html}
 **/
export interface QuickSightAnalysisBarChartFieldWells {
  /**
   * The aggregated field wells of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [BarChartAggregatedFieldWells](aws-properties-quicksight-analysis-barchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarChartAggregatedFieldWells?: QuickSightAnalysisBarChartAggregatedFieldWells;
}

/**
 * The style options of the box plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotstyleoptions.html}
 **/
export interface QuickSightAnalysisBoxPlotStyleOptions {
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
 * The field well configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisPieChartAggregatedFieldWells {
  /**
   * The category (group/color) field wells of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightAnalysisDimensionField>;
  /**
   * The value field wells of a pie chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
  /**
   * The small multiples field well of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The limit configuration of the visual display for an axis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-itemslimitconfiguration.html}
 **/
export interface QuickSightAnalysisItemsLimitConfiguration {
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
 * The reference that specifies where the axis label is applied to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axislabelreferenceoptions.html}
 **/
export interface QuickSightAnalysisAxisLabelReferenceOptions {
  /**
   * The column that the axis label is targeted to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The contribution analysis visual display for a line, pie, or bar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-contributionanalysisdefault.html}
 **/
export interface QuickSightAnalysisContributionAnalysisDefault {
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
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorDimensions: List<QuickSightAnalysisColumnIdentifier>;
}

/**
 * The default values of the `DecimalParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimaldefaultvalues.html}
 **/
export interface QuickSightAnalysisDecimalDefaultValues {
  /**
   * The dynamic value of the `DecimalDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-analysis-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
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
 * The computation union that is used in an insight visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-computation.html}
 **/
export interface QuickSightAnalysisComputation {
  /**
   * The period to `DataSetIdentifier` computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [PeriodToDateComputation](aws-properties-quicksight-analysis-periodtodatecomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodToDate?: QuickSightAnalysisPeriodToDateComputation;
  /**
   * The growth rate computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [GrowthRateComputation](aws-properties-quicksight-analysis-growthratecomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrowthRate?: QuickSightAnalysisGrowthRateComputation;
  /**
   * The top ranked and bottom ranked computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomRankedComputation](aws-properties-quicksight-analysis-topbottomrankedcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomRanked?: QuickSightAnalysisTopBottomRankedComputation;
  /**
   * The total aggregation computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TotalAggregationComputation](aws-properties-quicksight-analysis-totalaggregationcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalAggregation?: QuickSightAnalysisTotalAggregationComputation;
  /**
   * The forecast computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [ForecastComputation](aws-properties-quicksight-analysis-forecastcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Forecast?: QuickSightAnalysisForecastComputation;
  /**
   * The maximum and minimum computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [MaximumMinimumComputation](aws-properties-quicksight-analysis-maximumminimumcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumMinimum?: QuickSightAnalysisMaximumMinimumComputation;
  /**
   * The period over period computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [PeriodOverPeriodComputation](aws-properties-quicksight-analysis-periodoverperiodcomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PeriodOverPeriod?: QuickSightAnalysisPeriodOverPeriodComputation;
  /**
   * The metric comparison computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [MetricComparisonComputation](aws-properties-quicksight-analysis-metriccomparisoncomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricComparison?: QuickSightAnalysisMetricComparisonComputation;
  /**
   * The top movers and bottom movers computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [TopBottomMoversComputation](aws-properties-quicksight-analysis-topbottommoverscomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopBottomMovers?: QuickSightAnalysisTopBottomMoversComputation;
  /**
   * The unique values computation configuration.
   *
   * _Required_: No
   *
   * _Type_: [UniqueValuesComputation](aws-properties-quicksight-analysis-uniquevaluescomputation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UniqueValues?: QuickSightAnalysisUniqueValuesComputation;
}

/**
 * Configuration options for the canvas of a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutcanvassizeoptions.html}
 **/
export interface QuickSightAnalysisFreeFormLayoutCanvasSizeOptions {
  /**
   * The options that determine the sizing of the canvas used in a free-form layout.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutScreenCanvasSizeOptions](aws-properties-quicksight-analysis-freeformlayoutscreencanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScreenCanvasSizeOptions?: QuickSightAnalysisFreeFormLayoutScreenCanvasSizeOptions;
}

/**
 * The bound options (north, south, west, east) of the geospatial window options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialcoordinatebounds.html}
 **/
export interface QuickSightAnalysisGeospatialCoordinateBounds {
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
 * The field well configuration of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpifieldwells.html}
 **/
export interface QuickSightAnalysisKPIFieldWells {
  /**
   * The target value field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValues?: List<QuickSightAnalysisMeasureField>;
  /**
   * The trend group field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrendGroups?: List<QuickSightAnalysisDimensionField>;
  /**
   * The value field wells of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The operation that is defined by the custom action.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualcustomactionoperation.html}
 **/
export interface QuickSightAnalysisVisualCustomActionOperation {
  /**
   * The navigation operation that navigates between different sheets in the same analysis.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionNavigationOperation](aws-properties-quicksight-analysis-customactionnavigationoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NavigationOperation?: QuickSightAnalysisCustomActionNavigationOperation;
  /**
   * The set parameter operation that sets parameters in custom action.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionSetParametersOperation](aws-properties-quicksight-analysis-customactionsetparametersoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetParametersOperation?: QuickSightAnalysisCustomActionSetParametersOperation;
  /**
   * The filter operation that filters data included in a visual or in an entire sheet.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionFilterOperation](aws-properties-quicksight-analysis-customactionfilteroperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterOperation?: QuickSightAnalysisCustomActionFilterOperation;
  /**
   * The URL operation that opens a link to another webpage.
   *
   * _Required_: No
   *
   * _Type_: [CustomActionURLOperation](aws-properties-quicksight-analysis-customactionurloperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URLOperation?: QuickSightAnalysisCustomActionURLOperation;
}

/**
 * The option that determines the hierarchy of the fields that are built within a visual's field wells. These fields can't be duplicated to other visuals.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-explicithierarchy.html}
 **/
export interface QuickSightAnalysisExplicitHierarchy {
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
   * _Type_: List of [DrillDownFilter](aws-properties-quicksight-analysis-drilldownfilter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrillDownFilters?: List<QuickSightAnalysisDrillDownFilter>;
  /**
   * The list of columns that define the explicit hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightAnalysisColumnIdentifier>;
}

/**
 * The source controls that are used in a `CascadingControlConfiguration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-cascadingcontrolsource.html}
 **/
export interface QuickSightAnalysisCascadingControlSource {
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
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnToMatch?: QuickSightAnalysisColumnIdentifier;
}

/**
 * The field wells of a tree map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapfieldwells.html}
 **/
export interface QuickSightAnalysisTreeMapFieldWells {
  /**
   * The aggregated field wells of a tree map.
   *
   * _Required_: No
   *
   * _Type_: [TreeMapAggregatedFieldWells](aws-properties-quicksight-analysis-treemapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapAggregatedFieldWells?: QuickSightAnalysisTreeMapAggregatedFieldWells;
}

/**
 * The cluster marker that is a part of the cluster marker configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-clustermarker.html}
 **/
export interface QuickSightAnalysisClusterMarker {
  /**
   * The simple cluster marker of the cluster marker.
   *
   * _Required_: No
   *
   * _Type_: [SimpleClusterMarker](aws-properties-quicksight-analysis-simpleclustermarker.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SimpleClusterMarker?: QuickSightAnalysisSimpleClusterMarker;
}

/**
 * The dimension type field with categorical type columns..
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoricaldimensionfield.html}
 **/
export interface QuickSightAnalysisCategoricalDimensionField {
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
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-analysis-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisStringFormatConfiguration;
  /**
   * The column that is used in the `CategoricalDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The percent range in the visible range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-percentvisiblerange.html}
 **/
export interface QuickSightAnalysisPercentVisibleRange {
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
 * An empty visual.
 *
 * Empty visuals are used in layouts but have not been configured to show any data. A new visual created in the Amazon QuickSight console is considered an `EmptyVisual` until a visual type is selected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-emptyvisual.html}
 **/
export interface QuickSightAnalysisEmptyVisual {
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
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
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
 * The sort configuration of a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudsortconfiguration.html}
 **/
export interface QuickSightAnalysisWordCloudSortConfiguration {
  /**
   * The limit on the number of groups that are displayed in a word cloud.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The sort configuration of group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * The color map that determines the color options for a particular element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathcolor.html}
 **/
export interface QuickSightAnalysisDataPathColor {
  /**
   * The element that the color needs to be applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [DataPathValue](aws-properties-quicksight-analysis-datapathvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Element: QuickSightAnalysisDataPathValue;
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
 * The options that determine how a date axis is displayed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dateaxisoptions.html}
 **/
export interface QuickSightAnalysisDateAxisOptions {
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
 * The configuration of a page break after a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionafterpagebreak.html}
 **/
export interface QuickSightAnalysisSectionAfterPageBreak {
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
 * The configuration of the `Select all` options in a list control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-listcontrolselectalloptions.html}
 **/
export interface QuickSightAnalysisListControlSelectAllOptions {
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
 * A parameter declaration for the `Integer` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integerparameterdeclaration.html}
 **/
export interface QuickSightAnalysisIntegerParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-analysis-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightAnalysisMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [IntegerDefaultValues](aws-properties-quicksight-analysis-integerdefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightAnalysisIntegerDefaultValues;
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
   * _Type_: [IntegerValueWhenUnsetConfiguration](aws-properties-quicksight-analysis-integervaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightAnalysisIntegerValueWhenUnsetConfiguration;
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
 * The formatting configuration for all types of field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-formatconfiguration.html}
 **/
export interface QuickSightAnalysisFormatConfiguration {
  /**
   * Formatting configuration for number fields.
   *
   * _Required_: No
   *
   * _Type_: [NumberFormatConfiguration](aws-properties-quicksight-analysis-numberformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberFormatConfiguration?: QuickSightAnalysisNumberFormatConfiguration;
  /**
   * Formatting configuration for `DateTime` fields.
   *
   * _Required_: No
   *
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-analysis-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimeFormatConfiguration?: QuickSightAnalysisDateTimeFormatConfiguration;
  /**
   * Formatting configuration for string fields.
   *
   * _Required_: No
   *
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-analysis-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringFormatConfiguration?: QuickSightAnalysisStringFormatConfiguration;
}

/**
 * The options that determine the presentation of the progress bar of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-progressbaroptions.html}
 **/
export interface QuickSightAnalysisProgressBarOptions {
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
 * The range setup of a numeric axis display range.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdisplayrange.html}
 **/
export interface QuickSightAnalysisAxisDisplayRange {
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
   * _Type_: [AxisDisplayMinMaxRange](aws-properties-quicksight-analysis-axisdisplayminmaxrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinMax?: QuickSightAnalysisAxisDisplayMinMaxRange;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-relativedatetimecontroldisplayoptions.html}
 **/
export interface QuickSightAnalysisRelativeDateTimeControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightAnalysisLabelOptions;
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
 * The scope configuration for a `FilterGroup`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterscopeconfiguration.html}
 **/
export interface QuickSightAnalysisFilterScopeConfiguration {
  /**
   * The configuration for applying a filter to specific sheets.
   *
   * _Required_: No
   *
   * _Type_: [SelectedSheetsFilterScopeConfiguration](aws-properties-quicksight-analysis-selectedsheetsfilterscopeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedSheets?: QuickSightAnalysisSelectedSheetsFilterScopeConfiguration;
}

/**
 * A decimal parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalparameter.html}
 **/
export interface QuickSightAnalysisDecimalParameter {
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
 * The maximum label of a data path label.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-maximumlabeltype.html}
 **/
export interface QuickSightAnalysisMaximumLabelType {
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
 * The field wells of a `GeospatialMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapfieldwells.html}
 **/
export interface QuickSightAnalysisGeospatialMapFieldWells {
  /**
   * The aggregated field well for a geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapAggregatedFieldWells](aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeospatialMapAggregatedFieldWells?: QuickSightAnalysisGeospatialMapAggregatedFieldWells;
}

/**
 * The options that determine the currency display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-currencydisplayformatconfiguration.html}
 **/
export interface QuickSightAnalysisCurrencyDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-analysis-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightAnalysisNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-analysis-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightAnalysisDecimalPlacesConfiguration;
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
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-analysis-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
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
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-analysis-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightAnalysisNumericSeparatorConfiguration;
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
 * The sort configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartsortconfiguration.html}
 **/
export interface QuickSightAnalysisFunnelChartSortConfiguration {
  /**
   * The limit on the number of categories displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * The shape conditional formatting of a filled map visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-shapeconditionalformat.html}
 **/
export interface QuickSightAnalysisShapeConditionalFormat {
  /**
   * The conditional formatting for the shape background color of a filled map visual.
   *
   * _Required_: Yes
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor: QuickSightAnalysisConditionalFormattingColor;
}

/**
 * The cell conditional formatting option for a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablecellconditionalformatting.html}
 **/
export interface QuickSightAnalysisTableCellConditionalFormatting {
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
   * _Type_: [TextConditionalFormat](aws-properties-quicksight-analysis-textconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextFormat?: QuickSightAnalysisTextConditionalFormat;
}

/**
 * A `TopBottomFilter` filters values that are at the top or the bottom.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-topbottomfilter.html}
 **/
export interface QuickSightAnalysisTopBottomFilter {
  /**
   * The aggregation and sort configuration of the top bottom filter.
   *
   * _Required_: Yes
   *
   * _Type_: List of [AggregationSortConfiguration](aws-properties-quicksight-analysis-aggregationsortconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationSortConfigurations: List<QuickSightAnalysisAggregationSortConfiguration>;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The data path options for the pivot table field options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottabledatapathoption.html}
 **/
export interface QuickSightAnalysisPivotTableDataPathOption {
  /**
   * The list of data path values for the data path options.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataPathValue](aws-properties-quicksight-analysis-datapathvalue.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathList: List<QuickSightAnalysisDataPathValue>;
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
 * The filter that is applied to the options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheetvisualscopingconfiguration.html}
 **/
export interface QuickSightAnalysisSheetVisualScopingConfiguration {
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
 * The filter operation that filters data included in a visual or in an entire sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionfilteroperation.html}
 **/
export interface QuickSightAnalysisCustomActionFilterOperation {
  /**
   * The configuration that chooses the fields to be filtered.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterOperationSelectedFieldsConfiguration](aws-properties-quicksight-analysis-filteroperationselectedfieldsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldsConfiguration: QuickSightAnalysisFilterOperationSelectedFieldsConfiguration;
  /**
   * The configuration that chooses the target visuals to be filtered.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterOperationTargetVisualsConfiguration](aws-properties-quicksight-analysis-filteroperationtargetvisualsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetVisualsConfiguration: QuickSightAnalysisFilterOperationTargetVisualsConfiguration;
}

/**
 * An element within a grid layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gridlayoutelement.html}
 **/
export interface QuickSightAnalysisGridLayoutElement {
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
 * Determines the gradient stop configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gradientstop.html}
 **/
export interface QuickSightAnalysisGradientStop {
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
 * The dynamic configuration of the reference line data configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinedynamicdataconfiguration.html}
 **/
export interface QuickSightAnalysisReferenceLineDynamicDataConfiguration {
  /**
   * The column that the dynamic data targets.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
  /**
   * The aggregation function that is used in the dynamic data.
   *
   * _Required_: Yes
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureAggregationFunction: QuickSightAnalysisAggregationFunction;
  /**
   * The calculation that is used in the dynamic data.
   *
   * _Required_: Yes
   *
   * _Type_: [NumericalAggregationFunction](aws-properties-quicksight-analysis-numericalaggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Calculation: QuickSightAnalysisNumericalAggregationFunction;
}

/**
 * The selected field options for the pivot table field options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldoption.html}
 **/
export interface QuickSightAnalysisPivotTableFieldOption {
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
 * Configures the display properties of the given text.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fontconfiguration.html}
 **/
export interface QuickSightAnalysisFontConfiguration {
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
   * _Type_: [FontSize](aws-properties-quicksight-analysis-fontsize.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontSize?: QuickSightAnalysisFontSize;
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
   * _Type_: [FontWeight](aws-properties-quicksight-analysis-fontweight.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontWeight?: QuickSightAnalysisFontWeight;
}

/**
 * The sort configuration of a tree map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-treemapsortconfiguration.html}
 **/
export interface QuickSightAnalysisTreeMapSortConfiguration {
  /**
   * The sort configuration of group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of groups that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreeMapGroupItemsLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}

/**
 * The conditional formatting of a table row.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablerowconditionalformatting.html}
 **/
export interface QuickSightAnalysisTableRowConditionalFormatting {
  /**
   * The conditional formatting color (solid, gradient) of the text for a table row.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  /**
   * The conditional formatting color (solid, gradient) of the background for a table row.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: QuickSightAnalysisConditionalFormattingColor;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-listcontroldisplayoptions.html}
 **/
export interface QuickSightAnalysisListControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightAnalysisLabelOptions;
  /**
   * The configuration of the search options in a list control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSearchOptions](aws-properties-quicksight-analysis-listcontrolsearchoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SearchOptions?: QuickSightAnalysisListControlSearchOptions;
  /**
   * The configuration of the `Select all` options in a list control.
   *
   * _Required_: No
   *
   * _Type_: [ListControlSelectAllOptions](aws-properties-quicksight-analysis-listcontrolselectalloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectAllOptions?: QuickSightAnalysisListControlSelectAllOptions;
}

/**
 * An insight visual.
 *
 * For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-insightvisual.html}
 **/
export interface QuickSightAnalysisInsightVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
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
   * _Type_: [InsightConfiguration](aws-properties-quicksight-analysis-insightconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightConfiguration?: QuickSightAnalysisInsightConfiguration;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}

/**
 * The option that determines the text display weight, or boldness.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fontweight.html}
 **/
export interface QuickSightAnalysisFontWeight {
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
 * The tick label options of an axis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisticklabeloptions.html}
 **/
export interface QuickSightAnalysisAxisTickLabelOptions {
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
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelOptions?: QuickSightAnalysisLabelOptions;
}

/**
 * Custom icon options for an icon set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattingcustomiconoptions.html}
 **/
export interface QuickSightAnalysisConditionalFormattingCustomIconOptions {
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
 * The configuration of a `BarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartconfiguration.html}
 **/
export interface QuickSightAnalysisBarChartConfiguration {
  /**
   * The sort configuration of a `BarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [BarChartSortConfiguration](aws-properties-quicksight-analysis-barchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisBarChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-analysis-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightAnalysisReferenceLine>;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a color that is used in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-analysis-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightAnalysisSmallMultiplesOptions;
  /**
   * The orientation of the bars in a bar chart visual. There are two valid values in this structure:
   */
  Orientation?: Value<string>;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
  /**
   * The label options (label text, label visibility and sort icon visibility) for a bar chart value.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
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
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The contribution analysis (anomaly configuration) setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-analysis-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightAnalysisContributionAnalysisDefault>;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BarChartFieldWells](aws-properties-quicksight-analysis-barchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisBarChartFieldWells;
  /**
   * The label display options (grid line, range, scale, axis step) for a bar chart value.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueAxis?: QuickSightAnalysisAxisDisplayOptions;
}

/**
 * The field options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldoptions.html}
 **/
export interface QuickSightAnalysisTableFieldOptions {
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
   * _Type_: List of [TableFieldOption](aws-properties-quicksight-analysis-tablefieldoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedFieldOptions?: List<QuickSightAnalysisTableFieldOption>;
}

/**
 * The configuration for a custom label on a `ReferenceLine`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinecustomlabelconfiguration.html}
 **/
export interface QuickSightAnalysisReferenceLineCustomLabelConfiguration {
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
 * The conditional formatting for the primary value of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartprimaryvalueconditionalformatting.html}
 **/
export interface QuickSightAnalysisGaugeChartPrimaryValueConditionalFormatting {
  /**
   * The conditional formatting of the primary value text color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextColor?: QuickSightAnalysisConditionalFormattingColor;
  /**
   * The conditional formatting of the primary value icon.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingIcon](aws-properties-quicksight-analysis-conditionalformattingicon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icon?: QuickSightAnalysisConditionalFormattingIcon;
}

/**
 * The source template of an analysis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysissourcetemplate.html}
 **/
export interface QuickSightAnalysisAnalysisSourceTemplate {
  /**
   * The dataset references of the source template of an analysis.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataSetReference](aws-properties-quicksight-analysis-datasetreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetReferences: List<QuickSightAnalysisDataSetReference>;
  /**
   * The Amazon Resource Name (ARN) of the source template of an analysis.
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
 * The data options for an axis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisdataoptions.html}
 **/
export interface QuickSightAnalysisAxisDataOptions {
  /**
   * The options for an axis with a date field.
   *
   * _Required_: No
   *
   * _Type_: [DateAxisOptions](aws-properties-quicksight-analysis-dateaxisoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateAxisOptions?: QuickSightAnalysisDateAxisOptions;
  /**
   * The options for an axis with a numeric field.
   *
   * _Required_: No
   *
   * _Type_: [NumericAxisOptions](aws-properties-quicksight-analysis-numericaxisoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericAxisOptions?: QuickSightAnalysisNumericAxisOptions;
}

/**
 * The configuration of a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisFreeFormLayoutConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutCanvasSizeOptions](aws-properties-quicksight-analysis-freeformlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions?: QuickSightAnalysisFreeFormLayoutCanvasSizeOptions;
  /**
   * The elements that are included in a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FreeFormLayoutElement](aws-properties-quicksight-analysis-freeformlayoutelement.md)
   *
   * _Maximum_: `430`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elements: List<QuickSightAnalysisFreeFormLayoutElement>;
}

/**
 * The configuration for a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionbasedlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisSectionBasedLayoutConfiguration {
  /**
   * The options for the canvas of a section-based layout.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionBasedLayoutCanvasSizeOptions](aws-properties-quicksight-analysis-sectionbasedlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightAnalysisSectionBasedLayoutCanvasSizeOptions;
  /**
   * A list of footer section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-analysis-headerfootersectionconfiguration.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FooterSections: List<QuickSightAnalysisHeaderFooterSectionConfiguration>;
  /**
   * A list of body section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [BodySectionConfiguration](aws-properties-quicksight-analysis-bodysectionconfiguration.md)
   *
   * _Maximum_: `28`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodySections: List<QuickSightAnalysisBodySectionConfiguration>;
  /**
   * A list of header section configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-analysis-headerfootersectionconfiguration.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderSections: List<QuickSightAnalysisHeaderFooterSectionConfiguration>;
}

/**
 * A table visual.
 *
 * For more information, see [Using tables as visuals](https://docs.aws.amazon.com/quicksight/latest/user/tabular.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablevisual.html}
 **/
export interface QuickSightAnalysisTableVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  /**
   * The conditional formatting for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: [TableConditionalFormatting](aws-properties-quicksight-analysis-tableconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightAnalysisTableConditionalFormatting;
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
   * _Type_: [TableConfiguration](aws-properties-quicksight-analysis-tableconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisTableConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}

/**
 * The field wells of a radar chart visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartfieldwells.html}
 **/
export interface QuickSightAnalysisRadarChartFieldWells {
  /**
   * The aggregated field wells of a radar chart visual.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartAggregatedFieldWells](aws-properties-quicksight-analysis-radarchartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RadarChartAggregatedFieldWells?: QuickSightAnalysisRadarChartAggregatedFieldWells;
}

/**
 * The data path that needs to be sorted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathvalue.html}
 **/
export interface QuickSightAnalysisDataPathValue {
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
 * The window options of the geospatial map visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialwindowoptions.html}
 **/
export interface QuickSightAnalysisGeospatialWindowOptions {
  /**
   * The bounds options (north, south, west, east) of the geospatial window options.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialCoordinateBounds](aws-properties-quicksight-analysis-geospatialcoordinatebounds.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bounds?: QuickSightAnalysisGeospatialCoordinateBounds;
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
 * Determines the border options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-globaltableborderoptions.html}
 **/
export interface QuickSightAnalysisGlobalTableBorderOptions {
  /**
   * Determines the options for uniform border.
   *
   * _Required_: No
   *
   * _Type_: [TableBorderOptions](aws-properties-quicksight-analysis-tableborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UniformBorder?: QuickSightAnalysisTableBorderOptions;
  /**
   * Determines the options for side specific border.
   *
   * _Required_: No
   *
   * _Type_: [TableSideBorderOptions](aws-properties-quicksight-analysis-tablesideborderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SideSpecificBorder?: QuickSightAnalysisTableSideBorderOptions;
}

/**
 * A box plot.
 *
 * For more information, see [Using box plots](https://docs.aws.amazon.com/quicksight/latest/user/box-plots.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotvisual.html}
 **/
export interface QuickSightAnalysisBoxPlotVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [BoxPlotChartConfiguration](aws-properties-quicksight-analysis-boxplotchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisBoxPlotChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * Determines the gradient color settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gradientcolor.html}
 **/
export interface QuickSightAnalysisGradientColor {
  /**
   * The list of gradient color stops.
   *
   * _Required_: No
   *
   * _Type_: List of [GradientStop](aws-properties-quicksight-analysis-gradientstop.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stops?: List<QuickSightAnalysisGradientStop>;
}

/**
 * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterslidercontrol.html}
 **/
export interface QuickSightAnalysisParameterSliderControl {
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
   * _Type_: [SliderControlDisplayOptions](aws-properties-quicksight-analysis-slidercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisSliderControlDisplayOptions;
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
 * The map style options of the geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapstyleoptions.html}
 **/
export interface QuickSightAnalysisGeospatialMapStyleOptions {
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
 * The sort configuration of a `ComboChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartsortconfiguration.html}
 **/
export interface QuickSightAnalysisComboChartSortConfiguration {
  /**
   * The sort configuration of the color field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The item limit configuration of the color field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The item limit configuration for the category field well of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The sort configuration of the category field well in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * The options that determine the bin width of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-binwidthoptions.html}
 **/
export interface QuickSightAnalysisBinWidthOptions {
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
 * The sort by field for the field sort options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablesortby.html}
 **/
export interface QuickSightAnalysisPivotTableSortBy {
  /**
   * The field sort (field id, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [FieldSort](aws-properties-quicksight-analysis-fieldsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: QuickSightAnalysisFieldSort;
  /**
   * The data path sort (data path value, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [DataPathSort](aws-properties-quicksight-analysis-datapathsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPath?: QuickSightAnalysisDataPathSort;
  /**
   * The column sort (field id, direction) for the pivot table sort by options.
   *
   * _Required_: No
   *
   * _Type_: [ColumnSort](aws-properties-quicksight-analysis-columnsort.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column?: QuickSightAnalysisColumnSort;
}

/**
 * The aggregated field well configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisRadarChartAggregatedFieldWells {
  /**
   * The aggregated field well categories of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightAnalysisDimensionField>;
  /**
   * The color that are assigned to the aggregated field wells of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color?: List<QuickSightAnalysisDimensionField>;
  /**
   * The values that are assigned to the aggregated field wells of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The maximum and minimum computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-maximumminimumcomputation.html}
 **/
export interface QuickSightAnalysisMaximumMinimumComputation {
  /**
   * The type of computation. Choose one of the following options:
   */
  Type: Value<string>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightAnalysisMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightAnalysisDimensionField;
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
 * A `CategoryFilter` filters text values.
 *
 * For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoryfilter.html}
 **/
export interface QuickSightAnalysisCategoryFilter {
  /**
   * The configuration for a `CategoryFilter`.
   *
   * _Required_: Yes
   *
   * _Type_: [CategoryFilterConfiguration](aws-properties-quicksight-analysis-categoryfilterconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: QuickSightAnalysisCategoryFilterConfiguration;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * A _sheet_, which is an object that contains a set of visuals that are viewed together on one page in Amazon QuickSight. Every analysis and dashboard contains at least one sheet. Each sheet contains at least one visualization widget, for example a chart, pivot table, or narrative insight. Sheets can be associated with other components, such as controls, filters, and so on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sheet.html}
 **/
export interface QuickSightAnalysisSheet {
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
 * A combo chart.
 *
 * The `ComboChartVisual` includes stacked bar combo charts and clustered bar combo charts
 *
 * For more information, see [Using combo charts](https://docs.aws.amazon.com/quicksight/latest/user/combo-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartvisual.html}
 **/
export interface QuickSightAnalysisComboChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [ComboChartConfiguration](aws-properties-quicksight-analysis-combochartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisComboChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The URL configuration for a table field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldurlconfiguration.html}
 **/
export interface QuickSightAnalysisTableFieldURLConfiguration {
  /**
   * The link configuration of a table field URL.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldLinkConfiguration](aws-properties-quicksight-analysis-tablefieldlinkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinkConfiguration?: QuickSightAnalysisTableFieldLinkConfiguration;
  /**
   * The image configuration of a table field URL.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldImageConfiguration](aws-properties-quicksight-analysis-tablefieldimageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageConfiguration?: QuickSightAnalysisTableFieldImageConfiguration;
}

/**
 * A key performance indicator (KPI).
 *
 * For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpivisual.html}
 **/
export interface QuickSightAnalysisKPIVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
  /**
   * The conditional formatting of a KPI visual.
   *
   * _Required_: No
   *
   * _Type_: [KPIConditionalFormatting](aws-properties-quicksight-analysis-kpiconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormatting?: QuickSightAnalysisKPIConditionalFormatting;
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
   * _Type_: [KPIConfiguration](aws-properties-quicksight-analysis-kpiconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisKPIConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The aggregated field well for a box plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisBoxPlotAggregatedFieldWells {
  /**
   * The group by field well of a box plot chart. Values are grouped based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightAnalysisDimensionField>;
  /**
   * The value field well of a box plot chart. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The configuration of a header or footer section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-headerfootersectionconfiguration.html}
 **/
export interface QuickSightAnalysisHeaderFooterSectionConfiguration {
  /**
   * The layout configuration of the header or footer section.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionLayoutConfiguration](aws-properties-quicksight-analysis-sectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layout: QuickSightAnalysisSectionLayoutConfiguration;
  /**
   * The style options of a header or footer section.
   *
   * _Required_: No
   *
   * _Type_: [SectionStyle](aws-properties-quicksight-analysis-sectionstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style?: QuickSightAnalysisSectionStyle;
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
 * Formatting configuration for gradient color.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-conditionalformattinggradientcolor.html}
 **/
export interface QuickSightAnalysisConditionalFormattingGradientColor {
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
   * _Type_: [GradientColor](aws-properties-quicksight-analysis-gradientcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Color: QuickSightAnalysisGradientColor;
}

/**
 * An element within a free-form layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutelement.html}
 **/
export interface QuickSightAnalysisFreeFormLayoutElement {
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
   * _Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-analysis-freeformlayoutelementborderstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BorderStyle?: QuickSightAnalysisFreeFormLayoutElementBorderStyle;
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
   * _Type_: List of [SheetElementRenderingRule](aws-properties-quicksight-analysis-sheetelementrenderingrule.md)
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RenderingRules?: List<QuickSightAnalysisSheetElementRenderingRule>;
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
   * _Type_: [LoadingAnimation](aws-properties-quicksight-analysis-loadinganimation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadingAnimation?: QuickSightAnalysisLoadingAnimation;
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
   * _Type_: [FreeFormLayoutElementBackgroundStyle](aws-properties-quicksight-analysis-freeformlayoutelementbackgroundstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundStyle?: QuickSightAnalysisFreeFormLayoutElementBackgroundStyle;
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
   * _Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-analysis-freeformlayoutelementborderstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedBorderStyle?: QuickSightAnalysisFreeFormLayoutElementBorderStyle;
}

/**
 * A list of custom filter values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customfilterlistconfiguration.html}
 **/
export interface QuickSightAnalysisCustomFilterListConfiguration {
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
 * The measure type field with categorical type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoricalmeasurefield.html}
 **/
export interface QuickSightAnalysisCategoricalMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [String](aws-properties-quicksight-analysis-aggregationfunction.md)
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
   * _Type_: [StringFormatConfiguration](aws-properties-quicksight-analysis-stringformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisStringFormatConfiguration;
  /**
   * The column that is used in the `CategoricalMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The field well configuration of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisHistogramAggregatedFieldWells {
  /**
   * The value field wells of a histogram. Values are aggregated by `COUNT` or `DISTINCT_COUNT`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The conditional formatting for the progress bar of a KPI visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-kpiprogressbarconditionalformatting.html}
 **/
export interface QuickSightAnalysisKPIProgressBarConditionalFormatting {
  /**
   * The conditional formatting of the progress bar's foreground color.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalFormattingColor](aws-properties-quicksight-analysis-conditionalformattingcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForegroundColor?: QuickSightAnalysisConditionalFormattingColor;
}

/**
 * A data set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datasetidentifierdeclaration.html}
 **/
export interface QuickSightAnalysisDataSetIdentifierDeclaration {
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
 * The aggregated field well of the filled map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisFilledMapAggregatedFieldWells {
  /**
   * The aggregated color field well of a filled map. Values are aggregated based on location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
  /**
   * The aggregated location field well of the filled map. Values are grouped by location fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Geospatial?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The options for a table field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldoption.html}
 **/
export interface QuickSightAnalysisTableFieldOption {
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
   * _Type_: [TableFieldURLConfiguration](aws-properties-quicksight-analysis-tablefieldurlconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URLStyling?: QuickSightAnalysisTableFieldURLConfiguration;
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
 * The set parameter operation that sets parameters in custom action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customactionsetparametersoperation.html}
 **/
export interface QuickSightAnalysisCustomActionSetParametersOperation {
  /**
   * The parameter that determines the value configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of [SetParameterValueConfiguration](aws-properties-quicksight-analysis-setparametervalueconfiguration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValueConfigurations: List<QuickSightAnalysisSetParameterValueConfiguration>;
}

/**
 * The configuration for applying a filter to specific sheets or visuals. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-selectedsheetsfilterscopeconfiguration.html}
 **/
export interface QuickSightAnalysisSelectedSheetsFilterScopeConfiguration {
  /**
   * The sheet ID and visual IDs of the sheet and visuals that the filter is applied to.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetVisualScopingConfiguration](aws-properties-quicksight-analysis-sheetvisualscopingconfiguration.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetVisualScopingConfigurations?: List<QuickSightAnalysisSheetVisualScopingConfiguration>;
}

/**
 * The options that determine the number display format configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numberdisplayformatconfiguration.html}
 **/
export interface QuickSightAnalysisNumberDisplayFormatConfiguration {
  /**
   * The options that determine the negative value configuration.
   *
   * _Required_: No
   *
   * _Type_: [NegativeValueConfiguration](aws-properties-quicksight-analysis-negativevalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NegativeValueConfiguration?: QuickSightAnalysisNegativeValueConfiguration;
  /**
   * The option that determines the decimal places configuration.
   *
   * _Required_: No
   *
   * _Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-analysis-decimalplacesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecimalPlacesConfiguration?: QuickSightAnalysisDecimalPlacesConfiguration;
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
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-analysis-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
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
   * _Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-analysis-numericseparatorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeparatorConfiguration?: QuickSightAnalysisNumericSeparatorConfiguration;
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
 * The configuration options that determine how missing data is treated during the rendering of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-missingdataconfiguration.html}
 **/
export interface QuickSightAnalysisMissingDataConfiguration {
  /**
   * The treatment option that determines how missing data should be rendered. Choose from the following options:
   */
  TreatmentOption?: Value<string>;
}

/**
 * Conditional formatting options of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartconditionalformattingoption.html}
 **/
export interface QuickSightAnalysisGaugeChartConditionalFormattingOption {
  /**
   * The options that determine the presentation of the arc of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartArcConditionalFormatting](aws-properties-quicksight-analysis-gaugechartarcconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arc?: QuickSightAnalysisGaugeChartArcConditionalFormatting;
  /**
   * The conditional formatting for the primary value of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [GaugeChartPrimaryValueConditionalFormatting](aws-properties-quicksight-analysis-gaugechartprimaryvalueconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValue?: QuickSightAnalysisGaugeChartPrimaryValueConditionalFormatting;
}

/**
 * The customized parameter values.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customparametervalues.html}
 **/
export interface QuickSightAnalysisCustomParameterValues {
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
 * The tooltip item for the fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldtooltipitem.html}
 **/
export interface QuickSightAnalysisFieldTooltipItem {
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
 * The options for the canvas of a section-based layout.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionbasedlayoutcanvassizeoptions.html}
 **/
export interface QuickSightAnalysisSectionBasedLayoutCanvasSizeOptions {
  /**
   * The options for a paper canvas of a section-based layout.
   *
   * _Required_: No
   *
   * _Type_: [SectionBasedLayoutPaperCanvasSizeOptions](aws-properties-quicksight-analysis-sectionbasedlayoutpapercanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaperCanvasSizeOptions?: QuickSightAnalysisSectionBasedLayoutPaperCanvasSizeOptions;
}

/**
 * The configuration that defines the default value of a `DateTime` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimevaluewhenunsetconfiguration.html}
 **/
export interface QuickSightAnalysisDateTimeValueWhenUnsetConfiguration {
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
 * Provides the forecast to meet the target for a particular date range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-whatifrangescenario.html}
 **/
export interface QuickSightAnalysisWhatIfRangeScenario {
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
 * The image configuration of a table field URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldimageconfiguration.html}
 **/
export interface QuickSightAnalysisTableFieldImageConfiguration {
  /**
   * The sizing options for the table image configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableCellImageSizingConfiguration](aws-properties-quicksight-analysis-tablecellimagesizingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizingOptions?: QuickSightAnalysisTableCellImageSizingConfiguration;
}

/**
 * The arc configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcconfiguration.html}
 **/
export interface QuickSightAnalysisArcConfiguration {
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
 * The field well configuration of a pie chart.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartfieldwells.html}
 **/
export interface QuickSightAnalysisPieChartFieldWells {
  /**
   * The field well configuration of a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [PieChartAggregatedFieldWells](aws-properties-quicksight-analysis-piechartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PieChartAggregatedFieldWells?: QuickSightAnalysisPieChartAggregatedFieldWells;
}

/**
 * The exclude period of `TimeRangeFilter` or `RelativeDatesFilter`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-excludeperiodconfiguration.html}
 **/
export interface QuickSightAnalysisExcludePeriodConfiguration {
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
 * The series settings of a radar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartseriessettings.html}
 **/
export interface QuickSightAnalysisRadarChartSeriesSettings {
  /**
   * The area style settings of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartAreaStyleSettings](aws-properties-quicksight-analysis-radarchartareastylesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AreaStyleSettings?: QuickSightAnalysisRadarChartAreaStyleSettings;
}

/**
 * The value of a time range filter.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-timerangefiltervalue.html}
 **/
export interface QuickSightAnalysisTimeRangeFilterValue {
  /**
   * The rolling date input value.
   *
   * _Required_: No
   *
   * _Type_: [RollingDateConfiguration](aws-properties-quicksight-analysis-rollingdateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RollingDate?: QuickSightAnalysisRollingDateConfiguration;
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
 * A control to display a text box that is used to enter multiple entries.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parametertextareacontrol.html}
 **/
export interface QuickSightAnalysisParameterTextAreaControl {
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
   * _Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-analysis-textareacontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisTextAreaControlDisplayOptions;
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
 * The configuration of the same-sheet target visuals that you want to be filtered.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-samesheettargetvisualconfiguration.html}
 **/
export interface QuickSightAnalysisSameSheetTargetVisualConfiguration {
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
 * The options that determine the presentation of histogram bins.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogrambinoptions.html}
 **/
export interface QuickSightAnalysisHistogramBinOptions {
  /**
   * The options that determine the bin width of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [BinWidthOptions](aws-properties-quicksight-analysis-binwidthoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinWidth?: QuickSightAnalysisBinWidthOptions;
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
   * _Type_: [BinCountOptions](aws-properties-quicksight-analysis-bincountoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinCount?: QuickSightAnalysisBinCountOptions;
}

/**
 * The field well configuration of a scatter plot.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotfieldwells.html}
 **/
export interface QuickSightAnalysisScatterPlotFieldWells {
  /**
   * The unaggregated field wells of a scatter plot. Scatter plots without a category field well have unaggregated field wells. The x and y-axes of these scatter plots are unaggregated.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotUnaggregatedFieldWells](aws-properties-quicksight-analysis-scatterplotunaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotUnaggregatedFieldWells?: QuickSightAnalysisScatterPlotUnaggregatedFieldWells;
  /**
   * The aggregated field wells of a scatter plot. Scatter plots that have a field in the category (group/color) field will have aggregated field wells. The x and y-axes of these scatter plots are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotCategoricallyAggregatedFieldWells](aws-properties-quicksight-analysis-scatterplotcategoricallyaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScatterPlotCategoricallyAggregatedFieldWells?: QuickSightAnalysisScatterPlotCategoricallyAggregatedFieldWells;
}

/**
 * sort-configuration-description
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartsortconfiguration.html}
 **/
export interface QuickSightAnalysisBarChartSortConfiguration {
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The sort configuration of color fields in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of values displayed in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The limit on the number of categories displayed in a bar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The sort configuration of category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}

/**
 * The total options for a table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-totaloptions.html}
 **/
export interface QuickSightAnalysisTotalOptions {
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightAnalysisTableCellStyle;
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
 * A geospatial map or a points on map visual.
 *
 * For more information, see [Creating point maps](https://docs.aws.amazon.com/quicksight/latest/user/point-maps.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapvisual.html}
 **/
export interface QuickSightAnalysisGeospatialMapVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [GeospatialMapConfiguration](aws-properties-quicksight-analysis-geospatialmapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisGeospatialMapConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The scope of the cell for conditional formatting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconditionalformattingscope.html}
 **/
export interface QuickSightAnalysisPivotTableConditionalFormattingScope {
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
 * The aggregated field wells of a word cloud.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisWordCloudAggregatedFieldWells {
  /**
   * The group by field well of a word cloud. Values are grouped by group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightAnalysisDimensionField>;
  /**
   * The size field well of a word cloud. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The comparison display configuration of a KPI or gauge chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-comparisonconfiguration.html}
 **/
export interface QuickSightAnalysisComparisonConfiguration {
  /**
   * The method of the comparison. Choose from the following options:
   */
  ComparisonMethod?: Value<string>;
  /**
   * The format of the comparison.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonFormatConfiguration](aws-properties-quicksight-analysis-comparisonformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonFormat?: QuickSightAnalysisComparisonFormatConfiguration;
}

/**
 * The field well configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramfieldwells.html}
 **/
export interface QuickSightAnalysisSankeyDiagramFieldWells {
  /**
   * The field well configuration of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: [SankeyDiagramAggregatedFieldWells](aws-properties-quicksight-analysis-sankeydiagramaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SankeyDiagramAggregatedFieldWells?: QuickSightAnalysisSankeyDiagramAggregatedFieldWells;
}

/**
 * The options that determine the default settings of a free-form layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultfreeformlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisDefaultFreeFormLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a free-form layout.
   *
   * _Required_: Yes
   *
   * _Type_: [FreeFormLayoutCanvasSizeOptions](aws-properties-quicksight-analysis-freeformlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightAnalysisFreeFormLayoutCanvasSizeOptions;
}

/**
 * The inline visualization of a specific type to display within a chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableinlinevisualization.html}
 **/
export interface QuickSightAnalysisTableInlineVisualization {
  /**
   * The configuration of the inline visualization of the data bars within a chart.
   *
   * _Required_: No
   *
   * _Type_: [DataBarsOptions](aws-properties-quicksight-analysis-databarsoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataBars?: QuickSightAnalysisDataBarsOptions;
}

/**
 * The default values of the `StringParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringdefaultvalues.html}
 **/
export interface QuickSightAnalysisStringDefaultValues {
  /**
   * The dynamic value of the `StringDefaultValues`. Different defaults displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-analysis-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
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
 * The configuration of an insight visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-insightconfiguration.html}
 **/
export interface QuickSightAnalysisInsightConfiguration {
  /**
   * The computations configurations of the insight visual
   *
   * _Required_: No
   *
   * _Type_: List of [Computation](aws-properties-quicksight-analysis-computation.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Computations?: List<QuickSightAnalysisComputation>;
  /**
   * The custom narrative of the insight visual.
   *
   * _Required_: No
   *
   * _Type_: [CustomNarrativeOptions](aws-properties-quicksight-analysis-customnarrativeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomNarrative?: QuickSightAnalysisCustomNarrativeOptions;
}

/**
 * Allows data paths to be sorted by a specific data value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathsort.html}
 **/
export interface QuickSightAnalysisDataPathSort {
  /**
   * The list of data paths that need to be sorted.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataPathValue](aws-properties-quicksight-analysis-datapathvalue.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortPaths: List<QuickSightAnalysisDataPathValue>;
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
 * The dimension type field with date type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datedimensionfield.html}
 **/
export interface QuickSightAnalysisDateDimensionField {
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
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-analysis-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisDateTimeFormatConfiguration;
  /**
   * The column that is used in the `DateDimensionField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The word cloud options for a word cloud visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-wordcloudoptions.html}
 **/
export interface QuickSightAnalysisWordCloudOptions {
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-textareacontroldisplayoptions.html}
 **/
export interface QuickSightAnalysisTextAreaControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightAnalysisLabelOptions;
  /**
   * The configuration of the placeholder options in a text area control.
   *
   * _Required_: No
   *
   * _Type_: [TextControlPlaceholderOptions](aws-properties-quicksight-analysis-textcontrolplaceholderoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaceholderOptions?: QuickSightAnalysisTextControlPlaceholderOptions;
}

/**
 * Conditional formatting options for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableconditionalformattingoption.html}
 **/
export interface QuickSightAnalysisTableConditionalFormattingOption {
  /**
   * The row conditional formatting option for a table.
   *
   * _Required_: No
   *
   * _Type_: [TableRowConditionalFormatting](aws-properties-quicksight-analysis-tablerowconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Row?: QuickSightAnalysisTableRowConditionalFormatting;
  /**
   * The cell conditional formatting option for a table.
   *
   * _Required_: No
   *
   * _Type_: [TableCellConditionalFormatting](aws-properties-quicksight-analysis-tablecellconditionalformatting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cell?: QuickSightAnalysisTableCellConditionalFormatting;
}

/**
 * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterlistcontrol.html}
 **/
export interface QuickSightAnalysisParameterListControl {
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
   * _Type_: [ListControlDisplayOptions](aws-properties-quicksight-analysis-listcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisListControlDisplayOptions;
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
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-analysis-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
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
   * _Type_: [ParameterSelectableValues](aws-properties-quicksight-analysis-parameterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightAnalysisParameterSelectableValues;
}

/**
 * The top ranked and bottom ranked computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-topbottomrankedcomputation.html}
 **/
export interface QuickSightAnalysisTopBottomRankedComputation {
  /**
   * The computation type. Choose one of the following options:
   */
  Type: Value<string>;
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightAnalysisDimensionField;
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
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightAnalysisMeasureField;
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
 * The aggregated field wells for a geospatial map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisGeospatialMapAggregatedFieldWells {
  /**
   * The color field wells of a geospatial map.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightAnalysisDimensionField>;
  /**
   * The size field wells of a geospatial map. Values are aggregated based on geospatial fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
  /**
   * The geospatial field wells of a geospatial map. Values are grouped by geospatial fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Geospatial?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The options for data bars.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-databarsoptions.html}
 **/
export interface QuickSightAnalysisDataBarsOptions {
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
 * The dimension type field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-dimensionfield.html}
 **/
export interface QuickSightAnalysisDimensionField {
  /**
   * The dimension type field with date type columns.
   *
   * _Required_: No
   *
   * _Type_: [DateDimensionField](aws-properties-quicksight-analysis-datedimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateDimensionField?: QuickSightAnalysisDateDimensionField;
  /**
   * The dimension type field with numerical type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericalDimensionField](aws-properties-quicksight-analysis-numericaldimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalDimensionField?: QuickSightAnalysisNumericalDimensionField;
  /**
   * The dimension type field with categorical type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoricalDimensionField](aws-properties-quicksight-analysis-categoricaldimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoricalDimensionField?: QuickSightAnalysisCategoricalDimensionField;
}

/**
 * The scale setup options for a numeric axis display.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-axisscale.html}
 **/
export interface QuickSightAnalysisAxisScale {
  /**
   * The logarithmic axis scale setup.
   *
   * _Required_: No
   *
   * _Type_: [AxisLogarithmicScale](aws-properties-quicksight-analysis-axislogarithmicscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logarithmic?: QuickSightAnalysisAxisLogarithmicScale;
  /**
   * The linear axis scale setup.
   *
   * _Required_: No
   *
   * _Type_: [AxisLinearScale](aws-properties-quicksight-analysis-axislinearscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Linear?: QuickSightAnalysisAxisLinearScale;
}

/**
 * The configuration that determines what the type of layout will be used on a sheet.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-layoutconfiguration.html}
 **/
export interface QuickSightAnalysisLayoutConfiguration {
  /**
   * A type of layout that can be used on a sheet. In a grid layout, visuals snap to a grid with standard spacing and alignment. Dashboards are displayed as designed, with options to fit to screen or view at actual size. A grid layout can be configured to behave in one of two ways when the viewport is resized: `FIXED` or `RESPONSIVE`.
   *
   * _Required_: No
   *
   * _Type_: [GridLayoutConfiguration](aws-properties-quicksight-analysis-gridlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GridLayout?: QuickSightAnalysisGridLayoutConfiguration;
  /**
   * A free-form is optimized for a fixed width and has more control over the exact placement of layout elements.
   *
   * _Required_: No
   *
   * _Type_: [FreeFormLayoutConfiguration](aws-properties-quicksight-analysis-freeformlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeFormLayout?: QuickSightAnalysisFreeFormLayoutConfiguration;
  /**
   * A section based layout organizes visuals into multiple sections and has customized header, footer and page break.
   *
   * _Required_: No
   *
   * _Type_: [SectionBasedLayoutConfiguration](aws-properties-quicksight-analysis-sectionbasedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionBasedLayout?: QuickSightAnalysisSectionBasedLayoutConfiguration;
}

/**
 * The title label options for a visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-visualtitlelabeloptions.html}
 **/
export interface QuickSightAnalysisVisualTitleLabelOptions {
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
   * _Type_: [ShortFormatText](aws-properties-quicksight-analysis-shortformattext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatText?: QuickSightAnalysisShortFormatText;
}

/**
 * The sort configuration for a field in a field well.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-fieldsort.html}
 **/
export interface QuickSightAnalysisFieldSort {
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
 * The options that determine the presentation of the `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartoptions.html}
 **/
export interface QuickSightAnalysisGaugeChartOptions {
  /**
   * The arc configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ArcConfiguration](aws-properties-quicksight-analysis-arcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arc?: QuickSightAnalysisArcConfiguration;
  /**
   * The comparison configuration of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ComparisonConfiguration](aws-properties-quicksight-analysis-comparisonconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison?: QuickSightAnalysisComparisonConfiguration;
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
   * _Type_: [ArcAxisConfiguration](aws-properties-quicksight-analysis-arcaxisconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArcAxis?: QuickSightAnalysisArcAxisConfiguration;
  /**
   * The options that determine the primary value font configuration.
   *
   * _Required_: No
   *
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryValueFontConfiguration?: QuickSightAnalysisFontConfiguration;
}

/**
 * The `CustomColor` property type specifies Property description not available. for an [AWS::QuickSight::Analysis](aws-resource-quicksight-analysis.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customcolor.html}
 **/
export interface QuickSightAnalysisCustomColor {
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
 * A `NumericRangeFilter` filters values that are within the value range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericrangefilter.html}
 **/
export interface QuickSightAnalysisNumericRangeFilter {
  /**
   * The aggregation function of the filter.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightAnalysisAggregationFunction;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
   * _Type_: [NumericRangeFilterValue](aws-properties-quicksight-analysis-numericrangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMinimum?: QuickSightAnalysisNumericRangeFilterValue;
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
   * _Type_: [NumericRangeFilterValue](aws-properties-quicksight-analysis-numericrangefiltervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeMaximum?: QuickSightAnalysisNumericRangeFilterValue;
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
 * An integer parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integerparameter.html}
 **/
export interface QuickSightAnalysisIntegerParameter {
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
 * A bar chart.
 *
 * The `BarChartVisual` structure describes a visual that is a member of the bar chart family. The following charts can be described using this structure:
 *
 * For more information, see [Using bar charts](https://docs.aws.amazon.com/quicksight/latest/user/bar-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartvisual.html}
 **/
export interface QuickSightAnalysisBarChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [BarChartConfiguration](aws-properties-quicksight-analysis-barchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisBarChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The optional configuration of subtotals cells.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablefieldsubtotaloptions.html}
 **/
export interface QuickSightAnalysisPivotTableFieldSubtotalOptions {
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
 * A control to display a list of buttons or boxes. This is used to select either a single value or multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterlistcontrol.html}
 **/
export interface QuickSightAnalysisFilterListControl {
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
   * _Type_: [ListControlDisplayOptions](aws-properties-quicksight-analysis-listcontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisListControlDisplayOptions;
  /**
   * The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls.
   *
   * _Required_: No
   *
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-analysis-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
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
   * _Type_: [FilterSelectableValues](aws-properties-quicksight-analysis-filterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightAnalysisFilterSelectableValues;
}

/**
 * The configured style settings of a radar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartareastylesettings.html}
 **/
export interface QuickSightAnalysisRadarChartAreaStyleSettings {
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
 * The options that determine the default settings for a paginated layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultpaginatedlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisDefaultPaginatedLayoutConfiguration {
  /**
   * The options that determine the default settings for a section-based layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultSectionBasedLayoutConfiguration](aws-properties-quicksight-analysis-defaultsectionbasedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionBased?: QuickSightAnalysisDefaultSectionBasedLayoutConfiguration;
}

/**
 * The field wells for a table visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldwells.html}
 **/
export interface QuickSightAnalysisTableFieldWells {
  /**
   * The unaggregated field well for the table.
   *
   * _Required_: No
   *
   * _Type_: [TableUnaggregatedFieldWells](aws-properties-quicksight-analysis-tableunaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableUnaggregatedFieldWells?: QuickSightAnalysisTableUnaggregatedFieldWells;
  /**
   * The aggregated field well for the table.
   *
   * _Required_: No
   *
   * _Type_: [TableAggregatedFieldWells](aws-properties-quicksight-analysis-tableaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableAggregatedFieldWells?: QuickSightAnalysisTableAggregatedFieldWells;
}

/**
 * The label options of the label that is displayed in the center of a donut chart. This option isn't available for pie charts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-donutcenteroptions.html}
 **/
export interface QuickSightAnalysisDonutCenterOptions {
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
 * The configuration for a waterfall visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-waterfallchartconfiguration.html}
 **/
export interface QuickSightAnalysisWaterfallChartConfiguration {
  /**
   * The options that determine the presentation of the category axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The sort configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartSortConfiguration](aws-properties-quicksight-analysis-waterfallchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisWaterfallChartSortConfiguration;
  /**
   * The legend configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The data label configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The options that determine the presentation of the y-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The field well configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartFieldWells](aws-properties-quicksight-analysis-waterfallchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisWaterfallChartFieldWells;
  /**
   * The options that determine the presentation of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [WaterfallChartOptions](aws-properties-quicksight-analysis-waterfallchartoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaterfallChartOptions?: QuickSightAnalysisWaterfallChartOptions;
  /**
   * The options that determine the presentation of the category axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The options that determine the presentation of the y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The visual palette configuration of a waterfall visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
}

/**
 * The field well configuration of a sankey diagram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisSankeyDiagramAggregatedFieldWells {
  /**
   * The destination field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: List<QuickSightAnalysisDimensionField>;
  /**
   * The source field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source?: List<QuickSightAnalysisDimensionField>;
  /**
   * The weight field wells of a sankey diagram.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The label configuration of a reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinelabelconfiguration.html}
 **/
export interface QuickSightAnalysisReferenceLineLabelConfiguration {
  /**
   * The horizontal position configuration of the label in a reference line. Choose one of the following options:
   */
  HorizontalPosition?: Value<string>;
  /**
   * The value label configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineValueLabelConfiguration](aws-properties-quicksight-analysis-referencelinevaluelabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueLabelConfiguration?: QuickSightAnalysisReferenceLineValueLabelConfiguration;
  /**
   * The custom label configuration of the label in a reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineCustomLabelConfiguration](aws-properties-quicksight-analysis-referencelinecustomlabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLabelConfiguration?: QuickSightAnalysisReferenceLineCustomLabelConfiguration;
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
  /**
   * The vertical position configuration of the label in a reference line. Choose one of the following options:
   */
  VerticalPosition?: Value<string>;
}

/**
 * The sort configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartsortconfiguration.html}
 **/
export interface QuickSightAnalysisRadarChartSortConfiguration {
  /**
   * The color sort configuration of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The color items limit of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The category items limit for a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The category sort options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
}

/**
 * The configuration of a `GeospatialMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-geospatialmapconfiguration.html}
 **/
export interface QuickSightAnalysisGeospatialMapConfiguration {
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The map style options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-analysis-geospatialmapstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapStyleOptions?: QuickSightAnalysisGeospatialMapStyleOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialMapFieldWells](aws-properties-quicksight-analysis-geospatialmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisGeospatialMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The window options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialWindowOptions](aws-properties-quicksight-analysis-geospatialwindowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowOptions?: QuickSightAnalysisGeospatialWindowOptions;
  /**
   * The point style options of the geospatial map.
   *
   * _Required_: No
   *
   * _Type_: [GeospatialPointStyleOptions](aws-properties-quicksight-analysis-geospatialpointstyleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PointStyleOptions?: QuickSightAnalysisGeospatialPointStyleOptions;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
}

/**
 * The format of the comparison.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-comparisonformatconfiguration.html}
 **/
export interface QuickSightAnalysisComparisonFormatConfiguration {
  /**
   * The number display format.
   *
   * _Required_: No
   *
   * _Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-analysis-numberdisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberDisplayFormatConfiguration?: QuickSightAnalysisNumberDisplayFormatConfiguration;
  /**
   * The percentage display format.
   *
   * _Required_: No
   *
   * _Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-analysis-percentagedisplayformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentageDisplayFormatConfiguration?: QuickSightAnalysisPercentageDisplayFormatConfiguration;
}

/**
 * The background style configuration of a free-form layout element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutelementbackgroundstyle.html}
 **/
export interface QuickSightAnalysisFreeFormLayoutElementBackgroundStyle {
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
 * The layout configuration of a section.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sectionlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisSectionLayoutConfiguration {
  /**
   * The free-form layout configuration of a section.
   *
   * _Required_: Yes
   *
   * _Type_: [FreeFormSectionLayoutConfiguration](aws-properties-quicksight-analysis-freeformsectionlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FreeFormLayout: QuickSightAnalysisFreeFormSectionLayoutConfiguration;
}

/**
 * The options that determine the default settings for a section-based layout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultsectionbasedlayoutconfiguration.html}
 **/
export interface QuickSightAnalysisDefaultSectionBasedLayoutConfiguration {
  /**
   * Determines the screen canvas size options for a section-based layout.
   *
   * _Required_: Yes
   *
   * _Type_: [SectionBasedLayoutCanvasSizeOptions](aws-properties-quicksight-analysis-sectionbasedlayoutcanvassizeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanvasSizeOptions: QuickSightAnalysisSectionBasedLayoutCanvasSizeOptions;
}

/**
 * The unique values computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-uniquevaluescomputation.html}
 **/
export interface QuickSightAnalysisUniqueValuesComputation {
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightAnalysisDimensionField;
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
 * The field well configuration of a heat map.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapfieldwells.html}
 **/
export interface QuickSightAnalysisHeatMapFieldWells {
  /**
   * The aggregated field wells of a heat map.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapAggregatedFieldWells](aws-properties-quicksight-analysis-heatmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeatMapAggregatedFieldWells?: QuickSightAnalysisHeatMapAggregatedFieldWells;
}

/**
 * A `NumericEqualityFilter` filters values that are equal to the specified value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-numericequalityfilter.html}
 **/
export interface QuickSightAnalysisNumericEqualityFilter {
  /**
   * The aggregation function of the filter.
   *
   * _Required_: No
   *
   * _Type_: [AggregationFunction](aws-properties-quicksight-analysis-aggregationfunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationFunction?: QuickSightAnalysisAggregationFunction;
  /**
   * The column that the filter is applied to.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The measure type field with date type columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datemeasurefield.html}
 **/
export interface QuickSightAnalysisDateMeasureField {
  /**
   * The aggregation function of the measure field.
   *
   * _Required_: No
   *
   * _Type_: [String](aws-properties-quicksight-analysis-aggregationfunction.md)
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
   * _Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-analysis-datetimeformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatConfiguration?: QuickSightAnalysisDateTimeFormatConfiguration;
  /**
   * The column that is used in the `DateMeasureField`.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Column: QuickSightAnalysisColumnIdentifier;
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
 * The configuration for a `CategoryFilter`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-categoryfilterconfiguration.html}
 **/
export interface QuickSightAnalysisCategoryFilterConfiguration {
  /**
   * A list of custom filter values. In the Amazon QuickSight console, this filter type is called a custom filter list.
   *
   * _Required_: No
   *
   * _Type_: [CustomFilterListConfiguration](aws-properties-quicksight-analysis-customfilterlistconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomFilterListConfiguration?: QuickSightAnalysisCustomFilterListConfiguration;
  /**
   * A custom filter that filters based on a single value. This filter can be partially matched.
   *
   * _Required_: No
   *
   * _Type_: [CustomFilterConfiguration](aws-properties-quicksight-analysis-customfilterconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomFilterConfiguration?: QuickSightAnalysisCustomFilterConfiguration;
  /**
   * A list of filter configurations. In the Amazon QuickSight console, this filter type is called a filter list.
   *
   * _Required_: No
   *
   * _Type_: [FilterListConfiguration](aws-properties-quicksight-analysis-filterlistconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterListConfiguration?: QuickSightAnalysisFilterListConfiguration;
}

/**
 * The field sort options for a pivot table sort configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivotfieldsortoptions.html}
 **/
export interface QuickSightAnalysisPivotFieldSortOptions {
  /**
   * The sort by field for the field sort options.
   *
   * _Required_: Yes
   *
   * _Type_: [PivotTableSortBy](aws-properties-quicksight-analysis-pivottablesortby.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortBy: QuickSightAnalysisPivotTableSortBy;
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
 * A control to display a dropdown list with buttons that are used to select a single value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterdropdowncontrol.html}
 **/
export interface QuickSightAnalysisParameterDropDownControl {
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
   * _Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-analysis-dropdowncontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisDropDownControlDisplayOptions;
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
   * _Type_: [CascadingControlConfiguration](aws-properties-quicksight-analysis-cascadingcontrolconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CascadingControlConfiguration?: QuickSightAnalysisCascadingControlConfiguration;
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
   * _Type_: [ParameterSelectableValues](aws-properties-quicksight-analysis-parameterselectablevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectableValues?: QuickSightAnalysisParameterSelectableValues;
}

/**
 * The configuration of a heat map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-heatmapconfiguration.html}
 **/
export interface QuickSightAnalysisHeatMapConfiguration {
  /**
   * The sort configuration of a heat map.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapSortConfiguration](aws-properties-quicksight-analysis-heatmapsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisHeatMapSortConfiguration;
  /**
   * The label options of the column that is displayed in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [HeatMapFieldWells](aws-properties-quicksight-analysis-heatmapfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisHeatMapFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The color options (gradient color, point of divergence) in a heat map.
   *
   * _Required_: No
   *
   * _Type_: [ColorScale](aws-properties-quicksight-analysis-colorscale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorScale?: QuickSightAnalysisColorScale;
  /**
   * The label options of the row that is displayed in a `heat map`.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
}

/**
 * The field well configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-gaugechartfieldwells.html}
 **/
export interface QuickSightAnalysisGaugeChartFieldWells {
  /**
   * The target value field wells of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValues?: List<QuickSightAnalysisMeasureField>;
  /**
   * The value field wells of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The subtotal options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-subtotaloptions.html}
 **/
export interface QuickSightAnalysisSubtotalOptions {
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
   * _Type_: List of [PivotTableFieldSubtotalOptions](aws-properties-quicksight-analysis-pivottablefieldsubtotaloptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLevelOptions?: List<QuickSightAnalysisPivotTableFieldSubtotalOptions>;
  /**
   * The cell styling options for the subtotals of value cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueCellStyle?: QuickSightAnalysisTableCellStyle;
  /**
   * The cell styling options for the subtotal cells.
   *
   * _Required_: No
   *
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalCellStyle?: QuickSightAnalysisTableCellStyle;
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
   * _Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricHeaderCellStyle?: QuickSightAnalysisTableCellStyle;
}

/**
 * The custom text content (value, font configuration) for the table link content configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldcustomtextcontent.html}
 **/
export interface QuickSightAnalysisTableFieldCustomTextContent {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration: QuickSightAnalysisFontConfiguration;
}

/**
 * The configuration for default analysis settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysisdefaults.html}
 **/
export interface QuickSightAnalysisAnalysisDefaults {
  /**
   * The configuration for default new sheet settings.
   *
   * _Required_: Yes
   *
   * _Type_: [DefaultNewSheetConfiguration](aws-properties-quicksight-analysis-defaultnewsheetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultNewSheetConfiguration: QuickSightAnalysisDefaultNewSheetConfiguration;
}

/**
 * The field well configuration of a `FunnelChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisFunnelChartAggregatedFieldWells {
  /**
   * The category field wells of a funnel chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightAnalysisDimensionField>;
  /**
   * The value field wells of a funnel chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The conditional formatting for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottableconditionalformatting.html}
 **/
export interface QuickSightAnalysisPivotTableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [PivotTableConditionalFormattingOption](aws-properties-quicksight-analysis-pivottableconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightAnalysisPivotTableConditionalFormattingOption>;
}

/**
 * The configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartconfiguration.html}
 **/
export interface QuickSightAnalysisLineChartConfiguration {
  /**
   * The sort configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartSortConfiguration](aws-properties-quicksight-analysis-linechartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisLineChartSortConfiguration;
  /**
   * The legend configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The reference lines configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-analysis-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightAnalysisReferenceLine>;
  /**
   * The data label configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The tooltip configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The small multiples setup for the visual.
   *
   * _Required_: No
   *
   * _Type_: [SmallMultiplesOptions](aws-properties-quicksight-analysis-smallmultiplesoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesOptions?: QuickSightAnalysisSmallMultiplesOptions;
  /**
   * The series axis configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisLineSeriesAxisDisplayOptions;
  /**
   * The visual palette configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
  /**
   * The options that determine the presentation of the x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The options that determine the default presentation of all line series in `LineChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [LineChartDefaultSeriesSettings](aws-properties-quicksight-analysis-linechartdefaultseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultSeriesSettings?: QuickSightAnalysisLineChartDefaultSeriesSettings;
  /**
   * The options that determine the presentation of the secondary y-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The forecast configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [ForecastConfiguration](aws-properties-quicksight-analysis-forecastconfiguration.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForecastConfigurations?: List<QuickSightAnalysisForecastConfiguration>;
  /**
   * The series item configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [SeriesItem](aws-properties-quicksight-analysis-seriesitem.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Series?: List<QuickSightAnalysisSeriesItem>;
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
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The default configuration of a line chart's contribution analysis.
   *
   * _Required_: No
   *
   * _Type_: List of [ContributionAnalysisDefault](aws-properties-quicksight-analysis-contributionanalysisdefault.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributionAnalysisDefaults?: List<QuickSightAnalysisContributionAnalysisDefault>;
  /**
   * The field well configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineChartFieldWells](aws-properties-quicksight-analysis-linechartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisLineChartFieldWells;
  /**
   * The series axis configuration of a line chart.
   *
   * _Required_: No
   *
   * _Type_: [LineSeriesAxisDisplayOptions](aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisDisplayOptions?: QuickSightAnalysisLineSeriesAxisDisplayOptions;
  /**
   * The options that determine the presentation of the x-axis label.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
}

/**
 * The configuration of selected fields in the`CustomActionFilterOperation`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filteroperationselectedfieldsconfiguration.html}
 **/
export interface QuickSightAnalysisFilterOperationSelectedFieldsConfiguration {
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
 * The definition of an analysis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-analysisdefinition.html}
 **/
export interface QuickSightAnalysisAnalysisDefinition {
  /**
   * Filter definitions for an analysis.
   *
   * For more information, see [Filtering Data in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [FilterGroup](aws-properties-quicksight-analysis-filtergroup.md)
   *
   * _Maximum_: `2000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterGroups?: List<QuickSightAnalysisFilterGroup>;
  /**
   * An array of calculated field definitions for the analysis.
   *
   * _Required_: No
   *
   * _Type_: List of [CalculatedField](aws-properties-quicksight-analysis-calculatedfield.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CalculatedFields?: List<QuickSightAnalysisCalculatedField>;
  /**
   * An array of dataset identifier declarations. This mapping allows the usage of dataset identifiers instead of dataset ARNs throughout analysis sub-structures.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataSetIdentifierDeclaration](aws-properties-quicksight-analysis-datasetidentifierdeclaration.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetIdentifierDeclarations: List<QuickSightAnalysisDataSetIdentifierDeclaration>;
  /**
   * An array of analysis-level column configurations. Column configurations can be used to set default formatting for a column to be used throughout an analysis.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnConfiguration](aws-properties-quicksight-analysis-columnconfiguration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnConfigurations?: List<QuickSightAnalysisColumnConfiguration>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisDefaults](aws-properties-quicksight-analysis-analysisdefaults.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnalysisDefaults?: QuickSightAnalysisAnalysisDefaults;
  /**
   * An array of sheet definitions for an analysis. Each `SheetDefinition` provides detailed information about a sheet within this analysis.
   *
   * _Required_: No
   *
   * _Type_: List of [SheetDefinition](aws-properties-quicksight-analysis-sheetdefinition.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sheets?: List<QuickSightAnalysisSheetDefinition>;
  /**
   * An array of parameter declarations for an analysis.
   *
   * Parameters are named variables that can transfer a value for use by an action or an object.
   *
   * For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [ParameterDeclaration](aws-properties-quicksight-analysis-parameterdeclaration.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterDeclarations?: List<QuickSightAnalysisParameterDeclaration>;
}

/**
 * The period to date computation configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-periodtodatecomputation.html}
 **/
export interface QuickSightAnalysisPeriodToDateComputation {
  /**
   * The time granularity setup of period to date computation. Choose from the following options:
   */
  PeriodTimeGranularity?: Value<string>;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightAnalysisMeasureField;
  /**
   * The time field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightAnalysisDimensionField;
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
 * A parameter declaration for the `Decimal` data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalparameterdeclaration.html}
 **/
export interface QuickSightAnalysisDecimalParameterDeclaration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [MappedDataSetParameter](aws-properties-quicksight-analysis-mappeddatasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappedDataSetParameters?: List<QuickSightAnalysisMappedDataSetParameter>;
  /**
   * The default values of a parameter. If the parameter is a single-value parameter, a maximum of one default value can be provided.
   *
   * _Required_: No
   *
   * _Type_: [DecimalDefaultValues](aws-properties-quicksight-analysis-decimaldefaultvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValues?: QuickSightAnalysisDecimalDefaultValues;
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
   * _Type_: [DecimalValueWhenUnsetConfiguration](aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueWhenUnset?: QuickSightAnalysisDecimalValueWhenUnsetConfiguration;
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
 * The options that determine the negative value configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-negativevalueconfiguration.html}
 **/
export interface QuickSightAnalysisNegativeValueConfiguration {
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
 * The conditional formatting that determines the shape of the filled map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapshapeconditionalformatting.html}
 **/
export interface QuickSightAnalysisFilledMapShapeConditionalFormatting {
  /**
   * The conditional formatting that determines the background color of a filled map's shape.
   *
   * _Required_: No
   *
   * _Type_: [ShapeConditionalFormat](aws-properties-quicksight-analysis-shapeconditionalformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: QuickSightAnalysisShapeConditionalFormat;
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
 * The field well configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisLineChartAggregatedFieldWells {
  /**
   * The category field wells of a line chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightAnalysisDimensionField>;
  /**
   * The color field wells of a line chart. Values are grouped by category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightAnalysisDimensionField>;
  /**
   * The value field wells of a line chart. Values are aggregated based on categories.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
  /**
   * The small multiples field well of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The display options of a control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-slidercontroldisplayoptions.html}
 **/
export interface QuickSightAnalysisSliderControlDisplayOptions {
  /**
   * The options to configure the title visibility, name, and font size.
   *
   * _Required_: No
   *
   * _Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TitleOptions?: QuickSightAnalysisLabelOptions;
}

/**
 * The field wells of a `FilledMapVisual`.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapfieldwells.html}
 **/
export interface QuickSightAnalysisFilledMapFieldWells {
  /**
   * The aggregated field well of the filled map.
   *
   * _Required_: No
   *
   * _Type_: [FilledMapAggregatedFieldWells](aws-properties-quicksight-analysis-filledmapaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilledMapAggregatedFieldWells?: QuickSightAnalysisFilledMapAggregatedFieldWells;
}

/**
 * The option that determines the data label type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datalabeltype.html}
 **/
export interface QuickSightAnalysisDataLabelType {
  /**
   * Determines the label configuration for the maximum value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [MaximumLabelType](aws-properties-quicksight-analysis-maximumlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumLabelType?: QuickSightAnalysisMaximumLabelType;
  /**
   * The option that specifies individual data values for labels.
   *
   * _Required_: No
   *
   * _Type_: [DataPathLabelType](aws-properties-quicksight-analysis-datapathlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPathLabelType?: QuickSightAnalysisDataPathLabelType;
  /**
   * Determines the label configuration for range end value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [RangeEndsLabelType](aws-properties-quicksight-analysis-rangeendslabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeEndsLabelType?: QuickSightAnalysisRangeEndsLabelType;
  /**
   * Determines the label configuration for the entire field.
   *
   * _Required_: No
   *
   * _Type_: [FieldLabelType](aws-properties-quicksight-analysis-fieldlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLabelType?: QuickSightAnalysisFieldLabelType;
  /**
   * Determines the label configuration for the minimum value in a visual.
   *
   * _Required_: No
   *
   * _Type_: [MinimumLabelType](aws-properties-quicksight-analysis-minimumlabeltype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumLabelType?: QuickSightAnalysisMinimumLabelType;
}

/**
 * The configuration of a `ComboChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartconfiguration.html}
 **/
export interface QuickSightAnalysisComboChartConfiguration {
  /**
   * The sort configuration of a `ComboChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartSortConfiguration](aws-properties-quicksight-analysis-combochartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisComboChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-analysis-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightAnalysisReferenceLine>;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's color field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a bar in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BarDataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart category (group/color) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The label display options (grid line, range, scale, and axis step) of a combo chart's primary y-axis (bar) field well.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
  /**
   * Determines the bar arrangement in a combo chart. The following are valid values in this structure:
   */
  BarsArrangement?: Value<string>;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's secondary y-axis(line) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * The data label options for a line in a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineDataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The category axis of a combo chart.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of a combo chart's primary y-axis (bar) field well.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartFieldWells](aws-properties-quicksight-analysis-combochartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisComboChartFieldWells;
  /**
   * The label display options (grid line, range, scale, axis step) of a combo chart's secondary y-axis (line) field well.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
}

/**
 * The configuration of a `CustomContentVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customcontentconfiguration.html}
 **/
export interface QuickSightAnalysisCustomContentConfiguration {
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
 * The total options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottabletotaloptions.html}
 **/
export interface QuickSightAnalysisPivotTableTotalOptions {
  /**
   * The column subtotal options.
   *
   * _Required_: No
   *
   * _Type_: [SubtotalOptions](aws-properties-quicksight-analysis-subtotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnSubtotalOptions?: QuickSightAnalysisSubtotalOptions;
  /**
   * The row subtotal options.
   *
   * _Required_: No
   *
   * _Type_: [SubtotalOptions](aws-properties-quicksight-analysis-subtotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowSubtotalOptions?: QuickSightAnalysisSubtotalOptions;
  /**
   * The row total options.
   *
   * _Required_: No
   *
   * _Type_: [PivotTotalOptions](aws-properties-quicksight-analysis-pivottotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowTotalOptions?: QuickSightAnalysisPivotTotalOptions;
  /**
   * The column total options.
   *
   * _Required_: No
   *
   * _Type_: [PivotTotalOptions](aws-properties-quicksight-analysis-pivottotaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnTotalOptions?: QuickSightAnalysisPivotTotalOptions;
}

/**
 * The default values of the `IntegerParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integerdefaultvalues.html}
 **/
export interface QuickSightAnalysisIntegerDefaultValues {
  /**
   * The dynamic value of the `IntegerDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-analysis-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
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
 * The style configuration of the reference line.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referencelinestyleconfiguration.html}
 **/
export interface QuickSightAnalysisReferenceLineStyleConfiguration {
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
 * A control from a date parameter that specifies date and time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parameterdatetimepickercontrol.html}
 **/
export interface QuickSightAnalysisParameterDateTimePickerControl {
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
   * _Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-analysis-datetimepickercontroldisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayOptions?: QuickSightAnalysisDateTimePickerControlDisplayOptions;
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
 * The configuration of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotconfiguration.html}
 **/
export interface QuickSightAnalysisScatterPlotConfiguration {
  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's y-axis.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's y-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The options that determine if visual data labels are displayed.
   *
   * _Required_: No
   *
   * _Type_: [DataLabelOptions](aws-properties-quicksight-analysis-datalabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLabels?: QuickSightAnalysisDataLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [ScatterPlotFieldWells](aws-properties-quicksight-analysis-scatterplotfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisScatterPlotFieldWells;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The label options (label text, label visibility, and sort icon visibility) of the scatter plot's x-axis.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
  /**
   * The label display options (grid line, range, scale, and axis step) of the scatter plot's x-axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
}

/**
 * The `ColorsConfiguration` property type specifies Property description not available. for an [AWS::QuickSight::Analysis](aws-resource-quicksight-analysis.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-colorsconfiguration.html}
 **/
export interface QuickSightAnalysisColorsConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomColor](aws-properties-quicksight-analysis-customcolor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomColors?: List<QuickSightAnalysisCustomColor>;
}

/**
 * The aggregated field wells of a bar chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-barchartaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisBarChartAggregatedFieldWells {
  /**
   * The category (y-axis) field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: List<QuickSightAnalysisDimensionField>;
  /**
   * The color (group/color) field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<QuickSightAnalysisDimensionField>;
  /**
   * The value field wells of a bar chart. Values are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
  /**
   * The small multiples field well of a bar chart.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiples?: List<QuickSightAnalysisDimensionField>;
}

/**
 * The aggregated field well for the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisTableAggregatedFieldWells {
  /**
   * The group by field well for a pivot table. Values are grouped by group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupBy?: List<QuickSightAnalysisDimensionField>;
  /**
   * The values field well for a pivot table. Values are aggregated based on group by fields.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<QuickSightAnalysisMeasureField>;
}

/**
 * The default values of the `DateTimeParameterDeclaration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datetimedefaultvalues.html}
 **/
export interface QuickSightAnalysisDateTimeDefaultValues {
  /**
   * The rolling date of the `DataTimeDefaultValues`. The date is determined from the dataset based on input expression.
   *
   * _Required_: No
   *
   * _Type_: [RollingDateConfiguration](aws-properties-quicksight-analysis-rollingdateconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RollingDate?: QuickSightAnalysisRollingDateConfiguration;
  /**
   * The dynamic value of the `DataTimeDefaultValues`. Different defaults are displayed according to users, groups, and values mapping.
   *
   * _Required_: No
   *
   * _Type_: [DynamicDefaultValue](aws-properties-quicksight-analysis-dynamicdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicValue?: QuickSightAnalysisDynamicDefaultValue;
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
 * The field well configuration of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-histogramfieldwells.html}
 **/
export interface QuickSightAnalysisHistogramFieldWells {
  /**
   * The field well configuration of a histogram.
   *
   * _Required_: No
   *
   * _Type_: [HistogramAggregatedFieldWells](aws-properties-quicksight-analysis-histogramaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistogramAggregatedFieldWells?: QuickSightAnalysisHistogramAggregatedFieldWells;
}

/**
 * The control of a parameter that users can interact with in a dashboard or an analysis.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-parametercontrol.html}
 **/
export interface QuickSightAnalysisParameterControl {
  /**
   * A control to display a horizontal toggle bar. This is used to change a value by sliding the toggle.
   *
   * _Required_: No
   *
   * _Type_: [ParameterSliderControl](aws-properties-quicksight-analysis-parameterslidercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slider?: QuickSightAnalysisParameterSliderControl;
  /**
   * A control to display a text box that is used to enter multiple entries.
   *
   * _Required_: No
   *
   * _Type_: [ParameterTextAreaControl](aws-properties-quicksight-analysis-parametertextareacontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextArea?: QuickSightAnalysisParameterTextAreaControl;
  /**
   * A control to display a dropdown list with buttons that are used to select a single value.
   *
   * _Required_: No
   *
   * _Type_: [ParameterDropDownControl](aws-properties-quicksight-analysis-parameterdropdowncontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dropdown?: QuickSightAnalysisParameterDropDownControl;
  /**
   * A control to display a text box that is used to enter a single entry.
   *
   * _Required_: No
   *
   * _Type_: [ParameterTextFieldControl](aws-properties-quicksight-analysis-parametertextfieldcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextField?: QuickSightAnalysisParameterTextFieldControl;
  /**
   * A control to display a list with buttons or boxes that are used to select either a single value or multiple values.
   *
   * _Required_: No
   *
   * _Type_: [ParameterListControl](aws-properties-quicksight-analysis-parameterlistcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  List?: QuickSightAnalysisParameterListControl;
  /**
   * A control from a date parameter that specifies date and time.
   *
   * _Required_: No
   *
   * _Type_: [ParameterDateTimePickerControl](aws-properties-quicksight-analysis-parameterdatetimepickercontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateTimePicker?: QuickSightAnalysisParameterDateTimePickerControl;
}

/**
 * A parameter declaration for the `Integer` data type.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-integervaluewhenunsetconfiguration.html}
 **/
export interface QuickSightAnalysisIntegerValueWhenUnsetConfiguration {
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
 * The configuration of a `BoxPlotVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-boxplotchartconfiguration.html}
 **/
export interface QuickSightAnalysisBoxPlotChartConfiguration {
  /**
   * The sort configuration of a `BoxPlotVisual`.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotSortConfiguration](aws-properties-quicksight-analysis-boxplotsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisBoxPlotSortConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
  /**
   * The reference line setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: List of [ReferenceLine](aws-properties-quicksight-analysis-referenceline.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceLines?: List<QuickSightAnalysisReferenceLine>;
  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The label options (label text, label visibility and sort icon visibility) of a box plot value.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The label options (label text, label visibility and sort Icon visibility) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The field wells of the visual.
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotFieldWells](aws-properties-quicksight-analysis-boxplotfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisBoxPlotFieldWells;
  /**
   * The tooltip display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tooltip?: QuickSightAnalysisTooltipOptions;
  /**
   * The box plot chart options for a box plot visual
   *
   * _Required_: No
   *
   * _Type_: [BoxPlotOptions](aws-properties-quicksight-analysis-boxplotoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BoxPlotOptions?: QuickSightAnalysisBoxPlotOptions;
  /**
   * The label display options (grid line, range, scale, axis step) of a box plot category.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryYAxisDisplayOptions?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
}

/**
 * The sort configuration of a pie chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-piechartsortconfiguration.html}
 **/
export interface QuickSightAnalysisPieChartSortConfiguration {
  /**
   * The sort configuration of the small multiples field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesSort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of categories that are displayed in a pie chart.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryItemsLimit?: QuickSightAnalysisItemsLimitConfiguration;
  /**
   * The sort configuration of the category fields.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategorySort?: List<QuickSightAnalysisFieldSortOptions>;
  /**
   * The limit on the number of small multiples panels that are displayed.
   *
   * _Required_: No
   *
   * _Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmallMultiplesLimitConfiguration?: QuickSightAnalysisItemsLimitConfiguration;
}

/**
 * A scatter plot.
 *
 * For more information, see [Using scatter plots](https://docs.aws.amazon.com/quicksight/latest/user/scatter-plot.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotvisual.html}
 **/
export interface QuickSightAnalysisScatterPlotVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [ScatterPlotConfiguration](aws-properties-quicksight-analysis-scatterplotconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisScatterPlotConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The series axis configuration of a line chart.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions.html}
 **/
export interface QuickSightAnalysisLineSeriesAxisDisplayOptions {
  /**
   * The configuration options that determine how missing data is treated during the rendering of a line chart.
   *
   * _Required_: No
   *
   * _Type_: List of [MissingDataConfiguration](aws-properties-quicksight-analysis-missingdataconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MissingDataConfigurations?: List<QuickSightAnalysisMissingDataConfiguration>;
  /**
   * The options that determine the presentation of the line series axis.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AxisOptions?: QuickSightAnalysisAxisDisplayOptions;
}

/**
 * The options that determine the title styles for each small multiples panel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-paneltitleoptions.html}
 **/
export interface QuickSightAnalysisPanelTitleOptions {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
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
 * The options that determine the bin count of a histogram.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-bincountoptions.html}
 **/
export interface QuickSightAnalysisBinCountOptions {
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
 * A line chart.
 *
 * For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-linechartvisual.html}
 **/
export interface QuickSightAnalysisLineChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [LineChartConfiguration](aws-properties-quicksight-analysis-linechartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisLineChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * A list of filter configurations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filterlistconfiguration.html}
 **/
export interface QuickSightAnalysisFilterListConfiguration {
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
 * The share label options for the labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-labeloptions.html}
 **/
export interface QuickSightAnalysisLabelOptions {
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
   * _Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontConfiguration?: QuickSightAnalysisFontConfiguration;
}

/**
 * Options that determine the layout and display options of a chart's small multiples.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-smallmultiplesoptions.html}
 **/
export interface QuickSightAnalysisSmallMultiplesOptions {
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
   * _Type_: [PanelConfiguration](aws-properties-quicksight-analysis-panelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PanelConfiguration?: QuickSightAnalysisPanelConfiguration;
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
 * The configuration of custom values for the destination parameter in `DestinationParameterValueConfiguration`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-customvaluesconfiguration.html}
 **/
export interface QuickSightAnalysisCustomValuesConfiguration {
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
   * _Type_: [CustomParameterValues](aws-properties-quicksight-analysis-customparametervalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomValues: QuickSightAnalysisCustomParameterValues;
}

/**
 * The configuration that defines the default value of a `Decimal` parameter when a value has not been set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration.html}
 **/
export interface QuickSightAnalysisDecimalValueWhenUnsetConfiguration {
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
 * The configuration for default new sheet settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-defaultnewsheetconfiguration.html}
 **/
export interface QuickSightAnalysisDefaultNewSheetConfiguration {
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
   * _Type_: [DefaultInteractiveLayoutConfiguration](aws-properties-quicksight-analysis-defaultinteractivelayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InteractiveLayoutConfiguration?: QuickSightAnalysisDefaultInteractiveLayoutConfiguration;
  /**
   * The options that determine the default settings for a paginated layout configuration.
   *
   * _Required_: No
   *
   * _Type_: [DefaultPaginatedLayoutConfiguration](aws-properties-quicksight-analysis-defaultpaginatedlayoutconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PaginatedLayoutConfiguration?: QuickSightAnalysisDefaultPaginatedLayoutConfiguration;
}

/**
 * The reference line visual display options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-referenceline.html}
 **/
export interface QuickSightAnalysisReferenceLine {
  /**
   * The status of the reference line. Choose one of the following options:
   */
  Status?: Value<string>;
  /**
   * The data configuration of the reference line.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceLineDataConfiguration](aws-properties-quicksight-analysis-referencelinedataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataConfiguration: QuickSightAnalysisReferenceLineDataConfiguration;
  /**
   * The label configuration of the reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineLabelConfiguration](aws-properties-quicksight-analysis-referencelinelabelconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelConfiguration?: QuickSightAnalysisReferenceLineLabelConfiguration;
  /**
   * The style configuration of the reference line.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceLineStyleConfiguration](aws-properties-quicksight-analysis-referencelinestyleconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleConfiguration?: QuickSightAnalysisReferenceLineStyleConfiguration;
}

/**
 * The conditional formatting of a `FilledMapVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-filledmapconditionalformatting.html}
 **/
export interface QuickSightAnalysisFilledMapConditionalFormatting {
  /**
   * Conditional formatting options of a `FilledMapVisual`.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FilledMapConditionalFormattingOption](aws-properties-quicksight-analysis-filledmapconditionalformattingoption.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions: List<QuickSightAnalysisFilledMapConditionalFormattingOption>;
}

/**
 * A funnel chart.
 *
 * For more information, see [Using funnel charts](https://docs.aws.amazon.com/quicksight/latest/user/funnel-visual-content.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-funnelchartvisual.html}
 **/
export interface QuickSightAnalysisFunnelChartVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [FunnelChartConfiguration](aws-properties-quicksight-analysis-funnelchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisFunnelChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
  /**
   * The column hierarchy that is used during drill-downs and drill-ups.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnHierarchies?: List<QuickSightAnalysisColumnHierarchy>;
}

/**
 * The field wells of the visual.
 *
 * This is a union type structure. For this structure to be valid, only one of the attributes can be defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-combochartfieldwells.html}
 **/
export interface QuickSightAnalysisComboChartFieldWells {
  /**
   * The aggregated field wells of a combo chart. Combo charts only have aggregated field wells. Columns in a combo chart are aggregated by category.
   *
   * _Required_: No
   *
   * _Type_: [ComboChartAggregatedFieldWells](aws-properties-quicksight-analysis-combochartaggregatedfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComboChartAggregatedFieldWells?: QuickSightAnalysisComboChartAggregatedFieldWells;
}

/**
 * The conditional formatting for a `PivotTableVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tableconditionalformatting.html}
 **/
export interface QuickSightAnalysisTableConditionalFormatting {
  /**
   * Conditional formatting options for a `PivotTableVisual`.
   *
   * _Required_: No
   *
   * _Type_: List of [TableConditionalFormattingOption](aws-properties-quicksight-analysis-tableconditionalformattingoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalFormattingOptions?: List<QuickSightAnalysisTableConditionalFormattingOption>;
}

/**
 * The URL content (text, icon) for the table link configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-tablefieldlinkcontentconfiguration.html}
 **/
export interface QuickSightAnalysisTableFieldLinkContentConfiguration {
  /**
   * The custom icon content for the table link content configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldCustomIconContent](aws-properties-quicksight-analysis-tablefieldcustomiconcontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomIconContent?: QuickSightAnalysisTableFieldCustomIconContent;
  /**
   * The custom text content (value, font configuration) for the table link content configuration.
   *
   * _Required_: No
   *
   * _Type_: [TableFieldCustomTextContent](aws-properties-quicksight-analysis-tablefieldcustomtextcontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomTextContent?: QuickSightAnalysisTableFieldCustomTextContent;
}

/**
 * The arc axis configuration of a `GaugeChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-arcaxisconfiguration.html}
 **/
export interface QuickSightAnalysisArcAxisConfiguration {
  /**
   * The arc axis range of a `GaugeChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [ArcAxisDisplayRange](aws-properties-quicksight-analysis-arcaxisdisplayrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: QuickSightAnalysisArcAxisDisplayRange;
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
 * The option that specifies individual data values for labels.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-datapathlabeltype.html}
 **/
export interface QuickSightAnalysisDataPathLabelType {
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
 * A sankey diagram.
 *
 * For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-sankeydiagramvisual.html}
 **/
export interface QuickSightAnalysisSankeyDiagramVisual {
  /**
   * The subtitle that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: QuickSightAnalysisVisualSubtitleLabelOptions;
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
   * _Type_: [SankeyDiagramChartConfiguration](aws-properties-quicksight-analysis-sankeydiagramchartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChartConfiguration?: QuickSightAnalysisSankeyDiagramChartConfiguration;
  /**
   * The list of custom actions that are configured for a visual.
   *
   * _Required_: No
   *
   * _Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<QuickSightAnalysisVisualCustomAction>;
  /**
   * The title that is displayed on the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: QuickSightAnalysisVisualTitleLabelOptions;
}

/**
 * The measure (metric) type field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-measurefield.html}
 **/
export interface QuickSightAnalysisMeasureField {
  /**
   * The measure type field with date type columns.
   *
   * _Required_: No
   *
   * _Type_: [DateMeasureField](aws-properties-quicksight-analysis-datemeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateMeasureField?: QuickSightAnalysisDateMeasureField;
  /**
   * The measure type field with numerical type columns.
   *
   * _Required_: No
   *
   * _Type_: [NumericalMeasureField](aws-properties-quicksight-analysis-numericalmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericalMeasureField?: QuickSightAnalysisNumericalMeasureField;
  /**
   * The measure type field with categorical type columns.
   *
   * _Required_: No
   *
   * _Type_: [CategoricalMeasureField](aws-properties-quicksight-analysis-categoricalmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoricalMeasureField?: QuickSightAnalysisCategoricalMeasureField;
  /**
   * The calculated measure field only used in pivot tables.
   *
   * _Required_: No
   *
   * _Type_: [CalculatedMeasureField](aws-properties-quicksight-analysis-calculatedmeasurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CalculatedMeasureField?: QuickSightAnalysisCalculatedMeasureField;
}

/**
 * The top movers and bottom movers computation setup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-topbottommoverscomputation.html}
 **/
export interface QuickSightAnalysisTopBottomMoversComputation {
  /**
   * The computation type. Choose from the following options:
   */
  Type: Value<string>;
  /**
   * The category field that is used in a computation.
   *
   * _Required_: Yes
   *
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category: QuickSightAnalysisDimensionField;
  /**
   * The value field that is used in a computation.
   *
   * _Required_: No
   *
   * _Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: QuickSightAnalysisMeasureField;
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
   * _Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: QuickSightAnalysisDimensionField;
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
 * The configuration of adding parameters in action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-setparametervalueconfiguration.html}
 **/
export interface QuickSightAnalysisSetParameterValueConfiguration {
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
   * _Type_: [DestinationParameterValueConfiguration](aws-properties-quicksight-analysis-destinationparametervalueconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: QuickSightAnalysisDestinationParameterValueConfiguration;
}

/**
 * The configuration of a `RadarChartVisual`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-radarchartconfiguration.html}
 **/
export interface QuickSightAnalysisRadarChartConfiguration {
  /**
   * The sort configuration of a `RadarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartSortConfiguration](aws-properties-quicksight-analysis-radarchartsortconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SortConfiguration?: QuickSightAnalysisRadarChartSortConfiguration;
  /**
   * The legend display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Legend?: QuickSightAnalysisLegendOptions;
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
   * _Type_: [RadarChartSeriesSettings](aws-properties-quicksight-analysis-radarchartseriessettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseSeriesSettings?: QuickSightAnalysisRadarChartSeriesSettings;
  /**
   * The color label options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The category label options of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryLabelOptions?: QuickSightAnalysisChartAxisLabelOptions;
  /**
   * The palette (chart color) display setup of the visual.
   *
   * _Required_: No
   *
   * _Type_: [VisualPalette](aws-properties-quicksight-analysis-visualpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisualPalette?: QuickSightAnalysisVisualPalette;
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
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CategoryAxis?: QuickSightAnalysisAxisDisplayOptions;
  /**
   * The field well configuration of a `RadarChartVisual`.
   *
   * _Required_: No
   *
   * _Type_: [RadarChartFieldWells](aws-properties-quicksight-analysis-radarchartfieldwells.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldWells?: QuickSightAnalysisRadarChartFieldWells;
  /**
   * The color axis of a radar chart.
   *
   * _Required_: No
   *
   * _Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorAxis?: QuickSightAnalysisAxisDisplayOptions;
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
 * The unaggregated field wells of a scatter plot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-scatterplotunaggregatedfieldwells.html}
 **/
export interface QuickSightAnalysisScatterPlotUnaggregatedFieldWells {
  /**
   * The size field well of a scatter plot.
   *
   * _Required_: No
   *
   * _Type_: List of [MeasureField](aws-properties-quicksight-analysis-measurefield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: List<QuickSightAnalysisMeasureField>;
  /**
   * The x-axis field well of a scatter plot.
   *
   * The x-axis is a dimension field and cannot be aggregated.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxis?: List<QuickSightAnalysisDimensionField>;
  /**
   * The y-axis field well of a scatter plot.
   *
   * The y-axis is a dimension field and cannot be aggregated.
   *
   * _Required_: No
   *
   * _Type_: List of [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxis?: List<QuickSightAnalysisDimensionField>;
}

/**
 * Formatting configuration for string fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-stringformatconfiguration.html}
 **/
export interface QuickSightAnalysisStringFormatConfiguration {
  /**
   * The formatting configuration for numeric strings.
   *
   * _Required_: No
   *
   * _Type_: [NumericFormatConfiguration](aws-properties-quicksight-analysis-numericformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumericFormatConfiguration?: QuickSightAnalysisNumericFormatConfiguration;
  /**
   * The options that determine the null value format configuration.
   *
   * _Required_: No
   *
   * _Type_: [NullValueFormatConfiguration](aws-properties-quicksight-analysis-nullvalueformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullValueFormatConfiguration?: QuickSightAnalysisNullValueFormatConfiguration;
}

/**
 * The paginated report options for a pivot table visual.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-pivottablepaginatedreportoptions.html}
 **/
export interface QuickSightAnalysisPivotTablePaginatedReportOptions {
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
 * The background style configuration of a free-form layout element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-analysis-freeformlayoutelementborderstyle.html}
 **/
export interface QuickSightAnalysisFreeFormLayoutElementBorderStyle {
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
export interface QuickSightAnalysisProperties {
  /**
   * Status associated with the analysis.
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
   * The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values.
   *
   * _Required_: No
   *
   * _Type_: [Parameters](aws-properties-quicksight-analysis-parameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: QuickSightAnalysisParameters;
  /**
   * A source entity to use for the analysis that you're creating. This metadata structure contains details that describe a source template and one or more datasets.
   *
   * Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisSourceEntity](aws-properties-quicksight-analysis-analysissourceentity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceEntity?: QuickSightAnalysisAnalysisSourceEntity;
  /**
   * The ARN for the theme to apply to the analysis that you're creating. To see the theme in the Amazon QuickSight console, make sure that you have access to it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThemeArn?: Value<string>;
  /**
   * The ID for the analysis that you're creating. This ID displays in the URL of the analysis.
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
  AnalysisId: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisDefinition](aws-properties-quicksight-analysis-analysisdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition?: QuickSightAnalysisAnalysisDefinition;
  /**
   * The ID of the AWS account where you are creating an analysis.
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
   * A structure that describes the principals and the resource-level permissions on an analysis. You can use the `Permissions` structure to grant permissions by providing a list of AWS Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN).
   *
   * To specify no permissions, omit `Permissions`.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourcePermission](aws-properties-quicksight-analysis-resourcepermission.md)
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<QuickSightAnalysisResourcePermission>;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis.
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
   * A descriptive name for the analysis that you're creating. This name displays for the analysis in the Amazon QuickSight console.
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
 * Creates an analysis in Amazon QuickSight.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-analysis.html}
 */
export interface QuickSightAnalysisResource {
  Type: 'AWS::QuickSight::Analysis';
  Properties: QuickSightAnalysisProperties;
}
