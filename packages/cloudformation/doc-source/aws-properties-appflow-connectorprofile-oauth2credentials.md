# AWS::AppFlow::ConnectorProfile OAuth2Credentials<a name="aws-properties-appflow-connectorprofile-oauth2credentials"></a>

The OAuth 2\.0 credentials required for OAuth 2\.0 authentication\.

## Syntax<a name="aws-properties-appflow-connectorprofile-oauth2credentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-oauth2credentials-syntax.json"></a>

```
{
  "[AccessToken](#cfn-appflow-connectorprofile-oauth2credentials-accesstoken)" : String,
  "[ClientId](#cfn-appflow-connectorprofile-oauth2credentials-clientid)" : String,
  "[ClientSecret](#cfn-appflow-connectorprofile-oauth2credentials-clientsecret)" : String,
  "[OAuthRequest](#cfn-appflow-connectorprofile-oauth2credentials-oauthrequest)" : ConnectorOAuthRequest,
  "[RefreshToken](#cfn-appflow-connectorprofile-oauth2credentials-refreshtoken)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-oauth2credentials-syntax.yaml"></a>

```
  [AccessToken](#cfn-appflow-connectorprofile-oauth2credentials-accesstoken): String
  [ClientId](#cfn-appflow-connectorprofile-oauth2credentials-clientid): String
  [ClientSecret](#cfn-appflow-connectorprofile-oauth2credentials-clientsecret): String
  [OAuthRequest](#cfn-appflow-connectorprofile-oauth2credentials-oauthrequest):
    ConnectorOAuthRequest
  [RefreshToken](#cfn-appflow-connectorprofile-oauth2credentials-refreshtoken): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-oauth2credentials-properties"></a>

`AccessToken` <a name="cfn-appflow-connectorprofile-oauth2credentials-accesstoken"></a>
The access token used to access the connector on your behalf\.  
_Required_: No  
_Type_: String  
_Maximum_: `4096`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientId` <a name="cfn-appflow-connectorprofile-oauth2credentials-clientid"></a>
The identifier for the desired client\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientSecret` <a name="cfn-appflow-connectorprofile-oauth2credentials-clientsecret"></a>
The client secret used by the OAuth client to authenticate to the authorization server\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OAuthRequest` <a name="cfn-appflow-connectorprofile-oauth2credentials-oauthrequest"></a>
Property description not available\.  
_Required_: No  
_Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RefreshToken` <a name="cfn-appflow-connectorprofile-oauth2credentials-refreshtoken"></a>
The refresh token used to refresh an expired access token\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
