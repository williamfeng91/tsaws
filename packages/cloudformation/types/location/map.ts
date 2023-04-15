/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Specifies the map tile style selected from an available provider.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-map-mapconfiguration.html}
 **/
export interface LocationMapMapConfiguration {
  /**
   * Specifies the map style selected from an available data provider.
   *
   * Valid [Esri map styles](https://docs.aws.amazon.com/location/latest/developerguide/esri.html):
   */
  Style: Value<string>;
}
export interface LocationMapProperties {
  /**
   * The name for the map resource.
   *
   * Requirements:
   */
  MapName: Value<string>;
  /**
   * An optional description for the map resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * Specifies the `MapConfiguration`, including the map style, for the map resource that you create. The map style defines the look of maps and the data provider for your map resource.
   *
   * _Required_: Yes
   *
   * _Type_: [MapConfiguration](aws-properties-location-map-mapconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Configuration: LocationMapMapConfiguration;
  /**
   * No longer used. If included, the only allowed value is `RequestBasedUsage`.
   *
   * _Allowed Values_: `RequestBasedUsage`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PricingPlan?: Value<string>;
}

/**
 * The `AWS::Location::Map` resource specifies a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html}
 */
export interface LocationMapResource {
  Type: 'AWS::Location::Map';
  Properties: LocationMapProperties;
}
