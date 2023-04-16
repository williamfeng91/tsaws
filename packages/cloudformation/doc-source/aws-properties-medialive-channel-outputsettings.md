# AWS::MediaLive::Channel OutputSettings<a name="aws-properties-medialive-channel-outputsettings"></a>

The output settings\.

The parent of this entity is Output\.

## Syntax<a name="aws-properties-medialive-channel-outputsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-outputsettings-syntax.json"></a>

```
{
  "[ArchiveOutputSettings](#cfn-medialive-channel-outputsettings-archiveoutputsettings)" : ArchiveOutputSettings,
  "[FrameCaptureOutputSettings](#cfn-medialive-channel-outputsettings-framecaptureoutputsettings)" : FrameCaptureOutputSettings,
  "[HlsOutputSettings](#cfn-medialive-channel-outputsettings-hlsoutputsettings)" : HlsOutputSettings,
  "[MediaPackageOutputSettings](#cfn-medialive-channel-outputsettings-mediapackageoutputsettings)" : MediaPackageOutputSettings,
  "[MsSmoothOutputSettings](#cfn-medialive-channel-outputsettings-mssmoothoutputsettings)" : MsSmoothOutputSettings,
  "[MultiplexOutputSettings](#cfn-medialive-channel-outputsettings-multiplexoutputsettings)" : MultiplexOutputSettings,
  "[RtmpOutputSettings](#cfn-medialive-channel-outputsettings-rtmpoutputsettings)" : RtmpOutputSettings,
  "[UdpOutputSettings](#cfn-medialive-channel-outputsettings-udpoutputsettings)" : UdpOutputSettings
}
```

### YAML<a name="aws-properties-medialive-channel-outputsettings-syntax.yaml"></a>

```
  [ArchiveOutputSettings](#cfn-medialive-channel-outputsettings-archiveoutputsettings):
    ArchiveOutputSettings
  [FrameCaptureOutputSettings](#cfn-medialive-channel-outputsettings-framecaptureoutputsettings):
    FrameCaptureOutputSettings
  [HlsOutputSettings](#cfn-medialive-channel-outputsettings-hlsoutputsettings):
    HlsOutputSettings
  [MediaPackageOutputSettings](#cfn-medialive-channel-outputsettings-mediapackageoutputsettings):
    MediaPackageOutputSettings
  [MsSmoothOutputSettings](#cfn-medialive-channel-outputsettings-mssmoothoutputsettings):
    MsSmoothOutputSettings
  [MultiplexOutputSettings](#cfn-medialive-channel-outputsettings-multiplexoutputsettings):
    MultiplexOutputSettings
  [RtmpOutputSettings](#cfn-medialive-channel-outputsettings-rtmpoutputsettings):
    RtmpOutputSettings
  [UdpOutputSettings](#cfn-medialive-channel-outputsettings-udpoutputsettings):
    UdpOutputSettings
```

## Properties<a name="aws-properties-medialive-channel-outputsettings-properties"></a>

`ArchiveOutputSettings` <a name="cfn-medialive-channel-outputsettings-archiveoutputsettings"></a>
The settings for an archive output\.  
_Required_: No  
_Type_: [ArchiveOutputSettings](aws-properties-medialive-channel-archiveoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FrameCaptureOutputSettings` <a name="cfn-medialive-channel-outputsettings-framecaptureoutputsettings"></a>
The settings for a frame capture output\.  
The parent of this entity is OutputGroupSettings\.  
_Required_: No  
_Type_: [FrameCaptureOutputSettings](aws-properties-medialive-channel-framecaptureoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HlsOutputSettings` <a name="cfn-medialive-channel-outputsettings-hlsoutputsettings"></a>
The settings for an HLS output\.  
The parent of this entity is OutputGroupSettings\.  
_Required_: No  
_Type_: [HlsOutputSettings](aws-properties-medialive-channel-hlsoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MediaPackageOutputSettings` <a name="cfn-medialive-channel-outputsettings-mediapackageoutputsettings"></a>
The settings for a MediaPackage output\.  
The parent of this entity is OutputGroupSettings\.  
_Required_: No  
_Type_: [MediaPackageOutputSettings](aws-properties-medialive-channel-mediapackageoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MsSmoothOutputSettings` <a name="cfn-medialive-channel-outputsettings-mssmoothoutputsettings"></a>
The settings for a Microsoft Smooth output\.  
_Required_: No  
_Type_: [MsSmoothOutputSettings](aws-properties-medialive-channel-mssmoothoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MultiplexOutputSettings` <a name="cfn-medialive-channel-outputsettings-multiplexoutputsettings"></a>
Configuration of a Multiplex output\.  
_Required_: No  
_Type_: [MultiplexOutputSettings](aws-properties-medialive-channel-multiplexoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RtmpOutputSettings` <a name="cfn-medialive-channel-outputsettings-rtmpoutputsettings"></a>
The settings for an RTMP output\.  
The parent of this entity is OutputGroupSettings\.  
_Required_: No  
_Type_: [RtmpOutputSettings](aws-properties-medialive-channel-rtmpoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UdpOutputSettings` <a name="cfn-medialive-channel-outputsettings-udpoutputsettings"></a>
The settings for a UDP output\.  
The parent of this entity is OutputGroupSettings\.  
_Required_: No  
_Type_: [UdpOutputSettings](aws-properties-medialive-channel-udpoutputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
