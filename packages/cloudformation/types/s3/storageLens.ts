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
 * This resource contains the details of the prefix-level storage metrics for Amazon S3 Storage Lens.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevelstoragemetrics.html}
 **/
export interface S3StorageLensPrefixLevelStorageMetrics {
  /**
   * This property identifies whether the details of the prefix-level storage metrics for S3 Storage Lens are enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled?: Value<boolean>;
  /**
   * This property identifies whether the details of the prefix-level storage metrics for S3 Storage Lens are enabled.
   *
   * _Required_: No
   *
   * _Type_: [SelectionCriteria](aws-properties-s3-storagelens-selectioncriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectionCriteria?: S3StorageLensSelectionCriteria;
}

/**
 * This resource enables Amazon S3 Storage Lens activity metrics. Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.
 *
 * For more information, see [ Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [ S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-activitymetrics.html}
 **/
export interface S3StorageLensActivityMetrics {
  /**
   * A property that indicates whether the activity metrics is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled?: Value<boolean>;
}

/**
 * This resource contains the details of the AWS Organization for Amazon S3 Storage Lens.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-awsorg.html}
 **/
export interface S3StorageLensAwsOrg {
  /**
   * This resource contains the ARN of the AWS Organization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
}

/**
 * This resource enables the Amazon CloudWatch publishing option for Amazon S3 Storage Lens metrics.
 *
 * For more information, see [ Monitor S3 Storage Lens metrics in CloudWatch](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-cloudwatchmetrics.html}
 **/
export interface S3StorageLensCloudWatchMetrics {
  /**
   * This property identifies whether the CloudWatch publishing option for S3 Storage Lens is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled: Value<boolean>;
}

/**
 * This resource enables Amazon S3 Storage Lens advanced data protection metrics. Advanced data protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.
 *
 * For more information, see [ Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [ S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advanceddataprotectionmetrics.html}
 **/
export interface S3StorageLensAdvancedDataProtectionMetrics {
  /**
   * Indicates whether advanced data protection metrics are enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled?: Value<boolean>;
}

/**
 * This resource contains the details of the bucket where the Amazon S3 Storage Lens metrics export will be placed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html}
 **/
export interface S3StorageLensS3BucketDestination {
  /**
   * This property contains the details of the output schema version of the S3 Storage Lens export bucket destination.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputSchemaVersion: Value<string>;
  /**
   * This property contains the details of the format of the S3 Storage Lens export bucket destination.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format: Value<string>;
  /**
   * This property contains the details of the AWS account ID of the S3 Storage Lens export bucket destination.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountId: Value<string>;
  /**
   * This property contains the details of the prefix of the bucket destination of the S3 Storage Lens export .
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * This property contains the details of the encryption of the bucket destination of the Amazon S3 Storage Lens metrics export.
   *
   * _Required_: No
   *
   * _Type_: [Encryption](aws-properties-s3-storagelens-encryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: S3StorageLensEncryption;
  /**
   * This property contains the details of the ARN of the bucket destination of the S3 Storage Lens export.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
}

/**
 * This resource contains the details of the account-level metrics for Amazon S3 Storage Lens.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html}
 **/
export interface S3StorageLensAccountLevel {
  /**
   * This property contains the details of account-level advanced data protection metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [AdvancedDataProtectionMetrics](aws-properties-s3-storagelens-advanceddataprotectionmetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedDataProtectionMetrics?: S3StorageLensAdvancedDataProtectionMetrics;
  /**
   * This property contains the details of account-level activity metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [ActivityMetrics](aws-properties-s3-storagelens-activitymetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActivityMetrics?: S3StorageLensActivityMetrics;
  /**
   * This property contains the details of the account-level bucket-level configurations for Amazon S3 Storage Lens.
   *
   * _Required_: Yes
   *
   * _Type_: [BucketLevel](aws-properties-s3-storagelens-bucketlevel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketLevel: S3StorageLensBucketLevel;
  /**
   * This property contains the details of account-level advanced cost optimization metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [AdvancedCostOptimizationMetrics](aws-properties-s3-storagelens-advancedcostoptimizationmetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedCostOptimizationMetrics?: S3StorageLensAdvancedCostOptimizationMetrics;
  /**
   * This property contains the details of account-level detailed status code metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [DetailedStatusCodesMetrics](aws-properties-s3-storagelens-detailedstatuscodesmetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetailedStatusCodesMetrics?: S3StorageLensDetailedStatusCodesMetrics;
}

/**
 * This resource enables Amazon S3 Storage Lens detailed status code metrics. Detailed status code metrics generate metrics for HTTP status codes, such as `200 OK`, `403 Forbidden`, `503 Service Unavailable` and others.
 *
 * For more information, see [ Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [ S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-detailedstatuscodesmetrics.html}
 **/
export interface S3StorageLensDetailedStatusCodesMetrics {
  /**
   * Indicates whether detailed status code metrics are enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled?: Value<boolean>;
}

/**
 * This resource contains the details of the Amazon S3 Storage Lens selection criteria.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-selectioncriteria.html}
 **/
export interface S3StorageLensSelectionCriteria {
  /**
   * This property contains the details of the S3 Storage Lens delimiter being used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Delimiter?: Value<string>;
  /**
   * This property contains the details of the max depth that S3 Storage Lens will collect metrics up to.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxDepth?: Value<number>;
  /**
   * This property contains the details of the minimum storage bytes percentage threshold that S3 Storage Lens will collect metrics up to.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinStorageBytesPercentage?: Value<number>;
}

/**
 * A property for the bucket-level storage metrics for Amazon S3 Storage Lens.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html}
 **/
export interface S3StorageLensBucketLevel {
  /**
   * A property for bucket-level advanced data protection metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [AdvancedDataProtectionMetrics](aws-properties-s3-storagelens-advanceddataprotectionmetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedDataProtectionMetrics?: S3StorageLensAdvancedDataProtectionMetrics;
  /**
   * A property for bucket-level prefix-level storage metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [PrefixLevel](aws-properties-s3-storagelens-prefixlevel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixLevel?: S3StorageLensPrefixLevel;
  /**
   * A property for bucket-level activity metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [ActivityMetrics](aws-properties-s3-storagelens-activitymetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActivityMetrics?: S3StorageLensActivityMetrics;
  /**
   * A property for bucket-level advanced cost optimization metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [AdvancedCostOptimizationMetrics](aws-properties-s3-storagelens-advancedcostoptimizationmetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedCostOptimizationMetrics?: S3StorageLensAdvancedCostOptimizationMetrics;
  /**
   * A property for bucket-level detailed status code metrics for S3 Storage Lens.
   *
   * _Required_: No
   *
   * _Type_: [DetailedStatusCodesMetrics](aws-properties-s3-storagelens-detailedstatuscodesmetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetailedStatusCodesMetrics?: S3StorageLensDetailedStatusCodesMetrics;
}

/**
 * This resource contains the details of the buckets and Regions for the Amazon S3 Storage Lens configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketsandregions.html}
 **/
export interface S3StorageLensBucketsAndRegions {
  /**
   * This property contains the details of the Regions for the S3 Storage Lens configuration.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regions?: List<Value<string>>;
  /**
   * This property contains the details of the buckets for the Amazon S3 Storage Lens configuration. This should be the bucket Amazon Resource Name(ARN). For valid values, see [Buckets ARN format here](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_Include.html#API_control_Include_Contents) in the _Amazon S3 API Reference_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Buckets?: List<Value<string>>;
}

/**
 * This resource contains the details of the Amazon S3 Storage Lens metrics export.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-dataexport.html}
 **/
export interface S3StorageLensDataExport {
  /**
   * This property contains the details of the bucket where the S3 Storage Lens metrics export will be placed.
   *
   * _Required_: No
   *
   * _Type_: [S3BucketDestination](aws-properties-s3-storagelens-s3bucketdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketDestination?: S3StorageLensS3BucketDestination;
  /**
   * This property enables the Amazon CloudWatch publishing option for S3 Storage Lens metrics.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchMetrics](aws-properties-s3-storagelens-cloudwatchmetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchMetrics?: S3StorageLensCloudWatchMetrics;
}

/**
 * This resource contains the details of the prefix-level of the Amazon S3 Storage Lens.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevel.html}
 **/
export interface S3StorageLensPrefixLevel {
  /**
   * A property for the prefix-level storage metrics for Amazon S3 Storage Lens.
   *
   * _Required_: Yes
   *
   * _Type_: [PrefixLevelStorageMetrics](aws-properties-s3-storagelens-prefixlevelstoragemetrics.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageMetrics: S3StorageLensPrefixLevelStorageMetrics;
}

/**
 * Specifies the use of server-side encryption using an AWS Key Management Service key (SSE-KMS) to encrypt the delivered S3 Storage Lens metrics export file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-ssekms.html}
 **/
export interface S3StorageLensSSEKMS {
  /**
   * Specifies the Amazon Resource Name (ARN) of the customer managed AWS KMS key to use for encrypting the S3 Storage Lens metrics export file. Amazon S3 only supports symmetric encryption keys. For more information, see [Special-purpose keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-types.html) in the _AWS Key Management Service Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyId: Value<string>;
}

/**
 * This resource enables Amazon S3 Storage Lens advanced cost optimization metrics. Advanced cost optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.
 *
 * For more information, see [ Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [ S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advancedcostoptimizationmetrics.html}
 **/
export interface S3StorageLensAdvancedCostOptimizationMetrics {
  /**
   * Indicates whether advanced cost optimization metrics are enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled?: Value<boolean>;
}

/**
 * This resource contains the type of server-side encryption used to encrypt an Amazon S3 Storage Lens metrics export. For valid values, see the [ StorageLensDataExportEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_StorageLensDataExportEncryption.html) in the _Amazon S3 API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-encryption.html}
 **/
export interface S3StorageLensEncryption {
  /**
   * Specifies the use of AWS Key Management Service keys (SSE-KMS) to encrypt the S3 Storage Lens metrics export file.
   *
   * _Required_: No
   *
   * _Type_: [SSEKMS](aws-properties-s3-storagelens-ssekms.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSEKMS?: S3StorageLensSSEKMS;
  /**
   * Specifies the use of an Amazon S3-managed key (SSE-S3) to encrypt the S3 Storage Lens metrics export file.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSES3?: { [key: string]: any };
}

/**
 * This is the property of the Amazon S3 Storage Lens configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html}
 **/
export interface S3StorageLensStorageLensConfiguration {
  /**
   * This property contains the details of the account-level metrics for Amazon S3 Storage Lens configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [AccountLevel](aws-properties-s3-storagelens-accountlevel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountLevel: S3StorageLensAccountLevel;
  /**
   * This property contains the details of the bucket and or Regions excluded for Amazon S3 Storage Lens configuration.
   *
   * _Required_: No
   *
   * _Type_: [BucketsAndRegions](aws-properties-s3-storagelens-bucketsandregions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exclude?: S3StorageLensBucketsAndRegions;
  /**
   * This property contains the details of whether the Amazon S3 Storage Lens configuration is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled: Value<boolean>;
  /**
   * This property contains the details of the bucket and or Regions included for Amazon S3 Storage Lens configuration.
   *
   * _Required_: No
   *
   * _Type_: [BucketsAndRegions](aws-properties-s3-storagelens-bucketsandregions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Include?: S3StorageLensBucketsAndRegions;
  /**
   * This property contains the details of the AWS Organization for the S3 Storage Lens configuration.
   *
   * _Required_: No
   *
   * _Type_: [AwsOrg](aws-properties-s3-storagelens-awsorg.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsOrg?: S3StorageLensAwsOrg;
  /**
   * This property contains the details of the ID of the S3 Storage Lens configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * This property contains the details of the ARN of the S3 Storage Lens configuration. This property is read-only.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageLensArn?: Value<string>;
  /**
   * This property contains the details of this S3 Storage Lens configuration's metrics export.
   *
   * _Required_: No
   *
   * _Type_: [DataExport](aws-properties-s3-storagelens-dataexport.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataExport?: S3StorageLensDataExport;
}
export interface S3StorageLensProperties {
  /**
   * This resource contains the details Amazon S3 Storage Lens configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [StorageLensConfiguration](aws-properties-s3-storagelens-storagelensconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageLensConfiguration: S3StorageLensStorageLensConfiguration;
  /**
   * A set of tags (key–value pairs) to associate with the Storage Lens configuration.
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
 * The AWS::S3::StorageLens resource creates an Amazon S3 Storage Lens configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html}
 */
export interface S3StorageLensResource {
  Type: 'AWS::S3::StorageLens';
  Properties: S3StorageLensProperties;
}
