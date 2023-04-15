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
 * Specifies the encryption at rest option selected for the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-encryptionspecification.html}
 **/
export interface CassandraTableEncryptionSpecification {
  /**
   * The encryption at rest options for the table.
   */
  EncryptionType: Value<string>;
  /**
   * Requires a `kms_key_identifier` in the format of a key ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyIdentifier?: Value<string>;
}

/**
 * The name and data type of an individual column in a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-column.html}
 **/
export interface CassandraTableColumn {
  /**
   * The name of the column. For more information, see [Identifiers](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.elements.identifier) in the _Amazon Keyspaces Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ColumnName: Value<string>;
  /**
   * The data type of the column. For more information, see [Data types](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) in the _Amazon Keyspaces Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ColumnType: Value<string>;
}

/**
 * Defines an individual column within the clustering key.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-clusteringkeycolumn.html}
 **/
export interface CassandraTableClusteringKeyColumn {
  /**
   * The order in which this column's data is stored:
   */
  OrderBy?: Value<string>;
  /**
   * The name and data type of this clustering key column.
   *
   * _Required_: Yes
   *
   * _Type_: [Column](aws-properties-cassandra-table-column.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Column: CassandraTableColumn;
}

/**
 * The provisioned throughput for the table, which consists of `ReadCapacityUnits` and `WriteCapacityUnits`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-provisionedthroughput.html}
 **/
export interface CassandraTableProvisionedThroughput {
  /**
   * The amount of write capacity that's provisioned for the table. For more information, see [Read/write capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the _Amazon Keyspaces Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteCapacityUnits: Value<number>;
  /**
   * The amount of read capacity that's provisioned for the table. For more information, see [Read/write capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the _Amazon Keyspaces Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadCapacityUnits: Value<number>;
}

/**
 * Determines the billing mode for the table - on-demand or provisioned.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-billingmode.html}
 **/
export interface CassandraTableBillingMode {
  /**
   * The billing mode for the table:
   */
  Mode: Value<string>;
  /**
   * The provisioned read capacity and write capacity for the table. For more information, see [Provisioned throughput capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html#ReadWriteCapacityMode.Provisioned) in the _Amazon Keyspaces Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ProvisionedThroughput](aws-properties-cassandra-table-provisionedthroughput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedThroughput?: CassandraTableProvisionedThroughput;
}
export interface CassandraTableProperties {
  /**
   * The name of the table to be created. The table name is case sensitive. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the table name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you can't perform updates that require replacing this resource. You can perform updates that require no interruption or some interruption. If you must replace the resource, specify a new name.
   *
   * _Length constraints:_ Minimum length of 3. Maximum length of 255.
   *
   * _Pattern:_ `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableName?: Value<string>;
  /**
   * Specifies if point-in-time recovery is enabled or disabled for the table. The options are `PointInTimeRecoveryEnabled=true` and `PointInTimeRecoveryEnabled=false`. If not specified, the default is `PointInTimeRecoveryEnabled=false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PointInTimeRecoveryEnabled?: Value<boolean>;
  /**
   * One or more columns that determine how the table data is sorted.
   *
   * _Required_: No
   *
   * _Type_: List of [ClusteringKeyColumn](aws-properties-cassandra-table-clusteringkeycolumn.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusteringKeyColumns?: List<CassandraTableClusteringKeyColumn>;
  /**
   * Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option:
   */
  ClientSideTimestampsEnabled?: Value<boolean>;
  /**
   * One or more columns that uniquely identify every row in the table. Every table must have a partition key.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Column](aws-properties-cassandra-table-column.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PartitionKeyColumns: List<CassandraTableColumn>;
  /**
   * The billing mode for the table, which determines how you'll be charged for reads and writes:
   */
  BillingMode?: CassandraTableBillingMode;
  /**
   * The default Time To Live (TTL) value for all rows in a table in seconds. The maximum configurable value is 630,720,000 seconds, which is the equivalent of 20 years. By default, the TTL value for a table is 0, which means data does not expire.
   *
   * For more information, see [Setting the default TTL value for a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl) in the _Amazon Keyspaces Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultTimeToLive?: Value<number>;
  /**
   * The name of the keyspace to create the table in. The keyspace must already exist.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyspaceName: Value<string>;
  /**
   * The encryption at rest options for the table.
   */
  EncryptionSpecification?: CassandraTableEncryptionSpecification;
  /**
   * One or more columns that are not part of the primary key - that is, columns that are _not_ defined as partition key columns or clustering key columns.
   *
   * You can add regular columns to existing tables by adding them to the template.
   *
   * _Required_: No
   *
   * _Type_: List of [Column](aws-properties-cassandra-table-column.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegularColumns?: List<CassandraTableColumn>;
  /**
   * A list of key-value pair tags to be attached to the resource.
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
 * You can use the `AWS::Cassandra::Table` resource to create a new table in Amazon Keyspaces (for Apache Cassandra). For more information, see [Create a keyspace and a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.ddl.html) in the _Amazon Keyspaces Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html}
 */
export interface CassandraTableResource {
  Type: 'AWS::Cassandra::Table';
  Properties: CassandraTableProperties;
}
