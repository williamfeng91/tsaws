# AWS::MediaPackage::OriginEndpoint MssPackage<a name="aws-properties-mediapackage-originendpoint-msspackage"></a>

Parameters for Microsoft Smooth Streaming packaging\.

## Syntax<a name="aws-properties-mediapackage-originendpoint-msspackage-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-mediapackage-originendpoint-msspackage-syntax.json"></a>

```
{
  "[Encryption](#cfn-mediapackage-originendpoint-msspackage-encryption)" : MssEncryption,
  "[ManifestWindowSeconds](#cfn-mediapackage-originendpoint-msspackage-manifestwindowseconds)" : Integer,
  "[SegmentDurationSeconds](#cfn-mediapackage-originendpoint-msspackage-segmentdurationseconds)" : Integer,
  "[StreamSelection](#cfn-mediapackage-originendpoint-msspackage-streamselection)" : StreamSelection
}
```

### YAML<a name="aws-properties-mediapackage-originendpoint-msspackage-syntax.yaml"></a>

```
  [Encryption](#cfn-mediapackage-originendpoint-msspackage-encryption):
    MssEncryption
  [ManifestWindowSeconds](#cfn-mediapackage-originendpoint-msspackage-manifestwindowseconds): Integer
  [SegmentDurationSeconds](#cfn-mediapackage-originendpoint-msspackage-segmentdurationseconds): Integer
  [StreamSelection](#cfn-mediapackage-originendpoint-msspackage-streamselection):
    StreamSelection
```

## Properties<a name="aws-properties-mediapackage-originendpoint-msspackage-properties"></a>

`Encryption` <a name="cfn-mediapackage-originendpoint-msspackage-encryption"></a>
Parameters for encrypting content\.  
_Required_: No  
_Type_: [MssEncryption](aws-properties-mediapackage-originendpoint-mssencryption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ManifestWindowSeconds` <a name="cfn-mediapackage-originendpoint-msspackage-manifestwindowseconds"></a>
Time window \(in seconds\) contained in each manifest\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SegmentDurationSeconds` <a name="cfn-mediapackage-originendpoint-msspackage-segmentdurationseconds"></a>
Duration \(in seconds\) of each fragment\. Actual fragments are rounded to the nearest multiple of the source fragment duration\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StreamSelection` <a name="cfn-mediapackage-originendpoint-msspackage-streamselection"></a>
Limitations for outputs from the endpoint, based on the video bitrate\.  
_Required_: No  
_Type_: [StreamSelection](aws-properties-mediapackage-originendpoint-streamselection.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
