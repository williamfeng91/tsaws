# AWS::MediaPackage::PackagingConfiguration CmafPackage<a name="aws-properties-mediapackage-packagingconfiguration-cmafpackage"></a>

Parameters for a packaging configuration that uses Common Media Application Format \(CMAF\) packaging\.

## Syntax<a name="aws-properties-mediapackage-packagingconfiguration-cmafpackage-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-mediapackage-packagingconfiguration-cmafpackage-syntax.json"></a>

```
{
  "[Encryption](#cfn-mediapackage-packagingconfiguration-cmafpackage-encryption)" : CmafEncryption,
  "[HlsManifests](#cfn-mediapackage-packagingconfiguration-cmafpackage-hlsmanifests)" : [ HlsManifest, ... ],
  "[IncludeEncoderConfigurationInSegments](#cfn-mediapackage-packagingconfiguration-cmafpackage-includeencoderconfigurationinsegments)" : Boolean,
  "[SegmentDurationSeconds](#cfn-mediapackage-packagingconfiguration-cmafpackage-segmentdurationseconds)" : Integer
}
```

### YAML<a name="aws-properties-mediapackage-packagingconfiguration-cmafpackage-syntax.yaml"></a>

```
  [Encryption](#cfn-mediapackage-packagingconfiguration-cmafpackage-encryption):
    CmafEncryption
  [HlsManifests](#cfn-mediapackage-packagingconfiguration-cmafpackage-hlsmanifests):
    - HlsManifest
  [IncludeEncoderConfigurationInSegments](#cfn-mediapackage-packagingconfiguration-cmafpackage-includeencoderconfigurationinsegments): Boolean
  [SegmentDurationSeconds](#cfn-mediapackage-packagingconfiguration-cmafpackage-segmentdurationseconds): Integer
```

## Properties<a name="aws-properties-mediapackage-packagingconfiguration-cmafpackage-properties"></a>

`Encryption` <a name="cfn-mediapackage-packagingconfiguration-cmafpackage-encryption"></a>
Parameters for encrypting content\.  
_Required_: No  
_Type_: [CmafEncryption](aws-properties-mediapackage-packagingconfiguration-cmafencryption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HlsManifests` <a name="cfn-mediapackage-packagingconfiguration-cmafpackage-hlsmanifests"></a>
A list of HLS manifest configurations that are available from this endpoint\.  
_Required_: Yes  
_Type_: List of [HlsManifest](aws-properties-mediapackage-packagingconfiguration-hlsmanifest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncludeEncoderConfigurationInSegments` <a name="cfn-mediapackage-packagingconfiguration-cmafpackage-includeencoderconfigurationinsegments"></a>
When includeEncoderConfigurationInSegments is set to true, AWS Elemental MediaPackage places your encoder's Sequence Parameter Set \(SPS\), Picture Parameter Set \(PPS\), and Video Parameter Set \(VPS\) metadata in every video segment instead of in the init fragment\. This lets you use different SPS/PPS/VPS settings for your assets during content playback\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SegmentDurationSeconds` <a name="cfn-mediapackage-packagingconfiguration-cmafpackage-segmentdurationseconds"></a>
Duration \(in seconds\) of each segment\. Actual segments are rounded to the nearest multiple of the source fragment duration\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
