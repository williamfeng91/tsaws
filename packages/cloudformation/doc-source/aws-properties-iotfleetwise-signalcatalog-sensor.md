# AWS::IoTFleetWise::SignalCatalog Sensor<a name="aws-properties-iotfleetwise-signalcatalog-sensor"></a>

An input component that reports the environmental condition of a vehicle\.

**Note**  
You can collect data about fluid levels, temperatures, vibrations, or battery voltage from sensors\.

## Syntax<a name="aws-properties-iotfleetwise-signalcatalog-sensor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-signalcatalog-sensor-syntax.json"></a>

```
{
  "[AllowedValues](#cfn-iotfleetwise-signalcatalog-sensor-allowedvalues)" : [ String, ... ],
  "[DataType](#cfn-iotfleetwise-signalcatalog-sensor-datatype)" : String,
  "[Description](#cfn-iotfleetwise-signalcatalog-sensor-description)" : String,
  "[FullyQualifiedName](#cfn-iotfleetwise-signalcatalog-sensor-fullyqualifiedname)" : String,
  "[Max](#cfn-iotfleetwise-signalcatalog-sensor-max)" : Double,
  "[Min](#cfn-iotfleetwise-signalcatalog-sensor-min)" : Double,
  "[Unit](#cfn-iotfleetwise-signalcatalog-sensor-unit)" : String
}
```

### YAML<a name="aws-properties-iotfleetwise-signalcatalog-sensor-syntax.yaml"></a>

```
  [AllowedValues](#cfn-iotfleetwise-signalcatalog-sensor-allowedvalues):
    - String
  [DataType](#cfn-iotfleetwise-signalcatalog-sensor-datatype): String
  [Description](#cfn-iotfleetwise-signalcatalog-sensor-description): String
  [FullyQualifiedName](#cfn-iotfleetwise-signalcatalog-sensor-fullyqualifiedname): String
  [Max](#cfn-iotfleetwise-signalcatalog-sensor-max): Double
  [Min](#cfn-iotfleetwise-signalcatalog-sensor-min): Double
  [Unit](#cfn-iotfleetwise-signalcatalog-sensor-unit): String
```

## Properties<a name="aws-properties-iotfleetwise-signalcatalog-sensor-properties"></a>

`AllowedValues` <a name="cfn-iotfleetwise-signalcatalog-sensor-allowedvalues"></a>
A list of possible values a sensor can take\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataType` <a name="cfn-iotfleetwise-signalcatalog-sensor-datatype"></a>
The specified data type of the sensor\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `BOOLEAN | BOOLEAN_ARRAY | DOUBLE | DOUBLE_ARRAY | FLOAT | FLOAT_ARRAY | INT16 | INT16_ARRAY | INT32 | INT32_ARRAY | INT64 | INT64_ARRAY | INT8 | INT8_ARRAY | STRING | STRING_ARRAY | UINT16 | UINT16_ARRAY | UINT32 | UINT32_ARRAY | UINT64 | UINT64_ARRAY | UINT8 | UINT8_ARRAY | UNIX_TIMESTAMP | UNIX_TIMESTAMP_ARRAY | UNKNOWN`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-iotfleetwise-signalcatalog-sensor-description"></a>
A brief description of a sensor\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `[^\u0000-\u001F\u007F]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FullyQualifiedName` <a name="cfn-iotfleetwise-signalcatalog-sensor-fullyqualifiedname"></a>
The fully qualified name of the sensor\. For example, the fully qualified name of a sensor might be `Vehicle.Body.Engine.Battery`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Max` <a name="cfn-iotfleetwise-signalcatalog-sensor-max"></a>
The specified possible maximum value of the sensor\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Min` <a name="cfn-iotfleetwise-signalcatalog-sensor-min"></a>
The specified possible minimum value of the sensor\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Unit` <a name="cfn-iotfleetwise-signalcatalog-sensor-unit"></a>
The scientific unit of measurement for data collected by the sensor\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
