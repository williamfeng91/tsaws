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

export interface DataSyncLocationFSxWindowsProperties {
  /**
   * The user who has the permissions to access files and folders in the FSx for Windows File Server file system.
   *
   * For information about choosing a user name that ensures sufficient permissions to files, folders, and metadata, see [user](https://docs.aws.amazon.com/datasync/latest/userguide/create-fsx-location.html#FSxWuser).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `104`
   *
   * _Pattern_: `^[^x5Bx5D/:;|=,+*?]{1,104}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  User: Value<string>;
  /**
   * Specifies a mount path for your file system using forward slashes. This is where DataSync reads or writes data (depending on if this is a source or destination location).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `^[a-zA-Z0-9_-+./()$p{Zs}]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subdirectory?: Value<string>;
  /**
   * Specifies the Amazon Resource Name (ARN) for the FSx for Windows File Server file system.
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
   * Specifies the name of the Windows domain that the FSx for Windows File Server belongs to.
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
   * The Amazon Resource Names (ARNs) of the security groups that are used to configure the FSx for Windows File Server file system.
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z-0-9]*:[0-9]{12}:security-group/.*$`
   *
   * _Length constraints_: Maximum length of 128.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
  /**
   * Specifies the password of the user who has the permissions to access files and folders in the file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `104`
   *
   * _Pattern_: `^.{0,104}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Password?: Value<string>;
}

/**
 * The `AWS::DataSync::LocationFSxWindows` resource specifies an endpoint for an Amazon FSx for Windows Server file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html}
 */
export interface DataSyncLocationFSxWindowsResource {
  Type: 'AWS::DataSync::LocationFSxWindows';
  Properties: DataSyncLocationFSxWindowsProperties;
}
