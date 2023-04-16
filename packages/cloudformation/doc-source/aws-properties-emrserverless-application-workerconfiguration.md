# AWS::EMRServerless::Application WorkerConfiguration<a name="aws-properties-emrserverless-application-workerconfiguration"></a>

The resource configuration of the initial capacity configuration\.

## Syntax<a name="aws-properties-emrserverless-application-workerconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-emrserverless-application-workerconfiguration-syntax.json"></a>

```
{
  "[Cpu](#cfn-emrserverless-application-workerconfiguration-cpu)" : String,
  "[Disk](#cfn-emrserverless-application-workerconfiguration-disk)" : String,
  "[Memory](#cfn-emrserverless-application-workerconfiguration-memory)" : String
}
```

### YAML<a name="aws-properties-emrserverless-application-workerconfiguration-syntax.yaml"></a>

```
  [Cpu](#cfn-emrserverless-application-workerconfiguration-cpu): String
  [Disk](#cfn-emrserverless-application-workerconfiguration-disk): String
  [Memory](#cfn-emrserverless-application-workerconfiguration-memory): String
```

## Properties<a name="aws-properties-emrserverless-application-workerconfiguration-properties"></a>

`Cpu` <a name="cfn-emrserverless-application-workerconfiguration-cpu"></a>
_Minimum_: 1  
_Maximum_: 15  
_Pattern_: `^[1-9][0-9]*(\\s)?(vCPU|vcpu|VCPU)?$`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Disk` <a name="cfn-emrserverless-application-workerconfiguration-disk"></a>
_Minimum_: 1  
_Maximum_: 15  
_Pattern_: `^[1-9][0-9]*(\\s)?(GB|gb|gB|Gb)$"`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Memory` <a name="cfn-emrserverless-application-workerconfiguration-memory"></a>
_Minimum_: 1  
_Maximum_: 15  
_Pattern_: `^[1-9][0-9]*(\\s)?(GB|gb|gB|Gb)?$`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
