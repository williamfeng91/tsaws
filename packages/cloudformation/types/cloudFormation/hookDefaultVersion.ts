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

export interface CloudFormationHookDefaultVersionProperties {
  /**
   * The version ID of the type specified.
   *
   * You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[A-Za-z0-9-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionId?: Value<string>;
  /**
   * The name of the hook.
   *
   * You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeName?: Value<string>;
  /**
   * The version ID of the type configuration.
   *
   * You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[A-Za-z0-9-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeVersionArn?: Value<string>;
}

/**
 * The `HookDefaultVersion` resource specifies the default version of the hook. The default version of the hook is used in CloudFormation operations for this AWS account and AWS Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html}
 */
export interface CloudFormationHookDefaultVersionResource {
  Type: 'AWS::CloudFormation::HookDefaultVersion';
  Properties: CloudFormationHookDefaultVersionProperties;
}
