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
 * Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration.html}
 **/
export interface ImageBuilderDistributionConfigurationFastLaunchSnapshotConfiguration {
  /**
   * The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetResourceCount?: Value<number>;
}

/**
 * Container distribution settings for encryption, licensing, and sharing in a specific Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.html}
 **/
export interface ImageBuilderDistributionConfigurationContainerDistributionConfiguration {
  /**
   * The destination repository for the container distribution configuration.
   *
   * _Required_: No
   *
   * _Type_: [TargetContainerRepository](aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetRepository?: ImageBuilderDistributionConfigurationTargetContainerRepository;
  /**
   * Tags that are attached to the container distribution configuration.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerTags?: List<Value<string>>;
  /**
   * The description of the container distribution configuration.
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
}

/**
 * The container repository where the output container image is stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.html}
 **/
export interface ImageBuilderDistributionConfigurationTargetContainerRepository {
  /**
   * Specifies the service in which this image was registered.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ECR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryName?: Value<string>;
}

/**
 * Define and configure the output AMIs of the pipeline.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.html}
 **/
export interface ImageBuilderDistributionConfigurationAmiDistributionConfiguration {
  /**
   * The tags to apply to AMIs distributed to this Region.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmiTags?: { [key: string]: Value<string> };
  /**
   * The description of the AMI distribution configuration. Minimum and maximum length are in characters.
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
   * The KMS key identifier used to encrypt the distributed image.
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
  KmsKeyId?: Value<string>;
  /**
   * Launch permissions can be used to configure which AWS accounts can use the AMI to launch instances.
   *
   * _Required_: No
   *
   * _Type_: [LaunchPermissionConfiguration](aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchPermissionConfiguration?: ImageBuilderDistributionConfigurationLaunchPermissionConfiguration;
  /**
   * The ID of an account to which you want to distribute an image.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1536`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetAccountIds?: List<Value<string>>;
  /**
   * The name of the output AMI.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `127`
   *
   * _Pattern_: `^[-_A-Za-z0-9{][-_A-Za-z0-9s:{}.]+[-_A-Za-z0-9}]$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The distribution configuration distribution defines the settings for a specific Region in the Distribution Configuration. You must specify whether the distribution is for an AMI or a container image. To do so, include exactly one of the following data types for your distribution:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-distribution.html}
 **/
export interface ImageBuilderDistributionConfigurationDistribution {
  /**
   * The specific AMI settings, such as launch permissions and AMI tags. For details, see example schema below.
   *
   * _Required_: No
   *
   * _Type_: [AmiDistributionConfiguration](aws-properties-imagebuilder-distributionconfiguration-amidistributionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AmiDistributionConfiguration?: ImageBuilderDistributionConfigurationAmiDistributionConfiguration;
  /**
   * Container distribution settings for encryption, licensing, and sharing in a specific Region. For details, see example schema below.
   *
   * _Required_: No
   *
   * _Type_: [ContainerDistributionConfiguration](aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerDistributionConfiguration?: ImageBuilderDistributionConfigurationContainerDistributionConfiguration;
  /**
   * The Windows faster-launching configurations to use for AMI distribution.
   *
   * _Required_: No
   *
   * _Type_: List of [FastLaunchConfiguration](aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.md)
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FastLaunchConfigurations?: List<ImageBuilderDistributionConfigurationFastLaunchConfiguration>;
  /**
   * A group of launchTemplateConfiguration settings that apply to image distribution for specified accounts.
   *
   * _Required_: No
   *
   * _Type_: List of [LaunchTemplateConfiguration](aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateConfigurations?: List<ImageBuilderDistributionConfigurationLaunchTemplateConfiguration>;
  /**
   * The License Manager Configuration to associate with the AMI in the specified Region. For more information, see the [ LicenseConfiguration API](https://docs.aws.amazon.com/license-manager/latest/APIReference/API_LicenseConfiguration.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LicenseConfigurationArns?: List<Value<string>>;
  /**
   * The target Region for the Distribution Configuration. For example, `eu-west-1`.
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
  Region: Value<string>;
}

/**
 * Identifies the launch template that the associated Windows AMI uses for launching an instance when faster launching is enabled.
 *
 * **Note**
 *
 * You can specify either the `launchTemplateName` or the `launchTemplateId`, but not both.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.html}
 **/
export interface ImageBuilderDistributionConfigurationFastLaunchLaunchTemplateSpecification {
  /**
   * The name of the launch template to use for faster launching for a Windows AMI.
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
  LaunchTemplateName?: Value<string>;
  /**
   * The version of the launch template to use for faster launching for a Windows AMI.
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
  LaunchTemplateVersion?: Value<string>;
  /**
   * The ID of the launch template to use for faster launching for a Windows AMI.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^lt-[a-z0-9-_]{17}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateId?: Value<string>;
}

/**
 * Identifies an Amazon EC2 launch template to use for a specific account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchtemplateconfiguration.html}
 **/
export interface ImageBuilderDistributionConfigurationLaunchTemplateConfiguration {
  /**
   * Set the specified Amazon EC2 launch template as the default launch template for the specified account.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetDefaultVersion?: Value<boolean>;
  /**
   * The account ID that this configuration applies to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[0-9]{12}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountId?: Value<string>;
  /**
   * Identifies the Amazon EC2 launch template to use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^lt-[a-z0-9-_]{17}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplateId?: Value<string>;
}

/**
 * Define and configure faster launching for output Windows AMIs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration.html}
 **/
export interface ImageBuilderDistributionConfigurationFastLaunchConfiguration {
  /**
   * The owner account ID for the fast-launch enabled Windows AMI.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[0-9]{12}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountId?: Value<string>;
  /**
   * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
   *
   * _Required_: No
   *
   * _Type_: [FastLaunchLaunchTemplateSpecification](aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplate?: ImageBuilderDistributionConfigurationFastLaunchLaunchTemplateSpecification;
  /**
   * A Boolean that represents the current state of faster launching for the Windows AMI. Set to `true` to start using Windows faster launching, or `false` to stop using it.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The maximum number of parallel instances that are launched for creating resources.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxParallelLaunches?: Value<number>;
  /**
   * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
   *
   * _Required_: No
   *
   * _Type_: [FastLaunchSnapshotConfiguration](aws-properties-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotConfiguration?: ImageBuilderDistributionConfigurationFastLaunchSnapshotConfiguration;
}

/**
 * Describes the configuration for a launch permission. The launch permission modification request is sent to the [Amazon EC2 ModifyImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html) API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to `all`. See the examples for making an AMI public at [Amazon EC2 ModifyImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-distributionconfiguration-launchpermissionconfiguration.html}
 **/
export interface ImageBuilderDistributionConfigurationLaunchPermissionConfiguration {
  /**
   * The ARN for an AWS Organization that you want to share your AMI with. For more information, see [What is AWS Organizations?](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationArns?: List<Value<string>>;
  /**
   * The ARN for an AWS Organizations organizational unit (OU) that you want to share your AMI with. For more information about key concepts for AWS Organizations, see [AWS Organizations terminology and concepts](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationalUnitArns?: List<Value<string>>;
  /**
   * The AWS account ID.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1536`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserIds?: List<Value<string>>;
  /**
   * The name of the group.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserGroups?: List<Value<string>>;
}
export interface ImageBuilderDistributionConfigurationProperties {
  /**
   * The description of this distribution configuration.
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
   * The tags of this distribution configuration.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of this distribution configuration.
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
   * The distributions of this distribution configuration formatted as an array of Distribution objects.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Distribution](aws-properties-imagebuilder-distributionconfiguration-distribution.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Distributions: List<ImageBuilderDistributionConfigurationDistribution>;
}

/**
 * A distribution configuration allows you to specify the name and description of your output AMI, authorize other AWS accounts to launch the AMI, and replicate the AMI to other AWS Regions. It also allows you to export the AMI to Amazon S3.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-distributionconfiguration.html}
 */
export interface ImageBuilderDistributionConfigurationResource {
  Type: 'AWS::ImageBuilder::DistributionConfiguration';
  Properties: ImageBuilderDistributionConfigurationProperties;
}
