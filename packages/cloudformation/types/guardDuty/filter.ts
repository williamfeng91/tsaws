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
 * Represents a map of finding properties that match specified conditions and values when querying findings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-findingcriteria.html}
 **/
export interface GuardDutyFilterFindingCriteria {
  /**
   * Represents a map of finding properties that match specified conditions and values when querying findings.
   *
   * For a mapping of JSON criterion to their console equivalent see [Finding criteria](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_filter-findings.html#filter_criteria). The following are the available criterion:
   */
  Criterion?: { [key: string]: any };
  /**
   * Specifies the condition to be applied to a single field when filtering through findings.
   *
   * _Required_: No
   *
   * _Type_: [Condition](aws-properties-guardduty-filter-condition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ItemType?: GuardDutyFilterCondition;
}

/**
 * Specifies the condition to apply to a single field when filtering through GuardDuty findings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-filter-condition.html}
 **/
export interface GuardDutyFilterCondition {
  /**
   * Represents an _equal_ **** condition to be applied to a single field when querying for findings.
   *
   * *Required*: No
   *
   * *Type*: List of String
   *
   * *Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Equals?: List<Value<string>>;
  /**
   * Represents a _less than_ condition to be applied to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LessThan?: Value<number>;
  /**
   * Represents a _less than or equal_ condition to be applied to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LessThanOrEqual?: Value<number>;
  /**
   * Represents a _greater than_ condition to be applied to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GreaterThan?: Value<number>;
  /**
   * Represents the less than condition to apply to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lt?: Value<number>;
  /**
   * Represents the greater than or equal condition to apply to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gte?: Value<number>;
  /**
   * Represents a _greater than or equal_ condition to be applied to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GreaterThanOrEqual?: Value<number>;
  /**
   * Represents the not equal condition to apply to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Neq?: List<Value<string>>;
  /**
   * Represents the equal condition to apply to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Eq?: List<Value<string>>;
  /**
   * Represents the less than or equal condition to apply to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lte?: Value<number>;
  /**
   * Represents a _greater than_ condition to be applied to a single field when querying for findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gt?: Value<number>;
  /**
   * Represents a _not equal_ **** condition to be applied to a single field when querying for findings.
   *
   * *Required*: No
   *
   * *Type*: List of String
   *
   * *Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotEquals?: List<Value<string>>;
}
export interface GuardDutyFilterProperties {
  /**
   * Specifies the action that is to be applied to the findings that match the filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ARCHIVE | NOOP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: Value<string>;
  /**
   * The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (`{ }`, `[ ]`, and `( )`), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description: Value<string>;
  /**
   * The ID of the detector belonging to the GuardDuty account that you want to create a filter for.
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
   * Represents the criteria to be used in the filter for querying findings.
   *
   * _Required_: Yes
   *
   * _Type_: [FindingCriteria](aws-properties-guardduty-filter-findingcriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FindingCriteria: GuardDutyFilterFindingCriteria;
  /**
   * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings. The minimum value for this property is 1 and the maximum is 100.
   *
   * By default, filters may not be created in the same order as they are ranked. To ensure that the filters are created in the expected order, you can use an optional attribute, [DependsOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html), with the following syntax: `"DependsOn":[ "ObjectName" ]`.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rank: Value<number>;
  /**
   * The tags to be added to a new filter resource. Each tag consists of a key and an optional value, both of which you define.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * The `AWS::GuardDuty::Filter` resource specifies a new filter defined by the provided `findingCriteria`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-filter.html}
 */
export interface GuardDutyFilterResource {
  Type: 'AWS::GuardDuty::Filter';
  Properties: GuardDutyFilterProperties;
}
