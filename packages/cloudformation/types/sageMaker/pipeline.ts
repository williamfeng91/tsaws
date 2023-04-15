/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `S3Location` property type specifies Property description not available. for an [AWS::SageMaker::Pipeline](aws-resource-sagemaker-pipeline.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html}
 **/
export interface SageMakerPipelineS3Location {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ETag?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * The `PipelineDefinition` property type specifies Property description not available. for an [AWS::SageMaker::Pipeline](aws-resource-sagemaker-pipeline.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-pipelinedefinition.html}
 **/
export interface SageMakerPipelinePipelineDefinition {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineDefinitionBody?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-sagemaker-pipeline-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineDefinitionS3Location?: SageMakerPipelineS3Location;
}

/**
 * Configuration that controls the parallelism of the pipeline. By default, the parallelism configuration specified applies to all executions of the pipeline unless overridden.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-parallelismconfiguration.html}
 **/
export interface SageMakerPipelineParallelismConfiguration {
  /**
   * The max number of steps that can be executed in parallel.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxParallelExecutionSteps: Value<number>;
}
export interface SageMakerPipelineProperties {
  /**
   * The name of the pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,255}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PipelineName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ParallelismConfiguration](aws-properties-sagemaker-pipeline-parallelismconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelismConfiguration?: SageMakerPipelineParallelismConfiguration;
  /**
   * The description of the pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `3072`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineDescription?: Value<string>;
  /**
   * The display name of the pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,255}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineDisplayName?: Value<string>;
  /**
   * The definition of the pipeline. This can be either a JSON string or an Amazon S3 location.
   *
   * _Required_: Yes
   *
   * _Type_: [PipelineDefinition](aws-properties-sagemaker-pipeline-pipelinedefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineDefinition: SageMakerPipelinePipelineDefinition;
  /**
   * The Amazon Resource Name (ARN) of the IAM role used to execute the pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The tags of the pipeline.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::SageMaker::Pipeline` resource creates shell scripts that run when you create and/or start a SageMaker Pipeline. For information about SageMaker Pipelines, see [SageMaker Pipelines](https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html) in the _Amazon SageMaker Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html}
 */
export interface SageMakerPipelineResource {
  Type: 'AWS::SageMaker::Pipeline';
  Properties: SageMakerPipelineProperties;
}
