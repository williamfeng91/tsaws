# AWS::AppFlow::ConnectorProfile VeevaConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials"></a>

The connector\-specific profile credentials required when using Veeva\.

## Syntax<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials-syntax.json"></a>

```
{
  "[Password](#cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-password)" : String,
  "[Username](#cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-username)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials-syntax.yaml"></a>

```
  [Password](#cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-password): String
  [Username](#cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-username): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials-properties"></a>

`Password` <a name="cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-password"></a>
The password that corresponds to the user name\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Username` <a name="cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-username"></a>
The name of the user\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials--seealso"></a>

- [VeevaConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_VeevaConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.
