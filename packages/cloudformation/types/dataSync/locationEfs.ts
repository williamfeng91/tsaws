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
 * The subnet and security groups that AWS DataSync uses to access your Amazon EFS file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html}
 **/
export interface DataSyncLocationEFSEc2Config {
  /**
   * Specifies the ARN of a subnet where DataSync creates the [network interfaces](datasync/latest/userguide/datasync-network.html#required-network-interfaces) for managing traffic during your transfer.
   *
   * The subnet must be located:
   */
  SubnetArn: Value<string>;
  /**
   * Specifies the Amazon Resource Names (ARNs) of the security groups associated with an Amazon EFS file system's mount target.
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
}
export interface DataSyncLocationEFSProperties {
  /**
   * Specifies the ARN for the Amazon EFS file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z-0-9]*:[0-9]{12}:file-system/fs-.*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EfsFilesystemArn?: Value<string>;
  /**
   * Specifies the subnet and security groups DataSync uses to access your Amazon EFS file system.
   *
   * _Required_: Yes
   *
   * _Type_: [Ec2Config](aws-properties-datasync-locationefs-ec2config.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ec2Config: DataSyncLocationEFSEc2Config;
  /**
   * Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z-0-9]+:[0-9]{12}:access-point/fsap-[0-9a-f]{8,40}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessPointArn?: Value<string>;
  /**
   * Specifies a mount path for your Amazon EFS file system. This is where DataSync reads or writes data (depending on if this is a source or destination location). By default, DataSync uses the root directory, but you can also include subdirectories.
   *
   * You must specify a value with forward slashes (for example, `/path/to/folder`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `^[a-zA-Z0-9_-+./()p{Zs}]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subdirectory?: Value<string>;
  /**
   * Specifies whether you want DataSync to use Transport Layer Security (TLS) 1.2 encryption when it copies data to or from the Amazon EFS file system.
   *
   * If you specify an access point using `AccessPointArn` or an IAM role using `FileSystemAccessRoleArn`, you must set this parameter to `TLS1_2`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | TLS1_2`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InTransitEncryption?: Value<string>;
  /**
   * Specifies an AWS Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemAccessRoleArn?: Value<string>;
  /**
   * Specifies the key-value pair that represents a tag that you want to add to the resource. The value can be an empty string. This value helps you manage, filter, and search for your resources. We recommend that you create a name tag for your location.
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
 * The `AWS::DataSync::LocationEFS` resource creates an endpoint for an Amazon EFS file system. AWS DataSync can access this endpoint as a source or destination location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html}
 */
export interface DataSyncLocationEFSResource {
  Type: 'AWS::DataSync::LocationEFS';
  Properties: DataSyncLocationEFSProperties;
}
