# AWS::ApiGatewayV2::ApiGatewayManagedOverrides<a name="aws-resource-apigatewayv2-apigatewaymanagedoverrides"></a>

The `AWS::ApiGatewayV2::ApiGatewayManagedOverrides` resource overrides the default properties of API Gateway\-managed resources that are implicitly configured for you when you use quick create\. When you create an API by using quick create, an `AWS::ApiGatewayV2::Route`, `AWS::ApiGatewayV2::Integration`, and `AWS::ApiGatewayV2::Stage` are created for you and associated with your `AWS::ApiGatewayV2::Api`\. The `AWS::ApiGatewayV2::ApiGatewayManagedOverrides` resource enables you to set, or override the properties of these implicit resources\. Supported only for HTTP APIs\.

## Syntax<a name="aws-resource-apigatewayv2-apigatewaymanagedoverrides-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-apigatewayv2-apigatewaymanagedoverrides-syntax.json"></a>

```
{
  "Type" : "AWS::ApiGatewayV2::ApiGatewayManagedOverrides",
  "Properties" : {
      "[ApiId](#cfn-apigatewayv2-apigatewaymanagedoverrides-apiid)" : String,
      "[Integration](#cfn-apigatewayv2-apigatewaymanagedoverrides-integration)" : IntegrationOverrides,
      "[Route](#cfn-apigatewayv2-apigatewaymanagedoverrides-route)" : RouteOverrides,
      "[Stage](#cfn-apigatewayv2-apigatewaymanagedoverrides-stage)" : StageOverrides
    }
}
```

### YAML<a name="aws-resource-apigatewayv2-apigatewaymanagedoverrides-syntax.yaml"></a>

```
Type: AWS::ApiGatewayV2::ApiGatewayManagedOverrides
Properties:
  [ApiId](#cfn-apigatewayv2-apigatewaymanagedoverrides-apiid): String
  [Integration](#cfn-apigatewayv2-apigatewaymanagedoverrides-integration):
    IntegrationOverrides
  [Route](#cfn-apigatewayv2-apigatewaymanagedoverrides-route):
    RouteOverrides
  [Stage](#cfn-apigatewayv2-apigatewaymanagedoverrides-stage):
    StageOverrides
```

## Properties<a name="aws-resource-apigatewayv2-apigatewaymanagedoverrides-properties"></a>

`ApiId` <a name="cfn-apigatewayv2-apigatewaymanagedoverrides-apiid"></a>
The ID of the API for which to override the configuration of API Gateway\-managed resources\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Integration` <a name="cfn-apigatewayv2-apigatewaymanagedoverrides-integration"></a>
Overrides the integration configuration for an API Gateway\-managed integration\.  
_Required_: No  
_Type_: [IntegrationOverrides](aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Route` <a name="cfn-apigatewayv2-apigatewaymanagedoverrides-route"></a>
Overrides the route configuration for an API Gateway\-managed route\.  
_Required_: No  
_Type_: [RouteOverrides](aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Stage` <a name="cfn-apigatewayv2-apigatewaymanagedoverrides-stage"></a>
Overrides the stage configuration for an API Gateway\-managed stage\.  
_Required_: No  
_Type_: [StageOverrides](aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
