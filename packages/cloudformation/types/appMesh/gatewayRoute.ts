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
 * An object representing the query parameter to match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpqueryparametermatch.html}
 **/
export interface AppMeshGatewayRouteHttpQueryParameterMatch {
  /**
   * The exact query parameter to match on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
}

/**
 * An object that represents a gateway route specification. Specify one gateway route type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html}
 **/
export interface AppMeshGatewayRouteGatewayRouteSpec {
  /**
   * An object that represents the specification of an HTTP gateway route.
   *
   * _Required_: No
   *
   * _Type_: [HttpGatewayRoute](aws-properties-appmesh-gatewayroute-httpgatewayroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpRoute?: AppMeshGatewayRouteHttpGatewayRoute;
  /**
   * The ordering of the gateway routes spec.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority?: Value<number>;
  /**
   * An object that represents the specification of an HTTP/2 gateway route.
   *
   * _Required_: No
   *
   * _Type_: [HttpGatewayRoute](aws-properties-appmesh-gatewayroute-httpgatewayroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Http2Route?: AppMeshGatewayRouteHttpGatewayRoute;
  /**
   * An object that represents the specification of a gRPC gateway route.
   *
   * _Required_: No
   *
   * _Type_: [GrpcGatewayRoute](aws-properties-appmesh-gatewayroute-grpcgatewayroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrpcRoute?: AppMeshGatewayRouteGrpcGatewayRoute;
}

/**
 * An object that represents the HTTP header in the gateway route.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRouteHeader {
  /**
   * Specify `True` to match anything except the match criteria. The default value is `False`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Invert?: Value<boolean>;
  /**
   * A name for the HTTP header in the gateway route that will be matched on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
   *
   * _Required_: No
   *
   * _Type_: [HttpGatewayRouteHeaderMatch](aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match?: AppMeshGatewayRouteHttpGatewayRouteHeaderMatch;
}

/**
 * An object representing the method header to be matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html}
 **/
export interface AppMeshGatewayRouteGatewayRouteMetadataMatch {
  /**
   * The specified ending characters of the method header to match on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Suffix?: Value<string>;
  /**
   * The regex used to match the method header.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regex?: Value<string>;
  /**
   * The exact method header to be matched on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
  /**
   * The specified beginning characters of the method header to be matched on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * An object that represents the range of values to match on.
   *
   * _Required_: No
   *
   * _Type_: [GatewayRouteRangeMatch](aws-properties-appmesh-gatewayroute-gatewayrouterangematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: AppMeshGatewayRouteGatewayRouteRangeMatch;
}

/**
 * An object that represents the action to take if a match is determined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.html}
 **/
export interface AppMeshGatewayRouteGrpcGatewayRouteAction {
  /**
   * An object that represents the target that traffic is routed to when a request matches the gateway route.
   *
   * _Required_: Yes
   *
   * _Type_: [GatewayRouteTarget](aws-properties-appmesh-gatewayroute-gatewayroutetarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: AppMeshGatewayRouteGatewayRouteTarget;
  /**
   * The gateway route action to rewrite.
   *
   * _Required_: No
   *
   * _Type_: [GrpcGatewayRouteRewrite](aws-properties-appmesh-gatewayroute-grpcgatewayrouterewrite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rewrite?: AppMeshGatewayRouteGrpcGatewayRouteRewrite;
}

/**
 * An object that represents the criteria for determining a request match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html}
 **/
export interface AppMeshGatewayRouteGrpcGatewayRouteMatch {
  /**
   * The fully qualified domain name for the service to match from the request.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName?: Value<string>;
  /**
   * The gateway route port to be matched on.
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
   * The gateway route host name to be matched on.
   *
   * _Required_: No
   *
   * _Type_: [GatewayRouteHostnameMatch](aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameMatch;
  /**
   * The gateway route metadata to be matched on.
   *
   * _Required_: No
   *
   * _Type_: List of [GrpcGatewayRouteMetadata](aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metadata?: List<AppMeshGatewayRouteGrpcGatewayRouteMetadata>;
}

/**
 * An object that represents the path to rewrite.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRoutePathRewrite {
  /**
   * The exact path to rewrite.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
}

/**
 * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html}
 **/
export interface AppMeshGatewayRouteGatewayRouteRangeMatch {
  /**
   * The start of the range.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Start: Value<number>;
  /**
   * The end of the range.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  End: Value<number>;
}

/**
 * An object representing the gateway route to rewrite.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRouteRewrite {
  /**
   * The path to rewrite.
   *
   * _Required_: No
   *
   * _Type_: [HttpGatewayRoutePathRewrite](aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: AppMeshGatewayRouteHttpGatewayRoutePathRewrite;
  /**
   * The host name to rewrite.
   *
   * _Required_: No
   *
   * _Type_: [GatewayRouteHostnameRewrite](aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameRewrite;
  /**
   * The specified beginning characters to rewrite.
   *
   * _Required_: No
   *
   * _Type_: [HttpGatewayRoutePrefixRewrite](aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: AppMeshGatewayRouteHttpGatewayRoutePrefixRewrite;
}

/**
 * An object that represents the criteria for determining a request match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRouteMatch {
  /**
   * The path to match on.
   *
   * _Required_: No
   *
   * _Type_: [HttpPathMatch](aws-properties-appmesh-gatewayroute-httppathmatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: AppMeshGatewayRouteHttpPathMatch;
  /**
   * The client request headers to match on.
   *
   * _Required_: No
   *
   * _Type_: List of [HttpGatewayRouteHeader](aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: List<AppMeshGatewayRouteHttpGatewayRouteHeader>;
  /**
   * The port number to match on.
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
   * The host name to match on.
   *
   * _Required_: No
   *
   * _Type_: [GatewayRouteHostnameMatch](aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameMatch;
  /**
   * Specifies the path to match requests with. This parameter must always start with `/`, which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is `my-service.local` and you want the route to match requests to `my-service.local/metrics`, your prefix should be `/metrics`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * The method to match on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CONNECT | DELETE | GET | HEAD | OPTIONS | PATCH | POST | PUT | TRACE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Method?: Value<string>;
  /**
   * The query parameter to match on.
   *
   * _Required_: No
   *
   * _Type_: List of [QueryParameter](aws-properties-appmesh-gatewayroute-queryparameter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryParameters?: List<AppMeshGatewayRouteQueryParameter>;
}

/**
 * An object representing the beginning characters of the route to rewrite.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRoutePrefixRewrite {
  /**
   * The value used to replace the incoming route prefix when rewritten.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The default prefix used to replace the incoming route prefix when rewritten.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultPrefix?: Value<string>;
}

/**
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRouteHeaderMatch {
  /**
   * The value sent by the client must end with the specified characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Suffix?: Value<string>;
  /**
   * The value sent by the client must include the specified characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regex?: Value<string>;
  /**
   * The value sent by the client must match the specified value exactly.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
  /**
   * The value sent by the client must begin with the specified characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * An object that represents the range of values to match on.
   *
   * _Required_: No
   *
   * _Type_: [GatewayRouteRangeMatch](aws-properties-appmesh-gatewayroute-gatewayrouterangematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: AppMeshGatewayRouteGatewayRouteRangeMatch;
}

/**
 * An object representing the gateway route host name to rewrite.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.html}
 **/
export interface AppMeshGatewayRouteGatewayRouteHostnameRewrite {
  /**
   * The default target host name to write to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultTargetHostname?: Value<string>;
}

/**
 * An object that represents the query parameter in the request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-queryparameter.html}
 **/
export interface AppMeshGatewayRouteQueryParameter {
  /**
   * A name for the query parameter that will be matched on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The query parameter to match on.
   *
   * _Required_: No
   *
   * _Type_: [HttpQueryParameterMatch](aws-properties-appmesh-gatewayroute-httpqueryparametermatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match?: AppMeshGatewayRouteHttpQueryParameterMatch;
}

/**
 * An object that represents the gateway route to rewrite.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouterewrite.html}
 **/
export interface AppMeshGatewayRouteGrpcGatewayRouteRewrite {
  /**
   * The host name of the gateway route to rewrite.
   *
   * _Required_: No
   *
   * _Type_: [GatewayRouteHostnameRewrite](aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameRewrite;
}

/**
 * An object that represents a gateway route target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutetarget.html}
 **/
export interface AppMeshGatewayRouteGatewayRouteTarget {
  /**
   * The port number of the gateway route target.
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
   * An object that represents a virtual service gateway route target.
   *
   * _Required_: Yes
   *
   * _Type_: [GatewayRouteVirtualService](aws-properties-appmesh-gatewayroute-gatewayroutevirtualservice.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualService: AppMeshGatewayRouteGatewayRouteVirtualService;
}

/**
 * An object that represents a gRPC gateway route.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroute.html}
 **/
export interface AppMeshGatewayRouteGrpcGatewayRoute {
  /**
   * An object that represents the action to take if a match is determined.
   *
   * _Required_: Yes
   *
   * _Type_: [GrpcGatewayRouteAction](aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: AppMeshGatewayRouteGrpcGatewayRouteAction;
  /**
   * An object that represents the criteria for determining a request match.
   *
   * _Required_: Yes
   *
   * _Type_: [GrpcGatewayRouteMatch](aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: AppMeshGatewayRouteGrpcGatewayRouteMatch;
}

/**
 * An object representing the metadata of the gateway route.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html}
 **/
export interface AppMeshGatewayRouteGrpcGatewayRouteMetadata {
  /**
   * Specify `True` to match anything except the match criteria. The default value is `False`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Invert?: Value<boolean>;
  /**
   * A name for the gateway route metadata.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The criteria for determining a metadata match.
   *
   * _Required_: No
   *
   * _Type_: [GatewayRouteMetadataMatch](aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match?: AppMeshGatewayRouteGatewayRouteMetadataMatch;
}

/**
 * An object that represents the action to take if a match is determined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRouteAction {
  /**
   * An object that represents the target that traffic is routed to when a request matches the gateway route.
   *
   * _Required_: Yes
   *
   * _Type_: [GatewayRouteTarget](aws-properties-appmesh-gatewayroute-gatewayroutetarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: AppMeshGatewayRouteGatewayRouteTarget;
  /**
   * The gateway route action to rewrite.
   *
   * _Required_: No
   *
   * _Type_: [HttpGatewayRouteRewrite](aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rewrite?: AppMeshGatewayRouteHttpGatewayRouteRewrite;
}

/**
 * An object representing the gateway route host name to match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html}
 **/
export interface AppMeshGatewayRouteGatewayRouteHostnameMatch {
  /**
   * The specified ending characters of the host name to match on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `253`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Suffix?: Value<string>;
  /**
   * The exact host name to match on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `253`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
}

/**
 * An object that represents the virtual service that traffic is routed to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutevirtualservice.html}
 **/
export interface AppMeshGatewayRouteGatewayRouteVirtualService {
  /**
   * The name of the virtual service that traffic is routed to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualServiceName: Value<string>;
}

/**
 * An object representing the path to match in the request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httppathmatch.html}
 **/
export interface AppMeshGatewayRouteHttpPathMatch {
  /**
   * The regex used to match the path.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regex?: Value<string>;
  /**
   * The exact path to match on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
}

/**
 * An object that represents an HTTP gateway route.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroute.html}
 **/
export interface AppMeshGatewayRouteHttpGatewayRoute {
  /**
   * An object that represents the action to take if a match is determined.
   *
   * _Required_: Yes
   *
   * _Type_: [HttpGatewayRouteAction](aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: AppMeshGatewayRouteHttpGatewayRouteAction;
  /**
   * An object that represents the criteria for determining a request match.
   *
   * _Required_: Yes
   *
   * _Type_: [HttpGatewayRouteMatch](aws-properties-appmesh-gatewayroute-httpgatewayroutematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: AppMeshGatewayRouteHttpGatewayRouteMatch;
}
export interface AppMeshGatewayRouteProperties {
  /**
   * The name of the service mesh that the resource resides in.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeshName: Value<string>;
  /**
   * The virtual gateway that the gateway route is associated with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualGatewayName: Value<string>;
  /**
   * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeshOwner?: Value<string>;
  /**
   * The name of the gateway route.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GatewayRouteName?: Value<string>;
  /**
   * The specifications of the gateway route.
   *
   * _Required_: Yes
   *
   * _Type_: [GatewayRouteSpec](aws-properties-appmesh-gatewayroute-gatewayroutespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Spec: AppMeshGatewayRouteGatewayRouteSpec;
  /**
   * Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a gateway route.
 *
 * A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.
 *
 * For more information about gateway routes, see [Gateway routes](https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html}
 */
export interface AppMeshGatewayRouteResource {
  Type: 'AWS::AppMesh::GatewayRoute';
  Properties: AppMeshGatewayRouteProperties;
}
