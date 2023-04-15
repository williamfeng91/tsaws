/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Configuration properties of a peer node within a membership.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html}
 **/
export interface ManagedBlockchainNodeNodeConfiguration {
  /**
   * The Availability Zone in which the node exists. Required for Ethereum nodes.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZone: Value<string>;
  /**
   * The Amazon Managed Blockchain instance type for the node.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType: Value<string>;
}
export interface ManagedBlockchainNodeProperties {
  /**
   * The unique identifier of the member to which the node belongs. Applies only to Hyperledger Fabric.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemberId: Value<string>;
  /**
   * The unique identifier of the network for the node.
   *
   * Ethereum public networks have the following `NetworkId`s:
   */
  NetworkId: Value<string>;
  /**
   * Configuration properties of a peer node.
   *
   * _Required_: Yes
   *
   * _Type_: [NodeConfiguration](aws-properties-managedblockchain-node-nodeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeConfiguration: ManagedBlockchainNodeNodeConfiguration;
}

/**
 * Creates a node on the specified blockchain network.
 *
 * Applies to Hyperledger Fabric and Ethereum.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html}
 */
export interface ManagedBlockchainNodeResource {
  Type: 'AWS::ManagedBlockchain::Node';
  Properties: ManagedBlockchainNodeProperties;
}
