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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-contacttargetinfo.html}
 **/
export interface SSMContactsContactContactTargetInfo {
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
 * The contact or contact channel that's being engaged.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-targets.html}
 **/
export interface SSMContactsContactTargets {
  /**
   * Information about the contact channel that Incident Manager engages.
   *
   * _Required_: No
   *
   * _Type_: [ChannelTargetInfo](aws-properties-ssmcontacts-contact-channeltargetinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelTargetInfo?: SSMContactsContactChannelTargetInfo;
  /**
   * The contact that Incident Manager is engaging during an incident.
   *
   * _Required_: No
   *
   * _Type_: [ContactTargetInfo](aws-properties-ssmcontacts-contact-contacttargetinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactTargetInfo?: SSMContactsContactContactTargetInfo;
}

/**
 * Information about the contact channel that Incident Manager uses to engage the contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-channeltargetinfo.html}
 **/
export interface SSMContactsContactChannelTargetInfo {
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
   * The Amazon Resource Name (ARN) of the contact channel.
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
  ChannelId: Value<string>;
}

/**
 * The `Stage` property type specifies a set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-contact-stage.html}
 **/
export interface SSMContactsContactStage {
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
  DurationInMinutes?: Value<number>;
  RotationIds?: List<Value<string>>;
  /**
   * The contacts or contact methods that the escalation plan or engagement plan is engaging.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-ssmcontacts-contact-targets.md) of [Targets](aws-properties-ssmcontacts-contact-targets.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets?: List<SSMContactsContactTargets>;
}
export interface SSMContactsContactProperties {
  /**
   * Refers to the type of contact. A single contact is type `PERSONAL` and an escalation plan is type `ESCALATION`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ESCALATION | ONCALL_SCHEDULE | PERSONAL`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The unique and identifiable alias of the contact or escalation plan.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-z0-9_-]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Alias: Value<string>;
  /**
   * The full name of the contact or escalation plan.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[p{L}p{Z}p{N}_.-]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayName: Value<string>;
  /**
   * A list of stages. A contact has an engagement plan with stages that contact specified contact channels. An escalation plan uses stages that contact specified contacts.
   *
   * _Required_: No
   *
   * _Type_: List of [Stage](aws-properties-ssmcontacts-contact-stage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Plan?: List<SSMContactsContactStage>;
}

/**
 * The `AWS::SSMContacts::Contact` resource specifies a contact or escalation plan. Incident Manager contacts are a subset of actions and data types that you can use for managing responder engagement and interaction.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html}
 */
export interface SSMContactsContactResource {
  Type: 'AWS::SSMContacts::Contact';
  Properties: SSMContactsContactProperties;
}
