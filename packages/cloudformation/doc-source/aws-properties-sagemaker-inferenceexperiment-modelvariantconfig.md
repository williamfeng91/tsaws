# AWS::SageMaker::InferenceExperiment ModelVariantConfig<a name="aws-properties-sagemaker-inferenceexperiment-modelvariantconfig"></a>

Contains information about the deployment options of a model\.

## Syntax<a name="aws-properties-sagemaker-inferenceexperiment-modelvariantconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-inferenceexperiment-modelvariantconfig-syntax.json"></a>

```
{
  "[InfrastructureConfig](#cfn-sagemaker-inferenceexperiment-modelvariantconfig-infrastructureconfig)" : ModelInfrastructureConfig,
  "[ModelName](#cfn-sagemaker-inferenceexperiment-modelvariantconfig-modelname)" : String,
  "[VariantName](#cfn-sagemaker-inferenceexperiment-modelvariantconfig-variantname)" : String
}
```

### YAML<a name="aws-properties-sagemaker-inferenceexperiment-modelvariantconfig-syntax.yaml"></a>

```
  [InfrastructureConfig](#cfn-sagemaker-inferenceexperiment-modelvariantconfig-infrastructureconfig):
    ModelInfrastructureConfig
  [ModelName](#cfn-sagemaker-inferenceexperiment-modelvariantconfig-modelname): String
  [VariantName](#cfn-sagemaker-inferenceexperiment-modelvariantconfig-variantname): String
```

## Properties<a name="aws-properties-sagemaker-inferenceexperiment-modelvariantconfig-properties"></a>

`InfrastructureConfig` <a name="cfn-sagemaker-inferenceexperiment-modelvariantconfig-infrastructureconfig"></a>
The configuration for the infrastructure that the model will be deployed to\.  
_Required_: Yes  
_Type_: [ModelInfrastructureConfig](aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ModelName` <a name="cfn-sagemaker-inferenceexperiment-modelvariantconfig-modelname"></a>
The name of the Amazon SageMaker Model entity\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VariantName` <a name="cfn-sagemaker-inferenceexperiment-modelvariantconfig-variantname"></a>
The name of the variant\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9]([\-a-zA-Z0-9]*[a-zA-Z0-9])?`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
