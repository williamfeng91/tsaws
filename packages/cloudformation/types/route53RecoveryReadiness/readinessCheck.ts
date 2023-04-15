/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface Route53RecoveryReadinessReadinessCheckProperties {
  /**
   * The name of the resource set to check.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceSetName?: Value<string>;
  /**
   * The name of the readiness check to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReadinessCheckName?: Value<string>;
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
 * Creates a readiness check in Amazon Route 53 Application Recovery Controller. A readiness check continually monitors a resource set in your application, such as a set of Amazon Aurora instances, that Route 53 ARC is auditing recovery readiness for. The audits run once every minute on every resource that's associated with a readiness check.
 *
 * Every resource type has a set of rules associated with it that Route 53 ARC uses to audit resources for readiness. For more information, see [Readiness rules descriptions](https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.rules-resources.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * Route 53 ARC Readiness supports us-east-1 and us-west-2 AWS Regions only.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-readinesscheck.html}
 */
export interface Route53RecoveryReadinessReadinessCheckResource {
  Type: 'AWS::Route53RecoveryReadiness::ReadinessCheck';
  Properties: Route53RecoveryReadinessReadinessCheckProperties;
}
