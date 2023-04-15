# AWS::IoT::TopicRule CloudwatchMetricAction<a name="aws-properties-iot-topicrule-cloudwatchmetricaction"></a>

Describes an action that captures a CloudWatch metric\.

## Syntax<a name="aws-properties-iot-topicrule-cloudwatchmetricaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iot-topicrule-cloudwatchmetricaction-syntax.json"></a>

```
{
  "[MetricName](#cfn-iot-topicrule-cloudwatchmetricaction-metricname)" : String,
  "[MetricNamespace](#cfn-iot-topicrule-cloudwatchmetricaction-metricnamespace)" : String,
  "[MetricTimestamp](#cfn-iot-topicrule-cloudwatchmetricaction-metrictimestamp)" : String,
  "[MetricUnit](#cfn-iot-topicrule-cloudwatchmetricaction-metricunit)" : String,
  "[MetricValue](#cfn-iot-topicrule-cloudwatchmetricaction-metricvalue)" : String,
  "[RoleArn](#cfn-iot-topicrule-cloudwatchmetricaction-rolearn)" : String
}
```

### YAML<a name="aws-properties-iot-topicrule-cloudwatchmetricaction-syntax.yaml"></a>

```
  [MetricName](#cfn-iot-topicrule-cloudwatchmetricaction-metricname): String
  [MetricNamespace](#cfn-iot-topicrule-cloudwatchmetricaction-metricnamespace): String
  [MetricTimestamp](#cfn-iot-topicrule-cloudwatchmetricaction-metrictimestamp): String
  [MetricUnit](#cfn-iot-topicrule-cloudwatchmetricaction-metricunit): String
  [MetricValue](#cfn-iot-topicrule-cloudwatchmetricaction-metricvalue): String
  [RoleArn](#cfn-iot-topicrule-cloudwatchmetricaction-rolearn): String
```

## Properties<a name="aws-properties-iot-topicrule-cloudwatchmetricaction-properties"></a>

`MetricName` <a name="cfn-iot-topicrule-cloudwatchmetricaction-metricname"></a>
The CloudWatch metric name\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricNamespace` <a name="cfn-iot-topicrule-cloudwatchmetricaction-metricnamespace"></a>
The CloudWatch metric namespace name\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricTimestamp` <a name="cfn-iot-topicrule-cloudwatchmetricaction-metrictimestamp"></a>
An optional [Unix timestamp](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricUnit` <a name="cfn-iot-topicrule-cloudwatchmetricaction-metricunit"></a>
The [metric unit](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit) supported by CloudWatch\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricValue` <a name="cfn-iot-topicrule-cloudwatchmetricaction-metricvalue"></a>
The CloudWatch metric value\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-iot-topicrule-cloudwatchmetricaction-rolearn"></a>
The IAM role that allows access to the CloudWatch metric\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
