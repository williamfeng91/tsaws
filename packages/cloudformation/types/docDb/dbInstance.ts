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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface DocDBDBInstanceProperties {
  /**
   * The compute and memory capacity of the instance; for example, `db.m4.large`. If you change the class of an instance there can be some interruption in the cluster's service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBInstanceClass: Value<string>;
  /**
   * The identifier of the cluster that the instance will belong to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBClusterIdentifier: Value<string>;
  /**
   * The Amazon EC2 Availability Zone that the instance is created in.
   *
   * Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.
   *
   * Example: `us-east-1d`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone?: Value<string>;
  /**
   * The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.
   *
   * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * Constraints: Minimum 30-minute window.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * A value that indicates whether to enable Performance Insights for the DB Instance. For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnablePerformanceInsights?: Value<boolean>;
  /**
   * This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoMinorVersionUpgrade?: Value<boolean>;
  /**
   * The instance identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   */
  DBInstanceIdentifier?: Value<string>;
  /**
   * The tags to be assigned to the instance. You can assign up to 10 tags to an instance.
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
 * The `AWS::DocDB::DBInstance` Amazon DocumentDB (with MongoDB compatibility) resource describes a DBInstance. For more information, see [DBInstance](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBInstance.html) in the _Amazon DocumentDB Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbinstance.html}
 */
export interface DocDBDBInstanceResource {
  Type: 'AWS::DocDB::DBInstance';
  Properties: DocDBDBInstanceProperties;
}
