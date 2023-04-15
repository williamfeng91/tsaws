# AWS::CloudWatch::AnomalyDetector SingleMetricAnomalyDetector<a name="aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector"></a>

Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input\.

## Syntax<a name="aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector-syntax.json"></a>

```
{
  "[Dimensions](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-dimensions)" : [ Dimension, ... ],
  "[MetricName](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-metricname)" : String,
  "[Namespace](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-namespace)" : String,
  "[Stat](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-stat)" : String
}
```

### YAML<a name="aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector-syntax.yaml"></a>

```
  [Dimensions](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-dimensions):
    - Dimension
  [MetricName](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-metricname): String
  [Namespace](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-namespace): String
  [Stat](#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-stat): String
```

## Properties<a name="aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector-properties"></a>

`Dimensions` <a name="cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-dimensions"></a>
The metric dimensions to create the anomaly detection model for\.  
_Required_: No  
_Type_: List of [Dimension](aws-properties-cloudwatch-anomalydetector-dimension.md)  
_Maximum_: `30`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`MetricName` <a name="cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-metricname"></a>
The name of the metric to create the anomaly detection model for\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Namespace` <a name="cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-namespace"></a>
The namespace of the metric to create the anomaly detection model for\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[^:].*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Stat` <a name="cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-stat"></a>
The statistic to use for the metric and anomaly detection model\.  
_Required_: No  
_Type_: String  
_Maximum_: `50`  
_Pattern_: `(SampleCount|Average|Sum|Minimum|Maximum|IQM|(p|tc|tm|ts|wm)(\d{1,2}(\.\d{0,10})?|100)|[ou]\d+(\.\d*)?)(_E|_L|_H)?|(TM|TC|TS|WM)\(((((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?:((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%|((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%:(((\d{1,2})(\.\d{0,10})?|100(\.0{0,10})?)%)?)\)|(TM|TC|TS|WM|PR)\(((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)):((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?|((\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))?:(\d+(\.\d{0,10})?|(\d+(\.\d{0,10})?[Ee][+-]?\d+)))\)`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
