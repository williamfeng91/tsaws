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
 * Specifies a single tag key and optional values that you can use to specify membership in a tag-based group. An AWS resource that doesn't have a matching tag key and value is rejected as a member of the group.
 *
 * A `TagFilter` object includes two properties: `Key` (a string) and `Values` (a list of strings). Only resources in the account that are tagged with a matching key-value pair are members of the group. The `Values` property of `TagFilter` is optional, but specifying it narrows the query results.
 *
 * As an example, suppose the `TagFilters` string is `[{"Key": "Stage", "Values": ["Test", "Beta"]}, {"Key": "Storage"}]`. In this case, only resources with all of the following tags are members of the group:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-tagfilter.html}
 **/
export interface ResourceGroupsGroupTagFilter {
  /**
   * A list of tag values that can be included in the tag-based resource group. This is optional. If you don't specify a value or values for a key, then an AWS resource with any value for that key is a member.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
  /**
   * A string that defines a tag key. Only resources in the account that are tagged with a specified tag key are members of the tag-based resource group.
   *
   * This field is required when the `ResourceQuery` structure's `Type` property is `TAG_FILTERS_1_0`. You must specify at least one tag key.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * Specifies details within a `ResourceQuery` structure that determines the membership of the resource group. The contents required in the `Query` structure are determined by the `Type` property of the containing `ResourceQuery` structure.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-query.html}
 **/
export interface ResourceGroupsGroupQuery {
  /**
   * A list of key-value pair objects that limit which resources can be members of the resource group. This property is required when the `ResourceQuery.Type` property is `TAG_FILTERS_1_0`.
   *
   * A resource must have a tag that matches every filter that is provided in the `TagFilters` list.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [TagFilter](aws-properties-resourcegroups-group-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagFilters?: List<ResourceGroupsGroupTagFilter>;
  /**
   * Specifies limits to the types of resources that can be included in the resource group. For example, if `ResourceTypeFilters` is `["AWS::EC2::Instance", "AWS::DynamoDB::Table"]`, only EC2 instances or DynamoDB tables can be members of this resource group. The default value is `["AWS::AllSupported"]`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTypeFilters?: List<Value<string>>;
  /**
   * Specifies the ARN of a CloudFormation stack. All supported resources of the CloudFormation stack are members of the resource group. If you don't specify an ARN, this parameter defaults to the current stack that you are defining, which means that all the resources of the current stack are grouped.
   *
   * You can specify a value for `StackIdentifier` only when the `ResourceQuery.Type` property is `CLOUDFORMATION_STACK_1_0.`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackIdentifier?: Value<string>;
}

/**
 * One parameter for a group configuration item. For details about service configurations and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html) in the _AWS Resource Groups User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationparameter.html}
 **/
export interface ResourceGroupsGroupConfigurationParameter {
  /**
   * The value or values to be used for the specified parameter. For the list of values you can use with each parameter, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
  /**
   * The name of the group configuration parameter. For the list of parameters that you can use with each configuration item type, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types) in the _AWS Resource Groups User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * One of the items in the service configuration assigned to a resource group. A service configuration can consist of one or more items. For details service configurations and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html) in the _AWS Resource Groups User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationitem.html}
 **/
export interface ResourceGroupsGroupConfigurationItem {
  /**
   * Specifies the type of configuration item. Each item must have a unique value for type. For the list of the types that you can specify for a configuration item, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types) in the _AWS Resource Groups User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * A collection of parameters for this configuration item. For the list of parameters that you can use with each configuration item `Type`, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types) in the _AWS Resource Groups User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [ConfigurationParameter](aws-properties-resourcegroups-group-configurationparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: List<ResourceGroupsGroupConfigurationParameter>;
}

/**
 * The query used to dynamically define the members of a group. For more information about how to construct a query, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-resourcequery.html}
 **/
export interface ResourceGroupsGroupResourceQuery {
  /**
   * Specifies the type of resource query that determines this group's membership. There are two valid query types:
   */
  Type?: Value<string>;
  /**
   * The query that defines the membership of the group. This is a structure with properties that depend on the `Type`.
   *
   * The `Query` structure must be included in the following scenarios:
   */
  Query?: ResourceGroupsGroupQuery;
}
export interface ResourceGroupsGroupProperties {
  /**
   * The description of the resource group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The service configuration currently associated with the resource group and in effect for the members of the resource group. A `Configuration` consists of one or more `ConfigurationItem` entries. For information about service configurations for resource groups and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html) in the _AWS Resource Groups User Guide_.
   *
   * You can include either a `Configuration` or a `ResourceQuery`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [ConfigurationItem](aws-properties-resourcegroups-group-configurationitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration?: List<ResourceGroupsGroupConfigurationItem>;
  /**
   * The resource query structure that is used to dynamically determine which AWS resources are members of the associated resource group. For more information about queries and how to construct them, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html) in the _AWS Resource Groups User Guide_
   */
  ResourceQuery?: ResourceGroupsGroupResourceQuery;
  /**
   * A list of the Amazon Resource Names (ARNs) of AWS resources that you want to add to the specified group.
   */
  Resources?: List<Value<string>>;
  /**
   * The tag key and value pairs that are attached to the resource group.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of a resource group. The name must be unique within the AWS Region in which you create the resource. To create multiple resource groups based on the same CloudFormation stack, you must generate unique names for each.
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
 * Creates a resource group with the specified name and description. You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/getting_started-query.html) in the _ AWS Resource Groups User Guide_. For more information about service-linked groups and service configurations, see [Service configurations for Resource Groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html}
 */
export interface ResourceGroupsGroupResource {
  Type: 'AWS::ResourceGroups::Group';
  Properties: ResourceGroupsGroupProperties;
}
