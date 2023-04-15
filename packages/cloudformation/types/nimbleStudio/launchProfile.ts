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
 * The configuration for a streaming session’s upload storage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html}
 **/
export interface NimbleStudioLaunchProfileStreamConfigurationSessionStorage {
  /**
   * The configuration for the upload storage root of the streaming session.
   *
   * _Required_: No
   *
   * _Type_: [StreamingSessionStorageRoot](aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Root?: NimbleStudioLaunchProfileStreamingSessionStorageRoot;
  /**
   * Allows artists to upload files to their workstations. The only valid option is `UPLOAD`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode: List<Value<string>>;
}

/**
 * Custom volume configuration for the root volumes that are attached to streaming sessions.
 *
 * This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html}
 **/
export interface NimbleStudioLaunchProfileVolumeConfiguration {
  /**
   * The size of the root volume that is attached to the streaming session. The root volume size is measured in GiBs.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: Value<number>;
  /**
   * The throughput to provision for the root volume that is attached to the streaming session. The throughput is measured in MiB/s.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Throughput?: Value<number>;
  /**
   * The number of I/O operations per second for the root volume that is attached to streaming session.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iops?: Value<number>;
}

/**
 * The upload storage root location (folder) on streaming workstations where files are uploaded.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html}
 **/
export interface NimbleStudioLaunchProfileStreamingSessionStorageRoot {
  /**
   * The folder path in Linux workstations where files are uploaded.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Linux?: Value<string>;
  /**
   * The folder path in Windows workstations where files are uploaded.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Windows?: Value<string>;
}

/**
 * A configuration for a streaming session.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html}
 **/
export interface NimbleStudioLaunchProfileStreamConfiguration {
  /**
   * The length of time, in minutes, that a streaming session can be active before it is stopped or terminated. After this point, Nimble Studio automatically terminates or stops the session. The default length of time is 690 minutes, and the maximum length of time is 30 days.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxSessionLengthInMinutes?: Value<number>;
  /**
   * Allows or deactivates the use of the system clipboard to copy and paste between the streaming session and streaming client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClipboardMode: Value<string>;
  /**
   * The streaming images that users can select from when launching a streaming session with this launch profile.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamingImageIds: List<Value<string>>;
  /**
   * Integer that determines if you can start and stop your sessions and how long a session can stay in the `STOPPED` state. The default value is 0. The maximum value is 5760.
   *
   * This field is allowed only when `sessionPersistenceMode` is `ACTIVATED` and `automaticTerminationMode` is `ACTIVATED`.
   *
   * If the value is set to 0, your sessions can’t be `STOPPED`. If you then call `StopStreamingSession`, the session fails. If the time that a session stays in the `READY` state exceeds the `maxSessionLengthInMinutes` value, the session will automatically be terminated (instead of `STOPPED`).
   *
   * If the value is set to a positive number, the session can be stopped. You can call `StopStreamingSession` to stop sessions in the `READY` state. If the time that a session stays in the `READY` state exceeds the `maxSessionLengthInMinutes` value, the session will automatically be stopped (instead of terminated).
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxStoppedSessionLengthInMinutes?: Value<number>;
  /**
   * Determine if a streaming session created from this launch profile can configure persistent storage. This means that `volumeConfiguration` and `automaticTerminationMode` are configured.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionPersistenceMode?: Value<string>;
  /**
   * Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a `STOPPED` state.
   */
  AutomaticTerminationMode?: Value<string>;
  /**
   * Information about the streaming session backup.
   *
   * _Required_: No
   *
   * _Type_: [StreamConfigurationSessionBackup](aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionBackup?: NimbleStudioLaunchProfileStreamConfigurationSessionBackup;
  /**
   * The EC2 instance types that users can select from when launching a streaming session with this launch profile.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2InstanceTypes: List<Value<string>>;
  /**
   * The upload storage for a streaming session.
   *
   * _Required_: No
   *
   * _Type_: [StreamConfigurationSessionStorage](aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionStorage?: NimbleStudioLaunchProfileStreamConfigurationSessionStorage;
  /**
   * Custom volume configuration for the root volumes that are attached to streaming sessions.
   *
   * This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED`.
   *
   * _Required_: No
   *
   * _Type_: [VolumeConfiguration](aws-properties-nimblestudio-launchprofile-volumeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeConfiguration?: NimbleStudioLaunchProfileVolumeConfiguration;
}

/**
 * Configures how streaming sessions are backed up when launched from this launch profile.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html}
 **/
export interface NimbleStudioLaunchProfileStreamConfigurationSessionBackup {
  /**
   * Specifies how artists sessions are backed up.
   *
   * Configures backups for streaming sessions launched with this launch profile. The default value is `DEACTIVATED`, which means that backups are deactivated. To allow backups, set this value to `AUTOMATIC`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode?: Value<string>;
  /**
   * The maximum number of backups that each streaming session created from this launch profile can have.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxBackupsToRetain?: Value<number>;
}
export interface NimbleStudioLaunchProfileProperties {
  /**
   * A human-readable description of the launch profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Unique identifiers for a collection of EC2 subnets.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ec2SubnetIds: List<Value<string>>;
  /**
   * Unique identifiers for a collection of studio components that can be used with this launch profile.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StudioComponentIds: List<Value<string>>;
  /**
   * A configuration for a streaming session.
   *
   * _Required_: Yes
   *
   * _Type_: [StreamConfiguration](aws-properties-nimblestudio-launchprofile-streamconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamConfiguration: NimbleStudioLaunchProfileStreamConfiguration;
  /**
   * The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchProfileProtocolVersions: List<Value<string>>;
  /**
   * The unique identifier for a studio resource. In Nimble Studio, all other resources are contained in a studio resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StudioId: Value<string>;
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
  /**
   * A friendly name for the launch profile.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::NimbleStudio::LaunchProfile` resource represents access permissions for a set of studio components, including types of workstations, render farms, and shared file systems. Launch profiles are shared with studio users to give them access to the set of studio components.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html}
 */
export interface NimbleStudioLaunchProfileResource {
  Type: 'AWS::NimbleStudio::LaunchProfile';
  Properties: NimbleStudioLaunchProfileProperties;
}
