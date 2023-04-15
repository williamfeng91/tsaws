# AWS::MediaLive::Channel<a name="aws-resource-medialive-channel"></a>

The AWS::MediaLive::Channel resource is a MediaLive resource type that creates a channel\.

A MediaLive channel ingests and transcodes \(decodes and encodes\) source content from the inputs that are attached to that channel, and packages the new content into outputs\.

## Syntax<a name="aws-resource-medialive-channel-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-medialive-channel-syntax.json"></a>

```
{
  "Type" : "AWS::MediaLive::Channel",
  "Properties" : {
      "[CdiInputSpecification](#cfn-medialive-channel-cdiinputspecification)" : CdiInputSpecification,
      "[ChannelClass](#cfn-medialive-channel-channelclass)" : String,
      "[Destinations](#cfn-medialive-channel-destinations)" : [ OutputDestination, ... ],
      "[EncoderSettings](#cfn-medialive-channel-encodersettings)" : EncoderSettings,
      "[InputAttachments](#cfn-medialive-channel-inputattachments)" : [ InputAttachment, ... ],
      "[InputSpecification](#cfn-medialive-channel-inputspecification)" : InputSpecification,
      "[LogLevel](#cfn-medialive-channel-loglevel)" : String,
      "[Name](#cfn-medialive-channel-name)" : String,
      "[RoleArn](#cfn-medialive-channel-rolearn)" : String,
      "[Tags](#cfn-medialive-channel-tags)" : Json,
      "[Vpc](#cfn-medialive-channel-vpc)" : VpcOutputSettings
    }
}
```

### YAML<a name="aws-resource-medialive-channel-syntax.yaml"></a>

```
Type: AWS::MediaLive::Channel
Properties:
  [CdiInputSpecification](#cfn-medialive-channel-cdiinputspecification):
    CdiInputSpecification
  [ChannelClass](#cfn-medialive-channel-channelclass): String
  [Destinations](#cfn-medialive-channel-destinations):
    - OutputDestination
  [EncoderSettings](#cfn-medialive-channel-encodersettings):
    EncoderSettings
  [InputAttachments](#cfn-medialive-channel-inputattachments):
    - InputAttachment
  [InputSpecification](#cfn-medialive-channel-inputspecification):
    InputSpecification
  [LogLevel](#cfn-medialive-channel-loglevel): String
  [Name](#cfn-medialive-channel-name): String
  [RoleArn](#cfn-medialive-channel-rolearn): String
  [Tags](#cfn-medialive-channel-tags): Json
  [Vpc](#cfn-medialive-channel-vpc):
    VpcOutputSettings
```

## Properties<a name="aws-resource-medialive-channel-properties"></a>

`CdiInputSpecification` <a name="cfn-medialive-channel-cdiinputspecification"></a>
Specification of CDI inputs for this channel\.  
_Required_: No  
_Type_: [CdiInputSpecification](aws-properties-medialive-channel-cdiinputspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChannelClass` <a name="cfn-medialive-channel-channelclass"></a>
The class for this channel\. For a channel with two pipelines, the class is STANDARD\. For a channel with one pipeline, the class is SINGLE_PIPELINE\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Destinations` <a name="cfn-medialive-channel-destinations"></a>
The settings that identify the destination for the outputs in this MediaLive output package\.  
_Required_: No  
_Type_: List of [OutputDestination](aws-properties-medialive-channel-outputdestination.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncoderSettings` <a name="cfn-medialive-channel-encodersettings"></a>
The encoding configuration for the output content\.  
_Required_: No  
_Type_: [EncoderSettings](aws-properties-medialive-channel-encodersettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputAttachments` <a name="cfn-medialive-channel-inputattachments"></a>
The list of input attachments for the channel\.  
_Required_: No  
_Type_: List of [InputAttachment](aws-properties-medialive-channel-inputattachment.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputSpecification` <a name="cfn-medialive-channel-inputspecification"></a>
The input specification for this channel\. It specifies the key characteristics of the inputs for this channel: the maximum bitrate, the resolution, and the codec\.  
_Required_: No  
_Type_: [InputSpecification](aws-properties-medialive-channel-inputspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LogLevel` <a name="cfn-medialive-channel-loglevel"></a>
The verbosity for logging activity for this channel\. Charges for logging \(which are generated through Amazon CloudWatch Logging\) are higher for higher verbosities\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-medialive-channel-name"></a>
A name for this audio selector\. The AudioDescription \(in an output\) references this name in order to identify a specific input audio to include in that output\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-medialive-channel-rolearn"></a>
The IAM role for MediaLive to assume when running this channel\. The role is identified by its ARN\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-medialive-channel-tags"></a>
A collection of tags for this channel\. Each tag is a key\-value pair\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Vpc` <a name="cfn-medialive-channel-vpc"></a>
Settings to enable VPC mode in the channel, so that the endpoints for all outputs are in your VPC\.  
_Required_: No  
_Type_: [VpcOutputSettings](aws-properties-medialive-channel-vpcoutputsettings.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-medialive-channel-return-values"></a>

### Ref<a name="aws-resource-medialive-channel-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the name of the channel\.

For example: `{ "Ref": "myChannel" }`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-medialive-channel-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-medialive-channel-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The ARN of the MediaLive channel\. For example: arn:aws:medialive:us\-west\-1:111122223333:medialive:channel:1234567

`Inputs` <a name="Inputs-fn::getatt"></a>
The inputs that are attached to this channel\. The inputs are identified by their IDs \(not by their names or their ARNs\)\.
