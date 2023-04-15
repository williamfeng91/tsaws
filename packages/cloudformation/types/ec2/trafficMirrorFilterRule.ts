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
 * Describes the Traffic Mirror port range.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrorfilterrule-trafficmirrorportrange.html}
 **/
export interface EC2TrafficMirrorFilterRuleTrafficMirrorPortRange {
  /**
   * The start of the Traffic Mirror port range. This applies to the TCP and UDP protocols.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromPort: Value<number>;
  /**
   * The end of the Traffic Mirror port range. This applies to the TCP and UDP protocols.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ToPort: Value<number>;
}
export interface EC2TrafficMirrorFilterRuleProperties {
  /**
   * The destination port range.
   *
   * _Required_: No
   *
   * _Type_: [TrafficMirrorPortRange](aws-properties-ec2-trafficmirrorfilterrule-trafficmirrorportrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationPortRange?: EC2TrafficMirrorFilterRuleTrafficMirrorPortRange;
  /**
   * The description of the Traffic Mirror rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The source port range.
   *
   * _Required_: No
   *
   * _Type_: [TrafficMirrorPortRange](aws-properties-ec2-trafficmirrorfilterrule-trafficmirrorportrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourcePortRange?: EC2TrafficMirrorFilterRuleTrafficMirrorPortRange;
  /**
   * The action to take on the filtered traffic.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `accept | reject`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleAction: Value<string>;
  /**
   * The source CIDR block to assign to the Traffic Mirror rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceCidrBlock: Value<string>;
  /**
   * The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleNumber: Value<number>;
  /**
   * The destination CIDR block to assign to the Traffic Mirror rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationCidrBlock: Value<string>;
  /**
   * The ID of the filter that this rule is associated with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TrafficMirrorFilterId: Value<string>;
  /**
   * The type of traffic.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `egress | ingress`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrafficDirection: Value<string>;
  /**
   * The protocol, for example UDP, to assign to the Traffic Mirror rule.
   *
   * For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority (IANA) website.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<number>;
}

/**
 * Creates a Traffic Mirror filter rule.
 *
 * A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.
 *
 * You need the Traffic Mirror filter ID when you create the rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html}
 */
export interface EC2TrafficMirrorFilterRuleResource {
  Type: 'AWS::EC2::TrafficMirrorFilterRule';
  Properties: EC2TrafficMirrorFilterRuleProperties;
}
