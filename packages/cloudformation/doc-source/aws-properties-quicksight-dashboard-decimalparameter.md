# AWS::QuickSight::Dashboard DecimalParameter<a name="aws-properties-quicksight-dashboard-decimalparameter"></a>

A decimal parameter\.

## Syntax<a name="aws-properties-quicksight-dashboard-decimalparameter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-decimalparameter-syntax.json"></a>

```
{
  "[Name](#cfn-quicksight-dashboard-decimalparameter-name)" : String,
  "[Values](#cfn-quicksight-dashboard-decimalparameter-values)" : [ Double, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-decimalparameter-syntax.yaml"></a>

```
  [Name](#cfn-quicksight-dashboard-decimalparameter-name): String
  [Values](#cfn-quicksight-dashboard-decimalparameter-values):
    - Double
```

## Properties<a name="aws-properties-quicksight-dashboard-decimalparameter-properties"></a>

`Name` <a name="cfn-quicksight-dashboard-decimalparameter-name"></a>
A display name for the decimal parameter\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `.*\S.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-dashboard-decimalparameter-values"></a>
The values for the decimal parameter\.  
_Required_: Yes  
_Type_: List of Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
