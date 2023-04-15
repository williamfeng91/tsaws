# AWS::IoTTwinMaker::ComponentType Function<a name="aws-properties-iottwinmaker-componenttype-function"></a>

The function body\.

## Syntax<a name="aws-properties-iottwinmaker-componenttype-function-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iottwinmaker-componenttype-function-syntax.json"></a>

```
{
  "[ImplementedBy](#cfn-iottwinmaker-componenttype-function-implementedby)" : DataConnector,
  "[RequiredProperties](#cfn-iottwinmaker-componenttype-function-requiredproperties)" : [ String, ... ],
  "[Scope](#cfn-iottwinmaker-componenttype-function-scope)" : String
}
```

### YAML<a name="aws-properties-iottwinmaker-componenttype-function-syntax.yaml"></a>

```
  [ImplementedBy](#cfn-iottwinmaker-componenttype-function-implementedby):
    DataConnector
  [RequiredProperties](#cfn-iottwinmaker-componenttype-function-requiredproperties):
    - String
  [Scope](#cfn-iottwinmaker-componenttype-function-scope): String
```

## Properties<a name="aws-properties-iottwinmaker-componenttype-function-properties"></a>

`ImplementedBy` <a name="cfn-iottwinmaker-componenttype-function-implementedby"></a>
The data connector\.  
_Required_: No  
_Type_: [DataConnector](aws-properties-iottwinmaker-componenttype-dataconnector.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequiredProperties` <a name="cfn-iottwinmaker-componenttype-function-requiredproperties"></a>
The required properties of the function\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Scope` <a name="cfn-iottwinmaker-componenttype-function-scope"></a>
The scope of the function\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
