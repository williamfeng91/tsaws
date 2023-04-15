# AWS::CodeStarNotifications::NotificationRule Target<a name="aws-properties-codestarnotifications-notificationrule-target"></a>

Information about the AWS Chatbot topics or AWS Chatbot clients associated with a notification rule\.

## Syntax<a name="aws-properties-codestarnotifications-notificationrule-target-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codestarnotifications-notificationrule-target-syntax.json"></a>

```
{
  "[TargetAddress](#cfn-codestarnotifications-notificationrule-target-targetaddress)" : String,
  "[TargetType](#cfn-codestarnotifications-notificationrule-target-targettype)" : String
}
```

### YAML<a name="aws-properties-codestarnotifications-notificationrule-target-syntax.yaml"></a>

```
  [TargetAddress](#cfn-codestarnotifications-notificationrule-target-targetaddress): String
  [TargetType](#cfn-codestarnotifications-notificationrule-target-targettype): String
```

## Properties<a name="aws-properties-codestarnotifications-notificationrule-target-properties"></a>

`TargetAddress` <a name="cfn-codestarnotifications-notificationrule-target-targetaddress"></a>
The Amazon Resource Name \(ARN\) of the AWS Chatbot topic or AWS Chatbot client\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `320`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetType` <a name="cfn-codestarnotifications-notificationrule-target-targettype"></a>
The target type\. Can be an Amazon Simple Notification Service topic or AWS Chatbot client\.

- Amazon Simple Notification Service topics are specified as `SNS`\.
- AWS Chatbot clients are specified as `AWSChatbotSlack`\.
  _Required_: Yes  
  _Type_: String  
  _Pattern_: `^[A-Za-z]+$`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
