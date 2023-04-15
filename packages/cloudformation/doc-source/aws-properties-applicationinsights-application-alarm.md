# AWS::ApplicationInsights::Application Alarm<a name="aws-properties-applicationinsights-application-alarm"></a>

The `AWS::ApplicationInsights::Application Alarm` property type defines a CloudWatch alarm to be monitored for the component\.

## Syntax<a name="aws-properties-applicationinsights-application-alarm-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-applicationinsights-application-alarm-syntax.json"></a>

```
{
  "[AlarmName](#cfn-applicationinsights-application-alarm-alarmname)" : String,
  "[Severity](#cfn-applicationinsights-application-alarm-severity)" : String
}
```

### YAML<a name="aws-properties-applicationinsights-application-alarm-syntax.yaml"></a>

```
  [AlarmName](#cfn-applicationinsights-application-alarm-alarmname): String
  [Severity](#cfn-applicationinsights-application-alarm-severity): String
```

## Properties<a name="aws-properties-applicationinsights-application-alarm-properties"></a>

`AlarmName` <a name="cfn-applicationinsights-application-alarm-alarmname"></a>
The name of the CloudWatch alarm to be monitored for the component\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Severity` <a name="cfn-applicationinsights-application-alarm-severity"></a>
Indicates the degree of outage when the alarm goes off\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
