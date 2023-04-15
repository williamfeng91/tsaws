# AWS::ApiGatewayV2::Route<a name="aws-resource-apigatewayv2-route"></a>

The `AWS::ApiGatewayV2::Route` resource creates a route for an API\.

## Syntax<a name="aws-resource-apigatewayv2-route-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-apigatewayv2-route-syntax.json"></a>

```
{
  "Type" : "AWS::ApiGatewayV2::Route",
  "Properties" : {
      "[ApiId](#cfn-apigatewayv2-route-apiid)" : String,
      "[ApiKeyRequired](#cfn-apigatewayv2-route-apikeyrequired)" : Boolean,
      "[AuthorizationScopes](#cfn-apigatewayv2-route-authorizationscopes)" : [ String, ... ],
      "[AuthorizationType](#cfn-apigatewayv2-route-authorizationtype)" : String,
      "[AuthorizerId](#cfn-apigatewayv2-route-authorizerid)" : String,
      "[ModelSelectionExpression](#cfn-apigatewayv2-route-modelselectionexpression)" : String,
      "[OperationName](#cfn-apigatewayv2-route-operationname)" : String,
      "[RequestModels](#cfn-apigatewayv2-route-requestmodels)" : Json,
      "[RequestParameters](#cfn-apigatewayv2-route-requestparameters)" : Json,
      "[RouteKey](#cfn-apigatewayv2-route-routekey)" : String,
      "[RouteResponseSelectionExpression](#cfn-apigatewayv2-route-routeresponseselectionexpression)" : String,
      "[Target](#cfn-apigatewayv2-route-target)" : String
    }
}
```

### YAML<a name="aws-resource-apigatewayv2-route-syntax.yaml"></a>

```
Type: AWS::ApiGatewayV2::Route
Properties:
  [ApiId](#cfn-apigatewayv2-route-apiid): String
  [ApiKeyRequired](#cfn-apigatewayv2-route-apikeyrequired): Boolean
  [AuthorizationScopes](#cfn-apigatewayv2-route-authorizationscopes):
    - String
  [AuthorizationType](#cfn-apigatewayv2-route-authorizationtype): String
  [AuthorizerId](#cfn-apigatewayv2-route-authorizerid): String
  [ModelSelectionExpression](#cfn-apigatewayv2-route-modelselectionexpression): String
  [OperationName](#cfn-apigatewayv2-route-operationname): String
  [RequestModels](#cfn-apigatewayv2-route-requestmodels): Json
  [RequestParameters](#cfn-apigatewayv2-route-requestparameters): Json
  [RouteKey](#cfn-apigatewayv2-route-routekey): String
  [RouteResponseSelectionExpression](#cfn-apigatewayv2-route-routeresponseselectionexpression): String
  [Target](#cfn-apigatewayv2-route-target): String
```

## Properties<a name="aws-resource-apigatewayv2-route-properties"></a>

