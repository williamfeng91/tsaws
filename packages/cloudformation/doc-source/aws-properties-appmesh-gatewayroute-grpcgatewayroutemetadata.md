# AWS::AppMesh::GatewayRoute GrpcGatewayRouteMetadata<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata"></a>

An object representing the metadata of the gateway route\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata-syntax.json"></a>

```
{
  "[Invert](#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-invert)" : Boolean,
  "[Match](#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-match)" : GatewayRouteMetadataMatch,
  "[Name](#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-name)" : String
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata-syntax.yaml"></a>

```
  [Invert](#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-invert): Boolean
  [Match](#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-match):
    GatewayRouteMetadataMatch
  [Name](#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-name): String
```

## Properties<a name="aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata-properties"></a>

`Invert` <a name="cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-invert"></a>
Specify `True` to match anything except the match criteria\. The default value is `False`\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Match` <a name="cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-match"></a>
The criteria for determining a metadata match\.  
_Required_: No  
_Type_: [GatewayRouteMetadataMatch](aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-name"></a>
A name for the gateway route metadata\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
