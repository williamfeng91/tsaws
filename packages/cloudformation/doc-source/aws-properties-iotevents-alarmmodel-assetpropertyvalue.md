# AWS::IoTEvents::AlarmModel AssetPropertyValue<a name="aws-properties-iotevents-alarmmodel-assetpropertyvalue"></a>

A structure that contains value information\. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the _ AWS IoT SiteWise API Reference_\.

You must use expressions for all parameters in `AssetPropertyValue`\. The expressions accept literals, operators, functions, references, and substitution templates\.

**Examples**

- For literal values, the expressions must contain single quotes\. For example, the value for the `quality` parameter can be `'GOOD'`\.
- For references, you must specify either variables or input values\. For example, the value for the `quality` parameter can be `$input.TemperatureInput.sensorData.quality`\.

For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_\.

## Syntax<a name="aws-properties-iotevents-alarmmodel-assetpropertyvalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-alarmmodel-assetpropertyvalue-syntax.json"></a>

```
{
  "[Quality](#cfn-iotevents-alarmmodel-assetpropertyvalue-quality)" : String,
  "[Timestamp](#cfn-iotevents-alarmmodel-assetpropertyvalue-timestamp)" : AssetPropertyTimestamp,
  "[Value](#cfn-iotevents-alarmmodel-assetpropertyvalue-value)" : AssetPropertyVariant
}
```

### YAML<a name="aws-properties-iotevents-alarmmodel-assetpropertyvalue-syntax.yaml"></a>

```
  [Quality](#cfn-iotevents-alarmmodel-assetpropertyvalue-quality): String
  [Timestamp](#cfn-iotevents-alarmmodel-assetpropertyvalue-timestamp):
    AssetPropertyTimestamp
  [Value](#cfn-iotevents-alarmmodel-assetpropertyvalue-value):
    AssetPropertyVariant
```

## Properties<a name="aws-properties-iotevents-alarmmodel-assetpropertyvalue-properties"></a>

`Quality` <a name="cfn-iotevents-alarmmodel-assetpropertyvalue-quality"></a>
The quality of the asset property value\. The value must be `'GOOD'`, `'BAD'`, or `'UNCERTAIN'`\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timestamp` <a name="cfn-iotevents-alarmmodel-assetpropertyvalue-timestamp"></a>
The timestamp associated with the asset property value\. The default is the current event time\.  
_Required_: No  
_Type_: [AssetPropertyTimestamp](aws-properties-iotevents-alarmmodel-assetpropertytimestamp.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-iotevents-alarmmodel-assetpropertyvalue-value"></a>
The value to send to an asset property\.  
_Required_: Yes  
_Type_: [AssetPropertyVariant](aws-properties-iotevents-alarmmodel-assetpropertyvariant.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)