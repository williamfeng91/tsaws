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

export interface GuardDutyMasterProperties {
  /**
   * The unique ID of the detector of the GuardDuty member account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `300`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DetectorId: Value<string>;
  /**
   * The AWS account ID of the account designated as the GuardDuty administrator account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MasterId: Value<string>;
  /**
   * The ID of the invitation that is sent to the account designated as a member account. You can find the invitation ID by using the ListInvitation action of the GuardDuty API.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InvitationId?: Value<string>;
}

/**
 * You can use the `AWS::GuardDuty::Master` resource in a GuardDuty member account to accept an invitation from a GuardDuty administrator account. The invitation to the member account must be sent prior to using the `AWS::GuardDuty::Master` resource to accept the administrator account's invitation. You can invite a member account by using the `InviteMembers` operation of the Amazon GuardDuty API, or by creating an `AWS::GuardDuty::Member` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-master.html}
 */
export interface GuardDutyMasterResource {
  Type: 'AWS::GuardDuty::Master';
  Properties: GuardDutyMasterProperties;
}
