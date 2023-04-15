/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface Route53RecoveryReadinessRecoveryGroupProperties {
  /**
   * The name of the recovery group to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RecoveryGroupName?: Value<string>;
  /**
   * A list of the cell Amazon Resource Names (ARNs) in the recovery group.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cells?: List<Value<string>>;
  /**
   * A collection of tags associated with a resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a recovery group in Amazon Route 53 Application Recovery Controller. A recovery group represents your application. It typically consists of two or more cells that are replicas of each other in terms of resources and functionality, so that you can fail over from one to the other, for example, from one Region to another. You create recovery groups so you can use readiness checks to audit resources in your application.
 *
 * For more information, see [Readiness checks, resource sets, and readiness scopes](https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.recovery-groups.readiness-scope.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * Route 53 ARC Readiness supports us-east-1 and us-west-2 AWS Regions only.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html}
 */
export interface Route53RecoveryReadinessRecoveryGroupResource {
  Type: 'AWS::Route53RecoveryReadiness::RecoveryGroup';
  Properties: Route53RecoveryReadinessRecoveryGroupProperties;
}
