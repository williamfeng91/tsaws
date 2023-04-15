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
 * Contains configuration information about a CloudFront function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-functionconfig.html}
 **/
export interface CloudFrontFunctionFunctionConfig {
  /**
   * A comment to describe the function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment: Value<string>;
  /**
   * The function's runtime environment. The only valid value is `cloudfront-js-1.0`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `cloudfront-js-1.0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Runtime: Value<string>;
}

/**
 * Contains metadata about a CloudFront function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-function-functionmetadata.html}
 **/
export interface CloudFrontFunctionFunctionMetadata {
  /**
   * The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionARN?: Value<string>;
}
export interface CloudFrontFunctionProperties {
  /**
   * Contains configuration information about a CloudFront function.
   *
   * _Required_: Yes
   *
   * _Type_: [FunctionConfig](aws-properties-cloudfront-function-functionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionConfig: CloudFrontFunctionFunctionConfig;
  /**
   * Contains metadata about a CloudFront function.
   *
   * _Required_: No
   *
   * _Type_: [FunctionMetadata](aws-properties-cloudfront-function-functionmetadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionMetadata?: CloudFrontFunctionFunctionMetadata;
  /**
   * A flag that determines whether to automatically publish the function to the `LIVE` stage when it’s created. To automatically publish to the `LIVE` stage, set this property to `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoPublish?: Value<boolean>;
  /**
   * The function code. For more information about writing a CloudFront function, see [Writing function code for CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionCode: Value<string>;
  /**
   * A name to identify the function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^[a-zA-Z0-9-_]{1,64}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a CloudFront function.
 *
 * To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function, and the function’s stage.
 *
 * By default, when you create a function, it’s in the `DEVELOPMENT` stage. In this stage, you can [test the function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/test-function.html) in the CloudFront console (or with `TestFunction` in the CloudFront API).
 *
 * When you’re ready to use your function with a CloudFront distribution, publish the function to the `LIVE` stage. You can do this in the CloudFront console, with `PublishFunction` in the CloudFront API, or by updating the `AWS::CloudFront::Function` resource with the `AutoPublish` property set to `true`. When the function is published to the `LIVE` stage, you can attach it to a distribution’s cache behavior, using the function’s ARN.
 *
 * To automatically publish the function to the `LIVE` stage when it’s created, set the `AutoPublish` property to `true`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html}
 */
export interface CloudFrontFunctionResource {
  Type: 'AWS::CloudFront::Function';
  Properties: CloudFrontFunctionProperties;
}
