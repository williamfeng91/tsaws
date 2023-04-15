# AWS::AppFlow::ConnectorProfile MarketoConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials"></a>

The connector\-specific profile credentials required by Marketo\.

## Syntax<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials-syntax.json"></a>

```
{
  "[AccessToken](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-accesstoken)" : String,
  "[ClientId](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientid)" : String,
  "[ClientSecret](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientsecret)" : String,
  "[ConnectorOAuthRequest](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-connectoroauthrequest)" : ConnectorOAuthRequest
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials-syntax.yaml"></a>

```
  [AccessToken](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-accesstoken): String
  [ClientId](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientid): String
  [ClientSecret](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientsecret): String
  [ConnectorOAuthRequest](#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-connectoroauthrequest):
    ConnectorOAuthRequest
```

## Properties<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials-properties"></a>

`AccessToken` <a name="cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-accesstoken"></a>
The credentials used to access protected Marketo resources\.  
_Required_: No  
_Type_: String  
_Maximum_: `4096`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientId` <a name="cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientid"></a>
The identifier for the desired client\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientSecret` <a name="cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientsecret"></a>
The client secret used by the OAuth client to authenticate to the authorization server\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorOAuthRequest` <a name="cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-connectoroauthrequest"></a>
Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack\.  
_Required_: No  
_Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials--seealso"></a>

- [MarketoConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_MarketoConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.
