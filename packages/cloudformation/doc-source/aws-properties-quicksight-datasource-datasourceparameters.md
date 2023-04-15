# AWS::QuickSight::DataSource DataSourceParameters<a name="aws-properties-quicksight-datasource-datasourceparameters"></a>

The parameters that Amazon QuickSight uses to connect to your underlying data source\. This is a variant type structure\. For this structure to be valid, only one of the attributes can be non\-null\.

## Syntax<a name="aws-properties-quicksight-datasource-datasourceparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-datasourceparameters-syntax.json"></a>

```
{
  "[AmazonElasticsearchParameters](#cfn-quicksight-datasource-datasourceparameters-amazonelasticsearchparameters)" : AmazonElasticsearchParameters,
  "[AmazonOpenSearchParameters](#cfn-quicksight-datasource-datasourceparameters-amazonopensearchparameters)" : AmazonOpenSearchParameters,
  "[AthenaParameters](#cfn-quicksight-datasource-datasourceparameters-athenaparameters)" : AthenaParameters,
  "[AuroraParameters](#cfn-quicksight-datasource-datasourceparameters-auroraparameters)" : AuroraParameters,
  "[AuroraPostgreSqlParameters](#cfn-quicksight-datasource-datasourceparameters-aurorapostgresqlparameters)" : AuroraPostgreSqlParameters,
  "[DatabricksParameters](#cfn-quicksight-datasource-datasourceparameters-databricksparameters)" : DatabricksParameters,
  "[MariaDbParameters](#cfn-quicksight-datasource-datasourceparameters-mariadbparameters)" : MariaDbParameters,
  "[MySqlParameters](#cfn-quicksight-datasource-datasourceparameters-mysqlparameters)" : MySqlParameters,
  "[OracleParameters](#cfn-quicksight-datasource-datasourceparameters-oracleparameters)" : OracleParameters,
  "[PostgreSqlParameters](#cfn-quicksight-datasource-datasourceparameters-postgresqlparameters)" : PostgreSqlParameters,
  "[PrestoParameters](#cfn-quicksight-datasource-datasourceparameters-prestoparameters)" : PrestoParameters,
  "[RdsParameters](#cfn-quicksight-datasource-datasourceparameters-rdsparameters)" : RdsParameters,
  "[RedshiftParameters](#cfn-quicksight-datasource-datasourceparameters-redshiftparameters)" : RedshiftParameters,
  "[S3Parameters](#cfn-quicksight-datasource-datasourceparameters-s3parameters)" : S3Parameters,
  "[SnowflakeParameters](#cfn-quicksight-datasource-datasourceparameters-snowflakeparameters)" : SnowflakeParameters,
  "[SparkParameters](#cfn-quicksight-datasource-datasourceparameters-sparkparameters)" : SparkParameters,
  "[SqlServerParameters](#cfn-quicksight-datasource-datasourceparameters-sqlserverparameters)" : SqlServerParameters,
  "[TeradataParameters](#cfn-quicksight-datasource-datasourceparameters-teradataparameters)" : TeradataParameters
}
```

### YAML<a name="aws-properties-quicksight-datasource-datasourceparameters-syntax.yaml"></a>

```
  [AmazonElasticsearchParameters](#cfn-quicksight-datasource-datasourceparameters-amazonelasticsearchparameters):
    AmazonElasticsearchParameters
  [AmazonOpenSearchParameters](#cfn-quicksight-datasource-datasourceparameters-amazonopensearchparameters):
    AmazonOpenSearchParameters
  [AthenaParameters](#cfn-quicksight-datasource-datasourceparameters-athenaparameters):
    AthenaParameters
  [AuroraParameters](#cfn-quicksight-datasource-datasourceparameters-auroraparameters):
    AuroraParameters
  [AuroraPostgreSqlParameters](#cfn-quicksight-datasource-datasourceparameters-aurorapostgresqlparameters):
    AuroraPostgreSqlParameters
  [DatabricksParameters](#cfn-quicksight-datasource-datasourceparameters-databricksparameters):
    DatabricksParameters
  [MariaDbParameters](#cfn-quicksight-datasource-datasourceparameters-mariadbparameters):
    MariaDbParameters
  [MySqlParameters](#cfn-quicksight-datasource-datasourceparameters-mysqlparameters):
    MySqlParameters
  [OracleParameters](#cfn-quicksight-datasource-datasourceparameters-oracleparameters):
    OracleParameters
  [PostgreSqlParameters](#cfn-quicksight-datasource-datasourceparameters-postgresqlparameters):
    PostgreSqlParameters
  [PrestoParameters](#cfn-quicksight-datasource-datasourceparameters-prestoparameters):
    PrestoParameters
  [RdsParameters](#cfn-quicksight-datasource-datasourceparameters-rdsparameters):
    RdsParameters
  [RedshiftParameters](#cfn-quicksight-datasource-datasourceparameters-redshiftparameters):
    RedshiftParameters
  [S3Parameters](#cfn-quicksight-datasource-datasourceparameters-s3parameters):
    S3Parameters
  [SnowflakeParameters](#cfn-quicksight-datasource-datasourceparameters-snowflakeparameters):
    SnowflakeParameters
  [SparkParameters](#cfn-quicksight-datasource-datasourceparameters-sparkparameters):
    SparkParameters
  [SqlServerParameters](#cfn-quicksight-datasource-datasourceparameters-sqlserverparameters):
    SqlServerParameters
  [TeradataParameters](#cfn-quicksight-datasource-datasourceparameters-teradataparameters):
    TeradataParameters
```

