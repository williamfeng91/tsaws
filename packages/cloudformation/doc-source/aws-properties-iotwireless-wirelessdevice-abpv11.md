# AWS::IoTWireless::WirelessDevice AbpV11<a name="aws-properties-iotwireless-wirelessdevice-abpv11"></a>

ABP device object for create APIs for v1\.1\.

## Syntax<a name="aws-properties-iotwireless-wirelessdevice-abpv11-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotwireless-wirelessdevice-abpv11-syntax.json"></a>

```
{
  "[DevAddr](#cfn-iotwireless-wirelessdevice-abpv11-devaddr)" : String,
  "[SessionKeys](#cfn-iotwireless-wirelessdevice-abpv11-sessionkeys)" : SessionKeysAbpV11
}
```

### YAML<a name="aws-properties-iotwireless-wirelessdevice-abpv11-syntax.yaml"></a>

```
  [DevAddr](#cfn-iotwireless-wirelessdevice-abpv11-devaddr): String
  [SessionKeys](#cfn-iotwireless-wirelessdevice-abpv11-sessionkeys):
    SessionKeysAbpV11
```

## Properties<a name="aws-properties-iotwireless-wirelessdevice-abpv11-properties"></a>

`DevAddr` <a name="cfn-iotwireless-wirelessdevice-abpv11-devaddr"></a>
The DevAddr value\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `[a-fA-F0-9]{8}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SessionKeys` <a name="cfn-iotwireless-wirelessdevice-abpv11-sessionkeys"></a>
Session keys for ABP v1\.1\.  
_Required_: Yes  
_Type_: [SessionKeysAbpV11](aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
