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

export interface CloudFormationModuleDefaultVersionProperties {
  /**
   * The ID for the specific version of the module.
   *
   * Conditional: You must specify either `Arn`, or `ModuleName` and `VersionId`.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VersionId?: Value<string>;
  /**
   * The name of the module.
   *
   * Conditional: You must specify either `Arn`, or `ModuleName` and `VersionId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `204`
   *
   * _Pattern_: `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModuleName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the module version to set as the default version.
   *
   * Conditional: You must specify either `Arn`, or `ModuleName` and `VersionId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn?: Value<string>;
}

/**
 * Specifies the default version of a module. The default version of the module will be used in CloudFormation operations for this account and Region.
 *
 * To register a module version, use the `[AWS::CloudFormation::ModuleVersion](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html)` resource.
 *
 * For more information using modules, see [Using modules to encapsulate and reuse resource configurations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html) and [Registering extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-register) in the _AWS CloudFormation User Guide_. For information on developing modules, see [Developing modules](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/modules.html) in the _AWS CloudFormation CLI User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html}
 */
export interface CloudFormationModuleDefaultVersionResource {
  Type: 'AWS::CloudFormation::ModuleDefaultVersion';
  Properties: CloudFormationModuleDefaultVersionProperties;
}
