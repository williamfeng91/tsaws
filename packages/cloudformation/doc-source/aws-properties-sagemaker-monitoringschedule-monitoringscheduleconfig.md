# AWS::SageMaker::MonitoringSchedule MonitoringScheduleConfig<a name="aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig"></a>

Configures the monitoring schedule and defines the monitoring job\.

## Syntax<a name="aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig-syntax.json"></a>

```
{
  "[MonitoringJobDefinition](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinition)" : MonitoringJobDefinition,
  "[MonitoringJobDefinitionName](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinitionname)" : String,
  "[MonitoringType](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringtype)" : String,
  "[ScheduleConfig](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-scheduleconfig)" : ScheduleConfig
}
```

### YAML<a name="aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig-syntax.yaml"></a>

```
  [MonitoringJobDefinition](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinition):
    MonitoringJobDefinition
  [MonitoringJobDefinitionName](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinitionname): String
  [MonitoringType](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringtype): String
  [ScheduleConfig](#cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-scheduleconfig):
    ScheduleConfig
```

## Properties<a name="aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig-properties"></a>

`MonitoringJobDefinition` <a name="cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinition"></a>
Defines the monitoring job\.  
_Required_: No  
_Type_: [MonitoringJobDefinition](aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MonitoringJobDefinitionName` <a name="cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringjobdefinitionname"></a>
The name of the monitoring job definition to schedule\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MonitoringType` <a name="cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-monitoringtype"></a>
The type of the monitoring job definition to schedule\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DataQuality | ModelBias | ModelExplainability | ModelQuality`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduleConfig` <a name="cfn-sagemaker-monitoringschedule-monitoringscheduleconfig-scheduleconfig"></a>
Configures the monitoring schedule\.  
_Required_: No  
_Type_: [ScheduleConfig](aws-properties-sagemaker-monitoringschedule-scheduleconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
