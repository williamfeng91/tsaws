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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A rule defined to grant access on one or more restricted columns. Each dataset can have multiple rules. To create a restricted column, you add it to one or more rules. Each rule must contain at least one column and at least one user or group. To be able to see a restricted column, a user or group needs to be added to a rule for that column.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columnlevelpermissionrule.html}
 **/
export interface QuickSightDataSetColumnLevelPermissionRule {
  /**
   * An array of column names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnNames?: List<Value<string>>;
  /**
   * An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Principals?: List<Value<string>>;
}

/**
 * The usage configuration to apply to child datasets that reference this dataset as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-datasetusageconfiguration.html}
 **/
export interface QuickSightDataSetDataSetUsageConfiguration {
  /**
   * An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableUseAsImportedSource?: Value<boolean>;
  /**
   * An option that controls whether a child dataset of a direct query can use this dataset as a source.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableUseAsDirectQuerySource?: Value<boolean>;
}

/**
 * A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-createcolumnsoperation.html}
 **/
export interface QuickSightDataSetCreateColumnsOperation {
  /**
   * Calculated columns to create.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CalculatedColumn](aws-properties-quicksight-dataset-calculatedcolumn.md)
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightDataSetCalculatedColumn>;
}

/**
 * A view of a data source that contains information about the shape of the data in the underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-physicaltable.html}
 **/
export interface QuickSightDataSetPhysicalTable {
  /**
   * A physical table type for relational data sources.
   *
   * _Required_: No
   *
   * _Type_: [RelationalTable](aws-properties-quicksight-dataset-relationaltable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelationalTable?: QuickSightDataSetRelationalTable;
  /**
   * A physical table type built from the results of the custom SQL query.
   *
   * _Required_: No
   *
   * _Type_: [CustomSql](aws-properties-quicksight-dataset-customsql.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomSql?: QuickSightDataSetCustomSql;
  /**
   * A physical table type for as S3 data source.
   *
   * _Required_: No
   *
   * _Type_: [S3Source](aws-properties-quicksight-dataset-s3source.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Source?: QuickSightDataSetS3Source;
}

/**
 * Metadata that contains a description for a column.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columndescription.html}
 **/
export interface QuickSightDataSetColumnDescription {
  /**
   * The text of a description for a column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Text?: Value<string>;
}

/**
 * A transform operation that renames a column.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-renamecolumnoperation.html}
 **/
export interface QuickSightDataSetRenameColumnOperation {
  /**
   * The new name for the column.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NewColumnName: Value<string>;
  /**
   * The name of the column to be renamed.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnName: Value<string>;
}

/**
 * Groupings of columns that work together in certain Amazon QuickSight features. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columngroup.html}
 **/
export interface QuickSightDataSetColumnGroup {
  /**
   * Geospatial column group that denotes a hierarchy.
   *
   * _Required_: No
   *
   * _Type_: [GeoSpatialColumnGroup](aws-properties-quicksight-dataset-geospatialcolumngroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeoSpatialColumnGroup?: QuickSightDataSetGeoSpatialColumnGroup;
}

/**
 * A physical table type for relational data sources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-relationaltable.html}
 **/
export interface QuickSightDataSetRelationalTable {
  /**
   * The Amazon Resource Name (ARN) for the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceArn: Value<string>;
  /**
   * The column schema of the table.
   *
   * _Required_: Yes
   *
   * _Type_: List of [InputColumn](aws-properties-quicksight-dataset-inputcolumn.md)
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputColumns: List<QuickSightDataSetInputColumn>;
  /**
   * The schema name. This name applies to certain relational database engines.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schema?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Catalog?: Value<string>;
  /**
   * The name of the relational table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A transform operation that filters rows based on a condition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-filteroperation.html}
 **/
export interface QuickSightDataSetFilterOperation {
  /**
   * An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionExpression: Value<string>;
}

/**
 * A physical table type built from the results of the custom SQL query.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-customsql.html}
 **/
export interface QuickSightDataSetCustomSql {
  /**
   * The Amazon Resource Name (ARN) of the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceArn: Value<string>;
  /**
   * The SQL query.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65536`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlQuery: Value<string>;
  /**
   * The column schema from the SQL query result set.
   *
   * _Required_: Yes
   *
   * _Type_: List of [InputColumn](aws-properties-quicksight-dataset-inputcolumn.md)
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<QuickSightDataSetInputColumn>;
  /**
   * A display name for the SQL query result.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A transform operation that tags a column with additional information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-tagcolumnoperation.html}
 **/
export interface QuickSightDataSetTagColumnOperation {
  /**
   * The column that this operation acts on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnName: Value<string>;
  /**
   * The dataset column tag, currently only used for geospatial type tagging.
   *
   * This is not tags for the AWS tagging feature.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ColumnTag](aws-properties-quicksight-dataset-columntag.md)
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags: List<QuickSightDataSetColumnTag>;
}

/**
 * A transform operation that casts a column to a different type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-castcolumntypeoperation.html}
 **/
export interface QuickSightDataSetCastColumnTypeOperation {
  /**
   * Column name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnName: Value<string>;
  /**
   * When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: Value<string>;
  /**
   * New column data type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DATETIME | DECIMAL | INTEGER | STRING`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NewColumnType: Value<string>;
}

/**
 * Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-logicaltablesource.html}
 **/
export interface QuickSightDataSetLogicalTableSource {
  /**
   * Physical table ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[0-9a-zA-Z-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhysicalTableId?: Value<string>;
  /**
   * Specifies the result of a join of two logical tables.
   *
   * _Required_: No
   *
   * _Type_: [JoinInstruction](aws-properties-quicksight-dataset-joininstruction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JoinInstruction?: QuickSightDataSetJoinInstruction;
  /**
   * The Amazon Resource Number (ARN) of the parent dataset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetArn?: Value<string>;
}

/**
 * Properties associated with the columns participating in a join.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joinkeyproperties.html}
 **/
export interface QuickSightDataSetJoinKeyProperties {
  /**
   * A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by Amazon QuickSight to optimize query performance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UniqueKey?: Value<boolean>;
}

/**
 * Information about the format for a source file or files.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-uploadsettings.html}
 **/
export interface QuickSightDataSetUploadSettings {
  /**
   * Whether the file has a header row, or the files each have a header row.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainsHeader?: Value<boolean>;
  /**
   * Text qualifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DOUBLE_QUOTE | SINGLE_QUOTE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextQualifier?: Value<string>;
  /**
   * File format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CLF | CSV | ELF | JSON | TSV | XLSX`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: Value<string>;
  /**
   * A row number to start reading data from.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartFromRow?: Value<number>;
  /**
   * The delimiter between values in the file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Delimiter?: Value<string>;
}

/**
 * A transform operation that projects columns. Operations that come after a projection can only refer to projected columns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-projectoperation.html}
 **/
export interface QuickSightDataSetProjectOperation {
  /**
   * Projected columns.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `2000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProjectedColumns: List<Value<string>>;
}

/**
 * Geospatial column group that denotes a hierarchy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-geospatialcolumngroup.html}
 **/
export interface QuickSightDataSetGeoSpatialColumnGroup {
  /**
   * Columns in this hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns: List<Value<string>>;
  /**
   * Country code.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `US`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CountryCode?: Value<string>;
  /**
   * A display name for the hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Metadata for a column that is used as the input of a transform operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-inputcolumn.html}
 **/
export interface QuickSightDataSetInputColumn {
  /**
   * The data type of the column.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BIT | BOOLEAN | DATETIME | DECIMAL | INTEGER | JSON | STRING`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The name of this column in the underlying data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Information about a dataset that contains permissions for row-level security (RLS). The permissions dataset maps fields to users or groups. For more information, see [Using Row-Level Security (RLS) to Restrict Access to a Dataset](https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html) in the _Amazon QuickSight User Guide_.
 *
 * The option to deny permissions by setting `PermissionPolicy` to `DENY_ACCESS` is not supported for new RLS datasets.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-rowlevelpermissiondataset.html}
 **/
export interface QuickSightDataSetRowLevelPermissionDataSet {
  /**
   * The user or group rules associated with the dataset that contains permissions for RLS.
   *
   * By default, `FormatVersion` is `VERSION_1`. When `FormatVersion` is `VERSION_1`, `UserName` and `GroupName` are required. When `FormatVersion` is `VERSION_2`, `UserARN` and `GroupARN` are required, and `Namespace` must not exist.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `VERSION_1 | VERSION_2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatVersion?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
  /**
   * The namespace associated with the dataset that contains permissions for RLS.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^[a-zA-Z0-9._-]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Namespace?: Value<string>;
  /**
   * The type of permissions to use when interpreting the permissions for RLS. `DENY_ACCESS` is included for backward compatibility only.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DENY_ACCESS | GRANT_ACCESS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PermissionPolicy: Value<string>;
}

/**
 * Permission for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-resourcepermission.html}
 **/
export interface QuickSightDataSetResourcePermission {
  /**
   * The IAM action to grant or revoke permisions on
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<Value<string>>;
  /**
   * The Amazon Resource Name (ARN) of the principal. This can be one of the following:
   */
  Principal: Value<string>;
}

/**
 * A FieldFolder element is a folder that contains fields and nested subfolders.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-fieldfolder.html}
 **/
export interface QuickSightDataSetFieldFolder {
  /**
   * The description for a field folder.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A folder has a list of columns. A column can only be in one folder.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<Value<string>>;
}

/**
 * A physical table type for an S3 data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-s3source.html}
 **/
export interface QuickSightDataSetS3Source {
  /**
   * The Amazon Resource Name (ARN) for the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceArn: Value<string>;
  /**
   * A physical table type for an S3 data source.
   *
   * For files that aren't JSON, only `STRING` data types are supported in input columns.
   *
   * _Required_: Yes
   *
   * _Type_: List of [InputColumn](aws-properties-quicksight-dataset-inputcolumn.md)
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputColumns: List<QuickSightDataSetInputColumn>;
  /**
   * Information about the format for the S3 source file or files.
   *
   * _Required_: No
   *
   * _Type_: [UploadSettings](aws-properties-quicksight-dataset-uploadsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UploadSettings?: QuickSightDataSetUploadSettings;
}

/**
 * A _logical table_ is a unit that joins and that data transformations operate on. A logical table has a source, which can be either a physical table or result of a join. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-logicaltable.html}
 **/
export interface QuickSightDataSetLogicalTable {
  /**
   * A display name for the logical table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alias: Value<string>;
  /**
   * Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null.
   *
   * _Required_: No
   *
   * _Type_: List of [TransformOperation](aws-properties-quicksight-dataset-transformoperation.md)
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTransforms?: List<QuickSightDataSetTransformOperation>;
  /**
   * Source of this logical table.
   *
   * _Required_: Yes
   *
   * _Type_: [LogicalTableSource](aws-properties-quicksight-dataset-logicaltablesource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: QuickSightDataSetLogicalTableSource;
}

/**
 * A data transformation on a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-transformoperation.html}
 **/
export interface QuickSightDataSetTransformOperation {
  /**
   * An operation that tags a column with additional information.
   *
   * _Required_: No
   *
   * _Type_: [TagColumnOperation](aws-properties-quicksight-dataset-tagcolumnoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagColumnOperation?: QuickSightDataSetTagColumnOperation;
  /**
   * An operation that filters rows based on some condition.
   *
   * _Required_: No
   *
   * _Type_: [FilterOperation](aws-properties-quicksight-dataset-filteroperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterOperation?: QuickSightDataSetFilterOperation;
  /**
   * A transform operation that casts a column to a different type.
   *
   * _Required_: No
   *
   * _Type_: [CastColumnTypeOperation](aws-properties-quicksight-dataset-castcolumntypeoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CastColumnTypeOperation?: QuickSightDataSetCastColumnTypeOperation;
  /**
   * An operation that creates calculated columns. Columns created in one such operation form a lexical closure.
   *
   * _Required_: No
   *
   * _Type_: [CreateColumnsOperation](aws-properties-quicksight-dataset-createcolumnsoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreateColumnsOperation?: QuickSightDataSetCreateColumnsOperation;
  /**
   * An operation that renames a column.
   *
   * _Required_: No
   *
   * _Type_: [RenameColumnOperation](aws-properties-quicksight-dataset-renamecolumnoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RenameColumnOperation?: QuickSightDataSetRenameColumnOperation;
  /**
   * An operation that projects columns. Operations that come after a projection can only refer to projected columns.
   *
   * _Required_: No
   *
   * _Type_: [ProjectOperation](aws-properties-quicksight-dataset-projectoperation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProjectOperation?: QuickSightDataSetProjectOperation;
}

/**
 * The instructions associated with a join.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-joininstruction.html}
 **/
export interface QuickSightDataSetJoinInstruction {
  /**
   * The join instructions provided in the `ON` clause of a join.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnClause: Value<string>;
  /**
   * The type of join that it is.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `INNER | LEFT | OUTER | RIGHT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Join key properties of the left operand.
   *
   * _Required_: No
   *
   * _Type_: [JoinKeyProperties](aws-properties-quicksight-dataset-joinkeyproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LeftJoinKeyProperties?: QuickSightDataSetJoinKeyProperties;
  /**
   * The operand on the left side of a join.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[0-9a-zA-Z-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LeftOperand: Value<string>;
  /**
   * The operand on the right side of a join.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[0-9a-zA-Z-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RightOperand: Value<string>;
  /**
   * Join key properties of the right operand.
   *
   * _Required_: No
   *
   * _Type_: [JoinKeyProperties](aws-properties-quicksight-dataset-joinkeyproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RightJoinKeyProperties?: QuickSightDataSetJoinKeyProperties;
}

/**
 * Output column.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-outputcolumn.html}
 **/
export interface QuickSightDataSetOutputColumn {
  /**
   * Type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DATETIME | DECIMAL | INTEGER | STRING`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * A description for a column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A display name for the dataset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A tag for a column in a `[TagColumnOperation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html)` structure. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-columntag.html}
 **/
export interface QuickSightDataSetColumnTag {
  /**
   * A geospatial role for a column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CITY | COUNTRY | COUNTY | LATITUDE | LONGITUDE | POSTCODE | STATE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnGeographicRole?: Value<string>;
  /**
   * A description for a column.
   *
   * _Required_: No
   *
   * _Type_: [ColumnDescription](aws-properties-quicksight-dataset-columndescription.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnDescription?: QuickSightDataSetColumnDescription;
}

/**
 * The wait policy to use when creating or updating a Dataset. The default is to wait for SPICE ingestion to finish with timeout of 36 hours.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-ingestionwaitpolicy.html}
 **/
export interface QuickSightDataSetIngestionWaitPolicy {
  /**
   * Wait for SPICE ingestion to finish to mark dataset creation or update as successful. Default (true). Applicable only when `DataSetImportMode` mode is set to SPICE.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaitForSpiceIngestion?: Value<boolean>;
  /**
   * The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours. Applicable only when `DataSetImportMode` mode is set to SPICE and `WaitForSpiceIngestion` is set to true.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngestionWaitTimeInHours?: Value<number>;
}

/**
 * A calculated column for a dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-dataset-calculatedcolumn.html}
 **/
export interface QuickSightDataSetCalculatedColumn {
  /**
   * A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnId: Value<string>;
  /**
   * Column name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnName: Value<string>;
  /**
   * An expression that defines the calculated column.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
}
export interface QuickSightDataSetProperties {
  /**
   * Declares the physical tables that are available in the underlying data sources.
   *
   * _Required_: No
   *
   * _Type_: Map of [PhysicalTable](aws-properties-quicksight-dataset-physicaltable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhysicalTableMap?: { [key: string]: QuickSightDataSetPhysicalTable };
  /**
   * The folder that contains fields and nested subfolders for your dataset.
   *
   * _Required_: No
   *
   * _Type_: Map of [FieldFolder](aws-properties-quicksight-dataset-fieldfolder.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldFolders?: { [key: string]: QuickSightDataSetFieldFolder };
  /**
   * An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataSetId?: Value<string>;
  /**
   * The row-level security configuration for the data that you want to create.
   *
   * _Required_: No
   *
   * _Type_: [RowLevelPermissionDataSet](aws-properties-quicksight-dataset-rowlevelpermissiondataset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowLevelPermissionDataSet?: QuickSightDataSetRowLevelPermissionDataSet;
  /**
   * The wait policy to use when creating or updating a Dataset. The default is to wait for SPICE ingestion to finish with timeout of 36 hours.
   *
   * _Required_: No
   *
   * _Type_: [IngestionWaitPolicy](aws-properties-quicksight-dataset-ingestionwaitpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngestionWaitPolicy?: QuickSightDataSetIngestionWaitPolicy;
  /**
   * A set of one or more definitions of a `ColumnLevelPermissionRule`.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnLevelPermissionRule](aws-properties-quicksight-dataset-columnlevelpermissionrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnLevelPermissionRules?: List<QuickSightDataSetColumnLevelPermissionRule>;
  /**
   * The display name for the dataset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.
   *
   * _Required_: No
   *
   * _Type_: List of [ColumnGroup](aws-properties-quicksight-dataset-columngroup.md)
   *
   * _Maximum_: `8`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnGroups?: List<QuickSightDataSetColumnGroup>;
  /**
   * Indicates whether you want to import the data into SPICE.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DIRECT_QUERY | SPICE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImportMode?: Value<string>;
  /**
   * Configures the combination and transformation of the data from the physical tables.
   *
   * _Required_: No
   *
   * _Type_: Map of [LogicalTable](aws-properties-quicksight-dataset-logicaltable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogicalTableMap?: { [key: string]: QuickSightDataSetLogicalTable };
  /**
   * The AWS account ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `^[0-9]{12}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AwsAccountId?: Value<string>;
  /**
   * A list of resource permissions on the dataset.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourcePermission](aws-properties-quicksight-dataset-resourcepermission.md)
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<QuickSightDataSetResourcePermission>;
  /**
   * The usage configuration to apply to child datasets that reference this dataset as a source.
   *
   * _Required_: No
   *
   * _Type_: [DataSetUsageConfiguration](aws-properties-quicksight-dataset-datasetusageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSetUsageConfiguration?: QuickSightDataSetDataSetUsageConfiguration;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a dataset. This operation doesn't support datasets that include uploaded files as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html}
 */
export interface QuickSightDataSetResource {
  Type: 'AWS::QuickSight::DataSet';
  Properties: QuickSightDataSetProperties;
}
