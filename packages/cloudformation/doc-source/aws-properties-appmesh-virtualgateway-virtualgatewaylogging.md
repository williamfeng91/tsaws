# AWS::AppMesh::VirtualGateway VirtualGatewayLogging<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylogging"></a>

An object that represents logging information\.

## Syntax<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylogging-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylogging-syntax.json"></a>

```
{
  "[AccessLog](#cfn-appmesh-virtualgateway-virtualgatewaylogging-accesslog)" : VirtualGatewayAccessLog
}
```

### YAML<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylogging-syntax.yaml"></a>

```
  [AccessLog](#cfn-appmesh-virtualgateway-virtualgatewaylogging-accesslog):
    VirtualGatewayAccessLog
```

## Properties<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylogging-properties"></a>

`AccessLog` <a name="cfn-appmesh-virtualgateway-virtualgatewaylogging-accesslog"></a>
The access log configuration\.  
_Required_: No  
_Type_: [VirtualGatewayAccessLog](aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
