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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Describes the resource configuration for hyperparameter optimization (HPO).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hporesourceconfig.html}
 **/
export interface PersonalizeSolutionHpoResourceConfig {
  /**
   * The maximum number of parallel training jobs when you create a solution version. The maximum value for `maxParallelTrainingJobs` is `10`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxParallelTrainingJobs?: Value<string>;
  /**
   * The maximum number of training jobs when you create a solution version. The maximum value for `maxNumberOfTrainingJobs` is `40`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxNumberOfTrainingJobs?: Value<string>;
}

/**
 * Provides the name and range of a categorical hyperparameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-categoricalhyperparameterrange.html}
 **/
export interface PersonalizeSolutionCategoricalHyperParameterRange {
  /**
   * A list of the categories for the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Values?: List<Value<string>>;
  /**
   * The name of the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `AlgorithmHyperParameterRanges` property type specifies Property description not available. for an [AWS::Personalize::Solution](aws-resource-personalize-solution.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-algorithmhyperparameterranges.html}
 **/
export interface PersonalizeSolutionAlgorithmHyperParameterRanges {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [IntegerHyperParameterRange](aws-properties-personalize-solution-integerhyperparameterrange.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IntegerHyperParameterRanges?: List<PersonalizeSolutionIntegerHyperParameterRange>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [CategoricalHyperParameterRange](aws-properties-personalize-solution-categoricalhyperparameterrange.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CategoricalHyperParameterRanges?: List<PersonalizeSolutionCategoricalHyperParameterRange>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [ContinuousHyperParameterRange](aws-properties-personalize-solution-continuoushyperparameterrange.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContinuousHyperParameterRanges?: List<PersonalizeSolutionContinuousHyperParameterRange>;
}

/**
 * When the solution performs AutoML (`performAutoML` is true in [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-automlconfig.html}
 **/
export interface PersonalizeSolutionAutoMLConfig {
  /**
   * The metric to optimize.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MetricName?: Value<string>;
  /**
   * The list of candidate recipes.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RecipeList?: List<Value<string>>;
}

/**
 * Describes the configuration properties for the solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-solutionconfig.html}
 **/
export interface PersonalizeSolutionSolutionConfig {
  /**
   * Only events with a value greater than or equal to this threshold are used for training a model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EventValueThreshold?: Value<string>;
  /**
   * Describes the properties for hyperparameter optimization (HPO).
   *
   * _Required_: No
   *
   * _Type_: [HpoConfig](aws-properties-personalize-solution-hpoconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HpoConfig?: PersonalizeSolutionHpoConfig;
  /**
   * Lists the hyperparameter names and ranges.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlgorithmHyperParameters?: { [key: string]: Value<string> };
  /**
   * Lists the feature transformation parameters.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FeatureTransformationParameters?: { [key: string]: Value<string> };
  /**
   * The [AutoMLConfig](https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html) object containing a list of recipes to search when AutoML is performed.
   *
   * _Required_: No
   *
   * _Type_: [AutoMLConfig](aws-properties-personalize-solution-automlconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutoMLConfig?: PersonalizeSolutionAutoMLConfig;
}

/**
 * Provides the name and range of a continuous hyperparameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-continuoushyperparameterrange.html}
 **/
export interface PersonalizeSolutionContinuousHyperParameterRange {
  /**
   * The minimum allowable value for the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinValue?: Value<number>;
  /**
   * The maximum allowable value for the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxValue?: Value<number>;
  /**
   * The name of the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Describes the properties for hyperparameter optimization (HPO).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoconfig.html}
 **/
export interface PersonalizeSolutionHpoConfig {
  /**
   * Describes the resource configuration for HPO.
   *
   * _Required_: No
   *
   * _Type_: [HpoResourceConfig](aws-properties-personalize-solution-hporesourceconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HpoResourceConfig?: PersonalizeSolutionHpoResourceConfig;
  /**
   * The hyperparameters and their allowable ranges.
   *
   * _Required_: No
   *
   * _Type_: [AlgorithmHyperParameterRanges](aws-properties-personalize-solution-algorithmhyperparameterranges.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlgorithmHyperParameterRanges?: PersonalizeSolutionAlgorithmHyperParameterRanges;
  /**
   * The metric to optimize during HPO.
   *
   * Amazon Personalize doesn't support configuring the `hpoObjective` at this time.
   *
   * _Required_: No
   *
   * _Type_: [HpoObjective](aws-properties-personalize-solution-hpoobjective.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HpoObjective?: PersonalizeSolutionHpoObjective;
}

/**
 * The metric to optimize during hyperparameter optimization (HPO).
 *
 * **Note**
 *
 * Amazon Personalize doesn't support configuring the `hpoObjective` at this time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-hpoobjective.html}
 **/
export interface PersonalizeSolutionHpoObjective {
  /**
   * The name of the metric.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MetricName?: Value<string>;
  /**
   * The type of the metric. Valid values are `Maximize` and `Minimize`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * A regular expression for finding the metric in the training job logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MetricRegex?: Value<string>;
}

/**
 * Provides the name and range of an integer-valued hyperparameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-solution-integerhyperparameterrange.html}
 **/
export interface PersonalizeSolutionIntegerHyperParameterRange {
  /**
   * The minimum allowable value for the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `-1000000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinValue?: Value<number>;
  /**
   * The maximum allowable value for the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Maximum_: `1000000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxValue?: Value<number>;
  /**
   * The name of the hyperparameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}
export interface PersonalizeSolutionProperties {
  /**
   * We don't recommend enabling automated machine learning. Instead, match your use case to the available Amazon Personalize recipes. For more information, see [Determining your use case.](https://docs.aws.amazon.com/personalize/latest/dg/determining-use-case.html)
   *
   * When true, Amazon Personalize performs a search for the best USER_PERSONALIZATION recipe from the list specified in the solution configuration (`recipeArn` must not be specified). When false (the default), Amazon Personalize uses `recipeArn` for training.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PerformAutoML?: Value<boolean>;
  /**
   * Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PerformHPO?: Value<boolean>;
  /**
   * The event type (for example, 'click' or 'like') that is used for training the model. If no `eventType` is provided, Amazon Personalize uses all interactions for training with equal weight regardless of type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EventType?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the dataset group that provides the training data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):personalize:.*:.*:.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatasetGroupArn: Value<string>;
  /**
   * Describes the configuration properties for the solution.
   *
   * _Required_: No
   *
   * _Type_: [SolutionConfig](aws-properties-personalize-solution-solutionconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SolutionConfig?: PersonalizeSolutionSolutionConfig;
  /**
   * The ARN of the recipe used to create the solution.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):personalize:.*:.*:.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RecipeArn?: Value<string>;
  /**
   * The name of the solution.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html}
 */
export interface PersonalizeSolutionResource {
  Type: 'AWS::Personalize::Solution';
  Properties: PersonalizeSolutionProperties;
}
