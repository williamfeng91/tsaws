# AWS::MediaLive::Channel CaptionDestinationSettings<a name="aws-properties-medialive-channel-captiondestinationsettings"></a>

The configuration of one captions encode in the output\.

The parent of this entity is CaptionDescription\.

## Syntax<a name="aws-properties-medialive-channel-captiondestinationsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-captiondestinationsettings-syntax.json"></a>

```
{
  "[AribDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-aribdestinationsettings)" : AribDestinationSettings,
  "[BurnInDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-burnindestinationsettings)" : BurnInDestinationSettings,
  "[DvbSubDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-dvbsubdestinationsettings)" : DvbSubDestinationSettings,
  "[EbuTtDDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-ebuttddestinationsettings)" : EbuTtDDestinationSettings,
  "[EmbeddedDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-embeddeddestinationsettings)" : EmbeddedDestinationSettings,
  "[EmbeddedPlusScte20DestinationSettings](#cfn-medialive-channel-captiondestinationsettings-embeddedplusscte20destinationsettings)" : EmbeddedPlusScte20DestinationSettings,
  "[RtmpCaptionInfoDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-rtmpcaptioninfodestinationsettings)" : RtmpCaptionInfoDestinationSettings,
  "[Scte20PlusEmbeddedDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-scte20plusembeddeddestinationsettings)" : Scte20PlusEmbeddedDestinationSettings,
  "[Scte27DestinationSettings](#cfn-medialive-channel-captiondestinationsettings-scte27destinationsettings)" : Scte27DestinationSettings,
  "[SmpteTtDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-smptettdestinationsettings)" : SmpteTtDestinationSettings,
  "[TeletextDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-teletextdestinationsettings)" : TeletextDestinationSettings,
  "[TtmlDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-ttmldestinationsettings)" : TtmlDestinationSettings,
  "[WebvttDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-webvttdestinationsettings)" : WebvttDestinationSettings
}
```

### YAML<a name="aws-properties-medialive-channel-captiondestinationsettings-syntax.yaml"></a>

```
  [AribDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-aribdestinationsettings):
    AribDestinationSettings
  [BurnInDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-burnindestinationsettings):
    BurnInDestinationSettings
  [DvbSubDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-dvbsubdestinationsettings):
    DvbSubDestinationSettings
  [EbuTtDDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-ebuttddestinationsettings):
    EbuTtDDestinationSettings
  [EmbeddedDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-embeddeddestinationsettings):
    EmbeddedDestinationSettings
  [EmbeddedPlusScte20DestinationSettings](#cfn-medialive-channel-captiondestinationsettings-embeddedplusscte20destinationsettings):
    EmbeddedPlusScte20DestinationSettings
  [RtmpCaptionInfoDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-rtmpcaptioninfodestinationsettings):
    RtmpCaptionInfoDestinationSettings
  [Scte20PlusEmbeddedDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-scte20plusembeddeddestinationsettings):
    Scte20PlusEmbeddedDestinationSettings
  [Scte27DestinationSettings](#cfn-medialive-channel-captiondestinationsettings-scte27destinationsettings):
    Scte27DestinationSettings
  [SmpteTtDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-smptettdestinationsettings):
    SmpteTtDestinationSettings
  [TeletextDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-teletextdestinationsettings):
    TeletextDestinationSettings
  [TtmlDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-ttmldestinationsettings):
    TtmlDestinationSettings
  [WebvttDestinationSettings](#cfn-medialive-channel-captiondestinationsettings-webvttdestinationsettings):
    WebvttDestinationSettings
```

## Properties<a name="aws-properties-medialive-channel-captiondestinationsettings-properties"></a>

`AribDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-aribdestinationsettings"></a>
The configuration of one ARIB captions encode in the output\.  
_Required_: No  
_Type_: [AribDestinationSettings](aws-properties-medialive-channel-aribdestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BurnInDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-burnindestinationsettings"></a>
The configuration of one burn\-in captions encode in the output\.  
_Required_: No  
_Type_: [BurnInDestinationSettings](aws-properties-medialive-channel-burnindestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DvbSubDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-dvbsubdestinationsettings"></a>
The configuration of one DVB Sub captions encode in the output\.  
_Required_: No  
_Type_: [DvbSubDestinationSettings](aws-properties-medialive-channel-dvbsubdestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EbuTtDDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-ebuttddestinationsettings"></a>
Settings for EBU\-TT captions in the output\.  
_Required_: No  
_Type_: [EbuTtDDestinationSettings](aws-properties-medialive-channel-ebuttddestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmbeddedDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-embeddeddestinationsettings"></a>
The configuration of one embedded captions encode in the output\.  
_Required_: No  
_Type_: [EmbeddedDestinationSettings](aws-properties-medialive-channel-embeddeddestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmbeddedPlusScte20DestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-embeddedplusscte20destinationsettings"></a>
The configuration of one embedded plus SCTE\-20 captions encode in the output\.  
_Required_: No  
_Type_: [EmbeddedPlusScte20DestinationSettings](aws-properties-medialive-channel-embeddedplusscte20destinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RtmpCaptionInfoDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-rtmpcaptioninfodestinationsettings"></a>
The configuration of one RTMPCaptionInfo captions encode in the output\.  
_Required_: No  
_Type_: [RtmpCaptionInfoDestinationSettings](aws-properties-medialive-channel-rtmpcaptioninfodestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Scte20PlusEmbeddedDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-scte20plusembeddeddestinationsettings"></a>
The configuration of one SCTE20 plus embedded captions encode in the output\.  
_Required_: No  
_Type_: [Scte20PlusEmbeddedDestinationSettings](aws-properties-medialive-channel-scte20plusembeddeddestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Scte27DestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-scte27destinationsettings"></a>
The configuration of one SCTE\-27 captions encode in the output\.  
_Required_: No  
_Type_: [Scte27DestinationSettings](aws-properties-medialive-channel-scte27destinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmpteTtDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-smptettdestinationsettings"></a>
The configuration of one SMPTE\-TT captions encode in the output\.  
_Required_: No  
_Type_: [SmpteTtDestinationSettings](aws-properties-medialive-channel-smptettdestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TeletextDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-teletextdestinationsettings"></a>
The configuration of one Teletext captions encode in the output\.  
_Required_: No  
_Type_: [TeletextDestinationSettings](aws-properties-medialive-channel-teletextdestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TtmlDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-ttmldestinationsettings"></a>
The configuration of one TTML captions encode in the output\.  
_Required_: No  
_Type_: [TtmlDestinationSettings](aws-properties-medialive-channel-ttmldestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WebvttDestinationSettings` <a name="cfn-medialive-channel-captiondestinationsettings-webvttdestinationsettings"></a>
The configuration of one WebVTT captions encode in the output\.  
_Required_: No  
_Type_: [WebvttDestinationSettings](aws-properties-medialive-channel-webvttdestinationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
