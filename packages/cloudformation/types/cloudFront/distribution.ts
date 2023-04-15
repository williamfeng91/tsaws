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
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `LegacyS3Origin` property type specifies Property description not available. for an [AWS::CloudFront::Distribution](aws-resource-cloudfront-distribution.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacys3origin.html}
 **/
export interface CloudFrontDistributionLegacyS3Origin {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginAccessIdentity?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DNSName: Value<string>;
}

/**
 * A custom origin. A custom origin is any origin that is _not_ an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is [configured with static website hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) _is_ a custom origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customoriginconfig.html}
 **/
export interface CloudFrontDistributionCustomOriginConfig {
  /**
   * Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the _origin response timeout_. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 30 seconds.
   *
   * For more information, see [Origin Response Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginReadTimeout?: Value<number>;
  /**
   * The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTPSPort?: Value<number>;
  /**
   * Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 5 seconds.
   *
   * For more information, see [Origin Keep-alive Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginKeepaliveTimeout) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginKeepaliveTimeout?: Value<number>;
  /**
   * Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include `SSLv3`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`.
   *
   * For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginSSLProtocols?: List<Value<string>>;
  /**
   * The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTPPort?: Value<number>;
  /**
   * Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:
   */
  OriginProtocolPolicy: Value<string>;
}

/**
 * A complex data type for the origins included in an origin group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmembers.html}
 **/
