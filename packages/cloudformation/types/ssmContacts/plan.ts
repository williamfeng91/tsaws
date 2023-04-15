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
 * The contact that Incident Manager is engaging during an incident.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-contacttargetinfo.html}
 **/
export interface SSMContactsPlanContactTargetInfo {
  /**
   * The Amazon Resource Name (ARN) of the contact.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:(aws|aws-cn|aws-us-gov):ssm-contacts:[-w+=/,.@]*:[0-9]+:([w+=/,.@:-]+)*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactId: Value<string>;
  /**
   * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsEssential: Value<boolean>;
}

/**
 * Information about the contact channel that Incident Manager uses to engage the contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-channeltargetinfo.html}
 **/
export interface SSMContactsPlanChannelTargetInfo {
  /**
   * The number of minutes to wait before retrying to send engagement if the engagement initially failed.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `60`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryIntervalInMinutes: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelId: Value<string>;
}

/**
 * The `Targets` property type specifies Property description not available. for an [AWS::SSMContacts::Plan](aws-resource-ssmcontacts-plan.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-targets.html}
 **/
export interface SSMContactsPlanTargets {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ChannelTargetInfo](aws-properties-ssmcontacts-plan-channeltargetinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelTargetInfo?: SSMContactsPlanChannelTargetInfo;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ContactTargetInfo](aws-properties-ssmcontacts-plan-contacttargetinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactTargetInfo?: SSMContactsPlanContactTargetInfo;
}

/**
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-plan-stage.html}
 **/
export interface SSMContactsPlanStage {
  /**
   * The time to wait until beginning the next stage. The duration can only be set to 0 if a target is specified.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInMinutes: Value<number>;
  /**
   * The contacts or contact methods that the escalation plan or engagement plan is engaging.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-ssmcontacts-plan-targets.md) of [Targets](aws-properties-ssmcontacts-plan-targets.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets?: List<SSMContactsPlanTargets>;
}
export interface SSMContactsPlanProperties {
  /**
   * The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RotationIds?: List<Value<string>>;
  /**
   * A list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods.
   *
   * _Required_: No
   *
   * _Type_: List of [Stage](aws-properties-ssmcontacts-plan-stage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stages?: List<SSMContactsPlanStage>;
  /**
   * The Amazon Resource Name (ARN) of the contact.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContactId: Value<string>;
}

/**
 * Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html}
 */
export interface SSMContactsPlanResource {
  Type: 'AWS::SSMContacts::Plan';
  Properties: SSMContactsPlanProperties;
}