`ApiId` <a name="cfn-apigatewayv2-route-apiid"></a>
The API identifier\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ApiKeyRequired` <a name="cfn-apigatewayv2-route-apikeyrequired"></a>
Specifies whether an API key is required for the route\. Supported only for WebSocket APIs\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AuthorizationScopes` <a name="cfn-apigatewayv2-route-authorizationscopes"></a>
The authorization scopes supported by this route\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AuthorizationType` <a name="cfn-apigatewayv2-route-authorizationtype"></a>
The authorization type for the route\. For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer\. For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AuthorizerId` <a name="cfn-apigatewayv2-route-authorizerid"></a>
The identifier of the `Authorizer` resource to be associated with this route\. The authorizer identifier is generated by API Gateway when you created the authorizer\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ModelSelectionExpression` <a name="cfn-apigatewayv2-route-modelselectionexpression"></a>
The model selection expression for the route\. Supported only for WebSocket APIs\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OperationName` <a name="cfn-apigatewayv2-route-operationname"></a>
The operation name for the route\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequestModels` <a name="cfn-apigatewayv2-route-requestmodels"></a>
The request models for the route\. Supported only for WebSocket APIs\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequestParameters` <a name="cfn-apigatewayv2-route-requestparameters"></a>
The request parameters for the route\. Supported only for WebSocket APIs\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RouteKey` <a name="cfn-apigatewayv2-route-routekey"></a>
The route key for the route\. For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RouteResponseSelectionExpression` <a name="cfn-apigatewayv2-route-routeresponseselectionexpression"></a>
The route response selection expression for the route\. Supported only for WebSocket APIs\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Target` <a name="cfn-apigatewayv2-route-target"></a>
The target for the route\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-apigatewayv2-route-return-values"></a>

### Ref<a name="aws-resource-apigatewayv2-route-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the Route resource ID, such as `abcd123`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-apigatewayv2-route-return-values-fn--getatt"></a>

#### <a name="aws-resource-apigatewayv2-route-return-values-fn--getatt-fn--getatt"></a>

`RouteId` <a name="RouteId-fn::getatt"></a>
Property description not available\.

## Examples<a name="aws-resource-apigatewayv2-route--examples"></a>

### HTTP API route creation example<a name="aws-resource-apigatewayv2-route--examples--HTTP_API_route_creation_example"></a>

The following example creates a `route` resource called `MyRoute` for an HTTP API called `MyAPI` that already has an `integration` resource called `MyIntegration`\. The route accepts `POST` requests to `/signup`\.

#### JSON<a name="aws-resource-apigatewayv2-route--examples--HTTP_API_route_creation_example--json"></a>

```
"MyRoute": {
    "Type": "AWS::ApiGatewayV2::Route",
        "Properties": {
            "ApiId": {
                "Ref": "MyAPI"
            },
            "RouteKey": "POST /signup",
            "Target": {
                "Fn::Join": [
                    "/",
                    [
                        "integrations",
                        {
                            "Ref": "MyIntegration"
                        }
                    ]
                ]
            }
        }
    }
```

#### YAML<a name="aws-resource-apigatewayv2-route--examples--HTTP_API_route_creation_example--yaml"></a>

```
MyRoute:
  Type: AWS::ApiGatewayV2::Route
  Properties:
    ApiId: !Ref MyAPI
    RouteKey: 'POST /signup'
    Target: !Join
      - /
      - - integrations
        - !Ref MyIntegration
```

### WebSocket API route creation example<a name="aws-resource-apigatewayv2-route--examples--WebSocket_API_route_creation_example"></a>

The following example creates a `route` resource called `MyRoute` for a WebSocket API called `MyAPI` that already has an `integration` resource called `MyIntegration`\. The route has a route key value of `routekey1`\.

#### JSON<a name="aws-resource-apigatewayv2-route--examples--WebSocket_API_route_creation_example--json"></a>

```
{
    "MyRoute": {
        "Type": "AWS::ApiGatewayV2::Route",
        "DependsOn": [
            "MyIntegration"
        ],
        "Properties": {
            "ApiId": {
                "Ref": "MyApi"
            },
            "RouteKey": "routekey1",
            "AuthorizationType": "NONE",
            "Target": {
                "Fn::Join": [
                    "/",
                    [
                        "integrations",
                        {
                            "Ref": "MyIntegration"
                        }
                    ]
                ]
            }
        }
    }
}
```

#### YAML<a name="aws-resource-apigatewayv2-route--examples--WebSocket_API_route_creation_example--yaml"></a>

```
MyRoute:
  Type: 'AWS::ApiGatewayV2::Route'
  DependsOn:
    - MyIntegration
  Properties:
    ApiId: !Ref MyApi
    RouteKey: routekey1
    AuthorizationType: NONE
    Target: !Join
      - /
      - - integrations
        - !Ref MyIntegration
```

## See also<a name="aws-resource-apigatewayv2-route--seealso"></a>

- [CreateRoute](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/apis-apiid-routes.html#CreateRoute) in the _Amazon API Gateway Version 2 API Reference_