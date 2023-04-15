# AWS::Config::RemediationConfiguration RemediationParameterValue<a name="aws-properties-config-remediationconfiguration-remediationparametervalue"></a>

The value is either a dynamic \(resource\) value or a static value\. You must select either a dynamic value or a static value\.

## Syntax<a name="aws-properties-config-remediationconfiguration-remediationparametervalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-config-remediationconfiguration-remediationparametervalue-syntax.json"></a>

```
{
  "[ResourceValue](#cfn-config-remediationconfiguration-remediationparametervalue-resourcevalue)" : ResourceValue,
  "[StaticValue](#cfn-config-remediationconfiguration-remediationparametervalue-staticvalue)" : StaticValue
}
```

### YAML<a name="aws-properties-config-remediationconfiguration-remediationparametervalue-syntax.yaml"></a>

```
  [ResourceValue](#cfn-config-remediationconfiguration-remediationparametervalue-resourcevalue):
    ResourceValue
  [StaticValue](#cfn-config-remediationconfiguration-remediationparametervalue-staticvalue):
    StaticValue
```

## Properties<a name="aws-properties-config-remediationconfiguration-remediationparametervalue-properties"></a>

`ResourceValue` <a name="cfn-config-remediationconfiguration-remediationparametervalue-resourcevalue"></a>
The value is dynamic and changes at run\-time\.  
_Required_: No  
_Type_: [ResourceValue](aws-properties-config-remediationconfiguration-resourcevalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StaticValue` <a name="cfn-config-remediationconfiguration-remediationparametervalue-staticvalue"></a>
The value is static and does not change at run\-time\.  
_Required_: No  
_Type_: [StaticValue](aws-properties-config-remediationconfiguration-staticvalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
