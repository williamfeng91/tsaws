# AWS::IoTWireless::TaskDefinition LoRaWANUpdateGatewayTaskCreate<a name="aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate"></a>

The signature used to verify the update firmware\.

## Syntax<a name="aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-syntax.json"></a>

```
{
  "[CurrentVersion](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-currentversion)" : LoRaWANGatewayVersion,
  "[SigKeyCrc](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-sigkeycrc)" : Integer,
  "[UpdateSignature](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updatesignature)" : String,
  "[UpdateVersion](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updateversion)" : LoRaWANGatewayVersion
}
```

### YAML<a name="aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-syntax.yaml"></a>

```
  [CurrentVersion](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-currentversion):
    LoRaWANGatewayVersion
  [SigKeyCrc](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-sigkeycrc): Integer
  [UpdateSignature](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updatesignature): String
  [UpdateVersion](#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updateversion):
    LoRaWANGatewayVersion
```

## Properties<a name="aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-properties"></a>

`CurrentVersion` <a name="cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-currentversion"></a>
The version of the gateways that should receive the update\.  
_Required_: No  
_Type_: [LoRaWANGatewayVersion](aws-properties-iotwireless-taskdefinition-lorawangatewayversion.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SigKeyCrc` <a name="cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-sigkeycrc"></a>
The CRC of the signature private key to check\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UpdateSignature` <a name="cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updatesignature"></a>
The signature used to verify the update firmware\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UpdateVersion` <a name="cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updateversion"></a>
The firmware version to update the gateway to\.  
_Required_: No  
_Type_: [LoRaWANGatewayVersion](aws-properties-iotwireless-taskdefinition-lorawangatewayversion.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
