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
 * Represents a dataset paramater that defines type and conditions for a parameter in the Amazon S3 path of the dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datasetparameter.html}
 **/
export interface DataBrewDatasetDatasetParameter {
  /**
   * The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Additional parameter options such as a format and a timezone. Required for datetime parameters.
   *
   * _Required_: No
   *
   * _Type_: [DatetimeOptions](aws-properties-databrew-dataset-datetimeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatetimeOptions?: DataBrewDatasetDatetimeOptions;
  /**
   * The optional filter expression structure to apply additional matching criteria to the parameter.
   *
   * _Required_: No
   *
   * _Type_: [FilterExpression](aws-properties-databrew-dataset-filterexpression.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filter?: DataBrewDatasetFilterExpression;
  /**
   * Optional boolean value that defines whether the captured value of this parameter should be loaded as an additional column in the dataset.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreateColumn?: Value<boolean>;
  /**
   * The name of the parameter that is used in the dataset's Amazon S3 path.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-fileslimit.html}
 **/
export interface DataBrewDatasetFilesLimit {
  /**
   * A criteria to use for Amazon S3 files sorting before their selection. By default uses DESCENDING order, i.e. most recent files are selected first. Anotherpossible value is ASCENDING.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Order?: Value<string>;
  /**
   * A criteria to use for Amazon S3 files sorting before their selection. By default uses LAST_MODIFIED_DATE as a sorting criteria. Currently it's the only allowed value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrderedBy?: Value<string>;
  /**
   * The number of Amazon S3 files to select.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFiles: Value<number>;
}

/**
 * Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-csvoptions.html}
 **/
export interface DataBrewDatasetCsvOptions {
  /**
   * A single character that specifies the delimiter being used in the CSV file.
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
  /**
   * A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderRow?: Value<boolean>;
}

/**
 * Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-formatoptions.html}
 **/
export interface DataBrewDatasetFormatOptions {
  /**
   * Options that define how Excel input is to be interpreted by DataBrew.
   *
   * _Required_: No
   *
   * _Type_: [ExcelOptions](aws-properties-databrew-dataset-exceloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Excel?: DataBrewDatasetExcelOptions;
  /**
   * Options that define how CSV input is to be interpreted by DataBrew.
   *
   * _Required_: No
   *
   * _Type_: [CsvOptions](aws-properties-databrew-dataset-csvoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Csv?: DataBrewDatasetCsvOptions;
  /**
   * Options that define how JSON input is to be interpreted by DataBrew.
   *
   * _Required_: No
   *
   * _Type_: [JsonOptions](aws-properties-databrew-dataset-jsonoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Json?: DataBrewDatasetJsonOptions;
}

/**
 * Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-exceloptions.html}
 **/
export interface DataBrewDatasetExcelOptions {
  /**
   * A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderRow?: Value<boolean>;
  /**
   * One or more named sheets in the Excel file that will be included in the dataset.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetNames?: List<Value<string>>;
  /**
   * One or more sheet numbers in the Excel file that will be included in the dataset.
   *
   * _Required_: No
   *
   * _Type_: List of Integer
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SheetIndexes?: List<Value<number>>;
}

/**
 * Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or Amazon S3.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-input.html}
 **/
export interface DataBrewDatasetInput {
  /**
   * Connection information for dataset input files stored in a database.
   *
   * _Required_: No
   *
   * _Type_: [DatabaseInputDefinition](aws-properties-databrew-dataset-databaseinputdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseInputDefinition?: DataBrewDatasetDatabaseInputDefinition;
  /**
   * The Amazon S3 location where the data is stored.
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-databrew-dataset-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3InputDefinition?: DataBrewDatasetS3Location;
  /**
   * Contains additional resource information needed for specific datasets.
   *
   * _Required_: No
   *
   * _Type_: [Metadata](aws-properties-databrew-dataset-metadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metadata?: DataBrewDatasetMetadata;
  /**
   * The AWS Glue Data Catalog parameters for the data.
   *
   * _Required_: No
   *
   * _Type_: [DataCatalogInputDefinition](aws-properties-databrew-dataset-datacataloginputdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataCatalogInputDefinition?: DataBrewDatasetDataCatalogInputDefinition;
}

/**
 * Represents a single entry in the `ValuesMap` of a `FilterExpression`. A `FilterValue` associates the name of a substitution variable in an expression to its value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filtervalue.html}
 **/
export interface DataBrewDatasetFilterValue {
  /**
   * The value to be associated with the substitution variable.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The substitution variable reference.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueReference: Value<string>;
}

/**
 * Represents a structure for defining parameter conditions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-filterexpression.html}
 **/
export interface DataBrewDatasetFilterExpression {
  /**
   * The expression which includes condition names followed by substitution variables, possibly grouped and combined with other conditions. For example, "(starts_with :prefix1 or starts_with :prefix2) and (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with ':' symbol.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression: Value<string>;
  /**
   * The map of substitution variable names to their values used in this filter expression.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FilterValue](aws-properties-databrew-dataset-filtervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValuesMap: List<DataBrewDatasetFilterValue>;
}

/**
 * Represents a single entry in the path parameters of a dataset. Each `PathParameter` consists of a name and a parameter definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathparameter.html}
 **/
export interface DataBrewDatasetPathParameter {
  /**
   * The name of the path parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathParameterName: Value<string>;
  /**
   * The path parameter definition.
   *
   * _Required_: Yes
   *
   * _Type_: [DatasetParameter](aws-properties-databrew-dataset-datasetparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetParameter: DataBrewDatasetDatasetParameter;
}

/**
 * Connection information for dataset input files stored in a database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-databaseinputdefinition.html}
 **/
export interface DataBrewDatasetDatabaseInputDefinition {
  /**
   * An Amazon location that AWS Glue Data Catalog can use as a temporary directory.
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-databrew-dataset-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TempDirectory?: DataBrewDatasetS3Location;
  /**
   * Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryString?: Value<string>;
  /**
   * The AWS Glue Connection that stores the connection information for the target database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueConnectionName: Value<string>;
  /**
   * The table within the target database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseTableName?: Value<string>;
}

/**
 * Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-pathoptions.html}
 **/
export interface DataBrewDatasetPathOptions {
  /**
   * A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.
   *
   * _Required_: No
   *
   * _Type_: List of [PathParameter](aws-properties-databrew-dataset-pathparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: List<DataBrewDatasetPathParameter>;
  /**
   * If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [FilterExpression](aws-properties-databrew-dataset-filterexpression.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastModifiedDateCondition?: DataBrewDatasetFilterExpression;
  /**
   * If provided, this structure imposes a limit on a number of files that should be selected.
   *
   * _Required_: No
   *
   * _Type_: [FilesLimit](aws-properties-databrew-dataset-fileslimit.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilesLimit?: DataBrewDatasetFilesLimit;
}

/**
 * Represents the JSON-specific options that define how input is to be interpreted by AWS Glue DataBrew.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-jsonoptions.html}
 **/
export interface DataBrewDatasetJsonOptions {
  /**
   * A value that specifies whether JSON input contains embedded new line characters.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiLine?: Value<boolean>;
}

/**
 * Represents how metadata stored in the AWS Glue Data Catalog is defined in a DataBrew dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datacataloginputdefinition.html}
 **/
export interface DataBrewDatasetDataCatalogInputDefinition {
  /**
   * The name of a database table in the Data Catalog. This table corresponds to a DataBrew dataset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName?: Value<string>;
  /**
   * An Amazon location that AWS Glue Data Catalog can use as a temporary directory.
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-databrew-dataset-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TempDirectory?: DataBrewDatasetS3Location;
  /**
   * The name of a database in the Data Catalog.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * The unique identifier of the AWS account that holds the Data Catalog that stores the data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogId?: Value<string>;
}

/**
 * Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-datetimeoptions.html}
 **/
export interface DataBrewDatasetDatetimeOptions {
  /**
   * Optional value for a non-US locale code, needed for correct interpretation of some date formats.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocaleCode?: Value<string>;
  /**
   * Required option, that defines the datetime format used for a date parameter in the Amazon S3 path. Should use only supported datetime specifiers and separation characters, all litera a-z or A-Z character should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format: Value<string>;
  /**
   * Optional value for a timezone offset of the datetime parameter value in the Amazon S3 path. Shouldn't be used if Format for this parameter includes timezone fields. If no offset specified, UTC is assumed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimezoneOffset?: Value<string>;
}

/**
 * Contains additional resource information needed for specific datasets.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-metadata.html}
 **/
export interface DataBrewDatasetMetadata {
  /**
   * The Amazon Resource Name (ARN) associated with the dataset. Currently, DataBrew only supports ARNs from Amazon AppFlow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceArn?: Value<string>;
}

/**
 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-dataset-s3location.html}
 **/
export interface DataBrewDatasetS3Location {
  /**
   * The Amazon S3 bucket name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * The unique name of the object in the bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1280`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}
export interface DataBrewDatasetProperties {
  /**
   * Information on how DataBrew can find the dataset, in either the AWS Glue Data Catalog or Amazon S3.
   *
   * _Required_: Yes
   *
   * _Type_: [Input](aws-properties-databrew-dataset-input.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Input: DataBrewDatasetInput;
  /**
   * The file format of a dataset that is created from an Amazon S3 file or folder.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | EXCEL | JSON | ORC | PARQUET`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: Value<string>;
  /**
   * A set of options that define how DataBrew interprets the data in the dataset.
   *
   * _Required_: No
   *
   * _Type_: [FormatOptions](aws-properties-databrew-dataset-formatoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormatOptions?: DataBrewDatasetFormatOptions;
  /**
   * A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
   *
   * _Required_: No
   *
   * _Type_: [PathOptions](aws-properties-databrew-dataset-pathoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathOptions?: DataBrewDatasetPathOptions;
  /**
   * Metadata tags that have been applied to the dataset.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
  /**
   * The unique name of the dataset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Specifies a new DataBrew dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html}
 */
export interface DataBrewDatasetResource {
  Type: 'AWS::DataBrew::Dataset';
  Properties: DataBrewDatasetProperties;
}
