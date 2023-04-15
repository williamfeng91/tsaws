/**
 * Supported regions:
 * - eu-central-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface IoTFleetWiseVehicleProperties {
  /**
   * An option to create a new AWS IoT thing when creating a vehicle, or to validate an existing thing as a vehicle.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CreateIotThing | ValidateIotThingExists`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociationBehavior?: Value<string>;
  /**
   * Static information about a vehicle in a key-value pair. For example: `"engine Type"` : `"v6"`
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: { [key: string]: Value<string> };
  /**
   * The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecoderManifestArn: Value<string>;
  /**
   * The ARN of the vehicle model (model manifest) to create the vehicle from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelManifestArn: Value<string>;
  /**
   * Metadata which can be used to manage the vehicle.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model.
 *
 * **Note**
 *
 * If you have an existing AWS IoT Thing, you can use AWS IoT FleetWise to create a vehicle and collect data from your thing.
 *
 * For more information, see [Create a vehicle (CLI)](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-cli.html) in the _AWS IoT FleetWise Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html}
 */
export interface IoTFleetWiseVehicleResource {
  Type: 'AWS::IoTFleetWise::Vehicle';
  Properties: IoTFleetWiseVehicleProperties;
}
