# AWS::IoTAnalytics::Pipeline Filter<a name="aws-properties-iotanalytics-pipeline-filter"></a>

An activity that filters a message based on its attributes\.

## Syntax<a name="aws-properties-iotanalytics-pipeline-filter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-pipeline-filter-syntax.json"></a>

```
{
  "[Filter](#cfn-iotanalytics-pipeline-filter-filter)" : String,
  "[Name](#cfn-iotanalytics-pipeline-filter-name)" : String,
  "[Next](#cfn-iotanalytics-pipeline-filter-next)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-pipeline-filter-syntax.yaml"></a>

```
  [Filter](#cfn-iotanalytics-pipeline-filter-filter): String
  [Name](#cfn-iotanalytics-pipeline-filter-name): String
  [Next](#cfn-iotanalytics-pipeline-filter-next): String
```

## Properties<a name="aws-properties-iotanalytics-pipeline-filter-properties"></a>

`Filter` <a name="cfn-iotanalytics-pipeline-filter-filter"></a>
An expression that looks like an SQL WHERE clause that must return a Boolean value\.  
_Required_: Yes  
_Type_: [String](#aws-properties-iotanalytics-pipeline-filter)  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotanalytics-pipeline-filter-name"></a>
The name of the 'filter' activity\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Next` <a name="cfn-iotanalytics-pipeline-filter-next"></a>
The next activity in the pipeline\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
