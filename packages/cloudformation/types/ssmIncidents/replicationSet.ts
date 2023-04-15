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
 * The `ReplicationRegion` property type specifies the Region and KMS key to add to the replication set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html}
 **/
export interface SSMIncidentsReplicationSetReplicationRegion {
  /**
   * Specifies the Region configuration.
   *
   * _Required_: No
   *
   * _Type_: [RegionConfiguration](aws-properties-ssmincidents-replicationset-regionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionConfiguration?: SSMIncidentsReplicationSetRegionConfiguration;
  /**
   * Specifies the region name to add to the replication set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionName?: Value<string>;
}

/**
 * The `RegionConfiguration` property specifies the Region and KMS key to add to the replication set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-regionconfiguration.html}
 **/
export interface SSMIncidentsReplicationSetRegionConfiguration {
  /**
   * The KMS key ID to use to encrypt your replication set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SseKmsKeyId: Value<string>;
}
export interface SSMIncidentsReplicationSetProperties {
  /**
   * Specifies the Regions of the replication set.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ReplicationRegion](aws-properties-ssmincidents-replicationset-replicationregion.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regions: List<SSMIncidentsReplicationSetReplicationRegion>;
  /**
   * Determines if the replication set deletion protection is enabled or not. If deletion protection is enabled, you can't delete the last Region in the replication set.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtected?: Value<boolean>;
  /**
   * A list of tags to add to the replication set.
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
 * The `AWS::SSMIncidents::ReplicationSet` resource specifies a set of Regions that Incident Manager data is replicated to and the KMS key used to encrypt the data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html}
 */
export interface SSMIncidentsReplicationSetResource {
  Type: 'AWS::SSMIncidents::ReplicationSet';
  Properties: SSMIncidentsReplicationSetProperties;
}
