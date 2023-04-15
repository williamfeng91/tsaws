# AWS::SageMaker::ModelExplainabilityJobDefinition ModelExplainabilityAppSpecification<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification"></a>

Docker container image configuration object for the model explainability job\.

## Syntax<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-syntax.json"></a>

```
{
  "[ConfigUri](#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-configuri)" : String,
  "[Environment](#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-environment)" : {Key : Value, ...},
  "[ImageUri](#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-imageuri)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-syntax.yaml"></a>

```
  [ConfigUri](#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-configuri): String
  [Environment](#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-environment):
    Key : Value
  [ImageUri](#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-imageuri): String
```

## Properties<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-properties"></a>

`ConfigUri` <a name="cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-configuri"></a>
JSON formatted S3 file that defines explainability parameters\. For more information on this JSON configuration file, see [Configure model explainability parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html)\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Environment` <a name="cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-environment"></a>
Sets the environment variables in the Docker container\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ImageUri` <a name="cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-imageuri"></a>
The container image to be run by the model explainability job\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `255`  
_Pattern_: `.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
