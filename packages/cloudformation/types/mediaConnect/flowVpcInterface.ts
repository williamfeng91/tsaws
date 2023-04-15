/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
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

export interface MediaConnectFlowVpcInterfaceProperties {
  /**
   * The subnet IDs that you want to use for your VPC interface.
   *
   * A range of IP addresses in your VPC. When you create your VPC, you specify a range of IPv4 addresses for the VPC in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. This is the primary CIDR block for your VPC. When you create a subnet for your VPC, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block.
   *
   * The subnets that you use across all VPC interfaces on the flow must be in the same Availability Zone as the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FlowArn: Value<string>;
  /**
   * The VPC security groups that you want MediaConnect to use for your VPC configuration. You must include at least one security group in the request.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds: List<Value<string>>;
  /**
   * The Amazon Resource Name (ARN) of the role that you created when you set up MediaConnect as a trusted service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The name of the VPC Interface. This value must be unique within the current flow.
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
 * The AWS::MediaConnect::FlowVpcInterface resource is a connection between your AWS Elemental MediaConnect flow and a virtual private cloud (VPC) that you created using the Amazon Virtual Private Cloud service.
 *
 * To avoid streaming your content over the public internet, you can add up to two VPC interfaces to your flow and use those connections to transfer content between your VPC and MediaConnect.
 *
 * You can update an existing flow to add a VPC interface. If you haven’t created the flow yet, you must create the flow with a temporary standard source by doing the following:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html}
 */
export interface MediaConnectFlowVpcInterfaceResource {
  Type: 'AWS::MediaConnect::FlowVpcInterface';
  Properties: MediaConnectFlowVpcInterfaceProperties;
}
