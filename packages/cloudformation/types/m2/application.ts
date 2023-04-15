/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
import { ResourceTag } from '../../shared-types/resource';

/**
 * The application definition for a particular application. You can specify either inline JSON or an Amazon S3 bucket location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-m2-application-definition.html}
 **/
export interface M2ApplicationDefinition {
  /**
   * The content of the application definition. This is a JSON object that contains the resource configuration/definitions that identify an application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content?: Value<string>;
  /**
   * The S3 bucket that contains the application definition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `S{1,2000}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Location?: Value<string>;
}
export interface M2ApplicationProperties {
  /**
   * The description of the application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The identifier of a customer managed key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The application definition for a particular application. You can specify either inline JSON or an Amazon S3 bucket location.
   *
   * For information about application definitions, see the [AWS Mainframe Modernization User Guide](https://docs.aws.amazon.com/m2/latest/userguide/applications-m2-definition.html).
   *
   * _Required_: Yes
   *
   * _Type_: [Definition](aws-properties-m2-application-definition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition: M2ApplicationDefinition;
  /**
   * The type of the target platform for this application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `bluage | microfocus`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineType: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[A-Za-z0-9][A-Za-z0-9_-]{1,59}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Specifies a new application with given parameters. Requires an existing runtime environment and application definition file.
 *
 * For information about application definitions, see the [AWS Mainframe Modernization User Guide](https://docs.aws.amazon.com/m2/latest/userguide/applications-m2-definition.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-application.html}
 */
export interface M2ApplicationResource {
  Type: 'AWS::M2::Application';
  Properties: M2ApplicationProperties;
}
