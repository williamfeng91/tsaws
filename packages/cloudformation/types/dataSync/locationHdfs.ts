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
 * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-qopconfiguration.html}
 **/
export interface DataSyncLocationHDFSQopConfiguration {
  /**
   * The Remote Procedure Call (RPC) protection setting configured on the HDFS cluster. This setting corresponds to your `hadoop.rpc.protection` setting in your `core-site.xml` file on your Hadoop cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTHENTICATION | DISABLED | INTEGRITY | PRIVACY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RpcProtection?: Value<string>;
  /**
   * The data transfer protection setting configured on the HDFS cluster. This setting corresponds to your `dfs.data.transfer.protection` setting in the `hdfs-site.xml` file on your Hadoop cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTHENTICATION | DISABLED | INTEGRITY | PRIVACY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTransferProtection?: Value<string>;
}

/**
 * The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file system's namespace and performs operations such as opening, closing, and renaming files and directories. The NameNode also contains the information to map blocks of data to the DataNodes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationhdfs-namenode.html}
 **/
export interface DataSyncLocationHDFSNameNode {
  /**
   * The port that the NameNode uses to listen to client requests.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65536`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * The hostname of the NameNode in the HDFS cluster. This value is the IP address or Domain Name Service (DNS) name of the NameNode. An agent that's installed on-premises uses this hostname to communicate with the NameNode in the network.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^(([a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9-]*[A-Za-z0-9])$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hostname: Value<string>;
}
export interface DataSyncLocationHDFSProperties {
  /**
   * The URI of the HDFS cluster's Key Management Server (KMS).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^kms://http[s]?@(([a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9-]*[A-Za-z0-9])(;(([a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9-]*[A-Za-z0-9]))*:[0-9]{1,5}/kms$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyProviderUri?: Value<string>;
  /**
   * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If `QopConfiguration` isn't specified, `RpcProtection` and `DataTransferProtection` default to `PRIVACY`. If you set `RpcProtection` or `DataTransferProtection`, the other parameter assumes the same value.
   *
   * _Required_: No
   *
   * _Type_: [QopConfiguration](aws-properties-datasync-locationhdfs-qopconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QopConfiguration?: DataSyncLocationHDFSQopConfiguration;
  /**
   * The Kerberos principal with access to the files and folders on the HDFS cluster.
   *
   * If `KERBEROS` is specified for `AuthenticationType`, this parameter is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^.+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KerberosPrincipal?: Value<string>;
  /**
   * The user name used to identify the client on the host operating system.
   *
   * If `SIMPLE` is specified for `AuthenticationType`, this parameter is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[_.A-Za-z0-9][-_.A-Za-z0-9]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SimpleUser?: Value<string>;
  /**
   * The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationFactor?: Value<number>;
  /**
   * The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. Provide the base64-encoded file text. If `KERBEROS` is specified for `AuthType`, this value is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KerberosKeytab?: Value<string>;
  /**
   * The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode.
   *
   * _Required_: Yes
   *
   * _Type_: List of [NameNode](aws-properties-datasync-locationhdfs-namenode.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NameNodes: List<DataSyncLocationHDFSNameNode>;
  /**
   * A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to `/`.
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
   * The `krb5.conf` file that contains the Kerberos configuration information. You can load the `krb5.conf` by providing a string of the file's contents or an Amazon S3 presigned URL of the file. If`KERBEROS` is specified for `AuthType`, this value is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KerberosKrb5Conf?: Value<string>;
  /**
   * The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1048576`
   *
   * _Maximum_: `1073741824`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockSize?: Value<number>;
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
  /**
   * The Amazon Resource Names (ARNs) of the agents that are used to connect to the HDFS cluster.
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
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationType: Value<string>;
}

/**
 * The `AWS::DataSync::LocationHDFS` resource specifies an endpoint for a Hadoop Distributed File System (HDFS).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationhdfs.html}
 */
export interface DataSyncLocationHDFSResource {
  Type: 'AWS::DataSync::LocationHDFS';
  Properties: DataSyncLocationHDFSProperties;
}
