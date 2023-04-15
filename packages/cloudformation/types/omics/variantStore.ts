/**
 * Supported regions:
 * - ap-southeast-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Server-side encryption (SSE) settings for a store.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-sseconfig.html}
 **/
export interface OmicsVariantStoreSseConfig {
  /**
   * The encryption type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `KMS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * An encryption key ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*arn:([^: ]*):([^: ]*):([^: ]*):([0-9]{12}):([^: ]*).*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyArn?: Value<string>;
}

/**
 * The read set's genome reference ARN.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-referenceitem.html}
 **/
export interface OmicsVariantStoreReferenceItem {
  /**
   * The reference's ARN.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReferenceArn: Value<string>;
}
export interface OmicsVariantStoreProperties {
  /**
   * A description for the store.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The genome reference for the store's variants.
   *
   * _Required_: Yes
   *
   * _Type_: [ReferenceItem](aws-properties-omics-variantstore-referenceitem.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Reference: OmicsVariantStoreReferenceItem;
  /**
   * Server-side encryption (SSE) settings for the store.
   *
   * _Required_: No
   *
   * _Type_: [SseConfig](aws-properties-omics-variantstore-sseconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SseConfig?: OmicsVariantStoreSseConfig;
  /**
   * Tags for the store.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * A name for the store.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Create a store for variant data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html}
 */
export interface OmicsVariantStoreResource {
  Type: 'AWS::Omics::VariantStore';
  Properties: OmicsVariantStoreProperties;
}
