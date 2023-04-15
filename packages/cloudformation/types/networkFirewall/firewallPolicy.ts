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
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-publishmetricaction.html}
 **/
export interface NetworkFirewallFirewallPolicyPublishMetricAction {
  /**
   * _Required_: Yes
   *
   * _Type_: List of [Dimension](aws-properties-networkfirewall-firewallpolicy-dimension.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions: List<NetworkFirewallFirewallPolicyDimension>;
}

/**
 * The setting that allows the policy owner to change the behavior of the rule group within a policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupoverride.html}
 **/
export interface NetworkFirewallFirewallPolicyStatefulRuleGroupOverride {
  /**
   * The action that changes the rule group from `DROP` to `ALERT`. This only applies to managed rule groups.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DROP_TO_ALERT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action?: Value<string>;
}

/**
 * An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify.
 *
 * You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings.
 *
 * You can use custom actions in the following places:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-customaction.html}
 **/
export interface NetworkFirewallFirewallPolicyCustomAction {
  /**
   * The descriptive name of the custom action. You can't change the name of a custom action after you create it.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionName: Value<string>;
  /**
   * The custom action associated with the action name.
   *
   * _Required_: Yes
   *
   * _Type_: [ActionDefinition](aws-properties-networkfirewall-firewallpolicy-actiondefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionDefinition: NetworkFirewallFirewallPolicyActionDefinition;
}

/**
 * Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statelessrulegroupreference.html}
 **/
export interface NetworkFirewallFirewallPolicyStatelessRuleGroupReference {
  /**
   * The Amazon Resource Name (ARN) of the stateless rule group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^arn:aws.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceArn: Value<string>;
  /**
   * An integer setting that indicates the order in which to run the stateless rule groups in a single [AWS::NetworkFirewall::FirewallPolicy](aws-resource-networkfirewall-firewallpolicy.md). Network Firewall applies each stateless rule group to a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
}

/**
 * Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.html}
 **/
export interface NetworkFirewallFirewallPolicyStatefulRuleGroupReference {
  /**
   * The Amazon Resource Name (ARN) of the stateful rule group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^arn:aws.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceArn: Value<string>;
  /**
   * An integer setting that indicates the order in which to run the stateful rule groups in a single [AWS::NetworkFirewall::FirewallPolicy](aws-resource-networkfirewall-firewallpolicy.md). This setting only applies to firewall policies that specify the `STRICT_ORDER` rule order in the stateful engine options settings.
   *
   * Network Firewall evalutes each stateful rule group against a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.
   *
   * You can change the priority settings of your rule groups at any time. To make it easier to insert rule groups later, number them so there's a wide range in between, for example use 100, 200, and so on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority?: Value<number>;
  /**
   * The action that allows the policy owner to override the behavior of the rule group within a policy.
   *
   * _Required_: No
   *
   * _Type_: [StatefulRuleGroupOverride](aws-properties-networkfirewall-firewallpolicy-statefulrulegroupoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Override?: NetworkFirewallFirewallPolicyStatefulRuleGroupOverride;
}

/**
 * A custom action to use in stateless rule actions settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-actiondefinition.html}
 **/
export interface NetworkFirewallFirewallPolicyActionDefinition {
  /**
   * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
   *
   * You can pair this custom action with any of the standard stateless rule actions. For example, you could pair this in a rule action with the standard action that forwards the packet for stateful inspection. Then, when a packet matches the rule, Network Firewall publishes metrics for the packet and forwards it.
   *
   * _Required_: No
   *
   * _Type_: [PublishMetricAction](aws-properties-networkfirewall-firewallpolicy-publishmetricaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublishMetricAction?: NetworkFirewallFirewallPolicyPublishMetricAction;
}

/**
 * The value to use in an Amazon CloudWatch custom metric dimension. This is used in the `PublishMetrics` custom action. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric.
 *
 * AWS Network Firewall sets the dimension name to `CustomAction` and you provide the dimension value.
 *
 * For more information about CloudWatch custom metric dimensions, see [Publishing Custom Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions) in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-dimension.html}
 **/
export interface NetworkFirewallFirewallPolicyDimension {
  /**
   * The value to use in the custom metric dimension.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9-_ ]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * The traffic filtering behavior of a firewall policy, defined in a collection of stateless and stateful rule groups and other settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html}
 **/
export interface NetworkFirewallFirewallPolicyFirewallPolicy {
  /**
   * References to the stateless rule groups that are used in the policy. These define the matching criteria in stateless rules.
   *
   * _Required_: No
   *
   * _Type_: List of [StatelessRuleGroupReference](aws-properties-networkfirewall-firewallpolicy-statelessrulegroupreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatelessRuleGroupReferences?: List<NetworkFirewallFirewallPolicyStatelessRuleGroupReference>;
  /**
   * References to the stateful rule groups that are used in the policy. These define the inspection criteria in stateful rules.
   *
   * _Required_: No
   *
   * _Type_: List of [StatefulRuleGroupReference](aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatefulRuleGroupReferences?: List<NetworkFirewallFirewallPolicyStatefulRuleGroupReference>;
  /**
   * The actions to take on a packet if it doesn't match any of the stateless rules in the policy. If you want non-matching packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.
   *
   * You must specify one of the standard actions: `aws:pass`, `aws:drop`, or `aws:forward_to_sfe`. In addition, you can specify custom actions that are compatible with your standard section choice.
   *
   * For example, you could specify `["aws:pass"]` or you could specify `["aws:pass", “customActionName”]`. For information about compatibility, see the custom action descriptions.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatelessDefaultActions: List<Value<string>>;
  /**
   * Additional options governing how Network Firewall handles stateful rules. The stateful rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.
   *
   * _Required_: No
   *
   * _Type_: [StatefulEngineOptions](aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatefulEngineOptions?: NetworkFirewallFirewallPolicyStatefulEngineOptions;
  /**
   * The custom action definitions that are available for use in the firewall policy's `StatelessDefaultActions` setting. You name each custom action that you define, and then you can use it by name in your default actions specifications.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomAction](aws-properties-networkfirewall-firewallpolicy-customaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatelessCustomActions?: List<NetworkFirewallFirewallPolicyCustomAction>;
  /**
   * The actions to take on a fragmented packet if it doesn't match any of the stateless rules in the policy. If you want non-matching fragmented packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe`.
   *
   * You must specify one of the standard actions: `aws:pass`, `aws:drop`, or `aws:forward_to_sfe`. In addition, you can specify custom actions that are compatible with your standard section choice.
   *
   * For example, you could specify `["aws:pass"]` or you could specify `["aws:pass", “customActionName”]`. For information about compatibility, see the custom action descriptions.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatelessFragmentDefaultActions: List<Value<string>>;
  /**
   * The default actions to take on a packet that doesn't match any stateful rules. The stateful default action is optional, and is only valid when using the strict rule order.
   *
   * Valid values of the stateful default action:
   */
  StatefulDefaultActions?: List<Value<string>>;
}

/**
 * Configuration settings for the handling of the stateful rule groups in a firewall policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.html}
 **/
export interface NetworkFirewallFirewallPolicyStatefulEngineOptions {
  /**
   * Configures how Network Firewall processes traffic when a network connection breaks midstream. Network connections can break due to disruptions in external networks or within the firewall itself.
   */
  StreamExceptionPolicy?: Value<string>;
  /**
   * Indicates how to manage the order of stateful rule evaluation for the policy. `DEFAULT_ACTION_ORDER` is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the _ AWS Network Firewall Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DEFAULT_ACTION_ORDER | STRICT_ORDER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleOrder?: Value<string>;
}
export interface NetworkFirewallFirewallPolicyProperties {
  /**
   * A description of the firewall policy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^.*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The descriptive name of the firewall policy. You can't change the name of a firewall policy after you create it.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9-]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FirewallPolicyName: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
   * The traffic filtering behavior of a firewall policy, defined in a collection of stateless and stateful rule groups and other settings.
   *
   * _Required_: Yes
   *
   * _Type_: [FirewallPolicy](aws-properties-networkfirewall-firewallpolicy-firewallpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirewallPolicy: NetworkFirewallFirewallPolicyFirewallPolicy;
}

/**
 * Use the [AWS::NetworkFirewall::FirewallPolicy](#aws-resource-networkfirewall-firewallpolicy) to define the stateless and stateful network traffic filtering behavior for your [AWS::NetworkFirewall::Firewall](aws-resource-networkfirewall-firewall.md). You can use one firewall policy for multiple firewalls.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html}
 */
export interface NetworkFirewallFirewallPolicyResource {
  Type: 'AWS::NetworkFirewall::FirewallPolicy';
  Properties: NetworkFirewallFirewallPolicyProperties;
}
