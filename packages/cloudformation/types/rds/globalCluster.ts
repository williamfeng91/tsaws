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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface RDSGlobalClusterProperties {
  /**
   * The storage encryption setting for the global database cluster.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageEncrypted?: Value<boolean>;
  /**
   * The engine version of the Aurora global database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion?: Value<string>;
  /**
   * The DB cluster identifier or Amazon Resource Name (ARN) to use as the primary cluster of the global database.
   *
   * If the `Engine` property isn't specified, this property is required. If the `Engine` property is specified, make sure this property isn't specified.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceDBClusterIdentifier?: Value<string>;
  /**
   * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtection?: Value<boolean>;
  /**
   * The cluster identifier of the global database cluster.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GlobalClusterIdentifier?: Value<string>;
  /**
   * The name of the database engine to be used for this DB cluster.
   *
   * If this property isn't specified, the database engine is derived from the source DB cluster specified by the `SourceDBClusterIdentifier` property.
   *
   * If the `SourceDBClusterIdentifier` property isn't specified, this property is required. If the `SourceDBClusterIdentifier` property is specified, make sure this property isn't specified.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Engine?: Value<string>;
}

/**
 * The `AWS::RDS::GlobalCluster` resource creates or updates an Amazon Aurora global database spread across multiple AWS Regions.
 *
 * The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.
 *
 * You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it.
 *
 * For information about Aurora global databases, see [ Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the _Amazon Aurora User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html}
 */
export interface RDSGlobalClusterResource {
  Type: 'AWS::RDS::GlobalCluster';
  Properties: RDSGlobalClusterProperties;
}
