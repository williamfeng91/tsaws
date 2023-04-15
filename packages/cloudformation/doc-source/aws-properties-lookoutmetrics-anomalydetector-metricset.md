# AWS::LookoutMetrics::AnomalyDetector MetricSet<a name="aws-properties-lookoutmetrics-anomalydetector-metricset"></a>

Contains information about a dataset\.

## Syntax<a name="aws-properties-lookoutmetrics-anomalydetector-metricset-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lookoutmetrics-anomalydetector-metricset-syntax.json"></a>

```
{
  "[DimensionList](#cfn-lookoutmetrics-anomalydetector-metricset-dimensionlist)" : [ String, ... ],
  "[MetricList](#cfn-lookoutmetrics-anomalydetector-metricset-metriclist)" : [ Metric, ... ],
  "[MetricSetDescription](#cfn-lookoutmetrics-anomalydetector-metricset-metricsetdescription)" : String,
  "[MetricSetFrequency](#cfn-lookoutmetrics-anomalydetector-metricset-metricsetfrequency)" : String,
  "[MetricSetName](#cfn-lookoutmetrics-anomalydetector-metricset-metricsetname)" : String,
  "[MetricSource](#cfn-lookoutmetrics-anomalydetector-metricset-metricsource)" : MetricSource,
  "[Offset](#cfn-lookoutmetrics-anomalydetector-metricset-offset)" : Integer,
  "[TimestampColumn](#cfn-lookoutmetrics-anomalydetector-metricset-timestampcolumn)" : TimestampColumn,
  "[Timezone](#cfn-lookoutmetrics-anomalydetector-metricset-timezone)" : String
}
```

### YAML<a name="aws-properties-lookoutmetrics-anomalydetector-metricset-syntax.yaml"></a>

```
  [DimensionList](#cfn-lookoutmetrics-anomalydetector-metricset-dimensionlist):
    - String
  [MetricList](#cfn-lookoutmetrics-anomalydetector-metricset-metriclist):
    - Metric
  [MetricSetDescription](#cfn-lookoutmetrics-anomalydetector-metricset-metricsetdescription): String
  [MetricSetFrequency](#cfn-lookoutmetrics-anomalydetector-metricset-metricsetfrequency): String
  [MetricSetName](#cfn-lookoutmetrics-anomalydetector-metricset-metricsetname): String
  [MetricSource](#cfn-lookoutmetrics-anomalydetector-metricset-metricsource):
    MetricSource
  [Offset](#cfn-lookoutmetrics-anomalydetector-metricset-offset): Integer
  [TimestampColumn](#cfn-lookoutmetrics-anomalydetector-metricset-timestampcolumn):
    TimestampColumn
  [Timezone](#cfn-lookoutmetrics-anomalydetector-metricset-timezone): String
```

## Properties<a name="aws-properties-lookoutmetrics-anomalydetector-metricset-properties"></a>

`DimensionList` <a name="cfn-lookoutmetrics-anomalydetector-metricset-dimensionlist"></a>
A list of the fields you want to treat as dimensions\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricList` <a name="cfn-lookoutmetrics-anomalydetector-metricset-metriclist"></a>
A list of metrics that the dataset will contain\.  
_Required_: Yes  
_Type_: List of [Metric](aws-properties-lookoutmetrics-anomalydetector-metric.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricSetDescription` <a name="cfn-lookoutmetrics-anomalydetector-metricset-metricsetdescription"></a>
A description of the dataset you are creating\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricSetFrequency` <a name="cfn-lookoutmetrics-anomalydetector-metricset-metricsetfrequency"></a>
The frequency with which the source data will be analyzed for anomalies\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricSetName` <a name="cfn-lookoutmetrics-anomalydetector-metricset-metricsetname"></a>
The name of the dataset\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricSource` <a name="cfn-lookoutmetrics-anomalydetector-metricset-metricsource"></a>
Contains information about how the source data should be interpreted\.  
_Required_: Yes  
_Type_: [MetricSource](aws-properties-lookoutmetrics-anomalydetector-metricsource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Offset` <a name="cfn-lookoutmetrics-anomalydetector-metricset-offset"></a>
After an interval ends, the amount of seconds that the detector waits before importing data\. Offset is only supported for S3, Redshift, Athena and datasources\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimestampColumn` <a name="cfn-lookoutmetrics-anomalydetector-metricset-timestampcolumn"></a>
Contains information about the column used for tracking time in your source data\.  
_Required_: No  
_Type_: [TimestampColumn](aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timezone` <a name="cfn-lookoutmetrics-anomalydetector-metricset-timezone"></a>
The time zone in which your source data was recorded\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
