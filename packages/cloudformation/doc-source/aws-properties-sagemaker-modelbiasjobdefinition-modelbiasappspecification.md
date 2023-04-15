# AWS::SageMaker::ModelBiasJobDefinition ModelBiasAppSpecification<a name="aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification"></a>

Docker container image configuration object for the model bias job\.

## Syntax<a name="aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification-syntax.json"></a>

```
{
  "[ConfigUri](#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-configuri)" : String,
  "[Environment](#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-environment)" : {Key : Value, ...},
  "[ImageUri](#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-imageuri)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification-syntax.yaml"></a>

```
  [ConfigUri](#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-configuri): String
  [Environment](#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-environment):
    Key : Value
  [ImageUri](#cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-imageuri): String
```

## Properties<a name="aws-properties-sagemaker-modelbiasjobdefinition-modelbiasappspecification-properties"></a>

`ConfigUri` <a name="cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-configuri"></a>
JSON formatted S3 file that defines bias parameters\. For more information on this JSON configuration file, see [Configure bias parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-bias-parameters.html)\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Environment` <a name="cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-environment"></a>
Sets the environment variables in the Docker container\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ImageUri` <a name="cfn-sagemaker-modelbiasjobdefinition-modelbiasappspecification-imageuri"></a>
The container image to be run by the model bias job\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `255`  
_Pattern_: `.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
