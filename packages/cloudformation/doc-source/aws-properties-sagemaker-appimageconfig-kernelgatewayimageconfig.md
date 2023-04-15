# AWS::SageMaker::AppImageConfig KernelGatewayImageConfig<a name="aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig"></a>

The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app\.

## Syntax<a name="aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig-syntax.json"></a>

```
{
  "[FileSystemConfig](#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-filesystemconfig)" : FileSystemConfig,
  "[KernelSpecs](#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-kernelspecs)" : [ KernelSpec, ... ]
}
```

### YAML<a name="aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig-syntax.yaml"></a>

```
  [FileSystemConfig](#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-filesystemconfig):
    FileSystemConfig
  [KernelSpecs](#cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-kernelspecs):
    - KernelSpec
```

## Properties<a name="aws-properties-sagemaker-appimageconfig-kernelgatewayimageconfig-properties"></a>

`FileSystemConfig` <a name="cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-filesystemconfig"></a>
The Amazon Elastic File System \(EFS\) storage configuration for a SageMaker image\.  
_Required_: No  
_Type_: [FileSystemConfig](aws-properties-sagemaker-appimageconfig-filesystemconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KernelSpecs` <a name="cfn-sagemaker-appimageconfig-kernelgatewayimageconfig-kernelspecs"></a>
The specification of the Jupyter kernels in the image\.  
_Required_: Yes  
_Type_: List of [KernelSpec](aws-properties-sagemaker-appimageconfig-kernelspec.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
