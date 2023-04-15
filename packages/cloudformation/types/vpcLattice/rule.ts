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
 * Describes a rule match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-match.html}
 **/
export interface VpcLatticeRuleMatch {
  /**
   * The HTTP criteria that a rule must match.
   *
   * _Required_: Yes
   *
   * _Type_: [HttpMatch](aws-properties-vpclattice-rule-httpmatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpMatch: VpcLatticeRuleHttpMatch;
}

/**
 * Describes a path match type. Each rule can include only one of the following types of paths.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-pathmatchtype.html}
 **/
export interface VpcLatticeRulePathMatchType {
  /**
   * An exact match of the path.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
  /**
   * A prefix match of the path.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * Describes a header match type. Only one can be provided.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-headermatchtype.html}
 **/
export interface VpcLatticeRuleHeaderMatchType {
  /**
   * Specifies a contains type match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Contains?: Value<string>;
  /**
   * Specifies an exact type match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exact?: Value<string>;
  /**
   * Specifies a prefix type match. Matches the value with the prefix.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * The forward action. Traffic that matches the rule is forwarded to the specified target groups.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-forward.html}
 **/
export interface VpcLatticeRuleForward {
  /**
   * The target groups. Traffic matching the rule is forwarded to the specified target groups. With forward actions, you can assign a weight that controls the prioritization and selection of each target group. This means that requests are distributed to individual target groups based on their weights. For example, if two target groups have the same weight, each target group receives half of the traffic.
   *
   * The default value is 1. This means that if only one target group is provided, there is no need to set the weight; 100% of traffic will go to that target group.
   *
   * _Required_: Yes
   *
   * _Type_: List of [WeightedTargetGroup](aws-properties-vpclattice-rule-weightedtargetgroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroups: List<VpcLatticeRuleWeightedTargetGroup>;
}

/**
 * Describes criteria that can be applied to incoming requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-httpmatch.html}
 **/
export interface VpcLatticeRuleHttpMatch {
  /**
   * The header matches. Matches incoming requests with rule based on request header value before applying rule action.
   *
   * _Required_: No
   *
   * _Type_: List of [HeaderMatch](aws-properties-vpclattice-rule-headermatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderMatches?: List<VpcLatticeRuleHeaderMatch>;
  /**
   * The path match.
   *
   * _Required_: No
   *
   * _Type_: [PathMatch](aws-properties-vpclattice-rule-pathmatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathMatch?: VpcLatticeRulePathMatch;
  /**
   * The HTTP method type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Method?: Value<string>;
}

/**
 * Describes the constraints for a header match. Matches incoming requests with rule based on request header value before applying rule action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-headermatch.html}
 **/
export interface VpcLatticeRuleHeaderMatch {
  /**
   * Indicates whether the match is case sensitive. Defaults to false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaseSensitive?: Value<boolean>;
  /**
   * The name of the header.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The header match type.
   *
   * _Required_: Yes
   *
   * _Type_: [HeaderMatchType](aws-properties-vpclattice-rule-headermatchtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: VpcLatticeRuleHeaderMatchType;
}

/**
 * Describes the conditions that can be applied when matching a path for incoming requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-pathmatch.html}
 **/
export interface VpcLatticeRulePathMatch {
  /**
   * Indicates whether the match is case sensitive. Defaults to false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaseSensitive?: Value<boolean>;
  /**
   * The type of path match.
   *
   * _Required_: Yes
   *
   * _Type_: [PathMatchType](aws-properties-vpclattice-rule-pathmatchtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: VpcLatticeRulePathMatchType;
}

/**
 * Describes the action for a rule. Each rule must include exactly one of the following types of actions: `forward `or `fixed-response`, and it must be the last action to be performed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-action.html}
 **/
export interface VpcLatticeRuleAction {
  /**
   * The forward action. Traffic that matches the rule is forwarded to the specified target groups.
   *
   * _Required_: No
   *
   * _Type_: [Forward](aws-properties-vpclattice-rule-forward.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Forward?: VpcLatticeRuleForward;
  /**
   * Describes the rule action that returns a custom HTTP response.
   *
   * _Required_: No
   *
   * _Type_: [FixedResponse](aws-properties-vpclattice-rule-fixedresponse.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FixedResponse?: VpcLatticeRuleFixedResponse;
}

/**
 * Information about an action that returns a custom HTTP response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-fixedresponse.html}
 **/
export interface VpcLatticeRuleFixedResponse {
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
 * Describes the weight of a target group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-weightedtargetgroup.html}
 **/
export interface VpcLatticeRuleWeightedTargetGroup {
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
export interface VpcLatticeRuleProperties {
  /**
   * Describes the action for a rule. Each rule must include exactly one of the following types of actions: `forward `or `fixed-response`, and it must be the last action to be performed.
   *
   * _Required_: Yes
   *
   * _Type_: [Action](aws-properties-vpclattice-rule-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: VpcLatticeRuleAction;
  /**
   * The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
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
   * The ID or Amazon Resource Name (ARN) of the listener.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ListenerIdentifier?: Value<string>;
  /**
   * The tags for the rule.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The rule match.
   *
   * _Required_: Yes
   *
   * _Type_: [Match](aws-properties-vpclattice-rule-match.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Match: VpcLatticeRuleMatch;
  /**
   * The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
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
 * Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions. For more information, see [Listener rules](https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules) in the _Amazon VPC Lattice User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html}
 */
export interface VpcLatticeRuleResource {
  Type: 'AWS::VpcLattice::Rule';
  Properties: VpcLatticeRuleProperties;
}
