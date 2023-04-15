# AWS::SageMaker::ModelCard TrainingJobDetails<a name="aws-properties-sagemaker-modelcard-trainingjobdetails"></a>

The overview of a training job\.

## Syntax<a name="aws-properties-sagemaker-modelcard-trainingjobdetails-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelcard-trainingjobdetails-syntax.json"></a>

```
{
  "[HyperParameters](#cfn-sagemaker-modelcard-trainingjobdetails-hyperparameters)" : [ TrainingHyperParameter, ... ],
  "[TrainingArn](#cfn-sagemaker-modelcard-trainingjobdetails-trainingarn)" : String,
  "[TrainingDatasets](#cfn-sagemaker-modelcard-trainingjobdetails-trainingdatasets)" : [ String, ... ],
  "[TrainingEnvironment](#cfn-sagemaker-modelcard-trainingjobdetails-trainingenvironment)" : TrainingEnvironment,
  "[TrainingMetrics](#cfn-sagemaker-modelcard-trainingjobdetails-trainingmetrics)" : [ TrainingMetric, ... ],
  "[UserProvidedHyperParameters](#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedhyperparameters)" : [ TrainingHyperParameter, ... ],
  "[UserProvidedTrainingMetrics](#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedtrainingmetrics)" : [ TrainingMetric, ... ]
}
```

### YAML<a name="aws-properties-sagemaker-modelcard-trainingjobdetails-syntax.yaml"></a>

```
  [HyperParameters](#cfn-sagemaker-modelcard-trainingjobdetails-hyperparameters):
    - TrainingHyperParameter
  [TrainingArn](#cfn-sagemaker-modelcard-trainingjobdetails-trainingarn): String
  [TrainingDatasets](#cfn-sagemaker-modelcard-trainingjobdetails-trainingdatasets):
    - String
  [TrainingEnvironment](#cfn-sagemaker-modelcard-trainingjobdetails-trainingenvironment):
    TrainingEnvironment
  [TrainingMetrics](#cfn-sagemaker-modelcard-trainingjobdetails-trainingmetrics):
    - TrainingMetric
  [UserProvidedHyperParameters](#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedhyperparameters):
    - TrainingHyperParameter
  [UserProvidedTrainingMetrics](#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedtrainingmetrics):
    - TrainingMetric
```

## Properties<a name="aws-properties-sagemaker-modelcard-trainingjobdetails-properties"></a>

`HyperParameters` <a name="cfn-sagemaker-modelcard-trainingjobdetails-hyperparameters"></a>
The hyper parameters used in the training job\.  
_Required_: No  
_Type_: List of [TrainingHyperParameter](aws-properties-sagemaker-modelcard-traininghyperparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrainingArn` <a name="cfn-sagemaker-modelcard-trainingjobdetails-trainingarn"></a>
The SageMaker training job Amazon Resource Name \(ARN\)  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrainingDatasets` <a name="cfn-sagemaker-modelcard-trainingjobdetails-trainingdatasets"></a>
The location of the datasets used to train the model\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrainingEnvironment` <a name="cfn-sagemaker-modelcard-trainingjobdetails-trainingenvironment"></a>
The SageMaker training job image URI\.  
_Required_: No  
_Type_: [TrainingEnvironment](aws-properties-sagemaker-modelcard-trainingenvironment.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrainingMetrics` <a name="cfn-sagemaker-modelcard-trainingjobdetails-trainingmetrics"></a>
The SageMaker training job results\.  
_Required_: No  
_Type_: List of [TrainingMetric](aws-properties-sagemaker-modelcard-trainingmetric.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserProvidedHyperParameters` <a name="cfn-sagemaker-modelcard-trainingjobdetails-userprovidedhyperparameters"></a>
Additional hyper parameters that you've specified when training the model\.  
_Required_: No  
_Type_: List of [TrainingHyperParameter](aws-properties-sagemaker-modelcard-traininghyperparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserProvidedTrainingMetrics` <a name="cfn-sagemaker-modelcard-trainingjobdetails-userprovidedtrainingmetrics"></a>
Custom training job results\.  
_Required_: No  
_Type_: List of [TrainingMetric](aws-properties-sagemaker-modelcard-trainingmetric.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
