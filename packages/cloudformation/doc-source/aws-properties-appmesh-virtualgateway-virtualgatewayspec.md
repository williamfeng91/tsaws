# AWS::AppMesh::VirtualGateway VirtualGatewaySpec<a name="aws-properties-appmesh-virtualgateway-virtualgatewayspec"></a>

An object that represents the specification of a service mesh resource\.

## Syntax<a name="aws-properties-appmesh-virtualgateway-virtualgatewayspec-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualgateway-virtualgatewayspec-syntax.json"></a>

```
{
  "[BackendDefaults](#cfn-appmesh-virtualgateway-virtualgatewayspec-backenddefaults)" : VirtualGatewayBackendDefaults,
  "[Listeners](#cfn-appmesh-virtualgateway-virtualgatewayspec-listeners)" : [ VirtualGatewayListener, ... ],
  "[Logging](#cfn-appmesh-virtualgateway-virtualgatewayspec-logging)" : VirtualGatewayLogging
}
```

### YAML<a name="aws-properties-appmesh-virtualgateway-virtualgatewayspec-syntax.yaml"></a>

```
  [BackendDefaults](#cfn-appmesh-virtualgateway-virtualgatewayspec-backenddefaults):
    VirtualGatewayBackendDefaults
  [Listeners](#cfn-appmesh-virtualgateway-virtualgatewayspec-listeners):
    - VirtualGatewayListener
  [Logging](#cfn-appmesh-virtualgateway-virtualgatewayspec-logging):
    VirtualGatewayLogging
```

## Properties<a name="aws-properties-appmesh-virtualgateway-virtualgatewayspec-properties"></a>

`BackendDefaults` <a name="cfn-appmesh-virtualgateway-virtualgatewayspec-backenddefaults"></a>
A reference to an object that represents the defaults for backends\.  
_Required_: No  
_Type_: [VirtualGatewayBackendDefaults](aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Listeners` <a name="cfn-appmesh-virtualgateway-virtualgatewayspec-listeners"></a>
The listeners that the mesh endpoint is expected to receive inbound traffic from\. You can specify one listener\.  
_Required_: Yes  
_Type_: List of [VirtualGatewayListener](aws-properties-appmesh-virtualgateway-virtualgatewaylistener.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Logging` <a name="cfn-appmesh-virtualgateway-virtualgatewayspec-logging"></a>
An object that represents logging information\.  
_Required_: No  
_Type_: [VirtualGatewayLogging](aws-properties-appmesh-virtualgateway-virtualgatewaylogging.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
