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
import { ResourceTag } from '../../shared-types/resource';

/**
 * A subscription definition version contains a list of [subscriptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html).
 *
 * **Note**
 *
 * After you create a subscription definition version that contains the subscriptions you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * In an AWS CloudFormation template, `SubscriptionDefinitionVersion` is the property type of the `InitialVersion` property in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.html}
 **/
export interface GreengrassSubscriptionDefinitionSubscriptionDefinitionVersion {
  /**
   * The subscriptions in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Subscription](aws-properties-greengrass-subscriptiondefinition-subscription.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subscriptions: List<GreengrassSubscriptionDefinitionSubscription>;
}

/**
 * Subscriptions define how MQTT messages can be exchanged between devices, functions, and connectors in the group, and with AWS IoT or the local shadow service. A subscription defines a message source, message target, and a topic (or subject) that's used to route messages from the source to the target. A subscription defines the message flow in one direction, from the source to the target. For two-way communication, you must set up two subscriptions, one for each direction.
 *
 * In an AWS CloudFormation template, the `Subscriptions` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.html) property type contains a list of `Subscription` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html}
 **/
export interface GreengrassSubscriptionDefinitionSubscription {
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
export interface GreengrassSubscriptionDefinitionProperties {
  /**
   * The subscription definition version to include when the subscription definition is created. A subscription definition version contains a list of [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinition-subscription.html) property types.
   *
   * To associate a subscription definition version after the subscription definition is created, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html) resource and specify the ID of this subscription definition.
   *
   * _Required_: No
   *
   * _Type_: [SubscriptionDefinitionVersion](aws-properties-greengrass-subscriptiondefinition-subscriptiondefinitionversion.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialVersion?: GreengrassSubscriptionDefinitionSubscriptionDefinitionVersion;
  /**
   * Application-specific metadata to attach to the subscription definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/latest/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   *
   * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The name of the subscription definition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::Greengrass::SubscriptionDefinition` resource represents a subscription definition for AWS IoT Greengrass. Subscription definitions are used to organize your subscription definition versions.
 *
 * Subscription definitions can reference multiple subscription definition versions. All subscription definition versions must be associated with a subscription definition. Each subscription definition version can contain one or more subscriptions.
 *
 * **Note**
 *
 * When you create a subscription definition, you can optionally include an initial subscription definition version. To associate a subscription definition version later, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html) resource and specify the ID of this subscription definition.
 *
 * After you create the subscription definition version that contains the subscriptions you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinition.html}
 */
export interface GreengrassSubscriptionDefinitionResource {
  Type: 'AWS::Greengrass::SubscriptionDefinition';
  Properties: GreengrassSubscriptionDefinitionProperties;
}
