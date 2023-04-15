/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html}
 **/
export interface OpenSearchServerlessSecurityConfigSamlConfigOptions {
  /**
   * The session timeout, in minutes. Default is 60 minutes (12 hours).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionTimeout?: Value<number>;
  /**
   * A user attribute for this SAML integration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserAttribute?: Value<string>;
  /**
   * The XML IdP metadata file generated from your identity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metadata: Value<string>;
  /**
   * The group attribute for this SAML integration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupAttribute?: Value<string>;
}
export interface OpenSearchServerlessSecurityConfigProperties {
  /**
   * The type of security configuration. Currently the only option is `saml`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * The description of the security configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * SAML options for the security configuration in the form of a key-value map.
   *
   * _Required_: No
   *
   * _Type_: [SamlConfigOptions](aws-properties-opensearchserverless-securityconfig-samlconfigoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamlOptions?: OpenSearchServerlessSecurityConfigSamlConfigOptions;
  /**
   * The name of the security configuration.
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
 * Specifies a security configuration for OpenSearch Serverless. For more information, see [SAML authentication for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html}
 */
export interface OpenSearchServerlessSecurityConfigResource {
  Type: 'AWS::OpenSearchServerless::SecurityConfig';
  Properties: OpenSearchServerlessSecurityConfigProperties;
}
