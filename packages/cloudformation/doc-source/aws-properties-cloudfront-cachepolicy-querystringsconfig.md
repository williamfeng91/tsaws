# AWS::CloudFront::CachePolicy QueryStringsConfig<a name="aws-properties-cloudfront-cachepolicy-querystringsconfig"></a>

An object that determines whether any URL query strings in viewer requests \(and if so, which query strings\) are included in the cache key and in requests that CloudFront sends to the origin\.

## Syntax<a name="aws-properties-cloudfront-cachepolicy-querystringsconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-cachepolicy-querystringsconfig-syntax.json"></a>

```
{
  "[QueryStringBehavior](#cfn-cloudfront-cachepolicy-querystringsconfig-querystringbehavior)" : String,
  "[QueryStrings](#cfn-cloudfront-cachepolicy-querystringsconfig-querystrings)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-cloudfront-cachepolicy-querystringsconfig-syntax.yaml"></a>

```
  [QueryStringBehavior](#cfn-cloudfront-cachepolicy-querystringsconfig-querystringbehavior):
    String
  [QueryStrings](#cfn-cloudfront-cachepolicy-querystringsconfig-querystrings):
    - String
```

## Properties<a name="aws-properties-cloudfront-cachepolicy-querystringsconfig-properties"></a>

`QueryStringBehavior` <a name="cfn-cloudfront-cachepolicy-querystringsconfig-querystringbehavior"></a>
Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin\. Valid values are:

- `none` – No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin\. Even when this field is set to `none`, any query strings that are listed in an `OriginRequestPolicy` _are_ included in origin requests\.
- `whitelist` – Only the query strings in viewer requests that are listed in the `QueryStringNames` type are included in the cache key and in requests that CloudFront sends to the origin\.
- `allExcept` – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, _ **except** _ those that are listed in the `QueryStringNames` type, which are not included\.
- `all` – All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `all | allExcept | none | whitelist`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueryStrings` <a name="cfn-cloudfront-cachepolicy-querystringsconfig-querystrings"></a>
Contains a list of query string names\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
