# AWS::SSMContacts::Rotation RecurrenceSettings<a name="aws-properties-ssmcontacts-rotation-recurrencesettings"></a>

Information about when an on\-call rotation is in effect and how long the rotation period lasts\.

## Syntax<a name="aws-properties-ssmcontacts-rotation-recurrencesettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssmcontacts-rotation-recurrencesettings-syntax.json"></a>

```
{
  "[DailySettings](#cfn-ssmcontacts-rotation-recurrencesettings-dailysettings)" : [ String, ... ],
  "[MonthlySettings](#cfn-ssmcontacts-rotation-recurrencesettings-monthlysettings)" : [ MonthlySetting, ... ],
  "[NumberOfOnCalls](#cfn-ssmcontacts-rotation-recurrencesettings-numberofoncalls)" : Integer,
  "[RecurrenceMultiplier](#cfn-ssmcontacts-rotation-recurrencesettings-recurrencemultiplier)" : Integer,
  "[ShiftCoverages](#cfn-ssmcontacts-rotation-recurrencesettings-shiftcoverages)" : [ ShiftCoverage, ... ],
  "[WeeklySettings](#cfn-ssmcontacts-rotation-recurrencesettings-weeklysettings)" : [ WeeklySetting, ... ]
}
```

### YAML<a name="aws-properties-ssmcontacts-rotation-recurrencesettings-syntax.yaml"></a>

```
  [DailySettings](#cfn-ssmcontacts-rotation-recurrencesettings-dailysettings):
    - String
  [MonthlySettings](#cfn-ssmcontacts-rotation-recurrencesettings-monthlysettings):
    - MonthlySetting
  [NumberOfOnCalls](#cfn-ssmcontacts-rotation-recurrencesettings-numberofoncalls): Integer
  [RecurrenceMultiplier](#cfn-ssmcontacts-rotation-recurrencesettings-recurrencemultiplier): Integer
  [ShiftCoverages](#cfn-ssmcontacts-rotation-recurrencesettings-shiftcoverages):
    - ShiftCoverage
  [WeeklySettings](#cfn-ssmcontacts-rotation-recurrencesettings-weeklysettings):
    - WeeklySetting
```

## Properties<a name="aws-properties-ssmcontacts-rotation-recurrencesettings-properties"></a>

`DailySettings` <a name="cfn-ssmcontacts-rotation-recurrencesettings-dailysettings"></a>
Information about on\-call rotations that recur daily\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MonthlySettings` <a name="cfn-ssmcontacts-rotation-recurrencesettings-monthlysettings"></a>
Information about on\-call rotations that recur monthly\.  
_Required_: No  
_Type_: List of [MonthlySetting](aws-properties-ssmcontacts-rotation-monthlysetting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberOfOnCalls` <a name="cfn-ssmcontacts-rotation-recurrencesettings-numberofoncalls"></a>
The number of contacts, or shift team members designated to be on call concurrently during a shift\. For example, in an on\-call schedule that contains ten contacts, a value of `2` designates that two of them are on call at any given time\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RecurrenceMultiplier` <a name="cfn-ssmcontacts-rotation-recurrencesettings-recurrencemultiplier"></a>
The number of days, weeks, or months a single rotation lasts\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ShiftCoverages` <a name="cfn-ssmcontacts-rotation-recurrencesettings-shiftcoverages"></a>
Information about the days of the week that the on\-call rotation coverage includes\.  
_Required_: No  
_Type_: List of [ShiftCoverage](aws-properties-ssmcontacts-rotation-shiftcoverage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WeeklySettings` <a name="cfn-ssmcontacts-rotation-recurrencesettings-weeklysettings"></a>
Information about on\-call rotations that recur weekly\.  
_Required_: No  
_Type_: List of [WeeklySetting](aws-properties-ssmcontacts-rotation-weeklysetting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
