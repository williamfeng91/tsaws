# AWS::SageMaker::AppImageConfig KernelSpec<a name="aws-properties-sagemaker-appimageconfig-kernelspec"></a>

The specification of a Jupyter kernel\.

## Syntax<a name="aws-properties-sagemaker-appimageconfig-kernelspec-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-appimageconfig-kernelspec-syntax.json"></a>

```
{
  "[DisplayName](#cfn-sagemaker-appimageconfig-kernelspec-displayname)" : String,
  "[Name](#cfn-sagemaker-appimageconfig-kernelspec-name)" : String
}
```

### YAML<a name="aws-properties-sagemaker-appimageconfig-kernelspec-syntax.yaml"></a>

```
  [DisplayName](#cfn-sagemaker-appimageconfig-kernelspec-displayname): String
  [Name](#cfn-sagemaker-appimageconfig-kernelspec-name): String
```

## Properties<a name="aws-properties-sagemaker-appimageconfig-kernelspec-properties"></a>

`DisplayName` <a name="cfn-sagemaker-appimageconfig-kernelspec-displayname"></a>
The display name of the kernel\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-sagemaker-appimageconfig-kernelspec-name"></a>
The name of the Jupyter kernel in the image\. This value is case sensitive\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
