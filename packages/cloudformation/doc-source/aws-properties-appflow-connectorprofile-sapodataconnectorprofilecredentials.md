# AWS::AppFlow::ConnectorProfile SAPODataConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials"></a>

The connector\-specific profile credentials required when using SAPOData\.

## Syntax<a name="aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials-syntax.json"></a>

```
{
  "[BasicAuthCredentials](#cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-basicauthcredentials)" : BasicAuthCredentials,
  "[OAuthCredentials](#cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-oauthcredentials)" : OAuthCredentials
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials-syntax.yaml"></a>

```
  [BasicAuthCredentials](#cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-basicauthcredentials):
    BasicAuthCredentials
  [OAuthCredentials](#cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-oauthcredentials):
    OAuthCredentials
```

## Properties<a name="aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials-properties"></a>

`BasicAuthCredentials` <a name="cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-basicauthcredentials"></a>
The SAPOData basic authentication credentials\.  
_Required_: No  
_Type_: [BasicAuthCredentials](aws-properties-appflow-connectorprofile-basicauthcredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OAuthCredentials` <a name="cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-oauthcredentials"></a>
The SAPOData OAuth type authentication credentials\.  
_Required_: No  
_Type_: [OAuthCredentials](aws-properties-appflow-connectorprofile-oauthcredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
