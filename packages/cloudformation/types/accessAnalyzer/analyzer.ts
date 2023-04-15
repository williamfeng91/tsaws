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
 * The criteria that defines the rule.
 *
 * To learn about filter keys that you can use to create an archive rule, see [ IAM Access Analyzer filter keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html) in the _IAM User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-filter.html}
 **/
export interface AccessAnalyzerAnalyzerFilter {
  /**
   * An "exists" condition to match for the rule.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exists?: Value<boolean>;
  /**
   * A "contains" condition to match for the rule.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Contains?: List<Value<string>>;
  /**
   * A "not equal" condition to match for the rule.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Neq?: List<Value<string>>;
  /**
   * An "equals" condition to match for the rule.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Eq?: List<Value<string>>;
  /**
   * The property used to define the criteria in the filter for the rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Property: Value<string>;
}

/**
 * The criteria for an archive rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-accessanalyzer-analyzer-archiverule.html}
 **/
export interface AccessAnalyzerAnalyzerArchiveRule {
  /**
   * The criteria for the rule.
   *
   * _Required_: Yes
   *
   * _Type_: [List](aws-properties-accessanalyzer-analyzer-filter.md) of [Filter](aws-properties-accessanalyzer-analyzer-filter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filter: List<AccessAnalyzerAnalyzerFilter>;
  /**
   * The name of the archive rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleName: Value<string>;
}
export interface AccessAnalyzerAnalyzerProperties {
  /**
   * Specifies the archive rules to add for the analyzer.
   *
   * _Required_: No
   *
   * _Type_: List of [ArchiveRule](aws-properties-accessanalyzer-analyzer-archiverule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchiveRules?: List<AccessAnalyzerAnalyzerArchiveRule>;
  /**
   * The type represents the zone of trust for the analyzer.
   *
   * _Allowed Values_: ACCOUNT | ORGANIZATION
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The name of the analyzer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AnalyzerName?: Value<string>;
  /**
   * The tags to apply to the analyzer.
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
 * The `AWS::AccessAnalyzer::Analyzer` resource specifies a new analyzer. The analyzer is an object that represents the IAM Access Analyzer feature. An analyzer is required for Access Analyzer to become operational.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html}
 */
export interface AccessAnalyzerAnalyzerResource {
  Type: 'AWS::AccessAnalyzer::Analyzer';
  Properties: AccessAnalyzerAnalyzerProperties;
}
