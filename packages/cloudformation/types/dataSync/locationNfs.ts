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
 * A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-onpremconfig.html}
 **/
export interface DataSyncLocationNFSOnPremConfig {
  /**
   * ARNs of the agents to use for an NFS location.
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
}

/**
 * The NFS mount options that DataSync can use to mount your NFS share.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-mountoptions.html}
 **/
export interface DataSyncLocationNFSMountOptions {
  /**
   * Specifies the NFS version that you want DataSync to use when mounting your NFS share. If the server refuses to use the version specified, the task fails.
   *
   * You can specify the following options:
   */
  Version?: Value<string>;
}
export interface DataSyncLocationNFSProperties {
  /**
   * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination. The NFS path should be a path that's exported by the NFS server, or a subdirectory of that path. The path should be such that it can be mounted by other NFS clients in your network.
   *
   * To see all the paths exported by your NFS server, run "`showmount -e nfs-server-name`" from an NFS client that has access to your server. You can specify any directory that appears in the results, and any subdirectory of that directory. Ensure that the NFS export is accessible without Kerberos authentication.
   *
   * To transfer all the data in the folder you specified, DataSync needs to have permissions to read all the data. To ensure this, either configure the NFS export with `no_root_squash,` or ensure that the permissions for all of the files that you want DataSync allow read access for all users. Doing either enables the agent to read the files. For the agent to access directories, you must additionally enable all execute access.
   *
   * If you are copying data to or from your AWS Snowcone device, see [NFS Server on AWS Snowcone](https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone) for more information.
   *
   * For information about NFS export configuration, see [18.7. The /etc/exports Configuration File](http://web.mit.edu/rhel-doc/5/RHEL-5-manual/Deployment_Guide-en-US/s1-nfs-server-config-exports.html) in the Red Hat Enterprise Linux documentation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `^[a-zA-Z0-9_-+./()p{Zs}]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subdirectory?: Value<string>;
  /**
   * The name of the NFS server. This value is the IP address or Domain Name Service (DNS) name of the NFS server. An agent that is installed on-premises uses this hostname to mount the NFS server in a network.
   *
   * If you are copying data to or from your AWS Snowcone device, see [NFS Server on AWS Snowcone](https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone) for more information.
   *
   * This name must either be DNS-compliant or must be an IP version 4 (IPv4) address.
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
   * The NFS mount options that DataSync can use to mount your NFS share.
   *
   * _Required_: No
   *
   * _Type_: [MountOptions](aws-properties-datasync-locationnfs-mountoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MountOptions?: DataSyncLocationNFSMountOptions;
  /**
   * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect to an NFS server.
   *
   * If you are copying data to or from your AWS Snowcone device, see [NFS Server on AWS Snowcone](https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#nfs-on-snowcone) for more information.
   *
   * _Required_: Yes
   *
   * _Type_: [OnPremConfig](aws-properties-datasync-locationnfs-onpremconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPremConfig: DataSyncLocationNFSOnPremConfig;
  /**
   * The key-value pair that represents the tag that you want to add to the location. The value can be an empty string. We recommend using tags to name your resources.
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
 * The `AWS::DataSync::LocationNFS` resource specifies a file system on a Network File System (NFS) server that can be read from or written to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html}
 */
export interface DataSyncLocationNFSResource {
  Type: 'AWS::DataSync::LocationNFS';
  Properties: DataSyncLocationNFSProperties;
}
