# AWS::StepFunctions::Activity TagsEntry<a name="aws-properties-stepfunctions-activity-tagsentry"></a>

The `TagsEntry` property specifies _tags_ to identify an activity\.

## Syntax<a name="aws-properties-stepfunctions-activity-tagsentry-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-stepfunctions-activity-tagsentry-syntax.json"></a>

```
{
  "[Key](#cfn-stepfunctions-activity-tagsentry-key)" : String,
  "[Value](#cfn-stepfunctions-activity-tagsentry-value)" : String
}
```

### YAML<a name="aws-properties-stepfunctions-activity-tagsentry-syntax.yaml"></a>

```
  [Key](#cfn-stepfunctions-activity-tagsentry-key): String
  [Value](#cfn-stepfunctions-activity-tagsentry-value): String
```

## Properties<a name="aws-properties-stepfunctions-activity-tagsentry-properties"></a>

`Key` <a name="cfn-stepfunctions-activity-tagsentry-key"></a>
The `key` for a key\-value pair in a tag entry\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-stepfunctions-activity-tagsentry-value"></a>
The `value` for a key\-value pair in a tag entry\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
