# AWS::IoTAnalytics::Dataset Action<a name="aws-properties-iotanalytics-dataset-action"></a>

Information needed to run the "containerAction" to produce data set contents\.

## Syntax<a name="aws-properties-iotanalytics-dataset-action-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-dataset-action-syntax.json"></a>

```
{
  "[ActionName](#cfn-iotanalytics-dataset-action-actionname)" : String,
  "[ContainerAction](#cfn-iotanalytics-dataset-action-containeraction)" : ContainerAction,
  "[QueryAction](#cfn-iotanalytics-dataset-action-queryaction)" : QueryAction
}
```

### YAML<a name="aws-properties-iotanalytics-dataset-action-syntax.yaml"></a>

```
  [ActionName](#cfn-iotanalytics-dataset-action-actionname): String
  [ContainerAction](#cfn-iotanalytics-dataset-action-containeraction):
    ContainerAction
  [QueryAction](#cfn-iotanalytics-dataset-action-queryaction):
    QueryAction
```

## Properties<a name="aws-properties-iotanalytics-dataset-action-properties"></a>

`ActionName` <a name="cfn-iotanalytics-dataset-action-actionname"></a>
The name of the data set action by which data set contents are automatically created\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `^[a-zA-Z0-9_]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContainerAction` <a name="cfn-iotanalytics-dataset-action-containeraction"></a>
Information which allows the system to run a containerized application in order to create the data set contents\. The application must be in a Docker container along with any needed support libraries\.  
_Required_: No  
_Type_: [ContainerAction](aws-properties-iotanalytics-dataset-containeraction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueryAction` <a name="cfn-iotanalytics-dataset-action-queryaction"></a>
An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents\.  
_Required_: No  
_Type_: [QueryAction](aws-properties-iotanalytics-dataset-queryaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
