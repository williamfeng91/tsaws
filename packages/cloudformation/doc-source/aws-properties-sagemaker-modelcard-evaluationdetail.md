# AWS::SageMaker::ModelCard EvaluationDetail<a name="aws-properties-sagemaker-modelcard-evaluationdetail"></a>

The evaluation details of the model\.

## Syntax<a name="aws-properties-sagemaker-modelcard-evaluationdetail-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelcard-evaluationdetail-syntax.json"></a>

```
{
  "[Datasets](#cfn-sagemaker-modelcard-evaluationdetail-datasets)" : [ String, ... ],
  "[EvaluationJobArn](#cfn-sagemaker-modelcard-evaluationdetail-evaluationjobarn)" : String,
  "[EvaluationObservation](#cfn-sagemaker-modelcard-evaluationdetail-evaluationobservation)" : String,
  "[Metadata](#cfn-sagemaker-modelcard-evaluationdetail-metadata)" : {Key : Value, ...},
  "[MetricGroups](#cfn-sagemaker-modelcard-evaluationdetail-metricgroups)" : [ MetricGroup, ... ],
  "[Name](#cfn-sagemaker-modelcard-evaluationdetail-name)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelcard-evaluationdetail-syntax.yaml"></a>

```
  [Datasets](#cfn-sagemaker-modelcard-evaluationdetail-datasets):
    - String
  [EvaluationJobArn](#cfn-sagemaker-modelcard-evaluationdetail-evaluationjobarn): String
  [EvaluationObservation](#cfn-sagemaker-modelcard-evaluationdetail-evaluationobservation): String
  [Metadata](#cfn-sagemaker-modelcard-evaluationdetail-metadata):
    Key : Value
  [MetricGroups](#cfn-sagemaker-modelcard-evaluationdetail-metricgroups):
    - MetricGroup
  [Name](#cfn-sagemaker-modelcard-evaluationdetail-name): String
```

## Properties<a name="aws-properties-sagemaker-modelcard-evaluationdetail-properties"></a>

`Datasets` <a name="cfn-sagemaker-modelcard-evaluationdetail-datasets"></a>
The location of the datasets used to evaluate the model\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EvaluationJobArn` <a name="cfn-sagemaker-modelcard-evaluationdetail-evaluationjobarn"></a>
The Amazon Resource Name \(ARN\) of the evaluation job\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EvaluationObservation` <a name="cfn-sagemaker-modelcard-evaluationdetail-evaluationobservation"></a>
Any observations made during the model evaluation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Metadata` <a name="cfn-sagemaker-modelcard-evaluationdetail-metadata"></a>
Additional attributes associated with the evaluation results\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricGroups` <a name="cfn-sagemaker-modelcard-evaluationdetail-metricgroups"></a>
An evaluation Metric Group object\.  
_Required_: No  
_Type_: List of [MetricGroup](aws-properties-sagemaker-modelcard-metricgroup.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-sagemaker-modelcard-evaluationdetail-name"></a>
The evaluation job name\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
