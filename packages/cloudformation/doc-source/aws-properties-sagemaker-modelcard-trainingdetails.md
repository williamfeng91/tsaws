# AWS::SageMaker::ModelCard TrainingDetails<a name="aws-properties-sagemaker-modelcard-trainingdetails"></a>

The training details of the model

## Syntax<a name="aws-properties-sagemaker-modelcard-trainingdetails-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelcard-trainingdetails-syntax.json"></a>

```
{
  "[ObjectiveFunction](#cfn-sagemaker-modelcard-trainingdetails-objectivefunction)" : ObjectiveFunction,
  "[TrainingJobDetails](#cfn-sagemaker-modelcard-trainingdetails-trainingjobdetails)" : TrainingJobDetails,
  "[TrainingObservations](#cfn-sagemaker-modelcard-trainingdetails-trainingobservations)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelcard-trainingdetails-syntax.yaml"></a>

```
  [ObjectiveFunction](#cfn-sagemaker-modelcard-trainingdetails-objectivefunction):
    ObjectiveFunction
  [TrainingJobDetails](#cfn-sagemaker-modelcard-trainingdetails-trainingjobdetails):
    TrainingJobDetails
  [TrainingObservations](#cfn-sagemaker-modelcard-trainingdetails-trainingobservations): String
```

## Properties<a name="aws-properties-sagemaker-modelcard-trainingdetails-properties"></a>

`ObjectiveFunction` <a name="cfn-sagemaker-modelcard-trainingdetails-objectivefunction"></a>
The function that is optimized during model training\.  
_Required_: No  
_Type_: [ObjectiveFunction](aws-properties-sagemaker-modelcard-objectivefunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrainingJobDetails` <a name="cfn-sagemaker-modelcard-trainingdetails-trainingjobdetails"></a>
Details about any associated training jobs\.  
_Required_: No  
_Type_: [TrainingJobDetails](aws-properties-sagemaker-modelcard-trainingjobdetails.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrainingObservations` <a name="cfn-sagemaker-modelcard-trainingdetails-trainingobservations"></a>
Any observations about training\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
