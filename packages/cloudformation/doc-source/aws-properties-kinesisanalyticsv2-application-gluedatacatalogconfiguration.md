# AWS::KinesisAnalyticsV2::Application GlueDataCatalogConfiguration<a name="aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration"></a>

The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration-syntax.json"></a>

```
{
  "[DatabaseARN](#cfn-kinesisanalyticsv2-application-gluedatacatalogconfiguration-databasearn)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration-syntax.yaml"></a>

```
  [DatabaseARN](#cfn-kinesisanalyticsv2-application-gluedatacatalogconfiguration-databasearn): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration-properties"></a>

`DatabaseARN` <a name="cfn-kinesisanalyticsv2-application-gluedatacatalogconfiguration-databasearn"></a>
The Amazon Resource Name \(ARN\) of the database\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
