# AWS::LookoutEquipment::InferenceScheduler DataInputConfiguration<a name="aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration"></a>

<a name="aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration-description"></a>The `DataInputConfiguration` property type specifies Property description not available\. for an [AWS::LookoutEquipment::InferenceScheduler](aws-resource-lookoutequipment-inferencescheduler.md)\.

## Syntax<a name="aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration-syntax.json"></a>

```
{
  "[InferenceInputNameConfiguration](#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inferenceinputnameconfiguration)" : InputNameConfiguration,
  "[InputTimeZoneOffset](#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inputtimezoneoffset)" : String,
  "[S3InputConfiguration](#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-s3inputconfiguration)" : S3InputConfiguration
}
```

### YAML<a name="aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration-syntax.yaml"></a>

```
  [InferenceInputNameConfiguration](#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inferenceinputnameconfiguration):
    InputNameConfiguration
  [InputTimeZoneOffset](#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inputtimezoneoffset): String
  [S3InputConfiguration](#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-s3inputconfiguration):
    S3InputConfiguration
```

## Properties<a name="aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration-properties"></a>

`InferenceInputNameConfiguration` <a name="cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inferenceinputnameconfiguration"></a>
Property description not available\.  
_Required_: No  
_Type_: [InputNameConfiguration](aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputTimeZoneOffset` <a name="cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inputtimezoneoffset"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3InputConfiguration` <a name="cfn-lookoutequipment-inferencescheduler-datainputconfiguration-s3inputconfiguration"></a>
Property description not available\.  
_Required_: Yes  
_Type_: [S3InputConfiguration](aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
