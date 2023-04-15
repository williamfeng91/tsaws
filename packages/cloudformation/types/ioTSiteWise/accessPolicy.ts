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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The AWS IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyresource.html}
 **/
export interface IoTSiteWiseAccessPolicyAccessPolicyResource {
  /**
   * The AWS IoT SiteWise Monitor project for this access policy.
   *
   * _Required_: No
   *
   * _Type_: [Project](aws-properties-iotsitewise-accesspolicy-project.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Project?: IoTSiteWiseAccessPolicyProject;
  /**
   * The AWS IoT SiteWise Monitor portal for this access policy.
   *
   * _Required_: No
   *
   * _Type_: [Portal](aws-properties-iotsitewise-accesspolicy-portal.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Portal?: IoTSiteWiseAccessPolicyPortal;
}

/**
 * Contains information about an AWS Identity and Access Management user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamuser.html}
 **/
export interface IoTSiteWiseAccessPolicyIamUser {
  /**
   * The ARN of the IAM user. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the _IAM User Guide_.
   *
   * If you delete the IAM user, access policies that contain this identity include an empty `arn`. You can delete the access policy for the IAM user that no longer exists.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  arn?: Value<string>;
}

/**
 * The `Portal` property type specifies the AWS IoT SiteWise Monitor portal for an [AWS::IoTSiteWise::AccessPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-portal.html}
 **/
export interface IoTSiteWiseAccessPolicyPortal {
  /**
   * The ID of the portal.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  id?: Value<string>;
}

/**
 * The `Project` property type specifies the AWS IoT SiteWise Monitor project for an [AWS::IoTSiteWise::AccessPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-project.html}
 **/
export interface IoTSiteWiseAccessPolicyProject {
  /**
   * The ID of the project.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  id?: Value<string>;
}

/**
 * Contains information about an AWS Identity and Access Management role. For more information, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the _IAM User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-iamrole.html}
 **/
export interface IoTSiteWiseAccessPolicyIamRole {
  /**
   * The ARN of the IAM role. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the _IAM User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  arn?: Value<string>;
}

/**
 * The `User` property type specifies the AWS IoT SiteWise Monitor user for an [AWS::IoTSiteWise::AccessPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-user.html}
 **/
export interface IoTSiteWiseAccessPolicyUser {
  /**
   * The ID of the user.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  id?: Value<string>;
}

/**
 * The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy applies.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.html}
 **/
export interface IoTSiteWiseAccessPolicyAccessPolicyIdentity {
  /**
   * The IAM Identity Center user to which this access policy maps.
   *
   * _Required_: No
   *
   * _Type_: [User](aws-properties-iotsitewise-accesspolicy-user.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  User?: IoTSiteWiseAccessPolicyUser;
  /**
   * An IAM user identity.
   *
   * _Required_: No
   *
   * _Type_: [IamUser](aws-properties-iotsitewise-accesspolicy-iamuser.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamUser?: IoTSiteWiseAccessPolicyIamUser;
  /**
   * An IAM role identity.
   *
   * _Required_: No
   *
   * _Type_: [IamRole](aws-properties-iotsitewise-accesspolicy-iamrole.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamRole?: IoTSiteWiseAccessPolicyIamRole;
}
export interface IoTSiteWiseAccessPolicyProperties {
  /**
   * The AWS IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.
   *
   * _Required_: Yes
   *
   * _Type_: [AccessPolicyResource](aws-properties-iotsitewise-accesspolicy-accesspolicyresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessPolicyResource: IoTSiteWiseAccessPolicyAccessPolicyResource;
  /**
   * The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.
   *
   * _Required_: Yes
   *
   * _Type_: [AccessPolicyIdentity](aws-properties-iotsitewise-accesspolicy-accesspolicyidentity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessPolicyIdentity: IoTSiteWiseAccessPolicyAccessPolicyIdentity;
  /**
   * The permission level for this access policy. Choose either a `ADMINISTRATOR` or `VIEWER`. Note that a project `ADMINISTRATOR` is also known as a project owner.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessPolicyPermission: Value<string>;
}

/**
 * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified AWS IoT SiteWise Monitor portal or project resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-accesspolicy.html}
 */
export interface IoTSiteWiseAccessPolicyResource {
  Type: 'AWS::IoTSiteWise::AccessPolicy';
  Properties: IoTSiteWiseAccessPolicyProperties;
}
