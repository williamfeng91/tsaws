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

export interface InspectorAssessmentTargetProperties {
  /**
   * The name of the Amazon Inspector assessment target. The name must be unique within the AWS account.
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
  AssessmentTargetName?: Value<string>;
  /**
   * The ARN that specifies the resource group that is used to create the assessment target. If `resourceGroupArn` is not specified, all EC2 instances in the current AWS account and Region are included in the assessment target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `300`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceGroupArn?: Value<string>;
}

/**
 * The `AWS::Inspector::AssessmentTarget` resource is used to create Amazon Inspector assessment targets, which specify the Amazon EC2 instances that will be analyzed during an assessment run.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttarget.html}
 */
export interface InspectorAssessmentTargetResource {
  Type: 'AWS::Inspector::AssessmentTarget';
  Properties: InspectorAssessmentTargetProperties;
}
