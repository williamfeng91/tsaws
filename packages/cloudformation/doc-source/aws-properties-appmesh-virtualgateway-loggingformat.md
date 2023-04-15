# AWS::AppMesh::VirtualGateway LoggingFormat<a name="aws-properties-appmesh-virtualgateway-loggingformat"></a>

An object that represents the format for the logs\.

## Syntax<a name="aws-properties-appmesh-virtualgateway-loggingformat-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualgateway-loggingformat-syntax.json"></a>

```
{
  "[Json](#cfn-appmesh-virtualgateway-loggingformat-json)" : [ JsonFormatRef, ... ],
  "[Text](#cfn-appmesh-virtualgateway-loggingformat-text)" : String
}
```

### YAML<a name="aws-properties-appmesh-virtualgateway-loggingformat-syntax.yaml"></a>

```
  [Json](#cfn-appmesh-virtualgateway-loggingformat-json):
    - JsonFormatRef
  [Text](#cfn-appmesh-virtualgateway-loggingformat-text): String
```

## Properties<a name="aws-properties-appmesh-virtualgateway-loggingformat-properties"></a>

`Json` <a name="cfn-appmesh-virtualgateway-loggingformat-json"></a>
The logging format for JSON\.  
_Required_: No  
_Type_: List of [JsonFormatRef](aws-properties-appmesh-virtualgateway-jsonformatref.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Text` <a name="cfn-appmesh-virtualgateway-loggingformat-text"></a>
The logging format for text\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
