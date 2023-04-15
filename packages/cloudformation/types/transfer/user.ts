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
 * Provides information about the public Secure Shell (SSH) key that is associated with a Transfer Family user account for the specific file transfer protocol-enabled server (as identified by `ServerId`). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.
 *
 * **SshPublicKeyBody**
 *
 * Specifies the content of the SSH public key as specified by the `PublicKeyId`.
 *
 * AWS Transfer Family accepts RSA, ECDSA, and ED25519 keys.
 *
 * Type: String
 *
 * Length Constraints: Maximum length of 2048.
 *
 * Required: Yes
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-sshpublickey.html}
 **/
export type TransferUserSshPublicKey = Value<string>;

/**
 * The full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-posixprofile.html}
 **/
export interface TransferUserPosixProfile {
  /**
   * The POSIX user ID used for all EFS operations by this user.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Uid: Value<number>;
  /**
   * The secondary POSIX group IDs used for all EFS operations by this user.
   *
   * _Required_: No
   *
   * _Type_: List of Double
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryGids?: List<Value<number>>;
  /**
   * The POSIX group ID used for all EFS operations by this user.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gid: Value<number>;
}

/**
 * Represents an object that contains entries and targets for `HomeDirectoryMappings`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-user-homedirectorymapentry.html}
 **/
export interface TransferUserHomeDirectoryMapEntry {
  /**
   * Represents an entry for `HomeDirectoryMappings`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Entry: Value<string>;
  /**
   * Represents the map target that is used in a `HomeDirectorymapEntry`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: Value<string>;
}
export interface TransferUserProperties {
  /**
   * A session policy for your user so you can use the same IAM role across multiple users. This policy restricts user access to portions of their Amazon S3 bucket. Variables that you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`.
   *
   * For session policies, AWS Transfer Family stores the policy as a JSON blob, instead of the Amazon Resource Name (ARN) of the policy. You save the policy as a JSON blob and pass it in the `Policy` argument.
   *
   * For an example of a session policy, see [Example session policy](https://docs.aws.amazon.com/transfer/latest/userguide/session-policy.html).
   *
   * For more information, see [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) in the _AWS Security Token Service API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policy?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system. The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 bucket or Amazon EFS file system. The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*role/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role: Value<string>;
  /**
   * The landing directory (folder) for a user when they log in to the server using the client.
   *
   * A `HomeDirectory` example is `/bucket_name/home/mydirectory`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^$|/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HomeDirectory?: Value<string>;
  /**
   * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server. If you set it to `PATH`, the user will see the absolute Amazon S3 bucket or EFS paths as is in their file transfer protocol clients. If you set it `LOGICAL`, you need to provide mappings in the `HomeDirectoryMappings` for how you want to make Amazon S3 or Amazon EFS paths visible to your users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `LOGICAL | PATH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HomeDirectoryType?: Value<string>;
  /**
   * A system-assigned unique identifier for a server instance. This is the specific server that you added your user to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `19`
   *
   * _Maximum_: `19`
   *
   * _Pattern_: `^s-([0-9a-f]{17})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServerId: Value<string>;
  /**
   * A unique string that identifies a user and is associated with a `ServerId`. This user name must be a minimum of 3 and a maximum of 100 characters long. The following are valid characters: a-z, A-Z, 0-9, underscore '_', hyphen '-', period '.', and at sign '@'. The user name can't start with a hyphen, period, or at sign.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[w][w@.-]{2,99}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserName: Value<string>;
  /**
   * Logical directory mappings that specify what Amazon S3 paths and keys should be visible to your user and how you want to make them visible. You will need to specify the "`Entry`" and "`Target`" pair, where `Entry` shows how the path is made visible and `Target` is the actual Amazon S3 path. If you only specify a target, it will be displayed as is. You will need to also make sure that your IAM role provides access to paths in `Target`. The following is an example.
   *
   * `'[ { "Entry": "/", "Target": "/bucket3/customized-reports/" } ]'`
   *
   * In most cases, you can use this value instead of the session policy to lock your user down to the designated home directory ("chroot"). To do this, you can set `Entry` to '/' and set `Target` to the HomeDirectory parameter value.
   *
   * If the target of a logical directory entry does not exist in Amazon S3, the entry will be ignored. As a workaround, you can use the Amazon S3 API to create 0 byte objects as place holders for your directory. If using the CLI, use the `s3api` call instead of `s3` so you can use the put-object operation. For example, you use the following: `AWS s3api put-object --bucket bucketname --key path/to/folder/`. Make sure that the end of the key name ends in a '/' for it to be considered a folder.
   *
   * _Required_: No
   *
   * _Type_: List of [HomeDirectoryMapEntry](aws-properties-transfer-user-homedirectorymapentry.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HomeDirectoryMappings?: List<TransferUserHomeDirectoryMapEntry>;
  /**
   * Specifies the full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary groups IDs (`SecondaryGids`), that controls your users' access to your Amazon Elastic File System (Amazon EFS) file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
   *
   * _Required_: No
   *
   * _Type_: [PosixProfile](aws-properties-transfer-user-posixprofile.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PosixProfile?: TransferUserPosixProfile;
  /**
   * Specifies the public key portion of the Secure Shell (SSH) keys stored for the described user.
   *
   * _Required_: No
   *
   * _Type_: List of [SshPublicKey](aws-properties-transfer-user-sshpublickey.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SshPublicKeys?: List<TransferUserSshPublicKey>;
  /**
   * Key-value pairs that can be used to group and search for users. Tags are metadata attached to users for any purpose.
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
 * The `AWS::Transfer::User` resource creates a user and associates them with an existing server. You can only create and associate users with servers that have the `IdentityProviderType` set to `SERVICE_MANAGED`. Using parameters for `CreateUser`, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-user.html}
 */
export interface TransferUserResource {
  Type: 'AWS::Transfer::User';
  Properties: TransferUserProperties;
}
