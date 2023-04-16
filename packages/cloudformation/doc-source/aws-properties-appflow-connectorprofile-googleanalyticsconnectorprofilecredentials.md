# AWS::AppFlow::ConnectorProfile GoogleAnalyticsConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials"></a>

The connector\-specific profile credentials required by Google Analytics\.

## Syntax<a name="aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-syntax.json"></a>

```
{
  "[AccessToken](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-accesstoken)" : String,
  "[ClientId](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientid)" : String,
  "[ClientSecret](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientsecret)" : String,
  "[ConnectorOAuthRequest](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-connectoroauthrequest)" : ConnectorOAuthRequest,
  "[RefreshToken](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-refreshtoken)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-syntax.yaml"></a>

```
  [AccessToken](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-accesstoken): String
  [ClientId](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientid): String
  [ClientSecret](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientsecret): String
  [ConnectorOAuthRequest](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-connectoroauthrequest):
    ConnectorOAuthRequest
  [RefreshToken](#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-refreshtoken): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-properties"></a>

`AccessToken` <a name="cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-accesstoken"></a>
The credentials used to access protected Google Analytics resources\.  
_Required_: No  
_Type_: String  
_Maximum_: `4096`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientId` <a name="cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientid"></a>
The identifier for the desired client\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientSecret` <a name="cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientsecret"></a>
The client secret used by the OAuth client to authenticate to the authorization server\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorOAuthRequest` <a name="cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-connectoroauthrequest"></a>
Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack\.  
_Required_: No  
_Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RefreshToken` <a name="cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-refreshtoken"></a>
The credentials used to acquire new access tokens\. This is required only for OAuth2 access tokens, and is not required for OAuth1 access tokens\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials--seealso"></a>

- [GoogleAnalyticsConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_GoogleAnalyticsConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.
