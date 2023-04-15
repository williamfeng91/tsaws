/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Sets additional capacity units configured for your rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API. You can add and remove capacity units to fit your usage requirements.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendraranking-executionplan-capacityunitsconfiguration.html}
 **/
export interface KendraRankingExecutionPlanCapacityUnitsConfiguration {
  /**
   * The amount of extra capacity for your rescore execution plan.
   *
   * A single extra capacity unit for a rescore execution plan provides 0.01 rescore requests per second. You can add up to 1000 extra capacity units.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RescoreCapacityUnits: Value<number>;
}
export interface KendraRankingExecutionPlanProperties {
  /**
   * A description for the rescore execution plan.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * You can set additional capacity units to meet the needs of your rescore execution plan. You are given a single capacity unit by default. If you want to use the default capacity, you don't set additional capacity units. For more information on the default capacity and additional capacity units, see [Adjusting capacity](https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html).
   *
   * _Required_: No
   *
   * _Type_: [CapacityUnitsConfiguration](aws-properties-kendraranking-executionplan-capacityunitsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityUnits?: KendraRankingExecutionPlanCapacityUnitsConfiguration;
  /**
   * A list of key-value pairs that identify or categorize your rescore execution plan. You can also use tags to help control access to the rescore execution plan. Tag keys and values can consist of Unicode letters, digits, white space. They can also consist of underscore, period, colon, equal, plus, and asperand.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A name for the rescore execution plan.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9_-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.
 *
 * For an example of using the `CreateRescoreExecutionPlan` API, including using the Python and Java SDKs, see [Semantically ranking a search service's results](https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html}
 */
export interface KendraRankingExecutionPlanResource {
  Type: 'AWS::KendraRanking::ExecutionPlan';
  Properties: KendraRankingExecutionPlanProperties;
}
