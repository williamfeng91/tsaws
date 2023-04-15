# AWS::Pinpoint::Campaign QuietTime<a name="aws-properties-pinpoint-campaign-schedule-quiettime"></a>

Specifies the start and end times that define a time range when messages aren't sent to endpoints\.

## Syntax<a name="aws-properties-pinpoint-campaign-schedule-quiettime-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pinpoint-campaign-schedule-quiettime-syntax.json"></a>

```
{
  "[End](#cfn-pinpoint-campaign-schedule-quiettime-end)" : String,
  "[Start](#cfn-pinpoint-campaign-schedule-quiettime-start)" : String
}
```

### YAML<a name="aws-properties-pinpoint-campaign-schedule-quiettime-syntax.yaml"></a>

```
  [End](#cfn-pinpoint-campaign-schedule-quiettime-end): String
  [Start](#cfn-pinpoint-campaign-schedule-quiettime-start): String
```

## Properties<a name="aws-properties-pinpoint-campaign-schedule-quiettime-properties"></a>

`End` <a name="cfn-pinpoint-campaign-schedule-quiettime-end"></a>
The specific time when quiet time ends\. This value has to use 24\-hour notation and be in HH:MM format, where HH is the hour \(with a leading zero, if applicable\) and MM is the minutes\. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Start` <a name="cfn-pinpoint-campaign-schedule-quiettime-start"></a>
The specific time when quiet time begins\. This value has to use 24\-hour notation and be in HH:MM format, where HH is the hour \(with a leading zero, if applicable\) and MM is the minutes\. For example, use `02:30` to represent 2:30 AM, or `14:30` to represent 2:30 PM\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)