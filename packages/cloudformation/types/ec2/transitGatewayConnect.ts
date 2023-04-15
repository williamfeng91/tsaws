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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes the Connect attachment options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewayconnect-transitgatewayconnectoptions.html}
 **/
export interface EC2TransitGatewayConnectTransitGatewayConnectOptions {
  /**
   * The tunnel protocol.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `gre`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Protocol?: Value<string>;
}
export interface EC2TransitGatewayConnectProperties {
  /**
   * The Connect attachment options.
   */
  Options: EC2TransitGatewayConnectTransitGatewayConnectOptions;
  /**
   * The ID of the attachment from which the Connect attachment was created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransportTransitGatewayAttachmentId: Value<string>;
  /**
   * The tags for the attachment.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a Connect attachment from a specified transit gateway attachment. A Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a transit gateway and an appliance.
 *
 * A Connect attachment uses an existing VPC or AWS Direct Connect attachment as the underlying transport mechanism.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayconnect.html}
 */
export interface EC2TransitGatewayConnectResource {
  Type: 'AWS::EC2::TransitGatewayConnect';
  Properties: EC2TransitGatewayConnectProperties;
}
