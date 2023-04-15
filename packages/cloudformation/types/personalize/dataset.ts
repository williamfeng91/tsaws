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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Describes the data source that contains the data to upload to a dataset.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasource.html}
 **/
export interface PersonalizeDatasetDataSource {
  /**
   * The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. For example:
   *
   * `s3://bucket-name/folder-name/`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `(s3|http|https)://.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLocation?: Value<string>;
}

/**
 * Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see [CreateDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html).
 *
 * A dataset import job can be in one of the following states:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-dataset-datasetimportjob.html}
 **/
export interface PersonalizeDatasetDatasetImportJob {
  /**
   * The Amazon Resource Name (ARN) of the dataset that receives the imported data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):personalize:.*:.*:.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetArn?: Value<string>;
  /**
   * The name of the import job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-_]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobName?: Value<string>;
  /**
   * The ARN of the dataset import job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):personalize:.*:.*:.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetImportJobArn?: Value<string>;
  /**
   * The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):personalize:.*:.*:.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * The Amazon S3 bucket that contains the training data to import.
   *
   * _Required_: No
   *
   * _Type_: [DataSource](aws-properties-personalize-dataset-datasource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSource?: PersonalizeDatasetDataSource;
}
export interface PersonalizeDatasetProperties {
  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):personalize:.*:.*:.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatasetGroupArn: Value<string>;
  /**
   * One of the following values:
   */
  DatasetType: Value<string>;
  /**
   * Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset.
   *
   * _Required_: No
   *
   * _Type_: [DatasetImportJob](aws-properties-personalize-dataset-datasetimportjob.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetImportJob?: PersonalizeDatasetDatasetImportJob;
  /**
   * The ARN of the associated schema.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):personalize:.*:.*:.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SchemaArn: Value<string>;
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
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates an empty dataset and adds it to the specified dataset group. Use [CreateDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html) to import your training data to a dataset.
 *
 * There are three types of datasets:
 *
 * Each dataset type has an associated schema with required field types. Only the `Interactions` dataset is required in order to train a model (also referred to as creating a solution).
 *
 * A dataset can be in one of the following states:
 *
 * To get the status of the dataset, call [DescribeDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html).
 *
 * **Related APIs**
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html}
 */
export interface PersonalizeDatasetResource {
  Type: 'AWS::Personalize::Dataset';
  Properties: PersonalizeDatasetProperties;
}
