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
 * Amazon EBS-specific block device mapping specifications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.html}
 **/
export interface ImageBuilderContainerRecipeEbsInstanceBlockDeviceSpecification {
  /**
   * The snapshot that defines the device contents.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnapshotId?: Value<string>;
  /**
   * Use to override the device's volume type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `gp2 | gp3 | io1 | io2 | sc1 | st1 | standard`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeType?: Value<string>;
  /**
   * Use to configure the KMS key to use when encrypting the device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Use to configure device encryption.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Encrypted?: Value<boolean>;
  /**
   * **For GP3 volumes only** – The throughput in MiB/s that the volume supports.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `125`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Throughput?: Value<number>;
  /**
   * Use to configure device IOPS.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `100`
   *
   * _Maximum_: `64000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Iops?: Value<number>;
  /**
   * Use to override the device's volume size.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `16000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeSize?: Value<number>;
  /**
   * Use to configure delete on termination of the associated device.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeleteOnTermination?: Value<boolean>;
}

/**
 * Contains a key/value pair that sets the named component parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentparameter.html}
 **/
export interface ImageBuilderContainerRecipeComponentParameter {
  /**
   * Sets the value for the named component parameter.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: List<Value<string>>;
  /**
   * The name of the component parameter to set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[^x00]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Defines block device mappings for the instance used to configure your image.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.html}
 **/
export interface ImageBuilderContainerRecipeInstanceBlockDeviceMapping {
  /**
   * Use to manage Amazon EBS-specific configuration for this mapping.
   *
   * _Required_: No
   *
   * _Type_: [EbsInstanceBlockDeviceSpecification](aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ebs?: ImageBuilderContainerRecipeEbsInstanceBlockDeviceSpecification;
  /**
   * Use to remove a mapping from the base image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `0`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NoDevice?: Value<string>;
  /**
   * Use to manage instance ephemeral devices.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualName?: Value<string>;
  /**
   * The device to which these mappings apply.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeviceName?: Value<string>;
}

/**
 * Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-instanceconfiguration.html}
 **/
export interface ImageBuilderContainerRecipeInstanceConfiguration {
  /**
   * Defines the block devices to attach for building an instance from this Image Builder AMI.
   *
   * _Required_: No
   *
   * _Type_: List of [InstanceBlockDeviceMapping](aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BlockDeviceMappings?: List<ImageBuilderContainerRecipeInstanceBlockDeviceMapping>;
  /**
   * The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Image?: Value<string>;
}

/**
 * The container repository where the output container image is stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-targetcontainerrepository.html}
 **/
export interface ImageBuilderContainerRecipeTargetContainerRepository {
  /**
   * Specifies the service in which this image was registered.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ECR`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Service?: Value<string>;
  /**
   * The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RepositoryName?: Value<string>;
}

/**
 * Configuration details of the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-containerrecipe-componentconfiguration.html}
 **/
export interface ImageBuilderContainerRecipeComponentConfiguration {
  /**
   * A group of parameter settings that Image Builder uses to configure the component for a specific recipe.
   *
   * _Required_: No
   *
   * _Type_: List of [ComponentParameter](aws-properties-imagebuilder-containerrecipe-componentparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Parameters?: List<ImageBuilderContainerRecipeComponentParameter>;
  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):component/[a-z0-9-_]+/(?:(?:([0-9]+|x).([0-9]+|x).([0-9]+|x))|(?:[0-9]+.[0-9]+.[0-9]+/[0-9]+))$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentArn?: Value<string>;
}
export interface ImageBuilderContainerRecipeProperties {
  /**
   * The working directory for use during build and test workflows.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkingDirectory?: Value<string>;
  /**
   * The base image for the container recipe.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ParentImage: Value<string>;
  /**
   * The description of the container recipe.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * Identifies which KMS key is used to encrypt the container image for distribution to the target Region.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * A group of options that can be used to configure an instance for building and testing container images.
   *
   * _Required_: No
   *
   * _Type_: [InstanceConfiguration](aws-properties-imagebuilder-containerrecipe-instanceconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceConfiguration?: ImageBuilderContainerRecipeInstanceConfiguration;
  /**
   * Specifies the type of container, such as Docker.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DOCKER`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerType: Value<string>;
  /**
   * The name of the container recipe.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DockerfileTemplateData?: Value<string>;
  /**
   * Build and test components that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ComponentConfiguration](aws-properties-imagebuilder-containerrecipe-componentconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Components: List<ImageBuilderContainerRecipeComponentConfiguration>;
  /**
   * The destination repository for the container image.
   *
   * _Required_: Yes
   *
   * _Type_: [TargetContainerRepository](aws-properties-imagebuilder-containerrecipe-targetcontainerrepository.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetRepository: ImageBuilderContainerRecipeTargetContainerRepository;
  /**
   * The semantic version of the container recipe.
   *
   * The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   *
   * **Assignment:** For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.
   *
   * **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   *
   * **Filtering:** With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[0-9]+.[0-9]+.[0-9]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Version: Value<string>;
  /**
   * Specifies the operating system platform when you use a custom base image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PlatformOverride?: Value<string>;
  /**
   * Specifies the operating system version for the base image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageOsVersionOverride?: Value<string>;
  /**
   * Tags that are attached to the container recipe.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The S3 URI for the Dockerfile that will be used to build your container image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DockerfileTemplateUri?: Value<string>;
}

/**
 * Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-containerrecipe.html}
 */
export interface ImageBuilderContainerRecipeResource {
  Type: 'AWS::ImageBuilder::ContainerRecipe';
  Properties: ImageBuilderContainerRecipeProperties;
}
