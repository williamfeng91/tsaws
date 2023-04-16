# AWS::SageMaker::MonitoringSchedule BaselineConfig<a name="aws-properties-sagemaker-monitoringschedule-baselineconfig"></a>

Baseline configuration used to validate that the data conforms to the specified constraints and statistics\.

## Syntax<a name="aws-properties-sagemaker-monitoringschedule-baselineconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-monitoringschedule-baselineconfig-syntax.json"></a>

```
{
  "[ConstraintsResource](#cfn-sagemaker-monitoringschedule-baselineconfig-constraintsresource)" : ConstraintsResource,
  "[StatisticsResource](#cfn-sagemaker-monitoringschedule-baselineconfig-statisticsresource)" : StatisticsResource
}
```

### YAML<a name="aws-properties-sagemaker-monitoringschedule-baselineconfig-syntax.yaml"></a>

```
  [ConstraintsResource](#cfn-sagemaker-monitoringschedule-baselineconfig-constraintsresource):
    ConstraintsResource
  [StatisticsResource](#cfn-sagemaker-monitoringschedule-baselineconfig-statisticsresource):
    StatisticsResource
```

## Properties<a name="aws-properties-sagemaker-monitoringschedule-baselineconfig-properties"></a>

`ConstraintsResource` <a name="cfn-sagemaker-monitoringschedule-baselineconfig-constraintsresource"></a>
The Amazon S3 URI for the constraints resource\.  
_Required_: No  
_Type_: [ConstraintsResource](aws-properties-sagemaker-monitoringschedule-constraintsresource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StatisticsResource` <a name="cfn-sagemaker-monitoringschedule-baselineconfig-statisticsresource"></a>
The baseline statistics file in Amazon S3 that the current monitoring job should be validated against\.  
_Required_: No  
_Type_: [StatisticsResource](aws-properties-sagemaker-monitoringschedule-statisticsresource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
