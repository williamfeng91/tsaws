# AWS::AppFlow::Flow DynatraceSourceProperties<a name="aws-properties-appflow-flow-dynatracesourceproperties"></a>

The properties that are applied when Dynatrace is being used as a source\.

## Syntax<a name="aws-properties-appflow-flow-dynatracesourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-dynatracesourceproperties-syntax.json"></a>

```
{
  "[Object](#cfn-appflow-flow-dynatracesourceproperties-object)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-dynatracesourceproperties-syntax.yaml"></a>

```
  [Object](#cfn-appflow-flow-dynatracesourceproperties-object): String
```

## Properties<a name="aws-properties-appflow-flow-dynatracesourceproperties-properties"></a>

`Object` <a name="cfn-appflow-flow-dynatracesourceproperties-object"></a>
The object specified in the Dynatrace flow source\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-dynatracesourceproperties--seealso"></a>

- [DynatraceSourceProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DynatraceSourceProperties.html) in the _Amazon AppFlow API Reference_\.
