/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface InspectorAssessmentTemplateProperties {
  /**
   * The ARN of the assessment target to be included in the assessment template.
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
  AssessmentTargetArn: Value<string>;
  /**
   * The duration of the assessment run in seconds.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `180`
   *
   * _Maximum_: `86400`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DurationInSeconds: Value<number>;
  /**
   * The user-defined name that identifies the assessment template that you want to create. You can create several assessment templates for the same assessment target. The names of the assessment templates that correspond to a particular assessment target must be unique.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AssessmentTemplateName?: Value<string>;
  /**
   * The ARNs of the rules packages that you want to use in the assessment template.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RulesPackageArns: List<Value<string>>;
  /**
   * The user-defined attributes that are assigned to every finding that is generated by the assessment run that uses this assessment template. Within an assessment template, each key must be unique.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserAttributesForFindings?: List<ResourceTag>;
}

/**
 * The `AWS::Inspector::AssessmentTemplate` resource creates an Amazon Inspector assessment template, which specifies the Inspector assessment targets that will be evaluated by an assessment run and its related configurations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html}
 */
export interface InspectorAssessmentTemplateResource {
  Type: 'AWS::Inspector::AssessmentTemplate';
  Properties: InspectorAssessmentTemplateProperties;
}