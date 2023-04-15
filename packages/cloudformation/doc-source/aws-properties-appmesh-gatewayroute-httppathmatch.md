# AWS::AppMesh::GatewayRoute HttpPathMatch<a name="aws-properties-appmesh-gatewayroute-httppathmatch"></a>

An object representing the path to match in the request\.

## Syntax<a name="aws-properties-appmesh-gatewayroute-httppathmatch-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-gatewayroute-httppathmatch-syntax.json"></a>

```
{
  "[Exact](#cfn-appmesh-gatewayroute-httppathmatch-exact)" : String,
  "[Regex](#cfn-appmesh-gatewayroute-httppathmatch-regex)" : String
}
```

### YAML<a name="aws-properties-appmesh-gatewayroute-httppathmatch-syntax.yaml"></a>

```
  [Exact](#cfn-appmesh-gatewayroute-httppathmatch-exact): String
  [Regex](#cfn-appmesh-gatewayroute-httppathmatch-regex): String
```

## Properties<a name="aws-properties-appmesh-gatewayroute-httppathmatch-properties"></a>

`Exact` <a name="cfn-appmesh-gatewayroute-httppathmatch-exact"></a>
The exact path to match on\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Regex` <a name="cfn-appmesh-gatewayroute-httppathmatch-regex"></a>
The regex used to match the path\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
