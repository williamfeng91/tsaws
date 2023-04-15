# AWS::QuickSight::Template IntegerParameterDeclaration<a name="aws-properties-quicksight-template-integerparameterdeclaration"></a>

A parameter declaration for the `Integer` data type\.

## Syntax<a name="aws-properties-quicksight-template-integerparameterdeclaration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-integerparameterdeclaration-syntax.json"></a>

```
{
  "[DefaultValues](#cfn-quicksight-template-integerparameterdeclaration-defaultvalues)" : IntegerDefaultValues,
  "[MappedDataSetParameters](#cfn-quicksight-template-integerparameterdeclaration-mappeddatasetparameters)" : [ MappedDataSetParameter, ... ],
  "[Name](#cfn-quicksight-template-integerparameterdeclaration-name)" : String,
  "[ParameterValueType](#cfn-quicksight-template-integerparameterdeclaration-parametervaluetype)" : String,
  "[ValueWhenUnset](#cfn-quicksight-template-integerparameterdeclaration-valuewhenunset)" : IntegerValueWhenUnsetConfiguration
}
```

### YAML<a name="aws-properties-quicksight-template-integerparameterdeclaration-syntax.yaml"></a>

```
  [DefaultValues](#cfn-quicksight-template-integerparameterdeclaration-defaultvalues):
    IntegerDefaultValues
  [MappedDataSetParameters](#cfn-quicksight-template-integerparameterdeclaration-mappeddatasetparameters):
    - MappedDataSetParameter
  [Name](#cfn-quicksight-template-integerparameterdeclaration-name): String
  [ParameterValueType](#cfn-quicksight-template-integerparameterdeclaration-parametervaluetype): String
  [ValueWhenUnset](#cfn-quicksight-template-integerparameterdeclaration-valuewhenunset):
    IntegerValueWhenUnsetConfiguration
```

## Properties<a name="aws-properties-quicksight-template-integerparameterdeclaration-properties"></a>

`DefaultValues` <a name="cfn-quicksight-template-integerparameterdeclaration-defaultvalues"></a>
The default values of a parameter\. If the parameter is a single\-value parameter, a maximum of one default value can be provided\.  
_Required_: No  
_Type_: [IntegerDefaultValues](aws-properties-quicksight-template-integerdefaultvalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MappedDataSetParameters` <a name="cfn-quicksight-template-integerparameterdeclaration-mappeddatasetparameters"></a>
Property description not available\.  
_Required_: No  
_Type_: List of [MappedDataSetParameter](aws-properties-quicksight-template-mappeddatasetparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-template-integerparameterdeclaration-name"></a>
The name of the parameter that is being declared\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterValueType` <a name="cfn-quicksight-template-integerparameterdeclaration-parametervaluetype"></a>
The value type determines whether the parameter is a single\-value or multi\-value parameter\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `MULTI_VALUED | SINGLE_VALUED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueWhenUnset` <a name="cfn-quicksight-template-integerparameterdeclaration-valuewhenunset"></a>
A parameter declaration for the `Integer` data type\.  
_Required_: No  
_Type_: [IntegerValueWhenUnsetConfiguration](aws-properties-quicksight-template-integervaluewhenunsetconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
