/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Specifications for the customer’s VPC and related PrivateLink VPC endpoint that are used to associate with the VPC Ingress Connection resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.html}
 **/
export interface AppRunnerVpcIngressConnectionIngressVpcConfiguration {
  /**
   * The ID of the VPC that is used for the VPC endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcId: Value<string>;
  /**
   * The ID of the VPC endpoint that your App Runner service connects to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcEndpointId: Value<string>;
}
export interface AppRunnerVpcIngressConnectionProperties {
  /**
   * The customer-provided VPC Ingress Connection name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `[A-Za-z0-9][A-Za-z0-9-_]{3,39}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcIngressConnectionName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Pattern_: `arn:aws(-[w]+)*:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[0-9]{12}:(w|/|-){1,1011}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceArn: Value<string>;
  /**
   * An optional list of metadata items that you can associate with the VPC Ingress Connection resource. A tag is a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
  /**
   * Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.
   *
   * _Required_: Yes
   *
   * _Type_: [IngressVpcConfiguration](aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngressVpcConfiguration: AppRunnerVpcIngressConnectionIngressVpcConfiguration;
}

/**
 * The `AWS::AppRunner::VpcIngressConnection` resource is an AWS App Runner resource type that specifies an App Runner VPC Ingress Connection.
 *
 * App Runner requires this resource when you want to associate your App Runner service to an Amazon VPC endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html}
 */
export interface AppRunnerVpcIngressConnectionResource {
  Type: 'AWS::AppRunner::VpcIngressConnection';
  Properties: AppRunnerVpcIngressConnectionProperties;
}
