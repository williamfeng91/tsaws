# AWS::SSMContacts::Plan Stage<a name="aws-properties-ssmcontacts-plan-stage"></a>

A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods\.

## Syntax<a name="aws-properties-ssmcontacts-plan-stage-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssmcontacts-plan-stage-syntax.json"></a>

```
{
  "[DurationInMinutes](#cfn-ssmcontacts-plan-stage-durationinminutes)" : Integer,
  "[Targets](#cfn-ssmcontacts-plan-stage-targets)" : [ Targets, ... ]
}
```

### YAML<a name="aws-properties-ssmcontacts-plan-stage-syntax.yaml"></a>

```
  [DurationInMinutes](#cfn-ssmcontacts-plan-stage-durationinminutes): Integer
  [Targets](#cfn-ssmcontacts-plan-stage-targets):
    - Targets
```

## Properties<a name="aws-properties-ssmcontacts-plan-stage-properties"></a>

`DurationInMinutes` <a name="cfn-ssmcontacts-plan-stage-durationinminutes"></a>
The time to wait until beginning the next stage\. The duration can only be set to 0 if a target is specified\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Targets` <a name="cfn-ssmcontacts-plan-stage-targets"></a>
The contacts or contact methods that the escalation plan or engagement plan is engaging\.  
_Required_: No  
_Type_: [List](aws-properties-ssmcontacts-plan-targets.md) of [Targets](aws-properties-ssmcontacts-plan-targets.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)