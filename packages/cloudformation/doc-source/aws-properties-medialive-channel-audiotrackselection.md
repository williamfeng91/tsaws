# AWS::MediaLive::Channel AudioTrackSelection<a name="aws-properties-medialive-channel-audiotrackselection"></a>

Information about the audio track to extract\.

The parent of this entity is AudioSelectorSettings\.

## Syntax<a name="aws-properties-medialive-channel-audiotrackselection-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-audiotrackselection-syntax.json"></a>

```
{
  "[Tracks](#cfn-medialive-channel-audiotrackselection-tracks)" : [ AudioTrack, ... ]
}
```

### YAML<a name="aws-properties-medialive-channel-audiotrackselection-syntax.yaml"></a>

```
  [Tracks](#cfn-medialive-channel-audiotrackselection-tracks):
    - AudioTrack
```

## Properties<a name="aws-properties-medialive-channel-audiotrackselection-properties"></a>

`Tracks` <a name="cfn-medialive-channel-audiotrackselection-tracks"></a>
Selects one or more unique audio tracks from within a source\.  
_Required_: No  
_Type_: List of [AudioTrack](aws-properties-medialive-channel-audiotrack.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
