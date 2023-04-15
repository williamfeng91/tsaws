/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface LookoutVisionProjectProperties {
  /**
   * The name of the project.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9_-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProjectName: Value<string>;
}

/**
 * The `AWS::LookoutVision::Project` type creates an Amazon Lookout for Vision project. A project is a grouping of the resources needed to create and manage an Amazon Lookout for Vision model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html}
 */
export interface LookoutVisionProjectResource {
  Type: 'AWS::LookoutVision::Project';
  Properties: LookoutVisionProjectProperties;
}
