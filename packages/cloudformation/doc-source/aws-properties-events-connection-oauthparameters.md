# AWS::Events::Connection OAuthParameters<a name="aws-properties-events-connection-oauthparameters"></a>

Contains the OAuth authorization parameters to use for the connection\.

## Syntax<a name="aws-properties-events-connection-oauthparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-connection-oauthparameters-syntax.json"></a>

```
{
  "[AuthorizationEndpoint](#cfn-events-connection-oauthparameters-authorizationendpoint)" : String,
  "[ClientParameters](#cfn-events-connection-oauthparameters-clientparameters)" : ClientParameters,
  "[HttpMethod](#cfn-events-connection-oauthparameters-httpmethod)" : String,
  "[OAuthHttpParameters](#cfn-events-connection-oauthparameters-oauthhttpparameters)" : ConnectionHttpParameters
}
```

### YAML<a name="aws-properties-events-connection-oauthparameters-syntax.yaml"></a>

```
  [AuthorizationEndpoint](#cfn-events-connection-oauthparameters-authorizationendpoint): String
  [ClientParameters](#cfn-events-connection-oauthparameters-clientparameters):
    ClientParameters
  [HttpMethod](#cfn-events-connection-oauthparameters-httpmethod): String
  [OAuthHttpParameters](#cfn-events-connection-oauthparameters-oauthhttpparameters):
    ConnectionHttpParameters
```

## Properties<a name="aws-properties-events-connection-oauthparameters-properties"></a>

`AuthorizationEndpoint` <a name="cfn-events-connection-oauthparameters-authorizationendpoint"></a>
The URL to the authorization endpoint when OAuth is specified as the authorization type\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^((%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@\x26=+$,A-Za-z0-9])+)([).!';/?:,])?$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientParameters` <a name="cfn-events-connection-oauthparameters-clientparameters"></a>
A `CreateConnectionOAuthClientRequestParameters` object that contains the client parameters for OAuth authorization\.  
_Required_: Yes  
_Type_: [ClientParameters](aws-properties-events-connection-clientparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HttpMethod` <a name="cfn-events-connection-oauthparameters-httpmethod"></a>
The method to use for the authorization request\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `GET | POST | PUT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OAuthHttpParameters` <a name="cfn-events-connection-oauthparameters-oauthhttpparameters"></a>
A `ConnectionHttpParameters` object that contains details about the additional parameters to use for the connection\.  
_Required_: No  
_Type_: [ConnectionHttpParameters](aws-properties-events-connection-connectionhttpparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
