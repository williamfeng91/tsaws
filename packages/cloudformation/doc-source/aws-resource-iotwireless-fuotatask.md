# AWS::IoTWireless::FuotaTask<a name="aws-resource-iotwireless-fuotatask"></a>

A FUOTA task\.

## Syntax<a name="aws-resource-iotwireless-fuotatask-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iotwireless-fuotatask-syntax.json"></a>

```
{
  "Type" : "AWS::IoTWireless::FuotaTask",
  "Properties" : {
      "[AssociateMulticastGroup](#cfn-iotwireless-fuotatask-associatemulticastgroup)" : String,
      "[AssociateWirelessDevice](#cfn-iotwireless-fuotatask-associatewirelessdevice)" : String,
      "[Description](#cfn-iotwireless-fuotatask-description)" : String,
      "[DisassociateMulticastGroup](#cfn-iotwireless-fuotatask-disassociatemulticastgroup)" : String,
      "[DisassociateWirelessDevice](#cfn-iotwireless-fuotatask-disassociatewirelessdevice)" : String,
      "[FirmwareUpdateImage](#cfn-iotwireless-fuotatask-firmwareupdateimage)" : String,
      "[FirmwareUpdateRole](#cfn-iotwireless-fuotatask-firmwareupdaterole)" : String,
      "[LoRaWAN](#cfn-iotwireless-fuotatask-lorawan)" : LoRaWAN,
      "[Name](#cfn-iotwireless-fuotatask-name)" : String,
      "[Tags](#cfn-iotwireless-fuotatask-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-iotwireless-fuotatask-syntax.yaml"></a>

```
Type: AWS::IoTWireless::FuotaTask
Properties:
  [AssociateMulticastGroup](#cfn-iotwireless-fuotatask-associatemulticastgroup): String
  [AssociateWirelessDevice](#cfn-iotwireless-fuotatask-associatewirelessdevice): String
  [Description](#cfn-iotwireless-fuotatask-description): String
  [DisassociateMulticastGroup](#cfn-iotwireless-fuotatask-disassociatemulticastgroup): String
  [DisassociateWirelessDevice](#cfn-iotwireless-fuotatask-disassociatewirelessdevice): String
  [FirmwareUpdateImage](#cfn-iotwireless-fuotatask-firmwareupdateimage): String
  [FirmwareUpdateRole](#cfn-iotwireless-fuotatask-firmwareupdaterole): String
  [LoRaWAN](#cfn-iotwireless-fuotatask-lorawan):
    LoRaWAN
  [Name](#cfn-iotwireless-fuotatask-name): String
  [Tags](#cfn-iotwireless-fuotatask-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-iotwireless-fuotatask-properties"></a>

`AssociateMulticastGroup` <a name="cfn-iotwireless-fuotatask-associatemulticastgroup"></a>
The ID of the multicast group to associate with a FUOTA task\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AssociateWirelessDevice` <a name="cfn-iotwireless-fuotatask-associatewirelessdevice"></a>
The ID of the wireless device to associate with a multicast group\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-iotwireless-fuotatask-description"></a>
The description of the new resource\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisassociateMulticastGroup` <a name="cfn-iotwireless-fuotatask-disassociatemulticastgroup"></a>
The ID of the multicast group to disassociate from a FUOTA task\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisassociateWirelessDevice` <a name="cfn-iotwireless-fuotatask-disassociatewirelessdevice"></a>
The ID of the wireless device to disassociate from a FUOTA task\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FirmwareUpdateImage` <a name="cfn-iotwireless-fuotatask-firmwareupdateimage"></a>
The S3 URI points to a firmware update image that is to be used with a FUOTA task\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FirmwareUpdateRole` <a name="cfn-iotwireless-fuotatask-firmwareupdaterole"></a>
The firmware update role that is to be used with a FUOTA task\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoRaWAN` <a name="cfn-iotwireless-fuotatask-lorawan"></a>
The LoRaWAN information used with a FUOTA task\.  
_Required_: Yes  
_Type_: [LoRaWAN](aws-properties-iotwireless-fuotatask-lorawan.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotwireless-fuotatask-name"></a>
The name of a FUOTA task\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-iotwireless-fuotatask-tags"></a>
The tags are an array of key\-value pairs to attach to the specified resource\. Tags can have a minimum of 0 and a maximum of 50 items\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-iotwireless-fuotatask-return-values"></a>

### Ref<a name="aws-resource-iotwireless-fuotatask-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the FUOTA task\.

### Fn::GetAtt<a name="aws-resource-iotwireless-fuotatask-return-values-fn--getatt"></a>

#### <a name="aws-resource-iotwireless-fuotatask-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The ARN of a FUOTA task

`FuotaTaskStatus` <a name="FuotaTaskStatus-fn::getatt"></a>
The status of a FUOTA task\.

`Id` <a name="Id-fn::getatt"></a>
The ID of a FUOTA task\.

`LoRaWAN.StartTime` <a name="LoRaWAN.StartTime-fn::getatt"></a>
Start time of a FUOTA task\.