## Properties<a name="aws-properties-quicksight-datasource-datasourceparameters-properties"></a>

`AmazonElasticsearchParameters` <a name="cfn-quicksight-datasource-datasourceparameters-amazonelasticsearchparameters"></a>
The parameters for OpenSearch\.  
_Required_: No  
_Type_: [AmazonElasticsearchParameters](aws-properties-quicksight-datasource-amazonelasticsearchparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AmazonOpenSearchParameters` <a name="cfn-quicksight-datasource-datasourceparameters-amazonopensearchparameters"></a>
The parameters for OpenSearch\.  
_Required_: No  
_Type_: [AmazonOpenSearchParameters](aws-properties-quicksight-datasource-amazonopensearchparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AthenaParameters` <a name="cfn-quicksight-datasource-datasourceparameters-athenaparameters"></a>
The parameters for Amazon Athena\.  
_Required_: No  
_Type_: [AthenaParameters](aws-properties-quicksight-datasource-athenaparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AuroraParameters` <a name="cfn-quicksight-datasource-datasourceparameters-auroraparameters"></a>
The parameters for Amazon Aurora MySQL\.  
_Required_: No  
_Type_: [AuroraParameters](aws-properties-quicksight-datasource-auroraparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AuroraPostgreSqlParameters` <a name="cfn-quicksight-datasource-datasourceparameters-aurorapostgresqlparameters"></a>
The parameters for Amazon Aurora\.  
_Required_: No  
_Type_: [AuroraPostgreSqlParameters](aws-properties-quicksight-datasource-aurorapostgresqlparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabricksParameters` <a name="cfn-quicksight-datasource-datasourceparameters-databricksparameters"></a>
Property description not available\.  
_Required_: No  
_Type_: [DatabricksParameters](aws-properties-quicksight-datasource-databricksparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MariaDbParameters` <a name="cfn-quicksight-datasource-datasourceparameters-mariadbparameters"></a>
The parameters for MariaDB\.  
_Required_: No  
_Type_: [MariaDbParameters](aws-properties-quicksight-datasource-mariadbparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MySqlParameters` <a name="cfn-quicksight-datasource-datasourceparameters-mysqlparameters"></a>
The parameters for MySQL\.  
_Required_: No  
_Type_: [MySqlParameters](aws-properties-quicksight-datasource-mysqlparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OracleParameters` <a name="cfn-quicksight-datasource-datasourceparameters-oracleparameters"></a>
Oracle parameters\.  
_Required_: No  
_Type_: [OracleParameters](aws-properties-quicksight-datasource-oracleparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PostgreSqlParameters` <a name="cfn-quicksight-datasource-datasourceparameters-postgresqlparameters"></a>
The parameters for PostgreSQL\.  
_Required_: No  
_Type_: [PostgreSqlParameters](aws-properties-quicksight-datasource-postgresqlparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrestoParameters` <a name="cfn-quicksight-datasource-datasourceparameters-prestoparameters"></a>
The parameters for Presto\.  
_Required_: No  
_Type_: [PrestoParameters](aws-properties-quicksight-datasource-prestoparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RdsParameters` <a name="cfn-quicksight-datasource-datasourceparameters-rdsparameters"></a>
The parameters for Amazon RDS\.  
_Required_: No  
_Type_: [RdsParameters](aws-properties-quicksight-datasource-rdsparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RedshiftParameters` <a name="cfn-quicksight-datasource-datasourceparameters-redshiftparameters"></a>
The parameters for Amazon Redshift\.  
_Required_: No  
_Type_: [RedshiftParameters](aws-properties-quicksight-datasource-redshiftparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3Parameters` <a name="cfn-quicksight-datasource-datasourceparameters-s3parameters"></a>
The parameters for S3\.  
_Required_: No  
_Type_: [S3Parameters](aws-properties-quicksight-datasource-s3parameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SnowflakeParameters` <a name="cfn-quicksight-datasource-datasourceparameters-snowflakeparameters"></a>
The parameters for Snowflake\.  
_Required_: No  
_Type_: [SnowflakeParameters](aws-properties-quicksight-datasource-snowflakeparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SparkParameters` <a name="cfn-quicksight-datasource-datasourceparameters-sparkparameters"></a>
The parameters for Spark\.  
_Required_: No  
_Type_: [SparkParameters](aws-properties-quicksight-datasource-sparkparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SqlServerParameters` <a name="cfn-quicksight-datasource-datasourceparameters-sqlserverparameters"></a>
The parameters for SQL Server\.  
_Required_: No  
_Type_: [SqlServerParameters](aws-properties-quicksight-datasource-sqlserverparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TeradataParameters` <a name="cfn-quicksight-datasource-datasourceparameters-teradataparameters"></a>
The parameters for Teradata\.  
_Required_: No  
_Type_: [TeradataParameters](aws-properties-quicksight-datasource-teradataparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
