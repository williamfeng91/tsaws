/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * `HeaderObject` is a property of the [CacheSettings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html) property. It describes the request headers used by your distribution, which caches your content based on the request headers.
 *
 * For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose that viewer requests for logo.jpg contain a custom product header that has a value of either acme or apex. Also, suppose that you configure your distribution to cache your content based on values in the product header. Your distribution forwards the product header to the origin and caches the response from the origin once for each header value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-headerobject.html}
 **/
export interface LightsailDistributionHeaderObject {
  /**
   * The specific headers to forward to your distribution's origin.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeadersAllowList?: List<Value<string>>;
  /**
   * The headers that you want your distribution to forward to your origin. Your distribution caches your content based on these headers.
   *
   * Use one of the following configurations for your distribution:
   */
  Option?: Value<string>;
}

/**
 * `CacheSettings` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * These settings apply only to your distribution’s `CacheBehaviors` that have a `Behavior` of `cache`. This includes the `DefaultCacheBehavior`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html}
 **/
export interface LightsailDistributionCacheSettings {
  /**
   * An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded.
   *
   * _Required_: No
   *
   * _Type_: [CookieObject](aws-properties-lightsail-distribution-cookieobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedCookies?: LightsailDistributionCookieObject;
  /**
   * The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
   *
   * A value of `0` must be specified for `minimumTTL` if the distribution is configured to forward all headers to the origin.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumTTL?: Value<number>;
  /**
   * The HTTP method responses that are cached by your distribution.
   *
   * You can specify the following options:
   */
  CachedHTTPMethods?: Value<string>;
  /**
   * The HTTP methods that are processed and forwarded to the distribution's origin.
   *
   * You can specify the following options:
   */
  AllowedHTTPMethods?: Value<string>;
  /**
   * The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
   *
   * The value specified applies only when the origin adds HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumTTL?: Value<number>;
  /**
   * An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded.
   *
   * _Required_: No
   *
   * _Type_: [HeaderObject](aws-properties-lightsail-distribution-headerobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedHeaders?: LightsailDistributionHeaderObject;
  /**
   * The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
   *
   * The value specified applies only when the origin does not add HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultTTL?: Value<number>;
  /**
   * An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded.
   *
   * _Required_: No
   *
   * _Type_: [QueryStringObject](aws-properties-lightsail-distribution-querystringobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedQueryStrings?: LightsailDistributionQueryStringObject;
}

/**
 * `InputOrigin` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * An origin can be a instance, bucket, or load balancer. A distribution pulls content from an origin, caches it, and serves it to viewers through a worldwide network of edge servers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-inputorigin.html}
 **/
export interface LightsailDistributionInputOrigin {
  /**
   * The AWS Region name of the origin resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ap-northeast-1 | ap-northeast-2 | ap-south-1 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | us-east-1 | us-east-2 | us-west-1 | us-west-2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionName?: Value<string>;
  /**
   * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `http-only | https-only`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProtocolPolicy?: Value<string>;
  /**
   * The name of the origin resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `w[w-]*w`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * `QueryStringObject` is a property of the [CacheSettings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html) property. It describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.
 *
 * For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-querystringobject.html}
 **/
export interface LightsailDistributionQueryStringObject {
  /**
   * Indicates whether the distribution forwards and caches based on query strings.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Option?: Value<boolean>;
  /**
   * The specific query strings that the distribution forwards to the origin.
   *
   * Your distribution caches content based on the specified query strings.
   *
   * If the `option` parameter is true, then your distribution forwards all query strings, regardless of what you specify using the `QueryStringsAllowList` parameter.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringsAllowList?: List<Value<string>>;
}

/**
 * `CacheBehavior` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehavior.html}
 **/
export interface LightsailDistributionCacheBehavior {
  /**
   * The cache behavior of the distribution.
   *
   * The following cache behaviors can be specified:
   */
  Behavior?: Value<string>;
}

/**
 * `CacheBehaviorPerPath` is a property of the [AWS::Lightsail::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html) resource. It describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
 *
 * Use a per-path cache behavior to override the default cache behavior of a distribution, or to add an exception to it. For example, if you set the `CacheBehavior` to `cache`, you can use a per-path cache behavior to specify a directory, file, or file type that your distribution will cache. If you don’t want your distribution to cache a specified directory, file, or file type, set the per-path cache behavior to `dont-cache`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehaviorperpath.html}
 **/
export interface LightsailDistributionCacheBehaviorPerPath {
  /**
   * The path to a directory or file to cache, or not cache. Use an asterisk symbol to specify wildcard directories (`path/to/assets/*`), and file types (`*.html`, `*jpg`, `*js`). Directories and file paths are case-sensitive.
   *
   * Examples:
   */
  Path?: Value<string>;
  /**
   * The cache behavior for the specified path.
   *
   * You can specify one of the following per-path cache behaviors:
   */
  Behavior?: Value<string>;
}

/**
 * `CookieObject` is a property of the [CacheSettings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html) property. It describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.
 *
 * For the cookies that you specify, your distribution caches separate versions of the specified content based on the cookie values in viewer requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cookieobject.html}
 **/
export interface LightsailDistributionCookieObject {
  /**
   * The specific cookies to forward to your distribution's origin.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CookiesAllowList?: List<Value<string>>;
  /**
   * Specifies which cookies to forward to the distribution's origin for a cache behavior.
   *
   * Use one of the following configurations for your distribution:
   */
  Option?: Value<string>;
}
export interface LightsailDistributionProperties {
  /**
   * The IP address type of the distribution.
   *
   * The possible values are `ipv4` for IPv4 only, and `dualstack` for IPv4 and IPv6.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `dualstack | ipv4`
   *
   * _Update requires_: Updates are not supported.
   */
  IpAddressType?: Value<string>;
  /**
   * An object that describes the origin resource of the distribution, such as a Lightsail instance, bucket, or load balancer.
   *
   * The distribution pulls, caches, and serves content from the origin.
   *
   * _Required_: Yes
   *
   * _Type_: [InputOrigin](aws-properties-lightsail-distribution-inputorigin.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Origin: LightsailDistributionInputOrigin;
  /**
   * The name of the distribution
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DistributionName: Value<string>;
  /**
   * The ID of the bundle applied to the distribution.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BundleId: Value<string>;
  /**
   * An object that describes the default cache behavior of the distribution.
   *
   * _Required_: Yes
   *
   * _Type_: [CacheBehavior](aws-properties-lightsail-distribution-cachebehavior.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultCacheBehavior: LightsailDistributionCacheBehavior;
  /**
   * A Boolean value indicating whether the distribution is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEnabled?: Value<boolean>;
  /**
   * An object that describes the cache behavior settings of the distribution.
   *
   * _Required_: No
   *
   * _Type_: [CacheSettings](aws-properties-lightsail-distribution-cachesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheBehaviorSettings?: LightsailDistributionCacheSettings;
  /**
   * The name of the SSL/TLS certificate attached to the distribution.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `w[w-]*w`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateName?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * The `Value` of `Tags` is optional for Lightsail resources.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * An array of objects that describe the per-path cache behavior of the distribution.
   *
   * _Required_: No
   *
   * _Type_: List of [CacheBehaviorPerPath](aws-properties-lightsail-distribution-cachebehaviorperpath.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheBehaviors?: List<LightsailDistributionCacheBehaviorPerPath>;
}

/**
 * The `AWS::Lightsail::Distribution` resource specifies a content delivery network (CDN) distribution. You can create distributions only in the `us-east-1` AWS Region.
 *
 * A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance, static content hosted on a Lightsail bucket, or through a Lightsail load balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html}
 */
export interface LightsailDistributionResource {
  Type: 'AWS::Lightsail::Distribution';
  Properties: LightsailDistributionProperties;
}
