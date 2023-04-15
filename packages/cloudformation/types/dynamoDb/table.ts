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
 * Represents the properties of a local secondary index. A local secondary index can only be created when its parent table is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html}
 **/
export interface DynamoDBTableLocalSecondaryIndex {
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
   * _Type_: [Projection](aws-properties-dynamodb-table-projection.md)
   *
   * _Update requires_: Updates are not supported.
   */
  Projection: DynamoDBTableProjection;
  /**
   * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
   */
  KeySchema: List<DynamoDBTableKeySchema>;
}

/**
 * The settings used to enable point in time recovery.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-pointintimerecoveryspecification.html}
 **/
export interface DynamoDBTablePointInTimeRecoverySpecification {
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
 * The Kinesis Data Streams configuration for the specified table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-kinesisstreamspecification.html}
 **/
export interface DynamoDBTableKinesisStreamSpecification {
  /**
   * The ARN for a specific Kinesis data stream.
   *
   * Length Constraints: Minimum length of 37. Maximum length of 1024.
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
 * The S3 bucket that is being imported from.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html}
 **/
export interface DynamoDBTableS3BucketSource {
  /**
   * The S3 bucket that is being imported from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-z0-9A-Z]+[.-w]*[a-z0-9A-Z]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Bucket: Value<string>;
  /**
   * The key prefix shared by all S3 Objects that are being imported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3KeyPrefix?: Value<string>;
  /**
   * The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[0-9]{12}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3BucketOwner?: Value<string>;
}

/**
 * The format options for the data that was imported into the target table. There is one value, CsvOption.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-inputformatoptions.html}
 **/
export interface DynamoDBTableInputFormatOptions {
  /**
   * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
   *
   * _Required_: No
   *
   * _Type_: [Csv](aws-properties-dynamodb-table-csv.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Csv?: DynamoDBTableCsv;
}

/**
 * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html}
 **/
export interface DynamoDBTableCsv {
  /**
   * The delimiter used for separating items in the CSV file being imported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1`
   *
   * _Pattern_: `[,;:|t ]`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Delimiter?: Value<string>;
  /**
   * List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HeaderList?: List<Value<string>>;
}

/**
 * Represents an attribute for describing the key schema for the table and indexes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-attributedefinition.html}
 **/
export interface DynamoDBTableAttributeDefinition {
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
 * Represents the properties of a global secondary index.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html}
 **/
export interface DynamoDBTableGlobalSecondaryIndex {
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
   * The settings used to enable or disable CloudWatch Contributor Insights for the specified global secondary index.
   *
   * _Required_: No
   *
   * _Type_: [ContributorInsightsSpecification](aws-properties-dynamodb-table-contributorinsightsspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorInsightsSpecification?: DynamoDBTableContributorInsightsSpecification;
  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   *
   * _Required_: Yes
   *
   * _Type_: [Projection](aws-properties-dynamodb-table-projection.md)
   *
   * _Update requires_: Updates are not supported.
   */
  Projection: DynamoDBTableProjection;
  /**
   * Represents the provisioned throughput settings for the specified global secondary index.
   *
   * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the _Amazon DynamoDB Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ProvisionedThroughput](aws-properties-dynamodb-table-provisionedthroughput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedThroughput?: DynamoDBTableProvisionedThroughput;
  /**
   * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
   */
  KeySchema: List<DynamoDBTableKeySchema>;
}

/**
 * The settings used to enable or disable CloudWatch Contributor Insights.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-contributorinsightsspecification.html}
 **/
export interface DynamoDBTableContributorInsightsSpecification {
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
 * Represents _a single element_ of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
 *
 * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
 *
 * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-keyschema.html}
 **/
export interface DynamoDBTableKeySchema {
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeName: Value<string>;
}

/**
 * Specifies the properties of data being imported from the S3 bucket source to the table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html}
 **/
export interface DynamoDBTableImportSourceSpecification {
  /**
   * The S3 bucket that provides the source for the import.
   *
   * _Required_: Yes
   *
   * _Type_: [S3BucketSource](aws-properties-dynamodb-table-s3bucketsource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3BucketSource: DynamoDBTableS3BucketSource;
  /**
   * The format of the source data. Valid values for `ImportFormat` are `CSV`, `DYNAMODB_JSON` or `ION`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | DYNAMODB_JSON | ION`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputFormat: Value<string>;
  /**
   * Additional properties that specify how the input is formatted,
   *
   * _Required_: No
   *
   * _Type_: [InputFormatOptions](aws-properties-dynamodb-table-inputformatoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputFormatOptions?: DynamoDBTableInputFormatOptions;
  /**
   * Type of compression to be used on the input coming from the imported table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GZIP | NONE | ZSTD`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputCompressionType?: Value<string>;
}

/**
 * Represents the settings used to enable server-side encryption.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html}
 **/
export interface DynamoDBTableSSESpecification {
  /**
   * Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used (AWS KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.
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
  /**
   * The AWS KMS key that should be used for the AWS KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KMSMasterKeyId?: Value<string>;
}

/**
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-timetolivespecification.html}
 **/
export interface DynamoDBTableTimeToLiveSpecification {
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
   * The name of the TTL attribute used to store the expiration time for items in the table.
   *
   * To update this property, you must first disable TTL then enable TTL with the new attribute name.
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
 * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits`. For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-provisionedthroughput.html}
 **/
export interface DynamoDBTableProvisionedThroughput {
  /**
   * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput) in the _Amazon DynamoDB Developer Guide_.
   *
   * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteCapacityUnits: Value<number>;
  /**
   * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput) in the _Amazon DynamoDB Developer Guide_.
   *
   * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
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
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-projection.html}
 **/
export interface DynamoDBTableProjection {
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NonKeyAttributes?: List<Value<string>>;
  /**
   * The set of attributes that are projected into the index:
   */
  ProjectionType?: Value<string>;
}

/**
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-streamspecification.html}
 **/
export interface DynamoDBTableStreamSpecification {
  /**
   * When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table. Valid values for `StreamViewType` are:
   */
  StreamViewType: Value<string>;
}
export interface DynamoDBTableProperties {
  /**
   * Specifies the settings to enable server-side encryption.
   *
   * _Required_: No
   *
   * _Type_: [SSESpecification](aws-properties-dynamodb-table-ssespecification.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  SSESpecification?: DynamoDBTableSSESpecification;
  /**
   * The Kinesis Data Streams configuration for the specified table.
   *
   * _Required_: No
   *
   * _Type_: [KinesisStreamSpecification](aws-properties-dynamodb-table-kinesisstreamspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamSpecification?: DynamoDBTableKinesisStreamSpecification;
  /**
   * The settings for the DynamoDB table stream, which capture changes to items stored in the table.
   *
   * _Required_: No
   *
   * _Type_: [StreamSpecification](aws-properties-dynamodb-table-streamspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSpecification?: DynamoDBTableStreamSpecification;
  /**
   * The settings used to enable or disable CloudWatch Contributor Insights for the specified table.
   *
   * _Required_: No
   *
   * _Type_: [ContributorInsightsSpecification](aws-properties-dynamodb-table-contributorinsightsspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorInsightsSpecification?: DynamoDBTableContributorInsightsSpecification;
  /**
   * Specifies the properties of data being imported from the S3 bucket source to the table.
   *
   * If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification`, the `TableClass` property, or the `DeletionProtectionEnabled` property, the IAM entity creating/updating stack must have `UpdateTable` permission.
   *
   * _Required_: No
   *
   * _Type_: [ImportSourceSpecification](aws-properties-dynamodb-table-importsourcespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImportSourceSpecification?: DynamoDBTableImportSourceSpecification;
  /**
   * The settings used to enable point in time recovery.
   *
   * _Required_: No
   *
   * _Type_: [PointInTimeRecoverySpecification](aws-properties-dynamodb-table-pointintimerecoveryspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PointInTimeRecoverySpecification?: DynamoDBTablePointInTimeRecoverySpecification;
  /**
   * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits`. For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
   *
   * If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.
   *
   * _Required_: Conditional
   *
   * _Type_: [ProvisionedThroughput](aws-properties-dynamodb-table-provisionedthroughput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedThroughput?: DynamoDBTableProvisionedThroughput;
  /**
   * A name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
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
   * A list of attributes that describe the key schema for the table and indexes.
   *
   * This property is required to create a DynamoDB table.
   *
   * Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [AttributeDefinition](aws-properties-dynamodb-table-attributedefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeDefinitions?: List<DynamoDBTableAttributeDefinition>;
  /**
   * Specify how you are charged for read and write throughput and how you manage capacity.
   *
   * Valid values include:
   */
  BillingMode?: Value<string>;
  /**
   * Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
   *
   * If you update a table to include a new global secondary index, AWS CloudFormation initiates the index creation and then proceeds with the stack update. AWS CloudFormation doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE`. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
   *
   * If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
   *
   * Updates are not supported. The following are exceptions:
   */
  GlobalSecondaryIndexes?: List<DynamoDBTableGlobalSecondaryIndex>;
  /**
   * Specifies the attributes that make up the primary key for the table. The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.
   *
   * _Required_: Yes
   *
   * _Type_: [List](aws-properties-dynamodb-table-keyschema.md) of [KeySchema](aws-properties-dynamodb-table-keyschema.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeySchema: List<DynamoDBTableKeySchema>;
  /**
   * Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
   *
   * _Required_: No
   *
   * _Type_: List of [LocalSecondaryIndex](aws-properties-dynamodb-table-localsecondaryindex.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalSecondaryIndexes?: List<DynamoDBTableLocalSecondaryIndex>;
  /**
   * Determines if a table is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the _Amazon DynamoDBDeveloper Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtectionEnabled?: Value<boolean>;
  /**
   * The table class of the new table. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
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
   * An array of key-value pairs to apply to this resource.
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
  /**
   * Specifies the Time to Live (TTL) settings for the table.
   *
   * For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: [TimeToLiveSpecification](aws-properties-dynamodb-table-timetolivespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeToLiveSpecification?: DynamoDBTableTimeToLiveSpecification;
}

/**
 * The `AWS::DynamoDB::Table` resource creates a DynamoDB table. For more information, see [CreateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html) in the _Amazon DynamoDB API Reference_.
 *
 * You should be aware of the following behaviors when working with DynamoDB tables:
 *
 * **Important**
 *
 * Our guidance is to use the latest schema documented here for your AWS CloudFormation templates. This schema supports the provisioning of all table settings below. When using this schema in your AWS CloudFormation templates, please ensure that your Identity and Access Management (IAM) policies are updated with appropriate permissions to allow for the authorization of these setting changes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html}
 */
export interface DynamoDBTableResource {
  Type: 'AWS::DynamoDB::Table';
  Properties: DynamoDBTableProperties;
}
