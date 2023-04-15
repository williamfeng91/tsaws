/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains the configuration information of file formats. AWS IoT Analytics data stores support JSON and [Parquet](https://parquet.apache.org/).
 *
 * The default file format is JSON. You can specify only one format.
 *
 * You can't change the file format after you create the data store.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-fileformatconfiguration.html}
 **/
export interface IoTAnalyticsDatastoreFileFormatConfiguration {
  /**
   * Contains the configuration information of the Parquet format.
   *
   * _Required_: No
   *
   * _Type_: [ParquetConfiguration](aws-properties-iotanalytics-datastore-parquetconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParquetConfiguration?: IoTAnalyticsDatastoreParquetConfiguration;
  /**
   * Contains the configuration information of the JSON format.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonConfiguration?: { [key: string]: any };
}

/**
 * How long, in days, message data is kept.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-retentionperiod.html}
 **/
export interface IoTAnalyticsDatastoreRetentionPeriod {
  /**
   * The number of days that message data is kept. The `unlimited` parameter must be false.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfDays?: Value<number>;
  /**
   * If true, message data is kept indefinitely.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unlimited?: Value<boolean>;
}

/**
 * Contains information about a column that stores your data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-column.html}
 **/
export interface IoTAnalyticsDatastoreColumn {
  /**
   * The type of data. For more information about the supported data types, see [Common data types](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html) in the _ AWS Glue Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The name of the column.
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
 * Contains the configuration information of the Parquet format.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-parquetconfiguration.html}
 **/
export interface IoTAnalyticsDatastoreParquetConfiguration {
  /**
   * Information needed to define a schema.
   *
   * _Required_: No
   *
   * _Type_: [SchemaDefinition](aws-properties-iotanalytics-datastore-schemadefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchemaDefinition?: IoTAnalyticsDatastoreSchemaDefinition;
}

/**
 * Where data store data is stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorestorage.html}
 **/
export interface IoTAnalyticsDatastoreDatastoreStorage {
  /**
   * Use this to store data store data in an S3 bucket that you manage. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store.
   *
   * _Required_: No
   *
   * _Type_: [CustomerManagedS3](aws-properties-iotanalytics-datastore-customermanageds3.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerManagedS3?: IoTAnalyticsDatastoreCustomerManagedS3;
  /**
   * Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceManagedS3?: { [key: string]: any };
  /**
   * Use this to store data used by AWS IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
   *
   * _Required_: No
   *
   * _Type_: [IotSiteWiseMultiLayerStorage](aws-properties-iotanalytics-datastore-iotsitewisemultilayerstorage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotSiteWiseMultiLayerStorage?: IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage;
}

/**
 * A partition dimension defined by a timestamp attribute.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-timestamppartition.html}
 **/
export interface IoTAnalyticsDatastoreTimestampPartition {
  /**
   * The attribute name of the partition defined by a timestamp.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeName: Value<string>;
  /**
   * The timestamp format of a partition defined by a timestamp. The default format is seconds since epoch (January 1, 1970 at midnight UTC time).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampFormat?: Value<string>;
}

/**
 * Stores data used by AWS IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-iotsitewisemultilayerstorage.html}
 **/
export interface IoTAnalyticsDatastoreIotSiteWiseMultiLayerStorage {
  /**
   * Stores data used by AWS IoT SiteWise in an Amazon S3 bucket that you manage.
   *
   * _Required_: No
   *
   * _Type_: [CustomerManagedS3Storage](aws-properties-iotanalytics-datastore-customermanageds3storage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerManagedS3Storage?: IoTAnalyticsDatastoreCustomerManagedS3Storage;
}

/**
 * S3-customer-managed; When you choose customer-managed storage, the `retentionPeriod` parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-customermanageds3.html}
 **/
export interface IoTAnalyticsDatastoreCustomerManagedS3 {
  /**
   * The name of the Amazon S3 bucket where your data is stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9.-_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * The ARN of the role that grants AWS IoT Analytics permission to interact with your Amazon S3 resources.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9!_.*'()/{}:-]*\/$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyPrefix?: Value<string>;
}

/**
 * Information about the partition dimensions in a data store.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorepartitions.html}
 **/
export interface IoTAnalyticsDatastoreDatastorePartitions {
  /**
   * A list of partition dimensions in a data store.
   *
   * _Required_: No
   *
   * _Type_: List of [DatastorePartition](aws-properties-iotanalytics-datastore-datastorepartition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Partitions?: List<IoTAnalyticsDatastoreDatastorePartition>;
}

/**
 * Information needed to define a schema.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-schemadefinition.html}
 **/
export interface IoTAnalyticsDatastoreSchemaDefinition {
  /**
   * Specifies one or more columns that store your data.
   *
   * Each schema can have up to 100 columns. Each column can have up to 100 nested types.
   *
   * _Required_: No
   *
   * _Type_: List of [Column](aws-properties-iotanalytics-datastore-column.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Columns?: List<IoTAnalyticsDatastoreColumn>;
}

/**
 * Amazon S3-customer-managed; When you choose customer-managed storage, the `retentionPeriod` parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-customermanageds3storage.html}
 **/
export interface IoTAnalyticsDatastoreCustomerManagedS3Storage {
  /**
   * The name of the Amazon S3 bucket where your data is stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyPrefix?: Value<string>;
}

/**
 * A single dimension to partition a data store. The dimension must be an `AttributePartition` or a `TimestampPartition`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-partition.html}
 **/
export interface IoTAnalyticsDatastorePartition {
  /**
   * The name of the attribute that defines a partition dimension.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeName: Value<string>;
}

/**
 * A single dimension to partition a data store. The dimension must be an `AttributePartition` or a `TimestampPartition`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-datastore-datastorepartition.html}
 **/
export interface IoTAnalyticsDatastoreDatastorePartition {
  /**
   * A partition dimension defined by an attribute.
   *
   * _Required_: No
   *
   * _Type_: [Partition](aws-properties-iotanalytics-datastore-partition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Partition?: IoTAnalyticsDatastorePartition;
  /**
   * A partition dimension defined by a timestamp attribute.
   *
   * _Required_: No
   *
   * _Type_: [TimestampPartition](aws-properties-iotanalytics-datastore-timestamppartition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampPartition?: IoTAnalyticsDatastoreTimestampPartition;
}
export interface IoTAnalyticsDatastoreProperties {
  /**
   * Where data store data is stored.
   *
   * _Required_: No
   *
   * _Type_: [DatastoreStorage](aws-properties-iotanalytics-datastore-datastorestorage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatastoreStorage?: IoTAnalyticsDatastoreDatastoreStorage;
  /**
   * Contains the configuration information of file formats. AWS IoT Analytics data stores support JSON and [Parquet](https://parquet.apache.org/).
   *
   * The default file format is JSON. You can specify only one format.
   *
   * You can't change the file format after you create the data store.
   *
   * _Required_: No
   *
   * _Type_: [FileFormatConfiguration](aws-properties-iotanalytics-datastore-fileformatconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileFormatConfiguration?: IoTAnalyticsDatastoreFileFormatConfiguration;
  /**
   * Information about the partition dimensions in a data store.
   *
   * _Required_: No
   *
   * _Type_: [DatastorePartitions](aws-properties-iotanalytics-datastore-datastorepartitions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatastorePartitions?: IoTAnalyticsDatastoreDatastorePartitions;
  /**
   * The name of the data store.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatastoreName?: Value<string>;
  /**
   * How long, in days, message data is kept for the data store. When `customerManagedS3` storage is selected, this parameter is ignored.
   *
   * _Required_: No
   *
   * _Type_: [RetentionPeriod](aws-properties-iotanalytics-datastore-retentionperiod.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionPeriod?: IoTAnalyticsDatastoreRetentionPeriod;
  /**
   * Metadata which can be used to manage the data store.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * AWS::IoTAnalytics::Datastore resource is a repository for messages. For more information, see [ How to Use AWS IoT Analytics](https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how) in the _AWS IoT Analytics User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html}
 */
export interface IoTAnalyticsDatastoreResource {
  Type: 'AWS::IoTAnalytics::Datastore';
  Properties: IoTAnalyticsDatastoreProperties;
}
