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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-sseconfig.html}
 **/
export interface OmicsAnnotationStoreSseConfig {
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
 * The store's file parsing options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-storeoptions.html}
 **/
export interface OmicsAnnotationStoreStoreOptions {
  /**
   * Formatting options for a TSV file.
   *
   * _Required_: Yes
   *
   * _Type_: [TsvStoreOptions](aws-properties-omics-annotationstore-tsvstoreoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TsvStoreOptions: OmicsAnnotationStoreTsvStoreOptions;
}

/**
 * A genome reference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-referenceitem.html}
 **/
export interface OmicsAnnotationStoreReferenceItem {
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

/**
 * The store's parsing options.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-annotationstore-tsvstoreoptions.html}
 **/
export interface OmicsAnnotationStoreTsvStoreOptions {
  /**
   * The schema of an annotation store.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Schema?: { [key: string]: any };
  /**
   * The store's header key to column name mapping.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FormatToHeader?: { [key: string]: Value<string> };
  /**
   * The store's annotation type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AnnotationType?: Value<string>;
}
export interface OmicsAnnotationStoreProperties {
  /**
   * The annotation file format of the store.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StoreFormat: Value<string>;
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
   * The genome reference for the store's annotations.
   *
   * _Required_: No
   *
   * _Type_: [ReferenceItem](aws-properties-omics-annotationstore-referenceitem.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Reference?: OmicsAnnotationStoreReferenceItem;
  /**
   * The store's server-side encryption (SSE) settings.
   *
   * _Required_: No
   *
   * _Type_: [SseConfig](aws-properties-omics-annotationstore-sseconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SseConfig?: OmicsAnnotationStoreSseConfig;
  /**
   * File parsing options for the annotation store.
   *
   * _Required_: No
   *
   * _Type_: [StoreOptions](aws-properties-omics-annotationstore-storeoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StoreOptions?: OmicsAnnotationStoreStoreOptions;
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
   * The name of the Annotation Store.
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
 * Creates an annotation store.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html}
 */
export interface OmicsAnnotationStoreResource {
  Type: 'AWS::Omics::AnnotationStore';
  Properties: OmicsAnnotationStoreProperties;
}
