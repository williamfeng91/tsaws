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

export interface NeptuneDBInstanceProperties {
  /**
   * The name of an existing DB parameter group or a reference to an AWS::Neptune::DBParameterGroup resource created in the template. If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBParameterGroupName?: Value<string>;
  /**
   * Contains the name of the compute and memory capacity class of the DB instance.
   *
   * If you update this property, some interruptions may occur.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  DBInstanceClass: Value<string>;
  /**
   * Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.
   *
   * When you change this parameter for an existing DB cluster, CloudFormation will replace your existing DB cluster with a new, empty one that uses the engine version you specified.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowMajorVersionUpgrade?: Value<boolean>;
  /**
   * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBClusterIdentifier?: Value<string>;
  /**
   * Specifies the name of the Availability Zone the DB instance is located in.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone?: Value<string>;
  /**
   * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * Indicates that minor version patches are applied automatically.
   *
   * When updating this property, some interruptions may occur.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoMinorVersionUpgrade?: Value<boolean>;
  /**
   * A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new virtual private cloud (VPC).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBSubnetGroupName?: Value<string>;
  /**
   * Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBInstanceIdentifier?: Value<string>;
  /**
   * This parameter is not supported.
   *
   * `AWS::Neptune::DBInstance` does not support restoring from snapshots.
   *
   * `AWS::Neptune::DBCluster` does support restoring from snapshots.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBSnapshotIdentifier?: Value<string>;
  /**
   * An arbitrary set of tags (key-value pairs) for this DB instance.
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
 * The `AWS::Neptune::DBInstance` type creates an Amazon Neptune DB instance.
 *
 * **Updating DB Instances**
 *
 * You can set a deletion policy for your DB instance to control how AWS CloudFormation handles the instance when the stack is deleted. For Neptune DB instances, you can choose to _retain_ the instance, to _delete_ the instance, or to _create a snapshot_ of the instance. The default AWS CloudFormation behavior depends on the `DBClusterIdentifier` property:
 *
 * **Important**
 *
 * If a DB instance is deleted or replaced during an update, AWS CloudFormation deletes all automated snapshots. However, it retains manual DB snapshots. During an update that requires replacement, you can apply a stack policy to prevent DB instances from being replaced.
 *
 * When properties labeled _Update requires: Replacement_ are updated, AWS CloudFormation first creates a replacement DB instance, changes references from other dependent resources to point to the replacement DB instance, and finally deletes the old DB instance.
 *
 * **Important**
 *
 * We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB instance. To preserve your data, perform the following procedure:
 *
 * Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.
 *
 * Create a snapshot of the DB instance.
 *
 * If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the `DBSnapshotIdentifier` property with the ID of the DB snapshot that you want to use.
 *
 * Update the stack.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html}
 */
export interface NeptuneDBInstanceResource {
  Type: 'AWS::Neptune::DBInstance';
  Properties: NeptuneDBInstanceProperties;
}
