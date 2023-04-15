# AWS::Events::Rule Tag<a name="aws-properties-events-rule-tag"></a>

A key\-value pair associated with an ECS Target of an EventBridge rule\. The tag will be propagated to ECS by EventBridge when starting an ECS task based on a matched event\.

**Important**  
Currently, tags are only available when using ECS with EventBridge\.

## Syntax<a name="aws-properties-events-rule-tag-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-rule-tag-syntax.json"></a>

```
{
  "[Key](#cfn-events-rule-tag-key)" : String,
  "[Value](#cfn-events-rule-tag-value)" : String
}
```

### YAML<a name="aws-properties-events-rule-tag-syntax.yaml"></a>

```
  [Key](#cfn-events-rule-tag-key): String
  [Value](#cfn-events-rule-tag-value): String
```

## Properties<a name="aws-properties-events-rule-tag-properties"></a>

`Key` <a name="cfn-events-rule-tag-key"></a>
A string you can use to assign a value\. The combination of tag keys and values can help you organize and categorize your resources\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-events-rule-tag-value"></a>
The value for the specified tag key\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
