# AWS::QuickSight::DataSource SqlServerParameters<a name="aws-properties-quicksight-datasource-sqlserverparameters"></a>

The parameters for SQL Server\.

## Syntax<a name="aws-properties-quicksight-datasource-sqlserverparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-sqlserverparameters-syntax.json"></a>

```
{
  "[Database](#cfn-quicksight-datasource-sqlserverparameters-database)" : String,
  "[Host](#cfn-quicksight-datasource-sqlserverparameters-host)" : String,
  "[Port](#cfn-quicksight-datasource-sqlserverparameters-port)" : Double
}
```

### YAML<a name="aws-properties-quicksight-datasource-sqlserverparameters-syntax.yaml"></a>

```
  [Database](#cfn-quicksight-datasource-sqlserverparameters-database): String
  [Host](#cfn-quicksight-datasource-sqlserverparameters-host): String
  [Port](#cfn-quicksight-datasource-sqlserverparameters-port): Double
```

## Properties<a name="aws-properties-quicksight-datasource-sqlserverparameters-properties"></a>

`Database` <a name="cfn-quicksight-datasource-sqlserverparameters-database"></a>
Database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Host` <a name="cfn-quicksight-datasource-sqlserverparameters-host"></a>
Host\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-quicksight-datasource-sqlserverparameters-port"></a>
Port\.  
_Required_: Yes  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
