# AWS::AppMesh::Route GrpcRouteMetadata<a name="aws-properties-appmesh-route-grpcroutemetadata"></a>

An object that represents the match metadata for the route\.

## Syntax<a name="aws-properties-appmesh-route-grpcroutemetadata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-route-grpcroutemetadata-syntax.json"></a>

```
{
  "[Invert](#cfn-appmesh-route-grpcroutemetadata-invert)" : Boolean,
  "[Match](#cfn-appmesh-route-grpcroutemetadata-match)" : GrpcRouteMetadataMatchMethod,
  "[Name](#cfn-appmesh-route-grpcroutemetadata-name)" : String
}
```

### YAML<a name="aws-properties-appmesh-route-grpcroutemetadata-syntax.yaml"></a>

```
  [Invert](#cfn-appmesh-route-grpcroutemetadata-invert): Boolean
  [Match](#cfn-appmesh-route-grpcroutemetadata-match):
    GrpcRouteMetadataMatchMethod
  [Name](#cfn-appmesh-route-grpcroutemetadata-name): String
```

## Properties<a name="aws-properties-appmesh-route-grpcroutemetadata-properties"></a>

`Invert` <a name="cfn-appmesh-route-grpcroutemetadata-invert"></a>
Specify `True` to match anything except the match criteria\. The default value is `False`\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Match` <a name="cfn-appmesh-route-grpcroutemetadata-match"></a>
An object that represents the data to match from the request\.  
_Required_: No  
_Type_: [GrpcRouteMetadataMatchMethod](aws-properties-appmesh-route-grpcroutemetadatamatchmethod.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-appmesh-route-grpcroutemetadata-name"></a>
The name of the route\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
