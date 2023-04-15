# AWS::IoTAnalytics::Dataset ContainerAction<a name="aws-properties-iotanalytics-dataset-containeraction"></a>

Information needed to run the "containerAction" to produce data set contents\.

## Syntax<a name="aws-properties-iotanalytics-dataset-containeraction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-dataset-containeraction-syntax.json"></a>

```
{
  "[ExecutionRoleArn](#cfn-iotanalytics-dataset-containeraction-executionrolearn)" : String,
  "[Image](#cfn-iotanalytics-dataset-containeraction-image)" : String,
  "[ResourceConfiguration](#cfn-iotanalytics-dataset-containeraction-resourceconfiguration)" : ResourceConfiguration,
  "[Variables](#cfn-iotanalytics-dataset-containeraction-variables)" : [ Variable, ... ]
}
```

### YAML<a name="aws-properties-iotanalytics-dataset-containeraction-syntax.yaml"></a>

```
  [ExecutionRoleArn](#cfn-iotanalytics-dataset-containeraction-executionrolearn): String
  [Image](#cfn-iotanalytics-dataset-containeraction-image): String
  [ResourceConfiguration](#cfn-iotanalytics-dataset-containeraction-resourceconfiguration):
    ResourceConfiguration
  [Variables](#cfn-iotanalytics-dataset-containeraction-variables):
    - Variable
```

## Properties<a name="aws-properties-iotanalytics-dataset-containeraction-properties"></a>

`ExecutionRoleArn` <a name="cfn-iotanalytics-dataset-containeraction-executionrolearn"></a>
The ARN of the role which gives permission to the system to access needed resources in order to run the "containerAction"\. This includes, at minimum, permission to retrieve the data set contents which are the input to the containerized application\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Image` <a name="cfn-iotanalytics-dataset-containeraction-image"></a>
The ARN of the Docker container stored in your account\. The Docker container contains an application and needed support libraries and is used to generate data set contents\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceConfiguration` <a name="cfn-iotanalytics-dataset-containeraction-resourceconfiguration"></a>
Configuration of the resource which executes the "containerAction"\.  
_Required_: Yes  
_Type_: [ResourceConfiguration](aws-properties-iotanalytics-dataset-resourceconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Variables` <a name="cfn-iotanalytics-dataset-containeraction-variables"></a>
The values of variables used within the context of the execution of the containerized application \(basically, parameters passed to the application\)\. Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue"\.  
_Required_: No  
_Type_: List of [Variable](aws-properties-iotanalytics-dataset-variable.md)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)