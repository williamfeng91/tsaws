/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Defines the fields of a dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-schema.html}
 **/
export interface ForecastDatasetSchema {
  /**
   * An array of attributes specifying the name and type of each field in a dataset.
   *
   * _Required_: No
   *
   * _Type_: List of [AttributesItems](aws-properties-forecast-dataset-attributesitems.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: List<ForecastDatasetAttributesItems>;
}

/**
 * An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-encryptionconfig.html}
 **/
export interface ForecastDatasetEncryptionConfig {
  /**
   * The Amazon Resource Name (ARN) of the KMS key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:aws:kms:.*:key/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.
   *
   * Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an `InvalidInputException` error.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):forecast:.*:.*:.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * The `TagsItems` property type specifies Property description not available. for an [AWS::Forecast::Dataset](aws-resource-forecast-dataset.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-tagsitems.html}
 **/
export interface ForecastDatasetTagsItems {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * The `AttributesItems` property type specifies Property description not available. for an [AWS::Forecast::Dataset](aws-resource-forecast-dataset.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-forecast-dataset-attributesitems.html}
 **/
export interface ForecastDatasetAttributesItems {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeType?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeName?: Value<string>;
}
export interface ForecastDatasetProperties {
  /**
   * The frequency of data collection. This parameter is required for RELATED_TIME_SERIES datasets.
   *
   * Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:
   */
  DataFrequency?: Value<string>;
  /**
   * The name of the dataset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatasetName: Value<string>;
  /**
   * The schema for the dataset. The schema attributes and their order must match the fields in your data. The dataset `Domain` and `DatasetType` that you choose determine the minimum required fields in your training data. For information about the required fields for a specific dataset domain and type, see [Dataset Domains and Dataset Types](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-domains-ds-types.html).
   *
   * _Required_: Yes
   *
   * _Type_: [Schema](aws-properties-forecast-dataset-schema.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schema: ForecastDatasetSchema;
  /**
   * The dataset type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ITEM_METADATA | RELATED_TIME_SERIES | TARGET_TIME_SERIES`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetType: Value<string>;
  /**
   * The domain associated with the dataset.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CUSTOM | EC2_CAPACITY | INVENTORY_PLANNING | METRICS | RETAIL | WEB_TRAFFIC | WORK_FORCE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Domain: Value<string>;
  /**
   * A Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfig](aws-properties-forecast-dataset-encryptionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfig?: ForecastDatasetEncryptionConfig;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [TagsItems](aws-properties-forecast-dataset-tagsitems.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ForecastDatasetTagsItems>;
}

/**
 * Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:
 *
 * After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see [Importing datasets](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
 *
 * To get a list of all your datasets, use the [ListDatasets](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html) operation.
 *
 * For example Forecast datasets, see the [Amazon Forecast Sample GitHub repository](https://github.com/aws-samples/amazon-forecast-samples).
 *
 * **Note**
 *
 * The `Status` of a dataset must be `ACTIVE` before you can import training data. Use the [DescribeDataset](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html) operation to get the status.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html}
 */
export interface ForecastDatasetResource {
  Type: 'AWS::Forecast::Dataset';
  Properties: ForecastDatasetProperties;
}
