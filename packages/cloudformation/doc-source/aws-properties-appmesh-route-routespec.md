# AWS::AppMesh::Route RouteSpec<a name="aws-properties-appmesh-route-routespec"></a>

An object that represents a route specification\. Specify one route type\.

## Syntax<a name="aws-properties-appmesh-route-routespec-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-route-routespec-syntax.json"></a>

```
{
  "[GrpcRoute](#cfn-appmesh-route-routespec-grpcroute)" : GrpcRoute,
  "[Http2Route](#cfn-appmesh-route-routespec-http2route)" : HttpRoute,
  "[HttpRoute](#cfn-appmesh-route-routespec-httproute)" : HttpRoute,
  "[Priority](#cfn-appmesh-route-routespec-priority)" : Integer,
  "[TcpRoute](#cfn-appmesh-route-routespec-tcproute)" : TcpRoute
}
```

### YAML<a name="aws-properties-appmesh-route-routespec-syntax.yaml"></a>

```
  [GrpcRoute](#cfn-appmesh-route-routespec-grpcroute):
    GrpcRoute
  [Http2Route](#cfn-appmesh-route-routespec-http2route):
    HttpRoute
  [HttpRoute](#cfn-appmesh-route-routespec-httproute):
    HttpRoute
  [Priority](#cfn-appmesh-route-routespec-priority): Integer
  [TcpRoute](#cfn-appmesh-route-routespec-tcproute):
    TcpRoute
```

## Properties<a name="aws-properties-appmesh-route-routespec-properties"></a>

`GrpcRoute` <a name="cfn-appmesh-route-routespec-grpcroute"></a>
An object that represents the specification of a gRPC route\.  
_Required_: No  
_Type_: [GrpcRoute](aws-properties-appmesh-route-grpcroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Http2Route` <a name="cfn-appmesh-route-routespec-http2route"></a>
An object that represents the specification of an HTTP/2 route\.  
_Required_: No  
_Type_: [HttpRoute](aws-properties-appmesh-route-httproute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HttpRoute` <a name="cfn-appmesh-route-routespec-httproute"></a>
An object that represents the specification of an HTTP route\.  
_Required_: No  
_Type_: [HttpRoute](aws-properties-appmesh-route-httproute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Priority` <a name="cfn-appmesh-route-routespec-priority"></a>
The priority for the route\. Routes are matched based on the specified value, where 0 is the highest priority\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TcpRoute` <a name="cfn-appmesh-route-routespec-tcproute"></a>
An object that represents the specification of a TCP route\.  
_Required_: No  
_Type_: [TcpRoute](aws-properties-appmesh-route-tcproute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
