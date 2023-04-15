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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes a path.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest.html}
 **/
export interface EC2NetworkInsightsAccessScopeAccessScopePathRequest {
  /**
   * The destination.
   *
   * _Required_: No
   *
   * _Type_: [PathStatementRequest](aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Destination?: EC2NetworkInsightsAccessScopePathStatementRequest;
  /**
   * The through resources.
   *
   * _Required_: No
   *
   * _Type_: List of [ThroughResourcesStatementRequest](aws-properties-ec2-networkinsightsaccessscope-throughresourcesstatementrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThroughResources?: List<EC2NetworkInsightsAccessScopeThroughResourcesStatementRequest>;
  /**
   * The source.
   *
   * _Required_: No
   *
   * _Type_: [PathStatementRequest](aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Source?: EC2NetworkInsightsAccessScopePathStatementRequest;
}

/**
 * Describes a through resource statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-throughresourcesstatementrequest.html}
 **/
export interface EC2NetworkInsightsAccessScopeThroughResourcesStatementRequest {
  /**
   * The resource statement.
   *
   * _Required_: No
   *
   * _Type_: [ResourceStatementRequest](aws-properties-ec2-networkinsightsaccessscope-resourcestatementrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceStatement?: EC2NetworkInsightsAccessScopeResourceStatementRequest;
}

/**
 * Describes a resource statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-resourcestatementrequest.html}
 **/
export interface EC2NetworkInsightsAccessScopeResourceStatementRequest {
  /**
   * The resource types.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceTypes?: List<Value<string>>;
  /**
   * The resources.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Resources?: List<Value<string>>;
}

/**
 * Describes a path statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.html}
 **/
export interface EC2NetworkInsightsAccessScopePathStatementRequest {
  /**
   * The resource statement.
   *
   * _Required_: No
   *
   * _Type_: [ResourceStatementRequest](aws-properties-ec2-networkinsightsaccessscope-resourcestatementrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceStatement?: EC2NetworkInsightsAccessScopeResourceStatementRequest;
  /**
   * The packet header statement.
   *
   * _Required_: No
   *
   * _Type_: [PacketHeaderStatementRequest](aws-properties-ec2-networkinsightsaccessscope-packetheaderstatementrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PacketHeaderStatement?: EC2NetworkInsightsAccessScopePacketHeaderStatementRequest;
}

/**
 * Describes a packet header statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsaccessscope-packetheaderstatementrequest.html}
 **/
export interface EC2NetworkInsightsAccessScopePacketHeaderStatementRequest {
  /**
   * The protocols.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Protocols?: List<Value<string>>;
  /**
   * The destination ports.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationPorts?: List<Value<string>>;
  /**
   * The destination addresses.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationAddresses?: List<Value<string>>;
  /**
   * The destination prefix lists.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationPrefixLists?: List<Value<string>>;
  /**
   * The source addresses.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceAddresses?: List<Value<string>>;
  /**
   * The source ports.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourcePorts?: List<Value<string>>;
  /**
   * The source prefix lists.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourcePrefixLists?: List<Value<string>>;
}
export interface EC2NetworkInsightsAccessScopeProperties {
  /**
   * The paths to exclude.
   *
   * _Required_: No
   *
   * _Type_: List of [AccessScopePathRequest](aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExcludePaths?: List<EC2NetworkInsightsAccessScopeAccessScopePathRequest>;
  /**
   * The paths to match.
   *
   * _Required_: No
   *
   * _Type_: List of [AccessScopePathRequest](aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MatchPaths?: List<EC2NetworkInsightsAccessScopeAccessScopePathRequest>;
  /**
   * The tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Describes a Network Access Scope. A Network Access Scope defines outbound (egress) and inbound (ingress) traffic patterns, including sources, destinations, paths, and traffic types.
 *
 * Network Access Analyzer identifies unintended network access to your resources on AWS. When you start an analysis on a Network Access Scope, Network Access Analyzer produces findings. For more information, see the [Network Access Analyzer User Guide](https://docs.aws.amazon.com/vpc/latest/network-access-analyzer/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html}
 */
export interface EC2NetworkInsightsAccessScopeResource {
  Type: 'AWS::EC2::NetworkInsightsAccessScope';
  Properties: EC2NetworkInsightsAccessScopeProperties;
}
