# AWS::Config::OrganizationConformancePack ConformancePackInputParameter<a name="aws-properties-config-organizationconformancepack-conformancepackinputparameter"></a>

Input parameters in the form of key\-value pairs for the conformance pack, both of which you define\. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters\.

## Syntax<a name="aws-properties-config-organizationconformancepack-conformancepackinputparameter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-config-organizationconformancepack-conformancepackinputparameter-syntax.json"></a>

```
{
  "[ParameterName](#cfn-config-organizationconformancepack-conformancepackinputparameter-parametername)" : String,
  "[ParameterValue](#cfn-config-organizationconformancepack-conformancepackinputparameter-parametervalue)" : String
}
```

### YAML<a name="aws-properties-config-organizationconformancepack-conformancepackinputparameter-syntax.yaml"></a>

```
  [ParameterName](#cfn-config-organizationconformancepack-conformancepackinputparameter-parametername): String
  [ParameterValue](#cfn-config-organizationconformancepack-conformancepackinputparameter-parametervalue): String
```

## Properties<a name="aws-properties-config-organizationconformancepack-conformancepackinputparameter-properties"></a>

`ParameterName` <a name="cfn-config-organizationconformancepack-conformancepackinputparameter-parametername"></a>
One part of a key\-value pair\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterValue` <a name="cfn-config-organizationconformancepack-conformancepackinputparameter-parametervalue"></a>
One part of a key\-value pair\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
