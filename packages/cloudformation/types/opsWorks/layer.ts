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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration-shutdowneventconfiguration.html}
 **/
export interface OpsWorksLayerShutdownEventConfiguration {
  DelayUntilElbConnectionsDrained?: Value<boolean>;
  ExecutionTimeout?: Value<number>;
}

/**
 * AWS OpsWorks Stacks supports five lifecycle events: **setup**, **configuration**, **deploy**, **undeploy**, and **shutdown**. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. `LayerCustomRecipes` specifies the custom recipes for a particular layer to be run in response to each of the five events.
 *
 * To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html}
 **/
export interface OpsWorksLayerRecipes {
  /**
   * An array of custom recipe names to be run following a `configure` event.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configure?: List<Value<string>>;
  /**
   * An array of custom recipe names to be run following a `deploy` event.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Deploy?: List<Value<string>>;
  /**
   * An array of custom recipe names to be run following a `setup` event.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Setup?: List<Value<string>>;
  /**
   * An array of custom recipe names to be run following a `shutdown` event.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Shutdown?: List<Value<string>>;
  /**
   * An array of custom recipe names to be run following a `undeploy` event.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Undeploy?: List<Value<string>>;
}

/**
 * Describes a layer's load-based auto scaling configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html}
 **/
export interface OpsWorksLayerLoadBasedAutoScaling {
  /**
   * An `AutoScalingThresholds` object that describes the downscaling configuration, which defines how and when AWS OpsWorks Stacks reduces the number of instances.
   *
   * _Required_: No
   *
   * _Type_: [AutoScalingThresholds](aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DownScaling?: OpsWorksLayerAutoScalingThresholds;
  /**
   * Whether load-based auto scaling is enabled for the layer.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enable?: Value<boolean>;
  /**
   * An `AutoScalingThresholds` object that describes the upscaling configuration, which defines how and when AWS OpsWorks Stacks increases the number of instances.
   *
   * _Required_: No
   *
   * _Type_: [AutoScalingThresholds](aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpScaling?: OpsWorksLayerAutoScalingThresholds;
}

/**
 * Describes an Amazon EBS volume configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html}
 **/
export interface OpsWorksLayerVolumeConfiguration {
  /**
   * Specifies whether an Amazon EBS volume is encrypted. For more information, see [Amazon EBS Encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encrypted?: Value<boolean>;
  /**
   * The number of I/O operations per second (IOPS) to provision for the volume. For PIOPS volumes, the IOPS per disk.
   *
   * If you specify `io1` for the volume type, you must specify this property.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iops?: Value<number>;
  /**
   * The volume mount point. For example "/dev/sdh".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MountPoint?: Value<string>;
  /**
   * The number of disks in the volume.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfDisks?: Value<number>;
  /**
   * The volume [RAID level](http://en.wikipedia.org/wiki/Standard_RAID_levels).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RaidLevel?: Value<number>;
  /**
   * The volume size.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: Value<number>;
  /**
   * The volume type. For more information, see [ Amazon EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).
   */
  VolumeType?: Value<string>;
}

/**
 * Specifies the lifecycle event configuration
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration.html}
 **/
export interface OpsWorksLayerLifecycleEventConfiguration {
  /**
   * The Shutdown event configuration.
   *
   * _Required_: No
   *
   * _Type_: [ShutdownEventConfiguration](aws-properties-opsworks-layer-lifecycleeventconfiguration-shutdowneventconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShutdownEventConfiguration?: OpsWorksLayerShutdownEventConfiguration;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds.html}
 **/
export interface OpsWorksLayerAutoScalingThresholds {
  CpuThreshold?: Value<number>;
  IgnoreMetricsTime?: Value<number>;
  InstanceCount?: Value<number>;
  LoadThreshold?: Value<number>;
  MemoryThreshold?: Value<number>;
  ThresholdsWaitTime?: Value<number>;
}
export interface OpsWorksLayerProperties {
  /**
   * One or more user-defined key-value pairs to be added to the stack attributes.
   *
   * To create a cluster layer, set the `EcsClusterArn` attribute to the cluster's ARN.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: { [key: string]: Value<string> };
  /**
   * Whether to automatically assign an [Elastic IP address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) to the layer's instances. For more information, see [How to Edit a Layer](https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html).
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoAssignElasticIps: Value<boolean>;
  /**
   * For stacks that are running in a VPC, whether to automatically assign a public IP address to the layer's instances. For more information, see [How to Edit a Layer](https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-edit.html).
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoAssignPublicIps: Value<boolean>;
  /**
   * The ARN of an IAM profile to be used for the layer's EC2 instances. For more information about IAM ARNs, see [Using Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomInstanceProfileArn?: Value<string>;
  /**
   * A JSON-formatted string containing custom stack configuration and deployment attributes to be installed on the layer's instances. For more information, see [ Using Custom JSON](https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html). This feature is supported as of version 1.7.42 of the AWS CLI.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomJson?: { [key: string]: any };
  /**
   * A `LayerCustomRecipes` object that specifies the layer custom recipes.
   *
   * _Required_: No
   *
   * _Type_: [Recipes](aws-properties-opsworks-layer-recipes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRecipes?: OpsWorksLayerRecipes;
  /**
   * An array containing the layer custom security group IDs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomSecurityGroupIds?: List<Value<string>>;
  /**
   * Whether to disable auto healing for the layer.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableAutoHealing: Value<boolean>;
  /**
   * Whether to install operating system and package updates when the instance boots. The default value is `true`. To control when updates are installed, set this value to `false`. You must then update your instances manually by using [CreateDeployment](https://docs.aws.amazon.com/goto/WebAPI/opsworks-2013-02-18/CreateDeployment) to run the `update_dependencies` stack command or by manually running `yum` (Amazon Linux) or `apt-get` (Ubuntu) on the instances.
   *
   * To ensure that your instances have the latest security updates, we strongly recommend using the default value of `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstallUpdatesOnBoot?: Value<boolean>;
  /**
   * A `LifeCycleEventConfiguration` object that you can use to configure the Shutdown event to specify an execution timeout and enable or disable Elastic Load Balancer connection draining.
   *
   * _Required_: No
   *
   * _Type_: [LifecycleEventConfiguration](aws-properties-opsworks-layer-lifecycleeventconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LifecycleEventConfiguration?: OpsWorksLayerLifecycleEventConfiguration;
  /**
   * The load-based scaling configuration for the AWS OpsWorks layer.
   *
   * _Required_: No
   *
   * _Type_: [LoadBasedAutoScaling](aws-properties-opsworks-layer-loadbasedautoscaling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBasedAutoScaling?: OpsWorksLayerLoadBasedAutoScaling;
  /**
   * The layer name, which is used by the console. Layer names can be a maximum of 32 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * An array of `Package` objects that describes the layer packages.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Packages?: List<Value<string>>;
  /**
   * For custom layers only, use this parameter to specify the layer's short name, which is used internally by AWS OpsWorks Stacks and by Chef recipes. The short name is also used as the name for the directory where your app files are installed. It can have a maximum of 32 characters, which are limited to the alphanumeric characters, '-', '_', and '.'.
   *
   * Built-in layer short names are defined by AWS OpsWorks Stacks. For more information, see the [Layer Reference](https://docs.aws.amazon.com/opsworks/latest/userguide/layers.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Shortname: Value<string>;
  /**
   * The layer stack ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StackId: Value<string>;
  /**
   * Specifies one or more sets of tags (key–value pairs) to associate with this AWS OpsWorks layer. Use tags to manage your resources.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The layer type. A stack cannot have more than one built-in layer of the same type. It can have any number of custom layers. Built-in layers are not available in Chef 12 stacks.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `aws-flow-ruby | custom | db-master | ecs-cluster | java-app | lb | memcached | monitoring-master | nodejs-app | php-app | rails-app | web`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * Whether to use Amazon EBS-optimized instances.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseEbsOptimizedInstances?: Value<boolean>;
  /**
   * A `VolumeConfigurations` object that describes the layer's Amazon EBS volumes.
   *
   * _Required_: No
   *
   * _Type_: List of [VolumeConfiguration](aws-properties-opsworks-layer-volumeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeConfigurations?: List<OpsWorksLayerVolumeConfiguration>;
}

/**
 * Creates a layer. For more information, see [How to Create a Layer](https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html).
 *
 * **Note**
 *
 * You should use **CreateLayer** for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, **CreateLayer** fails. A stack can have an arbitrary number of custom layers, so you can call **CreateLayer** as many times as you like for that layer type.
 *
 * **Required Permissions**: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see [Managing User Permissions](https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html}
 */
export interface OpsWorksLayerResource {
  Type: 'AWS::OpsWorks::Layer';
  Properties: OpsWorksLayerProperties;
}
