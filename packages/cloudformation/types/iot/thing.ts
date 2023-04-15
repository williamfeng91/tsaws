/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The AttributePayload property specifies up to three attributes for an AWS IoT as key-value pairs. AttributePayload is a property of the [AWS::IoT::Thing](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thing-attributepayload.html}
 **/
export interface IoTThingAttributePayload {
  /**
   * A JSON string containing up to three key-value pair in JSON format. For example:
   *
   * `{"attributes":{"string1":"string2"}}`
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: { [key: string]: Value<string> };
}
export interface IoTThingProperties {
  /**
   * A string that contains up to three key value pairs. Maximum length of 800. Duplicates not allowed.
   *
   * _Required_: No
   *
   * _Type_: [AttributePayload](aws-properties-iot-thing-attributepayload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributePayload?: IoTThingAttributePayload;
  /**
   * The name of the thing to update.
   *
   * You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThingName?: Value<string>;
}

/**
 * Use the `AWS::IoT::Thing` resource to declare an AWS IoT thing.
 *
 * For information about working with things, see [How AWS IoT Works](https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html) and [Device Registry for AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html) in the _AWS IoT Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html}
 */
export interface IoTThingResource {
  Type: 'AWS::IoT::Thing';
  Properties: IoTThingProperties;
}
