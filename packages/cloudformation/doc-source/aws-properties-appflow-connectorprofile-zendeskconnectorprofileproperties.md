# AWS::AppFlow::ConnectorProfile ZendeskConnectorProfileProperties<a name="aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties"></a>

The connector\-specific profile properties required when using Zendesk\.

## Syntax<a name="aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties-syntax.json"></a>

```
{
  "[InstanceUrl](#cfn-appflow-connectorprofile-zendeskconnectorprofileproperties-instanceurl)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties-syntax.yaml"></a>

```
  [InstanceUrl](#cfn-appflow-connectorprofile-zendeskconnectorprofileproperties-instanceurl): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties-properties"></a>

`InstanceUrl` <a name="cfn-appflow-connectorprofile-zendeskconnectorprofileproperties-instanceurl"></a>
The location of the Zendesk resource\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties--seealso"></a>

- [ZendeskConnectorProfileProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ZendeskConnectorProfileProperties.html) in the _Amazon AppFlow API Reference_\.
