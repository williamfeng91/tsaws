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
 * A PartiQL predicate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-rowfilter.html}
 **/
export interface LakeFormationDataCellsFilterRowFilter {
  /**
   * A wildcard for all rows.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AllRowsWildcard?: { [key: string]: any };
  /**
   * A filter expression.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FilterExpression?: Value<string>;
}

/**
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-columnwildcard.html}
 **/
export interface LakeFormationDataCellsFilterColumnWildcard {
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
export interface LakeFormationDataCellsFilterProperties {
  /**
   * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html#aws-glue-api-regex-oneLine).
   *
   * A table in the database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableName: Value<string>;
  /**
   * An array of UTF-8 strings. A list of column names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ColumnNames?: List<Value<string>>;
  /**
   * A PartiQL predicate.
   *
   * _Required_: No
   *
   * _Type_: [RowFilter](aws-properties-lakeformation-datacellsfilter-rowfilter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RowFilter?: LakeFormationDataCellsFilterRowFilter;
  /**
   * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html#aws-glue-api-regex-oneLine).
   *
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
   * Catalog id string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html#aws-glue-api-regex-oneLine).
   *
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
   * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html#aws-glue-api-regex-oneLine).
   *
   * The name given by the user to the data filter cell.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * A wildcard with exclusions. You must specify either a `ColumnNames` list or the `ColumnWildCard`.
   *
   * _Required_: No
   *
   * _Type_: [ColumnWildcard](aws-properties-lakeformation-datacellsfilter-columnwildcard.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ColumnWildcard?: LakeFormationDataCellsFilterColumnWildcard;
}

/**
 * A structure that represents a data cell filter with column-level, row-level, and/or cell-level security. Data cell filters belong to a specific table in a Data Catalog. During a stack operation, AWS CloudFormation calls the AWS Lake Formation `CreateDataCellsFilter` API operation to create a `DataCellsFilter` resource, and calls the `DeleteDataCellsFilter` API operation to delete it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html}
 */
export interface LakeFormationDataCellsFilterResource {
  Type: 'AWS::LakeFormation::DataCellsFilter';
  Properties: LakeFormationDataCellsFilterProperties;
}
