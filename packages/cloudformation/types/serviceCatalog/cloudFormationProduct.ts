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
 * A top level `ProductViewDetail` response containing details about the product’s connection. AWS Service Catalog returns this field for the `CreateProduct`, `UpdateProduct`, `DescribeProductAsAdmin`, and `SearchProductAsAdmin` APIs. This response contains the same fields as the `ConnectionParameters` request, with the addition of the `LastSync` response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection.html}
 **/
export interface ServiceCatalogCloudFormationProductSourceConnection {
  /**
   * The only supported `SourceConnection` type is Codestar.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The connection details based on the connection `Type`.
   *
   * _Required_: Yes
   *
   * _Type_: [ConnectionParameters](aws-properties-servicecatalog-cloudformationproduct-sourceconnection-connectionparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionParameters: ServiceCatalogCloudFormationProductConnectionParameters;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-sourceconnection-connectionparameters.html}
 **/
export interface ServiceCatalogCloudFormationProductConnectionParameters {
  CodeStar?: ServiceCatalogCloudFormationProductCodeStarParameters;
}

/**
 * Information about a provisioning artifact (also known as a version) for a product.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.html}
 **/
export interface ServiceCatalogCloudFormationProductProvisioningArtifactProperties {
  /**
   * The type of provisioning artifact.
   */
  Type?: Value<string>;
  /**
   * The description of the provisioning artifact, including how it differs from the previous provisioning artifact.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `8192`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableTemplateValidation?: Value<boolean>;
  /**
   * Specify the template source with one of the following options, but not both. Keys accepted: [ `LoadTemplateFromURL`, `ImportFromPhysicalId` ]
   *
   * The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:
   *
   * `"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."`
   *
   * `ImportFromPhysicalId`: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: `ImportFromPhysicalId: “arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]`
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Info: { [key: string]: any };
  /**
   * The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `8192`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The subtype containing details about the Codestar connection `Type`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationproduct-codestarparameters.html}
 **/
export interface ServiceCatalogCloudFormationProductCodeStarParameters {
  /**
   * The absolute path wehre the artifact resides within the repo and branch, formatted as "folder/file.json."
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArtifactPath: Value<string>;
  /**
   * The specific repository where the product’s artifact-to-be-synced resides, formatted as "Account/Repo."
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Repository: Value<string>;
  /**
   * The specific branch where the artifact resides.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `250`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Branch: Value<string>;
  /**
   * The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1224`
   *
   * _Pattern_: `arn:[a-z0-9][-.a-z0-9]{0,62}:codestar-connections:([a-z0-9][-.a-z0-9]{0,62})?:([a-z0-9][-.a-z0-9]{0,62})?:[^/].{0,1023}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionArn: Value<string>;
}
export interface ServiceCatalogCloudFormationProductProperties {
  /**
   * The owner of the product.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `8191`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Owner: Value<string>;
  /**
   * The description of the product.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `8191`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The contact email for product support.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `254`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportEmail?: Value<string>;
  /**
   * The type of product.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CLOUD_FORMATION_TEMPLATE | MARKETPLACE | TERRAFORM_OPEN_SOURCE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProductType?: Value<string>;
  /**
   * The name of the product.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `8191`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * This property is turned off by default. If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.
   *
   * If turned on, provisioning artifacts will be given a new unique identifier when you update the product or provisioning artifacts.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplaceProvisioningArtifacts?: Value<boolean>;
  /**
   * The support information about the product.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `8191`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportDescription?: Value<string>;
  /**
   * The distributor of the product.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `8191`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Distributor?: Value<string>;
  /**
   * The language code.
   */
  AcceptLanguage?: Value<string>;
  /**
   * The contact URL for product support.
   *
   * `^https?:/// `/ is the pattern used to validate SupportUrl.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2083`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportUrl?: Value<string>;
  /**
   * A top level `ProductViewDetail` response containing details about the product’s connection. AWS Service Catalog returns this field for the `CreateProduct`, `UpdateProduct`, `DescribeProductAsAdmin`, and `SearchProductAsAdmin` APIs. This response contains the same fields as the `ConnectionParameters` request, with the addition of the `LastSync` response.
   *
   * _Required_: No
   *
   * _Type_: [SourceConnection](aws-properties-servicecatalog-cloudformationproduct-sourceconnection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceConnection?: ServiceCatalogCloudFormationProductSourceConnection;
  /**
   * One or more tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The configuration of the provisioning artifact (also known as a version).
   *
   * _Required_: No
   *
   * _Type_: List of [ProvisioningArtifactProperties](aws-properties-servicecatalog-cloudformationproduct-provisioningartifactproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisioningArtifactParameters?: List<ServiceCatalogCloudFormationProductProvisioningArtifactProperties>;
}

/**
 * Specifies a product.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationproduct.html}
 */
export interface ServiceCatalogCloudFormationProductResource {
  Type: 'AWS::ServiceCatalog::CloudFormationProduct';
  Properties: ServiceCatalogCloudFormationProductProperties;
}
