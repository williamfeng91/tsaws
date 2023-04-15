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

export interface NeptuneDBParameterGroupProperties {
  /**
   * Provides the customer-specified description for this DB parameter group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description: Value<string>;
  /**
   * The parameters to set for this DB parameter group.
   *
   * The parameters are expressed as a JSON object consisting of key-value pairs.
   *
   * Changes to dynamic parameters are applied immediately. During an update, if you have static parameters (whether they were changed or not), it triggers AWS CloudFormation to reboot the associated DB instance without failover.
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
   * Provides the name of the DB parameter group.
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
 * `AWS::Neptune::DBParameterGroup` creates a new DB parameter group. This type can be declared in a template and referenced in the `DBParameterGroupName` parameter of `AWS::Neptune::DBInstance`.
 *
 * **Note**
 *
 * Applying a parameter group to a DB instance might require the instance to reboot, resulting in a database outage for the duration of the reboot.
 *
 * **Note**
 *
 * If you provide a custom `DBParameterGroup` that you associate with `DBInstance`, it is best to specify an `EngineVersion` property in `DBCluster`. That `EngineVersion` needs to be compatible with the value of the `Family` property in the `DBParameterGroup`.
 *
 * A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using _ModifyDBParameterGroup_. Once you've created a DB parameter group, you need to associate it with your DB instance using _ModifyDBInstance_. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.
 *
 * **Important**
 *
 * After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the `character_set_database` parameter. You can use the _Parameter Groups_ option of the Amazon Neptune console or the _DescribeDBParameters_ command to verify that your DB parameter group has been created or modified.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html}
 */
export interface NeptuneDBParameterGroupResource {
  Type: 'AWS::Neptune::DBParameterGroup';
  Properties: NeptuneDBParameterGroupProperties;
}
