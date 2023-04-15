# AWS::SSMContacts::Rotation WeeklySetting<a name="aws-properties-ssmcontacts-rotation-weeklysetting"></a>

Information about rotations that recur weekly\.

## Syntax<a name="aws-properties-ssmcontacts-rotation-weeklysetting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssmcontacts-rotation-weeklysetting-syntax.json"></a>

```
{
  "[DayOfWeek](#cfn-ssmcontacts-rotation-weeklysetting-dayofweek)" : String,
  "[HandOffTime](#cfn-ssmcontacts-rotation-weeklysetting-handofftime)" : String
}
```

### YAML<a name="aws-properties-ssmcontacts-rotation-weeklysetting-syntax.yaml"></a>

```
  [DayOfWeek](#cfn-ssmcontacts-rotation-weeklysetting-dayofweek): String
  [HandOffTime](#cfn-ssmcontacts-rotation-weeklysetting-handofftime): String
```

## Properties<a name="aws-properties-ssmcontacts-rotation-weeklysetting-properties"></a>

`DayOfWeek` <a name="cfn-ssmcontacts-rotation-weeklysetting-dayofweek"></a>
The day of the week when weekly recurring on\-call shift rotations begins\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `FRI | MON | SAT | SUN | THU | TUE | WED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HandOffTime` <a name="cfn-ssmcontacts-rotation-weeklysetting-handofftime"></a>
The time of day when a weekly recurring on\-call shift rotation begins\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
