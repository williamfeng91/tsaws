# AWS::Events::Connection AuthParameters<a name="aws-properties-events-connection-authparameters"></a>

Contains the authorization parameters to use for the connection\.

## Syntax<a name="aws-properties-events-connection-authparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-connection-authparameters-syntax.json"></a>

```
{
  "[ApiKeyAuthParameters](#cfn-events-connection-authparameters-apikeyauthparameters)" : ApiKeyAuthParameters,
  "[BasicAuthParameters](#cfn-events-connection-authparameters-basicauthparameters)" : BasicAuthParameters,
  "[InvocationHttpParameters](#cfn-events-connection-authparameters-invocationhttpparameters)" : ConnectionHttpParameters,
  "[OAuthParameters](#cfn-events-connection-authparameters-oauthparameters)" : OAuthParameters
}
```

### YAML<a name="aws-properties-events-connection-authparameters-syntax.yaml"></a>

```
  [ApiKeyAuthParameters](#cfn-events-connection-authparameters-apikeyauthparameters):
    ApiKeyAuthParameters
  [BasicAuthParameters](#cfn-events-connection-authparameters-basicauthparameters):
    BasicAuthParameters
  [InvocationHttpParameters](#cfn-events-connection-authparameters-invocationhttpparameters):
    ConnectionHttpParameters
  [OAuthParameters](#cfn-events-connection-authparameters-oauthparameters):
    OAuthParameters
```

## Properties<a name="aws-properties-events-connection-authparameters-properties"></a>

`ApiKeyAuthParameters` <a name="cfn-events-connection-authparameters-apikeyauthparameters"></a>
The API Key parameters to use for authorization\.  
_Required_: No  
_Type_: [ApiKeyAuthParameters](aws-properties-events-connection-apikeyauthparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BasicAuthParameters` <a name="cfn-events-connection-authparameters-basicauthparameters"></a>
The authorization parameters for Basic authorization\.  
_Required_: No  
_Type_: [BasicAuthParameters](aws-properties-events-connection-basicauthparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InvocationHttpParameters` <a name="cfn-events-connection-authparameters-invocationhttpparameters"></a>
Additional parameters for the connection that are passed through with every invocation to the HTTP endpoint\.  
_Required_: No  
_Type_: [ConnectionHttpParameters](aws-properties-events-connection-connectionhttpparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OAuthParameters` <a name="cfn-events-connection-authparameters-oauthparameters"></a>
The OAuth parameters to use for authorization\.  
_Required_: No  
_Type_: [OAuthParameters](aws-properties-events-connection-oauthparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
