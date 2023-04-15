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
 * Information about the target S3 bucket for the resource data sync.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html}
 **/
export interface SSMResourceDataSyncS3Destination {
  /**
   * The ARN of an encryption key for a destination in Amazon S3. Must belong to the same Region as the destination S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KMSKeyArn?: Value<string>;
  /**
   * The name of the S3 bucket where the aggregated data is stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName: Value<string>;
  /**
   * The AWS Region with the S3 bucket targeted by the resource data sync.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketRegion: Value<string>;
  /**
   * A supported sync format. The following format is currently supported: JsonSerDe
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `JsonSerDe`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SyncFormat: Value<string>;
  /**
   * An Amazon S3 prefix for the bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketPrefix?: Value<string>;
}

/**
 * Information about the `AwsOrganizationsSource` resource data sync source. A sync source of this type can synchronize data from AWS Organizations or, if an AWS organization isn't present, from multiple AWS Regions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-awsorganizationssource.html}
 **/
export interface SSMResourceDataSyncAwsOrganizationsSource {
  /**
   * If an AWS organization is present, this is either `OrganizationalUnits` or `EntireOrganization`. For `OrganizationalUnits`, the data is aggregated from a set of organization units. For `EntireOrganization`, the data is aggregated from the entire AWS organization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationSourceType: Value<string>;
  /**
   * The AWS Organizations organization units included in the sync.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationalUnits?: List<Value<string>>;
}

/**
 * Information about the source of the data included in the resource data sync.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html}
 **/
export interface SSMResourceDataSyncSyncSource {
  /**
   * The type of data source for the resource data sync. `SourceType` is either `AwsOrganizations` (if an organization is present in AWS Organizations) or `SingleAccountMultiRegions`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceType: Value<string>;
  /**
   * Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from AWS Organizations.
   *
   * _Required_: No
   *
   * _Type_: [AwsOrganizationsSource](aws-properties-ssm-resourcedatasync-awsorganizationssource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsOrganizationsSource?: SSMResourceDataSyncAwsOrganizationsSource;
  /**
   * Whether to automatically synchronize and aggregate data from new AWS Regions when those Regions come online.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeFutureRegions?: Value<boolean>;
  /**
   * The `SyncSource` AWS Regions included in the resource data sync.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceRegions: List<Value<string>>;
}
export interface SSMResourceDataSyncProperties {
  /**
   * Configuration information for the target S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: [S3Destination](aws-properties-ssm-resourcedatasync-s3destination.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Destination?: SSMResourceDataSyncS3Destination;
  /**
   * The ARN of an encryption key for a destination in Amazon S3. You can use a KMS key to encrypt inventory data in Amazon S3. You must specify a key that exist in the same region as the destination Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KMSKeyArn?: Value<string>;
  /**
   * Information about the source where the data was synchronized.
   *
   * _Required_: No
   *
   * _Type_: [SyncSource](aws-properties-ssm-resourcedatasync-syncsource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SyncSource?: SSMResourceDataSyncSyncSource;
  /**
   * The name of the S3 bucket where the aggregated data is stored.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName?: Value<string>;
  /**
   * The AWS Region with the S3 bucket targeted by the resource data sync.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketRegion?: Value<string>;
  /**
   * A supported sync format. The following format is currently supported: JsonSerDe
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `JsonSerDe`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SyncFormat?: Value<string>;
  /**
   * The type of resource data sync. If `SyncType` is `SyncToDestination`, then the resource data sync synchronizes data to an S3 bucket. If the `SyncType` is `SyncFromSource` then the resource data sync synchronizes data from AWS Organizations or from multiple AWS Regions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SyncType?: Value<string>;
  /**
   * An Amazon S3 prefix for the bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketPrefix?: Value<string>;
  /**
   * A name for the resource data sync.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SyncName: Value<string>;
}

/**
 * The `AWS::SSM::ResourceDataSync` resource creates, updates, or deletes a resource data sync for AWS Systems Manager. A resource data sync helps you view data from multiple sources in a single location. Systems Manager offers two types of resource data sync: `SyncToDestination` and `SyncFromSource`.
 *
 * You can configure Systems Manager Inventory to use the `SyncToDestination` type to synchronize Inventory data from multiple AWS Regions to a single Amazon S3 bucket.
 *
 * You can configure Systems Manager Explorer to use the `SyncFromSource` type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions. This type can synchronize OpsItems and OpsData from multiple AWS accounts and Regions or from an `EntireOrganization` by using AWS Organizations.
 *
 * A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data.
 *
 * By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy.
 *
 * For more information, see [Configuring Inventory Collection](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-configuring.html#sysman-inventory-datasync) and [Setting Up Systems Manager Explorer to Display Data from Multiple Accounts and Regions](https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html) in the _AWS Systems Manager User Guide_.
 *
 * Important: The following _Syntax_ section shows all fields that are supported for a resource data sync. The _Examples_ section below shows the recommended way to specify configurations for each sync type. Please see the _Examples_ section when you create your resource data sync.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html}
 */
export interface SSMResourceDataSyncResource {
  Type: 'AWS::SSM::ResourceDataSync';
  Properties: SSMResourceDataSyncProperties;
}
