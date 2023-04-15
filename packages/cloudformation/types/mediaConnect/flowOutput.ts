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

/**
 * The VPC interface that you want to send your output to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-vpcinterfaceattachment.html}
 **/
export interface MediaConnectFlowOutputVpcInterfaceAttachment {
  /**
   * The name of the VPC interface that you want to send your output to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcInterfaceName?: Value<string>;
}

/**
 * Information about the encryption of the flow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowoutput-encryption.html}
 **/
export interface MediaConnectFlowOutputEncryption {
  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn: Value<string>;
  /**
   * The type of key that is used for the encryption. If you don't specify a `keyType` value, the service uses the default setting (`static-key`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyType?: Value<string>;
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Algorithm?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the role that you created during setup (when you set up MediaConnect as a trusted entity).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}
export interface MediaConnectFlowOutputProperties {
  /**
   * The IP address where you want to send the output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: Value<string>;
  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmoothingLatency?: Value<number>;
  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamId?: Value<string>;
  /**
   * A description of the output. This description is not visible outside of the current AWS account even if the account grants entitlements to other accounts.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The port to use when MediaConnect distributes content to the output.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The identifier that is assigned to the Zixi receiver. This parameter applies only to outputs that use Zixi pull.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RemoteId?: Value<string>;
  /**
   * The encryption credentials that you want to use for the output.
   *
   * _Required_: No
   *
   * _Type_: [Encryption](aws-properties-mediaconnect-flowoutput-encryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaConnectFlowOutputEncryption;
  /**
   * The name of the VPC interface.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The VPC interface that you want to send your output to.
   *
   * _Required_: No
   *
   * _Type_: [VpcInterfaceAttachment](aws-properties-mediaconnect-flowoutput-vpcinterfaceattachment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcInterfaceAttachment?: MediaConnectFlowOutputVpcInterfaceAttachment;
  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinLatency?: Value<number>;
  /**
   * The protocol to use for the output.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the flow this output is attached to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlowArn: Value<string>;
  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxLatency?: Value<number>;
  /**
   * The range of IP addresses that are allowed to initiate output requests to this flow. Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CidrAllowList?: List<Value<string>>;
}

/**
 * The AWS::MediaConnect::FlowOutput resource defines the destination address, protocol, and port that AWS Elemental MediaConnect sends the ingested video to. Each flow can have up to 50 outputs. An output can have the same protocol or a different protocol from the source. The following protocols are supported: RIST, RTP, RTP-FEC, SRT-listener, SRT-caller, Zixi pull, Zixi push, and Fujitsu-QoS. CDI and ST 2110 JPEG XS protocols are not currently supported by AWS CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowoutput.html}
 */
export interface MediaConnectFlowOutputResource {
  Type: 'AWS::MediaConnect::FlowOutput';
  Properties: MediaConnectFlowOutputProperties;
}
