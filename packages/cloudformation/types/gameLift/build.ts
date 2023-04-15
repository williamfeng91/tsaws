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

/**
 * The `StorageLocation` property type specifies Property description not available. for an [AWS::GameLift::Build](aws-resource-gamelift-build.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html}
 **/
export interface GameLiftBuildStorageLocation {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ObjectVersion?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bucket: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html}
 **/
export interface GameLiftBuildS3Location {
  Bucket: Value<string>;
  Key: Value<string>;
  ObjectVersion?: Value<string>;
  RoleArn: Value<string>;
}
export interface GameLiftBuildProperties {
  /**
   * The operating system that you built the game server binaries to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system isn't specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value can't be changed later.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AMAZON_LINUX | AMAZON_LINUX_2 | WINDOWS_2012`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OperatingSystem?: Value<string>;
  /**
   * Version information that is associated with this build. Version strings do not need to be unique.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.
   *
   * If a `StorageLocation` is specified, the size of your file can be found in your Amazon S3 bucket. Amazon GameLift will report a `SizeOnDisk` of 0.
   *
   * _Required_: No
   *
   * _Type_: [StorageLocation](aws-properties-gamelift-build-storagelocation.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageLocation?: GameLiftBuildStorageLocation;
  /**
   * A descriptive label that is associated with a build. Build names do not need to be unique.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::GameLift::Build` resource creates a game server build that is installed and run on instances in an Amazon GameLift fleet. This resource points to an Amazon S3 location that contains a zip file with all of the components of the game server build.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html}
 */
export interface GameLiftBuildResource {
  Type: 'AWS::GameLift::Build';
  Properties: GameLiftBuildProperties;
}
