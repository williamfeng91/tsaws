/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * A local resource, machine learning resource, or secret resource. For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/latest/developerguide/access-local-resources.html), [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/latest/developerguide/ml-inference.html), and [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/latest/developerguide/secrets.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Resources` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html) resource contains a list of `ResourceInstance` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html}
 **/
export interface GreengrassResourceDefinitionVersionResourceInstance {
  /**
   * A container for resource data. The container takes only one of the following supported resource data types: `LocalDeviceResourceData`, `LocalVolumeResourceData`, `SageMakerMachineLearningModelResourceData`, `S3MachineLearningModelResourceData`, or `SecretsManagerSecretResourceData`.
   *
   * Only one resource type can be defined for a `ResourceDataContainer` instance.
   *
   * _Required_: Yes
   *
   * _Type_: [ResourceDataContainer](aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceDataContainer: GreengrassResourceDefinitionVersionResourceDataContainer;
  /**
   * A descriptive or arbitrary ID for the resource. This value must be unique within the resource definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Maximum length 128 characters with pattern [a-zA-Z0-9:_-]+. This must be unique within a Greengrass group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Settings for a local volume resource, which represents a file or directory on the root file system. For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/latest/developerguide/access-local-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `LocalVolumeResourceData` can be used in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html}
 **/
export interface GreengrassResourceDefinitionVersionLocalVolumeResourceData {
  /**
   * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with `/sys`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourcePath: Value<string>;
  /**
   * The absolute local path of the resource in the Lambda environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationPath: Value<string>;
  /**
   * Settings that define additional Linux OS group permissions to give to the Lambda function process.
   *
   * _Required_: No
   *
   * _Type_: [GroupOwnerSetting](aws-properties-greengrass-resourcedefinitionversion-groupownersetting.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupOwnerSetting?: GreengrassResourceDefinitionVersionGroupOwnerSetting;
}

/**
 * Settings for a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. For more information, see [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/latest/developerguide/secrets.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `SecretsManagerSecretResourceData` can be used in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata.html}
 **/
export interface GreengrassResourceDefinitionVersionSecretsManagerSecretResourceData {
  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the `AWSCURRENT` staging label) is included by default.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ARN: Value<string>;
  /**
   * The staging labels whose values you want to make available on the core, in addition to `AWSCURRENT`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AdditionalStagingLabelsToDownload?: List<Value<string>>;
}

/**
 * Settings for an Amazon S3 machine learning resource. For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/latest/developerguide/ml-inference.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `S3MachineLearningModelResourceData` can be used in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html}
 **/
export interface GreengrassResourceDefinitionVersionS3MachineLearningModelResourceData {
  /**
   * The owner setting for the downloaded machine learning resource. For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/latest/developerguide/access-ml-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ResourceDownloadOwnerSetting](aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OwnerSetting?: GreengrassResourceDefinitionVersionResourceDownloadOwnerSetting;
  /**
   * The absolute local path of the resource inside the Lambda environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationPath: Value<string>;
  /**
   * The URI of the source model in an Amazon S3 bucket. The model package must be in `tar.gz` or `.zip` format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Uri: Value<string>;
}

/**
 * A container for resource data, which defines the resource type. The container takes only one of the following supported resource data types: `LocalDeviceResourceData`, `LocalVolumeResourceData`, `SageMakerMachineLearningModelResourceData`, `S3MachineLearningModelResourceData`, or `SecretsManagerSecretResourceData`.
 *
 * **Note**
 *
 * Only one resource type can be defined for a `ResourceDataContainer` instance.
 *
 * In an AWS CloudFormation template, `ResourceDataContainer` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html}
 **/
export interface GreengrassResourceDefinitionVersionResourceDataContainer {
  /**
   * Settings for a secret resource.
   *
   * _Required_: No
   *
   * _Type_: [SecretsManagerSecretResourceData](aws-properties-greengrass-resourcedefinitionversion-secretsmanagersecretresourcedata.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecretsManagerSecretResourceData?: GreengrassResourceDefinitionVersionSecretsManagerSecretResourceData;
  /**
   * Settings for a machine learning resource saved as an SageMaker training job.
   *
   * _Required_: No
   *
   * _Type_: [SageMakerMachineLearningModelResourceData](aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SageMakerMachineLearningModelResourceData?: GreengrassResourceDefinitionVersionSageMakerMachineLearningModelResourceData;
  /**
   * Settings for a local volume resource.
   *
   * _Required_: No
   *
   * _Type_: [LocalVolumeResourceData](aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LocalVolumeResourceData?: GreengrassResourceDefinitionVersionLocalVolumeResourceData;
  /**
   * Settings for a local device resource.
   *
   * _Required_: No
   *
   * _Type_: [LocalDeviceResourceData](aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LocalDeviceResourceData?: GreengrassResourceDefinitionVersionLocalDeviceResourceData;
  /**
   * Settings for a machine learning resource stored in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [S3MachineLearningModelResourceData](aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3MachineLearningModelResourceData?: GreengrassResourceDefinitionVersionS3MachineLearningModelResourceData;
}

/**
 * Settings that define additional Linux OS group permissions to give to the Lambda function process. You can give the permissions of the Linux group that owns the resource or choose another Linux group. These permissions are in addition to the function's `RunAs` permissions.
 *
 * In an AWS CloudFormation template, `GroupOwnerSetting` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html) and [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localvolumeresourcedata.html) property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-groupownersetting.html}
 **/
export interface GreengrassResourceDefinitionVersionGroupOwnerSetting {
  /**
   * Indicates whether to give the privileges of the Linux group that owns the resource to the Lambda process. This gives the Lambda process the file access permissions of the Linux group.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutoAddGroupOwner: Value<boolean>;
  /**
   * The name of the Linux group whose privileges you want to add to the Lambda process. This value is ignored if `AutoAddGroupOwner` is true.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupOwner?: Value<string>;
}

/**
 * Settings for a local device resource, which represents a file under `/dev`. For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/latest/developerguide/access-local-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `LocalDeviceResourceData` can be used in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-localdeviceresourcedata.html}
 **/
export interface GreengrassResourceDefinitionVersionLocalDeviceResourceData {
  /**
   * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under `/dev`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourcePath: Value<string>;
  /**
   * Settings that define additional Linux OS group permissions to give to the Lambda function process.
   *
   * _Required_: No
   *
   * _Type_: [GroupOwnerSetting](aws-properties-greengrass-resourcedefinitionversion-groupownersetting.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupOwnerSetting?: GreengrassResourceDefinitionVersionGroupOwnerSetting;
}

/**
 * Settings for an Secrets Manager machine learning resource. For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/latest/developerguide/ml-inference.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `SageMakerMachineLearningModelResourceData` can be used in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedatacontainer.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html}
 **/
export interface GreengrassResourceDefinitionVersionSageMakerMachineLearningModelResourceData {
  /**
   * The owner setting for the downloaded machine learning resource. For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/latest/developerguide/access-ml-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ResourceDownloadOwnerSetting](aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OwnerSetting?: GreengrassResourceDefinitionVersionResourceDownloadOwnerSetting;
  /**
   * The absolute local path of the resource inside the Lambda environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationPath: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SageMaker training job that represents the source model.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SageMakerJobArn: Value<string>;
}

/**
 * The owner setting for a downloaded machine learning resource. For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/latest/developerguide/access-ml-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `ResourceDownloadOwnerSetting` is the property type of the `OwnerSetting` property for the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-s3machinelearningmodelresourcedata.html) and [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-sagemakermachinelearningmodelresourcedata.html) property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourcedownloadownersetting.html}
 **/
export interface GreengrassResourceDefinitionVersionResourceDownloadOwnerSetting {
  /**
   * The group owner of the machine learning resource. This is the group ID (GID) of an existing Linux OS group on the system. The group's permissions are added to the Lambda process.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupOwner: Value<string>;
  /**
   * The permissions that the group owner has to the machine learning resource. Valid values are `rw` (read-write) or `ro` (read-only).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupPermission: Value<string>;
}
export interface GreengrassResourceDefinitionVersionProperties {
  /**
   * The resources in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ResourceInstance](aws-properties-greengrass-resourcedefinitionversion-resourceinstance.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Resources: List<GreengrassResourceDefinitionVersionResourceInstance>;
  /**
   * The ID of the resource definition associated with this version. This value is a GUID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceDefinitionId: Value<string>;
}

/**
 * The `AWS::Greengrass::ResourceDefinitionVersion` resource represents a resource definition version for AWS IoT Greengrass. A resource definition version contains a list of resources. (In AWS CloudFormation, resources are named _resource instances_.)
 *
 * **Note**
 *
 * To create a resource definition version, you must specify the ID of the resource definition that you want to associate with the version. For information about creating a resource definition, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html).
 *
 * After you create a resource definition version that contains the resources you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html}
 */
export interface GreengrassResourceDefinitionVersionResource {
  Type: 'AWS::Greengrass::ResourceDefinitionVersion';
  Properties: GreengrassResourceDefinitionVersionProperties;
}
