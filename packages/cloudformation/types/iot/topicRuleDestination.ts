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
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The properties of a virtual private cloud (VPC) destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-vpcdestinationproperties.html}
 **/
export interface IoTTopicRuleDestinationVpcDestinationProperties {
  /**
   * The security groups of the VPC destination.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The ID of the VPC.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId?: Value<string>;
  /**
   * The subnet IDs of the VPC destination.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn?: Value<string>;
}

/**
 * HTTP URL destination properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicruledestination-httpurldestinationsummary.html}
 **/
export interface IoTTopicRuleDestinationHttpUrlDestinationSummary {
  /**
   * The URL used to confirm the HTTP topic rule destination URL.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfirmationUrl?: Value<string>;
}
export interface IoTTopicRuleDestinationProperties {
  /**
   * IN_PROGRESS
   *
   * A topic rule destination was created but has not been confirmed. You can set status to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * ENABLED
   *
   * Confirmation was completed, and traffic to this destination is allowed. You can set status to `DISABLED` by calling `UpdateTopicRuleDestination`.
   *
   * DISABLED
   *
   * Confirmation was completed, and traffic to this destination is not allowed. You can set status to `ENABLED` by calling `UpdateTopicRuleDestination`.
   *
   * ERROR
   *
   * Confirmation could not be completed; for example, if the confirmation timed out. You can call `GetTopicRuleDestination` for details about the error. You can set status to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Properties of the HTTP URL.
   *
   * _Required_: No
   *
   * _Type_: [HttpUrlDestinationSummary](aws-properties-iot-topicruledestination-httpurldestinationsummary.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HttpUrlProperties?: IoTTopicRuleDestinationHttpUrlDestinationSummary;
  /**
   * Properties of the virtual private cloud (VPC) connection.
   *
   * _Required_: No
   *
   * _Type_: [VpcDestinationProperties](aws-properties-iot-topicruledestination-vpcdestinationproperties.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcProperties?: IoTTopicRuleDestinationVpcDestinationProperties;
}

/**
 * A topic rule destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html}
 */
export interface IoTTopicRuleDestinationResource {
  Type: 'AWS::IoT::TopicRuleDestination';
  Properties: IoTTopicRuleDestinationProperties;
}
