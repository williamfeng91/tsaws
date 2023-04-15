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
 * API stage name of the associated API stage in a usage plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-apistage.html}
 **/
export interface ApiGatewayUsagePlanApiStage {
  /**
   * API stage name of the associated API stage in a usage plan.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stage?: Value<string>;
  /**
   * API Id of the associated API stage in a usage plan.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiId?: Value<string>;
  /**
   * Map containing method level throttling information for API stage in a usage plan.
   *
   * _Required_: No
   *
   * _Type_: Map of [ThrottleSettings](aws-properties-apigateway-usageplan-throttlesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Throttle?: { [key: string]: ApiGatewayUsagePlanThrottleSettings };
}

/**
 * `ThrottleSettings` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-throttlesettings.html}
 **/
export interface ApiGatewayUsagePlanThrottleSettings {
  /**
   * The API target request burst rate limit. This allows more requests through for a period of time than the target rate limit.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BurstLimit?: Value<number>;
  /**
   * The API target request rate limit.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RateLimit?: Value<number>;
}

/**
 * `QuotaSettings` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.
 *
 * In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-quotasettings.html}
 **/
export interface ApiGatewayUsagePlanQuotaSettings {
  /**
   * The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | MONTH | WEEK`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Period?: Value<string>;
  /**
   * The target maximum number of requests that can be made in a given time period.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Limit?: Value<number>;
  /**
   * The number of requests subtracted from the given limit in the initial time period.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Offset?: Value<number>;
}
export interface ApiGatewayUsagePlanProperties {
  /**
   * The description of a usage plan.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The target maximum number of permitted requests per a given unit time interval.
   *
   * _Required_: No
   *
   * _Type_: [QuotaSettings](aws-properties-apigateway-usageplan-quotasettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Quota?: ApiGatewayUsagePlanQuotaSettings;
  /**
   * The associated API stages of a usage plan.
   *
   * _Required_: No
   *
   * _Type_: List of [ApiStage](aws-properties-apigateway-usageplan-apistage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiStages?: List<ApiGatewayUsagePlanApiStage>;
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A map containing method level throttling information for API stage in a usage plan.
   *
   * _Required_: No
   *
   * _Type_: [ThrottleSettings](aws-properties-apigateway-usageplan-throttlesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Throttle?: ApiGatewayUsagePlanThrottleSettings;
  /**
   * The name of a usage plan.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UsagePlanName?: Value<string>;
}

/**
 * The `AWS::ApiGateway::UsagePlan` resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see [Creating and Using API Usage Plans in Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) in the _API Gateway Developer Guide_.
 *
 * In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html}
 */
export interface ApiGatewayUsagePlanResource {
  Type: 'AWS::ApiGateway::UsagePlan';
  Properties: ApiGatewayUsagePlanProperties;
}
