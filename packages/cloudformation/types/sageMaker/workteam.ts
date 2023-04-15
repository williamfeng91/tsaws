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
 * A list of user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of `Groups`, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-oidcmemberdefinition.html}
 **/
export interface SageMakerWorkteamOidcMemberDefinition {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OidcGroups: List<Value<string>>;
}

/**
 * Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-cognitomemberdefinition.html}
 **/
export interface SageMakerWorkteamCognitoMemberDefinition {
  /**
   * An identifier for a user pool. The user pool must be in the same region as the service that you are calling.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CognitoUserPool: Value<string>;
  /**
   * An identifier for an application client. You must create the app client ID using Amazon Cognito.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoClientId: Value<string>;
  /**
   * An identifier for a user group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoUserGroup: Value<string>;
}

/**
 * Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-memberdefinition.html}
 **/
export interface SageMakerWorkteamMemberDefinition {
  /**
   * A list user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of `Groups`, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
   *
   * _Required_: No
   *
   * _Type_: [OidcMemberDefinition](aws-properties-sagemaker-workteam-oidcmemberdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OidcMemberDefinition?: SageMakerWorkteamOidcMemberDefinition;
  /**
   * The Amazon Cognito user group that is part of the work team.
   *
   * _Required_: No
   *
   * _Type_: [CognitoMemberDefinition](aws-properties-sagemaker-workteam-cognitomemberdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoMemberDefinition?: SageMakerWorkteamCognitoMemberDefinition;
}

/**
 * Configures Amazon SNS notifications of available or expiring work items for work teams.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-workteam-notificationconfiguration.html}
 **/
export interface SageMakerWorkteamNotificationConfiguration {
  /**
   * The ARN for the Amazon SNS topic to which notifications should be published.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `arn:aws[a-z-]*:sns:[a-z0-9-]*:[0-9]{12}:[a-zA-Z0-9_.-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationTopicArn: Value<string>;
}
export interface SageMakerWorkteamProperties {
  /**
   * A description of the work team.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Configures SNS notifications of available or expiring work items for work teams.
   *
   * _Required_: No
   *
   * _Type_: [NotificationConfiguration](aws-properties-sagemaker-workteam-notificationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationConfiguration?: SageMakerWorkteamNotificationConfiguration;
  /**
   * The name of the work team.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkteamName?: Value<string>;
  /**
   * A list of `MemberDefinition` objects that contains objects that identify the workers that make up the work team.
   *
   * Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `CognitoMemberDefinition`. For workforces created using your own OIDC identity provider (IdP) use `OidcMemberDefinition`.
   *
   * _Required_: No
   *
   * _Type_: List of [MemberDefinition](aws-properties-sagemaker-workteam-memberdefinition.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemberDefinitions?: List<SageMakerWorkteamMemberDefinition>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkforceName?: Value<string>;
  /**
   * An array of key-value pairs.
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
 * Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.
 *
 * You cannot create more than 25 work teams in an account and region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-workteam.html}
 */
export interface SageMakerWorkteamResource {
  Type: 'AWS::SageMaker::Workteam';
  Properties: SageMakerWorkteamProperties;
}
