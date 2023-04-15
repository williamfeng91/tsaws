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
 * An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.html}
 **/
export interface ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata {
  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagKeyScope?: Value<string>;
  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagValueScope?: Value<string>;
  /**
   * The description that you provide for your organization AWS Config rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ID of the AWS resource that was evaluated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `768`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceIdScope?: Value<string>;
  /**
   * For organization config managed rules, a predefined identifier from a list. For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [Using AWS Config managed rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleIdentifier: Value<string>;
  /**
   * The type of the AWS resource that was evaluated.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTypesScope?: List<Value<string>>;
  /**
   * The maximum frequency with which AWS Config runs evaluations for a rule. This is for an AWS Config managed rule that is triggered at a periodic frequency.
   *
   * By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `One_Hour | Six_Hours | Three_Hours | Twelve_Hours | TwentyFour_Hours`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumExecutionFrequency?: Value<string>;
  /**
   * A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputParameters?: Value<string>;
}

/**
 * An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.html}
 **/
export interface ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata {
  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagKeyScope?: Value<string>;
  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagValueScope?: Value<string>;
  /**
   * The description that you provide for your organization AWS Config rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ID of the AWS resource that was evaluated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `768`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceIdScope?: Value<string>;
  /**
   * The lambda function ARN.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionArn: Value<string>;
  /**
   * The type of notification that triggers AWS Config to run an evaluation for a rule. You can specify the following notification types:
   */
  OrganizationConfigRuleTriggerTypes: List<Value<string>>;
  /**
   * The type of the AWS resource that was evaluated.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTypesScope?: List<Value<string>>;
  /**
   * The maximum frequency with which AWS Config runs evaluations for a rule. Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties).
   *
   * By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `One_Hour | Six_Hours | Three_Hours | Twelve_Hours | TwentyFour_Hours`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumExecutionFrequency?: Value<string>;
  /**
   * A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputParameters?: Value<string>;
}

/**
 * An object that specifies metadata for your organization's AWS Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of AWS resource, and organization trigger types that initiate AWS Config to evaluate AWS resources against a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.html}
 **/
export interface ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata {
  /**
   * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagKeyScope?: Value<string>;
  /**
   * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagValueScope?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Runtime: Value<string>;
  /**
   * The policy definition containing the logic for your organization AWS Config Custom Policy rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyText: Value<string>;
  /**
   * The description that you provide for your organization AWS Config Custom Policy rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ID of the AWS resource that was evaluated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `768`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceIdScope?: Value<string>;
  /**
   * The type of notification that initiates AWS Config to run an evaluation for a rule. For AWS Config Custom Policy rules, AWS Config supports change-initiated notification types:
   */
  OrganizationConfigRuleTriggerTypes?: List<Value<string>>;
  /**
   * A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule. List is null when debug logging is enabled for all accounts.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DebugLogDeliveryAccounts?: List<Value<string>>;
  /**
   * The type of the AWS resource that was evaluated.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTypesScope?: List<Value<string>>;
  /**
   * The maximum frequency with which AWS Config runs evaluations for a rule. Your AWS Config Custom Policy rule is triggered when AWS Config delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `One_Hour | Six_Hours | Three_Hours | Twelve_Hours | TwentyFour_Hours`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumExecutionFrequency?: Value<string>;
  /**
   * A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputParameters?: Value<string>;
}
export interface ConfigOrganizationConfigRuleProperties {
  /**
   * An `OrganizationManagedRuleMetadata` object.
   *
   * _Required_: No
   *
   * _Type_: [OrganizationManagedRuleMetadata](aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationManagedRuleMetadata?: ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata;
  /**
   * The name that you assign to organization AWS Config rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OrganizationConfigRuleName: Value<string>;
  /**
   * An `OrganizationCustomRuleMetadata` object.
   *
   * _Required_: No
   *
   * _Type_: [OrganizationCustomRuleMetadata](aws-properties-config-organizationconfigrule-organizationcustomrulemetadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationCustomRuleMetadata?: ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata;
  /**
   * A comma-separated list of accounts excluded from organization AWS Config rule.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedAccounts?: List<Value<string>>;
  /**
   * An object that specifies metadata for your organization's AWS Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of AWS resource, and organization trigger types that initiate AWS Config to evaluate AWS resources against a rule.
   *
   * _Required_: No
   *
   * _Type_: [OrganizationCustomPolicyRuleMetadata](aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationCustomPolicyRuleMetadata?: ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata;
}

/**
 * Adds or updates an AWS Config rule for your entire organization to evaluate if your AWS resources comply with your desired configurations. For information on how many organization AWS Config rules you can have per account, see [https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the _AWS Config Developer Guide_.
 *
 * Only a management account and a delegated administrator can create or update an organization AWS Config rule. When calling the `OrganizationConfigRule` resource with a delegated administrator, you must ensure AWS Organizations `ListDelegatedAdministrator` permissions are added. An organization can have up to 3 delegated administrators.
 *
 * The `OrganizationConfigRule` resource enables organization service access through the `EnableAWSServiceAccess` action and creates a service-linked role `AWSServiceRoleForConfigMultiAccountSetup` in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. AWS Config verifies the existence of role with `GetRole` action.
 *
 * To use the `OrganizationConfigRule` resource with delegated administrator, register a delegated administrator by calling AWS Organization `register-delegated-administrator` for `config-multiaccountsetup.amazonaws.com`.
 *
 * There are two types of rules: _AWS Config Managed Rules_ and _AWS Config Custom Rules_. You can use `PutOrganizationConfigRule` to create both AWS Config Managed Rules and AWS Config Custom Rules.
 *
 * AWS Config Managed Rules are predefined, customizable rules created by AWS Config. For a list of managed rules, see [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html). If you are adding an AWS Config managed rule, you must specify the rule's identifier for the `RuleIdentifier` key.
 *
 * AWS Config Custom Rules are rules that you create from scratch. There are two ways to create AWS Config custom rules: with Lambda functions ([AWS Lambda Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function)) and with Guard ([Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard)), a policy-as-code language. AWS Config custom rules created with AWS Lambda are called _AWS Config Custom Lambda Rules_ and AWS Config custom rules created with Guard are called _AWS Config Custom Policy Rules_.
 *
 * If you are adding a new AWS Config Custom Lambda rule, you first need to create an AWS Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use `PutOrganizationConfigRule` to add a Custom Lambda rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconfigrule.html}
 */
export interface ConfigOrganizationConfigRuleResource {
  Type: 'AWS::Config::OrganizationConfigRule';
  Properties: ConfigOrganizationConfigRuleProperties;
}
