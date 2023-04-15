# AWS::ImageBuilder::DistributionConfiguration LaunchTemplateConfiguration<a name="aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration"></a>

Identifies an Amazon EC2 launch template to use for a specific account\.

## Syntax<a name="aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration-syntax.json"></a>

```
{
  "[AccountId](#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-accountid)" : String,
  "[LaunchTemplateId](#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-launchtemplateid)" : String,
  "[SetDefaultVersion](#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-setdefaultversion)" : Boolean
}
```

### YAML<a name="aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration-syntax.yaml"></a>

```
  [AccountId](#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-accountid): String
  [LaunchTemplateId](#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-launchtemplateid): String
  [SetDefaultVersion](#cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-setdefaultversion): Boolean
```

## Properties<a name="aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration-properties"></a>

`AccountId` <a name="cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-accountid"></a>
The account ID that this configuration applies to\.  
_Required_: No  
_Type_: String  
_Pattern_: `^[0-9]{12}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LaunchTemplateId` <a name="cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-launchtemplateid"></a>
Identifies the Amazon EC2 launch template to use\.  
_Required_: No  
_Type_: String  
_Pattern_: `^lt-[a-z0-9-_]{17}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SetDefaultVersion` <a name="cfn-imagebuilder-distributionconfiguration-launchtemplateconfiguration-setdefaultversion"></a>
Set the specified Amazon EC2 launch template as the default launch template for the specified account\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
