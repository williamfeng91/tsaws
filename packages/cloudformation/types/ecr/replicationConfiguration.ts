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
 * The replication configuration for a registry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html}
 **/
export interface ECRReplicationConfigurationReplicationConfiguration {
  /**
   * An array of objects representing the replication destinations and repository filters for a replication configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ReplicationRule](aws-properties-ecr-replicationconfiguration-replicationrule.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules: List<ECRReplicationConfigurationReplicationRule>;
}

/**
 * An array of objects representing the destination for a replication rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html}
 **/
export interface ECRReplicationConfigurationReplicationDestination {
  /**
   * The Region to replicate to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `25`
   *
   * _Pattern_: `[0-9a-z-]{2,25}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region: Value<string>;
  /**
   * The AWS account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[0-9]{12}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegistryId: Value<string>;
}

/**
 * An array of objects representing the replication destinations and repository filters for a replication configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html}
 **/
export interface ECRReplicationConfigurationReplicationRule {
  /**
   * An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
   *
   * _Required_: No
   *
   * _Type_: List of [RepositoryFilter](aws-properties-ecr-replicationconfiguration-repositoryfilter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryFilters?: List<ECRReplicationConfigurationRepositoryFilter>;
  /**
   * An array of objects representing the destination for a replication rule.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ReplicationDestination](aws-properties-ecr-replicationconfiguration-replicationdestination.md)
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destinations: List<ECRReplicationConfigurationReplicationDestination>;
}

/**
 * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html}
 **/
export interface ECRReplicationConfigurationRepositoryFilter {
  /**
   * The repository filter type. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the `filter` parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `PREFIX_MATCH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterType: Value<string>;
  /**
   * The repository filter details. When the `PREFIX_MATCH` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^(?:[a-z0-9]+(?:[._-][a-z0-9]*)*\/)*[a-z0-9]*(?:[._-][a-z0-9]*)*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filter: Value<string>;
}
export interface ECRReplicationConfigurationProperties {
  /**
   * The replication configuration for a registry.
   *
   * _Required_: Yes
   *
   * _Type_: [ReplicationConfiguration](aws-properties-ecr-replicationconfiguration-replicationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationConfiguration: ECRReplicationConfigurationReplicationConfiguration;
}

/**
 * The `AWS::ECR::ReplicationConfiguration` resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see [Using Service-Linked Roles for Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html) in the _Amazon Elastic Container Registry User Guide_.
 *
 * **Note**
 *
 * When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see `AWS::ECR::RegistryPolicy`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html}
 */
export interface ECRReplicationConfigurationResource {
  Type: 'AWS::ECR::ReplicationConfiguration';
  Properties: ECRReplicationConfigurationProperties;
}
