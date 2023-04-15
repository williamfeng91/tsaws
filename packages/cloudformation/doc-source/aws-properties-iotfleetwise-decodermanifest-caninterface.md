# AWS::IoTFleetWise::DecoderManifest CanInterface<a name="aws-properties-iotfleetwise-decodermanifest-caninterface"></a>

A single controller area network \(CAN\) device interface\.

## Syntax<a name="aws-properties-iotfleetwise-decodermanifest-caninterface-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-decodermanifest-caninterface-syntax.json"></a>

```
{
  "[Name](#cfn-iotfleetwise-decodermanifest-caninterface-name)" : String,
  "[ProtocolName](#cfn-iotfleetwise-decodermanifest-caninterface-protocolname)" : String,
  "[ProtocolVersion](#cfn-iotfleetwise-decodermanifest-caninterface-protocolversion)" : String
}
```

### YAML<a name="aws-properties-iotfleetwise-decodermanifest-caninterface-syntax.yaml"></a>

```
  [Name](#cfn-iotfleetwise-decodermanifest-caninterface-name): String
  [ProtocolName](#cfn-iotfleetwise-decodermanifest-caninterface-protocolname): String
  [ProtocolVersion](#cfn-iotfleetwise-decodermanifest-caninterface-protocolversion): String
```

## Properties<a name="aws-properties-iotfleetwise-decodermanifest-caninterface-properties"></a>

`Name` <a name="cfn-iotfleetwise-decodermanifest-caninterface-name"></a>
The unique name of the interface\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProtocolName` <a name="cfn-iotfleetwise-decodermanifest-caninterface-protocolname"></a>
The name of the communication protocol for the interface\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProtocolVersion` <a name="cfn-iotfleetwise-decodermanifest-caninterface-protocolversion"></a>
The version of the communication protocol for the interface\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
