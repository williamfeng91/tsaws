# AWS::AppMesh::VirtualNode Listener<a name="aws-properties-appmesh-virtualnode-listener"></a>

An object that represents a listener for a virtual node\.

## Syntax<a name="aws-properties-appmesh-virtualnode-listener-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-listener-syntax.json"></a>

```
{
  "[ConnectionPool](#cfn-appmesh-virtualnode-listener-connectionpool)" : VirtualNodeConnectionPool,
  "[HealthCheck](#cfn-appmesh-virtualnode-listener-healthcheck)" : HealthCheck,
  "[OutlierDetection](#cfn-appmesh-virtualnode-listener-outlierdetection)" : OutlierDetection,
  "[PortMapping](#cfn-appmesh-virtualnode-listener-portmapping)" : PortMapping,
  "[Timeout](#cfn-appmesh-virtualnode-listener-timeout)" : ListenerTimeout,
  "[TLS](#cfn-appmesh-virtualnode-listener-tls)" : ListenerTls
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-listener-syntax.yaml"></a>

```
  [ConnectionPool](#cfn-appmesh-virtualnode-listener-connectionpool):
    VirtualNodeConnectionPool
  [HealthCheck](#cfn-appmesh-virtualnode-listener-healthcheck):
    HealthCheck
  [OutlierDetection](#cfn-appmesh-virtualnode-listener-outlierdetection):
    OutlierDetection
  [PortMapping](#cfn-appmesh-virtualnode-listener-portmapping):
    PortMapping
  [Timeout](#cfn-appmesh-virtualnode-listener-timeout):
    ListenerTimeout
  [TLS](#cfn-appmesh-virtualnode-listener-tls):
    ListenerTls
```

## Properties<a name="aws-properties-appmesh-virtualnode-listener-properties"></a>

`ConnectionPool` <a name="cfn-appmesh-virtualnode-listener-connectionpool"></a>
The connection pool information for the listener\.  
_Required_: No  
_Type_: [VirtualNodeConnectionPool](aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HealthCheck` <a name="cfn-appmesh-virtualnode-listener-healthcheck"></a>
The health check information for the listener\.  
_Required_: No  
_Type_: [HealthCheck](aws-properties-appmesh-virtualnode-healthcheck.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OutlierDetection` <a name="cfn-appmesh-virtualnode-listener-outlierdetection"></a>
The outlier detection information for the listener\.  
_Required_: No  
_Type_: [OutlierDetection](aws-properties-appmesh-virtualnode-outlierdetection.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortMapping` <a name="cfn-appmesh-virtualnode-listener-portmapping"></a>
The port mapping information for the listener\.  
_Required_: Yes  
_Type_: [PortMapping](aws-properties-appmesh-virtualnode-portmapping.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timeout` <a name="cfn-appmesh-virtualnode-listener-timeout"></a>
An object that represents timeouts for different protocols\.  
_Required_: No  
_Type_: [ListenerTimeout](aws-properties-appmesh-virtualnode-listenertimeout.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TLS` <a name="cfn-appmesh-virtualnode-listener-tls"></a>
A reference to an object that represents the Transport Layer Security \(TLS\) properties for a listener\.  
_Required_: No  
_Type_: [ListenerTls](aws-properties-appmesh-virtualnode-listenertls.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
