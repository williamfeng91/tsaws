# AWS::Events::Connection ApiKeyAuthParameters<a name="aws-properties-events-connection-apikeyauthparameters"></a>

Contains the API key authorization parameters for the connection\.

## Syntax<a name="aws-properties-events-connection-apikeyauthparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-connection-apikeyauthparameters-syntax.json"></a>

```
{
  "[ApiKeyName](#cfn-events-connection-apikeyauthparameters-apikeyname)" : String,
  "[ApiKeyValue](#cfn-events-connection-apikeyauthparameters-apikeyvalue)" : String
}
```

### YAML<a name="aws-properties-events-connection-apikeyauthparameters-syntax.yaml"></a>

```
  [ApiKeyName](#cfn-events-connection-apikeyauthparameters-apikeyname): String
  [ApiKeyValue](#cfn-events-connection-apikeyauthparameters-apikeyvalue): String
```

## Properties<a name="aws-properties-events-connection-apikeyauthparameters-properties"></a>

`ApiKeyName` <a name="cfn-events-connection-apikeyauthparameters-apikeyname"></a>
The name of the API key to use for authorization\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ApiKeyValue` <a name="cfn-events-connection-apikeyauthparameters-apikeyvalue"></a>
The value for the API key to use for authorization\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
