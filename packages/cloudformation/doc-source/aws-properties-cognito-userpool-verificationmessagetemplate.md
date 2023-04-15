# AWS::Cognito::UserPool VerificationMessageTemplate<a name="aws-properties-cognito-userpool-verificationmessagetemplate"></a>

The template for verification messages\.

## Syntax<a name="aws-properties-cognito-userpool-verificationmessagetemplate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpool-verificationmessagetemplate-syntax.json"></a>

```
{
  "[DefaultEmailOption](#cfn-cognito-userpool-verificationmessagetemplate-defaultemailoption)" : String,
  "[EmailMessage](#cfn-cognito-userpool-verificationmessagetemplate-emailmessage)" : String,
  "[EmailMessageByLink](#cfn-cognito-userpool-verificationmessagetemplate-emailmessagebylink)" : String,
  "[EmailSubject](#cfn-cognito-userpool-verificationmessagetemplate-emailsubject)" : String,
  "[EmailSubjectByLink](#cfn-cognito-userpool-verificationmessagetemplate-emailsubjectbylink)" : String,
  "[SmsMessage](#cfn-cognito-userpool-verificationmessagetemplate-smsmessage)" : String
}
```

### YAML<a name="aws-properties-cognito-userpool-verificationmessagetemplate-syntax.yaml"></a>

```
  [DefaultEmailOption](#cfn-cognito-userpool-verificationmessagetemplate-defaultemailoption): String
  [EmailMessage](#cfn-cognito-userpool-verificationmessagetemplate-emailmessage): String
  [EmailMessageByLink](#cfn-cognito-userpool-verificationmessagetemplate-emailmessagebylink): String
  [EmailSubject](#cfn-cognito-userpool-verificationmessagetemplate-emailsubject): String
  [EmailSubjectByLink](#cfn-cognito-userpool-verificationmessagetemplate-emailsubjectbylink): String
  [SmsMessage](#cfn-cognito-userpool-verificationmessagetemplate-smsmessage): String
```

## Properties<a name="aws-properties-cognito-userpool-verificationmessagetemplate-properties"></a>

`DefaultEmailOption` <a name="cfn-cognito-userpool-verificationmessagetemplate-defaultemailoption"></a>
The default email option\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CONFIRM_WITH_CODE | CONFIRM_WITH_LINK`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmailMessage` <a name="cfn-cognito-userpool-verificationmessagetemplate-emailmessage"></a>
The template for email messages that Amazon Cognito sends to your users\. You can set an `EmailMessage` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`\. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `6`  
_Maximum_: `20000`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{####\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmailMessageByLink` <a name="cfn-cognito-userpool-verificationmessagetemplate-emailmessagebylink"></a>
The email message template for sending a confirmation link to the user\. You can set an `EmailMessageByLink` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`\. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `6`  
_Maximum_: `20000`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*\{##[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*##\}[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmailSubject` <a name="cfn-cognito-userpool-verificationmessagetemplate-emailsubject"></a>
The subject line for the email message template\. You can set an `EmailSubject` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`\. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `140`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmailSubjectByLink` <a name="cfn-cognito-userpool-verificationmessagetemplate-emailsubjectbylink"></a>
The subject line for the email message template for sending a confirmation link to the user\. You can set an `EmailSubjectByLink` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`\. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `140`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmsMessage` <a name="cfn-cognito-userpool-verificationmessagetemplate-smsmessage"></a>
The template for SMS messages that Amazon Cognito sends to your users\.  
_Required_: No  
_Type_: String  
_Minimum_: `6`  
_Maximum_: `140`  
_Pattern_: `.*\{####\}.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
