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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-originsnapshot.html}
 **/
export interface FSxVolumeOriginSnapshot {
  CopyStrategy: Value<string>;
  SnapshotARN: Value<string>;
}

/**
 * Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration.html}
 **/
export interface FSxVolumeOpenZFSConfiguration {
  /**
   * A Boolean value indicating whether the volume is read-only.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadOnly?: Value<boolean>;
  /**
   * To delete the volume's child volumes, snapshots, and clones, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`.
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
   * Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
   */
  DataCompressionType?: Value<string>;
  /**
   * The configuration object for mounting a Network File System (NFS) file system.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-fsx-volume-openzfsconfiguration-nfsexports.md) of [NfsExports](aws-properties-fsx-volume-openzfsconfiguration-nfsexports.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NfsExports?: List<FSxVolumeNfsExports>;
  /**
   * Sets the maximum storage size in gibibytes (GiB) for the volume. You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set `StorageCapacityReservationGiB`. To _not_ specify a storage capacity quota, set this to `-1`.
   *
   * For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the _Amazon FSx for OpenZFS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `-1`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageCapacityQuotaGiB?: Value<number>;
  /**
   * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to `false`. If it's set to `true`, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true`, and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTagsToSnapshots?: Value<boolean>;
  /**
   * The ID of the volume to use as the parent volume of the volume that you are creating.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `23`
   *
   * _Maximum_: `23`
   *
   * _Pattern_: `^(fsvol-[0-9a-f]{17,})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ParentVolumeId: Value<string>;
  /**
   * Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. Setting `StorageCapacityReservationGiB` guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To _not_ specify a storage capacity reservation, set this to `0` or `-1`. For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the _Amazon FSx for OpenZFS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `-1`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageCapacityReservationGiB?: Value<number>;
  /**
   * Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. We recommend using the default setting for the majority of use cases. Generally, workloads that write in fixed small or large record sizes may benefit from setting a custom record size, like database workloads (small record size) or media streaming workloads (large record size). For additional guidance on when to set a custom record size, see [ ZFS Record size](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#record-size-performance) in the _Amazon FSx for OpenZFS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordSizeKiB?: Value<number>;
  /**
   * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
   *
   * _Required_: No
   *
   * _Type_: [OriginSnapshot](aws-properties-fsx-volume-openzfsconfiguration-originsnapshot.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OriginSnapshot?: FSxVolumeOriginSnapshot;
  /**
   * An object specifying how much storage users or groups can use on the volume.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-fsx-volume-openzfsconfiguration-userandgroupquotas.md) of [UserAndGroupQuotas](aws-properties-fsx-volume-openzfsconfiguration-userandgroupquotas.md)
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserAndGroupQuotas?: List<FSxVolumeUserAndGroupQuotas>;
}

/**
 * Specifies the configuration of the ONTAP volume that you are creating.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration.html}
 **/
export interface FSxVolumeOntapConfiguration {
  /**
   * Specifies the location in the SVM's namespace where the volume is mounted. This parameter is required. The `JunctionPath` must have a leading forward slash, such as `/vol3`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{1,255}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JunctionPath?: Value<string>;
  /**
   * Specifies the ONTAP SVM in which to create the volume.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `21`
   *
   * _Maximum_: `21`
   *
   * _Pattern_: `^(svm-[0-9a-f]{17,})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageVirtualMachineId: Value<string>;
  /**
   * Specifies the snapshot policy for the volume. There are three built-in snapshot policies:
   */
  SnapshotPolicy?: Value<string>;
  /**
   * Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
   *
   * Valid tiering policies are the following:
   */
  TieringPolicy?: FSxVolumeTieringPolicy;
  /**
   * Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them. This parameter is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageEfficiencyEnabled?: Value<string>;
  /**
   * Specifies the size of the volume, in megabytes (MB), that you are creating. Provide any whole number in the range of 20–104857600 to specify the size of the volume.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeInMegabytes: Value<string>;
  /**
   * A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTagsToBackups?: Value<string>;
  /**
   * Specifies the security style for the volume. If a volume's security style is not specified, it is automatically set to the root volume's security style. The security style determines the type of permissions that FSx for ONTAP uses to control data access. For more information, see [Volume security style](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-security-style) in the _Amazon FSx for NetApp ONTAP User Guide_. Specify one of the following values:
   */
  SecurityStyle?: Value<string>;
  /**
   * Specifies the type of volume you are creating. Valid values are the following:
   */
  OntapVolumeType?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-nfsexports.html}
 **/
export interface FSxVolumeNfsExports {
  ClientConfigurations: List<FSxVolumeClientConfigurations>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-ontapconfiguration-tieringpolicy.html}
 **/
export interface FSxVolumeTieringPolicy {
  CoolingPeriod?: Value<number>;
  Name?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-nfsexports-clientconfigurations.html}
 **/
export interface FSxVolumeClientConfigurations {
  Options: List<Value<string>>;
  Clients: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-volume-openzfsconfiguration-userandgroupquotas.html}
 **/
export interface FSxVolumeUserAndGroupQuotas {
  Type: Value<string>;
  Id: Value<number>;
  StorageCapacityQuotaGiB: Value<number>;
}
export interface FSxVolumeProperties {
  /**
   * The configuration of an Amazon FSx for OpenZFS volume.
   *
   * _Required_: No
   *
   * _Type_: [OpenZFSConfiguration](aws-properties-fsx-volume-openzfsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenZFSConfiguration?: FSxVolumeOpenZFSConfiguration;
  /**
   * The type of the volume.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ONTAP | OPENZFS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeType?: Value<string>;
  /**
   * Specifies the ID of the volume backup to use to create a new volume.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BackupId?: Value<string>;
  /**
   * The configuration of an Amazon FSx for NetApp ONTAP volume.
   *
   * _Required_: No
   *
   * _Type_: [OntapConfiguration](aws-properties-fsx-volume-ontapconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OntapConfiguration?: FSxVolumeOntapConfiguration;
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
   * The name of the volume.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `203`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{1,203}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html}
 */
export interface FSxVolumeResource {
  Type: 'AWS::FSx::Volume';
  Properties: FSxVolumeProperties;
}
