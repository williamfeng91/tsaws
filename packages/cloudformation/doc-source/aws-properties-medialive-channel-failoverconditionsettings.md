# AWS::MediaLive::Channel FailoverConditionSettings<a name="aws-properties-medialive-channel-failoverconditionsettings"></a>

Settings for one failover condition\.

The parent of this entity is FailoverCondition\.

## Syntax<a name="aws-properties-medialive-channel-failoverconditionsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-failoverconditionsettings-syntax.json"></a>

```
{
  "[AudioSilenceSettings](#cfn-medialive-channel-failoverconditionsettings-audiosilencesettings)" : AudioSilenceFailoverSettings,
  "[InputLossSettings](#cfn-medialive-channel-failoverconditionsettings-inputlosssettings)" : InputLossFailoverSettings,
  "[VideoBlackSettings](#cfn-medialive-channel-failoverconditionsettings-videoblacksettings)" : VideoBlackFailoverSettings
}
```

### YAML<a name="aws-properties-medialive-channel-failoverconditionsettings-syntax.yaml"></a>

```
  [AudioSilenceSettings](#cfn-medialive-channel-failoverconditionsettings-audiosilencesettings):
    AudioSilenceFailoverSettings
  [InputLossSettings](#cfn-medialive-channel-failoverconditionsettings-inputlosssettings):
    InputLossFailoverSettings
  [VideoBlackSettings](#cfn-medialive-channel-failoverconditionsettings-videoblacksettings):
    VideoBlackFailoverSettings
```

## Properties<a name="aws-properties-medialive-channel-failoverconditionsettings-properties"></a>

`AudioSilenceSettings` <a name="cfn-medialive-channel-failoverconditionsettings-audiosilencesettings"></a>
MediaLive will perform a failover if the specified audio selector is silent for the specified period\.  
_Required_: No  
_Type_: [AudioSilenceFailoverSettings](aws-properties-medialive-channel-audiosilencefailoversettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputLossSettings` <a name="cfn-medialive-channel-failoverconditionsettings-inputlosssettings"></a>
MediaLive will perform a failover if content is not detected in this input for the specified period\.  
_Required_: No  
_Type_: [InputLossFailoverSettings](aws-properties-medialive-channel-inputlossfailoversettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VideoBlackSettings` <a name="cfn-medialive-channel-failoverconditionsettings-videoblacksettings"></a>
MediaLive will perform a failover if content is considered black for the specified period\.  
_Required_: No  
_Type_: [VideoBlackFailoverSettings](aws-properties-medialive-channel-videoblackfailoversettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
