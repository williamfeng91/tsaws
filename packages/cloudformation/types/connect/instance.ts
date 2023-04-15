/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * _This is a preview release for Amazon Connect. It is subject to change._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html}
 **/
export interface ConnectInstanceAttributes {
  /**
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InboundCalls: Value<boolean>;
  /**
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseCustomTTSVoices?: Value<boolean>;
  /**
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutboundCalls: Value<boolean>;
  /**
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EarlyMedia?: Value<boolean>;
  /**
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactflowLogs?: Value<boolean>;
  /**
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactLens?: Value<boolean>;
  /**
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoResolveBestVoices?: Value<boolean>;
}
export interface ConnectInstanceProperties {
  /**
   * The identifier for the directory.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DirectoryId?: Value<string>;
  /**
   * The identity management type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CONNECT_MANAGED | EXISTING_DIRECTORY | SAML`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IdentityManagementType: Value<string>;
  /**
   * The alias of instance. `InstanceAlias` is only required when `IdentityManagementType` is `CONNECT_MANAGED` or `SAML`. `InstanceAlias` is not required when `IdentityManagementType` is `EXISTING_DIRECTORY`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `45`
   *
   * _Pattern_: `^(?!d-)([da-zA-Z]+)([-]*[da-zA-Z])*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceAlias?: Value<string>;
  /**
   * A toggle for an individual feature at the instance level.
   *
   * _Required_: Yes
   *
   * _Type_: [Attributes](aws-properties-connect-instance-attributes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes: ConnectInstanceAttributes;
}

/**
 * _This is a preview release for Amazon Connect. It is subject to change._
 *
 * Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis.
 *
 * Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html}
 */
export interface ConnectInstanceResource {
  Type: 'AWS::Connect::Instance';
  Properties: ConnectInstanceProperties;
}
