# AWS::AppFlow::ConnectorProfile SalesforceConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials"></a>

The connector\-specific profile credentials required when using Salesforce\.

## Syntax<a name="aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials-syntax.json"></a>

```
{
  "[AccessToken](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-accesstoken)" : String,
  "[ClientCredentialsArn](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-clientcredentialsarn)" : String,
  "[ConnectorOAuthRequest](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-connectoroauthrequest)" : ConnectorOAuthRequest,
  "[RefreshToken](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-refreshtoken)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials-syntax.yaml"></a>

```
  [AccessToken](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-accesstoken): String
  [ClientCredentialsArn](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-clientcredentialsarn): String
  [ConnectorOAuthRequest](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-connectoroauthrequest):
    ConnectorOAuthRequest
  [RefreshToken](#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-refreshtoken): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials-properties"></a>

`AccessToken` <a name="cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-accesstoken"></a>
The credentials used to access protected Salesforce resources\.  
_Required_: No  
_Type_: String  
_Maximum_: `4096`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientCredentialsArn` <a name="cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-clientcredentialsarn"></a>
The secret manager ARN, which contains the client ID and client secret of the connected app\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `arn:aws:secretsmanager:.*:[0-9]+:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorOAuthRequest` <a name="cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-connectoroauthrequest"></a>
Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack\.  
_Required_: No  
_Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RefreshToken` <a name="cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-refreshtoken"></a>
The credentials used to acquire new access tokens\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials--seealso"></a>

- [SalesforceConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_SalesforceConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.
