# AWS::SageMaker::NotebookInstanceLifecycleConfig NotebookInstanceLifecycleHook<a name="aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook"></a>

Specifies the notebook instance lifecycle configuration script\. Each lifecycle configuration script has a limit of 16384 characters\.

## Syntax<a name="aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-syntax.json"></a>

```
{
  "[Content](#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-content)" : String
}
```

### YAML<a name="aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-syntax.yaml"></a>

```
  [Content](#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-content): String
```

## Properties<a name="aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-properties"></a>

`Content` <a name="cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-content"></a>
A base64\-encoded string that contains a shell script for a notebook instance lifecycle configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `16384`  
_Pattern_: `[\S\s]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
