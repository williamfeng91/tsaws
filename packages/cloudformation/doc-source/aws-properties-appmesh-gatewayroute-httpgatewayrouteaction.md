# AWS::AppMesh::GatewayRoute HttpGatewayRouteAction<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouteaction"></a>

An object that represents the action to take if a match is determined\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouteaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouteaction-syntax.json"></a>

```
{
  "[Rewrite](#cfn-appmesh-gatewayroute-httpgatewayrouteaction-rewrite)" : HttpGatewayRouteRewrite,
  "[Target](#cfn-appmesh-gatewayroute-httpgatewayrouteaction-target)" : GatewayRouteTarget
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouteaction-syntax.yaml"></a>

```
  [Rewrite](#cfn-appmesh-gatewayroute-httpgatewayrouteaction-rewrite):
    HttpGatewayRouteRewrite
  [Target](#cfn-appmesh-gatewayroute-httpgatewayrouteaction-target):
    GatewayRouteTarget
```

## Properties<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouteaction-properties"></a>

`Rewrite` <a name="cfn-appmesh-gatewayroute-httpgatewayrouteaction-rewrite"></a>
The gateway route action to rewrite\.  
_Required_: No  
_Type_: [HttpGatewayRouteRewrite](aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Target` <a name="cfn-appmesh-gatewayroute-httpgatewayrouteaction-target"></a>
An object that represents the target that traffic is routed to when a request matches the gateway route\.  
_Required_: Yes  
_Type_: [GatewayRouteTarget](aws-properties-appmesh-gatewayroute-gatewayroutetarget.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
