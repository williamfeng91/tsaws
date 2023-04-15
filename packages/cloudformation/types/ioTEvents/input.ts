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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-attribute.html}
 **/
export interface IoTEventsInputAttribute {
  /**
   * An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to AWS IoT Events (`BatchPutMessage`). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the `condition` expressions used by detectors.
   *
   * Syntax: `<field-name>.<field-name>...`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^((`[w- ]+`)|([w-]+))(.((`[w- ]+`)|([w-]+)))*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonPath: Value<string>;
}

/**
 * The definition of the input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-inputdefinition.html}
 **/
export interface IoTEventsInputInputDefinition {
  /**
   * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Attribute](aws-properties-iotevents-input-attribute.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes: List<IoTEventsInputAttribute>;
}
export interface IoTEventsInputProperties {
  /**
   * The definition of the input.
   *
   * _Required_: Yes
   *
   * _Type_: [InputDefinition](aws-properties-iotevents-input-inputdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputDefinition: IoTEventsInputInputDefinition;
  /**
   * The name of the input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputName?: Value<string>;
  /**
   * A brief description of the input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputDescription?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
 * The AWS::IoTEvents::Input resource creates an input. To monitor your devices and processes, they must have a way to get telemetry data into AWS IoT Events. This is done by sending messages as _inputs_ to AWS IoT Events. For more information, see [ How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the _AWS IoT Events Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html}
 */
export interface IoTEventsInputResource {
  Type: 'AWS::IoTEvents::Input';
  Properties: IoTEventsInputProperties;
}
