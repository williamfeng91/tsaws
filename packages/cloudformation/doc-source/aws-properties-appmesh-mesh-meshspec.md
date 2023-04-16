# AWS::AppMesh::Mesh MeshSpec<a name="aws-properties-appmesh-mesh-meshspec"></a>

An object that represents the specification of a service mesh\.

## Syntax<a name="aws-properties-appmesh-mesh-meshspec-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-mesh-meshspec-syntax.json"></a>

```
{
  "[EgressFilter](#cfn-appmesh-mesh-meshspec-egressfilter)" : EgressFilter,
  "[ServiceDiscovery](#cfn-appmesh-mesh-meshspec-servicediscovery)" : MeshServiceDiscovery
}
```

### YAML<a name="aws-properties-appmesh-mesh-meshspec-syntax.yaml"></a>

```
  [EgressFilter](#cfn-appmesh-mesh-meshspec-egressfilter):
    EgressFilter
  [ServiceDiscovery](#cfn-appmesh-mesh-meshspec-servicediscovery):
    MeshServiceDiscovery
```

## Properties<a name="aws-properties-appmesh-mesh-meshspec-properties"></a>

`EgressFilter` <a name="cfn-appmesh-mesh-meshspec-egressfilter"></a>
The egress filter rules for the service mesh\.  
_Required_: No  
_Type_: [EgressFilter](aws-properties-appmesh-mesh-egressfilter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceDiscovery` <a name="cfn-appmesh-mesh-meshspec-servicediscovery"></a>
Property description not available\.  
_Required_: No  
_Type_: [MeshServiceDiscovery](aws-properties-appmesh-mesh-meshservicediscovery.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
