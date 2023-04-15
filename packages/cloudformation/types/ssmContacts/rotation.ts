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
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `ShiftCoverage` property type specifies Property description not available. for an [AWS::SSMContacts::Rotation](aws-resource-ssmcontacts-rotation.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-shiftcoverage.html}
 **/
export interface SSMContactsRotationShiftCoverage {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DayOfWeek: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CoverageTime](aws-properties-ssmcontacts-rotation-coveragetime.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CoverageTimes: List<SSMContactsRotationCoverageTime>;
}

/**
 * Information about rotations that recur weekly.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-weeklysetting.html}
 **/
export interface SSMContactsRotationWeeklySetting {
  /**
   * The day of the week when weekly recurring on-call shift rotations begins.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `FRI | MON | SAT | SUN | THU | TUE | WED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DayOfWeek: Value<string>;
  /**
   * The time of day when a weekly recurring on-call shift rotation begins.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HandOffTime: Value<string>;
}

/**
 * Information about when an on-call rotation is in effect and how long the rotation period lasts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html}
 **/
export interface SSMContactsRotationRecurrenceSettings {
  /**
   * Information about on-call rotations that recur daily.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DailySettings?: List<Value<string>>;
  /**
   * The number of contacts, or shift team members designated to be on call concurrently during a shift. For example, in an on-call schedule that contains ten contacts, a value of `2` designates that two of them are on call at any given time.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfOnCalls: Value<number>;
  /**
   * Information about the days of the week that the on-call rotation coverage includes.
   *
   * _Required_: No
   *
   * _Type_: List of [ShiftCoverage](aws-properties-ssmcontacts-rotation-shiftcoverage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShiftCoverages?: List<SSMContactsRotationShiftCoverage>;
  /**
   * Information about on-call rotations that recur weekly.
   *
   * _Required_: No
   *
   * _Type_: List of [WeeklySetting](aws-properties-ssmcontacts-rotation-weeklysetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WeeklySettings?: List<SSMContactsRotationWeeklySetting>;
  /**
   * The number of days, weeks, or months a single rotation lasts.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecurrenceMultiplier: Value<number>;
  /**
   * Information about on-call rotations that recur monthly.
   *
   * _Required_: No
   *
   * _Type_: List of [MonthlySetting](aws-properties-ssmcontacts-rotation-monthlysetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonthlySettings?: List<SSMContactsRotationMonthlySetting>;
}

/**
 * Information about when an on-call shift begins and ends.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-coveragetime.html}
 **/
export interface SSMContactsRotationCoverageTime {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndTime: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime: Value<string>;
}

/**
 * Information about on-call rotations that recur monthly.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-monthlysetting.html}
 **/
export interface SSMContactsRotationMonthlySetting {
  /**
   * The day of the month when monthly recurring on-call rotations begin.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `31`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DayOfMonth: Value<number>;
  /**
   * The time of day when a monthly recurring on-call shift rotation begins.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HandOffTime: Value<string>;
}
export interface SSMContactsRotationProperties {
  /**
   * Information about when an on-call rotation is in effect and how long the rotation period lasts.
   *
   * _Required_: Yes
   *
   * _Type_: [RecurrenceSettings](aws-properties-ssmcontacts-rotation-recurrencesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Recurrence: SSMContactsRotationRecurrenceSettings;
  /**
   * The time zone the rotation’s activity is based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul".
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[:a-zA-Z0-9_-s./]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeZoneId: Value<string>;
  /**
   * The date and time the rotation becomes active.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the rotation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9_-s.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The Amazon Resource Names (ARNs) of the contacts assigned to the rotation team.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactIds: List<Value<string>>;
}

/**
 * Creates a rotation in an on-call schedule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html}
 */
export interface SSMContactsRotationResource {
  Type: 'AWS::SSMContacts::Rotation';
  Properties: SSMContactsRotationProperties;
}
