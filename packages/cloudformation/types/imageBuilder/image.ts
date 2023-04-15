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
 * When you create an image or container recipe with Image Builder, you can add the build or test components that are used to create the final image. You must have at least one build component to create a recipe, but test components are not required. If you have added tests, they run after the image is created, to ensure that the target image is functional and can be used reliably for launching Amazon EC2 instances.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagetestsconfiguration.html}
 **/
export interface ImageBuilderImageImageTestsConfiguration {
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeoutMinutes?: Value<number>;
  /**
   * Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageTestsEnabled?: Value<boolean>;
}

/**
 * Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-ecrconfiguration.html}
 **/
export interface ImageBuilderImageEcrConfiguration {
  /**
   * Tags for Image Builder to apply to the output container image that &INS; scans. Tags can help you identify and manage your scanned images.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RepositoryName?: Value<string>;
}

/**
 * Contains settings for Image Builder image resource and container image scans.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-image-imagescanningconfiguration.html}
 **/
export interface ImageBuilderImageImageScanningConfiguration {
  /**
   * Contains Amazon ECR settings for vulnerability scans.
   *
   * _Required_: No
   *
   * _Type_: [EcrConfiguration](aws-properties-imagebuilder-image-ecrconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EcrConfiguration?: ImageBuilderImageEcrConfiguration;
  /**
   * A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageScanningEnabled?: Value<boolean>;
}
export interface ImageBuilderImageProperties {
  /**
   * Contains settings for vulnerability scans.
   *
   * _Required_: No
   *
   * _Type_: [ImageScanningConfiguration](aws-properties-imagebuilder-image-imagescanningconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageScanningConfiguration?: ImageBuilderImageImageScanningConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InfrastructureConfigurationArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the image recipe.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow/(?:build|test|distribution))/[a-z0-9-_]+(?:/(?:(?:x|[0-9]+).(?:x|[0-9]+).(?:x|[0-9]+))(?:/[0-9]+)?)?$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageRecipeArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws[^:]*:imagebuilder:[^:]+:(?:[0-9]{12}|aws):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|workflow/(?:build|test|distribution))/[a-z0-9-_]+(?:/(?:(?:x|[0-9]+).(?:x|[0-9]+).(?:x|[0-9]+))(?:/[0-9]+)?)?$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DistributionConfigurationArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerRecipeArn?: Value<string>;
  /**
   * The configuration settings for your image test components, which includes a toggle that allows you to turn off tests, and a timeout setting.
   *
   * _Required_: No
   *
   * _Type_: [ImageTestsConfiguration](aws-properties-imagebuilder-image-imagetestsconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageTestsConfiguration?: ImageBuilderImageImageTestsConfiguration;
  /**
   * Indicates whether Image Builder collects additional information about the image, such as the operating system (OS) version and package list.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnhancedImageMetadataEnabled?: Value<boolean>;
  /**
   * The tags of the image.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * An image build version. An image is a customized, secure, and up-to-date “golden” server image that is pre-installed and pre-configured with software and settings to meet specific IT standards.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html}
 */
export interface ImageBuilderImageResource {
  Type: 'AWS::ImageBuilder::Image';
  Properties: ImageBuilderImageProperties;
}
