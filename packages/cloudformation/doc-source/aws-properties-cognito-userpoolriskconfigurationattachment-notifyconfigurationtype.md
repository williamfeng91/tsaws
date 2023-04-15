# AWS::Cognito::UserPoolRiskConfigurationAttachment NotifyConfigurationType<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype"></a>

The notify configuration type\.

## Syntax<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-syntax.json"></a>

```
{
  "[BlockEmail](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-blockemail)" : NotifyEmailType,
  "[From](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-from)" : String,
  "[MfaEmail](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-mfaemail)" : NotifyEmailType,
  "[NoActionEmail](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-noactionemail)" : NotifyEmailType,
  "[ReplyTo](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-replyto)" : String,
  "[SourceArn](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-sourcearn)" : String
}
```

### YAML<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-syntax.yaml"></a>

```
  [BlockEmail](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-blockemail):
    NotifyEmailType
  [From](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-from): String
  [MfaEmail](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-mfaemail):
    NotifyEmailType
  [NoActionEmail](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-noactionemail):
    NotifyEmailType
  [ReplyTo](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-replyto): String
  [SourceArn](#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-sourcearn): String
```

## Properties<a name="aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-properties"></a>

`BlockEmail` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-blockemail"></a>
Email template used when a detected risk event is blocked\.  
_Required_: No  
_Type_: [NotifyEmailType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`From` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-from"></a>
The email address that is sending the email\. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MfaEmail` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-mfaemail"></a>
The multi\-factor authentication \(MFA\) email template used when MFA is challenged as part of a detected risk\.  
_Required_: No  
_Type_: [NotifyEmailType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NoActionEmail` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-noactionemail"></a>
The email template used when a detected risk event is allowed\.  
_Required_: No  
_Type_: [NotifyEmailType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReplyTo` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-replyto"></a>
The destination to which the receiver of an email should reply to\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceArn` <a name="cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-sourcearn"></a>
The Amazon Resource Name \(ARN\) of the identity that is associated with the sending authorization policy\. This identity permits Amazon Cognito to send for the email address specified in the `From` parameter\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
