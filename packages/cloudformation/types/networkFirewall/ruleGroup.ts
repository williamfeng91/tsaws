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
 * A custom action to use in stateless rule actions settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-actiondefinition.html}
 **/
export interface NetworkFirewallRuleGroupActionDefinition {
  /**
   * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
   *
   * You can pair this custom action with any of the standard stateless rule actions. For example, you could pair this in a rule action with the standard action that forwards the packet for stateful inspection. Then, when a packet matches the rule, Network Firewall publishes metrics for the packet and forwards it.
   *
   * _Required_: No
   *
   * _Type_: [PublishMetricAction](aws-properties-networkfirewall-rulegroup-publishmetricaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublishMetricAction?: NetworkFirewallRuleGroupPublishMetricAction;
}

/**
 * TCP flags and masks to inspect packets for. This is used in the [AWS::NetworkFirewall::RuleGroup MatchAttributes](aws-properties-networkfirewall-rulegroup-matchattributes.md) specification.
 *
 * For example:
 *
 * `"TCPFlags": [ { "Flags": [ "ECE", "SYN" ], "Masks": [ "SYN", "ECE" ] } ]`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tcpflagfield.html}
 **/
export interface NetworkFirewallRuleGroupTCPFlagField {
  /**
   * Used in conjunction with the `Masks` setting to define the flags that must be set and flags that must not be set in order for the packet to match. This setting can only specify values that are also specified in the `Masks` setting.
   *
   * For the flags that are specified in the masks setting, the following must be true for the packet to match:
   */
  Flags: List<Value<string>>;
  /**
   * The set of flags to consider in the inspection. To inspect all flags in the valid values list, leave this with no setting.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Masks?: List<Value<string>>;
}

/**
 * The value to use in an Amazon CloudWatch custom metric dimension. This is used in the `PublishMetrics` custom action. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric.
 *
 * AWS Network Firewall sets the dimension name to `CustomAction` and you provide the dimension value.
 *
 * For more information about CloudWatch custom metric dimensions, see [Publishing Custom Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions) in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-dimension.html}
 **/
export interface NetworkFirewallRuleGroupDimension {
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
 * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html}
 **/
export interface NetworkFirewallRuleGroupStatelessRulesAndCustomActions {
  /**
   * Defines the set of stateless rules for use in a stateless rule group.
   *
   * _Required_: Yes
   *
   * _Type_: List of [StatelessRule](aws-properties-networkfirewall-rulegroup-statelessrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatelessRules: List<NetworkFirewallRuleGroupStatelessRule>;
  /**
   * Defines an array of individual custom action definitions that are available for use by the stateless rules in this `StatelessRulesAndCustomActions` specification. You name each custom action that you define, and then you can use it by name in your stateless rule [AWS::NetworkFirewall::RuleGroup RuleDefinition](aws-properties-networkfirewall-rulegroup-ruledefinition.md) `Actions` specification.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomAction](aws-properties-networkfirewall-rulegroup-customaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomActions?: List<NetworkFirewallRuleGroupCustomAction>;
}

/**
 * Additional settings for a stateful rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruleoption.html}
 **/
export interface NetworkFirewallRuleGroupRuleOption {
  /**
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Keyword: Value<string>;
  /**
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: List<Value<string>>;
}

/**
 * Configures the [ReferenceSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-referencesets) for a stateful rule group. For more information, see the [Using IP set references in Suricata compatible rule groups](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html) in the _Network Firewall User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-referencesets.html}
 **/
export interface NetworkFirewallRuleGroupReferenceSets {
  /**
   * The IP set references to use in the stateful rule group.
   *
   * _Required_: No
   *
   * _Type_: Map of [IPSetReference](aws-properties-networkfirewall-rulegroup-ipsetreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPSetReferences?: { [key: string]: NetworkFirewallRuleGroupIPSetReference };
}

/**
 * The object that defines the rules in a rule group.
 *
 * AWS Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow.
 *
 * To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html}
 **/
export interface NetworkFirewallRuleGroupRuleGroup {
  /**
   * Additional options governing how Network Firewall handles stateful rules. The policies where you use your stateful rule group must have stateful rule options settings that are compatible with these settings.
   *
   * _Required_: No
   *
   * _Type_: [StatefulRuleOptions](aws-properties-networkfirewall-rulegroup-statefulruleoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatefulRuleOptions?: NetworkFirewallRuleGroupStatefulRuleOptions;
  /**
   * The reference sets for the stateful rule group.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceSets](aws-properties-networkfirewall-rulegroup-referencesets.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceSets?: NetworkFirewallRuleGroupReferenceSets;
  /**
   * The stateful rules or stateless rules for the rule group.
   *
   * _Required_: Yes
   *
   * _Type_: [RulesSource](aws-properties-networkfirewall-rulegroup-rulessource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RulesSource: NetworkFirewallRuleGroupRulesSource;
  /**
   * Settings that are available for use in the rules in the rule group. You can only use these for stateful rule groups.
   *
   * _Required_: No
   *
   * _Type_: [RuleVariables](aws-properties-networkfirewall-rulegroup-rulevariables.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleVariables?: NetworkFirewallRuleGroupRuleVariables;
}

/**
 * Stateful inspection criteria for a domain list rule group.
 *
 * For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.
 *
 * By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the `HOME_NET` rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see [AWS::NetworkFirewall::RuleGroup RuleVariables](aws-properties-networkfirewall-rulegroup-rulevariables.md) in this guide and [Stateful domain list rule groups in AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html) in the _Network Firewall Developer Guide_
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessourcelist.html}
 **/
export interface NetworkFirewallRuleGroupRulesSourceList {
  /**
   * Whether you want to allow or deny access to the domains in your target list.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALLOWLIST | DENYLIST`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeneratedRulesType: Value<string>;
  /**
   * The types of targets to inspect for. Valid values are `TLS_SNI` and `HTTP_HOST`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetTypes: List<Value<string>>;
  /**
   * The domains that you want to inspect for in your traffic flows. Valid domain specifications are the following:
   */
  Targets: List<Value<string>>;
}

/**
 * A single port range specification. This is used for source and destination port ranges in the stateless [AWS::NetworkFirewall::RuleGroup MatchAttributes](aws-properties-networkfirewall-rulegroup-matchattributes.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portrange.html}
 **/
export interface NetworkFirewallRuleGroupPortRange {
  /**
   * The lower limit of the port range. This must be less than or equal to the `ToPort` specification.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromPort: Value<number>;
  /**
   * The upper limit of the port range. This must be greater than or equal to the `FromPort` specification.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ToPort: Value<number>;
}

/**
 * Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulruleoptions.html}
 **/
export interface NetworkFirewallRuleGroupStatefulRuleOptions {
  /**
   * Indicates how to manage the order of the rule evaluation for the rule group. `DEFAULT_ACTION_ORDER` is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the _AWS Network Firewall Developer Guide_.
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

/**
 * A set of port ranges for use in the rules in a rule group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portset.html}
 **/
export interface NetworkFirewallRuleGroupPortSet {
  /**
   * The set of port ranges.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition?: List<Value<string>>;
}

/**
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html}
 **/
export interface NetworkFirewallRuleGroupMatchAttributes {
  /**
   * The protocols to inspect for, specified using each protocol's assigned internet protocol number (IANA). If not specified, this matches with any protocol.
   *
   * _Required_: No
   *
   * _Type_: List of Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocols?: List<Value<number>>;
  /**
   * The TCP flags and masks to inspect for. If not specified, this matches with any settings. This setting is only used for protocol 6 (TCP).
   *
   * _Required_: No
   *
   * _Type_: List of [TCPFlagField](aws-properties-networkfirewall-rulegroup-tcpflagfield.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TCPFlags?: List<NetworkFirewallRuleGroupTCPFlagField>;
  /**
   * The destination ports to inspect for. If not specified, this matches with any destination port. This setting is only used for protocols 6 (TCP) and 17 (UDP).
   *
   * You can specify individual ports, for example `1994` and you can specify port ranges, for example `1990:1994`.
   *
   * _Required_: No
   *
   * _Type_: List of [PortRange](aws-properties-networkfirewall-rulegroup-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationPorts?: List<NetworkFirewallRuleGroupPortRange>;
  /**
   * The destination IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any destination address.
   *
   * _Required_: No
   *
   * _Type_: List of [Address](aws-properties-networkfirewall-rulegroup-address.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destinations?: List<NetworkFirewallRuleGroupAddress>;
  /**
   * The source IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any source address.
   *
   * _Required_: No
   *
   * _Type_: List of [Address](aws-properties-networkfirewall-rulegroup-address.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sources?: List<NetworkFirewallRuleGroupAddress>;
  /**
   * The source ports to inspect for. If not specified, this matches with any source port. This setting is only used for protocols 6 (TCP) and 17 (UDP).
   *
   * You can specify individual ports, for example `1994` and you can specify port ranges, for example `1990:1994`.
   *
   * _Required_: No
   *
   * _Type_: List of [PortRange](aws-properties-networkfirewall-rulegroup-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourcePorts?: List<NetworkFirewallRuleGroupPortRange>;
}

/**
 * Settings that are available for use in the rules in the [AWS::NetworkFirewall::RuleGroup](aws-resource-networkfirewall-rulegroup.md) where this is defined.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulevariables.html}
 **/
export interface NetworkFirewallRuleGroupRuleVariables {
  /**
   * A list of port ranges.
   *
   * _Required_: No
   *
   * _Type_: Map of [PortSet](aws-properties-networkfirewall-rulegroup-portset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortSets?: { [key: string]: NetworkFirewallRuleGroupPortSet };
  /**
   * A list of IP addresses and address ranges, in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: Map of [IPSet](aws-properties-networkfirewall-rulegroup-ipset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPSets?: { [key: string]: NetworkFirewallRuleGroupIPSet };
}

/**
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-publishmetricaction.html}
 **/
export interface NetworkFirewallRuleGroupPublishMetricAction {
  /**
   * _Required_: Yes
   *
   * _Type_: List of [Dimension](aws-properties-networkfirewall-rulegroup-dimension.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions: List<NetworkFirewallRuleGroupDimension>;
}

/**
 * A single IP address specification. This is used in the [AWS::NetworkFirewall::RuleGroup MatchAttributes](aws-properties-networkfirewall-rulegroup-matchattributes.md) source and destination specifications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-address.html}
 **/
export interface NetworkFirewallRuleGroupAddress {
  /**
   * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   *
   * Examples:
   */
  AddressDefinition: Value<string>;
}

/**
 * A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://suricata.readthedocs.iorules/intro.html#).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulrule.html}
 **/
export interface NetworkFirewallRuleGroupStatefulRule {
  /**
   * Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria. For all actions, Network Firewall performs the specified action and discontinues stateful inspection of the traffic flow.
   *
   * The actions for a stateful rule are defined as follows:
   *
   * You can use this action to test a rule that you intend to use to drop traffic. You can enable the rule with `ALERT` action, verify in the logs that the rule is filtering as you want, then change the action to `DROP`.
   */
  Action: Value<string>;
  /**
   * The stateful inspection criteria for this rule, used to inspect traffic flows.
   *
   * _Required_: Yes
   *
   * _Type_: [Header](aws-properties-networkfirewall-rulegroup-header.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header: NetworkFirewallRuleGroupHeader;
  /**
   * Additional settings for a stateful rule, provided as keywords and settings.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RuleOption](aws-properties-networkfirewall-rulegroup-ruleoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleOptions: List<NetworkFirewallRuleGroupRuleOption>;
}

/**
 * The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding stateful rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html}
 **/
export interface NetworkFirewallRuleGroupHeader {
  /**
   * The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   *
   * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   *
   * Examples:
   */
  Destination: Value<string>;
  /**
   * The protocol to inspect for. To specify all, you can use `IP`, because all traffic on AWS and on the internet is IP.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DCERPC | DHCP | DNS | FTP | HTTP | ICMP | IKEV2 | IMAP | IP | KRB5 | MSN | NTP | SMB | SMTP | SSH | TCP | TFTP | TLS | UDP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
  /**
   * The source port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^.*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourcePort: Value<string>;
  /**
   * The direction of traffic flow to inspect. If set to `ANY`, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to `FORWARD`, the inspection only matches traffic going from the source to the destination.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ANY | FORWARD`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Direction: Value<string>;
  /**
   * The destination port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^.*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationPort: Value<string>;
  /**
   * The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   *
   * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   *
   * Examples:
   */
  Source: Value<string>;
}

/**
 * Configures one or more [IPSetReferences](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-referencesets.html#cfn-networkfirewall-rulegroup-referencesets-ipsetreferences) for a Suricata-compatible rule group. An IP set reference is a rule variable that references a resource that you create and manage in another AWS service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the IP set you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see [Using IP set references](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html) in the _Network Firewall Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipsetreference.html}
 **/
export interface NetworkFirewallRuleGroupIPSetReference {
  /**
   * The Amazon Resource Name (ARN) of the resource to include in the [AWS::NetworkFirewall::RuleGroup IPSetReference](#aws-properties-networkfirewall-rulegroup-ipsetreference).
   *
   * _Required_: No
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
  ReferenceArn?: Value<string>;
}

/**
 * The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruledefinition.html}
 **/
export interface NetworkFirewallRuleGroupRuleDefinition {
  /**
   * The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action and you can add custom actions.
   *
   * Network Firewall only forwards a packet for stateful rule inspection if you specify `aws:forward_to_sfe` for a rule that the packet matches, or if the packet doesn't match any stateless rule and you specify `aws:forward_to_sfe` for the `StatelessDefaultActions` setting for the [AWS::NetworkFirewall::FirewallPolicy](aws-resource-networkfirewall-firewallpolicy.md).
   *
   * For every rule, you must specify exactly one of the following standard actions.
   */
  Actions: List<Value<string>>;
  /**
   * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
   *
   * _Required_: Yes
   *
   * _Type_: [MatchAttributes](aws-properties-networkfirewall-rulegroup-matchattributes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchAttributes: NetworkFirewallRuleGroupMatchAttributes;
}

/**
 * A single stateless rule. This is used in [AWS::NetworkFirewall::RuleGroup StatelessRulesAndCustomActions](aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrule.html}
 **/
export interface NetworkFirewallRuleGroupStatelessRule {
  /**
   * Indicates the order in which to run this rule relative to all of the rules that are defined for a stateless rule group. Network Firewall evaluates the rules in a rule group starting with the lowest priority setting. You must ensure that the priority settings are unique for the rule group.
   *
   * Each stateless rule group uses exactly one `StatelessRulesAndCustomActions` object, and each `StatelessRulesAndCustomActions` contains exactly one `StatelessRules` object. To ensure unique priority settings for your rule groups, set unique priorities for the stateless rules that you define inside any single `StatelessRules` object.
   *
   * You can change the priority settings of your rules at any time. To make it easier to insert rules later, number them so there's a wide range in between, for example use 100, 200, and so on.
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
  /**
   * Defines the stateless 5-tuple packet inspection criteria and the action to take on a packet that matches the criteria.
   *
   * _Required_: Yes
   *
   * _Type_: [RuleDefinition](aws-properties-networkfirewall-rulegroup-ruledefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleDefinition: NetworkFirewallRuleGroupRuleDefinition;
}

/**
 * A list of IP addresses and address ranges, in CIDR notation. This is part of a [AWS::NetworkFirewall::RuleGroup RuleVariables](aws-properties-networkfirewall-rulegroup-rulevariables.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipset.html}
 **/
export interface NetworkFirewallRuleGroupIPSet {
  /**
   * The list of IP addresses and address ranges, in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition?: List<Value<string>>;
}

/**
 * An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify.
 *
 * You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings.
 *
 * You can use custom actions in the following places:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-customaction.html}
 **/
export interface NetworkFirewallRuleGroupCustomAction {
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
   * _Type_: [ActionDefinition](aws-properties-networkfirewall-rulegroup-actiondefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionDefinition: NetworkFirewallRuleGroupActionDefinition;
}

/**
 * The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single `RulesSource`. You can use an instance of this for either stateless rules or stateful rules.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html}
 **/
export interface NetworkFirewallRuleGroupRulesSource {
  /**
   * Stateless inspection criteria to be used in a stateless rule group.
   *
   * _Required_: No
   *
   * _Type_: [StatelessRulesAndCustomActions](aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatelessRulesAndCustomActions?: NetworkFirewallRuleGroupStatelessRulesAndCustomActions;
  /**
   * An array of individual stateful rules inspection criteria to be used together in a stateful rule group. Use this option to specify simple Suricata rules with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://suricata.readthedocs.iorules/intro.html#).
   *
   * _Required_: No
   *
   * _Type_: List of [StatefulRule](aws-properties-networkfirewall-rulegroup-statefulrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatefulRules?: List<NetworkFirewallRuleGroupStatefulRule>;
  /**
   * Stateful inspection criteria, provided in Suricata compatible intrusion prevention system (IPS) rules. Suricata is an open-source network IPS that includes a standard rule-based language for network traffic inspection.
   *
   * These rules contain the inspection criteria and the action to take for traffic that matches the criteria, so this type of rule group doesn't have a separate action setting.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2000000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RulesString?: Value<string>;
  /**
   * Stateful inspection criteria for a domain list rule group.
   *
   * _Required_: No
   *
   * _Type_: [RulesSourceList](aws-properties-networkfirewall-rulegroup-rulessourcelist.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RulesSourceList?: NetworkFirewallRuleGroupRulesSourceList;
}
export interface NetworkFirewallRuleGroupProperties {
  /**
   * Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `STATEFUL | STATELESS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * A description of the rule group.
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
   * The maximum operating resources that this rule group can use. You can't change a rule group's capacity setting after you create the rule group. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Capacity: Value<number>;
  /**
   * The descriptive name of the rule group. You can't change the name of a rule group after you create it.
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
  RuleGroupName: Value<string>;
  /**
   * An object that defines the rule group rules.
   *
   * _Required_: No
   *
   * _Type_: [RuleGroup](aws-properties-networkfirewall-rulegroup-rulegroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleGroup?: NetworkFirewallRuleGroupRuleGroup;
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
}

/**
 * Use the [AWS::NetworkFirewall::RuleGroup](#aws-resource-networkfirewall-rulegroup) to define a reusable collection of stateless or stateful network traffic filtering rules. You use rule groups in an [AWS::NetworkFirewall::FirewallPolicy](aws-resource-networkfirewall-firewallpolicy.md) to specify the filtering behavior of an [AWS::NetworkFirewall::Firewall](aws-resource-networkfirewall-firewall.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html}
 */
export interface NetworkFirewallRuleGroupResource {
  Type: 'AWS::NetworkFirewall::RuleGroup';
  Properties: NetworkFirewallRuleGroupProperties;
}
