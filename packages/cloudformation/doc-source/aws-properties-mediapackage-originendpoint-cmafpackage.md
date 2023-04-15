# AWS::MediaPackage::OriginEndpoint CmafPackage<a name="aws-properties-mediapackage-originendpoint-cmafpackage"></a>

Parameters for Common Media Application Format \(CMAF\) packaging\.

## Syntax<a name="aws-properties-mediapackage-originendpoint-cmafpackage-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-mediapackage-originendpoint-cmafpackage-syntax.json"></a>

```
{
  "[Encryption](#cfn-mediapackage-originendpoint-cmafpackage-encryption)" : CmafEncryption,
  "[HlsManifests](#cfn-mediapackage-originendpoint-cmafpackage-hlsmanifests)" : [ HlsManifest, ... ],
  "[SegmentDurationSeconds](#cfn-mediapackage-originendpoint-cmafpackage-segmentdurationseconds)" : Integer,
  "[SegmentPrefix](#cfn-mediapackage-originendpoint-cmafpackage-segmentprefix)" : String,
  "[StreamSelection](#cfn-mediapackage-originendpoint-cmafpackage-streamselection)" : StreamSelection
}
```

### YAML<a name="aws-properties-mediapackage-originendpoint-cmafpackage-syntax.yaml"></a>

```
  [Encryption](#cfn-mediapackage-originendpoint-cmafpackage-encryption):
    CmafEncryption
  [HlsManifests](#cfn-mediapackage-originendpoint-cmafpackage-hlsmanifests):
    - HlsManifest
  [SegmentDurationSeconds](#cfn-mediapackage-originendpoint-cmafpackage-segmentdurationseconds): Integer
  [SegmentPrefix](#cfn-mediapackage-originendpoint-cmafpackage-segmentprefix): String
  [StreamSelection](#cfn-mediapackage-originendpoint-cmafpackage-streamselection):
    StreamSelection
```

## Properties<a name="aws-properties-mediapackage-originendpoint-cmafpackage-properties"></a>

`Encryption` <a name="cfn-mediapackage-originendpoint-cmafpackage-encryption"></a>
Parameters for encrypting content\.  
_Required_: No  
_Type_: [CmafEncryption](aws-properties-mediapackage-originendpoint-cmafencryption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HlsManifests` <a name="cfn-mediapackage-originendpoint-cmafpackage-hlsmanifests"></a>
A list of HLS manifest configurations that are available from this endpoint\.  
_Required_: No  
_Type_: List of [HlsManifest](aws-properties-mediapackage-originendpoint-hlsmanifest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SegmentDurationSeconds` <a name="cfn-mediapackage-originendpoint-cmafpackage-segmentdurationseconds"></a>
Duration \(in seconds\) of each segment\. Actual segments are rounded to the nearest multiple of the source segment duration\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SegmentPrefix` <a name="cfn-mediapackage-originendpoint-cmafpackage-segmentprefix"></a>
An optional custom string that is prepended to the name of each segment\. If not specified, the segment prefix defaults to the ChannelId\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StreamSelection` <a name="cfn-mediapackage-originendpoint-cmafpackage-streamselection"></a>
Limitations for outputs from the endpoint, based on the video bitrate\.  
_Required_: No  
_Type_: [StreamSelection](aws-properties-mediapackage-originendpoint-streamselection.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
