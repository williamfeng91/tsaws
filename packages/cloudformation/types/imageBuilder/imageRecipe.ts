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
 * Contains a key/value pair that sets the named component parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentparameter.html}
 **/
export interface ImageBuilderImageRecipeComponentParameter {
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
 * The image recipe EBS instance block device specification includes the Amazon EBS-specific block device mapping specifications for the image.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.html}
 **/
export interface ImageBuilderImageRecipeEbsInstanceBlockDeviceSpecification {
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
   * Overrides the volume type of the device.
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
   * Overrides the volume size of the device.
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
   * Configures delete on termination of the associated device.
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
 * Defines block device mappings for the instance used to configure your image.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.html}
 **/
export interface ImageBuilderImageRecipeInstanceBlockDeviceMapping {
  /**
   * Use to manage Amazon EBS-specific configuration for this mapping.
   *
   * _Required_: No
   *
   * _Type_: [EbsInstanceBlockDeviceSpecification](aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ebs?: ImageBuilderImageRecipeEbsInstanceBlockDeviceSpecification;
  /**
   * Enter an empty string to remove a mapping from the parent image.
   *
   * The following is an example of an empty string value in the `NoDevice` field.
   *
   * `NoDevice:""`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NoDevice?: Value<string>;
  /**
   * Manages the instance ephemeral devices.
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
 * Contains settings for the Systems Manager agent on your build instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-systemsmanageragent.html}
 **/
export interface ImageBuilderImageRecipeSystemsManagerAgent {
  /**
   * Controls whether the Systems Manager agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UninstallAfterBuild?: Value<boolean>;
}

/**
 * Configuration details of the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-componentconfiguration.html}
 **/
export interface ImageBuilderImageRecipeComponentConfiguration {
  /**
   * A group of parameter settings that Image Builder uses to configure the component for a specific recipe.
   *
   * _Required_: No
   *
   * _Type_: List of [ComponentParameter](aws-properties-imagebuilder-imagerecipe-componentparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Parameters?: List<ImageBuilderImageRecipeComponentParameter>;
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

/**
 * In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.
 *
 * Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-imagerecipe-additionalinstanceconfiguration.html}
 **/
export interface ImageBuilderImageRecipeAdditionalInstanceConfiguration {
  /**
   * Use this property to provide commands or a command script to run when you launch your build instance.
   *
   * The userDataOverride property replaces any commands that Image Builder might have added to ensure that Systems Manager is installed on your Linux build instance. If you override the user data, make sure that you add commands to install Systems Manager, if it is not pre-installed on your base image.
   *
   * The user data is always base 64 encoded. For example, the following commands are encoded as `IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$`:
   *
   * _#!/bin/bash_
   *
   * mkdir -p /var/bb/
   *
   * touch /var
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `21847`
   *
   * _Pattern_: `^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserDataOverride?: Value<string>;
  /**
   * Contains settings for the Systems Manager agent on your build instance.
   *
   * _Required_: No
   *
   * _Type_: [SystemsManagerAgent](aws-properties-imagebuilder-imagerecipe-systemsmanageragent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SystemsManagerAgent?: ImageBuilderImageRecipeSystemsManagerAgent;
}
export interface ImageBuilderImageRecipeProperties {
  /**
   * The components of the image recipe. Components are orchestration documents that define a sequence of steps for downloading, installing, configuring, and testing software packages. They also define validation and security hardening steps. A component is defined using a YAML document format.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ComponentConfiguration](aws-properties-imagebuilder-imagerecipe-componentconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Components: List<ImageBuilderImageRecipeComponentConfiguration>;
  /**
   * The working directory to be used during build and test workflows.
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
   * The parent image of the image recipe. The string must be either an Image ARN or an AMI ID.
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
   * The description of the image recipe.
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
   * The semantic version of the image recipe.
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
   * The block device mappings to apply when creating images from this recipe.
   *
   * _Required_: No
   *
   * _Type_: List of [InstanceBlockDeviceMapping](aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BlockDeviceMappings?: List<ImageBuilderImageRecipeInstanceBlockDeviceMapping>;
  /**
   * Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test your image configuration. Instance configuration adds a layer of control over those instances. You can define settings and add scripts to run when an instance is launched from your AMI.
   *
   * _Required_: No
   *
   * _Type_: [AdditionalInstanceConfiguration](aws-properties-imagebuilder-imagerecipe-additionalinstanceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalInstanceConfiguration?: ImageBuilderImageRecipeAdditionalInstanceConfiguration;
  /**
   * The tags of the image recipe.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the image recipe.
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
 * An Image Builder image recipe is a document that defines the base image and the components to be applied to the base image to produce the desired configuration for the output image. You can use an image recipe to duplicate builds. Image Builder image recipes can be shared, branched, and edited using the console wizard, the AWS CLI, or the API. You can use image recipes with your version control software to maintain shareable versioned image recipes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagerecipe.html}
 */
export interface ImageBuilderImageRecipeResource {
  Type: 'AWS::ImageBuilder::ImageRecipe';
  Properties: ImageBuilderImageRecipeProperties;
}
