# AWS::AppFlow::ConnectorProfile CustomAuthCredentials<a name="aws-properties-appflow-connectorprofile-customauthcredentials"></a>

The custom credentials required for custom authentication\.

## Syntax<a name="aws-properties-appflow-connectorprofile-customauthcredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-customauthcredentials-syntax.json"></a>

```
{
  "[CredentialsMap](#cfn-appflow-connectorprofile-customauthcredentials-credentialsmap)" : {Key : Value, ...},
  "[CustomAuthenticationType](#cfn-appflow-connectorprofile-customauthcredentials-customauthenticationtype)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-customauthcredentials-syntax.yaml"></a>

```
  [CredentialsMap](#cfn-appflow-connectorprofile-customauthcredentials-credentialsmap):
    Key : Value
  [CustomAuthenticationType](#cfn-appflow-connectorprofile-customauthcredentials-customauthenticationtype): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-customauthcredentials-properties"></a>

`CredentialsMap` <a name="cfn-appflow-connectorprofile-customauthcredentials-credentialsmap"></a>
A map that holds custom authentication credentials\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomAuthenticationType` <a name="cfn-appflow-connectorprofile-customauthcredentials-customauthenticationtype"></a>
The custom authentication type that the connector uses\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
