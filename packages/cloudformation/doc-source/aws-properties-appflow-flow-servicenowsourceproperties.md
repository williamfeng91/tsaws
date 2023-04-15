# AWS::AppFlow::Flow ServiceNowSourceProperties<a name="aws-properties-appflow-flow-servicenowsourceproperties"></a>

The properties that are applied when ServiceNow is being used as a source\.

## Syntax<a name="aws-properties-appflow-flow-servicenowsourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-servicenowsourceproperties-syntax.json"></a>

```
{
  "[Object](#cfn-appflow-flow-servicenowsourceproperties-object)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-servicenowsourceproperties-syntax.yaml"></a>

```
  [Object](#cfn-appflow-flow-servicenowsourceproperties-object): String
```

## Properties<a name="aws-properties-appflow-flow-servicenowsourceproperties-properties"></a>

`Object` <a name="cfn-appflow-flow-servicenowsourceproperties-object"></a>
The object specified in the ServiceNow flow source\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-servicenowsourceproperties--seealso"></a>

- [ServiceNowSourceProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ServiceNowSourceProperties.html) in the _Amazon AppFlow API Reference_\.