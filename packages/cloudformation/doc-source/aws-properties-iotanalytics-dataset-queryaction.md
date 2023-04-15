# AWS::IoTAnalytics::Dataset QueryAction<a name="aws-properties-iotanalytics-dataset-queryaction"></a>

An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents\.

## Syntax<a name="aws-properties-iotanalytics-dataset-queryaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-dataset-queryaction-syntax.json"></a>

```
{
  "[Filters](#cfn-iotanalytics-dataset-queryaction-filters)" : [ Filter, ... ],
  "[SqlQuery](#cfn-iotanalytics-dataset-queryaction-sqlquery)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-dataset-queryaction-syntax.yaml"></a>

```
  [Filters](#cfn-iotanalytics-dataset-queryaction-filters):
    - Filter
  [SqlQuery](#cfn-iotanalytics-dataset-queryaction-sqlquery): String
```

## Properties<a name="aws-properties-iotanalytics-dataset-queryaction-properties"></a>

`Filters` <a name="cfn-iotanalytics-dataset-queryaction-filters"></a>
Pre\-filters applied to message data\.  
_Required_: No  
_Type_: List of [Filter](aws-properties-iotanalytics-dataset-filter.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SqlQuery` <a name="cfn-iotanalytics-dataset-queryaction-sqlquery"></a>
An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
