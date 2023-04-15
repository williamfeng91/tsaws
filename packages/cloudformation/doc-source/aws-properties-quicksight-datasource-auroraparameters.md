# AWS::QuickSight::DataSource AuroraParameters<a name="aws-properties-quicksight-datasource-auroraparameters"></a>

Parameters for Amazon Aurora\.

## Syntax<a name="aws-properties-quicksight-datasource-auroraparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-auroraparameters-syntax.json"></a>

```
{
  "[Database](#cfn-quicksight-datasource-auroraparameters-database)" : String,
  "[Host](#cfn-quicksight-datasource-auroraparameters-host)" : String,
  "[Port](#cfn-quicksight-datasource-auroraparameters-port)" : Double
}
```

### YAML<a name="aws-properties-quicksight-datasource-auroraparameters-syntax.yaml"></a>

```
  [Database](#cfn-quicksight-datasource-auroraparameters-database): String
  [Host](#cfn-quicksight-datasource-auroraparameters-host): String
  [Port](#cfn-quicksight-datasource-auroraparameters-port): Double
```

## Properties<a name="aws-properties-quicksight-datasource-auroraparameters-properties"></a>

`Database` <a name="cfn-quicksight-datasource-auroraparameters-database"></a>
Database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Host` <a name="cfn-quicksight-datasource-auroraparameters-host"></a>
Host\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-quicksight-datasource-auroraparameters-port"></a>
Port\.  
_Required_: Yes  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
