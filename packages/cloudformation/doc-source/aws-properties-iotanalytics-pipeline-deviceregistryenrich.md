# AWS::IoTAnalytics::Pipeline DeviceRegistryEnrich<a name="aws-properties-iotanalytics-pipeline-deviceregistryenrich"></a>

An activity that adds data from the AWS IoT device registry to your message\.

## Syntax<a name="aws-properties-iotanalytics-pipeline-deviceregistryenrich-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-pipeline-deviceregistryenrich-syntax.json"></a>

```
{
  "[Attribute](#cfn-iotanalytics-pipeline-deviceregistryenrich-attribute)" : String,
  "[Name](#cfn-iotanalytics-pipeline-deviceregistryenrich-name)" : String,
  "[Next](#cfn-iotanalytics-pipeline-deviceregistryenrich-next)" : String,
  "[RoleArn](#cfn-iotanalytics-pipeline-deviceregistryenrich-rolearn)" : String,
  "[ThingName](#cfn-iotanalytics-pipeline-deviceregistryenrich-thingname)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-pipeline-deviceregistryenrich-syntax.yaml"></a>

```
  [Attribute](#cfn-iotanalytics-pipeline-deviceregistryenrich-attribute): String
  [Name](#cfn-iotanalytics-pipeline-deviceregistryenrich-name): String
  [Next](#cfn-iotanalytics-pipeline-deviceregistryenrich-next): String
  [RoleArn](#cfn-iotanalytics-pipeline-deviceregistryenrich-rolearn): String
  [ThingName](#cfn-iotanalytics-pipeline-deviceregistryenrich-thingname): String
```

## Properties<a name="aws-properties-iotanalytics-pipeline-deviceregistryenrich-properties"></a>

`Attribute` <a name="cfn-iotanalytics-pipeline-deviceregistryenrich-attribute"></a>
The name of the attribute that is added to the message\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotanalytics-pipeline-deviceregistryenrich-name"></a>
The name of the 'deviceRegistryEnrich' activity\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Next` <a name="cfn-iotanalytics-pipeline-deviceregistryenrich-next"></a>
The next activity in the pipeline\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-iotanalytics-pipeline-deviceregistryenrich-rolearn"></a>
The ARN of the role that allows access to the device's registry information\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThingName` <a name="cfn-iotanalytics-pipeline-deviceregistryenrich-thingname"></a>
The name of the IoT device whose registry information is added to the message\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
