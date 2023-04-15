/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Configuration of the encryption method that is used for the studio.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studio-studioencryptionconfiguration.html}
 **/
export interface NimbleStudioStudioStudioEncryptionConfiguration {
  /**
   * The type of KMS key that is used to encrypt studio data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyType: Value<string>;
  /**
   * The ARN for a KMS key that is used to encrypt studio data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyArn?: Value<string>;
}
export interface NimbleStudioStudioProperties {
  /**
   * The IAM role that studio users assume when logging in to the Nimble Studio portal.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserRoleArn: Value<string>;
  /**
   * A friendly name for the studio.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayName: Value<string>;
  /**
   * The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StudioName: Value<string>;
  /**
   * The IAM role that studio admins assume when logging in to the Nimble Studio portal.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdminRoleArn: Value<string>;
  /**
   * Configuration of the encryption method that is used for the studio.
   *
   * _Required_: No
   *
   * _Type_: [StudioEncryptionConfiguration](aws-properties-nimblestudio-studio-studioencryptionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StudioEncryptionConfiguration?: NimbleStudioStudioStudioEncryptionConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * The `AWS::NimbleStudio::Studio` resource creates a new studio resource. In Amazon Nimble Studio, all other resources are contained in a studio.
 *
 * When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Amazon Nimble Studio portal. The user role must have the AmazonNimbleStudio-StudioUser managed policy attached for the portal to function properly. The Admin Role must have the AmazonNimbleStudio-StudioAdmin managed policy attached for the portal to function properly.
 *
 * You can optionally specify an AWS Key Management Service key in the StudioEncryptionConfiguration. In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an AWS Key Management Service key. By default, this key is owned by AWS and managed on your behalf. You may provide your own AWS Key Management Service key when calling CreateStudio to encrypt this data using a key that you own and manage. When providing an AWS Key Management Service key during studio creation, Amazon Nimble Studio creates AWS Key Management Service grants in your account to provide your studio user and admin roles access to these AWS Key Management Service keys. If you delete this grant, the studio will no longer be accessible to your portal users. If you delete the studio AWS Key Management Service key, your studio will no longer be accessible.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studio.html}
 */
export interface NimbleStudioStudioResource {
  Type: 'AWS::NimbleStudio::Studio';
  Properties: NimbleStudioStudioProperties;
}
