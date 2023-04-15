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
 * The structure used to create or update a database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput.html}
 **/
export interface GlueDatabaseDatabaseInput {
  /**
   * The location of the database (for example, an HDFS path).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocationUri?: Value<string>;
  /**
   * Creates a set of default permissions on the table for principals. Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.
   *
   * _Required_: No
   *
   * _Type_: List of [PrincipalPrivileges](aws-properties-glue-database-principalprivileges.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreateTableDefaultPermissions?: List<GlueDatabasePrincipalPrivileges>;
  /**
   * A description of the database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * These key-value pairs define parameters and properties of the database.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: any };
  /**
   * A `DatabaseIdentifier` structure that describes a target database for resource linking.
   *
   * _Required_: No
   *
   * _Type_: [DatabaseIdentifier](aws-properties-glue-database-databaseidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetDatabase?: GlueDatabaseDatabaseIdentifier;
  FederatedDatabase?: GlueDatabaseFederatedDatabase;
  /**
   * The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
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
 * A structure that describes a target database for resource linking.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseidentifier.html}
 **/
export interface GlueDatabaseDatabaseIdentifier {
  /**
   * The name of the catalog database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * The ID of the Data Catalog in which the database resides.
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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-databaseinput-federateddatabase.html}
 **/
export interface GlueDatabaseFederatedDatabase {
  ConnectionName?: Value<string>;
  Identifier?: Value<string>;
}

/**
 * the permissions granted to a principal
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-principalprivileges.html}
 **/
export interface GlueDatabasePrincipalPrivileges {
  /**
   * The permissions that are granted to the principal.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<Value<string>>;
  /**
   * The principal who is granted permissions.
   *
   * _Required_: No
   *
   * _Type_: [DataLakePrincipal](aws-properties-glue-database-datalakeprincipal.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Principal?: GlueDatabaseDataLakePrincipal;
}

/**
 * The AWS Lake Formation principal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-database-datalakeprincipal.html}
 **/
export interface GlueDatabaseDataLakePrincipal {
  /**
   * An identifier for the AWS Lake Formation principal.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLakePrincipalIdentifier?: Value<string>;
}
export interface GlueDatabaseProperties {
  /**
   * The metadata for the database.
   *
   * _Required_: Yes
   *
   * _Type_: [DatabaseInput](aws-properties-glue-database-databaseinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseInput: GlueDatabaseDatabaseInput;
  /**
   * The AWS account ID for the account in which to create the catalog object.
   *
   * To specify the account ID, you can use the `Ref` intrinsic function with the `AWS::AccountId` pseudo parameter. For example: `!Ref AWS::AccountId`
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
 * The `AWS::Glue::Database` resource specifies a logical grouping of tables in AWS Glue. For more information, see [Defining a Database in Your Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/define-database.html) and [Database Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-Database) in the _AWS Glue Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-database.html}
 */
export interface GlueDatabaseResource {
  Type: 'AWS::Glue::Database';
  Properties: GlueDatabaseProperties;
}
