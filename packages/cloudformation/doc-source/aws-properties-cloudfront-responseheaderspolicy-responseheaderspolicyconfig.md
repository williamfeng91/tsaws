# AWS::CloudFront::ResponseHeadersPolicy ResponseHeadersPolicyConfig<a name="aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig"></a>

A response headers policy configuration\.

A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers\.

## Syntax<a name="aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-syntax.json"></a>

```
{
  "[Comment](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-comment)" : String,
  "[CorsConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-corsconfig)" : CorsConfig,
  "[CustomHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-customheadersconfig)" : CustomHeadersConfig,
  "[Name](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-name)" : String,
  "[RemoveHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-removeheadersconfig)" : RemoveHeadersConfig,
  "[SecurityHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-securityheadersconfig)" : SecurityHeadersConfig,
  "[ServerTimingHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-servertimingheadersconfig)" : ServerTimingHeadersConfig
}
```

### YAML<a name="aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-syntax.yaml"></a>

```
  [Comment](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-comment): String
  [CorsConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-corsconfig):
    CorsConfig
  [CustomHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-customheadersconfig):
    CustomHeadersConfig
  [Name](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-name): String
  [RemoveHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-removeheadersconfig):
    RemoveHeadersConfig
  [SecurityHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-securityheadersconfig):
    SecurityHeadersConfig
  [ServerTimingHeadersConfig](#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-servertimingheadersconfig):
    ServerTimingHeadersConfig
```

## Properties<a name="aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-properties"></a>

`Comment` <a name="cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-comment"></a>
A comment to describe the response headers policy\.  
The comment cannot be longer than 128 characters\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CorsConfig` <a name="cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-corsconfig"></a>
A configuration for a set of HTTP response headers that are used for cross\-origin resource sharing \(CORS\)\.  
_Required_: No  
_Type_: [CorsConfig](aws-properties-cloudfront-responseheaderspolicy-corsconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomHeadersConfig` <a name="cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-customheadersconfig"></a>
A configuration for a set of custom HTTP response headers\.  
_Required_: No  
_Type_: [CustomHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-name"></a>
A name to identify the response headers policy\.  
The name must be unique for response headers policies in this AWS account\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RemoveHeadersConfig` <a name="cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-removeheadersconfig"></a>
A configuration for a set of HTTP headers to remove from the HTTP response\.  
_Required_: No  
_Type_: [RemoveHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-removeheadersconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecurityHeadersConfig` <a name="cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-securityheadersconfig"></a>
A configuration for a set of security\-related HTTP response headers\.  
_Required_: No  
_Type_: [SecurityHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServerTimingHeadersConfig` <a name="cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-servertimingheadersconfig"></a>
A configuration for enabling the `Server-Timing` header in HTTP responses sent from CloudFront\.  
_Required_: No  
_Type_: [ServerTimingHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-servertimingheadersconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
