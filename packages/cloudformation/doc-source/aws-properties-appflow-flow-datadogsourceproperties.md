# AWS::AppFlow::Flow DatadogSourceProperties<a name="aws-properties-appflow-flow-datadogsourceproperties"></a>

The properties that are applied when Datadog is being used as a source\.

## Syntax<a name="aws-properties-appflow-flow-datadogsourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-datadogsourceproperties-syntax.json"></a>

```
{
  "[Object](#cfn-appflow-flow-datadogsourceproperties-object)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-datadogsourceproperties-syntax.yaml"></a>

```
  [Object](#cfn-appflow-flow-datadogsourceproperties-object): String
```

## Properties<a name="aws-properties-appflow-flow-datadogsourceproperties-properties"></a>

`Object` <a name="cfn-appflow-flow-datadogsourceproperties-object"></a>
The object specified in the Datadog flow source\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-datadogsourceproperties--seealso"></a>

- [DatadogSourceProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DatadogSourceProperties.html) in the _Amazon AppFlow API Reference_\.
