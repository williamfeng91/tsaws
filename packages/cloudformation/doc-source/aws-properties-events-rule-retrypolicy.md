# AWS::Events::Rule RetryPolicy<a name="aws-properties-events-rule-retrypolicy"></a>

A `RetryPolicy` object that includes information about the retry policy settings\.

## Syntax<a name="aws-properties-events-rule-retrypolicy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-rule-retrypolicy-syntax.json"></a>

```
{
  "[MaximumEventAgeInSeconds](#cfn-events-rule-retrypolicy-maximumeventageinseconds)" : Integer,
  "[MaximumRetryAttempts](#cfn-events-rule-retrypolicy-maximumretryattempts)" : Integer
}
```

### YAML<a name="aws-properties-events-rule-retrypolicy-syntax.yaml"></a>

```
  [MaximumEventAgeInSeconds](#cfn-events-rule-retrypolicy-maximumeventageinseconds): Integer
  [MaximumRetryAttempts](#cfn-events-rule-retrypolicy-maximumretryattempts): Integer
```

## Properties<a name="aws-properties-events-rule-retrypolicy-properties"></a>

`MaximumEventAgeInSeconds` <a name="cfn-events-rule-retrypolicy-maximumeventageinseconds"></a>
The maximum amount of time, in seconds, to continue to make retry attempts\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `60`  
_Maximum_: `86400`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumRetryAttempts` <a name="cfn-events-rule-retrypolicy-maximumretryattempts"></a>
The maximum number of retry attempts to make before the request fails\. Retry attempts continue until either the maximum number of attempts is made or until the duration of the `MaximumEventAgeInSeconds` is met\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `185`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
