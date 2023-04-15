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
 * The `ConfigurationId` property type specifies a configuration Id and the revision of a configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html}
 **/
export interface AmazonMQConfigurationAssociationConfigurationId {
  /**
   * The revision number of the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Revision: Value<number>;
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
}
export interface AmazonMQConfigurationAssociationProperties {
  /**
   * The broker to associate with a configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Broker: Value<string>;
  /**
   * The configuration to associate with a broker.
   *
   * _Required_: Yes
   *
   * _Type_: [ConfigurationId](aws-properties-amazonmq-configurationassociation-configurationid.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: AmazonMQConfigurationAssociationConfigurationId;
}

/**
 * Use the AWS CloudFormation `AWS::AmazonMQ::ConfigurationAssociation` resource to associate a configuration with a broker, or return information about the specified ConfigurationAssociation. Only use one per broker, and don't use a configuration on the broker resource if you have associated a configuration with that broker.
 *
 * **Note**
 *
 * Does not apply to RabbitMQ brokers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html}
 */
export interface AmazonMQConfigurationAssociationResource {
  Type: 'AWS::AmazonMQ::ConfigurationAssociation';
  Properties: AmazonMQConfigurationAssociationProperties;
}
