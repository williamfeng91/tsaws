# AWS::Connect::Instance Attributes<a name="aws-properties-connect-instance-attributes"></a>

_This is a preview release for Amazon Connect\. It is subject to change\._

## Syntax<a name="aws-properties-connect-instance-attributes-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connect-instance-attributes-syntax.json"></a>

```
{
  "[AutoResolveBestVoices](#cfn-connect-instance-attributes-autoresolvebestvoices)" : Boolean,
  "[ContactflowLogs](#cfn-connect-instance-attributes-contactflowlogs)" : Boolean,
  "[ContactLens](#cfn-connect-instance-attributes-contactlens)" : Boolean,
  "[EarlyMedia](#cfn-connect-instance-attributes-earlymedia)" : Boolean,
  "[InboundCalls](#cfn-connect-instance-attributes-inboundcalls)" : Boolean,
  "[OutboundCalls](#cfn-connect-instance-attributes-outboundcalls)" : Boolean,
  "[UseCustomTTSVoices](#cfn-connect-instance-attributes-usecustomttsvoices)" : Boolean
}
```

### YAML<a name="aws-properties-connect-instance-attributes-syntax.yaml"></a>

```
  [AutoResolveBestVoices](#cfn-connect-instance-attributes-autoresolvebestvoices): Boolean
  [ContactflowLogs](#cfn-connect-instance-attributes-contactflowlogs): Boolean
  [ContactLens](#cfn-connect-instance-attributes-contactlens): Boolean
  [EarlyMedia](#cfn-connect-instance-attributes-earlymedia): Boolean
  [InboundCalls](#cfn-connect-instance-attributes-inboundcalls): Boolean
  [OutboundCalls](#cfn-connect-instance-attributes-outboundcalls): Boolean
  [UseCustomTTSVoices](#cfn-connect-instance-attributes-usecustomttsvoices): Boolean
```

## Properties<a name="aws-properties-connect-instance-attributes-properties"></a>

`AutoResolveBestVoices` <a name="cfn-connect-instance-attributes-autoresolvebestvoices"></a>

_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContactflowLogs` <a name="cfn-connect-instance-attributes-contactflowlogs"></a>

_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContactLens` <a name="cfn-connect-instance-attributes-contactlens"></a>

_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EarlyMedia` <a name="cfn-connect-instance-attributes-earlymedia"></a>

_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InboundCalls` <a name="cfn-connect-instance-attributes-inboundcalls"></a>

_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OutboundCalls` <a name="cfn-connect-instance-attributes-outboundcalls"></a>

_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UseCustomTTSVoices` <a name="cfn-connect-instance-attributes-usecustomttsvoices"></a>

_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
