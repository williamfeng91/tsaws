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

export interface ConnectSecurityKeyProperties {
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
  /**
   * A valid security key in PEM format.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key: Value<string>;
}

/**
 * The security key for the instance.
 *
 * **Note**
 *
 * Only two security keys are allowed per Amazon Connect instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html}
 */
export interface ConnectSecurityKeyResource {
  Type: 'AWS::Connect::SecurityKey';
  Properties: ConnectSecurityKeyProperties;
}
