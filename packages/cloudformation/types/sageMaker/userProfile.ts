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
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html}
 **/
export interface SageMakerUserProfileResourceSpec {
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType?: Value<string>;
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SageMakerImageVersionArn?: Value<string>;
}

/**
 * The KernelGateway app settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html}
 **/
export interface SageMakerUserProfileKernelGatewayAppSettings {
  /**
   * A list of custom SageMaker images that are configured to run as a KernelGateway app.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomImage](aws-properties-sagemaker-userprofile-customimage.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomImages?: List<SageMakerUserProfileCustomImage>;
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
   *
   * The Amazon SageMaker Studio UI does not use the default instance type value set here. The default instance type set here is used when Apps are created using the AWS Command Line Interface or AWS CloudFormation and the instance type parameter value is not passed.
   *
   * _Required_: No
   *
   * _Type_: [ResourceSpec](aws-properties-sagemaker-userprofile-resourcespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultResourceSpec?: SageMakerUserProfileResourceSpec;
}

/**
 * A custom SageMaker image. For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html}
 **/
export interface SageMakerUserProfileCustomImage {
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
 * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called, and as `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called.
 *
 * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings`, the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html}
 **/
export interface SageMakerUserProfileUserSettings {
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
   * _Type_: [KernelGatewayAppSettings](aws-properties-sagemaker-userprofile-kernelgatewayappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KernelGatewayAppSettings?: SageMakerUserProfileKernelGatewayAppSettings;
  /**
   * A collection of settings that configure user interaction with the `RStudioServerPro` app.
   *
   * _Required_: No
   *
   * _Type_: [RStudioServerProAppSettings](aws-properties-sagemaker-userprofile-rstudioserverproappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RStudioServerProAppSettings?: SageMakerUserProfileRStudioServerProAppSettings;
  /**
   * The Jupyter server's app settings.
   *
   * _Required_: No
   *
   * _Type_: [JupyterServerAppSettings](aws-properties-sagemaker-userprofile-jupyterserverappsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JupyterServerAppSettings?: SageMakerUserProfileJupyterServerAppSettings;
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
  ExecutionRole?: Value<string>;
  /**
   * Specifies options for sharing SageMaker Studio notebooks.
   *
   * _Required_: No
   *
   * _Type_: [SharingSettings](aws-properties-sagemaker-userprofile-sharingsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SharingSettings?: SageMakerUserProfileSharingSettings;
}

/**
 * The JupyterServer app settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html}
 **/
export interface SageMakerUserProfileJupyterServerAppSettings {
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app.
   *
   * _Required_: No
   *
   * _Type_: [ResourceSpec](aws-properties-sagemaker-userprofile-resourcespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultResourceSpec?: SageMakerUserProfileResourceSpec;
}

/**
 * A collection of settings that configure user interaction with the `RStudioServerPro` app. `RStudioServerProAppSettings` cannot be updated. The `RStudioServerPro` app must be deleted and a new one created to make any changes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-rstudioserverproappsettings.html}
 **/
export interface SageMakerUserProfileRStudioServerProAppSettings {
  /**
   * Indicates whether the current user has access to the `RStudioServerPro` app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserGroup?: Value<string>;
}

/**
 * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called, and as part of `UserSettings` when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html}
 **/
export interface SageMakerUserProfileSharingSettings {
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
export interface SageMakerUserProfileProperties {
  /**
   * The domain ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainId: Value<string>;
  /**
   * The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is IAM Identity Center, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SingleSignOnUserValue?: Value<string>;
  /**
   * A collection of settings that apply to users of Amazon SageMaker Studio.
   *
   * _Required_: No
   *
   * _Type_: [UserSettings](aws-properties-sagemaker-userprofile-usersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserSettings?: SageMakerUserProfileUserSettings;
  /**
   * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is IAM Identity Center, this field is required. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SingleSignOnUserIdentifier?: Value<string>;
  /**
   * The user profile name.
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
  UserProfileName: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * Tags that you specify for the User Profile are also added to all apps that the User Profile launches.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
 * Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
 *
 * **Note**
 *
 * If you're using IAM Identity Center authentication, a user in IAM Identity Center, or a group in IAM Identity Center containing that user, must be assigned to the Amazon SageMaker Studio application from the IAM Identity Center Console to create a user profile. For more information about application assignment, see [Assign user access](singlesignon/latest/userguide/assignuserstoapp.html). After assignment is complete, a user profile can be created for that user in IAM Identity Center with AWS CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html}
 */
export interface SageMakerUserProfileResource {
  Type: 'AWS::SageMaker::UserProfile';
  Properties: SageMakerUserProfileProperties;
}
