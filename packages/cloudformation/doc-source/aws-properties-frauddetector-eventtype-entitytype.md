# AWS::FraudDetector::EventType EntityType<a name="aws-properties-frauddetector-eventtype-entitytype"></a>

The entity type details\.

## Syntax<a name="aws-properties-frauddetector-eventtype-entitytype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-frauddetector-eventtype-entitytype-syntax.json"></a>

```
{
  "[Arn](#cfn-frauddetector-eventtype-entitytype-arn)" : String,
  "[CreatedTime](#cfn-frauddetector-eventtype-entitytype-createdtime)" : String,
  "[Description](#cfn-frauddetector-eventtype-entitytype-description)" : String,
  "[Inline](#cfn-frauddetector-eventtype-entitytype-inline)" : Boolean,
  "[LastUpdatedTime](#cfn-frauddetector-eventtype-entitytype-lastupdatedtime)" : String,
  "[Name](#cfn-frauddetector-eventtype-entitytype-name)" : String,
  "[Tags](#cfn-frauddetector-eventtype-entitytype-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
}
```

### YAML<a name="aws-properties-frauddetector-eventtype-entitytype-syntax.yaml"></a>

```
  [Arn](#cfn-frauddetector-eventtype-entitytype-arn): String
  [CreatedTime](#cfn-frauddetector-eventtype-entitytype-createdtime): String
  [Description](#cfn-frauddetector-eventtype-entitytype-description): String
  [Inline](#cfn-frauddetector-eventtype-entitytype-inline): Boolean
  [LastUpdatedTime](#cfn-frauddetector-eventtype-entitytype-lastupdatedtime): String
  [Name](#cfn-frauddetector-eventtype-entitytype-name): String
  [Tags](#cfn-frauddetector-eventtype-entitytype-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-properties-frauddetector-eventtype-entitytype-properties"></a>

`Arn` <a name="cfn-frauddetector-eventtype-entitytype-arn"></a>
The entity type ARN\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CreatedTime` <a name="cfn-frauddetector-eventtype-entitytype-createdtime"></a>
Timestamp of when the entity type was created\.  
_Required_: No  
_Type_: String  
_Minimum_: `11`  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-frauddetector-eventtype-entitytype-description"></a>
The entity type description\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Inline` <a name="cfn-frauddetector-eventtype-entitytype-inline"></a>
Indicates whether the resource is defined within this CloudFormation template and impacts the create, update, and delete behavior of the stack\. If the value is `true`, CloudFormation will create/update/delete the resource when creating/updating/deleting the stack\. If the value is `false`, CloudFormation will validate that the object exists and then use it within the resource without making changes to the object\.  
For example, when creating `AWS::FraudDetector::EventType` you must define at least two variables\. You can set `Inline=true` for these variables and CloudFormation will create/update/delete the variables as part of stack operations\. However, if you set `Inline=false`, CloudFormation will associate the variables to your event type but not execute any changes to the variables\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LastUpdatedTime` <a name="cfn-frauddetector-eventtype-entitytype-lastupdatedtime"></a>
Timestamp of when the entity type was last updated\.  
_Required_: No  
_Type_: String  
_Minimum_: `11`  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-frauddetector-eventtype-entitytype-name"></a>
The entity type name\.  
`^[0-9a-z_-]+$`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-frauddetector-eventtype-entitytype-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
