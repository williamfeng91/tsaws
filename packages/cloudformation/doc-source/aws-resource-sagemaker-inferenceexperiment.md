# AWS::SageMaker::InferenceExperiment<a name="aws-resource-sagemaker-inferenceexperiment"></a>

Creates an inference experiment using the configurations specified in the request\.

Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint\. For more information about inference experiments, see [Shadow tests](https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html)\.

Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration\.

While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants\. For more information, see [View, monitor, and edit shadow tests](https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html)\.

## Syntax<a name="aws-resource-sagemaker-inferenceexperiment-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-sagemaker-inferenceexperiment-syntax.json"></a>

```
{
  "Type" : "AWS::SageMaker::InferenceExperiment",
  "Properties" : {
      "[DataStorageConfig](#cfn-sagemaker-inferenceexperiment-datastorageconfig)" : DataStorageConfig,
      "[Description](#cfn-sagemaker-inferenceexperiment-description)" : String,
      "[DesiredState](#cfn-sagemaker-inferenceexperiment-desiredstate)" : String,
      "[EndpointName](#cfn-sagemaker-inferenceexperiment-endpointname)" : String,
      "[KmsKey](#cfn-sagemaker-inferenceexperiment-kmskey)" : String,
      "[ModelVariants](#cfn-sagemaker-inferenceexperiment-modelvariants)" : [ ModelVariantConfig, ... ],
      "[Name](#cfn-sagemaker-inferenceexperiment-name)" : String,
      "[RoleArn](#cfn-sagemaker-inferenceexperiment-rolearn)" : String,
      "[Schedule](#cfn-sagemaker-inferenceexperiment-schedule)" : InferenceExperimentSchedule,
      "[ShadowModeConfig](#cfn-sagemaker-inferenceexperiment-shadowmodeconfig)" : ShadowModeConfig,
      "[StatusReason](#cfn-sagemaker-inferenceexperiment-statusreason)" : String,
      "[Tags](#cfn-sagemaker-inferenceexperiment-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[Type](#cfn-sagemaker-inferenceexperiment-type)" : String
    }
}
```

### YAML<a name="aws-resource-sagemaker-inferenceexperiment-syntax.yaml"></a>

```
Type: AWS::SageMaker::InferenceExperiment
Properties:
  [DataStorageConfig](#cfn-sagemaker-inferenceexperiment-datastorageconfig):
    DataStorageConfig
  [Description](#cfn-sagemaker-inferenceexperiment-description): String
  [DesiredState](#cfn-sagemaker-inferenceexperiment-desiredstate): String
  [EndpointName](#cfn-sagemaker-inferenceexperiment-endpointname): String
  [KmsKey](#cfn-sagemaker-inferenceexperiment-kmskey): String
  [ModelVariants](#cfn-sagemaker-inferenceexperiment-modelvariants):
    - ModelVariantConfig
  [Name](#cfn-sagemaker-inferenceexperiment-name): String
  [RoleArn](#cfn-sagemaker-inferenceexperiment-rolearn): String
  [Schedule](#cfn-sagemaker-inferenceexperiment-schedule):
    InferenceExperimentSchedule
  [ShadowModeConfig](#cfn-sagemaker-inferenceexperiment-shadowmodeconfig):
    ShadowModeConfig
  [StatusReason](#cfn-sagemaker-inferenceexperiment-statusreason): String
  [Tags](#cfn-sagemaker-inferenceexperiment-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [Type](#cfn-sagemaker-inferenceexperiment-type): String
```

## Properties<a name="aws-resource-sagemaker-inferenceexperiment-properties"></a>

`DataStorageConfig` <a name="cfn-sagemaker-inferenceexperiment-datastorageconfig"></a>
The Amazon S3 location and configuration for storing inference request and response data\.  
_Required_: No  
_Type_: [DataStorageConfig](aws-properties-sagemaker-inferenceexperiment-datastorageconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-sagemaker-inferenceexperiment-description"></a>
The description of the inference experiment\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DesiredState` <a name="cfn-sagemaker-inferenceexperiment-desiredstate"></a>
The desired state of the experiment after stopping\. The possible states are the following:

- `Completed`: The experiment completed successfully
- `Cancelled`: The experiment was canceled
  _Required_: No  
  _Type_: String  
  _Allowed values_: `Cancelled | Completed`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EndpointName` <a name="cfn-sagemaker-inferenceexperiment-endpointname"></a>
The name of the endpoint\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`KmsKey` <a name="cfn-sagemaker-inferenceexperiment-kmskey"></a>
The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server\-side encryption\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ModelVariants` <a name="cfn-sagemaker-inferenceexperiment-modelvariants"></a>
An array of `ModelVariantConfigSummary` objects\. There is one for each variant in the inference experiment\. Each `ModelVariantConfigSummary` object in the array describes the infrastructure configuration for deploying the corresponding variant\.  
_Required_: Yes  
_Type_: List of [ModelVariantConfig](aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-sagemaker-inferenceexperiment-name"></a>
The name of the inference experiment\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `120`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,119}`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RoleArn` <a name="cfn-sagemaker-inferenceexperiment-rolearn"></a>
The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Schedule` <a name="cfn-sagemaker-inferenceexperiment-schedule"></a>
The duration for which the inference experiment ran or will run\.  
The maximum duration that you can set for an inference experiment is 30 days\.  
_Required_: No  
_Type_: [InferenceExperimentSchedule](aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ShadowModeConfig` <a name="cfn-sagemaker-inferenceexperiment-shadowmodeconfig"></a>
The configuration of `ShadowMode` inference experiment type, which shows the production variant that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the inference requests\. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates\.  
_Required_: No  
_Type_: [ShadowModeConfig](aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StatusReason` <a name="cfn-sagemaker-inferenceexperiment-statusreason"></a>
The error message for the inference experiment status result\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-sagemaker-inferenceexperiment-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-sagemaker-inferenceexperiment-type"></a>
The type of the inference experiment\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ShadowMode`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-sagemaker-inferenceexperiment-return-values"></a>

### Ref<a name="aws-resource-sagemaker-inferenceexperiment-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-sagemaker-inferenceexperiment-return-values-fn--getatt"></a>

#### <a name="aws-resource-sagemaker-inferenceexperiment-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
Property description not available\.

`CreationTime` <a name="CreationTime-fn::getatt"></a>
Property description not available\.

`EndpointMetadata` <a name="EndpointMetadata-fn::getatt"></a>
Property description not available\.

`EndpointMetadata.EndpointConfigName` <a name="EndpointMetadata.EndpointConfigName-fn::getatt"></a>
Property description not available\.

`EndpointMetadata.EndpointName` <a name="EndpointMetadata.EndpointName-fn::getatt"></a>
Property description not available\.

`EndpointMetadata.EndpointStatus` <a name="EndpointMetadata.EndpointStatus-fn::getatt"></a>
Property description not available\.

`LastModifiedTime` <a name="LastModifiedTime-fn::getatt"></a>
Property description not available\.

`Status` <a name="Status-fn::getatt"></a>
Property description not available\.
