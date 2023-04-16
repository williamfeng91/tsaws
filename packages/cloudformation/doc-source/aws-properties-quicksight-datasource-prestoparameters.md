# AWS::QuickSight::DataSource PrestoParameters<a name="aws-properties-quicksight-datasource-prestoparameters"></a>

The parameters for Presto\.

## Syntax<a name="aws-properties-quicksight-datasource-prestoparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-prestoparameters-syntax.json"></a>

```
{
  "[Catalog](#cfn-quicksight-datasource-prestoparameters-catalog)" : String,
  "[Host](#cfn-quicksight-datasource-prestoparameters-host)" : String,
  "[Port](#cfn-quicksight-datasource-prestoparameters-port)" : Double
}
```

### YAML<a name="aws-properties-quicksight-datasource-prestoparameters-syntax.yaml"></a>

```
  [Catalog](#cfn-quicksight-datasource-prestoparameters-catalog): String
  [Host](#cfn-quicksight-datasource-prestoparameters-host): String
  [Port](#cfn-quicksight-datasource-prestoparameters-port): Double
```

## Properties<a name="aws-properties-quicksight-datasource-prestoparameters-properties"></a>

`Catalog` <a name="cfn-quicksight-datasource-prestoparameters-catalog"></a>
Catalog\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Host` <a name="cfn-quicksight-datasource-prestoparameters-host"></a>
Host\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-quicksight-datasource-prestoparameters-port"></a>
Port\.  
_Required_: Yes  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
