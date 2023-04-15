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

export interface EC2PlacementGroupProperties {
  /**
   * Determines how placement groups spread instances.
   */
  SpreadLevel?: Value<string>;
  /**
   * The placement strategy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `cluster | partition | spread`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Strategy?: Value<string>;
  /**
   * The number of partitions. Valid only when **Strategy** is set to `partition`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PartitionCount?: Value<number>;
  /**
   * The tags to apply to the new placement group.
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
 * Specifies a placement group in which to launch instances. The strategy of the placement group determines how the instances are organized within the group.
 *
 * A `cluster` placement group is a logical grouping of instances within a single Availability Zone that benefit from low network latency, high network throughput. A `spread` placement group places instances on distinct hardware. A `partition` placement group places groups of instances in different partitions, where instances in one partition do not share the same hardware with instances in another partition.
 *
 * For more information, see [Placement Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html}
 */
export interface EC2PlacementGroupResource {
  Type: 'AWS::EC2::PlacementGroup';
  Properties: EC2PlacementGroupProperties;
}
