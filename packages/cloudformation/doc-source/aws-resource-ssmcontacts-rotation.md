# AWS::SSMContacts::Rotation<a name="aws-resource-ssmcontacts-rotation"></a>

Creates a rotation in an on\-call schedule\.

## Syntax<a name="aws-resource-ssmcontacts-rotation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ssmcontacts-rotation-syntax.json"></a>

```
{
  "Type" : "AWS::SSMContacts::Rotation",
  "Properties" : {
      "[ContactIds](#cfn-ssmcontacts-rotation-contactids)" : [ String, ... ],
      "[Name](#cfn-ssmcontacts-rotation-name)" : String,
      "[Recurrence](#cfn-ssmcontacts-rotation-recurrence)" : RecurrenceSettings,
      "[StartTime](#cfn-ssmcontacts-rotation-starttime)" : String,
      "[Tags](#cfn-ssmcontacts-rotation-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[TimeZoneId](#cfn-ssmcontacts-rotation-timezoneid)" : String
    }
}
```

### YAML<a name="aws-resource-ssmcontacts-rotation-syntax.yaml"></a>

```
Type: AWS::SSMContacts::Rotation
Properties:
  [ContactIds](#cfn-ssmcontacts-rotation-contactids):
    - String
  [Name](#cfn-ssmcontacts-rotation-name): String
  [Recurrence](#cfn-ssmcontacts-rotation-recurrence):
    RecurrenceSettings
  [StartTime](#cfn-ssmcontacts-rotation-starttime): String
  [Tags](#cfn-ssmcontacts-rotation-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [TimeZoneId](#cfn-ssmcontacts-rotation-timezoneid): String
```

## Properties<a name="aws-resource-ssmcontacts-rotation-properties"></a>

`ContactIds` <a name="cfn-ssmcontacts-rotation-contactids"></a>
The Amazon Resource Names \(ARNs\) of the contacts assigned to the rotation team\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `25`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-ssmcontacts-rotation-name"></a>
The name of the rotation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^[a-zA-Z0-9_\-\s\.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Recurrence` <a name="cfn-ssmcontacts-rotation-recurrence"></a>
Information about when an on\-call rotation is in effect and how long the rotation period lasts\.  
_Required_: Yes  
_Type_: [RecurrenceSettings](aws-properties-ssmcontacts-rotation-recurrencesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartTime` <a name="cfn-ssmcontacts-rotation-starttime"></a>
The date and time the rotation becomes active\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-ssmcontacts-rotation-tags"></a>
Property description not available\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimeZoneId` <a name="cfn-ssmcontacts-rotation-timezoneid"></a>
The time zone the rotation’s activity is based on, in Internet Assigned Numbers Authority \(IANA\) format\. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul"\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^[:a-zA-Z0-9_\-\s\.\\/]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-ssmcontacts-rotation-return-values"></a>

### Ref<a name="aws-resource-ssmcontacts-rotation-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-ssmcontacts-rotation-return-values-fn--getatt"></a>

#### <a name="aws-resource-ssmcontacts-rotation-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
Property description not available\.
