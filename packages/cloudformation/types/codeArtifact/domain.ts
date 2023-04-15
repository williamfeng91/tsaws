/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface CodeArtifactDomainProperties {
  /**
   * The document that defines the resource policy that is set on a domain.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PermissionsPolicyDocument?: { [key: string]: any };
  /**
   * A string that specifies the name of the requested domain.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `[a-z][a-z0-9-]{0,48}[a-z0-9]`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName: Value<string>;
  /**
   * A list of tags to be applied to the domain.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The key used to encrypt the domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionKey?: Value<string>;
}

/**
 * The `AWS::CodeArtifact::Domain` resource creates an AWS CodeArtifact domain. CodeArtifact _domains_ make it easier to manage multiple repositories across an organization. You can use a domain to apply permissions across many repositories owned by different AWS accounts. For more information about domains, see the [Domain concepts information](https://docs.aws.amazon.com/codeartifact/latest/ug/codeartifact-concepts.html#welcome-concepts-domain) in the _CodeArtifact User Guide_. For more information about the `CreateDomain` API, see [CreateDomain](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateDomain.html) in the _CodeArtifact API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html}
 */
export interface CodeArtifactDomainResource {
  Type: 'AWS::CodeArtifact::Domain';
  Properties: CodeArtifactDomainProperties;
}
