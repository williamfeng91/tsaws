# AWS::AppFlow::Flow InforNexusSourceProperties<a name="aws-properties-appflow-flow-infornexussourceproperties"></a>

The properties that are applied when Infor Nexus is being used as a source\.

## Syntax<a name="aws-properties-appflow-flow-infornexussourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-infornexussourceproperties-syntax.json"></a>

```
{
  "[Object](#cfn-appflow-flow-infornexussourceproperties-object)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-infornexussourceproperties-syntax.yaml"></a>

```
  [Object](#cfn-appflow-flow-infornexussourceproperties-object): String
```

## Properties<a name="aws-properties-appflow-flow-infornexussourceproperties-properties"></a>

`Object` <a name="cfn-appflow-flow-infornexussourceproperties-object"></a>
The object specified in the Infor Nexus flow source\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-infornexussourceproperties--seealso"></a>

- [InforNexusSourceProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_InforNexusSourceProperties.html) in the _Amazon AppFlow API Reference_\.
