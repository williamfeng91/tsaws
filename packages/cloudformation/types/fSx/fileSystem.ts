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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration-nfsexports.html}
 **/
export interface FSxFileSystemNfsExports {
  ClientConfigurations?: List<FSxFileSystemClientConfigurations>;
}

/**
 * The OpenZFS configuration for the file system that's being created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration.html}
 **/
export interface FSxFileSystemOpenZFSConfiguration {
  /**
   * To delete a file system if there are child volumes present below the root volume, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`. If your file system has child volumes and you don't use this option, the delete request will fail.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Options?: List<Value<string>>;
  /**
   * A recurring weekly time, in the format `D:HH:MM`.
   *
   * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   *
   * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeeklyMaintenanceStartTime?: Value<string>;
  /**
   * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).
   *
   * _Required_: No
   *
   * _Type_: [DiskIopsConfiguration](aws-properties-fsx-filesystem-openzfsconfiguration-diskiopsconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DiskIopsConfiguration?: FSxFileSystemDiskIopsConfiguration;
  /**
   * A Boolean value indicating whether tags for the file system should be copied to volumes. This value defaults to `false`. If it's set to `true`, all tags for the file system are copied to volumes where the user doesn't specify tags. If this value is `true`, and you specify one or more tags, only the specified tags are copied to volumes. If you specify one or more tags when creating the volume, no tags are copied from the file system, regardless of this value.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTagsToVolumes?: Value<boolean>;
  /**
   * Specifies the file system deployment type. Single AZ deployment types are configured for redundancy within a single Availability Zone in an AWS Region . Valid values are the following:
   */
  DeploymentType: Value<string>;
  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DailyAutomaticBackupStartTime?: Value<string>;
  /**
   * A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to `false`. If it's set to `true`, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is `true`, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTagsToBackups?: Value<boolean>;
  /**
   * Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MB/s). Valid values depend on the DeploymentType you choose, as follows:
   */
  ThroughputCapacity?: Value<number>;
  /**
   * The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS file system. All volumes are children of the root volume.
   *
   * _Required_: No
   *
   * _Type_: [RootVolumeConfiguration](aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RootVolumeConfiguration?: FSxFileSystemRootVolumeConfiguration;
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticBackupRetentionDays?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration-userandgroupquotas.html}
 **/
export interface FSxFileSystemUserAndGroupQuotas {
  Type?: Value<string>;
  Id?: Value<number>;
  StorageCapacityQuotaGiB?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration-selfmanagedactivedirectoryconfiguration.html}
 **/
export interface FSxFileSystemSelfManagedActiveDirectoryConfiguration {
  FileSystemAdministratorsGroup?: Value<string>;
  UserName?: Value<string>;
  DomainName?: Value<string>;
  OrganizationalUnitDistinguishedName?: Value<string>;
  DnsIps?: List<Value<string>>;
  Password?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-diskiopsconfiguration.html}
 **/
export interface FSxFileSystemDiskIopsConfiguration {
  Mode?: Value<string>;
  Iops?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration-nfsexports-clientconfigurations.html}
 **/
export interface FSxFileSystemClientConfigurations {
  Options?: List<Value<string>>;
  Clients?: Value<string>;
}

/**
 * The configuration for this Amazon FSx for NetApp ONTAP file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-ontapconfiguration.html}
 **/
export interface FSxFileSystemOntapConfiguration {
  /**
   * The ONTAP administrative password for the `fsxadmin` user with which you administer your file system using the NetApp ONTAP CLI and REST API.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `8`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{8,50}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FsxAdminPassword?: Value<string>;
  /**
   * (Multi-AZ only) Specifies the virtual private cloud (VPC) route tables in which your file system's endpoints will be created. You should specify all VPC route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RouteTableIds?: List<Value<string>>;
  /**
   * A recurring weekly time, in the format `D:HH:MM`.
   *
   * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   *
   * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeeklyMaintenanceStartTime?: Value<string>;
  /**
   * The SSD IOPS configuration for the FSx for ONTAP file system.
   *
   * _Required_: No
   *
   * _Type_: [DiskIopsConfiguration](aws-properties-fsx-filesystem-openzfsconfiguration-diskiopsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DiskIopsConfiguration?: FSxFileSystemDiskIopsConfiguration;
  /**
   * Specifies the FSx for ONTAP file system deployment type to use in creating the file system.
   */
  DeploymentType: Value<string>;
  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DailyAutomaticBackupStartTime?: Value<string>;
  /**
   * Sets the throughput capacity for the file system that you're creating. Valid values are 128, 256, 512, 1024, 2048, and 4096 MBps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `8`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThroughputCapacity?: Value<number>;
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticBackupRetentionDays?: Value<number>;
  /**
   * (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API, Amazon FSx selects an unused IP address range for you from the 198.19.* range. By default in the Amazon FSx console, Amazon FSx chooses the last 64 IP addresses from the VPC’s primary CIDR range to use as the endpoint IP address range for the file system. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `9`
   *
   * _Maximum_: `17`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{9,17}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointIpAddressRange?: Value<string>;
  /**
   * Required when `DeploymentType` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreferredSubnetId?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration.html}
 **/
export interface FSxFileSystemRootVolumeConfiguration {
  ReadOnly?: Value<boolean>;
  DataCompressionType?: Value<string>;
  NfsExports?: List<FSxFileSystemNfsExports>;
  CopyTagsToSnapshots?: Value<boolean>;
  RecordSizeKiB?: Value<number>;
  UserAndGroupQuotas?: List<FSxFileSystemUserAndGroupQuotas>;
}

/**
 * The configuration for the Amazon FSx for Lustre file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-lustreconfiguration.html}
 **/
export interface FSxFileSystemLustreConfiguration {
  /**
   * Sets the data compression configuration for the file system. `DataCompressionType` can have the following values:
   */
  DataCompressionType?: Value<string>;
  /**
   * The type of drive cache used by `PERSISTENT_1` file systems that are provisioned with HDD storage devices. This parameter is required when storage type is HDD. Set this property to `READ` to improve the performance for frequently accessed files by caching up to 20% of the total storage capacity of the file system.
   *
   * This parameter is required when `StorageType` is set to `HDD` and `DeploymentType` is `PERSISTENT_1`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | READ`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DriveCacheType?: Value<string>;
  /**
   * (Optional) The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for your Amazon FSx for Lustre file system. The root of your FSx for Lustre file system will be mapped to the root of the Amazon S3 bucket you select. An example is `s3://import-bucket/optional-prefix`. If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
   *
   * This parameter is not supported for Lustre file systems using the `Persistent_2` deployment type.
   *
   * _Required_: No
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
  ImportPath?: Value<string>;
  /**
   * A recurring weekly time, in the format `D:HH:MM`.
   *
   * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   *
   * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeeklyMaintenanceStartTime?: Value<string>;
  /**
   * (Optional) Available with `Scratch` and `Persistent_1` deployment types. When you create your file system, your existing S3 objects appear as file and directory listings. Use this property to choose how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. `AutoImportPolicy` can have the following values:
   */
  AutoImportPolicy?: Value<string>;
  /**
   * (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
   *
   * The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   *
   * This parameter is not supported for Lustre file systems using the `Persistent_2` deployment type.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImportedFileChunkSize?: Value<number>;
  /**
   * (Optional) Choose `SCRATCH_1` and `SCRATCH_2` deployment types when you need temporary storage and shorter-term processing of data. The `SCRATCH_2` deployment type provides in-transit encryption of data and higher burst throughput capacity than `SCRATCH_1`.
   *
   * Choose `PERSISTENT_1` for longer-term storage and for throughput-focused workloads that aren’t latency-sensitive. `PERSISTENT_1` supports encryption of data in transit, and is available in all AWS Regions in which FSx for Lustre is available.
   *
   * Choose `PERSISTENT_2` for longer-term storage and for latency-sensitive workloads that require the highest levels of IOPS/throughput. `PERSISTENT_2` supports SSD storage, and offers higher `PerUnitStorageThroughput` (up to 1000 MB/s/TiB). `PERSISTENT_2` is available in a limited number of AWS Regions. For more information, and an up-to-date list of AWS Regions in which `PERSISTENT_2` is available, see [File system deployment options for FSx for Lustre](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html#lustre-deployment-types) in the _Amazon FSx for Lustre User Guide_.
   *
   * If you choose `PERSISTENT_2`, and you set `FileSystemTypeVersion` to `2.10`, the `CreateFileSystem` operation fails.
   *
   * Encryption of data in transit is automatically turned on when you access `SCRATCH_2`, `PERSISTENT_1` and `PERSISTENT_2` file systems from Amazon EC2 instances that support automatic encryption in the AWS Regions where they are available. For more information about encryption in transit for FSx for Lustre file systems, see [Encrypting data in transit](https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html) in the _Amazon FSx for Lustre User Guide_.
   *
   * (Default = `SCRATCH_1`)
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PERSISTENT_1 | PERSISTENT_2 | SCRATCH_1 | SCRATCH_2`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeploymentType?: Value<string>;
  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DailyAutomaticBackupStartTime?: Value<string>;
  /**
   * A Boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. Only valid for use with `PERSISTENT_1` deployment types.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CopyTagsToBackups?: Value<boolean>;
  /**
   * (Optional) Available with `Scratch` and `Persistent_1` deployment types. Specifies the path in the Amazon S3 bucket where the root of your Amazon FSx file system is exported. The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which new and changed data is to be exported from your Amazon FSx for Lustre file system. If an `ExportPath` value is not provided, Amazon FSx sets a default export path, `s3://import-bucket/FSxLustre[creation-timestamp]`. The timestamp is in UTC format, for example `s3://import-bucket/FSxLustre20181105T222312Z`.
   *
   * The Amazon S3 export bucket must be the same as the import bucket specified by `ImportPath`. If you specify only a bucket name, such as `s3://import-bucket`, you get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is overwritten on export. If you provide a custom prefix in the export path, such as `s3://import-bucket/[custom-optional-prefix]`, Amazon FSx exports the contents of your file system to that export prefix in the Amazon S3 bucket.
   *
   * This parameter is not supported for file systems using the `Persistent_2` deployment type.
   *
   * _Required_: No
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
  ExportPath?: Value<string>;
  /**
   * Required with `PERSISTENT_1` and `PERSISTENT_2` deployment types, provisions the amount of read and write throughput for each 1 tebibyte (TiB) of file system storage capacity, in MB/s/TiB. File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the `PerUnitStorageThroughput` (MB/s/TiB). For a 2.4-TiB ﬁle system, provisioning 50 MB/s/TiB of `PerUnitStorageThroughput` yields 120 MB/s of ﬁle system throughput. You pay for the amount of throughput that you provision.
   *
   * Valid values:
   */
  PerUnitStorageThroughput?: Value<number>;
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticBackupRetentionDays?: Value<number>;
}

/**
 * The Microsoft Windows configuration for the file system that's being created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration.html}
 **/
export interface FSxFileSystemWindowsConfiguration {
  /**
   * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see [ Using Amazon FSx with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html).
   *
   * _Required_: No
   *
   * _Type_: [SelfManagedActiveDirectoryConfiguration](aws-properties-fsx-filesystem-windowsconfiguration-selfmanagedactivedirectoryconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelfManagedActiveDirectoryConfiguration?: FSxFileSystemSelfManagedActiveDirectoryConfiguration;
  /**
   * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
   *
   * _Required_: No
   *
   * _Type_: [AuditLogConfiguration](aws-properties-fsx-filesystem-windowsconfiguration-auditlogconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuditLogConfiguration?: FSxFileSystemAuditLogConfiguration;
  /**
   * A recurring weekly time, in the format `D:HH:MM`.
   *
   * `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   *
   * `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   *
   * For example, `1:05:00` specifies maintenance at 5 AM Monday.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeeklyMaintenanceStartTime?: Value<string>;
  /**
   * The ID for an existing AWS Managed Microsoft Active Directory (AD) instance that the file system should join when it's created. Required if you are joining the file system to an existing AWS Managed Microsoft AD.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `^d-[0-9a-f]{10}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ActiveDirectoryId?: Value<string>;
  /**
   * Specifies the file system deployment type, valid values are the following:
   */
  DeploymentType?: Value<string>;
  /**
   * An array of one or more DNS alias names that you want to associate with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time.
   *
   * For more information, see [Working with DNS Aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html) and [Walkthrough 5: Using DNS aliases to access your file system](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html), including additional steps you must take to be able to access your file system using a DNS alias.
   *
   * An alias name has to meet the following requirements:
   */
  Aliases?: List<Value<string>>;
  /**
   * Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to the *n*th increments, between 2^3 (8) and 2^11 (2048).
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Minimum_: `8`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThroughputCapacity: Value<number>;
  /**
   * A boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CopyTagsToBackups?: Value<boolean>;
  /**
   * A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DailyAutomaticBackupStartTime?: Value<string>;
  /**
   * The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticBackupRetentionDays?: Value<number>;
  /**
   * Required when `DeploymentType` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located. For in-AWS applications, we recommend that you launch your clients in the same availability zone as your preferred file server to reduce cross-availability zone data transfer costs and minimize latency.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreferredSubnetId?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-filesystem-windowsconfiguration-auditlogconfiguration.html}
 **/
export interface FSxFileSystemAuditLogConfiguration {
  FileAccessAuditLogLevel: Value<string>;
  FileShareAccessAuditLogLevel: Value<string>;
  AuditLogDestination?: Value<string>;
}
export interface FSxFileSystemProperties {
  /**
   * Sets the storage type for the file system that you're creating. Valid values are `SSD` and `HDD`.
   */
  StorageType?: Value<string>;
  /**
   * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt Amazon FSx file system data. Used as follows with Amazon FSx file system types:
   */
  KmsKeyId?: Value<string>;
  /**
   * Sets the storage capacity of the file system that you're creating. `StorageCapacity` is required if you are creating a new file system.
   *
   * **FSx for Lustre file systems** - The amount of storage capacity that you can configure depends on the value that you set for `StorageType` and the Lustre `DeploymentType`, as follows:
   */
  StorageCapacity?: Value<number>;
  /**
   * The Lustre configuration for the file system being created.
   *
   * The following parameters are not supported for file systems with the Lustre `Persistent_2` deployment type.
   */
  LustreConfiguration?: FSxFileSystemLustreConfiguration;
  /**
   * The ID of the file system backup that you are using to create a file system. For more information, see [CreateFileSystemFromBackup](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BackupId?: Value<string>;
  /**
   * The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
   *
   * _Required_: No
   *
   * _Type_: [OntapConfiguration](aws-properties-fsx-filesystem-ontapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OntapConfiguration?: FSxFileSystemOntapConfiguration;
  /**
   * Specifies the IDs of the subnets that the file system will be accessible from. For Windows and ONTAP `MULTI_AZ_1` deployment types,provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the `WindowsConfiguration > PreferredSubnetID` or `OntapConfiguration > PreferredSubnetID` properties. For more information about Multi-AZ file system configuration, see [ Availability and durability: Single-AZ and Multi-AZ file systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html) in the _Amazon FSx for Windows User Guide_ and [ Availability and durability](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html) in the _Amazon FSx for ONTAP User Guide_.
   *
   * For Windows `SINGLE_AZ_1` and `SINGLE_AZ_2` and all Lustre deployment types, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds: List<Value<string>>;
  /**
   * A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The configuration object for the Microsoft Windows file system you are creating. This value is required if `FileSystemType` is set to `WINDOWS`.
   *
   * _Required_: Conditional
   *
   * _Type_: [WindowsConfiguration](aws-properties-fsx-filesystem-windowsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowsConfiguration?: FSxFileSystemWindowsConfiguration;
  /**
   * (Optional) For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating. Valid values are `2.10` and `2.12`:
   */
  FileSystemTypeVersion?: Value<string>;
  /**
   * The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.
   *
   * _Required_: No
   *
   * _Type_: [OpenZFSConfiguration](aws-properties-fsx-filesystem-openzfsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenZFSConfiguration?: FSxFileSystemOpenZFSConfiguration;
  /**
   * The type of Amazon FSx file system, which can be `LUSTRE`, `WINDOWS`, `ONTAP`, or `OPENZFS`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemType: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::FSx::FileSystem` resource is an Amazon FSx resource type that specifies an Amazon FSx file system. You can create any of the following supported file system types:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html}
 */
export interface FSxFileSystemResource {
  Type: 'AWS::FSx::FileSystem';
  Properties: FSxFileSystemProperties;
}
