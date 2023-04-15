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
 * Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.
 *
 * The `AutoImportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoimportpolicy.html}
 **/
export interface FSxDataRepositoryAssociationAutoImportPolicy {
  /**
   * The `AutoImportPolicy` can have the following event values:
   */
  Events: List<Value<string>>;
}

/**
 * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-s3.html}
 **/
export interface FSxDataRepositoryAssociationS3 {
  /**
   * Describes the data repository association's automatic import policy. The AutoImportPolicy defines how Amazon FSx keeps your file metadata and directory listings up to date by importing changes to your Amazon FSx for Lustre file system as you modify objects in a linked S3 bucket.
   *
   * The `AutoImportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
   *
   * _Required_: No
   *
   * _Type_: [AutoImportPolicy](aws-properties-fsx-datarepositoryassociation-autoimportpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoImportPolicy?: FSxDataRepositoryAssociationAutoImportPolicy;
  /**
   * Describes a data repository association's automatic export policy. The `AutoExportPolicy` defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.
   *
   * The `AutoExportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
   *
   * _Required_: No
   *
   * _Type_: [AutoExportPolicy](aws-properties-fsx-datarepositoryassociation-autoexportpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoExportPolicy?: FSxDataRepositoryAssociationAutoExportPolicy;
}

/**
 * Describes a data repository association's automatic export policy. The `AutoExportPolicy` defines the types of updated objects on the file system that will be automatically exported to the data repository. As you create, modify, or delete files, Amazon FSx for Lustre automatically exports the defined changes asynchronously once your application finishes modifying the file.
 *
 * The `AutoExportPolicy` is only supported on Amazon FSx for Lustre file systems with a data repository association.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoexportpolicy.html}
 **/
export interface FSxDataRepositoryAssociationAutoExportPolicy {
  /**
   * The `AutoExportPolicy` can have the following event values:
   */
  Events: List<Value<string>>;
}
export interface FSxDataRepositoryAssociationProperties {
  /**
   * A path on the Amazon FSx for Lustre file system that points to a high-level directory (such as `/ns1/`) or subdirectory (such as `/ns1/subdir/`) that will be mapped 1-1 with `DataRepositoryPath`. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path `/ns1/`, then you cannot link another data repository with file system path `/ns1/ns2`.
   *
   * This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
   *
   * If you specify only a forward slash (`/`) as the file system path, you can link only one data repository to the file system. You can only specify "/" as the file system path for the first data repository associated with a file system.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{1,4096}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemPath: Value<string>;
  /**
   * The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format `s3://myBucket/myPrefix/`. This path specifies where in the S3 data repository files will be imported from or exported to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `4357`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{3,4357}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataRepositoryPath: Value<string>;
  /**
   * A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BatchImportMetaDataOnCreate?: Value<boolean>;
  /**
   * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
   *
   * _Required_: No
   *
   * _Type_: [S3](aws-properties-fsx-datarepositoryassociation-s3.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: FSxDataRepositoryAssociationS3;
  /**
   * The ID of the file system on which the data repository association is configured.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemId: Value<string>;
  /**
   * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system or cache.
   *
   * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImportedFileChunkSize?: Value<number>;
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
}

/**
 * Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported only for file systems with the `Persistent_2` deployment type.
 *
 * Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see [Linking your file system to an S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html}
 */
export interface FSxDataRepositoryAssociationResource {
  Type: 'AWS::FSx::DataRepositoryAssociation';
  Properties: FSxDataRepositoryAssociationProperties;
}
