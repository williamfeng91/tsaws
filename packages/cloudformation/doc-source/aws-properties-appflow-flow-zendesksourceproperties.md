# AWS::AppFlow::Flow ZendeskSourceProperties<a name="aws-properties-appflow-flow-zendesksourceproperties"></a>

The properties that are applied when using Zendesk as a flow source\.

## Syntax<a name="aws-properties-appflow-flow-zendesksourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-zendesksourceproperties-syntax.json"></a>

```
{
  "[Object](#cfn-appflow-flow-zendesksourceproperties-object)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-zendesksourceproperties-syntax.yaml"></a>

```
  [Object](#cfn-appflow-flow-zendesksourceproperties-object): String
```

## Properties<a name="aws-properties-appflow-flow-zendesksourceproperties-properties"></a>

`Object` <a name="cfn-appflow-flow-zendesksourceproperties-object"></a>
The object specified in the Zendesk flow source\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-zendesksourceproperties--seealso"></a>

- [ZendeskSourceProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ZendeskSourceProperties.html) in the _Amazon AppFlow API Reference_\.
