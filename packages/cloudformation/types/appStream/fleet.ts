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
 * The name of the directory and organizational unit (OU) to use to join a fleet to a Microsoft Active Directory domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-domainjoininfo.html}
 **/
export interface AppStreamFleetDomainJoinInfo {
  /**
   * The distinguished name of the organizational unit for computer accounts.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationalUnitDistinguishedName?: Value<string>;
  /**
   * The fully qualified name of the directory (for example, corp.example.com).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectoryName?: Value<string>;
}

/**
 * Describes the S3 location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-s3location.html}
 **/
export interface AppStreamFleetS3Location {
  /**
   * The S3 bucket of the S3 object.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[0-9a-z.-]*(?<!.)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: Value<string>;
  /**
   * The S3 key of the S3 object.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Key: Value<string>;
}

/**
 * The VPC configuration information for the fleet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-vpcconfig.html}
 **/
export interface AppStreamFleetVpcConfig {
  /**
   * The identifiers of the subnets to which a network interface is attached from the fleet instance. Fleet instances can use one or two subnets.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The identifiers of the security groups for the fleet.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
}

/**
 * The desired capacity for a fleet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-fleet-computecapacity.html}
 **/
export interface AppStreamFleetComputeCapacity {
  /**
   * The desired number of streaming instances.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredInstances: Value<number>;
}
export interface AppStreamFleetProperties {
  /**
   * The description to display.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The desired capacity for the fleet. This is not allowed for Elastic fleets.
   *
   * _Required_: No
   *
   * _Type_: [ComputeCapacity](aws-properties-appstream-fleet-computecapacity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeCapacity?: AppStreamFleetComputeCapacity;
  /**
   * The platform of the fleet. Platform is a required setting for Elastic fleets, and is not used for other fleet types.
   *
   * _Allowed Values_: `WINDOWS_SERVER_2019` | `AMAZON_LINUX2`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AMAZON_LINUX2 | WINDOWS | WINDOWS_SERVER_2016 | WINDOWS_SERVER_2019`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Platform?: Value<string>;
  /**
   * The VPC configuration for the fleet. This is required for Elastic fleets, but not required for other fleet types.
   *
   * _Required_: No
   *
   * _Type_: [VpcConfig](aws-properties-appstream-fleet-vpcconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfig?: AppStreamFleetVpcConfig;
  /**
   * The fleet type.
   *
   * ALWAYS_ON
   *
   * Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.
   *
   * ON_DEMAND
   *
   * Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.
   *
   * ELASTIC
   *
   * The pool of streaming instances is managed by Amazon AppStream 2.0. When a user selects their application or desktop to launch, they will start streaming after the app block has been downloaded and mounted to a streaming instance.
   *
   * _Allowed Values_: `ALWAYS_ON` | `ELASTIC` | `ON_DEMAND`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FleetType?: Value<string>;
  /**
   * Enables or disables default internet access for the fleet.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableDefaultInternetAccess?: Value<boolean>;
  /**
   * The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. This is not allowed for Elastic fleets.
   *
   * _Required_: No
   *
   * _Type_: [DomainJoinInfo](aws-properties-appstream-fleet-domainjoininfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainJoinInfo?: AppStreamFleetDomainJoinInfo;
  /**
   * The S3 location of the session scripts configuration zip file. This only applies to Elastic fleets.
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-appstream-fleet-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionScriptS3Location?: AppStreamFleetS3Location;
  /**
   * A unique name for the fleet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * The name of the image used to create the fleet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageName?: Value<string>;
  /**
   * The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
   *
   * Specify a value between 600 and 360000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxUserDurationInSeconds?: Value<number>;
  /**
   * The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `DisconnectTimeoutInSeconds` time interval begins. Users are notified before they are disconnected due to inactivity. If they try to reconnect to the streaming session before the time interval specified in `DisconnectTimeoutInSeconds` elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in `IdleDisconnectTimeoutInSeconds` elapses, they are disconnected.
   *
   * To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600.
   *
   * If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdleDisconnectTimeoutInSeconds?: Value<number>;
  /**
   * The USB device filter strings that specify which USB devices a user can redirect to the fleet streaming session, when using the Windows native client. This is allowed but not required for Elastic fleets.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UsbDeviceFilterStrings?: List<Value<string>>;
  /**
   * The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
   *
   * Specify a value between 60 and 360000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisconnectTimeoutInSeconds?: Value<number>;
  /**
   * The fleet name to display.
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
   * The AppStream 2.0 view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays.
   *
   * The default value is `APP`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `APP | DESKTOP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamView?: Value<string>;
  /**
   * The ARN of the IAM role that is applied to the fleet. To assume a role, the fleet instance calls the AWS Security Token Service `AssumeRole` API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the **appstream_machine_role** credential profile on the instance.
   *
   * For more information, see [Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances](https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html) in the _Amazon AppStream 2.0 Administration Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws(?:-cn|-iso-b|-iso|-us-gov)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamRoleArn?: Value<string>;
  /**
   * The instance type to use when launching fleet instances. The following instance types are available for non-Elastic fleets:
   */
  InstanceType: Value<string>;
  /**
   * The maximum number of concurrent sessions that can be run on an Elastic fleet. This setting is required for Elastic fleets, but is not used for other fleet types.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConcurrentSessions?: Value<number>;
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
   * The ARN of the public, private, or shared image to use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws(?:-cn|-iso-b|-iso|-us-gov)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageArn?: Value<string>;
}

/**
 * The `AWS::AppStream::Fleet` resource creates a fleet for Amazon AppStream 2.0. A fleet consists of streaming instances that run a specified image when using Always-On or On-Demand.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-fleet.html}
 */
export interface AppStreamFleetResource {
  Type: 'AWS::AppStream::Fleet';
  Properties: AppStreamFleetProperties;
}
