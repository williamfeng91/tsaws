# AWS::AppMesh::VirtualGateway VirtualGatewayListener<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistener"></a>

An object that represents a listener for a virtual gateway\.

## Syntax<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistener-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistener-syntax.json"></a>

```
{
  "[ConnectionPool](#cfn-appmesh-virtualgateway-virtualgatewaylistener-connectionpool)" : VirtualGatewayConnectionPool,
  "[HealthCheck](#cfn-appmesh-virtualgateway-virtualgatewaylistener-healthcheck)" : VirtualGatewayHealthCheckPolicy,
  "[PortMapping](#cfn-appmesh-virtualgateway-virtualgatewaylistener-portmapping)" : VirtualGatewayPortMapping,
  "[TLS](#cfn-appmesh-virtualgateway-virtualgatewaylistener-tls)" : VirtualGatewayListenerTls
}
```

### YAML<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistener-syntax.yaml"></a>

```
  [ConnectionPool](#cfn-appmesh-virtualgateway-virtualgatewaylistener-connectionpool):
    VirtualGatewayConnectionPool
  [HealthCheck](#cfn-appmesh-virtualgateway-virtualgatewaylistener-healthcheck):
    VirtualGatewayHealthCheckPolicy
  [PortMapping](#cfn-appmesh-virtualgateway-virtualgatewaylistener-portmapping):
    VirtualGatewayPortMapping
  [TLS](#cfn-appmesh-virtualgateway-virtualgatewaylistener-tls):
    VirtualGatewayListenerTls
```

## Properties<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistener-properties"></a>

`ConnectionPool` <a name="cfn-appmesh-virtualgateway-virtualgatewaylistener-connectionpool"></a>
The connection pool information for the listener\.  
_Required_: No  
_Type_: [VirtualGatewayConnectionPool](aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HealthCheck` <a name="cfn-appmesh-virtualgateway-virtualgatewaylistener-healthcheck"></a>
The health check information for the listener\.  
_Required_: No  
_Type_: [VirtualGatewayHealthCheckPolicy](aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortMapping` <a name="cfn-appmesh-virtualgateway-virtualgatewaylistener-portmapping"></a>
The port mapping information for the listener\.  
_Required_: Yes  
_Type_: [VirtualGatewayPortMapping](aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TLS` <a name="cfn-appmesh-virtualgateway-virtualgatewaylistener-tls"></a>
A reference to an object that represents the Transport Layer Security \(TLS\) properties for the listener\.  
_Required_: No  
_Type_: [VirtualGatewayListenerTls](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
