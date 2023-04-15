# AWS::MediaLive::Channel NielsenConfiguration<a name="aws-properties-medialive-channel-nielsenconfiguration"></a>

The settings to configure Nielsen watermarks\.

The parent of this entity is EncoderSettings\.

## Syntax<a name="aws-properties-medialive-channel-nielsenconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-medialive-channel-nielsenconfiguration-syntax.json"></a>

```
{
  "[DistributorId](#cfn-medialive-channel-nielsenconfiguration-distributorid)" : String,
  "[NielsenPcmToId3Tagging](#cfn-medialive-channel-nielsenconfiguration-nielsenpcmtoid3tagging)" : String
}
```

### YAML<a name="aws-properties-medialive-channel-nielsenconfiguration-syntax.yaml"></a>

```
  [DistributorId](#cfn-medialive-channel-nielsenconfiguration-distributorid): String
  [NielsenPcmToId3Tagging](#cfn-medialive-channel-nielsenconfiguration-nielsenpcmtoid3tagging): String
```

## Properties<a name="aws-properties-medialive-channel-nielsenconfiguration-properties"></a>

`DistributorId` <a name="cfn-medialive-channel-nielsenconfiguration-distributorid"></a>
Enter the Distributor ID assigned to your organization by Nielsen\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NielsenPcmToId3Tagging` <a name="cfn-medialive-channel-nielsenconfiguration-nielsenpcmtoid3tagging"></a>
Enables Nielsen PCM to ID3 tagging  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
