/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface ManagedBlockchainAccessorProperties {
  /**
   * The tags assigned to the Accessor.
   *
   * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the _Amazon Managed Blockchain Ethereum Developer Guide_, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the _Amazon Managed Blockchain Hyperledger Fabric Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The type of the accessor.
   *
   * Currently, accessor type is restricted to `BILLING_TOKEN`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BILLING_TOKEN`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessorType: Value<string>;
}

/**
 * Creates a new accessor for use with Managed Blockchain Ethereum nodes. An accessor contains information required for token based access to your Ethereum nodes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html}
 */
export interface ManagedBlockchainAccessorResource {
  Type: 'AWS::ManagedBlockchain::Accessor';
  Properties: ManagedBlockchainAccessorProperties;
}
