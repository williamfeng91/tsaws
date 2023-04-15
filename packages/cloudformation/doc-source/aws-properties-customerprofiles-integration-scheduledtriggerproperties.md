# AWS::CustomerProfiles::Integration ScheduledTriggerProperties<a name="aws-properties-customerprofiles-integration-scheduledtriggerproperties"></a>

Specifies the configuration details of a scheduled\-trigger flow that you define\. Currently, these settings only apply to the scheduled\-trigger type\.

## Syntax<a name="aws-properties-customerprofiles-integration-scheduledtriggerproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-customerprofiles-integration-scheduledtriggerproperties-syntax.json"></a>

```
{
  "[DataPullMode](#cfn-customerprofiles-integration-scheduledtriggerproperties-datapullmode)" : String,
  "[FirstExecutionFrom](#cfn-customerprofiles-integration-scheduledtriggerproperties-firstexecutionfrom)" : Double,
  "[ScheduleEndTime](#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleendtime)" : Double,
  "[ScheduleExpression](#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleexpression)" : String,
  "[ScheduleOffset](#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleoffset)" : Integer,
  "[ScheduleStartTime](#cfn-customerprofiles-integration-scheduledtriggerproperties-schedulestarttime)" : Double,
  "[Timezone](#cfn-customerprofiles-integration-scheduledtriggerproperties-timezone)" : String
}
```

### YAML<a name="aws-properties-customerprofiles-integration-scheduledtriggerproperties-syntax.yaml"></a>

```
  [DataPullMode](#cfn-customerprofiles-integration-scheduledtriggerproperties-datapullmode): String
  [FirstExecutionFrom](#cfn-customerprofiles-integration-scheduledtriggerproperties-firstexecutionfrom): Double
  [ScheduleEndTime](#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleendtime): Double
  [ScheduleExpression](#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleexpression): String
  [ScheduleOffset](#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleoffset): Integer
  [ScheduleStartTime](#cfn-customerprofiles-integration-scheduledtriggerproperties-schedulestarttime): Double
  [Timezone](#cfn-customerprofiles-integration-scheduledtriggerproperties-timezone): String
```

## Properties<a name="aws-properties-customerprofiles-integration-scheduledtriggerproperties-properties"></a>

`DataPullMode` <a name="cfn-customerprofiles-integration-scheduledtriggerproperties-datapullmode"></a>
Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run\.  
_Required_: No  
_Type_: String  
_Allowed values_: `Complete | Incremental`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FirstExecutionFrom` <a name="cfn-customerprofiles-integration-scheduledtriggerproperties-firstexecutionfrom"></a>
Specifies the date range for the records to import from the connector in the first flow run\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduleEndTime` <a name="cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleendtime"></a>
Specifies the scheduled end time for a scheduled\-trigger flow\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduleExpression` <a name="cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleexpression"></a>
The scheduling expression that determines the rate at which the schedule will run, for example rate \(5 minutes\)\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduleOffset` <a name="cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleoffset"></a>
Specifies the optional offset that is added to the time interval for a schedule\-triggered flow\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduleStartTime` <a name="cfn-customerprofiles-integration-scheduledtriggerproperties-schedulestarttime"></a>
Specifies the scheduled start time for a scheduled\-trigger flow\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timezone` <a name="cfn-customerprofiles-integration-scheduledtriggerproperties-timezone"></a>
Specifies the time zone used when referring to the date and time of a scheduled\-triggered flow, such as America/New_York\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
