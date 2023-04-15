# AWS::AppFlow::ConnectorProfile MarketoConnectorProfileProperties<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties"></a>

The connector\-specific profile properties required when using Marketo\.

## Syntax<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties-syntax.json"></a>

```
{
  "[InstanceUrl](#cfn-appflow-connectorprofile-marketoconnectorprofileproperties-instanceurl)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties-syntax.yaml"></a>

```
  [InstanceUrl](#cfn-appflow-connectorprofile-marketoconnectorprofileproperties-instanceurl): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties-properties"></a>

`InstanceUrl` <a name="cfn-appflow-connectorprofile-marketoconnectorprofileproperties-instanceurl"></a>
The location of the Marketo resource\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties--seealso"></a>

- [MarketoConnectorProfileProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_MarketoConnectorProfileProperties.html) in the _Amazon AppFlow API Reference_\.
