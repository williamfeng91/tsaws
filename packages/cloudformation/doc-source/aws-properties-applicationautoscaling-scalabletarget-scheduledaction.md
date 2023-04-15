# AWS::ApplicationAutoScaling::ScalableTarget ScheduledAction<a name="aws-properties-applicationautoscaling-scalabletarget-scheduledaction"></a>

`ScheduledAction` is a property of the [AWS::ApplicationAutoScaling::ScalableTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html) resource that specifies a scheduled action for a scalable target\.

For more information, see [Scheduled scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html) in the _Application Auto Scaling User Guide_\.

## Syntax<a name="aws-properties-applicationautoscaling-scalabletarget-scheduledaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-applicationautoscaling-scalabletarget-scheduledaction-syntax.json"></a>

```
{
  "[EndTime](#cfn-applicationautoscaling-scalabletarget-scheduledaction-endtime)" : Timestamp,
  "[ScalableTargetAction](#cfn-applicationautoscaling-scalabletarget-scheduledaction-scalabletargetaction)" : ScalableTargetAction,
  "[Schedule](#cfn-applicationautoscaling-scalabletarget-scheduledaction-schedule)" : String,
  "[ScheduledActionName](#cfn-applicationautoscaling-scalabletarget-scheduledaction-scheduledactionname)" : String,
  "[StartTime](#cfn-applicationautoscaling-scalabletarget-scheduledaction-starttime)" : Timestamp,
  "[Timezone](#cfn-applicationautoscaling-scalabletarget-scheduledaction-timezone)" : String
}
```

### YAML<a name="aws-properties-applicationautoscaling-scalabletarget-scheduledaction-syntax.yaml"></a>

```
  [EndTime](#cfn-applicationautoscaling-scalabletarget-scheduledaction-endtime): Timestamp
  [ScalableTargetAction](#cfn-applicationautoscaling-scalabletarget-scheduledaction-scalabletargetaction):
    ScalableTargetAction
  [Schedule](#cfn-applicationautoscaling-scalabletarget-scheduledaction-schedule): String
  [ScheduledActionName](#cfn-applicationautoscaling-scalabletarget-scheduledaction-scheduledactionname): String
  [StartTime](#cfn-applicationautoscaling-scalabletarget-scheduledaction-starttime): Timestamp
  [Timezone](#cfn-applicationautoscaling-scalabletarget-scheduledaction-timezone): String
```

## Properties<a name="aws-properties-applicationautoscaling-scalabletarget-scheduledaction-properties"></a>

`EndTime` <a name="cfn-applicationautoscaling-scalabletarget-scheduledaction-endtime"></a>
The date and time that the action is scheduled to end, in UTC\.  
_Required_: No  
_Type_: Timestamp  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScalableTargetAction` <a name="cfn-applicationautoscaling-scalabletarget-scheduledaction-scalabletargetaction"></a>
The new minimum and maximum capacity\. You can set both values or just one\. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity\. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity\.  
_Required_: No  
_Type_: [ScalableTargetAction](aws-properties-applicationautoscaling-scalabletarget-scalabletargetaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Schedule` <a name="cfn-applicationautoscaling-scalabletarget-scheduledaction-schedule"></a>
The schedule for this action\. The following formats are supported:

- At expressions \- "`at(yyyy-mm-ddThh:mm:ss)`"
- Rate expressions \- "`rate(value unit)`"
- Cron expressions \- "`cron(fields)`"
  At expressions are useful for one\-time schedules\. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval\.  
  At and cron expressions use Universal Coordinated Time \(UTC\) by default\.  
  The cron format consists of six fields separated by white spaces: \[Minutes\] \[Hours\] \[Day_of_Month\] \[Month\] \[Day_of_Week\] \[Year\]\.  
  For rate expressions, _value_ is a positive integer and _unit_ is `minute` \| `minutes` \| `hour` \| `hours` \| `day` \| `days`\.  
  _Required_: Yes  
  _Type_: String  
  _Minimum_: `1`  
  _Maximum_: `1600`  
  _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduledActionName` <a name="cfn-applicationautoscaling-scalabletarget-scheduledaction-scheduledactionname"></a>
The name of the scheduled action\. This name must be unique among all other scheduled actions on the specified scalable target\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `(?!((^[ ]+.*)|(.*([\u0000-\u001f]|[\u007f-\u009f]|[:/|])+.*)|(.*[ ]+$))).+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartTime` <a name="cfn-applicationautoscaling-scalabletarget-scheduledaction-starttime"></a>
The date and time that the action is scheduled to begin, in UTC\.  
_Required_: No  
_Type_: Timestamp  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timezone` <a name="cfn-applicationautoscaling-scalabletarget-scheduledaction-timezone"></a>
The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1600`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-applicationautoscaling-scalabletarget-scheduledaction--seealso"></a>

- [Application Auto Scaling template examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-autoscaling.html#scenario-app-as-template-examples)
- [Getting started](https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html) in the _Application Auto Scaling User Guide_
- [Schedule recurring scaling actions using cron expressions](https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-using-cron-expressions.html) in the _Application Auto Scaling User Guide_
