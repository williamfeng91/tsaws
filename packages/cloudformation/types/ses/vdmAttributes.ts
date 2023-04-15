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
 * Settings for your VDM configuration as applicable to the Dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-dashboardattributes.html}
 **/
export interface SESVdmAttributesDashboardAttributes {
  /**
   * Specifies the status of your VDM engagement metrics collection. Can be one of the following:
   */
  EngagementMetrics?: Value<string>;
}

/**
 * Settings for your VDM configuration as applicable to the Guardian.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-guardianattributes.html}
 **/
export interface SESVdmAttributesGuardianAttributes {
  /**
   * Specifies the status of your VDM optimized shared delivery. Can be one of the following:
   */
  OptimizedSharedDelivery?: Value<string>;
}
export interface SESVdmAttributesProperties {
  /**
   * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
   *
   * _Required_: No
   *
   * _Type_: [DashboardAttributes](aws-properties-ses-vdmattributes-dashboardattributes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DashboardAttributes?: SESVdmAttributesDashboardAttributes;
  /**
   * Specifies additional settings for your VDM configuration as applicable to the Guardian.
   *
   * _Required_: No
   *
   * _Type_: [GuardianAttributes](aws-properties-ses-vdmattributes-guardianattributes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GuardianAttributes?: SESVdmAttributesGuardianAttributes;
}

/**
 * The Virtual Deliverability Manager (VDM) attributes that apply to your Amazon SES account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html}
 */
export interface SESVdmAttributesResource {
  Type: 'AWS::SES::VdmAttributes';
  Properties: SESVdmAttributesProperties;
}
