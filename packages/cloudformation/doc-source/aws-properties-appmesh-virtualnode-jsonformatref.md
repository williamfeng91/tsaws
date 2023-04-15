# AWS::AppMesh::VirtualNode JsonFormatRef<a name="aws-properties-appmesh-virtualnode-jsonformatref"></a>

An object that represents the key value pairs for the JSON\.

## Syntax<a name="aws-properties-appmesh-virtualnode-jsonformatref-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-jsonformatref-syntax.json"></a>

```
{
  "[Key](#cfn-appmesh-virtualnode-jsonformatref-key)" : String,
  "[Value](#cfn-appmesh-virtualnode-jsonformatref-value)" : String
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-jsonformatref-syntax.yaml"></a>

```
  [Key](#cfn-appmesh-virtualnode-jsonformatref-key): String
  [Value](#cfn-appmesh-virtualnode-jsonformatref-value): String
```

## Properties<a name="aws-properties-appmesh-virtualnode-jsonformatref-properties"></a>

`Key` <a name="cfn-appmesh-virtualnode-jsonformatref-key"></a>
The specified key for the JSON\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-appmesh-virtualnode-jsonformatref-value"></a>
The specified value for the JSON\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
