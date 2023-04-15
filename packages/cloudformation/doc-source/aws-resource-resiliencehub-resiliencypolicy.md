# AWS::ResilienceHub::ResiliencyPolicy<a name="aws-resource-resiliencehub-resiliencypolicy"></a>

Defines a resiliency policy\.

## Syntax<a name="aws-resource-resiliencehub-resiliencypolicy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-resiliencehub-resiliencypolicy-syntax.json"></a>

```
{
  "Type" : "AWS::ResilienceHub::ResiliencyPolicy",
  "Properties" : {
      "[DataLocationConstraint](#cfn-resiliencehub-resiliencypolicy-datalocationconstraint)" : String,
      "[Policy](#cfn-resiliencehub-resiliencypolicy-policy)" : {Key : Value, ...},
      "[PolicyDescription](#cfn-resiliencehub-resiliencypolicy-policydescription)" : String,
      "[PolicyName](#cfn-resiliencehub-resiliencypolicy-policyname)" : String,
      "[Tags](#cfn-resiliencehub-resiliencypolicy-tags)" : {Key : Value, ...},
      "[Tier](#cfn-resiliencehub-resiliencypolicy-tier)" : String
    }
}
```

### YAML<a name="aws-resource-resiliencehub-resiliencypolicy-syntax.yaml"></a>

```
Type: AWS::ResilienceHub::ResiliencyPolicy
Properties:
  [DataLocationConstraint](#cfn-resiliencehub-resiliencypolicy-datalocationconstraint): String
  [Policy](#cfn-resiliencehub-resiliencypolicy-policy):
    Key : Value
  [PolicyDescription](#cfn-resiliencehub-resiliencypolicy-policydescription): String
  [PolicyName](#cfn-resiliencehub-resiliencypolicy-policyname): String
  [Tags](#cfn-resiliencehub-resiliencypolicy-tags):
    Key : Value
  [Tier](#cfn-resiliencehub-resiliencypolicy-tier): String
```

## Properties<a name="aws-resource-resiliencehub-resiliencypolicy-properties"></a>

`DataLocationConstraint` <a name="cfn-resiliencehub-resiliencypolicy-datalocationconstraint"></a>
Specifies a high\-level geographical location constraint for where your resilience policy data can be stored\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Policy` <a name="cfn-resiliencehub-resiliencypolicy-policy"></a>
The resiliency policy\.  
_Required_: Yes  
_Type_: Map of [FailurePolicy](aws-properties-resiliencehub-resiliencypolicy-failurepolicy.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PolicyDescription` <a name="cfn-resiliencehub-resiliencypolicy-policydescription"></a>
The description for the policy\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PolicyName` <a name="cfn-resiliencehub-resiliencypolicy-policyname"></a>
The name of the policy  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-resiliencehub-resiliencypolicy-tags"></a>
The tags assigned to the resource\. A tag is a label that you assign to an AWS resource\. Each tag consists of a key/value pair\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tier` <a name="cfn-resiliencehub-resiliencypolicy-tier"></a>
The tier for this resiliency policy, ranging from the highest severity \(`MissionCritical`\) to lowest \(`NonCritical`\)\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-resiliencehub-resiliencypolicy-return-values"></a>

### Ref<a name="aws-resource-resiliencehub-resiliencypolicy-return-values-ref"></a>

The returned Amazon Resource Name \(ARN\) for the resiliency policy\.

### Fn::GetAtt<a name="aws-resource-resiliencehub-resiliencypolicy-return-values-fn--getatt"></a>

The Amazon Resource Name \(ARN\) for the resiliency policy\.

#### <a name="aws-resource-resiliencehub-resiliencypolicy-return-values-fn--getatt-fn--getatt"></a>

`PolicyArn` <a name="PolicyArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the resiliency policy\.
