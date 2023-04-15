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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig-onfailure.html}
 **/
export interface LambdaEventInvokeConfigOnFailure {
  Destination: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess.html}
 **/
export interface LambdaEventInvokeConfigOnSuccess {
  Destination: Value<string>;
}

/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig.html}
 **/
export interface LambdaEventInvokeConfigDestinationConfig {
  /**
   * The destination configuration for successful invocations.
   *
   * _Required_: No
   *
   * _Type_: [OnSuccess](aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnSuccess?: LambdaEventInvokeConfigOnSuccess;
  /**
   * The destination configuration for failed invocations.
   *
   * _Required_: No
   *
   * _Type_: [OnFailure](aws-properties-lambda-eventinvokeconfig-destinationconfig-onfailure.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnFailure?: LambdaEventInvokeConfigOnFailure;
}
export interface LambdaEventInvokeConfigProperties {
  /**
   * The name of the Lambda function.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `([a-zA-Z0-9-_]+)`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FunctionName: Value<string>;
  /**
   * The maximum number of times to retry when the function returns an error.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRetryAttempts?: Value<number>;
  /**
   * A destination for events after they have been sent to a function for processing.
   *
   * **Destinations**
   */
  DestinationConfig?: LambdaEventInvokeConfigDestinationConfig;
  /**
   * The identifier of a version or alias.
   */
  Qualifier: Value<string>;
  /**
   * The maximum age of a request that Lambda sends to a function for processing.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `60`
   *
   * _Maximum_: `21600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumEventAgeInSeconds?: Value<number>;
}

/**
 * The `AWS::Lambda::EventInvokeConfig` resource configures options for [asynchronous invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html) on a version or an alias.
 *
 * By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html}
 */
export interface LambdaEventInvokeConfigResource {
  Type: 'AWS::Lambda::EventInvokeConfig';
  Properties: LambdaEventInvokeConfigProperties;
}
