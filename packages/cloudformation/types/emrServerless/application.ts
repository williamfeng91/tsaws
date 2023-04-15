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
 * The conﬁguration for an application to automatically start on job submission.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostartconfiguration.html}
 **/
export interface EMRServerlessApplicationAutoStartConfiguration {
  /**
   * Enables the application to automatically start on job submission. Defaults to true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * The resource configuration of the initial capacity configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html}
 **/
export interface EMRServerlessApplicationWorkerConfiguration {
  /**
   * _Minimum_: 1
   *
   * _Maximum_: 15
   *
   * _Pattern_: `^[1-9][0-9]*(s)?(GB|gb|gB|Gb)?$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Memory: Value<string>;
  /**
   * _Minimum_: 1
   *
   * _Maximum_: 15
   *
   * _Pattern_: `^[1-9][0-9]*(s)?(vCPU|vcpu|VCPU)?$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cpu: Value<string>;
  /**
   * _Minimum_: 1
   *
   * _Maximum_: 15
   *
   * _Pattern_: `^[1-9][0-9]*(s)?(GB|gb|gB|Gb)$"`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Disk?: Value<string>;
}

/**
 * The initial capacity configuration per worker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.html}
 **/
export interface EMRServerlessApplicationInitialCapacityConfigKeyValuePair {
  /**
   * The value for the initial capacity configuration per worker.
   *
   * _Required_: Yes
   *
   * _Type_: [InitialCapacityConfig](aws-properties-emrserverless-application-initialcapacityconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: EMRServerlessApplicationInitialCapacityConfig;
  /**
   * The worker type for an analytics framework. For Spark applications, the key can either be set to `Driver` or `Executor`. For Hive applications, it can be set to `HiveDriver` or `TezTask`.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 50
   *
   * _Pattern_: `^[a-zA-Z]+[-_]*[a-zA-Z]+$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * The network configuration for customer VPC connectivity.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-networkconfiguration.html}
 **/
export interface EMRServerlessApplicationNetworkConfiguration {
  /**
   * The array of subnet Ids for customer VPC connectivity.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 32
   *
   * _Pattern_: `^[-0-9a-zA-Z]+`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The array of security group Ids for customer VPC connectivity.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 32
   *
   * _Pattern_: `^[-0-9a-zA-Z]+`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
}

/**
 * The image configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-imageconfigurationinput.html}
 **/
export interface EMRServerlessApplicationImageConfigurationInput {
  /**
   * The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageUri?: Value<string>;
}

/**
 * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-maximumallowedresources.html}
 **/
export interface EMRServerlessApplicationMaximumAllowedResources {
  /**
   * The maximum allowed resources for an application.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 15
   *
   * _Pattern_: `^[1-9][0-9]*(s)?(GB|gb|gB|Gb)?$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Memory: Value<string>;
  /**
   * The maximum allowed CPU for an application.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 15
   *
   * _Pattern_: `^[1-9][0-9]*(s)?(vCPU|vcpu|VCPU)?$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cpu: Value<string>;
  /**
   * The maximum allowed disk for an application.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 15
   *
   * _Pattern_: `^[1-9][0-9]*(s)?(GB|gb|gB|Gb)$"`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Disk?: Value<string>;
}

/**
 * The specifications for a worker type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workertypespecificationinput.html}
 **/
export interface EMRServerlessApplicationWorkerTypeSpecificationInput {
  /**
   * The image configuration for a worker type.
   *
   * _Required_: No
   *
   * _Type_: [ImageConfigurationInput](aws-properties-emrserverless-application-imageconfigurationinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageConfiguration?: EMRServerlessApplicationImageConfigurationInput;
}

/**
 * The initial capacity configuration per worker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfig.html}
 **/
export interface EMRServerlessApplicationInitialCapacityConfig {
  /**
   * The resource configuration of the initial capacity configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [WorkerConfiguration](aws-properties-emrserverless-application-workerconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkerConfiguration: EMRServerlessApplicationWorkerConfiguration;
  /**
   * The number of workers in the initial capacity configuration.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 1000000
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkerCount: Value<number>;
}

/**
 * The conﬁguration for an application to automatically stop after a certain amount of time being idle.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostopconfiguration.html}
 **/
export interface EMRServerlessApplicationAutoStopConfiguration {
  /**
   * Enables the application to automatically stop after a certain amount of time being idle. Defaults to true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The amount of idle time in minutes after which your application will automatically stop. Defaults to 15 minutes.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 10080
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdleTimeoutMinutes?: Value<number>;
}
export interface EMRServerlessApplicationProperties {
  /**
   * The configuration for an application to automatically start on job submission.
   *
   * _Required_: No
   *
   * _Type_: [AutoStartConfiguration](aws-properties-emrserverless-application-autostartconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoStartConfiguration?: EMRServerlessApplicationAutoStartConfiguration;
  /**
   * The type of application, such as Spark or Hive.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The CPU architecture type of the application. Allowed values: `X86_64` or `ARM64`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Architecture?: Value<string>;
  /**
   * The specification applied to each worker type.
   *
   * _Required_: No
   *
   * _Type_: Map of [WorkerTypeSpecificationInput](aws-properties-emrserverless-application-workertypespecificationinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkerTypeSpecifications?: {
    [key: string]: EMRServerlessApplicationWorkerTypeSpecificationInput;
  };
  /**
   * The initial capacity of the application.
   *
   * _Required_: No
   *
   * _Type_: List of [InitialCapacityConfigKeyValuePair](aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InitialCapacity?: List<EMRServerlessApplicationInitialCapacityConfigKeyValuePair>;
  /**
   * The image configuration applied to all worker types.
   *
   * _Required_: No
   *
   * _Type_: [ImageConfigurationInput](aws-properties-emrserverless-application-imageconfigurationinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageConfiguration?: EMRServerlessApplicationImageConfigurationInput;
  /**
   * The maximum capacity of the application. This is cumulative across all workers at any given point in time during the lifespan of the application is created. No new resources will be created once any one of the defined limits is hit.
   *
   * _Required_: No
   *
   * _Type_: [MaximumAllowedResources](aws-properties-emrserverless-application-maximumallowedresources.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumCapacity?: EMRServerlessApplicationMaximumAllowedResources;
  /**
   * The configuration for an application to automatically stop after a certain amount of time being idle.
   *
   * _Required_: No
   *
   * _Type_: [AutoStopConfiguration](aws-properties-emrserverless-application-autostopconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoStopConfiguration?: EMRServerlessApplicationAutoStopConfiguration;
  /**
   * The network configuration for customer VPC connectivity for the application.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-emrserverless-application-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: EMRServerlessApplicationNetworkConfiguration;
  /**
   * The EMR release version associated with the application.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 64
   *
   * _Pattern_: `^[A-Za-z0-9._/-]+$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReleaseLabel: Value<string>;
  /**
   * The tags assigned to the application.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the application.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 64
   *
   * _Pattern_: `^[A-Za-z0-9._/#-]+$`
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
 * The `AWS::EMRServerless::Application` resource specifies an EMR Serverless application. An application uses open source analytics frameworks to run jobs that process data. To create an application, you must specify the release version for the open source framework version you want to use and the type of application you want, such as Apache Spark or Apache Hive. After you create an application, you can submit data processing jobs or interactive requests to it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html}
 */
export interface EMRServerlessApplicationResource {
  Type: 'AWS::EMRServerless::Application';
  Properties: EMRServerlessApplicationProperties;
}
