# AWS::AppMesh::GatewayRoute GatewayRouteSpec<a name="aws-properties-appmesh-gatewayroute-gatewayroutespec"></a>

An object that represents a gateway route specification\. Specify one gateway route type\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-gatewayroutespec-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-gatewayroutespec-syntax.json"></a>

```
{
  "[GrpcRoute](#cfn-appmesh-gatewayroute-gatewayroutespec-grpcroute)" : GrpcGatewayRoute,
  "[Http2Route](#cfn-appmesh-gatewayroute-gatewayroutespec-http2route)" : HttpGatewayRoute,
  "[HttpRoute](#cfn-appmesh-gatewayroute-gatewayroutespec-httproute)" : HttpGatewayRoute,
  "[Priority](#cfn-appmesh-gatewayroute-gatewayroutespec-priority)" : Integer
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-gatewayroutespec-syntax.yaml"></a>

```
  [GrpcRoute](#cfn-appmesh-gatewayroute-gatewayroutespec-grpcroute):
    GrpcGatewayRoute
  [Http2Route](#cfn-appmesh-gatewayroute-gatewayroutespec-http2route):
    HttpGatewayRoute
  [HttpRoute](#cfn-appmesh-gatewayroute-gatewayroutespec-httproute):
    HttpGatewayRoute
  [Priority](#cfn-appmesh-gatewayroute-gatewayroutespec-priority): Integer
```

## Properties<a name="aws-properties-appmesh-gatewayroute-gatewayroutespec-properties"></a>

`GrpcRoute` <a name="cfn-appmesh-gatewayroute-gatewayroutespec-grpcroute"></a>
An object that represents the specification of a gRPC gateway route\.  
_Required_: No  
_Type_: [GrpcGatewayRoute](aws-properties-appmesh-gatewayroute-grpcgatewayroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Http2Route` <a name="cfn-appmesh-gatewayroute-gatewayroutespec-http2route"></a>
An object that represents the specification of an HTTP/2 gateway route\.  
_Required_: No  
_Type_: [HttpGatewayRoute](aws-properties-appmesh-gatewayroute-httpgatewayroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HttpRoute` <a name="cfn-appmesh-gatewayroute-gatewayroutespec-httproute"></a>
An object that represents the specification of an HTTP gateway route\.  
_Required_: No  
_Type_: [HttpGatewayRoute](aws-properties-appmesh-gatewayroute-httpgatewayroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Priority` <a name="cfn-appmesh-gatewayroute-gatewayroutespec-priority"></a>
The ordering of the gateway routes spec\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)