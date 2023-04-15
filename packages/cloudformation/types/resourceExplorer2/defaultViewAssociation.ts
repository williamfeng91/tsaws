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

export interface ResourceExplorer2DefaultViewAssociationProperties {
  /**
   * The ARN of the view to set as the default for the AWS Region and AWS account in which you call this operation. The specified view must already exist in the specified Region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ViewArn: Value<string>;
}

/**
 * Sets the specified view as the default for the AWS Region in which you call this operation. If a user makes a search query that doesn't explicitly specify the view to use, Resource Explorer chooses this default view automatically for searches performed in this AWS Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html}
 */
export interface ResourceExplorer2DefaultViewAssociationResource {
  Type: 'AWS::ResourceExplorer2::DefaultViewAssociation';
  Properties: ResourceExplorer2DefaultViewAssociationProperties;
}
