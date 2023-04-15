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

export interface EC2TransitGatewayRouteTableAssociationProperties {
  /**
   * The ID of the route table for the transit gateway.
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
 * Associates the specified attachment with the specified transit gateway route table. You can associate one route table with an attachment.
 *
 * Before you can update the route table associated with an attachment, you must disassociate the transit gateway route table that is currently associated with the attachment. First update the stack to remove the associated transit gateway route table, and then update the stack with the ID of the new transit gateway route table to associate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html}
 */
export interface EC2TransitGatewayRouteTableAssociationResource {
  Type: 'AWS::EC2::TransitGatewayRouteTableAssociation';
  Properties: EC2TransitGatewayRouteTableAssociationProperties;
}
