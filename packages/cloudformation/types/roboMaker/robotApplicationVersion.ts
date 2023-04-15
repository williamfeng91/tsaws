/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface RoboMakerRobotApplicationVersionProperties {
  /**
   * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CurrentRevisionId?: Value<string>;
  /**
   * The application information for the robot application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1224`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Application: Value<string>;
}

/**
 * The `AWS::RoboMaker::RobotApplicationVersion` resource creates an AWS RoboMaker robot version.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html}
 */
export interface RoboMakerRobotApplicationVersionResource {
  Type: 'AWS::RoboMaker::RobotApplicationVersion';
  Properties: RoboMakerRobotApplicationVersionProperties;
}
