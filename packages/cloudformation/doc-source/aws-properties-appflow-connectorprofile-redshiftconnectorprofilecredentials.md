# AWS::AppFlow::ConnectorProfile RedshiftConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials"></a>

The connector\-specific profile credentials required when using Amazon Redshift\.

## Syntax<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials-syntax.json"></a>

```
{
  "[Password](#cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-password)" : String,
  "[Username](#cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-username)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials-syntax.yaml"></a>

```
  [Password](#cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-password): String
  [Username](#cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-username): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials-properties"></a>

`Password` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-password"></a>
The password that corresponds to the user name\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Username` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-username"></a>
The name of the user\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials--seealso"></a>

- [RedshiftConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_RedshiftConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.
