/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A wrapper object holding the Amazon API Gateway endpoint input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-apigatewayproxyinput.html}
 **/
export interface RefactorSpacesApplicationApiGatewayProxyInput {
  /**
   * The name of the API Gateway stage. The name defaults to `prod`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StageName?: Value<string>;
  /**
   * The type of endpoint to use for the API Gateway proxy. If no value is specified in the request, the value is set to `REGIONAL` by default.
   *
   * If the value is set to `PRIVATE` in the request, this creates a private API endpoint that is isolated from the public internet. The private endpoint can only be accessed by using Amazon Virtual Private Cloud (Amazon VPC) endpoints for Amazon API Gateway that have been granted access.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointType?: Value<string>;
}
export interface RefactorSpacesApplicationProperties {
  /**
   * The unique identifier of the environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnvironmentIdentifier: Value<string>;
  /**
   * The ID of the virtual private cloud (VPC).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId: Value<string>;
  /**
   * The endpoint URL of the Amazon API Gateway proxy.
   *
   * _Required_: No
   *
   * _Type_: [ApiGatewayProxyInput](aws-properties-refactorspaces-application-apigatewayproxyinput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApiGatewayProxy?: RefactorSpacesApplicationApiGatewayProxyInput;
  /**
   * The proxy type of the proxy created within the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProxyType: Value<string>;
  /**
   * The tags assigned to the application.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates an AWS Migration Hub Refactor Spaces application. The account that owns the environment also owns the applications created inside the environment, regardless of the account that creates the application. Refactor Spaces provisions an Amazon API Gateway, API Gateway VPC link, and Network Load Balancer for the application proxy inside your account.
 *
 * In environments created with a [CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) of `NONE` you need to configure [ VPC to VPC connectivity](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-to-amazon-vpc-connectivity-options.html) between your service VPC and the application proxy VPC to route traffic through the application proxy to a service with a private URL endpoint. For more information, see [ Create an application](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/getting-started-create-application.html) in the _Refactor Spaces User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html}
 */
export interface RefactorSpacesApplicationResource {
  Type: 'AWS::RefactorSpaces::Application';
  Properties: RefactorSpacesApplicationProperties;
}
