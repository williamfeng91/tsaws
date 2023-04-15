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
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Defines the storage configuration for an Amazon FSx file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-fsxstorageconfiguration.html}
 **/
export interface M2EnvironmentFsxStorageConfiguration {
  /**
   * The mount point for the file system.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,200}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MountPoint: Value<string>;
  /**
   * The file system identifier.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,200}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemId: Value<string>;
}

/**
 * Defines the storage configuration for an Amazon EFS file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-efsstorageconfiguration.html}
 **/
export interface M2EnvironmentEfsStorageConfiguration {
  /**
   * The mount point for the file system.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,200}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MountPoint: Value<string>;
  /**
   * The file system identifier.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,200}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemId: Value<string>;
}

/**
 * Defines the storage configuration for a runtime environment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-storageconfiguration.html}
 **/
export interface M2EnvironmentStorageConfiguration {
  /**
   * Defines the storage configuration for an Amazon EFS file system.
   *
   * _Required_: No
   *
   * _Type_: [EfsStorageConfiguration](aws-properties-m2-environment-efsstorageconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Efs?: M2EnvironmentEfsStorageConfiguration;
  /**
   * Defines the storage configuration for an Amazon FSx file system.
   *
   * _Required_: No
   *
   * _Type_: [FsxStorageConfiguration](aws-properties-m2-environment-fsxstorageconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Fsx?: M2EnvironmentFsxStorageConfiguration;
}

/**
 * Defines the details of a high availability configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-environment-highavailabilityconfig.html}
 **/
export interface M2EnvironmentHighAvailabilityConfig {
  /**
   * The number of instances in a high availability configuration.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredCapacity: Value<number>;
}
export interface M2EnvironmentProperties {
  /**
   * The description of the runtime environment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * The version of the runtime engine.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,10}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion?: Value<string>;
  /**
   * The identifier of a customer managed key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Defines the details of a high availability configuration.
   *
   * _Required_: No
   *
   * _Type_: [HighAvailabilityConfig](aws-properties-m2-environment-highavailabilityconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HighAvailabilityConfig?: M2EnvironmentHighAvailabilityConfig;
  /**
   * Configures the maintenance window you want for the runtime environment. If you do not provide a value, a random system-generated value will be assigned.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,50}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * The list of security groups for the VPC associated with this runtime environment.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The list of subnets associated with the VPC for this runtime environment.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The name of the runtime environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[A-Za-z0-9][A-Za-z0-9_-]{1,59}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * The target platform for the runtime environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `bluage | microfocus`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineType: Value<string>;
  /**
   * Specifies whether the runtime environment is publicly accessible.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PubliclyAccessible?: Value<boolean>;
  /**
   * The instance type of the runtime environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,20}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType: Value<string>;
  /**
   * Defines the storage configuration for a runtime environment.
   *
   * _Required_: No
   *
   * _Type_: List of [StorageConfiguration](aws-properties-m2-environment-storageconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageConfigurations?: List<M2EnvironmentStorageConfiguration>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * Specifies a runtime environment for a given runtime engine.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html}
 */
export interface M2EnvironmentResource {
  Type: 'AWS::M2::Environment';
  Properties: M2EnvironmentProperties;
}
