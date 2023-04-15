# AWS::MediaLive::Channel TimecodeConfig<a name="aws-properties-medialive-channel-timecodeconfig"></a>

The configuration of the timecode in the output\.

The parent of this entity is EncoderSettings\.

## Syntax<a name="aws-properties-medialive-channel-timecodeconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-timecodeconfig-syntax.json"></a>

```
{
  "[Source](#cfn-medialive-channel-timecodeconfig-source)" : String,
  "[SyncThreshold](#cfn-medialive-channel-timecodeconfig-syncthreshold)" : Integer
}
```

### YAML<a name="aws-properties-medialive-channel-timecodeconfig-syntax.yaml"></a>

```
  [Source](#cfn-medialive-channel-timecodeconfig-source): String
  [SyncThreshold](#cfn-medialive-channel-timecodeconfig-syncthreshold): Integer
```

## Properties<a name="aws-properties-medialive-channel-timecodeconfig-properties"></a>

`Source` <a name="cfn-medialive-channel-timecodeconfig-source"></a>
Identifies the source for the timecode that will be associated with the channel outputs\. Embedded \(embedded\): Initialize the output timecode with timecode from the source\. If no embedded timecode is detected in the source, the system falls back to using "Start at 0" \(zerobased\)\. System Clock \(systemclock\): Use the UTC time\. Start at 0 \(zerobased\): The time of the first frame of the channel will be 00:00:00:00\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SyncThreshold` <a name="cfn-medialive-channel-timecodeconfig-syncthreshold"></a>
The threshold in frames beyond which output timecode is resynchronized to the input timecode\. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode\. There is no timecode sync when this is not specified\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
