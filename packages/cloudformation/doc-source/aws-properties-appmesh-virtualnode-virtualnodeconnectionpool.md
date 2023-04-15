# AWS::AppMesh::VirtualNode VirtualNodeConnectionPool<a name="aws-properties-appmesh-virtualnode-virtualnodeconnectionpool"></a>

An object that represents the type of virtual node connection pool\.

Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping\.

If not present the default value for `maxPendingRequests` is `2147483647`\.

## Syntax<a name="aws-properties-appmesh-virtualnode-virtualnodeconnectionpool-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-virtualnodeconnectionpool-syntax.json"></a>

```
{
  "[GRPC](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-grpc)" : VirtualNodeGrpcConnectionPool,
  "[HTTP](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http)" : VirtualNodeHttpConnectionPool,
  "[HTTP2](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http2)" : VirtualNodeHttp2ConnectionPool,
  "[TCP](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-tcp)" : VirtualNodeTcpConnectionPool
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-virtualnodeconnectionpool-syntax.yaml"></a>

```
  [GRPC](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-grpc):
    VirtualNodeGrpcConnectionPool
  [HTTP](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http):
    VirtualNodeHttpConnectionPool
  [HTTP2](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http2):
    VirtualNodeHttp2ConnectionPool
  [TCP](#cfn-appmesh-virtualnode-virtualnodeconnectionpool-tcp):
    VirtualNodeTcpConnectionPool
```

## Properties<a name="aws-properties-appmesh-virtualnode-virtualnodeconnectionpool-properties"></a>

`GRPC` <a name="cfn-appmesh-virtualnode-virtualnodeconnectionpool-grpc"></a>
An object that represents a type of connection pool\.  
_Required_: No  
_Type_: [VirtualNodeGrpcConnectionPool](aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HTTP` <a name="cfn-appmesh-virtualnode-virtualnodeconnectionpool-http"></a>
An object that represents a type of connection pool\.  
_Required_: No  
_Type_: [VirtualNodeHttpConnectionPool](aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HTTP2` <a name="cfn-appmesh-virtualnode-virtualnodeconnectionpool-http2"></a>
An object that represents a type of connection pool\.  
_Required_: No  
_Type_: [VirtualNodeHttp2ConnectionPool](aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TCP` <a name="cfn-appmesh-virtualnode-virtualnodeconnectionpool-tcp"></a>
An object that represents a type of connection pool\.  
_Required_: No  
_Type_: [VirtualNodeTcpConnectionPool](aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
