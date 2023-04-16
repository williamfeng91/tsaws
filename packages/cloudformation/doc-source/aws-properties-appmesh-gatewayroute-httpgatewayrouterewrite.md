# AWS::AppMesh::GatewayRoute HttpGatewayRouteRewrite<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite"></a>

An object representing the gateway route to rewrite\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite-syntax.json"></a>

```
{
  "[Hostname](#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-hostname)" : GatewayRouteHostnameRewrite,
  "[Path](#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-path)" : HttpGatewayRoutePathRewrite,
  "[Prefix](#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-prefix)" : HttpGatewayRoutePrefixRewrite
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite-syntax.yaml"></a>

```
  [Hostname](#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-hostname):
    GatewayRouteHostnameRewrite
  [Path](#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-path):
    HttpGatewayRoutePathRewrite
  [Prefix](#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-prefix):
    HttpGatewayRoutePrefixRewrite
```

## Properties<a name="aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite-properties"></a>

`Hostname` <a name="cfn-appmesh-gatewayroute-httpgatewayrouterewrite-hostname"></a>
The host name to rewrite\.  
_Required_: No  
_Type_: [GatewayRouteHostnameRewrite](aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Path` <a name="cfn-appmesh-gatewayroute-httpgatewayrouterewrite-path"></a>
The path to rewrite\.  
_Required_: No  
_Type_: [HttpGatewayRoutePathRewrite](aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Prefix` <a name="cfn-appmesh-gatewayroute-httpgatewayrouterewrite-prefix"></a>
The specified beginning characters to rewrite\.  
_Required_: No  
_Type_: [HttpGatewayRoutePrefixRewrite](aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
