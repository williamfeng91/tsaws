# AWS::MediaLive::Channel AudioDescription<a name="aws-properties-medialive-channel-audiodescription"></a>

The encoding information for one output audio\.

The parent of this entity is EncoderSettings\.

## Syntax<a name="aws-properties-medialive-channel-audiodescription-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-audiodescription-syntax.json"></a>

```
{
  "[AudioNormalizationSettings](#cfn-medialive-channel-audiodescription-audionormalizationsettings)" : AudioNormalizationSettings,
  "[AudioSelectorName](#cfn-medialive-channel-audiodescription-audioselectorname)" : String,
  "[AudioType](#cfn-medialive-channel-audiodescription-audiotype)" : String,
  "[AudioTypeControl](#cfn-medialive-channel-audiodescription-audiotypecontrol)" : String,
  "[AudioWatermarkingSettings](#cfn-medialive-channel-audiodescription-audiowatermarkingsettings)" : AudioWatermarkSettings,
  "[CodecSettings](#cfn-medialive-channel-audiodescription-codecsettings)" : AudioCodecSettings,
  "[LanguageCode](#cfn-medialive-channel-audiodescription-languagecode)" : String,
  "[LanguageCodeControl](#cfn-medialive-channel-audiodescription-languagecodecontrol)" : String,
  "[Name](#cfn-medialive-channel-audiodescription-name)" : String,
  "[RemixSettings](#cfn-medialive-channel-audiodescription-remixsettings)" : RemixSettings,
  "[StreamName](#cfn-medialive-channel-audiodescription-streamname)" : String
}
```

### YAML<a name="aws-properties-medialive-channel-audiodescription-syntax.yaml"></a>

```
  [AudioNormalizationSettings](#cfn-medialive-channel-audiodescription-audionormalizationsettings):
    AudioNormalizationSettings
  [AudioSelectorName](#cfn-medialive-channel-audiodescription-audioselectorname): String
  [AudioType](#cfn-medialive-channel-audiodescription-audiotype): String
  [AudioTypeControl](#cfn-medialive-channel-audiodescription-audiotypecontrol): String
  [AudioWatermarkingSettings](#cfn-medialive-channel-audiodescription-audiowatermarkingsettings):
    AudioWatermarkSettings
  [CodecSettings](#cfn-medialive-channel-audiodescription-codecsettings):
    AudioCodecSettings
  [LanguageCode](#cfn-medialive-channel-audiodescription-languagecode): String
  [LanguageCodeControl](#cfn-medialive-channel-audiodescription-languagecodecontrol): String
  [Name](#cfn-medialive-channel-audiodescription-name): String
  [RemixSettings](#cfn-medialive-channel-audiodescription-remixsettings):
    RemixSettings
  [StreamName](#cfn-medialive-channel-audiodescription-streamname): String
```

## Properties<a name="aws-properties-medialive-channel-audiodescription-properties"></a>

`AudioNormalizationSettings` <a name="cfn-medialive-channel-audiodescription-audionormalizationsettings"></a>
The advanced audio normalization settings\.  
_Required_: No  
_Type_: [AudioNormalizationSettings](aws-properties-medialive-channel-audionormalizationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AudioSelectorName` <a name="cfn-medialive-channel-audiodescription-audioselectorname"></a>
The name of the AudioSelector that is used as the source for this AudioDescription\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AudioType` <a name="cfn-medialive-channel-audiodescription-audiotype"></a>
Applies only if audioTypeControl is useConfigured\. The values for audioType are defined in ISO\-IEC 13818\-1\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AudioTypeControl` <a name="cfn-medialive-channel-audiodescription-audiotypecontrol"></a>
Determines how audio type is determined\. followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output\. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output\. useConfigured: The value in Audio Type is included in the output\. Note that this field and audioType are both ignored if inputType is broadcasterMixedAd\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AudioWatermarkingSettings` <a name="cfn-medialive-channel-audiodescription-audiowatermarkingsettings"></a>
Settings to configure one or more solutions that insert audio watermarks in the audio encode  
_Required_: No  
_Type_: [AudioWatermarkSettings](aws-properties-medialive-channel-audiowatermarksettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CodecSettings` <a name="cfn-medialive-channel-audiodescription-codecsettings"></a>
The audio codec settings\.  
_Required_: No  
_Type_: [AudioCodecSettings](aws-properties-medialive-channel-audiocodecsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LanguageCode` <a name="cfn-medialive-channel-audiodescription-languagecode"></a>
Indicates the language of the audio output track\. Used only if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LanguageCodeControl` <a name="cfn-medialive-channel-audiodescription-languagecodecontrol"></a>
Choosing followInput causes the ISO 639 language code of the output to follow the ISO 639 language code of the input\. The languageCode setting is used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-medialive-channel-audiodescription-name"></a>
The name of this AudioDescription\. Outputs use this name to uniquely identify this AudioDescription\. Description names should be unique within this channel\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RemixSettings` <a name="cfn-medialive-channel-audiodescription-remixsettings"></a>
The settings that control how input audio channels are remixed into the output audio channels\.  
_Required_: No  
_Type_: [RemixSettings](aws-properties-medialive-channel-remixsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StreamName` <a name="cfn-medialive-channel-audiodescription-streamname"></a>
Used for Microsoft Smooth and Apple HLS outputs\. Indicates the name displayed by the player \(for example, English or Director Commentary\)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
