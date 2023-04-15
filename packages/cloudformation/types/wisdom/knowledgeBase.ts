/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Configuration information for Amazon AppIntegrations to automatically ingest content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.html}
 **/
export interface WisdomKnowledgeBaseAppIntegrationsConfiguration {
  /**
   * The fields from the source that are made available to your agents in Wisdom. Optional if ObjectConfiguration is included in the provided DataIntegration.
   */
  ObjectFields?: List<Value<string>>;
  /**
   * The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.
   */
  AppIntegrationArn: Value<string>;
}

/**
 * The KMS key used for encryption.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration.html}
 **/
export interface WisdomKnowledgeBaseServerSideEncryptionConfiguration {
  /**
   * The KMS key. For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) in the _AWS Key Management Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
}

/**
 * Configuration information about the external data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-sourceconfiguration.html}
 **/
export interface WisdomKnowledgeBaseSourceConfiguration {
  /**
   * Configuration information for Amazon AppIntegrations to automatically ingest content.
   *
   * _Required_: Yes
   *
   * _Type_: [AppIntegrationsConfiguration](aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AppIntegrations: WisdomKnowledgeBaseAppIntegrationsConfiguration;
}

/**
 * Information about how to render the content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-knowledgebase-renderingconfiguration.html}
 **/
export interface WisdomKnowledgeBaseRenderingConfiguration {
  /**
   * A URI template containing exactly one variable in `${variableName} `format. This can only be set for `EXTERNAL` knowledge bases. For Salesforce, ServiceNow, and Zendesk, the variable must be one of the following:
   */
  TemplateUri?: Value<string>;
}
export interface WisdomKnowledgeBaseProperties {
  /**
   * The description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9s_.,-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CUSTOM | EXTERNAL`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KnowledgeBaseType: Value<string>;
  /**
   * The source of the knowledge base content. Only set this argument for EXTERNAL knowledge bases.
   *
   * _Required_: No
   *
   * _Type_: [SourceConfiguration](aws-properties-wisdom-knowledgebase-sourceconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceConfiguration?: WisdomKnowledgeBaseSourceConfiguration;
  /**
   * The KMS key used for encryption.
   *
   * _Required_: No
   *
   * _Type_: [ServerSideEncryptionConfiguration](aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServerSideEncryptionConfiguration?: WisdomKnowledgeBaseServerSideEncryptionConfiguration;
  /**
   * Information about how to render the content.
   *
   * _Required_: No
   *
   * _Type_: [RenderingConfiguration](aws-properties-wisdom-knowledgebase-renderingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RenderingConfiguration?: WisdomKnowledgeBaseRenderingConfiguration;
  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the knowledge base.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9s_.,-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Specifies a knowledge base.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html}
 */
export interface WisdomKnowledgeBaseResource {
  Type: 'AWS::Wisdom::KnowledgeBase';
  Properties: WisdomKnowledgeBaseProperties;
}
