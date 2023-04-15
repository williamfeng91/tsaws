# AWS::Events::Rule RedshiftDataParameters<a name="aws-properties-events-rule-redshiftdataparameters"></a>

These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events\.

## Syntax<a name="aws-properties-events-rule-redshiftdataparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-rule-redshiftdataparameters-syntax.json"></a>

```
{
  "[Database](#cfn-events-rule-redshiftdataparameters-database)" : String,
  "[DbUser](#cfn-events-rule-redshiftdataparameters-dbuser)" : String,
  "[SecretManagerArn](#cfn-events-rule-redshiftdataparameters-secretmanagerarn)" : String,
  "[Sql](#cfn-events-rule-redshiftdataparameters-sql)" : String,
  "[StatementName](#cfn-events-rule-redshiftdataparameters-statementname)" : String,
  "[WithEvent](#cfn-events-rule-redshiftdataparameters-withevent)" : Boolean
}
```

### YAML<a name="aws-properties-events-rule-redshiftdataparameters-syntax.yaml"></a>

```
  [Database](#cfn-events-rule-redshiftdataparameters-database): String
  [DbUser](#cfn-events-rule-redshiftdataparameters-dbuser): String
  [SecretManagerArn](#cfn-events-rule-redshiftdataparameters-secretmanagerarn): String
  [Sql](#cfn-events-rule-redshiftdataparameters-sql): String
  [StatementName](#cfn-events-rule-redshiftdataparameters-statementname): String
  [WithEvent](#cfn-events-rule-redshiftdataparameters-withevent): Boolean
```

## Properties<a name="aws-properties-events-rule-redshiftdataparameters-properties"></a>

`Database` <a name="cfn-events-rule-redshiftdataparameters-database"></a>
The name of the database\. Required when authenticating using temporary credentials\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DbUser` <a name="cfn-events-rule-redshiftdataparameters-dbuser"></a>
The database user name\. Required when authenticating using temporary credentials\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecretManagerArn` <a name="cfn-events-rule-redshiftdataparameters-secretmanagerarn"></a>
The name or ARN of the secret that enables access to the database\. Required when authenticating using AWS Secrets Manager\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1600`  
_Pattern_: `(^arn:aws([a-z]|\-)*:secretsmanager:[a-z0-9-.]+:.*)|(\$(\.[\w_-]+(\[(\d+|\*)\])*)*)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sql` <a name="cfn-events-rule-redshiftdataparameters-sql"></a>
The SQL statement text to run\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StatementName` <a name="cfn-events-rule-redshiftdataparameters-statementname"></a>
The name of the SQL statement\. You can name the SQL statement when you create it to identify the query\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `500`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WithEvent` <a name="cfn-events-rule-redshiftdataparameters-withevent"></a>
Indicates whether to send an event back to EventBridge after the SQL statement runs\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
