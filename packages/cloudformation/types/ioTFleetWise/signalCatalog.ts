/**
 * Supported regions:
 * - eu-central-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A general abstraction of a signal. A node can be specified as an actuator, attribute, branch, or sensor.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html}
 **/
export interface IoTFleetWiseSignalCatalogNode {
  /**
   * Information about a node specified as an attribute.
   *
   * An attribute represents static information about a vehicle.
   *
   * _Required_: No
   *
   * _Type_: [Attribute](aws-properties-iotfleetwise-signalcatalog-attribute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attribute?: IoTFleetWiseSignalCatalogAttribute;
  /**
   * Information about a node specified as a branch.
   *
   * A group of signals that are defined in a hierarchical structure.
   *
   * _Required_: No
   *
   * _Type_: [Branch](aws-properties-iotfleetwise-signalcatalog-branch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Branch?: IoTFleetWiseSignalCatalogBranch;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Sensor](aws-properties-iotfleetwise-signalcatalog-sensor.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sensor?: IoTFleetWiseSignalCatalogSensor;
  /**
   * Information about a node specified as an actuator.
   *
   * An actuator is a digital representation of a vehicle device.
   *
   * _Required_: No
   *
   * _Type_: [Actuator](aws-properties-iotfleetwise-signalcatalog-actuator.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actuator?: IoTFleetWiseSignalCatalogActuator;
}

/**
 * A signal that represents static information about the vehicle, such as engine type or manufacturing date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html}
 **/
export interface IoTFleetWiseSignalCatalogAttribute {
  /**
   * The default value of the attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: Value<string>;
  /**
   * A brief description of the attribute.
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
   * A list of possible values an attribute can be assigned.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedValues?: List<Value<string>>;
  /**
   * The specified possible minimum value of the attribute.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The specified possible maximum value of the attribute.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The fully qualified name of the attribute. For example, the fully qualified name of an attribute might be `Vehicle.Body.Engine.Type`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FullyQualifiedName: Value<string>;
  /**
   * A specified value for the attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssignedValue?: Value<string>;
  /**
   * The specified data type of the attribute.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BOOLEAN | BOOLEAN_ARRAY | DOUBLE | DOUBLE_ARRAY | FLOAT | FLOAT_ARRAY | INT16 | INT16_ARRAY | INT32 | INT32_ARRAY | INT64 | INT64_ARRAY | INT8 | INT8_ARRAY | STRING | STRING_ARRAY | UINT16 | UINT16_ARRAY | UINT32 | UINT32_ARRAY | UINT64 | UINT64_ARRAY | UINT8 | UINT8_ARRAY | UNIX_TIMESTAMP | UNIX_TIMESTAMP_ARRAY | UNKNOWN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType: Value<string>;
  /**
   * The scientific unit for the attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
}

/**
 * A signal that represents a vehicle device such as the engine, heater, and door locks. Data from an actuator reports the state of a certain vehicle device.
 *
 * **Note**
 *
 * Updating actuator data can change the state of a device. For example, you can turn on or off the heater by updating its actuator data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html}
 **/
export interface IoTFleetWiseSignalCatalogActuator {
  /**
   * A brief description of the actuator.
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
   * A list of possible values an actuator can take.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedValues?: List<Value<string>>;
  /**
   * The specified possible minimum value of an actuator.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The specified possible maximum value of an actuator.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The fully qualified name of the actuator. For example, the fully qualified name of an actuator might be `Vehicle.Front.Left.Door.Lock`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FullyQualifiedName: Value<string>;
  /**
   * A specified value for the actuator.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssignedValue?: Value<string>;
  /**
   * The specified data type of the actuator.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BOOLEAN | BOOLEAN_ARRAY | DOUBLE | DOUBLE_ARRAY | FLOAT | FLOAT_ARRAY | INT16 | INT16_ARRAY | INT32 | INT32_ARRAY | INT64 | INT64_ARRAY | INT8 | INT8_ARRAY | STRING | STRING_ARRAY | UINT16 | UINT16_ARRAY | UINT32 | UINT32_ARRAY | UINT64 | UINT64_ARRAY | UINT8 | UINT8_ARRAY | UNIX_TIMESTAMP | UNIX_TIMESTAMP_ARRAY | UNKNOWN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType: Value<string>;
  /**
   * The scientific unit for the actuator.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
}

/**
 * Information about the number of nodes and node types in a vehicle network.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodecounts.html}
 **/
export interface IoTFleetWiseSignalCatalogNodeCounts {
  /**
   * The total number of nodes in a vehicle network that represent actuators.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalActuators?: Value<number>;
  /**
   * The total number of nodes in a vehicle network.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalNodes?: Value<number>;
  /**
   * The total number of nodes in a vehicle network that represent attributes.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalAttributes?: Value<number>;
  /**
   * The total number of nodes in a vehicle network that represent branches.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalBranches?: Value<number>;
  /**
   * The total number of nodes in a vehicle network that represent sensors.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TotalSensors?: Value<number>;
}

/**
 * A group of signals that are defined in a hierarchical structure.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-branch.html}
 **/
export interface IoTFleetWiseSignalCatalogBranch {
  /**
   * A brief description of the branch.
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
   * The fully qualified name of the branch. For example, the fully qualified name of a branch might be `Vehicle.Body.Engine`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FullyQualifiedName: Value<string>;
}

/**
 * An input component that reports the environmental condition of a vehicle.
 *
 * **Note**
 *
 * You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html}
 **/
export interface IoTFleetWiseSignalCatalogSensor {
  /**
   * A brief description of a sensor.
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
   * A list of possible values a sensor can take.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedValues?: List<Value<string>>;
  /**
   * The specified possible minimum value of the sensor.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Min?: Value<number>;
  /**
   * The specified possible maximum value of the sensor.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Max?: Value<number>;
  /**
   * The fully qualified name of the sensor. For example, the fully qualified name of a sensor might be `Vehicle.Body.Engine.Battery`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FullyQualifiedName: Value<string>;
  /**
   * The specified data type of the sensor.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BOOLEAN | BOOLEAN_ARRAY | DOUBLE | DOUBLE_ARRAY | FLOAT | FLOAT_ARRAY | INT16 | INT16_ARRAY | INT32 | INT32_ARRAY | INT64 | INT64_ARRAY | INT8 | INT8_ARRAY | STRING | STRING_ARRAY | UINT16 | UINT16_ARRAY | UINT32 | UINT32_ARRAY | UINT64 | UINT64_ARRAY | UINT8 | UINT8_ARRAY | UNIX_TIMESTAMP | UNIX_TIMESTAMP_ARRAY | UNKNOWN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType: Value<string>;
  /**
   * The scientific unit of measurement for data collected by the sensor.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
}
export interface IoTFleetWiseSignalCatalogProperties {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [NodeCounts](aws-properties-iotfleetwise-signalcatalog-nodecounts.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeCounts?: IoTFleetWiseSignalCatalogNodeCounts;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [Node](aws-properties-iotfleetwise-signalcatalog-node.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Nodes?: List<IoTFleetWiseSignalCatalogNode>;
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
   * The name of the signal catalog.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates a collection of standardized signals that can be reused to create vehicle models.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html}
 */
export interface IoTFleetWiseSignalCatalogResource {
  Type: 'AWS::IoTFleetWise::SignalCatalog';
  Properties: IoTFleetWiseSignalCatalogProperties;
}
