# AWS::AppStream::Stack<a name="aws-resource-appstream-stack"></a>

The `AWS::AppStream::Stack` resource creates a stack to start streaming applications to Amazon AppStream 2\.0 users\. A stack consists of an associated fleet, user access policies, and storage configurations\.

## Syntax<a name="aws-resource-appstream-stack-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-appstream-stack-syntax.json"></a>

```
{
  "Type" : "AWS::AppStream::Stack",
  "Properties" : {
      "[AccessEndpoints](#cfn-appstream-stack-accessendpoints)" : [ AccessEndpoint, ... ],
      "[ApplicationSettings](#cfn-appstream-stack-applicationsettings)" : ApplicationSettings,
      "[AttributesToDelete](#cfn-appstream-stack-attributestodelete)" : [ String, ... ],
      "[DeleteStorageConnectors](#cfn-appstream-stack-deletestorageconnectors)" : Boolean,
      "[Description](#cfn-appstream-stack-description)" : String,
      "[DisplayName](#cfn-appstream-stack-displayname)" : String,
      "[EmbedHostDomains](#cfn-appstream-stack-embedhostdomains)" : [ String, ... ],
      "[FeedbackURL](#cfn-appstream-stack-feedbackurl)" : String,
      "[Name](#cfn-appstream-stack-name)" : String,
      "[RedirectURL](#cfn-appstream-stack-redirecturl)" : String,
      "[StorageConnectors](#cfn-appstream-stack-storageconnectors)" : [ StorageConnector, ... ],
      "[StreamingExperienceSettings](#cfn-appstream-stack-streamingexperiencesettings)" : StreamingExperienceSettings,
      "[Tags](#cfn-appstream-stack-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[UserSettings](#cfn-appstream-stack-usersettings)" : [ UserSetting, ... ]
    }
}
```

### YAML<a name="aws-resource-appstream-stack-syntax.yaml"></a>

```
Type: AWS::AppStream::Stack
Properties:
  [AccessEndpoints](#cfn-appstream-stack-accessendpoints):
    - AccessEndpoint
  [ApplicationSettings](#cfn-appstream-stack-applicationsettings):
    ApplicationSettings
  [AttributesToDelete](#cfn-appstream-stack-attributestodelete):
    - String
  [DeleteStorageConnectors](#cfn-appstream-stack-deletestorageconnectors): Boolean
  [Description](#cfn-appstream-stack-description): String
  [DisplayName](#cfn-appstream-stack-displayname): String
  [EmbedHostDomains](#cfn-appstream-stack-embedhostdomains):
    - String
  [FeedbackURL](#cfn-appstream-stack-feedbackurl): String
  [Name](#cfn-appstream-stack-name): String
  [RedirectURL](#cfn-appstream-stack-redirecturl): String
  [StorageConnectors](#cfn-appstream-stack-storageconnectors):
    - StorageConnector
  [StreamingExperienceSettings](#cfn-appstream-stack-streamingexperiencesettings):
    StreamingExperienceSettings
  [Tags](#cfn-appstream-stack-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [UserSettings](#cfn-appstream-stack-usersettings):
    - UserSetting
```

## Properties<a name="aws-resource-appstream-stack-properties"></a>

`AccessEndpoints` <a name="cfn-appstream-stack-accessendpoints"></a>
The list of virtual private cloud \(VPC\) interface endpoint objects\. Users of the stack can connect to AppStream 2\.0 only through the specified endpoints\.  
_Required_: No  
_Type_: List of [AccessEndpoint](aws-properties-appstream-stack-accessendpoint.md)  
_Maximum_: `4`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ApplicationSettings` <a name="cfn-appstream-stack-applicationsettings"></a>
The persistent application settings for users of the stack\. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session\.  
_Required_: No  
_Type_: [ApplicationSettings](aws-properties-appstream-stack-applicationsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AttributesToDelete` <a name="cfn-appstream-stack-attributestodelete"></a>
The stack attributes to delete\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeleteStorageConnectors` <a name="cfn-appstream-stack-deletestorageconnectors"></a>
_This parameter has been deprecated\._  
Deletes the storage connectors currently enabled for the stack\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-appstream-stack-description"></a>
The description to display\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayName` <a name="cfn-appstream-stack-displayname"></a>
The stack name to display\.  
_Required_: No  
_Type_: String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EmbedHostDomains` <a name="cfn-appstream-stack-embedhostdomains"></a>
The domains where AppStream 2\.0 streaming sessions can be embedded in an iframe\. You must approve the domains that you want to host embedded AppStream 2\.0 streaming sessions\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FeedbackURL` <a name="cfn-appstream-stack-feedbackurl"></a>
The URL that users are redirected to after they click the Send Feedback link\. If no URL is specified, no Send Feedback link is displayed\.  
_Required_: No  
_Type_: String  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-appstream-stack-name"></a>
The name of the stack\.  
_Required_: No  
_Type_: String  
_Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RedirectURL` <a name="cfn-appstream-stack-redirecturl"></a>
The URL that users are redirected to after their streaming session ends\.  
_Required_: No  
_Type_: String  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StorageConnectors` <a name="cfn-appstream-stack-storageconnectors"></a>
The storage connectors to enable\.  
_Required_: No  
_Type_: List of [StorageConnector](aws-properties-appstream-stack-storageconnector.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StreamingExperienceSettings` <a name="cfn-appstream-stack-streamingexperiencesettings"></a>
The streaming protocol that you want your stack to prefer\. This can be UDP or TCP\. Currently, UDP is only supported in the Windows native client\.  
_Required_: No  
_Type_: [StreamingExperienceSettings](aws-properties-appstream-stack-streamingexperiencesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-appstream-stack-tags"></a>
An array of key\-value pairs\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserSettings` <a name="cfn-appstream-stack-usersettings"></a>
The actions that are enabled or disabled for users during their streaming sessions\. By default, these actions are enabled\.  
_Required_: No  
_Type_: List of [UserSetting](aws-properties-appstream-stack-usersetting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-resource-appstream-stack--seealso"></a>

- [CreateStack](https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStack.html) in the _Amazon AppStream 2\.0 API Reference_
