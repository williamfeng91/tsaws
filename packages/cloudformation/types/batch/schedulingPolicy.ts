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
 * Specifies the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of `1.0`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-shareattributes.html}
 **/
export interface BatchSchedulingPolicyShareAttributes {
  /**
   * The weight factor for the fair share identifier. The default value is 1.0. A lower value has a higher priority for compute resources. For example, jobs that use a share identifier with a weight factor of 0.125 (1/8) get 8 times the compute resources of jobs that use a share identifier with a weight factor of 1.
   *
   * The smallest supported value is 0.0001, and the largest supported value is 999.9999.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeightFactor?: Value<number>;
  /**
   * A fair share identifier or fair share identifier prefix. If the string ends with an asterisk (*), this entry specifies the weight factor to use for fair share identifiers that start with that prefix. The list of fair share identifiers in a fair share policy can't overlap. For example, you can't have one that specifies a `shareIdentifier` of `UserA*` and another that specifies a `shareIdentifier` of `UserA-1`.
   *
   * There can be no more than 500 fair share identifiers active in a job queue.
   *
   * The string is limited to 255 alphanumeric characters, and can be followed by an asterisk (*).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShareIdentifier?: Value<string>;
}

/**
 * The fair share policy for a scheduling policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-fairsharepolicy.html}
 **/
export interface BatchSchedulingPolicyFairsharePolicy {
  /**
   * An array of `SharedIdentifier` objects that contain the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of `1.0`.
   *
   * _Required_: No
   *
   * _Type_: List of [ShareAttributes](aws-properties-batch-schedulingpolicy-shareattributes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShareDistribution?: List<BatchSchedulingPolicyShareAttributes>;
  /**
   * The amount of time (in seconds) to use to calculate a fair share percentage for each fair share identifier in use. A value of zero (0) indicates that only current usage is measured. The decay allows for more recently run jobs to have more weight than jobs that ran earlier. The maximum supported value is 604800 (1 week).
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShareDecaySeconds?: Value<number>;
  /**
   * A value used to reserve some of the available maximum vCPU for fair share identifiers that aren't already used.
   *
   * The reserved ratio is `(computeReservation/100)^ActiveFairShares ` where `ActiveFairShares` is the number of active fair share identifiers.
   *
   * For example, a `computeReservation` value of 50 indicates that AWS Batchreserves 50% of the maximum available vCPU if there's only one fair share identifier. It reserves 25% if there are two fair share identifiers. It reserves 12.5% if there are three fair share identifiers. A `computeReservation` value of 25 indicates that AWS Batch should reserve 25% of the maximum available vCPU if there's only one fair share identifier, 6.25% if there are two fair share identifiers, and 1.56% if there are three fair share identifiers.
   *
   * The minimum value is 0 and the maximum value is 99.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeReservation?: Value<number>;
}
export interface BatchSchedulingPolicyProperties {
  /**
   * The fair share policy of the scheduling policy.
   *
   * _Required_: No
   *
   * _Type_: [FairsharePolicy](aws-properties-batch-schedulingpolicy-fairsharepolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FairsharePolicy?: BatchSchedulingPolicyFairsharePolicy;
  /**
   * The tags that you apply to the scheduling policy to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in _ AWS General Reference_.
   *
   * These tags can be updated or removed using the [TagResource](https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html) and [UntagResource](https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html) API operations.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the scheduling policy. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
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
 * The `AWS::Batch::SchedulingPolicy` resource specifies the parameters for an AWS Batch scheduling policy. For more information, see [Scheduling Policies](https://docs.aws.amazon.com/batch/latest/userguide/scheduling_policies.html) in the _AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html}
 */
export interface BatchSchedulingPolicyResource {
  Type: 'AWS::Batch::SchedulingPolicy';
  Properties: BatchSchedulingPolicyProperties;
}
