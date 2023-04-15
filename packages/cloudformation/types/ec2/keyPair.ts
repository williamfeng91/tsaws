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
import { ResourceTag } from '../../shared-types/resource';

export interface EC2KeyPairProperties {
  /**
   * A unique name for the key pair.
   *
   * Constraints: Up to 255 ASCII characters
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyName: Value<string>;
  /**
   * The type of key pair. Note that ED25519 keys are not supported for Windows instances.
   *
   * If the `PublicKeyMaterial` property is specified, the `KeyType` property is ignored, and the key type is inferred from the `PublicKeyMaterial` value.
   *
   * Default: `rsa`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ed25519 | rsa`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyType?: Value<string>;
  /**
   * The public key material. The `PublicKeyMaterial` property is used to import a key pair. If this property is not specified, then a new key pair will be created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicKeyMaterial?: Value<string>;
  /**
   * The tags to apply to the key pair.
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
 * Specifies a key pair for use with an Amazon Elastic Compute Cloud instance as follows:
 *
 * When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. AWS CloudFormation does not create or return the private key material when you import a key pair.
 *
 * When you create a new key pair, the private key is saved to AWS Systems Manager Parameter Store, using a parameter with the following name: `/ec2/keypair/{key_pair_id}`. For more information about retrieving private key, and the required permissions, see [Create a key pair using AWS CloudFormation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html#create-key-pair-cloudformation) in the _Amazon EC2 User Guide_.
 *
 * When AWS CloudFormation deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html}
 */
export interface EC2KeyPairResource {
  Type: 'AWS::EC2::KeyPair';
  Properties: EC2KeyPairProperties;
}
