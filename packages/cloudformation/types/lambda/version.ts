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
 * A [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html) configuration for a function's version.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-provisionedconcurrencyconfiguration.html}
 **/
export interface LambdaVersionProvisionedConcurrencyConfiguration {
  /**
   * The amount of provisioned concurrency to allocate for the version.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedConcurrentExecutions: Value<number>;
}
export interface LambdaVersionProperties {
  /**
   * Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeSha256?: Value<string>;
  /**
   * A description for the version to override the description in the function configuration. Updates are not supported for this property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The name of the Lambda function.
   *
   * **Name formats**
   */
  FunctionName: Value<string>;
  /**
   * Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.
   *
   * _Required_: No
   *
   * _Type_: [ProvisionedConcurrencyConfiguration](aws-properties-lambda-version-provisionedconcurrencyconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedConcurrencyConfig?: LambdaVersionProvisionedConcurrencyConfiguration;
}

/**
 * The `AWS::Lambda::Version` resource creates a [version](https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html) from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html}
 */
export interface LambdaVersionResource {
  Type: 'AWS::Lambda::Version';
  Properties: LambdaVersionProperties;
}
