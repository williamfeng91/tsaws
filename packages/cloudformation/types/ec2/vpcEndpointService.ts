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

export interface EC2VPCEndpointServiceProperties {
  /**
   * The Amazon Resource Names (ARNs) of the Network Load Balancers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkLoadBalancerArns?: List<Value<string>>;
  /**
   * The entity that is responsible for the endpoint costs. The default is the endpoint owner. If you set the payer responsibility to the service owner, you cannot set it back to the endpoint owner.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ServiceOwner`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PayerResponsibility?: Value<string>;
  /**
   * Indicates whether requests from service consumers to create an endpoint to your service must be accepted.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcceptanceRequired?: Value<boolean>;
  /**
   * Indicates whether to enable the built-in Contributor Insights rules.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContributorInsightsEnabled?: Value<boolean>;
  /**
   * The Amazon Resource Names (ARNs) of the Gateway Load Balancers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GatewayLoadBalancerArns?: List<Value<string>>;
}

/**
 * Creates a VPC endpoint service configuration to which service consumers (AWS accounts, users, and IAM roles) can connect.
 *
 * To create an endpoint service configuration, you must first create one of the following for your service:
 *
 * For more information, see the [AWS PrivateLink User Guide](https://docs.aws.amazon.com/vpc/latest/privatelink/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html}
 */
export interface EC2VPCEndpointServiceResource {
  Type: 'AWS::EC2::VPCEndpointService';
  Properties: EC2VPCEndpointServiceProperties;
}
