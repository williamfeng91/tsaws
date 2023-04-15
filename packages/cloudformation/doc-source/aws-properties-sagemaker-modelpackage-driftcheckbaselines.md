# AWS::SageMaker::ModelPackage DriftCheckBaselines<a name="aws-properties-sagemaker-modelpackage-driftcheckbaselines"></a>

Represents the drift check baselines that can be used when the model monitor is set using the model package\.

## Syntax<a name="aws-properties-sagemaker-modelpackage-driftcheckbaselines-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelpackage-driftcheckbaselines-syntax.json"></a>

```
{
  "[Bias](#cfn-sagemaker-modelpackage-driftcheckbaselines-bias)" : DriftCheckBias,
  "[Explainability](#cfn-sagemaker-modelpackage-driftcheckbaselines-explainability)" : DriftCheckExplainability,
  "[ModelDataQuality](#cfn-sagemaker-modelpackage-driftcheckbaselines-modeldataquality)" : DriftCheckModelDataQuality,
  "[ModelQuality](#cfn-sagemaker-modelpackage-driftcheckbaselines-modelquality)" : DriftCheckModelQuality
}
```

### YAML<a name="aws-properties-sagemaker-modelpackage-driftcheckbaselines-syntax.yaml"></a>

```
  [Bias](#cfn-sagemaker-modelpackage-driftcheckbaselines-bias):
    DriftCheckBias
  [Explainability](#cfn-sagemaker-modelpackage-driftcheckbaselines-explainability):
    DriftCheckExplainability
  [ModelDataQuality](#cfn-sagemaker-modelpackage-driftcheckbaselines-modeldataquality):
    DriftCheckModelDataQuality
  [ModelQuality](#cfn-sagemaker-modelpackage-driftcheckbaselines-modelquality):
    DriftCheckModelQuality
```

## Properties<a name="aws-properties-sagemaker-modelpackage-driftcheckbaselines-properties"></a>

`Bias` <a name="cfn-sagemaker-modelpackage-driftcheckbaselines-bias"></a>
Represents the drift check bias baselines that can be used when the model monitor is set using the model package\.  
_Required_: No  
_Type_: [DriftCheckBias](aws-properties-sagemaker-modelpackage-driftcheckbias.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Explainability` <a name="cfn-sagemaker-modelpackage-driftcheckbaselines-explainability"></a>
Represents the drift check explainability baselines that can be used when the model monitor is set using the model package\.  
_Required_: No  
_Type_: [DriftCheckExplainability](aws-properties-sagemaker-modelpackage-driftcheckexplainability.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ModelDataQuality` <a name="cfn-sagemaker-modelpackage-driftcheckbaselines-modeldataquality"></a>
Represents the drift check model data quality baselines that can be used when the model monitor is set using the model package\.  
_Required_: No  
_Type_: [DriftCheckModelDataQuality](aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ModelQuality` <a name="cfn-sagemaker-modelpackage-driftcheckbaselines-modelquality"></a>
Represents the drift check model quality baselines that can be used when the model monitor is set using the model package\.  
_Required_: No  
_Type_: [DriftCheckModelQuality](aws-properties-sagemaker-modelpackage-driftcheckmodelquality.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
