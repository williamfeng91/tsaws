# AWS::IoTAnalytics::Pipeline SelectAttributes<a name="aws-properties-iotanalytics-pipeline-selectattributes"></a>

Creates a new message using only the specified attributes from the original message\.

## Syntax<a name="aws-properties-iotanalytics-pipeline-selectattributes-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-pipeline-selectattributes-syntax.json"></a>

```
{
  "[Attributes](#cfn-iotanalytics-pipeline-selectattributes-attributes)" : [ String, ... ],
  "[Name](#cfn-iotanalytics-pipeline-selectattributes-name)" : String,
  "[Next](#cfn-iotanalytics-pipeline-selectattributes-next)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-pipeline-selectattributes-syntax.yaml"></a>

```
  [Attributes](#cfn-iotanalytics-pipeline-selectattributes-attributes):
    - String
  [Name](#cfn-iotanalytics-pipeline-selectattributes-name): String
  [Next](#cfn-iotanalytics-pipeline-selectattributes-next): String
```

## Properties<a name="aws-properties-iotanalytics-pipeline-selectattributes-properties"></a>

`Attributes` <a name="cfn-iotanalytics-pipeline-selectattributes-attributes"></a>
A list of the attributes to select from the message\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotanalytics-pipeline-selectattributes-name"></a>
The name of the 'selectAttributes' activity\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Next` <a name="cfn-iotanalytics-pipeline-selectattributes-next"></a>
The next activity in the pipeline\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
