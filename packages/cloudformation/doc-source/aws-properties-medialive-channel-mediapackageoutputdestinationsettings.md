# AWS::MediaLive::Channel MediaPackageOutputDestinationSettings<a name="aws-properties-medialive-channel-mediapackageoutputdestinationsettings"></a>

Destination settings for a MediaPackage output\.

The parent of this entity is OutputDestination\.

## Syntax<a name="aws-properties-medialive-channel-mediapackageoutputdestinationsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-mediapackageoutputdestinationsettings-syntax.json"></a>

```
{
  "[ChannelId](#cfn-medialive-channel-mediapackageoutputdestinationsettings-channelid)" : String
}
```

### YAML<a name="aws-properties-medialive-channel-mediapackageoutputdestinationsettings-syntax.yaml"></a>

```
  [ChannelId](#cfn-medialive-channel-mediapackageoutputdestinationsettings-channelid): String
```

## Properties<a name="aws-properties-medialive-channel-mediapackageoutputdestinationsettings-properties"></a>

`ChannelId` <a name="cfn-medialive-channel-mediapackageoutputdestinationsettings-channelid"></a>
The ID of the channel in MediaPackage that is the destination for this output group\. You don't need to specify the individual inputs in MediaPackage; MediaLive handles the connection of the two MediaLive pipelines to the two MediaPackage inputs\. The MediaPackage channel and MediaLive channel must be in the same Region\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
