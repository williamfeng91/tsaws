/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
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
 * Describes the container, as part of model definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition.html}
 **/
export interface SageMakerModelContainerDefinition {
  /**
   * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). For information about storing containers in a private Docker registry, see [Use a Private Docker Registry for Real-Time Inference Containers](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html).
   *
   * The model artifacts in an Amazon S3 bucket and the Docker image for inference container in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are creating.
   *
   * _Required_: No
   *
   * _Type_: [ImageConfig](aws-properties-sagemaker-model-containerdefinition-imageconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageConfig?: SageMakerModelImageConfig;
  /**
   * The inference specification name in the model package version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InferenceSpecificationName?: Value<string>;
  /**
   * This parameter is ignored for models that contain only a `PrimaryContainer`.
   *
   * When a `ContainerDefinition` is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a `ContainerDefinition` that is part of an inference pipeline, a unique name is automatically assigned based on the position of the `ContainerDefinition` in the pipeline. If you specify a value for the `ContainerHostName` for any `ContainerDefinition` that is part of an inference pipeline, you must specify a value for the `ContainerHostName` parameter of every `ContainerDefinition` in that pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerHostname?: Value<string>;
  /**
   * The name or Amazon Resource Name (ARN) of the model package to use to create the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `176`
   *
   * _Pattern_: `(arn:aws[a-z-]*:sagemaker:[a-z0-9-]*:[0-9]{12}:[a-z-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)(/[0-9]{1,5})?$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelPackageName?: Value<string>;
  /**
   * Whether the container hosts a single model or multiple models.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `MultiModel | SingleModel`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Mode?: Value<string>;
  /**
   * The environment variables to set in the Docker container. Each key and value in the `Environment` string to string map can have length of up to 1024. We support up to 16 entries in the map.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Environment?: { [key: string]: any };
  /**
   * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).
   *
   * The model artifacts must be in an S3 bucket that is in the same region as the model or endpoint you are creating.
   *
   * If you provide a value for this parameter, SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you provide. AWS STS is activated in your AWS account by default. If you previously deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For more information, see [Activating and Deactivating AWS STS in an AWS Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the _ AWS Identity and Access Management User Guide_.
   *
   * If you use a built-in algorithm to create a model, SageMaker requires that you provide a S3 path to the model artifacts in `ModelDataUrl`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelDataUrl?: Value<string>;
  /**
   * The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   *
   * The model artifacts in an Amazon S3 bucket and the Docker image for inference container in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are creating.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[S]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Image?: Value<string>;
  /**
   * Specifies additional configuration for multi-model endpoints.
   *
   * _Required_: No
   *
   * _Type_: [MultiModelConfig](aws-properties-sagemaker-model-containerdefinition-multimodelconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MultiModelConfig?: SageMakerModelMultiModelConfig;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition-imageconfig.html}
 **/
export interface SageMakerModelImageConfig {
  RepositoryAuthConfig?: SageMakerModelRepositoryAuthConfig;
  RepositoryAccessMode: Value<string>;
}

/**
 * Specifies details about how containers in a multi-container endpoint are run.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-inferenceexecutionconfig.html}
 **/
export interface SageMakerModelInferenceExecutionConfig {
  /**
   * How containers in a multi-container are run. The following values are valid.
   */
  Mode: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition-multimodelconfig.html}
 **/
export interface SageMakerModelMultiModelConfig {
  ModelCacheSetting?: Value<string>;
}

/**
 * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-vpcconfig.html}
 **/
export interface SageMakerModelVpcConfig {
  /**
   * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subnets: List<Value<string>>;
  /**
   * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the `Subnets` field.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds: List<Value<string>>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-model-containerdefinition-imageconfig-repositoryauthconfig.html}
 **/
export interface SageMakerModelRepositoryAuthConfig {
  RepositoryCredentialsProviderArn: Value<string>;
}
export interface SageMakerModelProperties {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see [SageMaker Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html).
   *
   * To be able to pass this role to SageMaker, the caller of this API must have the `iam:PassRole` permission.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExecutionRoleArn: Value<string>;
  /**
   * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnableNetworkIsolation?: Value<boolean>;
  /**
   * The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions.
   *
   * _Required_: No
   *
   * _Type_: [ContainerDefinition](aws-properties-sagemaker-model-containerdefinition.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrimaryContainer?: SageMakerModelContainerDefinition;
  /**
   * The name of the new model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelName?: Value<string>;
  /**
   * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_VpcConfig.html) object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. `VpcConfig` is used in hosting services and in batch transform. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html).
   *
   * _Required_: No
   *
   * _Type_: [VpcConfig](aws-properties-sagemaker-model-vpcconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfig?: SageMakerModelVpcConfig;
  /**
   * Specifies the containers in the inference pipeline.
   *
   * _Required_: No
   *
   * _Type_: List of [ContainerDefinition](aws-properties-sagemaker-model-containerdefinition.md)
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Containers?: List<SageMakerModelContainerDefinition>;
  /**
   * Specifies details of how containers in a multi-container endpoint are called.
   *
   * _Required_: No
   *
   * _Type_: [InferenceExecutionConfig](aws-properties-sagemaker-model-inferenceexecutionconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InferenceExecutionConfig?: SageMakerModelInferenceExecutionConfig;
  /**
   * A list of key-value pairs to apply to this resource.
   *
   * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the _AWS Billing and Cost Management User Guide_.
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
 * The `AWS::SageMaker::Model` resource to create a model to host at an Amazon SageMaker endpoint. For more information, see [Deploying a Model on Amazon SageMaker Hosting Services](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-hosting.html) in the _Amazon SageMaker Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-model.html}
 */
export interface SageMakerModelResource {
  Type: 'AWS::SageMaker::Model';
  Properties: SageMakerModelProperties;
}
