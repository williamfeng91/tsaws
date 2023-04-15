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
 * The [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html}
 **/
export interface LambdaUrlCors {
  /**
   * Whether you want to allow cookies or other credentials in requests to your function URL. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowCredentials?: Value<boolean>;
  /**
   * The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example: `https://www.example.com`, `http://localhost:60905`.
   *
   * Alternatively, you can grant access to all origins with the wildcard character (`*`).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowOrigins?: List<Value<string>>;
  /**
   * The HTTP headers in your function response that you want to expose to origins that call your function URL. For example: `Date`, `Keep-Alive`, `X-Custom-Header`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExposeHeaders?: List<Value<string>>;
  /**
   * The HTTP headers that origins can include in requests to your function URL. For example: `Date`, `Keep-Alive`, `X-Custom-Header`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowHeaders?: List<Value<string>>;
  /**
   * The maximum amount of time, in seconds, that browsers can cache results of a preflight request. By default, this is set to `0`, which means the browser will not cache results.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `86400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxAge?: Value<number>;
  /**
   * The HTTP methods that are allowed when calling your function URL. For example: `GET`, `POST`, `DELETE`, or the wildcard character (`*`).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `6`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowMethods?: List<Value<string>>;
}
export interface LambdaUrlProperties {
  /**
   * The alias name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Qualifier?: Value<string>;
  /**
   * Use one of the following options:
   */
  InvokeMode?: Value<string>;
  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AWS_IAM | NONE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthType: Value<string>;
  /**
   * The name of the Lambda function.
   *
   * **Name formats**
   */
  TargetFunctionArn: Value<string>;
  /**
   * The [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
   *
   * _Required_: No
   *
   * _Type_: [Cors](aws-properties-lambda-url-cors.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cors?: LambdaUrlCors;
}

/**
 * The `AWS::Lambda::Url` resource creates a function URL with the specified configuration parameters. A [function URL](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html) is a dedicated HTTP(S) endpoint that you can use to invoke your function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html}
 */
export interface LambdaUrlResource {
  Type: 'AWS::Lambda::Url';
  Properties: LambdaUrlProperties;
}
