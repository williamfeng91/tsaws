# AWS::DLM::LifecyclePolicy Action<a name="aws-properties-dlm-lifecyclepolicy-action"></a>

**\[Event\-based policies only\]** Specifies an action for an event\-based policy\.

## Syntax<a name="aws-properties-dlm-lifecyclepolicy-action-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dlm-lifecyclepolicy-action-syntax.json"></a>

```
{
  "[CrossRegionCopy](#cfn-dlm-lifecyclepolicy-action-crossregioncopy)" : [ CrossRegionCopyAction, ... ],
  "[Name](#cfn-dlm-lifecyclepolicy-action-name)" : String
}
```

### YAML<a name="aws-properties-dlm-lifecyclepolicy-action-syntax.yaml"></a>

```
  [CrossRegionCopy](#cfn-dlm-lifecyclepolicy-action-crossregioncopy):
    - CrossRegionCopyAction
  [Name](#cfn-dlm-lifecyclepolicy-action-name): String
```

## Properties<a name="aws-properties-dlm-lifecyclepolicy-action-properties"></a>

`CrossRegionCopy` <a name="cfn-dlm-lifecyclepolicy-action-crossregioncopy"></a>
The rule for copying shared snapshots across Regions\.  
_Required_: Yes  
_Type_: List of [CrossRegionCopyAction](aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.md)  
_Maximum_: `3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-dlm-lifecyclepolicy-action-name"></a>
A descriptive name for the action\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `120`  
_Pattern_: `[0-9A-Za-z _-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
