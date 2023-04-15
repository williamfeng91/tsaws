# AWS::EMRServerless::Application MaximumAllowedResources<a name="aws-properties-emrserverless-application-maximumallowedresources"></a>

The maximum allowed cumulative resources for an application\. No new resources will be created once the limit is hit\.

## Syntax<a name="aws-properties-emrserverless-application-maximumallowedresources-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-emrserverless-application-maximumallowedresources-syntax.json"></a>

```
{
  "[Cpu](#cfn-emrserverless-application-maximumallowedresources-cpu)" : String,
  "[Disk](#cfn-emrserverless-application-maximumallowedresources-disk)" : String,
  "[Memory](#cfn-emrserverless-application-maximumallowedresources-memory)" : String
}
```

### YAML<a name="aws-properties-emrserverless-application-maximumallowedresources-syntax.yaml"></a>

```
  [Cpu](#cfn-emrserverless-application-maximumallowedresources-cpu): String
  [Disk](#cfn-emrserverless-application-maximumallowedresources-disk): String
  [Memory](#cfn-emrserverless-application-maximumallowedresources-memory): String
```

## Properties<a name="aws-properties-emrserverless-application-maximumallowedresources-properties"></a>

`Cpu` <a name="cfn-emrserverless-application-maximumallowedresources-cpu"></a>
The maximum allowed CPU for an application\.  
_Minimum_: 1  
_Maximum_: 15  
_Pattern_: `^[1-9][0-9]*(\\s)?(vCPU|vcpu|VCPU)?$`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Disk` <a name="cfn-emrserverless-application-maximumallowedresources-disk"></a>
The maximum allowed disk for an application\.  
_Minimum_: 1  
_Maximum_: 15  
_Pattern_: `^[1-9][0-9]*(\\s)?(GB|gb|gB|Gb)$"`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Memory` <a name="cfn-emrserverless-application-maximumallowedresources-memory"></a>
The maximum allowed resources for an application\.  
_Minimum_: 1  
_Maximum_: 15  
_Pattern_: `^[1-9][0-9]*(\\s)?(GB|gb|gB|Gb)?$`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
