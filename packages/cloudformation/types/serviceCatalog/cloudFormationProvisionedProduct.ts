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
 * Information about a parameter used to provision a product.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningparameter.html}
 **/
export interface ServiceCatalogCloudFormationProvisionedProductProvisioningParameter {
  /**
   * The parameter value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The parameter key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type
 *
 * One or more AWS accounts that will have access to the provisioned product.
 *
 * Applicable only to a `CFN_STACKSET` provisioned product type.
 *
 * The AWS accounts specified should be within the list of accounts in the `STACKSET` constraint. To get the list of accounts in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
 *
 * If no values are specified, the default value is all accounts from the `STACKSET` constraint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html}
 **/
export interface ServiceCatalogCloudFormationProvisionedProductProvisioningPreferences {
  /**
   * One or more AWS accounts where the provisioned product will be available.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * The specified accounts should be within the list of accounts from the `STACKSET` constraint. To get the list of accounts in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
   *
   * If no values are specified, the default value is all acounts from the `STACKSET` constraint.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetAccounts?: List<Value<string>>;
  /**
   * The number of accounts, per Region, for which this operation can fail before AWS Service Catalog stops the operation in that Region. If the operation is stopped in a Region, AWS Service Catalog doesn't attempt the operation in any subsequent Regions.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage`, but not both.
   *
   * The default value is `0` if no value is specified.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetFailureToleranceCount?: Value<number>;
  /**
   * The maximum percentage of accounts in which to perform this operation at one time.
   *
   * When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as `1` instead.
   *
   * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage`, but not both.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetMaxConcurrencyPercentage?: Value<number>;
  /**
   * The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of `StackSetFailureToleranceCount`. `StackSetMaxConcurrentCount` is at most one more than the `StackSetFailureToleranceCount`.
   *
   * Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetMaxConcurrentCount` or `StackSetMaxConcurrentPercentage`, but not both.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetMaxConcurrencyCount?: Value<number>;
  /**
   * One or more AWS Regions where the provisioned product will be available.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * The specified Regions should be within the list of Regions from the `STACKSET` constraint. To get the list of Regions in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation.
   *
   * If no values are specified, the default value is all Regions from the `STACKSET` constraint.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetRegions?: List<Value<string>>;
  /**
   * Determines what action AWS Service Catalog performs to a stack set or a stack instance represented by the provisioned product. The default value is `UPDATE` if nothing is specified.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * CREATE
   *
   * Creates a new stack instance in the stack set represented by the provisioned product. In this case, only new stack instances are created based on accounts and Regions; if new ProductId or ProvisioningArtifactID are passed, they will be ignored.
   *
   * UPDATE
   *
   * Updates the stack set represented by the provisioned product and also its stack instances.
   *
   * DELETE
   *
   * Deletes a stack instance in the stack set represented by the provisioned product.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CREATE | DELETE | UPDATE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetOperationType?: Value<string>;
  /**
   * The percentage of accounts, per Region, for which this stack operation can fail before AWS Service Catalog stops the operation in that Region. If the operation is stopped in a Region, AWS Service Catalog doesn't attempt the operation in any subsequent Regions.
   *
   * When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number.
   *
   * Applicable only to a `CFN_STACKSET` provisioned product type.
   *
   * Conditional: You must specify either `StackSetFailureToleranceCount` or `StackSetFailureTolerancePercentage`, but not both.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetFailureTolerancePercentage?: Value<number>;
}
export interface ServiceCatalogCloudFormationProvisionedProductProperties {
  /**
   * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use [ListLaunchPaths](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html).
   *
   * You must provide the name or ID, but not both.
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
  PathId?: Value<string>;
  /**
   * Parameters specified by the administrator that are required for provisioning the product.
   *
   * _Required_: No
   *
   * _Type_: List of [ProvisioningParameter](aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisioningParameters?: List<ServiceCatalogCloudFormationProvisionedProductProvisioningParameter>;
  /**
   * StackSet preferences that are required for provisioning the product or updating a provisioned product.
   *
   * _Required_: No
   *
   * _Type_: [ProvisioningPreferences](aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisioningPreferences?: ServiceCatalogCloudFormationProvisionedProductProvisioningPreferences;
  /**
   * The name of the Service Catalog product.
   *
   * Each time a stack is created or updated, if `ProductName` is provided it will successfully resolve to `ProductId` as long as only one product exists in the account or Region with that `ProductName`.
   *
   * You must specify either the name or the ID of the product, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9._-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProductName?: Value<string>;
  /**
   * The name of the provisioning artifact (also known as a version) for the product. This name must be unique for the product.
   *
   * You must specify either the name or the ID of the provisioning artifact, but not both. You must also specify either the name or the ID of the product, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Maximum_: `8192`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisioningArtifactName?: Value<string>;
  /**
   * Passed to AWS CloudFormation. The SNS topic ARNs to which to publish stack-related events.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NotificationArns?: List<Value<string>>;
  /**
   * The language code.
   */
  AcceptLanguage?: Value<string>;
  /**
   * The product identifier.
   *
   * You must specify either the ID or the name of the product, but not both.
   *
   * _Required_: Conditional
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
  ProductId?: Value<string>;
  /**
   * The name of the path. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use [ListLaunchPaths](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html).
   *
   * You must provide the name or ID, but not both.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathName?: Value<string>;
  /**
   * One or more tags.
   *
   * Requires the provisioned product to have an [ResourceUpdateConstraint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-resourceupdateconstraint.html) resource with `TagUpdatesOnProvisionedProduct` set to `ALLOWED` to allow tag updates. If `RESOURCE_UPDATE` constraint is not present, tags updates are ignored.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A user-friendly name for the provisioned product. This value must be unique for the AWS account and cannot be updated after the product is provisioned.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9._-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProvisionedProductName?: Value<string>;
  /**
   * The identifier of the provisioning artifact (also known as a version).
   *
   * You must specify either the ID or the name of the provisioning artifact, but not both.
   *
   * _Required_: Conditional
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
  ProvisioningArtifactId?: Value<string>;
}

/**
 * Provisions the specified product.
 *
 * A provisioned product is a resourced instance of a product. For example, provisioning a product based on a AWS CloudFormation template launches a AWS CloudFormation stack and its underlying resources. You can check the status of this request using [DescribeRecord](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeRecord.html).
 *
 * If the request contains a tag key with an empty list of values, there is a tag conflict for that key. Do not include conflicted keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[_N_]:_Value_".
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html}
 */
export interface ServiceCatalogCloudFormationProvisionedProductResource {
  Type: 'AWS::ServiceCatalog::CloudFormationProvisionedProduct';
  Properties: ServiceCatalogCloudFormationProvisionedProductProperties;
}
