# AWS::AppMesh::VirtualRouter PortMapping<a name="aws-properties-appmesh-virtualrouter-portmapping"></a>

An object representing a virtual router listener port mapping\.

## Syntax<a name="aws-properties-appmesh-virtualrouter-portmapping-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualrouter-portmapping-syntax.json"></a>

```
{
  "[Port](#cfn-appmesh-virtualrouter-portmapping-port)" : Integer,
  "[Protocol](#cfn-appmesh-virtualrouter-portmapping-protocol)" : String
}
```

### YAML<a name="aws-properties-appmesh-virtualrouter-portmapping-syntax.yaml"></a>

```
  [Port](#cfn-appmesh-virtualrouter-portmapping-port): Integer
  [Protocol](#cfn-appmesh-virtualrouter-portmapping-protocol): String
```

## Properties<a name="aws-properties-appmesh-virtualrouter-portmapping-properties"></a>

`Port` <a name="cfn-appmesh-virtualrouter-portmapping-port"></a>
The port used for the port mapping\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Protocol` <a name="cfn-appmesh-virtualrouter-portmapping-protocol"></a>
The protocol used for the port mapping\. Specify one protocol\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `grpc | http | http2 | tcp`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
