# AWS::AppMesh::Route HttpRoute<a name="aws-properties-appmesh-route-httproute"></a>

An object that represents an HTTP or HTTP/2 route type\.

## Syntax<a name="aws-properties-appmesh-route-httproute-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-route-httproute-syntax.json"></a>

```
{
  "[Action](#cfn-appmesh-route-httproute-action)" : HttpRouteAction,
  "[Match](#cfn-appmesh-route-httproute-match)" : HttpRouteMatch,
  "[RetryPolicy](#cfn-appmesh-route-httproute-retrypolicy)" : HttpRetryPolicy,
  "[Timeout](#cfn-appmesh-route-httproute-timeout)" : HttpTimeout
}
```

### YAML<a name="aws-properties-appmesh-route-httproute-syntax.yaml"></a>

```
  [Action](#cfn-appmesh-route-httproute-action):
    HttpRouteAction
  [Match](#cfn-appmesh-route-httproute-match):
    HttpRouteMatch
  [RetryPolicy](#cfn-appmesh-route-httproute-retrypolicy):
    HttpRetryPolicy
  [Timeout](#cfn-appmesh-route-httproute-timeout):
    HttpTimeout
```

## Properties<a name="aws-properties-appmesh-route-httproute-properties"></a>

`Action` <a name="cfn-appmesh-route-httproute-action"></a>
An object that represents the action to take if a match is determined\.  
_Required_: Yes  
_Type_: [HttpRouteAction](aws-properties-appmesh-route-httprouteaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Match` <a name="cfn-appmesh-route-httproute-match"></a>
An object that represents the criteria for determining a request match\.  
_Required_: Yes  
_Type_: [HttpRouteMatch](aws-properties-appmesh-route-httproutematch.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RetryPolicy` <a name="cfn-appmesh-route-httproute-retrypolicy"></a>
An object that represents a retry policy\.  
_Required_: No  
_Type_: [HttpRetryPolicy](aws-properties-appmesh-route-httpretrypolicy.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timeout` <a name="cfn-appmesh-route-httproute-timeout"></a>
An object that represents types of timeouts\.  
_Required_: No  
_Type_: [HttpTimeout](aws-properties-appmesh-route-httptimeout.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
