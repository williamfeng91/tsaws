# AWS::IoTEvents::AlarmModel SimpleRule<a name="aws-properties-iotevents-alarmmodel-simplerule"></a>

A rule that compares an input property value to a threshold value with a comparison operator\.

## Syntax<a name="aws-properties-iotevents-alarmmodel-simplerule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-alarmmodel-simplerule-syntax.json"></a>

```
{
  "[ComparisonOperator](#cfn-iotevents-alarmmodel-simplerule-comparisonoperator)" : String,
  "[InputProperty](#cfn-iotevents-alarmmodel-simplerule-inputproperty)" : String,
  "[Threshold](#cfn-iotevents-alarmmodel-simplerule-threshold)" : String
}
```

### YAML<a name="aws-properties-iotevents-alarmmodel-simplerule-syntax.yaml"></a>

```
  [ComparisonOperator](#cfn-iotevents-alarmmodel-simplerule-comparisonoperator): String
  [InputProperty](#cfn-iotevents-alarmmodel-simplerule-inputproperty): String
  [Threshold](#cfn-iotevents-alarmmodel-simplerule-threshold): String
```

## Properties<a name="aws-properties-iotevents-alarmmodel-simplerule-properties"></a>

`ComparisonOperator` <a name="cfn-iotevents-alarmmodel-simplerule-comparisonoperator"></a>
The comparison operator\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `EQUAL | GREATER | GREATER_OR_EQUAL | LESS | LESS_OR_EQUAL | NOT_EQUAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputProperty` <a name="cfn-iotevents-alarmmodel-simplerule-inputproperty"></a>
The value on the left side of the comparison operator\. You can specify an AWS IoT Events input attribute as an input property\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Threshold` <a name="cfn-iotevents-alarmmodel-simplerule-threshold"></a>
The value on the right side of the comparison operator\. You can enter a number or specify an AWS IoT Events input attribute\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
