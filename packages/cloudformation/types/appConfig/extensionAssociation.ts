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

export interface AppConfigExtensionAssociationProperties {
  ResourceIdentifier?: Value<string>;
  Parameters?: { [key: string]: Value<string> };
  ExtensionIdentifier?: Value<string>;
  ExtensionVersionNumber?: Value<number>;
  Tags?: List<ResourceTag>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html}
 */
export interface AppConfigExtensionAssociationResource {
  Type: 'AWS::AppConfig::ExtensionAssociation';
  Properties: AppConfigExtensionAssociationProperties;
}