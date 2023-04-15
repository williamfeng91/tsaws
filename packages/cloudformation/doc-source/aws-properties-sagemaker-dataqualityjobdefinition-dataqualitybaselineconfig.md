# AWS::SageMaker::DataQualityJobDefinition DataQualityBaselineConfig<a name="aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig"></a>

Configuration for monitoring constraints and monitoring statistics\. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically\.

## Syntax<a name="aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-syntax.json"></a>

```
{
  "[BaseliningJobName](#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-baseliningjobname)" : String,
  "[ConstraintsResource](#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-constraintsresource)" : ConstraintsResource,
  "[StatisticsResource](#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-statisticsresource)" : StatisticsResource
}
```

### YAML<a name="aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-syntax.yaml"></a>

```
  [BaseliningJobName](#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-baseliningjobname): String
  [ConstraintsResource](#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-constraintsresource):
    ConstraintsResource
  [StatisticsResource](#cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-statisticsresource):
    StatisticsResource
```

## Properties<a name="aws-properties-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-properties"></a>

`BaseliningJobName` <a name="cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-baseliningjobname"></a>
The name of the job that performs baselining for the data quality monitoring job\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ConstraintsResource` <a name="cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-constraintsresource"></a>
The constraints resource for a monitoring job\.  
_Required_: No  
_Type_: [ConstraintsResource](aws-properties-sagemaker-dataqualityjobdefinition-constraintsresource.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`StatisticsResource` <a name="cfn-sagemaker-dataqualityjobdefinition-dataqualitybaselineconfig-statisticsresource"></a>
Configuration for monitoring constraints and monitoring statistics\. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically\.  
_Required_: No  
_Type_: [StatisticsResource](aws-properties-sagemaker-dataqualityjobdefinition-statisticsresource.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
