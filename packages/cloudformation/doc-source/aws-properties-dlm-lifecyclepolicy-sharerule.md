# AWS::DLM::LifecyclePolicy ShareRule<a name="aws-properties-dlm-lifecyclepolicy-sharerule"></a>

**\[Snapshot policies only\]** Specifies a rule for sharing snapshots across AWS accounts\.

## Syntax<a name="aws-properties-dlm-lifecyclepolicy-sharerule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dlm-lifecyclepolicy-sharerule-syntax.json"></a>

```
{
  "[TargetAccounts](#cfn-dlm-lifecyclepolicy-sharerule-targetaccounts)" : [ String, ... ],
  "[UnshareInterval](#cfn-dlm-lifecyclepolicy-sharerule-unshareinterval)" : Integer,
  "[UnshareIntervalUnit](#cfn-dlm-lifecyclepolicy-sharerule-unshareintervalunit)" : String
}
```

### YAML<a name="aws-properties-dlm-lifecyclepolicy-sharerule-syntax.yaml"></a>

```
  [TargetAccounts](#cfn-dlm-lifecyclepolicy-sharerule-targetaccounts):
    - String
  [UnshareInterval](#cfn-dlm-lifecyclepolicy-sharerule-unshareinterval): Integer
  [UnshareIntervalUnit](#cfn-dlm-lifecyclepolicy-sharerule-unshareintervalunit): String
```

## Properties<a name="aws-properties-dlm-lifecyclepolicy-sharerule-properties"></a>

`TargetAccounts` <a name="cfn-dlm-lifecyclepolicy-sharerule-targetaccounts"></a>
The IDs of the AWS accounts with which to share the snapshots\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UnshareInterval` <a name="cfn-dlm-lifecyclepolicy-sharerule-unshareinterval"></a>
The period after which snapshots that are shared with other AWS accounts are automatically unshared\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UnshareIntervalUnit` <a name="cfn-dlm-lifecyclepolicy-sharerule-unshareintervalunit"></a>
The unit of time for the automatic unsharing interval\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
