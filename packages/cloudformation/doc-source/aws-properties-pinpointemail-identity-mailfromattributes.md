# AWS::PinpointEmail::Identity MailFromAttributes<a name="aws-properties-pinpointemail-identity-mailfromattributes"></a>

A list of attributes that are associated with a MAIL FROM domain\.

## Syntax<a name="aws-properties-pinpointemail-identity-mailfromattributes-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pinpointemail-identity-mailfromattributes-syntax.json"></a>

```
{
  "[BehaviorOnMxFailure](#cfn-pinpointemail-identity-mailfromattributes-behavioronmxfailure)" : String,
  "[MailFromDomain](#cfn-pinpointemail-identity-mailfromattributes-mailfromdomain)" : String
}
```

### YAML<a name="aws-properties-pinpointemail-identity-mailfromattributes-syntax.yaml"></a>

```
  [BehaviorOnMxFailure](#cfn-pinpointemail-identity-mailfromattributes-behavioronmxfailure): String
  [MailFromDomain](#cfn-pinpointemail-identity-mailfromattributes-mailfromdomain): String
```

## Properties<a name="aws-properties-pinpointemail-identity-mailfromattributes-properties"></a>

`BehaviorOnMxFailure` <a name="cfn-pinpointemail-identity-mailfromattributes-behavioronmxfailure"></a>
The action that Amazon Pinpoint to takes if it can't read the required MX record for a custom MAIL FROM domain\. When you set this value to `UseDefaultValue`, Amazon Pinpoint uses _amazonses\.com_ as the MAIL FROM domain\. When you set this value to `RejectMessage`, Amazon Pinpoint returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email\.  
These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending`, `Failed`, and `TemporaryFailure` states\.  
_Required_: No  
_Type_: String  
_Allowed values_: `REJECT_MESSAGE | USE_DEFAULT_VALUE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MailFromDomain` <a name="cfn-pinpointemail-identity-mailfromattributes-mailfromdomain"></a>
The name of a domain that an email identity uses as a custom MAIL FROM domain\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
