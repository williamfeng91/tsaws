# AWS::AppFlow::Flow PardotSourceProperties<a name="aws-properties-appflow-flow-pardotsourceproperties"></a>

The properties that are applied when Salesforce Pardot is being used as a source\.

## Syntax<a name="aws-properties-appflow-flow-pardotsourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-pardotsourceproperties-syntax.json"></a>

```
{
  "[Object](#cfn-appflow-flow-pardotsourceproperties-object)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-pardotsourceproperties-syntax.yaml"></a>

```
  [Object](#cfn-appflow-flow-pardotsourceproperties-object): String
```

## Properties<a name="aws-properties-appflow-flow-pardotsourceproperties-properties"></a>

`Object` <a name="cfn-appflow-flow-pardotsourceproperties-object"></a>
The object specified in the Salesforce Pardot flow source\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
