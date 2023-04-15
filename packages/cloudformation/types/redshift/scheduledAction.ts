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
 * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resumeclustermessage.html}
 **/
export interface RedshiftScheduledActionResumeClusterMessage {
  /**
   * The identifier of the cluster to be resumed.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterIdentifier: Value<string>;
}

/**
 * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-scheduledactiontype.html}
 **/
export interface RedshiftScheduledActionScheduledActionType {
  /**
   * An action that runs a `PauseCluster` API operation.
   *
   * _Required_: No
   *
   * _Type_: [PauseClusterMessage](aws-properties-redshift-scheduledaction-pauseclustermessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PauseCluster?: RedshiftScheduledActionPauseClusterMessage;
  /**
   * An action that runs a `ResumeCluster` API operation.
   *
   * _Required_: No
   *
   * _Type_: [ResumeClusterMessage](aws-properties-redshift-scheduledaction-resumeclustermessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResumeCluster?: RedshiftScheduledActionResumeClusterMessage;
  /**
   * An action that runs a `ResizeCluster` API operation.
   *
   * _Required_: No
   *
   * _Type_: [ResizeClusterMessage](aws-properties-redshift-scheduledaction-resizeclustermessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResizeCluster?: RedshiftScheduledActionResizeClusterMessage;
}

/**
 * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-pauseclustermessage.html}
 **/
export interface RedshiftScheduledActionPauseClusterMessage {
  /**
   * The identifier of the cluster to be paused.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterIdentifier: Value<string>;
}

/**
 * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html}
 **/
export interface RedshiftScheduledActionResizeClusterMessage {
  /**
   * The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeType?: Value<string>;
  /**
   * The new number of nodes for the cluster. If not specified, the cluster's current number of nodes is used.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfNodes?: Value<number>;
  /**
   * The new cluster type for the specified cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterType?: Value<string>;
  /**
   * A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to `false`, the resize type is elastic.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Classic?: Value<boolean>;
  /**
   * The unique identifier for the cluster to resize.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterIdentifier: Value<string>;
}
export interface RedshiftScheduledActionProperties {
  /**
   * The description of the scheduled action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduledActionDescription?: Value<string>;
  /**
   * The name of the scheduled action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScheduledActionName: Value<string>;
  /**
   * The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndTime?: Value<string>;
  /**
   * The schedule for a one-time (at format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour.
   *
   * Format of at expressions is "`at(yyyy-mm-ddThh:mm:ss)`". For example, "`at(2016-03-04T17:27:00)`".
   *
   * Format of cron expressions is "`cron(Minutes Hours Day-of-month Month Day-of-week Year)`". For example, "`cron(0 10 ? * MON *)`". For more information, see [Cron Expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the _Amazon CloudWatch Events User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: Value<string>;
  /**
   * The IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see [Using Identity-Based Policies for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html) in the _Amazon Redshift Cluster Management Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamRole?: Value<string>;
  /**
   * The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime?: Value<string>;
  /**
   * If true, the schedule is enabled. If false, the scheduled action does not trigger. For more information about `state` of the scheduled action, see [AWS::Redshift::ScheduledAction](#aws-resource-redshift-scheduledaction).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enable?: Value<boolean>;
  /**
   * A JSON format string of the Amazon Redshift API operation with input parameters.
   *
   * "`{"ResizeCluster":{"NodeType":"ds2.8xlarge","ClusterIdentifier":"my-test-cluster","NumberOfNodes":3}}`".
   *
   * _Required_: No
   *
   * _Type_: [ScheduledActionType](aws-properties-redshift-scheduledaction-scheduledactiontype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetAction?: RedshiftScheduledActionScheduledActionType;
}

/**
 * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the `ResizeCluster` API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html}
 */
export interface RedshiftScheduledActionResource {
  Type: 'AWS::Redshift::ScheduledAction';
  Properties: RedshiftScheduledActionProperties;
}
