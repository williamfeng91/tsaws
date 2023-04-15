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

export interface CloudFormationResourceDefaultVersionProperties {
  /**
   * The ID of a specific version of the resource. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the resource version when it's registered.
   *
   * Conditional: You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
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
   * The name of the resource.
   *
   * Conditional: You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the resource version.
   *
   * Conditional: You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TypeVersionArn?: Value<string>;
}

/**
 * Specifies the default version of a resource. The default version of a resource will be used in CloudFormation operations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html}
 */
export interface CloudFormationResourceDefaultVersionResource {
  Type: 'AWS::CloudFormation::ResourceDefaultVersion';
  Properties: CloudFormationResourceDefaultVersionProperties;
}
