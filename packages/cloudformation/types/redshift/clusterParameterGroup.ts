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
 * Describes a parameter in a cluster parameter group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clusterparametergroup-parameter.html}
 **/
export interface RedshiftClusterParameterGroupParameter {
  /**
   * The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValue: Value<string>;
  /**
   * The name of the parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName: Value<string>;
}
export interface RedshiftClusterParameterGroupProperties {
  /**
   * The description of the parameter group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description: Value<string>;
  /**
   * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
   *
   * For each parameter to be modified, you must supply at least the parameter name and parameter value; other name-value pairs of the parameter are optional.
   *
   * For the workload management (WLM) configuration, you must supply all the name-value pairs in the wlm_json_configuration parameter.
   *
   * _Required_: No
   *
   * _Type_: List of [Parameter](aws-properties-redshift-clusterparametergroup-parameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: List<RedshiftClusterParameterGroupParameter>;
  /**
   * The name of the cluster parameter group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ParameterGroupName?: Value<string>;
  /**
   * The name of the cluster parameter group family that this cluster parameter group is compatible with. You can create a custom parameter group and then associate your cluster with it. For more information, see [Amazon Redshift parameter groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ParameterGroupFamily: Value<string>;
  /**
   * The list of tags for the cluster parameter group.
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
 * Describes a parameter group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html}
 */
export interface RedshiftClusterParameterGroupResource {
  Type: 'AWS::Redshift::ClusterParameterGroup';
  Properties: RedshiftClusterParameterGroupProperties;
}
