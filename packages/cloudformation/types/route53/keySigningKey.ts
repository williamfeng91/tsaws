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

export interface Route53KeySigningKeyProperties {
  /**
   * A string that represents the current key-signing key (KSK) status.
   *
   * Status can have one of the following values:
   *
   * ACTIVE
   *
   * The KSK is being used for signing.
   *
   * INACTIVE
   *
   * The KSK is not being used for signing.
   *
   * DELETING
   *
   * The KSK is in the process of being deleted.
   *
   * ACTION_NEEDED
   *
   * There is a problem with the KSK that requires you to take action to resolve. For example, the customer managed key might have been deleted, or the permissions for the customer managed key might have been changed.
   *
   * INTERNAL_FAILURE
   *
   * There was an error during a request. Before you can continue to work with DNSSEC signing, including actions that involve this KSK, you must correct the problem. For example, you may need to activate or deactivate the KSK.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `5`
   *
   * _Maximum_: `150`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
  /**
   * The Amazon resource name (ARN) for a customer managed customer master key (CMK) in AWS Key Management Service (AWS KMS ). The `KeyManagementServiceArn` must be unique for each key-signing key (KSK) in a single hosted zone. For example: `arn:aws:kms:us-east-1:111122223333:key/111a2222-a11b-1ab1-2ab2-1ab21a2b3a111`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyManagementServiceArn: Value<string>;
  /**
   * The unique string (ID) that is used to identify a hosted zone. For example: `Z00001111A1ABCaaABC11`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HostedZoneId: Value<string>;
  /**
   * A string used to identify a key-signing key (KSK). `Name` can include numbers, letters, and underscores (_). `Name` must be unique for each key-signing key in the same hosted zone.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * The `AWS::Route53::KeySigningKey` resource creates a new key-signing key (KSK) in a hosted zone. The hosted zone ID is passed as a parameter in the KSK properties. You can specify the properties of this KSK using the `Name`, `Status`, and `KeyManagementServiceArn `properties of the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html}
 */
export interface Route53KeySigningKeyResource {
  Type: 'AWS::Route53::KeySigningKey';
  Properties: Route53KeySigningKeyProperties;
}
