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

export interface EC2VPCEndpointConnectionNotificationProperties {
  /**
   * The endpoint events for which to receive notifications. Valid values are `Accept`, `Connect`, `Delete`, and `Reject`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionEvents: List<Value<string>>;
  /**
   * The ID of the endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VPCEndpointId?: Value<string>;
  /**
   * The ID of the endpoint service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceId?: Value<string>;
  /**
   * The ARN of the SNS topic for the notifications.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionNotificationArn: Value<string>;
}

/**
 * Specifies a connection notification for a VPC endpoint or VPC endpoint service. A connection notification notifies you of specific endpoint events. You must create an SNS topic to receive notifications. For more information, see [Create a Topic](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) in the _Amazon Simple Notification Service Developer Guide_.
 *
 * You can create a connection notification for interface endpoints only.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointconnectionnotification.html}
 */
export interface EC2VPCEndpointConnectionNotificationResource {
  Type: 'AWS::EC2::VPCEndpointConnectionNotification';
  Properties: EC2VPCEndpointConnectionNotificationProperties;
}
