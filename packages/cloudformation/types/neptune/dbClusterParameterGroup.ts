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

export interface NeptuneDBClusterParameterGroupProperties {
  /**
   * Provides the customer-specified description for this DB cluster parameter group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description: Value<string>;
  /**
   * The parameters to set for this DB cluster parameter group.
   *
   * The parameters are expressed as a JSON object consisting of key-value pairs.
   *
   * If you update the parameters, some interruption may occur depending on which parameters you update.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters: { [key: string]: any };
  /**
   * Must be `neptune1` for engine versions prior to [1.2.0.0](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases-1.2.0.0.html), or `neptune1.2` for engine version `1.2.0.0` and higher.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Family: Value<string>;
  /**
   * The tags that you want to attach to this parameter group.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Provides the name of the DB cluster parameter group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::Neptune::DBClusterParameterGroup` resource creates a new Amazon Neptune DB cluster parameter group.
 *
 * **Note**
 *
 * Applying a parameter group to a DB cluster might require instances to reboot, resulting in a database outage while the instances reboot.
 *
 * **Note**
 *
 * If you provide a custom `DBClusterParameterGroup` that you associate with the `DBCluster`, it is best to specify an `EngineVersion` property in the `DBCluster`. That `EngineVersion` needs to be compatible with the value of the `Family` property in the `DBClusterParameterGroup`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html}
 */
export interface NeptuneDBClusterParameterGroupResource {
  Type: 'AWS::Neptune::DBClusterParameterGroup';
  Properties: NeptuneDBClusterParameterGroupProperties;
}
