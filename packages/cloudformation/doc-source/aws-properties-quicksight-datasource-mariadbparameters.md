# AWS::QuickSight::DataSource MariaDbParameters<a name="aws-properties-quicksight-datasource-mariadbparameters"></a>

The parameters for MariaDB\.

## Syntax<a name="aws-properties-quicksight-datasource-mariadbparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-mariadbparameters-syntax.json"></a>

```
{
  "[Database](#cfn-quicksight-datasource-mariadbparameters-database)" : String,
  "[Host](#cfn-quicksight-datasource-mariadbparameters-host)" : String,
  "[Port](#cfn-quicksight-datasource-mariadbparameters-port)" : Double
}
```

### YAML<a name="aws-properties-quicksight-datasource-mariadbparameters-syntax.yaml"></a>

```
  [Database](#cfn-quicksight-datasource-mariadbparameters-database): String
  [Host](#cfn-quicksight-datasource-mariadbparameters-host): String
  [Port](#cfn-quicksight-datasource-mariadbparameters-port): Double
```

## Properties<a name="aws-properties-quicksight-datasource-mariadbparameters-properties"></a>

`Database` <a name="cfn-quicksight-datasource-mariadbparameters-database"></a>
Database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Host` <a name="cfn-quicksight-datasource-mariadbparameters-host"></a>
Host\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-quicksight-datasource-mariadbparameters-port"></a>
Port\.  
_Required_: Yes  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
