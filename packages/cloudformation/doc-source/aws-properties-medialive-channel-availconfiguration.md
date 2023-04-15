# AWS::MediaLive::Channel AvailConfiguration<a name="aws-properties-medialive-channel-availconfiguration"></a>

The setup of ad avail handling in the output\.

The parent of this entity is EncoderSettings\.

## Syntax<a name="aws-properties-medialive-channel-availconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-availconfiguration-syntax.json"></a>

```
{
  "[AvailSettings](#cfn-medialive-channel-availconfiguration-availsettings)" : AvailSettings
}
```

### YAML<a name="aws-properties-medialive-channel-availconfiguration-syntax.yaml"></a>

```
  [AvailSettings](#cfn-medialive-channel-availconfiguration-availsettings):
    AvailSettings
```

## Properties<a name="aws-properties-medialive-channel-availconfiguration-properties"></a>

`AvailSettings` <a name="cfn-medialive-channel-availconfiguration-availsettings"></a>
The setup of ad avail handling in the output\.  
_Required_: No  
_Type_: [AvailSettings](aws-properties-medialive-channel-availsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
