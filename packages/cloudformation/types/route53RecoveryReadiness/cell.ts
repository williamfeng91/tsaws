/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface Route53RecoveryReadinessCellProperties {
  /**
   * The name of the cell to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CellName?: Value<string>;
  /**
   * A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific AWS Regions.
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
 * Creates a cell in recovery group in Amazon Route 53 Application Recovery Controller. A cell in Route 53 ARC represents replicas or independent units of failover in your application. It groups within it all the AWS resources that are necessary for your application to run independently. Typically, you would have define one set of resources in a primary cell and another set in a standby cell in your recovery group.
 *
 * After you set up the cells for your application, you can create readiness checks in Route 53 ARC to continually audit readiness for AWS resource quotas, capacity, network routing policies, and other predefined rules.
 *
 * You can set up notifications about changes that would affect your ability to fail over to a replica and recover. However, you should make decisions about whether to fail away from or to a replica based on your monitoring and health check systems. You should consider readiness checks as a complementary service to those systems.
 *
 * Route 53 ARC Readiness supports us-east-1 and us-west-2 AWS Regions only.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html}
 */
export interface Route53RecoveryReadinessCellResource {
  Type: 'AWS::Route53RecoveryReadiness::Cell';
  Properties: Route53RecoveryReadinessCellProperties;
}
