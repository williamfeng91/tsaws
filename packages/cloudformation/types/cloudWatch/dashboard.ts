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

export interface CloudWatchDashboardProperties {
  /**
   * The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DashboardName?: Value<string>;
  /**
   * The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.
   *
   * For more information about the syntax, see [Dashboard Body Structure and Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DashboardBody: Value<string>;
}

/**
 * The `AWS::CloudWatch::Dashboard` resource specifies an Amazon CloudWatch dashboard. A dashboard is a customizable home page in the CloudWatch console that you can use to monitor your AWS resources in a single view.
 *
 * All dashboards in your account are global, not region-specific.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html}
 */
export interface CloudWatchDashboardResource {
  Type: 'AWS::CloudWatch::Dashboard';
  Properties: CloudWatchDashboardProperties;
}
