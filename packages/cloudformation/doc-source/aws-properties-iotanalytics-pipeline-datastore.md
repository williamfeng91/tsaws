# AWS::IoTAnalytics::Pipeline Datastore<a name="aws-properties-iotanalytics-pipeline-datastore"></a>

The datastore activity that specifies where to store the processed data\.

## Syntax<a name="aws-properties-iotanalytics-pipeline-datastore-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-pipeline-datastore-syntax.json"></a>

```
{
  "[DatastoreName](#cfn-iotanalytics-pipeline-datastore-datastorename)" : String,
  "[Name](#cfn-iotanalytics-pipeline-datastore-name)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-pipeline-datastore-syntax.yaml"></a>

```
  [DatastoreName](#cfn-iotanalytics-pipeline-datastore-datastorename): String
  [Name](#cfn-iotanalytics-pipeline-datastore-name): String
```

## Properties<a name="aws-properties-iotanalytics-pipeline-datastore-properties"></a>

`DatastoreName` <a name="cfn-iotanalytics-pipeline-datastore-datastorename"></a>
The name of the data store where processed messages are stored\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotanalytics-pipeline-datastore-name"></a>
The name of the datastore activity\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
