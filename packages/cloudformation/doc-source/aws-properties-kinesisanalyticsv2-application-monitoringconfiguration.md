# AWS::KinesisAnalyticsV2::Application MonitoringConfiguration<a name="aws-properties-kinesisanalyticsv2-application-monitoringconfiguration"></a>

Describes configuration parameters for Amazon CloudWatch logging for a Java\-based Kinesis Data Analytics application\. For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview)\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-monitoringconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-monitoringconfiguration-syntax.json"></a>

```
{
  "[ConfigurationType](#cfn-kinesisanalyticsv2-application-monitoringconfiguration-configurationtype)" : String,
  "[LogLevel](#cfn-kinesisanalyticsv2-application-monitoringconfiguration-loglevel)" : String,
  "[MetricsLevel](#cfn-kinesisanalyticsv2-application-monitoringconfiguration-metricslevel)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-monitoringconfiguration-syntax.yaml"></a>

```
  [ConfigurationType](#cfn-kinesisanalyticsv2-application-monitoringconfiguration-configurationtype): String
  [LogLevel](#cfn-kinesisanalyticsv2-application-monitoringconfiguration-loglevel): String
  [MetricsLevel](#cfn-kinesisanalyticsv2-application-monitoringconfiguration-metricslevel): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-monitoringconfiguration-properties"></a>

`ConfigurationType` <a name="cfn-kinesisanalyticsv2-application-monitoringconfiguration-configurationtype"></a>
Describes whether to use the default CloudWatch logging configuration for an application\. You must set this property to `CUSTOM` in order to set the `LogLevel` or `MetricsLevel` parameters\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `CUSTOM | DEFAULT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LogLevel` <a name="cfn-kinesisanalyticsv2-application-monitoringconfiguration-loglevel"></a>
Describes the verbosity of the CloudWatch Logs for an application\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DEBUG | ERROR | INFO | WARN`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricsLevel` <a name="cfn-kinesisanalyticsv2-application-monitoringconfiguration-metricslevel"></a>
Describes the granularity of the CloudWatch Logs for an application\. The `Parallelism` level is not recommended for applications with a Parallelism over 64 due to excessive costs\.  
_Required_: No  
_Type_: String  
_Allowed values_: `APPLICATION | OPERATOR | PARALLELISM | TASK`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-application-monitoringconfiguration--seealso"></a>

- [MonitoringConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_MonitoringConfiguration.html) in the _Amazon Kinesis Data Analytics API Reference_
