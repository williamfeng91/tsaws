/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface ConnectApprovedOriginProperties {
  /**
   * Domain name to be added to the allow-list of the instance.
   *
   * _Maximum_: `267`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Origin: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceId: Value<string>;
}

/**
 * The approved origin for the instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html}
 */
export interface ConnectApprovedOriginResource {
  Type: 'AWS::Connect::ApprovedOrigin';
  Properties: ConnectApprovedOriginProperties;
}
