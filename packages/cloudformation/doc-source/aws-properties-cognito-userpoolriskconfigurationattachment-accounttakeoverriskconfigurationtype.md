# AWS::Cognito::UserPoolRiskConfigurationAttachment AccountTakeoverRiskConfigurationType<a name="aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype"></a>

Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover\.

## Syntax<a name="aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-syntax.json"></a>

```
{
  "[Actions](#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-actions)" : AccountTakeoverActionsType,
  "[NotifyConfiguration](#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-notifyconfiguration)" : NotifyConfigurationType
}
```

### YAML<a name="aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-syntax.yaml"></a>

```
  [Actions](#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-actions):
    AccountTakeoverActionsType
  [NotifyConfiguration](#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-notifyconfiguration):
    NotifyConfigurationType
```

## Properties<a name="aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-properties"></a>

`Actions` <a name="cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-actions"></a>
Account takeover risk configuration actions\.  
_Required_: Yes  
_Type_: [AccountTakeoverActionsType](aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NotifyConfiguration` <a name="cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-notifyconfiguration"></a>
The notify configuration used to construct email notifications\.  
_Required_: No  
_Type_: [NotifyConfigurationType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
