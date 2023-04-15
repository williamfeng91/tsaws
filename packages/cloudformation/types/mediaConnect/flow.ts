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
 * Information about the encryption of the flow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-encryption.html}
 **/
export interface MediaConnectFlowEncryption {
  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn?: Value<string>;
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
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceId?: Value<string>;
  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceId?: Value<string>;
  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region?: Value<string>;
  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConstantInitializationVector?: Value<string>;
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
  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: Value<string>;
}

/**
 * The details of the sources of the flow.
 *
 * If you are creating a flow with a VPC source, you must first create the flow with a temporary standard source by doing the following:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-source.html}
 **/
export interface MediaConnectFlowSource {
  /**
   * The IP address that the flow listens on for incoming content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngestIp?: Value<string>;
  /**
   * The stream ID that you want to use for the transport. This parameter applies only to Zixi-based streams.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamId?: Value<string>;
  /**
   * A description of the source. This description is not visible outside of the current AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SenderIpAddress?: Value<string>;
  /**
   * The port that the flow listens on for incoming content. If the protocol of the source is Zixi, the port must be set to 2088.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngestPort?: Value<number>;
  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SenderControlPort?: Value<number>;
  /**
   * The type of encryption that is used on the content ingested from the source.
   *
   * _Required_: No
   *
   * _Type_: [Encryption](aws-properties-mediaconnect-flow-encryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Decryption?: MediaConnectFlowEncryption;
  /**
   * Source IP or domain name for SRT-caller protocol.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceListenerAddress?: Value<string>;
  /**
   * Source port for SRT-caller protocol.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceListenerPort?: Value<number>;
  /**
   * The name of the source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The range of IP addresses that are allowed to contribute content to your source. Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhitelistCidr?: Value<string>;
  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator’s flow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntitlementArn?: Value<string>;
  /**
   * The ARN of the source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceArn?: Value<string>;
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
   * The name of the VPC interface that the source content comes from.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcInterfaceName?: Value<string>;
  /**
   * The maximum bitrate for RIST, RTP, and RTP-FEC streams.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxBitrate?: Value<number>;
  /**
   * The protocol that is used by the source. AWS CloudFormation does not currently support CDI or ST 2110 JPEG XS source protocols.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
  /**
   * The maximum latency in milliseconds for a RIST or Zixi-based source.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxLatency?: Value<number>;
  /**
   * The port that the flow will be listening on for incoming content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceIngestPort?: Value<string>;
}

/**
 * The settings for source failover.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-failoverconfig.html}
 **/
export interface MediaConnectFlowFailoverConfig {
  /**
   * The state of source failover on the flow. If the state is disabled, the flow can have only one source. If the state is enabled, the flow can have one or two sources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams. This setting only applies when Failover Mode is set to FAILOVER.
   *
   * _Required_: No
   *
   * _Type_: [SourcePriority](aws-properties-mediaconnect-flow-sourcepriority.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourcePriority?: MediaConnectFlowSourcePriority;
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailoverMode?: Value<string>;
  /**
   * The size of the buffer (delay) that the service maintains. A larger buffer means a longer delay in transmitting the stream, but more room for error correction. A smaller buffer means a shorter delay, but less room for error correction. You can choose a value from 100-500 ms. If you keep this field blank, the service uses the default value of 200 ms. This setting only applies when Failover Mode is set to MERGE.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecoveryWindow?: Value<number>;
}

/**
 * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams. This setting only applies when Failover Mode is set to FAILOVER.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flow-sourcepriority.html}
 **/
export interface MediaConnectFlowSourcePriority {
  /**
   * The name of the source you choose as the primary source for this flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimarySource: Value<string>;
}
export interface MediaConnectFlowProperties {
  /**
   * The settings for source failover.
   *
   * _Required_: No
   *
   * _Type_: [FailoverConfig](aws-properties-mediaconnect-flow-failoverconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFailoverConfig?: MediaConnectFlowFailoverConfig;
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone?: Value<string>;
  /**
   * The settings for the source that you want to use for the new flow.
   *
   * _Required_: Yes
   *
   * _Type_: [Source](aws-properties-mediaconnect-flow-source.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: MediaConnectFlowSource;
  /**
   * The name of the flow.
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
 * The AWS::MediaConnect::Flow resource defines a connection between one or more video sources and one or more outputs. For each flow, you specify the transport protocol to use, encryption information, and details for any outputs or entitlements that you want. AWS Elemental MediaConnect returns an ingest endpoint where you can send your live video as a single unicast stream. The service replicates and distributes the video to every output that you specify, whether inside or outside the AWS Cloud. You can also set up entitlements on a flow to allow other AWS accounts to access your content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html}
 */
export interface MediaConnectFlowResource {
  Type: 'AWS::MediaConnect::Flow';
  Properties: MediaConnectFlowProperties;
}
