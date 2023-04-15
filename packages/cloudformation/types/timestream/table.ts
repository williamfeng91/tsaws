/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The location to write error reports for records rejected, asynchronously, during magnetic store writes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorerejecteddatalocation.html}
 **/
export interface TimestreamTableMagneticStoreRejectedDataLocation {
  /**
   * Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes.
   *
   * _Required_: No
   *
   * _Type_: [S3Configuration](aws-properties-timestream-table-s3configuration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration?: TimestreamTableS3Configuration;
}

/**
 * The set of properties on a table for configuring magnetic store writes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorewriteproperties.html}
 **/
export interface TimestreamTableMagneticStoreWriteProperties {
  /**
   * A flag to enable magnetic store writes.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableMagneticStoreWrites: Value<boolean>;
  /**
   * The location to write error reports for records rejected asynchronously during magnetic store writes.
   *
   * _Required_: No
   *
   * _Type_: [MagneticStoreRejectedDataLocation](aws-properties-timestream-table-magneticstorerejecteddatalocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MagneticStoreRejectedDataLocation?: TimestreamTableMagneticStoreRejectedDataLocation;
}

/**
 * The configuration that specifies an S3 location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-s3configuration.html}
 **/
export interface TimestreamTableS3Configuration {
  /**
   * The bucket name of the customer S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[a-z0-9][.-a-z0-9]{1,61}[a-z0-9]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The AWS KMS key ID for the customer S3 location when encrypting with an AWS managed key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
  /**
   * The object key preview for the customer S3 location.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `928`
   *
   * _Pattern_: `[a-zA-Z0-9|!-_*'()]([a-zA-Z0-9]|[!-_*'()/.])+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectKeyPrefix?: Value<string>;
  /**
   * The encryption option for the customer S3 location. Options are S3 server-side encryption with an S3 managed key or AWS managed key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SSE_KMS | SSE_S3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionOption: Value<string>;
}

/**
 * Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-retentionproperties.html}
 **/
export interface TimestreamTableRetentionProperties {
  /**
   * The duration for which data must be stored in the magnetic store.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MagneticStoreRetentionPeriodInDays?: Value<string>;
  /**
   * The duration for which data must be stored in the memory store.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemoryStoreRetentionPeriodInHours?: Value<string>;
}
export interface TimestreamTableProperties {
  /**
   * The name of the Timestream table.
   *
   * _Length Constraints_: Minimum length of 3 bytes. Maximum length of 256 bytes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableName?: Value<string>;
  /**
   * The retention duration for the memory store and magnetic store. This object has the following attributes:
   *
   * **YAML**
   *
   * _Required_: No
   *
   * _Type_: [RetentionProperties](aws-properties-timestream-table-retentionproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionProperties?: TimestreamTableRetentionProperties;
  /**
   * The name of the Timestream database that contains this table.
   *
   * _Length Constraints_: Minimum length of 3 bytes. Maximum length of 256 bytes.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatabaseName: Value<string>;
  /**
   * The tags to add to the table
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Contains properties to set on the table when enabling magnetic store writes.
   *
   * This object has the following attributes:
   *
   * **YAML**
   *
   * _Required_: No
   *
   * _Type_: [MagneticStoreWriteProperties](aws-properties-timestream-table-magneticstorewriteproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MagneticStoreWriteProperties?: TimestreamTableMagneticStoreWriteProperties;
}

/**
 * The CreateTable operation adds a new table to an existing database in your account. In an AWS account, table names must be at least unique within each Region if they are in the same database. You may have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. [Service quotas apply](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html). See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html) for details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html}
 */
export interface TimestreamTableResource {
  Type: 'AWS::Timestream::Table';
  Properties: TimestreamTableProperties;
}
