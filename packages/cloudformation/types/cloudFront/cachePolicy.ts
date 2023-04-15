/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.
 *
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but _not_ include them in the cache key, use `OriginRequestPolicy`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-parametersincachekeyandforwardedtoorigin.html}
 **/
export interface CloudFrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
  /**
   * A flag that can affect whether the `Accept-Encoding` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
   *
   * This field is related to the `EnableAcceptEncodingGzip` field. If one or both of these fields is `true` _and_ the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:
   */
  EnableAcceptEncodingBrotli?: Value<boolean>;
  /**
   * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * _Required_: Yes
   *
   * _Type_: [HeadersConfig](aws-properties-cloudfront-cachepolicy-headersconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeadersConfig: CloudFrontCachePolicyHeadersConfig;
  /**
   * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * _Required_: Yes
   *
   * _Type_: [CookiesConfig](aws-properties-cloudfront-cachepolicy-cookiesconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CookiesConfig: CloudFrontCachePolicyCookiesConfig;
  /**
   * A flag that can affect whether the `Accept-Encoding` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
   *
   * This field is related to the `EnableAcceptEncodingBrotli` field. If one or both of these fields is `true` _and_ the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:
   */
  EnableAcceptEncodingGzip: Value<boolean>;
  /**
   * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.
   *
   * _Required_: Yes
   *
   * _Type_: [QueryStringsConfig](aws-properties-cloudfront-cachepolicy-querystringsconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringsConfig: CloudFrontCachePolicyQueryStringsConfig;
}

/**
 * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-headersconfig.html}
 **/
export interface CloudFrontCachePolicyHeadersConfig {
  /**
   * Contains a list of HTTP header names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: List<Value<string>>;
  /**
   * Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
   */
  HeaderBehavior: Value<string>;
}

/**
 * A cache policy configuration.
 *
 * This configuration determines the following:
 *
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but _not_ include them in the cache key, use `OriginRequestPolicy`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-cachepolicyconfig.html}
 **/
export interface CloudFrontCachePolicyCachePolicyConfig {
  /**
   * A comment to describe the cache policy. The comment cannot be longer than 128 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment?: Value<string>;
  /**
   * The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinTTL: Value<number>;
  /**
   * The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The default value for this field is 31536000 seconds (one year). If the value of `MinTTL` or `DefaultTTL` is more than 31536000 seconds, then the default value for this field is the same as the value of `DefaultTTL`.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxTTL: Value<number>;
  /**
   * The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.
   *
   * _Required_: Yes
   *
   * _Type_: [ParametersInCacheKeyAndForwardedToOrigin](aws-properties-cloudfront-cachepolicy-parametersincachekeyandforwardedtoorigin.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParametersInCacheKeyAndForwardedToOrigin: CloudFrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
  /**
   * The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object's time to live (TTL) only when the origin does _not_ send `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The default value for this field is 86400 seconds (one day). If the value of `MinTTL` is more than 86400 seconds, then the default value for this field is the same as the value of `MinTTL`.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultTTL: Value<number>;
  /**
   * A unique name to identify the cache policy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-querystringsconfig.html}
 **/
export interface CloudFrontCachePolicyQueryStringsConfig {
  /**
   * Contains a list of query string names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStrings?: List<Value<string>>;
  /**
   * Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
   */
  QueryStringBehavior: Value<string>;
}

/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cachepolicy-cookiesconfig.html}
 **/
export interface CloudFrontCachePolicyCookiesConfig {
  /**
   * Contains a list of cookie names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cookies?: List<Value<string>>;
  /**
   * Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
   */
  CookieBehavior: Value<string>;
}
export interface CloudFrontCachePolicyProperties {
  /**
   * The cache policy configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [CachePolicyConfig](aws-properties-cloudfront-cachepolicy-cachepolicyconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CachePolicyConfig: CloudFrontCachePolicyCachePolicyConfig;
}

/**
 * A cache policy.
 *
 * When it's attached to a cache behavior, the cache policy determines the following:
 *
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but _not_ include them in the cache key, use `OriginRequestPolicy`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cachepolicy.html}
 */
export interface CloudFrontCachePolicyResource {
  Type: 'AWS::CloudFront::CachePolicy';
  Properties: CloudFrontCachePolicyProperties;
}
