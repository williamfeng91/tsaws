# AWS::Wisdom::Assistant<a name="aws-resource-wisdom-assistant"></a>

Specifies an Amazon Connect Wisdom assistant\.

## Syntax<a name="aws-resource-wisdom-assistant-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-wisdom-assistant-syntax.json"></a>

```
{
  "Type" : "AWS::Wisdom::Assistant",
  "Properties" : {
      "[Description](#cfn-wisdom-assistant-description)" : String,
      "[Name](#cfn-wisdom-assistant-name)" : String,
      "[ServerSideEncryptionConfiguration](#cfn-wisdom-assistant-serversideencryptionconfiguration)" : ServerSideEncryptionConfiguration,
      "[Tags](#cfn-wisdom-assistant-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[Type](#cfn-wisdom-assistant-type)" : String
    }
}
```

### YAML<a name="aws-resource-wisdom-assistant-syntax.yaml"></a>

```
Type: AWS::Wisdom::Assistant
Properties:
  [Description](#cfn-wisdom-assistant-description): String
  [Name](#cfn-wisdom-assistant-name): String
  [ServerSideEncryptionConfiguration](#cfn-wisdom-assistant-serversideencryptionconfiguration):
    ServerSideEncryptionConfiguration
  [Tags](#cfn-wisdom-assistant-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [Type](#cfn-wisdom-assistant-type): String
```

## Properties<a name="aws-resource-wisdom-assistant-properties"></a>

`Description` <a name="cfn-wisdom-assistant-description"></a>
The description of the assistant\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^[a-zA-Z0-9\s_.,-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-wisdom-assistant-name"></a>
The name of the assistant\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^[a-zA-Z0-9\s_.,-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ServerSideEncryptionConfiguration` <a name="cfn-wisdom-assistant-serversideencryptionconfiguration"></a>
The KMS key used for encryption\.  
_Required_: No  
_Type_: [ServerSideEncryptionConfiguration](aws-properties-wisdom-assistant-serversideencryptionconfiguration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-wisdom-assistant-tags"></a>
The tags used to organize, track, or control access for this resource\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Type` <a name="cfn-wisdom-assistant-type"></a>
The type of assistant\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `AGENT`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-wisdom-assistant-return-values"></a>

### Ref<a name="aws-resource-wisdom-assistant-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the assistant ID\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-wisdom-assistant-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-wisdom-assistant-return-values-fn--getatt-fn--getatt"></a>

`AssistantArn` <a name="AssistantArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the assistant\.

`AssistantId` <a name="AssistantId-fn::getatt"></a>
The ID of the Wisdom assistant\.
