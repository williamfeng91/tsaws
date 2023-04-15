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

export interface ForecastDatasetGroupProperties {
  /**
   * An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetArns?: List<Value<string>>;
  /**
   * The name of the dataset group.
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
  DatasetGroupName: Value<string>;
  /**
   * The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the `Domain` parameter of the [CreateDataset](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html) operation must match.
   *
   * The `Domain` and `DatasetType` that you choose determine the fields that must be present in training data that you import to a dataset. For example, if you choose the `RETAIL` domain and `TARGET_TIME_SERIES` as the `DatasetType`, Amazon Forecast requires that `item_id`, `timestamp`, and `demand` fields are present in your data. For more information, see [Dataset groups](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
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
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the [UpdateDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html) operation.
 *
 * After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see [Dataset groups](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
 *
 * To get a list of all your datasets groups, use the [ListDatasetGroups](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html) operation.
 *
 * **Note**
 *
 * The `Status` of a dataset group must be `ACTIVE` before you can use the dataset group to create a predictor. To get the status, use the [DescribeDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html) operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-datasetgroup.html}
 */
export interface ForecastDatasetGroupResource {
  Type: 'AWS::Forecast::DatasetGroup';
  Properties: ForecastDatasetGroupProperties;
}
