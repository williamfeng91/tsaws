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

export interface RDSDBParameterGroupProperties {
  /**
   * The name of the DB parameter group.
   *
   * Constraints:
   */
  DBParameterGroupName?: Value<string>;
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
   * An array of parameter names and values for the parameter update. At least one parameter name and value must be supplied. Subsequent arguments are optional.
   *
   * For more information about DB parameters and DB parameter groups for Amazon RDS DB engines, see [Working with DB Parameter Groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the _Amazon RDS User Guide_.
   *
   * For more information about DB cluster and DB instance parameters and parameter groups for Amazon Aurora DB engines, see [ Working with DB Parameter Groups and DB Cluster Parameter Groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the _Amazon Aurora User Guide_.
   *
   * AWS CloudFormation doesn't support specifying an apply method for each individual parameter. The default apply method for each parameter is used.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: any };
  /**
   * The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a DB engine and engine version compatible with that DB parameter group family.
   *
   * The DB parameter group family can't be changed when updating a DB parameter group.
   *
   * To list all of the available parameter group families, use the following command:
   *
   * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily"`
   *
   * The output contains duplicates.
   *
   * For more information, see `[CreateDBParameterGroup](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBParameterGroup.html)`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Family: Value<string>;
  /**
   * An optional array of key-value pairs to apply to this DB parameter group.
   *
   * Currently, this is the only property that supports drift detection.
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
 * The `AWS::RDS::DBParameterGroup` resource creates a custom parameter group for an RDS database family.
 *
 * This type can be declared in a template and referenced in the `DBParameterGroupName` property of an ` [AWS::RDS::DBInstance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html)` resource.
 *
 * For information about configuring parameters for Amazon RDS DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the _Amazon RDS User Guide_.
 *
 * For information about configuring parameters for Amazon Aurora DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the _Amazon Aurora User Guide_.
 *
 * **Note**
 *
 * Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html}
 */
export interface RDSDBParameterGroupResource {
  Type: 'AWS::RDS::DBParameterGroup';
  Properties: RDSDBParameterGroupProperties;
}
