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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains information system user and group that the AWS IoT Greengrass Core software uses to run component processes on the core device. For more information, see [Configure the user and group that run components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user) in the _AWS IoT Greengrass V2 Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentrunwith.html}
 **/
export interface GreengrassV2DeploymentComponentRunWith {
  /**
   * The Windows user to use to run this component on Windows core devices. The user must exist on each Windows core device, and its name and password must be in the LocalSystem account's Credentials Manager instance.
   *
   * If you omit this parameter, the AWS IoT Greengrass Core software uses the default Windows user that you configure on the AWS IoT Greengrass nucleus component. For more information, see [Configure the user and group that run components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WindowsUser?: Value<string>;
  /**
   * The system resource limits to apply to this component's process on the core device. AWS IoT Greengrass supports this feature only on Linux core devices.
   *
   * If you omit this parameter, the AWS IoT Greengrass Core software uses the default system resource limits that you configure on the AWS IoT Greengrass nucleus component. For more information, see [ Configure system resource limits for components ](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits).
   *
   * _Required_: No
   *
   * _Type_: [SystemResourceLimits](aws-properties-greengrassv2-deployment-systemresourcelimits.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SystemResourceLimits?: GreengrassV2DeploymentSystemResourceLimits;
  /**
   * The POSIX system user and (optional) group to use to run this component. Specify the user and group separated by a colon (`:`) in the following format: `user:group`. The group is optional. If you don't specify a group, the AWS IoT Greengrass Core software uses the primary user for the group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PosixUser?: Value<string>;
}

/**
 * Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobexecutionsrolloutconfig.html}
 **/
export interface GreengrassV2DeploymentIoTJobExecutionsRolloutConfig {
  /**
   * The maximum number of devices that receive a pending job notification, per minute.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaximumPerMinute?: Value<number>;
  /**
   * The exponential rate to increase the job rollout rate.
   *
   * _Required_: No
   *
   * _Type_: [IoTJobExponentialRolloutRate](aws-properties-greengrassv2-deployment-iotjobexponentialrolloutrate.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExponentialRate?: GreengrassV2DeploymentIoTJobExponentialRolloutRate;
}

/**
 * Contains criteria that define when and how to cancel a job.
 *
 * The deployment stops if the following conditions are true:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobabortcriteria.html}
 **/
export interface GreengrassV2DeploymentIoTJobAbortCriteria {
  /**
   * The type of job deployment failure that can cancel a job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FailureType: Value<string>;
  /**
   * The action to perform when the criteria are met.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Action: Value<string>;
  /**
   * The minimum percentage of `failureType` failures that occur before the job can cancel.
   *
   * This parameter supports up to two digits after the decimal (for example, you can specify `10.9` or `10.99`, but not `10.999`).
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThresholdPercentage: Value<number>;
  /**
   * The minimum number of things that receive the configuration before the job can cancel.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinNumberOfExecutedThings: Value<number>;
}

/**
 * Contains information about the timeout configuration for a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobtimeoutconfig.html}
 **/
export interface GreengrassV2DeploymentIoTJobTimeoutConfig {
  /**
   * The amount of time, in minutes, that devices have to complete the job. The timer starts when the job status is set to `IN_PROGRESS`. If the job status doesn't change to a terminal state before the time expires, then the job status is set to `TIMED_OUT`.
   *
   * The timeout interval must be between 1 minute and 7 days (10080 minutes).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InProgressTimeoutInMinutes?: Value<number>;
}

/**
 * Contains information about a component to deploy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentdeploymentspecification.html}
 **/
export interface GreengrassV2DeploymentComponentDeploymentSpecification {
  /**
   * The system user and group that the software uses to run component processes on the core device. If you omit this parameter, the software uses the system user and group that you configure for the core device. For more information, see [Configure the user and group that run components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-user) in the _AWS IoT Greengrass V2 Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ComponentRunWith](aws-properties-greengrassv2-deployment-componentrunwith.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RunWith?: GreengrassV2DeploymentComponentRunWith;
  /**
   * The configuration updates to deploy for the component. You can define reset updates and merge updates. A reset updates the keys that you specify to the default configuration for the component. A merge updates the core device's component configuration with the keys and values that you specify. The AWS IoT Greengrass Core software applies reset updates before it applies merge updates. For more information, see [Update component configuration](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html).
   *
   * _Required_: No
   *
   * _Type_: [ComponentConfigurationUpdate](aws-properties-greengrassv2-deployment-componentconfigurationupdate.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationUpdate?: GreengrassV2DeploymentComponentConfigurationUpdate;
  /**
   * The version of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentVersion?: Value<string>;
}

/**
 * Contains information about system resource limits that the software applies to a component's processes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-systemresourcelimits.html}
 **/
export interface GreengrassV2DeploymentSystemResourceLimits {
  /**
   * The maximum amount of RAM, expressed in kilobytes, that a component's processes can use on the core device. For more information, see [Configure system resource limits for components](https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Memory?: Value<number>;
  /**
   * The maximum amount of CPU time that a component's processes can use on the core device. A core device's total CPU time is equivalent to the device's number of CPU cores. For example, on a core device with 4 CPU cores, you can set this value to 2 to limit the component's processes to 50 percent usage of each CPU core. On a device with 1 CPU core, you can set this value to 0.25 to limit the component's processes to 25 percent usage of the CPU. If you set this value to a number greater than the number of CPU cores, the AWS IoT Greengrass Core software doesn't limit the component's CPU usage.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Cpus?: Value<number>;
}

/**
 * Contains a list of criteria that define when and how to cancel a configuration deployment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobabortconfig.html}
 **/
export interface GreengrassV2DeploymentIoTJobAbortConfig {
  /**
   * The list of criteria that define when and how to cancel the configuration deployment.
   *
   * _Required_: Yes
   *
   * _Type_: List of [IoTJobAbortCriteria](aws-properties-greengrassv2-deployment-iotjobabortcriteria.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CriteriaList: List<GreengrassV2DeploymentIoTJobAbortCriteria>;
}

/**
 * Contains information about criteria to meet before a job increases its rollout rate. Specify either `numberOfNotifiedThings` or `numberOfSucceededThings`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobrateincreasecriteria.html}
 **/
export interface GreengrassV2DeploymentIoTJobRateIncreaseCriteria {
  /**
   * The number of devices to successfully run the configuration job before the rollout rate increases.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NumberOfSucceededThings?: Value<number>;
  /**
   * The number of devices to receive the job notification before the rollout rate increases.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NumberOfNotifiedThings?: Value<number>;
}

/**
 * Contains information about a deployment's update to a component's configuration on AWS IoT Greengrass core devices. For more information, see [Update component configurations](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html) in the _AWS IoT Greengrass V2 Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentconfigurationupdate.html}
 **/
export interface GreengrassV2DeploymentComponentConfigurationUpdate {
  /**
   * A serialized JSON string that contains the configuration object to merge to target devices. The core device merges this configuration with the component's existing configuration. If this is the first time a component deploys on a device, the core device merges this configuration with the component's default configuration. This means that the core device keeps it's existing configuration for keys and values that you don't specify in this object. For more information, see [Merge configuration updates](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#merge-configuration-update) in the _AWS IoT Greengrass V2 Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Merge?: Value<string>;
  /**
   * The list of configuration nodes to reset to default values on target devices. Use JSON pointers to specify each node to reset. JSON pointers start with a forward slash (`/`) and use forward slashes to separate the key for each level in the object. For more information, see the [JSON pointer specification](https://tools.ietf.org/html/rfc6901) and [Reset configuration updates](https://docs.aws.amazon.com/greengrass/v2/developerguide/update-component-configurations.html#reset-configuration-update) in the _AWS IoT Greengrass V2 Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Reset?: List<Value<string>>;
}

/**
 * Contains information about policies that define how a deployment updates components and handles failure.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentpolicies.html}
 **/
export interface GreengrassV2DeploymentDeploymentPolicies {
  /**
   * The component update policy for the configuration deployment. This policy defines when it's safe to deploy the configuration to devices.
   *
   * _Required_: No
   *
   * _Type_: [DeploymentComponentUpdatePolicy](aws-properties-greengrassv2-deployment-deploymentcomponentupdatepolicy.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentUpdatePolicy?: GreengrassV2DeploymentDeploymentComponentUpdatePolicy;
  /**
   * The configuration validation policy for the configuration deployment. This policy defines how long each component has to validate its configure updates.
   *
   * _Required_: No
   *
   * _Type_: [DeploymentConfigurationValidationPolicy](aws-properties-greengrassv2-deployment-deploymentconfigurationvalidationpolicy.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationValidationPolicy?: GreengrassV2DeploymentDeploymentConfigurationValidationPolicy;
  /**
   * The failure handling policy for the configuration deployment. This policy defines what to do if the deployment fails.
   *
   * Default: `ROLLBACK`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FailureHandlingPolicy?: Value<string>;
}

/**
 * Contains information about a deployment's policy that defines when components are safe to update.
 *
 * Each component on a device can report whether or not it's ready to update. After a component and its dependencies are ready, they can apply the update in the deployment. You can configure whether or not the deployment notifies components of an update and waits for a response. You specify the amount of time each component has to respond to the update notification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentcomponentupdatepolicy.html}
 **/
export interface GreengrassV2DeploymentDeploymentComponentUpdatePolicy {
  /**
   * Whether or not to notify components and wait for components to become safe to update. Choose from the following options:
   */
  Action?: Value<string>;
  /**
   * The amount of time in seconds that each component on a device has to report that it's safe to update. If the component waits for longer than this timeout, then the deployment proceeds on the device.
   *
   * Default: `60`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeoutInSeconds?: Value<number>;
}

/**
 * Contains information about how long a component on a core device can validate its configuration updates before it times out. Components can use the [SubscribeToValidateConfigurationUpdates](https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-subscribetovalidateconfigurationupdates) IPC operation to receive notifications when a deployment specifies a configuration update. Then, components can respond with the [SendConfigurationValidityReport](https://docs.aws.amazon.com/greengrass/v2/developerguide/interprocess-communication.html#ipc-operation-sendconfigurationvalidityreport) IPC operation. For more information, see the [Create deployments](https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html) in the _AWS IoT Greengrass V2 Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentconfigurationvalidationpolicy.html}
 **/
export interface GreengrassV2DeploymentDeploymentConfigurationValidationPolicy {
  /**
   * The amount of time in seconds that a component can validate its configuration updates. If the validation time exceeds this timeout, then the deployment proceeds for the device.
   *
   * Default: `30`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeoutInSeconds?: Value<number>;
}

/**
 * Contains information about an exponential rollout rate for a configuration deployment job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobexponentialrolloutrate.html}
 **/
export interface GreengrassV2DeploymentIoTJobExponentialRolloutRate {
  /**
   * The criteria to increase the rollout rate for the job.
   *
   * _Required_: Yes
   *
   * _Type_: [IoTJobRateIncreaseCriteria](aws-properties-greengrassv2-deployment-iotjobrateincreasecriteria.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RateIncreaseCriteria: GreengrassV2DeploymentIoTJobRateIncreaseCriteria;
  /**
   * The minimum number of devices that receive a pending job notification, per minute, when the job starts. This parameter defines the initial rollout rate of the job.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BaseRatePerMinute: Value<number>;
  /**
   * The exponential factor to increase the rollout rate for the job.
   *
   * This parameter supports up to one digit after the decimal (for example, you can specify `1.5`, but not `1.55`).
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IncrementFactor: Value<number>;
}

/**
 * Contains information about an AWS IoT job configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentiotjobconfiguration.html}
 **/
export interface GreengrassV2DeploymentDeploymentIoTJobConfiguration {
  /**
   * The rollout configuration for the job. This configuration defines the rate at which the job rolls out to the fleet of target devices.
   *
   * _Required_: No
   *
   * _Type_: [IoTJobExecutionsRolloutConfig](aws-properties-greengrassv2-deployment-iotjobexecutionsrolloutconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobExecutionsRolloutConfig?: GreengrassV2DeploymentIoTJobExecutionsRolloutConfig;
  /**
   * The timeout configuration for the job. This configuration defines the amount of time each device has to complete the job.
   *
   * _Required_: No
   *
   * _Type_: [IoTJobTimeoutConfig](aws-properties-greengrassv2-deployment-iotjobtimeoutconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeoutConfig?: GreengrassV2DeploymentIoTJobTimeoutConfig;
  /**
   * The stop configuration for the job. This configuration defines when and how to stop a job rollout.
   *
   * _Required_: No
   *
   * _Type_: [IoTJobAbortConfig](aws-properties-greengrassv2-deployment-iotjobabortconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AbortConfig?: GreengrassV2DeploymentIoTJobAbortConfig;
}
export interface GreengrassV2DeploymentProperties {
  /**
   * The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.
   *
   * _Required_: No
   *
   * _Type_: Map of [ComponentDeploymentSpecification](aws-properties-greengrassv2-deployment-componentdeploymentspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Components?: { [key: string]: GreengrassV2DeploymentComponentDeploymentSpecification };
  /**
   * The name of the deployment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeploymentName?: Value<string>;
  /**
   * The job configuration for the deployment configuration. The job configuration specifies the rollout, timeout, and stop configurations for the deployment configuration.
   *
   * _Required_: No
   *
   * _Type_: [DeploymentIoTJobConfiguration](aws-properties-greengrassv2-deployment-deploymentiotjobconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IotJobConfiguration?: GreengrassV2DeploymentDeploymentIoTJobConfiguration;
  /**
   * The deployment policies for the deployment. These policies define how the deployment updates components and handles failure.
   *
   * _Required_: No
   *
   * _Type_: [DeploymentPolicies](aws-properties-greengrassv2-deployment-deploymentpolicies.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeploymentPolicies?: GreengrassV2DeploymentDeploymentPolicies;
  /**
   * The ARN of the target AWS IoT thing or thing group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetArn: Value<string>;
  /**
   * The parent deployment's [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) for a subdeployment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ParentTargetArn?: Value<string>;
  /**
   * Application-specific metadata to attach to the deployment. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tag your AWS IoT Greengrass Version 2 resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the _AWS IoT Greengrass V2 Developer Guide_.
   *
   * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * Creates a continuous deployment for a target, which is a AWS IoT Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, AWS IoT Greengrass deploys that group's deployment to the new device.
 *
 * You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. AWS IoT Greengrass applies the new deployment to the target devices.
 *
 * You can only add, update, or delete up to 10 deployments at a time to a single target.
 *
 * Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment. This operation returns the revision number of the new deployment when you create it.
 *
 * For more information, see the [Create deployments](https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html) in the _AWS IoT Greengrass V2 Developer Guide_.
 *
 * **Important**
 *
 * Deployment resources are deleted when you delete stacks. To keep the deployments in a stack, you must specify `"DeletionPolicy": "Retain"` on each deployment resource in the stack template that you want to keep. For more information, see [DeletionPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 *
 * You can only delete up to 10 deployment resources at a time. If you delete more than 10 resources, you receive an error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html}
 */
export interface GreengrassV2DeploymentResource {
  Type: 'AWS::GreengrassV2::Deployment';
  Properties: GreengrassV2DeploymentProperties;
}
