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

export interface CloudFormationPublicTypeVersionProperties {
  /**
   * The name of the extension to test.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
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
  TypeName?: Value<string>;
  /**
   * The S3 bucket to which CloudFormation delivers the contract test execution logs.
   *
   * CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a test type status of `PASSED` or `FAILED`.
   *
   * The user initiating the stack operation must be able to access items in the specified S3 bucket. Specifically, the user needs the following permissions:
   */
  LogDeliveryBucket?: Value<string>;
  /**
   * The type of the extension to test.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Allowed values_: `HOOK | MODULE | RESOURCE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * The version number to assign to this version of the extension.
   *
   * Use the following format, and adhere to semantic versioning when assigning a version number to your extension:
   *
   * `MAJOR.MINOR.PATCH`
   *
   * For more information, see [Semantic Versioning 2.0.0](https://semver.org/).
   *
   * If you don't specify a version number, CloudFormation increments the version number by one minor version release.
   *
   * You cannot specify a version number the first time you publish a type. AWS CloudFormation automatically sets the first version number to be `1.0.0`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `5`
   *
   * _Pattern_: `^(0|[1-9]d*).(0|[1-9]d*).(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PublicVersionNumber?: Value<string>;
  /**
   * The Amazon Resource Number (ARN) of the extension.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn?: Value<string>;
}

/**
 * Tests and publishes a registered extension as a public, third-party extension.
 *
 * CloudFormation first tests the extension to make sure it meets all necessary requirements for being published in the CloudFormation registry. If it does, CloudFormation then publishes it to the registry as a public third-party extension in this Region. Public extensions are available for use by all CloudFormation users.
 *
 * For more information, see [Testing your public extension prior to publishing](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing) in the _CloudFormation CLI User Guide_.
 *
 * If you don't specify a version, CloudFormation uses the default version of the extension in your account and Region for testing.
 *
 * To perform testing, CloudFormation assumes the execution role specified when the type was registered.
 *
 * An extension must have a test status of `PASSED` before it can be published. For more information, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html) in the _CloudFormation CLI User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publictypeversion.html}
 */
export interface CloudFormationPublicTypeVersionResource {
  Type: 'AWS::CloudFormation::PublicTypeVersion';
  Properties: CloudFormationPublicTypeVersionProperties;
}
