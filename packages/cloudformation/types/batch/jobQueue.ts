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
 * The order that compute environments are tried in for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first. Compute environments must be in the `VALID` state before you can associate them with a job queue. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`); EC2 and Fargate compute environments can't be mixed.
 *
 * **Note**
 *
 * All compute environments that are associated with a job queue must share the same architecture. AWS Batch doesn't support mixing compute environment architecture types in a single job queue.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-computeenvironmentorder.html}
 **/
export interface BatchJobQueueComputeEnvironmentOrder {
  /**
   * The Amazon Resource Name (ARN) of the compute environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeEnvironment: Value<string>;
  /**
   * The order of the compute environment. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower `order` integer value is tried for job placement first.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Order: Value<number>;
}
export interface BatchJobQueueProperties {
  /**
   * The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment runs a specific job. Compute environments must be in the `VALID` state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`); EC2 and Fargate compute environments can't be mixed.
   *
   * All compute environments that are associated with a job queue must share the same architecture. AWS Batch doesn't support mixing compute environment architecture types in a single job queue.
   *
   * _Required_: Yes
   *
   * _Type_: [List](aws-properties-batch-jobqueue-computeenvironmentorder.md) of [ComputeEnvironmentOrder](aws-properties-batch-jobqueue-computeenvironmentorder.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeEnvironmentOrder: List<BatchJobQueueComputeEnvironmentOrder>;
  /**
   * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the `priority` parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of `10` is given scheduling preference over a job queue with a priority value of `1`. All of the compute environments must be either EC2 (`EC2` or `SPOT`) or Fargate (`FARGATE` or `FARGATE_SPOT`); EC2 and Fargate compute environments can't be mixed.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
  /**
   * The state of the job queue. If the job queue state is `ENABLED`, it is able to accept jobs. If the job queue state is `DISABLED`, new jobs can't be added to the queue, but jobs already in the queue can finish.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the scheduling policy. The format is `aws:Partition:batch:Region:Account:scheduling-policy/Name `. For example, `aws:aws:batch:us-west-2:123456789012:scheduling-policy/MySchedulingPolicy`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchedulingPolicyArn?: Value<string>;
  /**
   * The name of the job queue. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobQueueName?: Value<string>;
  /**
   * The tags that are applied to the job queue. For more information, see [Tagging your AWS Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html) in _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * The `AWS::Batch::JobQueue` resource specifies the parameters for an AWS Batch job queue definition. For more information, see [Job Queues](https://docs.aws.amazon.com/batch/latest/userguide/job_queues.html) in the _AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html}
 */
export interface BatchJobQueueResource {
  Type: 'AWS::Batch::JobQueue';
  Properties: BatchJobQueueProperties;
}
