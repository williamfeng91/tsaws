# AWS::IoTWireless::WirelessDevice LoRaWANDevice<a name="aws-properties-iotwireless-wirelessdevice-lorawandevice"></a>

LoRaWAN object for create functions\.

## Syntax<a name="aws-properties-iotwireless-wirelessdevice-lorawandevice-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotwireless-wirelessdevice-lorawandevice-syntax.json"></a>

```
{
  "[AbpV10x](#cfn-iotwireless-wirelessdevice-lorawandevice-abpv10x)" : AbpV10x,
  "[AbpV11](#cfn-iotwireless-wirelessdevice-lorawandevice-abpv11)" : AbpV11,
  "[DevEui](#cfn-iotwireless-wirelessdevice-lorawandevice-deveui)" : String,
  "[DeviceProfileId](#cfn-iotwireless-wirelessdevice-lorawandevice-deviceprofileid)" : String,
  "[OtaaV10x](#cfn-iotwireless-wirelessdevice-lorawandevice-otaav10x)" : OtaaV10x,
  "[OtaaV11](#cfn-iotwireless-wirelessdevice-lorawandevice-otaav11)" : OtaaV11,
  "[ServiceProfileId](#cfn-iotwireless-wirelessdevice-lorawandevice-serviceprofileid)" : String
}
```

### YAML<a name="aws-properties-iotwireless-wirelessdevice-lorawandevice-syntax.yaml"></a>

```
  [AbpV10x](#cfn-iotwireless-wirelessdevice-lorawandevice-abpv10x):
    AbpV10x
  [AbpV11](#cfn-iotwireless-wirelessdevice-lorawandevice-abpv11):
    AbpV11
  [DevEui](#cfn-iotwireless-wirelessdevice-lorawandevice-deveui): String
  [DeviceProfileId](#cfn-iotwireless-wirelessdevice-lorawandevice-deviceprofileid): String
  [OtaaV10x](#cfn-iotwireless-wirelessdevice-lorawandevice-otaav10x):
    OtaaV10x
  [OtaaV11](#cfn-iotwireless-wirelessdevice-lorawandevice-otaav11):
    OtaaV11
  [ServiceProfileId](#cfn-iotwireless-wirelessdevice-lorawandevice-serviceprofileid): String
```

## Properties<a name="aws-properties-iotwireless-wirelessdevice-lorawandevice-properties"></a>

`AbpV10x` <a name="cfn-iotwireless-wirelessdevice-lorawandevice-abpv10x"></a>
LoRaWAN object for create APIs\.  
_Required_: No  
_Type_: [AbpV10x](aws-properties-iotwireless-wirelessdevice-abpv10x.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AbpV11` <a name="cfn-iotwireless-wirelessdevice-lorawandevice-abpv11"></a>
ABP device object for create APIs for v1\.1\.  
_Required_: No  
_Type_: [AbpV11](aws-properties-iotwireless-wirelessdevice-abpv11.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DevEui` <a name="cfn-iotwireless-wirelessdevice-lorawandevice-deveui"></a>
The DevEUI value\.  
_Required_: No  
_Type_: String  
_Pattern_: `[a-fA-F0-9]{16}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeviceProfileId` <a name="cfn-iotwireless-wirelessdevice-lorawandevice-deviceprofileid"></a>
The ID of the device profile for the new wireless device\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OtaaV10x` <a name="cfn-iotwireless-wirelessdevice-lorawandevice-otaav10x"></a>
OTAA device object for create APIs for v1\.0\.x  
_Required_: No  
_Type_: [OtaaV10x](aws-properties-iotwireless-wirelessdevice-otaav10x.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OtaaV11` <a name="cfn-iotwireless-wirelessdevice-lorawandevice-otaav11"></a>
OTAA device object for v1\.1 for create APIs\.  
_Required_: No  
_Type_: [OtaaV11](aws-properties-iotwireless-wirelessdevice-otaav11.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceProfileId` <a name="cfn-iotwireless-wirelessdevice-lorawandevice-serviceprofileid"></a>
The ID of the service profile\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
