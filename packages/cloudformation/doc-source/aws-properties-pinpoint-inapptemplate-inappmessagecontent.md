# AWS::Pinpoint::InAppTemplate InAppMessageContent<a name="aws-properties-pinpoint-inapptemplate-inappmessagecontent"></a>

Specifies the configuration of an in\-app message, including its header, body, buttons, colors, and images\.

## Syntax<a name="aws-properties-pinpoint-inapptemplate-inappmessagecontent-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pinpoint-inapptemplate-inappmessagecontent-syntax.json"></a>

```
{
  "[BackgroundColor](#cfn-pinpoint-inapptemplate-inappmessagecontent-backgroundcolor)" : String,
  "[BodyConfig](#cfn-pinpoint-inapptemplate-inappmessagecontent-bodyconfig)" : BodyConfig,
  "[HeaderConfig](#cfn-pinpoint-inapptemplate-inappmessagecontent-headerconfig)" : HeaderConfig,
  "[ImageUrl](#cfn-pinpoint-inapptemplate-inappmessagecontent-imageurl)" : String,
  "[PrimaryBtn](#cfn-pinpoint-inapptemplate-inappmessagecontent-primarybtn)" : ButtonConfig,
  "[SecondaryBtn](#cfn-pinpoint-inapptemplate-inappmessagecontent-secondarybtn)" : ButtonConfig
}
```

### YAML<a name="aws-properties-pinpoint-inapptemplate-inappmessagecontent-syntax.yaml"></a>

```
  [BackgroundColor](#cfn-pinpoint-inapptemplate-inappmessagecontent-backgroundcolor): String
  [BodyConfig](#cfn-pinpoint-inapptemplate-inappmessagecontent-bodyconfig):
    BodyConfig
  [HeaderConfig](#cfn-pinpoint-inapptemplate-inappmessagecontent-headerconfig):
    HeaderConfig
  [ImageUrl](#cfn-pinpoint-inapptemplate-inappmessagecontent-imageurl): String
  [PrimaryBtn](#cfn-pinpoint-inapptemplate-inappmessagecontent-primarybtn):
    ButtonConfig
  [SecondaryBtn](#cfn-pinpoint-inapptemplate-inappmessagecontent-secondarybtn):
    ButtonConfig
```

## Properties<a name="aws-properties-pinpoint-inapptemplate-inappmessagecontent-properties"></a>

`BackgroundColor` <a name="cfn-pinpoint-inapptemplate-inappmessagecontent-backgroundcolor"></a>
The background color for an in\-app message banner, expressed as a hex color code \(such as \#000000 for black\)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BodyConfig` <a name="cfn-pinpoint-inapptemplate-inappmessagecontent-bodyconfig"></a>
An object that contains configuration information about the header or title text of the in\-app message\.  
_Required_: No  
_Type_: [BodyConfig](aws-properties-pinpoint-inapptemplate-bodyconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HeaderConfig` <a name="cfn-pinpoint-inapptemplate-inappmessagecontent-headerconfig"></a>
An object that contains configuration information about the header or title text of the in\-app message\.  
_Required_: No  
_Type_: [HeaderConfig](aws-properties-pinpoint-inapptemplate-headerconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageUrl` <a name="cfn-pinpoint-inapptemplate-inappmessagecontent-imageurl"></a>
The URL of the image that appears on an in\-app message banner\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryBtn` <a name="cfn-pinpoint-inapptemplate-inappmessagecontent-primarybtn"></a>
An object that contains configuration information about the primary button in an in\-app message\.  
_Required_: No  
_Type_: [ButtonConfig](aws-properties-pinpoint-inapptemplate-buttonconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryBtn` <a name="cfn-pinpoint-inapptemplate-inappmessagecontent-secondarybtn"></a>
An object that contains configuration information about the secondary button in an in\-app message\.  
_Required_: No  
_Type_: [ButtonConfig](aws-properties-pinpoint-inapptemplate-buttonconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
