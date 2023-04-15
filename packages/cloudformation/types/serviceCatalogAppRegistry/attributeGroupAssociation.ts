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

export interface ServiceCatalogAppRegistryAttributeGroupAssociationProperties {
  /**
   * The name or ID of the attribute group that holds the attributes to describe the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeGroup: Value<string>;
  /**
   * The name or ID of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Application: Value<string>;
}

/**
 * Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html}
 */
export interface ServiceCatalogAppRegistryAttributeGroupAssociationResource {
  Type: 'AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation';
  Properties: ServiceCatalogAppRegistryAttributeGroupAssociationProperties;
}
