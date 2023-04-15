# AWS::AppMesh::GatewayRoute GrpcGatewayRoute<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroute"></a>

An object that represents a gRPC gateway route\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroute-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroute-syntax.json"></a>

```
{
  "[Action](#cfn-appmesh-gatewayroute-grpcgatewayroute-action)" : GrpcGatewayRouteAction,
  "[Match](#cfn-appmesh-gatewayroute-grpcgatewayroute-match)" : GrpcGatewayRouteMatch
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroute-syntax.yaml"></a>

```
  [Action](#cfn-appmesh-gatewayroute-grpcgatewayroute-action):
    GrpcGatewayRouteAction
  [Match](#cfn-appmesh-gatewayroute-grpcgatewayroute-match):
    GrpcGatewayRouteMatch
```

## Properties<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroute-properties"></a>

`Action` <a name="cfn-appmesh-gatewayroute-grpcgatewayroute-action"></a>
An object that represents the action to take if a match is determined\.  
_Required_: Yes  
_Type_: [GrpcGatewayRouteAction](aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Match` <a name="cfn-appmesh-gatewayroute-grpcgatewayroute-match"></a>
An object that represents the criteria for determining a request match\.  
_Required_: Yes  
_Type_: [GrpcGatewayRouteMatch](aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
