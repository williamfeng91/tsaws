# AWS::SageMaker::ModelPackage ModelMetrics<a name="aws-properties-sagemaker-modelpackage-modelmetrics"></a>

Contains metrics captured from a model\.

## Syntax<a name="aws-properties-sagemaker-modelpackage-modelmetrics-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelpackage-modelmetrics-syntax.json"></a>

```
{
  "[Bias](#cfn-sagemaker-modelpackage-modelmetrics-bias)" : Bias,
  "[Explainability](#cfn-sagemaker-modelpackage-modelmetrics-explainability)" : Explainability,
  "[ModelDataQuality](#cfn-sagemaker-modelpackage-modelmetrics-modeldataquality)" : ModelDataQuality,
  "[ModelQuality](#cfn-sagemaker-modelpackage-modelmetrics-modelquality)" : ModelQuality
}
```

### YAML<a name="aws-properties-sagemaker-modelpackage-modelmetrics-syntax.yaml"></a>

```
  [Bias](#cfn-sagemaker-modelpackage-modelmetrics-bias):
    Bias
  [Explainability](#cfn-sagemaker-modelpackage-modelmetrics-explainability):
    Explainability
  [ModelDataQuality](#cfn-sagemaker-modelpackage-modelmetrics-modeldataquality):
    ModelDataQuality
  [ModelQuality](#cfn-sagemaker-modelpackage-modelmetrics-modelquality):
    ModelQuality
```

## Properties<a name="aws-properties-sagemaker-modelpackage-modelmetrics-properties"></a>

`Bias` <a name="cfn-sagemaker-modelpackage-modelmetrics-bias"></a>
Metrics that measure bais in a model\.  
_Required_: No  
_Type_: [Bias](aws-properties-sagemaker-modelpackage-bias.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Explainability` <a name="cfn-sagemaker-modelpackage-modelmetrics-explainability"></a>
Metrics that help explain a model\.  
_Required_: No  
_Type_: [Explainability](aws-properties-sagemaker-modelpackage-explainability.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ModelDataQuality` <a name="cfn-sagemaker-modelpackage-modelmetrics-modeldataquality"></a>
Metrics that measure the quality of the input data for a model\.  
_Required_: No  
_Type_: [ModelDataQuality](aws-properties-sagemaker-modelpackage-modeldataquality.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ModelQuality` <a name="cfn-sagemaker-modelpackage-modelmetrics-modelquality"></a>
Metrics that measure the quality of a model\.  
_Required_: No  
_Type_: [ModelQuality](aws-properties-sagemaker-modelpackage-modelquality.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
