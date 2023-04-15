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
 * Contains information about the configuration of the lambda which is being registered as the connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connector-lambdaconnectorprovisioningconfig.html}
 **/
export interface AppFlowConnectorLambdaConnectorProvisioningConfig {
  /**
   * Lambda ARN of the connector being registered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:aws:.*:.*:[0-9]+:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaArn: Value<string>;
}

/**
 * Contains information about the configuration of the connector being registered.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connector-connectorprovisioningconfig.html}
 **/
export interface AppFlowConnectorConnectorProvisioningConfig {
  /**
   * Contains information about the configuration of the lambda which is being registered as the connector.
   *
   * _Required_: No
   *
   * _Type_: [LambdaConnectorProvisioningConfig](aws-properties-appflow-connector-lambdaconnectorprovisioningconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lambda?: AppFlowConnectorLambdaConnectorProvisioningConfig;
}
export interface AppFlowConnectorProperties {
  /**
   * The label used for registering the connector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9][w!@#.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorLabel?: Value<string>;
  /**
   * The provisioning type used to register the connector.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `LAMBDA`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorProvisioningType: Value<string>;
  /**
   * A description about the connector runtime setting.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[sw/!@#+=.-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The configuration required for registering the connector.
   *
   * _Required_: Yes
   *
   * _Type_: [ConnectorProvisioningConfig](aws-properties-appflow-connector-connectorprovisioningconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorProvisioningConfig: AppFlowConnectorConnectorProvisioningConfig;
}

/**
 * Creates a new connector profile associated with your AWS account. There is a soft quota of 100 connector profiles per AWS account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html}
 */
export interface AppFlowConnectorResource {
  Type: 'AWS::AppFlow::Connector';
  Properties: AppFlowConnectorProperties;
}
