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

export interface TransferProfileProperties {
  /**
   * The `As2Id` is the _AS2-name_, as defined in the [RFC 4130](https://datatracker.ietf.org/doc/html/rfc4130). For inbound transfers, this is the `AS2-From` header for the AS2 messages sent from the partner. For outbound connectors, this is the `AS2-To` header for the AS2 messages sent to the partner using the `StartFileTransfer` API operation. This ID cannot include spaces.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[p{Print}s]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  As2Id: Value<string>;
  /**
   * Indicates whether to list only `LOCAL` type profiles or only `PARTNER` type profiles. If not supplied in the request, the command lists all types of profiles.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `LOCAL | PARTNER`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProfileType: Value<string>;
  /**
   * An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateIds?: List<Value<string>>;
  /**
   * Key-value pairs that can be used to group and search for profiles.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates the local or partner profile to use for AS2 transfers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html}
 */
export interface TransferProfileResource {
  Type: 'AWS::Transfer::Profile';
  Properties: TransferProfileProperties;
}
