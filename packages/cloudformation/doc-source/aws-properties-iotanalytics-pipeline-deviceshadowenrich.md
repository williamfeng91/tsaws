# AWS::IoTAnalytics::Pipeline DeviceShadowEnrich<a name="aws-properties-iotanalytics-pipeline-deviceshadowenrich"></a>

An activity that adds information from the AWS IoT Device Shadows service to a message\.

## Syntax<a name="aws-properties-iotanalytics-pipeline-deviceshadowenrich-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-pipeline-deviceshadowenrich-syntax.json"></a>

```
{
  "[Attribute](#cfn-iotanalytics-pipeline-deviceshadowenrich-attribute)" : String,
  "[Name](#cfn-iotanalytics-pipeline-deviceshadowenrich-name)" : String,
  "[Next](#cfn-iotanalytics-pipeline-deviceshadowenrich-next)" : String,
  "[RoleArn](#cfn-iotanalytics-pipeline-deviceshadowenrich-rolearn)" : String,
  "[ThingName](#cfn-iotanalytics-pipeline-deviceshadowenrich-thingname)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-pipeline-deviceshadowenrich-syntax.yaml"></a>

```
  [Attribute](#cfn-iotanalytics-pipeline-deviceshadowenrich-attribute): String
  [Name](#cfn-iotanalytics-pipeline-deviceshadowenrich-name): String
  [Next](#cfn-iotanalytics-pipeline-deviceshadowenrich-next): String
  [RoleArn](#cfn-iotanalytics-pipeline-deviceshadowenrich-rolearn): String
  [ThingName](#cfn-iotanalytics-pipeline-deviceshadowenrich-thingname): String
```

## Properties<a name="aws-properties-iotanalytics-pipeline-deviceshadowenrich-properties"></a>

`Attribute` <a name="cfn-iotanalytics-pipeline-deviceshadowenrich-attribute"></a>
The name of the attribute that is added to the message\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotanalytics-pipeline-deviceshadowenrich-name"></a>
The name of the 'deviceShadowEnrich' activity\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Next` <a name="cfn-iotanalytics-pipeline-deviceshadowenrich-next"></a>
The next activity in the pipeline\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-iotanalytics-pipeline-deviceshadowenrich-rolearn"></a>
The ARN of the role that allows access to the device's shadow\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThingName` <a name="cfn-iotanalytics-pipeline-deviceshadowenrich-thingname"></a>
The name of the IoT device whose shadow information is added to the message\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
