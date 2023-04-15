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
 * An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-weightedtarget.html}
 **/
export interface AppMeshRouteWeightedTarget {
  /**
   * The virtual node to associate with the weighted target.
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
  VirtualNode: Value<string>;
  /**
   * The targeted port of the weighted object.
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
   * The relative weight of the weighted target.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight: Value<number>;
}

/**
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html}
 **/
export interface AppMeshRouteHeaderMatchMethod {
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
   * _Type_: [MatchRange](aws-properties-appmesh-route-matchrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: AppMeshRouteMatchRange;
}

/**
 * An object that represents a route specification. Specify one route type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html}
 **/
export interface AppMeshRouteRouteSpec {
  /**
   * An object that represents the specification of an HTTP route.
   *
   * _Required_: No
   *
   * _Type_: [HttpRoute](aws-properties-appmesh-route-httproute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpRoute?: AppMeshRouteHttpRoute;
  /**
   * The priority for the route. Routes are matched based on the specified value, where 0 is the highest priority.
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
   * An object that represents the specification of an HTTP/2 route.
   *
   * _Required_: No
   *
   * _Type_: [HttpRoute](aws-properties-appmesh-route-httproute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Http2Route?: AppMeshRouteHttpRoute;
  /**
   * An object that represents the specification of a gRPC route.
   *
   * _Required_: No
   *
   * _Type_: [GrpcRoute](aws-properties-appmesh-route-grpcroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrpcRoute?: AppMeshRouteGrpcRoute;
  /**
   * An object that represents the specification of a TCP route.
   *
   * _Required_: No
   *
   * _Type_: [TcpRoute](aws-properties-appmesh-route-tcproute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TcpRoute?: AppMeshRouteTcpRoute;
}

/**
 * An object representing the path to match in the request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httppathmatch.html}
 **/
export interface AppMeshRouteHttpPathMatch {
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
 * An object that represents the query parameter in the request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-queryparameter.html}
 **/
export interface AppMeshRouteQueryParameter {
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
   * _Type_: [HttpQueryParameterMatch](aws-properties-appmesh-route-httpqueryparametermatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match?: AppMeshRouteHttpQueryParameterMatch;
}

/**
 * An object that represents the requirements for a route to match HTTP requests for a virtual router.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html}
 **/
export interface AppMeshRouteHttpRouteMatch {
  /**
   * The client request path to match on.
   *
   * _Required_: No
   *
   * _Type_: [HttpPathMatch](aws-properties-appmesh-route-httppathmatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: AppMeshRouteHttpPathMatch;
  /**
   * The client request scheme to match on. Specify only one. Applicable only for HTTP2 routes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `http | https`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scheme?: Value<string>;
  /**
   * The client request headers to match on.
   *
   * _Required_: No
   *
   * _Type_: List of [HttpRouteHeader](aws-properties-appmesh-route-httprouteheader.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: List<AppMeshRouteHttpRouteHeader>;
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
   * The client request method to match on. Specify only one.
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
   * The client request query parameters to match on.
   *
   * _Required_: No
   *
   * _Type_: List of [QueryParameter](aws-properties-appmesh-route-queryparameter.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryParameters?: List<AppMeshRouteQueryParameter>;
}

/**
 * An object representing the query parameter to match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpqueryparametermatch.html}
 **/
export interface AppMeshRouteHttpQueryParameterMatch {
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
 * An object that represents the action to take if a match is determined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcrouteaction.html}
 **/
export interface AppMeshRouteGrpcRouteAction {
  /**
   * An object that represents the targets that traffic is routed to when a request matches the route.
   *
   * _Required_: Yes
   *
   * _Type_: List of [WeightedTarget](aws-properties-appmesh-route-weightedtarget.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightedTargets: List<AppMeshRouteWeightedTarget>;
}

/**
 * An object that represents an HTTP or HTTP/2 route type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html}
 **/
export interface AppMeshRouteHttpRoute {
  /**
   * An object that represents the action to take if a match is determined.
   *
   * _Required_: Yes
   *
   * _Type_: [HttpRouteAction](aws-properties-appmesh-route-httprouteaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: AppMeshRouteHttpRouteAction;
  /**
   * An object that represents types of timeouts.
   *
   * _Required_: No
   *
   * _Type_: [HttpTimeout](aws-properties-appmesh-route-httptimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: AppMeshRouteHttpTimeout;
  /**
   * An object that represents a retry policy.
   *
   * _Required_: No
   *
   * _Type_: [HttpRetryPolicy](aws-properties-appmesh-route-httpretrypolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryPolicy?: AppMeshRouteHttpRetryPolicy;
  /**
   * An object that represents the criteria for determining a request match.
   *
   * _Required_: Yes
   *
   * _Type_: [HttpRouteMatch](aws-properties-appmesh-route-httproutematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: AppMeshRouteHttpRouteMatch;
}

/**
 * An object that represents the action to take if a match is determined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcprouteaction.html}
 **/
export interface AppMeshRouteTcpRouteAction {
  /**
   * An object that represents the targets that traffic is routed to when a request matches the route.
   *
   * _Required_: Yes
   *
   * _Type_: List of [WeightedTarget](aws-properties-appmesh-route-weightedtarget.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightedTargets: List<AppMeshRouteWeightedTarget>;
}

/**
 * An object that represents a retry policy. Specify at least one value for at least one of the types of `RetryEvents`, a value for `maxRetries`, and a value for `perRetryTimeout`. Both `server-error` and `gateway-error` under `httpRetryEvents` include the Envoy `reset` policy. For more information on the `reset` policy, see the [Envoy documentation](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html}
 **/
export interface AppMeshRouteGrpcRetryPolicy {
  /**
   * The maximum number of retry attempts.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRetries: Value<number>;
  /**
   * The timeout for each retry attempt.
   *
   * _Required_: Yes
   *
   * _Type_: [Duration](aws-properties-appmesh-route-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerRetryTimeout: AppMeshRouteDuration;
  /**
   * Specify at least one of the valid values.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrpcRetryEvents?: List<Value<string>>;
  /**
   * Specify at least one of the following values.
   */
  HttpRetryEvents?: List<Value<string>>;
  /**
   * Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TcpRetryEvents?: List<Value<string>>;
}

/**
 * An object representing the TCP route to match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproutematch.html}
 **/
export interface AppMeshRouteTcpRouteMatch {
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
}

/**
 * An object that represents a TCP route type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproute.html}
 **/
export interface AppMeshRouteTcpRoute {
  /**
   * The action to take if a match is determined.
   *
   * _Required_: Yes
   *
   * _Type_: [TcpRouteAction](aws-properties-appmesh-route-tcprouteaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: AppMeshRouteTcpRouteAction;
  /**
   * An object that represents types of timeouts.
   *
   * _Required_: No
   *
   * _Type_: [TcpTimeout](aws-properties-appmesh-route-tcptimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: AppMeshRouteTcpTimeout;
  /**
   * An object that represents the criteria for determining a request match.
   *
   * _Required_: No
   *
   * _Type_: [TcpRouteMatch](aws-properties-appmesh-route-tcproutematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match?: AppMeshRouteTcpRouteMatch;
}

/**
 * An object that represents types of timeouts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpctimeout.html}
 **/
export interface AppMeshRouteGrpcTimeout {
  /**
   * An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-route-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerRequest?: AppMeshRouteDuration;
  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-route-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Idle?: AppMeshRouteDuration;
}

/**
 * An object that represents a gRPC route type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html}
 **/
export interface AppMeshRouteGrpcRoute {
  /**
   * An object that represents the action to take if a match is determined.
   *
   * _Required_: Yes
   *
   * _Type_: [GrpcRouteAction](aws-properties-appmesh-route-grpcrouteaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: AppMeshRouteGrpcRouteAction;
  /**
   * An object that represents types of timeouts.
   *
   * _Required_: No
   *
   * _Type_: [GrpcTimeout](aws-properties-appmesh-route-grpctimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: AppMeshRouteGrpcTimeout;
  /**
   * An object that represents a retry policy.
   *
   * _Required_: No
   *
   * _Type_: [GrpcRetryPolicy](aws-properties-appmesh-route-grpcretrypolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryPolicy?: AppMeshRouteGrpcRetryPolicy;
  /**
   * An object that represents the criteria for determining a request match.
   *
   * _Required_: Yes
   *
   * _Type_: [GrpcRouteMatch](aws-properties-appmesh-route-grpcroutematch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: AppMeshRouteGrpcRouteMatch;
}

/**
 * An object that represents types of timeouts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcptimeout.html}
 **/
export interface AppMeshRouteTcpTimeout {
  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-route-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Idle?: AppMeshRouteDuration;
}

/**
 * An object that represents the HTTP header in the request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteheader.html}
 **/
export interface AppMeshRouteHttpRouteHeader {
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
   * A name for the HTTP header in the client request that will be matched on.
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
   * The `HeaderMatchMethod` object.
   *
   * _Required_: No
   *
   * _Type_: [HeaderMatchMethod](aws-properties-appmesh-route-headermatchmethod.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match?: AppMeshRouteHeaderMatchMethod;
}

/**
 * An object that represents a duration of time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-duration.html}
 **/
export interface AppMeshRouteDuration {
  /**
   * A number of time units.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
  /**
   * A unit of time.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ms | s`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit: Value<string>;
}

/**
 * An object that represents the match method. Specify one of the match values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html}
 **/
export interface AppMeshRouteGrpcRouteMetadataMatchMethod {
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
   * _Type_: [MatchRange](aws-properties-appmesh-route-matchrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Range?: AppMeshRouteMatchRange;
}

/**
 * An object that represents the match metadata for the route.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadata.html}
 **/
export interface AppMeshRouteGrpcRouteMetadata {
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
   * The name of the route.
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
   * An object that represents the data to match from the request.
   *
   * _Required_: No
   *
   * _Type_: [GrpcRouteMetadataMatchMethod](aws-properties-appmesh-route-grpcroutemetadatamatchmethod.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match?: AppMeshRouteGrpcRouteMetadataMatchMethod;
}

/**
 * An object that represents the criteria for determining a request match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html}
 **/
export interface AppMeshRouteGrpcRouteMatch {
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
   * An object that represents the data to match from the request.
   *
   * _Required_: No
   *
   * _Type_: List of [GrpcRouteMetadata](aws-properties-appmesh-route-grpcroutemetadata.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metadata?: List<AppMeshRouteGrpcRouteMetadata>;
  /**
   * The method name to match from the request. If you specify a name, you must also specify a `serviceName`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MethodName?: Value<string>;
}

/**
 * An object that represents a retry policy. Specify at least one value for at least one of the types of `RetryEvents`, a value for `maxRetries`, and a value for `perRetryTimeout`. Both `server-error` and `gateway-error` under `httpRetryEvents` include the Envoy `reset` policy. For more information on the `reset` policy, see the [Envoy documentation](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html}
 **/
export interface AppMeshRouteHttpRetryPolicy {
  /**
   * The maximum number of retry attempts.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRetries: Value<number>;
  /**
   * The timeout for each retry attempt.
   *
   * _Required_: Yes
   *
   * _Type_: [Duration](aws-properties-appmesh-route-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerRetryTimeout: AppMeshRouteDuration;
  /**
   * Specify at least one of the following values.
   */
  HttpRetryEvents?: List<Value<string>>;
  /**
   * Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TcpRetryEvents?: List<Value<string>>;
}

/**
 * An object that represents types of timeouts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httptimeout.html}
 **/
export interface AppMeshRouteHttpTimeout {
  /**
   * An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-route-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerRequest?: AppMeshRouteDuration;
  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-route-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Idle?: AppMeshRouteDuration;
}

/**
 * An object that represents the action to take if a match is determined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteaction.html}
 **/
export interface AppMeshRouteHttpRouteAction {
  /**
   * An object that represents the targets that traffic is routed to when a request matches the route.
   *
   * _Required_: Yes
   *
   * _Type_: List of [WeightedTarget](aws-properties-appmesh-route-weightedtarget.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightedTargets: List<AppMeshRouteWeightedTarget>;
}

/**
 * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-matchrange.html}
 **/
export interface AppMeshRouteMatchRange {
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
export interface AppMeshRouteProperties {
  /**
   * The name of the service mesh to create the route in.
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
   * The name of the virtual router in which to create the route. If the virtual router is in a shared mesh, then you must be the owner of the virtual router resource.
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
  VirtualRouterName: Value<string>;
  /**
   * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
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
   * The name to use for the route.
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
  RouteName?: Value<string>;
  /**
   * The route specification to apply.
   *
   * _Required_: Yes
   *
   * _Type_: [RouteSpec](aws-properties-appmesh-route-routespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Spec: AppMeshRouteRouteSpec;
  /**
   * Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
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
 * Creates a route that is associated with a virtual router.
 *
 * You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.
 *
 * For more information about routes, see [Routes](https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html}
 */
export interface AppMeshRouteResource {
  Type: 'AWS::AppMesh::Route';
  Properties: AppMeshRouteProperties;
}
