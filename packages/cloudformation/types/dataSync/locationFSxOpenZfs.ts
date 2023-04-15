/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Represents the Network File System (NFS) protocol that AWS DataSync uses to access your Amazon FSx for OpenZFS file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-nfs.html}
 **/
export interface DataSyncLocationFSxOpenZFSNFS {
  /**
   * Represents the mount options that are available for DataSync to access an NFS location.
   *
   * _Required_: Yes
   *
   * _Type_: [MountOptions](aws-properties-datasync-locationfsxopenzfs-mountoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MountOptions: DataSyncLocationFSxOpenZFSMountOptions;
}

/**
 * Represents the protocol that AWS DataSync uses to access your Amazon FSx for OpenZFS file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-protocol.html}
 **/
export interface DataSyncLocationFSxOpenZFSProtocol {
  /**
   * Represents the Network File System (NFS) protocol that DataSync uses to access your FSx for OpenZFS file system.
   *
   * _Required_: No
   *
   * _Type_: [NFS](aws-properties-datasync-locationfsxopenzfs-nfs.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NFS?: DataSyncLocationFSxOpenZFSNFS;
}

/**
 * Represents the mount options that are available for DataSync to access a Network File System (NFS) location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxopenzfs-mountoptions.html}
 **/
export interface DataSyncLocationFSxOpenZFSMountOptions {
  /**
   * The specific NFS version that you want DataSync to use to mount your NFS share. If the server refuses to use the version specified, the sync will fail. If you don't specify a version, DataSync defaults to `AUTOMATIC`. That is, DataSync automatically selects a version based on negotiation with the NFS server.
   *
   * You can specify the following NFS versions:
   */
  Version?: Value<string>;
}
export interface DataSyncLocationFSxOpenZFSProperties {
  /**
   * A subdirectory in the location's path that must begin with `/fsx`. DataSync uses this subdirectory to read or write data (depending on whether the file system is a source or destination location).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{1,4096}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subdirectory?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the FSx for OpenZFS file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z-0-9]*:[0-9]{12}:file-system/fs-.*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FsxFilesystemArn?: Value<string>;
  /**
   * The type of protocol that AWS DataSync uses to access your file system.
   *
   * _Required_: Yes
   *
   * _Type_: [Protocol](aws-properties-datasync-locationfsxopenzfs-protocol.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Protocol: DataSyncLocationFSxOpenZFSProtocol;
  /**
   * The ARNs of the security groups that are used to configure the FSx for OpenZFS file system.
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z-0-9]*:[0-9]{12}:security-group/.*$`
   *
   * _Length constraints_: Maximum length of 128.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupArns: List<Value<string>>;
  /**
   * The key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
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
 * The `AWS::DataSync::LocationFSxOpenZFS` resource specifies an endpoint for an Amazon FSx for OpenZFS file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxopenzfs.html}
 */
export interface DataSyncLocationFSxOpenZFSResource {
  Type: 'AWS::DataSync::LocationFSxOpenZFS';
  Properties: DataSyncLocationFSxOpenZFSProperties;
}
