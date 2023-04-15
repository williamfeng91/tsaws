# AWS::Greengrass::ResourceDefinition ResourceDataContainer<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer"></a>

<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer-description"></a>A container for resource data, which defines the resource type\. The container takes only one of the following supported resource data types: `LocalDeviceResourceData`, `LocalVolumeResourceData`, `SageMakerMachineLearningModelResourceData`, `S3MachineLearningModelResourceData`, or `SecretsManagerSecretResourceData`\.

**Note**  
Only one resource type can be defined for a `ResourceDataContainer` instance\.

<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer-inheritance"></a> In an AWS CloudFormation template, `ResourceDataContainer` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html) property type\.

## Syntax<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer-syntax.json"></a>

```
{
  "[LocalDeviceResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-localdeviceresourcedata)" : LocalDeviceResourceData,
  "[LocalVolumeResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-localvolumeresourcedata)" : LocalVolumeResourceData,
  "[S3MachineLearningModelResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-s3machinelearningmodelresourcedata)" : S3MachineLearningModelResourceData,
  "[SageMakerMachineLearningModelResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-sagemakermachinelearningmodelresourcedata)" : SageMakerMachineLearningModelResourceData,
  "[SecretsManagerSecretResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-secretsmanagersecretresourcedata)" : SecretsManagerSecretResourceData
}
```

### YAML<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer-syntax.yaml"></a>

```
  [LocalDeviceResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-localdeviceresourcedata):
    LocalDeviceResourceData
  [LocalVolumeResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-localvolumeresourcedata):
    LocalVolumeResourceData
  [S3MachineLearningModelResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-s3machinelearningmodelresourcedata):
    S3MachineLearningModelResourceData
  [SageMakerMachineLearningModelResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-sagemakermachinelearningmodelresourcedata):
    SageMakerMachineLearningModelResourceData
  [SecretsManagerSecretResourceData](#cfn-greengrass-resourcedefinition-resourcedatacontainer-secretsmanagersecretresourcedata):
    SecretsManagerSecretResourceData
```

## Properties<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer-properties"></a>

`LocalDeviceResourceData` <a name="cfn-greengrass-resourcedefinition-resourcedatacontainer-localdeviceresourcedata"></a>
Settings for a local device resource\.  
_Required_: No  
_Type_: [LocalDeviceResourceData](aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`LocalVolumeResourceData` <a name="cfn-greengrass-resourcedefinition-resourcedatacontainer-localvolumeresourcedata"></a>
Settings for a local volume resource\.  
_Required_: No  
_Type_: [LocalVolumeResourceData](aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3MachineLearningModelResourceData` <a name="cfn-greengrass-resourcedefinition-resourcedatacontainer-s3machinelearningmodelresourcedata"></a>
Settings for a machine learning resource stored in Amazon S3\.  
_Required_: No  
_Type_: [S3MachineLearningModelResourceData](aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SageMakerMachineLearningModelResourceData` <a name="cfn-greengrass-resourcedefinition-resourcedatacontainer-sagemakermachinelearningmodelresourcedata"></a>
Settings for a machine learning resource saved as an SageMaker training job\.  
_Required_: No  
_Type_: [SageMakerMachineLearningModelResourceData](aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SecretsManagerSecretResourceData` <a name="cfn-greengrass-resourcedefinition-resourcedatacontainer-secretsmanagersecretresourcedata"></a>
Settings for a secret resource\.  
_Required_: No  
_Type_: [SecretsManagerSecretResourceData](aws-properties-greengrass-resourcedefinition-secretsmanagersecretresourcedata.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## See also<a name="aws-properties-greengrass-resourcedefinition-resourcedatacontainer--seealso"></a>

- [ResourceDataContainer](https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resourcedatacontainer.html) in the _ AWS IoT Greengrass Version 1 API Reference _
- [AWS IoT Greengrass Version 1 Developer Guide](https://docs.aws.amazon.com/greengrass/latest/developerguide/)
