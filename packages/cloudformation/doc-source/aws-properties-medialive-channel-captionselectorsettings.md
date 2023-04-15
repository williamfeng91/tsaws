# AWS::MediaLive::Channel CaptionSelectorSettings<a name="aws-properties-medialive-channel-captionselectorsettings"></a>

Captions Selector Settings

The parent of this entity is CaptionSelector\.

## Syntax<a name="aws-properties-medialive-channel-captionselectorsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-captionselectorsettings-syntax.json"></a>

```
{
  "[AncillarySourceSettings](#cfn-medialive-channel-captionselectorsettings-ancillarysourcesettings)" : AncillarySourceSettings,
  "[AribSourceSettings](#cfn-medialive-channel-captionselectorsettings-aribsourcesettings)" : AribSourceSettings,
  "[DvbSubSourceSettings](#cfn-medialive-channel-captionselectorsettings-dvbsubsourcesettings)" : DvbSubSourceSettings,
  "[EmbeddedSourceSettings](#cfn-medialive-channel-captionselectorsettings-embeddedsourcesettings)" : EmbeddedSourceSettings,
  "[Scte20SourceSettings](#cfn-medialive-channel-captionselectorsettings-scte20sourcesettings)" : Scte20SourceSettings,
  "[Scte27SourceSettings](#cfn-medialive-channel-captionselectorsettings-scte27sourcesettings)" : Scte27SourceSettings,
  "[TeletextSourceSettings](#cfn-medialive-channel-captionselectorsettings-teletextsourcesettings)" : TeletextSourceSettings
}
```

### YAML<a name="aws-properties-medialive-channel-captionselectorsettings-syntax.yaml"></a>

```
  [AncillarySourceSettings](#cfn-medialive-channel-captionselectorsettings-ancillarysourcesettings):
    AncillarySourceSettings
  [AribSourceSettings](#cfn-medialive-channel-captionselectorsettings-aribsourcesettings):
    AribSourceSettings
  [DvbSubSourceSettings](#cfn-medialive-channel-captionselectorsettings-dvbsubsourcesettings):
    DvbSubSourceSettings
  [EmbeddedSourceSettings](#cfn-medialive-channel-captionselectorsettings-embeddedsourcesettings):
    EmbeddedSourceSettings
  [Scte20SourceSettings](#cfn-medialive-channel-captionselectorsettings-scte20sourcesettings):
    Scte20SourceSettings
  [Scte27SourceSettings](#cfn-medialive-channel-captionselectorsettings-scte27sourcesettings):
    Scte27SourceSettings
  [TeletextSourceSettings](#cfn-medialive-channel-captionselectorsettings-teletextsourcesettings):
    TeletextSourceSettings
```

## Properties<a name="aws-properties-medialive-channel-captionselectorsettings-properties"></a>

`AncillarySourceSettings` <a name="cfn-medialive-channel-captionselectorsettings-ancillarysourcesettings"></a>
Information about the ancillary captions to extract from the input\.  
_Required_: No  
_Type_: [AncillarySourceSettings](aws-properties-medialive-channel-ancillarysourcesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AribSourceSettings` <a name="cfn-medialive-channel-captionselectorsettings-aribsourcesettings"></a>
Information about the ARIB captions to extract from the input\.  
_Required_: No  
_Type_: [AribSourceSettings](aws-properties-medialive-channel-aribsourcesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DvbSubSourceSettings` <a name="cfn-medialive-channel-captionselectorsettings-dvbsubsourcesettings"></a>
Information about the DVB Sub captions to extract from the input\.  
_Required_: No  
_Type_: [DvbSubSourceSettings](aws-properties-medialive-channel-dvbsubsourcesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmbeddedSourceSettings` <a name="cfn-medialive-channel-captionselectorsettings-embeddedsourcesettings"></a>
Information about the embedded captions to extract from the input\.  
_Required_: No  
_Type_: [EmbeddedSourceSettings](aws-properties-medialive-channel-embeddedsourcesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Scte20SourceSettings` <a name="cfn-medialive-channel-captionselectorsettings-scte20sourcesettings"></a>
Information about the SCTE\-20 captions to extract from the input\.  
_Required_: No  
_Type_: [Scte20SourceSettings](aws-properties-medialive-channel-scte20sourcesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Scte27SourceSettings` <a name="cfn-medialive-channel-captionselectorsettings-scte27sourcesettings"></a>
Information about the SCTE\-27 captions to extract from the input\.  
_Required_: No  
_Type_: [Scte27SourceSettings](aws-properties-medialive-channel-scte27sourcesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TeletextSourceSettings` <a name="cfn-medialive-channel-captionselectorsettings-teletextsourcesettings"></a>
Information about the Teletext captions to extract from the input\.  
_Required_: No  
_Type_: [TeletextSourceSettings](aws-properties-medialive-channel-teletextsourcesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
