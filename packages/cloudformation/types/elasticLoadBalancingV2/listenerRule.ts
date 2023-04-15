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
 * Information about a source IP condition.
 *
 * You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleSourceIpConfig {
  /**
   * The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
   *
   * If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Information about a key/value pair.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleQueryStringKeyValue {
  /**
   * The value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The key. You can omit the key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * Information about a host header condition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleHostHeaderConfig {
  /**
   * The host names. The maximum size of each name is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
   *
   * If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Specifies information required when returning a custom HTTP response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleFixedResponseConfig {
  /**
   * The content type.
   *
   * Valid Values: text/plain | text/css | text/html | application/javascript | application/json
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentType?: Value<string>;
  /**
   * The HTTP response code (2XX, 4XX, or 5XX).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^(2|4|5)dd$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusCode: Value<string>;
  /**
   * The message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageBody?: Value<string>;
}

/**
 * Information about an HTTP header condition.
 *
 * There is a set of standard HTTP header fields. You can also define custom HTTP header fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleHttpHeaderConfig {
  /**
   * The strings to compare against the value of the HTTP header. The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
   *
   * If the same header appears multiple times in the request, we search them in order until a match is found.
   *
   * If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
  /**
   * The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpHeaderName?: Value<string>;
}

/**
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleTargetGroupTuple {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroupArn?: Value<string>;
  /**
   * The weight. The range is 0 to 999.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: Value<number>;
}

/**
 * Specifies information required using an identity provide (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleAuthenticateOidcConfig {
  /**
   * The behavior if the user is not authenticated. The following are possible values:
   */
  OnUnauthenticatedRequest?: Value<string>;
  /**
   * The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenEndpoint: Value<string>;
  /**
   * Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseExistingClientSecret?: Value<boolean>;
  /**
   * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionTimeout?: Value<number>;
  /**
   * The set of user claims to be requested from the IdP. The default is `openid`.
   *
   * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: Value<string>;
  /**
   * The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Issuer: Value<string>;
  /**
   * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set `UseExistingClientSecret` to true.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret?: Value<string>;
  /**
   * The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserInfoEndpoint: Value<string>;
  /**
   * The OAuth 2.0 client identifier.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId: Value<string>;
  /**
   * The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizationEndpoint: Value<string>;
  /**
   * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionCookieName?: Value<string>;
  /**
   * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationRequestExtraParams?: { [key: string]: Value<string> };
}

/**
 * Specifies information required when integrating with Amazon Cognito to authenticate users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleAuthenticateCognitoConfig {
  /**
   * The behavior if the user is not authenticated. The following are possible values:
   */
  OnUnauthenticatedRequest?: Value<string>;
  /**
   * The ID of the Amazon Cognito user pool client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolClientId: Value<string>;
  /**
   * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolDomain: Value<string>;
  /**
   * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionTimeout?: Value<number>;
  /**
   * The set of user claims to be requested from the IdP. The default is `openid`.
   *
   * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: Value<string>;
  /**
   * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionCookieName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolArn: Value<string>;
  /**
   * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationRequestExtraParams?: { [key: string]: Value<string> };
}

/**
 * Information about a query string condition.
 *
 * The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleQueryStringConfig {
  /**
   * The key/value pairs or values to find in the query string. The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in `Values` using a '' character.
   *
   * If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.
   *
   * _Required_: No
   *
   * _Type_: List of [QueryStringKeyValue](aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<ElasticLoadBalancingV2ListenerRuleQueryStringKeyValue>;
}

/**
 * Information about a path pattern condition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRulePathPatternConfig {
  /**
   * The path patterns to compare against the request URL. The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
   *
   * If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Specifies a condition for a listener rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleRuleCondition {
  /**
   * The field in the HTTP request. The following are the possible values:
   */
  Field?: Value<string>;
  /**
   * Information for an HTTP header condition. Specify only when `Field` is `http-header`.
   *
   * _Required_: Conditional
   *
   * _Type_: [HttpHeaderConfig](aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpHeaderConfig?: ElasticLoadBalancingV2ListenerRuleHttpHeaderConfig;
  /**
   * The condition value. Specify only when `Field` is `host-header` or `path-pattern`. Alternatively, to specify multiple host names or multiple path patterns, use `HostHeaderConfig` or `PathPatternConfig`.
   *
   * If `Field` is `host-header` and you're not using `HostHeaderConfig`, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
   */
  Values?: List<Value<string>>;
  /**
   * Information for a query string condition. Specify only when `Field` is `query-string`.
   *
   * _Required_: Conditional
   *
   * _Type_: [QueryStringConfig](aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringConfig?: ElasticLoadBalancingV2ListenerRuleQueryStringConfig;
  /**
   * Information for a host header condition. Specify only when `Field` is `host-header`.
   *
   * _Required_: No
   *
   * _Type_: [HostHeaderConfig](aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostHeaderConfig?: ElasticLoadBalancingV2ListenerRuleHostHeaderConfig;
  /**
   * Information for an HTTP method condition. Specify only when `Field` is `http-request-method`.
   *
   * _Required_: Conditional
   *
   * _Type_: [HttpRequestMethodConfig](aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpRequestMethodConfig?: ElasticLoadBalancingV2ListenerRuleHttpRequestMethodConfig;
  /**
   * Information for a path pattern condition. Specify only when `Field` is `path-pattern`.
   *
   * _Required_: No
   *
   * _Type_: [PathPatternConfig](aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathPatternConfig?: ElasticLoadBalancingV2ListenerRulePathPatternConfig;
  /**
   * Information for a source IP condition. Specify only when `Field` is `source-ip`.
   *
   * _Required_: Conditional
   *
   * _Type_: [SourceIpConfig](aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceIpConfig?: ElasticLoadBalancingV2ListenerRuleSourceIpConfig;
}

/**
 * Information about a redirect action.
 *
 * A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.
 *
 * You can reuse URI components using the following reserved keywords:
 *
 * For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&value=xyz".
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleRedirectConfig {
  /**
   * The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Query?: Value<string>;
  /**
   * The port. You can specify a value from 1 to 65535 or #{port}.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<string>;
  /**
   * The hostname. This component is not percent-encoded. The hostname can contain #{host}.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host?: Value<string>;
  /**
   * The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^(HTTPS?|#{protocol})$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
  /**
   * The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `HTTP_301 | HTTP_302`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusCode: Value<string>;
}

/**
 * Specifies an action for a listener rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleAction {
  /**
   * The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Order?: Value<number>;
  /**
   * The Amazon Resource Name (ARN) of the target group. Specify only when `Type` is `forward` and you want to route to a single target group. To route to one or more target groups, use `ForwardConfig` instead.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroupArn?: Value<string>;
  /**
   * [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when `Type` is `fixed-response`.
   *
   * _Required_: No
   *
   * _Type_: [FixedResponseConfig](aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FixedResponseConfig?: ElasticLoadBalancingV2ListenerRuleFixedResponseConfig;
  /**
   * [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when `Type` is `authenticate-cognito`.
   *
   * _Required_: No
   *
   * _Type_: [AuthenticateCognitoConfig](aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticateCognitoConfig?: ElasticLoadBalancingV2ListenerRuleAuthenticateCognitoConfig;
  /**
   * The type of action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `authenticate-cognito | authenticate-oidc | fixed-response | forward | redirect`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * [Application Load Balancer] Information for creating a redirect action. Specify only when `Type` is `redirect`.
   *
   * _Required_: No
   *
   * _Type_: [RedirectConfig](aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedirectConfig?: ElasticLoadBalancingV2ListenerRuleRedirectConfig;
  /**
   * Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward`. If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.
   *
   * _Required_: No
   *
   * _Type_: [ForwardConfig](aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardConfig?: ElasticLoadBalancingV2ListenerRuleForwardConfig;
  /**
   * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `Type` is `authenticate-oidc`.
   *
   * _Required_: No
   *
   * _Type_: [AuthenticateOidcConfig](aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticateOidcConfig?: ElasticLoadBalancingV2ListenerRuleAuthenticateOidcConfig;
}

/**
 * Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward`. If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleForwardConfig {
  /**
   * Information about the target group stickiness for a rule.
   *
   * _Required_: No
   *
   * _Type_: [TargetGroupStickinessConfig](aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroupStickinessConfig?: ElasticLoadBalancingV2ListenerRuleTargetGroupStickinessConfig;
  /**
   * Information about how traffic will be distributed between multiple target groups in a forward rule.
   *
   * _Required_: No
   *
   * _Type_: List of [TargetGroupTuple](aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroups?: List<ElasticLoadBalancingV2ListenerRuleTargetGroupTuple>;
}

/**
 * Information about an HTTP method condition.
 *
 * HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the [HTTP Method Registry](https://www.iana.org/assignments/http-methods/http-methods.xhtml). You can also define custom HTTP methods.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleHttpRequestMethodConfig {
  /**
   * The name of the request method. The maximum size is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
   *
   * If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Information about the target group stickiness for a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRuleTargetGroupStickinessConfig {
  /**
   * Indicates whether target group stickiness is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationSeconds?: Value<number>;
}
export interface ElasticLoadBalancingV2ListenerRuleProperties {
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ListenerArn?: Value<string>;
  /**
   * The actions.
   *
   * The rule must include exactly one of the following types of actions: `forward`, `fixed-response`, or `redirect`, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Action](aws-properties-elasticloadbalancingv2-listenerrule-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<ElasticLoadBalancingV2ListenerRuleAction>;
  /**
   * The rule priority. A listener can't have multiple rules with the same priority.
   *
   * If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
  /**
   * The conditions.
   *
   * The rule can optionally include up to one of each of the following conditions: `http-request-method`, `host-header`, `path-pattern`, and `source-ip`. A rule can also optionally include one or more of each of the following conditions: `http-header` and `query-string`.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RuleCondition](aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Conditions: List<ElasticLoadBalancingV2ListenerRuleRuleCondition>;
}

/**
 * Specifies a listener rule. The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, and one or more conditions.
 *
 * For more information, see [Quotas for your Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html) in the _User Guide for Application Load Balancers_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html}
 */
export interface ElasticLoadBalancingV2ListenerRuleResource {
  Type: 'AWS::ElasticLoadBalancingV2::ListenerRule';
  Properties: ElasticLoadBalancingV2ListenerRuleProperties;
}
