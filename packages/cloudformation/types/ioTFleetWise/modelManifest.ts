/**
 * Supported regions:
 * - eu-central-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface IoTFleetWiseModelManifestProperties {
  /**
   * The state of the vehicle model. If the status is `ACTIVE`, the vehicle model can't be edited. If the status is `DRAFT`, you can edit the vehicle model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACTIVE | DRAFT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * A brief description of the vehicle model.
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
   * The ARN of the signal catalog associated with the vehicle model.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SignalCatalogArn: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Nodes?: List<Value<string>>;
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
  /**
   * The name of the vehicle model.
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
 * Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators).
 *
 * For more information, see [Vehicle models](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html) in the _AWS IoT FleetWise Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html}
 */
export interface IoTFleetWiseModelManifestResource {
  Type: 'AWS::IoTFleetWise::ModelManifest';
  Properties: IoTFleetWiseModelManifestProperties;
}
