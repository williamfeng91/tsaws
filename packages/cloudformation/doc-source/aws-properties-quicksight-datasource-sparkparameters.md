# AWS::QuickSight::DataSource SparkParameters<a name="aws-properties-quicksight-datasource-sparkparameters"></a>

The parameters for Spark\.

## Syntax<a name="aws-properties-quicksight-datasource-sparkparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-sparkparameters-syntax.json"></a>

```
{
  "[Host](#cfn-quicksight-datasource-sparkparameters-host)" : String,
  "[Port](#cfn-quicksight-datasource-sparkparameters-port)" : Double
}
```

### YAML<a name="aws-properties-quicksight-datasource-sparkparameters-syntax.yaml"></a>

```
  [Host](#cfn-quicksight-datasource-sparkparameters-host): String
  [Port](#cfn-quicksight-datasource-sparkparameters-port): Double
```

## Properties<a name="aws-properties-quicksight-datasource-sparkparameters-properties"></a>

`Host` <a name="cfn-quicksight-datasource-sparkparameters-host"></a>
Host\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-quicksight-datasource-sparkparameters-port"></a>
Port\.  
_Required_: Yes  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
