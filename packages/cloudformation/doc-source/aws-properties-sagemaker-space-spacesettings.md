# AWS::SageMaker::Space SpaceSettings<a name="aws-properties-sagemaker-space-spacesettings"></a>

A collection of space settings\.

## Syntax<a name="aws-properties-sagemaker-space-spacesettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-space-spacesettings-syntax.json"></a>

```
{
  "[JupyterServerAppSettings](#cfn-sagemaker-space-spacesettings-jupyterserverappsettings)" : JupyterServerAppSettings,
  "[KernelGatewayAppSettings](#cfn-sagemaker-space-spacesettings-kernelgatewayappsettings)" : KernelGatewayAppSettings
}
```

### YAML<a name="aws-properties-sagemaker-space-spacesettings-syntax.yaml"></a>

```
  [JupyterServerAppSettings](#cfn-sagemaker-space-spacesettings-jupyterserverappsettings):
    JupyterServerAppSettings
  [KernelGatewayAppSettings](#cfn-sagemaker-space-spacesettings-kernelgatewayappsettings):
    KernelGatewayAppSettings
```

## Properties<a name="aws-properties-sagemaker-space-spacesettings-properties"></a>

`JupyterServerAppSettings` <a name="cfn-sagemaker-space-spacesettings-jupyterserverappsettings"></a>
The JupyterServer app settings\.  
_Required_: No  
_Type_: [JupyterServerAppSettings](aws-properties-sagemaker-space-jupyterserverappsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KernelGatewayAppSettings` <a name="cfn-sagemaker-space-spacesettings-kernelgatewayappsettings"></a>
The KernelGateway app settings\.  
_Required_: No  
_Type_: [KernelGatewayAppSettings](aws-properties-sagemaker-space-kernelgatewayappsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
