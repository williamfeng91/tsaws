# AWS::IoTAnalytics::Channel<a name="aws-resource-iotanalytics-channel"></a>

The AWS::IoTAnalytics::Channel resource collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline\. For more information, see [ How to Use AWS IoT Analytics](https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how) in the _AWS IoT Analytics User Guide_\.

## Syntax<a name="aws-resource-iotanalytics-channel-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iotanalytics-channel-syntax.json"></a>

```
{
  "Type" : "AWS::IoTAnalytics::Channel",
  "Properties" : {
      "[ChannelName](#cfn-iotanalytics-channel-channelname)" : String,
      "[ChannelStorage](#cfn-iotanalytics-channel-channelstorage)" : ChannelStorage,
      "[RetentionPeriod](#cfn-iotanalytics-channel-retentionperiod)" : RetentionPeriod,
      "[Tags](#cfn-iotanalytics-channel-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-iotanalytics-channel-syntax.yaml"></a>

```
Type: AWS::IoTAnalytics::Channel
Properties:
  [ChannelName](#cfn-iotanalytics-channel-channelname): String
  [ChannelStorage](#cfn-iotanalytics-channel-channelstorage):
    ChannelStorage
  [RetentionPeriod](#cfn-iotanalytics-channel-retentionperiod):
    RetentionPeriod
  [Tags](#cfn-iotanalytics-channel-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-iotanalytics-channel-properties"></a>

`ChannelName` <a name="cfn-iotanalytics-channel-channelname"></a>
The name of the channel\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ChannelStorage` <a name="cfn-iotanalytics-channel-channelstorage"></a>
Where channel data is stored\.  
_Required_: No  
_Type_: [ChannelStorage](aws-properties-iotanalytics-channel-channelstorage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RetentionPeriod` <a name="cfn-iotanalytics-channel-retentionperiod"></a>
How long, in days, message data is kept for the channel\.  
_Required_: No  
_Type_: [RetentionPeriod](aws-properties-iotanalytics-channel-retentionperiod.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-iotanalytics-channel-tags"></a>
Metadata which can be used to manage the channel\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Examples<a name="aws-resource-iotanalytics-channel--examples"></a>

### Simple Channel<a name="aws-resource-iotanalytics-channel--examples--Simple_Channel"></a>

The following example creates a simple channel that uses service\-managed channel storage\.

#### JSON<a name="aws-resource-iotanalytics-channel--examples--Simple_Channel--json"></a>

```
{
    "Description": "Create a simple Channel",
    "Resources": {
        "Channel": {
            "Type": "AWS::IoTAnalytics::Channel",
            "Properties": {
                "ChannelName": "SimpleChannel"
            }
        }
    }
}
```

#### YAML<a name="aws-resource-iotanalytics-channel--examples--Simple_Channel--yaml"></a>

```
---
Description: "Create a simple Channel"
Resources:
  Channel:
    Type: "AWS::IoTAnalytics::Channel"
    Properties:
      ChannelName: "SimpleChannel"
```

### Complex Channel<a name="aws-resource-iotanalytics-channel--examples--Complex_Channel"></a>

The following example creates a complex channel\.

#### JSON<a name="aws-resource-iotanalytics-channel--examples--Complex_Channel--json"></a>

```
{
    "Description": "Create a complex channel",
    "Resources": {
        "Channel": {
            "Type": "AWS::IoTAnalytics::Channel",
            "Properties": {
                "ChannelName": "ComplexChannel",
                "RetentionPeriod": {
                    "Unlimited": false,
                    "NumberOfDays": 10
                },
                "Tags": [
                    {
                        "Key": "keyname1",
                        "Value": "value1"
                    },
                    {
                        "Key": "keyname2",
                        "Value": "value2"
                    }
                ]
            }
        }
    }
}
```

#### YAML<a name="aws-resource-iotanalytics-channel--examples--Complex_Channel--yaml"></a>

```
---
Description: "Create a complex channel"
Resources:
  Channel:
    Type: "AWS::IoTAnalytics::Channel"
    Properties:
      ChannelName: "ComplexChannel"
      RetentionPeriod:
        Unlimited: false
        NumberOfDays: 10
      Tags:
        -
          Key: "keyname1"
          Value: "value1"
        -
          Key: "keyname2"
          Value: "value2"
```

## See also<a name="aws-resource-iotanalytics-channel--seealso"></a>

- [How to Use AWS IoT Analytics](https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how) in the _AWS IoT Analytics User Guide_
- [CreateChannel](https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateChannel.html) in the _AWS IoT Analytics API Reference_
