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
 * **[Event-based policies only]** Specifies an event that activates an event-based policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventsource.html}
 **/
export interface DLMLifecyclePolicyEventSource {
  /**
   * The source of the event. Currently only managed CloudWatch Events rules are supported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `MANAGED_CWE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Information about the event.
   *
   * _Required_: No
   *
   * _Type_: [EventParameters](aws-properties-dlm-lifecyclepolicy-eventparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: DLMLifecyclePolicyEventParameters;
}

/**
 * **[Event-based policies only]** Specifies an event that activates an event-based policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-eventparameters.html}
 **/
export interface DLMLifecyclePolicyEventParameters {
  /**
   * The type of event. Currently, only snapshot sharing events are supported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `shareSnapshot`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventType: Value<string>;
  /**
   * The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified AWS accounts shares a snapshot with your account.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotOwner: List<Value<string>>;
  /**
   * The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.
   *
   * For example, specifying `^.*Created for policy: policy-1234567890abcdef0.*$` configures the policy to run only if snapshots created by policy `policy-1234567890abcdef0` are shared with your account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `[p{all}]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DescriptionRegex?: Value<string>;
}

/**
 * **[Event-based policies only]** Specifies an action for an event-based policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-action.html}
 **/
export interface DLMLifecyclePolicyAction {
  /**
   * The rule for copying shared snapshots across Regions.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CrossRegionCopyAction](aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.md)
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrossRegionCopy: List<DLMLifecyclePolicyCrossRegionCopyAction>;
  /**
   * A descriptive name for the action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `120`
   *
   * _Pattern_: `[0-9A-Za-z _-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * **[Snapshot and AMI policies only]** Specifies optional parameters for snapshot and AMI policies. The set of valid parameters depends on the combination of policy type and target resource type.
 *
 * If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a `SnapshotsCreateFailed` Amazon CloudWatch metric. For more information, see [Monitor your policies using Amazon CloudWatch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-parameters.html}
 **/
export interface DLMLifecyclePolicyParameters {
  /**
   * **[Snapshot policies that target instances only]** Indicates whether to exclude the root volume from multi-volume snapshot sets. The default is `false`. If you specify `true`, then the root volumes attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeBootVolume?: Value<boolean>;
  /**
   * **[Snapshot policies that target instances only]** The tags used to identify data (non-root) volumes to exclude from multi-volume snapshot sets.
   *
   * If you create a snapshot lifecycle policy that targets instances and you specify tags for this parameter, then data volumes with the specified tags that are attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeDataVolumeTags?: List<ResourceTag>;
  /**
   * **[AMI policies only]** Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs. The default is `true` (instances are not rebooted).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoReboot?: Value<boolean>;
}

/**
 * **[Snapshot policies only]** Specifies a snapshot archiving rule for a schedule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiverule.html}
 **/
export interface DLMLifecyclePolicyArchiveRule {
  /**
   * Information about the retention period for the snapshot archiving rule.
   *
   * _Required_: Yes
   *
   * _Type_: [ArchiveRetainRule](aws-properties-dlm-lifecyclepolicy-archiveretainrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetainRule: DLMLifecyclePolicyArchiveRetainRule;
}

/**
 * **[Snapshot and AMI policies only]** Specifies a schedule for a snapshot or AMI lifecycle policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html}
 **/
export interface DLMLifecyclePolicySchedule {
  /**
   * **[Snapshot policies only]** The rule for sharing snapshots with other AWS accounts.
   *
   * _Required_: No
   *
   * _Type_: List of [ShareRule](aws-properties-dlm-lifecyclepolicy-sharerule.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShareRules?: List<DLMLifecyclePolicyShareRule>;
  /**
   * **[AMI policies only]** The AMI deprecation rule for the schedule.
   *
   * _Required_: No
   *
   * _Type_: [DeprecateRule](aws-properties-dlm-lifecyclepolicy-deprecaterule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeprecateRule?: DLMLifecyclePolicyDeprecateRule;
  /**
   * The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `45`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagsToAdd?: List<ResourceTag>;
  /**
   * The creation rule.
   *
   * _Required_: No
   *
   * _Type_: [CreateRule](aws-properties-dlm-lifecyclepolicy-createrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreateRule?: DLMLifecyclePolicyCreateRule;
  /**
   * **[AMI policies and snapshot policies that target instances only]** A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: `$(instance-id)` or `$(timestamp)`. Variable tags are only valid for EBS Snapshot Management – Instance policies.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `45`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VariableTags?: List<ResourceTag>;
  /**
   * **[Snapshot policies only]** The rule for enabling fast snapshot restore.
   *
   * _Required_: No
   *
   * _Type_: [FastRestoreRule](aws-properties-dlm-lifecyclepolicy-fastrestorerule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FastRestoreRule?: DLMLifecyclePolicyFastRestoreRule;
  /**
   * **[Snapshot policies that target volumes only]** The snapshot archiving rule for the schedule. When you specify an archiving rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule's retention threshold is met. Snapshots are then retained in the archive tier for the archive retention period that you specify.
   *
   * For more information about using snapshot archiving, see [Considerations for snapshot lifecycle policies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive).
   *
   * _Required_: No
   *
   * _Type_: [ArchiveRule](aws-properties-dlm-lifecyclepolicy-archiverule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchiveRule?: DLMLifecyclePolicyArchiveRule;
  /**
   * The retention rule for snapshots or AMIs created by the policy.
   *
   * _Required_: No
   *
   * _Type_: [RetainRule](aws-properties-dlm-lifecyclepolicy-retainrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetainRule?: DLMLifecyclePolicyRetainRule;
  /**
   * Specifies a rule for copying snapshots or AMIs across regions.
   *
   * You can't specify cross-Region copy rules for policies that create snapshots on an Outpost. If the policy creates snapshots in a Region, then snapshots can be copied to up to three Regions or Outposts.
   *
   * _Required_: No
   *
   * _Type_: List of [CrossRegionCopyRule](aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.md)
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrossRegionCopyRules?: List<DLMLifecyclePolicyCrossRegionCopyRule>;
  /**
   * The name of the schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `120`
   *
   * _Pattern_: `[0-9A-Za-z _-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTags?: Value<boolean>;
}

/**
 * **[Snapshot and AMI policies only]** Specifies a cross-Region copy rule for snapshot and AMI policies.
 *
 * **Note**
 *
 * To specify a cross-Region copy action for event-based polices, use CrossRegionCopyAction.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyrule.html}
 **/
export interface DLMLifecyclePolicyCrossRegionCopyRule {
  /**
   * Avoid using this parameter when creating new policies. Instead, use **Target** to specify a target Region or a target Outpost for snapshot copies.
   *
   * For policies created before the **Target** parameter was introduced, this parameter indicates the target Region for snapshot copies.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `16`
   *
   * _Pattern_: `([a-z]+-){2,3}d`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetRegion?: Value<string>;
  /**
   * The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
   *
   * Use this parameter instead of **TargetRegion**. Do not specify both.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[w:-/*]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target?: Value<string>;
  /**
   * **[AMI policies only]** The AMI deprecation rule for cross-Region AMI copies created by the rule.
   *
   * _Required_: No
   *
   * _Type_: [CrossRegionCopyDeprecateRule](aws-properties-dlm-lifecyclepolicy-crossregioncopydeprecaterule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeprecateRule?: DLMLifecyclePolicyCrossRegionCopyDeprecateRule;
  /**
   * To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encrypted: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws(-[a-z]{1,3}){0,2}:kms:([a-z]+-){2,3}d:d+:key/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CmkArn?: Value<string>;
  /**
   * The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.
   *
   * _Required_: No
   *
   * _Type_: [CrossRegionCopyRetainRule](aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetainRule?: DLMLifecyclePolicyCrossRegionCopyRetainRule;
  /**
   * Indicates whether to copy all user-defined tags from the source snapshot or AMI to the cross-Region copy.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTags?: Value<boolean>;
}

/**
 * **[Event-based policies only]** Specifies a cross-Region copy action for event-based policies.
 *
 * **Note**
 *
 * To specify a cross-Region copy rule for snapshot and AMI policies, use CrossRegionCopyRule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyaction.html}
 **/
export interface DLMLifecyclePolicyCrossRegionCopyAction {
  /**
   * The target Region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^[w:-/*]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: Value<string>;
  /**
   * The encryption settings for the copied snapshot.
   *
   * _Required_: Yes
   *
   * _Type_: [EncryptionConfiguration](aws-properties-dlm-lifecyclepolicy-encryptionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfiguration: DLMLifecyclePolicyEncryptionConfiguration;
  /**
   * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.
   *
   * _Required_: No
   *
   * _Type_: [CrossRegionCopyRetainRule](aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetainRule?: DLMLifecyclePolicyCrossRegionCopyRetainRule;
}

/**
 * **[Snapshot policies only]** Specifies a rule for sharing snapshots across AWS accounts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-sharerule.html}
 **/
export interface DLMLifecyclePolicyShareRule {
  /**
   * The IDs of the AWS accounts with which to share the snapshots.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetAccounts?: List<Value<string>>;
  /**
   * The unit of time for the automatic unsharing interval.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnshareIntervalUnit?: Value<string>;
  /**
   * The period after which snapshots that are shared with other AWS accounts are automatically unshared.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnshareInterval?: Value<number>;
}

/**
 * **[Snapshot policies only]** Specifies information about the archive storage tier retention period.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-archiveretainrule.html}
 **/
export interface DLMLifecyclePolicyArchiveRetainRule {
  /**
   * Information about retention period in the Amazon EBS Snapshots Archive. For more information, see [Archive Amazon EBS snapshots](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/snapshot-archive.html).
   *
   * _Required_: Yes
   *
   * _Type_: [RetentionArchiveTier](aws-properties-dlm-lifecyclepolicy-retentionarchivetier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionArchiveTier: DLMLifecyclePolicyRetentionArchiveTier;
}

/**
 * **[Snapshot policies only]** Specifies a rule for enabling fast snapshot restore for snapshots created by snapshot policies. You can enable fast snapshot restore based on either a count or a time interval.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-fastrestorerule.html}
 **/
export interface DLMLifecyclePolicyFastRestoreRule {
  /**
   * The unit of time for enabling fast snapshot restore.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalUnit?: Value<string>;
  /**
   * The Availability Zones in which to enable fast snapshot restore.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZones?: List<Value<string>>;
  /**
   * The number of snapshots to be enabled with fast snapshot restore.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
  /**
   * The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval?: Value<number>;
}

/**
 * **[Snapshot and AMI policies only]** Specifies when the policy should create snapshots or AMIs.
 *
 * **Note**
 *
 * You must specify either **CronExpression**, or **Interval**, **IntervalUnit**, and **Times**.
 *
 * If you need to specify an [ArchiveRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-archiverule) for the schedule, then you must specify a creation frequency of at least 28 days.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-createrule.html}
 **/
export interface DLMLifecyclePolicyCreateRule {
  /**
   * The interval unit.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HOURS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalUnit?: Value<string>;
  /**
   * The time, in UTC, to start the operation. The supported format is hh:mm.
   *
   * The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Times?: List<Value<string>>;
  /**
   * The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year. For more information, see [Cron expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the _Amazon CloudWatch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `17`
   *
   * _Maximum_: `106`
   *
   * _Pattern_: `cron([^n]{11,100})`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CronExpression?: Value<string>;
  /**
   * The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval?: Value<number>;
  /**
   * **[Snapshot policies only]** Specifies the destination for snapshots created by the policy. To create snapshots in the same Region as the source resource, specify `CLOUD`. To create snapshots on the same Outpost as the source resource, specify `OUTPOST_LOCAL`. If you omit this parameter, `CLOUD` is used by default.
   *
   * If the policy targets resources in an AWS Region, then you must create snapshots in the same Region as the source resource. If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost as the source resource, or in the Region of that Outpost.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CLOUD | OUTPOST_LOCAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Location?: Value<string>;
}

/**
 * **[Snapshot and AMI policies only]** Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.
 *
 * **Note**
 *
 * For snapshot policies that have an [ArchiveRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-archiverule), this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.
 *
 * For snapshot policies that do not have an **ArchiveRule**, snapshots are permanently deleted when this retention threshold is met.
 *
 * You can retain snapshots based on either a count or a time interval.
 *
 * You must specify **Count**. If you specify an [ArchiveRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-archiverule) for the schedule, then you can specify a retention count of `0` to archive snapshots immediately after creation. If you specify a [FastRestoreRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-fastrestorerule), ShareRule, or a CrossRegionCopyRule, then you must specify a retention count of `1` or more.
 *
 * You must specify **Interval** and **IntervalUnit**. If you specify an [ArchiveRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-archiverule) for the schedule, then you can specify a retention interval of `0` days to archive snapshots immediately after creation. If you specify a [FastRestoreRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-fastrestorerule), ShareRule, or a CrossRegionCopyRule, then you must specify a retention interval of `1` day or more.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retainrule.html}
 **/
export interface DLMLifecyclePolicyRetainRule {
  /**
   * The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`. Once the snapshot has been retained for 3 months, it is deleted, or it is moved to the archive tier if you have specified an [ArchiveRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-archiverule).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalUnit?: Value<string>;
  /**
   * The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to retain a maximum of three snapshots, specify `3`. When the fourth snapshot is created, the oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an [ArchiveRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-schedule.html#cfn-dlm-lifecyclepolicy-schedule-archiverule).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
  /**
   * The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval?: Value<number>;
}

/**
 * **[All policy types]** Specifies the configuration of a lifecycle policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-policydetails.html}
 **/
export interface DLMLifecyclePolicyPolicyDetails {
  /**
   * **[Snapshot policies only]** The target resource type for snapshot and AMI lifecycle policies. Use `VOLUME `to create snapshots of individual volumes or use `INSTANCE` to create multi-volume snapshots from the volumes for an instance.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTypes?: List<Value<string>>;
  /**
   * **[Snapshot and AMI policies only]** The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules—one mandatory schedule and up to three optional schedules.
   *
   * _Required_: No
   *
   * _Type_: List of [Schedule](aws-properties-dlm-lifecyclepolicy-schedule.md)
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedules?: List<DLMLifecyclePolicySchedule>;
  /**
   * **[All policy types]** The valid target resource types and actions a policy can manage. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY ` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account.
   *
   * The default is `EBS_SNAPSHOT_MANAGEMENT`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `EBS_SNAPSHOT_MANAGEMENT | EVENT_BASED_POLICY | IMAGE_MANAGEMENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyType?: Value<string>;
  /**
   * **[Event-based policies only]** The event that activates the event-based policy.
   *
   * _Required_: No
   *
   * _Type_: [EventSource](aws-properties-dlm-lifecyclepolicy-eventsource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventSource?: DLMLifecyclePolicyEventSource;
  /**
   * **[Snapshot and AMI policies only]** A set of optional parameters for snapshot and AMI lifecycle policies.
   *
   * If you are modifying a policy that was created or previously modified using the Amazon Data Lifecycle Manager console, then you must include this parameter and specify either the default values or the new values that you require. You can't omit this parameter or set its values to null.
   *
   * _Required_: No
   *
   * _Type_: [Parameters](aws-properties-dlm-lifecyclepolicy-parameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: DLMLifecyclePolicyParameters;
  /**
   * **[Event-based policies only]** The actions to be performed when the event-based policy is activated. You can specify only one action per policy.
   *
   * _Required_: No
   *
   * _Type_: List of [Action](aws-properties-dlm-lifecyclepolicy-action.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<DLMLifecyclePolicyAction>;
  /**
   * **[Snapshot and AMI policies only]** The single tag that identifies targeted resources for this policy.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetTags?: List<ResourceTag>;
  /**
   * **[Snapshot and AMI policies only]** The location of the resources to backup. If the source resources are located in an AWS Region, specify `CLOUD`. If the source resources are located on an Outpost in your account, specify `OUTPOST`.
   *
   * If you specify `OUTPOST`, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceLocations?: List<Value<string>>;
}

/**
 * **[Event-based policies only]** Specifies the encryption settings for cross-Region snapshot copies created by event-based policies.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-encryptionconfiguration.html}
 **/
export interface DLMLifecyclePolicyEncryptionConfiguration {
  /**
   * To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or when encryption by default is not enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encrypted: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws(-[a-z]{1,3}){0,2}:kms:([a-z]+-){2,3}d:d+:key/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CmkArn?: Value<string>;
}

/**
 * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopyretainrule.html}
 **/
export interface DLMLifecyclePolicyCrossRegionCopyRetainRule {
  /**
   * The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalUnit: Value<string>;
  /**
   * The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval: Value<number>;
}

/**
 * **[Snapshot policies only]** Describes the retention rule for archived snapshots. Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.
 *
 * **Note**
 *
 * The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.
 *
 * For **count-based schedules**, you must specify **Count**. For **age-based schedules**, you must specify **Interval** and ** IntervalUnit**.
 *
 * For more information about using snapshot archiving, see [Considerations for snapshot lifecycle policies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-retentionarchivetier.html}
 **/
export interface DLMLifecyclePolicyRetentionArchiveTier {
  /**
   * The unit of time in which to measure the **Interval**. For example, to retain a snapshots in the archive tier for 6 months, specify `Interval=6` and `IntervalUnit=MONTHS`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalUnit?: Value<string>;
  /**
   * The maximum number of snapshots to retain in the archive storage tier for each volume. The count must ensure that each snapshot remains in the archive tier for at least 90 days. For example, if the schedule creates snapshots every 30 days, you must specify a count of 3 or more to ensure that each snapshot is archived for at least 90 days.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
  /**
   * Specifies the period of time to retain snapshots in the archive tier. After this period expires, the snapshot is permanently deleted.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval?: Value<number>;
}

/**
 * **[AMI policies only]** Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.
 *
 * For age-based schedules, you must specify **Interval** and **IntervalUnit**. For count-based schedules, you must specify **Count**.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-deprecaterule.html}
 **/
export interface DLMLifecyclePolicyDeprecateRule {
  /**
   * The unit of time in which to measure the **Interval**.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalUnit?: Value<string>;
  /**
   * If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<number>;
  /**
   * If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval?: Value<number>;
}

/**
 * **[AMI policies only]** Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dlm-lifecyclepolicy-crossregioncopydeprecaterule.html}
 **/
export interface DLMLifecyclePolicyCrossRegionCopyDeprecateRule {
  /**
   * The unit of time in which to measure the **Interval**. For example, to deprecate a cross-Region AMI copy after 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DAYS | MONTHS | WEEKS | YEARS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalUnit: Value<string>;
  /**
   * The period after which to deprecate the cross-Region AMI copies. The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval: Value<number>;
}
export interface DLMLifecyclePolicyProperties {
  /**
   * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws(-[a-z]{1,3}){0,2}:iam::d+:role/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRoleArn?: Value<string>;
  /**
   * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `500`
   *
   * _Pattern_: `[0-9A-Za-z _-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The activation state of the lifecycle policy.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED | ERROR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The configuration details of the lifecycle policy.
   *
   * _Required_: Conditional
   *
   * _Type_: [PolicyDetails](aws-properties-dlm-lifecyclepolicy-policydetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyDetails?: DLMLifecyclePolicyPolicyDetails;
  /**
   * The tags to apply to the lifecycle policy during creation.
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
 * Specifies a lifecycle policy, which is used to automate operations on Amazon EBS resources.
 *
 * The properties are required when you add a lifecycle policy and optional when you update a lifecycle policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dlm-lifecyclepolicy.html}
 */
export interface DLMLifecyclePolicyResource {
  Type: 'AWS::DLM::LifecyclePolicy';
  Properties: DLMLifecyclePolicyProperties;
}
