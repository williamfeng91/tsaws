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
 * The input for the AWS Lambda endpoint type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-lambdaendpointinput.html}
 **/
export interface RefactorSpacesServiceLambdaEndpointInput {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function or alias.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn: Value<string>;
}

/**
 * The configuration for the URL endpoint type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-urlendpointinput.html}
 **/
export interface RefactorSpacesServiceUrlEndpointInput {
  /**
   * The health check URL of the URL endpoint type. If the URL is a public endpoint, the `HealthUrl` must also be a public endpoint. If the URL is a private endpoint inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the host must be the same as the URL.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HealthUrl?: Value<string>;
  /**
   * The URL to route traffic to. The URL must be an [rfc3986-formatted URL](https://datatracker.ietf.org/doc/html/rfc3986). If the host is a domain name, the name must be resolvable over the public internet. If the scheme is `https`, the top level domain of the host must be listed in the [IANA root zone database](https://www.iana.org/domains/root/db).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Url: Value<string>;
}
export interface RefactorSpacesServiceProperties {
  /**
   * A summary of the configuration for the AWS Lambda endpoint type.
   *
   * _Required_: No
   *
   * _Type_: [LambdaEndpointInput](aws-properties-refactorspaces-service-lambdaendpointinput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LambdaEndpoint?: RefactorSpacesServiceLambdaEndpointInput;
  /**
   * The summary of the configuration for the URL endpoint type.
   *
   * _Required_: No
   *
   * _Type_: [UrlEndpointInput](aws-properties-refactorspaces-service-urlendpointinput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UrlEndpoint?: RefactorSpacesServiceUrlEndpointInput;
  /**
   * A description of the service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
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
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId?: Value<string>;
  /**
   * The endpoint type of the service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointType: Value<string>;
  /**
   * The unique identifier of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationIdentifier: Value<string>;
  /**
   * The tags assigned to the service.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the service.
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
 * Creates an AWS Migration Hub Refactor Spaces service. The account owner of the service is always the environment owner, regardless of which account in the environment creates the service. Services have either a URL endpoint in a virtual private cloud (VPC), or a Lambda function endpoint.
 *
 * **Important**
 *
 * If an AWS resource is launched in a service VPC, and you want it to be accessible to all of an environment’s services with VPCs and routes, apply the `RefactorSpacesSecurityGroup` to the resource. Alternatively, to add more cross-account constraints, apply your own security group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html}
 */
export interface RefactorSpacesServiceResource {
  Type: 'AWS::RefactorSpaces::Service';
  Properties: RefactorSpacesServiceProperties;
}
