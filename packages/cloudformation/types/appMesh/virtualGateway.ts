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
 * An object that represents a Transport Layer Security (TLS) validation context trust.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextTrust {
  /**
   * A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayTlsValidationContextSdsTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextSdsTrust;
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayTlsValidationContextAcmTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ACM?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextAcmTrust;
  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayTlsValidationContextFileTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextFileTrust;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextFileTrust {
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
 * An object that represents the format for the logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-loggingformat.html}
 **/
export interface AppMeshVirtualGatewayLoggingFormat {
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
   * _Type_: List of [JsonFormatRef](aws-properties-appmesh-virtualgateway-jsonformatref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Json?: List<AppMeshVirtualGatewayJsonFormatRef>;
}

/**
 * An object that represents a type of connection pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttp2connectionpool.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayHttp2ConnectionPool {
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
 * An object that represents a type of connection pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayGrpcConnectionPool {
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
 * An object that represents the type of virtual gateway connection pool.
 *
 * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
 *
 * If not present the default value for `maxPendingRequests` is `2147483647`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayConnectionPool {
  /**
   * An object that represents a type of connection pool.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayHttp2ConnectionPool](aws-properties-appmesh-virtualgateway-virtualgatewayhttp2connectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTP2?: AppMeshVirtualGatewayVirtualGatewayHttp2ConnectionPool;
  /**
   * An object that represents a type of connection pool.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayHttpConnectionPool](aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HTTP?: AppMeshVirtualGatewayVirtualGatewayHttpConnectionPool;
  /**
   * An object that represents a type of connection pool.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayGrpcConnectionPool](aws-properties-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GRPC?: AppMeshVirtualGatewayVirtualGatewayGrpcConnectionPool;
}

/**
 * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayClientTlsCertificate {
  /**
   * A reference to an object that represents a virtual gateway's client's Secret Discovery Service certificate.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayListenerTlsSdsCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualGatewayVirtualGatewayListenerTlsSdsCertificate;
  /**
   * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [ Transport Layer Security (TLS) ](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html).
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayListenerTlsFileCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualGatewayVirtualGatewayListenerTlsFileCertificate;
}

/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListenerTls {
  /**
   * A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayListenerTlsValidationContext](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Validation?: AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContext;
  /**
   * Specify one of the following modes.
   */
  Mode: Value<string>;
  /**
   * An object that represents a Transport Layer Security (TLS) certificate.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualGatewayListenerTlsCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificate: AppMeshVirtualGatewayVirtualGatewayListenerTlsCertificate;
}

/**
 * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenamematchers.html}
 **/
export interface AppMeshVirtualGatewaySubjectAlternativeNameMatchers {
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
 * An object that represents a client policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicy.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayClientPolicy {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) client policy.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayClientPolicyTls](aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TLS?: AppMeshVirtualGatewayVirtualGatewayClientPolicyTls;
}

/**
 * An object that represents a port mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayPortMapping {
  /**
   * The port used for the port mapping. Specify one protocol.
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
   * The protocol used for the port mapping.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `grpc | http | http2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
}

/**
 * An object that represents a Transport Layer Security (TLS) client policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayClientPolicyTls {
  /**
   * A reference to an object that represents a Transport Layer Security (TLS) validation context.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualGatewayTlsValidationContext](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Validation: AppMeshVirtualGatewayVirtualGatewayTlsValidationContext;
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
   * A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS) certificate.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayClientTlsCertificate](aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificate?: AppMeshVirtualGatewayVirtualGatewayClientTlsCertificate;
}

/**
 * The access log configuration for a virtual gateway.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayAccessLog {
  /**
   * The file object to send virtual gateway access logs to.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayFileAccessLog](aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualGatewayVirtualGatewayFileAccessLog;
}

/**
 * An object that represents an access log file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayFileAccessLog {
  /**
   * The file path to write access logs to. You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs`, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
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
   * The specified format for the virtual gateway access logs. It can be either `json_format` or `text_format`.
   *
   * _Required_: No
   *
   * _Type_: [LoggingFormat](aws-properties-appmesh-virtualgateway-loggingformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: AppMeshVirtualGatewayLoggingFormat;
}

/**
 * An object that represents the health check policy for a virtual gateway's listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayHealthCheckPolicy {
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
   * The number of consecutive failed health checks that must occur before declaring a virtual gateway unhealthy.
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
   * The number of consecutive successful health checks that must occur before declaring the listener healthy.
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
   * _Allowed values_: `grpc | http | http2`
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
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContextTrust {
  /**
   * A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayTlsValidationContextSdsTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextSdsTrust;
  /**
   * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayTlsValidationContextFileTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextFileTrust;
}

/**
 * An object that represents an AWS Certificate Manager certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsAcmCertificate {
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
 * An object that represents the specification of a service mesh resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayspec.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewaySpec {
  /**
   * An object that represents logging information.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayLogging](aws-properties-appmesh-virtualgateway-virtualgatewaylogging.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logging?: AppMeshVirtualGatewayVirtualGatewayLogging;
  /**
   * The listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.
   *
   * _Required_: Yes
   *
   * _Type_: List of [VirtualGatewayListener](aws-properties-appmesh-virtualgateway-virtualgatewaylistener.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Listeners: List<AppMeshVirtualGatewayVirtualGatewayListener>;
  /**
   * A reference to an object that represents the defaults for backends.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayBackendDefaults](aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackendDefaults?: AppMeshVirtualGatewayVirtualGatewayBackendDefaults;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContext {
  /**
   * A reference to an object that represents the SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.
   *
   * _Required_: No
   *
   * _Type_: [SubjectAlternativeNames](aws-properties-appmesh-virtualgateway-subjectalternativenames.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubjectAlternativeNames?: AppMeshVirtualGatewaySubjectAlternativeNames;
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualGatewayTlsValidationContextTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Trust: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextTrust;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsCertificate {
  /**
   * A reference to an object that represents a virtual gateway's listener's Secret Discovery Service certificate.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayListenerTlsSdsCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SDS?: AppMeshVirtualGatewayVirtualGatewayListenerTlsSdsCertificate;
  /**
   * A reference to an object that represents an AWS Certificate Manager certificate.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayListenerTlsAcmCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ACM?: AppMeshVirtualGatewayVirtualGatewayListenerTlsAcmCertificate;
  /**
   * A reference to an object that represents a local file certificate.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayListenerTlsFileCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  File?: AppMeshVirtualGatewayVirtualGatewayListenerTlsFileCertificate;
}

/**
 * An object that represents the subject alternative names secured by the certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenames.html}
 **/
export interface AppMeshVirtualGatewaySubjectAlternativeNames {
  /**
   * An object that represents the criteria for determining a SANs match.
   *
   * _Required_: Yes
   *
   * _Type_: [SubjectAlternativeNameMatchers](aws-properties-appmesh-virtualgateway-subjectalternativenamematchers.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: AppMeshVirtualGatewaySubjectAlternativeNameMatchers;
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContext {
  /**
   * A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS) validation context.
   *
   * _Required_: No
   *
   * _Type_: [SubjectAlternativeNames](aws-properties-appmesh-virtualgateway-subjectalternativenames.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubjectAlternativeNames?: AppMeshVirtualGatewaySubjectAlternativeNames;
  /**
   * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualGatewayListenerTlsValidationContextTrust](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Trust: AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContextTrust;
}

/**
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsFileCertificate {
  /**
   * The private key for a certificate stored on the file system of the mesh endpoint that the proxy is running on.
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
 * An object that represents logging information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylogging.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayLogging {
  /**
   * The access log configuration.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayAccessLog](aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessLog?: AppMeshVirtualGatewayVirtualGatewayAccessLog;
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextSdsTrust {
  /**
   * A reference to an object that represents the name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
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
 * An object that represents a listener for a virtual gateway.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListener {
  /**
   * The connection pool information for the listener.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayConnectionPool](aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionPool?: AppMeshVirtualGatewayVirtualGatewayConnectionPool;
  /**
   * The health check information for the listener.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayHealthCheckPolicy](aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheck?: AppMeshVirtualGatewayVirtualGatewayHealthCheckPolicy;
  /**
   * A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayListenerTls](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TLS?: AppMeshVirtualGatewayVirtualGatewayListenerTls;
  /**
   * The port mapping information for the listener.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualGatewayPortMapping](aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortMapping: AppMeshVirtualGatewayVirtualGatewayPortMapping;
}

/**
 * An object that represents the key value pairs for the JSON.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-jsonformatref.html}
 **/
export interface AppMeshVirtualGatewayJsonFormatRef {
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
 * An object that represents the default properties for a backend.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayBackendDefaults {
  /**
   * A reference to an object that represents a client policy.
   *
   * _Required_: No
   *
   * _Type_: [VirtualGatewayClientPolicy](aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientPolicy?: AppMeshVirtualGatewayVirtualGatewayClientPolicy;
}

/**
 * An object that represents a type of connection pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayHttpConnectionPool {
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
 * An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextAcmTrust {
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
 * An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh[TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.html}
 **/
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsSdsCertificate {
  /**
   * A reference to an object that represents the name of the secret secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretName: Value<string>;
}
export interface AppMeshVirtualGatewayProperties {
  /**
   * The name of the virtual gateway.
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
  VirtualGatewayName?: Value<string>;
  /**
   * The name of the service mesh that the virtual gateway resides in.
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
   * The specifications of the virtual gateway.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualGatewaySpec](aws-properties-appmesh-virtualgateway-virtualgatewayspec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Spec: AppMeshVirtualGatewayVirtualGatewaySpec;
  /**
   * Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
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
 * Creates a virtual gateway.
 *
 * A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.
 *
 * For more information about virtual gateways, see [Virtual gateways](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html}
 */
export interface AppMeshVirtualGatewayResource {
  Type: 'AWS::AppMesh::VirtualGateway';
  Properties: AppMeshVirtualGatewayProperties;
}
