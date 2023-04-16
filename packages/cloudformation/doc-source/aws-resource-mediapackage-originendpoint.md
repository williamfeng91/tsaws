# AWS::MediaPackage::OriginEndpoint<a name="aws-resource-mediapackage-originendpoint"></a>

Create an endpoint on an AWS Elemental MediaPackage channel\.

An endpoint represents a single delivery point of a channel, and defines content output handling through various components, such as packaging protocols, DRM and encryption integration, and more\.

After it's created, an endpoint provides a fixed public URL\. This URL remains the same throughout the lifetime of the endpoint, regardless of any failures or upgrades that might occur\. Integrate the URL with a downstream CDN \(such as Amazon CloudFront\) or playback device\.

## Syntax<a name="aws-resource-mediapackage-originendpoint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-mediapackage-originendpoint-syntax.json"></a>

```
{
  "Type" : "AWS::MediaPackage::OriginEndpoint",
  "Properties" : {
      "[Authorization](#cfn-mediapackage-originendpoint-authorization)" : Authorization,
      "[ChannelId](#cfn-mediapackage-originendpoint-channelid)" : String,
      "[CmafPackage](#cfn-mediapackage-originendpoint-cmafpackage)" : CmafPackage,
      "[DashPackage](#cfn-mediapackage-originendpoint-dashpackage)" : DashPackage,
      "[Description](#cfn-mediapackage-originendpoint-description)" : String,
      "[HlsPackage](#cfn-mediapackage-originendpoint-hlspackage)" : HlsPackage,
      "[Id](#cfn-mediapackage-originendpoint-id)" : String,
      "[ManifestName](#cfn-mediapackage-originendpoint-manifestname)" : String,
      "[MssPackage](#cfn-mediapackage-originendpoint-msspackage)" : MssPackage,
      "[Origination](#cfn-mediapackage-originendpoint-origination)" : String,
      "[StartoverWindowSeconds](#cfn-mediapackage-originendpoint-startoverwindowseconds)" : Integer,
      "[Tags](#cfn-mediapackage-originendpoint-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[TimeDelaySeconds](#cfn-mediapackage-originendpoint-timedelayseconds)" : Integer,
      "[Whitelist](#cfn-mediapackage-originendpoint-whitelist)" : [ String, ... ]
    }
}
```

### YAML<a name="aws-resource-mediapackage-originendpoint-syntax.yaml"></a>

```
Type: AWS::MediaPackage::OriginEndpoint
Properties:
  [Authorization](#cfn-mediapackage-originendpoint-authorization):
    Authorization
  [ChannelId](#cfn-mediapackage-originendpoint-channelid): String
  [CmafPackage](#cfn-mediapackage-originendpoint-cmafpackage):
    CmafPackage
  [DashPackage](#cfn-mediapackage-originendpoint-dashpackage):
    DashPackage
  [Description](#cfn-mediapackage-originendpoint-description): String
  [HlsPackage](#cfn-mediapackage-originendpoint-hlspackage):
    HlsPackage
  [Id](#cfn-mediapackage-originendpoint-id): String
  [ManifestName](#cfn-mediapackage-originendpoint-manifestname): String
  [MssPackage](#cfn-mediapackage-originendpoint-msspackage):
    MssPackage
  [Origination](#cfn-mediapackage-originendpoint-origination): String
  [StartoverWindowSeconds](#cfn-mediapackage-originendpoint-startoverwindowseconds): Integer
  [Tags](#cfn-mediapackage-originendpoint-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [TimeDelaySeconds](#cfn-mediapackage-originendpoint-timedelayseconds): Integer
  [Whitelist](#cfn-mediapackage-originendpoint-whitelist):
    - String
```

## Properties<a name="aws-resource-mediapackage-originendpoint-properties"></a>

`Authorization` <a name="cfn-mediapackage-originendpoint-authorization"></a>
Parameters for CDN authorization\.  
_Required_: No  
_Type_: [Authorization](aws-properties-mediapackage-originendpoint-authorization.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChannelId` <a name="cfn-mediapackage-originendpoint-channelid"></a>
The ID of the channel associated with this endpoint\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CmafPackage` <a name="cfn-mediapackage-originendpoint-cmafpackage"></a>
Parameters for Common Media Application Format \(CMAF\) packaging\.  
_Required_: No  
_Type_: [CmafPackage](aws-properties-mediapackage-originendpoint-cmafpackage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DashPackage` <a name="cfn-mediapackage-originendpoint-dashpackage"></a>
Parameters for DASH packaging\.  
_Required_: No  
_Type_: [DashPackage](aws-properties-mediapackage-originendpoint-dashpackage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-mediapackage-originendpoint-description"></a>
Any descriptive information that you want to add to the endpoint for future identification purposes\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HlsPackage` <a name="cfn-mediapackage-originendpoint-hlspackage"></a>
Parameters for Apple HLS packaging\.  
_Required_: No  
_Type_: [HlsPackage](aws-properties-mediapackage-originendpoint-hlspackage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Id` <a name="cfn-mediapackage-originendpoint-id"></a>
The manifest ID is required and must be unique within the OriginEndpoint\. The ID can't be changed after the endpoint is created\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ManifestName` <a name="cfn-mediapackage-originendpoint-manifestname"></a>
A short string that's appended to the end of the endpoint URL to create a unique path to this endpoint\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MssPackage` <a name="cfn-mediapackage-originendpoint-msspackage"></a>
Parameters for Microsoft Smooth Streaming packaging\.  
_Required_: No  
_Type_: [MssPackage](aws-properties-mediapackage-originendpoint-msspackage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Origination` <a name="cfn-mediapackage-originendpoint-origination"></a>
Controls video origination from this endpoint\.  
Valid values:

- **ALLOW** \- enables this endpoint to serve content to requesting devices\.
- **DENY** \- prevents this endpoint from serving content\. Denying origination is helpful for harvesting live\-to\-VOD assets\. For more information about harvesting and origination, see [Live\-to\-VOD Requirements](https://docs.aws.amazon.com/mediapackage/latest/ug/ltov-reqmts.html)\.
  _Required_: No  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartoverWindowSeconds` <a name="cfn-mediapackage-originendpoint-startoverwindowseconds"></a>
Maximum duration \(seconds\) of content to retain for startover playback\. Omit this attribute or enter `0` to indicate that startover playback is disabled for this endpoint\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-mediapackage-originendpoint-tags"></a>
The tags to assign to the endpoint\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimeDelaySeconds` <a name="cfn-mediapackage-originendpoint-timedelayseconds"></a>
Minimum duration \(seconds\) of delay to enforce on the playback of live content\. Omit this attribute or enter `0` to indicate that there is no time delay in effect for this endpoint\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Whitelist` <a name="cfn-mediapackage-originendpoint-whitelist"></a>
The IP addresses that can access this endpoint\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-mediapackage-originendpoint-return-values"></a>

### Ref<a name="aws-resource-mediapackage-originendpoint-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-mediapackage-originendpoint-return-values-fn--getatt"></a>

#### <a name="aws-resource-mediapackage-originendpoint-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The endpoint's unique system\-generated resource name, based on the AWS record\.

`Url` <a name="Url-fn::getatt"></a>
URL for the key provider’s key retrieval API endpoint\. Must start with https://\.
