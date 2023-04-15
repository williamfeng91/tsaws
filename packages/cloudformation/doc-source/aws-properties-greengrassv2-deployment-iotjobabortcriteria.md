# AWS::GreengrassV2::Deployment IoTJobAbortCriteria<a name="aws-properties-greengrassv2-deployment-iotjobabortcriteria"></a>

Contains criteria that define when and how to cancel a job\.

The deployment stops if the following conditions are true:

1. The number of things that receive the deployment exceeds the `minNumberOfExecutedThings`\.

1. The percentage of failures with type `failureType` exceeds the `thresholdPercentage`\.

## Syntax<a name="aws-properties-greengrassv2-deployment-iotjobabortcriteria-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-greengrassv2-deployment-iotjobabortcriteria-syntax.json"></a>

```
{
  "[Action](#cfn-greengrassv2-deployment-iotjobabortcriteria-action)" : String,
  "[FailureType](#cfn-greengrassv2-deployment-iotjobabortcriteria-failuretype)" : String,
  "[MinNumberOfExecutedThings](#cfn-greengrassv2-deployment-iotjobabortcriteria-minnumberofexecutedthings)" : Integer,
  "[ThresholdPercentage](#cfn-greengrassv2-deployment-iotjobabortcriteria-thresholdpercentage)" : Double
}
```

### YAML<a name="aws-properties-greengrassv2-deployment-iotjobabortcriteria-syntax.yaml"></a>

```
  [Action](#cfn-greengrassv2-deployment-iotjobabortcriteria-action): String
  [FailureType](#cfn-greengrassv2-deployment-iotjobabortcriteria-failuretype): String
  [MinNumberOfExecutedThings](#cfn-greengrassv2-deployment-iotjobabortcriteria-minnumberofexecutedthings): Integer
  [ThresholdPercentage](#cfn-greengrassv2-deployment-iotjobabortcriteria-thresholdpercentage): Double
```

## Properties<a name="aws-properties-greengrassv2-deployment-iotjobabortcriteria-properties"></a>

`Action` <a name="cfn-greengrassv2-deployment-iotjobabortcriteria-action"></a>
The action to perform when the criteria are met\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`FailureType` <a name="cfn-greengrassv2-deployment-iotjobabortcriteria-failuretype"></a>
The type of job deployment failure that can cancel a job\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`MinNumberOfExecutedThings` <a name="cfn-greengrassv2-deployment-iotjobabortcriteria-minnumberofexecutedthings"></a>
The minimum number of things that receive the configuration before the job can cancel\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ThresholdPercentage` <a name="cfn-greengrassv2-deployment-iotjobabortcriteria-thresholdpercentage"></a>
The minimum percentage of `failureType` failures that occur before the job can cancel\.  
This parameter supports up to two digits after the decimal \(for example, you can specify `10.9` or `10.99`, but not `10.999`\)\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
