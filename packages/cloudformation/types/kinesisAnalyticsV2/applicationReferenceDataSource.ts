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
 * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 *
 * Also used to describe the format of the reference data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceRecordColumn {
  /**
   * A reference to the data element in the streaming input or the reference data source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mapping?: Value<string>;
  /**
   * The type of column created in the in-application input stream or reference table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlType: Value<string>;
  /**
   * The name of the column that is created in the in-application input stream or reference table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[^-s<>&]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceRecordFormat {
  /**
   * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [MappingParameters](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappingParameters?: KinesisAnalyticsV2ApplicationReferenceDataSourceMappingParameters;
  /**
   * The type of record format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | JSON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormatType: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceDataSource {
  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceSchema](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceSchema: KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceSchema;
  /**
   * The name of the in-application table to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TableName?: Value<string>;
  /**
   * Identifies the S3 bucket and object that contains the reference data. A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the [UpdateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html) operation to trigger reloading of data into your application.
   *
   * _Required_: No
   *
   * _Type_: [S3ReferenceDataSource](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ReferenceDataSource?: KinesisAnalyticsV2ApplicationReferenceDataSourceS3ReferenceDataSource;
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceMappingParameters {
  /**
   * Provides additional mapping information when JSON is the record format on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [JSONMappingParameters](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-jsonmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JSONMappingParameters?: KinesisAnalyticsV2ApplicationReferenceDataSourceJSONMappingParameters;
  /**
   * Provides additional mapping information when the record format uses delimiters (for example, CSV).
   *
   * _Required_: No
   *
   * _Type_: [CSVMappingParameters](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CSVMappingParameters?: KinesisAnalyticsV2ApplicationReferenceDataSourceCSVMappingParameters;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-jsonmappingparameters.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceJSONMappingParameters {
  /**
   * The path to the top-level parent that contains the records.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Pattern_: `^(?=^$)(?=^S+$).*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowPath: Value<string>;
}

/**
 * For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.
 *
 * A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the [UpdateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html) operation to trigger reloading of data into your application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceS3ReferenceDataSource {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketARN: Value<string>;
  /**
   * The object key name containing the reference data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileKey: Value<string>;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceSchema {
  /**
   * Specifies the encoding of the records in the streaming source. For example, UTF-8.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `5`
   *
   * _Maximum_: `5`
   *
   * _Pattern_: `UTF-8`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordEncoding?: Value<string>;
  /**
   * A list of `RecordColumn` objects.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RecordColumn](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.md)
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumns: List<KinesisAnalyticsV2ApplicationReferenceDataSourceRecordColumn>;
  /**
   * Specifies the format of the records on the streaming source.
   *
   * _Required_: Yes
   *
   * _Type_: [RecordFormat](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormat: KinesisAnalyticsV2ApplicationReferenceDataSourceRecordFormat;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the _'n'_ as the row delimiter and a comma (",") as the column delimiter:
 *
 * `"name1", "address1"`
 *
 * `"name2", "address2"`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters.html}
 **/
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceCSVMappingParameters {
  /**
   * The row delimiter. For example, in a CSV format, _'n'_ is the typical row delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowDelimiter: Value<string>;
  /**
   * The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumnDelimiter: Value<string>;
}
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceProperties {
  /**
   * The name of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationName: Value<string>;
  /**
   * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceDataSource](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceDataSource: KinesisAnalyticsV2ApplicationReferenceDataSourceReferenceDataSource;
}

/**
 * Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.
 *
 * Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html}
 */
export interface KinesisAnalyticsV2ApplicationReferenceDataSourceResource {
  Type: 'AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource';
  Properties: KinesisAnalyticsV2ApplicationReferenceDataSourceProperties;
}
