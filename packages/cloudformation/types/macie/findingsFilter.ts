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
 * The `CriterionAdditionalProperties` property type specifies Property description not available. for an [AWS::Macie::FindingsFilter](aws-resource-macie-findingsfilter.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-criterionadditionalproperties.html}
 **/
export interface MacieFindingsFilterCriterionAdditionalProperties {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  lt?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  gte?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  neq?: List<Value<string>>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  lte?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  eq?: List<Value<string>>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  gt?: Value<number>;
}

/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings. For more information, see [Filtering findings](https://docs.aws.amazon.com/macie/latest/user/findings-filter-overview.html) in the _Amazon Macie User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-findingsfilter-findingcriteria.html}
 **/
export interface MacieFindingsFilterFindingCriteria {
  /**
   * Specifies a condition that defines the property, operator, and one or more values to use to filter the results.
   *
   * _Required_: No
   *
   * _Type_: Map of [CriterionAdditionalProperties](aws-properties-macie-findingsfilter-criterionadditionalproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Criterion?: { [key: string]: MacieFindingsFilterCriterionAdditionalProperties };
}
export interface MacieFindingsFilterProperties {
  /**
   * The action to perform on findings that match the filter criteria (`FindingCriteria`). Valid values are:
   */
  Action?: Value<string>;
  /**
   * A custom description of the findings filter. The description can contain 1-512 characters.
   *
   * Avoid including sensitive data in the description. Users of the account might be able to see the description, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The position of the findings filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to findings.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Position?: Value<number>;
  /**
   * The criteria to use to filter findings.
   *
   * _Required_: Yes
   *
   * _Type_: [FindingCriteria](aws-properties-macie-findingsfilter-findingcriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FindingCriteria: MacieFindingsFilterFindingCriteria;
  /**
   * A custom name for the findings filter. The name can contain 3-64 characters.
   *
   * Avoid including sensitive data in the name. Users of the account might be able to see the name, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::Macie::FindingsFilter` resource specifies a findings filter. In Amazon Macie, a _findings filter_, also referred to as a _filter rule_, is a set of custom criteria that specifies which findings to include or exclude from the results of a query for findings. The criteria can help you identify and focus on findings that have specific characteristics, such as severity, type, or the name of an affected AWS resource. You can also configure a findings filter to suppress (automatically archive) findings that match the filter's criteria. For more information, see [Filtering findings](https://docs.aws.amazon.com/macie/latest/user/findings-filter-overview.html) in the _Amazon Macie User Guide_.
 *
 * An `AWS::Macie::Session` resource must exist for an AWS account before you can create an `AWS::Macie::FindingsFilter` resource for the account. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to ensure that an `AWS::Macie::Session` resource is created before other Macie resources are created for an account. For example, `"DependsOn": "Session"`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html}
 */
export interface MacieFindingsFilterResource {
  Type: 'AWS::Macie::FindingsFilter';
  Properties: MacieFindingsFilterProperties;
}
