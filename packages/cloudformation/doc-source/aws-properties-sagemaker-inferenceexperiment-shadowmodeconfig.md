# AWS::SageMaker::InferenceExperiment ShadowModeConfig<a name="aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig"></a>

The configuration of `ShadowMode` inference experiment type, which specifies a production variant to take all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests\. For the shadow variant it also specifies the percentage of requests that Amazon SageMaker replicates\.

## Syntax<a name="aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig-syntax.json"></a>

```
{
  "[ShadowModelVariants](#cfn-sagemaker-inferenceexperiment-shadowmodeconfig-shadowmodelvariants)" : [ ShadowModelVariantConfig, ... ],
  "[SourceModelVariantName](#cfn-sagemaker-inferenceexperiment-shadowmodeconfig-sourcemodelvariantname)" : String
}
```

### YAML<a name="aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig-syntax.yaml"></a>

```
  [ShadowModelVariants](#cfn-sagemaker-inferenceexperiment-shadowmodeconfig-shadowmodelvariants):
    - ShadowModelVariantConfig
  [SourceModelVariantName](#cfn-sagemaker-inferenceexperiment-shadowmodeconfig-sourcemodelvariantname): String
```

## Properties<a name="aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig-properties"></a>

`ShadowModelVariants` <a name="cfn-sagemaker-inferenceexperiment-shadowmodeconfig-shadowmodelvariants"></a>
List of shadow variant configurations\.  
_Required_: Yes  
_Type_: List of [ShadowModelVariantConfig](aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceModelVariantName` <a name="cfn-sagemaker-inferenceexperiment-shadowmodeconfig-sourcemodelvariantname"></a>
The name of the production variant, which takes all the inference requests\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9]([\-a-zA-Z0-9]*[a-zA-Z0-9])?`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
