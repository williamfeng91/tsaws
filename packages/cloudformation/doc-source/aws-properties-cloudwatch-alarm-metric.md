# AWS::CloudWatch::Alarm Metric<a name="aws-properties-cloudwatch-alarm-metric"></a>

The `Metric` property type represents a specific metric\. `Metric` is a property of the [MetricStat](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html) property type\.

## Syntax<a name="aws-properties-cloudwatch-alarm-metric-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudwatch-alarm-metric-syntax.json"></a>

```
{
  "[Dimensions](#cfn-cloudwatch-alarm-metric-dimensions)" : [ Dimension, ... ],
  "[MetricName](#cfn-cloudwatch-alarm-metric-metricname)" : String,
  "[Namespace](#cfn-cloudwatch-alarm-metric-namespace)" : String
}
```

### YAML<a name="aws-properties-cloudwatch-alarm-metric-syntax.yaml"></a>

```
  [Dimensions](#cfn-cloudwatch-alarm-metric-dimensions):
    - Dimension
  [MetricName](#cfn-cloudwatch-alarm-metric-metricname): String
  [Namespace](#cfn-cloudwatch-alarm-metric-namespace): String
```

## Properties<a name="aws-properties-cloudwatch-alarm-metric-properties"></a>

`Dimensions` <a name="cfn-cloudwatch-alarm-metric-dimensions"></a>
The metric dimensions that you want to be used for the metric that the alarm will watch\.  
_Required_: No  
_Type_: List of [Dimension](aws-properties-cw-dimension.md)  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricName` <a name="cfn-cloudwatch-alarm-metric-metricname"></a>
The name of the metric that you want the alarm to watch\. This is a required field\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Namespace` <a name="cfn-cloudwatch-alarm-metric-namespace"></a>
The namespace of the metric that the alarm will watch\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[^:].*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
