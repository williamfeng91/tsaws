# AWS::IoTAnalytics::Pipeline Channel<a name="aws-properties-iotanalytics-pipeline-channel"></a>

Determines the source of the messages to be processed\.

## Syntax<a name="aws-properties-iotanalytics-pipeline-channel-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-pipeline-channel-syntax.json"></a>

```
{
  "[ChannelName](#cfn-iotanalytics-pipeline-channel-channelname)" : String,
  "[Name](#cfn-iotanalytics-pipeline-channel-name)" : String,
  "[Next](#cfn-iotanalytics-pipeline-channel-next)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-pipeline-channel-syntax.yaml"></a>

```
  [ChannelName](#cfn-iotanalytics-pipeline-channel-channelname): String
  [Name](#cfn-iotanalytics-pipeline-channel-name): String
  [Next](#cfn-iotanalytics-pipeline-channel-next): String
```

## Properties<a name="aws-properties-iotanalytics-pipeline-channel-properties"></a>

`ChannelName` <a name="cfn-iotanalytics-pipeline-channel-channelname"></a>
The name of the channel from which the messages are processed\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotanalytics-pipeline-channel-name"></a>
The name of the 'channel' activity\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Next` <a name="cfn-iotanalytics-pipeline-channel-next"></a>
The next activity in the pipeline\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
