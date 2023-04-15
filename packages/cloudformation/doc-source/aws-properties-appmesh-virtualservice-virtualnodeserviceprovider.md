# AWS::AppMesh::VirtualService VirtualNodeServiceProvider<a name="aws-properties-appmesh-virtualservice-virtualnodeserviceprovider"></a>

An object that represents a virtual node service provider\.

## Syntax<a name="aws-properties-appmesh-virtualservice-virtualnodeserviceprovider-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualservice-virtualnodeserviceprovider-syntax.json"></a>

```
{
  "[VirtualNodeName](#cfn-appmesh-virtualservice-virtualnodeserviceprovider-virtualnodename)" : String
}
```

### YAML<a name="aws-properties-appmesh-virtualservice-virtualnodeserviceprovider-syntax.yaml"></a>

```
  [VirtualNodeName](#cfn-appmesh-virtualservice-virtualnodeserviceprovider-virtualnodename): String
```

## Properties<a name="aws-properties-appmesh-virtualservice-virtualnodeserviceprovider-properties"></a>

`VirtualNodeName` <a name="cfn-appmesh-virtualservice-virtualnodeserviceprovider-virtualnodename"></a>
The name of the virtual node that is acting as a service provider\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
