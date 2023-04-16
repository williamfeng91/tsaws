# AWS::IoTWireless::NetworkAnalyzerConfiguration<a name="aws-resource-iotwireless-networkanalyzerconfiguration"></a>

Network analyzer configuration\.

## Syntax<a name="aws-resource-iotwireless-networkanalyzerconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iotwireless-networkanalyzerconfiguration-syntax.json"></a>

```
{
  "Type" : "AWS::IoTWireless::NetworkAnalyzerConfiguration",
  "Properties" : {
      "[Description](#cfn-iotwireless-networkanalyzerconfiguration-description)" : String,
      "[Name](#cfn-iotwireless-networkanalyzerconfiguration-name)" : String,
      "[Tags](#cfn-iotwireless-networkanalyzerconfiguration-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[TraceContent](#cfn-iotwireless-networkanalyzerconfiguration-tracecontent)" : TraceContent,
      "[WirelessDevices](#cfn-iotwireless-networkanalyzerconfiguration-wirelessdevices)" : [ String, ... ],
      "[WirelessGateways](#cfn-iotwireless-networkanalyzerconfiguration-wirelessgateways)" : [ String, ... ]
    }
}
```

### YAML<a name="aws-resource-iotwireless-networkanalyzerconfiguration-syntax.yaml"></a>

```
Type: AWS::IoTWireless::NetworkAnalyzerConfiguration
Properties:
  [Description](#cfn-iotwireless-networkanalyzerconfiguration-description): String
  [Name](#cfn-iotwireless-networkanalyzerconfiguration-name): String
  [Tags](#cfn-iotwireless-networkanalyzerconfiguration-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [TraceContent](#cfn-iotwireless-networkanalyzerconfiguration-tracecontent):
    TraceContent
  [WirelessDevices](#cfn-iotwireless-networkanalyzerconfiguration-wirelessdevices):
    - String
  [WirelessGateways](#cfn-iotwireless-networkanalyzerconfiguration-wirelessgateways):
    - String
```

## Properties<a name="aws-resource-iotwireless-networkanalyzerconfiguration-properties"></a>

`Description` <a name="cfn-iotwireless-networkanalyzerconfiguration-description"></a>
The description of the resource\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotwireless-networkanalyzerconfiguration-name"></a>
Name of the network analyzer configuration\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-iotwireless-networkanalyzerconfiguration-tags"></a>
The tags to attach to the specified resource\. Tags are metadata that you can use to manage a resource\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `200`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TraceContent` <a name="cfn-iotwireless-networkanalyzerconfiguration-tracecontent"></a>
Trace content for your wireless gateway and wireless device resources\.  
_Required_: No  
_Type_: [TraceContent](aws-properties-iotwireless-networkanalyzerconfiguration-tracecontent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WirelessDevices` <a name="cfn-iotwireless-networkanalyzerconfiguration-wirelessdevices"></a>
Wireless device resources to add to the network analyzer configuration\. Provide the `WirelessDeviceId` of the resource to add in the input array\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `250`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WirelessGateways` <a name="cfn-iotwireless-networkanalyzerconfiguration-wirelessgateways"></a>
Wireless gateway resources to add to the network analyzer configuration\. Provide the `WirelessGatewayId` of the resource to add in the input array\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-iotwireless-networkanalyzerconfiguration-return-values"></a>

### Ref<a name="aws-resource-iotwireless-networkanalyzerconfiguration-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the network analyzer configuration\.

### Fn::GetAtt<a name="aws-resource-iotwireless-networkanalyzerconfiguration-return-values-fn--getatt"></a>

#### <a name="aws-resource-iotwireless-networkanalyzerconfiguration-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the resource\.
