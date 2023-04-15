# AWS::AppMesh::GatewayRoute GatewayRouteMetadataMatch<a name="aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch"></a>

An object representing the method header to be matched\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch-syntax.json"></a>

```
{
  "[Exact](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-exact)" : String,
  "[Prefix](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-prefix)" : String,
  "[Range](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-range)" : GatewayRouteRangeMatch,
  "[Regex](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-regex)" : String,
  "[Suffix](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-suffix)" : String
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch-syntax.yaml"></a>

```
  [Exact](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-exact): String
  [Prefix](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-prefix): String
  [Range](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-range):
    GatewayRouteRangeMatch
  [Regex](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-regex): String
  [Suffix](#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-suffix): String
```

## Properties<a name="aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch-properties"></a>

`Exact` <a name="cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-exact"></a>
The exact method header to be matched on\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Prefix` <a name="cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-prefix"></a>
The specified beginning characters of the method header to be matched on\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Range` <a name="cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-range"></a>
An object that represents the range of values to match on\.  
_Required_: No  
_Type_: [GatewayRouteRangeMatch](aws-properties-appmesh-gatewayroute-gatewayrouterangematch.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Regex` <a name="cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-regex"></a>
The regex used to match the method header\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Suffix` <a name="cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-suffix"></a>
The specified ending characters of the method header to match on\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
