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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-createtabledefaultpermissions.html}
 **/
export type LakeFormationDataLakeSettingsCreateTableDefaultPermissions =
  List<LakeFormationDataLakeSettingsPrincipalPermissions>;

/**
 * The Lake Formation principal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-datalakeprincipal.html}
 **/
export interface LakeFormationDataLakeSettingsDataLakePrincipal {
  /**
   * An identifier for the Lake Formation principal.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLakePrincipalIdentifier?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-externaldatafilteringallowlist.html}
 **/
export type LakeFormationDataLakeSettingsExternalDataFilteringAllowList =
  List<LakeFormationDataLakeSettingsDataLakePrincipal>;

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-createdatabasedefaultpermissions.html}
 **/
export type LakeFormationDataLakeSettingsCreateDatabaseDefaultPermissions =
  List<LakeFormationDataLakeSettingsPrincipalPermissions>;

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-permissions.html}
 **/
export type LakeFormationDataLakeSettingsPermissions = List<Value<string>>;

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-principalpermissions.html}
 **/
export interface LakeFormationDataLakeSettingsPrincipalPermissions {
  Permissions?: LakeFormationDataLakeSettingsPermissions;
  Principal?: LakeFormationDataLakeSettingsDataLakePrincipal;
}

/**
 * A list of AWS Lake Formation principals.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datalakesettings-admins.html}
 **/
export type LakeFormationDataLakeSettingsAdmins =
  List<LakeFormationDataLakeSettingsDataLakePrincipal>;
export interface LakeFormationDataLakeSettingsProperties {
  AllowExternalDataFiltering?: Value<boolean>;
  ExternalDataFilteringAllowList?: LakeFormationDataLakeSettingsExternalDataFilteringAllowList;
  CreateTableDefaultPermissions?: LakeFormationDataLakeSettingsCreateTableDefaultPermissions;
  Parameters?: { [key: string]: any };
  /**
   * A list of AWS Lake Formation principals.
   *
   * _Required_: No
   *
   * _Type_: [Admins](aws-properties-lakeformation-datalakesettings-admins.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Admins?: LakeFormationDataLakeSettingsAdmins;
  CreateDatabaseDefaultPermissions?: LakeFormationDataLakeSettingsCreateDatabaseDefaultPermissions;
  AuthorizedSessionTagValueList?: List<Value<string>>;
  /**
   * An array of UTF-8 strings.
   *
   * A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log. You may want to specify this property when you are in a high-trust boundary, such as the same team or company.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrustedResourceOwners?: List<Value<string>>;
}

/**
 * The `AWS::LakeFormation::DataLakeSettings` resource is an AWS Lake Formation resource type that manages the data lake settings for your account. Note that the CloudFormation template only supports updating the `Admins` list. It does not support updating the [CreateDatabaseDefaultPermissions](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-settings.html#aws-lake-formation-api-aws-lake-formation-api-settings-DataLakeSettings) or [CreateTableDefaultPermissions](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-settings.html#aws-lake-formation-api-aws-lake-formation-api-settings-DataLakeSettings). Those permissions can only be edited in the DataLakeSettings resource via the API.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html}
 */
export interface LakeFormationDataLakeSettingsResource {
  Type: 'AWS::LakeFormation::DataLakeSettings';
  Properties: LakeFormationDataLakeSettingsProperties;
}
