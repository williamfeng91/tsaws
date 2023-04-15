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

/**
 * A list of volumes that are associated with the job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-volumes.html}
 **/
export interface BatchJobDefinitionVolumes {
  /**
   * The contents of the `host` parameter determine whether your data volume persists on the host container instance and where it's stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.
   *
   * _Required_: No
   *
   * _Type_: [VolumesHost](aws-properties-batch-jobdefinition-volumeshost.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host?: BatchJobDefinitionVolumesHost;
  /**
   * This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see [Amazon EFS Volumes](https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [EfsVolumeConfiguration](aws-properties-batch-jobdefinition-efsvolumeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EfsVolumeConfiguration?: BatchJobDefinitionEfsVolumeConfiguration;
  /**
   * The name of the volume. It can be up to 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_). This name is referenced in the `sourceVolume` parameter of container definition `mountPoints`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The authorization configuration details for the Amazon EFS file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-authorizationconfig.html}
 **/
export interface BatchJobDefinitionAuthorizationConfig {
  /**
   * Whether or not to use the AWS Batch job IAM role defined in a job definition when mounting the Amazon EFS file system. If enabled, transit encryption must be enabled in the `EFSVolumeConfiguration`. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html#efs-volume-accesspoints) in the _ AWS Batch User Guide_. EFS IAM authorization requires that `TransitEncryption` be `ENABLED` and that a `JobRoleArn` is specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iam?: Value<string>;
  /**
   * The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the `EFSVolumeConfiguration` must either be omitted or set to `/` which enforces the path set on the EFS access point. If an access point is used, transit encryption must be enabled in the `EFSVolumeConfiguration`. For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the _Amazon Elastic File System User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessPointId?: Value<string>;
}

/**
 * Specifies the configuration of a Kubernetes `hostPath` volume. A `hostPath` volume mounts an existing file or directory from the host node's filesystem into your pod. For more information, see [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) in the _Kubernetes documentation_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekshostpath.html}
 **/
export interface BatchJobDefinitionEksHostPath {
  /**
   * The path of the file or directory on the host to mount into containers on the pod.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
}

/**
 * Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-volumeshost.html}
 **/
export interface BatchJobDefinitionVolumesHost {
  /**
   * The path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the source path location doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
   *
   * This parameter isn't applicable to jobs that run on Fargate resources. Don't provide this for these jobs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourcePath?: Value<string>;
}

/**
 * An object that represents the node properties of a multi-node parallel job.
 *
 * **Note**
 *
 * Node properties can't be specified for Amazon EKS based job definitions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-nodeproperties.html}
 **/
export interface BatchJobDefinitionNodeProperties {
  /**
   * Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MainNode: Value<number>;
  /**
   * A list of node ranges and their properties that are associated with a multi-node parallel job.
   *
   * _Required_: Yes
   *
   * _Type_: List of [NodeRangeProperty](aws-properties-batch-jobdefinition-noderangeproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeRangeProperties: List<BatchJobDefinitionNodeRangeProperty>;
  /**
   * The number of nodes that are associated with a multi-node parallel job.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumNodes: Value<number>;
}

/**
 * The retry strategy that's associated with a job. For more information, see [Automated job retries](https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the _ AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-retrystrategy.html}
 **/
export interface BatchJobDefinitionRetryStrategy {
  /**
   * Array of up to 5 objects that specify the conditions where jobs are retried or failed. If this parameter is specified, then the `attempts` parameter must also be specified. If none of the listed conditions match, then the job is retried.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-batch-jobdefinition-evaluateonexit.md) of [EvaluateOnExit](aws-properties-batch-jobdefinition-evaluateonexit.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluateOnExit?: List<BatchJobDefinitionEvaluateOnExit>;
  /**
   * The number of times to move a job to the `RUNNABLE` status. You can specify between 1 and 10 attempts. If the value of `attempts` is greater than one, the job is retried on failure the same number of attempts as the value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attempts?: Value<number>;
}

/**
 * An environment variable.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainerenvironmentvariable.html}
 **/
export interface BatchJobDefinitionEksContainerEnvironmentVariable {
  /**
   * The value of the environment variable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name of the environment variable.
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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-ephemeralstorage.html}
 **/
export interface BatchJobDefinitionEphemeralStorage {
  SizeInGiB: Value<number>;
}

/**
 * Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties.html}
 **/
export interface BatchJobDefinitionContainerProperties {
  /**
   * The user name to use inside the container. This parameter maps to `User` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--user` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  User?: Value<string>;
  /**
   * The secrets for the container. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Secret](aws-properties-batch-jobdefinition-secret.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Secrets?: List<BatchJobDefinitionSecret>;
  /**
   * This parameter is deprecated, use `resourceRequirements` to specify the memory requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on EC2 resources, it specifies the memory hard limit (in MiB) for a container. If your container attempts to exceed the specified number, it's terminated. You must specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can be specified in several places. It must be specified for each node at least once.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Memory?: Value<number>;
  /**
   * When this parameter is true, the container is given elevated permissions on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--privileged` option to [docker run](https://docs.docker.com/engine/reference/run/). The default value is false.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided, or specified as false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Privileged?: Value<boolean>;
  /**
   * Linux-specific modifications that are applied to the container, such as details for device mappings.
   *
   * _Required_: No
   *
   * _Type_: [LinuxParameters](aws-properties-batch-jobdefinition-containerproperties-linuxparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinuxParameters?: BatchJobDefinitionLinuxParameters;
  /**
   * The platform configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
   *
   * _Required_: No
   *
   * _Type_: [FargatePlatformConfiguration](aws-properties-batch-jobdefinition-containerproperties-fargateplatformconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FargatePlatformConfiguration?: BatchJobDefinitionFargatePlatformConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions. For more information, see [IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobRoleArn?: Value<string>;
  /**
   * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--read-only` option to `docker run`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadonlyRootFilesystem?: Value<boolean>;
  /**
   * This parameter is deprecated, use `resourceRequirements` to specify the vCPU requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs running on EC2 resources, it specifies the number of vCPUs reserved for the job.
   *
   * Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). The number of vCPUs must be specified but can be specified in several places. You must specify it at least once for each node.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Vcpus?: Value<number>;
  /**
   * The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with `repository-url/image:tag`. It can be 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), underscores (_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to `Image` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `IMAGE` parameter of [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * Docker image architecture must match the processor architecture of the compute resources that they're scheduled on. For example, ARM-based Docker images can only run on ARM-based compute resources.
   */
  Image: Value<string>;
  /**
   * The type and amount of resources to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourceRequirement](aws-properties-batch-jobdefinition-resourcerequirement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceRequirements?: List<BatchJobDefinitionResourceRequirement>;
  /**
   * The log configuration specification for the container.
   *
   * This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/). By default, containers use the same logging driver that the Docker daemon uses. However the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
   *
   * AWS Batch currently supports a subset of the logging drivers available to the Docker daemon (shown in the [LogConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties.html#cfn-batch-jobdefinition-containerproperties-logconfiguration) data type).
   *
   * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
   *
   * The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [LogConfiguration](aws-properties-batch-jobdefinition-containerproperties-logconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogConfiguration?: BatchJobDefinitionLogConfiguration;
  /**
   * The mount points for data volumes in your container. This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--volume` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-batch-jobdefinition-mountpoints.md) of [MountPoints](aws-properties-batch-jobdefinition-mountpoints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MountPoints?: List<BatchJobDefinitionMountPoints>;
  /**
   * The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see [AWS Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRoleArn?: Value<string>;
  /**
   * A list of data volumes used in a job.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-batch-jobdefinition-volumes.md) of [Volumes](aws-properties-batch-jobdefinition-volumes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Volumes?: List<BatchJobDefinitionVolumes>;
  /**
   * The command that's passed to the container. This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `COMMAND` parameter to [docker run](https://docs.docker.com/engine/reference/run/). For more information, see [https://docs.docker.com/engine/reference/builder/#cmd](https://docs.docker.com/engine/reference/builder/#cmd).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Command?: List<Value<string>>;
  /**
   * The environment variables to pass to a container. This parameter maps to `Env` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--env` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * We don't recommend using plaintext environment variables for sensitive information, such as credential data.
   *
   * Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that AWS Batch sets.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-batch-jobdefinition-environment.md) of [Environment](aws-properties-batch-jobdefinition-environment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: List<BatchJobDefinitionEnvironment>;
  /**
   * A list of `ulimits` to set in the container. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.
   *
   * _Required_: No
   *
   * _Type_: List of [Ulimit](aws-properties-batch-jobdefinition-ulimit.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ulimits?: List<BatchJobDefinitionUlimit>;
  /**
   * The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-batch-jobdefinition-containerproperties-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: BatchJobDefinitionNetworkConfiguration;
  /**
   * The instance type to use for a multi-node parallel job. All node groups in a multi-node parallel job must use the same instance type.
   *
   * This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType?: Value<string>;
  /**
   * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate.
   *
   * _Required_: No
   *
   * _Type_: [EphemeralStorage](aws-properties-batch-jobdefinition-containerproperties-ephemeralstorage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EphemeralStorage?: BatchJobDefinitionEphemeralStorage;
}

/**
 * Specifies an array of up to 5 conditions to be met, and an action to take (`RETRY` or `EXIT`) if all conditions are met. If none of the `EvaluateOnExit` conditions in a `RetryStrategy` match, then the job is retried.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-evaluateonexit.html}
 **/
export interface BatchJobDefinitionEvaluateOnExit {
  /**
   * Specifies the action to take if all of the specified conditions (`onStatusReason`, `onReason`, and `onExitCode`) are met. The values aren't case sensitive.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EXIT | RETRY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: Value<string>;
  /**
   * Contains a glob pattern to match against the decimal representation of the `ExitCode` returned for a job. The pattern can be up to 512 characters long. It can contain only numbers, and can end with an asterisk (*) so that only the start of the string needs to be an exact match.
   *
   * The string can contain up to 512 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnExitCode?: Value<string>;
  /**
   * Contains a glob pattern to match against the `Reason` returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white space (including spaces and tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnReason?: Value<string>;
  /**
   * Contains a glob pattern to match against the `StatusReason` returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white spaces (including spaces or tabs). It can optionally end with an asterisk (*) so that only the start of the string needs to be an exact match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnStatusReason?: Value<string>;
}

/**
 * The `ulimit` settings to pass to the container.
 *
 * **Note**
 *
 * This object isn't applicable to jobs that are running on Fargate resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ulimit.html}
 **/
export interface BatchJobDefinitionUlimit {
  /**
   * The soft limit for the `ulimit` type.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SoftLimit: Value<number>;
  /**
   * The hard limit for the `ulimit` type.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HardLimit: Value<number>;
  /**
   * The `type` of the `ulimit`.
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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-linuxparameters.html}
 **/
export interface BatchJobDefinitionLinuxParameters {
  Swappiness?: Value<number>;
  Tmpfs?: List<BatchJobDefinitionTmpfs>;
  SharedMemorySize?: Value<number>;
  Devices?: List<BatchJobDefinitionDevice>;
  InitProcessEnabled?: Value<boolean>;
  MaxSwap?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-podproperties-metadata.html}
 **/
export interface BatchJobDefinitionMetadata {
  Labels?: { [key: string]: any };
}

/**
 * The security context for a job. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) in the _Kubernetes documentation_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainersecuritycontext.html}
 **/
export interface BatchJobDefinitionEksContainerSecurityContext {
  /**
   * When this parameter is specified, the container is run as the specified user ID (`uid`). If this parameter isn't specified, the default is the user that's specified in the image metadata. This parameter maps to `RunAsUser` and `MustRanAs` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunAsUser?: Value<number>;
  /**
   * When this parameter is specified, the container is run as a user with a `uid` other than 0. If this parameter isn't specified, so such rule is enforced. This parameter maps to `RunAsUser` and `MustRunAsNonRoot` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunAsNonRoot?: Value<boolean>;
  /**
   * When this parameter is `true`, the container is given elevated permissions on the host container instance. The level of permissions are similar to the `root` user permissions. The default value is `false`. This parameter maps to `privileged` policy in the [Privileged pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Privileged?: Value<boolean>;
  /**
   * When this parameter is `true`, the container is given read-only access to its root file system. The default value is `false`. This parameter maps to `ReadOnlyRootFilesystem` policy in the [Volumes and file systems pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadOnlyRootFilesystem?: Value<boolean>;
  /**
   * When this parameter is specified, the container is run as the specified group ID (`gid`). If this parameter isn't specified, the default is the group that's specified in the image metadata. This parameter maps to `RunAsGroup` and `MustRunAs` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunAsGroup?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-fargateplatformconfiguration.html}
 **/
export interface BatchJobDefinitionFargatePlatformConfiguration {
  PlatformVersion?: Value<string>;
}

/**
 * An object that represents a job timeout configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-timeout.html}
 **/
export interface BatchJobDefinitionTimeout {
  /**
   * The job timeout time (in seconds) that's measured from the job attempt's `startedAt` timestamp. After this time passes, AWS Batch terminates your jobs if they aren't finished. The minimum value for the timeout is 60 seconds.
   *
   * For array jobs, the timeout applies to the child jobs, not to the parent array job.
   *
   * For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the individual nodes.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttemptDurationSeconds?: Value<number>;
}

/**
 * The container path, mount options, and size of the `tmpfs` mount.
 *
 * **Note**
 *
 * This object isn't applicable to jobs that are running on Fargate resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-tmpfs.html}
 **/
export interface BatchJobDefinitionTmpfs {
  /**
   * The size (in MiB) of the `tmpfs` volume.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size: Value<number>;
  /**
   * The absolute file path in the container where the `tmpfs` volume is mounted.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerPath: Value<string>;
  /**
   * The list of `tmpfs` volume mount options.
   *
   * Valid values: "`defaults`" | "`ro`" | "`rw`" | "`suid`" | "`nosuid`" | "`dev`" | "`nodev`" | "`exec`" | "`noexec`" | "`sync`" | "`async`" | "`dirsync`" | "`remount`" | "`mand`" | "`nomand`" | "`atime`" | "`noatime`" | "`diratime`" | "`nodiratime`" | "`bind`" | "`rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime`" | "`norelatime`" | "`strictatime`" | "`nostrictatime`" | "`mode`" | "`uid`" | "`gid`" | "`nr_inodes`" | "`nr_blocks`" | "`mpol`"
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MountOptions?: List<Value<string>>;
}

/**
 * An object that represents the properties of the node range for a multi-node parallel job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-noderangeproperty.html}
 **/
export interface BatchJobDefinitionNodeRangeProperty {
  /**
   * The container details for the node range.
   *
   * _Required_: No
   *
   * _Type_: [ContainerProperties](aws-properties-batch-jobdefinition-containerproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Container?: BatchJobDefinitionContainerProperties;
  /**
   * The range of nodes, using node index values. A range of `0:3` indicates nodes with index values of `0` through `3`. If the starting range value is omitted (`:n`), then `0` is used to start the range. If the ending range value is omitted (`n:`), then the highest possible node index is used to end the range. Your accumulative node ranges must account for all nodes (`0:n`). You can nest node ranges (for example, `0:10` and `4:5`). In this case, the `4:5` range properties override the `0:10` properties.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetNodes: Value<string>;
}

/**
 * This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see [Amazon EFS Volumes](https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html) in the _ AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-efsvolumeconfiguration.html}
 **/
export interface BatchJobDefinitionEfsVolumeConfiguration {
  /**
   * Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the _Amazon Elastic File System User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitEncryption?: Value<string>;
  /**
   * The authorization configuration details for the Amazon EFS file system.
   *
   * _Required_: No
   *
   * _Type_: [AuthorizationConfig](aws-properties-batch-jobdefinition-authorizationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizationConfig?: BatchJobDefinitionAuthorizationConfig;
  /**
   * The Amazon EFS file system ID to use.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileSystemId: Value<string>;
  /**
   * The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume is used instead. Specifying `/` has the same effect as omitting this parameter. The maximum length is 4,096 characters.
   *
   * If an EFS access point is specified in the `authorizationConfig`, the root directory parameter must either be omitted or set to `/`, which enforces the path set on the Amazon EFS access point.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RootDirectory?: Value<string>;
  /**
   * The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you don't specify a transit encryption port, it uses the port selection strategy that the Amazon EFS mount helper uses. The value must be between 0 and 65,535. For more information, see [EFS mount helper](https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the _Amazon Elastic File System User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitEncryptionPort?: Value<number>;
}

/**
 * The type and amount of a resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-resourcerequirement.html}
 **/
export interface BatchJobDefinitionResourceRequirement {
  /**
   * The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GPU | MEMORY | VCPU`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The quantity of the specified resource to reserve for the container. The values vary based on the `type` specified.
   *
   * type="GPU"
   *
   * The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched on.
   *
   * GPUs aren't available for jobs that are running on Fargate resources.
   *
   * type="MEMORY"
   *
   * The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated. This parameter maps to `Memory` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/). You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to `Memory` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the _ AWS Batch User Guide_.
   *
   * For jobs that are running on Fargate resources, then `value` is the hard limit (in MiB), and must match one of the supported values and the `VCPU` values must be one of the values supported for that memory value.
   *
   * value = 512
   *
   * `VCPU` = 0.25
   *
   * value = 1024
   *
   * `VCPU` = 0.25 or 0.5
   *
   * value = 2048
   *
   * `VCPU` = 0.25, 0.5, or 1
   *
   * value = 3072
   *
   * `VCPU` = 0.5, or 1
   *
   * value = 4096
   *
   * `VCPU` = 0.5, 1, or 2
   *
   * value = 5120, 6144, or 7168
   *
   * `VCPU` = 1 or 2
   *
   * value = 8192
   *
   * `VCPU` = 1, 2, or 4
   *
   * value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360
   *
   * `VCPU` = 2 or 4
   *
   * value = 16384
   *
   * `VCPU` = 2, 4, or 8
   *
   * value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720
   *
   * `VCPU` = 4
   *
   * value = 20480, 24576, or 28672
   *
   * `VCPU` = 4 or 8
   *
   * value = 36864, 45056, 53248, or 61440
   *
   * `VCPU` = 8
   *
   * value = 32768, 40960, 49152, or 57344
   *
   * `VCPU` = 8 or 16
   *
   * value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *
   * `VCPU` = 16
   *
   * type="VCPU"
   *
   * The number of vCPUs reserved for the container. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). Each vCPU is equivalent to 1,024 CPU shares. For EC2 resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be specified for each node at least once.
   *
   * The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about Fargate quotas, see [AWS Fargate quotas](https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate) in the _ AWS General Reference_.
   *
   * For jobs that are running on Fargate resources, then `value` must match one of the supported values and the `MEMORY` values must be one of the values supported for that `VCPU` value. The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16
   *
   * value = 0.25
   *
   * `MEMORY` = 512, 1024, or 2048
   *
   * value = 0.5
   *
   * `MEMORY` = 1024, 2048, 3072, or 4096
   *
   * value = 1
   *
   * `MEMORY` = 2048, 3072, 4096, 5120, 6144, 7168, or 8192
   *
   * value = 2
   *
   * `MEMORY` = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384
   *
   * value = 4
   *
   * `MEMORY` = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720
   *
   * value = 8
   *
   * `MEMORY` = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
   *
   * value = 16
   *
   * `MEMORY` = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * An object that contains the properties for the Kubernetes resources of a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksproperties.html}
 **/
export interface BatchJobDefinitionEksProperties {
  /**
   * The properties for the Kubernetes pod resources of a job.
   *
   * _Required_: No
   *
   * _Type_: [PodProperties](aws-properties-batch-jobdefinition-podproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PodProperties?: BatchJobDefinitionPodProperties;
}

/**
 * The Environment property type specifies environment variables to use in a job definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-environment.html}
 **/
export interface BatchJobDefinitionEnvironment {
  /**
   * The value of the environment variable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name of the environment variable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The properties for the pod.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-podproperties.html}
 **/
export interface BatchJobDefinitionPodProperties {
  /**
   * Specifies the volumes for a job definition that uses Amazon EKS resources.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-batch-jobdefinition-volumes.md) of [EksVolume](aws-properties-batch-jobdefinition-eksvolume.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Volumes?: List<BatchJobDefinitionEksVolume>;
  /**
   * The DNS policy for the pod. The default value is `ClusterFirst`. If the `hostNetwork` parameter is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. If no value was specified for `dnsPolicy` in the [RegisterJobDefinition](https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html) API operation, then no value will be returned for `dnsPolicy` by either of [DescribeJobDefinitions](https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html) or [DescribeJobs](https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html) API operations. The pod spec setting will contain either `ClusterFirst` or `ClusterFirstWithHostNet`, depending on the value of the `hostNetwork` parameter. For more information, see [Pod's DNS policy](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy) in the _Kubernetes documentation_.
   *
   * Valid values: `Default` | `ClusterFirst` | `ClusterFirstWithHostNet`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DnsPolicy?: Value<string>;
  /**
   * The properties of the container that's used on the Amazon EKS pod.
   *
   * _Required_: No
   *
   * _Type_: List of [EksContainer](aws-properties-batch-jobdefinition-ekscontainer.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Containers?: List<BatchJobDefinitionEksContainer>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Metadata](aws-properties-batch-jobdefinition-podproperties-metadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metadata?: BatchJobDefinitionMetadata;
  /**
   * The name of the service account that's used to run the pod. For more information, see [Kubernetes service accounts](https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html) and [Configure a Kubernetes service account to assume an IAM role](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html) in the _Amazon EKS User Guide_ and [Configure service accounts for pods](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccountName?: Value<string>;
  /**
   * Indicates if the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections. For more information, see [Host namespaces](https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces) and [Pod networking](https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostNetwork?: Value<boolean>;
}

/**
 * Specifies the configuration of a Kubernetes `emptyDir` volume. An `emptyDir` volume is first created when a pod is assigned to a node. It exists as long as that pod is running on that node. The `emptyDir` volume is initially empty. All containers in the pod can read and write the files in the `emptyDir` volume. However, the `emptyDir` volume can be mounted at the same or different paths in each container. When a pod is removed from a node for any reason, the data in the `emptyDir` is deleted permanently. For more information, see [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) in the _Kubernetes documentation_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksemptydir.html}
 **/
export interface BatchJobDefinitionEksEmptyDir {
  /**
   * The medium to store the volume. The default value is an empty string, which uses the storage of the node.
   *
   * ""
   *
   * **(Default)** Use the disk storage of the node.
   *
   * "Memory"
   *
   * Use the `tmpfs` volume that's backed by the RAM of the node. Contents of the volume are lost when the node reboots, and any storage on the volume counts against the container's memory limit.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Medium?: Value<string>;
  /**
   * The maximum size of the volume. By default, there's no maximum size defined.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeLimit?: Value<string>;
}

/**
 * The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the _Kubernetes documentation_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainerresourcerequirements.html}
 **/
export interface BatchJobDefinitionEksContainerResourceRequirements {
  /**
   * The type and quantity of the resources to reserve for the container. The values vary based on the `name` that's specified. Resources can be requested using either the `limits` or the `requests` objects.
   *
   * memory
   *
   * The memory hard limit (in MiB) for the container, using whole integers, with a "Mi" suffix. If your container attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory for a job. `memory` can be specified in `limits`, `requests`, or both. If `memory` is specified in both places, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   * To maximize your resource utilization, provide your jobs with as much memory as possible for the specific instance type that you are using. To learn how, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the _ AWS Batch User Guide_.
   *
   * cpu
   *
   * The number of CPUs that's reserved for the container. Values must be an even multiple of `0.25`. `cpu` can be specified in `limits`, `requests`, or both. If `cpu` is specified in both places, then the value that's specified in `limits` must be at least as large as the value that's specified in `requests`.
   *
   * nvidia.com/gpu
   *
   * The number of GPUs that's reserved for the container. Values must be a whole integer. `memory` can be specified in `limits`, `requests`, or both. If `memory` is specified in both places, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Limits?: { [key: string]: any };
  /**
   * The type and quantity of the resources to request for the container. The values vary based on the `name` that's specified. Resources can be requested by using either the `limits` or the `requests` objects.
   *
   * memory
   *
   * The memory hard limit (in MiB) for the container, using whole integers, with a "Mi" suffix. If your container attempts to exceed the memory specified, the container is terminated. You must specify at least 4 MiB of memory for a job. `memory` can be specified in `limits`, `requests`, or both. If `memory` is specified in both, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   * If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the _ AWS Batch User Guide_.
   *
   * cpu
   *
   * The number of CPUs that are reserved for the container. Values must be an even multiple of `0.25`. `cpu` can be specified in `limits`, `requests`, or both. If `cpu` is specified in both, then the value that's specified in `limits` must be at least as large as the value that's specified in `requests`.
   *
   * nvidia.com/gpu
   *
   * The number of GPUs that are reserved for the container. Values must be a whole integer. `nvidia.com/gpu` can be specified in `limits`, `requests`, or both. If `nvidia.com/gpu` is specified in both, then the value that's specified in `limits` must be equal to the value that's specified in `requests`.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Requests?: { [key: string]: any };
}

/**
 * An object that represents the secret to expose to your container. Secrets can be exposed to a container in the following ways:
 *
 * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the _ AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-secret.html}
 **/
export interface BatchJobDefinitionSecret {
  /**
   * The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
   *
   * If the AWS Systems Manager Parameter Store parameter exists in the same Region as the job you're launching, then you can use either the full Amazon Resource Name (ARN) or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueFrom: Value<string>;
  /**
   * The name of the secret.
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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-networkconfiguration.html}
 **/
export interface BatchJobDefinitionNetworkConfiguration {
  AssignPublicIp?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-containerproperties-logconfiguration.html}
 **/
export interface BatchJobDefinitionLogConfiguration {
  SecretOptions?: List<BatchJobDefinitionSecret>;
  Options?: { [key: string]: any };
  LogDriver: Value<string>;
}

/**
 * Details for a Docker volume mount point that's used in a job's container properties. This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container) section of the _Docker Remote API_ and the `--volume` option to docker run.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-mountpoints.html}
 **/
export interface BatchJobDefinitionMountPoints {
  /**
   * If this value is `true`, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadOnly?: Value<boolean>;
  /**
   * The name of the volume to mount.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceVolume?: Value<string>;
  /**
   * The path on the container where the host volume is mounted.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerPath?: Value<string>;
}

/**
 * The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) in the _Kubernetes documentation_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainervolumemount.html}
 **/
export interface BatchJobDefinitionEksContainerVolumeMount {
  /**
   * The path on the container where the volume is mounted.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MountPath?: Value<string>;
  /**
   * If this value is `true`, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadOnly?: Value<boolean>;
  /**
   * The name the volume mount. This must match the name of one of the volumes in the pod.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Specifies the configuration of a Kubernetes `secret` volume. For more information, see [secret](https://kubernetes.io/docs/concepts/storage/volumes/#secret) in the _Kubernetes documentation_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekssecret.html}
 **/
export interface BatchJobDefinitionEksSecret {
  /**
   * The name of the secret. The name must be allowed as a DNS subdomain name. For more information, see [DNS subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names) in the _Kubernetes documentation_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretName: Value<string>;
  /**
   * Specifies whether the secret or the secret's keys must be defined.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Optional?: Value<boolean>;
}

/**
 * Specifies an Amazon EKS volume for a job definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-eksvolume.html}
 **/
export interface BatchJobDefinitionEksVolume {
  /**
   * Specifies the configuration of a Kubernetes `secret` volume. For more information, see [secret](https://kubernetes.io/docs/concepts/storage/volumes/#secret) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: [EksSecret](aws-properties-batch-jobdefinition-ekssecret.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Secret?: BatchJobDefinitionEksSecret;
  /**
   * Specifies the configuration of a Kubernetes `emptyDir` volume. For more information, see [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: [EksEmptyDir](aws-properties-batch-jobdefinition-eksemptydir.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmptyDir?: BatchJobDefinitionEksEmptyDir;
  /**
   * Specifies the configuration of a Kubernetes `hostPath` volume. For more information, see [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: [EksHostPath](aws-properties-batch-jobdefinition-ekshostpath.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostPath?: BatchJobDefinitionEksHostPath;
  /**
   * The name of the volume. The name must be allowed as a DNS subdomain name. For more information, see [DNS subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names) in the _Kubernetes documentation_.
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
 * EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-ekscontainer.html}
 **/
export interface BatchJobDefinitionEksContainer {
  /**
   * An array of arguments to the entrypoint. If this isn't specified, the `CMD` of the container image is used. This corresponds to the `args` member in the [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) portion of the [Pod](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/) in Kubernetes. Environment variable references are expanded using the container's environment.
   *
   * If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example, if the reference is to "`$(NAME1)`" and the `NAME1` environment variable doesn't exist, the command string will remain "`$(NAME1)`." `$$` is replaced with `$`, and the resulting string isn't expanded. For example, `$$(VAR_NAME)` is passed as `$(VAR_NAME)` whether or not the `VAR_NAME` environment variable exists. For more information, see [CMD](https://docs.docker.com/engine/reference/builder/#cmd) in the _Dockerfile reference_ and [Define a command and arguments for a pod](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Args?: List<Value<string>>;
  /**
   * The volume mounts for the container. AWS Batch supports `emptyDir`, `hostPath`, and `secret` volume types. For more information about volumes and volume mounts in Kubernetes, see [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: List of [EksContainerVolumeMount](aws-properties-batch-jobdefinition-ekscontainervolumemount.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeMounts?: List<BatchJobDefinitionEksContainerVolumeMount>;
  /**
   * The image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`. This parameter defaults to `IfNotPresent`. However, if the `:latest` tag is specified, it defaults to `Always`. For more information, see [Updating images](https://kubernetes.io/docs/concepts/containers/images/#updating-images) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImagePullPolicy?: Value<string>;
  /**
   * The entrypoint for the container. This isn't run within a shell. If this isn't specified, the `ENTRYPOINT` of the container image is used. Environment variable references are expanded using the container's environment.
   *
   * If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example, if the reference is to "`$(NAME1)`" and the `NAME1` environment variable doesn't exist, the command string will remain "`$(NAME1)`." `$$` is replaced with `$` and the resulting string isn't expanded. For example, `$$(VAR_NAME)` will be passed as `$(VAR_NAME)` whether or not the `VAR_NAME` environment variable exists. The entrypoint can't be updated. For more information, see [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) in the _Dockerfile reference_ and [Define a command and arguments for a container](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) and [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Command?: List<Value<string>>;
  /**
   * The security context for a job. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: [EksContainerSecurityContext](aws-properties-batch-jobdefinition-ekscontainersecuritycontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityContext?: BatchJobDefinitionEksContainerSecurityContext;
  /**
   * The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the _Kubernetes documentation_.
   *
   * _Required_: No
   *
   * _Type_: [EksContainerResourceRequirements](aws-properties-batch-jobdefinition-ekscontainerresourcerequirements.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Resources?: BatchJobDefinitionEksContainerResourceRequirements;
  /**
   * The Docker image used to start the container.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Image: Value<string>;
  /**
   * The environment variables to pass to a container.
   *
   * Environment variables cannot start with "`AWS_BATCH`". This naming convention is reserved for variables that AWS Batch sets.
   *
   * _Required_: No
   *
   * _Type_: List of [EksContainerEnvironmentVariable](aws-properties-batch-jobdefinition-ekscontainerenvironmentvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Env?: List<BatchJobDefinitionEksContainerEnvironmentVariable>;
  /**
   * The name of the container. If the name isn't specified, the default name "`Default`" is used. Each container in a pod must have a unique name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * An object that represents a container instance host device.
 *
 * **Note**
 *
 * This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobdefinition-device.html}
 **/
export interface BatchJobDefinitionDevice {
  /**
   * The path for the device on the host container instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostPath?: Value<string>;
  /**
   * The explicit permissions to provide to the container for the device. By default, the container has permissions for `read`, `write`, and `mknod` for the device.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<Value<string>>;
  /**
   * The path inside the container that's used to expose the host device. By default, the `hostPath` value is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerPath?: Value<string>;
}
export interface BatchJobDefinitionProperties {
  /**
   * The type of job definition. For more information about multi-node parallel jobs, see [Creating a multi-node parallel job definition](https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html) in the _ AWS Batch User Guide_.
   *
   * If the job is run on Fargate resources, then `multinode` isn't supported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `container | multinode`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a `SubmitJob` request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see [Job definition parameters](https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: any };
  /**
   * An object with various properties that are specific to multi-node parallel jobs. Valid values are `containerProperties`, `eksProperties`, and `nodeProperties`. Only one can be specified.
   *
   * If the job runs on Fargate resources, don't specify `nodeProperties`. Use `containerProperties` instead.
   *
   * _Required_: No
   *
   * _Type_: [NodeProperties](aws-properties-batch-jobdefinition-nodeproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeProperties?: BatchJobDefinitionNodeProperties;
  /**
   * The scheduling priority of the job definition. This only affects jobs in job queues with a fair share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchedulingPriority?: Value<number>;
  /**
   * The timeout time for jobs that are submitted with this job definition. After the amount of time you specify passes, AWS Batch terminates your jobs if they aren't finished.
   *
   * _Required_: No
   *
   * _Type_: [Timeout](aws-properties-batch-jobdefinition-timeout.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: BatchJobDefinitionTimeout;
  /**
   * An object with various properties specific to Amazon ECS based jobs. Valid values are `containerProperties`, `eksProperties`, and `nodeProperties`. Only one can be specified.
   *
   * _Required_: No
   *
   * _Type_: [ContainerProperties](aws-properties-batch-jobdefinition-containerproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerProperties?: BatchJobDefinitionContainerProperties;
  /**
   * The name of the job definition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobDefinitionName?: Value<string>;
  /**
   * Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the `FAILED` state.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropagateTags?: Value<boolean>;
  /**
   * The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. Jobs run on Fargate resources specify `FARGATE`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlatformCapabilities?: List<Value<string>>;
  /**
   * An object with various properties that are specific to Amazon EKS based jobs. Valid values are `containerProperties`, `eksProperties`, and `nodeProperties`. Only one can be specified.
   *
   * _Required_: No
   *
   * _Type_: [EksProperties](aws-properties-batch-jobdefinition-eksproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EksProperties?: BatchJobDefinitionEksProperties;
  /**
   * The retry strategy to use for failed jobs that are submitted with this job definition.
   *
   * _Required_: No
   *
   * _Type_: [RetryStrategy](aws-properties-batch-jobdefinition-retrystrategy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryStrategy?: BatchJobDefinitionRetryStrategy;
  /**
   * The tags that are applied to the job definition.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: any };
}

/**
 * The `AWS::Batch::JobDefinition` resource specifies the parameters for an AWS Batch job definition. For more information, see [Job Definitions](https://docs.aws.amazon.com/batch/latest/userguide/job_definitions.html) in the _AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html}
 */
export interface BatchJobDefinitionResource {
  Type: 'AWS::Batch::JobDefinition';
  Properties: BatchJobDefinitionProperties;
}
