# AWS::KinesisVideo::SignalingChannel<a name="aws-resource-kinesisvideo-signalingchannel"></a>

Specifies a signaling channel\.

`CreateSignalingChannel` is an asynchronous operation\.

## Syntax<a name="aws-resource-kinesisvideo-signalingchannel-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-kinesisvideo-signalingchannel-syntax.json"></a>

```
{
  "Type" : "AWS::KinesisVideo::SignalingChannel",
  "Properties" : {
      "[MessageTtlSeconds](#cfn-kinesisvideo-signalingchannel-messagettlseconds)" : Integer,
      "[Name](#cfn-kinesisvideo-signalingchannel-name)" : String,
      "[Tags](#cfn-kinesisvideo-signalingchannel-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[Type](#cfn-kinesisvideo-signalingchannel-type)" : String
    }
}
```

### YAML<a name="aws-resource-kinesisvideo-signalingchannel-syntax.yaml"></a>

```
Type: AWS::KinesisVideo::SignalingChannel
Properties:
  [MessageTtlSeconds](#cfn-kinesisvideo-signalingchannel-messagettlseconds): Integer
  [Name](#cfn-kinesisvideo-signalingchannel-name): String
  [Tags](#cfn-kinesisvideo-signalingchannel-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [Type](#cfn-kinesisvideo-signalingchannel-type): String
```

## Properties<a name="aws-resource-kinesisvideo-signalingchannel-properties"></a>

`MessageTtlSeconds` <a name="cfn-kinesisvideo-signalingchannel-messagettlseconds"></a>
The period of time a signaling channel retains undelivered messages before they are discarded\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `5`  
_Maximum_: `120`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-kinesisvideo-signalingchannel-name"></a>
A name for the signaling channel that you are creating\. It must be unique for each AWS account and AWS Region\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-kinesisvideo-signalingchannel-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-kinesisvideo-signalingchannel-type"></a>
A type of the signaling channel that you are creating\. Currently, `SINGLE_MASTER` is the only supported channel type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `FULL_MESH | SINGLE_MASTER`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-kinesisvideo-signalingchannel-return-values"></a>

### Ref<a name="aws-resource-kinesisvideo-signalingchannel-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-kinesisvideo-signalingchannel-return-values-fn--getatt"></a>

#### <a name="aws-resource-kinesisvideo-signalingchannel-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the signaling channel\.
