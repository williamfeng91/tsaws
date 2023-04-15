# AWS::CloudFront::Distribution OriginShield<a name="aws-properties-cloudfront-distribution-originshield"></a>

CloudFront Origin Shield\.

Using Origin Shield can help reduce the load on your origin\. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the _Amazon CloudFront Developer Guide_\.

## Syntax<a name="aws-properties-cloudfront-distribution-originshield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-distribution-originshield-syntax.json"></a>

```
{
  "[Enabled](#cfn-cloudfront-distribution-originshield-enabled)" : Boolean,
  "[OriginShieldRegion](#cfn-cloudfront-distribution-originshield-originshieldregion)" : String
}
```

### YAML<a name="aws-properties-cloudfront-distribution-originshield-syntax.yaml"></a>

```
  [Enabled](#cfn-cloudfront-distribution-originshield-enabled): Boolean
  [OriginShieldRegion](#cfn-cloudfront-distribution-originshield-originshieldregion): String
```

## Properties<a name="aws-properties-cloudfront-distribution-originshield-properties"></a>

`Enabled` <a name="cfn-cloudfront-distribution-originshield-enabled"></a>
A flag that specifies whether Origin Shield is enabled\.  
When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin\. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OriginShieldRegion` <a name="cfn-cloudfront-distribution-originshield-originshieldregion"></a>
The AWS Region for Origin Shield\.  
Specify the AWS Region that has the lowest latency to your origin\. To specify a region, use the region code, not the region name\. For example, specify the US East \(Ohio\) region as `us-east-2`\.  
When you enable CloudFront Origin Shield, you must specify the AWS Region for Origin Shield\. For the list of AWS Regions that you can specify, and for help choosing the best Region for your origin, see [Choosing the AWS Region for Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region) in the _Amazon CloudFront Developer Guide_\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `32`  
_Pattern_: `[a-z]{2}-[a-z]+-\d`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
