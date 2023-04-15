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
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-accessendpoint.html}
 **/
export interface AppStreamStackAccessEndpoint {
  /**
   * The type of interface endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `STREAMING`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointType: Value<string>;
  /**
   * The identifier (ID) of the VPC in which the interface endpoint is used.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpceId: Value<string>;
}

/**
 * The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-streamingexperiencesettings.html}
 **/
export interface AppStreamStackStreamingExperienceSettings {
  /**
   * The preferred protocol that you want to use while streaming your application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `TCP | UDP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredProtocol?: Value<string>;
}

/**
 * Specifies an action and whether the action is enabled or disabled for users during their streaming sessions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html}
 **/
export interface AppStreamStackUserSetting {
  /**
   * The action that is enabled or disabled.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CLIPBOARD_COPY_FROM_LOCAL_DEVICE | CLIPBOARD_COPY_TO_LOCAL_DEVICE | DOMAIN_PASSWORD_SIGNIN | DOMAIN_SMART_CARD_SIGNIN | FILE_DOWNLOAD | FILE_UPLOAD | PRINTING_TO_LOCAL_DEVICE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: Value<string>;
  /**
   * Indicates whether the action is enabled or disabled.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permission: Value<string>;
}

/**
 * The persistent application settings for users of a stack.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-applicationsettings.html}
 **/
export interface AppStreamStackApplicationSettings {
  /**
   * The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SettingsGroup?: Value<string>;
  /**
   * Enables or disables persistent application settings for users during their streaming sessions.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * A connector that enables persistent storage for users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html}
 **/
export interface AppStreamStackStorageConnector {
  /**
   * The names of the domains for the account.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Domains?: List<Value<string>>;
  /**
   * The ARN of the storage connector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceIdentifier?: Value<string>;
  /**
   * The type of storage connector.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `GOOGLE_DRIVE | HOMEFOLDERS | ONE_DRIVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorType: Value<string>;
}
export interface AppStreamStackProperties {
  /**
   * The description to display.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The storage connectors to enable.
   *
   * _Required_: No
   *
   * _Type_: List of [StorageConnector](aws-properties-appstream-stack-storageconnector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageConnectors?: List<AppStreamStackStorageConnector>;
  /**
   * _This parameter has been deprecated._
   *
   * Deletes the storage connectors currently enabled for the stack.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeleteStorageConnectors?: Value<boolean>;
  /**
   * The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmbedHostDomains?: List<Value<string>>;
  /**
   * The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
   *
   * _Required_: No
   *
   * _Type_: List of [UserSetting](aws-properties-appstream-stack-usersetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserSettings?: List<AppStreamStackUserSetting>;
  /**
   * The stack attributes to delete.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributesToDelete?: List<Value<string>>;
  /**
   * The URL that users are redirected to after their streaming session ends.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedirectURL?: Value<string>;
  /**
   * The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
   *
   * _Required_: No
   *
   * _Type_: [StreamingExperienceSettings](aws-properties-appstream-stack-streamingexperiencesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamingExperienceSettings?: AppStreamStackStreamingExperienceSettings;
  /**
   * The name of the stack.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FeedbackURL?: Value<string>;
  /**
   * The persistent application settings for users of the stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
   *
   * _Required_: No
   *
   * _Type_: [ApplicationSettings](aws-properties-appstream-stack-applicationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationSettings?: AppStreamStackApplicationSettings;
  /**
   * The stack name to display.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayName?: Value<string>;
  /**
   * An array of key-value pairs.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
   *
   * _Required_: No
   *
   * _Type_: List of [AccessEndpoint](aws-properties-appstream-stack-accessendpoint.md)
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessEndpoints?: List<AppStreamStackAccessEndpoint>;
}

/**
 * The `AWS::AppStream::Stack` resource creates a stack to start streaming applications to Amazon AppStream 2.0 users. A stack consists of an associated fleet, user access policies, and storage configurations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html}
 */
export interface AppStreamStackResource {
  Type: 'AWS::AppStream::Stack';
  Properties: AppStreamStackProperties;
}
