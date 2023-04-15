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

export interface LocationRouteCalculatorProperties {
  /**
   * The name of the route calculator resource.
   *
   * Requirements:
   */
  CalculatorName: Value<string>;
  /**
   * The optional description for the route calculator resource.
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
   * Specifies the data provider of traffic and road network data.
   *
   * This field is case-sensitive. Enter the valid values as shown. For example, entering `HERE` returns an error.
   *
   * Valid values include:
   */
  DataSource: Value<string>;
}

/**
 * Specifies a route calculator resource in your AWS account.
 *
 * You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.
 *
 * **Note**
 *
 * If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the [AWS service terms](http://aws.amazon.com/service-terms) for more details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-routecalculator.html}
 */
export interface LocationRouteCalculatorResource {
  Type: 'AWS::Location::RouteCalculator';
  Properties: LocationRouteCalculatorProperties;
}
