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

export interface ResourceExplorer2ResourceExplorer2IndexProperties {
  /**
   * Specifies the type of the index in this Region. For information about the aggregator index and how it differs from a local index, see [Turning on cross-Region search by creating an aggregator index](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html) in the _AWS Resource Explorer User Guide._.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AGGREGATOR | LOCAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The specified tags are attached to only the index created in this AWS Region. The tags don't attach to any of the resources listed in the index.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * Turns on Resource Explorer in the AWS Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the [Search](https://docs.aws.amazon.com/resource-explorer/latest/APIReference/API_Search.html) operation.
 *
 * You can create either a local index that returns search results from only the AWS Region in which the index exists, or you can create an aggregator index that returns search results from all AWS Regions in the AWS account.
 *
 * For more details about what happens when you turn on Resource Explorer in an AWS Region, see [Turning on Resource Explorer to index your resources in an AWS Region](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html) in the _AWS Resource Explorer User Guide._
 *
 * If this is the first AWS Region in which you've created an index for Resource Explorer, this operation also creates a service-linked role in your AWS account that allows Resource Explorer to search for your resources and populate the index.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-index.html}
 */
export interface ResourceExplorer2ResourceExplorer2IndexResource {
  Type: 'AWS::ResourceExplorer2::ResourceExplorer2Index';
  Properties: ResourceExplorer2ResourceExplorer2IndexProperties;
}
