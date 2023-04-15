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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-flowentitlement-encryption.html}
 **/
export interface MediaConnectFlowEntitlementEncryption {
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
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Algorithm: Value<string>;
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
export interface MediaConnectFlowEntitlementProperties {
  /**
   * The percentage of the entitlement data transfer fee that you want the subscriber to be responsible for.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataTransferSubscriberFeePercent?: Value<number>;
  /**
   * A description of the entitlement. This description appears only on the MediaConnect console and is not visible outside of the current AWS account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description: Value<string>;
  /**
   * The type of encryption that MediaConnect will use on the output that is associated with the entitlement.
   *
   * _Required_: No
   *
   * _Type_: [Encryption](aws-properties-mediaconnect-flowentitlement-encryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaConnectFlowEntitlementEncryption;
  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subscribers: List<Value<string>>;
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlowArn: Value<string>;
  /**
   * An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntitlementStatus?: Value<string>;
  /**
   * The name of the entitlement. This value must be unique within the current flow.
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
 * The AWS::MediaConnect::FlowEntitlement resource defines the permission that an AWS account grants to another AWS account to allow access to the content in a specific AWS Elemental MediaConnect flow. The content originator grants an entitlement to a specific AWS account (the subscriber). When an entitlement is granted, the subscriber can create a flow using the originator's flow as the source. Each flow can have up to 50 entitlements.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowentitlement.html}
 */
export interface MediaConnectFlowEntitlementResource {
  Type: 'AWS::MediaConnect::FlowEntitlement';
  Properties: MediaConnectFlowEntitlementProperties;
}