export interface CloudFrontDistributionOriginGroupMembers {
  /**
   * The number of origins in an origin group.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Quantity: Value<number>;
  /**
   * Items (origins) in an origin group.
   *
   * _Required_: Yes
   *
   * _Type_: List of [OriginGroupMember](aws-properties-cloudfront-distribution-origingroupmember.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items: List<CloudFrontDistributionOriginGroupMember>;
}

/**
 * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
 *
 * If the distribution doesn't use `Aliases` (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as `d111111abcdef8.cloudfront.net`—set `CloudFrontDefaultCertificate` to `true` and leave all other fields empty.
 *
 * If the distribution uses `Aliases` (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:
 *
 * All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use `ViewerProtocolPolicy` in the `CacheBehavior` or `DefaultCacheBehavior`. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use `CustomOriginConfig`.
 *
 * For more information, see [Using HTTPS with CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html) and [ Using Alternate Domain Names and HTTPS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-viewercertificate.html}
 **/
export interface CloudFrontDistributionViewerCertificate {
  /**
   * In CloudFormation, this field name is `IamCertificateId`. Note the different capitalization.
   *
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html), provide the ID of the IAM certificate.
   *
   * If you specify an IAM certificate ID, you must also specify values for `MinimumProtocolVersion` and `SSLSupportMethod`. (In CloudFormation, the field name is `SslSupportMethod`. Note the different capitalization.)
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamCertificateId?: Value<string>;
  /**
   * In CloudFormation, this field name is `SslSupportMethod`. Note the different capitalization.
   *
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.
   */
  SslSupportMethod?: Value<string>;
  /**
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:
   */
  MinimumProtocolVersion?: Value<string>;
  /**
   * If the distribution uses the CloudFront domain name such as `d111111abcdef8.cloudfront.net`, set this field to `true`.
   *
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs), set this field to `false` and specify values for the following fields:
   *
   * In CloudFormation, these field names are `AcmCertificateArn` and `IamCertificateId`. Note the different capitalization.
   */
  CloudFrontDefaultCertificate?: Value<boolean>;
  /**
   * In CloudFormation, this field name is `AcmCertificateArn`. Note the different capitalization.
   *
   * If the distribution uses `Aliases` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [AWS Certificate Manager (ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html), provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (`us-east-1`).
   *
   * If you specify an ACM certificate ARN, you must also specify values for `MinimumProtocolVersion` and `SSLSupportMethod`. (In CloudFormation, the field name is `SslSupportMethod`. Note the different capitalization.)
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcmCertificateArn?: Value<string>;
}

/**
 * A complex type that controls:
 *
 * For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customerrorresponse.html}
 **/
export interface CloudFrontDistributionCustomErrorResponse {
  /**
   * The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:
   */
  ResponseCode?: Value<number>;
  /**
   * The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in `ErrorCode`. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.
   *
   * For more information, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorCachingMinTTL?: Value<number>;
  /**
   * The HTTP status code for which you want to specify a custom error page and/or a caching duration.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorCode: Value<number>;
  /**
   * The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by `ErrorCode`, for example, `/4xx-errors/403-forbidden.html`. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:
   */
  ResponsePagePath?: Value<string>;
}

/**
 * An origin in an origin group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmember.html}
 **/
export interface CloudFrontDistributionOriginGroupMember {
  /**
   * The ID for an origin in an origin group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginId: Value<string>;
}

/**
 * A complex type that describes how CloudFront processes requests.
 *
 * You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.
 *
 * For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) in the _Amazon CloudFront Developer Guide_.
 *
 * If you don't want to specify any cache behaviors, include only an empty `CacheBehaviors` element. Don't include an empty `CacheBehavior` element because this is invalid.
 *
 * To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty `CacheBehaviors` element.
 *
 * To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.
 *
 * For more information about cache behaviors, see [Cache Behavior Settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cachebehavior.html}
 **/
export interface CloudFrontDistributionCacheBehavior {
  /**
   * Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Compress?: Value<boolean>;
  /**
   * A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the `LIVE` stage to associate them with a cache behavior.
   *
   * _Required_: No
   *
   * _Type_: List of [FunctionAssociation](aws-properties-cloudfront-distribution-functionassociation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionAssociations?: List<CloudFrontDistributionFunctionAssociation>;
  /**
   * A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
   *
   * _Required_: No
   *
   * _Type_: List of [LambdaFunctionAssociation](aws-properties-cloudfront-distribution-lambdafunctionassociation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionAssociations?: List<CloudFrontDistributionLambdaFunctionAssociation>;
  /**
   * The value of `ID` for the origin that you want CloudFront to route requests to when they match this cache behavior.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetOriginId: Value<string>;
  /**
   * The protocol that viewers can use to access the files in the origin specified by `TargetOriginId` when a request matches the path pattern in `PathPattern`. You can specify the following options:
   */
  ViewerProtocolPolicy: Value<string>;
  /**
   * The identifier for a response headers policy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseHeadersPolicyId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RealtimeLogConfigArn?: Value<string>;
  /**
   * We recommend using `TrustedKeyGroups` instead of `TrustedSigners`.
   *
   * A list of AWS account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's AWS account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrustedSigners?: List<Value<string>>;
  /**
   * This field is deprecated. We recommend that you use the `DefaultTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultTTL?: Value<number>;
  /**
   * The value of `ID` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLevelEncryptionId?: Value<string>;
  /**
   * A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrustedKeyGroups?: List<Value<string>>;
  /**
   * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
   */
  AllowedMethods?: List<Value<string>>;
  /**
   * The pattern (for example, `images/*.jpg`) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.
   *
   * You can optionally include a slash (`/`) at the beginning of the path pattern. For example, `/images/*.jpg`. CloudFront behavior is the same with or without the leading `/`.
   *
   * The path pattern for the default cache behavior is `*` and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.
   *
   * For more information, see [Path Pattern](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern) in the _ Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathPattern: Value<string>;
  /**
   * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
   */
  CachedMethods?: List<Value<string>>;
  /**
   * Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify `true`; if not, specify `false`. If you specify `true` for `SmoothStreaming`, you can still distribute other content using this cache behavior if the content matches the value of `PathPattern`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmoothStreaming?: Value<boolean>;
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * A `CacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
   *
   * _Required_: Conditional
   *
   * _Type_: [ForwardedValues](aws-properties-cloudfront-distribution-forwardedvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedValues?: CloudFrontDistributionForwardedValues;
  /**
   * The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginRequestPolicyId?: Value<string>;
  /**
   * This field is deprecated. We recommend that you use the `MinTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [ Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _ Amazon CloudFront Developer Guide_.
   *
   * You must specify `0` for `MinTTL` if you configure CloudFront to forward all headers to your origin (under `Headers`, if you specify `1` for `Quantity` and `*` for `Name`).
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinTTL?: Value<number>;
  /**
   * The unique identifier of the cache policy that is attached to this cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * A `CacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CachePolicyId?: Value<string>;
  /**
   * This field is deprecated. We recommend that you use the `MaxTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxTTL?: Value<number>;
}

/**
 * A complex type that describes the default cache behavior if you don't specify a `CacheBehavior` element or if request URLs don't match any of the values of `PathPattern` in `CacheBehavior` elements. You must create exactly one default cache behavior.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-defaultcachebehavior.html}
 **/
export interface CloudFrontDistributionDefaultCacheBehavior {
  /**
   * Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify `true`; if not, specify `false`. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Compress?: Value<boolean>;
  /**
   * A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the `LIVE` stage to associate them with a cache behavior.
   *
   * _Required_: No
   *
   * _Type_: List of [FunctionAssociation](aws-properties-cloudfront-distribution-functionassociation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionAssociations?: List<CloudFrontDistributionFunctionAssociation>;
  /**
   * A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
   *
   * _Required_: No
   *
   * _Type_: List of [LambdaFunctionAssociation](aws-properties-cloudfront-distribution-lambdafunctionassociation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionAssociations?: List<CloudFrontDistributionLambdaFunctionAssociation>;
  /**
   * The value of `ID` for the origin that you want CloudFront to route requests to when they use the default cache behavior.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetOriginId: Value<string>;
  /**
   * The protocol that viewers can use to access the files in the origin specified by `TargetOriginId` when a request matches the path pattern in `PathPattern`. You can specify the following options:
   */
  ViewerProtocolPolicy: Value<string>;
  /**
   * The identifier for a response headers policy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseHeadersPolicyId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RealtimeLogConfigArn?: Value<string>;
  /**
   * We recommend using `TrustedKeyGroups` instead of `TrustedSigners`.
   *
   * A list of AWS account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's AWS account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrustedSigners?: List<Value<string>>;
  /**
   * This field is deprecated. We recommend that you use the `DefaultTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultTTL?: Value<number>;
  /**
   * The value of `ID` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldLevelEncryptionId?: Value<string>;
  /**
   * A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
   *
   * When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrustedKeyGroups?: List<Value<string>>;
  /**
   * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
   */
  AllowedMethods?: List<Value<string>>;
  /**
   * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
   */
  CachedMethods?: List<Value<string>>;
  /**
   * Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify `true`; if not, specify `false`. If you specify `true` for `SmoothStreaming`, you can still distribute other content using this cache behavior if the content matches the value of `PathPattern`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmoothStreaming?: Value<boolean>;
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * A `DefaultCacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
   *
   * _Required_: Conditional
   *
   * _Type_: [ForwardedValues](aws-properties-cloudfront-distribution-forwardedvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedValues?: CloudFrontDistributionForwardedValues;
  /**
   * The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginRequestPolicyId?: Value<string>;
  /**
   * This field is deprecated. We recommend that you use the `MinTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * You must specify `0` for `MinTTL` if you configure CloudFront to forward all headers to your origin (under `Headers`, if you specify `1` for `Quantity` and `*` for `Name`).
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinTTL?: Value<number>;
  /**
   * The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * A `DefaultCacheBehavior` must include either a `CachePolicyId` or `ForwardedValues`. We recommend that you use a `CachePolicyId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CachePolicyId?: Value<string>;
  /**
   * This field is deprecated. We recommend that you use the `MaxTTL` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as `Cache-Control max-age`, `Cache-Control s-maxage`, and `Expires` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxTTL?: Value<number>;
}

/**
 * A complex type that identifies ways in which you want to restrict distribution of your content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-restrictions.html}
 **/
export interface CloudFrontDistributionRestrictions {
  /**
   * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using `MaxMind` GeoIP databases. To disable geo restriction, remove the [Restrictions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions) property from your stack template.
   *
   * _Required_: Yes
   *
   * _Type_: [GeoRestriction](aws-properties-cloudfront-distribution-georestriction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeoRestriction: CloudFrontDistributionGeoRestriction;
}

/**
 * A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupfailovercriteria.html}
 **/
export interface CloudFrontDistributionOriginGroupFailoverCriteria {
  /**
   * The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.
   *
   * _Required_: Yes
   *
   * _Type_: [StatusCodes](aws-properties-cloudfront-distribution-statuscodes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusCodes: CloudFrontDistributionStatusCodes;
}

/**
 * A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the `CustomOriginConfig` element instead.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-s3originconfig.html}
 **/
export interface CloudFrontDistributionS3OriginConfig {
  /**
   * The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can _only_ access objects in an Amazon S3 bucket through CloudFront. The format of the value is:
   *
   * origin-access-identity/cloudfront/_ID-of-origin-access-identity_
   *
   * where `ID-of-origin-access-identity` is the value that CloudFront returned in the `ID` element when you created the origin access identity.
   *
   * If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty `OriginAccessIdentity` element.
   *
   * To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty `OriginAccessIdentity` element.
   *
   * To replace the origin access identity, update the distribution configuration and specify the new origin access identity.
   *
   * For more information about the origin access identity, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginAccessIdentity?: Value<string>;
}

/**
 * A complex type that controls whether access logs are written for the distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-logging.html}
 **/
export interface CloudFrontDistributionLogging {
  /**
   * Specifies whether you want CloudFront to include cookies in access logs, specify `true` for `IncludeCookies`. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify `false` for `IncludeCookies`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeCookies?: Value<boolean>;
  /**
   * The Amazon S3 bucket to store the access logs in, for example, `myawslogbucket.s3.amazonaws.com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * An optional string that you want CloudFront to prefix to the access log `filenames` for this distribution, for example, `myprefix/`. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty `Prefix` element in the `Logging` element.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-functionassociation.html}
 **/
export interface CloudFrontDistributionFunctionAssociation {
  /**
   * The Amazon Resource Name (ARN) of the function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `108`
   *
   * _Pattern_: `arn:aws:cloudfront::[0-9]{12}:function/[a-zA-Z0-9-_]{1,64}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionARN?: Value<string>;
  /**
   * The event type of the function, either `viewer-request` or `viewer-response`. You cannot use origin-facing event types (`origin-request` and `origin-response`) with a CloudFront function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `origin-request | origin-response | viewer-request | viewer-response`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventType?: Value<string>;
}

/**
 * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 *
 * If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
 *
 * If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
 *
 * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see [How CloudFront Forwards, Caches, and Logs Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cookies.html}
 **/
export interface CloudFrontDistributionCookies {
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * Required if you specify `whitelist` for the value of `Forward`. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.
   *
   * If you specify `all` or `none` for the value of `Forward`, omit `WhitelistedNames`. If you change the value of `Forward` from `whitelist` to `all` or `none` and you don't delete the `WhitelistedNames` element and its child elements, CloudFront deletes them automatically.
   *
   * For the current limit on the number of cookie names that you can whitelist for each cache behavior, see [ CloudFront Limits](https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront) in the _ AWS General Reference_.
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhitelistedNames?: List<Value<string>>;
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send cookies to the origin but not include them in the cache key, use origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the `WhitelistedNames` complex type.
   *
   * Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the `Forward` element.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `all | none | whitelist`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Forward: Value<string>;
}

/**
 * A distribution configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html}
 **/
export interface CloudFrontDistributionDistributionConfig {
  /**
   * A complex type that controls whether access logs are written for the distribution.
   *
   * For more information about logging, see [Access Logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [Logging](aws-properties-cloudfront-distribution-logging.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logging?: CloudFrontDistributionLogging;
  /**
   * A comment to describe the distribution. The comment cannot be longer than 128 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment?: Value<string>;
  /**
   * The object that you want CloudFront to request from your origin (for example, `index.html`) when a viewer requests the root URL for your distribution (`https://www.example.com`) instead of an object in your distribution (`https://www.example.com/product-description.html`). Specifying a default root object avoids exposing the contents of your distribution.
   *
   * Specify only the object name, for example, `index.html`. Don't add a `/` before the object name.
   *
   * If you don't want to specify a default root object when you create a distribution, include an empty `DefaultRootObject` element.
   *
   * To delete the default root object from an existing distribution, update the distribution configuration and include an empty `DefaultRootObject` element.
   *
   * To replace the default root object, update the distribution configuration and specify the new object.
   *
   * For more information about the default root object, see [Creating a Default Root Object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultRootObject?: Value<string>;
  /**
   * A complex type that contains information about origins for this distribution.
   *
   * _Required_: No
   *
   * _Type_: List of [Origin](aws-properties-cloudfront-distribution-origin.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Origins?: List<CloudFrontDistributionOrigin>;
  /**
   * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
   *
   * _Required_: No
   *
   * _Type_: [ViewerCertificate](aws-properties-cloudfront-distribution-viewercertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ViewerCertificate?: CloudFrontDistributionViewerCertificate;
  /**
   * The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify `PriceClass_All`, CloudFront responds to requests for your objects from all CloudFront edge locations.
   *
   * If you specify a price class other than `PriceClass_All`, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.
   *
   * For more information about price classes, see [Choosing the Price Class for a CloudFront Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html) in the _Amazon CloudFront Developer Guide_. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see [Amazon CloudFront Pricing](http://aws.amazon.com/cloudfront/pricing/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PriceClass_100 | PriceClass_200 | PriceClass_All`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PriceClass?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [LegacyCustomOrigin](aws-properties-cloudfront-distribution-legacycustomorigin.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomOrigin?: CloudFrontDistributionLegacyCustomOrigin;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [LegacyS3Origin](aws-properties-cloudfront-distribution-legacys3origin.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Origin?: CloudFrontDistributionLegacyS3Origin;
  /**
   * A complex type that describes the default cache behavior if you don't specify a `CacheBehavior` element or if files don't match any of the values of `PathPattern` in `CacheBehavior` elements. You must create exactly one default cache behavior.
   *
   * _Required_: Yes
   *
   * _Type_: [DefaultCacheBehavior](aws-properties-cloudfront-distribution-defaultcachebehavior.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultCacheBehavior: CloudFrontDistributionDefaultCacheBehavior;
  /**
   * A Boolean that indicates whether this is a staging distribution. When this value is `true`, this is a staging distribution. When this value is `false`, this is not a staging distribution.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Staging?: Value<boolean>;
  /**
   * A complex type that controls the following:
   */
  CustomErrorResponses?: List<CloudFrontDistributionCustomErrorResponse>;
  /**
   * The identifier of a continuous deployment policy. For more information, see `CreateContinuousDeploymentPolicy`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContinuousDeploymentPolicyId?: Value<string>;
  /**
   * A complex type that contains information about origin groups for this distribution.
   *
   * _Required_: No
   *
   * _Type_: [OriginGroups](aws-properties-cloudfront-distribution-origingroups.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginGroups?: CloudFrontDistributionOriginGroups;
  /**
   * From this field, you can enable or disable the selected distribution.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Aliases?: List<Value<string>>;
  /**
   * If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify `true`. If you specify `false`, CloudFront responds to IPv6 DNS requests with the DNS response code `NOERROR` and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.
   *
   * In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the `IpAddress` parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see [Creating a Signed URL Using a Custom Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html) in the _Amazon CloudFront Developer Guide_.
   *
   * If you're using an Amazon Route 53 AWS Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:
   */
  IPV6Enabled?: Value<boolean>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CNAMEs?: List<Value<string>>;
  /**
   * A unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of AWS WAF, use the ACL ARN, for example `arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a`. To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example `473e64fd-f30b-4765-81a0-62ad96dd167a`.
   *
   * AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about AWS WAF, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebACLId?: Value<string>;
  /**
   * (Optional) Specify the maximum HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new distributions is `http1.1`.
   *
   * For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).
   *
   * For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see [Connection Migration](https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration) at RFC 9000. For more information about supported TLSv1.3 ciphers, see [Supported protocols and ciphers between viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `http1.1 | http2 | http2and3 | http3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpVersion?: Value<string>;
  /**
   * A complex type that identifies ways in which you want to restrict distribution of your content.
   *
   * _Required_: No
   *
   * _Type_: [Restrictions](aws-properties-cloudfront-distribution-restrictions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Restrictions?: CloudFrontDistributionRestrictions;
  /**
   * A complex type that contains zero or more `CacheBehavior` elements.
   *
   * _Required_: No
   *
   * _Type_: List of [CacheBehavior](aws-properties-cloudfront-distribution-cachebehavior.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheBehaviors?: List<CloudFrontDistributionCacheBehavior>;
}

/**
 * A complex type that contains `HeaderName` and `HeaderValue` elements, if any, for this distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origincustomheader.html}
 **/
export interface CloudFrontDistributionOriginCustomHeader {
  /**
   * The value for the header that you specified in the `HeaderName` field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderValue: Value<string>;
  /**
   * The name of a header that you want CloudFront to send to your origin. For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html) in the _ Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderName: Value<string>;
}

/**
 * An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroup.html}
 **/
export interface CloudFrontDistributionOriginGroup {
  /**
   * The origin group's ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * A complex type that contains information about the failover criteria for an origin group.
   *
   * _Required_: Yes
   *
   * _Type_: [OriginGroupFailoverCriteria](aws-properties-cloudfront-distribution-origingroupfailovercriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailoverCriteria: CloudFrontDistributionOriginGroupFailoverCriteria;
  /**
   * A complex type that contains information about the origins in an origin group.
   *
   * _Required_: Yes
   *
   * _Type_: [OriginGroupMembers](aws-properties-cloudfront-distribution-origingroupmembers.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Members: CloudFrontDistributionOriginGroupMembers;
}

/**
 * A complex data type for the origin groups specified for a distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroups.html}
 **/
export interface CloudFrontDistributionOriginGroups {
  /**
   * The number of origin groups.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Quantity: Value<number>;
  /**
   * The items (origin groups) in a distribution.
   *
   * _Required_: No
   *
   * _Type_: List of [OriginGroup](aws-properties-cloudfront-distribution-origingroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items?: List<CloudFrontDistributionOriginGroup>;
}

/**
 * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using `MaxMind` GeoIP databases. To disable geo restriction, remove the [Restrictions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions) property from your stack template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-georestriction.html}
 **/
export interface CloudFrontDistributionGeoRestriction {
  /**
   * A complex type that contains a `Location` element for each country in which you want CloudFront either to distribute your content (`whitelist`) or not distribute your content (`blacklist`).
   *
   * The `Location` element is a two-letter, uppercase country code for a country that you want to include in your `blacklist` or `whitelist`. Include one `Location` element for each country.
   *
   * CloudFront and `MaxMind` both use `ISO 3166` country codes. For the current list of countries and the corresponding codes, see `ISO 3166-1-alpha-2` code on the _International Organization for Standardization_ website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Locations?: List<Value<string>>;
  /**
   * The method that you want to use to restrict distribution of your content by country:
   */
  RestrictionType: Value<string>;
}

/**
 * A complex type that contains a Lambda@Edge function association.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-lambdafunctionassociation.html}
 **/
export interface CloudFrontDistributionLambdaFunctionAssociation {
  /**
   * A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see [Accessing the Request Body by Choosing the Include Body Option](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html) in the Amazon CloudFront Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeBody?: Value<boolean>;
  /**
   * Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:
   *
   * If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `origin-request | origin-response | viewer-request | viewer-response`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventType?: Value<string>;
  /**
   * The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionARN?: Value<string>;
}

/**
 * The `LegacyCustomOrigin` property type specifies Property description not available. for an [AWS::CloudFront::Distribution](aws-resource-cloudfront-distribution.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacycustomorigin.html}
 **/
export interface CloudFrontDistributionLegacyCustomOrigin {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTPSPort?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginSSLProtocols: List<Value<string>>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DNSName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTPPort?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginProtocolPolicy: Value<string>;
}

/**
 * An origin.
 *
 * An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:
 *
 * For the current maximum number of origins that you can specify per distribution, see [General Quotas on Web Distributions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions) in the _Amazon CloudFront Developer Guide_ (quotas were formerly referred to as limits).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html}
 **/
export interface CloudFrontDistributionOrigin {
  /**
   * The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.
   *
   * For more information, see [Origin Connection Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionTimeout?: Value<number>;
  /**
   * The unique identifier of an origin access control for this origin.
   *
   * For more information, see [Restricting access to an Amazon S3 origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginAccessControlId?: Value<string>;
  /**
   * The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.
   *
   * For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an [Origin Response Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout).
   *
   * For more information, see [Origin Connection Attempts](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionAttempts?: Value<number>;
  /**
   * A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.
   *
   * For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [OriginCustomHeader](aws-properties-cloudfront-distribution-origincustomheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginCustomHeaders?: List<CloudFrontDistributionOriginCustomHeader>;
  /**
   * The domain name for the origin.
   *
   * For more information, see [Origin Domain Name](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainName: Value<string>;
  /**
   * CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.
   *
   * For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [OriginShield](aws-properties-cloudfront-distribution-originshield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginShield?: CloudFrontDistributionOriginShield;
  /**
   * Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the `CustomOriginConfig` type instead.
   *
   * _Required_: Conditional
   *
   * _Type_: [S3OriginConfig](aws-properties-cloudfront-distribution-s3originconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3OriginConfig?: CloudFrontDistributionS3OriginConfig;
  /**
   * An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.
   *
   * For more information, see [Origin Path](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginPath?: Value<string>;
  /**
   * A unique identifier for the origin. This value must be unique within the distribution.
   *
   * Use this value to specify the `TargetOriginId` in a `CacheBehavior` or `DefaultCacheBehavior`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the `S3OriginConfig` type instead.
   *
   * _Required_: Conditional
   *
   * _Type_: [CustomOriginConfig](aws-properties-cloudfront-distribution-customoriginconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomOriginConfig?: CloudFrontDistributionCustomOriginConfig;
}

/**
 * A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-statuscodes.html}
 **/
export interface CloudFrontDistributionStatusCodes {
  /**
   * The number of status codes.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Quantity: Value<number>;
  /**
   * The items (status codes) for an origin group.
   *
   * _Required_: Yes
   *
   * _Type_: List of Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Items: List<Value<number>>;
}

/**
 * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 *
 * If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
 *
 * If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
 *
 * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-forwardedvalues.html}
 **/
export interface CloudFrontDistributionForwardedValues {
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see [How CloudFront Forwards, Caches, and Logs Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [Cookies](aws-properties-cloudfront-distribution-cookies.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cookies?: CloudFrontDistributionCookies;
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include headers in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * A complex type that specifies the `Headers`, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.
   *
   * For more information, see [ Caching Content Based on Request Headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: List<Value<string>>;
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of `QueryString` and on the values that you specify for `QueryStringCacheKeys`, if any:
   *
   * If you specify true for `QueryString` and you don't specify any values for `QueryStringCacheKeys`, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.
   *
   * If you specify true for `QueryString` and you specify one or more values for `QueryStringCacheKeys`, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.
   *
   * If you specify false for `QueryString`, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.
   *
   * For more information, see [Configuring CloudFront to Cache Based on Query String Parameters](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryString: Value<boolean>;
  /**
   * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
   *
   * If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the _Amazon CloudFront Developer Guide_.
   *
   * A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringCacheKeys?: List<Value<string>>;
}

/**
 * CloudFront Origin Shield.
 *
 * Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-originshield.html}
 **/
export interface CloudFrontDistributionOriginShield {
  /**
   * The AWS Region for Origin Shield.
   *
   * Specify the AWS Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as `us-east-2`.
   *
   * When you enable CloudFront Origin Shield, you must specify the AWS Region for Origin Shield. For the list of AWS Regions that you can specify, and for help choosing the best Region for your origin, see [Choosing the AWS Region for Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `[a-z]{2}-[a-z]+-d`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginShieldRegion?: Value<string>;
  /**
   * A flag that specifies whether Origin Shield is enabled.
   *
   * When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}
export interface CloudFrontDistributionProperties {
  /**
   * The distribution's configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [DistributionConfig](aws-properties-cloudfront-distribution-distributionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DistributionConfig: CloudFrontDistributionDistributionConfig;
  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html}
 */
export interface CloudFrontDistributionResource {
  Type: 'AWS::CloudFront::Distribution';
  Properties: CloudFrontDistributionProperties;
}
