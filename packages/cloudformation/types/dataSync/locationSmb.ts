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
 * Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html}
 **/
export interface DataSyncLocationSMBMountOptions {
  /**
   * By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server. You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically.
   *
   * These are the following options for configuring the SMB version:
   *
   * This is the recommended option. If you instead choose a specific version that your file server doesn't support, you may get an `Operation Not Supported` error.
   */
  Version?: Value<string>;
}
export interface DataSyncLocationSMBProperties {
  /**
   * The user who can mount the share and has the permissions to access files and folders in the SMB share.
   *
   * For information about choosing a user name that ensures sufficient permissions to files, folders, and metadata, see [user](https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#SMBuser).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `104`
   *
   * _Pattern_: `^[^x5Bx5D/:;|=,+*?]{1,104}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  User: Value<string>;
  /**
   * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.
   *
   * `Subdirectory` must be specified with forward slashes. For example, `/path/to/folder`.
   *
   * To transfer all the data in the folder you specified, DataSync must have permissions to mount the SMB share, as well as to access all the data in that share. To ensure this, either make sure that the user name and password specified belongs to the user who can mount the share, and who has the appropriate permissions for all of the files and directories that you want DataSync to access, or use credentials of a member of the Backup Operators group to mount the share. Doing either one enables the agent to access the data. For the agent to access directories, you must additionally enable all execute access.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `^[a-zA-Z0-9_-+./()$p{Zs}]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subdirectory?: Value<string>;
  /**
   * Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that your DataSync agent will mount.
   *
   * You can't specify an IP version 6 (IPv6) address.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^(([a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9-]*[A-Za-z0-9])$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServerHostname?: Value<string>;
  /**
   * Specifies the Windows domain name that your SMB file server belongs to.
   *
   * For more information, see [required permissions](https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#configuring-smb-permissions) for SMB locations.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^[A-Za-z0-9]((.|-+)?[A-Za-z0-9]){0,252}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Domain?: Value<string>;
  /**
   * Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
   *
   * _Required_: No
   *
   * _Type_: [MountOptions](aws-properties-datasync-locationsmb-mountoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MountOptions?: DataSyncLocationSMBMountOptions;
  /**
   * The Amazon Resource Names (ARNs) of agents to use for a Server Message Block (SMB) location.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AgentArns: List<Value<string>>;
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
  /**
   * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `104`
   *
   * _Pattern_: `^.{0,104}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password?: Value<string>;
}

/**
 * The `AWS::DataSync::LocationSMB` resource specifies a Server Message Block (SMB) location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html}
 */
export interface DataSyncLocationSMBResource {
  Type: 'AWS::DataSync::LocationSMB';
  Properties: DataSyncLocationSMBProperties;
}
