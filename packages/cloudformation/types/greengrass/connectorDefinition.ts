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
 * A connector definition version contains a list of connectors.
 *
 * **Note**
 *
 * After you create a connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * In an AWS CloudFormation template, `ConnectorDefinitionVersion` is the property type of the `InitialVersion` property in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html}
 **/
export interface GreengrassConnectorDefinitionConnectorDefinitionVersion {
  /**
   * The connectors in this version. Only one instance of a given connector can be added to a connector definition version at a time.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Connector](aws-properties-greengrass-connectordefinition-connector.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Connectors: List<GreengrassConnectorDefinitionConnector>;
}

/**
 * Connectors are modules that provide built-in integration with local infrastructure, device protocols, AWS, and other cloud services. For more information, see [Integrate with Services and Protocols Using Greengrass Connectors](https://docs.aws.amazon.com/greengrass/latest/developerguide/connectors.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Connectors` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html) property type contains a list of `Connector` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html}
 **/
export interface GreengrassConnectorDefinitionConnector {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * For more information about connectors provided by AWS, see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/latest/developerguide/connectors-list.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorArn: Value<string>;
  /**
   * The parameters or configuration used by the connector.
   *
   * For more information about connectors provided by AWS, see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/latest/developerguide/connectors-list.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Parameters?: { [key: string]: any };
  /**
   * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
}
export interface GreengrassConnectorDefinitionProperties {
  /**
   * The connector definition version to include when the connector definition is created. A connector definition version contains a list of [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html) property types.
   *
   * To associate a connector definition version after the connector definition is created, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html) resource and specify the ID of this connector definition.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorDefinitionVersion](aws-properties-greengrass-connectordefinition-connectordefinitionversion.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialVersion?: GreengrassConnectorDefinitionConnectorDefinitionVersion;
  /**
   * Application-specific metadata to attach to the connector definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/latest/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
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
   * The name of the connector definition.
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
 * The `AWS::Greengrass::ConnectorDefinition` resource represents a connector definition for AWS IoT Greengrass. Connector definitions are used to organize your connector definition versions.
 *
 * Connector definitions can reference multiple connector definition versions. All connector definition versions must be associated with a connector definition. Each connector definition version can contain one or more connectors.
 *
 * **Note**
 *
 * When you create a connector definition, you can optionally include an initial connector definition version. To associate a connector definition version later, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html) resource and specify the ID of this connector definition.
 *
 * After you create the connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html}
 */
export interface GreengrassConnectorDefinitionResource {
  Type: 'AWS::Greengrass::ConnectorDefinition';
  Properties: GreengrassConnectorDefinitionProperties;
}
