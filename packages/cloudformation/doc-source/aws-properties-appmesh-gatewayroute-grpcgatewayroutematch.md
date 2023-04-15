# AWS::AppMesh::GatewayRoute GrpcGatewayRouteMatch<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutematch"></a>

An object that represents the criteria for determining a request match\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutematch-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutematch-syntax.json"></a>

```
{
  "[Hostname](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-hostname)" : GatewayRouteHostnameMatch,
  "[Metadata](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-metadata)" : [ GrpcGatewayRouteMetadata, ... ],
  "[Port](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-port)" : Integer,
  "[ServiceName](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-servicename)" : String
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutematch-syntax.yaml"></a>

```
  [Hostname](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-hostname):
    GatewayRouteHostnameMatch
  [Metadata](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-metadata):
    - GrpcGatewayRouteMetadata
  [Port](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-port): Integer
  [ServiceName](#cfn-appmesh-gatewayroute-grpcgatewayroutematch-servicename): String
```

## Properties<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutematch-properties"></a>

`Hostname` <a name="cfn-appmesh-gatewayroute-grpcgatewayroutematch-hostname"></a>
The gateway route host name to be matched on\.  
_Required_: No  
_Type_: [GatewayRouteHostnameMatch](aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Metadata` <a name="cfn-appmesh-gatewayroute-grpcgatewayroutematch-metadata"></a>
The gateway route metadata to be matched on\.  
_Required_: No  
_Type_: List of [GrpcGatewayRouteMetadata](aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-appmesh-gatewayroute-grpcgatewayroutematch-port"></a>
The gateway route port to be matched on\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceName` <a name="cfn-appmesh-gatewayroute-grpcgatewayroutematch-servicename"></a>
The fully qualified domain name for the service to match from the request\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
