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
 * Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward`. If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-forwardconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerForwardConfig {
  /**
   * Information about the target group stickiness for a rule.
   *
   * _Required_: No
   *
   * _Type_: [TargetGroupStickinessConfig](aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroupStickinessConfig?: ElasticLoadBalancingV2ListenerTargetGroupStickinessConfig;
  /**
   * Information about how traffic will be distributed between multiple target groups in a forward rule.
   *
   * _Required_: No
   *
   * _Type_: List of [TargetGroupTuple](aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroups?: List<ElasticLoadBalancingV2ListenerTargetGroupTuple>;
}

/**
 * Specifies information required using an identity provide (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerAuthenticateOidcConfig {
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
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionTimeout?: Value<string>;
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
 * Specifies an SSL server certificate to use as the default certificate for a secure listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificate.html}
 **/
export interface ElasticLoadBalancingV2ListenerCertificate {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn?: Value<string>;
}

/**
 * Specifies information required when integrating with Amazon Cognito to authenticate users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerAuthenticateCognitoConfig {
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
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionTimeout?: Value<string>;
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
 * Specifies information required when returning a custom HTTP response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerFixedResponseConfig {
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
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.html}
 **/
export interface ElasticLoadBalancingV2ListenerTargetGroupTuple {
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
 * Information about the target group stickiness for a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerTargetGroupStickinessConfig {
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

/**
 * Specifies an action for a listener rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html}
 **/
export interface ElasticLoadBalancingV2ListenerAction {
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
   * _Type_: [FixedResponseConfig](aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FixedResponseConfig?: ElasticLoadBalancingV2ListenerFixedResponseConfig;
  /**
   * [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when `Type` is `authenticate-cognito`.
   *
   * _Required_: No
   *
   * _Type_: [AuthenticateCognitoConfig](aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticateCognitoConfig?: ElasticLoadBalancingV2ListenerAuthenticateCognitoConfig;
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
   * _Type_: [RedirectConfig](aws-properties-elasticloadbalancingv2-listener-redirectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedirectConfig?: ElasticLoadBalancingV2ListenerRedirectConfig;
  /**
   * Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward`. If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.
   *
   * _Required_: No
   *
   * _Type_: [ForwardConfig](aws-properties-elasticloadbalancingv2-listener-forwardconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardConfig?: ElasticLoadBalancingV2ListenerForwardConfig;
  /**
   * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `Type` is `authenticate-oidc`.
   *
   * _Required_: No
   *
   * _Type_: [AuthenticateOidcConfig](aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticateOidcConfig?: ElasticLoadBalancingV2ListenerAuthenticateOidcConfig;
}

/**
 * Information about a redirect action.
 *
 * A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.
 *
 * You can reuse URI components using the following reserved keywords:
 *
 * For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&value=xyz".
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html}
 **/
export interface ElasticLoadBalancingV2ListenerRedirectConfig {
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
export interface ElasticLoadBalancingV2ListenerProperties {
  /**
   * [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlpnPolicy?: List<Value<string>>;
  /**
   * [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.
   *
   * For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) in the _Application Load Balancers Guide_ and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies) in the _Network Load Balancers Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslPolicy?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LoadBalancerArn: Value<string>;
  /**
   * The actions for the default rule. You cannot define a condition for a default rule.
   *
   * To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).
   *
   * _Required_: Yes
   *
   * _Type_: List of [Action](aws-properties-elasticloadbalancingv2-listener-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultActions: List<ElasticLoadBalancingV2ListenerAction>;
  /**
   * The port on which the load balancer is listening. You cannot specify a port for a Gateway Load Balancer.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The default SSL server certificate for a secure listener. You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
   *
   * To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).
   *
   * _Required_: Conditional
   *
   * _Type_: List of [Certificate](aws-properties-elasticloadbalancingv2-listener-certificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificates?: List<ElasticLoadBalancingV2ListenerCertificate>;
  /**
   * The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GENEVE | HTTP | HTTPS | TCP | TCP_UDP | TLS | UDP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
}

/**
 * Specifies a listener for an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html}
 */
export interface ElasticLoadBalancingV2ListenerResource {
  Type: 'AWS::ElasticLoadBalancingV2::Listener';
  Properties: ElasticLoadBalancingV2ListenerProperties;
}
