/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes the weight of a target group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-weightedtargetgroup.html}
 **/
export interface VpcLatticeListenerWeightedTargetGroup {
  /**
   * Only required if you specify multiple target groups for a forward action. The "weight" determines how requests are distributed to the target group. For example, if you specify two target groups, each with a weight of 10, each target group receives half the requests. If you specify two target groups, one with a weight of 10 and the other with a weight of 20, the target group with a weight of 20 receives twice as many requests as the other target group. If there's only one target group specified, then the default value is 100.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: Value<number>;
  /**
   * The ID of the target group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroupIdentifier: Value<string>;
}

/**
 * Information about an action that returns a custom HTTP response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-fixedresponse.html}
 **/
export interface VpcLatticeListenerFixedResponse {
  /**
   * The HTTP response code.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusCode: Value<number>;
}

/**
 * The forward action. Traffic that matches the rule is forwarded to the specified target groups.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-forward.html}
 **/
export interface VpcLatticeListenerForward {
  /**
   * The target groups. Traffic matching the rule is forwarded to the specified target groups. With forward actions, you can assign a weight that controls the prioritization and selection of each target group. This means that requests are distributed to individual target groups based on their weights. For example, if two target groups have the same weight, each target group receives half of the traffic.
   *
   * The default value is 1. This means that if only one target group is provided, there is no need to set the weight; 100% of traffic will go to that target group.
   *
   * _Required_: Yes
   *
   * _Type_: List of [WeightedTargetGroup](aws-properties-vpclattice-listener-weightedtargetgroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroups: List<VpcLatticeListenerWeightedTargetGroup>;
}

/**
 * The action for the default rule. Each listener has a default rule. Each rule consists of a priority, one or more actions, and one or more conditions. The default rule is the rule that's used if no other rules match. Each rule must include exactly one of the following types of actions: `forward `or `fixed-response`, and it must be the last action to be performed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-listener-defaultaction.html}
 **/
export interface VpcLatticeListenerDefaultAction {
  /**
   * Describes a forward action. You can use forward actions to route requests to one or more target groups.
   *
   * _Required_: No
   *
   * _Type_: [Forward](aws-properties-vpclattice-listener-forward.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Forward?: VpcLatticeListenerForward;
  /**
   * Information about an action that returns a custom HTTP response.
   *
   * _Required_: No
   *
   * _Type_: [FixedResponse](aws-properties-vpclattice-listener-fixedresponse.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FixedResponse?: VpcLatticeListenerFixedResponse;
}
export interface VpcLatticeListenerProperties {
  /**
   * The action for the default rule. Each listener has a default rule. Each rule consists of a priority, one or more actions, and one or more conditions. The default rule is the rule that's used if no other rules match. Each rule must include exactly one of the following types of actions: `forward `or `fixed-response`, and it must be the last action to be performed.
   *
   * _Required_: Yes
   *
   * _Type_: [DefaultAction](aws-properties-vpclattice-listener-defaultaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultAction: VpcLatticeListenerDefaultAction;
  /**
   * The listener port. You can specify a value from `1` to `65535`. For HTTP, the default is `80`. For HTTPS, the default is `443`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Port?: Value<number>;
  /**
   * The ID or Amazon Resource Name (ARN) of the service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceIdentifier?: Value<string>;
  /**
   * The listener protocol HTTP or HTTPS.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Protocol: Value<string>;
  /**
   * The tags for the listener.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the listener. A listener name must be unique within a service. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * If you don't specify a name, CloudFormation generates one. However, if you specify a name, and later want to replace the resource, you must specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services. For more information, see [Listeners](https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html) in the _Amazon VPC Lattice User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-listener.html}
 */
export interface VpcLatticeListenerResource {
  Type: 'AWS::VpcLattice::Listener';
  Properties: VpcLatticeListenerProperties;
}
