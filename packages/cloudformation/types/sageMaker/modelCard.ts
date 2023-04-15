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
 * The security configuration used to protect model card data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-securityconfig.html}
 **/
export interface SageMakerModelCardSecurityConfig {
  /**
   * A AWS Key Management Service [key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) used to encrypt a model card.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
}

/**
 * A group of metric data that you use to initialize a metric group object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricgroup.html}
 **/
export interface SageMakerModelCardMetricGroup {
  /**
   * The metric group name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * A list of metric objects. The `MetricDataItems` list can have one of the following values:
   */
  MetricData: List<SageMakerModelCardMetricDataItems>;
}

/**
 * A result from a SageMaker training job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingmetric.html}
 **/
export interface SageMakerModelCardTrainingMetric {
  /**
   * The value of a result from the SageMaker training job.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
  /**
   * Any additional notes describing the result of the training job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Notes?: Value<string>;
  /**
   * The name of the result from the SageMaker training job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-usercontext.html}
 **/
export interface SageMakerModelCardUserContext {
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
 * An overview of a model's inference environment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-inferenceenvironment.html}
 **/
export interface SageMakerModelCardInferenceEnvironment {
  /**
   * The container used to run the inference environment.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerImage?: List<Value<string>>;
}

/**
 * The intended uses of a model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-intendeduses.html}
 **/
export interface SageMakerModelCardIntendedUses {
  /**
   * The intended use cases for the model.
   *
   * _Required_: No
   *
   * _Type_: [String](#aws-properties-sagemaker-modelcard-intendeduses)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntendedUses?: Value<string>;
  /**
   * Factors affecting model efficacy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FactorsAffectingModelEfficiency?: Value<string>;
  /**
   * The general purpose of the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PurposeOfModel?: Value<string>;
  /**
   * Your organization's risk rating. You can specify one the following values as the risk rating:
   */
  RiskRating?: Value<string>;
  /**
   * An explanation of why your organization categorizes the model with its risk rating.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExplanationsForRiskRating?: Value<string>;
}

/**
 * The evaluation details of the model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-evaluationdetail.html}
 **/
export interface SageMakerModelCardEvaluationDetail {
  /**
   * The location of the datasets used to evaluate the model.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Datasets?: List<Value<string>>;
  /**
   * Any observations made during the model evaluation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluationObservation?: Value<string>;
  /**
   * An evaluation Metric Group object.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricGroup](aws-properties-sagemaker-modelcard-metricgroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricGroups?: List<SageMakerModelCardMetricGroup>;
  /**
   * Additional attributes associated with the evaluation results.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metadata?: { [key: string]: Value<string> };
  /**
   * The Amazon Resource Name (ARN) of the evaluation job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluationJobArn?: Value<string>;
  /**
   * The evaluation job name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A hyper parameter that was configured in training the model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-traininghyperparameter.html}
 **/
export interface SageMakerModelCardTrainingHyperParameter {
  /**
   * The value specified for the hyper parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The name of the hyper parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * An overview about the model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-modeloverview.html}
 **/
export interface SageMakerModelCardModelOverview {
  /**
   * The owner of the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelOwner?: Value<string>;
  /**
   * The location of the model artifact.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelArtifact?: List<Value<string>>;
  /**
   * The algorithm used to solve the problem.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlgorithmType?: Value<string>;
  /**
   * The name of the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelName?: Value<string>;
  /**
   * An overview about model inference.
   *
   * _Required_: No
   *
   * _Type_: [InferenceEnvironment](aws-properties-sagemaker-modelcard-inferenceenvironment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InferenceEnvironment?: SageMakerModelCardInferenceEnvironment;
  /**
   * The problem being solved with the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProblemType?: Value<string>;
  /**
   * A description of the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelDescription?: Value<string>;
  /**
   * The version of the model.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelVersion?: Value<number>;
  /**
   * The creator of the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelCreator?: Value<string>;
  /**
   * The SageMaker Model ARN or non-SageMaker Model ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelId?: Value<string>;
}

/**
 * The training details of the model
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingdetails.html}
 **/
export interface SageMakerModelCardTrainingDetails {
  /**
   * The function that is optimized during model training.
   *
   * _Required_: No
   *
   * _Type_: [ObjectiveFunction](aws-properties-sagemaker-modelcard-objectivefunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectiveFunction?: SageMakerModelCardObjectiveFunction;
  /**
   * Any observations about training.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrainingObservations?: Value<string>;
  /**
   * Details about any associated training jobs.
   *
   * _Required_: No
   *
   * _Type_: [TrainingJobDetails](aws-properties-sagemaker-modelcard-trainingjobdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrainingJobDetails?: SageMakerModelCardTrainingJobDetails;
}

/**
 * Metric data. The `type` determines the data types that you specify for `value`, `XAxisName` and `YAxisName`. For information about specifying values for metrics, see [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-metricdataitems.html}
 **/
export interface SageMakerModelCardMetricDataItems {
  /**
   * The name of the x axis.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XAxisName?: List<Value<string>>;
  /**
   * You must specify one of the following data types:
   */
  Type: Value<string>;
  /**
   * The datatype of the metric. The metric's _value_ must be compatible with the metric's _type_.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: { [key: string]: any };
  /**
   * The name of the y axis.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YAxisName?: List<Value<string>>;
  /**
   * Any notes to add to the metric.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Notes?: Value<string>;
  /**
   * The names of the metrics.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Information about how the model supports business goals.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-businessdetails.html}
 **/
export interface SageMakerModelCardBusinessDetails {
  /**
   * The relevant stakeholders for the model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BusinessStakeholders?: Value<string>;
  /**
   * The broader business need that the model is serving.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LineOfBusiness?: Value<string>;
  /**
   * The specific business problem that the model is trying to solve.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BusinessProblem?: Value<string>;
}

/**
 * Additional information about the model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-additionalinformation.html}
 **/
export interface SageMakerModelCardAdditionalInformation {
  /**
   * Any ethical considerations documented by the model card author.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EthicalConsiderations?: Value<string>;
  /**
   * Caveats and recommendations for those who might use this model in their applications.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaveatsAndRecommendations?: Value<string>;
  /**
   * Any additional information to document about the model.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomDetails?: { [key: string]: Value<string> };
}

/**
 * The overview of a training job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingjobdetails.html}
 **/
export interface SageMakerModelCardTrainingJobDetails {
  /**
   * The SageMaker training job results.
   *
   * _Required_: No
   *
   * _Type_: List of [TrainingMetric](aws-properties-sagemaker-modelcard-trainingmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrainingMetrics?: List<SageMakerModelCardTrainingMetric>;
  /**
   * The hyper parameters used in the training job.
   *
   * _Required_: No
   *
   * _Type_: List of [TrainingHyperParameter](aws-properties-sagemaker-modelcard-traininghyperparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HyperParameters?: List<SageMakerModelCardTrainingHyperParameter>;
  /**
   * The SageMaker training job Amazon Resource Name (ARN)
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrainingArn?: Value<string>;
  /**
   * Custom training job results.
   *
   * _Required_: No
   *
   * _Type_: List of [TrainingMetric](aws-properties-sagemaker-modelcard-trainingmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserProvidedTrainingMetrics?: List<SageMakerModelCardTrainingMetric>;
  /**
   * The SageMaker training job image URI.
   *
   * _Required_: No
   *
   * _Type_: [TrainingEnvironment](aws-properties-sagemaker-modelcard-trainingenvironment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrainingEnvironment?: SageMakerModelCardTrainingEnvironment;
  /**
   * The location of the datasets used to train the model.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrainingDatasets?: List<Value<string>>;
  /**
   * Additional hyper parameters that you've specified when training the model.
   *
   * _Required_: No
   *
   * _Type_: List of [TrainingHyperParameter](aws-properties-sagemaker-modelcard-traininghyperparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserProvidedHyperParameters?: List<SageMakerModelCardTrainingHyperParameter>;
}

/**
 * Function details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-function.html}
 **/
export interface SageMakerModelCardFunction {
  /**
   * An optional description of any conditions of your objective function metric.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition?: Value<string>;
  /**
   * The optimization direction of the model's objective function. You must specify one of the following values:
   */
  Function?: Value<string>;
  /**
   * The metric of the model's objective function. For example, _loss_ or _rmse_. The following list shows examples of the values that you can specify for the metric:
   */
  Facet?: Value<string>;
}

/**
 * SageMaker training image.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-trainingenvironment.html}
 **/
export interface SageMakerModelCardTrainingEnvironment {
  /**
   * SageMaker inference image URI.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerImage?: List<Value<string>>;
}

/**
 * The function that is optimized during model training.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-objectivefunction.html}
 **/
export interface SageMakerModelCardObjectiveFunction {
  /**
   * A function object that details optimization direction, metric, and additional descriptions.
   *
   * _Required_: No
   *
   * _Type_: [Function](aws-properties-sagemaker-modelcard-function.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Function?: SageMakerModelCardFunction;
  /**
   * Notes about the object function, including other considerations for possible objective functions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Notes?: Value<string>;
}

/**
 * The content of the model card. It follows the [model card json schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcard-content.html}
 **/
export interface SageMakerModelCardContent {
  /**
   * The intended usage of the model.
   *
   * _Required_: No
   *
   * _Type_: [IntendedUses](aws-properties-sagemaker-modelcard-intendeduses.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntendedUses?: SageMakerModelCardIntendedUses;
  /**
   * Additional information about the model.
   *
   * _Required_: No
   *
   * _Type_: [AdditionalInformation](aws-properties-sagemaker-modelcard-additionalinformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalInformation?: SageMakerModelCardAdditionalInformation;
  /**
   * An overview about the model
   *
   * _Required_: No
   *
   * _Type_: [ModelOverview](aws-properties-sagemaker-modelcard-modeloverview.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelOverview?: SageMakerModelCardModelOverview;
  /**
   * An overview about model training.
   *
   * _Required_: No
   *
   * _Type_: [TrainingDetails](aws-properties-sagemaker-modelcard-trainingdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrainingDetails?: SageMakerModelCardTrainingDetails;
  /**
   * An overview about the model's evaluation.
   *
   * _Required_: No
   *
   * _Type_: List of [EvaluationDetail](aws-properties-sagemaker-modelcard-evaluationdetail.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluationDetails?: List<SageMakerModelCardEvaluationDetail>;
  /**
   * Information about how the model supports business goals.
   *
   * _Required_: No
   *
   * _Type_: [BusinessDetails](aws-properties-sagemaker-modelcard-businessdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BusinessDetails?: SageMakerModelCardBusinessDetails;
}
export interface SageMakerModelCardProperties {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [UserContext](aws-properties-sagemaker-modelcard-usercontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastModifiedBy?: SageMakerModelCardUserContext;
  /**
   * The unique name of the model card.
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
  ModelCardName: Value<string>;
  /**
   * The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
   */
  ModelCardStatus: Value<string>;
  /**
   * Information about the user who created or modified one or more of the following:
   */
  CreatedBy?: SageMakerModelCardUserContext;
  /**
   * The security configuration used to protect model card data.
   *
   * _Required_: No
   *
   * _Type_: [SecurityConfig](aws-properties-sagemaker-modelcard-securityconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityConfig?: SageMakerModelCardSecurityConfig;
  /**
   * The content of the model card. Content uses the [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
   *
   * _Required_: Yes
   *
   * _Type_: [Content](aws-properties-sagemaker-modelcard-content.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: SageMakerModelCardContent;
  /**
   * Key-value pairs used to manage metadata for the model card.
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
 * Creates an Amazon SageMaker Model Card.
 *
 * For information about how to use model cards, see [Amazon SageMaker Model Card](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html}
 */
export interface SageMakerModelCardResource {
  Type: 'AWS::SageMaker::ModelCard';
  Properties: SageMakerModelCardProperties;
}
