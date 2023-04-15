# AWS::Config::ConformancePack ConformancePackInputParameter<a name="aws-properties-config-conformancepack-conformancepackinputparameter"></a>

Input parameters in the form of key\-value pairs for the conformance pack, both of which you define\. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters\.

## Syntax<a name="aws-properties-config-conformancepack-conformancepackinputparameter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-config-conformancepack-conformancepackinputparameter-syntax.json"></a>

```
{
  "[ParameterName](#cfn-config-conformancepack-conformancepackinputparameter-parametername)" : String,
  "[ParameterValue](#cfn-config-conformancepack-conformancepackinputparameter-parametervalue)" : String
}
```

### YAML<a name="aws-properties-config-conformancepack-conformancepackinputparameter-syntax.yaml"></a>

```
  [ParameterName](#cfn-config-conformancepack-conformancepackinputparameter-parametername): String
  [ParameterValue](#cfn-config-conformancepack-conformancepackinputparameter-parametervalue): String
```

## Properties<a name="aws-properties-config-conformancepack-conformancepackinputparameter-properties"></a>

`ParameterName` <a name="cfn-config-conformancepack-conformancepackinputparameter-parametername"></a>
One part of a key\-value pair\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterValue` <a name="cfn-config-conformancepack-conformancepackinputparameter-parametervalue"></a>
Another part of the key\-value pair\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
