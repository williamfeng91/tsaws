# AWS::QuickSight::Analysis LineSeriesAxisDisplayOptions<a name="aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions"></a>

The series axis configuration of a line chart\.

## Syntax<a name="aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions-syntax.json"></a>

```
{
  "[AxisOptions](#cfn-quicksight-analysis-lineseriesaxisdisplayoptions-axisoptions)" : AxisDisplayOptions,
  "[MissingDataConfigurations](#cfn-quicksight-analysis-lineseriesaxisdisplayoptions-missingdataconfigurations)" : [ MissingDataConfiguration, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions-syntax.yaml"></a>

```
  [AxisOptions](#cfn-quicksight-analysis-lineseriesaxisdisplayoptions-axisoptions):
    AxisDisplayOptions
  [MissingDataConfigurations](#cfn-quicksight-analysis-lineseriesaxisdisplayoptions-missingdataconfigurations):
    - MissingDataConfiguration
```

## Properties<a name="aws-properties-quicksight-analysis-lineseriesaxisdisplayoptions-properties"></a>

`AxisOptions` <a name="cfn-quicksight-analysis-lineseriesaxisdisplayoptions-axisoptions"></a>
The options that determine the presentation of the line series axis\.  
_Required_: No  
_Type_: [AxisDisplayOptions](aws-properties-quicksight-analysis-axisdisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MissingDataConfigurations` <a name="cfn-quicksight-analysis-lineseriesaxisdisplayoptions-missingdataconfigurations"></a>
The configuration options that determine how missing data is treated during the rendering of a line chart\.  
_Required_: No  
_Type_: List of [MissingDataConfiguration](aws-properties-quicksight-analysis-missingdataconfiguration.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
