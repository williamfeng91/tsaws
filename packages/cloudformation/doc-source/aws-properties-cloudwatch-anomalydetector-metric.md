# AWS::CloudWatch::AnomalyDetector Metric<a name="aws-properties-cloudwatch-anomalydetector-metric"></a>

Represents a specific metric\.

## Syntax<a name="aws-properties-cloudwatch-anomalydetector-metric-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudwatch-anomalydetector-metric-syntax.json"></a>

```
{
  "[Dimensions](#cfn-cloudwatch-anomalydetector-metric-dimensions)" : [ Dimension, ... ],
  "[MetricName](#cfn-cloudwatch-anomalydetector-metric-metricname)" : String,
  "[Namespace](#cfn-cloudwatch-anomalydetector-metric-namespace)" : String
}
```

### YAML<a name="aws-properties-cloudwatch-anomalydetector-metric-syntax.yaml"></a>

```
  [Dimensions](#cfn-cloudwatch-anomalydetector-metric-dimensions):
    - Dimension
  [MetricName](#cfn-cloudwatch-anomalydetector-metric-metricname): String
  [Namespace](#cfn-cloudwatch-anomalydetector-metric-namespace): String
```

## Properties<a name="aws-properties-cloudwatch-anomalydetector-metric-properties"></a>

`Dimensions` <a name="cfn-cloudwatch-anomalydetector-metric-dimensions"></a>
The dimensions for the metric\.  
_Required_: No  
_Type_: List of [Dimension](aws-properties-cloudwatch-anomalydetector-dimension.md)  
_Maximum_: `30`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`MetricName` <a name="cfn-cloudwatch-anomalydetector-metric-metricname"></a>
The name of the metric\. This is a required field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Namespace` <a name="cfn-cloudwatch-anomalydetector-metric-namespace"></a>
The namespace of the metric\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[^:].*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
