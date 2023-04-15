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

/**
 * Represents the output of the `CreateBudget` operation. The content consists of the detailed metadata and data file information, and the current status of the `budget` object.
 *
 * This is the Amazon Resource Name (ARN) pattern for a budget:
 *
 * `arn:aws:budgets::AccountId:budget/budgetName`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-budgetdata.html}
 **/
export interface BudgetsBudgetBudgetData {
  /**
   * The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget.
   *
   * `BudgetLimit` is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to `100`. This is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use `BudgetLimit` with `PlannedBudgetLimits` for `CreateBudget` and `UpdateBudget` actions.
   *
   * _Required_: No
   *
   * _Type_: [Spend](aws-properties-budgets-budget-spend.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BudgetLimit?: BudgetsBudgetSpend;
  /**
   * The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
   *
   * The start date for a budget. If you created your budget and didn't specify a start date, the start date defaults to the start of the chosen time period (MONTHLY, QUARTERLY, or ANNUALLY). For example, if you create your budget on January 24, 2019, choose `MONTHLY`, and don't set a start date, the start date defaults to `01/01/19 00:00 UTC`. The defaults are the same for the AWS Billing and Cost Management console and the API.
   *
   * You can change your start date with the `UpdateBudget` operation.
   *
   * After the end date, AWS deletes the budget and all associated notifications and subscribers.
   *
   * _Required_: No
   *
   * _Type_: [TimePeriod](aws-properties-budgets-budget-timeperiod.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimePeriod?: BudgetsBudgetTimePeriod;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AutoAdjustData](aws-properties-budgets-budget-autoadjustdata.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutoAdjustData?: BudgetsBudgetAutoAdjustData;
  /**
   * The length of time until a budget resets the actual and forecasted spend. `DAILY` is available only for `RI_UTILIZATION` and `RI_COVERAGE` budgets.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ANNUALLY | DAILY | MONTHLY | QUARTERLY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeUnit: Value<string>;
  /**
   * A map containing multiple `BudgetLimit`, including current or future limits.
   *
   * `PlannedBudgetLimits` is available for cost or usage budget and supports both monthly and quarterly `TimeUnit`.
   *
   * For monthly budgets, provide 12 months of `PlannedBudgetLimits` values. This must start from the current month and include the next 11 months. The `key` is the start of the month, `UTC` in epoch seconds.
   *
   * For quarterly budgets, provide four quarters of `PlannedBudgetLimits` value entries in standard calendar quarter increments. This must start from the current quarter and include the next three quarters. The `key` is the start of the quarter, `UTC` in epoch seconds.
   *
   * If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the `PlannedBudgetLimits` values only for the remaining periods.
   *
   * If the budget begins at a date in the future, provide `PlannedBudgetLimits` values from the start date of the budget.
   *
   * After all of the `BudgetLimit` values in `PlannedBudgetLimits` are used, the budget continues to use the last limit as the `BudgetLimit`. At that point, the planned budget provides the same experience as a fixed budget.
   *
   * `DescribeBudget` and `DescribeBudgets` response along with `PlannedBudgetLimits` also contain `BudgetLimit` representing the current month or quarter limit present in `PlannedBudgetLimits`. This only applies to budgets that are created with `PlannedBudgetLimits`. Budgets that are created without `PlannedBudgetLimits` only contain `BudgetLimit`. They don't contain `PlannedBudgetLimits`.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PlannedBudgetLimits?: { [key: string]: any };
  /**
   * The cost filters, such as `Region`, `Service`, `member account`, `Tag`, or `Cost Category`, that are applied to a budget.
   *
   * AWS Budgets supports the following services as a `Service` filter for RI budgets:
   */
  CostFilters?: { [key: string]: any };
  /**
   * The name of a budget. The value must be unique within an account. `BudgetName` can't include `:` and `` characters. If you don't include value for `BudgetName` in the template, Billing and Cost Management assigns your budget a randomly generated name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BudgetName?: Value<string>;
  /**
   * The types of costs that are included in this `COST` budget.
   *
   * `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, and `SAVINGS_PLANS_COVERAGE` budgets do not have `CostTypes`.
   *
   * _Required_: No
   *
   * _Type_: [CostTypes](aws-properties-budgets-budget-costtypes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CostTypes?: BudgetsBudgetCostTypes;
  /**
   * Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `COST | RI_COVERAGE | RI_UTILIZATION | SAVINGS_PLANS_COVERAGE | SAVINGS_PLANS_UTILIZATION | USAGE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BudgetType: Value<string>;
}

/**
 * The `Subscriber` property type specifies who to notify for a Billing and Cost Management budget notification. The subscriber consists of a subscription type, and either an Amazon SNS topic or an email address.
 *
 * For example, an email subscriber would have the following parameters:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-subscriber.html}
 **/
export interface BudgetsBudgetSubscriber {
  /**
   * The type of notification that AWS sends to a subscriber.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EMAIL | SNS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubscriptionType: Value<string>;
  /**
   * The address that AWS sends budget notifications to, either an SNS topic or an email.
   *
   * When you create a subscriber, the value of `Address` can't contain line breaks.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address: Value<string>;
}

/**
 * The parameters that determine the budget amount for an auto-adjusting budget.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-autoadjustdata.html}
 **/
export interface BudgetsBudgetAutoAdjustData {
  /**
   * The string that defines whether your budget auto-adjusts based on historical or forecasted data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `FORECAST | HISTORICAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoAdjustType: Value<string>;
  /**
   * The parameters that define or describe the historical data that your auto-adjusting budget is based on.
   *
   * _Required_: No
   *
   * _Type_: [HistoricalOptions](aws-properties-budgets-budget-historicaloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HistoricalOptions?: BudgetsBudgetHistoricalOptions;
}

/**
 * The types of cost that are included in a `COST` budget, such as tax and subscriptions.
 *
 * `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, and `SAVINGS_PLANS_COVERAGE` budgets don't have `CostTypes`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-costtypes.html}
 **/
export interface BudgetsBudgetCostTypes {
  /**
   * Specifies whether a budget includes support subscription fees.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeSupport?: Value<boolean>;
  /**
   * Specifies whether a budget includes non-RI subscription costs.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeOtherSubscription?: Value<boolean>;
  /**
   * Specifies whether a budget includes taxes.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeTax?: Value<boolean>;
  /**
   * Specifies whether a budget includes subscriptions.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeSubscription?: Value<boolean>;
  /**
   * Specifies whether a budget uses a blended rate.
   *
   * The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseBlended?: Value<boolean>;
  /**
   * Specifies whether a budget includes upfront RI costs.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeUpfront?: Value<boolean>;
  /**
   * Specifies whether a budget includes discounts.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeDiscount?: Value<boolean>;
  /**
   * Specifies whether a budget includes credits.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeCredit?: Value<boolean>;
  /**
   * Specifies whether a budget includes recurring fees such as monthly RI fees.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeRecurring?: Value<boolean>;
  /**
   * Specifies whether a budget uses the amortized rate.
   *
   * The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseAmortized?: Value<boolean>;
  /**
   * Specifies whether a budget includes refunds.
   *
   * The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeRefund?: Value<boolean>;
}

/**
 * A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notificationwithsubscribers.html}
 **/
export interface BudgetsBudgetNotificationWithSubscribers {
  /**
   * A list of subscribers who are subscribed to this notification.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Subscriber](aws-properties-budgets-budget-subscriber.md)
   *
   * _Maximum_: `11`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subscribers: List<BudgetsBudgetSubscriber>;
  /**
   * The notification that's associated with a budget.
   *
   * _Required_: Yes
   *
   * _Type_: [Notification](aws-properties-budgets-budget-notification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Notification: BudgetsBudgetNotification;
}

/**
 * A notification that's associated with a budget. A budget can have up to ten notifications.
 *
 * Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
 *
 * For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-notification.html}
 **/
export interface BudgetsBudgetNotification {
  /**
   * The comparison that's used for this notification.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EQUAL_TO | GREATER_THAN | LESS_THAN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonOperator: Value<string>;
  /**
   * Specifies whether the notification is for how much you have spent (`ACTUAL`) or for how much that you're forecasted to spend (`FORECASTED`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ACTUAL | FORECASTED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationType: Value<string>;
  /**
   * The threshold that's associated with a notification. Thresholds are always a percentage, and many customers find value being alerted between 50% - 200% of the budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted amount.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Threshold: Value<number>;
  /**
   * The type of threshold for a notification. For `ABSOLUTE_VALUE` thresholds, AWS notifies you when you go over or are forecasted to go over your total cost threshold. For `PERCENTAGE` thresholds, AWS notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a `PERCENTAGE` threshold of 80%, AWS notifies you when you go over 160 dollars.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ABSOLUTE_VALUE | PERCENTAGE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThresholdType?: Value<string>;
}

/**
 * The parameters that define or describe the historical data that your auto-adjusting budget is based on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-historicaloptions.html}
 **/
export interface BudgetsBudgetHistoricalOptions {
  /**
   * The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount. The maximum value depends on the `TimeUnit` granularity of the budget:
   */
  BudgetAdjustmentPeriod: Value<number>;
}

/**
 * The amount of cost or usage that's measured for a budget.
 *
 * For example, a `Spend` for `3 GB` of S3 usage has the following parameters:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-spend.html}
 **/
export interface BudgetsBudgetSpend {
  /**
   * The cost or usage amount that's associated with a budget forecast, actual spend, or budget threshold.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Amount: Value<number>;
  /**
   * The unit of measurement that's used for the budget forecast, actual spend, or budget threshold, such as USD or GBP.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit: Value<string>;
}

/**
 * The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budget-timeperiod.html}
 **/
export interface BudgetsBudgetTimePeriod {
  /**
   * The start date for a budget. If you created your budget and didn't specify a start date, the start date defaults to the start of the chosen time period (MONTHLY, QUARTERLY, or ANNUALLY). For example, if you create your budget on January 24, 2019, choose `MONTHLY`, and don't set a start date, the start date defaults to `01/01/19 00:00 UTC`. The defaults are the same for the AWS Billing and Cost Management console and the API.
   *
   * You can change your start date with the `UpdateBudget` operation.
   *
   * Valid values depend on the value of `BudgetType`:
   */
  Start?: Value<string>;
  /**
   * The end date for a budget. If you didn't specify an end date, AWS set your end date to `06/15/87 00:00 UTC`. The defaults are the same for the AWS Billing and Cost Management console and the API.
   *
   * After the end date, AWS deletes the budget and all the associated notifications and subscribers. You can change your end date with the `UpdateBudget` operation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  End?: Value<string>;
}
export interface BudgetsBudgetProperties {
  /**
   * A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your `CreateBudget` call, AWS creates the notifications and subscribers for you.
   *
   * _Required_: No
   *
   * _Type_: List of [NotificationWithSubscribers](aws-properties-budgets-budget-notificationwithsubscribers.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NotificationsWithSubscribers?: List<BudgetsBudgetNotificationWithSubscribers>;
  /**
   * The budget object that you want to create.
   *
   * _Required_: Yes
   *
   * _Type_: [BudgetData](aws-properties-budgets-budget-budgetdata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Budget: BudgetsBudgetBudgetData;
}

/**
 * The `AWS::Budgets::Budget` resource allows customers to take pre-defined actions that will trigger once a budget threshold has been exceeded. creates, replaces, or deletes budgets for Billing and Cost Management. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) in the _AWS Billing and Cost Management User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html}
 */
export interface BudgetsBudgetResource {
  Type: 'AWS::Budgets::Budget';
  Properties: BudgetsBudgetProperties;
}
