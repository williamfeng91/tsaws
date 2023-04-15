# AWS::Greengrass::ResourceDefinitionVersion SageMakerMachineLearningModelResourceData<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata"></a>

<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-description"></a>Settings for an Secrets Manager machine learning resource\. For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/latest/developerguide/ml-inference.html) in the _AWS IoT Greengrass Version 1 Developer Guide_\.

<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-inheritance"></a> In an AWS CloudFormation template, `SageMakerMachineLearningModelResourceData` can be used in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type\.

## Syntax<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-syntax.json"></a>

```
{
  "[DestinationPath](#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-destinationpath)" : String,
  "[OwnerSetting](#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-ownersetting)" : ResourceDownloadOwnerSetting,
  "[SageMakerJobArn](#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-sagemakerjobarn)" : String
}
```

### YAML<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-syntax.yaml"></a>

```
  [DestinationPath](#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-destinationpath): String
  [OwnerSetting](#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-ownersetting):
    ResourceDownloadOwnerSetting
  [SageMakerJobArn](#cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-sagemakerjobarn): String
```

## Properties<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-properties"></a>

`DestinationPath` <a name="cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-destinationpath"></a>
The absolute local path of the resource inside the Lambda environment\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`OwnerSetting` <a name="cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-ownersetting"></a>
The owner setting for the downloaded machine learning resource\. For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/latest/developerguide/access-ml-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_\.  
_Required_: No  
_Type_: [ResourceDownloadOwnerSetting](aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SageMakerJobArn` <a name="cfn-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata-sagemakerjobarn"></a>
The Amazon Resource Name \(ARN\) of the Amazon SageMaker training job that represents the source model\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## See also<a name="aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata--seealso"></a>

- [SageMakerMachineLearningModelResourceData](https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-sagemakermachinelearningmodelresourcedata.html) in the _ AWS IoT Greengrass Version 1 API Reference _
- [AWS IoT Greengrass Version 1 Developer Guide](https://docs.aws.amazon.com/greengrass/latest/developerguide/)
