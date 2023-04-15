# AWS::AppFlow::ConnectorProfile SnowflakeConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials"></a>

The connector\-specific profile credentials required when using Snowflake\.

## Syntax<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials-syntax.json"></a>

```
{
  "[Password](#cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-password)" : String,
  "[Username](#cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-username)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials-syntax.yaml"></a>

```
  [Password](#cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-password): String
  [Username](#cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-username): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials-properties"></a>

`Password` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-password"></a>
The password that corresponds to the user name\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Username` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-username"></a>
The name of the user\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials--seealso"></a>

- [SnowflakeConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_SnowflakeConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.