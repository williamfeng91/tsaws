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
 * Contains information about a platform that a component supports.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-componentplatform.html}
 **/
export interface GreengrassV2ComponentVersionComponentPlatform {
  /**
   * A dictionary of attributes for the platform. The AWS IoT Greengrass Core software defines the `os` and `platform` by default. You can specify additional platform attributes for a core device when you deploy the AWS IoT Greengrass nucleus component. For more information, see the [AWS IoT Greengrass nucleus component](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html) in the _AWS IoT Greengrass V2 Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Attributes?: { [key: string]: Value<string> };
  /**
   * The friendly name of the platform. This name helps you identify the platform.
   *
   * If you omit this parameter, AWS IoT Greengrass creates a friendly name from the `os` and `architecture` of the platform.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Contains information about a container in which AWS Lambda functions run on AWS IoT Greengrass core devices.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdacontainerparams.html}
 **/
export interface GreengrassV2ComponentVersionLambdaContainerParams {
  /**
   * The list of volumes that the container can access.
   *
   * _Required_: No
   *
   * _Type_: List of [LambdaVolumeMount](aws-properties-greengrassv2-componentversion-lambdavolumemount.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Volumes?: List<GreengrassV2ComponentVersionLambdaVolumeMount>;
  /**
   * Whether or not the container can read information from the device's `/sys` folder.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MountROSysfs?: Value<boolean>;
  /**
   * The memory size of the container, expressed in kilobytes.
   *
   * Default: `16384` (16 MB)
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MemorySizeInKB?: Value<number>;
  /**
   * The list of system devices that the container can access.
   *
   * _Required_: No
   *
   * _Type_: List of [LambdaDeviceMount](aws-properties-greengrassv2-componentversion-lambdadevicemount.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Devices?: List<GreengrassV2ComponentVersionLambdaDeviceMount>;
}

/**
 * Contains parameters for a Linux process that contains an AWS Lambda function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdalinuxprocessparams.html}
 **/
export interface GreengrassV2ComponentVersionLambdaLinuxProcessParams {
  /**
   * The isolation mode for the process that contains the Lambda function. The process can run in an isolated runtime environment inside the AWS IoT Greengrass container, or as a regular process outside any container.
   *
   * Default: `GreengrassContainer`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IsolationMode?: Value<string>;
  /**
   * The parameters for the container in which the Lambda function runs.
   *
   * _Required_: No
   *
   * _Type_: [LambdaContainerParams](aws-properties-greengrassv2-componentversion-lambdacontainerparams.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerParams?: GreengrassV2ComponentVersionLambdaContainerParams;
}

/**
 * Contains information about a volume that Linux processes in a container can access. When you define a volume, the AWS IoT Greengrass Core software mounts the source files to the destination inside the container.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdavolumemount.html}
 **/
export interface GreengrassV2ComponentVersionLambdaVolumeMount {
  /**
   * The path to the physical volume in the file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourcePath?: Value<string>;
  /**
   * The path to the logical volume in the file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationPath?: Value<string>;
  /**
   * Whether or not to add the AWS IoT Greengrass user group as an owner of the volume.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AddGroupOwner?: Value<boolean>;
  /**
   * The permission to access the volume: read/only (`ro`) or read/write (`rw`).
   *
   * Default: `ro`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Permission?: Value<string>;
}

/**
 * Contains information about an AWS Lambda function to import to create a component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdafunctionrecipesource.html}
 **/
export interface GreengrassV2ComponentVersionLambdaFunctionRecipeSource {
  /**
   * The component versions on which this Lambda function component depends.
   *
   * _Required_: No
   *
   * _Type_: Map of [ComponentDependencyRequirement](aws-properties-greengrassv2-componentversion-componentdependencyrequirement.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentDependencies?: {
    [key: string]: GreengrassV2ComponentVersionComponentDependencyRequirement;
  };
  /**
   * The system and runtime parameters for the Lambda function as it runs on the AWS IoT Greengrass core device.
   *
   * _Required_: No
   *
   * _Type_: [LambdaExecutionParameters](aws-properties-greengrassv2-componentversion-lambdaexecutionparameters.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentLambdaParameters?: GreengrassV2ComponentVersionLambdaExecutionParameters;
  /**
   * The ARN of the Lambda function. The ARN must include the version of the function to import. You can't use version aliases like `$LATEST`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LambdaArn?: Value<string>;
  /**
   * The platforms that the component version supports.
   *
   * _Required_: No
   *
   * _Type_: List of [ComponentPlatform](aws-properties-greengrassv2-componentversion-componentplatform.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentPlatforms?: List<GreengrassV2ComponentVersionComponentPlatform>;
  /**
   * The name of the component.
   *
   * Defaults to the name of the Lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentName?: Value<string>;
  /**
   * The version of the component.
   *
   * Defaults to the version of the Lambda function as a semantic version. For example, if your function version is `3`, the component version becomes `3.0.0`.
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
 * Contains information about a component dependency for a Lambda function component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-componentdependencyrequirement.html}
 **/
export interface GreengrassV2ComponentVersionComponentDependencyRequirement {
  /**
   * The component version requirement for the component dependency.
   *
   * AWS IoT Greengrass uses semantic version constraints. For more information, see [Semantic Versioning](https://semver.org/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VersionRequirement?: Value<string>;
  /**
   * The type of this dependency. Choose from the following options:
   */
  DependencyType?: Value<string>;
}

/**
 * Contains information about a device that Linux processes in a container can access.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdadevicemount.html}
 **/
export interface GreengrassV2ComponentVersionLambdaDeviceMount {
  /**
   * The mount path for the device in the file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Path?: Value<string>;
  /**
   * Whether or not to add the component's system user as an owner of the device.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AddGroupOwner?: Value<boolean>;
  /**
   * The permission to access the device: read/only (`ro`) or read/write (`rw`).
   *
   * Default: `ro`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Permission?: Value<string>;
}

/**
 * Contains information about an event source for an AWS Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdaeventsource.html}
 **/
export interface GreengrassV2ComponentVersionLambdaEventSource {
  /**
   * The type of event source. Choose from the following options:
   */
  Type?: Value<string>;
  /**
   * The topic to which to subscribe to receive event messages.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Topic?: Value<string>;
}

/**
 * Contains parameters for a Lambda function that runs on AWS IoT Greengrass.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdaexecutionparameters.html}
 **/
export interface GreengrassV2ComponentVersionLambdaExecutionParameters {
  /**
   * The maximum number of instances that a non-pinned Lambda function can run at the same time.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxInstancesCount?: Value<number>;
  /**
   * The maximum amount of time in seconds that the Lambda function can process a work item.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeoutInSeconds?: Value<number>;
  /**
   * The map of environment variables that are available to the Lambda function when it runs.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnvironmentVariables?: { [key: string]: Value<string> };
  /**
   * The list of event sources to which to subscribe to receive work messages. The Lambda function runs when it receives a message from an event source. You can subscribe this function to local publish/subscribe messages and AWS IoT Core MQTT messages.
   *
   * _Required_: No
   *
   * _Type_: List of [LambdaEventSource](aws-properties-greengrassv2-componentversion-lambdaeventsource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EventSources?: List<GreengrassV2ComponentVersionLambdaEventSource>;
  /**
   * Whether or not the Lambda function is pinned, or long-lived.
   */
  Pinned?: Value<boolean>;
  /**
   * The list of arguments to pass to the Lambda function when it runs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExecArgs?: List<Value<string>>;
  /**
   * The parameters for the Linux process that contains the Lambda function.
   *
   * _Required_: No
   *
   * _Type_: [LambdaLinuxProcessParams](aws-properties-greengrassv2-componentversion-lambdalinuxprocessparams.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LinuxProcessParams?: GreengrassV2ComponentVersionLambdaLinuxProcessParams;
  /**
   * The encoding type that the Lambda function supports.
   *
   * Default: `json`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputPayloadEncodingType?: Value<string>;
  /**
   * The maximum size of the message queue for the Lambda function component. The AWS IoT Greengrass core device stores messages in a FIFO (first-in-first-out) queue until it can run the Lambda function to consume each message.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxQueueSize?: Value<number>;
  /**
   * The interval in seconds at which a pinned (also known as long-lived) Lambda function component sends status updates to the Lambda manager component.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StatusTimeoutInSeconds?: Value<number>;
  /**
   * The maximum amount of time in seconds that a non-pinned Lambda function can idle before the AWS IoT Greengrass Core software stops its process.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxIdleTimeInSeconds?: Value<number>;
}
export interface GreengrassV2ComponentVersionProperties {
  /**
   * The parameters to create a component from a Lambda function.
   *
   * You must specify either `InlineRecipe` or `LambdaFunction`.
   *
   * _Required_: No
   *
   * _Type_: [LambdaFunctionRecipeSource](aws-properties-greengrassv2-componentversion-lambdafunctionrecipesource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LambdaFunction?: GreengrassV2ComponentVersionLambdaFunctionRecipeSource;
  /**
   * The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.
   *
   * You must specify either `InlineRecipe` or `LambdaFunction`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InlineRecipe?: Value<string>;
  /**
   * Application-specific metadata to attach to the component version. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tag your AWS IoT Greengrass Version 2 resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the _AWS IoT Greengrass V2 Developer Guide_.
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
 * Creates a component. Components are software that run on AWS IoT Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to AWS IoT Greengrass. Then, you can deploy the component to other core devices.
 *
 * You can use this operation to do the following:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html}
 */
export interface GreengrassV2ComponentVersionResource {
  Type: 'AWS::GreengrassV2::ComponentVersion';
  Properties: GreengrassV2ComponentVersionProperties;
}
