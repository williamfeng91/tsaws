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
 * A structure for a data location object where permissions are granted or revoked.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalocationresource.html}
 **/
export interface LakeFormationPrincipalPermissionsDataLocationResource {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceArn: Value<string>;
  /**
   * The identifier for the Data Catalog where the location is registered with AWS Lake Formation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
}

/**
 * A structure containing an LF-tag key and values for a resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagkeyresource.html}
 **/
export interface LakeFormationPrincipalPermissionsLFTagKeyResource {
  /**
   * The key-name for the LF-tag.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagKey: Value<string>;
  /**
   * The identifier for the Data Catalog where the location is registered with Data Catalog.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
  /**
   * A list of possible values for the corresponding `TagKey` of an LF-tag key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagValues: List<Value<string>>;
}

/**
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tableresource.html}
 **/
export interface LakeFormationPrincipalPermissionsTableResource {
  /**
   * The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatabaseName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
  /**
   * A wildcard object representing every table under a database.
   *
   * At least one of `TableResource$Name` or `TableResource$TableWildcard` is required.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableWildcard?: { [key: string]: any };
  /**
   * The name of the table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-columnwildcard.html}
 **/
export interface LakeFormationPrincipalPermissionsColumnWildcard {
  /**
   * Excludes column names. Any column with this name will be excluded.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExcludedColumnNames?: List<Value<string>>;
}

/**
 * A structure for the database object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-databaseresource.html}
 **/
export interface LakeFormationPrincipalPermissionsDatabaseResource {
  /**
   * The identifier for the Data Catalog. By default, it is the account ID of the caller.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
  /**
   * The name of the database resource. Unique to the Data Catalog.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * A structure for a table with columns object. This object is only used when granting a SELECT permission.
 *
 * This object must take a value for at least one of `ColumnsNames`, `ColumnsIndexes`, or `ColumnsWildcard`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.html}
 **/
export interface LakeFormationPrincipalPermissionsTableWithColumnsResource {
  /**
   * The list of column names for the table. At least one of `ColumnNames` or `ColumnWildcard` is required.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ColumnNames?: List<Value<string>>;
  /**
   * The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatabaseName: Value<string>;
  /**
   * The identifier for the Data Catalog where the location is registered with AWS Lake Formation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
  /**
   * The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * A wildcard specified by a `ColumnWildcard` object. At least one of `ColumnNames` or `ColumnWildcard` is required.
   *
   * _Required_: No
   *
   * _Type_: [ColumnWildcard](aws-properties-lakeformation-principalpermissions-columnwildcard.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ColumnWildcard?: LakeFormationPrincipalPermissionsColumnWildcard;
}

/**
 * The AWS Lake Formation principal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datalakeprincipal.html}
 **/
export interface LakeFormationPrincipalPermissionsDataLakePrincipal {
  /**
   * An identifier for the AWS Lake Formation principal.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataLakePrincipalIdentifier?: Value<string>;
}

/**
 * A structure that describes certain columns on certain rows.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-datacellsfilterresource.html}
 **/
export interface LakeFormationPrincipalPermissionsDataCellsFilterResource {
  /**
   * The name of the table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableName: Value<string>;
  /**
   * A database in the Data Catalog.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatabaseName: Value<string>;
  /**
   * The ID of the catalog to which the table belongs.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableCatalogId: Value<string>;
  /**
   * The name given by the user to the data filter cell.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * A structure for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-resource.html}
 **/
export interface LakeFormationPrincipalPermissionsResource {
  /**
   * The LF-tag key and values attached to a resource.
   *
   * _Required_: No
   *
   * _Type_: [LFTagKeyResource](aws-properties-lakeformation-principalpermissions-lftagkeyresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LFTag?: LakeFormationPrincipalPermissionsLFTagKeyResource;
  /**
   * The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   *
   * _Required_: No
   *
   * _Type_: [TableResource](aws-properties-lakeformation-principalpermissions-tableresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Table?: LakeFormationPrincipalPermissionsTableResource;
  /**
   * A data cell filter.
   *
   * _Required_: No
   *
   * _Type_: [DataCellsFilterResource](aws-properties-lakeformation-principalpermissions-datacellsfilterresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataCellsFilter?: LakeFormationPrincipalPermissionsDataCellsFilterResource;
  /**
   * The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [TableWithColumnsResource](aws-properties-lakeformation-principalpermissions-tablewithcolumnsresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableWithColumns?: LakeFormationPrincipalPermissionsTableWithColumnsResource;
  /**
   * A list of LF-tag conditions that define a resource's LF-tag policy.
   *
   * _Required_: No
   *
   * _Type_: [LFTagPolicyResource](aws-properties-lakeformation-principalpermissions-lftagpolicyresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LFTagPolicy?: LakeFormationPrincipalPermissionsLFTagPolicyResource;
  /**
   * The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
   *
   * _Required_: No
   *
   * _Type_: [DatabaseResource](aws-properties-lakeformation-principalpermissions-databaseresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Database?: LakeFormationPrincipalPermissionsDatabaseResource;
  /**
   * The location of an Amazon S3 path where permissions are granted or revoked.
   *
   * _Required_: No
   *
   * _Type_: [DataLocationResource](aws-properties-lakeformation-principalpermissions-datalocationresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataLocation?: LakeFormationPrincipalPermissionsDataLocationResource;
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Catalog?: { [key: string]: any };
}

/**
 * The LF-tag key and values attached to a resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftag.html}
 **/
export interface LakeFormationPrincipalPermissionsLFTag {
  /**
   * The key-name for the LF-tag.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagKey?: Value<string>;
  /**
   * A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagValues?: List<Value<string>>;
}

/**
 * A list of LF-tag conditions that define a resource's LF-tag policy.
 *
 * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-principalpermissions-lftagpolicyresource.html}
 **/
export interface LakeFormationPrincipalPermissionsLFTagPolicyResource {
  /**
   * A list of LF-tag conditions that apply to the resource's LF-tag policy.
   *
   * _Required_: Yes
   *
   * _Type_: List of [LFTag](aws-properties-lakeformation-principalpermissions-lftag.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Expression: List<LakeFormationPrincipalPermissionsLFTag>;
  /**
   * The resource type for which the LF-tag policy applies.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceType: Value<string>;
  /**
   * The identifier for the Data Catalog. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
}
export interface LakeFormationPrincipalPermissionsProperties {
  /**
   * The resource to be granted or revoked permissions.
   *
   * _Required_: Yes
   *
   * _Type_: [Resource](aws-properties-lakeformation-principalpermissions-resource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Resource: LakeFormationPrincipalPermissionsResource;
  /**
   * The permissions granted or revoked.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Permissions: List<Value<string>>;
  /**
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Catalog?: Value<string>;
  /**
   * The principal to be granted a permission.
   *
   * _Required_: Yes
   *
   * _Type_: [DataLakePrincipal](aws-properties-lakeformation-principalpermissions-datalakeprincipal.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Principal: LakeFormationPrincipalPermissionsDataLakePrincipal;
  /**
   * Indicates the ability to grant permissions (as a subset of permissions granted).
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PermissionsWithGrantOption: List<Value<string>>;
}

/**
 * The `AWS::LakeFormation::PrincipalPermissions` resource represents the permissions that a principal has on a Data Catalog resource (such as AWS Glue databases or AWS Glue tables). When you create a `PrincipalPermissions` resource, the permissions are granted via the AWS Lake Formation `GrantPermissions` API operation. When you delete a `PrincipalPermissions` resource, the permissions on principal-resource pair are revoked via the AWS Lake Formation `RevokePermissions` API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-principalpermissions.html}
 */
export interface LakeFormationPrincipalPermissionsResource {
  Type: 'AWS::LakeFormation::PrincipalPermissions';
  Properties: LakeFormationPrincipalPermissionsProperties;
}
