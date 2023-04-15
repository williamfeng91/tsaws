/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
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
 * Represents the settings used to enable server-side encryption.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dax-cluster-ssespecification.html}
 **/
export interface DAXClusterSSESpecification {
  /**
   * Indicates whether server-side encryption is enabled (true) or disabled (false) on the cluster.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSEEnabled?: Value<boolean>;
}
export interface DAXClusterProperties {
  /**
   * Represents the settings used to enable server-side encryption on the cluster.
   *
   * _Required_: No
   *
   * _Type_: [SSESpecification](aws-properties-dax-cluster-ssespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SSESpecification?: DAXClusterSSESpecification;
  /**
   * The description of the cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The number of nodes in the DAX cluster. A replication factor of 1 will create a single-node cluster, without any read replicas. For additional fault tolerance, you can create a multiple node cluster with one or more read replicas. To do this, set `ReplicationFactor` to a number between 3 (one primary and two read replicas) and 10 (one primary and nine read replicas). `If the AvailabilityZones` parameter is provided, its length must equal the `ReplicationFactor`.
   *
   * AWS recommends that you have at least two read replicas per cluster.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationFactor: Value<number>;
  /**
   * The parameter group to be associated with the DAX cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterGroupName?: Value<string>;
  /**
   * The Availability Zones (AZs) in which the cluster nodes will reside after the cluster has been created or updated. If provided, the length of this list must equal the `ReplicationFactor` parameter. If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest availability.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZones?: List<Value<string>>;
  /**
   * A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  IAMRoleARN: Value<string>;
  /**
   * The name of the subnet group to be used for the replication group.
   *
   * DAX clusters can only run in an Amazon VPC environment. All of the subnets that you specify in a subnet group must exist in the same VPC.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  SubnetGroupName?: Value<string>;
  /**
   * A range of time when maintenance of DAX cluster software will be performed. For example: `sun:01:00-sun:09:00`. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * The encryption type of the cluster's endpoint. Available values are:
   */
  ClusterEndpointEncryptionType?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.
   *
   * The Amazon SNS topic owner must be same as the DAX cluster owner.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationTopicARN?: Value<string>;
  /**
   * A list of security group IDs to be assigned to each node in the DAX cluster. (Each of the security group ID is system-generated.)
   *
   * If this parameter is not specified, DAX assigns the default VPC security group to each node.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The node type for the nodes in the cluster. (All nodes in a DAX cluster are of the same type.)
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NodeType: Value<string>;
  /**
   * The name of the DAX cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  ClusterName?: Value<string>;
  /**
   * A set of tags to associate with the DAX cluster.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
}

/**
 * Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html}
 */
export interface DAXClusterResource {
  Type: 'AWS::DAX::Cluster';
  Properties: DAXClusterProperties;
}
