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
 * Contains explainability metrics for a model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-explainability.html}
 **/
export interface SageMakerModelPackageExplainability {
  /**
   * The explainability report for a model.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Report?: SageMakerModelPackageMetricsSource;
}

/**
 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformjobdefinition.html}
 **/
export interface SageMakerModelPackageTransformJobDefinition {
  /**
   * Identifies the ML compute instances for the transform job.
   *
   * _Required_: Yes
   *
   * _Type_: [TransformResources](aws-properties-sagemaker-modelpackage-transformresources.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransformResources: SageMakerModelPackageTransformResources;
  /**
   * The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxConcurrentTransforms?: Value<number>;
  /**
   * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxPayloadInMB?: Value<number>;
  /**
   * Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.
   *
   * _Required_: Yes
   *
   * _Type_: [TransformOutput](aws-properties-sagemaker-modelpackage-transformoutput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransformOutput: SageMakerModelPackageTransformOutput;
  /**
   * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Environment?: { [key: string]: Value<string> };
  /**
   * A description of the input source and the way the transform job consumes it.
   *
   * _Required_: Yes
   *
   * _Type_: [TransformInput](aws-properties-sagemaker-modelpackage-transforminput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransformInput: SageMakerModelPackageTransformInput;
  /**
   * A string that determines the number of records included in a single mini-batch.
   *
   * `SingleRecord` means only one record is used per mini-batch. `MultiRecord` means a mini-batch is set to contain as many records that can fit within the `MaxPayloadInMB` limit.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `MultiRecord | SingleRecord`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BatchStrategy?: Value<string>;
}

/**
 * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.html}
 **/
export interface SageMakerModelPackageDriftCheckModelDataQuality {
  /**
   * The drift check model data quality constraints.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Constraints?: SageMakerModelPackageMetricsSource;
  /**
   * The drift check model data quality statistics.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Statistics?: SageMakerModelPackageMetricsSource;
}

/**
 * Contains details regarding the file source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-filesource.html}
 **/
export interface SageMakerModelPackageFileSource {
  /**
   * The type of content stored in the file source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContentType?: Value<string>;
  /**
   * The Amazon S3 URI for the file source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Uri: Value<string>;
  /**
   * The digest of the file source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `72`
   *
   * _Pattern_: `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContentDigest?: Value<string>;
}

/**
 * Details about the metrics source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metricssource.html}
 **/
export interface SageMakerModelPackageMetricsSource {
  /**
   * The metric source content type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContentType: Value<string>;
  /**
   * The S3 URI for the metrics source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Uri: Value<string>;
  /**
   * The hash key used for the metrics source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `72`
   *
   * _Pattern_: `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContentDigest?: Value<string>;
}

/**
 * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-usercontext.html}
 **/
export interface SageMakerModelPackageUserContext {
  /**
   * The domain associated with the user.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the user's profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserProfileArn?: Value<string>;
  /**
   * The name of the user's profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserProfileName?: Value<string>;
}

/**
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithm.html}
 **/
export interface SageMakerModelPackageSourceAlgorithm {
  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single `gzip` compressed tar archive (`.tar.gz` suffix).
   *
   * The model artifacts must be in an S3 bucket that is in the same region as the algorithm.
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
   * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `170`
   *
   * _Pattern_: `(arn:aws[a-z-]*:sagemaker:[a-z0-9-]*:[0-9]{12}:[a-z-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlgorithmName: Value<string>;
}

/**
 * Defines how to perform inference generation after a training job is run.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-inferencespecification.html}
 **/
export interface SageMakerModelPackageInferenceSpecification {
  /**
   * The supported MIME types for the input data.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SupportedContentTypes: List<Value<string>>;
  /**
   * A list of the instance types that are used to generate inferences in real-time.
   *
   * This parameter is required for unversioned models, and optional for versioned models.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>;
  /**
   * The Amazon ECR registry path of the Docker image that contains the inference code.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ModelPackageContainerDefinition](aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.md)
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Containers: List<SageMakerModelPackageModelPackageContainerDefinition>;
  /**
   * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
   *
   * This parameter is required for unversioned models, and optional for versioned models.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SupportedTransformInstanceTypes?: List<Value<string>>;
  /**
   * The supported MIME types for the output data.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SupportedResponseMIMETypes: List<Value<string>>;
}

/**
 * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckexplainability.html}
 **/
export interface SageMakerModelPackageDriftCheckExplainability {
  /**
   * The drift check explainability constraints.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Constraints?: SageMakerModelPackageMetricsSource;
  /**
   * The explainability config file for the model.
   *
   * _Required_: No
   *
   * _Type_: [FileSource](aws-properties-sagemaker-modelpackage-filesource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigFile?: SageMakerModelPackageFileSource;
}

/**
 * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckmodelquality.html}
 **/
export interface SageMakerModelPackageDriftCheckModelQuality {
  /**
   * The drift check model quality constraints.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Constraints?: SageMakerModelPackageMetricsSource;
  /**
   * The drift check model quality statistics.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Statistics?: SageMakerModelPackageMetricsSource;
}

/**
 * Specifies the validation and image scan statuses of the model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusdetails.html}
 **/
export interface SageMakerModelPackageModelPackageStatusDetails {
  /**
   * The validation status of the model package.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ModelPackageStatusItem](aws-properties-sagemaker-modelpackage-modelpackagestatusitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValidationStatuses: List<SageMakerModelPackageModelPackageStatusItem>;
  /**
   * The status of the scan of the Docker image container for the model package.
   *
   * _Required_: No
   *
   * _Type_: List of [ModelPackageStatusItem](aws-properties-sagemaker-modelpackage-modelpackagestatusitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageScanStatuses?: List<SageMakerModelPackageModelPackageStatusItem>;
}

/**
 * Represents the drift check baselines that can be used when the model monitor is set using the model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbaselines.html}
 **/
export interface SageMakerModelPackageDriftCheckBaselines {
  /**
   * Represents the drift check model data quality baselines that can be used when the model monitor is set using the model package.
   *
   * _Required_: No
   *
   * _Type_: [DriftCheckModelDataQuality](aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelDataQuality?: SageMakerModelPackageDriftCheckModelDataQuality;
  /**
   * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
   *
   * _Required_: No
   *
   * _Type_: [DriftCheckBias](aws-properties-sagemaker-modelpackage-driftcheckbias.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bias?: SageMakerModelPackageDriftCheckBias;
  /**
   * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
   *
   * _Required_: No
   *
   * _Type_: [DriftCheckModelQuality](aws-properties-sagemaker-modelpackage-driftcheckmodelquality.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelQuality?: SageMakerModelPackageDriftCheckModelQuality;
  /**
   * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
   *
   * _Required_: No
   *
   * _Type_: [DriftCheckExplainability](aws-properties-sagemaker-modelpackage-driftcheckexplainability.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Explainability?: SageMakerModelPackageDriftCheckExplainability;
}

/**
 * Describes the input source of a transform job and the way the transform job consumes it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transforminput.html}
 **/
export interface SageMakerModelPackageTransformInput {
  /**
   * The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContentType?: Value<string>;
  /**
   * The method to use to split the transform job's data files into smaller batches. Splitting is necessary when the total size of each object is too large to fit in a single request. You can also use data splitting to improve performance by processing multiple concurrent mini-batches. The default value for `SplitType` is `None`, which indicates that input data files are not split, and request payloads contain the entire contents of an input object. Set the value of this parameter to `Line` to split records on a newline character boundary. `SplitType` also supports a number of record-oriented binary data formats. Currently, the supported record formats are:
   */
  SplitType?: Value<string>;
  /**
   * If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is `None`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Gzip | None`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CompressionType?: Value<string>;
  /**
   * Describes the location of the channel data, which is, the S3 location of the input data that the model can consume.
   *
   * _Required_: Yes
   *
   * _Type_: [DataSource](aws-properties-sagemaker-modelpackage-datasource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataSource: SageMakerModelPackageDataSource;
}

/**
 * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-driftcheckbias.html}
 **/
export interface SageMakerModelPackageDriftCheckBias {
  /**
   * The pre-training constraints.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreTrainingConstraints?: SageMakerModelPackageMetricsSource;
  /**
   * The bias config file for a model.
   *
   * _Required_: No
   *
   * _Type_: [FileSource](aws-properties-sagemaker-modelpackage-filesource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigFile?: SageMakerModelPackageFileSource;
  /**
   * The post-training constraints.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PostTrainingConstraints?: SageMakerModelPackageMetricsSource;
}

/**
 * Input object for the model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelinput.html}
 **/
export interface SageMakerModelPackageModelInput {
  /**
   * The input configuration object for the model.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[Ss]+`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  DataInputConfig: Value<string>;
}

/**
 * Specifies batch transform jobs that SageMaker runs to validate your model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationspecification.html}
 **/
export interface SageMakerModelPackageValidationSpecification {
  /**
   * The IAM roles to be used for the validation of the model package.
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
  ValidationRole: Value<string>;
  /**
   * An array of `ModelPackageValidationProfile` objects, each of which specifies a batch transform job that SageMaker runs to validate your model package.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ValidationProfile](aws-properties-sagemaker-modelpackage-validationprofile.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidationProfiles: List<SageMakerModelPackageValidationProfile>;
}

/**
 * Represents the overall status of a model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html}
 **/
export interface SageMakerModelPackageModelPackageStatusItem {
  /**
   * The current status.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Completed | Failed | InProgress | NotStarted`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
  /**
   * if the overall status is `Failed`, the reason for the failure.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureReason?: Value<string>;
  /**
   * The name of the model package for which the overall status is being reported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A structure of additional Inference Specification. Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html}
 **/
export interface SageMakerModelPackageAdditionalInferenceSpecificationDefinition {
  /**
   * A description of the additional Inference specification
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[p{L}p{M}p{Z}p{S}p{N}p{P}]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The supported MIME types for the input data.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportedContentTypes?: List<Value<string>>;
  /**
   * A list of the instance types that are used to generate inferences in real-time.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportedRealtimeInferenceInstanceTypes?: List<Value<string>>;
  /**
   * The Amazon ECR registry path of the Docker image that contains the inference code.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ModelPackageContainerDefinition](aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.md)
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Containers: List<SageMakerModelPackageModelPackageContainerDefinition>;
  /**
   * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportedTransformInstanceTypes?: List<Value<string>>;
  /**
   * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The supported MIME types for the output data.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportedResponseMIMETypes?: List<Value<string>>;
}

/**
 * A list of algorithms that were used to create a model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-sourcealgorithmspecification.html}
 **/
export interface SageMakerModelPackageSourceAlgorithmSpecification {
  /**
   * A list of the algorithms that were used to create a model package.
   *
   * _Required_: Yes
   *
   * _Type_: List of [SourceAlgorithm](aws-properties-sagemaker-modelpackage-sourcealgorithm.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceAlgorithms: List<SageMakerModelPackageSourceAlgorithm>;
}

/**
 * Model quality statistics and constraints.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelquality.html}
 **/
export interface SageMakerModelPackageModelQuality {
  /**
   * Model quality constraints.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Constraints?: SageMakerModelPackageMetricsSource;
  /**
   * Model quality statistics.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Statistics?: SageMakerModelPackageMetricsSource;
}

/**
 * Describes the S3 data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-s3datasource.html}
 **/
export interface SageMakerModelPackageS3DataSource {
  /**
   * Depending on the value specified for the `S3DataType`, identifies either a key name prefix or a manifest. For example:
   *
   * The complete set of `S3Uri` in this manifest is the input data for the channel for this data source. The object that each `S3Uri` points to must be readable by the IAM role that SageMaker uses to perform tasks on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Uri: Value<string>;
  /**
   * If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. SageMaker uses all objects that match the specified key name prefix for model training.
   *
   * If you choose `ManifestFile`, `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want SageMaker to use for model training.
   *
   * If you choose `AugmentedManifestFile`, S3Uri identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. `AugmentedManifestFile` can only be used if the Channel's input mode is `Pipe`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AugmentedManifestFile | ManifestFile | S3Prefix`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3DataType: Value<string>;
}

/**
 * Contains metrics captured from a model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelmetrics.html}
 **/
export interface SageMakerModelPackageModelMetrics {
  /**
   * Metrics that measure the quality of the input data for a model.
   *
   * _Required_: No
   *
   * _Type_: [ModelDataQuality](aws-properties-sagemaker-modelpackage-modeldataquality.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelDataQuality?: SageMakerModelPackageModelDataQuality;
  /**
   * Metrics that measure bais in a model.
   *
   * _Required_: No
   *
   * _Type_: [Bias](aws-properties-sagemaker-modelpackage-bias.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bias?: SageMakerModelPackageBias;
  /**
   * Metrics that measure the quality of a model.
   *
   * _Required_: No
   *
   * _Type_: [ModelQuality](aws-properties-sagemaker-modelpackage-modelquality.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelQuality?: SageMakerModelPackageModelQuality;
  /**
   * Metrics that help explain a model.
   *
   * _Required_: No
   *
   * _Type_: [Explainability](aws-properties-sagemaker-modelpackage-explainability.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Explainability?: SageMakerModelPackageExplainability;
}

/**
 * Metadata properties of the tracking entity, trial, or trial component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-metadataproperties.html}
 **/
export interface SageMakerModelPackageMetadataProperties {
  /**
   * The entity this entity was generated by.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GeneratedBy?: Value<string>;
  /**
   * The repository.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Repository?: Value<string>;
  /**
   * The commit ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CommitId?: Value<string>;
  /**
   * The project ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProjectId?: Value<string>;
}

/**
 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformresources.html}
 **/
export interface SageMakerModelPackageTransformResources {
  /**
   * The number of ML compute instances to use in the transform job. The default value is `1`, and the maximum is `100`. For distributed transform jobs, specify a value greater than `1`.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceCount: Value<number>;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
   *
   * Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a `VolumeKmsKeyId` when using an instance type with local storage.
   *
   * For a list of instance types that support local instance storage, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes).
   *
   * For more information about local instance storage encryption, see [SSD Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
   *
   * The `VolumeKmsKeyId` can be any of the following formats:
   */
  VolumeKmsKeyId?: Value<string>;
  /**
   * The ML compute instance type for the transform job. If you are using built-in algorithms to transform moderately sized datasets, we recommend using ml.m4.xlarge or `ml.m5.large`instance types.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ml.c4.2xlarge | ml.c4.4xlarge | ml.c4.8xlarge | ml.c4.xlarge | ml.c5.18xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.xlarge | ml.m4.10xlarge | ml.m4.16xlarge | ml.m4.2xlarge | ml.m4.4xlarge | ml.m4.xlarge | ml.m5.12xlarge | ml.m5.24xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.large | ml.m5.xlarge | ml.p2.16xlarge | ml.p2.8xlarge | ml.p2.xlarge | ml.p3.16xlarge | ml.p3.2xlarge | ml.p3.8xlarge`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType: Value<string>;
}

/**
 * Describes the Docker container for the model package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html}
 **/
export interface SageMakerModelPackageModelPackageContainerDefinition {
  /**
   * A structure with Model Input details.
   *
   * _Required_: No
   *
   * _Type_: [ModelInput](aws-properties-sagemaker-modelpackage-modelinput.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ModelInput?: SageMakerModelPackageModelInput;
  /**
   * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model. You can find a list of benchmarked models by calling `ListModelMetadata`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  NearestModelName?: Value<string>;
  /**
   * The DNS host name for the Docker container.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ContainerHostname?: Value<string>;
  /**
   * An MD5 hash of the training algorithm that identifies the Docker image used for training.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `72`
   *
   * _Pattern_: `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ImageDigest?: Value<string>;
  /**
   * The framework version of the Model Package Container Image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `10`
   *
   * _Pattern_: `[0-9].[A-Za-z0-9.-]+`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  FrameworkVersion?: Value<string>;
  /**
   * The environment variables to set in the Docker container. Each key and value in the `Environment` string to string map can have length of up to 1024. We support up to 16 entries in the map.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Environment?: { [key: string]: Value<string> };
  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single `gzip` compressed tar archive (`.tar.gz` suffix).
   *
   * The model artifacts must be in an S3 bucket that is in the same region as the model package.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ModelDataUrl?: Value<string>;
  /**
   * The AWS Marketplace product ID of the model package.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ProductId?: Value<string>;
  /**
   * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
   *
   * If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[S]+`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Image: Value<string>;
  /**
   * The machine learning framework of the model package container image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Framework?: Value<string>;
}

/**
 * Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.
 *
 * The data provided in the validation profile is made available to your buyers on AWS Marketplace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-validationprofile.html}
 **/
export interface SageMakerModelPackageValidationProfile {
  /**
   * The name of the profile for the model package.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProfileName: Value<string>;
  /**
   * The `TransformJobDefinition` object that describes the transform job used for the validation of the model package.
   *
   * _Required_: Yes
   *
   * _Type_: [TransformJobDefinition](aws-properties-sagemaker-modelpackage-transformjobdefinition.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransformJobDefinition: SageMakerModelPackageTransformJobDefinition;
}

/**
 * Contains bias metrics for a model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-bias.html}
 **/
export interface SageMakerModelPackageBias {
  /**
   * The bias report for a model
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Report?: SageMakerModelPackageMetricsSource;
  /**
   * The pre-training bias report for a model.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreTrainingReport?: SageMakerModelPackageMetricsSource;
  /**
   * The post-training bias report for a model.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PostTrainingReport?: SageMakerModelPackageMetricsSource;
}

/**
 * Describes the location of the channel data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-datasource.html}
 **/
export interface SageMakerModelPackageDataSource {
  /**
   * The S3 location of the data source that is associated with a channel.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DataSource](aws-properties-sagemaker-modelpackage-s3datasource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3DataSource: SageMakerModelPackageS3DataSource;
}

/**
 * Describes the results of a transform job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-transformoutput.html}
 **/
export interface SageMakerModelPackageTransformOutput {
  /**
   * Defines how to assemble the results of the transform job as a single S3 object. Choose a format that is most convenient to you. To concatenate the results in binary format, specify `None`. To add a newline character at the end of every transformed record, specify `Line`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Line | None`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AssembleWith?: Value<string>;
  /**
   * The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Accept?: Value<string>;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The `KmsKeyId` can be any of the following formats:
   */
  KmsKeyId?: Value<string>;
  /**
   * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For example, `s3://bucket-name/key-name-prefix`.
   *
   * For every S3 object used as input for the transform job, batch transform stores the transformed data with an .`out` suffix in a corresponding subfolder in the location in the output prefix. For example, for the input data stored at `s3://bucket-name/input-name-prefix/dataset01/data.csv`, batch transform stores the transformed data at `s3://bucket-name/output-name-prefix/input-name-prefix/data.csv.out`. Batch transform doesn't upload partially processed objects. For an input S3 object that contains multiple records, it creates an .`out` file only if the transform job succeeds on the entire file. When the input contains multiple S3 objects, the batch transform job processes the listed S3 objects and uploads only the output for successfully processed objects. If any object fails in the transform job batch transform marks the job as failed to prompt investigation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3OutputPath: Value<string>;
}

/**
 * Data quality constraints and statistics for a model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelpackage-modeldataquality.html}
 **/
export interface SageMakerModelPackageModelDataQuality {
  /**
   * Data quality constraints for a model.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Constraints?: SageMakerModelPackageMetricsSource;
  /**
   * Data quality statistics for a model.
   *
   * _Required_: No
   *
   * _Type_: [MetricsSource](aws-properties-sagemaker-modelpackage-metricssource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Statistics?: SageMakerModelPackageMetricsSource;
}
export interface SageMakerModelPackageProperties {
  /**
   * Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *
   * _Required_: No
   *
   * _Type_: [DriftCheckBaselines](aws-properties-sagemaker-modelpackage-driftcheckbaselines.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DriftCheckBaselines?: SageMakerModelPackageDriftCheckBaselines;
  /**
   * Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.
   *
   * _Required_: No
   *
   * _Type_: [UserContext](aws-properties-sagemaker-modelpackage-usercontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastModifiedBy?: SageMakerModelPackageUserContext;
  /**
   * Metrics for the model.
   *
   * _Required_: No
   *
   * _Type_: [ModelMetrics](aws-properties-sagemaker-modelpackage-modelmetrics.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelMetrics?: SageMakerModelPackageModelMetrics;
  /**
   * The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Task?: Value<string>;
  /**
   * The metadata properties for the model package.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerMetadataProperties?: { [key: string]: Value<string> };
  /**
   * The approval status of the model. This can be one of the following values.
   */
  ModelApprovalStatus?: Value<string>;
  /**
   * The version number of a versioned model.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelPackageVersion?: Value<number>;
  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * _Required_: No
   *
   * _Type_: [MetadataProperties](aws-properties-sagemaker-modelpackage-metadataproperties.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MetadataProperties?: SageMakerModelPackageMetadataProperties;
  /**
   * A list of algorithms that were used to create a model package.
   *
   * _Required_: No
   *
   * _Type_: [SourceAlgorithmSpecification](aws-properties-sagemaker-modelpackage-sourcealgorithmspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceAlgorithmSpecification?: SageMakerModelPackageSourceAlgorithmSpecification;
  /**
   * Specifies the validation and image scan statuses of the model package.
   *
   * _Required_: No
   *
   * _Type_: [ModelPackageStatusDetails](aws-properties-sagemaker-modelpackage-modelpackagestatusdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelPackageStatusDetails?: SageMakerModelPackageModelPackageStatusDetails;
  /**
   * The description of the model package.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[p{L}p{M}p{Z}p{S}p{N}p{P}]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelPackageDescription?: Value<string>;
  /**
   * An array of additional Inference Specification objects to be added to the existing array. The total number of additional Inference Specification objects cannot exceed 15. Each additional Inference Specification object specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
   *
   * _Required_: No
   *
   * _Type_: List of [AdditionalInferenceSpecificationDefinition](aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalInferenceSpecificationsToAdd?: List<SageMakerModelPackageAdditionalInferenceSpecificationDefinition>;
  /**
   * Defines how to perform inference generation after a training job is run.
   *
   * _Required_: No
   *
   * _Type_: [InferenceSpecification](aws-properties-sagemaker-modelpackage-inferencespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InferenceSpecification?: SageMakerModelPackageInferenceSpecification;
  /**
   * The Amazon Simple Storage Service path where the sample payload are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SamplePayloadUrl?: Value<string>;
  /**
   * A list of the tags associated with the model package. For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _ AWS General Reference Guide_.
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
  /**
   * Whether the model package is to be certified to be listed on AWS Marketplace. For information about listing model packages on AWS Marketplace, see [List Your Algorithm or Model Package on AWS Marketplace](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertifyForMarketplace?: Value<boolean>;
  /**
   * Represents the overall status of a model package.
   *
   * _Required_: No
   *
   * _Type_: [ModelPackageStatusItem](aws-properties-sagemaker-modelpackage-modelpackagestatusitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelPackageStatusItem?: SageMakerModelPackageModelPackageStatusItem;
  /**
   * The model group to which the model belongs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelPackageGroupName?: Value<string>;
  /**
   * Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.
   *
   * _Required_: No
   *
   * _Type_: [UserContext](aws-properties-sagemaker-modelpackage-usercontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreatedBy?: SageMakerModelPackageUserContext;
  /**
   * A description provided when the model approval is set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApprovalDescription?: Value<string>;
  /**
   * Specifies batch transform jobs that SageMaker runs to validate your model package.
   *
   * _Required_: No
   *
   * _Type_: [ValidationSpecification](aws-properties-sagemaker-modelpackage-validationspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidationSpecification?: SageMakerModelPackageValidationSpecification;
  /**
   * The name of the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelPackageName?: Value<string>;
  /**
   * A structure of additional Inference Specification. Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package
   *
   * _Required_: No
   *
   * _Type_: [AdditionalInferenceSpecificationDefinition](aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalInferenceSpecificationDefinition?: SageMakerModelPackageAdditionalInferenceSpecificationDefinition;
  /**
   * The last time the model package was modified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastModifiedTime?: Value<string>;
  /**
   * The environment variables to set in the Docker container. Each key and value in the `Environment` string to string map can have length of up to 1024. We support up to 16 entries in the map.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: { [key: string]: Value<string> };
  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientToken?: Value<string>;
  /**
   * The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Domain?: Value<string>;
  /**
   * An array of additional Inference Specification objects.
   *
   * _Required_: No
   *
   * _Type_: List of [AdditionalInferenceSpecificationDefinition](aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.md)
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalInferenceSpecifications?: List<SageMakerModelPackageAdditionalInferenceSpecificationDefinition>;
}

/**
 * A versioned model that can be deployed for SageMaker inference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html}
 */
export interface SageMakerModelPackageResource {
  Type: 'AWS::SageMaker::ModelPackage';
  Properties: SageMakerModelPackageProperties;
}
