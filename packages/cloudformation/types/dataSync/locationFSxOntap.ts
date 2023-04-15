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
 * Specifies the Network File System (NFS) protocol configuration that AWS DataSync uses to access a storage virtual machine (SVM) on your Amazon FSx for NetApp ONTAP file system. For more information, see [Accessing FSx for ONTAP file systems](https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfs.html}
 **/
export interface DataSyncLocationFSxONTAPNFS {
  /**
   * Specifies how DataSync can access a location using the NFS protocol.
   *
   * _Required_: Yes
   *
   * _Type_: [NfsMountOptions](aws-properties-datasync-locationfsxontap-nfsmountoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MountOptions: DataSyncLocationFSxONTAPNfsMountOptions;
}

/**
 * Specifies how DataSync can access a location using the NFS protocol.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-nfsmountoptions.html}
 **/
export interface DataSyncLocationFSxONTAPNfsMountOptions {
  /**
   * Specifies the NFS version that you want DataSync to use when mounting your NFS share. If the server refuses to use the version specified, the task fails.
   *
   * You can specify the following options:
   */
  Version?: Value<string>;
}

/**
 * Specifies the version of the Server Message Block (SMB) protocol that AWS DataSync uses to access an SMB file server.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smbmountoptions.html}
 **/
export interface DataSyncLocationFSxONTAPSmbMountOptions {
  /**
   * By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server. You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically.
   *
   * These are the following options for configuring the SMB version:
   *
   * This is the recommended option. If you instead choose a specific version that your file server doesn't support, you may get an `Operation Not Supported` error.
   */
  Version?: Value<string>;
}

/**
 * Specifies the Server Message Block (SMB) protocol configuration that AWS DataSync uses to access a storage virtual machine (SVM) on your Amazon FSx for NetApp ONTAP file system. For more information, see [Accessing FSx for ONTAP file systems](https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-smb.html}
 **/
export interface DataSyncLocationFSxONTAPSMB {
  /**
   * Specifies a user name that can mount the location and access the files, folders, and metadata that you need in the SVM.
   *
   * If you provide a user in your Active Directory, note the following:
   */
  User: Value<string>;
  /**
   * Specifies the fully qualified domain name (FQDN) of the Microsoft Active Directory that your storage virtual machine (SVM) belongs to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^[A-Za-z0-9]((.|-+)?[A-Za-z0-9]){0,252}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Domain?: Value<string>;
  /**
   * Specifies how DataSync can access a location using the SMB protocol.
   *
   * _Required_: Yes
   *
   * _Type_: [SmbMountOptions](aws-properties-datasync-locationfsxontap-smbmountoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MountOptions: DataSyncLocationFSxONTAPSmbMountOptions;
  /**
   * Specifies the password of a user who has permission to access your SVM.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `104`
   *
   * _Pattern_: `^.{0,104}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Password: Value<string>;
}

/**
 * Specifies the data transfer protocol that AWS DataSync uses to access your Amazon FSx file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationfsxontap-protocol.html}
 **/
export interface DataSyncLocationFSxONTAPProtocol {
  /**
   * Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your FSx for ONTAP file system's SVM.
   *
   * _Required_: No
   *
   * _Type_: [SMB](aws-properties-datasync-locationfsxontap-smb.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SMB?: DataSyncLocationFSxONTAPSMB;
  /**
   * Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your FSx for ONTAP file system's storage virtual machine (SVM).
   *
   * _Required_: No
   *
   * _Type_: [NFS](aws-properties-datasync-locationfsxontap-nfs.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NFS?: DataSyncLocationFSxONTAPNFS;
}
export interface DataSyncLocationFSxONTAPProperties {
  /**
   * Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `162`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z-0-9]+:[0-9]{12}:storage-virtual-machine/fs-[0-9a-f]+/svm-[0-9a-f]{17,}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageVirtualMachineArn: Value<string>;
  /**
   * Specifies a path to the file share in the SVM where you'll copy your data.
   *
   * You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares). For example, your mount path might be `/vol1`, `/vol1/tree1`, or `/share1`.
   *
   * Don't specify a junction path in the SVM's root volume. For more information, see [Managing FSx for ONTAP storage virtual machines](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html) in the _Amazon FSx for NetApp ONTAP User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{1,255}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subdirectory?: Value<string>;
  /**
   * Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
   *
   * _Required_: No
   *
   * _Type_: [Protocol](aws-properties-datasync-locationfsxontap-protocol.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Protocol?: DataSyncLocationFSxONTAPProtocol;
  /**
   * Specifies the Amazon Resource Names (ARNs) of the security groups that DataSync can use to access your FSx for ONTAP file system. You must configure the security groups to allow outbound traffic on the following ports (depending on the protocol that you're using):
   */
  SecurityGroupArns: List<Value<string>>;
  /**
   * Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your location.
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
 * The `AWS::DataSync::LocationFSxONTAP` resource creates an endpoint for an Amazon FSx for NetApp ONTAP file system. AWS DataSync can access this endpoint as a source or destination location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html}
 */
export interface DataSyncLocationFSxONTAPResource {
  Type: 'AWS::DataSync::LocationFSxONTAP';
  Properties: DataSyncLocationFSxONTAPProperties;
}
