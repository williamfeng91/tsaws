# AWS::SageMaker::ModelCard TrainingMetric<a name="aws-properties-sagemaker-modelcard-trainingmetric"></a>

A result from a SageMaker training job\.

## Syntax<a name="aws-properties-sagemaker-modelcard-trainingmetric-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelcard-trainingmetric-syntax.json"></a>

```
{
  "[Name](#cfn-sagemaker-modelcard-trainingmetric-name)" : String,
  "[Notes](#cfn-sagemaker-modelcard-trainingmetric-notes)" : String,
  "[Value](#cfn-sagemaker-modelcard-trainingmetric-value)" : Double
}
```

### YAML<a name="aws-properties-sagemaker-modelcard-trainingmetric-syntax.yaml"></a>

```
  [Name](#cfn-sagemaker-modelcard-trainingmetric-name): String
  [Notes](#cfn-sagemaker-modelcard-trainingmetric-notes): String
  [Value](#cfn-sagemaker-modelcard-trainingmetric-value): Double
```

## Properties<a name="aws-properties-sagemaker-modelcard-trainingmetric-properties"></a>

`Name` <a name="cfn-sagemaker-modelcard-trainingmetric-name"></a>
The name of the result from the SageMaker training job\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Notes` <a name="cfn-sagemaker-modelcard-trainingmetric-notes"></a>
Any additional notes describing the result of the training job\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-sagemaker-modelcard-trainingmetric-value"></a>
The value of a result from the SageMaker training job\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
