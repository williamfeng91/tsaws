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
 * An origin request policy configuration.
 *
 * This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 *
 * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-originrequestpolicyconfig.html}
 **/
export interface CloudFrontOriginRequestPolicyOriginRequestPolicyConfig {
  /**
   * A comment to describe the origin request policy. The comment cannot be longer than 128 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment?: Value<string>;
  /**
   * The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.
   *
   * _Required_: Yes
   *
   * _Type_: [HeadersConfig](aws-properties-cloudfront-originrequestpolicy-headersconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeadersConfig: CloudFrontOriginRequestPolicyHeadersConfig;
  /**
   * The cookies from viewer requests to include in origin requests.
   *
   * _Required_: Yes
   *
   * _Type_: [CookiesConfig](aws-properties-cloudfront-originrequestpolicy-cookiesconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CookiesConfig: CloudFrontOriginRequestPolicyCookiesConfig;
  /**
   * The URL query strings from viewer requests to include in origin requests.
   *
   * _Required_: Yes
   *
   * _Type_: [QueryStringsConfig](aws-properties-cloudfront-originrequestpolicy-querystringsconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringsConfig: CloudFrontOriginRequestPolicyQueryStringsConfig;
  /**
   * A unique name to identify the origin request policy.
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
 * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-headersconfig.html}
 **/
export interface CloudFrontOriginRequestPolicyHeadersConfig {
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
   * Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:
   */
  HeaderBehavior: Value<string>;
}

/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-cookiesconfig.html}
 **/
export interface CloudFrontOriginRequestPolicyCookiesConfig {
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
   * Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
   */
  CookieBehavior: Value<string>;
}

/**
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originrequestpolicy-querystringsconfig.html}
 **/
export interface CloudFrontOriginRequestPolicyQueryStringsConfig {
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
   * Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
   */
  QueryStringBehavior: Value<string>;
}
export interface CloudFrontOriginRequestPolicyProperties {
  /**
   * The origin request policy configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [OriginRequestPolicyConfig](aws-properties-cloudfront-originrequestpolicy-originrequestpolicyconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginRequestPolicyConfig: CloudFrontOriginRequestPolicyOriginRequestPolicyConfig;
}

/**
 * An origin request policy.
 *
 * When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 *
 * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html}
 */
export interface CloudFrontOriginRequestPolicyResource {
  Type: 'AWS::CloudFront::OriginRequestPolicy';
  Properties: CloudFrontOriginRequestPolicyProperties;
}
