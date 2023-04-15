# AWS::IoTFleetWise::SignalCatalog Attribute<a name="aws-properties-iotfleetwise-signalcatalog-attribute"></a>

A signal that represents static information about the vehicle, such as engine type or manufacturing date\.

## Syntax<a name="aws-properties-iotfleetwise-signalcatalog-attribute-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-signalcatalog-attribute-syntax.json"></a>

```
{
  "[AllowedValues](#cfn-iotfleetwise-signalcatalog-attribute-allowedvalues)" : [ String, ... ],
  "[AssignedValue](#cfn-iotfleetwise-signalcatalog-attribute-assignedvalue)" : String,
  "[DataType](#cfn-iotfleetwise-signalcatalog-attribute-datatype)" : String,
  "[DefaultValue](#cfn-iotfleetwise-signalcatalog-attribute-defaultvalue)" : String,
  "[Description](#cfn-iotfleetwise-signalcatalog-attribute-description)" : String,
  "[FullyQualifiedName](#cfn-iotfleetwise-signalcatalog-attribute-fullyqualifiedname)" : String,
  "[Max](#cfn-iotfleetwise-signalcatalog-attribute-max)" : Double,
  "[Min](#cfn-iotfleetwise-signalcatalog-attribute-min)" : Double,
  "[Unit](#cfn-iotfleetwise-signalcatalog-attribute-unit)" : String
}
```

### YAML<a name="aws-properties-iotfleetwise-signalcatalog-attribute-syntax.yaml"></a>

```
  [AllowedValues](#cfn-iotfleetwise-signalcatalog-attribute-allowedvalues):
    - String
  [AssignedValue](#cfn-iotfleetwise-signalcatalog-attribute-assignedvalue): String
  [DataType](#cfn-iotfleetwise-signalcatalog-attribute-datatype): String
  [DefaultValue](#cfn-iotfleetwise-signalcatalog-attribute-defaultvalue): String
  [Description](#cfn-iotfleetwise-signalcatalog-attribute-description): String
  [FullyQualifiedName](#cfn-iotfleetwise-signalcatalog-attribute-fullyqualifiedname): String
  [Max](#cfn-iotfleetwise-signalcatalog-attribute-max): Double
  [Min](#cfn-iotfleetwise-signalcatalog-attribute-min): Double
  [Unit](#cfn-iotfleetwise-signalcatalog-attribute-unit): String
```

## Properties<a name="aws-properties-iotfleetwise-signalcatalog-attribute-properties"></a>

`AllowedValues` <a name="cfn-iotfleetwise-signalcatalog-attribute-allowedvalues"></a>
A list of possible values an attribute can be assigned\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AssignedValue` <a name="cfn-iotfleetwise-signalcatalog-attribute-assignedvalue"></a>
A specified value for the attribute\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataType` <a name="cfn-iotfleetwise-signalcatalog-attribute-datatype"></a>
The specified data type of the attribute\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `BOOLEAN | BOOLEAN_ARRAY | DOUBLE | DOUBLE_ARRAY | FLOAT | FLOAT_ARRAY | INT16 | INT16_ARRAY | INT32 | INT32_ARRAY | INT64 | INT64_ARRAY | INT8 | INT8_ARRAY | STRING | STRING_ARRAY | UINT16 | UINT16_ARRAY | UINT32 | UINT32_ARRAY | UINT64 | UINT64_ARRAY | UINT8 | UINT8_ARRAY | UNIX_TIMESTAMP | UNIX_TIMESTAMP_ARRAY | UNKNOWN`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DefaultValue` <a name="cfn-iotfleetwise-signalcatalog-attribute-defaultvalue"></a>
The default value of the attribute\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-iotfleetwise-signalcatalog-attribute-description"></a>
A brief description of the attribute\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `[^\u0000-\u001F\u007F]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FullyQualifiedName` <a name="cfn-iotfleetwise-signalcatalog-attribute-fullyqualifiedname"></a>
The fully qualified name of the attribute\. For example, the fully qualified name of an attribute might be `Vehicle.Body.Engine.Type`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Max` <a name="cfn-iotfleetwise-signalcatalog-attribute-max"></a>
The specified possible maximum value of the attribute\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Min` <a name="cfn-iotfleetwise-signalcatalog-attribute-min"></a>
The specified possible minimum value of the attribute\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Unit` <a name="cfn-iotfleetwise-signalcatalog-attribute-unit"></a>
The scientific unit for the attribute\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
