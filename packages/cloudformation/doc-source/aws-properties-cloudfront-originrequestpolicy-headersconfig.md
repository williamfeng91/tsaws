# AWS::CloudFront::OriginRequestPolicy HeadersConfig<a name="aws-properties-cloudfront-originrequestpolicy-headersconfig"></a>

An object that determines whether any HTTP headers \(and if so, which headers\) are included in requests that CloudFront sends to the origin\.

## Syntax<a name="aws-properties-cloudfront-originrequestpolicy-headersconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-originrequestpolicy-headersconfig-syntax.json"></a>

```
{
  "[HeaderBehavior](#cfn-cloudfront-originrequestpolicy-headersconfig-headerbehavior)" : String,
  "[Headers](#cfn-cloudfront-originrequestpolicy-headersconfig-headers)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-cloudfront-originrequestpolicy-headersconfig-syntax.yaml"></a>

```
  [HeaderBehavior](#cfn-cloudfront-originrequestpolicy-headersconfig-headerbehavior): String
  [Headers](#cfn-cloudfront-originrequestpolicy-headersconfig-headers):
    - String
```

## Properties<a name="aws-properties-cloudfront-originrequestpolicy-headersconfig-properties"></a>

`HeaderBehavior` <a name="cfn-cloudfront-originrequestpolicy-headersconfig-headerbehavior"></a>
Determines whether any HTTP headers are included in requests that CloudFront sends to the origin\. Valid values are:

- `none` – No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin\. Even when this field is set to `none`, any headers that are listed in a `CachePolicy` _are_ included in origin requests\.
- `whitelist` – Only the HTTP headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin\.
- `allViewer` – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin\.
- `allViewerAndWhitelistCloudFront` – All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin\. The additional headers are added by CloudFront\.
- `allExcept` – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, _ **except** _ for those listed in the `Headers` type, which are not included\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `allExcept | allViewer | allViewerAndWhitelistCloudFront | none | whitelist`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Headers` <a name="cfn-cloudfront-originrequestpolicy-headersconfig-headers"></a>
Contains a list of HTTP header names\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
