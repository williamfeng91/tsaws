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
 * A custom SageMaker image. For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html}
 **/
export interface SageMakerDomainCustomImage {
  /**
   * The name of the CustomImage. Must be unique to your account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageName: Value<string>;
  /**
   * The name of the AppImageConfig.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppImageConfigName: Value<string>;
  /**
   * The version number of the CustomImage.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageVersionNumber?: Value<number>;
}

/**
 * The KernelGateway app settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html}
 **/
export interface SageMakerDomainKernelGatewayAppSettings {
  /**
   * A list of custom SageMaker images that are configured to run as a KernelGateway app.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomImage](aws-properties-sagemaker-domain-customimage.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomImages?: List<SageMakerDomainCustomImage>;
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
   *
   * The Amazon SageMaker Studio UI does not use the default instance type value set here. The default instance type set here is used when Apps are created using the AWS Command Line Interface or AWS CloudFormation and the instance type parameter value is not passed.
   *
   * _Required_: No
   *
   * _Type_: [ResourceSpec](aws-properties-sagemaker-domain-resourcespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
}

/**
 * A collection of settings that configure user interaction with the `RStudioServerPro` app. `RStudioServerProAppSettings` cannot be updated. The `RStudioServerPro` app must be deleted and a new one created to make any changes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverproappsettings.html}
 **/
export interface SageMakerDomainRStudioServerProAppSettings {
  /**
   * Indicates whether the current user has access to the `RStudioServerPro` app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessStatus?: Value<string>;
  /**
   * The level of permissions that the user has within the `RStudioServerPro` app. This value defaults to `User`. The `Admin` value allows the user access to the RStudio Administrative Dashboard.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `R_STUDIO_ADMIN | R_STUDIO_USER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserGroup?: Value<string>;
}

/**
 * A collection of settings that configure the `RStudioServerPro` Domain-level app.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html}
 **/
export interface SageMakerDomainRStudioServerProDomainSettings {
  /**
   * The ARN of the execution role for the `RStudioServerPro` Domain-level app.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainExecutionRoleArn: Value<string>;
  /**
   * A URL pointing to an RStudio Connect server.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RStudioConnectUrl?: Value<string>;
  /**
   * A collection that defines the default `InstanceType`, `SageMakerImageArn`, and `SageMakerImageVersionArn` for the Domain.
   *
   * _Required_: No
   *
   * _Type_: [ResourceSpec](aws-properties-sagemaker-domain-resourcespec.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
  /**
   * A URL pointing to an RStudio Package Manager server.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RStudioPackageManagerUrl?: Value<string>;
}

/**
 * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called, and as part of `UserSettings` when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html}
 **/
export interface SageMakerDomainSharingSettings {
  /**
   * Whether to include the notebook cell output when sharing the notebook. The default is `Disabled`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Allowed | Disabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotebookOutputOption?: Value<string>;
  /**
   * When `NotebookOutputOption` is `Allowed`, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3KmsKeyId?: Value<string>;
  /**
   * When `NotebookOutputOption` is `Allowed`, the Amazon S3 bucket used to store the shared notebook snapshots.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3OutputPath?: Value<string>;
}

/**
 * The JupyterServer app settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html}
 **/
export interface SageMakerDomainJupyterServerAppSettings {
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app.
   *
   * _Required_: No
   *
   * _Type_: [ResourceSpec](aws-properties-sagemaker-domain-resourcespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
}

/**
 * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called, and as `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called.
 *
 * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings`, the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html}
 **/
export interface SageMakerDomainUserSettings {
  /**
   * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
   *
   * Optional when the `CreateDomain.AppNetworkAccessType` parameter is set to `PublicInternetOnly`.
   *
   * Required when the `CreateDomain.AppNetworkAccessType` parameter is set to `VpcOnly`.
   *
   * Amazon SageMaker adds a security group to allow NFS traffic from SageMaker Studio. Therefore, the number of security groups that you can specify is one less than the maximum number shown.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The kernel gateway app settings.
   *
   * _Required_: No
   *
   * _Type_: [KernelGatewayAppSettings](aws-properties-sagemaker-domain-kernelgatewayappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KernelGatewayAppSettings?: SageMakerDomainKernelGatewayAppSettings;
  /**
   * A collection of settings that configure user interaction with the `RStudioServerPro` app.
   *
   * _Required_: No
   *
   * _Type_: [RStudioServerProAppSettings](aws-properties-sagemaker-domain-rstudioserverproappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RStudioServerProAppSettings?: SageMakerDomainRStudioServerProAppSettings;
  /**
   * A collection of settings that configure the `RSessionGateway` app.
   *
   * _Required_: No
   *
   * _Type_: [RSessionAppSettings](aws-properties-sagemaker-domain-rsessionappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RSessionAppSettings?: SageMakerDomainRSessionAppSettings;
  /**
   * The Jupyter server's app settings.
   *
   * _Required_: No
   *
   * _Type_: [JupyterServerAppSettings](aws-properties-sagemaker-domain-jupyterserverappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JupyterServerAppSettings?: SageMakerDomainJupyterServerAppSettings;
  /**
   * The execution role for the user.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRole: Value<string>;
  /**
   * Specifies options for sharing SageMaker Studio notebooks.
   *
   * _Required_: No
   *
   * _Type_: [SharingSettings](aws-properties-sagemaker-domain-sharingsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SharingSettings?: SageMakerDomainSharingSettings;
}

/**
 * A collection of settings that apply to an `RSessionGateway` app.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-rsessionappsettings.html}
 **/
export interface SageMakerDomainRSessionAppSettings {
  /**
   * A list of custom SageMaker images that are configured to run as a RSession app.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomImage](aws-properties-sagemaker-domain-customimage.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomImages?: List<SageMakerDomainCustomImage>;
  /**
   * Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
   *
   * _Required_: No
   *
   * _Type_: [ResourceSpec](aws-properties-sagemaker-domain-resourcespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultResourceSpec?: SageMakerDomainResourceSpec;
}

/**
 * A collection of settings that apply to spaces created in the Domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-defaultspacesettings.html}
 **/
export interface SageMakerDomainDefaultSpaceSettings {
  /**
   * The security groups for the Amazon Virtual Private Cloud that the space uses for communication.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The KernelGateway app settings.
   *
   * _Required_: No
   *
   * _Type_: [KernelGatewayAppSettings](aws-properties-sagemaker-domain-kernelgatewayappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KernelGatewayAppSettings?: SageMakerDomainKernelGatewayAppSettings;
  /**
   * The JupyterServer app settings.
   *
   * _Required_: No
   *
   * _Type_: [JupyterServerAppSettings](aws-properties-sagemaker-domain-jupyterserverappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JupyterServerAppSettings?: SageMakerDomainJupyterServerAppSettings;
  /**
   * The execution role for the space.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRole: Value<string>;
}

/**
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html}
 **/
export interface SageMakerDomainResourceSpec {
  /**
   * The ARN of the SageMaker image that the image version belongs to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^arn:aws(-[w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  SageMakerImageArn?: Value<string>;
  /**
   * The instance type that the image version runs on.
   *
   * **JupyterServer apps** only support the `system` value.
   *
   * For **KernelGateway apps**, the `system` value is translated to `ml.t3.medium`. KernelGateway apps also support all other values for available instance types.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ml.c5.12xlarge | ml.c5.18xlarge | ml.c5.24xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.large | ml.c5.xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.2xlarge | ml.g5.48xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.xlarge | ml.geospatial.interactive | ml.m5.12xlarge | ml.m5.16xlarge | ml.m5.24xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.8xlarge | ml.m5.large | ml.m5.xlarge | ml.m5d.12xlarge | ml.m5d.16xlarge | ml.m5d.24xlarge | ml.m5d.2xlarge | ml.m5d.4xlarge | ml.m5d.8xlarge | ml.m5d.large | ml.m5d.xlarge | ml.p3.16xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p3dn.24xlarge | ml.r5.12xlarge | ml.r5.16xlarge | ml.r5.24xlarge | ml.r5.2xlarge | ml.r5.4xlarge | ml.r5.8xlarge | ml.r5.large | ml.r5.xlarge | ml.t3.2xlarge | ml.t3.large | ml.t3.medium | ml.t3.micro | ml.t3.small | ml.t3.xlarge | system`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  InstanceType?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:aws[a-z-]*:sagemaker:[a-z0-9-]*:[0-9]{12}:studio-lifecycle-config/.*`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  LifecycleConfigArn?: Value<string>;
  /**
   * The ARN of the image version created on the instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^arn:aws(-[w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])*\/[0-9]+$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  SageMakerImageVersionArn?: Value<string>;
}

/**
 * A collection of settings that apply to the `SageMaker Domain`. These settings are specified through the `CreateDomain` API call.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-domainsettings.html}
 **/
export interface SageMakerDomainDomainSettings {
  /**
   * A collection of settings that configure the `RStudioServerPro` Domain-level app.
   *
   * _Required_: No
   *
   * _Type_: [RStudioServerProDomainSettings](aws-properties-sagemaker-domain-rstudioserverprodomainsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RStudioServerProDomainSettings?: SageMakerDomainRStudioServerProDomainSettings;
  /**
   * The security groups for the Amazon Virtual Private Cloud that the `Domain` uses for communication between Domain-level apps and user apps.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
}
export interface SageMakerDomainProperties {
  /**
   * Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly`.
   */
  AppNetworkAccessType?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [DefaultSpaceSettings](aws-properties-sagemaker-domain-defaultspacesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultSpaceSettings?: SageMakerDomainDefaultSpaceSettings;
  /**
   * SageMaker uses AWS KMS to encrypt the EFS volume attached to the Domain with an AWS managed customer master key (CMK) by default. For more control, specify a customer managed CMK.
   *
   * _Length Constraints_: Maximum length of 2048.
   *
   * _Pattern_: `.*`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The ID of the Amazon Virtual Private Cloud (Amazon VPC) that Studio uses for communication.
   *
   * _Length Constraints_: Maximum length of 32.
   *
   * _Pattern_: `[-0-9a-zA-Z]+`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId: Value<string>;
  /**
   * The domain name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName: Value<string>;
  /**
   * The entity that creates and manages the required security groups for inter-app communication in `VpcOnly` mode. Required when `CreateDomain.AppNetworkAccessType` is `VpcOnly` and `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppSecurityGroupManagement?: Value<string>;
  /**
   * The default user settings.
   *
   * _Required_: Yes
   *
   * _Type_: [UserSettings](aws-properties-sagemaker-domain-usersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultUserSettings: SageMakerDomainUserSettings;
  /**
   * The VPC subnets that Studio uses for communication.
   *
   * _Length Constraints_: Maximum length of 32.
   *
   * _Array members_: Minimum number of 1 item. Maximum number of 16 items.
   *
   * _Pattern_: `[-0-9a-zA-Z]+`
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds: List<Value<string>>;
  /**
   * The mode of authentication that members use to access the Domain.
   *
   * _Valid Values_: `SSO | IAM`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AuthMode: Value<string>;
  /**
   * Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
   *
   * Tags that you specify for the Domain are also added to all apps that are launched in the Domain.
   *
   * _Array members_: Minimum number of 0 items. Maximum number of 50 items.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
  /**
   * A collection of settings that apply to the `SageMaker Domain`. These settings are specified through the `CreateDomain` API call.
   *
   * _Required_: No
   *
   * _Type_: [DomainSettings](aws-properties-sagemaker-domain-domainsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainSettings?: SageMakerDomainDomainSettings;
}

/**
 * Creates a `Domain` used by Amazon SageMaker Studio. A domain consists of an associated Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.
 *
 * **EFS storage**
 *
 * When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.
 *
 * SageMaker uses the AWS Key Management Service (AWS KMS) to encrypt the EFS volume attached to the domain with an AWS managed key by default. For more control, you can specify a customer managed key. For more information, see [Protect Data at Rest Using Encryption](https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html).
 *
 * **VPC configuration**
 *
 * All SageMaker Studio traffic between the domain and the EFS volume is through the specified VPC and subnets. For other Studio traffic, you can specify the `AppNetworkAccessType` parameter. `AppNetworkAccessType` corresponds to the network access type that you choose when you onboard to Studio. The following options are available:
 *
 * When internet access is disabled, you won't be able to run a Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.
 *
 * **Important**
 *
 * NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully.
 *
 * For more information, see [Connect SageMaker Studio Notebooks to Resources in a VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html}
 */
export interface SageMakerDomainResource {
  Type: 'AWS::SageMaker::Domain';
  Properties: SageMakerDomainProperties;
}
