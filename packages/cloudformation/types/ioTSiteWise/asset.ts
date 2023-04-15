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
 * Contains asset property information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assetproperty.html}
 **/
export interface IoTSiteWiseAssetAssetProperty {
  /**
   * The `LogicalID` of the asset property.
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
   * The property alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the _AWS IoT SiteWise User Guide_.
   *
   * The property alias must have 1-1000 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alias?: Value<string>;
  /**
   * The unit (such as `Newtons` or `RPM`) of the asset property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
  /**
   * The MQTT notification state (`ENABLED` or `DISABLED`) for this asset property. When the notification state is `ENABLED`, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see [Interacting with other services](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html) in the _AWS IoT SiteWise User Guide_.
   *
   * If you omit this parameter, the notification state is set to `DISABLED`.
   *
   * You must use all caps for the NotificationState parameter. If you use lower case letters, you will receive a schema validation error.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationState?: Value<string>;
}

/**
 * Describes an asset hierarchy that contains a `childAssetId` and `hierarchyLogicalId`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-asset-assethierarchy.html}
 **/
export interface IoTSiteWiseAssetAssetHierarchy {
  /**
   * The `LogicalID` of the hierarchy. This ID is a `hierarchyLogicalId`.
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
   * The Id of the child asset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChildAssetId: Value<string>;
}
export interface IoTSiteWiseAssetProperties {
  /**
   * The ID of the asset model from which to create the asset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetModelId: Value<string>;
  /**
   * A description for the asset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetDescription?: Value<string>;
  /**
   * The list of asset properties for the asset.
   *
   * This object doesn't include properties that you define in composite models. You can find composite model properties in the `assetCompositeModels` object.
   *
   * _Required_: No
   *
   * _Type_: List of [AssetProperty](aws-properties-iotsitewise-asset-assetproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetProperties?: List<IoTSiteWiseAssetAssetProperty>;
  /**
   * A unique, friendly name for the asset.
   *
   * The maximum length is 256 characters with the pattern `[^u0000-u001Fu007F]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetName: Value<string>;
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
  /**
   * A list of asset hierarchies that each contain a `hierarchyLogicalId`. A hierarchy specifies allowed parent/child asset relationships.
   *
   * _Required_: No
   *
   * _Type_: List of [AssetHierarchy](aws-properties-iotsitewise-asset-assethierarchy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetHierarchies?: List<IoTSiteWiseAssetAssetHierarchy>;
}

/**
 * Creates an asset from an existing asset model. For more information, see [Creating assets](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html) in the _AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-asset.html}
 */
export interface IoTSiteWiseAssetResource {
  Type: 'AWS::IoTSiteWise::Asset';
  Properties: IoTSiteWiseAssetProperties;
}
