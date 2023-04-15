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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Represents the settings used to enable point in time recovery.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.html}
 **/
export interface DynamoDBGlobalTablePointInTimeRecoverySpecification {
  /**
   * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PointInTimeRecoveryEnabled?: Value<boolean>;
}

/**
 * Allows you to specify the read capacity settings for a replica table or a replica global secondary index when the `BillingMode` is set to `PROVISIONED`. You must specify a value for either `ReadCapacityUnits` or `ReadCapacityAutoScalingSettings`, but not both. You can switch between fixed capacity and auto scaling.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html}
 **/
export interface DynamoDBGlobalTableReadProvisionedThroughputSettings {
  /**
   * Specifies a fixed read capacity for the replica table or global secondary index.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadCapacityUnits?: Value<number>;
  /**
   * Specifies auto scaling settings for the replica table or global secondary index.
   *
   * _Required_: No
   *
   * _Type_: [CapacityAutoScalingSettings](aws-properties-dynamodb-globaltable-capacityautoscalingsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadCapacityAutoScalingSettings?: DynamoDBGlobalTableCapacityAutoScalingSettings;
}

/**
 * Defines a target tracking scaling policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html}
 **/
export interface DynamoDBGlobalTableTargetTrackingScalingPolicyConfiguration {
  /**
   * The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScaleOutCooldown?: Value<number>;
  /**
   * Defines a target value for the scaling policy.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetValue: Value<number>;
  /**
   * Indicates whether scale in by the target tracking scaling policy is disabled. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableScaleIn?: Value<boolean>;
  /**
   * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScaleInCooldown?: Value<number>;
}

/**
 * Represents an attribute for describing the key schema for the table and indexes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-attributedefinition.html}
 **/
export interface DynamoDBGlobalTableAttributeDefinition {
  /**
   * The data type for the attribute, where:
   */
  AttributeType: Value<string>;
  /**
   * A name for the attribute.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeName: Value<string>;
}

/**
 * Represents the settings used to enable server-side encryption.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-ssespecification.html}
 **/
export interface DynamoDBGlobalTableSSESpecification {
  /**
   * Indicates whether server-side encryption is performed using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to KMS and an AWS managed key is used (AWS KMS charges apply). If disabled (false) or not specified,server-side encryption is set to an AWS owned key. If you choose to use KMS encryption, you can also use customer managed KMS keys by specifying them in the `ReplicaSpecification.SSESpecification` object. You cannot mix AWS managed and customer managed KMS keys.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSEEnabled: Value<boolean>;
  /**
   * Server-side encryption type. The only supported value is:
   */
  SSEType?: Value<string>;
}

/**
 * The Kinesis Data Streams configuration for the specified global table replica.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-kinesisstreamspecification.html}
 **/
export interface DynamoDBGlobalTableKinesisStreamSpecification {
  /**
   * The ARN for a specific Kinesis data stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `37`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamArn: Value<string>;
}

/**
 * Configures contributor insights settings for a replica or one of its indexes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-contributorinsightsspecification.html}
 **/
export interface DynamoDBGlobalTableContributorInsightsSpecification {
  /**
   * Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Allowed values_: `DISABLE | ENABLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Configures a scalable target and an autoscaling policy for a table or global secondary index's read or write capacity.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html}
 **/
export interface DynamoDBGlobalTableCapacityAutoScalingSettings {
  /**
   * The minimum provisioned capacity units for the global table.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinCapacity: Value<number>;
  /**
   * When switching billing mode from `PAY_PER_REQUEST` to `PROVISIONED`, DynamoDB requires you to specify read and write capacity unit values for the table and for each global secondary index. These values will be applied to all replicas. The table will use these provisioned values until CloudFormation creates the autoscaling policies you configured in your template. CloudFormation cannot determine what capacity the table and its global secondary indexes will require in this time period, since they are application-dependent.
   *
   * If you want to switch a table's billing mode from `PAY_PER_REQUEST` to `PROVISIONED`, you must specify a value for this property for each autoscaled resource. If you specify different values for the same resource in different regions, CloudFormation will use the highest value found in either the `SeedCapacity` or `ReadCapacityUnits` properties. For example, if your global secondary index `myGSI` has a `SeedCapacity` of 10 in us-east-1 and a fixed `ReadCapacityUnits` of 20 in eu-west-1, CloudFormation will initially set the read capacity for `myGSI` to 20. Note that if you disable `ScaleIn` for `myGSI` in us-east-1, its read capacity units might not be set back to 10.
   *
   * You must also specify a value for `SeedCapacity` when you plan to switch a table's billing mode from `PROVISIONED` to `PAY_PER_REQUEST`, because CloudFormation might need to roll back the operation (reverting the billing mode to `PROVISIONED`) and this cannot succeed without specifying a value for `SeedCapacity`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeedCapacity?: Value<number>;
  /**
   * Defines a target tracking scaling policy.
   *
   * _Required_: Yes
   *
   * _Type_: [TargetTrackingScalingPolicyConfiguration](aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetTrackingScalingPolicyConfiguration: DynamoDBGlobalTableTargetTrackingScalingPolicyConfiguration;
  /**
   * The maximum provisioned capacity units for the global table.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCapacity: Value<number>;
}

/**
 * Represents the properties of a local secondary index. A local secondary index can only be created when its parent table is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-localsecondaryindex.html}
 **/
export interface DynamoDBGlobalTableLocalSecondaryIndex {
  /**
   * The name of the local secondary index. The name must be unique among all other indexes on this table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: Updates are not supported.
   */
  IndexName: Value<string>;
  /**
   * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * _Required_: Yes
   *
   * _Type_: [Projection](aws-properties-dynamodb-globaltable-projection.md)
   *
   * _Update requires_: Updates are not supported.
   */
  Projection: DynamoDBGlobalTableProjection;
  /**
   * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
   */
  KeySchema: List<DynamoDBGlobalTableKeySchema>;
}

/**
 * Defines settings specific to a single replica of a global table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html}
 **/
export interface DynamoDBGlobalTableReplicaSpecification {
  /**
   * Allows you to specify a customer-managed key for the replica. When using customer-managed keys for server-side encryption, this property must have a value in all replicas.
   *
   * _Required_: No
   *
   * _Type_: [ReplicaSSESpecification](aws-properties-dynamodb-globaltable-replicassespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSESpecification?: DynamoDBGlobalTableReplicaSSESpecification;
  /**
   * Defines the Kinesis Data Streams configuration for the specified replica.
   *
   * _Required_: No
   *
   * _Type_: [KinesisStreamSpecification](aws-properties-dynamodb-globaltable-kinesisstreamspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamSpecification?: DynamoDBGlobalTableKinesisStreamSpecification;
  /**
   * The settings used to enable or disable CloudWatch Contributor Insights for the specified replica. When not specified, defaults to contributor insights disabled for the replica.
   *
   * _Required_: No
   *
   * _Type_: [ContributorInsightsSpecification](aws-properties-dynamodb-globaltable-contributorinsightsspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorInsightsSpecification?: DynamoDBGlobalTableContributorInsightsSpecification;
  /**
   * Defines additional settings for the global secondary indexes of this replica.
   *
   * _Required_: No
   *
   * _Type_: List of [ReplicaGlobalSecondaryIndexSpecification](aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlobalSecondaryIndexes?: List<DynamoDBGlobalTableReplicaGlobalSecondaryIndexSpecification>;
  /**
   * The region in which this replica exists.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region: Value<string>;
  /**
   * The settings used to enable point in time recovery. When not specified, defaults to point in time recovery disabled for the replica.
   *
   * _Required_: No
   *
   * _Type_: [PointInTimeRecoverySpecification](aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PointInTimeRecoverySpecification?: DynamoDBGlobalTablePointInTimeRecoverySpecification;
  /**
   * Defines read capacity settings for the replica table.
   *
   * _Required_: No
   *
   * _Type_: [ReadProvisionedThroughputSettings](aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadProvisionedThroughputSettings?: DynamoDBGlobalTableReadProvisionedThroughputSettings;
  /**
   * The table class of the specified table. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `STANDARD | STANDARD_INFREQUENT_ACCESS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableClass?: Value<string>;
  /**
   * Determines if a replica is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the _Amazon DynamoDBDeveloper Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtectionEnabled?: Value<boolean>;
  /**
   * An array of key-value pairs to apply to this replica.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
 * Allows you to specify a global secondary index for the global table. The index will be defined on all replicas.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html}
 **/
export interface DynamoDBGlobalTableGlobalSecondaryIndex {
  /**
   * The name of the global secondary index. The name must be unique among all other indexes on this table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: Updates are not supported.
   */
  IndexName: Value<string>;
  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * _Required_: Yes
   *
   * _Type_: [Projection](aws-properties-dynamodb-globaltable-projection.md)
   *
   * _Update requires_: Updates are not supported.
   */
  Projection: DynamoDBGlobalTableProjection;
  /**
   * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
   */
  KeySchema: List<DynamoDBGlobalTableKeySchema>;
  /**
   * Defines write capacity settings for the global secondary index. You must specify a value for this property if the table's `BillingMode` is `PROVISIONED`. All replicas will have the same write capacity settings for this global secondary index.
   *
   * _Required_: No
   *
   * _Type_: [WriteProvisionedThroughputSettings](aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteProvisionedThroughputSettings?: DynamoDBGlobalTableWriteProvisionedThroughputSettings;
}

/**
 * Represents _a single element_ of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
 *
 * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
 *
 * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-keyschema.html}
 **/
export interface DynamoDBGlobalTableKeySchema {
  /**
   * The role that this key attribute will assume:
   */
  KeyType: Value<string>;
  /**
   * The name of a key attribute.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AttributeName: Value<string>;
}

/**
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
 *
 * You can only modify this value if your `AWS::DynamoDB::GlobalTable` contains only one entry in `Replicas`. You must specify a value for this property if your `AWS::DynamoDB::GlobalTable` contains more than one replica.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-streamspecification.html}
 **/
export interface DynamoDBGlobalTableStreamSpecification {
  /**
   * When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table. Valid values for `StreamViewType` are:
   */
  StreamViewType: Value<string>;
}

/**
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-projection.html}
 **/
export interface DynamoDBGlobalTableProjection {
  /**
   * The set of attributes that are projected into the index:
   */
  ProjectionType?: Value<string>;
  /**
   * Represents the non-key attribute names which will be projected into the index.
   *
   * For local secondary indexes, the total count of `NonKeyAttributes` summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  NonKeyAttributes?: List<Value<string>>;
}

/**
 * Represents the properties of a global secondary index that can be set on a per-replica basis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html}
 **/
export interface DynamoDBGlobalTableReplicaGlobalSecondaryIndexSpecification {
  /**
   * The name of the global secondary index. The name must be unique among all other indexes on this table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IndexName: Value<string>;
  /**
   * Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of AWS Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an AWS managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
   *
   * _Required_: No
   *
   * _Type_: [ContributorInsightsSpecification](aws-properties-dynamodb-globaltable-contributorinsightsspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorInsightsSpecification?: DynamoDBGlobalTableContributorInsightsSpecification;
  /**
   * Allows you to specify the read capacity settings for a replica global secondary index when the `BillingMode` is set to `PROVISIONED`.
   *
   * _Required_: No
   *
   * _Type_: [ReadProvisionedThroughputSettings](aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadProvisionedThroughputSettings?: DynamoDBGlobalTableReadProvisionedThroughputSettings;
}

/**
 * Specifies an auto scaling policy for write capacity. This policy will be applied to all replicas. This setting must be specified if `BillingMode` is set to `PROVISIONED`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.html}
 **/
export interface DynamoDBGlobalTableWriteProvisionedThroughputSettings {
  /**
   * Specifies auto scaling settings for the replica table or global secondary index.
   *
   * _Required_: No
   *
   * _Type_: [CapacityAutoScalingSettings](aws-properties-dynamodb-globaltable-capacityautoscalingsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteCapacityAutoScalingSettings?: DynamoDBGlobalTableCapacityAutoScalingSettings;
}

/**
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table. All replicas will have the same time to live configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-timetolivespecification.html}
 **/
export interface DynamoDBGlobalTableTimeToLiveSpecification {
  /**
   * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * The name of the attribute used to store the expiration time for items in the table.
   *
   * Currently, you cannot directly change the attribute name used to evaluate time to live. In order to do so, you must first disable time to live, and then re-enable it with the new attribute name. It can take up to one hour for changes to time to live to take effect. If you attempt to modify time to live within that time window, your stack operation might be delayed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeName?: Value<string>;
}

/**
 * Allows you to specify a KMS key identifier to be used for server-side encryption. The key can be specified via ARN, key ID, or alias. The key must be created in the same region as the replica.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicassespecification.html}
 **/
export interface DynamoDBGlobalTableReplicaSSESpecification {
  /**
   * The AWS KMS key that should be used for the AWS KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KMSMasterKeyId: Value<string>;
}
export interface DynamoDBGlobalTableProperties {
  /**
   * Specifies the settings to enable server-side encryption. These settings will be applied to all replicas. If you plan to use customer-managed KMS keys, you must provide a key for each replica using the `ReplicaSpecification.ReplicaSSESpecification` property.
   *
   * _Required_: No
   *
   * _Type_: [SSESpecification](aws-properties-dynamodb-globaltable-ssespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSESpecification?: DynamoDBGlobalTableSSESpecification;
  /**
   * A name for the global table. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID as the table name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableName?: Value<string>;
  /**
   * A list of attributes that describe the key schema for the global table and indexes.
   *
   * _Required_: Yes
   *
   * _Type_: List of [AttributeDefinition](aws-properties-dynamodb-globaltable-attributedefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeDefinitions: List<DynamoDBGlobalTableAttributeDefinition>;
  /**
   * Specifies the streams settings on your global table. You must provide a value for this property if your global table contains more than one replica. You can only change the streams settings if your global table has only one replica.
   *
   * _Required_: No
   *
   * _Type_: [StreamSpecification](aws-properties-dynamodb-globaltable-streamspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSpecification?: DynamoDBGlobalTableStreamSpecification;
  /**
   * Specifies how you are charged for read and write throughput and how you manage capacity. Valid values are:
   */
  BillingMode?: Value<string>;
  /**
   * Global secondary indexes to be created on the global table. You can create up to 20 global secondary indexes. Each replica in your global table will have the same global secondary index settings. You can only create or delete one global secondary index in a single stack operation.
   *
   * Since the backfilling of an index could take a long time, CloudFormation does not wait for the index to become active. If a stack operation rolls back, CloudFormation might not delete an index that has been added. In that case, you will need to delete the index manually.
   *
   * _Required_: No
   *
   * _Type_: List of [GlobalSecondaryIndex](aws-properties-dynamodb-globaltable-globalsecondaryindex.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlobalSecondaryIndexes?: List<DynamoDBGlobalTableGlobalSecondaryIndex>;
  /**
   * Specifies the attributes that make up the primary key for the table. The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.
   *
   * _Required_: Yes
   *
   * _Type_: [List](aws-properties-dynamodb-globaltable-keyschema.md) of [KeySchema](aws-properties-dynamodb-globaltable-keyschema.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeySchema: List<DynamoDBGlobalTableKeySchema>;
  /**
   * Local secondary indexes to be created on the table. You can create up to five local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes. Each replica in your global table will have the same local secondary index settings.
   *
   * _Required_: No
   *
   * _Type_: List of [LocalSecondaryIndex](aws-properties-dynamodb-globaltable-localsecondaryindex.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LocalSecondaryIndexes?: List<DynamoDBGlobalTableLocalSecondaryIndex>;
  /**
   * Specifies the list of replicas for your global table. The list must contain at least one element, the region where the stack defining the global table is deployed. For example, if you define your table in a stack deployed to us-east-1, you must have an entry in `Replicas` with the region us-east-1. You cannot remove the replica in the stack region.
   *
   * Adding a replica might take a few minutes for an empty table, or up to several hours for large tables. If you want to add or remove a replica, we recommend submitting an `UpdateStack` operation containing only that change.
   *
   * If you add or delete a replica during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new replica, you might need to manually delete the replica.
   *
   * You can create a new global table with as many replicas as needed. You can add or remove replicas after table creation, but you can only add or remove a single replica in each update.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ReplicaSpecification](aws-properties-dynamodb-globaltable-replicaspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Replicas: List<DynamoDBGlobalTableReplicaSpecification>;
  /**
   * Specifies an auto scaling policy for write capacity. This policy will be applied to all replicas. This setting must be specified if `BillingMode` is set to `PROVISIONED`.
   *
   * _Required_: No
   *
   * _Type_: [WriteProvisionedThroughputSettings](aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteProvisionedThroughputSettings?: DynamoDBGlobalTableWriteProvisionedThroughputSettings;
  /**
   * Specifies the time to live (TTL) settings for the table. This setting will be applied to all replicas.
   *
   * _Required_: No
   *
   * _Type_: [TimeToLiveSpecification](aws-properties-dynamodb-globaltable-timetolivespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeToLiveSpecification?: DynamoDBGlobalTableTimeToLiveSpecification;
}

/**
 * The `AWS::DynamoDB::GlobalTable` resource enables you to create and manage a Version 2019.11.21 global table. This resource cannot be used to create or manage a Version 2017.11.29 global table. For more information, see [Global tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html).
 *
 * **Important**
 *
 * You cannot convert a resource of type `AWS::DynamoDB::Table` into a resource of type `AWS::DynamoDB::GlobalTable` by changing its type in your template. **Doing so might result in the deletion of your DynamoDB table.**
 *
 * You can instead use the GlobalTable resource to create a new table in a single Region. This will be billed the same as a single Region table. If you later update the stack to add other Regions then Global Tables pricing will apply.
 *
 * You should be aware of the following behaviors when working with DynamoDB global tables.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html}
 */
export interface DynamoDBGlobalTableResource {
  Type: 'AWS::DynamoDB::GlobalTable';
  Properties: DynamoDBGlobalTableProperties;
}
