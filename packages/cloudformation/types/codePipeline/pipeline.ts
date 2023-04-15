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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-blockers.html}
 **/
export interface CodePipelinePipelineBlockerDeclaration {
  Name: Value<string>;
  Type: Value<string>;
}

/**
 * A mapping of `artifactStore` objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
 *
 * **Note**
 *
 * You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstoremap.html}
 **/
export interface CodePipelinePipelineArtifactStoreMap {
  /**
   * Represents information about the S3 bucket where artifacts are stored for the pipeline.
   *
   * You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
   *
   * _Required_: Conditional
   *
   * _Type_: [ArtifactStore](aws-properties-codepipeline-pipeline-artifactstore.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArtifactStore: CodePipelinePipelineArtifactStore;
  /**
   * The action declaration's AWS Region, such as us-east-1.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore-encryptionkey.html}
 **/
export interface CodePipelinePipelineEncryptionKey {
  Id: Value<string>;
  Type: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions.html}
 **/
export interface CodePipelinePipelineActionDeclaration {
  ActionTypeId: CodePipelinePipelineActionTypeId;
  Configuration?: { [key: string]: any };
  InputArtifacts?: List<CodePipelinePipelineInputArtifact>;
  Name: Value<string>;
  Namespace?: Value<string>;
  OutputArtifacts?: List<CodePipelinePipelineOutputArtifact>;
  Region?: Value<string>;
  RoleArn?: Value<string>;
  RunOrder?: Value<number>;
}

/**
 * The S3 bucket where artifacts for the pipeline are stored.
 *
 * **Note**
 *
 * You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html}
 **/
export interface CodePipelinePipelineArtifactStore {
  /**
   * The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If this is undefined, the default key for Amazon S3 is used. To see an example artifact store encryption key field, see the example structure here: [AWS::CodePipeline::Pipeline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html).
   *
   * _Required_: No
   *
   * _Type_: [EncryptionKey](aws-properties-codepipeline-pipeline-artifactstore-encryptionkey.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionKey?: CodePipelinePipelineEncryptionKey;
  /**
   * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[a-zA-Z0-9-.]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Location: Value<string>;
  /**
   * The type of the artifact store, such as S3.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `S3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-outputartifacts.html}
 **/
export interface CodePipelinePipelineOutputArtifact {
  Name: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-disableinboundstagetransitions.html}
 **/
export interface CodePipelinePipelineStageTransition {
  Reason: Value<string>;
  StageName: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-inputartifacts.html}
 **/
export interface CodePipelinePipelineInputArtifact {
  Name: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages.html}
 **/
export interface CodePipelinePipelineStageDeclaration {
  Actions: List<CodePipelinePipelineActionDeclaration>;
  Blockers?: List<CodePipelinePipelineBlockerDeclaration>;
  Name: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-stages-actions-actiontypeid.html}
 **/
export interface CodePipelinePipelineActionTypeId {
  Category: Value<string>;
  Owner: Value<string>;
  Provider: Value<string>;
  Version: Value<string>;
}
export interface CodePipelinePipelineProperties {
  /**
   * The S3 bucket where artifacts for the pipeline are stored.
   *
   * You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
   *
   * _Required_: Conditional
   *
   * _Type_: [ArtifactStore](aws-properties-codepipeline-pipeline-artifactstore.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArtifactStore?: CodePipelinePipelineArtifactStore;
  /**
   * A mapping of `artifactStore` objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
   *
   * You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [ArtifactStoreMap](aws-properties-codepipeline-pipeline-artifactstoremap.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArtifactStores?: List<CodePipelinePipelineArtifactStoreMap>;
  /**
   * Represents the input of a `DisableStageTransition` action.
   *
   * _Required_: No
   *
   * _Type_: List of [StageTransition](aws-properties-codepipeline-pipeline-disableinboundstagetransitions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableInboundStageTransitions?: List<CodePipelinePipelineStageTransition>;
  /**
   * The name of the pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[A-Za-z0-9.@-_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * Indicates whether to rerun the CodePipeline pipeline after you update it.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestartExecutionOnUpdate?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no `actionRoleArn`, or to use to assume roles for actions with an `actionRoleArn`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `arn:aws(-[w]+)*:iam::[0-9]{12}:role/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * Represents information about a stage and its definition.
   *
   * _Required_: Yes
   *
   * _Type_: List of [StageDeclaration](aws-properties-codepipeline-pipeline-stages.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stages: List<CodePipelinePipelineStageDeclaration>;
  /**
   * Specifies the tags applied to the pipeline.
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
 * The `AWS::CodePipeline::Pipeline` resource creates a CodePipeline pipeline that describes how software changes go through a release process. For more information, see [What Is CodePipeline?](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html) in the _AWS CodePipeline User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html}
 */
export interface CodePipelinePipelineResource {
  Type: 'AWS::CodePipeline::Pipeline';
  Properties: CodePipelinePipelineProperties;
}
