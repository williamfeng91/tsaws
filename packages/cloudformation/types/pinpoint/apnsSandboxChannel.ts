/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface PinpointAPNSSandboxChannelProperties {
  /**
   * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BundleId?: Value<string>;
  /**
   * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateKey?: Value<string>;
  /**
   * Specifies whether to enable the APNs Sandbox channel for the Amazon Pinpoint application.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs. Valid options are `key` or `certificate`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultAuthenticationMethod?: Value<string>;
  /**
   * The authentication key to use for APNs tokens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenKey?: Value<string>;
  /**
   * The unique identifier for the Amazon Pinpoint application that the APNs sandbox channel applies to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationId: Value<string>;
  /**
   * The identifier that's assigned to your Apple Developer Account team. This identifier is used for APNs tokens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TeamId?: Value<string>;
  /**
   * The APNs client certificate that you received from Apple. Specify this value if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificate?: Value<string>;
  /**
   * The key identifier that's assigned to your APNs signing key. Specify this value if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenKeyId?: Value<string>;
}

/**
 * A _channel_ is a type of platform that you can deliver messages to. You can use the APNs sandbox channel to send push notification messages to the sandbox environment of the Apple Push Notification service (APNs). Before you can use Amazon Pinpoint to send notifications to the APNs sandbox environment, you have to enable the APNs sandbox channel for an Amazon Pinpoint application.
 *
 * The APNSSandboxChannel resource represents the status and authentication settings of the APNs sandbox channel for an application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-apnssandboxchannel.html}
 */
export interface PinpointAPNSSandboxChannelResource {
  Type: 'AWS::Pinpoint::APNSSandboxChannel';
  Properties: PinpointAPNSSandboxChannelProperties;
}
