# AWS::SES::ContactList<a name="aws-resource-ses-contactlist"></a>

A list that contains contacts that have subscribed to a particular topic or topics\.

## Syntax<a name="aws-resource-ses-contactlist-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ses-contactlist-syntax.json"></a>

```
{
  "Type" : "AWS::SES::ContactList",
  "Properties" : {
      "[ContactListName](#cfn-ses-contactlist-contactlistname)" : String,
      "[Description](#cfn-ses-contactlist-description)" : String,
      "[Tags](#cfn-ses-contactlist-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[Topics](#cfn-ses-contactlist-topics)" : [ Topic, ... ]
    }
}
```

### YAML<a name="aws-resource-ses-contactlist-syntax.yaml"></a>

```
Type: AWS::SES::ContactList
Properties:
  [ContactListName](#cfn-ses-contactlist-contactlistname): String
  [Description](#cfn-ses-contactlist-description): String
  [Tags](#cfn-ses-contactlist-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [Topics](#cfn-ses-contactlist-topics):
    - Topic
```

## Properties<a name="aws-resource-ses-contactlist-properties"></a>

`ContactListName` <a name="cfn-ses-contactlist-contactlistname"></a>
The name of the contact list\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Description` <a name="cfn-ses-contactlist-description"></a>
A description of what the contact list is about\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-ses-contactlist-tags"></a>
The tags associated with a contact list\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Topics` <a name="cfn-ses-contactlist-topics"></a>
An interest group, theme, or label within a list\. A contact list can have multiple topics\.  
_Required_: No  
_Type_: List of [Topic](aws-properties-ses-contactlist-topic.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-ses-contactlist-return-values"></a>

### Ref<a name="aws-resource-ses-contactlist-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic Ref function, Ref returns the resource name\. For example:

`{ "Ref" : "ContactListName" }`

For the Amazon SES ContactList, `Ref` returns the name of the contact list\.
