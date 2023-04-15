/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
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
 * Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposedsegmentchange.html}
 **/
export interface NetworkManagerConnectAttachmentProposedSegmentChange {
  /**
   * The name of the segment to change.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentName?: Value<string>;
  /**
   * The list of key-value tags that changed for the segment.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The rule number in the policy document that applies to this change.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttachmentPolicyRuleNumber?: Value<number>;
}

/**
 * Describes a core network Connect attachment options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-connectattachmentoptions.html}
 **/
export interface NetworkManagerConnectAttachmentConnectAttachmentOptions {
  /**
   * The protocol used for the attachment connection.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GRE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Protocol?: Value<string>;
}
export interface NetworkManagerConnectAttachmentProperties {
  /**
   * Options for connecting an attachment.
   *
   * _Required_: Yes
   *
   * _Type_: [ConnectAttachmentOptions](aws-properties-networkmanager-connectattachment-connectattachmentoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Options: NetworkManagerConnectAttachmentConnectAttachmentOptions;
  /**
   * The ID of the transport attachment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `^attachment-([0-9a-f]{8,17})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransportAttachmentId: Value<string>;
  /**
   * The ID of the core network where the Connect attachment is located.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CoreNetworkId: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The Region where the edge is located.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EdgeLocation: Value<string>;
}

/**
 * Creates a core network Connect attachment from a specified core network attachment.
 *
 * A core network Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a core network and an appliance. A core network Connect attachment uses an existing VPC attachment as the underlying transport mechanism.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html}
 */
export interface NetworkManagerConnectAttachmentResource {
  Type: 'AWS::NetworkManager::ConnectAttachment';
  Properties: NetworkManagerConnectAttachmentProperties;
}
