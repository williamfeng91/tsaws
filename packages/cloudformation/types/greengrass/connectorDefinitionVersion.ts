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
 * Connectors are modules that provide built-in integration with local infrastructure, device protocols, AWS, and other cloud services. For more information, see [Integrate with Services and Protocols Using Greengrass Connectors](https://docs.aws.amazon.com/greengrass/latest/developerguide/connectors.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Connectors` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html) resource contains a list of `Connector` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html}
 **/
export interface GreengrassConnectorDefinitionVersionConnector {
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
   * The parameters or configuration that the connector uses.
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
export interface GreengrassConnectorDefinitionVersionProperties {
  /**
   * The connectors in this version. Only one instance of a given connector can be added to the connector definition version at a time.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Connector](aws-properties-greengrass-connectordefinitionversion-connector.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Connectors: List<GreengrassConnectorDefinitionVersionConnector>;
  /**
   * The ID of the connector definition associated with this version. This value is a GUID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorDefinitionId: Value<string>;
}

/**
 * The `AWS::Greengrass::ConnectorDefinitionVersion` resource represents a connector definition version for AWS IoT Greengrass. A connector definition version contains a list of connectors.
 *
 * **Note**
 *
 * To create a connector definition version, you must specify the ID of the connector definition that you want to associate with the version. For information about creating a connector definition, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html).
 *
 * After you create a connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html}
 */
export interface GreengrassConnectorDefinitionVersionResource {
  Type: 'AWS::Greengrass::ConnectorDefinitionVersion';
  Properties: GreengrassConnectorDefinitionVersionProperties;
}
