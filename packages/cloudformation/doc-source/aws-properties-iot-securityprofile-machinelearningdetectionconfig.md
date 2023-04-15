# AWS::IoT::SecurityProfile MachineLearningDetectionConfig<a name="aws-properties-iot-securityprofile-machinelearningdetectionconfig"></a>

The `MachineLearningDetectionConfig` property type controls confidence of the machine learning model\.

## Syntax<a name="aws-properties-iot-securityprofile-machinelearningdetectionconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iot-securityprofile-machinelearningdetectionconfig-syntax.json"></a>

```
{
  "[ConfidenceLevel](#cfn-iot-securityprofile-machinelearningdetectionconfig-confidencelevel)" : String
}
```

### YAML<a name="aws-properties-iot-securityprofile-machinelearningdetectionconfig-syntax.yaml"></a>

```
  [ConfidenceLevel](#cfn-iot-securityprofile-machinelearningdetectionconfig-confidencelevel): String
```

## Properties<a name="aws-properties-iot-securityprofile-machinelearningdetectionconfig-properties"></a>

`ConfidenceLevel` <a name="cfn-iot-securityprofile-machinelearningdetectionconfig-confidencelevel"></a>
The model confidence level\.  
There are three levels of confidence, `"high"`, `"medium"`, and `"low"`\.  
The higher the confidence level, the lower the sensitivity, and the lower the alarm frequency will be\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
