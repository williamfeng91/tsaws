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

export interface EventsApiDestinationProperties {
  /**
   * A description for the API destination to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ARN of the connection to use for the API destination. The destination endpoint must support the authorization type specified for the connection.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Pattern_: `^arn:aws([a-z]|-)*:events:([a-z]|d|-)*:([0-9]{12})?:connection/[.-_A-Za-z0-9]+/[-A-Za-z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionArn: Value<string>;
  /**
   * The URL to the HTTP invocation endpoint for the API destination.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^((%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@x26=+$,A-Za-z0-9])+)([).!';/?:,])?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationEndpoint: Value<string>;
  /**
   * The method to use for the request to the HTTP invocation endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DELETE | GET | HEAD | OPTIONS | PATCH | POST | PUT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpMethod: Value<string>;
  /**
   * The name for the API destination to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[.-_A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The maximum number of requests per second to send to the HTTP invocation endpoint.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationRateLimitPerSecond?: Value<number>;
}

/**
 * Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.
 *
 * When using ApiDesinations with OAuth authentication we recommend these best practices:
 *
 * When the Connection resource is created the secret will be passed to EventBridge and stored in the customer account using “Service Linked Secrets,” effectively creating two secrets. This will minimize the cost because the original secret is only accessed when a CloudFormation template is created or updated, not every time an event is sent to the ApiDestination. The secret stored in the customer account by EventBridge is the one used for each event sent to the ApiDestination and AWS is responsible for the fees.
 *
 * **Note**
 *
 * The secret stored in the customer account by EventBridge can’t be updated directly, only when a CloudFormation template is updated.
 *
 * For examples of CloudFormation templates that use secrets, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#aws-resource-events-connection--examples).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html}
 */
export interface EventsApiDestinationResource {
  Type: 'AWS::Events::ApiDestination';
  Properties: EventsApiDestinationProperties;
}
