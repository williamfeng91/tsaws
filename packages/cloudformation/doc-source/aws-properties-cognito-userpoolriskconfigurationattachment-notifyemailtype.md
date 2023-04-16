# AWS::Cognito::UserPoolRiskConfigurationAttachment NotifyEmailType<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype"></a>

The notify email type\.

## Syntax<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype-syntax.json"></a>

```
{
  "[HtmlBody](#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-htmlbody)" : String,
  "[Subject](#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-subject)" : String,
  "[TextBody](#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-textbody)" : String
}
```

### YAML<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype-syntax.yaml"></a>

```
  [HtmlBody](#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-htmlbody): String
  [Subject](#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-subject): String
  [TextBody](#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-textbody): String
```

## Properties<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype-properties"></a>

`HtmlBody` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-htmlbody"></a>
The email HTML body\.  
_Required_: No  
_Type_: String  
_Minimum_: `6`  
_Maximum_: `20000`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subject` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-subject"></a>
The email subject\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `140`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextBody` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-textbody"></a>
The email text body\.  
_Required_: No  
_Type_: String  
_Minimum_: `6`  
_Maximum_: `20000`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
