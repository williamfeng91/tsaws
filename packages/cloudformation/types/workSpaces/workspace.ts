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
 * Information about a WorkSpace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html}
 **/
export interface WorkSpacesWorkspaceWorkspaceProperties {
  /**
   * The compute type. For more information, see [Amazon WorkSpaces Bundles](http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GRAPHICS | GRAPHICS_G4DN | GRAPHICSPRO | GRAPHICSPRO_G4DN | PERFORMANCE | POWER | POWERPRO | STANDARD | VALUE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeTypeName?: Value<string>;
  /**
   * The size of the root volume. For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RootVolumeSizeGib?: Value<number>;
  /**
   * The running mode. For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html).
   *
   * The `MANUAL` value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see [Amazon WorkSpaces Core](http://aws.amazon.com/workspaces/core/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ALWAYS_ON | AUTO_STOP | MANUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunningMode?: Value<string>;
  /**
   * The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunningModeAutoStopTimeoutInMinutes?: Value<number>;
  /**
   * The size of the user storage. For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserVolumeSizeGib?: Value<number>;
}
export interface WorkSpacesWorkspaceProperties {
  /**
   * The identifier of the bundle for the WorkSpace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^wsb-[0-9a-z]{8,63}$`
   *
   * _Update requires_: Updates are not supported.
   */
  BundleId: Value<string>;
  /**
   * The identifier of the AWS Directory Service directory for the WorkSpace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `65`
   *
   * _Pattern_: `^d-[0-9a-f]{8,63}$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  DirectoryId: Value<string>;
  /**
   * Indicates whether the data stored on the root volume is encrypted.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: Updates are not supported.
   */
  RootVolumeEncryptionEnabled?: Value<boolean>;
  /**
   * The tags for the WorkSpace.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The user name of the user for the WorkSpace. This user name must exist in the AWS Directory Service directory for the WorkSpace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserName: Value<string>;
  /**
   * Indicates whether the data stored on the user volume is encrypted.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: Updates are not supported.
   */
  UserVolumeEncryptionEnabled?: Value<boolean>;
  /**
   * The symmetric AWS KMS key used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric KMS keys.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  VolumeEncryptionKey?: Value<string>;
  /**
   * The WorkSpace properties.
   *
   * _Required_: No
   *
   * _Type_: [WorkspaceProperties](aws-properties-workspaces-workspace-workspaceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkspaceProperties?: WorkSpacesWorkspaceWorkspaceProperties;
}

/**
 * The `AWS::WorkSpaces::Workspace` resource specifies a WorkSpace.
 *
 * Updates are not supported for the `BundleId`, `RootVolumeEncryptionEnabled`, `UserVolumeEncryptionEnabled`, or `VolumeEncryptionKey` properties. To update these properties, you must also update a property that triggers a replacement, such as the `UserName` property.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html}
 */
export interface WorkSpacesWorkspaceResource {
  Type: 'AWS::WorkSpaces::Workspace';
  Properties: WorkSpacesWorkspaceProperties;
}
