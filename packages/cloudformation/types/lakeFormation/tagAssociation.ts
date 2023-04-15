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
 * A structure containing the catalog ID, tag key, and tag values of an LF-tag key-value pair.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-lftagpair.html}
 **/
export interface LakeFormationTagAssociationLFTagPair {
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
   * A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
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
 * A structure for the database object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-databaseresource.html}
 **/
export interface LakeFormationTagAssociationDatabaseResource {
  /**
   * The identifier for the Data Catalog. By default, it should be the account ID of the caller.
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
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tableresource.html}
 **/
export interface LakeFormationTagAssociationTableResource {
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
   * A wildcard object representing every table under a database.This is an object with no properties that effectively behaves as a true or false depending on whether not it is passed as a parameter. The valid inputs for a property with this type in either yaml or json is null or {}.
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
 * A structure for a table with columns object. This object is only used when granting a SELECT permission.
 *
 * This object must take a value for at least one of `ColumnsNames`, `ColumnsIndexes`, or `ColumnsWildcard`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.html}
 **/
export interface LakeFormationTagAssociationTableWithColumnsResource {
  /**
   * The list of column names for the table. At least one of `ColumnNames` or `ColumnWildcard` is required.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ColumnNames: List<Value<string>>;
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
   * A wildcard object representing every table under a database.
   *
   * At least one of TableResource$Name or TableResource$TableWildcard is required.
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
}

/**
 * A structure for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-tagassociation-resource.html}
 **/
export interface LakeFormationTagAssociationResource {
  /**
   * The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   *
   * _Required_: No
   *
   * _Type_: [TableResource](aws-properties-lakeformation-tagassociation-tableresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Table?: LakeFormationTagAssociationTableResource;
  /**
   * The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [TableWithColumnsResource](aws-properties-lakeformation-tagassociation-tablewithcolumnsresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableWithColumns?: LakeFormationTagAssociationTableWithColumnsResource;
  /**
   * The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
   *
   * _Required_: No
   *
   * _Type_: [DatabaseResource](aws-properties-lakeformation-tagassociation-databaseresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Database?: LakeFormationTagAssociationDatabaseResource;
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
export interface LakeFormationTagAssociationProperties {
  /**
   * A structure containing an LF-tag key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: List of [LFTagPair](aws-properties-lakeformation-tagassociation-lftagpair.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LFTags: List<LakeFormationTagAssociationLFTagPair>;
  /**
   * UTF-8 string (valid values: `DATABASE | TABLE`).
   *
   * The resource for which the LF-tag policy applies.
   *
   * _Required_: Yes
   *
   * _Type_: [Resource](aws-properties-lakeformation-tagassociation-resource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Resource: LakeFormationTagAssociationResource;
}

/**
 * The `AWS::LakeFormation::TagAssociation` resource represents an assignment of an LF-tag to a Data Catalog resource (database, table, or column). During a stack operation, CloudFormation calls AWS Lake Formation `AddLFTagsToResource` API to create a `TagAssociation` resource and calls the `RemoveLFTagsToResource` API to delete it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tagassociation.html}
 */
export interface LakeFormationTagAssociationResource {
  Type: 'AWS::LakeFormation::TagAssociation';
  Properties: LakeFormationTagAssociationProperties;
}
