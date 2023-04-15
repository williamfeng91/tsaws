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
 * Returns information about the details of an artifact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-artifactdetails.html}
 **/
export interface CodePipelineCustomActionTypeArtifactDetails {
  /**
   * The minimum number of artifacts allowed for the action type.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinimumCount: Value<number>;
  /**
   * The maximum number of artifacts allowed for the action type.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaximumCount: Value<number>;
}

/**
 * The configuration properties for the custom action.
 *
 * **Note**
 *
 * You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see [Create a Custom Action for a Pipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-configurationproperties.html}
 **/
export interface CodePipelineCustomActionTypeConfigurationProperties {
  /**
   * Whether the configuration property is secret. Secrets are hidden from all calls except for `GetJobDetails`, `GetThirdPartyJobDetails`, `PollForJobs`, and `PollForThirdPartyJobs`.
   *
   * When updating a pipeline, passing * * * * * without changing any other values of the action preserves the previous value of the secret.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Secret: Value<boolean>;
  /**
   * The type of the configuration property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Boolean | Number | String`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * The description of the action configuration property that is displayed to users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `160`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * Whether the configuration property is a required value.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Required: Value<boolean>;
  /**
   * Indicates that the property is used with `PollForJobs`. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.
   *
   * If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Queryable?: Value<boolean>;
  /**
   * Whether the configuration property is a key.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key: Value<boolean>;
  /**
   * The name of the action configuration property.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * `Settings` is a property of the `AWS::CodePipeline::CustomActionType` resource that provides URLs that users can access to view information about the CodePipeline custom action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-customactiontype-settings.html}
 **/
export interface CodePipelineCustomActionTypeSettings {
  /**
   * The URL returned to the CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for a CodeDeploy deployment group. This link is provided as part of the action display in the pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EntityUrlTemplate?: Value<string>;
  /**
   * The URL returned to the CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for CodeDeploy. This link is shown on the pipeline view page in the CodePipeline console and provides a link to the execution entity of the external action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExecutionUrlTemplate?: Value<string>;
  /**
   * The URL returned to the CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RevisionUrlTemplate?: Value<string>;
  /**
   * The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThirdPartyConfigurationUrl?: Value<string>;
}
export interface CodePipelineCustomActionTypeProperties {
  /**
   * The category of the custom action, such as a build action or a test action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Approval | Build | Deploy | Invoke | Source | Test`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Category: Value<string>;
  /**
   * The details of the input artifact for the action, such as its commit ID.
   *
   * _Required_: Yes
   *
   * _Type_: [ArtifactDetails](aws-properties-codepipeline-customactiontype-artifactdetails.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputArtifactDetails: CodePipelineCustomActionTypeArtifactDetails;
  /**
   * The version identifier of the custom action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `9`
   *
   * _Pattern_: `[0-9A-Za-z_-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Version: Value<string>;
  /**
   * The details of the output artifact of the action, such as its commit ID.
   *
   * _Required_: Yes
   *
   * _Type_: [ArtifactDetails](aws-properties-codepipeline-customactiontype-artifactdetails.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutputArtifactDetails: CodePipelineCustomActionTypeArtifactDetails;
  /**
   * The configuration properties for the custom action.
   *
   * You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see [Create a Custom Action for a Pipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html).
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-codepipeline-customactiontype-configurationproperties.md) of [ConfigurationProperties](aws-properties-codepipeline-customactiontype-configurationproperties.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationProperties?: List<CodePipelineCustomActionTypeConfigurationProperties>;
  /**
   * URLs that provide users information about this custom action.
   *
   * _Required_: No
   *
   * _Type_: [Settings](aws-properties-codepipeline-customactiontype-settings.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Settings?: CodePipelineCustomActionTypeSettings;
  /**
   * The tags for the custom action.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The provider of the service used in the custom action, such as CodeDeploy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `35`
   *
   * _Pattern_: `[0-9A-Za-z_-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Provider: Value<string>;
}

/**
 * The `AWS::CodePipeline::CustomActionType` resource creates a custom action for activities that aren't included in the CodePipeline default actions, such as running an internally developed build process or a test suite. You can use these custom actions in the stage of a pipeline. For more information, see [Create and Add a Custom Action in AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/how-to-create-custom-action.html) in the _AWS CodePipeline User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-customactiontype.html}
 */
export interface CodePipelineCustomActionTypeResource {
  Type: 'AWS::CodePipeline::CustomActionType';
  Properties: CodePipelineCustomActionTypeProperties;
}
