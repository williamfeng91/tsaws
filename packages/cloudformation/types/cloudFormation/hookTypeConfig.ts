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

export interface CloudFormationHookTypeConfigProperties {
  /**
   * The unique name for your hook. Specifies a three-part namespace for your hook, with a recommended pattern of `Organization::Service::Hook`.
   *
   * You must specify either `TypeName` and `Configuration` or `TypeARN` and `Configuration`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `196`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeName?: Value<string>;
  /**
   * Specifies the activated hook type configuration, in this AWS account and AWS Region.
   *
   * You must specify either `TypeName` and `Configuration` or `TypeARN` and `Configuration`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration: Value<string>;
  /**
   * The Amazon Resource Number (ARN) for the hook to set `Configuration` for.
   *
   * You must specify either `TypeName` and `Configuration` or `TypeARN` and `Configuration`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeArn?: Value<string>;
  /**
   * Specifies the activated hook type configuration, in this AWS account and AWS Region.
   *
   * Defaults to `default` alias. Hook types currently support default configuration alias.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationAlias?: Value<string>;
}

/**
 * The `HookTypeConfig` resource specifies the configuration of a hook.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html}
 */
export interface CloudFormationHookTypeConfigResource {
  Type: 'AWS::CloudFormation::HookTypeConfig';
  Properties: CloudFormationHookTypeConfigProperties;
}
