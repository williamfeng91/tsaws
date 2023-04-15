# AWS::AppSync::DataSource RdsHttpEndpointConfig<a name="aws-properties-appsync-datasource-rdshttpendpointconfig"></a>

Use the `RdsHttpEndpointConfig` property type to specify the `RdsHttpEndpoint` for an AWS AppSync relational database\.

`RdsHttpEndpointConfig` is a property of the [AWS AppSync DataSource RelationalDatabaseConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html) resource\.

## Syntax<a name="aws-properties-appsync-datasource-rdshttpendpointconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appsync-datasource-rdshttpendpointconfig-syntax.json"></a>

```
{
  "[AwsRegion](#cfn-appsync-datasource-rdshttpendpointconfig-awsregion)" : String,
  "[AwsSecretStoreArn](#cfn-appsync-datasource-rdshttpendpointconfig-awssecretstorearn)" : String,
  "[DatabaseName](#cfn-appsync-datasource-rdshttpendpointconfig-databasename)" : String,
  "[DbClusterIdentifier](#cfn-appsync-datasource-rdshttpendpointconfig-dbclusteridentifier)" : String,
  "[Schema](#cfn-appsync-datasource-rdshttpendpointconfig-schema)" : String
}
```

### YAML<a name="aws-properties-appsync-datasource-rdshttpendpointconfig-syntax.yaml"></a>

```
  [AwsRegion](#cfn-appsync-datasource-rdshttpendpointconfig-awsregion): String
  [AwsSecretStoreArn](#cfn-appsync-datasource-rdshttpendpointconfig-awssecretstorearn): String
  [DatabaseName](#cfn-appsync-datasource-rdshttpendpointconfig-databasename): String
  [DbClusterIdentifier](#cfn-appsync-datasource-rdshttpendpointconfig-dbclusteridentifier): String
  [Schema](#cfn-appsync-datasource-rdshttpendpointconfig-schema): String
```

## Properties<a name="aws-properties-appsync-datasource-rdshttpendpointconfig-properties"></a>

`AwsRegion` <a name="cfn-appsync-datasource-rdshttpendpointconfig-awsregion"></a>
AWS Region for RDS HTTP endpoint\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AwsSecretStoreArn` <a name="cfn-appsync-datasource-rdshttpendpointconfig-awssecretstorearn"></a>
The ARN for database credentials stored in AWS Secrets Manager\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabaseName` <a name="cfn-appsync-datasource-rdshttpendpointconfig-databasename"></a>
Logical database name\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DbClusterIdentifier` <a name="cfn-appsync-datasource-rdshttpendpointconfig-dbclusteridentifier"></a>
Amazon RDS cluster Amazon Resource Name \(ARN\)\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Schema` <a name="cfn-appsync-datasource-rdshttpendpointconfig-schema"></a>
Logical schema name\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
