# AWS::QuickSight::DataSource MySqlParameters<a name="aws-properties-quicksight-datasource-mysqlparameters"></a>

The parameters for MySQL\.

## Syntax<a name="aws-properties-quicksight-datasource-mysqlparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-mysqlparameters-syntax.json"></a>

```
{
  "[Database](#cfn-quicksight-datasource-mysqlparameters-database)" : String,
  "[Host](#cfn-quicksight-datasource-mysqlparameters-host)" : String,
  "[Port](#cfn-quicksight-datasource-mysqlparameters-port)" : Double
}
```

### YAML<a name="aws-properties-quicksight-datasource-mysqlparameters-syntax.yaml"></a>

```
  [Database](#cfn-quicksight-datasource-mysqlparameters-database): String
  [Host](#cfn-quicksight-datasource-mysqlparameters-host): String
  [Port](#cfn-quicksight-datasource-mysqlparameters-port): Double
```

## Properties<a name="aws-properties-quicksight-datasource-mysqlparameters-properties"></a>

`Database` <a name="cfn-quicksight-datasource-mysqlparameters-database"></a>
Database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Host` <a name="cfn-quicksight-datasource-mysqlparameters-host"></a>
Host\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-quicksight-datasource-mysqlparameters-port"></a>
Port\.  
_Required_: Yes  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
