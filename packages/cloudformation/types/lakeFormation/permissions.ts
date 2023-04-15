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

/**
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-columnwildcard.html}
 **/
export interface LakeFormationPermissionsColumnWildcard {
  /**
   * Excludes column names. Any column with this name will be excluded.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedColumnNames?: List<Value<string>>;
}

/**
 * A structure for the database object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-databaseresource.html}
 **/
export interface LakeFormationPermissionsDatabaseResource {
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogId?: Value<string>;
  /**
   * The name of the database resource. Unique to the Data Catalog.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A structure for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-resource.html}
 **/
export interface LakeFormationPermissionsResource {
  /**
   * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   *
   * _Required_: No
   *
   * _Type_: [TableResource](aws-properties-lakeformation-permissions-tableresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableResource?: LakeFormationPermissionsTableResource;
  /**
   * A structure for the database object.
   *
   * _Required_: No
   *
   * _Type_: [DatabaseResource](aws-properties-lakeformation-permissions-databaseresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseResource?: LakeFormationPermissionsDatabaseResource;
  /**
   * A structure for a data location object where permissions are granted or revoked.
   *
   * _Required_: No
   *
   * _Type_: [DataLocationResource](aws-properties-lakeformation-permissions-datalocationresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLocationResource?: LakeFormationPermissionsDataLocationResource;
  /**
   * A structure for a table with columns object. This object is only used when granting a SELECT permission.
   *
   * _Required_: No
   *
   * _Type_: [TableWithColumnsResource](aws-properties-lakeformation-permissions-tablewithcolumnsresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableWithColumnsResource?: LakeFormationPermissionsTableWithColumnsResource;
}

/**
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tableresource.html}
 **/
export interface LakeFormationPermissionsTableResource {
  /**
   * The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogId?: Value<string>;
  /**
   * An empty object representing all tables under a database. If this field is specified instead of the `Name` field, all tables under `DatabaseName` will have permission changes applied.
   *
   * _Required_: No
   *
   * _Type_: [TableWildcard](aws-properties-lakeformation-permissions-tablewildcard.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableWildcard?: LakeFormationPermissionsTableWildcard;
  /**
   * The name of the table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A structure for a data location object where permissions are granted or revoked.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalocationresource.html}
 **/
export interface LakeFormationPermissionsDataLocationResource {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Resource?: Value<string>;
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogId?: Value<string>;
}

/**
 * A wildcard object representing every table under a database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewildcard.html}
 **/
export interface LakeFormationPermissionsTableWildcard {}

/**
 * The Lake Formation principal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-datalakeprincipal.html}
 **/
export interface LakeFormationPermissionsDataLakePrincipal {
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
 * A structure for a table with columns object. This object is only used when granting a SELECT permission.
 *
 * This object must take a value for at least one of `ColumnsNames`, `ColumnsIndexes`, or `ColumnsWildcard`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-permissions-tablewithcolumnsresource.html}
 **/
export interface LakeFormationPermissionsTableWithColumnsResource {
  /**
   * The list of column names for the table. At least one of `ColumnNames` or `ColumnWildcard` is required.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnNames?: List<Value<string>>;
  /**
   * The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogId?: Value<string>;
  /**
   * The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * A wildcard specified by a `ColumnWildcard` object. At least one of `ColumnNames` or `ColumnWildcard` is required.
   *
   * _Required_: No
   *
   * _Type_: [ColumnWildcard](aws-properties-lakeformation-permissions-columnwildcard.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnWildcard?: LakeFormationPermissionsColumnWildcard;
}
export interface LakeFormationPermissionsProperties {
  /**
   * The AWS Lake Formation principal.
   *
   * _Required_: Yes
   *
   * _Type_: [DataLakePrincipal](aws-properties-lakeformation-permissions-datalakeprincipal.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLakePrincipal: LakeFormationPermissionsDataLakePrincipal;
  /**
   * A structure for the resource.
   *
   * _Required_: Yes
   *
   * _Type_: [Resource](aws-properties-lakeformation-permissions-resource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Resource: LakeFormationPermissionsResource;
  /**
   * The permissions granted or revoked.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<Value<string>>;
  /**
   * Indicates the ability to grant permissions (as a subset of permissions granted).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PermissionsWithGrantOption?: List<Value<string>>;
}

/**
 * The `AWS::LakeFormation::Permissions` resource represents the permissions that a principal has on an AWS Glue Data Catalog resource (such as AWS Glue database or AWS Glue tables). When you upload a permissions stack, the permissions are granted to the principal and when you remove the stack, the permissions are revoked from the principal. If you remove a stack, and the principal does not have the permissions referenced in the stack then AWS Lake Formation will throw an error because you can’t call revoke on non-existing permissions. To successfully remove the stack, you’ll need to regrant those permissions and then remove the stack.
 *
 * **Note**
 *
 * New versions of AWS Lake Formation permission resources are now available. For more information, see: [AWS:LakeFormation::PrincipalPermissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html)
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-permissions.html}
 */
export interface LakeFormationPermissionsResource {
  Type: 'AWS::LakeFormation::Permissions';
  Properties: LakeFormationPermissionsProperties;
}
