# AWS::QuickSight::Dashboard DecimalParameterDeclaration<a name="aws-properties-quicksight-dashboard-decimalparameterdeclaration"></a>

A parameter declaration for the `Decimal` data type\.

## Syntax<a name="aws-properties-quicksight-dashboard-decimalparameterdeclaration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-decimalparameterdeclaration-syntax.json"></a>

```
{
  "[DefaultValues](#cfn-quicksight-dashboard-decimalparameterdeclaration-defaultvalues)" : DecimalDefaultValues,
  "[MappedDataSetParameters](#cfn-quicksight-dashboard-decimalparameterdeclaration-mappeddatasetparameters)" : [ MappedDataSetParameter, ... ],
  "[Name](#cfn-quicksight-dashboard-decimalparameterdeclaration-name)" : String,
  "[ParameterValueType](#cfn-quicksight-dashboard-decimalparameterdeclaration-parametervaluetype)" : String,
  "[ValueWhenUnset](#cfn-quicksight-dashboard-decimalparameterdeclaration-valuewhenunset)" : DecimalValueWhenUnsetConfiguration
}
```

### YAML<a name="aws-properties-quicksight-dashboard-decimalparameterdeclaration-syntax.yaml"></a>

```
  [DefaultValues](#cfn-quicksight-dashboard-decimalparameterdeclaration-defaultvalues):
    DecimalDefaultValues
  [MappedDataSetParameters](#cfn-quicksight-dashboard-decimalparameterdeclaration-mappeddatasetparameters):
    - MappedDataSetParameter
  [Name](#cfn-quicksight-dashboard-decimalparameterdeclaration-name): String
  [ParameterValueType](#cfn-quicksight-dashboard-decimalparameterdeclaration-parametervaluetype): String
  [ValueWhenUnset](#cfn-quicksight-dashboard-decimalparameterdeclaration-valuewhenunset):
    DecimalValueWhenUnsetConfiguration
```

## Properties<a name="aws-properties-quicksight-dashboard-decimalparameterdeclaration-properties"></a>

`DefaultValues` <a name="cfn-quicksight-dashboard-decimalparameterdeclaration-defaultvalues"></a>
The default values of a parameter\. If the parameter is a single\-value parameter, a maximum of one default value can be provided\.  
_Required_: No  
_Type_: [DecimalDefaultValues](aws-properties-quicksight-dashboard-decimaldefaultvalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MappedDataSetParameters` <a name="cfn-quicksight-dashboard-decimalparameterdeclaration-mappeddatasetparameters"></a>
Property description not available\.  
_Required_: No  
_Type_: List of [MappedDataSetParameter](aws-properties-quicksight-dashboard-mappeddatasetparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dashboard-decimalparameterdeclaration-name"></a>
The name of the parameter that is being declared\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterValueType` <a name="cfn-quicksight-dashboard-decimalparameterdeclaration-parametervaluetype"></a>
The value type determines whether the parameter is a single\-value or multi\-value parameter\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `MULTI_VALUED | SINGLE_VALUED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueWhenUnset` <a name="cfn-quicksight-dashboard-decimalparameterdeclaration-valuewhenunset"></a>
The configuration that defines the default value of a `Decimal` parameter when a value has not been set\.  
_Required_: No  
_Type_: [DecimalValueWhenUnsetConfiguration](aws-properties-quicksight-dashboard-decimalvaluewhenunsetconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
