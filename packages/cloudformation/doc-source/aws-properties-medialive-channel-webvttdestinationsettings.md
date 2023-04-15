# AWS::MediaLive::Channel WebvttDestinationSettings<a name="aws-properties-medialive-channel-webvttdestinationsettings"></a>

The configuration of Web VTT captions in the output\.

The parent of this entity is CaptionDestinationSettings\.

## Syntax<a name="aws-properties-medialive-channel-webvttdestinationsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-webvttdestinationsettings-syntax.json"></a>

```
{
  "[StyleControl](#cfn-medialive-channel-webvttdestinationsettings-stylecontrol)" : String
}
```

### YAML<a name="aws-properties-medialive-channel-webvttdestinationsettings-syntax.yaml"></a>

```
  [StyleControl](#cfn-medialive-channel-webvttdestinationsettings-stylecontrol): String
```

## Properties<a name="aws-properties-medialive-channel-webvttdestinationsettings-properties"></a>

`StyleControl` <a name="cfn-medialive-channel-webvttdestinationsettings-stylecontrol"></a>
Controls whether the color and position of the source captions is passed through to the WebVTT output captions\. PASSTHROUGH \- Valid only if the source captions are EMBEDDED or TELETEXT\. NO_STYLE_DATA \- Don't pass through the style\. The output captions will not contain any font styling information\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
