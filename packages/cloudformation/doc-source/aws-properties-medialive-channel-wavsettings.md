# AWS::MediaLive::Channel WavSettings<a name="aws-properties-medialive-channel-wavsettings"></a>

The setup of WAV audio in the output\.

The parent of this entity is AudioCodecSettings\.

## Syntax<a name="aws-properties-medialive-channel-wavsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-wavsettings-syntax.json"></a>

```
{
  "[BitDepth](#cfn-medialive-channel-wavsettings-bitdepth)" : Double,
  "[CodingMode](#cfn-medialive-channel-wavsettings-codingmode)" : String,
  "[SampleRate](#cfn-medialive-channel-wavsettings-samplerate)" : Double
}
```

### YAML<a name="aws-properties-medialive-channel-wavsettings-syntax.yaml"></a>

```
  [BitDepth](#cfn-medialive-channel-wavsettings-bitdepth): Double
  [CodingMode](#cfn-medialive-channel-wavsettings-codingmode): String
  [SampleRate](#cfn-medialive-channel-wavsettings-samplerate): Double
```

## Properties<a name="aws-properties-medialive-channel-wavsettings-properties"></a>

`BitDepth` <a name="cfn-medialive-channel-wavsettings-bitdepth"></a>
Bits per sample\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CodingMode` <a name="cfn-medialive-channel-wavsettings-codingmode"></a>
The audio coding mode for the WAV audio\. The mode determines the number of channels in the audio\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SampleRate` <a name="cfn-medialive-channel-wavsettings-samplerate"></a>
Sample rate in Hz\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
