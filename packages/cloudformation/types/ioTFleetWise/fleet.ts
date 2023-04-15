/**
 * Supported regions:
 * - eu-central-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface IoTFleetWiseFleetProperties {
  /**
   * A brief description of the fleet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `[^u0000-u001Fu007F]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The unique ID of the fleet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[a-zA-Z0-9:_-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * The ARN of the signal catalog associated with the fleet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SignalCatalogArn: Value<string>;
  /**
   * Property description not available.
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
 * Creates a fleet that represents a group of vehicles.
 *
 * **Note**
 *
 * You must create both a signal catalog and vehicles before you can create a fleet.
 *
 * For more information, see [Fleets](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleets.html) in the _AWS IoT FleetWise Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html}
 */
export interface IoTFleetWiseFleetResource {
  Type: 'AWS::IoTFleetWise::Fleet';
  Properties: IoTFleetWiseFleetProperties;
}
