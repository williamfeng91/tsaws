# AWS::SSMContacts::Rotation MonthlySetting<a name="aws-properties-ssmcontacts-rotation-monthlysetting"></a>

Information about on\-call rotations that recur monthly\.

## Syntax<a name="aws-properties-ssmcontacts-rotation-monthlysetting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssmcontacts-rotation-monthlysetting-syntax.json"></a>

```
{
  "[DayOfMonth](#cfn-ssmcontacts-rotation-monthlysetting-dayofmonth)" : Integer,
  "[HandOffTime](#cfn-ssmcontacts-rotation-monthlysetting-handofftime)" : String
}
```

### YAML<a name="aws-properties-ssmcontacts-rotation-monthlysetting-syntax.yaml"></a>

```
  [DayOfMonth](#cfn-ssmcontacts-rotation-monthlysetting-dayofmonth): Integer
  [HandOffTime](#cfn-ssmcontacts-rotation-monthlysetting-handofftime): String
```

## Properties<a name="aws-properties-ssmcontacts-rotation-monthlysetting-properties"></a>

`DayOfMonth` <a name="cfn-ssmcontacts-rotation-monthlysetting-dayofmonth"></a>
The day of the month when monthly recurring on\-call rotations begin\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `31`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HandOffTime` <a name="cfn-ssmcontacts-rotation-monthlysetting-handofftime"></a>
The time of day when a monthly recurring on\-call shift rotation begins\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
