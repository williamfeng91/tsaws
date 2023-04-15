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
 * - eu-west-3 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface IoTDimensionProperties {
  /**
   * Specifies the type of dimension. Supported types: `TOPIC_FILTER.`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * Specifies the value or list of values for the dimension. For `TOPIC_FILTER` dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValues: List<Value<string>>;
  /**
   * Metadata that can be used to manage the dimension.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A unique identifier for the dimension.
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
 * Use the `AWS::IoT::Dimension` to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a `TOPIC_FILTER` dimension, you can narrow down the scope of the metric to only MQTT topics where the name matches the pattern specified in the dimension. For API reference, see [CreateDimension](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html) and for general information, see [Scoping metrics in security profiles using dimensions](https://docs.aws.amazon.com/iot/latest/developerguide/scoping-security-behavior.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html}
 */
export interface IoTDimensionResource {
  Type: 'AWS::IoT::Dimension';
  Properties: IoTDimensionProperties;
}
