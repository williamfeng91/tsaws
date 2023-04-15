# AWS::AppFlow::Flow CustomConnectorSourceProperties<a name="aws-properties-appflow-flow-customconnectorsourceproperties"></a>

The properties that are applied when the custom connector is being used as a source\.

## Syntax<a name="aws-properties-appflow-flow-customconnectorsourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-customconnectorsourceproperties-syntax.json"></a>

```
{
  "[CustomProperties](#cfn-appflow-flow-customconnectorsourceproperties-customproperties)" : {Key : Value, ...},
  "[EntityName](#cfn-appflow-flow-customconnectorsourceproperties-entityname)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-customconnectorsourceproperties-syntax.yaml"></a>

```
  [CustomProperties](#cfn-appflow-flow-customconnectorsourceproperties-customproperties):
    Key : Value
  [EntityName](#cfn-appflow-flow-customconnectorsourceproperties-entityname): String
```

## Properties<a name="aws-properties-appflow-flow-customconnectorsourceproperties-properties"></a>

`CustomProperties` <a name="cfn-appflow-flow-customconnectorsourceproperties-customproperties"></a>
Custom properties that are required to use the custom connector as a source\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EntityName` <a name="cfn-appflow-flow-customconnectorsourceproperties-entityname"></a>
The entity specified in the custom connector as a source in the flow\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
