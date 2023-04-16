# AWS::SageMaker::Domain DefaultSpaceSettings<a name="aws-properties-sagemaker-domain-defaultspacesettings"></a>

A collection of settings that apply to spaces created in the Domain\.

## Syntax<a name="aws-properties-sagemaker-domain-defaultspacesettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-domain-defaultspacesettings-syntax.json"></a>

```
{
  "[ExecutionRole](#cfn-sagemaker-domain-defaultspacesettings-executionrole)" : String,
  "[JupyterServerAppSettings](#cfn-sagemaker-domain-defaultspacesettings-jupyterserverappsettings)" : JupyterServerAppSettings,
  "[KernelGatewayAppSettings](#cfn-sagemaker-domain-defaultspacesettings-kernelgatewayappsettings)" : KernelGatewayAppSettings,
  "[SecurityGroups](#cfn-sagemaker-domain-defaultspacesettings-securitygroups)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-sagemaker-domain-defaultspacesettings-syntax.yaml"></a>

```
  [ExecutionRole](#cfn-sagemaker-domain-defaultspacesettings-executionrole): String
  [JupyterServerAppSettings](#cfn-sagemaker-domain-defaultspacesettings-jupyterserverappsettings):
    JupyterServerAppSettings
  [KernelGatewayAppSettings](#cfn-sagemaker-domain-defaultspacesettings-kernelgatewayappsettings):
    KernelGatewayAppSettings
  [SecurityGroups](#cfn-sagemaker-domain-defaultspacesettings-securitygroups):
    - String
```

## Properties<a name="aws-properties-sagemaker-domain-defaultspacesettings-properties"></a>

`ExecutionRole` <a name="cfn-sagemaker-domain-defaultspacesettings-executionrole"></a>
The execution role for the space\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`JupyterServerAppSettings` <a name="cfn-sagemaker-domain-defaultspacesettings-jupyterserverappsettings"></a>
The JupyterServer app settings\.  
_Required_: No  
_Type_: [JupyterServerAppSettings](aws-properties-sagemaker-domain-jupyterserverappsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KernelGatewayAppSettings` <a name="cfn-sagemaker-domain-defaultspacesettings-kernelgatewayappsettings"></a>
The KernelGateway app settings\.  
_Required_: No  
_Type_: [KernelGatewayAppSettings](aws-properties-sagemaker-domain-kernelgatewayappsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecurityGroups` <a name="cfn-sagemaker-domain-defaultspacesettings-securitygroups"></a>
The security groups for the Amazon Virtual Private Cloud that the space uses for communication\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `5`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
