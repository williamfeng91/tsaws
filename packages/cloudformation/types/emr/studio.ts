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

export interface EMRStudioProperties {
  /**
   * The ID of the Workspace security group associated with the Amazon EMR Studio. The Workspace security group allows outbound network traffic to resources in the Engine security group and to the internet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkspaceSecurityGroupId: Value<string>;
  /**
   * A detailed description of the Amazon EMR Studio.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The Amazon S3 location to back up EMR Studio Workspaces and notebook files.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10280`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultS3Location: Value<string>;
  /**
   * A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by `VpcId`. Studio users can create a Workspace in any of the specified subnets.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds: List<Value<string>>;
  /**
   * Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10280`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdpAuthUrl?: Value<string>;
  /**
   * A descriptive name for the Amazon EMR Studio.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10280`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceRole: Value<string>;
  /**
   * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId: Value<string>;
  /**
   * The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by `VpcId`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineSecurityGroupId: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies. You only need to specify `UserRole` when you set `AuthMode` to `SSO`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10280`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserRole?: Value<string>;
  /**
   * The name of your identity provider's `RelayState` parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdpRelayStateParameterName?: Value<string>;
  /**
   * Specifies whether the Studio authenticates users using IAM Identity Center or IAM.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `IAM | SSO`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AuthMode: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::EMR::Studio` resource specifies an Amazon EMR Studio. An EMR Studio is a web-based, integrated development environment for fully managed Jupyter notebooks that run on Amazon EMR clusters. For more information, see the [https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html}
 */
export interface EMRStudioResource {
  Type: 'AWS::EMR::Studio';
  Properties: EMRStudioProperties;
}
