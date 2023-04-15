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
 * Details that you specify to provision a service catalog product. For information about service catalog, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisioningdetails.html}
 **/
export interface SageMakerProjectServiceCatalogProvisioningDetails {
  /**
   * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z0-9_-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PathId?: Value<string>;
  /**
   * A list of key value pairs that you specify when you provision a product.
   *
   * _Required_: No
   *
   * _Type_: List of [ProvisioningParameter](aws-properties-sagemaker-project-provisioningparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProvisioningParameters?: List<SageMakerProjectProvisioningParameter>;
  /**
   * The ID of the product to provision.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z0-9_-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProductId: Value<string>;
  /**
   * The ID of the provisioning artifact.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z0-9_-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProvisioningArtifactId?: Value<string>;
}

/**
 * A key value pair used when you provision a project as a service catalog product. For information, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-provisioningparameter.html}
 **/
export interface SageMakerProjectProvisioningParameter {
  /**
   * The value of the provisioning parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<string>;
  /**
   * The key that identifies a provisioning parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key: Value<string>;
}

/**
 * Details of a provisioned service catalog product. For information about service catalog, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-project-servicecatalogprovisionedproductdetails.html}
 **/
export interface SageMakerProjectServiceCatalogProvisionedProductDetails {
  /**
   * The current status of the product.
   */
  ProvisionedProductStatusMessage?: Value<string>;
  /**
   * The ID of the provisioned product.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z0-9_-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedProductId?: Value<string>;
}
export interface SageMakerProjectProperties {
  /**
   * The name of the project.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,31}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProjectName: Value<string>;
  /**
   * The product ID and provisioning artifact ID to provision a service catalog. For information, see [What is AWS Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
   *
   * _Required_: Yes
   *
   * _Type_: [ServiceCatalogProvisioningDetails](aws-properties-sagemaker-project-servicecatalogprovisioningdetails.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceCatalogProvisioningDetails: SageMakerProjectServiceCatalogProvisioningDetails;
  /**
   * The description of the project.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[p{L}p{M}p{Z}p{S}p{N}p{P}]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProjectDescription?: Value<string>;
  /**
   * A list of key-value pairs to apply to this resource.
   *
   * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the _ AWS Billing and Cost Management User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html}
 */
export interface SageMakerProjectResource {
  Type: 'AWS::SageMaker::Project';
  Properties: SageMakerProjectProperties;
}
