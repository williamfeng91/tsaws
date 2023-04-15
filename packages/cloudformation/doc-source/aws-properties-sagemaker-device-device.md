# AWS::SageMaker::Device Device<a name="aws-properties-sagemaker-device-device"></a>

Information of a particular device\.

## Syntax<a name="aws-properties-sagemaker-device-device-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-device-device-syntax.json"></a>

```
{
  "[Description](#cfn-sagemaker-device-device-description)" : String,
  "[DeviceName](#cfn-sagemaker-device-device-devicename)" : String,
  "[IotThingName](#cfn-sagemaker-device-device-iotthingname)" : String
}
```

### YAML<a name="aws-properties-sagemaker-device-device-syntax.yaml"></a>

```
  [Description](#cfn-sagemaker-device-device-description): String
  [DeviceName](#cfn-sagemaker-device-device-devicename): String
  [IotThingName](#cfn-sagemaker-device-device-iotthingname): String
```

## Properties<a name="aws-properties-sagemaker-device-device-properties"></a>

`Description` <a name="cfn-sagemaker-device-device-description"></a>
Description of the device\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `40`  
_Pattern_: `[\S\s]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeviceName` <a name="cfn-sagemaker-device-device-devicename"></a>
The name of the device\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`IotThingName` <a name="cfn-sagemaker-device-device-iotthingname"></a>
AWS Internet of Things \(IoT\) object name\.  
_Required_: No  
_Type_: String  
_Maximum_: `128`  
_Pattern_: `[a-zA-Z0-9:_-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
