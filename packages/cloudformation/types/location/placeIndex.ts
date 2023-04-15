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
 * Specifies the data storage option requesting Places.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-placeindex-datasourceconfiguration.html}
 **/
export interface LocationPlaceIndexDataSourceConfiguration {
  /**
   * Specifies how the results of an operation will be stored by the caller.
   *
   * Valid values include:
   */
  IntendedUse?: Value<string>;
}
export interface LocationPlaceIndexProperties {
  /**
   * The name of the place index resource.
   *
   * Requirements:
   */
  IndexName: Value<string>;
  /**
   * The optional description for the place index resource.
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
  /**
   * Specifies the data storage option requesting Places.
   *
   * _Required_: No
   *
   * _Type_: [DataSourceConfiguration](aws-properties-location-placeindex-datasourceconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataSourceConfiguration?: LocationPlaceIndexDataSourceConfiguration;
  /**
   * Specifies the geospatial data provider for the new place index.
   *
   * This field is case-sensitive. Enter the valid values as shown. For example, entering `HERE` returns an error.
   *
   * Valid values include:
   */
  DataSource: Value<string>;
}

/**
 * Specifies a place index resource in your AWS account. Use a place index resource to geocode addresses and other text queries by using the `SearchPlaceIndexForText` operation, and reverse geocode coordinates by using the `SearchPlaceIndexForPosition` operation, and enable autosuggestions by using the `SearchPlaceIndexForSuggestions` operation.
 *
 * **Note**
 *
 * If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the [AWS service terms](http://aws.amazon.com/service-terms) for more details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-placeindex.html}
 */
export interface LocationPlaceIndexResource {
  Type: 'AWS::Location::PlaceIndex';
  Properties: LocationPlaceIndexProperties;
}
