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

export interface PersonalizeDatasetGroupProperties {
  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key used to encrypt the datasets.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws.*:kms:.*:[0-9]{12}:key/.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The domain of a Domain dataset group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ECOMMERCE | VIDEO_ON_DEMAND`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Domain?: Value<string>;
  /**
   * The ARN of the IAM role that has permissions to create the dataset group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:([a-zd-]+):iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn?: Value<string>;
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
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling [CreateDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html). You then create a dataset and add it to a dataset group by calling [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html). The dataset group is used to create and train a solution by calling [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html). A dataset group can contain only one of each type of dataset.
 *
 * You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datasetgroup.html}
 */
export interface PersonalizeDatasetGroupResource {
  Type: 'AWS::Personalize::DatasetGroup';
  Properties: PersonalizeDatasetGroupProperties;
}
