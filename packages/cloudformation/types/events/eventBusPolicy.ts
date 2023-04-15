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

/**
 * A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. The string must contain `Type`, `Key`, and `Value` fields. The `Value` field specifies the ID of the AWS organization. Following is an example value for `Condition`:
 *
 * `'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html}
 **/
export interface EventsEventBusPolicyCondition {
  /**
   * Specifies the type of condition. Currently the only supported value is `StringEquals`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * Specifies the value for the key. Currently, this must be the ID of the organization.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * Specifies the key for the condition. Currently the only supported key is `aws:PrincipalOrgID`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}
export interface EventsEventBusPolicyProperties {
  /**
   * The name of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[.-_A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EventBusName?: Value<string>;
  /**
   * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. For more information about AWS Organizations, see [What Is AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) in the _ AWS Organizations User Guide_.
   *
   * If you specify `Condition` with an AWS organization ID, and specify "*" as the value for `Principal`, you grant permission to all the accounts in the named organization.
   *
   * The `Condition` is a JSON string which must contain `Type`, `Key`, and `Value` fields.
   *
   * _Required_: No
   *
   * _Type_: [Condition](aws-properties-events-eventbuspolicy-condition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition?: EventsEventBusPolicyCondition;
  /**
   * The action that you are enabling the other account to perform.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `events:[a-zA-Z]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action?: Value<string>;
  /**
   * An identifier string for the external account that you are granting permissions to. If you later want to revoke the permission for this external account, specify this `StatementId` when you run [RemovePermission](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html).
   *
   * Each `StatementId` must be unique.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StatementId: Value<string>;
  /**
   * A JSON string that describes the permission policy statement. You can include a `Policy` parameter in the request instead of using the `StatementId`, `Action`, `Principal`, or `Condition` parameters.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statement?: { [key: string]: any };
  /**
   * The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus.
   *
   * If you specify "*" without specifying `Condition`, avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an `account` field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `(d{12}|*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Principal?: Value<string>;
}

/**
 * Running `PutPermission` permits the specified AWS account or AWS organization to put events to the specified _event bus_. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account.
 *
 * For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.
 *
 * To enable multiple AWS accounts to put events to your event bus, run `PutPermission` once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run `PutPermission` once specifying `Principal` as "*" and specifying the AWS organization ID in `Condition`, to grant permissions to all accounts in that organization.
 *
 * If you grant permissions using an organization, then accounts in that organization must specify a `RoleArn` with proper permissions when they use `PutTarget` to add your account's event bus as a target. For more information, see [Sending and Receiving Events Between AWS Accounts](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html) in the _Amazon EventBridge User Guide_.
 *
 * The permission policy on the event bus cannot exceed 10 KB in size.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html}
 */
export interface EventsEventBusPolicyResource {
  Type: 'AWS::Events::EventBusPolicy';
  Properties: EventsEventBusPolicyProperties;
}
