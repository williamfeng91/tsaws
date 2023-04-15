# AWS::Events::Rule RunCommandParameters<a name="aws-properties-events-rule-runcommandparameters"></a>

This parameter contains the criteria \(either InstanceIds or a tag\) used to specify which EC2 instances are to be sent the command\.

## Syntax<a name="aws-properties-events-rule-runcommandparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-rule-runcommandparameters-syntax.json"></a>

```
{
  "[RunCommandTargets](#cfn-events-rule-runcommandparameters-runcommandtargets)" : [ RunCommandTarget, ... ]
}
```

### YAML<a name="aws-properties-events-rule-runcommandparameters-syntax.yaml"></a>

```
  [RunCommandTargets](#cfn-events-rule-runcommandparameters-runcommandtargets):
    - RunCommandTarget
```

## Properties<a name="aws-properties-events-rule-runcommandparameters-properties"></a>

`RunCommandTargets` <a name="cfn-events-rule-runcommandparameters-runcommandtargets"></a>
Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag\.  
_Required_: Yes  
_Type_: List of [RunCommandTarget](aws-properties-events-rule-runcommandtarget.md)  
_Maximum_: `5`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
