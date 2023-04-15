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

export interface DMSReplicationTaskProperties {
  /**
   * Overall settings for the task, in JSON format. For more information, see [ Specifying Task Settings for AWS Database Migration Service Tasks](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationTaskSettings?: Value<string>;
  /**
   * Indicates when you want a change data capture (CDC) operation to start. Use either `CdcStartPosition` or `CdcStartTime` to specify when you want a CDC operation to start. Specifying both values results in an error.
   *
   * The value can be in date, checkpoint, log sequence number (LSN), or system change number (SCN) format.
   *
   * Here is a date example: `--cdc-start-position "2018-03-08T12:12:12"`
   *
   * Here is a checkpoint example: `--cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"`
   *
   * Here is an LSN example: `--cdc-start-position “mysql-bin-changelog.000024:373”`
   *
   * When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the `slotName` extra connection attribute to the name of this logical replication slot. For more information, see [ Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcStartPosition?: Value<string>;
  /**
   * Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.
   *
   * Here is a server time example: `--cdc-stop-position "server_time:2018-02-09T12:12:12"`
   *
   * Here is a commit time example: `--cdc-stop-position "commit_time: 2018-02-09T12:12:12"`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcStopPosition?: Value<string>;
  /**
   * The migration type. Valid values: `full-load` | `cdc` | `full-load-and-cdc`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `cdc | full-load | full-load-and-cdc`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MigrationType: Value<string>;
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetEndpointArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of a replication instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReplicationInstanceArn: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskData?: Value<string>;
  /**
   * Indicates the start time for a change data capture (CDC) operation.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcStartTime?: Value<number>;
  /**
   * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`.
   *
   * For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceIdentifier?: Value<string>;
  /**
   * The table mappings for the task, in JSON format. For more information, see [ Using Table Mapping to Specify Task Settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableMappings: Value<string>;
  /**
   * An identifier for the replication task.
   *
   * Constraints:
   */
  ReplicationTaskIdentifier?: Value<string>;
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceEndpointArn: Value<string>;
  /**
   * One or more tags to be assigned to the replication task.
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
 * The `AWS::DMS::ReplicationTask` resource creates an AWS DMS replication task.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationtask.html}
 */
export interface DMSReplicationTaskResource {
  Type: 'AWS::DMS::ReplicationTask';
  Properties: DMSReplicationTaskProperties;
}
