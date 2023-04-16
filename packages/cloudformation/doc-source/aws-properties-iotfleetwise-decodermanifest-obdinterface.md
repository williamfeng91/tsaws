# AWS::IoTFleetWise::DecoderManifest ObdInterface<a name="aws-properties-iotfleetwise-decodermanifest-obdinterface"></a>

A network interface that specifies the On\-board diagnostic \(OBD\) II network protocol\.

## Syntax<a name="aws-properties-iotfleetwise-decodermanifest-obdinterface-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-decodermanifest-obdinterface-syntax.json"></a>

```
{
  "[DtcRequestIntervalSeconds](#cfn-iotfleetwise-decodermanifest-obdinterface-dtcrequestintervalseconds)" : String,
  "[HasTransmissionEcu](#cfn-iotfleetwise-decodermanifest-obdinterface-hastransmissionecu)" : String,
  "[Name](#cfn-iotfleetwise-decodermanifest-obdinterface-name)" : String,
  "[ObdStandard](#cfn-iotfleetwise-decodermanifest-obdinterface-obdstandard)" : String,
  "[PidRequestIntervalSeconds](#cfn-iotfleetwise-decodermanifest-obdinterface-pidrequestintervalseconds)" : String,
  "[RequestMessageId](#cfn-iotfleetwise-decodermanifest-obdinterface-requestmessageid)" : String,
  "[UseExtendedIds](#cfn-iotfleetwise-decodermanifest-obdinterface-useextendedids)" : String
}
```

### YAML<a name="aws-properties-iotfleetwise-decodermanifest-obdinterface-syntax.yaml"></a>

```
  [DtcRequestIntervalSeconds](#cfn-iotfleetwise-decodermanifest-obdinterface-dtcrequestintervalseconds): String
  [HasTransmissionEcu](#cfn-iotfleetwise-decodermanifest-obdinterface-hastransmissionecu): String
  [Name](#cfn-iotfleetwise-decodermanifest-obdinterface-name): String
  [ObdStandard](#cfn-iotfleetwise-decodermanifest-obdinterface-obdstandard): String
  [PidRequestIntervalSeconds](#cfn-iotfleetwise-decodermanifest-obdinterface-pidrequestintervalseconds): String
  [RequestMessageId](#cfn-iotfleetwise-decodermanifest-obdinterface-requestmessageid): String
  [UseExtendedIds](#cfn-iotfleetwise-decodermanifest-obdinterface-useextendedids): String
```

## Properties<a name="aws-properties-iotfleetwise-decodermanifest-obdinterface-properties"></a>

`DtcRequestIntervalSeconds` <a name="cfn-iotfleetwise-decodermanifest-obdinterface-dtcrequestintervalseconds"></a>
The maximum number message requests per diagnostic trouble code per second\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HasTransmissionEcu` <a name="cfn-iotfleetwise-decodermanifest-obdinterface-hastransmissionecu"></a>
Whether the vehicle has a transmission control module \(TCM\)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotfleetwise-decodermanifest-obdinterface-name"></a>
The name of the interface\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ObdStandard` <a name="cfn-iotfleetwise-decodermanifest-obdinterface-obdstandard"></a>
The standard OBD II PID\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PidRequestIntervalSeconds` <a name="cfn-iotfleetwise-decodermanifest-obdinterface-pidrequestintervalseconds"></a>
The maximum number message requests per second\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequestMessageId` <a name="cfn-iotfleetwise-decodermanifest-obdinterface-requestmessageid"></a>
The ID of the message requesting vehicle data\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UseExtendedIds` <a name="cfn-iotfleetwise-decodermanifest-obdinterface-useextendedids"></a>
Whether to use extended IDs in the message\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
