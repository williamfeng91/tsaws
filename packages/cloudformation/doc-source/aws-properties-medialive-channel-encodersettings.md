# AWS::MediaLive::Channel EncoderSettings<a name="aws-properties-medialive-channel-encodersettings"></a>

The settings for the encoding of outputs\.

This entity is at the top level in the channel\.

## Syntax<a name="aws-properties-medialive-channel-encodersettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-encodersettings-syntax.json"></a>

```
{
  "[AudioDescriptions](#cfn-medialive-channel-encodersettings-audiodescriptions)" : [ AudioDescription, ... ],
  "[AvailBlanking](#cfn-medialive-channel-encodersettings-availblanking)" : AvailBlanking,
  "[AvailConfiguration](#cfn-medialive-channel-encodersettings-availconfiguration)" : AvailConfiguration,
  "[BlackoutSlate](#cfn-medialive-channel-encodersettings-blackoutslate)" : BlackoutSlate,
  "[CaptionDescriptions](#cfn-medialive-channel-encodersettings-captiondescriptions)" : [ CaptionDescription, ... ],
  "[FeatureActivations](#cfn-medialive-channel-encodersettings-featureactivations)" : FeatureActivations,
  "[GlobalConfiguration](#cfn-medialive-channel-encodersettings-globalconfiguration)" : GlobalConfiguration,
  "[MotionGraphicsConfiguration](#cfn-medialive-channel-encodersettings-motiongraphicsconfiguration)" : MotionGraphicsConfiguration,
  "[NielsenConfiguration](#cfn-medialive-channel-encodersettings-nielsenconfiguration)" : NielsenConfiguration,
  "[OutputGroups](#cfn-medialive-channel-encodersettings-outputgroups)" : [ OutputGroup, ... ],
  "[TimecodeConfig](#cfn-medialive-channel-encodersettings-timecodeconfig)" : TimecodeConfig,
  "[VideoDescriptions](#cfn-medialive-channel-encodersettings-videodescriptions)" : [ VideoDescription, ... ]
}
```

### YAML<a name="aws-properties-medialive-channel-encodersettings-syntax.yaml"></a>

```
  [AudioDescriptions](#cfn-medialive-channel-encodersettings-audiodescriptions):
    - AudioDescription
  [AvailBlanking](#cfn-medialive-channel-encodersettings-availblanking):
    AvailBlanking
  [AvailConfiguration](#cfn-medialive-channel-encodersettings-availconfiguration):
    AvailConfiguration
  [BlackoutSlate](#cfn-medialive-channel-encodersettings-blackoutslate):
    BlackoutSlate
  [CaptionDescriptions](#cfn-medialive-channel-encodersettings-captiondescriptions):
    - CaptionDescription
  [FeatureActivations](#cfn-medialive-channel-encodersettings-featureactivations):
    FeatureActivations
  [GlobalConfiguration](#cfn-medialive-channel-encodersettings-globalconfiguration):
    GlobalConfiguration
  [MotionGraphicsConfiguration](#cfn-medialive-channel-encodersettings-motiongraphicsconfiguration):
    MotionGraphicsConfiguration
  [NielsenConfiguration](#cfn-medialive-channel-encodersettings-nielsenconfiguration):
    NielsenConfiguration
  [OutputGroups](#cfn-medialive-channel-encodersettings-outputgroups):
    - OutputGroup
  [TimecodeConfig](#cfn-medialive-channel-encodersettings-timecodeconfig):
    TimecodeConfig
  [VideoDescriptions](#cfn-medialive-channel-encodersettings-videodescriptions):
    - VideoDescription
```

## Properties<a name="aws-properties-medialive-channel-encodersettings-properties"></a>

`AudioDescriptions` <a name="cfn-medialive-channel-encodersettings-audiodescriptions"></a>
The encoding information for output audio\.  
_Required_: No  
_Type_: List of [AudioDescription](aws-properties-medialive-channel-audiodescription.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AvailBlanking` <a name="cfn-medialive-channel-encodersettings-availblanking"></a>
The settings for ad avail blanking\.  
_Required_: No  
_Type_: [AvailBlanking](aws-properties-medialive-channel-availblanking.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AvailConfiguration` <a name="cfn-medialive-channel-encodersettings-availconfiguration"></a>
The configuration settings for the ad avail handling\.  
_Required_: No  
_Type_: [AvailConfiguration](aws-properties-medialive-channel-availconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BlackoutSlate` <a name="cfn-medialive-channel-encodersettings-blackoutslate"></a>
The settings for the blackout slate\.  
_Required_: No  
_Type_: [BlackoutSlate](aws-properties-medialive-channel-blackoutslate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CaptionDescriptions` <a name="cfn-medialive-channel-encodersettings-captiondescriptions"></a>
The encoding information for output captions\.  
_Required_: No  
_Type_: List of [CaptionDescription](aws-properties-medialive-channel-captiondescription.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FeatureActivations` <a name="cfn-medialive-channel-encodersettings-featureactivations"></a>
Settings to enable specific features\.  
_Required_: No  
_Type_: [FeatureActivations](aws-properties-medialive-channel-featureactivations.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GlobalConfiguration` <a name="cfn-medialive-channel-encodersettings-globalconfiguration"></a>
The configuration settings that apply to the entire channel\.  
_Required_: No  
_Type_: [GlobalConfiguration](aws-properties-medialive-channel-globalconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MotionGraphicsConfiguration` <a name="cfn-medialive-channel-encodersettings-motiongraphicsconfiguration"></a>
Settings to enable and configure the motion graphics overlay feature in the channel\.  
_Required_: No  
_Type_: [MotionGraphicsConfiguration](aws-properties-medialive-channel-motiongraphicsconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NielsenConfiguration` <a name="cfn-medialive-channel-encodersettings-nielsenconfiguration"></a>
The settings to configure Nielsen watermarks\.  
_Required_: No  
_Type_: [NielsenConfiguration](aws-properties-medialive-channel-nielsenconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OutputGroups` <a name="cfn-medialive-channel-encodersettings-outputgroups"></a>
The settings for the output groups in the channel\.  
_Required_: No  
_Type_: List of [OutputGroup](aws-properties-medialive-channel-outputgroup.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimecodeConfig` <a name="cfn-medialive-channel-encodersettings-timecodeconfig"></a>
Contains settings used to acquire and adjust timecode information from the inputs\.  
_Required_: No  
_Type_: [TimecodeConfig](aws-properties-medialive-channel-timecodeconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VideoDescriptions` <a name="cfn-medialive-channel-encodersettings-videodescriptions"></a>
The encoding information for output videos\.  
_Required_: No  
_Type_: List of [VideoDescription](aws-properties-medialive-channel-videodescription.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
