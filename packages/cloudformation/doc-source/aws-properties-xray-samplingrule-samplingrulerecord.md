# AWS::XRay::SamplingRule SamplingRuleRecord<a name="aws-properties-xray-samplingrule-samplingrulerecord"></a>

A [SamplingRule](https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html) and its metadata\.

## Syntax<a name="aws-properties-xray-samplingrule-samplingrulerecord-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-xray-samplingrule-samplingrulerecord-syntax.json"></a>

```
{
  "[CreatedAt](#cfn-xray-samplingrule-samplingrulerecord-createdat)" : String,
  "[ModifiedAt](#cfn-xray-samplingrule-samplingrulerecord-modifiedat)" : String,
  "[SamplingRule](#cfn-xray-samplingrule-samplingrulerecord-samplingrule)" : SamplingRule
}
```

### YAML<a name="aws-properties-xray-samplingrule-samplingrulerecord-syntax.yaml"></a>

```
  [CreatedAt](#cfn-xray-samplingrule-samplingrulerecord-createdat): String
  [ModifiedAt](#cfn-xray-samplingrule-samplingrulerecord-modifiedat): String
  [SamplingRule](#cfn-xray-samplingrule-samplingrulerecord-samplingrule):
    SamplingRule
```

## Properties<a name="aws-properties-xray-samplingrule-samplingrulerecord-properties"></a>

`CreatedAt` <a name="cfn-xray-samplingrule-samplingrulerecord-createdat"></a>
When the rule was created, in Unix time seconds\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ModifiedAt` <a name="cfn-xray-samplingrule-samplingrulerecord-modifiedat"></a>
When the rule was last modified, in Unix time seconds\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SamplingRule` <a name="cfn-xray-samplingrule-samplingrulerecord-samplingrule"></a>
The sampling rule\.  
_Required_: No  
_Type_: [SamplingRule](aws-properties-xray-samplingrule-samplingrule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
