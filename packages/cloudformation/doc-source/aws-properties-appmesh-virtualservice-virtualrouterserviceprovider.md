# AWS::AppMesh::VirtualService VirtualRouterServiceProvider<a name="aws-properties-appmesh-virtualservice-virtualrouterserviceprovider"></a>

An object that represents a virtual node service provider\.

## Syntax<a name="aws-properties-appmesh-virtualservice-virtualrouterserviceprovider-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualservice-virtualrouterserviceprovider-syntax.json"></a>

```
{
  "[VirtualRouterName](#cfn-appmesh-virtualservice-virtualrouterserviceprovider-virtualroutername)" : String
}
```

### YAML<a name="aws-properties-appmesh-virtualservice-virtualrouterserviceprovider-syntax.yaml"></a>

```
  [VirtualRouterName](#cfn-appmesh-virtualservice-virtualrouterserviceprovider-virtualroutername): String
```

## Properties<a name="aws-properties-appmesh-virtualservice-virtualrouterserviceprovider-properties"></a>

`VirtualRouterName` <a name="cfn-appmesh-virtualservice-virtualrouterserviceprovider-virtualroutername"></a>
The name of the virtual router that is acting as a service provider\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
