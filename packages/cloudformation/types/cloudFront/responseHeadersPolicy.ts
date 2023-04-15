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
 * Determines whether CloudFront includes the `X-XSS-Protection` HTTP response header and the header's value.
 *
 * For more information about the `X-XSS-Protection` HTTP response header, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html}
 **/
export interface CloudFrontResponseHeadersPolicyXSSProtection {
  /**
   * A reporting URI, which CloudFront uses as the value of the `report` directive in the `X-XSS-Protection` header.
   *
   * You cannot specify a `ReportUri` when `ModeBlock` is `true`.
   *
   * For more information about using a reporting URL, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReportUri?: Value<string>;
  /**
   * A Boolean that determines whether CloudFront overrides the `X-XSS-Protection` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override: Value<boolean>;
  /**
   * A Boolean that determines the value of the `X-XSS-Protection` HTTP response header. When this setting is `true`, the value of the `X-XSS-Protection` header is `1`. When this setting is `false`, the value of the `X-XSS-Protection` header is `0`.
   *
   * For more information about these settings, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protection: Value<boolean>;
  /**
   * A Boolean that determines whether CloudFront includes the `mode=block` directive in the `X-XSS-Protection` header.
   *
   * For more information about this directive, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModeBlock?: Value<boolean>;
}

/**
 * A response headers policy configuration.
 *
 * A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html}
 **/
export interface CloudFrontResponseHeadersPolicyResponseHeadersPolicyConfig {
  /**
   * A comment to describe the response headers policy.
   *
   * The comment cannot be longer than 128 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment?: Value<string>;
  /**
   * A configuration for a set of security-related HTTP response headers.
   *
   * _Required_: No
   *
   * _Type_: [SecurityHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityHeadersConfig?: CloudFrontResponseHeadersPolicySecurityHeadersConfig;
  /**
   * A configuration for a set of HTTP headers to remove from the HTTP response.
   *
   * _Required_: No
   *
   * _Type_: [RemoveHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-removeheadersconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RemoveHeadersConfig?: CloudFrontResponseHeadersPolicyRemoveHeadersConfig;
  /**
   * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).
   *
   * _Required_: No
   *
   * _Type_: [CorsConfig](aws-properties-cloudfront-responseheaderspolicy-corsconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CorsConfig?: CloudFrontResponseHeadersPolicyCorsConfig;
  /**
   * A configuration for enabling the `Server-Timing` header in HTTP responses sent from CloudFront.
   *
   * _Required_: No
   *
   * _Type_: [ServerTimingHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-servertimingheadersconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerTimingHeadersConfig?: CloudFrontResponseHeadersPolicyServerTimingHeadersConfig;
  /**
   * A configuration for a set of custom HTTP response headers.
   *
   * _Required_: No
   *
   * _Type_: [CustomHeadersConfig](aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomHeadersConfig?: CloudFrontResponseHeadersPolicyCustomHeadersConfig;
  /**
   * A name to identify the response headers policy.
   *
   * The name must be unique for response headers policies in this AWS account.
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
 * A configuration for enabling the `Server-Timing` header in HTTP responses sent from CloudFront.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-servertimingheadersconfig.html}
 **/
export interface CloudFrontResponseHeadersPolicyServerTimingHeadersConfig {
  /**
   * A Boolean that determines whether CloudFront adds the `Server-Timing` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the `Server-Timing` header to. When you set the sampling rate to 100, CloudFront adds the `Server-Timing` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0–100 with up to four decimal places.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamplingRate?: Value<number>;
}

/**
 * A list of HTTP header names that CloudFront includes as values for the `Access-Control-Allow-Headers` HTTP response header.
 *
 * For more information about the `Access-Control-Allow-Headers` HTTP response header, see [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowheaders.html}
 **/
export interface CloudFrontResponseHeadersPolicyAccessControlAllowHeaders {
  /**
   * The list of HTTP header names. You can specify `*` to allow all headers.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items: List<Value<string>>;
}

/**
 * An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html}
 **/
export interface CloudFrontResponseHeadersPolicyCustomHeader {
  /**
   * The HTTP response header name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header: Value<string>;
  /**
   * The value for the HTTP response header.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override: Value<boolean>;
}

/**
 * A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html}
 **/
export interface CloudFrontResponseHeadersPolicySecurityHeadersConfig {
  /**
   * The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header.
   *
   * For more information about the `Content-Security-Policy` HTTP response header, see [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: [ContentSecurityPolicy](aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentSecurityPolicy?: CloudFrontResponseHeadersPolicyContentSecurityPolicy;
  /**
   * Determines whether CloudFront includes the `X-Frame-Options` HTTP response header and the header's value.
   *
   * For more information about the `X-Frame-Options` HTTP response header, see [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: [FrameOptions](aws-properties-cloudfront-responseheaderspolicy-frameoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameOptions?: CloudFrontResponseHeadersPolicyFrameOptions;
  /**
   * Determines whether CloudFront includes the `X-Content-Type-Options` HTTP response header with its value set to `nosniff`.
   *
   * For more information about the `X-Content-Type-Options` HTTP response header, see [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: [ContentTypeOptions](aws-properties-cloudfront-responseheaderspolicy-contenttypeoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentTypeOptions?: CloudFrontResponseHeadersPolicyContentTypeOptions;
  /**
   * Determines whether CloudFront includes the `Strict-Transport-Security` HTTP response header and the header's value.
   *
   * For more information about the `Strict-Transport-Security` HTTP response header, see [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: [StrictTransportSecurity](aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StrictTransportSecurity?: CloudFrontResponseHeadersPolicyStrictTransportSecurity;
  /**
   * Determines whether CloudFront includes the `X-XSS-Protection` HTTP response header and the header's value.
   *
   * For more information about the `X-XSS-Protection` HTTP response header, see [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: [XSSProtection](aws-properties-cloudfront-responseheaderspolicy-xssprotection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XSSProtection?: CloudFrontResponseHeadersPolicyXSSProtection;
  /**
   * Determines whether CloudFront includes the `Referrer-Policy` HTTP response header and the header's value.
   *
   * For more information about the `Referrer-Policy` HTTP response header, see [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: [ReferrerPolicy](aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferrerPolicy?: CloudFrontResponseHeadersPolicyReferrerPolicy;
}

/**
 * A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.html}
 **/
export interface CloudFrontResponseHeadersPolicyCustomHeadersConfig {
  /**
   * The list of HTTP response headers and their values.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CustomHeader](aws-properties-cloudfront-responseheaderspolicy-customheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items: List<CloudFrontResponseHeadersPolicyCustomHeader>;
}

/**
 * A list of HTTP headers that CloudFront includes as values for the `Access-Control-Expose-Headers` HTTP response header.
 *
 * For more information about the `Access-Control-Expose-Headers` HTTP response header, see [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolexposeheaders.html}
 **/
export interface CloudFrontResponseHeadersPolicyAccessControlExposeHeaders {
  /**
   * The list of HTTP headers. You can specify `*` to expose all headers.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items: List<Value<string>>;
}

/**
 * The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheader.html}
 **/
export interface CloudFrontResponseHeadersPolicyRemoveHeader {
  /**
   * The HTTP header name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header: Value<string>;
}

/**
 * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.
 *
 * For more information about CORS, see [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html}
 **/
export interface CloudFrontResponseHeadersPolicyCorsConfig {
  /**
   * A Boolean that CloudFront uses as the value for the `Access-Control-Allow-Credentials` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Credentials` HTTP response header, see [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlAllowCredentials: Value<boolean>;
  /**
   * A list of HTTP header names that CloudFront includes as values for the `Access-Control-Allow-Headers` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Headers` HTTP response header, see [Access-Control-Allow-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
   *
   * _Required_: Yes
   *
   * _Type_: [AccessControlAllowHeaders](aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowheaders.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlAllowHeaders: CloudFrontResponseHeadersPolicyAccessControlAllowHeaders;
  /**
   * A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginOverride: Value<boolean>;
  /**
   * A list of HTTP methods that CloudFront includes as values for the `Access-Control-Allow-Methods` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Methods` HTTP response header, see [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
   *
   * _Required_: Yes
   *
   * _Type_: [AccessControlAllowMethods](aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowmethods.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlAllowMethods: CloudFrontResponseHeadersPolicyAccessControlAllowMethods;
  /**
   * A list of HTTP headers that CloudFront includes as values for the `Access-Control-Expose-Headers` HTTP response header.
   *
   * For more information about the `Access-Control-Expose-Headers` HTTP response header, see [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: [AccessControlExposeHeaders](aws-properties-cloudfront-responseheaderspolicy-accesscontrolexposeheaders.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlExposeHeaders?: CloudFrontResponseHeadersPolicyAccessControlExposeHeaders;
  /**
   * A list of origins (domain names) that CloudFront can use as the value for the `Access-Control-Allow-Origin` HTTP response header.
   *
   * For more information about the `Access-Control-Allow-Origin` HTTP response header, see [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * _Required_: Yes
   *
   * _Type_: [AccessControlAllowOrigins](aws-properties-cloudfront-responseheaderspolicy-accesscontrolalloworigins.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlAllowOrigins: CloudFrontResponseHeadersPolicyAccessControlAllowOrigins;
  /**
   * A number that CloudFront uses as the value for the `Access-Control-Max-Age` HTTP response header.
   *
   * For more information about the `Access-Control-Max-Age` HTTP response header, see [Access-Control-Max-Age](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlMaxAgeSec?: Value<number>;
}

/**
 * A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheadersconfig.html}
 **/
export interface CloudFrontResponseHeadersPolicyRemoveHeadersConfig {
  /**
   * The list of HTTP header names.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RemoveHeader](aws-properties-cloudfront-responseheaderspolicy-removeheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items: List<CloudFrontResponseHeadersPolicyRemoveHeader>;
}

/**
 * A list of HTTP methods that CloudFront includes as values for the `Access-Control-Allow-Methods` HTTP response header.
 *
 * For more information about the `Access-Control-Allow-Methods` HTTP response header, see [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowmethods.html}
 **/
export interface CloudFrontResponseHeadersPolicyAccessControlAllowMethods {
  /**
   * The list of HTTP methods. Valid values are:
   */
  Items: List<Value<string>>;
}

/**
 * Determines whether CloudFront includes the `Referrer-Policy` HTTP response header and the header's value.
 *
 * For more information about the `Referrer-Policy` HTTP response header, see [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.html}
 **/
export interface CloudFrontResponseHeadersPolicyReferrerPolicy {
  /**
   * A Boolean that determines whether CloudFront overrides the `Referrer-Policy` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override: Value<boolean>;
  /**
   * The value of the `Referrer-Policy` HTTP response header. Valid values are:
   */
  ReferrerPolicy: Value<string>;
}

/**
 * Determines whether CloudFront includes the `X-Frame-Options` HTTP response header and the header's value.
 *
 * For more information about the `X-Frame-Options` HTTP response header, see [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-frameoptions.html}
 **/
export interface CloudFrontResponseHeadersPolicyFrameOptions {
  /**
   * The value of the `X-Frame-Options` HTTP response header. Valid values are `DENY` and `SAMEORIGIN`.
   *
   * For more information about these values, see [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DENY | SAMEORIGIN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameOption: Value<string>;
  /**
   * A Boolean that determines whether CloudFront overrides the `X-Frame-Options` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override: Value<boolean>;
}

/**
 * The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header.
 *
 * For more information about the `Content-Security-Policy` HTTP response header, see [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.html}
 **/
export interface CloudFrontResponseHeadersPolicyContentSecurityPolicy {
  /**
   * The policy directives and their values that CloudFront includes as values for the `Content-Security-Policy` HTTP response header.
   *
   * _Required_: Yes
   *
   * _Type_: [String](#aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentSecurityPolicy: Value<string>;
  /**
   * A Boolean that determines whether CloudFront overrides the `Content-Security-Policy` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override: Value<boolean>;
}

/**
 * Determines whether CloudFront includes the `Strict-Transport-Security` HTTP response header and the header's value.
 *
 * For more information about the `Strict-Transport-Security` HTTP response header, see [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html}
 **/
export interface CloudFrontResponseHeadersPolicyStrictTransportSecurity {
  /**
   * A Boolean that determines whether CloudFront includes the `preload` directive in the `Strict-Transport-Security` HTTP response header.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Preload?: Value<boolean>;
  /**
   * A number that CloudFront uses as the value for the `max-age` directive in the `Strict-Transport-Security` HTTP response header.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlMaxAgeSec: Value<number>;
  /**
   * A Boolean that determines whether CloudFront includes the `includeSubDomains` directive in the `Strict-Transport-Security` HTTP response header.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeSubdomains?: Value<boolean>;
  /**
   * A Boolean that determines whether CloudFront overrides the `Strict-Transport-Security` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override: Value<boolean>;
}

/**
 * A list of origins (domain names) that CloudFront can use as the value for the `Access-Control-Allow-Origin` HTTP response header.
 *
 * For more information about the `Access-Control-Allow-Origin` HTTP response header, see [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolalloworigins.html}
 **/
export interface CloudFrontResponseHeadersPolicyAccessControlAllowOrigins {
  /**
   * The list of origins (domain names). You can specify `*` to allow all origins.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items: List<Value<string>>;
}

/**
 * Determines whether CloudFront includes the `X-Content-Type-Options` HTTP response header with its value set to `nosniff`.
 *
 * For more information about the `X-Content-Type-Options` HTTP response header, see [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contenttypeoptions.html}
 **/
export interface CloudFrontResponseHeadersPolicyContentTypeOptions {
  /**
   * A Boolean that determines whether CloudFront overrides the `X-Content-Type-Options` HTTP response header received from the origin with the one specified in this response headers policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override: Value<boolean>;
}
export interface CloudFrontResponseHeadersPolicyProperties {
  /**
   * A response headers policy configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [ResponseHeadersPolicyConfig](aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseHeadersPolicyConfig: CloudFrontResponseHeadersPolicyResponseHeadersPolicyConfig;
}

/**
 * A response headers policy.
 *
 * A response headers policy contains information about a set of HTTP response headers.
 *
 * After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.
 *
 * For more information, see [Adding or removing HTTP headers in CloudFront responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html}
 */
export interface CloudFrontResponseHeadersPolicyResource {
  Type: 'AWS::CloudFront::ResponseHeadersPolicy';
  Properties: CloudFrontResponseHeadersPolicyProperties;
}
