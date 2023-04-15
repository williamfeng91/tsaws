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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model. You can use composite asset models to define alarms on this asset model.
 *
 * If you use the `AssetModelCompositeModel` property to create an alarm, you must use the following information to define three asset model properties:
 *
 * At the bottom of this page, we provide a YAML example that you can modify to create an alarm.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html}
 **/
export interface IoTSiteWiseAssetModelAssetModelCompositeModel {
  /**
   * The type of the composite model. For alarm composite models, this type is `AWS/ALARM`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The description of the composite model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The asset property definitions for this composite model.
   *
   * _Required_: No
   *
   * _Type_: List of [AssetModelProperty](aws-properties-iotsitewise-assetmodel-assetmodelproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CompositeModelProperties?: List<IoTSiteWiseAssetModelAssetModelProperty>;
  /**
   * The name of the composite model.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metricwindow.html}
 **/
export interface IoTSiteWiseAssetModelMetricWindow {
  /**
   * The tumbling time interval window.
   *
   * _Required_: No
   *
   * _Type_: [TumblingWindow](aws-properties-iotsitewise-assetmodel-tumblingwindow.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tumbling?: IoTSiteWiseAssetModelTumblingWindow;
}

/**
 * Contains an asset attribute property. For more information, see [Defining data properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes) in the _AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-attribute.html}
 **/
export interface IoTSiteWiseAssetModelAttribute {
  /**
   * The default value of the asset model property attribute. All assets that you create from the asset model contain this attribute value. You can update an attribute's value after you create an asset. For more information, see [Updating attribute values](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: Value<string>;
}

/**
 * Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. Transforms can only input properties that are `INTEGER`, `DOUBLE`, or `BOOLEAN` type. Booleans convert to `0 `(`FALSE`) and `1` (`TRUE`)..
 *
 * For more information, see [Defining data properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms) in the _AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-transform.html}
 **/
export interface IoTSiteWiseAssetModelTransform {
  /**
   * The list of variables used in the expression.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ExpressionVariable](aws-properties-iotsitewise-assetmodel-expressionvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variables: List<IoTSiteWiseAssetModelExpressionVariable>;
  /**
   * The mathematical expression that defines the transformation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
   *
   * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
}

/**
 * Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).
 *
 * The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a _root_ metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of `DOUBLE` and consume properties with data types of `INTEGER` or `DOUBLE`.
 *
 * For more information, see [Defining data properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics) in the _AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-metric.html}
 **/
export interface IoTSiteWiseAssetModelMetric {
  /**
   * The list of variables used in the expression.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ExpressionVariable](aws-properties-iotsitewise-assetmodel-expressionvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variables: List<IoTSiteWiseAssetModelExpressionVariable>;
  /**
   * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression. AWS IoT SiteWise computes one data point per `window`.
   *
   * _Required_: Yes
   *
   * _Type_: [MetricWindow](aws-properties-iotsitewise-assetmodel-metricwindow.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Window: IoTSiteWiseAssetModelMetricWindow;
  /**
   * The mathematical expression that defines the metric aggregation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
   *
   * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
}

/**
 * Contains information about an asset model property.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelproperty.html}
 **/
export interface IoTSiteWiseAssetModelAssetModelProperty {
  /**
   * Contains a property type, which can be one of `Attribute`, `Measurement`, `Metric`, or `Transform`.
   *
   * _Required_: Yes
   *
   * _Type_: [PropertyType](aws-properties-iotsitewise-assetmodel-propertytype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: IoTSiteWiseAssetModelPropertyType;
  /**
   * The `LogicalID` of the asset model property.
   *
   * The maximum length is 256 characters, with the pattern `[^u0000-u001Fu007F]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogicalId: Value<string>;
  /**
   * The data type of the structure for this property. This parameter exists on properties that have the `STRUCT` data type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTypeSpec?: Value<string>;
  /**
   * The data type of the asset model property. The value can be `STRING`, `INTEGER`, `DOUBLE`, `BOOLEAN`, or `STRUCT`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType: Value<string>;
  /**
   * The unit of the asset model property, such as `Newtons` or `RPM`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
  /**
   * The name of the asset model property.
   *
   * The maximum length is 256 characters with the pattern `[^u0000-u001Fu007F]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You can use this window in metrics to aggregate data from properties and other assets.
 *
 * You can use `m`, `h`, `d`, and `w` when you specify an interval or offset. Note that `m` represents minutes, `h` represents hours, `d` represents days, and `w` represents weeks. You can also use `s` to represent seconds in `offset`.
 *
 * The `interval` and `offset` parameters support the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601). For example, `PT5S` represents 5 seconds, `PT5M` represents 5 minutes, and `PT5H` represents 5 hours.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-tumblingwindow.html}
 **/
export interface IoTSiteWiseAssetModelTumblingWindow {
  /**
   * The time interval for the tumbling window. The interval time must be between 1 minute and 1 week.
   *
   * AWS IoT SiteWise computes the `1w` interval the end of Sunday at midnight each week (UTC), the `1d` interval at the end of each day at midnight (UTC), the `1h` interval at the end of each hour, and so on.
   *
   * When AWS IoT SiteWise aggregates data points for metric computations, the start of each interval is exclusive and the end of each interval is inclusive. AWS IoT SiteWise places the computed data point at the end of the interval.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval: Value<string>;
  /**
   * The offset for the tumbling window. The `offset` parameter accepts the following:
   */
  Offset?: Value<string>;
}

/**
 * Contains expression variable information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-expressionvariable.html}
 **/
export interface IoTSiteWiseAssetModelExpressionVariable {
  /**
   * The variable that identifies an asset property from which to use values.
   *
   * _Required_: Yes
   *
   * _Type_: [VariableValue](aws-properties-iotsitewise-assetmodel-variablevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: IoTSiteWiseAssetModelVariableValue;
  /**
   * The friendly name of the variable to be used in the expression.
   *
   * The maximum length is 64 characters with the pattern `^[a-z][a-z0-9_]*$`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Identifies a property value used in an expression.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-variablevalue.html}
 **/
export interface IoTSiteWiseAssetModelVariableValue {
  /**
   * The `LogicalID` of the property to use as the variable.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyLogicalId: Value<string>;
  /**
   * The `LogicalID` of the hierarchy to query for the `PropertyLogicalID`.
   *
   * You use a `hierarchyLogicalID` instead of a model ID because you can have several hierarchies using the same model and therefore the same property. For example, you might have separately grouped assets that come from the same asset model. For more information, see [Defining relationships between assets](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HierarchyLogicalId?: Value<string>;
}

/**
 * Describes an asset hierarchy that contains a hierarchy's name, `LogicalID`, and child asset model ID that specifies the type of asset that can be in this hierarchy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html}
 **/
export interface IoTSiteWiseAssetModelAssetModelHierarchy {
  /**
   * The `LogicalID` of the asset model hierarchy. This ID is a `hierarchyLogicalId`.
   *
   * The maximum length is 256 characters, with the pattern `[^u0000-u001Fu007F]+`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogicalId: Value<string>;
  /**
   * The Id of the asset model.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChildAssetModelId: Value<string>;
  /**
   * The name of the asset model hierarchy.
   *
   * The maximum length is 256 characters with the pattern `[^u0000-u001Fu007F]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Contains a property type, which can be one of `Attribute`, `Measurement`, `Metric`, or `Transform`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-assetmodel-propertytype.html}
 **/
export interface IoTSiteWiseAssetModelPropertyType {
  /**
   * The type of property type, which can be one of `Attribute`, `Measurement`, `Metric`, or `Transform`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeName: Value<string>;
  /**
   * Specifies an asset attribute property. An attribute generally contains static information, such as the serial number of an [industrial IoT](https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications) wind turbine.
   *
   * This is required if the `TypeName` is `Attribute` and has a `DefaultValue`.
   *
   * _Required_: No
   *
   * _Type_: [Attribute](aws-properties-iotsitewise-assetmodel-attribute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attribute?: IoTSiteWiseAssetModelAttribute;
  /**
   * Specifies an asset metric property. A metric contains a mathematical expression that uses aggregate functions to process all input data points over a time interval and output a single data point, such as to calculate the average hourly temperature.
   *
   * This is required if the `TypeName` is `Metric`.
   *
   * _Required_: No
   *
   * _Type_: [Metric](aws-properties-iotsitewise-assetmodel-metric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metric?: IoTSiteWiseAssetModelMetric;
  /**
   * Specifies an asset transform property. A transform contains a mathematical expression that maps a property's data points from one form to another, such as a unit conversion from Celsius to Fahrenheit.
   *
   * This is required if the `TypeName` is `Transform`.
   *
   * _Required_: No
   *
   * _Type_: [Transform](aws-properties-iotsitewise-assetmodel-transform.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Transform?: IoTSiteWiseAssetModelTransform;
}
export interface IoTSiteWiseAssetModelProperties {
  /**
   * A description for the asset model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetModelDescription?: Value<string>;
  /**
   * The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. You can use composite asset models to define alarms on this asset model.
   *
   * _Required_: No
   *
   * _Type_: List of [AssetModelCompositeModel](aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetModelCompositeModels?: List<IoTSiteWiseAssetModelAssetModelCompositeModel>;
  /**
   * A unique, friendly name for the asset model.
   *
   * The maximum length is 256 characters with the pattern `[^u0000-u001Fu007F]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetModelName: Value<string>;
  /**
   * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see [Defining relationships between assets](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the _AWS IoT SiteWiseUser Guide_.
   *
   * You can specify up to 10 hierarchies per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [AssetModelHierarchy](aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetModelHierarchies?: List<IoTSiteWiseAssetModelAssetModelHierarchy>;
  /**
   * The property definitions of the asset model. For more information, see [Defining data properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html) in the _AWS IoT SiteWise User Guide_.
   *
   * You can specify up to 200 properties per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [AssetModelProperty](aws-properties-iotsitewise-assetmodel-assetmodelproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetModelProperties?: List<IoTSiteWiseAssetModelAssetModelProperty>;
  /**
   * A list of key-value pairs that contain metadata for the asset. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see [Defining asset models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html) in the _AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html}
 */
export interface IoTSiteWiseAssetModelResource {
  Type: 'AWS::IoTSiteWise::AssetModel';
  Properties: IoTSiteWiseAssetModelProperties;
}
