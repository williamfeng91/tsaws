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
 * Parameters for Amazon Aurora PostgreSQL-Compatible Edition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-aurorapostgresqlparameters.html}
 **/
export interface QuickSightDataSourceAuroraPostgreSqlParameters {
  /**
   * The port that Amazon Aurora PostgreSQL is listening on.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * The Amazon Aurora PostgreSQL database to connect to.
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
  Database: Value<string>;
  /**
   * The Amazon Aurora PostgreSQL-Compatible host to connect to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * The combination of user name and password that are used as credentials.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-credentialpair.html}
 **/
export interface QuickSightDataSourceCredentialPair {
  /**
   * A set of alternate data source parameters that you want to share for these credentials. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the `DataSourceParameters` structure that's in the request with the structures in the `AlternateDataSourceParameters` allow list. If the structures are an exact match, the request is allowed to use the new data source with the existing credentials. If the `AlternateDataSourceParameters` list is null, the `DataSourceParameters` originally used with these `Credentials` is automatically allowed.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceParameters](aws-properties-quicksight-datasource-datasourceparameters.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlternateDataSourceParameters?: List<QuickSightDataSourceDataSourceParameters>;
  /**
   * User name.
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
  Username: Value<string>;
  /**
   * Password.
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
  Password: Value<string>;
}

/**
 * The parameters for Presto.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-prestoparameters.html}
 **/
export interface QuickSightDataSourcePrestoParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
  /**
   * Catalog.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Catalog: Value<string>;
}

/**
 * Parameters for Amazon Athena.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-athenaparameters.html}
 **/
export interface QuickSightDataSourceAthenaParameters {
  /**
   * The workgroup that Amazon Athena uses.
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
  WorkGroup?: Value<string>;
}

/**
 * Amazon S3 manifest file location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-manifestfilelocation.html}
 **/
export interface QuickSightDataSourceManifestFileLocation {
  /**
   * Amazon S3 bucket.
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
  Bucket: Value<string>;
  /**
   * Amazon S3 key that identifies an object.
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
  Key: Value<string>;
}

/**
 * The parameters for Amazon Redshift. The `ClusterId` field can be blank if `Host` and `Port` are both set. The `Host` and `Port` fields can be blank if the `ClusterId` field is set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-redshiftparameters.html}
 **/
export interface QuickSightDataSourceRedshiftParameters {
  /**
   * Cluster ID. This field can be blank if the `Host` and `Port` are provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterId?: Value<string>;
  /**
   * Port. This field can be blank if the `ClusterId` is provided.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host. This field can be blank if `ClusterId` is provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host?: Value<string>;
}

/**
 * The parameters for PostgreSQL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-postgresqlparameters.html}
 **/
export interface QuickSightDataSourcePostgreSqlParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * The parameters for SQL Server.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sqlserverparameters.html}
 **/
export interface QuickSightDataSourceSqlServerParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourceparameters.html}
 **/
export interface QuickSightDataSourceDataSourceParameters {
  /**
   * The parameters for Amazon Aurora.
   *
   * _Required_: No
   *
   * _Type_: [AuroraPostgreSqlParameters](aws-properties-quicksight-datasource-aurorapostgresqlparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuroraPostgreSqlParameters?: QuickSightDataSourceAuroraPostgreSqlParameters;
  /**
   * The parameters for Teradata.
   *
   * _Required_: No
   *
   * _Type_: [TeradataParameters](aws-properties-quicksight-datasource-teradataparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TeradataParameters?: QuickSightDataSourceTeradataParameters;
  /**
   * The parameters for Amazon RDS.
   *
   * _Required_: No
   *
   * _Type_: [RdsParameters](aws-properties-quicksight-datasource-rdsparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RdsParameters?: QuickSightDataSourceRdsParameters;
  /**
   * The parameters for Amazon Athena.
   *
   * _Required_: No
   *
   * _Type_: [AthenaParameters](aws-properties-quicksight-datasource-athenaparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AthenaParameters?: QuickSightDataSourceAthenaParameters;
  /**
   * The parameters for Spark.
   *
   * _Required_: No
   *
   * _Type_: [SparkParameters](aws-properties-quicksight-datasource-sparkparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SparkParameters?: QuickSightDataSourceSparkParameters;
  /**
   * The parameters for MariaDB.
   *
   * _Required_: No
   *
   * _Type_: [MariaDbParameters](aws-properties-quicksight-datasource-mariadbparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MariaDbParameters?: QuickSightDataSourceMariaDbParameters;
  /**
   * Oracle parameters.
   *
   * _Required_: No
   *
   * _Type_: [OracleParameters](aws-properties-quicksight-datasource-oracleparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OracleParameters?: QuickSightDataSourceOracleParameters;
  /**
   * The parameters for Presto.
   *
   * _Required_: No
   *
   * _Type_: [PrestoParameters](aws-properties-quicksight-datasource-prestoparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrestoParameters?: QuickSightDataSourcePrestoParameters;
  /**
   * The parameters for Amazon Redshift.
   *
   * _Required_: No
   *
   * _Type_: [RedshiftParameters](aws-properties-quicksight-datasource-redshiftparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedshiftParameters?: QuickSightDataSourceRedshiftParameters;
  /**
   * The parameters for MySQL.
   *
   * _Required_: No
   *
   * _Type_: [MySqlParameters](aws-properties-quicksight-datasource-mysqlparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MySqlParameters?: QuickSightDataSourceMySqlParameters;
  /**
   * The parameters for SQL Server.
   *
   * _Required_: No
   *
   * _Type_: [SqlServerParameters](aws-properties-quicksight-datasource-sqlserverparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlServerParameters?: QuickSightDataSourceSqlServerParameters;
  /**
   * The parameters for Snowflake.
   *
   * _Required_: No
   *
   * _Type_: [SnowflakeParameters](aws-properties-quicksight-datasource-snowflakeparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnowflakeParameters?: QuickSightDataSourceSnowflakeParameters;
  /**
   * The parameters for OpenSearch.
   *
   * _Required_: No
   *
   * _Type_: [AmazonElasticsearchParameters](aws-properties-quicksight-datasource-amazonelasticsearchparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmazonElasticsearchParameters?: QuickSightDataSourceAmazonElasticsearchParameters;
  /**
   * The parameters for OpenSearch.
   *
   * _Required_: No
   *
   * _Type_: [AmazonOpenSearchParameters](aws-properties-quicksight-datasource-amazonopensearchparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmazonOpenSearchParameters?: QuickSightDataSourceAmazonOpenSearchParameters;
  /**
   * The parameters for PostgreSQL.
   *
   * _Required_: No
   *
   * _Type_: [PostgreSqlParameters](aws-properties-quicksight-datasource-postgresqlparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostgreSqlParameters?: QuickSightDataSourcePostgreSqlParameters;
  /**
   * The parameters for Amazon Aurora MySQL.
   *
   * _Required_: No
   *
   * _Type_: [AuroraParameters](aws-properties-quicksight-datasource-auroraparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuroraParameters?: QuickSightDataSourceAuroraParameters;
  /**
   * The parameters for S3.
   *
   * _Required_: No
   *
   * _Type_: [S3Parameters](aws-properties-quicksight-datasource-s3parameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Parameters?: QuickSightDataSourceS3Parameters;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [DatabricksParameters](aws-properties-quicksight-datasource-databricksparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabricksParameters?: QuickSightDataSourceDatabricksParameters;
}

/**
 * Data source credentials. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourcecredentials.html}
 **/
export interface QuickSightDataSourceDataSourceCredentials {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of a data source that has the credential pair that you want to use. When `CopySourceArn` is not null, the credential pair from the data source in the ARN is used as the credentials for the `DataSourceCredentials` structure.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:[-a-z0-9]*:quicksight:[-a-z0-9]*:[0-9]{12}:datasource/.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopySourceArn?: Value<string>;
  /**
   * Credential pair. For more information, see `[CredentialPair](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CredentialPair.html)`.
   *
   * _Required_: No
   *
   * _Type_: [CredentialPair](aws-properties-quicksight-datasource-credentialpair.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CredentialPair?: QuickSightDataSourceCredentialPair;
}

/**
 * The parameters for Snowflake.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-snowflakeparameters.html}
 **/
export interface QuickSightDataSourceSnowflakeParameters {
  /**
   * Warehouse.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Warehouse: Value<string>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sslproperties.html}
 **/
export interface QuickSightDataSourceSslProperties {
  /**
   * A Boolean option to control whether SSL should be disabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableSsl?: Value<boolean>;
}

/**
 * The parameters for S3.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-s3parameters.html}
 **/
export interface QuickSightDataSourceS3Parameters {
  /**
   * Location of the Amazon S3 manifest file. This is NULL if the manifest file was uploaded into Amazon QuickSight.
   *
   * _Required_: Yes
   *
   * _Type_: [ManifestFileLocation](aws-properties-quicksight-datasource-manifestfilelocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestFileLocation: QuickSightDataSourceManifestFileLocation;
}

/**
 * The parameters for OpenSearch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonopensearchparameters.html}
 **/
export interface QuickSightDataSourceAmazonOpenSearchParameters {
  /**
   * The OpenSearch domain.
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
  Domain: Value<string>;
}

/**
 * The `DatabricksParameters` property type specifies Property description not available. for an [AWS::QuickSight::DataSource](aws-resource-quicksight-datasource.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-databricksparameters.html}
 **/
export interface QuickSightDataSourceDatabricksParameters {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlEndpointPath: Value<string>;
}

/**
 * Permission for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-resourcepermission.html}
 **/
export interface QuickSightDataSourceResourcePermission {
  /**
   * The IAM action to grant or revoke permissions on.
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
 * The parameters for Spark.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-sparkparameters.html}
 **/
export interface QuickSightDataSourceSparkParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * Parameters for Amazon Aurora.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-auroraparameters.html}
 **/
export interface QuickSightDataSourceAuroraParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * The parameters for MariaDB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-mariadbparameters.html}
 **/
export interface QuickSightDataSourceMariaDbParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * The parameters for Teradata.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-teradataparameters.html}
 **/
export interface QuickSightDataSourceTeradataParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * The parameters for MySQL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-mysqlparameters.html}
 **/
export interface QuickSightDataSourceMySqlParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Database.
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
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * Oracle parameters.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-oracleparameters.html}
 **/
export interface QuickSightDataSourceOracleParameters {
  /**
   * Port.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * Database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Database: Value<string>;
  /**
   * Host.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
}

/**
 * The parameters for OpenSearch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-amazonelasticsearchparameters.html}
 **/
export interface QuickSightDataSourceAmazonElasticsearchParameters {
  /**
   * The OpenSearch domain.
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
  Domain: Value<string>;
}

/**
 * Error information for the data source creation or update.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-datasourceerrorinfo.html}
 **/
export interface QuickSightDataSourceDataSourceErrorInfo {
  /**
   * Error type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACCESS_DENIED | CONFLICT | COPY_SOURCE_NOT_FOUND | ENGINE_VERSION_NOT_SUPPORTED | GENERIC_SQL_FAILURE | TIMEOUT | UNKNOWN | UNKNOWN_HOST`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * Error message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Message?: Value<string>;
}

/**
 * VPC connection properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-vpcconnectionproperties.html}
 **/
export interface QuickSightDataSourceVpcConnectionProperties {
  /**
   * The Amazon Resource Name (ARN) for the VPC connection.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConnectionArn: Value<string>;
}

/**
 * The parameters for Amazon RDS.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-datasource-rdsparameters.html}
 **/
export interface QuickSightDataSourceRdsParameters {
  /**
   * Instance ID.
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
  InstanceId: Value<string>;
  /**
   * Database.
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
  Database: Value<string>;
}
export interface QuickSightDataSourceProperties {
  /**
   * The parameters that Amazon QuickSight uses to connect to your underlying source.
   *
   * _Required_: No
   *
   * _Type_: [DataSourceParameters](aws-properties-quicksight-datasource-datasourceparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceParameters?: QuickSightDataSourceDataSourceParameters;
  /**
   * The type of the data source. To return a list of all data sources, use `ListDataSources`.
   *
   * Use `AMAZON_ELASTICSEARCH` for Amazon OpenSearch Service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADOBE_ANALYTICS | AMAZON_ELASTICSEARCH | AMAZON_OPENSEARCH | ATHENA | AURORA | AURORA_POSTGRESQL | AWS_IOT_ANALYTICS | DATABRICKS | EXASOL | GITHUB | JIRA | MARIADB | MYSQL | ORACLE | POSTGRESQL | PRESTO | REDSHIFT | S3 | SALESFORCE | SERVICENOW | SNOWFLAKE | SPARK | SQLSERVER | TERADATA | TIMESTREAM | TWITTER`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source.
   *
   * _Required_: No
   *
   * _Type_: [VpcConnectionProperties](aws-properties-quicksight-datasource-vpcconnectionproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConnectionProperties?: QuickSightDataSourceVpcConnectionProperties;
  /**
   * A set of alternate data source parameters that you want to share for the credentials stored with this data source. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the `DataSourceParameters` structure that's in the request with the structures in the `AlternateDataSourceParameters` allow list. If the structures are an exact match, the request is allowed to use the credentials from this existing data source. If the `AlternateDataSourceParameters` list is null, the `Credentials` originally used with this `DataSourceParameters` are automatically allowed.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceParameters](aws-properties-quicksight-datasource-datasourceparameters.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlternateDataSourceParameters?: List<QuickSightDataSourceDataSourceParameters>;
  /**
   * Error information from the last update or the creation of the data source.
   *
   * _Required_: No
   *
   * _Type_: [DataSourceErrorInfo](aws-properties-quicksight-datasource-datasourceerrorinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorInfo?: QuickSightDataSourceDataSourceErrorInfo;
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
   * A list of resource permissions on the data source.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourcePermission](aws-properties-quicksight-datasource-resourcepermission.md)
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<QuickSightDataSourceResourcePermission>;
  /**
   * Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source.
   *
   * _Required_: No
   *
   * _Type_: [SslProperties](aws-properties-quicksight-datasource-sslproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslProperties?: QuickSightDataSourceSslProperties;
  /**
   * The credentials Amazon QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.
   *
   * _Required_: No
   *
   * _Type_: [DataSourceCredentials](aws-properties-quicksight-datasource-datasourcecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Credentials?: QuickSightDataSourceDataSourceCredentials;
  /**
   * An ID for the data source. This ID is unique per AWS Region for each AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataSourceId?: Value<string>;
  /**
   * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
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
  /**
   * A display name for the data source.
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
 * Creates a data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-datasource.html}
 */
export interface QuickSightDataSourceResource {
  Type: 'AWS::QuickSight::DataSource';
  Properties: QuickSightDataSourceProperties;
}
