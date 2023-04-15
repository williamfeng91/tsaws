# AWS::MediaLive::Input MediaConnectFlowRequest<a name="aws-properties-medialive-input-mediaconnectflowrequest"></a>

Settings that apply only if the input is a MediaConnect input\.

The parent of this entity is Input\.

## Syntax<a name="aws-properties-medialive-input-mediaconnectflowrequest-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-input-mediaconnectflowrequest-syntax.json"></a>

```
{
  "[FlowArn](#cfn-medialive-input-mediaconnectflowrequest-flowarn)" : String
}
```

### YAML<a name="aws-properties-medialive-input-mediaconnectflowrequest-syntax.yaml"></a>

```
  [FlowArn](#cfn-medialive-input-mediaconnectflowrequest-flowarn): String
```

## Properties<a name="aws-properties-medialive-input-mediaconnectflowrequest-properties"></a>

`FlowArn` <a name="cfn-medialive-input-mediaconnectflowrequest-flowarn"></a>
The ARN of one or two MediaConnect flows that are the sources for this MediaConnect input\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
