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
 * An object that represents the key value pairs for the JSON.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-jsonformatref.html}
 **/
export interface AppMeshVirtualNodeJsonFormatRef {
  /**
   * The specified value for the JSON.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The specified key for the JSON.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * An object that represents an access log file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-fileaccesslog.html}
 **/
export interface AppMeshVirtualNodeFileAccessLog {
  /**
   * The file path to write access logs to. You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs`, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
   *
   * The Envoy process must have write permissions to the path that you specify here. Otherwise, Envoy fails to bootstrap properly.
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
  Path: Value<string>;
  /**
   * The specified format for the logs. The format is either `json_format` or `text_format`.
   *
   * _Required_: No
   *
   * _Type_: [LoggingFormat](aws-properties-appmesh-virtualnode-loggingformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: AppMeshVirtualNodeLoggingFormat;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.html}
 **/
export interface AppMeshVirtualNodeListenerTlsValidationContext {
  /**
   * A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation context.
   *
   * _Required_: No
   *
   * _Type_: [SubjectAlternativeNames](aws-properties-appmesh-virtualnode-subjectalternativenames.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubjectAlternativeNames?: AppMeshVirtualNodeSubjectAlternativeNames;
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * _Required_: Yes
   *
   * _Type_: [ListenerTlsValidationContextTrust](aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Trust: AppMeshVirtualNodeListenerTlsValidationContextTrust;
}

/**
 * An object that represents the backends that a virtual node is expected to send outbound traffic to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backend.html}
 **/
export interface AppMeshVirtualNodeBackend {
  /**
   * Specifies a virtual service to use as a backend.
   *
   * _Required_: No
   *
   * _Type_: [VirtualServiceBackend](aws-properties-appmesh-virtualnode-virtualservicebackend.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualService?: AppMeshVirtualNodeVirtualServiceBackend;
}

/**
 * An object that represents timeouts for different protocols.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html}
 **/
export interface AppMeshVirtualNodeListenerTimeout {
  /**
   * An object that represents types of timeouts.
   *
   * _Required_: No
   *
   * _Type_: [TcpTimeout](aws-properties-appmesh-virtualnode-tcptimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TCP?: AppMeshVirtualNodeTcpTimeout;
  /**
   * An object that represents types of timeouts.
   *
   * _Required_: No
   *
   * _Type_: [HttpTimeout](aws-properties-appmesh-virtualnode-httptimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTP2?: AppMeshVirtualNodeHttpTimeout;
  /**
   * An object that represents types of timeouts.
   *
   * _Required_: No
   *
   * _Type_: [HttpTimeout](aws-properties-appmesh-virtualnode-httptimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTP?: AppMeshVirtualNodeHttpTimeout;
  /**
   * An object that represents types of timeouts.
   *
   * _Required_: No
   *
   * _Type_: [GrpcTimeout](aws-properties-appmesh-virtualnode-grpctimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GRPC?: AppMeshVirtualNodeGrpcTimeout;
}

/**
 * An object representing a virtual node or virtual router listener port mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-portmapping.html}
 **/
export interface AppMeshVirtualNodePortMapping {
  /**
   * The port used for the port mapping.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * The protocol used for the port mapping. Specify `http`, `http2`, `grpc`, or `tcp`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `grpc | http | http2 | tcp`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
}

/**
 * An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlssdscertificate.html}
 **/
export interface AppMeshVirtualNodeListenerTlsSdsCertificate {
  /**
   * A reference to an object that represents the name of the secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretName: Value<string>;
}

/**
 * An object that represents the format for the logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-loggingformat.html}
 **/
export interface AppMeshVirtualNodeLoggingFormat {
  /**
   * The logging format for text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Text?: Value<string>;
  /**
   * The logging format for JSON.
   *
   * _Required_: No
   *
   * _Type_: List of [JsonFormatRef](aws-properties-appmesh-virtualnode-jsonformatref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Json?: List<AppMeshVirtualNodeJsonFormatRef>;
}

/**
 * An object that represents the default properties for a backend.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backenddefaults.html}
 **/
export interface AppMeshVirtualNodeBackendDefaults {
  /**
   * A reference to an object that represents a client policy.
   *
   * _Required_: No
   *
   * _Type_: [ClientPolicy](aws-properties-appmesh-virtualnode-clientpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientPolicy?: AppMeshVirtualNodeClientPolicy;
}

/**
 * An object that represents a type of connection pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.html}
 **/
export interface AppMeshVirtualNodeVirtualNodeTcpConnectionPool {
  /**
   * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConnections: Value<number>;
}

/**
 * An object that represents types of timeouts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-httptimeout.html}
 **/
export interface AppMeshVirtualNodeHttpTimeout {
  /**
   * An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-virtualnode-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerRequest?: AppMeshVirtualNodeDuration;
  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-virtualnode-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Idle?: AppMeshVirtualNodeDuration;
}

/**
 * An object that represents a type of connection pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.html}
 **/
export interface AppMeshVirtualNodeVirtualNodeHttpConnectionPool {
  /**
   * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConnections: Value<number>;
  /**
   * Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxPendingRequests?: Value<number>;
}

/**
 * An object that represents a listener for a virtual node.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html}
 **/
export interface AppMeshVirtualNodeListener {
  /**
   * The connection pool information for the listener.
   *
   * _Required_: No
   *
   * _Type_: [VirtualNodeConnectionPool](aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionPool?: AppMeshVirtualNodeVirtualNodeConnectionPool;
  /**
   * An object that represents timeouts for different protocols.
   *
   * _Required_: No
   *
   * _Type_: [ListenerTimeout](aws-properties-appmesh-virtualnode-listenertimeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: AppMeshVirtualNodeListenerTimeout;
  /**
   * The health check information for the listener.
   *
   * _Required_: No
   *
   * _Type_: [HealthCheck](aws-properties-appmesh-virtualnode-healthcheck.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheck?: AppMeshVirtualNodeHealthCheck;
  /**
   * A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.
   *
   * _Required_: No
   *
   * _Type_: [ListenerTls](aws-properties-appmesh-virtualnode-listenertls.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TLS?: AppMeshVirtualNodeListenerTls;
  /**
   * The port mapping information for the listener.
   *
   * _Required_: Yes
   *
   * _Type_: [PortMapping](aws-properties-appmesh-virtualnode-portmapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortMapping: AppMeshVirtualNodePortMapping;
  /**
   * The outlier detection information for the listener.
   *
   * _Required_: No
   *
   * _Type_: [OutlierDetection](aws-properties-appmesh-virtualnode-outlierdetection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutlierDetection?: AppMeshVirtualNodeOutlierDetection;
}

/**
 * An object that represents the DNS service discovery information for your virtual node.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-dnsservicediscovery.html}
 **/
export interface AppMeshVirtualNodeDnsServiceDiscovery {
  /**
   * The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `IPv4_ONLY | IPv4_PREFERRED | IPv6_ONLY | IPv6_PREFERRED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpPreference?: Value<string>;
  /**
   * Specifies the DNS service discovery hostname for the virtual node.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hostname: Value<string>;
  /**
   * Specifies the DNS response type for the virtual node.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ENDPOINTS | LOADBALANCER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseType?: Value<string>;
}

/**
 * An object that represents types of timeouts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-grpctimeout.html}
 **/
export interface AppMeshVirtualNodeGrpcTimeout {
  /**
   * An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-virtualnode-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerRequest?: AppMeshVirtualNodeDuration;
  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-virtualnode-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Idle?: AppMeshVirtualNodeDuration;
}

/**
 * An object that represents a duration of time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-duration.html}
 **/
export interface AppMeshVirtualNodeDuration {
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
 * An object that represents a Transport Layer Security (TLS) validation context trust.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html}
 **/
export interface AppMeshVirtualNodeTlsValidationContextTrust {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * _Required_: No
   *
   * _Type_: [TlsValidationContextSdsTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualNodeTlsValidationContextSdsTrust;
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
   *
   * _Required_: No
   *
   * _Type_: [TlsValidationContextAcmTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ACM?: AppMeshVirtualNodeTlsValidationContextAcmTrust;
  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * _Required_: No
   *
   * _Type_: [TlsValidationContextFileTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualNodeTlsValidationContextFileTrust;
}

/**
 * An object that represents a type of connection pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.html}
 **/
export interface AppMeshVirtualNodeVirtualNodeHttp2ConnectionPool {
  /**
   * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRequests: Value<number>;
}

/**
 * An object that represents a virtual service backend for a virtual node.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualservicebackend.html}
 **/
export interface AppMeshVirtualNodeVirtualServiceBackend {
  /**
   * A reference to an object that represents the client policy for a backend.
   *
   * _Required_: No
   *
   * _Type_: [ClientPolicy](aws-properties-appmesh-virtualnode-clientpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientPolicy?: AppMeshVirtualNodeClientPolicy;
  /**
   * The name of the virtual service that is acting as a virtual node backend.
   *
   * App Mesh doesn't validate the existence of those virtual services specified in backends. This is to prevent a cyclic dependency between virtual nodes and virtual services creation. Make sure the virtual service name is correct. The virtual service can be created afterwards if it doesn't already exist.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualServiceName: Value<string>;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.html}
 **/
export interface AppMeshVirtualNodeTlsValidationContextAcmTrust {
  /**
   * One or more ACM Amazon Resource Name (ARN)s.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateAuthorityArns: List<Value<string>>;
}

/**
 * An object that represents a client policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicy.html}
 **/
export interface AppMeshVirtualNodeClientPolicy {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) client policy.
   *
   * _Required_: No
   *
   * _Type_: [ClientPolicyTls](aws-properties-appmesh-virtualnode-clientpolicytls.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TLS?: AppMeshVirtualNodeClientPolicyTls;
}

/**
 * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenamematchers.html}
 **/
export interface AppMeshVirtualNodeSubjectAlternativeNameMatchers {
  /**
   * The values sent must match the specified values exactly.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: List<Value<string>>;
}

/**
 * An object that represents a type of connection pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.html}
 **/
export interface AppMeshVirtualNodeVirtualNodeGrpcConnectionPool {
  /**
   * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRequests: Value<number>;
}

/**
 * An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.html}
 **/
export interface AppMeshVirtualNodeTlsValidationContextSdsTrust {
  /**
   * A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretName: Value<string>;
}

/**
 * A reference to an object that represents a Transport Layer Security (TLS) client policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html}
 **/
export interface AppMeshVirtualNodeClientPolicyTls {
  /**
   * A reference to an object that represents a TLS validation context.
   *
   * _Required_: Yes
   *
   * _Type_: [TlsValidationContext](aws-properties-appmesh-virtualnode-tlsvalidationcontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Validation: AppMeshVirtualNodeTlsValidationContext;
  /**
   * Whether the policy is enforced. The default is `True`, if a value isn't specified.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enforce?: Value<boolean>;
  /**
   * One or more ports that the policy is enforced for.
   *
   * _Required_: No
   *
   * _Type_: List of Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ports?: List<Value<number>>;
  /**
   * A reference to an object that represents a client's TLS certificate.
   *
   * _Required_: No
   *
   * _Type_: [ClientTlsCertificate](aws-properties-appmesh-virtualnode-clienttlscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificate?: AppMeshVirtualNodeClientTlsCertificate;
}

/**
 * An object that represents the AWS Cloud Map attribute information for your virtual node.
 *
 * **Note**
 *
 * AWS Cloud Map is not available in the eu-south-1 Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.html}
 **/
export interface AppMeshVirtualNodeAwsCloudMapInstanceAttribute {
  /**
   * The value of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service instance that contains the specified key and value is returned.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^([a-zA-Z0-9!-~][ a-zA-Z0-9!-~]*){0,1}[a-zA-Z0-9!-~]{0,1}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The name of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service instance that contains the specified key and value is returned.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9!-~]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * An object that represents types of timeouts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tcptimeout.html}
 **/
export interface AppMeshVirtualNodeTcpTimeout {
  /**
   * An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
   *
   * _Required_: No
   *
   * _Type_: [Duration](aws-properties-appmesh-virtualnode-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Idle?: AppMeshVirtualNodeDuration;
}

/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertls.html}
 **/
export interface AppMeshVirtualNodeListenerTls {
  /**
   * A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.
   *
   * _Required_: No
   *
   * _Type_: [ListenerTlsValidationContext](aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Validation?: AppMeshVirtualNodeListenerTlsValidationContext;
  /**
   * Specify one of the following modes.
   */
  Mode: Value<string>;
  /**
   * A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.
   *
   * _Required_: Yes
   *
   * _Type_: [ListenerTlsCertificate](aws-properties-appmesh-virtualnode-listenertlscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificate: AppMeshVirtualNodeListenerTlsCertificate;
}

/**
 * An object that represents the health check policy for a virtual node's listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html}
 **/
export interface AppMeshVirtualNodeHealthCheck {
  /**
   * The destination path for the health check request. This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The number of consecutive failed health checks that must occur before declaring a virtual node unhealthy.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnhealthyThreshold: Value<number>;
  /**
   * The destination port for the health check request. This port must match the port defined in the [PortMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-portmapping) for the listener.
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
   * The number of consecutive successful health checks that must occur before declaring listener healthy.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthyThreshold: Value<number>;
  /**
   * The amount of time to wait when receiving a response from the health check, in milliseconds.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutMillis: Value<number>;
  /**
   * The protocol for the health check request. If you specify `grpc`, then your service must conform to the [GRPC Health Checking Protocol](https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `grpc | http | http2 | tcp`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
  /**
   * The time period in milliseconds between each health check execution.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalMillis: Value<number>;
}

/**
 * An object that represents the AWS Cloud Map service discovery information for your virtual node.
 *
 * **Note**
 *
 * AWS Cloud Map is not available in the eu-south-1 Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html}
 **/
export interface AppMeshVirtualNodeAwsCloudMapServiceDiscovery {
  /**
   * The HTTP name of the AWS Cloud Map namespace to use.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NamespaceName: Value<string>;
  /**
   * The name of the AWS Cloud Map service to use.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName: Value<string>;
  /**
   * The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `IPv4_ONLY | IPv4_PREFERRED | IPv6_ONLY | IPv6_PREFERRED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpPreference?: Value<string>;
  /**
   * A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance. Only instances that match all of the specified key/value pairs will be returned.
   *
   * _Required_: No
   *
   * _Type_: List of [AwsCloudMapInstanceAttribute](aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: List<AppMeshVirtualNodeAwsCloudMapInstanceAttribute>;
}

/**
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html}
 **/
export interface AppMeshVirtualNodeListenerTlsFileCertificate {
  /**
   * The private key for a certificate stored on the file system of the virtual node that the proxy is running on.
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
  PrivateKey: Value<string>;
  /**
   * The certificate chain for the certificate.
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
  CertificateChain: Value<string>;
}

/**
 * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontext.html}
 **/
export interface AppMeshVirtualNodeTlsValidationContext {
  /**
   * A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context. If you don't specify SANs on the _terminating_ mesh endpoint, the Envoy proxy for that node doesn't verify the SAN on a peer client certificate. If you don't specify SANs on the _originating_ mesh endpoint, the SAN on the certificate provided by the terminating endpoint must match the mesh endpoint service discovery configuration. Since SPIRE vended certificates have a SPIFFE ID as a name, you must set the SAN since the name doesn't match the service discovery name.
   *
   * _Required_: No
   *
   * _Type_: [SubjectAlternativeNames](aws-properties-appmesh-virtualnode-subjectalternativenames.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubjectAlternativeNames?: AppMeshVirtualNodeSubjectAlternativeNames;
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * _Required_: Yes
   *
   * _Type_: [TlsValidationContextTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Trust: AppMeshVirtualNodeTlsValidationContextTrust;
}

/**
 * An object that represents the specification of a virtual node.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html}
 **/
export interface AppMeshVirtualNodeVirtualNodeSpec {
  /**
   * The inbound and outbound access logging information for the virtual node.
   *
   * _Required_: No
   *
   * _Type_: [Logging](aws-properties-appmesh-virtualnode-logging.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logging?: AppMeshVirtualNodeLogging;
  /**
   * The backends that the virtual node is expected to send outbound traffic to.
   *
   * App Mesh doesn't validate the existence of those virtual services specified in backends. This is to prevent a cyclic dependency between virtual nodes and virtual services creation. Make sure the virtual service name is correct. The virtual service can be created afterwards if it doesn't already exist.
   *
   * _Required_: No
   *
   * _Type_: List of [Backend](aws-properties-appmesh-virtualnode-backend.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Backends?: List<AppMeshVirtualNodeBackend>;
  /**
   * The listener that the virtual node is expected to receive inbound traffic from. You can specify one listener.
   *
   * _Required_: No
   *
   * _Type_: List of [Listener](aws-properties-appmesh-virtualnode-listener.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Listeners?: List<AppMeshVirtualNodeListener>;
  /**
   * A reference to an object that represents the defaults for backends.
   *
   * _Required_: No
   *
   * _Type_: [BackendDefaults](aws-properties-appmesh-virtualnode-backenddefaults.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackendDefaults?: AppMeshVirtualNodeBackendDefaults;
  /**
   * The service discovery information for the virtual node. If your virtual node does not expect ingress traffic, you can omit this parameter. If you specify a `listener`, then you must specify service discovery information.
   *
   * _Required_: No
   *
   * _Type_: [ServiceDiscovery](aws-properties-appmesh-virtualnode-servicediscovery.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceDiscovery?: AppMeshVirtualNodeServiceDiscovery;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.html}
 **/
export interface AppMeshVirtualNodeTlsValidationContextFileTrust {
  /**
   * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
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
  CertificateChain: Value<string>;
}

/**
 * An object that represents the type of virtual node connection pool.
 *
 * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
 *
 * If not present the default value for `maxPendingRequests` is `2147483647`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html}
 **/
export interface AppMeshVirtualNodeVirtualNodeConnectionPool {
  /**
   * An object that represents a type of connection pool.
   *
   * _Required_: No
   *
   * _Type_: [VirtualNodeTcpConnectionPool](aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TCP?: AppMeshVirtualNodeVirtualNodeTcpConnectionPool;
  /**
   * An object that represents a type of connection pool.
   *
   * _Required_: No
   *
   * _Type_: [VirtualNodeHttp2ConnectionPool](aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTP2?: AppMeshVirtualNodeVirtualNodeHttp2ConnectionPool;
  /**
   * An object that represents a type of connection pool.
   *
   * _Required_: No
   *
   * _Type_: [VirtualNodeHttpConnectionPool](aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTP?: AppMeshVirtualNodeVirtualNodeHttpConnectionPool;
  /**
   * An object that represents a type of connection pool.
   *
   * _Required_: No
   *
   * _Type_: [VirtualNodeGrpcConnectionPool](aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GRPC?: AppMeshVirtualNodeVirtualNodeGrpcConnectionPool;
}

/**
 * An object that represents the logging information for a virtual node.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-logging.html}
 **/
export interface AppMeshVirtualNodeLogging {
  /**
   * The access log configuration for a virtual node.
   *
   * _Required_: No
   *
   * _Type_: [AccessLog](aws-properties-appmesh-virtualnode-accesslog.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessLog?: AppMeshVirtualNodeAccessLog;
}

/**
 * An object that represents the service discovery information for a virtual node.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-servicediscovery.html}
 **/
export interface AppMeshVirtualNodeServiceDiscovery {
  /**
   * Specifies the DNS information for the virtual node.
   *
   * _Required_: No
   *
   * _Type_: [DnsServiceDiscovery](aws-properties-appmesh-virtualnode-dnsservicediscovery.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DNS?: AppMeshVirtualNodeDnsServiceDiscovery;
  /**
   * Specifies any AWS Cloud Map information for the virtual node.
   *
   * _Required_: No
   *
   * _Type_: [AwsCloudMapServiceDiscovery](aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AWSCloudMap?: AppMeshVirtualNodeAwsCloudMapServiceDiscovery;
}

/**
 * An object that represents an AWS Certificate Manager certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsacmcertificate.html}
 **/
export interface AppMeshVirtualNodeListenerTlsAcmCertificate {
  /**
   * The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn: Value<string>;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlscertificate.html}
 **/
export interface AppMeshVirtualNodeListenerTlsCertificate {
  /**
   * A reference to an object that represents a listener's Secret Discovery Service certificate.
   *
   * _Required_: No
   *
   * _Type_: [ListenerTlsSdsCertificate](aws-properties-appmesh-virtualnode-listenertlssdscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualNodeListenerTlsSdsCertificate;
  /**
   * A reference to an object that represents an AWS Certificate Manager certificate.
   *
   * _Required_: No
   *
   * _Type_: [ListenerTlsAcmCertificate](aws-properties-appmesh-virtualnode-listenertlsacmcertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ACM?: AppMeshVirtualNodeListenerTlsAcmCertificate;
  /**
   * A reference to an object that represents a local file certificate.
   *
   * _Required_: No
   *
   * _Type_: [ListenerTlsFileCertificate](aws-properties-appmesh-virtualnode-listenertlsfilecertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualNodeListenerTlsFileCertificate;
}

/**
 * An object that represents the outlier detection for a virtual node's listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html}
 **/
export interface AppMeshVirtualNodeOutlierDetection {
  /**
   * Maximum percentage of hosts in load balancing pool for upstream service that can be ejected. Will eject at least one host regardless of the value.
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
  MaxEjectionPercent: Value<number>;
  /**
   * The base amount of time for which a host is ejected.
   *
   * _Required_: Yes
   *
   * _Type_: [Duration](aws-properties-appmesh-virtualnode-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseEjectionDuration: AppMeshVirtualNodeDuration;
  /**
   * Number of consecutive `5xx` errors required for ejection.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxServerErrors: Value<number>;
  /**
   * The time interval between ejection sweep analysis.
   *
   * _Required_: Yes
   *
   * _Type_: [Duration](aws-properties-appmesh-virtualnode-duration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval: AppMeshVirtualNodeDuration;
}

/**
 * An object that represents the client's certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clienttlscertificate.html}
 **/
export interface AppMeshVirtualNodeClientTlsCertificate {
  /**
   * A reference to an object that represents a client's TLS Secret Discovery Service certificate.
   *
   * _Required_: No
   *
   * _Type_: [ListenerTlsSdsCertificate](aws-properties-appmesh-virtualnode-listenertlssdscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualNodeListenerTlsSdsCertificate;
  /**
   * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html).
   *
   * _Required_: No
   *
   * _Type_: [ListenerTlsFileCertificate](aws-properties-appmesh-virtualnode-listenertlsfilecertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualNodeListenerTlsFileCertificate;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.html}
 **/
export interface AppMeshVirtualNodeListenerTlsValidationContextTrust {
  /**
   * A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * _Required_: No
   *
   * _Type_: [TlsValidationContextSdsTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualNodeTlsValidationContextSdsTrust;
  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * _Required_: No
   *
   * _Type_: [TlsValidationContextFileTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualNodeTlsValidationContextFileTrust;
}

/**
 * An object that represents the access logging information for a virtual node.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-accesslog.html}
 **/
export interface AppMeshVirtualNodeAccessLog {
  /**
   * The file object to send virtual node access logs to.
   *
   * _Required_: No
   *
   * _Type_: [FileAccessLog](aws-properties-appmesh-virtualnode-fileaccesslog.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualNodeFileAccessLog;
}

/**
 * An object that represents the subject alternative names secured by the certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenames.html}
 **/
export interface AppMeshVirtualNodeSubjectAlternativeNames {
  /**
   * An object that represents the criteria for determining a SANs match.
   *
   * _Required_: Yes
   *
   * _Type_: [SubjectAlternativeNameMatchers](aws-properties-appmesh-virtualnode-subjectalternativenamematchers.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: AppMeshVirtualNodeSubjectAlternativeNameMatchers;
}
export interface AppMeshVirtualNodeProperties {
  /**
   * The name of the service mesh to create the virtual node in.
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
   * The virtual node specification to apply.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualNodeSpec](aws-properties-appmesh-virtualnode-virtualnodespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Spec: AppMeshVirtualNodeVirtualNodeSpec;
  /**
   * The name to use for the virtual node.
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
  VirtualNodeName?: Value<string>;
  /**
   * Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
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
 * Creates a virtual node within a service mesh.
 *
 * A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).
 *
 * You define a `listener` for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a `backend`.
 *
 * The response metadata for your new virtual node contains the `arn` that is associated with the virtual node. Set this value to the full ARN; for example, `arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp`) as the `APPMESH_RESOURCE_ARN` environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the `node.id` and `node.cluster` Envoy parameters.
 *
 * **Note**
 *
 * By default, App Mesh uses the name of the resource you specified in `APPMESH_RESOURCE_ARN` when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the `APPMESH_RESOURCE_CLUSTER` environment variable with your own name.
 *
 * For more information about virtual nodes, see [Virtual nodes](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html). You must be using `1.15.0` or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see [Envoy image](https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html) in the AWS App Mesh User Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html}
 */
export interface AppMeshVirtualNodeResource {
  Type: 'AWS::AppMesh::VirtualNode';
  Properties: AppMeshVirtualNodeProperties;
}
