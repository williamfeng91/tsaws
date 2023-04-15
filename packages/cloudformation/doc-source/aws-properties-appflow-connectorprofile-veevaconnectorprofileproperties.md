# AWS::AppFlow::ConnectorProfile VeevaConnectorProfileProperties<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties"></a>

The connector\-specific profile properties required when using Veeva\.

## Syntax<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties-syntax.json"></a>

```
{
  "[InstanceUrl](#cfn-appflow-connectorprofile-veevaconnectorprofileproperties-instanceurl)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties-syntax.yaml"></a>

```
  [InstanceUrl](#cfn-appflow-connectorprofile-veevaconnectorprofileproperties-instanceurl): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties-properties"></a>

`InstanceUrl` <a name="cfn-appflow-connectorprofile-veevaconnectorprofileproperties-instanceurl"></a>
The location of the Veeva resource\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties--seealso"></a>

- [VeevaConnectorProfileProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_VeevaConnectorProfileProperties.html) in the _Amazon AppFlow API Reference_\.
