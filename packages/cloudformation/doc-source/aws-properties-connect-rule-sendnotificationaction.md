# AWS::Connect::Rule SendNotificationAction<a name="aws-properties-connect-rule-sendnotificationaction"></a>

Information about the send notification action\.

## Syntax<a name="aws-properties-connect-rule-sendnotificationaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connect-rule-sendnotificationaction-syntax.json"></a>

```
{
  "[Content](#cfn-connect-rule-sendnotificationaction-content)" : String,
  "[ContentType](#cfn-connect-rule-sendnotificationaction-contenttype)" : String,
  "[DeliveryMethod](#cfn-connect-rule-sendnotificationaction-deliverymethod)" : String,
  "[Recipient](#cfn-connect-rule-sendnotificationaction-recipient)" : NotificationRecipientType,
  "[Subject](#cfn-connect-rule-sendnotificationaction-subject)" : String
}
```

### YAML<a name="aws-properties-connect-rule-sendnotificationaction-syntax.yaml"></a>

```
  [Content](#cfn-connect-rule-sendnotificationaction-content): String
  [ContentType](#cfn-connect-rule-sendnotificationaction-contenttype): String
  [DeliveryMethod](#cfn-connect-rule-sendnotificationaction-deliverymethod): String
  [Recipient](#cfn-connect-rule-sendnotificationaction-recipient):
    NotificationRecipientType
  [Subject](#cfn-connect-rule-sendnotificationaction-subject): String
```

## Properties<a name="aws-properties-connect-rule-sendnotificationaction-properties"></a>

`Content` <a name="cfn-connect-rule-sendnotificationaction-content"></a>
Notification content\. Supports variable injection\. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContentType` <a name="cfn-connect-rule-sendnotificationaction-contenttype"></a>
Content type format\.  
_Allowed value_: `PLAIN_TEXT`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeliveryMethod` <a name="cfn-connect-rule-sendnotificationaction-deliverymethod"></a>
Notification delivery method\.  
_Allowed value_: `EMAIL`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Recipient` <a name="cfn-connect-rule-sendnotificationaction-recipient"></a>
Notification recipient\.  
_Required_: Yes  
_Type_: [NotificationRecipientType](aws-properties-connect-rule-notificationrecipienttype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subject` <a name="cfn-connect-rule-sendnotificationaction-subject"></a>
The subject of the email if the delivery method is `EMAIL`\. Supports variable injection\. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
