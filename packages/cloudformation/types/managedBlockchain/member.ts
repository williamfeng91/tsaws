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
 * Hyperledger Fabric configuration properties for the network.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkfabricconfiguration.html}
 **/
export interface ManagedBlockchainMemberNetworkFabricConfiguration {
  /**
   * The edition of Amazon Managed Blockchain that the network uses. Valid values are `standard` and `starter`. For more information, see [Amazon Managed Blockchain Pricing](http://aws.amazon.com/managed-blockchain/pricing/)
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `STANDARD | STARTER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Edition: Value<string>;
}

/**
 * Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberframeworkconfiguration.html}
 **/
export interface ManagedBlockchainMemberMemberFrameworkConfiguration {
  /**
   * Configuration properties for Hyperledger Fabric.
   *
   * _Required_: No
   *
   * _Type_: [MemberFabricConfiguration](aws-properties-managedblockchain-member-memberfabricconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemberFabricConfiguration?: ManagedBlockchainMemberMemberFabricConfiguration;
}

/**
 * The voting rules for the network to decide if a proposal is accepted
 *
 * Applies only to Hyperledger Fabric.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-votingpolicy.html}
 **/
export interface ManagedBlockchainMemberVotingPolicy {
  /**
   * Defines the rules for the network for voting on proposals, such as the percentage of `YES` votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
   *
   * _Required_: No
   *
   * _Type_: [ApprovalThresholdPolicy](aws-properties-managedblockchain-member-approvalthresholdpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApprovalThresholdPolicy?: ManagedBlockchainMemberApprovalThresholdPolicy;
}

/**
 * Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberfabricconfiguration.html}
 **/
export interface ManagedBlockchainMemberMemberFabricConfiguration {
  /**
   * The user name for the member's initial administrative user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `16`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdminUsername: Value<string>;
  /**
   * The password for the member's initial administrative user. The `AdminPassword` must be at least 8 characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quotation mark (‘), a double quotation marks (“), a forward slash(/), a backward slash(), @, or a space.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `8`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?!.*[@'"/])[a-zA-Z0-9S]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdminPassword: Value<string>;
}

/**
 * Configuration properties relevant to the network for the blockchain framework that the network uses.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkframeworkconfiguration.html}
 **/
export interface ManagedBlockchainMemberNetworkFrameworkConfiguration {
  /**
   * Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.
   *
   * _Required_: No
   *
   * _Type_: [NetworkFabricConfiguration](aws-properties-managedblockchain-member-networkfabricconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkFabricConfiguration?: ManagedBlockchainMemberNetworkFabricConfiguration;
}

/**
 * Configuration properties of the network to which the member belongs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html}
 **/
export interface ManagedBlockchainMemberNetworkConfiguration {
  /**
   * Attributes of the blockchain framework for the network.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The version of the blockchain framework that the network uses.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `8`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameworkVersion: Value<string>;
  /**
   * The voting rules that the network uses to decide if a proposal is accepted.
   *
   * _Required_: Yes
   *
   * _Type_: [VotingPolicy](aws-properties-managedblockchain-member-votingpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VotingPolicy: ManagedBlockchainMemberVotingPolicy;
  /**
   * The blockchain framework that the network uses.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ETHEREUM | HYPERLEDGER_FABRIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Framework: Value<string>;
  /**
   * The name of the network.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * Configuration properties relevant to the network for the blockchain framework that the network uses.
   *
   * _Required_: No
   *
   * _Type_: [NetworkFrameworkConfiguration](aws-properties-managedblockchain-member-networkframeworkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkFrameworkConfiguration?: ManagedBlockchainMemberNetworkFrameworkConfiguration;
}

/**
 * Configuration properties of the member.
 *
 * Applies only to Hyperledger Fabric.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberconfiguration.html}
 **/
export interface ManagedBlockchainMemberMemberConfiguration {
  /**
   * An optional description of the member.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Configuration properties of the blockchain framework relevant to the member.
   *
   * _Required_: No
   *
   * _Type_: [MemberFrameworkConfiguration](aws-properties-managedblockchain-member-memberframeworkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemberFrameworkConfiguration?: ManagedBlockchainMemberMemberFrameworkConfiguration;
  /**
   * The name of the member.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^(?!-|[0-9])(?!.*-$)(?!.*?--)[a-zA-Z0-9-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of `YES` votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
 *
 * Applies only to Hyperledger Fabric.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-approvalthresholdpolicy.html}
 **/
export interface ManagedBlockchainMemberApprovalThresholdPolicy {
  /**
   * Determines whether the vote percentage must be greater than the `ThresholdPercentage` or must be greater than or equal to the `ThreholdPercentage` to be approved.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GREATER_THAN | GREATER_THAN_OR_EQUAL_TO`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThresholdComparator?: Value<string>;
  /**
   * The percentage of votes among all members that must be `YES` for a proposal to be approved. For example, a `ThresholdPercentage` value of `50` indicates 50%. The `ThresholdComparator` determines the precise comparison. If a `ThresholdPercentage` value of `50` is specified on a network with 10 members, along with a `ThresholdComparator` value of `GREATER_THAN`, this indicates that 6 `YES` votes are required for the proposal to be approved.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThresholdPercentage?: Value<number>;
  /**
   * The duration from the time that a proposal is created until it expires. If members cast neither the required number of `YES` votes to approve the proposal nor the number of `NO` votes required to reject it before the duration expires, the proposal is `EXPIRED` and `ProposalActions` aren't carried out.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `168`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProposalDurationInHours?: Value<number>;
}
export interface ManagedBlockchainMemberProperties {
  /**
   * Configuration properties of the member.
   *
   * _Required_: Yes
   *
   * _Type_: [MemberConfiguration](aws-properties-managedblockchain-member-memberconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemberConfiguration: ManagedBlockchainMemberMemberConfiguration;
  /**
   * Configuration properties of the network to which the member belongs.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-managedblockchain-member-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: ManagedBlockchainMemberNetworkConfiguration;
  /**
   * The unique identifier of the network to which the member belongs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkId?: Value<string>;
  /**
   * The unique identifier of the invitation to join the network sent to the account that creates the member.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvitationId?: Value<string>;
}

/**
 * Creates a member within a Managed Blockchain network.
 *
 * Applies only to Hyperledger Fabric.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html}
 */
export interface ManagedBlockchainMemberResource {
  Type: 'AWS::ManagedBlockchain::Member';
  Properties: ManagedBlockchainMemberProperties;
}
