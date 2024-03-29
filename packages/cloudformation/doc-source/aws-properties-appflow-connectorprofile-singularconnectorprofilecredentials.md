# AWS::AppFlow::ConnectorProfile SingularConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials"></a>

The connector\-specific profile credentials required when using Singular\.

## Syntax<a name="aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials-syntax.json"></a>

```
{
  "[ApiKey](#cfn-appflow-connectorprofile-singularconnectorprofilecredentials-apikey)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials-syntax.yaml"></a>

```
  [ApiKey](#cfn-appflow-connectorprofile-singularconnectorprofilecredentials-apikey): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials-properties"></a>

`ApiKey` <a name="cfn-appflow-connectorprofile-singularconnectorprofilecredentials-apikey"></a>
A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials--seealso"></a>

- [SingularConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_SingularConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.
