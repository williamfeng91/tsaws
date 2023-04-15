# AWS::Lightsail::Distribution<a name="aws-resource-lightsail-distribution"></a>

The `AWS::Lightsail::Distribution` resource specifies a content delivery network \(CDN\) distribution\. You can create distributions only in the `us-east-1` AWS Region\.

A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance, static content hosted on a Lightsail bucket, or through a Lightsail load balancer\.

## Syntax<a name="aws-resource-lightsail-distribution-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-lightsail-distribution-syntax.json"></a>

```
{
  "Type" : "AWS::Lightsail::Distribution",
  "Properties" : {
      "[BundleId](#cfn-lightsail-distribution-bundleid)" : String,
      "[CacheBehaviors](#cfn-lightsail-distribution-cachebehaviors)" : [ CacheBehaviorPerPath, ... ],
      "[CacheBehaviorSettings](#cfn-lightsail-distribution-cachebehaviorsettings)" : CacheSettings,
      "[CertificateName](#cfn-lightsail-distribution-certificatename)" : String,
      "[DefaultCacheBehavior](#cfn-lightsail-distribution-defaultcachebehavior)" : CacheBehavior,
      "[DistributionName](#cfn-lightsail-distribution-distributionname)" : String,
      "[IpAddressType](#cfn-lightsail-distribution-ipaddresstype)" : String,
      "[IsEnabled](#cfn-lightsail-distribution-isenabled)" : Boolean,
      "[Origin](#cfn-lightsail-distribution-origin)" : InputOrigin,
      "[Tags](#cfn-lightsail-distribution-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-lightsail-distribution-syntax.yaml"></a>

```
Type: AWS::Lightsail::Distribution
Properties:
  [BundleId](#cfn-lightsail-distribution-bundleid): String
  [CacheBehaviors](#cfn-lightsail-distribution-cachebehaviors):
    - CacheBehaviorPerPath
  [CacheBehaviorSettings](#cfn-lightsail-distribution-cachebehaviorsettings):
    CacheSettings
  [CertificateName](#cfn-lightsail-distribution-certificatename): String
  [DefaultCacheBehavior](#cfn-lightsail-distribution-defaultcachebehavior):
    CacheBehavior
  [DistributionName](#cfn-lightsail-distribution-distributionname): String
  [IpAddressType](#cfn-lightsail-distribution-ipaddresstype): String
  [IsEnabled](#cfn-lightsail-distribution-isenabled): Boolean
  [Origin](#cfn-lightsail-distribution-origin):
    InputOrigin
  [Tags](#cfn-lightsail-distribution-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-lightsail-distribution-properties"></a>

`BundleId` <a name="cfn-lightsail-distribution-bundleid"></a>
The ID of the bundle applied to the distribution\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CacheBehaviors` <a name="cfn-lightsail-distribution-cachebehaviors"></a>
An array of objects that describe the per\-path cache behavior of the distribution\.  
_Required_: No  
_Type_: List of [CacheBehaviorPerPath](aws-properties-lightsail-distribution-cachebehaviorperpath.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CacheBehaviorSettings` <a name="cfn-lightsail-distribution-cachebehaviorsettings"></a>
An object that describes the cache behavior settings of the distribution\.  
_Required_: No  
_Type_: [CacheSettings](aws-properties-lightsail-distribution-cachesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CertificateName` <a name="cfn-lightsail-distribution-certificatename"></a>
The name of the SSL/TLS certificate attached to the distribution\.  
_Required_: No  
_Type_: String  
_Pattern_: `\w[\w\-]*\w`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DefaultCacheBehavior` <a name="cfn-lightsail-distribution-defaultcachebehavior"></a>
An object that describes the default cache behavior of the distribution\.  
_Required_: Yes  
_Type_: [CacheBehavior](aws-properties-lightsail-distribution-cachebehavior.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DistributionName` <a name="cfn-lightsail-distribution-distributionname"></a>
The name of the distribution  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`IpAddressType` <a name="cfn-lightsail-distribution-ipaddresstype"></a>
The IP address type of the distribution\.  
The possible values are `ipv4` for IPv4 only, and `dualstack` for IPv4 and IPv6\.  
_Required_: No  
_Type_: String  
_Allowed values_: `dualstack | ipv4`  
_Update requires_: Updates are not supported\.

`IsEnabled` <a name="cfn-lightsail-distribution-isenabled"></a>
A Boolean value indicating whether the distribution is enabled\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Origin` <a name="cfn-lightsail-distribution-origin"></a>
An object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer\.  
The distribution pulls, caches, and serves content from the origin\.  
_Required_: Yes  
_Type_: [InputOrigin](aws-properties-lightsail-distribution-inputorigin.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-lightsail-distribution-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_\.  
The `Value` of `Tags` is optional for Lightsail resources\.
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-lightsail-distribution-return-values"></a>

### Ref<a name="aws-resource-lightsail-distribution-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns a unique identifier for this resource\.

### Fn::GetAtt<a name="aws-resource-lightsail-distribution-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-lightsail-distribution-return-values-fn--getatt-fn--getatt"></a>

`AbleToUpdateBundle` <a name="AbleToUpdateBundle-fn::getatt"></a>
Indicates whether you can update the distribution’s current bundle to another bundle\.

`DistributionArn` <a name="DistributionArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the distribution\.

`Status` <a name="Status-fn::getatt"></a>
The status of the distribution\.

## Remarks<a name="aws-resource-lightsail-distribution--remarks"></a>

_Configuring cache behavior settings_

The `CacheBehaviorSettings` parameter can be set only if the `DefaultCacheBehavior` parameter is set to `cache`, or if the `CacheBehaviors` parameter has a path with a `cache` behavior\. If neither of those conditions are true, the `CacheBehaviorSettings` will not be set for the distribution and the stack will drift\.
