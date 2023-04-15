# AWS::CodeStarNotifications::NotificationRule<a name="aws-resource-codestarnotifications-notificationrule"></a>

Creates a notification rule for a resource\. The rule specifies the events you want notifications about and the targets \(such as AWS Chatbot topics or AWS Chatbot clients configured for Slack\) where you want to receive them\.

## Syntax<a name="aws-resource-codestarnotifications-notificationrule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-codestarnotifications-notificationrule-syntax.json"></a>

```
{
  "Type" : "AWS::CodeStarNotifications::NotificationRule",
  "Properties" : {
      "[CreatedBy](#cfn-codestarnotifications-notificationrule-createdby)" : String,
      "[DetailType](#cfn-codestarnotifications-notificationrule-detailtype)" : String,
      "[EventTypeId](#cfn-codestarnotifications-notificationrule-eventtypeid)" : String,
      "[EventTypeIds](#cfn-codestarnotifications-notificationrule-eventtypeids)" : [ String, ... ],
      "[Name](#cfn-codestarnotifications-notificationrule-name)" : String,
      "[Resource](#cfn-codestarnotifications-notificationrule-resource)" : String,
      "[Status](#cfn-codestarnotifications-notificationrule-status)" : String,
      "[Tags](#cfn-codestarnotifications-notificationrule-tags)" : {Key : Value, ...},
      "[TargetAddress](#cfn-codestarnotifications-notificationrule-targetaddress)" : String,
      "[Targets](#cfn-codestarnotifications-notificationrule-targets)" : [ Target, ... ]
    }
}
```

### YAML<a name="aws-resource-codestarnotifications-notificationrule-syntax.yaml"></a>

```
Type: AWS::CodeStarNotifications::NotificationRule
Properties:
  [CreatedBy](#cfn-codestarnotifications-notificationrule-createdby): String
  [DetailType](#cfn-codestarnotifications-notificationrule-detailtype): String
  [EventTypeId](#cfn-codestarnotifications-notificationrule-eventtypeid): String
  [EventTypeIds](#cfn-codestarnotifications-notificationrule-eventtypeids):
    - String
  [Name](#cfn-codestarnotifications-notificationrule-name): String
  [Resource](#cfn-codestarnotifications-notificationrule-resource): String
  [Status](#cfn-codestarnotifications-notificationrule-status): String
  [Tags](#cfn-codestarnotifications-notificationrule-tags):
    Key : Value
  [TargetAddress](#cfn-codestarnotifications-notificationrule-targetaddress): String
  [Targets](#cfn-codestarnotifications-notificationrule-targets):
    - Target
```

## Properties<a name="aws-resource-codestarnotifications-notificationrule-properties"></a>

`CreatedBy` <a name="cfn-codestarnotifications-notificationrule-createdby"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DetailType` <a name="cfn-codestarnotifications-notificationrule-detailtype"></a>
The level of detail to include in the notifications for this resource\. `BASIC` will include only the contents of the event as it would appear in Amazon CloudWatch\. `FULL` will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `BASIC | FULL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EventTypeId` <a name="cfn-codestarnotifications-notificationrule-eventtypeid"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EventTypeIds` <a name="cfn-codestarnotifications-notificationrule-eventtypeids"></a>
A list of event types associated with this notification rule\. For a complete list of event types and IDs, see [Notification concepts](https://docs.aws.amazon.com/dtconsole/latest/userguide/concepts.html#concepts-api) in the _Developer Tools Console User Guide_\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-codestarnotifications-notificationrule-name"></a>
The name for the notification rule\. Notification rule names must be unique in your AWS account\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Pattern_: `[A-Za-z0-9\-_ ]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Resource` <a name="cfn-codestarnotifications-notificationrule-resource"></a>
The Amazon Resource Name \(ARN\) of the resource to associate with the notification rule\. Supported resources include pipelines in AWS CodePipeline, repositories in AWS CodeCommit, and build projects in AWS CodeBuild\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `^arn:aws[^:\s]*:[^:\s]*:[^:\s]*:[0-9]{12}:[^\s]+$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Status` <a name="cfn-codestarnotifications-notificationrule-status"></a>
The status of the notification rule\. The default value is `ENABLED`\. If the status is set to `DISABLED`, notifications aren't sent for the notification rule\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DISABLED | ENABLED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-codestarnotifications-notificationrule-tags"></a>
A list of tags to apply to this notification rule\. Key names cannot start with "`aws`"\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetAddress` <a name="cfn-codestarnotifications-notificationrule-targetaddress"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Targets` <a name="cfn-codestarnotifications-notificationrule-targets"></a>
A list of Amazon Resource Names \(ARNs\) of Amazon Simple Notification Service topics and AWS Chatbot clients to associate with the notification rule\.  
_Required_: Yes  
_Type_: List of [Target](aws-properties-codestarnotifications-notificationrule-target.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-codestarnotifications-notificationrule-return-values"></a>

### Ref<a name="aws-resource-codestarnotifications-notificationrule-return-values-ref"></a>

When the logical ID of this resource is provided to the Ref intrinsic function, `Ref` returns the notification rule ARN\.

### Fn::GetAtt<a name="aws-resource-codestarnotifications-notificationrule-return-values-fn--getatt"></a>

#### <a name="aws-resource-codestarnotifications-notificationrule-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
Property description not available\.

## Examples<a name="aws-resource-codestarnotifications-notificationrule--examples"></a>

### Example<a name="aws-resource-codestarnotifications-notificationrule--examples--Example"></a>

The following example creates a notification rule with a name of My Notification Rule for Comments on Commits\. The notification rule is tagged with a key\-value pair indicating what team owns the rule\.

#### JSON<a name="aws-resource-codestarnotifications-notificationrule--examples--Example--json"></a>

```
{
    "Type": "AWS::CodeStarNotifications::NotificationRule",
    "Properties": {
        "Name": "My Notification Rule for Comments on Commits",
        "DetailType": "FULL",
        "Resource": "arn:aws:codecommit:us-east-2:123456789012:MyDemoRepo",
        "EventTypeIds": [
            "codecommit-repository-comments-on-commits"
        ],
        "Targets": [
            {
                "TargetType": "SNS",
                "TargetAddress": "arn:aws:sns:us-east-2:123456789012:MyNotificationTopic"
            }
        ],
        "Tags": {
            "Team": "Saanvi"
         }
     }
}
```

#### YAML<a name="aws-resource-codestarnotifications-notificationrule--examples--Example--yaml"></a>

```
Type: 'AWS::CodeStarNotifications::NotificationRule'
Properties:
        Name: 'My Notification Rule for Comments on Commits'
        DetailType: FULL
        Resource: 'arn:aws:codecommit:us-east-2:123456789012:MyDemoRepo'
        EventTypeIds:
            - codecommit-repository-comments-on-commits
        Targets:
            - TargetType: SNS
              TargetAddress: 'arn:aws:sns:us-east-2:123456789012:MyNotificationTopic'
        Tags:
             Team: Saanvi
```
