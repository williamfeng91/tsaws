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
 * A filter that you can specify for selection for modifications on replicas.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicamodifications.html}
 **/
export interface S3BucketReplicaModifications {
  /**
   * Specifies whether Amazon S3 replicates modifications on replicas.
   *
   * _Allowed values_: `Enabled` | `Disabled`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
}

/**
 * Specifies an Object Ownership rule.
 *
 * S3 Object Ownership is an Amazon S3 bucket-level setting that you can use to disable access control lists (ACLs) and take ownership of every object in your bucket, simplifying access management for data stored in Amazon S3. For more information, see [Controlling ownership of objects and disabling ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrolsrule.html}
 **/
export interface S3BucketOwnershipControlsRule {
  /**
   * Specifies an Object Ownership rule.
   *
   * _Allowed values_: `BucketOwnerEnforced` | `ObjectWriter` | `BucketOwnerPreferred`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectOwnership?: Value<string>;
}

/**
 * The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tiering.html}
 **/
export interface S3BucketTiering {
  /**
   * S3 Intelligent-Tiering access tier. See [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ARCHIVE_ACCESS | DEEP_ARCHIVE_ACCESS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessTier: Value<string>;
  /**
   * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Days: Value<number>;
}

/**
 * Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see [Locking Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockconfiguration.html}
 **/
export interface S3BucketObjectLockConfiguration {
  /**
   * Indicates whether this bucket has an Object Lock configuration enabled. Enable `ObjectLockEnabled` when you apply `ObjectLockConfiguration` to a bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectLockEnabled?: Value<string>;
  /**
   * Specifies the Object Lock rule for the specified object. Enable this rule when you apply `ObjectLockConfiguration` to a bucket. If Object Lock is turned on, bucket settings require both `Mode` and a period of either `Days` or `Years`. You cannot specify `Days` and `Years` at the same time. For more information, see [ObjectLockRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html) and [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).
   *
   * _Required_: Conditional
   *
   * _Type_: [ObjectLockRule](aws-properties-s3-bucket-objectlockrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rule?: S3BucketObjectLockRule;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversionexpiration.html}
 **/
export interface S3BucketNoncurrentVersionExpiration {
  NewerNoncurrentVersions?: Value<number>;
  NoncurrentDays: Value<number>;
}

/**
 * Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.
 *
 * For information about the S3 Intelligent-Tiering storage class, see [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html}
 **/
export interface S3BucketIntelligentTieringConfiguration {
  /**
   * The ID used to identify the S3 Intelligent-Tiering configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * Specifies the status of the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
  /**
   * A container for a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFilter](aws-properties-s3-bucket-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagFilters?: List<S3BucketTagFilter>;
  /**
   * Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: `ARCHIVE_ACCESS` and `DEEP_ARCHIVE_ACCESS`.
   *
   * You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Tiering](aws-properties-s3-bucket-tiering.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tierings: List<S3BucketTiering>;
}

/**
 * Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-storageclassanalysis.html}
 **/
export interface S3BucketStorageClassAnalysis {
  /**
   * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
   *
   * _Required_: No
   *
   * _Type_: [DataExport](aws-properties-s3-bucket-dataexport.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataExport?: S3BucketDataExport;
}

/**
 * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-dataexport.html}
 **/
export interface S3BucketDataExport {
  /**
   * The place to store the data for an analysis.
   *
   * _Required_: Yes
   *
   * _Type_: [Destination](aws-properties-s3-bucket-destination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: S3BucketDestination;
  /**
   * The version of the output schema to use when exporting data. Must be `V_1`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `V_1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputSchemaVersion: Value<string>;
}

/**
 * A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics `EventThreshold`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtimevalue.html}
 **/
export interface S3BucketReplicationTimeValue {
  /**
   * Contains an integer specifying time in minutes.
   *
   * Valid value: 15
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Minutes: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key-rules.html}
 **/
export interface S3BucketFilterRule {
  Name: Value<string>;
  Value: Value<string>;
}

/**
 * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter.
 *
 * For example:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationruleandoperator.html}
 **/
export interface S3BucketReplicationRuleAndOperator {
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * An array of tags containing key and value pairs.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFilter](aws-properties-s3-bucket-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagFilters?: List<S3BucketTagFilter>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-eventbridgeconfig.html}
 **/
export interface S3BucketEventBridgeConfiguration {
  EventBridgeEnabled?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules-routingrulecondition.html}
 **/
export interface S3BucketRoutingRuleCondition {
  HttpErrorCodeReturnedEquals?: Value<string>;
  KeyPrefixEquals?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key.html}
 **/
export interface S3BucketS3KeyFilter {
  Rules: List<S3BucketFilterRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration-rules-destination.html}
 **/
export interface S3BucketReplicationDestination {
  AccessControlTranslation?: S3BucketAccessControlTranslation;
  Account?: Value<string>;
  Bucket: Value<string>;
  EncryptionConfiguration?: S3BucketEncryptionConfiguration;
  Metrics?: S3BucketMetrics;
  ReplicationTime?: S3BucketReplicationTime;
  StorageClass?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversiontransition.html}
 **/
export interface S3BucketNoncurrentVersionTransition {
  NewerNoncurrentVersions?: Value<number>;
  StorageClass: Value<string>;
  TransitionInDays: Value<number>;
}

/**
 * The container element for specifying the default Object Lock retention settings for new objects placed in the specified bucket.
 *
 * **Note**
 *
 * The `DefaultRetention` settings require both a mode and a period.
 *
 * The `DefaultRetention` period can be either `Days` or `Years` but you must select one. You cannot specify `Days` and `Years` at the same time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html}
 **/
export interface S3BucketDefaultRetention {
  /**
   * The number of days that you want to specify for the default retention period. If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years`.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Days?: Value<number>;
  /**
   * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Allowed values_: `COMPLIANCE | GOVERNANCE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode?: Value<string>;
  /**
   * The number of years that you want to specify for the default retention period. If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years`.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Years?: Value<number>;
}

/**
 * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html}
 **/
export interface S3BucketAnalyticsConfiguration {
  /**
   * The ID that identifies the analytics configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * The prefix that an object must have to be included in the analytics results.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
   *
   * _Required_: Yes
   *
   * _Type_: [StorageClassAnalysis](aws-properties-s3-bucket-storageclassanalysis.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageClassAnalysis: S3BucketStorageClassAnalysis;
  /**
   * The tags to use when evaluating an analytics filter.
   *
   * The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFilter](aws-properties-s3-bucket-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagFilters?: List<S3BucketTagFilter>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfig.html}
 **/
export interface S3BucketLoggingConfiguration {
  DestinationBucketName?: Value<string>;
  LogFilePrefix?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html}
 **/
export interface S3BucketRoutingRule {
  RedirectRule: S3BucketRedirectRule;
  RoutingRuleCondition?: S3BucketRoutingRuleCondition;
}

/**
 * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-encryptionconfiguration.html}
 **/
export interface S3BucketEncryptionConfiguration {
  /**
   * Specifies the ID (Key ARN or Alias ARN) of the customer managed AWS KMS key stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the _ AWS Key Management Service Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicaKmsKeyID: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration.html}
 **/
export interface S3BucketWebsiteConfiguration {
  ErrorDocument?: Value<string>;
  IndexDocument?: Value<string>;
  RedirectAllRequestsTo?: S3BucketRedirectAllRequestsTo;
  RoutingRules?: List<S3BucketRoutingRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-topicconfig.html}
 **/
export interface S3BucketTopicConfiguration {
  Event: Value<string>;
  Filter?: S3BucketNotificationFilter;
  Topic: Value<string>;
}

/**
 * A filter that identifies the subset of objects to which the replication rule applies. A `Filter` must specify exactly one `Prefix`, `TagFilter`, or an `And` child element.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrulefilter.html}
 **/
export interface S3BucketReplicationRuleFilter {
  /**
   * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example:
   */
  And?: S3BucketReplicationRuleAndOperator;
  /**
   * An object key name prefix that identifies the subset of objects to which the rule applies.
   *
   * Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [ XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * A container for specifying a tag key and value.
   *
   * The rule applies only to objects that have the tag in their tag set.
   *
   * _Required_: No
   *
   * _Type_: [TagFilter](aws-properties-s3-bucket-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagFilter?: S3BucketTagFilter;
}

/**
 * Specifies the container element for Object Ownership rules.
 *
 * S3 Object Ownership is an Amazon S3 bucket-level setting that you can use to disable access control lists (ACLs) and take ownership of every object in your bucket, simplifying access management for data stored in Amazon S3. For more information, see [Controlling ownership of objects and disabling ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html}
 **/
export interface S3BucketOwnershipControls {
  /**
   * Specifies the container element for Object Ownership rules.
   *
   * _Required_: Yes
   *
   * _Type_: List of [OwnershipControlsRule](aws-properties-s3-bucket-ownershipcontrolsrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules: List<S3BucketOwnershipControlsRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors-corsrule.html}
 **/
export interface S3BucketCorsRule {
  AllowedHeaders?: List<Value<string>>;
  AllowedMethods: List<Value<string>>;
  AllowedOrigins: List<Value<string>>;
  ExposedHeaders?: List<Value<string>>;
  Id?: Value<string>;
  MaxAge?: Value<number>;
}

/**
 * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html}
 **/
export interface S3BucketDestination {
  /**
   * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
   *
   * Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketAccountId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the bucket to which data is exported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketArn: Value<string>;
  /**
   * Specifies the file format used when exporting data to Amazon S3.
   *
   * _Allowed values_: `CSV` | `ORC` | `Parquet`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format: Value<string>;
  /**
   * The prefix to use when exporting data. The prefix is prepended to all results.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html}
 **/
export interface S3BucketAccessControlTranslation {
  /**
   * Specifies the replica ownership. For default and valid values, see [PUT bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) in the _Amazon S3 API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Destination`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Owner: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-versioningconfig.html}
 **/
export interface S3BucketVersioningConfiguration {
  Status: Value<string>;
}

/**
 * A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a `Metrics` block.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtime.html}
 **/
export interface S3BucketReplicationTime {
  /**
   * Specifies whether the replication time is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
  /**
   * A container specifying the time by which replication should be complete for all objects and operations on objects.
   *
   * _Required_: Yes
   *
   * _Type_: [ReplicationTimeValue](aws-properties-s3-bucket-replicationtimevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time: S3BucketReplicationTimeValue;
}

/**
 * Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. If you don't specify a customer managed key at configuration, Amazon S3 automatically creates an AWS KMS key in your AWS account the first time that you add an object encrypted with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS. For more information, see [PUT Bucket encryption](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html) in the _Amazon S3 API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html}
 **/
export interface S3BucketServerSideEncryptionByDefault {
  /**
   * KMS key ID to use for the default encryption. This parameter is allowed if SSEAlgorithm is aws:kms.
   *
   * You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the CMK. However, if you are using encryption with cross-account operations, you must use a fully qualified CMK ARN. For more information, see [Using encryption for cross-account operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy).
   *
   * For example:
   */
  KMSMasterKeyID?: Value<string>;
  /**
   * Server-side encryption algorithm to use for the default encryption.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AES256 | aws:kms`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSEAlgorithm: Value<string>;
}

/**
 * A container for filter information for the selection of S3 objects encrypted with AWS KMS.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ssekmsencryptedobjects.html}
 **/
export interface S3BucketSseKmsEncryptedObjects {
  /**
   * Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS key stored in AWS Key Management Service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-queueconfig.html}
 **/
export interface S3BucketQueueConfiguration {
  Event: Value<string>;
  Filter?: S3BucketNotificationFilter;
  Queue: Value<string>;
}

/**
 * Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accelerateconfiguration.html}
 **/
export interface S3BucketAccelerateConfiguration {
  /**
   * Specifies the transfer acceleration status of the bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Enabled | Suspended`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccelerationStatus: Value<string>;
}

/**
 * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see [ Stopping Incomplete Multipart Uploads Using a Bucket Lifecycle Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-abortincompletemultipartupload.html}
 **/
export interface S3BucketAbortIncompleteMultipartUpload {
  /**
   * Specifies the number of days after which Amazon S3 stops an incomplete multipart upload.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DaysAfterInitiation: Value<number>;
}

/**
 * Specifies whether Amazon S3 replicates delete markers. If you specify a `Filter` in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` `Status` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config).
 *
 * For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html).
 *
 * **Note**
 *
 * If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-deletemarkerreplication.html}
 **/
export interface S3BucketDeleteMarkerReplication {
  /**
   * Indicates whether to replicate delete markers. Disabled by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
}

/**
 * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html}
 **/
export interface S3BucketPublicAccessBlockConfiguration {
  /**
   * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to `TRUE` causes the following behavior:
   */
  BlockPublicAcls?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
   *
   * Enabling this setting doesn't affect existing bucket policies.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockPublicPolicy?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
   *
   * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IgnorePublicAcls?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to `TRUE` restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy.
   *
   * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestrictPublicBuckets?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration-rules.html}
 **/
export interface S3BucketReplicationRule {
  DeleteMarkerReplication?: S3BucketDeleteMarkerReplication;
  Destination: S3BucketReplicationDestination;
  Filter?: S3BucketReplicationRuleFilter;
  Id?: Value<string>;
  Prefix?: Value<string>;
  Priority?: Value<number>;
  SourceSelectionCriteria?: S3BucketSourceSelectionCriteria;
  Status: Value<string>;
}

/**
 * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-sourceselectioncriteria.html}
 **/
export interface S3BucketSourceSelectionCriteria {
  /**
   * A filter that you can specify for selection for modifications on replicas.
   *
   * _Required_: No
   *
   * _Type_: [ReplicaModifications](aws-properties-s3-bucket-replicamodifications.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicaModifications?: S3BucketReplicaModifications;
  /**
   * A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.
   *
   * _Required_: No
   *
   * _Type_: [SseKmsEncryptedObjects](aws-properties-s3-bucket-ssekmsencryptedobjects.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SseKmsEncryptedObjects?: S3BucketSseKmsEncryptedObjects;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules-redirectrule.html}
 **/
export interface S3BucketRedirectRule {
  HostName?: Value<string>;
  HttpRedirectCode?: Value<string>;
  Protocol?: Value<string>;
  ReplaceKeyPrefixWith?: Value<string>;
  ReplaceKeyWith?: Value<string>;
}

/**
 * Specifies the Object Lock rule for the specified object. Enable the this rule when you apply `ObjectLockConfiguration` to a bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html}
 **/
export interface S3BucketObjectLockRule {
  /**
   * The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, bucket settings require both `Mode` and a period of either `Days` or `Years`. You cannot specify `Days` and `Years` at the same time. For more information about allowable values for mode and period, see [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).
   *
   * _Required_: Conditional
   *
   * _Type_: [DefaultRetention](aws-properties-s3-bucket-defaultretention.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultRetention?: S3BucketDefaultRetention;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule.html}
 **/
export interface S3BucketRule {
  AbortIncompleteMultipartUpload?: S3BucketAbortIncompleteMultipartUpload;
  ExpirationDate?: Value<string>;
  ExpirationInDays?: Value<number>;
  ExpiredObjectDeleteMarker?: Value<boolean>;
  Id?: Value<string>;
  NoncurrentVersionExpiration?: S3BucketNoncurrentVersionExpiration;
  NoncurrentVersionExpirationInDays?: Value<number>;
  NoncurrentVersionTransition?: S3BucketNoncurrentVersionTransition;
  NoncurrentVersionTransitions?: List<S3BucketNoncurrentVersionTransition>;
  ObjectSizeGreaterThan?: Value<number>;
  ObjectSizeLessThan?: Value<number>;
  Prefix?: Value<string>;
  Status: Value<string>;
  TagFilters?: List<S3BucketTagFilter>;
  Transition?: S3BucketTransition;
  Transitions?: List<S3BucketTransition>;
}

/**
 * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For examples, see [AWS::S3::Bucket](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html#aws-properties-s3-bucket--examples). For more information, see [ PUT Bucket metrics](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html) in the _Amazon S3 API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html}
 **/
export interface S3BucketMetricsConfiguration {
  /**
   * The access point that was used while performing operations on the object. The metrics configuration only includes objects that meet the filter's criteria.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessPointArn?: Value<string>;
  /**
   * The ID used to identify the metrics configuration. This can be any value you choose that helps you identify your metrics configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * The prefix that an object must have to be included in the metrics results.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * Specifies a list of tag filters to use as a metrics configuration filter. The metrics configuration includes only objects that meet the filter's criteria.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFilter](aws-properties-s3-bucket-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagFilters?: List<S3BucketTagFilter>;
}

/**
 * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS) bucket. For information about the Amazon S3 default encryption feature, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-bucketencryption.html}
 **/
export interface S3BucketBucketEncryption {
  /**
   * Specifies the default server-side-encryption configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ServerSideEncryptionRule](aws-properties-s3-bucket-serversideencryptionrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerSideEncryptionConfiguration: List<S3BucketServerSideEncryptionRule>;
}

/**
 * A container specifying replication metrics-related settings enabling replication metrics and events.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metrics.html}
 **/
export interface S3BucketMetrics {
  /**
   * A container specifying the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event.
   *
   * _Required_: No
   *
   * _Type_: [ReplicationTimeValue](aws-properties-s3-bucket-replicationtimevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventThreshold?: S3BucketReplicationTimeValue;
  /**
   * Specifies whether the replication metrics are enabled.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig.html}
 **/
export interface S3BucketLifecycleConfiguration {
  Rules: List<S3BucketRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig.html}
 **/
export interface S3BucketNotificationConfiguration {
  EventBridgeConfiguration?: S3BucketEventBridgeConfiguration;
  LambdaConfigurations?: List<S3BucketLambdaConfiguration>;
  QueueConfigurations?: List<S3BucketQueueConfiguration>;
  TopicConfigurations?: List<S3BucketTopicConfiguration>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-redirectallrequeststo.html}
 **/
export interface S3BucketRedirectAllRequestsTo {
  HostName: Value<string>;
  Protocol?: Value<string>;
}

/**
 * Specifies the inventory configuration for an Amazon S3 bucket. For more information, see [GET Bucket inventory](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the _Amazon S3 API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html}
 **/
export interface S3BucketInventoryConfiguration {
  /**
   * Contains information about where to publish the inventory results.
   *
   * _Required_: Yes
   *
   * _Type_: [Destination](aws-properties-s3-bucket-destination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: S3BucketDestination;
  /**
   * Specifies whether the inventory is enabled or disabled. If set to `True`, an inventory list is generated. If set to `False`, no inventory list is generated.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * The ID used to identify the inventory configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * Object versions to include in the inventory list. If set to `All`, the list includes all the object versions, which adds the version-related fields `VersionId`, `IsLatest`, and `DeleteMarker` to the list. If set to `Current`, the list does not contain these version-related fields.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `All | Current`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludedObjectVersions: Value<string>;
  /**
   * Contains the optional fields that are included in the inventory results.
   *
   * _Valid values_: `Size | LastModifiedDate | StorageClass | ETag | IsMultipartUploaded | ReplicationStatus | EncryptionStatus | ObjectLockRetainUntilDate | ObjectLockMode | ObjectLockLegalHoldStatus | IntelligentTieringAccessTier | BucketKeyStatus`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptionalFields?: List<Value<string>>;
  /**
   * Specifies the inventory filter prefix.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * Specifies the schedule for generating inventory results.
   *
   * _Allowed values_: `Daily` | `Weekly`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleFrequency: Value<string>;
}

/**
 * A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html}
 **/
export interface S3BucketReplicationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see [How to Set Up Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html) in the _Amazon S3 User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role: Value<string>;
  /**
   * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ReplicationRule](aws-properties-s3-bucket-replicationconfiguration-rules.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules: List<S3BucketReplicationRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html}
 **/
export interface S3BucketCorsConfiguration {
  CorsRules: List<S3BucketCorsRule>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter.html}
 **/
export interface S3BucketNotificationFilter {
  S3Key: S3BucketS3KeyFilter;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfig-lambdaconfig.html}
 **/
export interface S3BucketLambdaConfiguration {
  Event: Value<string>;
  Filter?: S3BucketNotificationFilter;
  Function: Value<string>;
}

/**
 * Specifies the default server-side encryption configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionrule.html}
 **/
export interface S3BucketServerSideEncryptionRule {
  /**
   * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the `BucketKeyEnabled` element to `true` causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
   *
   * For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the _Amazon S3 User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketKeyEnabled?: Value<boolean>;
  /**
   * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
   *
   * _Required_: No
   *
   * _Type_: [ServerSideEncryptionByDefault](aws-properties-s3-bucket-serversideencryptionbydefault.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerSideEncryptionByDefault?: S3BucketServerSideEncryptionByDefault;
}

/**
 * Specifies tags to use to identify a subset of objects for an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tagfilter.html}
 **/
export interface S3BucketTagFilter {
  /**
   * The tag key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
  /**
   * The tag value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule-transition.html}
 **/
export interface S3BucketTransition {
  StorageClass: Value<string>;
  TransitionDate?: Value<string>;
  TransitionInDays?: Value<number>;
}
export interface S3BucketProperties {
  AccelerateConfiguration?: S3BucketAccelerateConfiguration;
  AccessControl?: Value<string>;
  AnalyticsConfigurations?: List<S3BucketAnalyticsConfiguration>;
  BucketEncryption?: S3BucketBucketEncryption;
  BucketName?: Value<string>;
  CorsConfiguration?: S3BucketCorsConfiguration;
  IntelligentTieringConfigurations?: List<S3BucketIntelligentTieringConfiguration>;
  InventoryConfigurations?: List<S3BucketInventoryConfiguration>;
  LifecycleConfiguration?: S3BucketLifecycleConfiguration;
  LoggingConfiguration?: S3BucketLoggingConfiguration;
  MetricsConfigurations?: List<S3BucketMetricsConfiguration>;
  NotificationConfiguration?: S3BucketNotificationConfiguration;
  ObjectLockConfiguration?: S3BucketObjectLockConfiguration;
  ObjectLockEnabled?: Value<boolean>;
  OwnershipControls?: S3BucketOwnershipControls;
  PublicAccessBlockConfiguration?: S3BucketPublicAccessBlockConfiguration;
  ReplicationConfiguration?: S3BucketReplicationConfiguration;
  Tags?: List<ResourceTag>;
  VersioningConfiguration?: S3BucketVersioningConfiguration;
  WebsiteConfiguration?: S3BucketWebsiteConfiguration;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html}
 */
export interface S3BucketResource {
  Type: 'AWS::S3::Bucket';
  Properties: S3BucketProperties;
}
