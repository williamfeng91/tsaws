# AWS::Scheduler::Schedule FlexibleTimeWindow<a name="aws-properties-scheduler-schedule-flexibletimewindow"></a>

Allows you to configure a time window during which EventBridge Scheduler invokes the schedule\.

## Syntax<a name="aws-properties-scheduler-schedule-flexibletimewindow-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-scheduler-schedule-flexibletimewindow-syntax.json"></a>

```
{
  "[MaximumWindowInMinutes](#cfn-scheduler-schedule-flexibletimewindow-maximumwindowinminutes)" : Double,
  "[Mode](#cfn-scheduler-schedule-flexibletimewindow-mode)" : String
}
```

### YAML<a name="aws-properties-scheduler-schedule-flexibletimewindow-syntax.yaml"></a>

```
  [MaximumWindowInMinutes](#cfn-scheduler-schedule-flexibletimewindow-maximumwindowinminutes): Double
  [Mode](#cfn-scheduler-schedule-flexibletimewindow-mode): String
```

## Properties<a name="aws-properties-scheduler-schedule-flexibletimewindow-properties"></a>

`MaximumWindowInMinutes` <a name="cfn-scheduler-schedule-flexibletimewindow-maximumwindowinminutes"></a>
The maximum time window during which a schedule can be invoked\.  
_Minimum_: `1`  
_Maximum_: `1440`  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Mode` <a name="cfn-scheduler-schedule-flexibletimewindow-mode"></a>
Determines whether the schedule is invoked within a flexible time window\.  
_Allowed Values_: `OFF` \| `FLEXIBLE`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
