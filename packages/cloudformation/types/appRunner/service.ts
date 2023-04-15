/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html}
 **/
export interface AppRunnerServiceImageConfiguration {
  /**
   * An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
   */
  RuntimeEnvironmentSecrets?: List<AppRunnerServiceKeyValuePair>;
  /**
   * An optional command that App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start command.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[^x0ax0d]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartCommand?: Value<string>;
  /**
   * Environment variables that are available to your running App Runner service. An array of key-value pairs.
   *
   * _Required_: No
   *
   * _Type_: List of [KeyValuePair](aws-properties-apprunner-service-keyvaluepair.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuntimeEnvironmentVariables?: List<AppRunnerServiceKeyValuePair>;
  /**
   * The port that your application listens to in the container.
   *
   * Default: `8080`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<string>;
}

/**
 * Describes a key-value pair, which is a string-to-string mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-keyvaluepair.html}
 **/
export interface AppRunnerServiceKeyValuePair {
  /**
   * The value string to which the key name is mapped.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The key name string to map to a value.
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
 * Network configuration settings for inbound network traffic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-ingressconfiguration.html}
 **/
export interface AppRunnerServiceIngressConfiguration {
  /**
   * Specifies whether your App Runner service is publicly accessible. To make the service publicly accessible set it to `True`. To make the service privately accessible, from only within an Amazon VPC set it to `False`.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsPubliclyAccessible: Value<boolean>;
}

/**
 * Describes the settings for the health check that AWS App Runner performs to monitor the health of a service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html}
 **/
export interface AppRunnerServiceHealthCheckConfiguration {
  /**
   * The URL that health check requests are sent to.
   *
   * `Path` is only applicable when you set `Protocol` to `HTTP`.
   *
   * Default: `"/"`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The number of consecutive checks that must fail before App Runner decides that the service is unhealthy.
   *
   * Default: `5`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnhealthyThreshold?: Value<number>;
  /**
   * The time, in seconds, to wait for a health check response before deciding it failed.
   *
   * Default: `2`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: Value<number>;
  /**
   * The number of consecutive checks that must succeed before App Runner decides that the service is healthy.
   *
   * Default: `1`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthyThreshold?: Value<number>;
  /**
   * The IP protocol that App Runner uses to perform health checks for your service.
   *
   * If you set `Protocol` to `HTTP`, App Runner sends health check requests to the HTTP path specified by `Path`.
   *
   * Default: `TCP`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HTTP | TCP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
  /**
   * The time interval, in seconds, between health checks.
   *
   * Default: `5`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Interval?: Value<number>;
}

/**
 * Describes the observability configuration of an AWS App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-serviceobservabilityconfiguration.html}
 **/
export interface AppRunnerServiceServiceObservabilityConfiguration {
  /**
   * When `true`, an observability configuration resource is associated with the service, and an `ObservabilityConfigurationArn` is specified.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObservabilityEnabled: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the observability configuration that is associated with the service. Specified only when `ObservabilityEnabled` is `true`.
   *
   * Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing/3`
   *
   * Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Pattern_: `arn:aws(-[w]+)*:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[0-9]{12}:(w|/|-){1,1011}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObservabilityConfigurationArn?: Value<string>;
}

/**
 * Identifies a version of code that AWS App Runner refers to within a source code repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourcecodeversion.html}
 **/
export interface AppRunnerServiceSourceCodeVersion {
  /**
   * The type of version identifier.
   *
   * For a git-based repository, branches represent versions.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BRANCH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * A source code version.
   *
   * For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html}
 **/
export interface AppRunnerServiceSourceConfiguration {
  /**
   * Describes the resources that are needed to authenticate access to some source repositories.
   *
   * _Required_: No
   *
   * _Type_: [AuthenticationConfiguration](aws-properties-apprunner-service-authenticationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationConfiguration?: AppRunnerServiceAuthenticationConfiguration;
  /**
   * The description of a source code repository.
   *
   * You must provide either this member or `ImageRepository` (but not both).
   *
   * _Required_: No
   *
   * _Type_: [CodeRepository](aws-properties-apprunner-service-coderepository.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeRepository?: AppRunnerServiceCodeRepository;
  /**
   * The description of a source image repository.
   *
   * You must provide either this member or `CodeRepository` (but not both).
   *
   * _Required_: No
   *
   * _Type_: [ImageRepository](aws-properties-apprunner-service-imagerepository.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageRepository?: AppRunnerServiceImageRepository;
  /**
   * If `true`, continuous integration from the source repository is enabled for the App Runner service. Each repository change (including any source code commit or new image version) starts a deployment.
   *
   * Default: App Runner sets to `false` for a source image that uses an ECR Public repository or an ECR repository that's in an AWS account other than the one that the service is in. App Runner sets to `true` in all other cases (which currently include a source code repository or a source image using a same-account ECR repository).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoDeploymentsEnabled?: Value<boolean>;
}

/**
 * Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfiguration.html}
 **/
export interface AppRunnerServiceCodeConfiguration {
  /**
   * The source of the App Runner configuration. Values are interpreted as follows:
   */
  ConfigurationSource: Value<string>;
  /**
   * The basic configuration for building and running the App Runner service. Use it to quickly launch an App Runner service without providing a `apprunner.yaml` file in the source code repository (or ignoring the file if it exists).
   *
   * _Required_: No
   *
   * _Type_: [CodeConfigurationValues](aws-properties-apprunner-service-codeconfigurationvalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeConfigurationValues?: AppRunnerServiceCodeConfigurationValues;
}

/**
 * Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-instanceconfiguration.html}
 **/
export interface AppRunnerServiceInstanceConfiguration {
  /**
   * The Amazon Resource Name (ARN) of an IAM role that provides permissions to your App Runner service. These are permissions that your code needs when it calls any AWS APIs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `29`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:(role|role/service-role)/[w+=,.@-/]{1,1000}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceRoleArn?: Value<string>;
  /**
   * The amount of memory, in MB or GB, reserved for each instance of your App Runner service.
   *
   * Default: `2 GB`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `4`
   *
   * _Pattern_: `2048|3072|4096|(2|3|4) GB`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Memory?: Value<string>;
  /**
   * The number of CPU units reserved for each instance of your App Runner service.
   *
   * Default: `1 vCPU`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `6`
   *
   * _Pattern_: `1024|2048|(1|2) vCPU`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cpu?: Value<string>;
}

/**
 * Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-authenticationconfiguration.html}
 **/
export interface AppRunnerServiceAuthenticationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants the App Runner service access to a source repository. It's required for ECR image repositories (but not for ECR Public repositories).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `29`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:(role|role/service-role)/[w+=,.@-/]{1,1000}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessRoleArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the App Runner connection that enables the App Runner service to connect to a source repository. It's required for GitHub code repositories.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Pattern_: `arn:aws(-[w]+)*:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[0-9]{12}:(w|/|-){1,1011}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionArn?: Value<string>;
}

/**
 * Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-encryptionconfiguration.html}
 **/
export interface AppRunnerServiceEncryptionConfiguration {
  /**
   * The ARN of the KMS key that's used for encryption.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:aws(-[w]+)*:kms:[a-z-]+-[0-9]{1}:[0-9]{12}:key/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKey: Value<string>;
}

/**
 * Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a `apprunner.yaml` file in the source code repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html}
 **/
export interface AppRunnerServiceCodeConfigurationValues {
  /**
   * An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
   */
  RuntimeEnvironmentSecrets?: List<AppRunnerServiceKeyValuePair>;
  /**
   * A runtime environment type for building and running an App Runner service. It represents a programming language runtime.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CORRETTO_11 | CORRETTO_8 | DOTNET_6 | GO_1 | NODEJS_12 | NODEJS_14 | NODEJS_16 | PHP_81 | PYTHON_3 | RUBY_31`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Runtime: Value<string>;
  /**
   * The command App Runner runs to start your application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[^x0ax0d]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartCommand?: Value<string>;
  /**
   * The environment variables that are available to your running AWS App Runner service. An array of key-value pairs.
   *
   * _Required_: No
   *
   * _Type_: List of [KeyValuePair](aws-properties-apprunner-service-keyvaluepair.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuntimeEnvironmentVariables?: List<AppRunnerServiceKeyValuePair>;
  /**
   * The port that your application listens to in the container.
   *
   * Default: `8080`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<string>;
  /**
   * The command App Runner runs to build your application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[^x0ax0d]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BuildCommand?: Value<string>;
}

/**
 * Describes a source image repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imagerepository.html}
 **/
export interface AppRunnerServiceImageRepository {
  /**
   * The identifier of an image.
   *
   * For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the image name format, see [Pulling an image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the _Amazon ECR User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `([0-9]{12}.dkr.ecr.[a-z-]+-[0-9]{1}.amazonaws.com/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(:([wd+-=._:/@])+|@([wd:]+))?)|(^public.ecr.aws/.+/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(:([wd+-=._:/@])+|@([wd:]+))?)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageIdentifier: Value<string>;
  /**
   * Configuration for running the identified image.
   *
   * _Required_: No
   *
   * _Type_: [ImageConfiguration](aws-properties-apprunner-service-imageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageConfiguration?: AppRunnerServiceImageConfiguration;
  /**
   * The type of the image repository. This reflects the repository provider and whether the repository is private or public.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ECR | ECR_PUBLIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageRepositoryType: Value<string>;
}

/**
 * Describes configuration settings related to network traffic of an AWS App Runner service. Consists of embedded objects for each configurable network feature.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-networkconfiguration.html}
 **/
export interface AppRunnerServiceNetworkConfiguration {
  /**
   * Network configuration settings for outbound message traffic.
   *
   * _Required_: No
   *
   * _Type_: [EgressConfiguration](aws-properties-apprunner-service-egressconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EgressConfiguration?: AppRunnerServiceEgressConfiguration;
  /**
   * Network configuration settings for inbound message traffic.
   *
   * _Required_: No
   *
   * _Type_: [IngressConfiguration](aws-properties-apprunner-service-ingressconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngressConfiguration?: AppRunnerServiceIngressConfiguration;
}

/**
 * Describes configuration settings related to outbound network traffic of an AWS App Runner service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-egressconfiguration.html}
 **/
export interface AppRunnerServiceEgressConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when `EgressType = VPC`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Pattern_: `arn:aws(-[w]+)*:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[0-9]{12}:(w|/|-){1,1011}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConnectorArn?: Value<string>;
  /**
   * The type of egress configuration.
   *
   * Set to `DEFAULT` for access to resources hosted on public networks.
   *
   * Set to `VPC` to associate your service to a custom VPC specified by `VpcConnectorArn`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DEFAULT | VPC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EgressType: Value<string>;
}

/**
 * Describes a source code repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html}
 **/
export interface AppRunnerServiceCodeRepository {
  /**
   * The version that should be used within the source code repository.
   *
   * _Required_: Yes
   *
   * _Type_: [SourceCodeVersion](aws-properties-apprunner-service-sourcecodeversion.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceCodeVersion: AppRunnerServiceSourceCodeVersion;
  /**
   * Configuration for building and running the service from a source code repository.
   *
   * `CodeConfiguration` is required only for `CreateService` request.
   *
   * _Required_: No
   *
   * _Type_: [CodeConfiguration](aws-properties-apprunner-service-codeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeConfiguration?: AppRunnerServiceCodeConfiguration;
  /**
   * The location of the repository that contains the source code.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryUrl: Value<string>;
}
export interface AppRunnerServiceProperties {
  /**
   * The settings for the health check that AWS App Runner performs to monitor the health of the App Runner service.
   *
   * _Required_: No
   *
   * _Type_: [HealthCheckConfiguration](aws-properties-apprunner-service-healthcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheckConfiguration?: AppRunnerServiceHealthCheckConfiguration;
  /**
   * The runtime configuration of instances (scaling units) of your service.
   *
   * _Required_: No
   *
   * _Type_: [InstanceConfiguration](aws-properties-apprunner-service-instanceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceConfiguration?: AppRunnerServiceInstanceConfiguration;
  /**
   * An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an AWS managed key.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfiguration](aws-properties-apprunner-service-encryptionconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionConfiguration?: AppRunnerServiceEncryptionConfiguration;
  /**
   * A name for the App Runner service. It must be unique across all the running App Runner services in your AWS account in the AWS Region.
   *
   * If you don't specify a name, AWS CloudFormation generates a name for your service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `[A-Za-z0-9][A-Za-z0-9-_]{3,39}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceName?: Value<string>;
  /**
   * The observability configuration of your service.
   *
   * _Required_: No
   *
   * _Type_: [ServiceObservabilityConfiguration](aws-properties-apprunner-service-serviceobservabilityconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObservabilityConfiguration?: AppRunnerServiceServiceObservabilityConfiguration;
  /**
   * The source to deploy to the App Runner service. It can be a code or an image repository.
   *
   * _Required_: Yes
   *
   * _Type_: [SourceConfiguration](aws-properties-apprunner-service-sourceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceConfiguration: AppRunnerServiceSourceConfiguration;
  /**
   * The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.
   *
   * Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3`
   *
   * Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Pattern_: `arn:aws(-[w]+)*:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[0-9]{12}:(w|/|-){1,1011}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoScalingConfigurationArn?: Value<string>;
  /**
   * Configuration settings related to network traffic of the web application that the App Runner service runs.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-apprunner-service-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: AppRunnerServiceNetworkConfiguration;
  /**
   * An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::AppRunner::Service` resource is an AWS App Runner resource type that specifies an App Runner service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html}
 */
export interface AppRunnerServiceResource {
  Type: 'AWS::AppRunner::Service';
  Properties: AppRunnerServiceProperties;
}
