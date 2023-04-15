# AWS::CloudFront::OriginRequestPolicy CookiesConfig<a name="aws-properties-cloudfront-originrequestpolicy-cookiesconfig"></a>

An object that determines whether any cookies in viewer requests \(and if so, which cookies\) are included in requests that CloudFront sends to the origin\.

## Syntax<a name="aws-properties-cloudfront-originrequestpolicy-cookiesconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-originrequestpolicy-cookiesconfig-syntax.json"></a>

```
{
  "[CookieBehavior](#cfn-cloudfront-originrequestpolicy-cookiesconfig-cookiebehavior)" : String,
  "[Cookies](#cfn-cloudfront-originrequestpolicy-cookiesconfig-cookies)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-cloudfront-originrequestpolicy-cookiesconfig-syntax.yaml"></a>

```
  [CookieBehavior](#cfn-cloudfront-originrequestpolicy-cookiesconfig-cookiebehavior): String
  [Cookies](#cfn-cloudfront-originrequestpolicy-cookiesconfig-cookies):
    - String
```

## Properties<a name="aws-properties-cloudfront-originrequestpolicy-cookiesconfig-properties"></a>

`CookieBehavior` <a name="cfn-cloudfront-originrequestpolicy-cookiesconfig-cookiebehavior"></a>
Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin\. Valid values are:

- `none` – No cookies in viewer requests are included in requests that CloudFront sends to the origin\. Even when this field is set to `none`, any cookies that are listed in a `CachePolicy` _are_ included in origin requests\.
- `whitelist` – Only the cookies in viewer requests that are listed in the `CookieNames` type are included in requests that CloudFront sends to the origin\.
- `all` – All cookies in viewer requests are included in requests that CloudFront sends to the origin\.
- `allExcept` – All cookies in viewer requests are included in requests that CloudFront sends to the origin, _ **except** _ for those listed in the `CookieNames` type, which are not included\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `all | allExcept | none | whitelist`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Cookies` <a name="cfn-cloudfront-originrequestpolicy-cookiesconfig-cookies"></a>
Contains a list of cookie names\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
