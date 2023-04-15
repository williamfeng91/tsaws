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

/**
 * Provides the runtime system, policy definition, and whether debug logging enabled. You can specify the following CustomPolicyDetails parameter values only for AWS Config Custom Policy rules.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-custompolicydetails.html}
 **/
export interface ConfigConfigRuleCustomPolicyDetails {
  /**
   * The boolean expression for enabling debug logging for your AWS Config Custom Policy rule. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableDebugLogDelivery?: Value<boolean>;
  /**
   * The runtime system for your AWS Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by AWS Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `guard-2.x.x`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyRuntime?: Value<string>;
  /**
   * The policy definition containing the logic for your AWS Config Custom Policy rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyText?: Value<string>;
}

/**
 * Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-scope.html}
 **/
export interface ConfigConfigRuleScope {
  /**
   * The ID of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for `ComplianceResourceTypes`.
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
  ComplianceResourceId?: Value<string>;
  /**
   * The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for `ComplianceResourceId`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComplianceResourceTypes?: List<Value<string>>;
  /**
   * The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.
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
  TagKey?: Value<string>;
  /**
   * The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. If you specify a value for `TagValue`, you must also specify a value for `TagKey`.
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
  TagValue?: Value<string>;
}

/**
 * Provides the CustomPolicyDetails, the rule owner (`AWS` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your AWS resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source.html}
 **/
export interface ConfigConfigRuleSource {
  /**
   * Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to `CUSTOM_POLICY`.
   *
   * _Required_: No
   *
   * _Type_: [CustomPolicyDetails](aws-properties-config-configrule-custompolicydetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomPolicyDetails?: ConfigConfigRuleCustomPolicyDetails;
  /**
   * Indicates whether AWS or the customer owns and manages the AWS Config rule.
   *
   * AWS Config Managed Rules are predefined rules owned by AWS. For more information, see [AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the _ AWS Config developer guide_.
   *
   * AWS Config Custom Rules are rules that you can develop either with Guard (`CUSTOM_POLICY`) or AWS Lambda (`CUSTOM_LAMBDA`). For more information, see [AWS Config Custom Rules ](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the _ AWS Config developer guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AWS | CUSTOM_LAMBDA | CUSTOM_POLICY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Owner: Value<string>;
  /**
   * Provides the source and the message types that cause AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic.
   *
   * If the owner is set to `CUSTOM_POLICY`, the only acceptable values for the AWS Config rule trigger message type are `ConfigurationItemChangeNotification` and `OversizedConfigurationItemChangeNotification`.
   *
   * _Required_: No
   *
   * _Type_: List of [SourceDetail](aws-properties-config-configrule-source-sourcedetails.md)
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceDetails?: List<ConfigConfigRuleSourceDetail>;
  /**
   * For AWS Config Managed rules, a predefined identifier from a list. For example, `IAM_PASSWORD_POLICY` is a managed rule. To reference a managed rule, see [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
   *
   * For AWS Config Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's AWS Lambda function, such as `arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name`.
   *
   * For AWS Config Custom Policy rules, this field will be ignored.
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
  SourceIdentifier?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configrule-source-sourcedetails.html}
 **/
export interface ConfigConfigRuleSourceDetail {
  EventSource: Value<string>;
  MaximumExecutionFrequency?: Value<string>;
  MessageType: Value<string>;
}
export interface ConfigConfigRuleProperties {
  /**
   * A name for the AWS Config rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigRuleName?: Value<string>;
  /**
   * The description that you provide for the AWS Config rule.
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
   * A string, in JSON format, that is passed to the AWS Config rule Lambda function.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputParameters?: { [key: string]: any };
  /**
   * The maximum frequency with which AWS Config runs evaluations for a rule. You can specify a value for `MaximumExecutionFrequency` when:
   */
  MaximumExecutionFrequency?: Value<string>;
  /**
   * Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.
   *
   * The scope can be empty.
   *
   * _Required_: No
   *
   * _Type_: [Scope](aws-properties-config-configrule-scope.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: ConfigConfigRuleScope;
  /**
   * Provides the rule owner (`AWS` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.
   *
   * _Required_: Yes
   *
   * _Type_: [Source](aws-properties-config-configrule-source.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: ConfigConfigRuleSource;
}

/**
 * Adds or updates an AWS Config rule to evaluate if your AWS resources comply with your desired configurations. For information on how many AWS Config rules you can have per account, see [https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the _AWS Config Developer Guide_.
 *
 * There are two types of rules: _AWS Config Managed Rules_ and _AWS Config Custom Rules_. You can use the `ConfigRule` resource to create both AWS Config Managed Rules and AWS Config Custom Rules.
 *
 * AWS Config Managed Rules are predefined, customizable rules created by AWS Config. For a list of managed rules, see [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html). If you are adding an AWS Config managed rule, you must specify the rule's identifier for the `SourceIdentifier` key.
 *
 * AWS Config Custom Rules are rules that you create from scratch. There are two ways to create AWS Config custom rules: with Lambda functions ([AWS Lambda Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function)) and with Guard ([Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard)), a policy-as-code language. AWS Config custom rules created with AWS Lambda are called _AWS Config Custom Lambda Rules_ and AWS Config custom rules created with Guard are called _AWS Config Custom Policy Rules_.
 *
 * If you are adding a newAWS Config Custom Lambda rule, you first need to create an AWS Lambda function that the rule invokes to evaluate your resources. When you use the `ConfigRule` resource to add a Custom Lambda rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. You specify the ARN in the `SourceIdentifier` key. This key is part of the `Source` object, which is part of the `ConfigRule` object.
 *
 * For any new AWS Config rule that you add, specify the `ConfigRuleName` in the `ConfigRule` object. Do not specify the `ConfigRuleArn` or the `ConfigRuleId`. These values are generated by AWS Config for new rules.
 *
 * If you are updating a rule that you added previously, you can specify the rule by `ConfigRuleName`, `ConfigRuleId`, or `ConfigRuleArn` in the `ConfigRule` data type that you use in this request.
 *
 * For more information about developing and using AWS Config rules, see [Evaluating Resources with AWS Config Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html) in the _AWS Config Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configrule.html}
 */
export interface ConfigConfigRuleResource {
  Type: 'AWS::Config::ConfigRule';
  Properties: ConfigConfigRuleProperties;
}
