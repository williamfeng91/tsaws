# AWS::ApplicationInsights::Application ConfigurationDetails<a name="aws-properties-applicationinsights-application-configurationdetails"></a>

The `AWS::ApplicationInsights::Application ConfigurationDetails` property type specifies the configuration settings\.

## Syntax<a name="aws-properties-applicationinsights-application-configurationdetails-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-applicationinsights-application-configurationdetails-syntax.json"></a>

```
{
  "[AlarmMetrics](#cfn-applicationinsights-application-configurationdetails-alarmmetrics)" : [ AlarmMetric, ... ],
  "[Alarms](#cfn-applicationinsights-application-configurationdetails-alarms)" : [ Alarm, ... ],
  "[HAClusterPrometheusExporter](#cfn-applicationinsights-application-configurationdetails-haclusterprometheusexporter)" : HAClusterPrometheusExporter,
  "[HANAPrometheusExporter](#cfn-applicationinsights-application-configurationdetails-hanaprometheusexporter)" : HANAPrometheusExporter,
  "[JMXPrometheusExporter](#cfn-applicationinsights-application-configurationdetails-jmxprometheusexporter)" : JMXPrometheusExporter,
  "[Logs](#cfn-applicationinsights-application-configurationdetails-logs)" : [ Log, ... ],
  "[WindowsEvents](#cfn-applicationinsights-application-configurationdetails-windowsevents)" : [ WindowsEvent, ... ]
}
```

### YAML<a name="aws-properties-applicationinsights-application-configurationdetails-syntax.yaml"></a>

```
  [AlarmMetrics](#cfn-applicationinsights-application-configurationdetails-alarmmetrics):
    - AlarmMetric
  [Alarms](#cfn-applicationinsights-application-configurationdetails-alarms):
    - Alarm
  [HAClusterPrometheusExporter](#cfn-applicationinsights-application-configurationdetails-haclusterprometheusexporter):
    HAClusterPrometheusExporter
  [HANAPrometheusExporter](#cfn-applicationinsights-application-configurationdetails-hanaprometheusexporter):
    HANAPrometheusExporter
  [JMXPrometheusExporter](#cfn-applicationinsights-application-configurationdetails-jmxprometheusexporter):
    JMXPrometheusExporter
  [Logs](#cfn-applicationinsights-application-configurationdetails-logs):
    - Log
  [WindowsEvents](#cfn-applicationinsights-application-configurationdetails-windowsevents):
    - WindowsEvent
```

## Properties<a name="aws-properties-applicationinsights-application-configurationdetails-properties"></a>

`AlarmMetrics` <a name="cfn-applicationinsights-application-configurationdetails-alarmmetrics"></a>
A list of metrics to monitor for the component\. All component types can use `AlarmMetrics`\.  
_Required_: No  
_Type_: List of [AlarmMetric](aws-properties-applicationinsights-application-alarmmetric.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Alarms` <a name="cfn-applicationinsights-application-configurationdetails-alarms"></a>
A list of alarms to monitor for the component\. All component types can use `Alarm`\.  
_Required_: No  
_Type_: List of [Alarm](aws-properties-applicationinsights-application-alarm.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HAClusterPrometheusExporter` <a name="cfn-applicationinsights-application-configurationdetails-haclusterprometheusexporter"></a>
The HA cluster Prometheus Exporter settings\.  
_Required_: No  
_Type_: [HAClusterPrometheusExporter](aws-properties-applicationinsights-application-haclusterprometheusexporter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HANAPrometheusExporter` <a name="cfn-applicationinsights-application-configurationdetails-hanaprometheusexporter"></a>
The HANA DB Prometheus Exporter settings\.  
_Required_: No  
_Type_: [HANAPrometheusExporter](aws-properties-applicationinsights-application-hanaprometheusexporter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`JMXPrometheusExporter` <a name="cfn-applicationinsights-application-configurationdetails-jmxprometheusexporter"></a>
A list of Java metrics to monitor for the component\.  
_Required_: No  
_Type_: [JMXPrometheusExporter](aws-properties-applicationinsights-application-jmxprometheusexporter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Logs` <a name="cfn-applicationinsights-application-configurationdetails-logs"></a>
A list of logs to monitor for the component\. Only Amazon EC2 instances can use `Logs`\.  
_Required_: No  
_Type_: List of [Log](aws-properties-applicationinsights-application-log.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WindowsEvents` <a name="cfn-applicationinsights-application-configurationdetails-windowsevents"></a>
A list of Windows Events to monitor for the component\. Only Amazon EC2 instances running on Windows can use `WindowsEvents`\.  
_Required_: No  
_Type_: List of [WindowsEvent](aws-properties-applicationinsights-application-windowsevent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
