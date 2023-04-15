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

export interface EC2TransitGatewayRouteTablePropagationProperties {
  /**
   * The ID of the propagation route table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransitGatewayRouteTableId: Value<string>;
  /**
   * The ID of the attachment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransitGatewayAttachmentId: Value<string>;
}

/**
 * Enables the specified attachment to propagate routes to the specified propagation route table.
 *
 * For more information about enabling transit gateway route propagation, see [EnableTransitGatewayRouteTablePropagation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableTransitGatewayRouteTablePropagation.html) in the _Amazon EC2 API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html}
 */
export interface EC2TransitGatewayRouteTablePropagationResource {
  Type: 'AWS::EC2::TransitGatewayRouteTablePropagation';
  Properties: EC2TransitGatewayRouteTablePropagationProperties;
}
