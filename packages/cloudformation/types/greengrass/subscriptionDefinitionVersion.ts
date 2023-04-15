/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Subscriptions define how MQTT messages can be exchanged between devices, functions, and connectors in the group, and with AWS IoT or the local shadow service. A subscription defines a message source, message target, and a topic (or subject) that's used to route messages from the source to the target. A subscription defines the message flow in one direction, from the source to the target. For two-way communication, you must set up two subscriptions, one for each direction.
 *
 * In an AWS CloudFormation template, the `Subscriptions` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html) resource contains a list of `Subscription` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html}
 **/
export interface GreengrassSubscriptionDefinitionVersionSubscription {
  /**
   * The destination of the message. The value can be a thing ARN, the ARN of a Lambda function alias (recommended) or version, a connector ARN, `cloud` (which represents the AWS IoT cloud), or `GGShadowService`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Target: Value<string>;
  /**
   * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * The originator of the message. The value can be a thing ARN, the ARN of a Lambda function alias (recommended) or version, a connector ARN, `cloud` (which represents the AWS IoT cloud), or `GGShadowService`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Source: Value<string>;
  /**
   * The MQTT topic used to route the message.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subject: Value<string>;
}
export interface GreengrassSubscriptionDefinitionVersionProperties {
  /**
   * The ID of the subscription definition associated with this version. This value is a GUID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubscriptionDefinitionId: Value<string>;
  /**
   * The subscriptions in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Subscription](aws-properties-greengrass-subscriptiondefinitionversion-subscription.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subscriptions: List<GreengrassSubscriptionDefinitionVersionSubscription>;
}

/**
 * The `AWS::Greengrass::SubscriptionDefinitionVersion` resource represents a subscription definition version for AWS IoT Greengrass. A subscription definition version contains a list of subscriptions.
 *
 * **Note**
 *
 * To create a subscription definition version, you must specify the ID of the subscription definition that you want to associate with the version. For information about creating a subscription definition, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html).
 *
 * After you create a subscription definition version that contains the subscriptions you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html}
 */
export interface GreengrassSubscriptionDefinitionVersionResource {
  Type: 'AWS::Greengrass::SubscriptionDefinitionVersion';
  Properties: GreengrassSubscriptionDefinitionVersionProperties;
}
