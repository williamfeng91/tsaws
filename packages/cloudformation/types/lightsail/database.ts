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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * `RelationalDatabaseParameter` is a property of the [AWS::Lightsail::Database](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html) resource. It describes parameters for the database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-database-relationaldatabaseparameter.html}
 **/
export interface LightsailDatabaseRelationalDatabaseParameter {
  /**
   * Indicates when parameter updates are applied.
   *
   * Can be `immediate` or `pending-reboot`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyMethod?: Value<string>;
  /**
   * A Boolean value indicating whether the parameter can be modified.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsModifiable?: Value<boolean>;
  /**
   * Specifies the engine-specific parameter type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyType?: Value<string>;
  /**
   * The valid range of values for the parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedValues?: Value<string>;
  /**
   * A description of the parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The value for the parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValue?: Value<string>;
  /**
   * The valid data type of the parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType?: Value<string>;
  /**
   * The name of the parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName?: Value<string>;
}
export interface LightsailDatabaseProperties {
  /**
   * The name of the instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RelationalDatabaseName: Value<string>;
  /**
   * The certificate associated with the database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaCertificateIdentifier?: Value<string>;
  /**
   * The Availability Zone for the database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  AvailabilityZone?: Value<string>;
  /**
   * The weekly time range during which system maintenance can occur for the database, formatted as follows: `ddd:hh24:mi-ddd:hh24:mi`. For example, `Tue:17:00-Tue:17:30`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * The blueprint ID for the database (for example, `mysql_8_0`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  RelationalDatabaseBlueprintId: Value<string>;
  /**
   * The daily time range during which automated backups are created for the database (for example, `16:00-16:30`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredBackupWindow?: Value<string>;
  /**
   * The meaning of this parameter differs according to the database engine you use.
   *
   * **MySQL**
   *
   * The name of the database to create when the Lightsail database resource is created. If this parameter isn't specified, no database is created in the database resource.
   *
   * Constraints:
   */
  MasterDatabaseName: Value<string>;
  /**
   * The password for the primary user of the database. The password can include any printable ASCII character except the following: /, ", or @. It cannot contain spaces.
   *
   * The `MasterUserPassword` and `RotateMasterUserPassword` parameters cannot be used together in the same template.
   *
   * **MySQL**
   *
   * Constraints: Must contain 8-41 characters.
   *
   * **PostgreSQL**
   *
   * Constraints: Must contain 8-128 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserPassword?: Value<string>;
  /**
   * An array of parameters for the database.
   *
   * _Required_: No
   *
   * _Type_: List of [RelationalDatabaseParameter](aws-properties-lightsail-database-relationaldatabaseparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelationalDatabaseParameters?: List<LightsailDatabaseRelationalDatabaseParameter>;
  /**
   * A Boolean value indicating whether to change the primary user password to a new, strong password generated by Lightsail.
   *
   * The `RotateMasterUserPassword` and `MasterUserPassword` parameters cannot be used together in the same template.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RotateMasterUserPassword?: Value<boolean>;
  /**
   * The name for the primary user.
   *
   * **MySQL**
   *
   * Constraints:
   */
  MasterUsername: Value<string>;
  /**
   * A Boolean value indicating whether the database is accessible to anyone on the internet.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PubliclyAccessible?: Value<boolean>;
  /**
   * The bundle ID for the database (for example, `medium_1_0`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  RelationalDatabaseBundleId: Value<string>;
  /**
   * A Boolean value indicating whether automated backup retention is enabled for the database.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  BackupRetention?: Value<boolean>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * The `Value` of `Tags` is optional for Lightsail resources.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::Lightsail::Database` resource specifies an Amazon Lightsail database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-database.html}
 */
export interface LightsailDatabaseResource {
  Type: 'AWS::Lightsail::Database';
  Properties: LightsailDatabaseProperties;
}
