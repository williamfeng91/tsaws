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
 * The Amazon EC2 Systems Manager (SSM) action definition details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-ssmactiondefinition.html}
 **/
export interface BudgetsBudgetsActionSsmActionDefinition {
  /**
   * The Region to run the (SSM) document.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `9`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `^w{2}-w+(-w+)?-d$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region: Value<string>;
  /**
   * The EC2 and RDS instance IDs.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceIds: List<Value<string>>;
  /**
   * The action subType.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `STOP_EC2_INSTANCES | STOP_RDS_INSTANCES`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtype: Value<string>;
}

/**
 * The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.
 *
 * For example, an email subscriber has the following parameters:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-subscriber.html}
 **/
export interface BudgetsBudgetsActionSubscriber {
  /**
   * The type of notification that AWS sends to a subscriber.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
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
 * The AWS Identity and Access Management (IAM) action definition details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html}
 **/
export interface BudgetsBudgetsActionIamActionDefinition {
  /**
   * The Amazon Resource Name (ARN) of the policy to be attached.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `25`
   *
   * _Maximum_: `684`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|us-iso-east-1|us-isob-east-1):iam::(d{12}|aws):policy(u002F[u0021-u007F]+u002F|u002F)[w+=,.@-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyArn: Value<string>;
  /**
   * A list of groups to be attached. There must be at least one group.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<Value<string>>;
  /**
   * A list of roles to be attached. There must be at least one role.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Roles?: List<Value<string>>;
  /**
   * A list of users to be attached. There must be at least one user.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Users?: List<Value<string>>;
}

/**
 * The definition is where you specify all of the type-specific parameters.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-definition.html}
 **/
export interface BudgetsBudgetsActionDefinition {
  /**
   * The Amazon EC2 Systems Manager (SSM) action definition details.
   *
   * _Required_: No
   *
   * _Type_: [SsmActionDefinition](aws-properties-budgets-budgetsaction-ssmactiondefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SsmActionDefinition?: BudgetsBudgetsActionSsmActionDefinition;
  /**
   * The AWS Identity and Access Management (IAM) action definition details.
   *
   * _Required_: No
   *
   * _Type_: [IamActionDefinition](aws-properties-budgets-budgetsaction-iamactiondefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamActionDefinition?: BudgetsBudgetsActionIamActionDefinition;
  /**
   * The service control policies (SCP) action definition details.
   *
   * _Required_: No
   *
   * _Type_: [ScpActionDefinition](aws-properties-budgets-budgetsaction-scpactiondefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScpActionDefinition?: BudgetsBudgetsActionScpActionDefinition;
}

/**
 * The service control policies (SCP) action definition details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-scpactiondefinition.html}
 **/
export interface BudgetsBudgetsActionScpActionDefinition {
  /**
   * A list of target IDs.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetIds: List<Value<string>>;
  /**
   * The policy ID attached.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `130`
   *
   * _Pattern_: `^p-[0-9a-zA-Z_]{8,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyId: Value<string>;
}

/**
 * The trigger threshold of the action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-actionthreshold.html}
 **/
export interface BudgetsBudgetsActionActionThreshold {
  /**
   * The type of threshold for a notification.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ABSOLUTE_VALUE | PERCENTAGE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The threshold of a notification.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
}
export interface BudgetsBudgetsActionProperties {
  /**
   * The role passed for action execution and reversion. Roles and actions must be in the same account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `32`
   *
   * _Maximum_: `618`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|us-iso-east-1|us-isob-east-1):iam::d{12}:role(u002F[u0021-u007F]+u002F|u002F)[w+=,.@-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRoleArn: Value<string>;
  /**
   * The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `APPLY_IAM_POLICY | APPLY_SCP_POLICY | RUN_SSM_DOCUMENTS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ActionType: Value<string>;
  /**
   * The type of a notification.
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
   * The trigger threshold of the action.
   *
   * _Required_: Yes
   *
   * _Type_: [ActionThreshold](aws-properties-budgets-budgetsaction-actionthreshold.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionThreshold: BudgetsBudgetsActionActionThreshold;
  /**
   * Specifies all of the type-specific parameters.
   *
   * _Required_: Yes
   *
   * _Type_: [Definition](aws-properties-budgets-budgetsaction-definition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition: BudgetsBudgetsActionDefinition;
  /**
   * This specifies if the action needs manual or automatic approval.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTOMATIC | MANUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApprovalModel?: Value<string>;
  /**
   * A list of subscribers.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Subscriber](aws-properties-budgets-budgetsaction-subscriber.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subscribers: List<BudgetsBudgetsActionSubscriber>;
  /**
   * A string that represents the budget name. ":" and "" characters aren't allowed.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BudgetName: Value<string>;
}

/**
 * The `AWS::Budgets::BudgetsAction` resource enables you to take predefined actions that are initiated when a budget threshold has been exceeded. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) in the _AWS Billing and Cost Management User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html}
 */
export interface BudgetsBudgetsActionResource {
  Type: 'AWS::Budgets::BudgetsAction';
  Properties: BudgetsBudgetsActionProperties;
}
