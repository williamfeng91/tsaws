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
 * When you create an image or container recipe with Image Builder, you can add the build or test components that your image pipeline uses to create the final image. You must have at least one build component to create a recipe, but test components are not required. Your pipeline runs tests after it builds the image, to ensure that the target image is functional and can be used reliably for launching Amazon EC2 instances.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.html}
 **/
export interface ImageBuilderImagePipelineImageTestsConfiguration {
  /**
   * The maximum time in minutes that tests are permitted to run.
   *
   * The timeoutMinutes attribute is not currently active. This value is ignored.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `60`
   *
   * _Maximum_: `1440`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutMinutes?: Value<number>;
  /**
   * Defines if tests should be executed when building this image. For example, `true` or `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageTestsEnabled?: Value<boolean>;
}

/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-schedule.html}
 **/
export interface ImageBuilderImagePipelineSchedule {
  /**
   * The cron expression determines how often EC2 Image Builder evaluates your `pipelineExecutionStartCondition`.
   *
   * For information on how to format a cron expression in Image Builder, see [Use cron expressions in EC2 Image Builder](https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression?: Value<string>;
  /**
   * The condition configures when the pipeline should trigger a new image build. When the `pipelineExecutionStartCondition` is set to `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE`, and you use semantic version filters on the base image or components in your image recipe, Image Builder will build a new image only when there are new versions of the image or components in your recipe that match the semantic version filter. When it is set to `EXPRESSION_MATCH_ONLY`, it will build a new image every time the CRON expression matches the current time. For semantic version syntax, see [CreateComponent](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html) in the _ Image Builder API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE | EXPRESSION_MATCH_ONLY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineExecutionStartCondition?: Value<string>;
}

/**
 * Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-ecrconfiguration.html}
 **/
export interface ImageBuilderImagePipelineEcrConfiguration {
  /**
   * Tags for Image Builder to apply to the output container image that &INS; scans. Tags can help you identify and manage your scanned images.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerTags?: List<Value<string>>;
  /**
   * The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named `image-builder-image-scanning-repository` for vulnerability scans of your output container images.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryName?: Value<string>;
}

/**
 * Contains settings for Image Builder image resource and container image scans.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.html}
 **/
export interface ImageBuilderImagePipelineImageScanningConfiguration {
  /**
   * Contains Amazon ECR settings for vulnerability scans.
   *
   * _Required_: No
   *
   * _Type_: [EcrConfiguration](aws-properties-imagebuilder-imagepipeline-ecrconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcrConfiguration?: ImageBuilderImagePipelineEcrConfiguration;
  /**
   * A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageScanningEnabled?: Value<boolean>;
}
export interface ImageBuilderImagePipelineProperties {
  /**
   * The status of the image pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Contains settings for vulnerability scans.
   *
   * _Required_: No
   *
   * _Type_: [ImageScanningConfiguration](aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageScanningConfiguration?: ImageBuilderImagePipelineImageScanningConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InfrastructureConfigurationArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageRecipeArn?: Value<string>;
  /**
   * The description of this image pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DistributionConfigurationArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerRecipeArn?: Value<string>;
  /**
   * The schedule of the image pipeline. A schedule configures how often and when a pipeline automatically creates a new image.
   *
   * _Required_: No
   *
   * _Type_: [Schedule](aws-properties-imagebuilder-imagepipeline-schedule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: ImageBuilderImagePipelineSchedule;
  /**
   * The configuration of the image tests that run after image creation to ensure the quality of the image that was created.
   *
   * _Required_: No
   *
   * _Type_: [ImageTestsConfiguration](aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageTestsConfiguration?: ImageBuilderImagePipelineImageTestsConfiguration;
  /**
   * Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnhancedImageMetadataEnabled?: Value<boolean>;
  /**
   * The tags of this image pipeline.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the image pipeline.
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
}

/**
 * An image pipeline is the automation configuration for building secure OS images on AWS. The Image Builder image pipeline is associated with an image recipe that defines the build, validation, and test phases for an image build lifecycle. An image pipeline can be associated with an infrastructure configuration that defines where your image is built. You can define attributes, such as instance type, subnets, security groups, logging, and other infrastructure-related configurations. You can also associate your image pipeline with a distribution configuration to define how you would like to deploy your image.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html}
 */
export interface ImageBuilderImagePipelineResource {
  Type: 'AWS::ImageBuilder::ImagePipeline';
  Properties: ImageBuilderImagePipelineProperties;
}
