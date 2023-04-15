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
 * An object with a `FilterString` that specifies which resources to include in the results of queries made using this view.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-view-filters.html}
 **/
export interface ResourceExplorer2ViewFilters {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterString: Value<string>;
}

/**
 * Information about an additional property that describes a resource, that you can optionally include in a view.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-view-includedproperty.html}
 **/
export interface ResourceExplorer2ViewIncludedProperty {
  /**
   * The name of the property that is included in this view.
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
  Name: Value<string>;
}
export interface ResourceExplorer2ViewProperties {
  /**
   * An array of strings that include search keywords, prefixes, and operators that filter the results that are returned for queries made using this view. When you use this view in a [Search](https://docs.aws.amazon.com/resource-explorer/latest/APIReference/API_Search.html) operation, the filter string is combined with the search's `QueryString` parameter using a logical `AND` operator.
   *
   * For information about the supported syntax, see [Search query reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html) in the _AWS Resource Explorer User Guide_.
   *
   * This query string in the context of this operation supports only [filter prefixes](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-filters) with optional [operators](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html#query-syntax-operators). It doesn't support free-form text. For example, the string `region:us* service:ec2 -tag:stage=prod` includes all Amazon EC2 resources in any AWS Region that begin with the letters `us` and are _not_ tagged with a key `Stage` that has the value `prod`.
   *
   * _Required_: No
   *
   * _Type_: [Filters](aws-properties-resourceexplorer2-view-filters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters?: ResourceExplorer2ViewFilters;
  /**
   * A list of fields that provide additional information about the view.
   *
   * _Required_: No
   *
   * _Type_: List of [IncludedProperty](aws-properties-resourceexplorer2-view-includedproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludedProperties?: List<ResourceExplorer2ViewIncludedProperty>;
  /**
   * Tag key and value pairs that are attached to the view.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the new view.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9-]{1,64}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ViewName: Value<string>;
}

/**
 * Creates a view that users can query by using the [Search](https://docs.aws.amazon.com/resource-explorer/latest/APIReference/API_Search.html) operation. Results from queries that you make using this view include only resources that match the view's `Filters`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html}
 */
export interface ResourceExplorer2ViewResource {
  Type: 'AWS::ResourceExplorer2::View';
  Properties: ResourceExplorer2ViewProperties;
}
