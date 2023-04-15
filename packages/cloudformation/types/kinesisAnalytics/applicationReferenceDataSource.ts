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
 * Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the _'n'_ as the row delimiter and a comma (",") as the column delimiter:
 *
 * `"name1", "address1"`
 *
 * `"name2", "address2"`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-csvmappingparameters.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceCSVMappingParameters {
  /**
   * Row delimiter. For example, in a CSV format, _'n'_ is the typical row delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowDelimiter: Value<string>;
  /**
   * Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumnDelimiter: Value<string>;
}

/**
 * Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-recordformat.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceRecordFormat {
  /**
   * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [MappingParameters](aws-properties-kinesisanalytics-applicationreferencedatasource-mappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappingParameters?: KinesisAnalyticsApplicationReferenceDataSourceMappingParameters;
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
 * Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.
 *
 * An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the [UpdateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html) operation to trigger reloading of data into your application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-s3referencedatasource.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceS3ReferenceDataSource {
  /**
   * Amazon Resource Name (ARN) of the S3 bucket.
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
   * Object key name containing reference data.
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
  /**
   * ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the `s3:GetObject` action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.
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
  ReferenceRoleARN: Value<string>;
}

/**
 * Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 *
 * Also used to describe the format of the reference data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-recordcolumn.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceRecordColumn {
  /**
   * Reference to the data element in the streaming input or the reference data source. This element is required if the [RecordFormatType](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel) is `JSON`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mapping?: Value<string>;
  /**
   * Type of column created in the in-application input stream or reference table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlType: Value<string>;
  /**
   * Name of the column created in the in-application input stream or reference table.
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
 * The ReferenceSchema property type specifies the format of the data in the reference source for a SQL-based Amazon Kinesis Data Analytics application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-referenceschema.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceReferenceSchema {
  /**
   * Specifies the encoding of the records in the reference source. For example, UTF-8.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordEncoding?: Value<string>;
  /**
   * A list of RecordColumn objects.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RecordColumn](aws-properties-kinesisanalytics-applicationreferencedatasource-recordcolumn.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordColumns: List<KinesisAnalyticsApplicationReferenceDataSourceRecordColumn>;
  /**
   * Specifies the format of the records on the reference source.
   *
   * _Required_: Yes
   *
   * _Type_: [RecordFormat](aws-properties-kinesisanalytics-applicationreferencedatasource-recordformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordFormat: KinesisAnalyticsApplicationReferenceDataSourceRecordFormat;
}

/**
 * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-mappingparameters.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceMappingParameters {
  /**
   * Provides additional mapping information when JSON is the record format on the streaming source.
   *
   * _Required_: No
   *
   * _Type_: [JSONMappingParameters](aws-properties-kinesisanalytics-applicationreferencedatasource-jsonmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JSONMappingParameters?: KinesisAnalyticsApplicationReferenceDataSourceJSONMappingParameters;
  /**
   * Provides additional mapping information when the record format uses delimiters (for example, CSV).
   *
   * _Required_: No
   *
   * _Type_: [CSVMappingParameters](aws-properties-kinesisanalytics-applicationreferencedatasource-csvmappingparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CSVMappingParameters?: KinesisAnalyticsApplicationReferenceDataSourceCSVMappingParameters;
}

/**
 * Provides additional mapping information when JSON is the record format on the streaming source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-jsonmappingparameters.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceJSONMappingParameters {
  /**
   * Path to the top-level parent that contains the records.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordRowPath: Value<string>;
}

/**
 * Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalytics-applicationreferencedatasource-referencedatasource.html}
 **/
export interface KinesisAnalyticsApplicationReferenceDataSourceReferenceDataSource {
  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceSchema](aws-properties-kinesisanalytics-applicationreferencedatasource-referenceschema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceSchema: KinesisAnalyticsApplicationReferenceDataSourceReferenceSchema;
  /**
   * Name of the in-application table to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName?: Value<string>;
  /**
   * Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf. An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the `UpdateApplication` operation to trigger reloading of data into your application.
   *
   * _Required_: No
   *
   * _Type_: [S3ReferenceDataSource](aws-properties-kinesisanalytics-applicationreferencedatasource-s3referencedatasource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ReferenceDataSource?: KinesisAnalyticsApplicationReferenceDataSourceS3ReferenceDataSource;
}
export interface KinesisAnalyticsApplicationReferenceDataSourceProperties {
  /**
   * Name of an existing application.
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
   * The reference data source can be an object in your Amazon S3 bucket. Amazon Kinesis Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. You must also provide an IAM role with the necessary permissions that Amazon Kinesis Analytics can assume to read the object from your S3 bucket on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceDataSource](aws-properties-kinesisanalytics-applicationreferencedatasource-referencedatasource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceDataSource: KinesisAnalyticsApplicationReferenceDataSourceReferenceDataSource;
}

/**
 * Adds a reference data source to an existing application.
 *
 * Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table.
 *
 * For conceptual information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html). For the limits on data sources you can add to your application, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
 *
 * This operation requires permissions to perform the `kinesisanalytics:AddApplicationOutput` action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalytics-applicationreferencedatasource.html}
 */
export interface KinesisAnalyticsApplicationReferenceDataSourceResource {
  Type: 'AWS::KinesisAnalytics::ApplicationReferenceDataSource';
  Properties: KinesisAnalyticsApplicationReferenceDataSourceProperties;
}
