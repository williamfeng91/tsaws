/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Information about a Sidewalk account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html}
 **/
export interface IoTWirelessPartnerAccountSidewalkAccountInfoWithFingerprint {
  /**
   * The fingerprint of the Sidewalk application server private key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `64`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[a-fA-F0-9]{64}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fingerprint?: Value<string>;
  /**
   * The Sidewalk Amazon ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmazonId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
}

/**
 * Information about a Sidewalk account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfo.html}
 **/
export interface IoTWirelessPartnerAccountSidewalkAccountInfo {
  /**
   * The Sidewalk application server private key. The application server private key is a secret key, which you should handle in a similar way as you would an application password. You can protect the application server private key by storing the value in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `[a-fA-F0-9]{64}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppServerPrivateKey: Value<string>;
}

/**
 * Sidewalk update.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkupdateaccount.html}
 **/
export interface IoTWirelessPartnerAccountSidewalkUpdateAccount {
  /**
   * The new Sidewalk application server private key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `[a-fA-F0-9]{64}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppServerPrivateKey?: Value<string>;
}
export interface IoTWirelessPartnerAccountProperties {
  PartnerType?: Value<string>;
  SidewalkResponse?: IoTWirelessPartnerAccountSidewalkAccountInfoWithFingerprint;
  AccountLinked?: Value<boolean>;
  /**
   * The Sidewalk account credentials.
   *
   * _Required_: No
   *
   * _Type_: [SidewalkAccountInfo](aws-properties-iotwireless-partneraccount-sidewalkaccountinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sidewalk?: IoTWirelessPartnerAccountSidewalkAccountInfo;
  /**
   * The ID of the partner account to update.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PartnerAccountId?: Value<string>;
  SidewalkUpdate?: IoTWirelessPartnerAccountSidewalkUpdateAccount;
  /**
   * The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * A partner account. If `PartnerAccountId` and `PartnerType` are `null`, returns all partner accounts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html}
 */
export interface IoTWirelessPartnerAccountResource {
  Type: 'AWS::IoTWireless::PartnerAccount';
  Properties: IoTWirelessPartnerAccountProperties;
}
